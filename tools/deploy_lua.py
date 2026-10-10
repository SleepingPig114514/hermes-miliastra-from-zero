#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""deploy_lua.py — 千星真机「沙箱门禁 + 脚本部署」一条命令（runbook 第七步表·步5③）。

流程：
  ① 复跑 release 沙箱：node <release>/tools/sandbox/run_headless.mjs <脚本> --fuzz <ms> --json
     verdict=fail → 退出码 2，不部署（--skip-sandbox 可跳过，仅限纯搬运场景）
  ② 发现映射目录：--map-dir 指定；否则自动扫
     %USERPROFILE%/AppData/LocalLow/miHoYo/原神/BeyondLocal/<uid>/Beyond_Local_Save_Level/<id>/
     取**含 external_lua_file 且 mtime 最新**的子目录（防映射换号 1825→1826 类事故）
     ⚠ 同一个 BeyondLocal 下会有**多个 UID 目录**（游戏缓存的其他玩家），同一 UID 下也会有**多张图**。
       故本工具一律打印【目标身份 = UID / 地图ID / 存档大小 / 保存时间 / 脚本名】，
       **AI 必须把 UID 与地图ID 报给用户确认后**才算部署目标确定（用户看不到存档ID，只能靠 AI 列候选+指纹认）。
  ③ 部署：母本 → <映射目录>/external_lua_file/<同名>（--check 只比对哈希不写入）
  ④ 回读 sha256 比对，一致才报 DEPLOYED（防静默拷贝失败）

用法：
  python tools/deploy_lua.py projects/<名>/levelScript.lua [--check] [--skip-sandbox]
                                   [--map-dir PATH] [--uid UID] [--fuzz 3000]
                                   [--annotations <项目>/lua_out/annotations_sandbox.lua]
  · --map-dir 给**含 <地图ID>.gil 的那一级**（不是 external_lua_file）；层级不对直接报错退出 3。
  · --annotations 透传给沙箱门禁；**脚本兜底表已是真机索引的项目必须给**
    （否则门禁会因"真机有、release 沙箱未实现"的字段（showCursor/adaptiveFontSize 等）判 fail，
     而脚本本身是对的）。2026-10-11 加。
