# 千星沙箱 · 项目手册（MiliastraAgent 工具介绍）

> 项目定位（见 IDEA.md）：原神千星沙箱的相关资源。
> 当前核心资产：`MiliastraAgent/`（克隆自 https://github.com/ThRabbit-Studio/MiliastraAgent ，浅克隆 main，可 `git pull` 更新）。
> 这是一套让 AI 把「千星平台」2D 关卡从想法做到可交付的工作包。
> 工作方式一句话：**提示词决定"怎么做"，工具负责"生成与校验"，沙箱负责"先跑一遍"。**
> **开工前必读 `工具书_资产与引用规范.md`**（工作区根）：资产台账、P0–P5 权威分级与冲突裁决、真机证据库、双工具链（release 沙箱/beyond-simulator）分工、引用格式。本文件只留流程规则；两本配套使用，新资产入库先登工具书再在此留指针。
> **⚠️ 本工作区不是拷贝即用**：目录可照抄，但**技能注册 / MCP 接入 / 上游 clone / 账号奇匠等级**四项必须在你自己机器上初始化，否则**静默失效**（不报错、只是不生效）。初始化步骤 → **`tools/首次接手.md`**；一次性自检 → `py tools/audit_workspace.py`。
> **多会话接力的作业入口 = `tools/作业手册.md`**（薄路由器：阶段→`tools/流程/` 分册对照、现成工具路径表、跨会话交接协议）；规则不重复，按手册指针查权威文档。

---

## 0. 首次接手（新机器 / 新协作者）

本工作区**不含**上游仓库副本，且宿主侧配置不随目录走。拿到后先做这四件事（详情 → `tools/首次接手.md`）：

| # | 做什么 | 漏了会怎样 | 怎么看是否已做 |
|---|---|---|---|
| 1 | clone 三个上游仓库（`MiliastraAgent` / `miliastra-beyond-simulator` / `refs/Miliastra-toolbox`），beyond 需 `pnpm install && pnpm build` | 技能与模拟器本体不存在 | 见 `README.md` 的"上游仓库来源"表 |
| 2 | 注册技能：`hermes config set skills.external_dirs '[...]'` | AI 看不到 4 个技能 | `py tools/check_skill_registry.py` |
| 3 | 接入 MCP：`hermes mcp add qxqy-simulator …` + 重启宿主 | AI 无法操作模拟器 | `py tools/check_integration.py` |
| 4 | 真机前置：账号**奇匠等级 ≥ Lv.2**；`deploy_lua.py` 目录绑定 | 真机文字不渲染（不报错） | 《工具书》顶部「等级门槛」 |

**一条命令总检**：`py tools/audit_workspace.py`（退出码 0 = 无告警）。
**上游更新检查**：`py tools/check_upstream.py --fetch`（只读比对，不写本地；离线去掉 `--fetch` 只列台账）。

---

## 1. 目录总览

```text
MiliastraAgent/
├── release/                  提示词包（核心交付物）
│   ├── 00_主控与派单.md       ← 入口，先读这个
│   ├── 01 … 07               七步流程分册（每步一本）
│   ├── 08 … 12               参考资料（平台玩法/布局锚点/运行期/子代理总表/故障案例库）
│   ├── 20/21/23/24/25        子代理任务书与自绘要点
│   ├── Lua客户端控件API文档.md          接口唯一权威
│   ├── 客户端控件及脚本使用指南.md       编辑器操作唯一权威
│   └── tools/
│       ├── qx2d/             画面生成工具（pixel/frames/shapes/anim）
│       ├── qx2d_mcp.py       MCP 服务入口
│       ├── sandbox/          体外沙箱（网页 + 命令行 + 内置 Lua 5.3 虚拟机）
│       └── tests/            端到端自测与测试素材
├── README.md                 仓库总说明
└── LICENSE                   GPL-3.0（另附免责声明，见第 7 节）

miliastra-beyond-simulator/   第三方高保真模拟器（UI 编辑+渲染试玩+MCP+真机探针契约）——用法/状态见《工具书_资产与引用规范.md》
工具书_资产与引用规范.md        开工必读：资产台账 / P0–P5 权威分级 / 证据库 / 双工具链判据 / 引用格式
流程规范_AI自动化制作v2.md      GIA 资产通道版人机分工流水线（P0–P7）——新项目按此执行，与七步门禁语义兼容
projects/<玩法名>/            每个玩法项目五件套（见第 10 节）
公开资料/                     外部收集参考（只读派生，引用规则见工具书一·12）
refs/                         外部参考仓库（浅克隆只读；含开源游戏源码 + 千星工具链，A/B/C 运行分级见 refs/README.md）
tools/                        工作区自研工具（gil_id_extract.py 存档ID回收 / deploy_lua.py 门禁+部署 / audit_workspace.py 手册与台账自检 / check_skill_registry.py 技能登记检查 / 导入操作卡模板 / GIL-ID回收_runbook.md / **make_share.py 发布物生成 + 发布流程.md**）
tools/hermes-skills/          注册给 Hermes 的宿主适配技能——**只服务「千星沙箱模拟器」这一特定调试平台**（`miliastra-beyond-simulator`，原神千星奇域的第三方高保真模拟器＋MCP＋真机探针契约），**非通用组件**；正文在上游，此处仅薄适配（登记见工具书台账 #27）
probes/                       真机探针证据原件（只读勿删，见 probes/README.md）
```

## 2. 提示词分册体系（怎么用）

把 `release/` 整个目录交给支持 Agent 的 AI 工具（Claude Code / Cursor / Hermes 等），从 `00_主控与派单.md` 开始。

- **主控-子代理架构**：AI 当"项目主控"，只做三件事——分配、管理、验收；一切产出（策划案、Lua、对用户说的话）写成任务书派给子代理执行：
  | 任务书 | 负责什么 |
  |---|---|
  | `20_子代理_通用只读检索` | 查文档、找素材 |
  | `23_子代理_语法检查` | Lua 语法把关 |
  | `24_子代理_用户沟通` | 向用户追问、交付说明 |
  | `25_子代理_像素画与帧动画` | 执行 qx2d 四类画面命令并核对报告 |
- **七步流程**：项目立项 → 编策划案 → Demo 初审 → 编写 Lua → Bug 修复 → 版本迭代 → 最终交付。每步有进入条件和退出产物门禁，不达标不得进下一步。
- 派单前查 `11_参考_子代理总表.md`（该派哪几个 Agent、用什么档位）；遇问题查 `12_参考_故障案例库.md`。

## 3. qx2d 画面生成工具（`release/tools/qx2d/`）

