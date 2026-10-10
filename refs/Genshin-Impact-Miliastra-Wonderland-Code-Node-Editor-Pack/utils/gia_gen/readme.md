# GIA 节点图生成器 (`gia_gen`)

用于创建、编辑和管理原神节点图（GIA Node Graph）的 TypeScript 工具库。提供类型安全、易用的 API，支持实体节点图、技能节点图等多种系统类型。

## ✨ 特性

- 🎯 **类型安全**：完整的 TypeScript 类型定义，智能代码提示
- 🚀 **简单易用**：链式调用，直观的 API 设计
- 🔄 **双向转换**：支持编码为 Protobuf 格式和从 Protobuf 解码
- 🎨 **自动布局**：基于 Dagre 的智能节点布局算法
- 🔧 **可变类型**：完整支持 Variant 节点的类型约束
- 📦 **完整功能**：节点、连接、注释、图变量一应俱全

---

## 📦 文件结构

| 文件 | 说明 |
|:-----|:-----|
| [interface.ts](./interface.ts) | **核心 API**：Graph 和 Node 类定义 |
| [core.ts](./core.ts) | 底层编码/解码函数 |
| [auto_layout.ts](./auto_layout.ts) | 自动布局算法 |
| `utils.ts` | 工具函数和计数器 |
| [example.ts](./example.ts) | 完整使用示例 |
---

## 🚀 快速开始

```typescript
import { Graph } from "./utils/gia_gen/interface.ts";
import { NODES } from "./utils/node_data/game_nodes.ts";
import { encode_gia_file } from "./utils/protobuf/decode.ts";

// 1. 创建实体节点图
const graph = new Graph("ENTITY_NODE_GRAPH");

// 2. 添加节点
const trigger = graph.add_node(NODES.Trigger_Tab_OnTabSelect);
const branch = graph.add_node(NODES.Control_General_Branch);

// 3. 连接节点
graph.flow(trigger, branch);                    // 控制流连接
graph.connect(trigger, branch, "Output0", "cond"); // 数据流连接

// 4. 设置引脚值
branch.setVal("cases", [1, 2, 3]);

// 5. 自动布局
graph.autoLayout();

// 6. 保存为 .gia 文件
encode_gia_file("output.gia", graph.encode());
```

---

## 📚 核心 API

### [Graph](./interface.ts) 类 - 节点图管理器

节点图的核心类，用于创建、管理和序列化节点图。

#### 构造函数

```typescript
new Graph(
  system_class?: ResourceClass,  // 系统类型，默认 "ENTITY_NODE_GRAPH"
  uid?: number,                   // 用户ID，默认随机生成
  name?: string,                  // 图名称，默认随机生成
  graph_id?: number              // 图ID，默认自动分配
)
```

**系统类型选项**：
- `"ENTITY_NODE_GRAPH"` - 实体节点图（默认）
- `"SKILL_NODE_GRAPH"` - 技能节点图
- `"LEVEL_NODE_GRAPH"` - 关卡节点图
- 其他 ResourceClass 类型

#### 节点管理

```typescript
// 添加节点（支持三种方式）
add_node(node: string | number | Node, constraints?: NodeType | string): Node | null

// 示例
const node1 = graph.add_node("Control.General.Branch");           // 使用标识符
const node2 = graph.add_node(NODES.Control_General_Branch);       // 使用常量
const node3 = graph.add_node(2);                                  // 使用 ID
const node4 = graph.add_node(NODES.Arithmetic_General_Equal, "C<T:Int>"); // 带约束
```

#### 连接管理

```typescript
// 控制流连接（决定执行顺序）
flow(
  from: Node, 
  to: Node, 
  fromArg?: string,    // 源引脚标识符（可选）
  toArg?: string,      // 目标引脚标识符（可选）
  insert_pos?: number  // 插入位置（可选）
): Connection | null

// 数据流连接（传递数据）
connect(
  from: Node, 
  to: Node, 
  fromArg: number | string,  // 源引脚：索引或标识符
  toArg: number | string     // 目标引脚：索引或标识符
): Connection | null

// 断开连接
disconnect(conn: Connection): void

// 获取所有连接
get connects(): Connection[]  // 所有数据流连接
get flows(): Connection[]     // 所有控制流连接
```

#### 注释管理

