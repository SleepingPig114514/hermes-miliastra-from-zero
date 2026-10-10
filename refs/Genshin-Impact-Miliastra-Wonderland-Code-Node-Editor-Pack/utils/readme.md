# 工具库 (`utils`) - 完整文档

本目录包含 GIA 节点图处理的完整工具链，经过彻底重构后，提供了从数据定义、图构建到文件编解码的一站式解决方案。

---

## ✨ 核心特性

- 🎯 **类型安全**：完整的 TypeScript 类型系统，智能代码提示
- 🔄 **双向转换**：支持 GIA 文件的编码与解码
- 🎨 **编程式构建**：高层 API 轻松创建复杂节点图
- 📊 **集中式数据**：所有节点定义集中管理，易于维护
- 🔍 **逆向工具**：完整的 Protobuf 验证与分析工具链

---

## 📦 目录结构

| 目录/文件 | 说明 | 状态 |
|:---------|:-----|:-----|
| **核心模块** |||
| **[`gia_gen`](./gia_gen/readme.md)** | GIA 节点图编程式构建工具 | ✅ 活跃 |
| **[`node_data`](./node_data/readme.md)** | 节点静态数据：定义、类型、枚举 | ✅ 活跃 |
| **[`protobuf`](./protobuf/readme.md)** | GIA Protobuf 定义与编解码工具 | ✅ 活跃 |
| **辅助工具** |||
| [index.ts](./index.ts) | 统一导出接口 | ✅ 活跃 |
| [utils.ts](./utils.ts) | 通用工具函数（断言、深度比较等） | ✅ 活跃 |
| **低优先级/过时** |||
| `functions` | DSL 函数定义工具（已过时） | ⚠️ 低优先级 |
| [gen_def.ts](./gen_def.ts) | DSL 类型定义生成器（已过时） | ⚠️ 低优先级 |
| `extracting_nodes` | 节点定义提取脚本 | 🔒 内部工具 |
| `ref` | 参考文件（示例 GIA、反编译代码） | 📚 参考 |

---

## 🚀 快速开始

### 1. 读写 GIA 文件

```typescript
import { decode_gia_file, encode_gia_file } from "./utils/protobuf/decode.ts";

// 读取 GIA 文件
const bundle = decode_gia_file("input.gia");
console.log(bundle.primary_resource.internal_name);

// 修改并保存
bundle.primary_resource.internal_name = "modified_name";
encode_gia_file("output.gia", bundle);
```

### 2. 编程式创建节点图

```typescript
import { Graph } from "./utils/gia_gen/interface.ts";
import { NODES } from "./utils/node_data/game_nodes.ts";
import { encode_gia_file } from "./utils/protobuf/decode.ts";

// 创建节点图
const graph = new Graph("ENTITY_NODE_GRAPH");

// 添加节点
const trigger = graph.add_node(NODES.Trigger_Tab_OnTabSelect);
const branch = graph.add_node(NODES.Control_General_Branch);

// 连接节点
graph.flow(trigger, branch);
graph.connect(trigger, branch, "Output0", "cond");

// 设置引脚值
branch.setVal("cond", true);

// 自动布局并保存
graph.autoLayout();
encode_gia_file("hello.gia", graph.encode());
```

### 3. 查询节点数据

```typescript
import { NodeLib } from "./utils/node_data/instances.ts";
import { NODES } from "./utils/node_data/game_nodes.ts";

// 查询节点定义
const nodeDef = NodeLib.getByIdentifier(NODES.Control_General_Branch);

console.log(nodeDef.InGameName.en);    // "Double Branch"
console.log(nodeDef.DataPins.length);  // 数据引脚数量
console.log(nodeDef.FlowPins.length);  // 控制流引脚数量

// 遍历引脚
nodeDef.DataPins.forEach(pin => {
  console.log(`${pin.Identifier}: ${pin.Type}`);
});
```

### 4. 处理可变类型节点

```typescript
import { NodeLib } from "./utils/node_data/instances.ts";
import { NODES } from "./utils/node_data/game_nodes.ts";

// 获取具体类型的变体
const intEqual = NodeLib.getVariant(
  NODES.Arithmetic_General_Equal,
  "C<T:Int>"
);

// 引脚类型已具体化
console.log(intEqual.DataPins[0].Type); // "Int" (而不是 "R<T>")
```

---

## 📚 核心模块详解

### [GIA 生成器 (`gia_gen`)](./gia_gen/readme.md)