一条命令把图片素材转成千星编辑器可用的控件数据，**默认输出 JSON，加 `--emit lua` 出脚本**。每条命令一律在 **`MiliastraAgent/release/`** 目录下执行（下文简写 `release/`，其全路径＝`MiliastraAgent/release/`；§1 目录树亦以此为根）。

| 子命令 | 做什么 | 输入 | 适用场景 |
|---|---|---|---|
| `pixel` | 像素画 → 图片控件拼图 | 像素风参考图 | 想要逐像素可控 |
| `frames` | 帧序列/GIF/WebP → 控件池帧动画 | 帧目录或多帧文件 | 已有动画素材 |
| `shapes` | 普通图片 → 矩形/椭圆/三角形图元拟合 | 照片、立绘、图标 | 渐变、抗锯齿边缘（pixel 会难看） |
| `anim` | 关键帧文档 → 变速/裁剪/缓动/平移动画 | `qx2d.keyframes` JSON | 调运动和时间轴，而非逐帧图 |

```bash
# 常用示例
python tools/qx2d/cli.py pixel  --input ref.png   --out out/pixel
python tools/qx2d/cli.py frames --input anim.gif  --out out/anim --fps 18 --pingpong
python tools/qx2d/cli.py shapes --input photo.png --out out/shapes --num-shapes 200
python tools/qx2d/cli.py anim   --input keyframes.json --out out/anim --speed 1.5
```

**关键约定**：
- **退出码即验收结论**：`0` 可用 / `2` 未达标（不要采用，看报告 `errors`、`verify` 调参重跑）/ `3` 输入或参数错误。
- 每次生成都用**独立实现**解码回产物重新栅格化校验，`verify.json_round_trip` 与 `errors.Q_to_grid` 必须全 0。
- 每次产出三件套：`<名>.json`（数据契约）、`<名>.report.json`（校验报告）、`<名>.preview.png`（预览）。
- 产物 `config` 段的 assetID 等常量（`--image-prefab-id` 等参数）**必须按本项目真实值填**，不能用默认 0。
- 有损参数（`--max-colors`、`--tau`）工具不会自动启用，需用户明确同意。
- 完整参数表与四份 JSON 契约见 `release/tools/README.md`（那是 25 号子代理的执行手册）。

**工具覆盖不到、要转回人工/子代理的活**（tools/README 第七节）：overpaint 分层、接入已有 levelScript、I/P 帧差分、父节点共同运动、运行时验证。

## 4. 体外沙箱（测试器，`release/tools/sandbox/`）

不进编辑器就能把 `levelScript.lua` 跑起来：内置 Lua 5.3 虚拟机（fengari，离线内置）+ 虚拟时钟 + 控件模型 + 输入模拟，输出结构化 JSON 报告。**纯本地离线运行，不联网、不上传素材。**

> **作业口径（用户拍板，2026-10-10）**：AI 的一切自测**直接用命令行模拟器**（`run_headless.mjs`）出结论，
> 不开网页版、不走浏览器验证；网页版（`index.html`）仅保留给用户手动调试。
> 交付说明里的"测试结果"一节必须贴命令行模拟器的实测报告数据，不得只凭代码正确口头宣布通过。

### 4.1 命令行版（**默认**逻辑门禁通道，交付前必过）

> 口径：本通道是**当前默认**，不是唯一——判据见 §4.2；更强的校验器（如 beyond 语义运行时）可**并列或替换**，替换口径见《工具书》§四 使用规则 1。

所有命令在 **`MiliastraAgent/release/`** 目录下执行（下文简写 `release/`＝`MiliastraAgent/release/`）。

```bash
node tools/sandbox/run_headless.mjs <脚本.lua> [选项]

# 标准交付验收（必跑）
node tools/sandbox/run_headless.mjs out/anim/levelScript.lua --fuzz 3000 --json
# 换设备形态 / 定点点击 / 存档报告
node tools/sandbox/run_headless.mjs script.lua --preset mobile-16-9 --ms 3000 --click 800,450 --out report.json
# 用真实常量覆盖沙箱占位值（拿到 annotations.lua 后必加）
node tools/sandbox/run_headless.mjs script.lua --annotations <项目>/annotations.lua
```

| 选项 | 说明 |
|---|---|
| `--preset <id>` | 设备预设：`pc-16-9`（默认）、`pc-21-9`、`mobile-16-9`、`mobile-19.5-9`、`mobile-4-3`、`pad-16-9`、`pad-21-9`、`mobile-pad` |
| `--canvas <WxH>` | 直接指定画布尺寸（优先于预设） |
| `--ms <毫秒>` / `--frames <帧数>` | 模拟时长（默认 3000ms）/ 按帧数（优先） |
| `--fuzz <毫秒>` `--fuzz-seed <n>` | 随机输入轰炸时长与种子（同种子可复现） |
| `--click <x,y>` | 在指定位置点一下（可重复多个） |
| `--play <文件.json>` | 按脚本化序列试玩：`[{at,action,...}]`，action 支持 click / move / drag / key / stick |
| `--annotations <文件>` | 先加载接口标注，让真实常量覆盖沙箱占位值 |
| `--out <文件>` / `--json` | 把报告写到文件 / 只输出 JSON |

**退出码即验收结论**：`0` 通过（或仅警告）/ `2` 失败（脚本报错或用了未支持接口）/ `3` 用法或文件问题。

### 4.2 报告字段与判据（`verdict=fail` 一律不交付）

报告顶层键：`sandbox`（版本/设备/画布/dt）、`verdict`、`timeMs`、`frames`、`script`、`controls`、`calls`、`errors[]`、`warnings[]`、`unsupported[]`、`logTail[]`（print/printerr 输出）、`notes`、`extra`。

| 字段 | 判定 |
|---|---|
| `verdict` | `pass` / `warn` / `fail`；fail 不交付 |
| `errors[]` | 必须为 0 |
| `unsupported[]` | 必须为 0（用了沙箱/真机都没有的写法；含正确接口名提示） |
| `controls.neverActivated` | 必须为 0（新建控件默认 `active=false`，忘 `SetActive(true)` 真机不显示） |
| `controls.createdAfterStart` / `destroyedAfterStart` | 播放期应当为 0（零创建零销毁） |
| `controls.leafWithoutListener` | 无监听的叶子控件，酌情核查 |
| `calls.maxSettersPerFrame` | 对照性能预算（每帧 setter 峰值） |
| `extra.runtime_verified` | 恒为 `pending`——真机试玩结论只能来自用户 |

### 4.3 能力边界（写代码前先对照）