退出码：0=成功（--check 模式=哈希一致）/ 2=沙箱门禁 fail / 3=用法或目录问题 / 4=拷贝后哈希不一致
"""
import argparse
import datetime
import glob
import hashlib
import json
import os
import shutil
import subprocess
import sys
import time


def sha256(path):
    return hashlib.sha256(open(path, "rb").read()).hexdigest()


def workspace_root():
    return os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def human_time(ts):
    return datetime.datetime.fromtimestamp(ts).strftime("%Y-%m-%d %H:%M")


def _gil_path(map_dir):
    map_id = os.path.basename(str(map_dir).rstrip("\\/"))
    return os.path.join(map_dir, map_id + ".gil")


def _gil_mtime(map_dir):
    gil = _gil_path(map_dir)
    return os.path.getmtime(gil) if os.path.isfile(gil) else os.path.getmtime(map_dir)


def identity(map_dir, script_name=None):
    """目录身份指纹：UID / 地图ID / 存档大小 / 保存时间 / 已有脚本列表。
    多账号多存档时，AI 必须把 UID 与地图ID 报给用户确认（用户界面上看不到存档ID）。"""
    p = str(map_dir).rstrip("\\/")
    map_id = os.path.basename(p)
    uid = os.path.basename(os.path.dirname(os.path.dirname(p)))
    gil = _gil_path(p)
    lua_dir = os.path.join(p, "external_lua_file")
    scripts = sorted(f for f in os.listdir(lua_dir) if f.endswith(".lua")) if os.path.isdir(lua_dir) else []
    return {"uid": uid, "map_id": map_id,
            "gil_size": os.path.getsize(gil) if os.path.isfile(gil) else 0,
            "saved": human_time(_gil_mtime(p)), "scripts": scripts,
            "has_script": bool(script_name and script_name in scripts)}


def run_sandbox(script_abs, fuzz_ms, annotations=None):
    release = os.path.join(workspace_root(), "MiliastraAgent", "release")
    runner = os.path.join(release, "tools", "sandbox", "run_headless.mjs")
    if not os.path.isfile(runner):
        return None, f"找不到沙箱入口: {runner}"
    cmd = ["node", runner, script_abs, "--fuzz", str(fuzz_ms), "--json"]
    if annotations:
        a = os.path.abspath(annotations)
        if not os.path.isfile(a):
            return None, f"--annotations 文件不存在: {a}"
        cmd += ["--annotations", a]
    r = subprocess.run(cmd, cwd=release, capture_output=True, text=True,
                       encoding="utf-8", errors="replace")
    i = r.stdout.find("{")
    if i < 0:
        return None, f"沙箱输出无 JSON（exit {r.returncode}）: {r.stdout[:160]} {r.stderr[:160]}"
    try:
        return json.loads(r.stdout[i:]), None
    except json.JSONDecodeError as e:
        return None, f"沙箱 JSON 解析失败: {e}"


def find_map_dirs(uid=None):
    """返回全部映射目录候选（含 external_lua_file 的 Save_Level 子目录）。"""
    base = os.path.join(os.path.expanduser("~"), "AppData", "LocalLow",
                        "miHoYo", "原神", "BeyondLocal")
    if not os.path.isdir(base):
        return None, f"BeyondLocal 根不存在: {base}"
    pattern = os.path.join(base, uid or "*", "Beyond_Local_Save_Level", "*", "external_lua_file")
    cands = [os.path.dirname(p) for p in glob.glob(pattern) if os.path.isdir(p)]
    if not cands:
        return None, f"未找到含 external_lua_file 的映射目录（pattern: {pattern}）"
    return cands, "ok"


def find_map_dir(uid=None, script_name=None):
    """三段发现（2026-10-10 修正，手册 §五坑1）：
    ① 已含同名脚本的目录优先（更新场景，mtime 最新≠正确）
    ② 无同名 → mtime 最新（新项目首次部署）
    ③ 多候选歧义在 note 里列明，调用方应改用 --map-dir"""
    cands, note = find_map_dirs(uid)
    if not cands:
        return None, note
    with_script = [c for c in cands
                   if script_name and os.path.isfile(os.path.join(c, "external_lua_file", script_name))]
    if len(with_script) == 1:
        return with_script[0], "命中已含同名脚本的映射"
    if len(with_script) > 1:
        latest = max(with_script, key=os.path.getmtime)
        return latest, (f"⚠ {len(with_script)} 个映射均含同名脚本，取 mtime 最新；"
                        f"歧义请用 --map-dir 显式指定：{with_script}")
    latest = max(cands, key=os.path.getmtime)
    return latest, (f"无映射含同名脚本（视为首次部署），取 mtime 最新；"
                    f"候选 {len(cands)} 个，确认目标可用 --list")


def main():
    ap = argparse.ArgumentParser(description="千星真机脚本门禁+部署一条命令")
    ap.add_argument("script", help="母本 lua 脚本路径（工作区相对或绝对）")
    ap.add_argument("--check", action="store_true", help="只比对哈希，不写入")
    ap.add_argument("--skip-sandbox", action="store_true", help="跳过沙箱门禁（慎用）")
    ap.add_argument("--map-dir", help="显式指定映射目录（= 含 <地图ID>.gil 的那一级；不是 external_lua_file）")
    ap.add_argument("--list", action="store_true", help="只列出映射目录候选后退出")
    ap.add_argument("--uid", help="配合自动发现：限定 BeyondLocal 下 UID")
    ap.add_argument("--fuzz", type=int, default=3000, help="沙箱 fuzz 毫秒（默认 3000）")
    ap.add_argument("--annotations", help="透传给沙箱门禁的接口标注文件（脚本兜底表已是真机索引时必须给，"
                                          "如 <项目>/lua_out/annotations_sandbox.lua；不给则门禁遇未实现字段会 fail）")
    args = ap.parse_args()

    src = os.path.abspath(args.script)
    if not os.path.isfile(src):
        print(f"[错误] 母本不存在: {src}", file=sys.stderr)
        return 3

    # ⓪ 快速参数校验（放在任何耗时动作之前：--map-dir 必须是含 <地图ID>.gil 的那一级）
    #    传深一级（external_lua_file）时旧版会解析出 UID=Beyond_Local_Save_Level/地图ID=external_lua_file
    #    且不报错继续跑（2026-10-11 踩过），现在直接退 3 并给出正确层级。
    if args.map_dir and not args.list:
        md = os.path.abspath(args.map_dir)
        if not os.path.isfile(_gil_path(md)):
            base = os.path.basename(md.rstrip("\\/"))
            print(f"[错误] --map-dir 层级不对：{md} 下没有 {base}.gil", file=sys.stderr)
            if base == "external_lua_file":
                print(f"       它像是 external_lua_file，正确应传上一级：{os.path.dirname(md)}", file=sys.stderr)
            print("       正确形态：…\\BeyondLocal\\<UID>\\Beyond_Local_Save_Level\\<地图ID>"
                  "（用 --list 查看候选）", file=sys.stderr)
            return 3

    if args.list:
        cands, note = find_map_dirs(args.uid)
        if not cands:
            print(f"[错误] {note}", file=sys.stderr)
            return 3
        now = time.time()
        rows = sorted(cands, key=_gil_mtime, reverse=True)
        print(f"{'UID':<12} {'地图ID':<12} {'存档大小':>10}  保存时间         脚本")
        for idx, c in enumerate(rows):
            i = identity(c, os.path.basename(src))
            mark = "  ← 含同名脚本" if i["has_script"] else ""
            # 「最近保存」标记：刚新建/刚 Ctrl+S 的图一眼可见（用户不必知道地图ID）
            age_min = (now - _gil_mtime(c)) / 60.0
            fresh = ""
            if age_min < 10:
                fresh = "  ← 最近保存(<10min)"
            elif age_min < 60:
                fresh = "  ← 最近保存(<60min)"
            print(f"{i['uid']:<12} {i['map_id']:<12} {i['gil_size']:>8} B  {i['saved']}  "
                  f"{(', '.join(i['scripts']) or '(无脚本)')}{mark}{fresh}")
        print("⚠ 多账号 / 多存档时：AI 必须把【UID + 地图ID + 脚本名】报给用户确认后再动手。")
        print("   用户看不到存档ID（编辑器不显示）——AI 列这张表 + 指纹，用户认\"是我刚存的那张\"。")
        print("   用户刚新建图/刚 Ctrl+S 时，优先认带「最近保存」标记的那张。")
        return 0

    # ① 门禁
    if args.skip_sandbox:
        print("[门禁] 已跳过（--skip-sandbox）")
    else:
        if args.annotations:
            print(f"[门禁] 使用 annotations: {os.path.abspath(args.annotations)}")
        rep, err = run_sandbox(src, args.fuzz, args.annotations)
        if err:
            print(f"[门禁] {err}", file=sys.stderr)
            return 2
        c = rep.get("controls", {})
        print(f"[门禁] verdict={rep.get('verdict')} errors={len(rep.get('errors', []))} "
              f"unsupported={len(rep.get('unsupported', []))} neverActivated={c.get('neverActivated')} "
              f"created={c.get('created')} (fuzz {args.fuzz}ms)")
        if rep.get("verdict") == "fail":
            print("[门禁] 失败，不部署。看报告 errors/unsupported 修脚本。", file=sys.stderr)
            print("      若 unsupported 指向『控件方法 showCursor / adaptiveFontSize』这类"
                  "『真机有、release 沙箱未实现』的字段：不是脚本错，"
                  "给 --annotations <项目>/lua_out/annotations_sandbox.lua（内含关掉该字段的开关）再跑。",
                  file=sys.stderr)
            return 2

    # ② 映射目录（三段发现：同名脚本优先→mtime 最新→歧义提示 --map-dir）
    if args.map_dir:
        map_dir, note = os.path.abspath(args.map_dir), "显式指定"   # 层级已在⓪校验
    else:
        map_dir, note = find_map_dir(args.uid, os.path.basename(src))
    if not map_dir:
        print(f"[错误] {note}", file=sys.stderr)
        return 3
    print(f"[映射目录] {map_dir}  ({note})")
    ident = identity(map_dir, os.path.basename(src))
    _all = find_map_dirs(args.uid)[0] or []
    others = [c for c in _all if os.path.abspath(c) != os.path.abspath(map_dir)]
    print(f"[目标身份] UID={ident['uid']}  地图ID={ident['map_id']}  {ident['gil_size']} B  "
          f"保存={ident['saved']}  脚本={', '.join(ident['scripts']) or '(无)'}")
    if others:
        _o = [identity(c) for c in others]
        print(f"[其他候选 {len(others)} 个] " + " | ".join(
            f"{o['uid']}/{o['map_id']}（{o['saved']}，{o['gil_size']}B）" for o in _o))
    print("⚠ AI 必须把上面【UID + 地图ID】报给用户确认；不对就用 --uid / --map-dir 重新指定，")
    print("   或用 --list 列出全部候选（带指纹）让用户认。用户界面上看不到存档ID。")

    dst = os.path.join(map_dir, "external_lua_file", os.path.basename(src))
    src_hash = sha256(src)

    # ③④ 部署 + 回读验证
    if args.check:
        if os.path.isfile(dst):
            dst_hash = sha256(dst)
            same = src_hash == dst_hash
            print(f"[check] 母本={src_hash[:8]} 部署={dst_hash[:8]} → {'MATCH' if same else 'MISMATCH（需部署）'}")
            return 0 if same else 4
        print(f"[check] 部署侧不存在 {os.path.basename(dst)}（需部署）")
        return 4

    os.makedirs(os.path.dirname(dst), exist_ok=True)
    shutil.copy2(src, dst)
    if sha256(dst) != src_hash:
        print(f"[错误] 回读哈希不一致！母本={src_hash[:8]} 部署={sha256(dst)[:8]}", file=sys.stderr)
        return 4
    print(f"[DEPLOYED] {dst}  sha256={src_hash[:8]} 回读一致")
    return 0


if __name__ == "__main__":
    sys.exit(main())
