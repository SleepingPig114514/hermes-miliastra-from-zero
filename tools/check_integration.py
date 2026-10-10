"""check_integration.py — 接入检查：把"下载了" 与 "接进宿主能用" 分开验证

为什么存在（2026-10-11 教训）：上游 `miliastra-beyond-simulator` 早已下载并标"✅ 已装机"，
但其 MCP 从未接进宿主，工具对 AI 不可见 → 白躺数日，且**失败全程静默**。
本脚本把三类"静默失败"变成可判定的告警：

  I1 MCP 接入 ：config.yaml 的 `mcp_servers` 里，enabled 服务的 `command` 与 `args` 中的
                绝对路径是否真实存在；**台账声称已接入 MCP 而 mcp_servers 为空 → 告警**
  I2 refs 登记 ：`refs/` 下每个仓库目录必须出现在 `refs/README.md`（否则克隆进来没人知道）
  I3 接入列    ：台账中「性质含工具/模拟器/Skill/服务/插件」或「状态含已装机/已接入/已挂载」
                的行，「接入方式」列不得为 `—`/空

退出码：0 = 无告警；2 = 有告警。
用法：
  py tools/check_integration.py            # 人类可读
  py tools/check_integration.py --quiet    # 只打印告警与提示
被 tools/audit_workspace.py 以 scan() 复用（第 9 项）。
"""
import argparse
import os
import re
import shutil
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

TOOLS_BOOK = '工具书_资产与引用规范.md'
REFS_README = 'refs/README.md'
# 台账里"已接入/已装机"类状态词 → 必须填「接入方式」
CLAIM_WORDS = ('已装机', '已接入', '已挂载')
# 性质里出现这些词 → 属"可接入物"，必须填「接入方式」
KIND_WORDS = ('工具', '模拟器', 'Skill', '技能', '服务', '插件')


def hermes_home():
    h = os.environ.get('HERMES_HOME')
    if h:
        return h
    la = os.environ.get('LOCALAPPDATA')
    if la:
        p = os.path.join(la, 'hermes')
        if os.path.isdir(p):
            return p
    return os.path.join(os.path.expanduser('~'), '.hermes')


def read(path):
    try:
        return open(path, encoding='utf-8').read()
    except OSError:
        return ''


def parse_mcp_servers(txt):
    """极简 YAML 解析：取 mcp_servers 下每个服务的 command / args / enabled。

    只认两空格缩进的服务块（本机 config.yaml 即此格式），不引 PyYAML 依赖。
    """
    lines = txt.splitlines()
    start = next((i for i, l in enumerate(lines) if re.match(r'^mcp_servers:\s*$', l)), None)
    if start is None:
        return {}
    servers, cur = {}, None
    for l in lines[start + 1:]:
        if not l.strip():
            continue
        if not l.startswith(' '):
            break  # 回到顶层，结束
        m = re.match(r'^  (\S[^:]*):\s*$', l)
        if m:
            cur = m.group(1)
            servers[cur] = {'command': None, 'args': [], 'enabled': True, 'in_args': False}
            continue
        if cur is None:
            continue
        if re.match(r'^    command:\s*', l):
            servers[cur]['command'] = l.split(':', 1)[1].strip().strip('"\'')
            servers[cur]['in_args'] = False
        elif re.match(r'^    args:\s*', l):
            servers[cur]['in_args'] = True
            rest = l.split(':', 1)[1].strip()
            if rest.startswith('['):
                servers[cur]['args'] += [x.strip().strip('"\'') for x in rest.strip('[]').split(',') if x.strip()]
        elif re.match(r'^    enabled:\s*', l):
            servers[cur]['enabled'] = l.split(':', 1)[1].strip().lower() not in ('false', 'no', '0')
            servers[cur]['in_args'] = False
        elif re.match(r'^      -\s*', l) and servers[cur]['in_args']:
            servers[cur]['args'].append(re.sub(r'^      -\s*', '', l).strip().strip('"\''))
        else:
            servers[cur]['in_args'] = False
    return servers


def looks_like_path(s):
    return bool(re.match(r'^[A-Za-z]:[\\/]', s)) or s.startswith('/') or s.startswith('\\\\')


def parse_ledger(txt):
    """台账行 → [{num, kind, access, status}]；读不到列时返回空列表。"""
    lines = txt.splitlines()
    h = next((i for i, l in enumerate(lines) if l.startswith('| # | 资产 |')), None)
    if h is None:
        return []
    header = [c.strip() for c in lines[h].strip().strip('|').split('|')]
    if '接入方式' not in header:
        return []
    ki, ai, si = header.index('性质'), header.index('接入方式'), header.index('状态')
    rows = []
    for l in lines[h + 2:]:
        if not l.startswith('|'):
            break
        cells = [c.strip() for c in l.strip().strip('|').split('|')]
        if len(cells) <= max(ki, ai, si):
            continue
        rows.append({'num': cells[0], 'kind': cells[ki], 'access': cells[ai], 'status': cells[si]})
    return rows