**模拟了**：生命周期（`OnInit`/`OnStart`/`OnEnable`/`OnUpdate(dt)`/`OnLevelUpdate(dt)`/`OnDisable`/`OnDestroy`）；`game.*` 全局 API（控件创建/销毁/查找、画布尺寸、光标、设备、摇杆、时停、音效桩、Tween 补间、ServerSignal 桩、自定义变量、`PrintClientUITree`）；控件字段与 setter 族；输入命中测试（后创建、后置顶优先）与光标/按键/手柄事件；固定步长虚拟时钟（默认 1/60s，dt 可控）。

**没模拟 / 已知盲区（沙箱通过 ≠ 真机通过）**：
- 引擎渲染、遮罩/羽化/九宫格、真实字体排版——画布只是矩形近似；
- 布局模型是"锚点拉伸 + 中心偏移"简化版；枚举值是占位值（真值经 `--annotations` 传入）；
- 音频、ServerSignal、自定义变量只做桩，不真收发；
- **Lua 禁库盲区**：fengari 自带 `coroutine`/`io` 且沙箱不拦截，真机禁用（API:49–65）的写法在体外会假通过；
- **showCursor 盲区**：容器 `showCursor=false` 时真机所有光标监听失效，沙箱不校验；
- 未登记的控件方法直接报错而非静默忽略——这是故意设计，报告出现即脚本写错。

### 4.4 网页版（仅供用户手动调试，AI 不用）

双击 `index.html`（file:// 直开，零依赖）：粘脚本/拖文件 → 选设备形态 → 装载 → 启动；画布上点击即点击事件；有"随机输入轰炸""单步""暂停""销毁""出报告"。与命令行版共用同一份 `qx-sandbox.js`，行为一致。

### 4.5 维护与已修坑（改动沙箱后必跑回归）

```bash
node tools/sandbox/selftest.mjs --with-generated tools/tests/out   # 13 项：能跑、能抓错、生成物能过
python tools/tests/run_all.py                                      # 88 项：四个生成工具端到端
```

- 目录：`qx-sandbox.js` 核心（浏览器/Node 共用）· `run_headless.mjs` 命令行 · `app.js`+`index.html` 网页宿主 · `samples/` 正反例 · `build-vendor.mjs` 打包脚本 · `vendor/` 内置 fengari 与 sprintf-js。
- **本地补丁（勿丢）**：`vendor/fengari/src/luaconf.js:3` 的 `process.env` 裸引用已加 `typeof process` 守卫——上游漏网，缺它网页版加载即崩（Node 版不受影响，selftest 抓不到）。改了 `vendor/fengari/src` 后必须 `node build-vendor.mjs` 重新打包；`git pull` 后若网页版报"没有加载到 Lua 虚拟机"，先检查此补丁是否被覆盖，重新打上再重打包。
- 验证浏览器端行为无需真浏览器：Node 里 `globalThis.process = undefined; globalThis.Buffer = undefined;` 后 `require` bundle 走完整链路即可复现浏览器环境。

## 5. MCP 服务

想让 AI 直接当工具调用：

```bash
python tools/qx2d_mcp.py    # stdio，JSON-RPC 2.0
```

暴露 `pixel_reconstruct` / `frame_animate` / `shape_fit` / `anim_edit` 四个工具，参数与命令行同名（下划线写法），`isError=true` 等价 `ok=false`。

## 6. 自测（改动后的回归门槛）

```bash
python tools/tests/run_all.py                                     # 88 项：四个生成工具端到端
node tools/sandbox/selftest.mjs --with-generated tools/tests/out   # 沙箱：能跑、能抓错、生成物能过
```

## 7. 环境依赖与许可证红线

- **依赖**：Python 3.9+ 与 Pillow（`shapes` 另需 numpy）；沙箱需要 Node；编辑器内的操作、容器节点索引、控件模板索引仍需人工提供（见 `01_项目立项.md` 第三节）。
- **许可证**：代码 GPL-3.0；文档部分归属 @是兔头呀，README 免责声明明确——**禁止二次包装发布/出售、禁止引导开发侵权/违法奇域、禁止配置全自动开发奇域系统**。使用即视为同意。

---

## 8. 做一个新 2D 玩法的实际流程（按本项目实测情况修正）

> 环境已验证：PC 端原神 CN 7.1.0，千星沙箱可正常打开；「新建客户端脚本」支持直接选择本地已有文件，
> 因此**废弃仓库 `01_项目立项.md` 第三节"先建脚本→复制路径给 AI"的套路**，改为 AI 先写文件、用户导入时选路径。

### AI 负责（用户 0 开发经验，一切技术活不要求用户动手）

1. 读 `release/00_主控与派单.md` 按七步流程推进：立项追问 → 策划案 → Demo → 编写 Lua → 修 Bug → 迭代 → 交付；
2. 画面素材按 **§12 路线清单**（R1 官方素材拼合 / R2 自定义图→图元重构 / R3 混合；权威表见《工具书》§十）选路线与工具，**选型看实测判据、不看习惯**——现成工具优先，同类工具有多个时用数值比（例：图元拟合 `primitive-shape-ui` fill 比 qx2d shapes 高 2.2~3.3 PSNR）；
3. 把 `levelScript.lua` 写到本项目目录，**给出绝对路径**供用户导入；
4. 交付前跑命令行模拟器（第 4 节口径，**默认逻辑门禁通道**；判据不随工具变，更强校验器可并列/替换）：`node tools/sandbox/run_headless.mjs <脚本> --fuzz 3000 --json`，errors / unsupported / neverActivated 三项归零**且 `controls.created` 在预期量级**才交给用户，交付说明必须附实测报告数据。
5. 双工具链与画面级验证的分工、beyond-simulator 的使用规则，一律以《工具书_资产与引用规范.md》第四节为准；本文件不再单独维护该口径。
6. **所见即所得交付原则（用户 2026-10-10 拍板，最高优先级）**：凡向用户展示"效果"，必须来自 beyond-simulator 的真实渲染截图/GIF（AI 看到的与用户导入后看到的同源）；release 沙箱仅作逻辑门禁线。**禁止**用网页 Demo、色块矩形近似或纯代码正确性推断充当"导入后效果"。模拟器未仿真的四项差异（自适应字号、遮罩羽化、九宫格细节、动效资源播放）在每项目首次导入时用一张真机截图校准，其余一律以模拟器渲染为准。
7. **资产交付走 `.gia` 通道（2026-10-10 真机验证）**：UI 资产由 AI 在 beyond 生成整合包 → 用户经「资产导入导出管理」批量导入 → 回传模板索引 → 写 `annotations.lua`；不再要求用户手工逐个搭模板。完整人机分工见《流程规范_AI自动化制作v2.md》，5 条 P0 证据见工具书三节。

