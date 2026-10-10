"""check_skill_registry.py — 技能登记检查：找"磁盘上有、但宿主索引里没有"的技能

定位：治「新克隆的仓库里带 skill，却因为宿主只认显式白名单而被静默过滤（吃灰）」。
客观可判定，不做语义判断。三个判定档：
  已注册   ：SKILL.md 的父目录落在 skills.external_dirs / skills.create_dir 之下
  副本     ：未注册，但与某个已注册 SKILL.md 逐字节相同（构建产物副本，如 dsh-plugin/presets/**）→ 仅提示
  未注册   ：未注册且内容独立 → 告警（这才是"新仓库的技能没人登记"的捕获点）
另外两类提示：无 frontmatter 的 SKILL.md（宿主会用目录名当技能名）、外部失效的登记路径。

退出码：0 = 无告警；2 = 有未注册技能。
用法：
  py tools/check_skill_registry.py            # 人类可读
  py tools/check_skill_registry.py --quiet    # 只打印告警与提示
被 tools/audit_workspace.py 以 scan() 复用（第 8 项检查）。
"""
import argparse
import hashlib
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 与 Hermes 扫描器保持一致的排除目录（agent/skill_utils.py: EXCLUDED_SKILL_DIRS + 构建产物）
EXCLUDED_DIRS = {
    '.git', '.github', '.hub', '.archive', '.curator_backups', '.locks',
    '.venv', 'venv', 'node_modules', 'site-packages', '__pycache__',
    '.tox', '.nox', '.pytest_cache', '.mypy_cache', '.ruff_cache',
    'dist', 'build', 'release',
}


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


def config_path():
    return os.path.join(hermes_home(), 'config.yaml')


def _skills_block(txt):
    """抽出顶层 skills: 段的文本（到下一条顶层键为止）。"""
    m = re.search(r'(?ms)^skills:[ \t]*\n(.*?)(?=^\S|\Z)', txt)
    return m.group(1) if m else ''


def _list_value(block, key):
    """从 skills 段里取 key 的列表值；支持块状（- 项）与行内 [a, b] 两种写法。

    注意：不能用"下一个看起来像 key: 的行"作终止条件——Windows 路径 `D:/...` 里含冒号，
    会被误判成新键，导致列表读成空（实测踩过）。
    """
    lines = block.splitlines()
    head = re.compile(r'^[ \t]+%s:[ \t]*' % re.escape(key))
    idx = next((i for i, l in enumerate(lines) if head.match(l)), None)
    if idx is None:
        return []
    first = head.sub('', lines[idx]).strip()
    items = [first] if first else []
    for l in lines[idx + 1:]:
        if re.match(r'^[ \t]+-', l):
            items.append(re.sub(r'^[ \t]+-[ \t]*', '', l).strip())
        elif not l.strip():
            continue
        else:
            break
    items = [i.strip().strip('"\'') for i in items if i.strip()]
    if len(items) == 1 and items[0].startswith('['):
        try:
            return [str(x) for x in json.loads(items[0])]
        except Exception:
            return [p.strip().strip('"\'') for p in items[0].strip('[]').split(',') if p.strip()]
    return items


def _expand(entry):
    """展开 ~ 与 ${VAR}，相对路径按 HERMES_HOME 解析（与 Hermes 同口径）。"""
    p = os.path.expandvars(os.path.expanduser(entry.strip()))
    if not os.path.isabs(p):
        p = os.path.join(hermes_home(), p)
    return os.path.normpath(p)


def registered_dirs():
    """已登记的技能搜索目录 → (存在的, 失效的, 配置文件路径, 读失败原因)。"""
    cfg = config_path()
    if not os.path.exists(cfg):
        return [], [], cfg, '配置文件不存在'
    try:
        txt = open(cfg, encoding='utf-8').read()
    except OSError as e:
        return [], [], cfg, str(e)
    block = _skills_block(txt)
    raw = list(_list_value(block, 'external_dirs')) + list(_list_value(block, 'create_dir'))
    ok, dead = [], []
    for entry in raw:
        p = _expand(entry)
        (ok if os.path.isdir(p) else dead).append(p)
    seen = set()
    ok = [p for p in ok if not (p in seen or seen.add(p))]
    seen = set()
    dead = [p for p in dead if not (p in seen or seen.add(p))]
    return ok, dead, cfg, None


