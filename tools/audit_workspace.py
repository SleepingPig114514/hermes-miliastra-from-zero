"""audit_workspace.py — 工作区手册与台账自检（任务收尾 / 交付前 / 改过文档后跑）

定位：把"人工自检"变成可一键执行、可挂门禁链的检查。**不做语义判断**，只做客观可判定项。
分两级输出：
  告警（计入退出码 2）——大概率是真问题：悬空引用、旧口径残留、台账漏登、状态文件缺项
  提示（不计退出码）——合法待办，仅供复核：待验证 / 待实测 / 待确认 / 待复核
退出码：0 = 无告警；2 = 有告警。

检查项：
  1 交叉引用：手册引用的文件路径是否存在（多基准解析；命令行片段/外部仓库路径自动跳过）
  2 §章节引用：引用的 §N 是否存在于根 AGENTS 或本文件（外部文档引用自动跳过）
  3 旧口径：扫会随结论更新的词；删除线 ~~...~~ 内视为已作废，不告警
  4 镜像义务：声明"镜像到 AGENTS §9.5"的硬事实关键词，两份文档是否都有
  5 状态文件三样：含「当前(步骤|阶段)」「下一步」「等用户/阻塞」
  6 台账对目录：projects/ 下每个项目**是否**在台账登记（**仅提示**，我方关卡产物登记非必需）
  7 台账对文件：台账引用的 projects/ 路径是否真实存在
  8 技能登记：磁盘上的 SKILL.md 是否都已登记进宿主技能索引（缺登记=静默吃灰）
  9 接入检查：MCP 配置有效性 / refs 仓库登记 / 台账「接入方式」列非空（装机 ≠ 接入）
用法：
  py tools/audit_workspace.py            # 全量
  py tools/audit_workspace.py --quiet    # 只打印告警与提示
"""
import argparse
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MANUALS = [
    'AGENTS.md', '工具书_资产与引用规范.md', '流程规范_AI自动化制作v2.md',
    'tools/作业手册.md', 'tools/GIL-ID回收_runbook.md', 'tools/导入操作卡模板.md',
    'tools/流程/P01_立项与设计.md', 'tools/流程/P23_资产与逻辑工程.md',
    'tools/流程/P45_导入合并与真机校准.md', 'tools/流程/P67_迭代与交付.md',
]
PROJECT_MANUALS = ['AGENTS.md', '项目状态与立项卡.md']

# 告警级：已被推翻却未标删除线的旧口径词（残留 = 真问题）
STALE_TOKENS = ['悬案未决', '不解禁', '两说', '实测中']
# 提示级：合法的"未完成"标注（主动声明，不算错，仅列出供复核）
TODO_TOKENS = ['待验证', '待实测', '待确认', '待复核']

# 镜像义务关键词（工具书 ↔ 根 AGENTS §9.5 必须两边都有）
MIRROR_KEYS = ['点号', '枚举', '封死', 'Color', '奇匠', 'coroutine', 'traceback', 'Middle']

# 精简写法 → 真实路径前缀（§3/§4 已声明 "release/ = MiliastraAgent/release/"）
PREFIX_ALIAS = {
    'release/': 'MiliastraAgent/release/',
    'refs/': 'refs/',
}

# 非工作区路径前缀（外部仓库/技能/真机目录）——出现即跳过，不告警
SKIP_PREFIX = ('BeyondLocal', 'AppData', 'scripts/', 'docs/', 'node_modules/',
               'public/', 'src/', 'dist/', 'plans/', 'assets/')

# 命令行片段特征（不是路径引用）
CMD_HINT = re.compile(r'[\s&|]|^(node|py|python|npx|npm|pnpm|cd|git|curl)\b|-{2}')

PROBLEMS = []
NOTES = []


def warn(check, msg):
    PROBLEMS.append((check, msg))


def note(check, msg):
    NOTES.append((check, msg))


def read(rel):
    p = os.path.join(ROOT, rel)
    if not os.path.exists(p):
        return None
    return open(p, encoding='utf-8').read()


def candidate_bases():
    """工作区根 + 各子目录 + 每个项目/仓库目录（含常用子目录）。"""
    bases = ['', 'tools', 'tools/流程', 'projects', 'probes', '公开资料',
             'MiliastraAgent', 'MiliastraAgent/release', 'MiliastraAgent/release/tools',
             'miliastra-beyond-simulator', 'miliastra-beyond-simulator/studio',
             'miliastra-beyond-simulator/mcp', 'refs']
    for top in ('projects', 'refs'):
        d = os.path.join(ROOT, top)
        if os.path.isdir(d):
            for name in sorted(os.listdir(d)):
                if os.path.isdir(os.path.join(d, name)):
                    bases.append(f'{top}/{name}')
                    for sub in ('lua_out', 'art', 'gia_out', 'demo', 'sprites'):
                        if os.path.isdir(os.path.join(d, name, sub)):
                            bases.append(f'{top}/{name}/{sub}')
    return bases