### 用户只需要做 3 件事

| # | 什么时候 | 做什么 | 说明 |
|---|---|---|---|
| 1 | 立项时 | 回答"想做什么玩法"（可附参考图） | 唯一的前置输入，口头即可 |
| 2 | **事后**（资产/脚本要进真机时） | `.gia` 放 `Beyond_Local_Export\` 根 → 「窗口」→「资产导入导出管理」→ 加载外部资产 → 转移 → **Ctrl+S 保存关卡**（模板索引由 AI 从关卡存档 `tools/gil_id_extract.py` 自动回收，不再逐个复制；每项目首轮抽查 1 条对检视器） | 操作卡见 `tools/导入操作卡模板.md`；旧"新建客户端脚本选路径"通道仍适用于无资产项目 |
| 3 | **事后**（脚本要挂载运行时） | 「界面控件组管理」→ 界面布局 → 添加界面控件 → 创建「客户端控件容器」→ **点「复制」把容器节点索引发给 AI**（这是**唯一**需要用户抄的 ID，因为它是编辑器侧的挂载动作） | 容器挂载不进 `.gia`（流程规范 v2 四·3），此项不可省 |
| 4 | 最终验收 | 进真机编辑器试玩 | 沙箱通过 ≠ 真机通过，此步不可省略 |

> **容器节点索引本身 AI 也能从关卡存档直读**（2026-10-11 实证：`容器节点` 与 `客户端控件容器` 都在 `.gil` 里按名出现，`gil_id_extract.py` 一并解出）——所以第 3 项让用户点「复制」只是**省一步直读/对帐**，不是"AI 拿不到"。用户嫌麻烦时可以直接跳过：AI 直读即可。更正前口径为"编辑器生成的内部 ID，AI 无法伪造"，该说法**不成立**。

其中 2、3 两项**不阻塞前期工作**：策划案、Demo、Lua 编写都可以先推进，到挂载环节再让用户操作；
音效 ID、本地化文本映射 ID 等编辑器配置常量仍需人工提供（模板索引已自动化，其余未自动化），届时向用户索取写入本项目 `annotations.lua`。

---

## 9. 平台能力事实（已核实，所有项目通用）

> 2026-10-09 由检索 Agent 在当前 API 文档（Lua客户端控件API文档.md / 客户端控件及脚本使用指南.md）逐条核实，
> 证据为"路径:行号"，抽核全部可达。**查证顺序：先查千星沙箱知识库（技能 `miliastra-knowledge` / `miliastra-knowledge-lua`，接入方式见《工具书》台账 #26），再查本节**——本节是 P3 派生摘要，与知识库原文冲突时以原文为准；文档被替换时本节作废重核。

| 主题 | 事实 | 对开发的影响 |
|---|---|---|
| 时序 | 文档**未给出运行帧率**；有 `OnUpdate(dt)`（不受时停）与 `OnLevelUpdate(dt)`（受时停），dt 单位秒；`script:EnableUpdate` 可开关（API:81/82/89） | Lua 一律 dt 秒累加、速度用 px/s；复刻按帧的原作数值 ×59.94 换算成 px/s，禁止写死帧数逻辑 |
| 键盘 | 只有**按下/抬起事件**（`AddKeyEventListener` API:682；`Enum.KeyboardKeyCode` API:987–1002；Down/Up 枚举 API:1038/1096），**无"按住查询"接口** | 连续移动类手感必须自建按下/抬起状态表（keyDown 置位、keyUp 清位） |
| 鼠标/触屏 | 点击/按下/拖拽事件（`CursorDown` 等 API:428；`AddCursorEventListener` API:819）；坐标 `GetUIPos`（API:838）；多触点 `touchId`（API:832）；`game.GetDevice()` 区分设备（API:188） | 键鼠+触屏双套操作可按设备自动切换；无原始 MouseMove 事件 |
| 控件动态创建 | `InstantiateClientUIControl` / `DestroyClientUIControl`（API:174/175）；父节点须为模板容器（指南:319）；**新建默认 active=false** | 必须 SetActive(true) 否则真机不显示；零创建零销毁原则：播放期不动态创建 |
| 控件属性 | `SetAnchoredPosition`（API:654）/ `SetSizeDelta`（656）/ `SetVisible`（641）/ `SetImage`（734）/ `SetLocalScale`（664）/ `SetLocalRotation`（666） | 位置尺寸显隐图片旋转缩放全部可编程 |
| 音频 | 仅 `PlayAudio2D/StopAudio/IsAudioAlive`，按**编辑器已配置的音效 ID**播放（API:209–211）；**无 BGM、无音量、无 3D 音频接口** | 涉及背景乐的玩法立项时就按此裁剪范围或告知用户限制；音效编号须用户在编辑器提供 |
| 性能 | 文档**无同屏控件数量上限数值**（检索过 上限/限制/性能/同屏）；仅循环调用警示（指南:238） | 同屏实体量按策划案口径在 Demo 阶段压测，Lua 版预留降级方案（如砍子弹槽） |
| 生命周期 | 传送/断线重连会**销毁全部客户端控件**（指南:189）；容器须激活且可见控件才生效（指南:27） | 脚本须能从"控件全没了"的状态恢复（回标题重开口径） |
| Lua 运行时禁库 | **禁用 `coroutine.*`、`io.*`、`string.dump`；`os.*` 仅留 time/date/clock/difftime；`debug.*` 仅留 traceback**（API:49–65） | 状态机/分帧加载不能靠协程，一律显式状态表；**沙箱盲区**：fengari 自带 coroutine 且 qx-sandbox.js 不拦截，真机禁用的写法在体外沙箱会假通过 |
| 补间动画 | `game.Tween`/`TweenSequence`：31 种 EaseType（API:320–354），Pause/Resume/Restart/Kill/`SetLoops(-1)` 无限循环/`SetRelative`（API:219–271）；Tweenable 字段=位置/尺寸/锚点/pivot/缩放/旋转/颜色/字号/fillAmount/scrollProgress（API:622–628, 727, 751–759） | UI/控件运动优先用引擎补间，不在 OnUpdate 手搓插值；沙箱已实现 Tween，可直接体外验证 |
| 进度条 | 图片控件 `fillAmount` + `SetFillHorizontal/Vertical/Radial90/180/360`（API:728–741） | 血条、冷却扇形盘单控件即可实现，无需多贴图切换 |
| 服务器数据通道 | `ServerSignal`：AddInt/Float/String/Bool/Vector3/Guid/Entity/PrefabId/ConfigId 及各 List（API:286–306）；`RegisterServerSignalHandler` 收（API:161）；全局自定义变量监听 `RegisterCustomVariableChangedHandler` + `game.GetGlobalCustomVariableValue`（支持列表/字典/结构体，实体维度 Level/PlayerSelf/AvatarSelf，API:163, 201, 356–362） | 客户端↔关卡服务端交互的标准通道；回调只给变量名，当前值须另行读取 |
| 虚拟列表 | 网格视窗 `RefreshItems(itemCount, callback)` + itemPrefabIndex 模板复用（API:842–873）；文档明示**复用列表项不保证同级排序稳定**（API:633） | 背包/排行榜 HUD 的标准做法；不依赖 GetSiblingIndex 顺序做逻辑 |
| 光标事件前置 | 容器 `showCursor=true` 是**所有 CursorEvent 监听可正常使用的必要条件**（API:926） | **沙箱盲区**：qx-sandbox.js 不校验 showCursor——忘设会沙箱通过、真机点不动；写光标监听前先确认容器该开关 |
| 事件消费/穿透 | 按键回调返回 `true` 标记已处理后，同容器内其他键不再响应此次按键（API:681）；容器 `disableKeyEventPassthrough`/`disableCursorEventPassthrough`（API:924–925） | 暂停菜单/模态弹窗的标准屏蔽手段 |
| 键位容量 | 键盘监听只覆盖枚举键：奇匠按键1–43 + 玩法键（WASD/Space/X/F/Tab/E/Q/R/T/鼠标左键=NormalAttack/右键=Sprint 等，API:940–1001）；手柄另有一组（API:1004–1032）；**无任意键监听** | 立项选键必查此表；方向键映射为奇匠键36–39 |
| 杂项接口 | `PauseLevelTime`/`IsLevelTimePaused`（仅单人，API:207–208）；`GetUICanvasSize`（API:179）；`game.PrintClientUITree()` 调试（API:106）；`script:Invoke` 调脚本内全局函数（API:159）；`FindChild(path)`（API:639）；本地化 `GetLanguageType`/`GetText(textMapId)`（API:213–215） | 排障与多语言按需引用；GetText 的文本映射 ID 须用户在编辑器提供，同音效 ID 口径 |

> 2026-10-10 增补以上 9 行：来源为全文重读 API 文档（`公开资料/客户端控件API文档.md` 副本经逐接口+归一化哈希比对，确认与仓库版等价、无新接口，行号一律以仓库版为准）。Tween 族/ServerSignal/CustomVariable 三项此前未入表。

## 9.5 真机硬事实（编码前必守；镜像自《工具书》三/五节，两处同步改）

**写法红线（真机实测，违反=中断或静默失效）**：
1. 控件字段**按类型封死**：该类型没有的字段读=nil、写=报 `no such field` 中断（例：光标检测区无 imageColor）。写字段前对照该控件类字段表（API Image 713 / TextBox 747–760 / Area 809）。
2. `game.*` 一律**点号**调用；冒号多传 1 参数真机直接报错。
3. 枚举成员名**逐字对文档表**：TextHorizontalAlignment 无 Center 只有 Middle；CursorEventType 真机带 Cursor 前缀（CursorClick/CursorDown/CursorUp/CursorDrag）。
4. **★★ 真机「文字不显示」第一嫌疑＝账号【奇匠等级】门槛，不是代码 ★★（2026-10-10 更正，见工具书顶部铁律）**：真机文字渲染受奇匠等级限制（需申请「奇匠激励计划」+实名后答题升级；✅ **2026-10-10 已实测结案：门槛＝Lv.2**（答题升级到 Lv.2 造物学徒后真机文字正常渲染，无需 Lv.3）。）。未达标时**文本框底框照常渲染、字形一个像素都不画、且不报错**——与字号（8~64 全试无效）、字体、自适应字号、对齐、层级、模板写法**全部无关**；**模拟器永远正常**，所以只能靠真机截图判定：**文字区近白像素 = 0 且底框正常 ⇒ 立即停手去查等级**。
   （旧条目「fontSize 超限→静默不渲染；64 合法；先查模板本体/text 管线/布局裁剪」**已作废**：当时被探针自身 bug 污染，真因即本条。绕行方案＝把文字烘成美术模板像素字形，见 AGENTS §12。）
   升级路径/查证入口 → 📖 **详情/答案表 → 《工具书_资产与引用规范.md》顶部「★【等级门槛 · 唯一权威说明】★」**（含两个入口、答题升级步骤、**AI 可辅助答题**说明、本次 10 题答案表、实测记录；**唯一权威，勿在别处复制**）。
5. Color 为打包整数（0xAARRGGBB）。
6. 实例 `active`/`visible` 继承模板定义（真机模板默认多为 true）；统一 SetActive(true) 作为安全动作保留。
7. 按键/点击回调在第 N 帧 OnUpdate 后、N+1 帧前执行，回调内写文本/位置/颜色/Tween 立即生效，无需等帧。
8. `script.path` 保留目录段（如 `default_import_file/levelScript`），按短名精确匹配会找不到。
9. 31 种 EaseType 与真机逐帧一致（beyond 已对齐）；双 Tween 写同字段=后 Play 者覆盖；Kill(false) 后 Play 无效。UI/控件运动优先引擎补间，禁止 OnUpdate 手搓插值。
10. Lua 禁库：coroutine/io/string.dump 禁用、os 仅 time/date/clock/difftime、debug 仅 traceback。**release 沙箱不拦这些**（fengari 假通过），beyond 运行时按真机拦截。

**ID 与部署纪律**：
- 三层 ID 不得互换：控件模板索引（prefabIndex）/ 容器节点索引 / 运行时实例 `Id`（首字母大写）；另 `scriptMappingId`、`itemPrefabIndex`、`referencedPrefabIndex` 各归各。
- ID 不跨项目（同数字不同含义），以各项目 `annotations.lua` 为唯一权威。
- 真机部署：编辑器只认 `…/BeyondLocal/<UID>/Beyond_Local_Save_Level/<编辑器ID>/external_lua_file/…`；母本改完必须同步到该目录才生效——**一条命令：`python tools/deploy_lua.py <脚本>`**（复跑沙箱门禁→自动发现最新映射目录→同步→sha256 回读验证；`--check` 只比对不写）。
- 关卡 .gil 可机器直读「模板名→重映射ID」（P0，2026-10-10 真机实证）：导入后用户仅需 Ctrl+S，索引回收走 `tools/gil_id_extract.py`（规程 `tools/GIL-ID回收_runbook.md`）；模拟器 ID 是假的，禁止进交付物。
- "新建客户端脚本"是创建式会撞同名；导入已有文件走"新建脚本映射→编辑映射路径"。
- 注入通道：编辑器"编辑脚本变量"同名全局先注入，脚本头部写 `TPL_X = TPL_X or 兜底值`。

**beyond 渲染器实测**：paint 条目 `bottom`=距画布底边（左下原点），直接传逻辑 y 勿翻转；`renderPaintPng(paint,w,h,{scale})` 出图。用例 `projects/scratch_render/proof.mjs`。

## 10. 新项目初始化模板

每个新玩法项目在 `projects/<项目名>/` 下建固定五件套 + P1 出口产物（各文件的作用与更新时机）：

| 文件 | 作用 | 谁写 / 何时更新 |
|---|---|---|
| `项目状态与立项卡.md` | **跨会话接手先读它**：当前步骤、用户身份、门禁进度、交接记录、待索取的编辑器值、未解决疑点 | 主控；每过一道门禁必更新（release/00 第六节） |
| `参考_<主题>数值与平台能力.md` | 立项即派检索 Agent 产出：原作实测数值（带来源 URL）+ 本项目相关平台能力（带路径:行号）+ 主控裁决表；**全程复用，编码以它为准** | 检索 Agent 初稿，主控验收后固化 |
| `策划案.md` | 按 release/02 十六节整份写完；待确认项 Q 列表 + 拍板记录就地更新 | 策划案 Agent 编写，主控验收 |
| `资产需求清单.md` | **P1 出口产物，也是 P2 烘焙的唯一输入**：逐元素「用途 / 来源判定 / 依据 / 控件-图元成本 / 待玩家提供 / 状态」。路线选择由 **AI 判**，不摆给玩家选（机制＝《工具书》§十「资产需求判定与提问」；上游 release/02 §11「编号由用户提供」已被取代） | 主控；P1 末产出，资产方案变更时更新 |
| `annotations.lua` | 接口标注文件：立项时建空壳写明依据的 API 文档哈希；挂载阶段填入容器节点索引、控件模板索引、音效 ID 等真实值 | 主控；API 文档被替换时全部作废重核 |
| `demo/` | 网页 Demo（`index.html`，file:// 双击可玩、零外部资源）+ `anchor_config.md` 锚定表（数值必须来自运行期探针实测，非手算） | Demo Agent；冻结后为 Lua 阶段的唯一布局依据 |

补充约定：
- **`projects/` 是我方关卡产物，不要求台账登记**（2026-10-11 用户口径）：台账（工具书一节）只登**资源类资产**——官方文档、外部工具链、GitHub 来源的资料与工具、探针证据、经验文档等。`audit_workspace.py` 第 6 项对 `projects/` 只作**提示**，不计入退出码。
- **五件套按项目类型裁剪**：上表是「玩法型项目」（有玩法设计、要交付可玩关卡）的标配。**试验台/工具型项目**（只验证某项能力、不产出玩法）可只留 `项目状态与立项卡.md` + `AGENTS.md`，其余按需增减；文件命名**以项目内实际为准**（如 battle-city 实际为 `参考_原版数值与平台能力.md`），根文件此处只给标准形。
- 会话成本参考（实测）：检索 Agent ≈ ¥0.55；策划案 Agent ≈ ¥0.34；完整 Demo Agent ≈ ¥2.4 / 约 1.5h；
  主会话全程（含 3 个子代理）合计 ≈ ¥5.2。派单前按 release/00 的 5.3 档位表控成本，C 档重活提前告知用户耗时。
- 浏览器验证降级链（实测踩坑）：`browser_exec` 若报 use_real_profile 错误 → 桌面端 `desktop_preview`+`drive_preview` 开在聊天旁 → Edge/Chrome 无头（可能被用户运行中的同内核实例接管而静默失败）→ 都不通则"静态代码核查 + 用户试玩"，并在交付说明注明未自测项。
- 交付网页 Demo 给用户时同时用其默认浏览器开一个新窗口（`msedge/chrome --new-window file:///...`），预览面板只作辅助。

