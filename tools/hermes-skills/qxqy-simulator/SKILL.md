---
name: qxqy-simulator
description: 千星沙箱模拟器的宿主适配层（Hermes）。当会话中可见 mcp_qxqy_simulator_* 工具，或用户提到千星沙箱模拟器、"模拟器"标签、UI 转 JSON、GIA 导入导出、工作区存档、试玩、交互测试、截图验证时加载。正文不含上游原文，只负责指明通道与权威来源。
---

# 千星沙箱模拟器 · Hermes 适配层

**本技能刻意保持薄**：上游 `miliastra-beyond-simulator` 已提供权威正文与中立接口，本文件只补宿主侧适配，**不复制上游正文、不修改上游任何文件**。

## 权威来源（要操作细节时读原文，不要凭本文件猜测）

> **路径约定**：下表 `<工作区根>` = 含 `AGENTS.md`、`miliastra-beyond-simulator/`、`refs/` 的那一级目录；
> 本技能位于 `<工作区根>/tools/hermes-skills/qxqy-simulator/`，即**上溯三级**。换机器/换目录后无需改本文件。

| 内容 | 路径 |
|---|---|
| 模拟器操作正文（工具语义、资产模型、工作流一/二、索引校准） | `<工作区根>/miliastra-beyond-simulator/skill/SKILL.md` |
| MCP 通道权威（句柄、保存、预览、时钟模式、脚本同步、ID 校准） | `<工作区根>/miliastra-beyond-simulator/mcp/README.md` |
| 七步制作流程 | 技能 `qxqy-game-studio`（上游 `agent/wonderland-lua-builder/skills/`） |
| 官方文档检索 | 技能 `miliastra-knowledge` / `miliastra-knowledge-lua` |

## 上游自带的裁决句（本次适配的依据）

上游 `agent/wonderland-lua-builder/README.md` 明写：模拟器操作说明中"UI 路径和无 `handle` 的示例**以 Harness 为背景**；MCP 的句柄、保存和 Web 同步方式**以 MCP 指南及当前工具 schema 为准**"。

→ **本工作区走 MCP 通道**。读到上游正文里 DSH/Harness 专属措辞（标签页、插件页、`qxqy_studio_*` 裸名、无句柄示例）时，一律按 `mcp/README.md` 改写后使用，**不要去改上游文件**。

## 本工作区的通道与参数

- 工具名带服务器前缀：`mcp_qxqy_simulator_` + 上游工具名，例：`mcp_qxqy_simulator_qxqy_studio_get`。
- 工作区参数与已运行 Web 预览同源：workspace = `<工作区根>/projects`，web-url 默认 `http://127.0.0.1:4173`（两者以 `hermes mcp list` 实际配置为准；两侧工作区不一致时预览桥接会明确拒绝）。
- 典型顺序：`project_open` → `studio_get` → `studio_patch`（必须带最新 `expectedRevision`）→ `project_save` → `studio_play start` → `studio_play_screenshot` / `studio_play get {inspect:true}`。
- MCP 默认手动时钟：等待、读状态、截图都不推进游戏时间；要连续运行须显式 `start {clockMode:"realtime"}`。
- 每次写操作后重新 `get` 取新 revision；收到 revision conflict 时重新取快照再改，不要盲目重试。
- **用户说“打开给我看一眼效果”**：不必让他自己点启动。Web 服务有 HTTP 端点可直接驱动——`POST /api/play {"action":"start","args":{}}` 启动试玩、`POST /api/play {"action":"get","args":{"inspect":true}}` 读运行树/日志、`GET /api/state` 读当前存档与 `lastError`、`GET /health` 探活。启动后用 `desktop_preview` 开 `http://127.0.0.1:4173/`，并按工作区习惯**同时用用户默认浏览器开一个新窗口**（消息里告诉他：页面停在「编辑」页签就点右上角「**试玩**」切到画面；已从服务端启动过就不用再点「▶ 启动」）。
- **网页端与 MCP 是两个独立会话**：改了脚本/存档要让网页端看到，先 `project_save` 落盘（或建了可玩存档后）再 `preview_open` 显式打开；**在给用户看的时候不要重跑出图/重建存档的脚本**，那会覆写用户正在看的文件、触发预览重载打断试玩。

## 本工作区特有约定（上游没有，以《工具书》为准）

- 三层 ID 不得互换（控件模板索引 / 容器节点索引 / 运行时实例 `Id`），索引一律导入后回收，禁止硬编码。
- 真机部署走 `python tools/deploy_lua.py <脚本>`；索引回收走 `tools/gil_id_extract.py`。
- 真机文字渲染受账号奇匠等级门槛限制（**模拟器永远正常**）——文字"不显示"先查等级，不要改代码。权威说明见《工具书》顶部。
- 模拟器通过 ≠ 真机通过；交付说明必须附实测报告数据。

## 边界

- 不改上游文件：`miliastra-beyond-simulator/` 与 `refs/Miliastra-toolbox/` 均为只读参考。
- 上游 `git pull` 后需重新 `pnpm build`，MCP 的 `mcp/dist` 才会更新。
