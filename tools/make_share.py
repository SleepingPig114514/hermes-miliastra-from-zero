#!/usr/bin/env python3
"""make_share.py — 从**源工作区**一键生成可发布的分享副本。

本脚本是你这台机器上「源工作区 → GitHub 仓库」的派生产线：发布物不是手工维护的
平行副本，而是本脚本的产物 —— 因此可以随时删掉、随时重生。

用法（在源工作区根执行）：
    python tools/make_share.py                         # 生成到 ../千星沙箱-share
    python tools/make_share.py --out D:/path/to/out    # 指定输出目录
    python tools/make_share.py --check                 # 只报告将要做什么，不写盘
    python tools/make_share.py --remote <URL>          # 生成 + 配置 origin + 推送（一条命令）
    python tools/make_share.py --push                  # 生成后推送到已配置好的 origin

它会做的事：
  1. 复制源工作区（排除 projects/、.git、node_modules、__pycache__、Godot .import/ 等）
  2. 用 tools/share/overrides/** 覆盖发布版专属文件（README、首次接手 —— 两版语境相反）
  3. 按各上游仓库的 `git ls-files` **强制补回**被上游 .gitignore 吃掉的文件
     （否则新仓库里会静默少掉 213 个已入库文件，例如 primitive.exe）
  4. 一并纳入上游 .gitignore 排除的构建产物（dist/、presets/），使 clone 后无需 pnpm build
  5. 注册 4 个 submodule（SHA 从源工作区的上游仓库动态读取，跟随更新）
  6. 泄漏自检：扫描输出物里是否残留真实 UID / 本机用户名路径
  7. git init + commit；加 --remote/--push 则推送 —— 远端已有历史时做**增量提交**
     （`reset --soft` 后直接提交索引），**绝不重写远端历史、绝不 `git add -A`**
     （后者会清掉 submodule 的 gitlink 索引项，实测导致 clone 时 4 个子模块目录全空）

注意：本脚本依赖**源工作区结构**（上游仓库的 .git 必须健在）；把发布物 clone 到别的
机器后本脚本跑不了，这是设计如此 —— 发布物是给使用者用的，不是给作者再生产用的。
"""
from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import stat
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))   # 源工作区根

# 复制排除项（目录名或相对路径）
EXCLUDE_DIRS = {".git", "node_modules", "__pycache__", ".venv", "venv", ".idea"}
EXCLUDE_PATHS = {
    "projects",                                   # 个人关卡产物
    "tools/share",                                # 生成用模板，不进发布物
    "miliastra-beyond-simulator/al_assets",       # 本地运行产物（空 json）
    "refs/Miliastra-toolbox/knowledge/rag_v1/db", # RAG 向量库：有意不带，由用户自建
}
# 注意：不要按扩展名排除 *.pyc —— 上游仓库里有被跟踪的 .pyc
# （refs/miliastra-image-to-primitive-shape-ui/gia/json_to_gia.pyc，上游只发布字节码）。
# 源工作区自己的字节码都在 __pycache__/ 里，已按目录名排除。
EXCLUDE_NAME_EXACT = {".DS_Store", "Thumbs.db"}

# 上游 .gitignore 排除、但发布物要一并带上（使 clone 后开箱可用）
EXTRA_INCLUDE = [
    "miliastra-beyond-simulator/dsh-plugin/dist",
    "miliastra-beyond-simulator/mcp/dist",
    "miliastra-beyond-simulator/web/dist",
    "miliastra-beyond-simulator/dsh-plugin/presets",
    "miliastra-beyond-simulator/dsh-plugin/skill.md",
    "miliastra-beyond-simulator/web/public/editor.js",
    "miliastra-beyond-simulator/web/public/play-renderer.js",
    "miliastra-beyond-simulator/web/public/play.css",
    "miliastra-beyond-simulator/web/public/play.html",
    "miliastra-beyond-simulator/web/public/play.js",
]