用于编程式构建 GIA 节点图的高层 API，提供类型安全、易用的接口。

**核心文件：**
- [interface.ts](./gia_gen/interface.ts) - **核心 API**：Graph 和 Node 类定义
- [core.ts](./gia_gen/core.ts) - 底层编码/解码函数
- [auto_layout.ts](./gia_gen/auto_layout.ts) - 基于 Dagre 的自动布局算法
- [example.ts](./gia_gen/example.ts) - 完整使用示例

**核心类：**
- `Graph` - 节点图管理器（添加节点、连接、注释、图变量）
- `Node` - 节点实例（设置引脚值、类型约束、位置）
- `Connection` - 连接实例（控制流/数据流）
- `Comment` - 注释实例
- `GraphVar` - 图变量实例

**子目录：**
- `display/` - 可视化相关工具（节点图渲染、调试显示等）

**详细文档：** [gia_gen/readme.md](./gia_gen/readme.md)

---

### [节点数据系统 (`node_data`)](./node_data/readme.md)

整个项目的**静态数据核心**，提供所有节点、类型、枚举的完整定义。

**核心数据：**
- [data.json](./node_data/data.json) - 完整节点数据（~3.8MB，包含所有节点定义）
- [[types.ts](./node_data/types.ts)](./node_data/types.ts) - 数据结构类型定义（Document, NodeDef, PinDef 等）
- [node_type.ts](./node_data/node_type.ts) - 类型系统核心（类型解析/转换/反射）

**访问接口：**
- [core.ts](./gia_gen/core.ts) - 类型转换和查询辅助函数
- [instances.ts](./node_data/instances.ts) - 数据访问类（Doc, NodeLib, ServerType, ClientType）

**生成的便捷接口：**
- [game_nodes.ts](./node_data/game_nodes.ts) - 节点常量（带完整文档注释，~700KB）
- `game_nodes.zh.ts` - 节点常量（中文版）

**工具：**
- [gen_game_nodes.ts](./node_data/gen_game_nodes.ts)
- 从 [data.json](./node_data/data.json) 生成 [game_nodes.ts](./node_data/game_nodes.ts)

**子目录：**
- `UGC-Guide-Markdown/` - 官方 UGC 指导文档提取结果（包含节点说明的 Markdown 文件和提取的 JSON 数据）

**详细文档：** [node_data/readme.md](./node_data/readme.md)

---

### [Protobuf 工具集 (`protobuf`)](./protobuf/readme.md)

完整的 GIA 文件 Protobuf 处理工具链，兼顾生产环境的高效性与测试环境的透明度。

**核心定义：**
- [`gia.proto`](./protobuf/gia.proto) - **核心 Protobuf 定义**（GIA 文件结构）
- [`gia.proto.ts`](./protobuf/gia.proto.ts) - 自动生成的 TypeScript 类型定义

**双路径编解码系统：**

| 特性 | [`decode.ts`](./protobuf/decode.ts) (生产) | [`decode-cli.ts`](./protobuf/decode-cli.ts) (调试) |
|:-----|:-------------------------------------------|:---------------------------------------------------|
| **底层库** | 标准 `protobufjs` | 纯手工解析 |
| **目标** | 性能、一致性 | 可见性、报错反馈 |
| **适用场景** | 自动化脚本、运行时 | 逆向协议、验证 proto |

**逆向工程工具链：**
- [`decode_raw.ts`](./protobuf/decode_raw.ts) - 原始 Protobuf 解析器（无需 .proto 文件）
- [`proto2ts.ts`](./protobuf/proto2ts.ts) - Proto 转 TypeScript 接口生成器
- [`verify_proto.ts`](./protobuf/verify_proto.ts) - 结构验证器（对比原始数据与定义）

**详细文档：** [protobuf/readme.md](./protobuf/readme.md)

---

## 🔧 辅助工具

### [index.ts](./index.ts) - 统一导出接口

统一导出常用模块，简化导入路径：

```typescript
// 从 utils 直接导入
import { Graph, Node, NodeLib, NODES, decode_gia_file } from "./utils/index.ts";

// 等价于
import { Graph, Node } from "./utils/gia_gen/index.ts";
import { NodeLib, NODES } from "./utils/node_data/index.ts";
import { decode_gia_file } from "./utils/protobuf/decode.ts";
```

**导出内容：**
- `gia_gen/*` - Graph, Node, Connection, Comment 等
- `node_data/*` - NodeLib, NODES, Doc, ServerType, ClientType 等
- `protobuf/decode` - decode_gia_file, encode_gia_file