---

## 11. 网页产物迭代与验证通用经验（battle-city 三轮反馈闭环实测沉淀，2026-10-10）

1. **无头 vm 规则验证法**（浏览器不可用/只验规则逻辑时首选）：正则抽出单文件 HTML 的 `<script>` 块 → Node `vm.createContext` + 最小 DOM 桩（getElementById 返回带 getContext(Proxy noop)/classList/addEventListener 的空壳元素）执行；顶层 `var`/function 即公开 API，直接调判定函数做行为断言（如构造子弹对象调 bulletTerrainHit 断言象限变化）。要点：
   - 沙箱必须补 `URLSearchParams`、`location`、`performance` 桩，缺一个就 ReferenceError；
   - 回归台（已冻结特性）与新特性台**分开两个文件**，每轮改动后双跑，旧断言全过才算无回归；
   - 行为口径变更时旧断言**反转改写**（改期望值+标新 D 号），不许静默删除（防测试迁就 bug）；
   - 用户报"卡住/转不动"类问题：按其描述场景在测试台里构造几何复现用例（如 16px 单车道+两侧砖墙+开炮拆墙全链路），比口头推断可靠。
   - 测试台放项目 `demo/tests/`（scratch 目录 24h 自动清理，勿把可复用资产留 scratch）。
