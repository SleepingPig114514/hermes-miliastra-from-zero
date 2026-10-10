#!/usr/bin/env python3
"""bootstrap.py — clone 之后的一键初始化。

**下载完先跑这个。** 它会检查工作区缺什么、能自动补的就补，最后逐条告诉你
「还缺什么 / 下一步该敲什么」，避免自己去 debug 发现缺失。

用法：
    python tools/bootstrap.py              # 检查 + 安全修复（拉子模块），其余给命令
    python tools/bootstrap.py --install    # 另外安装依赖并构建模拟器
    python tools/bootstrap.py --register   # 另外把 4 个技能与模拟器 MCP 注册进 Hermes
    python tools/bootstrap.py --all        # = --install --register（完整初始化）
    python tools/bootstrap.py --check      # 只看不写，任何东西都不改

退出码：0 = 就绪；2 = 仍有缺失（见末节清单）；3 = 用法/环境问题。
"""
from __future__ import annotations

import argparse
import json
import os
import shutil
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ① 上游以 submodule 形式挂载的 4 个目录（未初始化时为空）
SUBMODULES = [
    "refs/Miliastra-toolbox/knowledge/Miliastra-knowledge",
    "refs/WebMiliastraNodesEditor/Genshin-Impact-Miliastra-Wonderland-Code-Node-Editor-Pack",
    "refs/WebMiliastraNodesEditor/WebMiliastraNodesEditor-CollabServer",
    "refs/WebMiliastraNodesEditor/WebMiliastraNodesEditor-MCPServer",
]

# ② 上游 .gitignore 排除、但本仓已随附的构建产物
BUILD_ARTIFACTS = [
    "miliastra-beyond-simulator/dsh-plugin/dist",
    "miliastra-beyond-simulator/mcp/dist",
    "miliastra-beyond-simulator/web/dist",
    "miliastra-beyond-simulator/dsh-plugin/presets",
    "miliastra-beyond-simulator/web/public/play-renderer.js",
]
SIM = "miliastra-beyond-simulator"

# ④ 4 个技能（源目录用于校验；注册用 SKILL_DIRS 那三个外部目录）
SKILL_SRC = [
    ("qxqy-simulator（Hermes 侧模拟器适配层）", "tools/hermes-skills"),
    ("qxqy-game-studio（七步制作流程）", SIM + "/agent/wonderland-lua-builder/skills"),
    ("miliastra-knowledge（官方文档检索）", "refs/Miliastra-toolbox/skills"),
    ("miliastra-knowledge-lua（客户端控件与 Lua）", "refs/Miliastra-toolbox/skills"),
]
SKILL_DIRS = [
    "refs/Miliastra-toolbox/skills",
    SIM + "/agent/wonderland-lua-builder/skills",
    "tools/hermes-skills",
]

# ⑥ RAG 向量库（本仓未随附，需自建）
RAG = "refs/Miliastra-toolbox/knowledge/rag_v1"
RAG_DB = RAG + "/db/chroma.sqlite3"

TODO = []      # [(事项, 补救命令)]
OK = []


def sh(cmd, cwd=None, timeout=1800):
    if cmd[0] != sys.executable and shutil.which(cmd[0]) is None:
        return 127, "命令不存在: " + cmd[0]
    try:
        r = subprocess.run(cmd, cwd=cwd or ROOT, capture_output=True, text=True, timeout=timeout)
        return r.returncode, (r.stdout or "") + (r.stderr or "")
    except subprocess.TimeoutExpired:
        return 124, "超时（>%ds）" % timeout
    except Exception as e:
        return 1, type(e).__name__ + ": " + str(e)


def head(n, total, title):
    print("\n" + "-" * 68)
    print(" %d/%d  %s" % (n, total, title))
    print("-" * 68)


def has_files(path):
    d = os.path.join(ROOT, path)
    return os.path.isdir(d) and any(fs for _, _, fs in os.walk(d))


def need(what, fix):
    TODO.append((what, fix))


def done(msg):
    OK.append(msg)
    print("  \u2713 " + msg)


def subdirs_with_skill(rel):
    d = os.path.join(ROOT, rel)
    if not os.path.isdir(d):
        return []
    return [x for x in os.listdir(d) if os.path.isfile(os.path.join(d, x, "SKILL.md"))]


def s1_submodules(do_fix):
    head(1, 7, "git 子模块（4 个）")
    empty = [s for s in SUBMODULES if not has_files(s)]
    if not empty:
        done("4 个子模块均已有内容")
        return
    print("  \u26a0 %d 个为空：" % len(empty))
    for s in empty:
        print("      " + s)
    if not do_fix:
        need("子模块未拉取", "git submodule update --init --recursive")
        return
    print("\n  \u2192 git submodule update --init --recursive …")
    code, out = sh(["git", "submodule", "update", "--init", "--recursive"], timeout=900)
    still = [s for s in SUBMODULES if not has_files(s)]
    if code != 0 or still:
        print("     失败（exit %d）：%s" % (code, out.strip()[:400]))
        need("子模块拉取失败（网络/权限）", "git submodule update --init --recursive")
    else:
        done("4 个子模块已拉取")


