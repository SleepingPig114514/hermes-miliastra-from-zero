# refs/ 外部参考仓库台账

> 全部浅克隆（`--depth 1`），**只读**：不改上游文件，我们的结论写回工具书/AGENTS。
> 分级：**A=拿来即用**（跑通验证后）· **B=下下来不能直接用，先检查运行环境再动** · **C=只读代码/文档，不运行**。
> `git pull` 需手动（各仓库独立）。**更新检查**：`py tools/check_upstream.py --fetch`（只读 `git ls-remote`，不写本地）。

## 上游仓库台账（全工作区 14 个 git 仓库 · 2026-10-11 实测）

> 本节是**来源唯一权威**：新增任何上游仓库必须在此登记 URL（规则见《工具书》§九）。
> 字段含义：克隆方式「浅克隆」= `--depth 1`，无完整历史；「子模块未初始化」= 需 `git submodule update --init` 才有内容。

| 目录 | 上游仓库（github.com/…） | 分支 | 克隆方式 | 未初始化子模块 | 当前 HEAD |
|---|---|---|---|---|---|
| `MiliastraAgent` | https://github.com/ThRabbit-Studio/MiliastraAgent | main | 浅克隆 | — | e30c030 (2026-10-07) |
| `miliastra-beyond-simulator` | https://github.com/1475505/miliastra-beyond-simulator | master | 浅克隆 | — | 9062795 (2026-10-07) |
| `refs/Ayaya_Miliastra_Editor` | https://github.com/AyayaXiaowang/Ayaya_Miliastra_Editor | main | 浅克隆 | — | 189cb6a (2026-03-13) |
| `refs/Genshin-Impact-Miliastra-Wonderland-Code-Node-Editor-Pack` | https://github.com/Wu-Yijun/Genshin-Impact-Miliastra-Wonderland-Code-Node-Editor-Pack | main | 浅克隆 | — | a6365ab (2026-01-07) |
| `refs/Miliastra-toolbox` | https://github.com/1475505/Miliastra-toolbox | main | 浅克隆 | `knowledge/Miliastra-knowledge` | 5ee8f5e (2026-10-07) |
| `refs/WebMiliastraNodesEditor` | https://github.com/Columbina-Dev/WebMiliastraNodesEditor | main | 浅克隆 | `Genshin-Impact-Miliastra-Wonderland-Code-Node-Editor-Pack`、`WebMiliastraNodesEditor-CollabServer`、`WebMiliastraNodesEditor-MCPServer` | f2a5e20 (2026-01-05) |
| `refs/genshin-ts` | https://github.com/josStorer/genshin-ts | master | 浅克隆 | — | 64f10a8 (2026-09-23) |
| `refs/godot-fighter` | https://github.com/ca3games/Godot-fighter-demo | master | 浅克隆 | — | 027ceed (2021-11-29) |
| `refs/ikemen` | https://github.com/Ikemen-engine/Ikemen-GO | develop | 浅克隆 | — | 5eb7f3c (2026-10-09) |
| `refs/miliastra-decoration-splitter` | https://github.com/Interverse/miliastra-decoration-splitter | main | 浅克隆 | — | 11f13de (2026-09-30) |
| `refs/miliastra-image-to-gia` | https://github.com/Interverse/miliastra-image-to-gia | main | 浅克隆 | — | e0c6307 (2026-09-23) |
| `refs/miliastra-image-to-primitive-shape-ui` | https://github.com/Interverse/miliastra-image-to-primitive-shape-ui | main | 浅克隆 | — | 857d62f (2026-09-23) |
| `refs/miliastra-lua-api` | https://github.com/haminpants/miliastra-lua-api | main | 浅克隆 | — | e8b9e80 (2026-10-09) ⚠️ 上游已更新至 b17fee8 |
| `refs/miliastra-server-client-ui-converter` | https://github.com/Interverse/miliastra-server-client-ui-converter | main | 浅克隆 | — | 2b12b5d (2026-10-09) |

**已知未初始化子模块的影响**：`refs/Miliastra-toolbox` 的子模块 `knowledge/Miliastra-knowledge` 是**文档资产本体**（`official/`、`bbs/`、`derived/`）；当前知识库检索走的是远程 HTTP 服务（台账 #26），**本地子模块未拉取不影响技能使用**，仅在需要离线查阅原文时才需初始化。


## UI 资产 / `.gia` 通道（Kyvern's Miliastra Toolkit，Interverse 组织，均 MIT）

| 目录 | 用途 | 分级 | 检查要点 |
|---|---|---|---|
| `miliastra-image-to-gia` | PNG→方块图元 UI `.gia` 生成器 | **B** | package.json 有构建链；价值在**读它的 GIA 编码实现**，与 beyond codec 字段对照，反推真机导入器校验行为。网页版（interverse.github.io）可直接用，不必跑本地版。**已核实（2026-10-10 通读 README）：整张图烘成 1 个控件模板、图元全在模板内部、GUID 跟矩形不跟槽位——对外索引恒为 1，是"单模板自包含"路线的成熟先例** |
| `miliastra-image-to-primitive-shape-ui` | PNG→圆/方/三角图元 `.gia` | **C** | 静态 HTML（浏览器打开即用，零安装）；27MB 多为测试素材。思路≈qx2d shapes，交叉印证用 |
| `miliastra-server-client-ui-converter` | 服务端↔客户端 UI 模板 `.gia` 互转 | **C** | 静态 HTML；混包（界面控件组+模板）排障时当解剖刀用 |
| `miliastra-decoration-splitter` | 检查/拆分/重命名 `.gia`/`.gil` 内部资产 | **C** | 静态 HTML；导入出问题时拆包看内容 |