2. **试玩反馈三轮闭环模式**：收集"现象+期望"（不接受"还行"）→ **读代码定位根因**（用户表述≠根因：「转不了向」实为前探拒绝检查、「半块墙」实为象限制+对齐）→ 方案含利弊+推荐值 → clarify 拍板 → 派单或直改 → 无头验证+回归 → 文档批量同步（差异清单 D 号+规则条文+状态文件）→ 用户复验。每轮 15~35 分钟，三轮零返工。
3. **子代理任务书纪律**：
   - 指定新增编号/ID 前**先核对现有编号空间**（实测：任务书拍脑袋写 A17 撞上既有 A17_over_panel）；
   - 必含「只许改 X 文件」边界 + `node --check` 自证 + schema 强制申报疑点；
   - 子代理报告不可全信：主控 grep 核查每处改动 + 复跑测试台（实测发现过报告未提的铲子闪烁分支挡板例外这类连带点）。
4. **确认闸门节奏**：clarify 批准仅当轮有效，跨轮文档写入必被 write-gate 拦。正确节奏＝代码改动与配套文档尽量并进同一张批准卡；跨轮补同步时，先出一次「文档清单」批准卡，再用 execute_code 批量 patch 一轮做完，避免逐文件审批疲劳。
5. **复刻模式改原作三件套**（缺一即后患）：差异清单新 D 号（含用户原话+日期）＋ 修订对应 R 规则条文 ＋ 项目 AGENTS.md 已裁决节加一行。否则下次会话会拿旧条文重议已拍板事项。