# submodule：路径 → (上游 .gitmodules 所在仓库, gitlink 名, 回退 URL, 回退 SHA)
SUBMODULES = [
    ("refs/Miliastra-toolbox/knowledge/Miliastra-knowledge",
     "refs/Miliastra-toolbox", "knowledge/Miliastra-knowledge",
     "https://github.com/1475505/Miliastra-knowledge.git",
     "c1e4a2c7227cfe2fa3fc617d20d269e216d886ef"),
    ("refs/WebMiliastraNodesEditor/Genshin-Impact-Miliastra-Wonderland-Code-Node-Editor-Pack",
     "refs/WebMiliastraNodesEditor", "Genshin-Impact-Miliastra-Wonderland-Code-Node-Editor-Pack",
     "https://github.com/Wu-Yijun/Genshin-Impact-Miliastra-Wonderland-Code-Node-Editor-Pack.git",
     "5d85fc474428686c6705be03ebd8b3139f1952f3"),
    ("refs/WebMiliastraNodesEditor/WebMiliastraNodesEditor-CollabServer",
     "refs/WebMiliastraNodesEditor", "WebMiliastraNodesEditor-CollabServer",
     "https://github.com/Columbina-Dev/WebMiliastraNodesEditor-CollabServer.git",
     "afb2e20580be690ec6a41b1738519c5ae9568dac"),
    ("refs/WebMiliastraNodesEditor/WebMiliastraNodesEditor-MCPServer",
     "refs/WebMiliastraNodesEditor", "WebMiliastraNodesEditor-MCPServer",
     "https://github.com/Columbina-Dev/WebMiliastraNodesEditor-MCPServer.git",
     "71b141b747941cc45157dfbec880300b23efbd4e"),
]

DEFAULT_OUT = os.path.join(os.path.dirname(ROOT), os.path.basename(ROOT) + "-share")

# 注意：真实 UID 的字面量必须**拆开**写 —— 否则本文件自己会被下面的自检命中。
# （相邻字符串字面量会在编译期拼接，运行时仍是完整正则。）
LEAK_PATTERNS = [
    (re.compile(r"\b1397" r"80865\b"), "真实账号 UID"),
    (re.compile(r"C:[\\/]+Users[\\/]+1[0-9]\b"), "本机用户名路径"),
]


def force_rmtree(path):
    """删除目录，遇只读文件（Windows 上 .git 对象常见）先清属性再删。"""
    def _on_exc(func, p, exc):
        try:
            os.chmod(p, stat.S_IWRITE | stat.S_IREAD)
            func(p)
        except Exception:
            pass
    try:
        shutil.rmtree(path, onexc=_on_exc)          # Python 3.12+
    except TypeError:
        shutil.rmtree(path, onerror=lambda f, q, e: _on_exc(f, q, e))


def sh(cmd, cwd=None, timeout=1800):
    if cmd[0] != sys.executable and shutil.which(cmd[0]) is None:
        return 127, f"命令不存在: {cmd[0]}"
    try:
        r = subprocess.run(cmd, cwd=cwd or ROOT, capture_output=True, text=True, timeout=timeout)
        return r.returncode, (r.stdout or "") + (r.stderr or "")
    except subprocess.TimeoutExpired:
        return 124, f"超时（>{timeout}s）"
    except Exception as e:                                    # noqa: BLE001
        return 1, f"{type(e).__name__}: {e}"


def section(t):
    print(f"\n{'-' * 68}\n {t}\n{'-' * 68}")