def s2_artifacts(do_install):
    head(2, 7, "模拟器构建产物（本仓已随附）")
    miss = [a for a in BUILD_ARTIFACTS if not os.path.exists(os.path.join(ROOT, a))]
    if not miss:
        done("dist/ 与 presets/ 齐全 —— 无需自行 build")
        return
    print("  \u26a0 缺 %d 项：" % len(miss))
    for m in miss:
        print("      " + m)
    if do_install:
        print("\n  \u2192 pnpm install && pnpm build …")
        c1, o1 = sh(["pnpm", "install", "--frozen-lockfile"], cwd=os.path.join(ROOT, SIM))
        c2, o2 = sh(["pnpm", "build"], cwd=os.path.join(ROOT, SIM))
        if c1 == 0 and c2 == 0:
            done("依赖安装 + 构建完成")
            return
        print("     失败：install=%d build=%d" % (c1, c2))
        print("     " + o1.strip()[-200:])
        print("     " + o2.strip()[-200:])
    need("构建产物缺失", "cd " + SIM + " && pnpm install --frozen-lockfile && pnpm build")


def s3_runtime(do_install):
    head(3, 7, "运行时依赖")
    for name, cmd, fix in [
        ("Node.js", ["node", "--version"], "安装 Node.js 22+"),
        ("pnpm", ["pnpm", "--version"], "npm i -g pnpm"),
        ("Python", [sys.executable, "--version"], "安装 Python 3.9+"),
    ]:
        if cmd[0] != sys.executable and shutil.which(cmd[0]) is None:
            print("  \u2717 %s: 未安装" % name)
            need(name + " 未安装", fix)
            continue
        code, out = sh(cmd, timeout=60)
        ver = out.strip().splitlines()[0] if out.strip() else "?"
        print("  %s %s: %s" % ("\u2713" if code == 0 else "\u2717", name, ver))

    nm = os.path.join(ROOT, SIM, "node_modules")
    if os.path.isdir(nm) and any(os.scandir(nm)):
        done("模拟器依赖 node_modules 已存在")
    elif do_install and shutil.which("pnpm"):
        print("\n  \u2192 pnpm install --frozen-lockfile …")
        code, _ = sh(["pnpm", "install", "--frozen-lockfile"], cwd=os.path.join(ROOT, SIM))
        if code == 0:
            done("模拟器依赖已安装")
        else:
            need("模拟器依赖安装失败", "cd " + SIM + " && pnpm install --frozen-lockfile")
    else:
        need("模拟器依赖未安装（node_modules 缺失）",
             "cd " + SIM + " && pnpm install --frozen-lockfile   # 或重跑本脚本加 --install")


def s4_skill_files():
    head(4, 7, "4 个技能源文件")
    miss = []
    for label, rel in SKILL_SRC:
        if subdirs_with_skill(rel):
            print("  \u2713 " + label)
        else:
            print("  \u2717 " + label + "  \u2190 " + rel + "/")
            miss.append(rel)
    if miss:
        need("技能源文件缺失", "检查 " + ", ".join(sorted(set(miss))))
    else:
        done("4 个技能源文件齐全（生效还需注册到宿主 \u2192 第 5 项）")


def s5_register(do_register):
    head(5, 7, "宿主接入：技能注册 + 模拟器 MCP")
    hermes = shutil.which("hermes")
    if not hermes:
        print("  \u2717 未找到 hermes 命令 —— 宿主侧接入需手动执行（见下）")
        need("hermes CLI 不在 PATH", "确认已安装 Hermes Agent")
    else:
        _, out = sh(["hermes", "config", "get", "skills.external_dirs"], timeout=120)
        print("  当前 skills.external_dirs: " + (out.strip()[:300] or "（空）"))

    dirs = [os.path.join(ROOT, d).replace("\\", "/") for d in SKILL_DIRS]
    literal = json.dumps(dirs, ensure_ascii=False)
    mcp_entry = os.path.join(ROOT, SIM, "mcp", "dist", "index.js").replace("\\", "/")
    workspace = os.path.join(ROOT, "projects").replace("\\", "/")
    mcp_cmd = ('hermes mcp add qxqy-simulator --command node --connect-timeout 120 '
               '--args "' + mcp_entry + '" --workspace "' + workspace +
               '" --web-url http://127.0.0.1:4173')

    if do_register and hermes:
        print("\n  \u2192 注册技能 …")
        c1, o1 = sh(["hermes", "config", "set", "skills.external_dirs", literal], timeout=180)
        print("     exit=%d %s" % (c1, o1.strip()[:200]))
        print("  \u2192 接入 MCP …")
        c2, o2 = sh(["hermes", "mcp", "add", "qxqy-simulator", "--command", "node",
                     "--connect-timeout", "120", "--args", mcp_entry,
                     "--workspace", workspace, "--web-url", "http://127.0.0.1:4173"], timeout=300)
        print("     exit=%d %s" % (c2, o2.strip()[:300]))
        if c1 == 0 and c2 == 0:
            done("技能与 MCP 已注册（**需重启宿主或 /reload-mcp 才生效**）")
        else:
            print("  \u26a0 部分失败，请逐条核对下列命令")
    else:
        print("  \u2192 待执行（两条命令，路径已按本机填好）：")
        print("     hermes config set skills.external_dirs '" + literal + "'")
        print("     " + mcp_cmd)
        need("技能未注册 + MCP 未接入",
             "重跑: python tools/bootstrap.py --register   （或手动执行上面两条命令）")

    print("\n  验证（均应 exit 0）：")
    print("     python tools/check_skill_registry.py")
    print("     python tools/check_integration.py")
    print("  改完 MCP 配置记得：重启宿主 或 /reload-mcp")


