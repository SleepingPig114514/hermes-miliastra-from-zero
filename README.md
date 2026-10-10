# Hermes 0 基础千星奇域制作 · AI 工作区

在**原神千星沙箱（千星奇域 UGC 编辑器）**里，用 AI 把 2D 玩法从想法做到**真机可交付**的工作区。
核心资产是提示词包（`MiliastraAgent/`）、第三方高保真模拟器（`miliastra-beyond-simulator/`）与一套自研门禁工具（`tools/`）。

---

## 📦 关于本仓库（分享快照）

这是**一份个人 AI 工作区的快照**，用于分享「用 AI 做千星奇域（Miliastra）2D 关卡」的完整工作流：自研的门禁工具、作业手册、资产与引用规范，**以及**为便于开箱上手而一并打包的第三方项目副本。

与源工作区的差异，请先知悉：

| 差异 | 说明 |
|---|---|
| **上游仓库已剥离 `.git`** | 16 个第三方仓库（`MiliastraAgent/`、`miliastra-beyond-simulator/`、`refs/` 下 14 个）在此以**普通文件**随附，无需自行 clone；代价是**不能再 `git pull`**，要更新请回各自上游（见下文「上游仓库来源与许可」） |
| **`projects/` 未随附** | 那是作者的个人关卡产物。`AGENTS.md`、`工具书_资产与引用规范.md` 中引用 `projects/…` 的路径是**源工作区的记录**，在本仓库中不存在 |
| **4 个子模块已注册** | `refs/Miliastra-toolbox` 与 `refs/WebMiliastraNodesEditor` 下有 4 个上游子模块（源工作区里同样是空的）。用 `git clone --recurse-submodules` 可自动拉齐，见 `.gitmodules` |
| **RAG 向量库未随附** | `refs/Miliastra-toolbox/knowledge/rag_v1/db/chroma.sqlite3`（47.6MB）**有意不带**，避免本地数据库的格式差异；语料随子模块到位，可用一条命令自建（见「开箱状态清单」） |
| **本地缓存已剔除** | `node_modules/`、`__pycache__/`、Godot `.import/` 等可再生成物未随附 |

> 上游项目**不是本仓库作者的作品**，各归其原作者与许可证（见文末「第三方内容归属与免责」）。

---

## 🧰 clone 下来就能用吗？—— 开箱状态清单

推荐这样克隆（`--recurse-submodules` 会自动拉齐 4 个子模块）：

```bash
git clone --recurse-submodules <本仓库URL>
cd <克隆下来的目录>
python tools/bootstrap.py --all
#   ↑ 一键初始化：拉子模块 → 查构建产物 → 装依赖/构建 → 注册 4 个技能与 MCP → 列出自建项
#   不带 --all 则只做安全修复（拉子模块），其余只给命令，不做静默改动
```

| 项 | clone 后 | 说明 |
|---|---|---|
| 工作区全部文件（6319 个） | ✅ **齐全，且逐字节与原工作区一致** | 含上游 16 个项目的完整文件 |
| 4 个子模块 | ✅ 需 `--recurse-submodules` | 若漏了该参数，目录为空：`git submodule update --init --recursive` 补拉 |
| ⚠️ **子模块的网络前提** | — | 这 4 个子模块的**上游仓库均在 GitHub**（见 `.gitmodules`）。**国内网络下 github.com 直连不通**，`--recurse-submodules` 会失败；先设代理再拉，例如 `set HTTPS_PROXY=http://127.0.0.1:<端口>`（Windows）／`export HTTPS_PROXY=…`（Linux/macOS）。**主仓内容不受影响，仅子模块需要** |
| 模拟器构建产物 `dist/`、`presets/` | ✅ 已随附 | 上游 `.gitignore` 排除项，本仓已一并打包，**无需 `pnpm build`** |
| `node_modules/` | ⚠️ 未随附 | 平台相关依赖，需自行 `pnpm install && pnpm build`（任何 JS 项目皆然） |
| `projects/` | ⚠️ 未随附 | 作者的个人关卡产物（见上表） |
| RAG 向量库（知识库检索用） | ⚠️ 需自建 | 本仓**有意不带**（避免本地 DB 格式差异）。语料随子模块到位，三条命令自建：<br>`cd refs/Miliastra-toolbox/knowledge/rag_v1`<br>`cp .env.example .env`（填 `OPENAI_API_KEY`）<br>`pip install -r requirements.txt && python rag_cli.py init` |
| 技能注册 / MCP 接入 | ⚠️ 一条命令 | `python tools/bootstrap.py --register`（**改完需重启宿主或 `/reload-mcp`**） |
| 账号奇匠等级 ≥ Lv.2 | ⚠️ 需人工 | 真机文字渲染的账号门槛，属宿主环境 → [`tools/首次接手.md`](tools/首次接手.md) |