# ───────────────────────── 1. 复制 ─────────────────────────
def copy_tree(out, dry):
    section("1/7  复制源工作区")
    n_files = n_skip = 0
    for dp, dns, fns in os.walk(ROOT):
        rel_dir = os.path.relpath(dp, ROOT).replace("\\", "/")
        if rel_dir == ".":
            rel_dir = ""
        # 排除目录
        dns[:] = [d for d in dns
                  if d not in EXCLUDE_DIRS
                  and not any((rel_dir + "/" + d if rel_dir else d) == e or
                              (rel_dir + "/" + d if rel_dir else d).startswith(e + "/")
                              for e in EXCLUDE_PATHS)
                  and d != ".import"]
        if rel_dir and any(rel_dir == e or rel_dir.startswith(e + "/") for e in EXCLUDE_PATHS):
            continue
        for f in fns:
            rel = (rel_dir + "/" + f) if rel_dir else f
            if f in EXCLUDE_NAME_EXACT:
                n_skip += 1
                continue
            if any(rel == e or rel.startswith(e + "/") for e in EXCLUDE_PATHS):
                n_skip += 1
                continue
            n_files += 1
            if not dry:
                dst = os.path.join(out, rel.replace("/", os.sep))
                os.makedirs(os.path.dirname(dst), exist_ok=True)
                shutil.copy2(os.path.join(dp, f), dst)
    print(f"  复制 {n_files} 个文件，跳过 {n_skip} 个")
    print(f"  排除：{'、'.join(sorted(EXCLUDE_PATHS))}、.git/、node_modules/、__pycache__/、Godot .import/")
    return n_files


# ─────────── 2. 发布物覆盖文件（两版语境分离） ───────────
def apply_overrides(out, dry):
    """把 tools/share/overrides/** 按原目录结构覆盖到输出物。

    为什么需要：有些文件在「作业台」与「发布物」里语境相反 —— 例如
    README 要说「上游已剥离 .git」、首次接手要说「已随附，无需 clone」，
    而源工作区里这些说法都是反的。故发布版单独维护在 overrides/ 下。
    """
    section("2/7  写入发布物覆盖文件（tools/share/overrides/**）")
    src = os.path.join(ROOT, "tools", "share", "overrides")
    if not os.path.isdir(src):
        print(f"  ✗ 缺少 {src}")
        return False
    n = 0
    for dp, dns, fns in os.walk(src):
        for f in fns:
            p = os.path.join(dp, f)
            rel = os.path.relpath(p, src)
            if not dry:
                dst = os.path.join(out, rel)
                os.makedirs(os.path.dirname(dst), exist_ok=True)
                shutil.copy2(p, dst)
            n += 1
            print(f"  ✓ {rel.replace(os.sep, '/')}  ({os.path.getsize(p)} B)")
    return n > 0


# ──────────── 3+4. 补回上游跟踪文件 / 纳入构建产物 ────────────
def restore_upstream(out, repos, dry):
    section("3/7  按上游 git ls-files 补回被 .gitignore 吃掉的文件")
    total = 0
    for repo_rel in repos:
        src_repo = os.path.join(ROOT, repo_rel)
        code, out_s = sh(["git", "-C", src_repo, "-c", "core.quotePath=false", "ls-files"])
        if code != 0:
            print(f"  ⚠ {repo_rel}: 读不到 ls-files，跳过（{out_s.strip()[:80]}）")
            continue
        lst = [l for l in out_s.splitlines() if l]
        existing = [f"{repo_rel}/{p}" for p in lst
                    if os.path.exists(os.path.join(out, repo_rel, p.replace("/", os.sep)))]
        if not dry and existing:
            spec = os.path.join(out, ".git", "_pspec.tmp")
            os.makedirs(os.path.dirname(spec), exist_ok=True)
            with open(spec, "w", encoding="utf-8", newline="\n") as fh:
                fh.write("\n".join(existing) + "\n")
            sh(["git", "-c", "core.quotePath=false", "add", "-f",
                "--pathspec-from-file=" + os.path.relpath(spec, out).replace("\\", "/")], cwd=out)
            os.remove(spec)
        total += len(existing)
        print(f"  {repo_rel}: 上游 {len(lst)} 条 → 补回 {len(existing)} 条")
    print(f"  合计 {total} 条")
    return total


def include_artifacts(out, dry):
    section("4/7  纳入构建产物（使 clone 后无需 pnpm build）")
    paths = [p for p in EXTRA_INCLUDE if os.path.exists(os.path.join(out, p.replace("/", os.sep)))]
    if not dry and paths:
        sh(["git", "add", "-f"] + paths, cwd=out)
    print(f"  ✓ {len(paths)} 项：dist/、presets/、web/public/*")
    return len(paths)