def scan(root=ROOT):
    warnings, notes = [], []
    stats = {'servers': 0, 'servers_enabled': 0, 'refs': 0, 'refs_unreg': 0, 'ledger_rows': 0}

    # ── I1 MCP 接入 ────────────────────────────────────────────────
    cfg = os.path.join(hermes_home(), 'config.yaml')
    servers = parse_mcp_servers(read(cfg)) if os.path.exists(cfg) else {}
    stats['servers'] = len(servers)
    stats['servers_enabled'] = sum(1 for s in servers.values() if s['enabled'])
    if not os.path.exists(cfg):
        notes.append('MCP：未找到 Hermes 配置（%s），跳过 MCP 检查 —— '
                     '接入步骤见 tools/首次接手.md' % cfg)
    for name, s in servers.items():
        if not s['enabled']:
            notes.append('MCP `%s`：已配置但 enabled=false（AI 看不到其工具）' % name)
            continue
        cmd = s['command'] or ''
        if cmd and looks_like_path(cmd) and not os.path.exists(cmd):
            warnings.append('MCP `%s`：command 路径不存在 %s' % (name, cmd))
        elif cmd and not looks_like_path(cmd) and shutil.which(cmd) is None:
            warnings.append('MCP `%s`：command 不在 PATH：%s' % (name, cmd))
        for a in s['args']:
            if looks_like_path(a) and not os.path.exists(a):
                warnings.append('MCP `%s`：参数路径不存在 %s' % (name, a))

    # ── I2 refs 登记 ───────────────────────────────────────────────
    refs_dir = os.path.join(root, 'refs')
    refs_readme = read(os.path.join(root, REFS_README))
    if os.path.isdir(refs_dir):
        for name in sorted(os.listdir(refs_dir)):
            if not os.path.isdir(os.path.join(refs_dir, name)) or name.startswith('.'):
                continue
            stats['refs'] += 1
            if name not in refs_readme:
                stats['refs_unreg'] += 1
                warnings.append('refs 未登记：`refs/%s` 不在 %s 里（克隆进来没人知道它是什么；'
                                '该节怎么写见 tools/首次接手.md）' % (name, REFS_README))

    # ── I3 接入列 ─────────────────────────────────────────────────
    rows = parse_ledger(read(os.path.join(root, TOOLS_BOOK)))
    stats['ledger_rows'] = len(rows)
    if not rows:
        notes.append('台账：未解析到「接入方式」列（或表头变了），跳过接入列检查')
    for r in rows:
        acc = r['access'].strip()
        blank = acc in ('', '—', '-', '–')
        if not blank:
            continue
        if any(w in r['kind'] for w in KIND_WORDS):
            warnings.append('台账 #%s：性质含可接入物（%s）但「接入方式」为空' % (r['num'], r['kind'][:24]))
        elif any(w in r['status'] for w in CLAIM_WORDS):
            warnings.append('台账 #%s：状态称「%s」但「接入方式」为空 —— 装机 ≠ 接入'
                            % (r['num'], next(w for w in CLAIM_WORDS if w in r['status'])))

    # 反查：台账称已接 MCP，但宿主机上并没有
    claimed_mcp = [r['num'] for r in rows if 'MCP' in r['access'] and '已接' in r['access']]
    if claimed_mcp and not servers:
        warnings.append('台账 #%s 称已接入 MCP，但 %s 里没有任何 mcp_servers（装机 ≠ 接入）—— '
                        '接入步骤见 tools/首次接手.md' % ('/'.join(claimed_mcp), cfg))

    return warnings, notes, stats


def main():
    ap = argparse.ArgumentParser(description='接入检查（MCP / refs 登记 / 台账接入列）')
    ap.add_argument('--quiet', action='store_true', help='只打印告警与提示')
    ap.add_argument('--root', default=ROOT, help='扫描根（默认工作区根）')
    args = ap.parse_args()

    warnings, notes, st = scan(args.root)

    if not args.quiet:
        print('=' * 74)
        print('接入检查 · 扫描根 %s' % args.root)
        print('  MCP      : 配置服务 %d 个（enabled %d）' % (st['servers'], st['servers_enabled']))
        print('  refs     : 仓库 %d 个（未登记 %d）' % (st['refs'], st['refs_unreg']))
        print('  台账     : 解析行 %d 条' % st['ledger_rows'])
        print('=' * 74)

    if notes:
        print('提示 %d 条（不计退出码）：' % len(notes))
        for m in notes:
            print('  [提示] %s' % m)
    if warnings:
        print('\n告警 %d 条：' % len(warnings))
        for m in warnings:
            print('  [告警] %s' % m)
        print('\n结论：接入存在问题 —— "下载了/装了" 不等于 "宿主能用"。')
        return 2
    print('\n结论：接入检查通过 ✓')
    return 0


if __name__ == '__main__':
    sys.exit(main())
