"""check_upstream.py — 上游仓库台账与更新检查

为什么存在（2026-10-11）：工作区内有 14 个 git 仓库，但此前**只有 3 个 URL 有记载**，
11 个只能靠 `.git/` 现场反查——目录一旦被搬走或重新 clone，来源即失联；
且没有任何可执行的"检查更新"手段（全文只有散文式"git pull 需手动"）。

本脚本做两件事：
  ① 台账：遍历工作区内所有 git 仓库，输出 目录 / URL / 分支 / 克隆方式 / 子模块 / 当前 HEAD
  ② 更新检查（--fetch）：用 **`git ls-remote`（只读远端，不写本地 .git）** 取得上游 HEAD，
     与本地比较 → 有更新 / 已最新 / 不可达。**不执行 fetch/pull，不修改任何仓库。**

退出码：0 = 无落后；2 = 有仓库落后于上游（或存在未初始化的子模块）；3 = 用法/环境问题。
用法：
  py tools/check_upstream.py                  # 只列台账（离线可用）
  py tools/check_upstream.py --fetch          # 联网比对上游（只读）
  py tools/check_upstream.py --json out.json  # 机器可读
"""
import argparse
import json
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SKIP_DIRS = {'node_modules', '__pycache__', '.venv', 'venv', '.hermes-runtime'}


def git(args, cwd, timeout=60):
    try:
        r = subprocess.run(['git'] + args, cwd=cwd, capture_output=True,
                           text=True, timeout=timeout, encoding='utf-8', errors='replace')
        return r.stdout.strip() if r.returncode == 0 else None
    except Exception:
        return None


def discover(root):
    """工作区内所有 git 仓库（不深入其他仓库内部）。"""
    found = []
    for dirpath, dirnames, _files in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        if '.git' in dirnames:
            found.append(dirpath)
            dirnames[:] = []          # 不深入该仓库内部
    return sorted(found)


def submodules(repo):
    out = git(['submodule', 'status'], repo)
    if not out:
        return []
    subs = []
    for line in out.splitlines():
        parts = line.split()
        if len(parts) >= 2:
            state = parts[0]
            name = parts[1]
            initialized = not state.startswith('-')
            subs.append({'name': name, 'initialized': initialized})
    return subs


def info(root, repo):
    rel = os.path.relpath(repo, root).replace('\\', '/')
    url = git(['remote', 'get-url', 'origin'], repo) or ''
    branch = git(['rev-parse', '--abbrev-ref', 'HEAD'], repo) or ''
    head = git(['log', '-1', '--format=%H'], repo) or ''
    head_short = head[:7]
    when = git(['log', '-1', '--format=%ad', '--date=short'], repo) or ''
    shallow = os.path.exists(os.path.join(repo, '.git', 'shallow'))
    return {
        'path': rel or '.', 'url': url, 'branch': branch,
        'head': head, 'head_short': head_short, 'head_date': when,
        'shallow': shallow, 'submodules': submodules(repo),
        'update': None, 'remote_head': None,
    }


def check_update(rec, timeout=60):
    """只读比对：git ls-remote 取上游分支 HEAD（不写本地）。"""
    if not rec['url'] or not rec['branch']:
        rec['update'] = 'unknown'
        return
    out = git(['ls-remote', '--heads', 'origin', rec['branch']], os.path.join(ROOT, rec['path']), timeout)
    if out is None:
        rec['update'] = 'unreachable'
        return
    remote = out.split()[0] if out.split() else ''
    rec['remote_head'] = remote[:7]
    if not remote:
        rec['update'] = 'branch-missing'
    elif remote == rec['head']:
        rec['update'] = 'up-to-date'
    else:
        rec['update'] = 'behind'


def main():
    ap = argparse.ArgumentParser(description='上游仓库台账与更新检查')
    ap.add_argument('--fetch', action='store_true', help='联网比对上游 HEAD（只读，不写本地）')
    ap.add_argument('--json', dest='json_out', help='把结果写到 JSON 文件')
    ap.add_argument('--root', default=ROOT)
    args = ap.parse_args()

    repos = discover(args.root)
    if not repos:
        print('未发现任何 git 仓库（%s）' % args.root)
        return 3

    records = [info(args.root, r) for r in repos]
    if args.fetch:
        for rec in records:
            check_update(rec)

    up = uninit = behind = unreach = 0
    print('=' * 100)
    print('上游仓库台账 · %d 个 git 仓库%s' % (len(records), '（已联网比对）' if args.fetch else '（离线）'))
    print('=' * 100)
    for rec in records:
        u = rec['url'].replace('https://github.com/', '').replace('.git', '') or '(无 remote)'
        flags = []
        if rec['shallow']:
            flags.append('浅克隆')
        uninit_subs = [s['name'] for s in rec['submodules'] if not s['initialized']]
        if rec['submodules']:
            flags.append('子模块 %d（未初始化 %d）' % (len(rec['submodules']), len(uninit_subs)))
        if args.fetch and rec['update']:
            tag = {'up-to-date': '已最新', 'behind': '**有更新**',
                   'unreachable': '不可达', 'branch-missing': '分支不存在', 'unknown': '未知'}[rec['update']]
            flags.append('上游：%s%s' % (tag, (' (%s→%s)' % (rec['head_short'], rec['remote_head']))
                                     if rec['update'] == 'behind' else ''))
        print('\n  %-56s %s' % (rec['path'], ' / '.join(flags) if flags else ''))
        print('    URL : %s' % rec['url'])
        print('    分支: %-12s HEAD: %s (%s)' % (rec['branch'], rec['head_short'], rec['head_date']))
        for s in rec['submodules']:
            if not s['initialized']:
                print('    子模块未初始化: %s' % s['name'])

        if rec['shallow']:
            pass
        if any(not s['initialized'] for s in rec['submodules']):
            uninit += 1
        if args.fetch and rec['update'] == 'behind':
            behind += 1
        if args.fetch and rec['update'] == 'unreachable':
            unreach += 1

    print('\n' + '=' * 100)
    print('合计 %d 个仓库：浅克隆 %d · 含未初始化子模块 %d%s'
          % (len(records), sum(1 for r in records if r['shallow']), uninit,
             ' · 落后上游 %d · 不可达 %d' % (behind, unreach) if args.fetch else ''))

    if args.json_out:
        with open(args.json_out, 'w', encoding='utf-8') as f:
            json.dump(records, f, ensure_ascii=False, indent=1)
        print('JSON 已写出：%s' % args.json_out)

    if args.fetch and behind:
        print('\n结论：有 %d 个仓库落后上游 —— 逐个确认后自行 git pull（浅克隆仓库同样可 pull）。' % behind)
        return 2
    print('\n结论：台账完整%s。' % ('，无仓库落后上游 ✓' if args.fetch else '（加 --fetch 可联网比对上游）'))
    return 0


if __name__ == '__main__':
    sys.exit(main())