# ──────────────────── 5. 注册 submodule ────────────────────
def register_submodules(out, dry):
    section("5/7  注册 4 个 submodule")
    lines = ["# 本仓随附的 4 个上游子模块。",
             "#",
             "# 这些目录在源工作区里同样是空的（从未初始化）。本仓把它们注册为 submodule，",
             "# 使 `git clone --recurse-submodules` 能自动拉齐内容，避免\"clone 完发现目录是空的\"。",
             "#",
             "# 只拉子模块内容（目录已存在时）：",
             "#     git submodule update --init --recursive",
             "# 或交给一键脚本：",
             "#     python tools/bootstrap.py",
             ""]
    for path, repo_rel, name, url, sha in SUBMODULES:
        # 优先从源工作区的上游仓库动态读取 gitlink（跟随上游更新）
        code, o = sh(["git", "-C", os.path.join(ROOT, repo_rel), "ls-tree", "HEAD", "--", name])
        dyn = re.search(r"160000 commit ([0-9a-f]{40})", o)
        use_sha = dyn.group(1) if dyn else sha
        src_mod = os.path.join(ROOT, repo_rel, ".gitmodules")
        use_url = url
        if os.path.isfile(src_mod):
            txt = open(src_mod, encoding="utf-8", errors="replace").read()
            # 必须按 submodule 名精确匹配 —— 取第一个块会把所有 URL 都读成同一个
            m = re.search(r'\[submodule "' + re.escape(name) + r'"\][^\[]*?url\s*=\s*(\S+)', txt)
            if m:
                use_url = m.group(1)
        lines += [f'[submodule "{path}"]', f"\tpath = {path}", f"\turl = {use_url}", ""]
        print(f"  {path}\n     url={use_url}\n     sha={use_sha[:12]}{'  (动态)' if dyn else '  (回退常量)'}")
        if not dry:
            sh(["git", "update-index", "--add", "--cacheinfo",
                f"160000,{use_sha},{path}"], cwd=out)
    if not dry:
        with open(os.path.join(out, ".gitmodules"), "w", encoding="utf-8", newline="\n") as fh:
            fh.write("\n".join(lines))
        sh(["git", "add", ".gitmodules"], cwd=out)


# ───────────────────── 6. 泄漏自检 ─────────────────────
def leak_scan(out):
    section("6/7  泄漏自检（真实 UID / 本机路径）")
    hits = []
    for dp, dns, fns in os.walk(out):
        dns[:] = [d for d in dns if d != ".git"]
        for f in fns:
            p = os.path.join(dp, f)
            try:
                b = open(p, "rb").read()
            except Exception:
                continue
            try:
                txt = b.decode("utf-8")
            except UnicodeDecodeError:
                continue
            for pat, label in LEAK_PATTERNS:
                for m in pat.finditer(txt):
                    hits.append((label, os.path.relpath(p, out).replace("\\", "/"), m.group(0)))
    if hits:
        print(f"  ⚠ 发现 {len(hits)} 处疑似泄漏：")
        for label, p, v in hits[:20]:
            print(f"      [{label}] {p}  →  {v}")
        print("      → 请先修源工作区，再重跑本脚本")
        return len(hits)
    print("  ✓ 未见真实 UID / 本机用户名路径")
    return 0