---

## ⚠️ 先读这一段：本工作区**不是拷贝即用**

目录里的文件可以照抄，但**有几项必须在你自己的机器上初始化**，否则会出现下面这些**静默失败**（不报错，只是不生效）：

| 没初始化 | 症状 |
|---|---|
| 未注册技能 | AI 看不到那 4 个技能（模拟器用法 / 七步流程 / 官方文档检索 ×2），只能靠猜 |
| 未接入 MCP | AI 无法操作模拟器：不能编辑工程、不能试玩、不能截图 |
| 上游子模块未初始化 | 4 个目录为空（clone 时漏了 `--recurse-submodules`）→ `python tools/bootstrap.py` 可补 |
| 账号奇匠等级 < Lv.2 | 真机里**文字一个像素都不渲染**，底框却正常——看着像代码 bug，实际是账号门槛 |

**初始化一条命令**（检查 + 补齐 + 列出还缺什么）：

```bash
python tools/bootstrap.py --all      # 只想看不动手：加 --check
```

逐条原理与真机侧说明 → [`tools/首次接手.md`](tools/首次接手.md)；工作区自检 → `py tools/audit_workspace.py`。

---

## 从哪开始读

| 你想做什么 | 读哪份 |
|---|---|
| **首次拿到这个工作区** | [`tools/首次接手.md`](tools/首次接手.md) ← 先做这个 |
| 了解工作区结构与流程 | [`AGENTS.md`](AGENTS.md)（目录总览、七步流程、平台能力速查） |
| 查资产 / 证据等级 / 冲突裁决 | [`工具书_资产与引用规范.md`](工具书_资产与引用规范.md)（**开工必读**） |
| 做具体项目（阶段→分册） | [`tools/作业手册.md`](tools/作业手册.md)（薄路由器） |
| 人机分工流水线 | [`流程规范_AI自动化制作v2.md`](流程规范_AI自动化制作v2.md) |
| 项目产物 | `projects/<玩法名>/`（每项目五件套） |

## 目录一览

```
AGENTS.md                      工作区总手册（结构 / 流程 / 平台能力速查）
工具书_资产与引用规范.md        资产台账 / 权威分级 / 证据库 / 引用格式（开工必读）
流程规范_AI自动化制作v2.md      人机分工流水线（P0–P7）
README.md                      本文件
IDEA.md                        一句话定位
MiliastraAgent/                上游：提示词包（release/ 七步分册 + 沙箱 + qx2d）
miliastra-beyond-simulator/    上游：高保真模拟器（UI 编辑 / 渲染试玩 / MCP / 真机探针契约）
refs/                          外部参考仓库（含 Miliastra-toolbox 知识库技能源）
tools/                         本工作区自研工具 + 作业手册 + 首次接手指引 + Hermes 适配技能
projects/                      各玩法项目（**本分享仓未随附**）
probes/                        真机探针证据原件（只读勿删）
公开资料/                      外部收集参考
```

## 上游仓库来源与许可（共 14 个仓库；**副本已随附**，但已剥离 `.git`）

> ⚠️ 本分享仓中这些目录是**剥离了 `.git` 的文件快照**：内容开箱可用，但 `py tools/check_upstream.py --fetch`、`git pull`、`git submodule update --init` 均**不可用** —— 要更新或取子模块内容，请回各自上游仓库。