def resolve(ref, bases, where=None):
    """逐个基准找该引用；支持 release/ 等精简前缀与引用文件自身目录。"""
    variants = [ref]
    for pre, full in PREFIX_ALIAS.items():
        if ref.startswith(pre) and not ref.startswith(full):
            variants.append(full + ref[len(pre):])
    cands = []
    for v in variants:
        for b in bases:
            cands.append(os.path.join(ROOT, b, v) if b else os.path.join(ROOT, v))
        for w in (where or ()):
            cands.append(os.path.normpath(os.path.join(ROOT, os.path.dirname(w), v)))
    return any(os.path.exists(c) for c in cands)


def all_manuals():
    out = list(MANUALS)
    proj_dir = os.path.join(ROOT, 'projects')
    if os.path.isdir(proj_dir):
        for name in sorted(os.listdir(proj_dir)):
            if os.path.isdir(os.path.join(proj_dir, name)):
                for m in PROJECT_MANUALS:
                    rel = f'projects/{name}/{m}'
                    if os.path.exists(os.path.join(ROOT, rel)):
                        out.append(rel)
    return out


def check_cross_references(texts, bases):
    pat = re.compile(r'`([^`\n]+?\.(?:md|py|mjs|js|json|lua|gia|gil|ts|txt|png))`')
    refs = {}
    for rel, t in texts.items():
        for m in pat.finditer(t):
            r = m.group(1).strip()
            if re.search(r'[<>*]|\.\.\.', r):          # 占位符
                continue
            if CMD_HINT.search(r):                      # 命令行片段
                continue
            if r.startswith(SKIP_PREFIX):               # 外部路径
                continue
            refs.setdefault(r, set()).add(rel)
    ok = 0
    for r, where in sorted(refs.items()):
        if resolve(r, bases, where):
            ok += 1
            continue
        # 只在"看起来是工作区自有文档/脚本"时告警
        if ('/' in r or '\\' in r
                or re.match(r'^(AGENTS|工具书|流程规范|项目状态|交付说明|执行经验|技术调研|参考_)', r)):
            warn('1 交叉引用', f'{r}  →未找到（出现于 {", ".join(sorted(where))}）')
    return len(refs), ok


def check_sections(texts):
    heads = {}
    for rel, t in texts.items():
        heads[rel] = set(re.findall(r'^#+\s*([0-9]+(?:\.[0-9]+)?)', t, re.M))
    root_secs = heads.get('AGENTS.md', set())
    for rel, t in texts.items():
        own = heads.get(rel, set())
        for line in t.splitlines():
            if '§' not in line:
                continue
            # 外部文档引用（release/00 档位表、分册编号等）跳过
            if re.search(r'release/|档位|分册|工具书|00_主控|release\s*00', line):
                continue
            for sec in re.findall(r'§\s*([0-9]+(?:\.[0-9]+)?)', line):
                if sec in own or sec in root_secs:
                    continue
                warn('2 §引用', f'{rel} 引用 §{sec}，但本文件与根 AGENTS.md 都无此节')
    return len(root_secs)


def check_tokens(texts):
    n_warn = 0
    for rel, t in texts.items():
        for i, line in enumerate(t.splitlines(), 1):
            body = re.sub(r'~~.+?~~', '', line)       # 删除线内视为已作废
            for tok in STALE_TOKENS:
                if tok in body:
                    warn('3 旧口径', f'{rel}:{i} 含「{tok}」（不在删除线内，确认是否已更新）')
                    n_warn += 1
            for tok in TODO_TOKENS:
                if tok in body:
                    note('3 待办提示', f'{rel}:{i} 含「{tok}」')
    return n_warn


def check_mirror(texts):
    tb = texts.get('工具书_资产与引用规范.md') or ''
    ag = texts.get('AGENTS.md') or ''
    declared = bool(re.search(r'镜像进 ?`?AGENTS\.md`? ?§9\.5|镜像范围', tb))
    bad = 0
    for k in MIRROR_KEYS:
        a, b = k in tb, k in ag
        if a != b:
            warn('4 镜像义务', f'「{k}」工具书={a} 根AGENTS={b}（声明镜像到 §9.5，应两边都在）')
            bad += 1
    return declared, bad


def check_state_files(texts):
    need = [('当前步骤', r'当前(步骤|阶段)'), ('下一步', r'##\s*下一步'), ('等用户/阻塞', r'阻塞|等用户|待用户')]
    targets = [p for p in texts if p.endswith('项目状态与立项卡.md')]
    for rel in targets:
        miss = [name for name, pat in need if not re.search(pat, texts[rel])]
        if miss:
            warn('5 状态三样', f'{rel} 缺: {", ".join(miss)}')
    return len(targets)