```typescript
// 添加附加到节点的注释
add_comment(content: string, target_node: Node): Comment | null

// 添加独立注释
add_comment(content: string, x: number, y: number): Comment
```

#### 图变量管理

```typescript
// 添加图变量（节点图级别的全局变量）
add_graph_var(
  name: string,
  type: NodeType | string,  // 如 "Int", "L<Int>", "Bool"
  val?: TypedValue,
  exposed?: boolean         // 是否暴露给外部
): GraphVar | null
```

#### 序列化

```typescript
// 编码为 Protobuf 格式
encode(opt?: any): Gia.AssetBundle

// 从 Protobuf 解码
static decode(proto: Gia.AssetBundle): Graph
static from(data: Gia.AssetBundle): Graph  // decode 的别名
```

#### 自动布局

```typescript
// 自动计算节点位置
autoLayout(options?: Partial<LayoutOption>): void

// 布局选项
interface LayoutOption {
  node_sep: number;        // 节点间距（默认 100）
  edge_sep: number;        // 边间距（默认 50）
  rank_sep: number;        // 层级间距（默认 300）
  data_pin_height: number; // 数据引脚高度（默认 60）
  flow_pin_height: number; // 控制流引脚高度（默认 60）
  pin_width: number;       // 引脚宽度（默认 130）
  title_height: number;    // 标题高度（默认 60）
  min_width: number;       // 最小宽度（默认 200）
  min_height: number;      // 最小高度（默认 100）
}
```

#### 调试

```typescript
// 打印调试信息
debugPrint({ indent?: number, log?: Function }): void
```

---

### [Node](./interface.ts) 类 - 节点实例

表示节点图中的单个节点，包含引脚值、连接关系等信息。

#### 属性

```typescript
readonly system: ResourceClass;      // 所属系统类型
readonly node_index: number;         // 节点索引
readonly def: TypedNodeDef;          // 节点定义
variant_def: TypedNodeDef | null;    // 可变类型定义
constraint: ConstraintType;          // 类型约束

x: number;                           // X 坐标
y: number;                           // Y 坐标
comment: Comment | null;             // 附加注释
```

#### 引脚操作

```typescript
// 设置引脚值
setVal(pin: number | string, value: TypedValue): void

// 示例
node.setVal("var_name", "Player Level");  // 使用标识符
node.setVal(0, 42);                       // 使用索引
node.setVal(1, [1, 2, 3]);               // 设置列表值

// 查找引脚
findPin(identifier: string): { success: boolean; kind?: "Flow" | "Data"; pin?: TypedPinDef }
findDataPin(identifier: string): TypedPinDef | null
findFlowPin(identifier: string): TypedPinDef | null
getVisibleDataInPin(index: number): TypedPinDef | null
getVisibleDataOutPin(index: number): TypedPinDef | null
```

#### 连接操作

```typescript
// 连接到另一个节点
connectPinWith(
  pin: string, 
  with_node: Node, 
  with_pin: string, 
  insert_pos?: number
): Connection | null

// 断开连接
disconnectDataInAt(pinIdentifier: string): boolean
disconnectFlowOutAt(pinIdentifier: string, index: number): boolean

// 获取所有连接
getAllConnections(): Connection[]
```

#### 可变类型节点

```typescript
// 设置类型约束
setConstraints(constraint: NodeType | string | null): Node

// 示例
const equal = graph.add_node(NODES.Arithmetic_General_Equal);
equal.setConstraints("C<T:Int>");  // 设置为整数比较
equal.setConstraints("C<T:Bool>"); // 改为布尔比较
equal.setConstraints(null);        // 重置为泛型

// 自动解析约束
solveConstraints(constraints: [string, NodeType][]): void
```

#### 位置和注释

```typescript
// 设置位置
setPosition(x: number, y: number, scale_x = 300, scale_y = 200): void

// 添加注释
add_comment(content: string): Comment
```

#### 序列化

```typescript
// 编码为 Protobuf
encode(): Gia.NodeInstance

// 从 Protobuf 解码
static decode(system: ResourceClass, proto: Gia.NodeInstance): Node | null
```

#### 调试

```typescript
// 打印节点信息
debugPrint({ indent?: number, log?: Function }): void
debugPrintPins({ indent?: number, log?: Function }): void
```

---

### 辅助接口