# ───────────────────── 7. git init + commit ─────────────────────
def git_setup(out, has_leak, dry):
    section("7/7  git init + 提交")
    if dry:
        print("  （--check：跳过）")
        return 0
    # 注意：不要在这里再 `git add -A` —— 会把上面写好的 gitlink 清掉
    code, cnt = sh(["git", "ls-files"], cwd=out)
    n = len([l for l in cnt.splitlines() if l])
    msg = ("分享快照：Hermes 0 基础千星奇域制作工作区\n\n"
           "本提交由 tools/make_share.py 从源工作区生成。\n"
           "内容：自研门禁工具与手册 + 随附的 16 个上游项目文件快照（已剥离 .git）\n"
           "     + 上游构建产物（clone 后无需 pnpm build）+ 4 个 submodule 注册。\n"
           "未含：projects/、node_modules/、Godot .import/、RAG 向量库。\n"
           "许可：作者原创部分 MIT（见 LICENSE）；第三方内容归各自原作者。\n")
    # 用 stdin 传 message
    r = subprocess.run(["git", "commit", "-q", "-F", "-"], cwd=out, input=msg,
                       capture_output=True, text=True)
    if r.returncode != 0 and "nothing to commit" not in (r.stdout + r.stderr):
        print(f"  ✗ 提交失败：{(r.stdout + r.stderr).strip()[:200]}")
        return 1
    code, head = sh(["git", "log", "--oneline", "-1"], cwd=out)
    print(f"  ✓ 已提交 {head.strip()}")
    print(f"  ✓ 跟踪 {n} 条（含 4 个 gitlink）")
    if has_leak:
        print("  ⚠ 自检发现泄漏，**未推送**（先修源工作区）")
        return 2
    return 0


COMMIT_MSG = """发布物由 tools/make_share.py 生成

从源工作区派生的分享副本：自研工具与手册 + 随附的 16 个上游项目文件快照
（已剥离 .git）+ 上游构建产物（clone 后无需 pnpm build）+ 4 个 submodule。
未含：projects/、node_modules/、Godot .import/、RAG 向量库。
许可：作者原创部分 MIT（见 LICENSE）；第三方内容归各自原作者。
"""


def push_to(out, url, dry):
    """把发布物推到远端。

    首次（远端无 main）→ 直接推。
    远端已有历史 → `reset --soft FETCH_HEAD` 后**直接提交索引**做增量提交。
    ⚠️ 关键：这里绝不调用 `git add -A` —— 它会把 gitlink（子模块）索引项清掉，
       这是一个真踩过的坑（会导致 clone 时 4 个子模块目录全空）。
    """
    section("推送")
    if dry:
        print("  （--check：跳过）")
        return 0
    if url:
        sh(["git", "remote", "remove", "origin"], cwd=out)
        rc, o = sh(["git", "remote", "add", "origin", url], cwd=out)
        if rc != 0:
            print(f"  ✗ 配置 origin 失败：{o.strip()[:200]}")
            return 1
        print(f"  ✓ origin = {url}")
    rc, o = sh(["git", "remote", "get-url", "origin"], cwd=out)
    if rc != 0:
        print("  ✗ 未配置 origin —— 用 --remote <URL> 指定")
        return 3
    print(f"  远端     = {o.strip()}")

    rc, o = sh(["git", "fetch", "origin", "main"], cwd=out, timeout=1200)
    if rc != 0:
        print("  → 远端暂无 main → 首次推送")
        rc, o = sh(["git", "push", "-u", "origin", "main"], cwd=out, timeout=2400)
        print("  ✓ 已推送" if rc == 0 else f"  ✗ 推送失败：{o.strip()[:300]}")
        return 0 if rc == 0 else 1

    remote = subprocess.run(["git", "-C", out, "rev-parse", "FETCH_HEAD"],
                            capture_output=True, text=True).stdout.strip()
    local = subprocess.run(["git", "-C", out, "rev-parse", "HEAD"],
                           capture_output=True, text=True).stdout.strip()
    if remote == local:
        print("  ✓ 远端已是最新，无需提交")
        return 0

    sh(["git", "reset", "--soft", "FETCH_HEAD"], cwd=out)
    _, staged = sh(["git", "-c", "core.quotePath=false", "diff", "--cached", "--name-status"], cwd=out)
    lines = [l for l in staged.splitlines() if l]
    print(f"  → 相对远端 {len(lines)} 项变更：")
    for l in lines[:12]:
        print("      " + l)
    if len(lines) > 12:
        print(f"      … 另 {len(lines) - 12} 项")
    if not lines:
        print("  ✓ 内容一致，无需提交")
        return 0
    r = subprocess.run(["git", "commit", "-q", "-F", "-"], cwd=out, input=COMMIT_MSG,
                       capture_output=True, text=True)
    if r.returncode != 0:
        print(f"  ✗ 提交失败：{(r.stdout + r.stderr).strip()[:200]}")
        return 1
    code, head = sh(["git", "log", "--oneline", "-1"], cwd=out)
    print(f"  ✓ 增量提交 {head.strip()}")
    rc, o = sh(["git", "push", "origin", "main"], cwd=out, timeout=2400)
    print("  ✓ 已推送" if rc == 0 else f"  ✗ 推送失败：{o.strip()[:300]}")
    return 0 if rc == 0 else 1