## 节点图 / 全工程工具链

| 目录 | 用途 | 许可 | 分级 | 检查要点 |
|---|---|---|---|---|
| `genshin-ts` | TS→IR JSON→`.gia` 编译器，增量构建+注入安全检查（348★） | MIT | **B** | Node 26 已具备，但需 `npm install`+模板工程验证；**借纪律不借栈**——我们是 Lua 项目，它的四条工程纪律（可读 IR、注入前 diff、自动备份、增量构建）已吸收进流程规范 v2。**已核实（2026-10-10 通读源码）：`inject` 后解析关卡存档 .gil 自动提取 `CustomPrefabEntry{name,id,basePrefabId}` 生成 `prefabs.ts`（`src/cli/gil_resources.ts:22–26`）——大量资产 ID 回收零人工的先例；真机客户端模板段是否同构可解见工具书八·11** |
| `Ayaya_Miliastra_Editor` | Python Graph Code 工坊：校验 CLI、HTML UI 源码→`.gil` 导出 | **GPL-3.0** | **B** | 锁 Python 3.10–3.12（本机 3.11.9 可）+PyQt6/onnxruntime 重依赖+OCR，**装前评估必要性**；价值点：`validate-file/validate-project` 打包前门禁范式、HTML→.gil 通道候选。GPL 注意：只读借鉴，不并入我们的交付物 |
| `Genshin-Impact-Miliastra-Wonderland-Code-Node-Editor-Pack` | GIA protobuf 编解码+逆向工具链 | MIT | **C** | 需 Node 23.6+；当**格式字典**查（其推荐语境的 genshin-miliastra-file-format 是 gil/gpk 格式百科） |
| `WebMiliastraNodesEditor` | 网页节点图模拟器 + MCP 服务 | — | **C** | ⚠️ 其 README 明确警告：自制 GIA/GIL 导入违反米哈游条款后果自负（国际服声明）。**不运行其导出功能**，只读它的节点语义实现 |

## 开源游戏源码（移植数值/机制参考）

| 目录 | 用途 | 许可 | 分级 | 检查要点 |
|---|---|---|---|---|
| `ikemen` | Ikemen GO：M.U.G.E.N 兼容的开源格斗引擎（Go 实现） | **MIT**（LICENCE.txt 已核） | **C** | 只读参考：动作/格斗类项目的机制与数值来源（对照台账 #13）；**不运行引擎** |
| `godot-fighter` | Godot-fighter-demo：Godot 引擎的 2D 格斗 demo | **代码 MIT / 素材 CC BY-NC** | **C** | 只读参考：格斗手感与状态机做法；**素材涉 NC 许可，不得进交付物** |

## API 参考

| 目录 | 用途 | 分级 | 检查要点 |
|---|---|---|---|
| `miliastra-lua-api` | 英文 Lua API 定义站（静态站源码） | **C** | 打开 docs/index.html 即可交叉核对枚举成员名（治"成员名逐字对表"类坑）；与我们 P1 文档冲突时**以我们仓库版为准**（P1>P5） |

## 知识库（已接入，2026-10-11）

| 目录 | 用途 | 许可 | 分级 | 检查要点 |
|---|---|---|---|---|
| `Miliastra-toolbox` | 千星沙箱官方文档服务（300+ 文档检索）与其两个 Skill | **Proprietary** | **B** | 技能已挂进 Hermes `skills.external_dirs`（2026-10-11，上游零改动）；**HTTP 服务在 `https://ugc.070077.xyz`，每次查询都是数据出网**；仅本机自用，不入交付物 |

- 用法：`miliastra-knowledge`（服务端节点 / 指南 / 教程 / FAQ / 排障）＋ `miliastra-knowledge-lua`（客户端控件与 Lua 语料，10 篇）；主入口见各自 `SKILL.md`，工具参数见其 `references/tools.md`。
- **开工前先用它查一手文档，再查工作区 `AGENTS.md` §9 速查表**；§9 是派生摘要（P3），与知识库原文冲突时以原文为准。
- 上游 `git pull` 即更新技能源。

## 未下载（候选登记）

（暂无）

## 通用红线

1. 运行任何 B 级仓库前：先读其 README 环境矩阵 + `git status` 确认干净 + 在隔离目录试，不在工作区根跑来历不明脚本。
2. 所有仓库产物（如生成的 .gia）进真机前必须走我们自己的验证链（beyond 截图/沙箱报告），外部工具"能导出"≠"真机能吃"。
3. 条款风险统一见《流程规范_AI自动化制作v2.md》第五节。