**完整台账（URL / 分支 / 子模块 / 当前 HEAD）见 [`refs/README.md`](refs/README.md#上游仓库台账全工作区-14-个-git-仓库--2026-10-11-实测)**。

主要的三项：

| 目录 | 来源 | 分支 | 许可 |
|---|---|---|---|
| `MiliastraAgent/` | `https://github.com/ThRabbit-Studio/MiliastraAgent` | `main` | GPL-3.0 |
| `miliastra-beyond-simulator/` | `https://github.com/1475505/miliastra-beyond-simulator` | `master` | GPL-3.0-only |
| `refs/Miliastra-toolbox/`（知识库技能源） | `https://github.com/1475505/Miliastra-toolbox` | `main` | ⚠️ 上游未声明许可 |

> 其余 11 个参考仓库位于 `refs/`（GIA 工具链、节点图工具、开源游戏源码、英文 API 站等），来源、分级与各自许可证见 [`refs/README.md`](refs/README.md)。
> **4 个子模块已在本仓注册**（见 [`.gitmodules`](.gitmodules)）：`refs/Miliastra-toolbox/knowledge/Miliastra-knowledge`（知识库文档本体）与 `refs/WebMiliastraNodesEditor/` 下的 3 个服务端仓库。用 `git clone --recurse-submodules` 自动拉齐；已克隆过则 `git submodule update --init --recursive`。
>
> ⚠️ 注意：这些**外层目录**（`refs/Miliastra-toolbox/`、`refs/WebMiliastraNodesEditor/`）本身在源工作区与上游都是独立 git 仓库，本仓只做了文件快照；因此不要在其中执行 git 命令。

### 与上游的已知差异（2 个文件）

为保证「clone 结果与原工作区**逐字节一致**」，本仓对 2 个上游文件做了**最小改动**（各追加 1 行，均带 `【本分享仓的本地改动】` 注释）：

| 文件 | 改动 | 原因 |
|---|---|---|
| `refs/Ayaya_Miliastra_Editor/.gitattributes` | 末尾追加 `* -text` | 上游 `* text=auto` 会把工作区的 CRLF 归一为 LF，使 3609 个文件与源不一致 |
| `refs/ikemen/.gitattributes` | 末尾追加 `* -text` | 同上，影响 44 个文件 |

> `refs/Miliastra-toolbox/.gitattributes` 原样保留（其 `filter=lfs` 声明所指向的向量库本仓不带，故无需改动）。

除此之外，`refs/`、`MiliastraAgent/`、`miliastra-beyond-simulator/`、`tools/`、`公开资料/`、`probes/` 下的文件**未被改动**（全仓索引项逐字节校验通过）。

> 注：上游 6 个仓库自带 `.gitattributes`。Git 规则是「目录越深优先级越高」，故根目录的 `.gitattributes` **盖不过**它们——上述追加行是唯一可行的写法。

### 作者原创内容的许可（MIT）

本仓库中由**作者原创**的部分 —— 根目录文档（`README.md`、`AGENTS.md`、`IDEA.md`、`工具书_资产与引用规范.md`、`流程规范_AI自动化制作v2.md`）、`tools/`、`refs/README.md` —— 采用 **MIT 许可证**（全文见 [`LICENSE`](LICENSE)），可自由使用、修改、分发。

> 上述范围**之外**的内容（下一节所列）不在该许可范围内。

### 第三方内容归属与免责

**以下内容的版权与许可归各自原作者，本仓库不主张任何权利，仅作引用与打包便利。**

| 目录 | 许可 | 备注 |
|---|---|---|
| `MiliastraAgent/` | GPL-3.0 | 另附免责声明：禁止二次包装发布/出售 |
| `miliastra-beyond-simulator/` | GPL-3.0-only | |
| `refs/Ayaya_Miliastra_Editor/` | GPL-3.0 | |
| `refs/WebMiliastraNodesEditor/` | GPL-3.0 | ⚠️ 其 README 警告：自制 GIA/GIL 导入可能违反米哈游条款，后果自负 |
| `refs/miliastra-decoration-splitter/` | GPL-3.0 | |
| `refs/miliastra-image-to-gia/` | GPL-3.0 | |
| `refs/miliastra-server-client-ui-converter/` | GPL-3.0 | |
| `refs/genshin-ts/` | MIT | |
| `refs/ikemen/` | MIT | |
| `refs/miliastra-image-to-primitive-shape-ui/` | MIT | |
| `refs/miliastra-lua-api/` | MIT | |
| `refs/Genshin-Impact-Miliastra-Wonderland-Code-Node-Editor-Pack/` | MIT 式 | Copyright 2025-2026 Wu-Yijun |
| `refs/godot-fighter/` | ⚠️ **未声明许可** | 仓库未附 LICENSE；素材为 **CC BY-NC**（禁商用）。仅作只读参考 |
| `refs/Miliastra-toolbox/` | ⚠️ **未声明许可** | 原作者将知识库技能部分标注为 Proprietary |

**免责声明**：本仓库为个人学习与工作流记录，与米哈游 / miHoYo **无任何关联**，未获其授权或认可。游戏中出现的名称、素材与文档版权归米哈游所有。使用者须自行遵守米哈游用户协议及各第三方项目许可证；因使用本仓库内容产生的一切后果由使用者自负。

## 使用须知

- 真机侧操作（导入 `.gia`、挂载容器、Ctrl+S 保存、试玩验收）**无法自动化**，必须人工完成；流程与操作卡见 `tools/流程/` 与 `tools/导入操作卡模板.md`。
- 模拟器通过 **≠** 真机通过；交付说明必须附实测数据。
- 许可：作者原创部分采用 MIT（见 [`LICENSE`](LICENSE)）；第三方内容归各自原作者，其许可证与免责声明同样适用（见上「第三方内容归属与免责」）。
