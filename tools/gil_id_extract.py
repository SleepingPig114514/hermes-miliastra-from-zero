#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""gil_id_extract.py — 从千星真机关卡存档(.gil)回收「控件模板名 → 重映射后ID」映射表。

背景（P0，2026-10-10 实测）：.gia 导入编辑器后索引必重映射（索引不可预测定律），
但关卡存档 .gil 内每个控件单元的 field 501 同时携带：
  - varint 形式（tag a8 1f）= 该单元重映射后的 ID（1073741xxx 族）
  - string 形式（tag aa 1f）= 该单元名字（UTF-8，随 .gia 原样保留）
两者同区配对，可机器直读——用户无需逐个复制索引。

用法：
  python gil_id_extract.py <存档.gil> [--min-id N] [--json out.json] [--tsv out.tsv]
  python gil_id_extract.py --latest [--uid <UID>] [...]   # 自动找最新存档

⚠ **多账号 / 多存档纪律**：BeyondLocal 下会有多个 UID 目录（游戏缓存的其他玩家），同一 UID 下也会有多张图。
   `--latest` 只按 .gil 保存时间取最新，**不保证是你要的那张**（空图目录 mtime 可能更晚）。
   故本工具一律打印【UID / 地图ID / 大小 / 保存时间】并把其他候选列出——
   **AI 必须把 UID 与地图ID 报给用户确认**；用户界面上看不到存档ID，只能靠 AI 列候选 + 指纹（时间/大小）来认。

输出：stdout 表格（offset / 名字 / ID / ID-0x40000000 偏移），可选 JSON/TSV 文件。
退出码：0=至少解出 1 条配对；2=零配对（格式变更，需人工复核）；3=文件问题。