#### [Connection](./interface.ts) - 连接

```typescript
interface Connection {
  from: Node;              // 源节点
  to: Node;                // 目标节点
  from_pin: TypedPinDef;   // 源引脚
  to_pin: TypedPinDef;     // 目标引脚
}
```

#### [Comment](./interface.ts) - 注释

```typescript
interface Comment {
  content: string;  // 注释内容
  x?: number;       // X 坐标（独立注释）
  y?: number;       // Y 坐标（独立注释）
}
```

#### [GraphVar](./interface.ts) - 图变量

```typescript
interface GraphVar {
  name: string;      // 变量名
  type: NodeType;    // 变量类型
  val: TypedValue;   // 变量值
  exposed: boolean;  // 是否暴露
}
```

---

## 🎯 使用示例

### 示例 1：创建简单的触发器-动作流程

```typescript
const graph = new Graph("ENTITY_NODE_GRAPH");

// 添加触发器节点
const trigger = graph.add_node("Trigger.Tab.OnTabSelect");

// 添加分支节点
const branch = graph.add_node("Control.General.Branch");

// 连接控制流
graph.flow(trigger, branch);

// 连接数据流
graph.connect(trigger, branch, "Output0", "cond");

// 设置分支条件值
branch.setVal("cond", true);

graph.autoLayout();
encode_gia_file("simple_flow.gia", graph.encode());
```

### 示例 2：使用可变类型节点

```typescript
const graph = new Graph("ENTITY_NODE_GRAPH");

// 创建可变类型节点（三种等效方式）
const eq1 = graph.add_node(NODES.Arithmetic_General_Equal)
  .setConstraints("C<T:Int>");

const eq2 = graph.add_node(NODES.Arithmetic_General_Equal, "C<T:Int>");

const eq3 = graph.add_node("Arithmetic.General.Equal.C<T:Int>");

// 设置值
eq1.setVal("input1", 10);
eq1.setVal("input2", 20);
```

### 示例 3：使用图变量

```typescript
const graph = new Graph("ENTITY_NODE_GRAPH");

// 添加图变量
graph.add_graph_var("playerLevel", "Int", 10, true);
graph.add_graph_var("itemList", "L<Int>", [1, 2, 3], false);

// 使用图变量的节点
const getVar = graph.add_node("Query.CustomVariable.GetVariable");
getVar.setVal("var_name", "playerLevel");
```

### 示例 4：添加注释

```typescript
const graph = new Graph("ENTITY_NODE_GRAPH");
const node = graph.add_node(NODES.Control_General_Branch);

// 附加到节点的注释
node.add_comment("这是一个重要的分支节点");

// 或通过 graph 添加
graph.add_comment("另一个注释", node);

// 独立注释
graph.add_comment("这是一个独立注释", 600, 100);
```

### 示例 5：加载和修改现有图

```typescript
import { decode_gia_file } from "../protobuf/decode.ts";

// 加载现有文件
const proto = decode_gia_file("input.gia");
const graph = Graph.decode(proto);

// 修改节点
graph.nodes.forEach(node => {
  console.log(`节点: ${node.def.Identifier}`);
});

// 添加新节点
const newNode = graph.add_node(NODES.Control_General_Branch);

// 保存
encode_gia_file("modified.gia", graph.encode());
```

### 示例 6：复杂的数据流

```typescript
const graph = new Graph("ENTITY_NODE_GRAPH");

const trigger = graph.add_node(NODES.Trigger_Tab_OnTabSelect);
const getVar = graph.add_node(NODES.Query_CustomVariable_GetVariable);
const equal = graph.add_node(NODES.Arithmetic_General_Equal, "C<T:Int>");
const branch = graph.add_node(NODES.Control_General_Branch);

// 控制流
graph.flow(trigger, branch);

// 数据流
graph.connect(trigger, getVar, 0, 0);
graph.connect(getVar, equal, 0, "input1");
graph.connect(equal, branch, "result", "cond");

// 设置值
getVar.setVal("var_name", "Plant Level");
equal.setVal("input2", 5);

// 自动布局
graph.autoLayout();
```

---

## 🔧 底层 API ([core.ts](./core.ts))

供高级用户使用的底层编码/解码函数。

### 构建函数