---

### [utils.ts](./utils.ts) - 通用工具函数

提供项目通用的工具函数和断言。

**核心功能：**

```typescript
import { DEBUG, STRICT, panic, assert, deepEqual } from "./utils/utils.ts";

// 全局配置
DEBUG;   // 是否显示警告输出
STRICT;  // 是否在错误时直接中断

// 错误处理
panic("message");           // 抛出不可恢复错误
todo("not implemented");    // 标记未实现功能

// 断言
assert(condition, "msg");
assertEq(target, expect);
assertDeepEq(obj1, obj2);

// 深度比较
const equal = deepEqual(obj1, obj2, { 
  breakpoint: true,  // 失败时触发调试器
  max_depth: 100 
});

// 对象操作
exclude_keys(obj, "key1", ["nested", "key"]);
```

---

## ⚠️ 低优先级/过时模块

以下模块因数据与框架重构而不再适用，更新优先级较低：

### `functions` - DSL 函数定义工具

用于定义 DSL 中的 Math 和 Query 节点，支持重载和泛型。由于数据结构已重构，该模块已过时。

**核心文件：**
- [math.ts](./functions/math.ts) - 函数定义列表
- [function_defs.ts](./functions/function_defs.ts) - 解析器和类型系统
- [utils.ts](./utils.ts) - 辅助函数

### [gen_def.ts](./gen_def.ts) - DSL 类型定义生成器

读取 [functions/math.ts](./functions/math.ts) 生成 `def.d.ts` 文件。由于 DSL 系统已重构，该工具已过时。

---

## 📊 完整工作流程

### 典型使用场景

```
1. 读取现有 GIA 文件
   ↓
   decode_gia_file() (protobuf/decode.ts)
   ↓
2. 解析为 Graph 对象
   ↓
   Graph.decode() (gia_gen/interface.ts)
   ↓
3. 修改节点图
   ↓
   graph.add_node(), node.setVal(), graph.connect()
   ↓
4. 查询节点定义
   ↓
   NodeLib.getByIdentifier() (node_data/instances.ts)
   ↓
5. 自动布局
   ↓
   graph.autoLayout() (gia_gen/auto_layout.ts)
   ↓
6. 编码并保存
   ↓
   graph.encode() → encode_gia_file()
```

### 从零创建节点图

```
1. 创建 Graph 实例
   ↓
   new Graph("ENTITY_NODE_GRAPH")
   ↓
2. 使用 NODES 常量添加节点
   ↓
   graph.add_node(NODES.xxx) (node_data/game_nodes.ts)
   ↓
3. 连接节点
   ↓
   graph.flow() / graph.connect()
   ↓
4. 设置引脚值
   ↓
   node.setVal()
   ↓
5. 自动布局并保存
   ↓
   graph.autoLayout() → encode_gia_file()
```

---

## 🔗 相关文档

- [GIA 生成器详细文档](./gia_gen/readme.md)
- [节点数据系统详细文档](./node_data/readme.md)
- [Protobuf 工具集详细文档](./protobuf/readme.md)
- [源代码](../src/readme.md) - 解析器和转换器
- [主 Readme](../Readme.md) - 项目概述

---

## 💡 最佳实践

### 1. 使用 NODES 常量而非字符串

```typescript
// ✅ 推荐：使用 NODES 常量
import { NODES } from "./utils/node_data/game_nodes.ts";
const node = graph.add_node(NODES.Control_General_Branch);

// ❌ 不推荐：手写字符串（容易拼写错误）
const node = graph.add_node("Control.General.Branch");
```

### 2. 使用标识符而非索引

```typescript
// ✅ 推荐：使用引脚标识符
graph.connect(nodeA, nodeB, "result", "input");

// ⚠️ 可用但不推荐：使用索引
graph.connect(nodeA, nodeB, 0, 0);
```

### 3. 利用类型系统

```typescript
// ✅ 推荐：使用类型安全的 API
import { parse, stringify } from "./utils/node_data/node_type.ts";
const type = parse("L<Int>");
const str = stringify(type);

// ❌ 不推荐：直接操作字符串
const type = "L<Int>";
```

### 4. 使用自动布局

```typescript
// ✅ 推荐：使用自动布局
graph.autoLayout();

// ⚠️ 仅在需要精确控制时手动设置
node.setPosition(2, 3);
```

---

## 📝 许可

MIT License