def check_ledger(texts):
    tb = texts.get('工具书_资产与引用规范.md') or ''
    proj_dir = os.path.join(ROOT, 'projects')
    missing = []
    # projects/ 是我方关卡产物，**不要求**台账登记（2026-10-11 用户口径）；
    # 仅作提示列出，供知情，不计入退出码。台账只登资源类资产（含 GitHub 来源的工具/资料）。
    if os.path.isdir(proj_dir):
        for name in sorted(os.listdir(proj_dir)):
            if os.path.isdir(os.path.join(proj_dir, name)) and name != 'scratch_render':
                if name not in tb:
                    missing.append(name)
    for name in missing:
        note('6 台账对目录', f'projects/{name} 未在工具书台账登记（我方产物，登记非必需）')
    for m in re.finditer(r'`(projects/[^`\n]+?)`', tb):
        p = m.group(1).strip().rstrip('/')
        if p.endswith('...') or '<' in p:
            continue
        if not os.path.exists(os.path.join(ROOT, p)):
            warn('7 台账对文件', f'台账引用 {p} 不存在')
    return len(missing)


def check_skill_registry():
    """第 8 项：技能登记（复用 check_skill_registry.scan，避免两套判定漂移）。"""
    try:
        import check_skill_registry as csr
    except Exception as e:  # 同目录导入失败（如被单独拷走）
        warn('8 技能登记', f'检查器不可用：{e}')
        return 0
    try:
        w, n, _st = csr.scan(ROOT)
    except Exception as e:
        warn('8 技能登记', f'检查器执行失败：{e}')
        return 0
    for m in w:
        warn('8 技能登记', m)
    for m in n:
        note('8 技能登记', m)
    return len(w)


def check_integration():
    """第 9 项：接入检查（复用 check_integration.scan，避免两套判定漂移）。"""
    try:
        import check_integration as ci
    except Exception as e:  # 同目录导入失败（如被单独拷走）
        warn('9 接入检查', f'检查器不可用：{e}')
        return 0
    try:
        w, n, _st = ci.scan(ROOT)
    except Exception as e:
        warn('9 接入检查', f'检查器执行失败：{e}')
        return 0
    for m in w:
        warn('9 接入检查', m)
    for m in n:
        note('9 接入检查', m)
    return len(w)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--quiet', action='store_true', help='只打印告警与提示')
    args = ap.parse_args()

    bases = candidate_bases()
    texts = {}
    for rel in all_manuals():
        t = read(rel)
        if t is None:
            warn('0 手册清单', f'{rel} 不存在')
        else:
            texts[rel] = t

    nrefs, nok = check_cross_references(texts, bases)
    nsec = check_sections(texts)
    nstale = check_tokens(texts)
    declared, nmirror = check_mirror(texts)
    nstate = check_state_files(texts)
    nledger = check_ledger(texts)
    nskill = check_skill_registry()
    nintegr = check_integration()
    n_todo = len([n for n in NOTES if n[0].startswith('3')])

    if not args.quiet:
        print('=' * 74)
        print(f'工作区自检 · 手册 {len(texts)} 份 · 解析基准 {len(bases)} 个')
        print(f'  1 交叉引用 : 引用 {nrefs} 个路径，解析通过 {nok}')
        print(f'  2 §引用    : 根 AGENTS 章节 {nsec} 个')
        print(f'  3 旧口径   : 告警 {nstale} 处；待办提示 {n_todo} 处')
        print(f'  4 镜像义务 : 声明={declared}，不一致 {nmirror} 项')
        print(f'  5 状态三样 : 检查 {nstate} 个状态文件')
        print(f'  6 台账登记 : 未登记项目 {nledger} 个' + ('（仅提示）' if nledger else ''))
        print(f'  8 技能登记 : 未注册技能 {nskill} 个')
        print(f'  9 接入检查 : 接入告警 {nintegr} 条')
        print('=' * 74)

    if NOTES:
        print(f'提示 {len(NOTES)} 条（合法待办，供复核，不计退出码）：')
        for chk, msg in NOTES:
            print(f'  [{chk}] {msg}')
    if PROBLEMS:
        print(f'\n告警 {len(PROBLEMS)} 条：')
        for chk, msg in PROBLEMS:
            print(f'  [{chk}] {msg}')
        print('\n结论：有告警——逐条确认后修正（或标注为已知遗留）。')
        return 2
    print('\n结论：无告警 ✓')
    return 0


if __name__ == '__main__':
    sys.exit(main())