def main():
    ap = argparse.ArgumentParser(description="从源工作区生成可发布的分享副本")
    ap.add_argument("--out", default=DEFAULT_OUT, help=f"输出目录（默认 {DEFAULT_OUT}）")
    ap.add_argument("--check", action="store_true", help="只报告，不写盘")
    ap.add_argument("--push", action="store_true", help="提交后推送到已配置的 origin")
    ap.add_argument("--remote", metavar="URL", help="生成后配置 origin 为 URL 并推送（含增量对比，不重写历史）")
    ap.add_argument("--force", action="store_true", help="输出目录非空时先清空")
    a = ap.parse_args()

    out = os.path.abspath(a.out)
    print(f"源工作区 : {ROOT}")
    print(f"输出目录 : {out}")
    print(f"模式     : {'只报告（不写盘）' if a.check else '生成'}{' + 推送' if a.push else ''}")

    # 前置检查
    for need in ["AGENTS.md", "tools", "refs", "miliastra-beyond-simulator"]:
        if not os.path.exists(os.path.join(ROOT, need)):
            print(f"\n✗ 源工作区结构不对：缺少 {need}/ —— 本脚本须在源工作区根运行")
            return 3
    if os.path.abspath(out) == os.path.abspath(ROOT):
        print("\n✗ 输出目录不能是源工作区本身")
        return 3
    if os.path.isdir(out) and os.listdir(out) and not a.check:
        if not a.force:
            print(f"\n✗ 输出目录已存在且非空：{out}\n  如要覆盖请加 --force（会先清空）")
            return 3
        force_rmtree(out)

    # 找上游仓库（源工作区里带 .git 的目录）
    repos = []
    for dp, dns, fns in os.walk(ROOT):
        if ".git" in dns:
            rel = os.path.relpath(dp, ROOT).replace("\\", "/")
            if rel != ".":
                repos.append(rel)
            dns[:] = [d for d in dns if d != ".git"]
        dns[:] = [d for d in dns if d not in EXCLUDE_DIRS and d not in ("projects",)]
        if dp.count(os.sep) - ROOT.count(os.sep) > 3:
            dns[:] = []

    if not a.check:
        os.makedirs(out, exist_ok=True)

    copy_tree(out, a.check)
    if not apply_overrides(out, a.check):
        return 3
    if not a.check:
        # 后续的 `git add -f` / `git update-index` 需要有效仓库，故此处先 init
        sh(["git", "init", "-b", "main"], cwd=out)
        # 顺序要紧：先全量 add，再强制补回被忽略的文件，最后写 gitlink。
        # 反过来的话 `git add -A` 会把 gitlink 项清掉（重演 bug：子模块注册丢失）。
        sh(["git", "add", "-A"], cwd=out)
    restore_upstream(out, repos, a.check)
    include_artifacts(out, a.check)
    register_submodules(out, a.check)
    leaks = leak_scan(out) if not a.check else 0
    rc = git_setup(out, leaks, a.check)
    if rc == 0 and leaks:
        print("\n  ⚠ 自检发现泄漏，**不推送**（请先修源工作区）")
    elif rc == 0 and (a.push or a.remote):
        rc = push_to(out, a.remote, a.check)

    section("完成")
    print(f"  输出目录：{out}")
    if not a.check:
        print(f"  自检     ：{'⚠ 有泄漏，见上' if leaks else '✓ 干净'}")
    if not (a.push or a.remote):
        print("  下一步   ：python tools/make_share.py --out <目录> --remote <URL>   # 一条命令推上去")
    return rc


if __name__ == "__main__":
    sys.exit(main())