命名纪律（runbook: tools/GIL-ID回收_runbook.md）：包内模板名全局唯一（项目前缀_用途_vN），
本脚本按「名字最近前邻 ID」配对，重名会放大歧义。
"""
import argparse
import datetime
import glob
import json
import os
import sys

GIL_ROOT_TMPL = os.path.join(os.path.expanduser("~"), "AppData", "LocalLow",
                             "miHoYo", "原神", "BeyondLocal")
ID_TAG = b"\xa8\x1f"      # field 501, wire 0 (varint) —— 单元自身 ID
NAME_TAG = b"\xaa\x1f"    # field 501, wire 2 (string) —— 单元名字
SEARCH_BACK = 2048        # ID 距名字的最大回溯字节数。
# 取值依据（2026-10-11 实测）：子图元多的模板把 ID 推得远——128 子项的模板 ID 距名字 687 字节，
# 65 子项的 372 字节。旧值 400 会把 128 子项的模板整批漏掉（实测漏 6/28 条，
# 且漏得"看起来正常"：子图元名照常配对，只有模板名消失）。2048 覆盖实测最大值并有 3 倍余量。
# 配对规则仍是"取最近的 ID 区前邻"，窗口放大不会改变就近结果（同一单元内本单元的 ID 最近）。


def varint_at(buf, i):
    """从 i 起解码 varint，返回 (值, 结束位置) 或 (None, i)。"""
    n = 0
    shift = 0
    while i < len(buf):
        b = buf[i]
        n |= (b & 0x7F) << shift
        shift += 7
        i += 1
        if not (b & 0x80):
            return n, i
        if shift > 49:
            return None, i
    return None, i


def gil_candidates(uid=None):
    """全部候选存档（>200 字节，滤掉空图占位），按保存时间倒序。"""
    pattern = os.path.join(GIL_ROOT_TMPL, uid or "*", "Beyond_Local_Save_Level", "*", "*.gil")
    cands = [p for p in glob.glob(pattern) if os.path.getsize(p) > 200]
    return sorted(cands, key=os.path.getmtime, reverse=True)


def find_latest_gil(uid=None):
    cands = gil_candidates(uid)
    return cands[0] if cands else None


def human_time(ts):
    return datetime.datetime.fromtimestamp(ts).strftime("%Y-%m-%d %H:%M")


def gil_identity(path):
    """存档身份指纹：UID / 地图ID / 大小 / 保存时间。AI 必须凭此向用户确认。"""
    d = os.path.dirname(path)
    return {"uid": os.path.basename(os.path.dirname(os.path.dirname(d))),
            "map_id": os.path.basename(d), "size": os.path.getsize(path),
            "saved": human_time(os.path.getmtime(path))}


def extract(data, min_id=1073741800, max_id=1073743000):
    """扫描全部 NAME_TAG，配对最近前邻 ID_TAG。返回 [(offset, name, id)]。"""
    rows = []
    i = 0
    while True:
        p = data.find(NAME_TAG, i)
        if p < 0:
            break
        i = p + 2
        nlen, end = varint_at(data, i)
        if nlen is None or nlen < 2 or end + nlen > len(data) or nlen > 64:
            continue
        raw = data[end:end + nlen]
        try:
            name = raw.decode("utf-8")
        except UnicodeDecodeError:
            continue
        if not all(ch.isprintable() for ch in name):
            continue
        # 回溯找最近的 ID
        lo = max(0, p - SEARCH_BACK)
        best = None
        best_q = None
        j = lo
        while True:
            q = data.find(ID_TAG, j, p)
            if q < 0:
                break
            v, _ = varint_at(data, q + 2)
            if v is not None and min_id <= v <= max_id:
                best = v  # 保留最后一个（最接近名字）
                best_q = q
            j = q + 2
        if best is not None:
            rows.append((p, name, best, p - best_q))
    # 去重：一个 ID 只属于离它最近的那个单元。放大回溯窗口后，没有自己 ID 字段的场景对象
    # （出生点/预设点之类）会蹭到前一个单元的 ID——留距离最小者即可（本单元的 ID 必然最近）。
    chosen = {}
    for row in rows:
        cur = chosen.get(row[2])
        if cur is None or row[3] < cur[3]:
            chosen[row[2]] = row
    keep = set(chosen.values())
    return [(p, name, v) for (p, name, v, _d) in rows if (p, name, v, _d) in keep]


def main():
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("gil", nargs="?", help="关卡存档 .gil 路径")
    ap.add_argument("--latest", action="store_true", help="自动取最新的 .gil")
    ap.add_argument("--uid", help="配合 --latest：限定 BeyondLocal 下的 UID 目录")
    ap.add_argument("--min-id", type=int, default=1073741800)
    ap.add_argument("--max-id", type=int, default=1073743000)
    ap.add_argument("--json", dest="json_out", help="配对表写出 JSON")
    ap.add_argument("--tsv", dest="tsv_out", help="配对表写出 TSV")
    args = ap.parse_args()

    path = args.gil
    if args.latest or not path:
        path = find_latest_gil(args.uid)
        if not path:
            print("未找到任何 .gil 存档", file=sys.stderr)
            return 3
        _id = gil_identity(path)
        print(f"[自动发现] UID={_id['uid']}  地图ID={_id['map_id']}  "
              f"{_id['size']} B  保存={_id['saved']}")
        _others = [p for p in gil_candidates(args.uid) if os.path.abspath(p) != os.path.abspath(path)]
        if _others:
            print(f"[其他候选 {len(_others)} 个] " + " | ".join(
                f"{gil_identity(p)['map_id']}（{gil_identity(p)['saved']}，{gil_identity(p)['size']}B）"
                for p in _others))
        print("⚠ AI 必须把【UID + 地图ID】报给用户确认；不对就显式传 .gil 路径或 --uid。")
    if not os.path.isfile(path):
        print(f"文件不存在: {path}", file=sys.stderr)
        return 3

    data = open(path, "rb").read()
    rows = extract(data, args.min_id, args.max_id)
    _i = gil_identity(path)
    print(f"存档: {path}")
    print(f"  UID={_i['uid']}  地图ID={_i['map_id']}  {_i['size']} B  保存={_i['saved']}")
    print(f"{'offset':>8}  {'ID':>12}  {'+off':>4}  名字")
    for off, name, v in rows:
        print(f"{off:>8}  {v:>12}  {v - 0x40000000:>4}  {name}")
    print(f"共 {len(rows)} 条配对")

    if args.json_out:
        json.dump([{"offset": o, "name": n, "id": v} for o, n, v in rows],
                  open(args.json_out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    if args.tsv_out:
        with open(args.tsv_out, "w", encoding="utf-8") as f:
            f.write("name\tid\n")
            for _, n, v in rows:
                f.write(f"{n}\t{v}\n")
    return 0 if rows else 2


if __name__ == "__main__":
    sys.exit(main())