def s6_rag():
    head(6, 7, "RAG 向量库（本仓未随附，需自建）")
    if os.path.isfile(os.path.join(ROOT, RAG_DB)):
        done("向量库已存在")
        return
    corpus = os.path.join(ROOT, "refs/Miliastra-toolbox/knowledge/Miliastra-knowledge")
    n = sum(len(fs) for _, _, fs in os.walk(corpus)) if os.path.isdir(corpus) else 0
    print("  \u26a0 未找到 " + RAG_DB)
    print("     语料目录：" + (("\u2713 %d 个文件" % n) if n else "\u2717 为空（需先拉子模块 \u2192 第 1 项）"))
    print("\n  \u2192 自建步骤（需自备 OPENAI_API_KEY，默认走 siliconflow 的 BAAI/bge-m3）：")
    print("     cd " + RAG)
    print("     cp .env.example .env      # 填入 OPENAI_API_KEY")
    print("     pip install -r requirements.txt")
    print("     python rag_cli.py init    # 全量嵌入，产物落在 db/chroma.sqlite3")
    need("RAG 向量库缺失（本仓有意不随附，避免本地格式差异）",
         "cd " + RAG + " && cp .env.example .env && pip install -r requirements.txt && python rag_cli.py init")


def s7_device():
    head(7, 7, "真机侧门槛（无法自动化）")
    print("  \u25a1 账号【奇匠等级 ≥ Lv.2】—— 未达标时真机文字不渲染且不报错（模拟器永远正常）")
    print("      查法/升级路径 \u2192《工具书_资产与引用规范.md》顶部「等级门槛 · 唯一权威说明」")
    print("  \u25a1 真机部署路径与索引回收：只在要上真机时才需要 \u2192 tools/首次接手.md 第 5 节")


def summary(check_only):
    print("\n" + "=" * 68)
    print(" 结论")
    print("=" * 68)
    print("  \u2705 就绪 %d 项" % len(OK))
    if not TODO:
        print("\n  \U0001f389 全部就绪，可以开工了。")
        print("     下一步读：tools/作业手册.md（阶段\u2192分册） \u2192 AGENTS.md（结构与流程）")
        return 0
    print("\n  \u26a0\ufe0f  仍需处理 %d 项：" % len(TODO))
    for i, (what, fix) in enumerate(TODO, 1):
        print("    %d. %s" % (i, what))
        print("       \u2192 " + fix)
    if check_only:
        print("\n  （--check 模式：未做任何写操作）")
    else:
        print("\n  想一次做完：python tools/bootstrap.py --all")
    print("\n  未覆盖项（必须人工）：奇匠等级 ≥ Lv.2；宿主重启后 MCP 才生效")
    print("  逐条指引 \u2192 tools/首次接手.md")
    return 2


def main():
    ap = argparse.ArgumentParser(description="clone 之后的一键初始化")
    ap.add_argument("--check", action="store_true", help="只看不写")
    ap.add_argument("--install", action="store_true", help="安装依赖并构建模拟器")
    ap.add_argument("--register", action="store_true", help="把技能与 MCP 注册进 Hermes")
    ap.add_argument("--all", action="store_true", help="= --install --register")
    a = ap.parse_args()

    do_install = a.install or a.all
    do_register = a.register or a.all

    print("工作区根 : " + ROOT)
    print("模式     : " + ("只检查" if a.check else "检查并补齐") +
          (" + 安装依赖" if do_install else "") + (" + 注册宿主" if do_register else ""))

    s1_submodules(not a.check)
    s2_artifacts(do_install)
    s3_runtime(do_install)
    s4_skill_files()
    s5_register(do_register)
    s6_rag()
    s7_device()
    return summary(a.check)


if __name__ == "__main__":
    sys.exit(main())