def walk_skill_mds(root):
    found = []
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in EXCLUDED_DIRS]
        if 'SKILL.md' in filenames:
            found.append(os.path.join(dirpath, 'SKILL.md'))
    return sorted(found)


def _under(path, bases):
    ap = os.path.abspath(path)
    for b in bases:
        ab = os.path.abspath(b)
        try:
            if os.path.commonpath([ap, ab]) == ab:
                return True
        except ValueError:  # 不同盘符
            continue
    return False


def _sha(path):
    try:
        return hashlib.sha256(open(path, 'rb').read()).hexdigest()
    except OSError:
        return ''


def _fm_name(path):
    """frontmatter 里的 name；无 frontmatter 或无名时返回 None。"""
    try:
        txt = open(path, encoding='utf-8').read(4000)
    except OSError:
        return None
    if not txt.startswith('---'):
        return None
    end = txt.find('\n---', 3)
    if end < 0:
        return None
    for line in txt[3:end].splitlines():
        s = line.strip()
        if s.startswith('name:'):
            v = s.split(':', 1)[1].strip().strip('"\'')
            return v or None
    return None


def _rel(p, root):
    try:
        return os.path.relpath(p, root)
    except ValueError:
        return p


def scan(root=ROOT):
    """返回 (warnings, notes, stats)。"""
    warnings, notes = [], []
    ok, dead, cfg, err = registered_dirs()

    if err:
        warnings.append('读不到 Hermes 配置（%s）：%s —— 无法判定登记状态' % (cfg, err))
    elif not ok:
        warnings.append('Hermes 配置（%s）里 skills.external_dirs 为空 —— '
                        '位于工作区的技能不会进入宿主索引；登记步骤见 tools/首次接手.md' % cfg)

    for p in dead:
        notes.append('失效登记（目录不存在）：%s' % p)

    mds = walk_skill_mds(root)
    reg_sha = {}
    for base in ok:
        for md in walk_skill_mds(base):
            reg_sha.setdefault(_sha(md), md)

    replica, nofm, unreg = [], [], []
    for md in mds:
        if _under(md, ok):
            continue
        sh = _sha(md)
        if sh and reg_sha.get(sh):
            replica.append((md, reg_sha[sh]))
            continue
        name = _fm_name(md)
        if name:
            unreg.append((name, md))
        else:
            nofm.append(md)

    for md, src in replica:
        notes.append('副本（与已注册内容逐字节相同，可忽略）：%s  ←  %s'
                     % (_rel(md, root), _rel(src, root)))
    for md in nofm:
        notes.append('无 frontmatter（宿主会用目录名当技能名）：%s' % _rel(md, root))
    for name, md in unreg:
        warnings.append('未注册技能 `%s`：%s —— 需登记才可被宿主发现'
                        '（external_dirs 或项目级 skills/）；登记步骤见 tools/首次接手.md'
                        % (name, _rel(md, root)))

    stats = {'registered': len(ok), 'found': len(mds), 'replica': len(replica),
             'nofm': len(nofm), 'unreg': len(unreg), 'dead': len(dead), 'config': cfg}
    return warnings, notes, stats


def main():
    ap = argparse.ArgumentParser(description='技能登记检查')
    ap.add_argument('--quiet', action='store_true', help='只打印告警与提示')
    ap.add_argument('--root', default=ROOT, help='扫描根（默认工作区根）')
    args = ap.parse_args()

    warnings, notes, st = scan(args.root)

    if not args.quiet:
        print('=' * 74)
        print('技能登记检查 · 扫描根 %s' % args.root)
        print('  配置       : %s' % st['config'])
        print('  已登记目录 : %d 个' % st['registered'])
        print('  磁盘技能   : %d 个 SKILL.md（副本 %d · 无 frontmatter %d · 未注册 %d）'
              % (st['found'], st['replica'], st['nofm'], st['unreg']))
        print('=' * 74)

    if notes:
        print('提示 %d 条（不计退出码）：' % len(notes))
        for m in notes:
            print('  [提示] %s' % m)
    if warnings:
        print('\n告警 %d 条：' % len(warnings))
        for m in warnings:
            print('  [告警] %s' % m)
        print('\n结论：有未登记技能 —— 登记后它们才会被宿主发现（不代表内容有问题）。')
        return 2
    print('\n结论：技能登记齐全 ✓')
    return 0


if __name__ == '__main__':
    sys.exit(main())
