# probes/ — 真机探针证据原件

> 存放**本工作区真机验证的原始证据文件**：只读、勿删、勿改。每条结论的完整语境在
> 《工具书_资产与引用规范.md》三·证据库（P0 条目均溯源到本目录）。新探针产物入库规则：
> 建 `<主题>/` 子目录 + 本 README 加一节说明（目的/文件含义/产出结论）。

## client-template-import/（2026-10-10）

**目的**：验证官方「资产导入导出管理」窗口能吃自制 `.gia` 客户端控件模板整合包（GIA 资产通道立项证据）。

**两组探针**：

| 组 | 文件 | 内容与结论 |
|---|---|---|
| 单模板 | `qxqy-lua-instantiable-panel.{gia,authoring.json,manifest.json}` | 1 容器模板+3 子控件；真机导入后容器节点索引实得 1073741846（模拟器预期 1073742100 → **索引必重映射** P0） |
| 多模板 | `qxqy-lua-multi-template.{gia,authoring.json,manifest.json}` | 3 模板单包一次入库（**多模板单包成立** P0）；真机实得 1073741881–1885 **连号**（同包连号 P0）；重导同名生成 `_1`（**增量入库语义** P0） |

**文件含义**：`.gia`=导入包本体（protobuf 二进制）；`.authoring.json`=beyond studio 源工程（可复导再导出）；`.manifest.json`=生成元数据（sha256/prefabIds/`validateGiaCompatibility` 结果/控件树）。

**生成器**：`miliastra-beyond-simulator/studio/scripts/generate-client-template.mjs`（重跑即再生成，输出目录写死指向本目录）。

**后续复用**：这 6 条 name→ID 配对同时是 `tools/gil_id_extract.py` 的验收基准（见《GIL-ID回收_runbook.md》六·验收样本）。