```typescript
// 构建图对象
graph_body(body: GraphBody_): Gia.AssetBundle

// 构建节点对象
node_body(body: NodeBody_): Gia.NodeInstance

// 构建引脚对象
pin_body(body: PinBody_): Gia.PinInstance
```

### 值创建函数

```typescript
// 创建类型化值
make_typed_value(type: NodeType, is_server: boolean, val?: TypedValue): Gia.TypedValue

// 创建可变类型值
make_variant_value(type: NodeType, is_server: boolean, type_index: number, val?: TypedValue): Gia.TypedValue

// 创建图变量
make_graph_variable(type: NodeType, var_name: string, val: TypedValue, exposed: boolean): Gia.GraphVariable

// 基础类型值
make_int_value(val: TypedValue, type_def: Gia.TypeDefinition): Gia.TypedValue
make_float_value(val: TypedValue, type_def: Gia.TypeDefinition): Gia.TypedValue
make_string_value(val: TypedValue, type_def: Gia.TypeDefinition): Gia.TypedValue
make_enum_value(val: TypedValue, type_def: Gia.TypeDefinition): Gia.TypedValue
make_vector_value(val: TypedValue, type_def: Gia.TypeDefinition): Gia.TypedValue

// 复合类型值
make_list_value(type: ListType, is_server: boolean, val: TypedValue): Gia.TypedValue
make_map_value(type: DictType, is_server: boolean, val: TypedValue): Gia.TypedValue
make_struct_value(type: StructType, is_server: boolean, val: TypedValue): Gia.TypedValue
```

### 解码函数

```typescript
// 读取类型化值
read_typed_value(tv: Gia.TypedValue): TypedValue

// 读取图变量
read_graph_variable(proto: Gia.GraphVariable): { type, name, val, exposed }

// 读取连接
read_connections(nc: Gia.NodeConnection): { node_index, kind, shell_index } | null

// 获取资源类别
get_resource_class(rc: Gia.ResourceEntry_ResourceClass): ResourceClass | null
```

---

## 🎨 自动布局

使用 Dagre 图布局算法自动计算节点位置。

```typescript
// 使用默认选项
graph.autoLayout();

// 自定义布局参数
graph.autoLayout({
  node_sep: 150,        // 节点间距更大
  rank_sep: 400,        // 层级间距更大
  data_pin_height: 80   // 引脚更高
});
```

---

## 💡 最佳实践

### 1. 使用常量而非字符串

```typescript
// ✅ 推荐：使用 NODES 常量
const node = graph.add_node(NODES.Control_General_Branch);

// ❌ 不推荐：使用字符串（容易拼写错误）
const node = graph.add_node("Control.General.Branch");
```

### 2. 使用标识符而非索引

```typescript
// ✅ 推荐：使用引脚标识符
graph.connect(nodeA, nodeB, "result", "input");

// ⚠️ 可用但不推荐：使用索引
graph.connect(nodeA, nodeB, 0, 0);
```

### 3. 链式调用

```typescript
// ✅ 推荐：链式调用
const node = graph.add_node(NODES.Arithmetic_General_Equal)
  .setConstraints("C<T:Int>");

node.setVal("input1", 10)
    .setVal("input2", 20);
```

### 4. 使用自动布局

```typescript
// ✅ 推荐：使用自动布局
graph.autoLayout();

// ⚠️ 手动设置位置（仅在需要精确控制时）
node.setPosition(2, 3);
```

---

## 🔄 迁移指南

如果你使用旧版 API（`graph.ts`），请参考以下迁移指南：

| 旧 API | 新 API | 说明 |
|:-------|:-------|:-----|
| `new Graph("server")` | `new Graph("ENTITY_NODE_GRAPH")` | 使用明确的系统类型 |
| `graph.add_node(NODE_ID.xxx)` | `graph.add_node(NODES.xxx)` | 使用新的节点常量 |
| `node.setConcrete(id)` | `node.setConstraints("C<T:Type>")` | 使用类型约束字符串 |
| `graph.get_nodes()` | `Array.from(graph.nodes.values())` | 直接访问 nodes Map |

---

## 📖 相关文档

- [Protobuf 工具](../protobuf/readme.md) - GIA 文件编解码
- [节点数据](../node_data/readme.md) - 节点定义和类型系统
- [完整示例](./example.ts) - 实际使用示例代码

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

## 📝 许可

MIT License