---

## 12. 美术资产路线（.gia 模板烘焙）经验入口

画面出现「不像 / 错位 / 部件缺失」类问题，或要把 Demo 画面做到**部件级还原**时：

**路线清单（权威版 →《工具书》§十，可扩展）**：R1 官方素材拼合（引用白名单素材 ID，每素材 1 控件；art-lab 已真机验收）／R2 自定义图片 → 图元重构（PSNR 判据；primitive-poster 已**真机端到端验收** 2026-10-11）／R3 混合（未实做）。**本节不限制路线数量**——新路线满足《工具书》§十的接入口径即可并入，不必先改本节。
- **谁判走哪条：AI 判，玩家不选**（2026-10-11 用户拍板）：按《工具书》§十「资产需求判定与提问」逐元素过判定树（文字/装饰→R1／特定形象→R2／结构+主体→R3，带成本闸与 pilot 兜底），P1 末出 `projects/<名>/资产需求清单.md`（P2 烘焙唯一输入）；对玩家只问"有参考图 / 哪些必须像 / 能否给图 / 方向二选一"，**话术禁出现 R1/R2、图元、模板、素材编号**。上游 `release/02 §11`「素材编号请用户按顺序提供」已被取代（取代登记=《工具书》§六）。

- **先读**项目级沉淀 `projects/battle-city/经验_Demo到真机_模板转化全流程.md`（六阶段正确流线：Demo 冻结 → 路线决策 → 模板烘焙 → 打包门禁 → Lua 换轨 → 双门禁 → 真机交付；含 10 条问题台账与判据基线）；
- **跨项目复用**：技能 `beyond-sprite-template-pipeline`（含可复用诊断脚本 `scripts/diag_grid.mjs`：网格落格 + 跨类重叠检测，exit 0/2 可直接挂进门禁链）；
- **四条硬规则速记**：①模板子图元偏移必须相对模板中心（根 pivot=0.5）；②**模板内子项**顺序要反转（编辑器/模拟器 children 首项画在最上）——**但反转必须"按模板内"做，禁止把整个子项数组一次性倒转**（那会把**模板之间的顺序**也翻掉，实测 PSNR 11.12 vs 20.29；正确构造＝模板内倒序 + 模板间升序，见 §13 第 18–19 条与 `projects/primitive-poster/AGENTS.md`）；③相位动画＝多模板切显隐，不染色不改尺寸；④实例引导期建满、播放期零创建零销毁，每帧只动可见精灵。
- **判责顺序**：用户报"模拟器画面不对"先做**同源复现**（web 试玩页与无头 `renderPaintPng` 同一 paint 管线）——一致＝代码/资产真 bug，不一致才查宿主；**别手算坐标**，用统计诊断。实测收益：控件 1390→571、setter 峰值 12→7。
- **文字不可用时的绕行（依据 §9.5 第 4 条）**：真机文字是否可渲染取决于账号奇匠等级——**2026-10-10 已实测结案：门槛＝Lv.2，达标后真机文字正常渲染**。故"把字形烘成美术模板像素字形"这条路**在等级达标后不再需要**，仅作将来特殊场景（如需要不受字体/账号约束的固定字形）的备选；实现方式＝每个字符一个模板、或一条字形带按位切显隐，与整流线同源。

---

## 13. 工具调用与执行层经验（跨项目通用；art-lab 实测沉淀，2026-10-10）

> **定位**：路径（选哪条技术路线）可以选错、可以复盘重来；但**选定路径之后的执行必须是最优的**。
> 本节只记「工具怎么调、执行怎么排、验证怎么做」，不记路线决策。明细（命令/证据/失误清单）见 `projects/art-lab/执行经验_工具调用与执行层.md`。

1. **开工先盘家底**：`refs/` + `tools/` + 网络现成方案（GitHub / topics 页 / 社区 wiki），任一条能覆盖 70% 需求就用它 + 补 30%，**不从零写**。（实测教训：`refs/` 里已有 3 套图元拟合工具却自研轮子，多花数小时。）
2. **依赖一次探测完**：`py -c "import ..."` 批量查所需库；本机 `py` 与 `python` 可能不是同一解释器——**探测用哪个、执行就用哪个**。
3. **免安装试用优先**：TS/JS 工具用 `npx --yes tsx <script.mjs>` 可直接 import 仓库里的 `.ts` 源码，省掉一次 `npm install`。
4. **不为一件事装依赖**：缺包时优先"换语言做"（实测：Node 侧缺 pngjs → 像素统计改交 Python/PIL）；**Node 侧只跑模拟器/出图，像素级统计归 Python**。
5. **外网请求必带 User-Agent**：无 UA 会被 CDN 403（实测 oss 素材库）。**"批量全失败、手工单个却成功" → 先查请求头/客户端指纹，不是查网络**。
6. **批量脚本默认可重入**：逐项落盘 + 存在即跳过，中断/重跑成本≈0。
7. **多任务不共写一文件**：重跑前先查同类进程再终止——`powershell -NoProfile -Command "Get-CimInstance Win32_Process -Filter \"Name='python.exe'\" | Where-Object { \$_.CommandLine -like '*脚本名*' }"` 查、`Stop-Process -Id <PID> -Force` 杀；**Git Bash 下 `taskkill //F //PID n` 会被 MSYS 参数转换弄坏，统一用 `powershell Stop-Process`**。
8. **产物落地三连校验**（不看 exit code 就宣布完成）：① 总数一致 ② 分级/分类计数相加等于总数 ③ 与清单文件行数一致。
9. **stdout 缓冲会骗人**：判断进度用**结构性关键字 grep + 产物文件 mtime/大小**，不看日志滚动；后台任务结尾加 `echo DONE >> run.log` 完成标记（配合 `notify=true`）。
10. **数值判据 > 视觉模型反复比对（本节最重要纪律）**：调参与校对只用程序化指标——图像用 PSNR/SSIM（统一口径：白底合成→尺寸对齐→全图/前景），渲染用"期望矩形内非背景色像素占比"，布局用控件 box 越界/重叠筛选，交互用像素位置反算参数值。**视觉模型只用于首次效果确认与出给用户的成品图**；同一细节反复看图 = 效率极差且结论不稳。**判据不限于本例列举的指标**——任何**可复现、与工具无关**的数值口径都可替换或补充（新指标更稳就换，不必改本条）。
11. **调试名 + 坐标筛异常**：控件实例化时 `c.name = "dbg_xxx"`，再 dump 全部 box 程序化筛越界/超宽/重叠，**不靠看图猜是哪个控件**。
12. **交互脚本化可复现**：把"点击/拖拽/按键/出图"写成参数序列（如 `down:x,y|move:x,y|up:x,y|step:N|shot:tag`），一次运行产多张对照图，同一序列可重复跑。
13. **一个文件只用一种写通道**：整体重写用 `write_file`、局部改用 `patch`；**混用会触发 stale_write 死锁**（对某路径用过 patch 后 write_file 会持续拒），死锁则 `rm` 重建（仅限自己本次写的文件）。详见技能 `file-write-recovery`。
14. **被写入闸门拦下的正确动作**：正文列出「目标路径 + 目的 + 步骤/命令」→ 出确认卡（按此方案执行 / 取消）→ 等批准 → 重试调用即放行。**禁止换 `terminal`/`execute_code` 等通道绕过；禁止被拦后反复重试同一调用**。被拦后呈现方案并等待，本身就是合法的回合交付。
15. **经验分层归档**：通用条文 → 本文件（工作区根）；项目专属 → `projects/<名>/AGENTS.md`；**只有特别通用的行为准则才额外进 memory**（memory 每会话注入，须保持精简）。
16. **门禁"绿"可能是假的——必须附带量级断言**：三项归零只说明"没报错"，不说明"代码真跑了"。实测（art-lab 2026-10-11）：脚本在 `script.object` 取不到宿主时早退，而 release 沙箱恒把 `script.object` 设为 nil → 建池/布局/输入全未执行，报告却是 `verdict=pass`、`created=0`（battle-city 不空转只因它写了"取不到宿主就自建根"的回退）。**任何门禁都要加一条与上一版基线比对的量级断言**（控件数 / paint 条目数 / 日志关键行），`created=0` 这类"干净得反常"的数字就是空转信号；自己也别把"门禁过"当成"功能验过"。
17. **元素"跑到画面外/层序反了"的定位法（禁止手算坐标）**：① dump 全部控件 box，程序化筛越界（`left<0` 或 `left+w>画布宽`）→ ② 对可疑框做**算术核对**（把脚本表达式逐项代入，与 dump 值逐位对齐，才能确定是哪个坐标量错了）→ ③ 像素扫描线按"配色表→控件"对号（哪条色带落在哪段 x/y）。实测：`px(L.panelCX)` 对**已是画布绝对坐标**的量又叠了一层面板局部偏移，面板被推出画布、只在右缘留 92px 残片，而"其余元素正常"把它盖住了。层序口径同记：**运行期实例化（同父）＝后建者在上**，所以底板/背景必须**最先建**。
18. **用第三方工具前先读它的几何/数据定义，别从"看起来合理"的语义推断**：实测（primitive-poster 2026-10-11）两处推断都让整幅画面崩坏，而**工具自渲染始终是好的**，所以"工具出图正常"证明不了你的数据理解正确。两处具体是：①把 `element.center` 当成"相对图像中心"（实际是绝对像素 + y 取负），多叠半张画布偏移；②把拟合器的 `triangle` 当等腰三角形（实际是**自由三点三角形**，引擎只有等腰三角，几何上不可表达）。做法＝先去读该工具的源码/字段生成处（如 `primitive_backend.py` / `fill_shaper.py`），再写转换；写完用**受控探针**（4 个已知图元、颜色可分辨）验证位置/尺寸/旋转/面积逐项对上。
19. **画布合成顺序必须分两个维度分别实测，禁止一刀切**：模板**内**（子项数组序）与模板**之间**（实例化序）是两套独立规则，方向还可能相反。实测（同上）：模板内"首项画在上"、跨模板"后建的在上" ⇒ 正确构造＝**模板内倒序 + 模板间升序**；而"把整个子项数组倒转"这类一刀切手段会连带翻掉模板顺序（四种构造同图 PSNR：**20.29** / 15.65 / 14.27 / **11.12**）。判据用"两色重叠块看谁在上面"+ 整图 PSNR，不要靠肉眼描述。
20. **"真机有、沙箱未实现"的字段 → 用开关兜，别删写法、也别绕过门禁**：release 沙箱对部分真机字段直接抛 `unsupported`（实测 `控件方法 showCursor`、`控件方法 adaptiveFontSize`），**门禁因此判 fail 而脚本其实是对的**。处理法三件套：① 脚本里该写法**保留**（真机行为不变），但用**注入开关**控制（`if PS_SET_SHOWCURSOR == nil then PS_SET_SHOWCURSOR = true end`，⚠️ 不能写 `x = x or true`——注入 `false` 时会被抬回 true）；② 沙箱/部署注入文件里显式关掉（`lua_out/annotations_sandbox.lua` 追加 `PS_SET_SHOWCURSOR=false`）；③ **门禁必须带 `--annotations`**（`deploy_lua.py --annotations …`，2026-10-11 已加此参数），否则会退化成 `--skip-sandbox` 绕门禁 = 真门禁失效。判据：带 annotations 跑出的报告里 `unsupported=0`、`created` 与预期同量级。

---

## 14. 收尾自检（任务收尾 / 交付前 / 改过文档后必跑）

**一行命令**：
```bash
py tools/audit_workspace.py          # 退出码 0 = 无告警；2 = 有告警，逐条确认
```
脚本自动覆盖（客观可判定项）：交叉引用是否悬空 · §章节引用是否存在 · 旧口径残留（删除线内视为已作废）· 镜像义务两处一致 · 状态文件"三样"齐全 · 台账 vs `projects/` 目录。检查项细则见脚本头部注释；**改过手册/台账后必须重跑**。

**三条不能脚本化、每次收尾人工过一遍**：
1. **待办必须落盘**：对话里承诺或遗留的任何待办，都必须在项目状态文件里有对应行——否则新会话读不到（实测教训：清理清单只存在对话里＝交接断链）。
2. **口径改动要全工作区扫**：改了某条结论，除了脚本能抓的 token，还要人眼确认有无**语义改写式**的旧口径残留（换了措辞的重复表述脚本抓不到）。
3. **未验证的结论必须标标记**：推断性结论标【待复核】，并在状态文件登记；禁止以"看起来对"交付。

销账联动、入库规程、门禁节奏等既有规则见《工具书》§九 与本节 §13（第 8/9/13/14 条），此处不重复。
