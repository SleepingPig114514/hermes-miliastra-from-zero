// ==================================================================
// AUTO-GENERATED FILE. DO NOT EDIT.
// ==================================================================

export const NODES = {
  /**
 * **打印字符串** `(Execution.Common_Node.Print)`
 *
 * - 可以在日志中输出一条字符串，一般用于逻辑检测和调试
 * - 在日志中，无论是否勾选了该节点图，逻辑成功运行时该字符串都会打印
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **1** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Str` || `text` || 字符串: 所要打印的字符串 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CommonNode_Print: "Execution.Common_Node.Print",

  /**
 * **双分支** `(Control.General.Branch)`
 *
 * - 根据输入条件的判断结果可以分出“是”与“否”两个不同的分支
 * - 当布尔值为“是”时，后续会执行【是】对应的执行流；布尔值为“否”时，会执行【否】对应的执行流
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **2** || 🖥️ Server || 🔀 Control || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Bol` || `cond` || 条件 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `True` || 是 |
 * | - || ⏩ || - || `False` || 否 |
 */
  Control_General_Branch: "Control.General.Branch",

  /**
 * **多分支** `(Control.General.Switch)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **3** || 🖥️ Server || 🔀 Control || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔷 || **`R<T>`** || `key` || 控制表达式: 仅支持整数或字符串 |
 * | 1 || 🔷 || **`L<R<T>>`** || `cases` || 判断参数 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `DefaultBranch` || 默认 |
 * | - || ⏩ || - || `Case1` ||  |
 * | - || ⏩ || - || `Case2` ||  |
 * | - || ⏩ || - || `Case3` ||  |
 * | - || ⏩ || - || `Case4` ||  |
 * | - || ⏩ || - || `Case5` ||  |
 * | - || ⏩ || - || `Case6` ||  |
 * | - || ⏩ || - || `Case7` ||  |
 * | - || ⏩ || - || `Case8` ||  |
 * | - || ⏩ || - || `Case9` ||  |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 */
  Control_General_Switch: "Control.General.Switch",

  /**
 * **有限循环** `(Execution.Common_Node.For_Loop)`
 *
 * - 从【循环起始值】开始到【循环终止值】结束，会遍历其中的循环值，每次整数加一。每次循环会执行一次【循环体】后连接的节点逻辑。完成一次完整遍历后，会执行【循环完成】后连接的节点逻辑
 * - 可以使用【跳出循环】来提前结束该循环值遍历，跳出循环后也会执行【循环完成】后连接的节点逻辑
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **5** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `Start` ||  |
 * | - || ▶️ || - || `Break` || 跳出循环 |
 * | 0 || 🔹 || `Int` || `start_index` || 循环起始值: 遍历开始的整数值 |
 * | 1 || 🔹 || `Int` || `end_index` || 循环终止值: 遍历结束的整数值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `Iteration` || 循环体 |
 * | - || ⏩ || - || `End` || 循环完成 |
 * | 0 || 🔸 || `Int` || `current_index` || 当前循环值: 当次执行逻辑的整数值 |
 */
  Execution_CommonNode_ForLoop: "Execution.Common_Node.For_Loop",

  /**
 * **跳出循环** `(Execution.Common_Node.Break)`
 *
 * - 从有限循环中跳出。出引脚需要与节点【有限循环】的【跳出循环】入参相连
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **6** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CommonNode_Break: "Execution.Common_Node.Break",

  /**
 * **获取随机浮点数** `(Query.Math.Random_Float)`
 *
 * - 获取一个大于等于下限，小于等于上限的随机浮点数。注意该节点生成的随机数包含上下限
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **7** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `lower` || 下限 |
 * | 1 || 🔹 || `Flt` || `upper` || 上限 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || 结果 |
 */
  Query_Math_RandomFloat: "Query.Math.Random_Float",

  /**
 * **权重随机** `(Query.Math.Weighted_Random)`
 *
 * - 输入一组权重组成的权重列表，按照权重随机选择其中的一个序号
 * - 例如：权重列表为{10，20，66，4}，那么此节点分别由10%、20%、66%、4%的概率输出0、1、2、3
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **8** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `L<Int>` || `weights` || 权重列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `index` || 权重序号 |
 */
  Query_Math_WeightedRandom: "Query.Math.Weighted_Random",

  /**
 * **拆分三维向量** `(Arithmetic.Math.Split_Vector)`
 *
 * - 将三维向量的x、y、z分量输出为三个浮点数
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **9** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `vector` || 三维向量 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `x` || X分量 |
 * | 1 || 🔸 || `Flt` || `y` || Y分量 |
 * | 2 || 🔸 || `Flt` || `z` || Z分量 |
 */
  Arithmetic_Math_SplitVector: "Arithmetic.Math.Split_Vector",

  /**
 * **三维向量加法** `(Arithmetic.Math.Vector_Add)`
 *
 * - 计算两个三维向量的加法
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **10** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `a` || 三维向量1 |
 * | 1 || 🔹 || `Vec` || `b` || 三维向量2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || 结果 |
 */
  Arithmetic_Math_VectorAdd: "Arithmetic.Math.Vector_Add",

  /**
 * **三维向量减法** `(Arithmetic.Math.Vector_Subtract)`
 *
 * - 计算两个三维向量的减法
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **11** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `a` || 三维向量1 |
 * | 1 || 🔹 || `Vec` || `b` || 三维向量2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || 结果 |
 */
  Arithmetic_Math_VectorSubtract: "Arithmetic.Math.Vector_Subtract",

  /**
 * **三维向量缩放** `(Arithmetic.Math.Vector_Scale)`
 *
 * - 将输入的三维向量缩放后输出（三维向量数乘）
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **12** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `v` || 三维向量 |
 * | 1 || 🔹 || `Flt` || `scale` || 缩放倍率 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || 结果 |
 */
  Arithmetic_Math_VectorScale: "Arithmetic.Math.Vector_Scale",

  /**
 * **三维向量夹角** `(Arithmetic.Math.Vector_Angle)`
 *
 * - 计算两个三维向量之间的夹角，以弧度输出
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **13** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `a` || 三维向量1 |
 * | 1 || 🔹 || `Vec` || `b` || 三维向量2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `radians` || 夹角(弧度) |
 */
  Arithmetic_Math_VectorAngle: "Arithmetic.Math.Vector_Angle",

  /**
 * **是否相等** `(Arithmetic.General.Equal)`
 *
 * - 判断两个输入是否相等
 * - 部分参数类型有较为特殊的判定规则：
 * - 浮点数：浮点数采用近似相等进行比较，当两个浮点数小于一个极小值时，这两个浮点数认为相等。例如：2.0000001与2.0认为相等
 * - 三维向量：三维向量的x、y、z分别采用浮点数近似相等比较
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **14** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `input1` || 输入1 |
 * | 1 || 🔷 || **`R<T>`** || `input2` || 输入2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 结果: 相等输出“是”，不相等输出“否” |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Str>`
 * * `C<T:Gid>`
 * * `C<T:Ety>`
 * * `C<T:Vec>`
 * * `C<T:Fct>`
 * * `C<T:Int>`
 * * `C<T:Flt>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:Bol>`
 */
  Arithmetic_General_Equal: "Arithmetic.General.Equal",

  /**
 * **获取局部变量** `(Query.General.Get_Local)`
 *
 * - 可以获取局部变量，也可以设置该局部变量的【初始值】
 * - 设置【初始值】以后，出参的【值】输出即为输入的【初始值】
 * - 当出参【局部变量】与执行节点【设置局部变量】的入参【局部变量】连接后，执行节点【设置局部变量】的入参【值】会覆写该查询节点的出参【值】，再次使用【获取局部变量】节点时，出参【值】为覆写后的值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **18** || 🖥️ Server || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `initial_value` || 初始值: 可以设置局部变量的初始默认值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Loc` || `local_variable` || 局部变量: 存储数据的载体 |
 * | 1 || 🔶 || **`R<T>`** || `value` || 值: 未被覆写时，该值等于初始值，被覆写后，该值等于被覆写后的值 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Bol>`
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:L<Int>>`
 * * `C<T:L<Str>>`
 * * `C<T:L<Ety>>`
 * * `C<T:L<Gid>>`
 * * `C<T:L<Flt>>`
 * * `C<T:L<Vec>>`
 * * `C<T:L<Bol>>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:L<Cfg>>`
 * * `C<T:L<Pfb>>`
 * * `C<T:Fct>`
 * * `C<T:L<Fct>>`
 */
  Query_General_GetLocal: "Query.General.Get_Local",

  /**
 * **设置局部变量** `(Execution.Common_Node.Set_Local)`
 *
 * - 与查询节点【获取局部变量】连接后可以覆写该局部变量的值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **19** || 🖥️ Server || ⚙️ Execution || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Loc` || `variable` || 局部变量: 存储数据的载体 |
 * | 1 || 🔷 || **`R<T>`** || `value` || 值: 所要覆写该局部变量的值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Bol>`
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:L<Int>>`
 * * `C<T:L<Str>>`
 * * `C<T:L<Ety>>`
 * * `C<T:L<Gid>>`
 * * `C<T:L<Flt>>`
 * * `C<T:L<Vec>>`
 * * `C<T:L<Bol>>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:L<Cfg>>`
 * * `C<T:L<Pfb>>`
 * * `C<T:Fct>`
 * * `C<T:L<Fct>>`
 */
  Execution_CommonNode_SetLocal: "Execution.Common_Node.Set_Local",

  /**
 * **设置自定义变量** `(Execution.Custom_Variable.Set_Variable)`
 *
 * - 为目标实体上的指定自定义变量设置值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **22** || 🖥️ Server || ⚙️ Execution || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 该变量挂载在该实体上 |
 * | 1 || 🔹 || `Str` || `variable_name` || 变量名: 自定义变量的命名，不可重复 |
 * | 2 || 🔷 || **`R<T>`** || `value` || 变量值: 赋予该变量的值 |
 * | 3 || 🔹 || `Bol` || `should_trigger_event` || 是否触发事件: 默认为是。选为否时，这次自定义变量修改不会触发自定义变量变化时事件 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:L<Int>>`
 * * `C<T:L<Str>>`
 * * `C<T:L<Ety>>`
 * * `C<T:L<Gid>>`
 * * `C<T:L<Flt>>`
 * * `C<T:L<Vec>>`
 * * `C<T:L<Bol>>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:L<Cfg>>`
 * * `C<T:L<Pfb>>`
 * * `C<T:Fct>`
 * * `C<T:L<Fct>>`
 * * `C<T:D<Ety,Ety>>`
 * * `C<T:D<Ety,Gid>>`
 * * `C<T:D<Ety,Int>>`
 * * `C<T:D<Ety,Bol>>`
 * * `C<T:D<Ety,Flt>>`
 * * `C<T:D<Ety,Str>>`
 * * `C<T:D<Ety,Fct>>`
 * * `C<T:D<Ety,Vec>>`
 * * `C<T:D<Ety,Cfg>>`
 * * `C<T:D<Ety,Pfb>>`
 * * `C<T:D<Ety,L<Ety>>>`
 * * `C<T:D<Ety,L<Gid>>>`
 * * `C<T:D<Ety,L<Int>>>`
 * * `C<T:D<Ety,L<Bol>>>`
 * * `C<T:D<Ety,L<Flt>>>`
 * * `C<T:D<Ety,L<Str>>>`
 * * `C<T:D<Ety,L<Fct>>>`
 * * `C<T:D<Ety,L<Vec>>>`
 * * `C<T:D<Ety,L<Cfg>>>`
 * * `C<T:D<Gid,Ety>>`
 * * `C<T:D<Gid,Gid>>`
 * * `C<T:D<Gid,Int>>`
 * * `C<T:D<Gid,Bol>>`
 * * `C<T:D<Gid,Flt>>`
 * * `C<T:D<Gid,Str>>`
 * * `C<T:D<Gid,Fct>>`
 * * `C<T:D<Gid,Vec>>`
 * * `C<T:D<Gid,Cfg>>`
 * * `C<T:D<Gid,Pfb>>`
 * * `C<T:D<Gid,L<Ety>>>`
 * * `C<T:D<Gid,L<Gid>>>`
 * * `C<T:D<Gid,L<Int>>>`
 * * `C<T:D<Gid,L<Bol>>>`
 * * `C<T:D<Gid,L<Flt>>>`
 * * `C<T:D<Gid,L<Str>>>`
 * * `C<T:D<Gid,L<Fct>>>`
 * * `C<T:D<Gid,L<Vec>>>`
 * * `C<T:D<Gid,L<Cfg>>>`
 * * `C<T:D<Int,Ety>>`
 * * `C<T:D<Int,Gid>>`
 * * `C<T:D<Int,Int>>`
 * * `C<T:D<Int,Bol>>`
 * * `C<T:D<Int,Flt>>`
 * * `C<T:D<Int,Str>>`
 * * `C<T:D<Int,Fct>>`
 * * `C<T:D<Int,Vec>>`
 * * `C<T:D<Int,Cfg>>`
 * * `C<T:D<Int,Pfb>>`
 * * `C<T:D<Int,L<Ety>>>`
 * * `C<T:D<Int,L<Gid>>>`
 * * `C<T:D<Int,L<Int>>>`
 * * `C<T:D<Int,L<Bol>>>`
 * * `C<T:D<Int,L<Flt>>>`
 * * `C<T:D<Int,L<Str>>>`
 * * `C<T:D<Int,L<Fct>>>`
 * * `C<T:D<Int,L<Vec>>>`
 * * `C<T:D<Int,L<Cfg>>>`
 * * `C<T:D<Str,Ety>>`
 * * `C<T:D<Str,Gid>>`
 * * `C<T:D<Str,Int>>`
 * * `C<T:D<Str,Bol>>`
 * * `C<T:D<Str,Flt>>`
 * * `C<T:D<Str,Str>>`
 * * `C<T:D<Str,Fct>>`
 * * `C<T:D<Str,Vec>>`
 * * `C<T:D<Str,Cfg>>`
 * * `C<T:D<Str,Pfb>>`
 * * `C<T:D<Str,L<Ety>>>`
 * * `C<T:D<Str,L<Gid>>>`
 * * `C<T:D<Str,L<Int>>>`
 * * `C<T:D<Str,L<Bol>>>`
 * * `C<T:D<Str,L<Flt>>>`
 * * `C<T:D<Str,L<Str>>>`
 * * `C<T:D<Str,L<Fct>>>`
 * * `C<T:D<Str,L<Vec>>>`
 * * `C<T:D<Str,L<Cfg>>>`
 * * `C<T:D<Fct,Ety>>`
 * * `C<T:D<Fct,Gid>>`
 * * `C<T:D<Fct,Int>>`
 * * `C<T:D<Fct,Bol>>`
 * * `C<T:D<Fct,Flt>>`
 * * `C<T:D<Fct,Str>>`
 * * `C<T:D<Fct,Fct>>`
 * * `C<T:D<Fct,Vec>>`
 * * `C<T:D<Fct,Cfg>>`
 * * `C<T:D<Fct,Pfb>>`
 * * `C<T:D<Fct,L<Ety>>>`
 * * `C<T:D<Fct,L<Gid>>>`
 * * `C<T:D<Fct,L<Int>>>`
 * * `C<T:D<Fct,L<Bol>>>`
 * * `C<T:D<Fct,L<Flt>>>`
 * * `C<T:D<Fct,L<Str>>>`
 * * `C<T:D<Fct,L<Fct>>>`
 * * `C<T:D<Fct,L<Vec>>>`
 * * `C<T:D<Fct,L<Cfg>>>`
 * * `C<T:D<Cfg,Ety>>`
 * * `C<T:D<Cfg,Gid>>`
 * * `C<T:D<Cfg,Int>>`
 * * `C<T:D<Cfg,Bol>>`
 * * `C<T:D<Cfg,Flt>>`
 * * `C<T:D<Cfg,Str>>`
 * * `C<T:D<Cfg,Fct>>`
 * * `C<T:D<Cfg,Vec>>`
 * * `C<T:D<Cfg,Cfg>>`
 * * `C<T:D<Cfg,Pfb>>`
 * * `C<T:D<Cfg,L<Ety>>>`
 * * `C<T:D<Cfg,L<Gid>>>`
 * * `C<T:D<Cfg,L<Int>>>`
 * * `C<T:D<Cfg,L<Bol>>>`
 * * `C<T:D<Cfg,L<Flt>>>`
 * * `C<T:D<Cfg,L<Str>>>`
 * * `C<T:D<Cfg,L<Fct>>>`
 * * `C<T:D<Cfg,L<Vec>>>`
 * * `C<T:D<Cfg,L<Cfg>>>`
 * * `C<T:D<Pfb,Ety>>`
 * * `C<T:D<Pfb,Gid>>`
 * * `C<T:D<Pfb,Int>>`
 * * `C<T:D<Pfb,Bol>>`
 * * `C<T:D<Pfb,Flt>>`
 * * `C<T:D<Pfb,Str>>`
 * * `C<T:D<Pfb,Fct>>`
 * * `C<T:D<Pfb,Vec>>`
 * * `C<T:D<Pfb,Cfg>>`
 * * `C<T:D<Pfb,Pfb>>`
 * * `C<T:D<Pfb,L<Ety>>>`
 * * `C<T:D<Pfb,L<Gid>>>`
 * * `C<T:D<Pfb,L<Int>>>`
 * * `C<T:D<Pfb,L<Bol>>>`
 * * `C<T:D<Pfb,L<Flt>>>`
 * * `C<T:D<Pfb,L<Str>>>`
 * * `C<T:D<Pfb,L<Fct>>>`
 * * `C<T:D<Pfb,L<Vec>>>`
 * * `C<T:D<Pfb,L<Cfg>>>`
 */
  Execution_CustomVariable_SetVariable: "Execution.Custom_Variable.Set_Variable",

  /**
 * **自定义变量变化时** `(Trigger.Custom_Variable.On_Variable_Change)`
 *
 * - 当前节点图所关联实体的自定义变量发生变化时，触发该事件
 * - 注意变化前值和变化后值为泛型，需确定其泛型类型后，才能正确接收到对应类型自定义变量的事件
 * - 容器类型的自定义变量没有变化前值和变化后值出参
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **36** || 🖥️ Server || ⚡ Trigger || 🧩Variant |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体: 与节点图关联的实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID: 与节点图关联的实体的GUID |
 * | 2 || 🔸 || `Str` || `variable_name` || 变量名: 发生变化的变量的名称 |
 * | 3 || 🔶 || **`R<T>`** || `old_value` || 变化前值: 变量变化前的值 |
 * | 4 || 🔶 || **`R<T>`** || `new_value` || 变化后值: 变量变化后的值 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:L<Int>>`
 * * `C<T:L<Str>>`
 * * `C<T:L<Ety>>`
 * * `C<T:L<Gid>>`
 * * `C<T:L<Flt>>`
 * * `C<T:L<Vec>>`
 * * `C<T:L<Bol>>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:L<Cfg>>`
 * * `C<T:L<Pfb>>`
 * * `C<T:Fct>`
 * * `C<T:L<Fct>>`
 * * `C<T:D<Ety,Ety>>`
 * * `C<T:D<Ety,Gid>>`
 * * `C<T:D<Ety,Int>>`
 * * `C<T:D<Ety,Bol>>`
 * * `C<T:D<Ety,Flt>>`
 * * `C<T:D<Ety,Str>>`
 * * `C<T:D<Ety,Fct>>`
 * * `C<T:D<Ety,Vec>>`
 * * `C<T:D<Ety,Cfg>>`
 * * `C<T:D<Ety,Pfb>>`
 * * `C<T:D<Ety,L<Ety>>>`
 * * `C<T:D<Ety,L<Gid>>>`
 * * `C<T:D<Ety,L<Int>>>`
 * * `C<T:D<Ety,L<Bol>>>`
 * * `C<T:D<Ety,L<Flt>>>`
 * * `C<T:D<Ety,L<Str>>>`
 * * `C<T:D<Ety,L<Fct>>>`
 * * `C<T:D<Ety,L<Vec>>>`
 * * `C<T:D<Ety,L<Cfg>>>`
 * * `C<T:D<Gid,Ety>>`
 * * `C<T:D<Gid,Gid>>`
 * * `C<T:D<Gid,Int>>`
 * * `C<T:D<Gid,Bol>>`
 * * `C<T:D<Gid,Flt>>`
 * * `C<T:D<Gid,Str>>`
 * * `C<T:D<Gid,Fct>>`
 * * `C<T:D<Gid,Vec>>`
 * * `C<T:D<Gid,Cfg>>`
 * * `C<T:D<Gid,Pfb>>`
 * * `C<T:D<Gid,L<Ety>>>`
 * * `C<T:D<Gid,L<Gid>>>`
 * * `C<T:D<Gid,L<Int>>>`
 * * `C<T:D<Gid,L<Bol>>>`
 * * `C<T:D<Gid,L<Flt>>>`
 * * `C<T:D<Gid,L<Str>>>`
 * * `C<T:D<Gid,L<Fct>>>`
 * * `C<T:D<Gid,L<Vec>>>`
 * * `C<T:D<Gid,L<Cfg>>>`
 * * `C<T:D<Int,Ety>>`
 * * `C<T:D<Int,Gid>>`
 * * `C<T:D<Int,Int>>`
 * * `C<T:D<Int,Bol>>`
 * * `C<T:D<Int,Flt>>`
 * * `C<T:D<Int,Str>>`
 * * `C<T:D<Int,Fct>>`
 * * `C<T:D<Int,Vec>>`
 * * `C<T:D<Int,Cfg>>`
 * * `C<T:D<Int,Pfb>>`
 * * `C<T:D<Int,L<Ety>>>`
 * * `C<T:D<Int,L<Gid>>>`
 * * `C<T:D<Int,L<Int>>>`
 * * `C<T:D<Int,L<Bol>>>`
 * * `C<T:D<Int,L<Flt>>>`
 * * `C<T:D<Int,L<Str>>>`
 * * `C<T:D<Int,L<Fct>>>`
 * * `C<T:D<Int,L<Vec>>>`
 * * `C<T:D<Int,L<Cfg>>>`
 * * `C<T:D<Str,Ety>>`
 * * `C<T:D<Str,Gid>>`
 * * `C<T:D<Str,Int>>`
 * * `C<T:D<Str,Bol>>`
 * * `C<T:D<Str,Flt>>`
 * * `C<T:D<Str,Str>>`
 * * `C<T:D<Str,Fct>>`
 * * `C<T:D<Str,Vec>>`
 * * `C<T:D<Str,Cfg>>`
 * * `C<T:D<Str,Pfb>>`
 * * `C<T:D<Str,L<Ety>>>`
 * * `C<T:D<Str,L<Gid>>>`
 * * `C<T:D<Str,L<Int>>>`
 * * `C<T:D<Str,L<Bol>>>`
 * * `C<T:D<Str,L<Flt>>>`
 * * `C<T:D<Str,L<Str>>>`
 * * `C<T:D<Str,L<Fct>>>`
 * * `C<T:D<Str,L<Vec>>>`
 * * `C<T:D<Str,L<Cfg>>>`
 * * `C<T:D<Fct,Ety>>`
 * * `C<T:D<Fct,Gid>>`
 * * `C<T:D<Fct,Int>>`
 * * `C<T:D<Fct,Bol>>`
 * * `C<T:D<Fct,Flt>>`
 * * `C<T:D<Fct,Str>>`
 * * `C<T:D<Fct,Fct>>`
 * * `C<T:D<Fct,Vec>>`
 * * `C<T:D<Fct,Cfg>>`
 * * `C<T:D<Fct,Pfb>>`
 * * `C<T:D<Fct,L<Ety>>>`
 * * `C<T:D<Fct,L<Gid>>>`
 * * `C<T:D<Fct,L<Int>>>`
 * * `C<T:D<Fct,L<Bol>>>`
 * * `C<T:D<Fct,L<Flt>>>`
 * * `C<T:D<Fct,L<Str>>>`
 * * `C<T:D<Fct,L<Fct>>>`
 * * `C<T:D<Fct,L<Vec>>>`
 * * `C<T:D<Fct,L<Cfg>>>`
 * * `C<T:D<Cfg,Ety>>`
 * * `C<T:D<Cfg,Gid>>`
 * * `C<T:D<Cfg,Int>>`
 * * `C<T:D<Cfg,Bol>>`
 * * `C<T:D<Cfg,Flt>>`
 * * `C<T:D<Cfg,Str>>`
 * * `C<T:D<Cfg,Fct>>`
 * * `C<T:D<Cfg,Vec>>`
 * * `C<T:D<Cfg,Cfg>>`
 * * `C<T:D<Cfg,Pfb>>`
 * * `C<T:D<Cfg,L<Ety>>>`
 * * `C<T:D<Cfg,L<Gid>>>`
 * * `C<T:D<Cfg,L<Int>>>`
 * * `C<T:D<Cfg,L<Bol>>>`
 * * `C<T:D<Cfg,L<Flt>>>`
 * * `C<T:D<Cfg,L<Str>>>`
 * * `C<T:D<Cfg,L<Fct>>>`
 * * `C<T:D<Cfg,L<Vec>>>`
 * * `C<T:D<Cfg,L<Cfg>>>`
 * * `C<T:D<Pfb,Ety>>`
 * * `C<T:D<Pfb,Gid>>`
 * * `C<T:D<Pfb,Int>>`
 * * `C<T:D<Pfb,Bol>>`
 * * `C<T:D<Pfb,Flt>>`
 * * `C<T:D<Pfb,Str>>`
 * * `C<T:D<Pfb,Fct>>`
 * * `C<T:D<Pfb,Vec>>`
 * * `C<T:D<Pfb,Cfg>>`
 * * `C<T:D<Pfb,Pfb>>`
 * * `C<T:D<Pfb,L<Ety>>>`
 * * `C<T:D<Pfb,L<Gid>>>`
 * * `C<T:D<Pfb,L<Int>>>`
 * * `C<T:D<Pfb,L<Bol>>>`
 * * `C<T:D<Pfb,L<Flt>>>`
 * * `C<T:D<Pfb,L<Str>>>`
 * * `C<T:D<Pfb,L<Fct>>>`
 * * `C<T:D<Pfb,L<Vec>>>`
 * * `C<T:D<Pfb,L<Cfg>>>`
 */
  Trigger_CustomVariable_OnVariableChange: "Trigger.Custom_Variable.On_Variable_Change",

  /**
 * **获取自定义变量** `(Query.Custom_Variable.Get_Variable)`
 *
 * - 获取目标实体的指定自定义变量的值
 * - 如果变量不存在，则返回类型的默认值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **50** || 🖥️ Server || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Str` || `var_name` || 变量名 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `value` || 变量值 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:L<Int>>`
 * * `C<T:L<Str>>`
 * * `C<T:L<Ety>>`
 * * `C<T:L<Gid>>`
 * * `C<T:L<Flt>>`
 * * `C<T:L<Vec>>`
 * * `C<T:L<Bol>>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:L<Cfg>>`
 * * `C<T:L<Pfb>>`
 * * `C<T:Fct>`
 * * `C<T:L<Fct>>`
 * * `C<T:D<Ety,Ety>>`
 * * `C<T:D<Ety,Gid>>`
 * * `C<T:D<Ety,Int>>`
 * * `C<T:D<Ety,Bol>>`
 * * `C<T:D<Ety,Flt>>`
 * * `C<T:D<Ety,Str>>`
 * * `C<T:D<Ety,Fct>>`
 * * `C<T:D<Ety,Vec>>`
 * * `C<T:D<Ety,Cfg>>`
 * * `C<T:D<Ety,Pfb>>`
 * * `C<T:D<Ety,L<Ety>>>`
 * * `C<T:D<Ety,L<Gid>>>`
 * * `C<T:D<Ety,L<Int>>>`
 * * `C<T:D<Ety,L<Bol>>>`
 * * `C<T:D<Ety,L<Flt>>>`
 * * `C<T:D<Ety,L<Str>>>`
 * * `C<T:D<Ety,L<Fct>>>`
 * * `C<T:D<Ety,L<Vec>>>`
 * * `C<T:D<Ety,L<Cfg>>>`
 * * `C<T:D<Gid,Ety>>`
 * * `C<T:D<Gid,Gid>>`
 * * `C<T:D<Gid,Int>>`
 * * `C<T:D<Gid,Bol>>`
 * * `C<T:D<Gid,Flt>>`
 * * `C<T:D<Gid,Str>>`
 * * `C<T:D<Gid,Fct>>`
 * * `C<T:D<Gid,Vec>>`
 * * `C<T:D<Gid,Cfg>>`
 * * `C<T:D<Gid,Pfb>>`
 * * `C<T:D<Gid,L<Ety>>>`
 * * `C<T:D<Gid,L<Gid>>>`
 * * `C<T:D<Gid,L<Int>>>`
 * * `C<T:D<Gid,L<Bol>>>`
 * * `C<T:D<Gid,L<Flt>>>`
 * * `C<T:D<Gid,L<Str>>>`
 * * `C<T:D<Gid,L<Fct>>>`
 * * `C<T:D<Gid,L<Vec>>>`
 * * `C<T:D<Gid,L<Cfg>>>`
 * * `C<T:D<Int,Ety>>`
 * * `C<T:D<Int,Gid>>`
 * * `C<T:D<Int,Int>>`
 * * `C<T:D<Int,Bol>>`
 * * `C<T:D<Int,Flt>>`
 * * `C<T:D<Int,Str>>`
 * * `C<T:D<Int,Fct>>`
 * * `C<T:D<Int,Vec>>`
 * * `C<T:D<Int,Cfg>>`
 * * `C<T:D<Int,Pfb>>`
 * * `C<T:D<Int,L<Ety>>>`
 * * `C<T:D<Int,L<Gid>>>`
 * * `C<T:D<Int,L<Int>>>`
 * * `C<T:D<Int,L<Bol>>>`
 * * `C<T:D<Int,L<Flt>>>`
 * * `C<T:D<Int,L<Str>>>`
 * * `C<T:D<Int,L<Fct>>>`
 * * `C<T:D<Int,L<Vec>>>`
 * * `C<T:D<Int,L<Cfg>>>`
 * * `C<T:D<Str,Ety>>`
 * * `C<T:D<Str,Gid>>`
 * * `C<T:D<Str,Int>>`
 * * `C<T:D<Str,Bol>>`
 * * `C<T:D<Str,Flt>>`
 * * `C<T:D<Str,Str>>`
 * * `C<T:D<Str,Fct>>`
 * * `C<T:D<Str,Vec>>`
 * * `C<T:D<Str,Cfg>>`
 * * `C<T:D<Str,Pfb>>`
 * * `C<T:D<Str,L<Ety>>>`
 * * `C<T:D<Str,L<Gid>>>`
 * * `C<T:D<Str,L<Int>>>`
 * * `C<T:D<Str,L<Bol>>>`
 * * `C<T:D<Str,L<Flt>>>`
 * * `C<T:D<Str,L<Str>>>`
 * * `C<T:D<Str,L<Fct>>>`
 * * `C<T:D<Str,L<Vec>>>`
 * * `C<T:D<Str,L<Cfg>>>`
 * * `C<T:D<Fct,Ety>>`
 * * `C<T:D<Fct,Gid>>`
 * * `C<T:D<Fct,Int>>`
 * * `C<T:D<Fct,Bol>>`
 * * `C<T:D<Fct,Flt>>`
 * * `C<T:D<Fct,Str>>`
 * * `C<T:D<Fct,Fct>>`
 * * `C<T:D<Fct,Vec>>`
 * * `C<T:D<Fct,Cfg>>`
 * * `C<T:D<Fct,Pfb>>`
 * * `C<T:D<Fct,L<Ety>>>`
 * * `C<T:D<Fct,L<Gid>>>`
 * * `C<T:D<Fct,L<Int>>>`
 * * `C<T:D<Fct,L<Bol>>>`
 * * `C<T:D<Fct,L<Flt>>>`
 * * `C<T:D<Fct,L<Str>>>`
 * * `C<T:D<Fct,L<Fct>>>`
 * * `C<T:D<Fct,L<Vec>>>`
 * * `C<T:D<Fct,L<Cfg>>>`
 * * `C<T:D<Cfg,Ety>>`
 * * `C<T:D<Cfg,Gid>>`
 * * `C<T:D<Cfg,Int>>`
 * * `C<T:D<Cfg,Bol>>`
 * * `C<T:D<Cfg,Flt>>`
 * * `C<T:D<Cfg,Str>>`
 * * `C<T:D<Cfg,Fct>>`
 * * `C<T:D<Cfg,Vec>>`
 * * `C<T:D<Cfg,Cfg>>`
 * * `C<T:D<Cfg,Pfb>>`
 * * `C<T:D<Cfg,L<Ety>>>`
 * * `C<T:D<Cfg,L<Gid>>>`
 * * `C<T:D<Cfg,L<Int>>>`
 * * `C<T:D<Cfg,L<Bol>>>`
 * * `C<T:D<Cfg,L<Flt>>>`
 * * `C<T:D<Cfg,L<Str>>>`
 * * `C<T:D<Cfg,L<Fct>>>`
 * * `C<T:D<Cfg,L<Vec>>>`
 * * `C<T:D<Cfg,L<Cfg>>>`
 * * `C<T:D<Pfb,Ety>>`
 * * `C<T:D<Pfb,Gid>>`
 * * `C<T:D<Pfb,Int>>`
 * * `C<T:D<Pfb,Bol>>`
 * * `C<T:D<Pfb,Flt>>`
 * * `C<T:D<Pfb,Str>>`
 * * `C<T:D<Pfb,Fct>>`
 * * `C<T:D<Pfb,Vec>>`
 * * `C<T:D<Pfb,Cfg>>`
 * * `C<T:D<Pfb,Pfb>>`
 * * `C<T:D<Pfb,L<Ety>>>`
 * * `C<T:D<Pfb,L<Gid>>>`
 * * `C<T:D<Pfb,L<Int>>>`
 * * `C<T:D<Pfb,L<Bol>>>`
 * * `C<T:D<Pfb,L<Flt>>>`
 * * `C<T:D<Pfb,L<Str>>>`
 * * `C<T:D<Pfb,L<Fct>>>`
 * * `C<T:D<Pfb,L<Vec>>>`
 * * `C<T:D<Pfb,L<Cfg>>>`
 */
  Query_CustomVariable_GetVariable: "Query.Custom_Variable.Get_Variable",

  /**
 * **设置预设状态** `(Execution.Preset_Status.Set_Status)`
 *
 * - 设置指定目标实体的预设状态
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **66** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 所要设置预设状态的实体 |
 * | 1 || 🔹 || `Int` || `preset_index` || 预设状态索引: 预设状态的唯一标识 |
 * | 2 || 🔹 || `Int` || `preset_value` || 预设状态值: 一般“0”为关闭，“1”为开启 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_PresetStatus_SetStatus: "Execution.Preset_Status.Set_Status",

  /**
 * **预设状态变化时** `(Trigger.Preset_Status.On_Status_Change)`
 *
 * - 节点图所关联的实体的预设状态发生变化时，触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **67** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Int` || `preset_index` || 预设状态索引 |
 * | 3 || 🔸 || `Int` || `old_value` || 变化前值 |
 * | 4 || 🔸 || `Int` || `new_value` || 变化后值 |
 */
  Trigger_PresetStatus_OnStatusChange: "Trigger.Preset_Status.On_Status_Change",

  /**
 * **获取预设状态** `(Query.Preset_Status.Get_Status)`
 *
 * - 获取目标实体的指定预设状态的预设状态值。如果该实体没有指定的预设状态，则返回0
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **68** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Int` || `preset_index` || 预设状态索引 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `preset_value` || 预设状态值 |
 */
  Query_PresetStatus_GetStatus: "Query.Preset_Status.Get_Status",

  /**
 * **销毁实体** `(Execution.Entity_Related.Destroy_Entity)`
 *
 * - 销毁指定实体，会有销毁表现，也可以触发一些销毁后才会触发的逻辑，比如本地投射物中的生命周期结束时行为
 * - 在关卡实体上可以监听到【实体销毁时】以及【实体移除/销毁时】事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **69** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 所要销毁的实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_EntityRelated_DestroyEntity: "Execution.Entity_Related.Destroy_Entity",

  /**
 * **创建实体** `(Execution.Entity_Related.Create_Entity)`
 *
 * - 根据GUID创建实体。要求预先将其布设在场景内
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **70** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Gid` || `guid` || 目标GUID: 该实体的标识 |
 * | 1 || 🔹 || `L<Int>` || `unit_tag_indexes` || 单位标签索引列表: 可决定该实体创建时携带的单位标签 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_EntityRelated_CreateEntity: "Execution.Entity_Related.Create_Entity",

  /**
 * **实体创建时** `(Trigger.Entity_Related.On_Created)`
 *
 * - 实体被创建时，触发该事件
 * - 所有类型的实体均可以触发该事件。关卡实体、角色实体和玩家实体会在进入关卡时触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **71** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 */
  Trigger_EntityRelated_OnCreated: "Trigger.Entity_Related.On_Created",

  /**
 * **实体移除/销毁时** `(Trigger.Entity_Related.On_Removed)`
 *
 * - 关卡内任意实体被移除或销毁时触发该事件，该事件仅在关卡实体上可以触发
 * - 实体被销毁或被移除均会触发该事件。因此实体被销毁时，会依次触发【实体销毁时】以及【实体移除/销毁时】事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **72** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 */
  Trigger_EntityRelated_OnRemoved: "Trigger.Entity_Related.On_Removed",

  /**
 * **获取自身实体** `(Query.Entity_Related.Get_Self)`
 *
 * - 返回该节点图所关联的实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **73** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `self` || 自身实体 |
 */
  Query_EntityRelated_GetSelf: "Query.Entity_Related.Get_Self",

  /**
 * **三维向量归一化** `(Arithmetic.Math.Vector_Normalize)`
 *
 * - 将三维向量的长度归一化后输出
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **74** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `v` || 三维向量 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || 结果 |
 */
  Arithmetic_Math_VectorNormalize: "Arithmetic.Math.Vector_Normalize",

  /**
 * **以GUID查询实体** `(Query.Entity_Related.Get_By_GUID)`
 *
 * - 根据GUID查询实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **75** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Gid` || `guid` || GUID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `entity` || 实体 |
 */
  Query_EntityRelated_GetByGUID: "Query.Entity_Related.Get_By_GUID",

  /**
 * **以实体查询GUID** `(Query.Entity_Related.Get_GUID)`
 *
 * - 查询指定实体的GUID
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **76** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `entity` || 实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Gid` || `guid` || GUID |
 */
  Query_EntityRelated_GetGUID: "Query.Entity_Related.Get_GUID",

  /**
 * **结算关卡** `(Execution.Stage_Related.Settle)`
 *
 * - 触发关卡结算流程，会按照[关卡结算](https://act.mihoyo.com/ys/ugc/tutorial//detail/mhx1du08nhwo)内的逻辑进行局外的逻辑结算
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **77** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_StageRelated_Settle: "Execution.Stage_Related.Settle",

  /**
 * **启动定时器** `(Execution.Timer.Start)`
 *
 * - 在目标实体上启动一个定时器
 * - 定时器通过定时器名称进行唯一标识
 * - 定时器由一个循环或不循环的定时器序列组成。定时器序列应是一组从小到大排列的，以秒为单位的时间点，在定时器运行到这些时间点时，会触发【定时器触发时】事件。该定时器序列最大限制为100
 * - 例如：[1,3,5,7]，如果传入这样的定时器序列，那么分别在第1、3、5、7秒，会触发【定时器触发时】事件
 * - 当是否循环为“是”时，在定时器到达最后一个时间点后，会从0秒开始进行循环计时。以[1,3,5,7]这样的定时器为例，则在运行到7秒后，再从0秒开始计时
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **79** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Str` || `timer_name` || 定时器名称: 该定时器的标识 |
 * | 2 || 🔹 || `Bol` || `loop` || 是否循环: “是”则会循环执行定时器序列 |
 * | 3 || 🔹 || `L<Flt>` || `timer_sequence` || 定时器序列: 需要传入一个从小到大排列的列表。如果传入的列表不合法（不是严格按照从小到大排列、存在负数等），定时器不会运行 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Timer_Start: "Execution.Timer.Start",

  /**
 * **暂停定时器** `(Execution.Timer.Pause)`
 *
 * - 暂停指定目标实体上的指定定时器。之后可以使用【恢复定时器】节点恢复该定时器的计时
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **80** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Str` || `timer_name` || 定时器名称: 该定时器的标识 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Timer_Pause: "Execution.Timer.Pause",

  /**
 * **恢复定时器** `(Execution.Timer.Resume)`
 *
 * - 使目标实体上一个处于暂停状态的定时器恢复运行
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **81** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Str` || `timer_name` || 定时器名称: 该定时器的标识 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Timer_Resume: "Execution.Timer.Resume",

  /**
 * **终止定时器** `(Execution.Timer.Stop)`
 *
 * - 完全终止目标实体上的指定定时器，不可恢复
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **82** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Str` || `timer_name` || 定时器名称: 该定时器的标识 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Timer_Stop: "Execution.Timer.Stop",

  /**
 * **定时器触发时** `(Trigger.Timer.On_Timer_Trigger)`
 *
 * - 定时器运行到指定时间节点时，触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **83** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Str` || `timer_name` || 定时器名称 |
 * | 3 || 🔸 || `Int` || `timer_sequence` || 定时器序列序号 |
 * | 4 || 🔸 || `Int` || `loop_number` || 循环次数 |
 */
  Trigger_Timer_OnTimerTrigger: "Trigger.Timer.On_Timer_Trigger",

  /**
 * **添加匀速直线型基础运动器** `(Execution.Motion_Device.Add_Linear_Motion)`
 *
 * - 在运行时动态添加一个匀速直线型基础运动器
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **84** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Str` || `mover_name` || 运动器名称: 该运动器的标识 |
 * | 2 || 🔹 || `Flt` || `duration` || 运动器时长: 该运动器生效的时长 |
 * | 3 || 🔹 || `Vec` || `velocity` || 速度向量: 决定了速度大小和方向 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_MotionDevice_AddLinearMotion: "Execution.Motion_Device.Add_Linear_Motion",

  /**
 * **添加匀速旋转型基础运动器** `(Execution.Motion_Device.Add_Rotation_Motion)`
 *
 * - 在运行时动态添加一个匀速旋转型基础运动器
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **85** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Str` || `mover_name` || 运动器名称: 该运动器的标识 |
 * | 2 || 🔹 || `Flt` || `duration` || 运动器时长: 该运动器生效的时长 |
 * | 3 || 🔹 || `Flt` || `angular_velocity` || 角速度(角度/秒): 角速度大小 |
 * | 4 || 🔹 || `Vec` || `axis` || 旋转轴朝向: 相对朝向 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_MotionDevice_AddRotationMotion: "Execution.Motion_Device.Add_Rotation_Motion",

  /**
 * **停止并删除基础运动器** `(Execution.Motion_Device.Stop_Delete)`
 *
 * - 停止并删除一个运行中的运动器
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **86** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Str` || `mover_name` || 运动器名称: 该运动器的标识 |
 * | 2 || 🔹 || `Bol` || `stop_all` || 是否停止所有基础运动器: “是”则停止该实体上的所有基础运动器，“否”则只停止与运动器名称对应的运动器 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_MotionDevice_StopDelete: "Execution.Motion_Device.Stop_Delete",

  /**
 * **暂停基础运动器** `(Execution.Motion_Device.Pause)`
 *
 * - 暂停一个运行中的运动器，之后可使用恢复运动器节点使其恢复运动
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **87** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Str` || `mover_name` || 运动器名称: 该运动器的标识 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_MotionDevice_Pause: "Execution.Motion_Device.Pause",

  /**
 * **恢复基础运动器** `(Execution.Motion_Device.Resume)`
 *
 * - 使目标实体上一个处于暂停状态的基础运动器恢复运动，需要目标实体持有基础运动器组件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **88** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Str` || `mover_name` || 运动器名称: 该运动器的标识 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_MotionDevice_Resume: "Execution.Motion_Device.Resume",

  /**
 * **基础运动器停止时** `(Trigger.Motion_Device.On_Motion_Stop)`
 *
 * - 基础运动器组件上的某个基础运动器完成运动时或被关闭时向组件持有者发送该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **89** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体: 组件持有者 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Str` || `mover_name` || 运动器名称 |
 */
  Trigger_MotionDevice_OnMotionStop: "Trigger.Motion_Device.On_Motion_Stop",

  /**
 * **激活/关闭碰撞触发器** `(Execution.Collision_Trigger.Set_Trigger_State)`
 *
 * - 修改碰撞触发器组件的数据，使某一个序号的触发器激活/关闭
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **90** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `collision_trigger_guid` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Int` || `collision_unit_index` || 触发器序号: 该碰撞触发器的标识 |
 * | 2 || 🔹 || `Bol` || `should_register` || 是否激活: “是”为激活 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CollisionTrigger_SetTriggerState: "Execution.Collision_Trigger.Set_Trigger_State",

  /**
 * **离开碰撞触发器时** `(Trigger.Collision_Trigger.On_Exit)`
 *
 * - 运行中实体A的“碰撞触发源”范围，离开其他运行中实体B的“碰撞触发器”范围
 * - 会发送节点图事件给配置“碰撞触发器”的实体B
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **91** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `leaver_entity` || 离开者实体: 上述中的实体A |
 * | 1 || 🔸 || `Gid` || `leaver_guid` || 离开者实体GUID |
 * | 2 || 🔸 || `Ety` || `trigger_entity` || 触发器实体: 上述中的实体B |
 * | 3 || 🔸 || `Gid` || `trigger_guid` || 触发器实体GUID |
 * | 4 || 🔸 || `Int` || `trigger_index` || 触发器序号 |
 */
  Trigger_CollisionTrigger_OnExit: "Trigger.Collision_Trigger.On_Exit",

  /**
 * **进入碰撞触发器时** `(Trigger.Collision_Trigger.On_Enter)`
 *
 * - 运行中实体A的”碰撞触发源“范围，进入其他运行中实体B的“碰撞触发器”范围。
 * - 会发送节点图事件给配置“碰撞触发器”的实体B
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **92** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `enterer_entity` || 进入者实体: 上述中的实体A |
 * | 1 || 🔸 || `Gid` || `enterer_guid` || 进入者实体GUID |
 * | 2 || 🔸 || `Ety` || `trigger_entity` || 触发器实体: 上述中的实体B |
 * | 3 || 🔸 || `Gid` || `trigger_guid` || 触发器实体GUID |
 * | 4 || 🔸 || `Int` || `trigger_index` || 触发器序号: 实体B碰撞触发器组件中的对应序号的触发器 |
 */
  Trigger_CollisionTrigger_OnEnter: "Trigger.Collision_Trigger.On_Enter",

  /**
 * **播放限时特效** `(Execution.Special_Effect.Play_Timed)`
 *
 * - 以目标实体为基准，播放一个限时特效。需要有合法的目标实体以及挂接点
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **93** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Cfg` || `effect_asset` || 特效资产: 该特效的标识 |
 * | 1 || 🔹 || `Ety` || `target_entity` || 目标实体: 实体不存在会导致特效无法播放 |
 * | 2 || 🔹 || `Str` || `socket_name` || 挂接点名称: 挂接点名称不存在会导致特效无法播放 |
 * | 3 || 🔹 || `Bol` || `follow_move` || 是否跟随目标运动: “是”会跟随目标实体运动 |
 * | 4 || 🔹 || `Bol` || `follow_rotate` || 是否跟随目标旋转: “是”会跟随目标实体旋转 |
 * | 5 || 🔹 || `Vec` || `pos_offset` || 位置偏移: 相对于目标实体指定挂接点的位置偏移 |
 * | 6 || 🔹 || `Vec` || `rot_offset` || 旋转偏移: 相对于目标实体指定挂接点的旋转偏移 |
 * | 7 || 🔹 || `Flt` || `scale` || 缩放倍率: 该特效的缩放倍率 |
 * | 8 || 🔹 || `Bol` || `play_built_in_sfx` || 是否播放自带的音效: “是”则会同时播放自带的音效 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_SpecialEffect_PlayTimed: "Execution.Special_Effect.Play_Timed",

  /**
 * **挂载循环特效** `(Execution.Special_Effect.Play_Loop)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **94** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Cfg` || `effect_asset` || 特效资产: 该特效的标识 |
 * | 1 || 🔹 || `Ety` || `target_entity` || 目标实体: 实体不存在会导致特效无法播放 |
 * | 2 || 🔹 || `Str` || `socket_name` || 挂接点名称: 挂接点名称不存在会导致特效无法播放 |
 * | 3 || 🔹 || `Bol` || `follow_move` || 是否跟随目标运动: “是”会跟随目标实体运动 |
 * | 4 || 🔹 || `Bol` || `follow_rotate` || 是否跟随目标旋转: “是”会跟随目标实体旋转 |
 * | 5 || 🔹 || `Vec` || `pos_offset` || 位置偏移: 相对于目标实体指定挂接点的位置偏移 |
 * | 6 || 🔹 || `Vec` || `rot_offset` || 旋转偏移: 相对于目标实体指定挂接点的旋转偏移 |
 * | 7 || 🔹 || `Flt` || `scale` || 缩放倍率: 该特效的缩放倍率 |
 * | 8 || 🔹 || `Bol` || `play_built_in_sfx` || 是否播放自带的音效 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Int` || `effect_instance_id_out` || 特效实例ID: 挂载该特效时自动生成的实例ID |
 */
  Execution_SpecialEffect_PlayLoop: "Execution.Special_Effect.Play_Loop",

  /**
 * **清除循环特效** `(Execution.Special_Effect.Stop_Loop)`
 *
 * - 根据特效实例ID清除目标实体上的指定循环特效。【挂载循环特效】节点在成功挂载后，会生成一个特效实例ID
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **95** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Int` || `effect_instance_id` || 特效实例ID: 【挂载循环特效】节点中自动生成的实例ID |
 * | 1 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_SpecialEffect_StopLoop: "Execution.Special_Effect.Stop_Loop",

  /**
 * **获取实体位置与旋转** `(Query.Entity_Related.Get_Transform)`
 *
 * - 获取目标实体的位置和旋转
 * - 对玩家实体和关卡实体无意义
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **99** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `position` || 位置 |
 * | 1 || 🔸 || `Vec` || `rotation` || 旋转 |
 */
  Query_EntityRelated_GetTransform: "Query.Entity_Related.Get_Transform",

  /**
 * **拼接列表** `(Execution.List_Operation.Concatenate)`
 *
 * - 将接入列表拼接在目标列表后。例如：目标列表为[1,2,3]，接入的列表为[4,5]，在执行该节点后，目标列表会变为[1，2，3，4，5]
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **100** || 🖥️ Server || ⚙️ Execution || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔷 || **`L<R<T>>`** || `target_list` || 目标列表: 被接入的列表 |
 * | 1 || 🔷 || **`L<R<T>>`** || `incoming_list` || 接入的列表: 接入的列表会接在目标列表的尾部 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:Fct>`
 */
  Execution_ListOperation_Concatenate: "Execution.List_Operation.Concatenate",

  /**
 * **清除列表** `(Execution.List_Operation.Clear)`
 *
 * - 清空指定列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **107** || 🖥️ Server || ⚙️ Execution || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || 列表: 所要清除的列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:Fct>`
 */
  Execution_ListOperation_Clear: "Execution.List_Operation.Clear",

  /**
 * **列表是否包含该值** `(Query.List_Related.Contains)`
 *
 * - 返回列表中是否包含指定值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **114** || 🖥️ Server || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || 列表 |
 * | 1 || 🔷 || **`R<T>`** || `value` || 值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 是否包含 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:Fct>`
 */
  Query_ListRelated_Contains: "Query.List_Related.Contains",

  /**
 * **查找列表并返回值的序号** `(Query.List_Related.Find_Index)`
 *
 * - 从列表中查找指定值，并返回列表中该值出现的序号列表
 * - 例如：目标列表为{1,2,3,2,1}，值为1，返回的序号列表为{0，4}，即1出现在目标列表的序号0和4
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **121** || 🖥️ Server || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`L<R<T>>`** || `target_list` || 目标列表 |
 * | 1 || 🔷 || **`R<T>`** || `value` || 值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `index_list` || 序号列表: 未找到则返回空列表 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:Fct>`
 */
  Query_ListRelated_FindIndex: "Query.List_Related.Find_Index",

  /**
 * **获取列表对应值** `(Query.List_Related.Get_At_Index)`
 *
 * - 返回列表中指定序号对应的值，序号从0开始
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **128** || 🖥️ Server || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || 列表 |
 * | 1 || 🔹 || `Int` || `index` || 序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `value` || 值 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:Fct>`
 */
  Query_ListRelated_GetAtIndex: "Query.List_Related.Get_At_Index",

  /**
 * **对列表插入值** `(Execution.List_Operation.Insert)`
 *
 * - 向指定列表的指定序号位置插入值。被插入的值在插入后会出现在列表的插入序号位置
 * - 例如：向列表[1，2，3，4]的序号2插入值5，插入后的列表为[1，2，5，3，4]（5出现在序号2的位置）
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **135** || 🖥️ Server || ⚙️ Execution || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || 列表: 被插入的列表引用 |
 * | 1 || 🔹 || `Int` || `index` || 插入序号: 插入值在插入后所在的序号 |
 * | 2 || 🔷 || **`R<T>`** || `value` || 插入值: 被插入的值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:Fct>`
 */
  Execution_ListOperation_Insert: "Execution.List_Operation.Insert",

  /**
 * **获取列表长度** `(Query.List_Related.Get_Length)`
 *
 * - 获取列表长度（列表中的元素个数）
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **142** || 🖥️ Server || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || 列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `length` || 长度 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:Fct>`
 */
  Query_ListRelated_GetLength: "Query.List_Related.Get_Length",

  /**
 * **获取列表最大值** `(Query.List_Related.Get_Max)`
 *
 * - 仅对浮点数列表和整数列表有意义，返回列表中的最大值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **149** || 🖥️ Server || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || 列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `max` || 最大值 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Query_ListRelated_GetMax: "Query.List_Related.Get_Max",

  /**
 * **获取列表最小值** `(Query.List_Related.Get_Min)`
 *
 * - 仅对浮点数列表和整数列表有意义，返回列表中的最小值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **151** || 🖥️ Server || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || 列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `min` || 最小值 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Query_ListRelated_GetMin: "Query.List_Related.Get_Min",

  /**
 * **对列表移除值** `(Execution.List_Operation.Remove)`
 *
 * - 移除指定列表的指定序号位置的值。这会导致该序号后的所有值向前移动一位
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **153** || 🖥️ Server || ⚙️ Execution || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || 列表: 被移除值的列表引用 |
 * | 1 || 🔹 || `Int` || `index` || 移除序号: 需要移除的序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:Fct>`
 */
  Execution_ListOperation_Remove: "Execution.List_Operation.Remove",

  /**
 * **对列表修改值** `(Execution.List_Operation.Modify_Index)`
 *
 * - 修改指定列表的指定序号位置的值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **160** || 🖥️ Server || ⚙️ Execution || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || 列表: 被修改的列表引用 |
 * | 1 || 🔹 || `Int` || `index` || 序号: 修改的值的序号 |
 * | 2 || 🔷 || **`R<T>`** || `value` || 值: 修改的值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:Fct>`
 */
  Execution_ListOperation_ModifyIndex: "Execution.List_Operation.Modify_Index",

  /**
 * **列表排序** `(Execution.List_Operation.Sort)`
 *
 * - 将指定列表按照排序方式进行排序
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **167** || 🖥️ Server || ⚙️ Execution || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || 列表: 整数列表或浮点数列表 |
 * | 1 || 🔹 || `E<SORT>` || `mode` || 排序方式: 顺序（从小到大）或逆序（从大到小）排序 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Execution_ListOperation_Sort: "Execution.List_Operation.Sort",

  /**
 * **拼装列表** `(Arithmetic.General.Assemble_List)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **169** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `Input1` || 0: 将至多100个参数拼装为一个列表 |
 * | 1 || 🔷 || **`R<T>`** || `Input2` || 1: 将至多100个参数拼装为一个列表 |
 * | 2 || 🔷 || **`R<T>`** || `Input3` || 2: 将至多100个参数拼装为一个列表 |
 * | 3 || 🔷 || **`R<T>`** || `Input4` || 3: 将至多100个参数拼装为一个列表 |
 * | 4 || 🔷 || **`R<T>`** || `Input5` || 4: 将至多100个参数拼装为一个列表 |
 * | 5 || 🔷 || **`R<T>`** || `Input6` || 5: 将至多100个参数拼装为一个列表 |
 * | 6 || 🔷 || **`R<T>`** || `Input7` || 6: 将至多100个参数拼装为一个列表 |
 * | 7 || 🔷 || **`R<T>`** || `Input8` || 7: 将至多100个参数拼装为一个列表 |
 * | 8 || 🔷 || **`R<T>`** || `Input9` || 8: 将至多100个参数拼装为一个列表 |
 * | 9 || 🔷 || **`R<T>`** || `Input10` || 9: 将至多100个参数拼装为一个列表 |
 * | 10 || 🔷 || **`R<T>`** || `Input11` || 10: 将至多100个参数拼装为一个列表 |
 * | 11 || 🔷 || **`R<T>`** || `Input12` || 11: 将至多100个参数拼装为一个列表 |
 * | 12 || 🔷 || **`R<T>`** || `Input13` || 12: 将至多100个参数拼装为一个列表 |
 * | 13 || 🔷 || **`R<T>`** || `Input14` || 13: 将至多100个参数拼装为一个列表 |
 * | 14 || 🔷 || **`R<T>`** || `Input15` || 14: 将至多100个参数拼装为一个列表 |
 * | 15 || 🔷 || **`R<T>`** || `Input16` || 15: 将至多100个参数拼装为一个列表 |
 * | 16 || 🔷 || **`R<T>`** || `Input17` || 16: 将至多100个参数拼装为一个列表 |
 * | 17 || 🔷 || **`R<T>`** || `Input18` || 17: 将至多100个参数拼装为一个列表 |
 * | 18 || 🔷 || **`R<T>`** || `Input19` || 18: 将至多100个参数拼装为一个列表 |
 * | 19 || 🔷 || **`R<T>`** || `Input20` || 19: 将至多100个参数拼装为一个列表 |
 * | 20 || 🔷 || **`R<T>`** || `Input21` || 20: 将至多100个参数拼装为一个列表 |
 * | 21 || 🔷 || **`R<T>`** || `Input22` || 21: 将至多100个参数拼装为一个列表 |
 * | 22 || 🔷 || **`R<T>`** || `Input23` || 22: 将至多100个参数拼装为一个列表 |
 * | 23 || 🔷 || **`R<T>`** || `Input24` || 23: 将至多100个参数拼装为一个列表 |
 * | 24 || 🔷 || **`R<T>`** || `Input25` || 24: 将至多100个参数拼装为一个列表 |
 * | 25 || 🔷 || **`R<T>`** || `Input26` || 25: 将至多100个参数拼装为一个列表 |
 * | 26 || 🔷 || **`R<T>`** || `Input27` || 26: 将至多100个参数拼装为一个列表 |
 * | 27 || 🔷 || **`R<T>`** || `Input28` || 27: 将至多100个参数拼装为一个列表 |
 * | 28 || 🔷 || **`R<T>`** || `Input29` || 28: 将至多100个参数拼装为一个列表 |
 * | 29 || 🔷 || **`R<T>`** || `Input30` || 29: 将至多100个参数拼装为一个列表 |
 * | 30 || 🔷 || **`R<T>`** || `Input31` || 30: 将至多100个参数拼装为一个列表 |
 * | 31 || 🔷 || **`R<T>`** || `Input32` || 31: 将至多100个参数拼装为一个列表 |
 * | 32 || 🔷 || **`R<T>`** || `Input33` || 32: 将至多100个参数拼装为一个列表 |
 * | 33 || 🔷 || **`R<T>`** || `Input34` || 33: 将至多100个参数拼装为一个列表 |
 * | 34 || 🔷 || **`R<T>`** || `Input35` || 34: 将至多100个参数拼装为一个列表 |
 * | 35 || 🔷 || **`R<T>`** || `Input36` || 35: 将至多100个参数拼装为一个列表 |
 * | 36 || 🔷 || **`R<T>`** || `Input37` || 36: 将至多100个参数拼装为一个列表 |
 * | 37 || 🔷 || **`R<T>`** || `Input38` || 37: 将至多100个参数拼装为一个列表 |
 * | 38 || 🔷 || **`R<T>`** || `Input39` || 38: 将至多100个参数拼装为一个列表 |
 * | 39 || 🔷 || **`R<T>`** || `Input40` || 39: 将至多100个参数拼装为一个列表 |
 * | 40 || 🔷 || **`R<T>`** || `Input41` || 40: 将至多100个参数拼装为一个列表 |
 * | 41 || 🔷 || **`R<T>`** || `Input42` || 41: 将至多100个参数拼装为一个列表 |
 * | 42 || 🔷 || **`R<T>`** || `Input43` || 42: 将至多100个参数拼装为一个列表 |
 * | 43 || 🔷 || **`R<T>`** || `Input44` || 43: 将至多100个参数拼装为一个列表 |
 * | 44 || 🔷 || **`R<T>`** || `Input45` || 44: 将至多100个参数拼装为一个列表 |
 * | 45 || 🔷 || **`R<T>`** || `Input46` || 45: 将至多100个参数拼装为一个列表 |
 * | 46 || 🔷 || **`R<T>`** || `Input47` || 46: 将至多100个参数拼装为一个列表 |
 * | 47 || 🔷 || **`R<T>`** || `Input48` || 47: 将至多100个参数拼装为一个列表 |
 * | 48 || 🔷 || **`R<T>`** || `Input49` || 48: 将至多100个参数拼装为一个列表 |
 * | 49 || 🔷 || **`R<T>`** || `Input50` || 49: 将至多100个参数拼装为一个列表 |
 * | 50 || 🔷 || **`R<T>`** || `Input51` || 50: 将至多100个参数拼装为一个列表 |
 * | 51 || 🔷 || **`R<T>`** || `Input52` || 51: 将至多100个参数拼装为一个列表 |
 * | 52 || 🔷 || **`R<T>`** || `Input53` || 52: 将至多100个参数拼装为一个列表 |
 * | 53 || 🔷 || **`R<T>`** || `Input54` || 53: 将至多100个参数拼装为一个列表 |
 * | 54 || 🔷 || **`R<T>`** || `Input55` || 54: 将至多100个参数拼装为一个列表 |
 * | 55 || 🔷 || **`R<T>`** || `Input56` || 55: 将至多100个参数拼装为一个列表 |
 * | 56 || 🔷 || **`R<T>`** || `Input57` || 56: 将至多100个参数拼装为一个列表 |
 * | 57 || 🔷 || **`R<T>`** || `Input58` || 57: 将至多100个参数拼装为一个列表 |
 * | 58 || 🔷 || **`R<T>`** || `Input59` || 58: 将至多100个参数拼装为一个列表 |
 * | 59 || 🔷 || **`R<T>`** || `Input60` || 59: 将至多100个参数拼装为一个列表 |
 * | 60 || 🔷 || **`R<T>`** || `Input61` || 60: 将至多100个参数拼装为一个列表 |
 * | 61 || 🔷 || **`R<T>`** || `Input62` || 61: 将至多100个参数拼装为一个列表 |
 * | 62 || 🔷 || **`R<T>`** || `Input63` || 62: 将至多100个参数拼装为一个列表 |
 * | 63 || 🔷 || **`R<T>`** || `Input64` || 63: 将至多100个参数拼装为一个列表 |
 * | 64 || 🔷 || **`R<T>`** || `Input65` || 64: 将至多100个参数拼装为一个列表 |
 * | 65 || 🔷 || **`R<T>`** || `Input66` || 65: 将至多100个参数拼装为一个列表 |
 * | 66 || 🔷 || **`R<T>`** || `Input67` || 66: 将至多100个参数拼装为一个列表 |
 * | 67 || 🔷 || **`R<T>`** || `Input68` || 67: 将至多100个参数拼装为一个列表 |
 * | 68 || 🔷 || **`R<T>`** || `Input69` || 68: 将至多100个参数拼装为一个列表 |
 * | 69 || 🔷 || **`R<T>`** || `Input70` || 69: 将至多100个参数拼装为一个列表 |
 * | 70 || 🔷 || **`R<T>`** || `Input71` || 70: 将至多100个参数拼装为一个列表 |
 * | 71 || 🔷 || **`R<T>`** || `Input72` || 71: 将至多100个参数拼装为一个列表 |
 * | 72 || 🔷 || **`R<T>`** || `Input73` || 72: 将至多100个参数拼装为一个列表 |
 * | 73 || 🔷 || **`R<T>`** || `Input74` || 73: 将至多100个参数拼装为一个列表 |
 * | 74 || 🔷 || **`R<T>`** || `Input75` || 74: 将至多100个参数拼装为一个列表 |
 * | 75 || 🔷 || **`R<T>`** || `Input76` || 75: 将至多100个参数拼装为一个列表 |
 * | 76 || 🔷 || **`R<T>`** || `Input77` || 76: 将至多100个参数拼装为一个列表 |
 * | 77 || 🔷 || **`R<T>`** || `Input78` || 77: 将至多100个参数拼装为一个列表 |
 * | 78 || 🔷 || **`R<T>`** || `Input79` || 78: 将至多100个参数拼装为一个列表 |
 * | 79 || 🔷 || **`R<T>`** || `Input80` || 79: 将至多100个参数拼装为一个列表 |
 * | 80 || 🔷 || **`R<T>`** || `Input81` || 80: 将至多100个参数拼装为一个列表 |
 * | 81 || 🔷 || **`R<T>`** || `Input82` || 81: 将至多100个参数拼装为一个列表 |
 * | 82 || 🔷 || **`R<T>`** || `Input83` || 82: 将至多100个参数拼装为一个列表 |
 * | 83 || 🔷 || **`R<T>`** || `Input84` || 83: 将至多100个参数拼装为一个列表 |
 * | 84 || 🔷 || **`R<T>`** || `Input85` || 84: 将至多100个参数拼装为一个列表 |
 * | 85 || 🔷 || **`R<T>`** || `Input86` || 85: 将至多100个参数拼装为一个列表 |
 * | 86 || 🔷 || **`R<T>`** || `Input87` || 86: 将至多100个参数拼装为一个列表 |
 * | 87 || 🔷 || **`R<T>`** || `Input88` || 87: 将至多100个参数拼装为一个列表 |
 * | 88 || 🔷 || **`R<T>`** || `Input89` || 88: 将至多100个参数拼装为一个列表 |
 * | 89 || 🔷 || **`R<T>`** || `Input90` || 89: 将至多100个参数拼装为一个列表 |
 * | 90 || 🔷 || **`R<T>`** || `Input91` || 90: 将至多100个参数拼装为一个列表 |
 * | 91 || 🔷 || **`R<T>`** || `Input92` || 91: 将至多100个参数拼装为一个列表 |
 * | 92 || 🔷 || **`R<T>`** || `Input93` || 92: 将至多100个参数拼装为一个列表 |
 * | 93 || 🔷 || **`R<T>`** || `Input94` || 93: 将至多100个参数拼装为一个列表 |
 * | 94 || 🔷 || **`R<T>`** || `Input95` || 94: 将至多100个参数拼装为一个列表 |
 * | 95 || 🔷 || **`R<T>`** || `Input96` || 95: 将至多100个参数拼装为一个列表 |
 * | 96 || 🔷 || **`R<T>`** || `Input97` || 96: 将至多100个参数拼装为一个列表 |
 * | 97 || 🔷 || **`R<T>`** || `Input98` || 97: 将至多100个参数拼装为一个列表 |
 * | 98 || 🔷 || **`R<T>`** || `Input99` || 98: 将至多100个参数拼装为一个列表 |
 * | 99 || 🔷 || **`R<T>`** || `Input100` || 99: 将至多100个参数拼装为一个列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`L<R<T>>`** || `list` || 列表: 拼装成的列表 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:Fct>`
 */
  Arithmetic_General_AssembleList: "Arithmetic.General.Assemble_List",

  /**
 * **路径到达路点时** `(Trigger.Motion_Device.On_Reach_Waypoint)`
 *
 * - 路径运动器到达路点时发送给基础运动器组件的持有者，需要在路点配置中配置“到达路点发送事件”才会触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **177** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体: 组件持有者 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Str` || `device_name` || 运动器名称 |
 * | 3 || 🔸 || `Int` || `path_id` || 路径点序号 |
 */
  Trigger_MotionDevice_OnReachWaypoint: "Trigger.Motion_Device.On_Reach_Waypoint",

  /**
 * **激活/关闭实体布设组** `(Execution.Entity_Deployment.Set_Group_State)`
 *
 * - 修改实体布设组初始创建开关的状态
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **178** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Int` || `group_index` || 实体布设组索引 |
 * | 1 || 🔹 || `Bol` || `should_activate` || 是否激活: “是”则该实体布设组初始创建开关状态为开启 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_EntityDeployment_SetGroupState: "Execution.Entity_Deployment.Set_Group_State",

  /**
 * **查询当前激活的实体布设组列表** `(Query.Entity_Layout.Get_Active_Groups)`
 *
 * - 查询当前关卡激活的实体布设组组成的列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **179** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `group_index_list` || 实体布设组索引列表 |
 */
  Query_EntityLayout_GetActiveGroups: "Query.Entity_Layout.Get_Active_Groups",

  /**
 * **数据类型转换** `(Arithmetic.General.Convert_Type)`
 *
 * - 将输入的参数类型转换为另一种类型输出。具体规则见[基础概念](https://act.mihoyo.com/ys/ugc/tutorial//detail/mhk23ora1wom)-【基础数据类型之间的转换规则】
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **180** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<K>`** || `input` || 输入 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<V>`** || `output` || 输出 |
 *
 * #### 🧬 Variant Constraints
 * * `C<K:Int,V:Bol>`
 * * `C<K:Int,V:Flt>`
 * * `C<K:Int,V:Str>`
 * * `C<K:Ety,V:Str>`
 * * `C<K:Gid,V:Str>`
 * * `C<K:Bol,V:Int>`
 * * `C<K:Bol,V:Str>`
 * * `C<K:Flt,V:Int>`
 * * `C<K:Flt,V:Str>`
 * * `C<K:Vec,V:Str>`
 * * `C<K:Fct,V:Str>`
 */
  Arithmetic_General_ConvertType: "Arithmetic.General.Convert_Type",

  /**
 * **转发事件** `(Execution.Common_Node.Forward_Event)`
 *
 * - 向指定目标实体转发此节点所在的执行流的源头事件。被转发的目标实体上的节点图上的同名事件会被触发
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **190** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 被转发的目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CommonNode_ForwardEvent: "Execution.Common_Node.Forward_Event",

  /**
 * **圆周率** `(Query.Math.Pi)`
 *
 * - 返回圆周率π的近似值，约为3.142
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **191** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `pi` || 圆周率（π） |
 */
  Query_Math_Pi: "Query.Math.Pi",

  /**
 * **三维向量：零向量** `(Query.Math.Vector_Zero)`
 *
 * - 返回(0,0,0)
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **192** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `vector` || (0,0,0) |
 */
  Query_Math_VectorZero: "Query.Math.Vector_Zero",

  /**
 * **三维向量：上方** `(Query.Math.Vector_Up)`
 *
 * - 返回(0,1,0)
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **193** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `vector` || (0,1,0) |
 */
  Query_Math_VectorUp: "Query.Math.Vector_Up",

  /**
 * **三维向量：下方** `(Query.Math.Vector_Down)`
 *
 * - 返回(0,-1,0)
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **194** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `vector` || (0,-1,0) |
 */
  Query_Math_VectorDown: "Query.Math.Vector_Down",

  /**
 * **三维向量：左侧** `(Query.Math.Vector_Left)`
 *
 * - 返回(-1,0,0)
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **195** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `vector` || (-1,0,0) |
 */
  Query_Math_VectorLeft: "Query.Math.Vector_Left",

  /**
 * **三维向量：右侧** `(Query.Math.Vector_Right)`
 *
 * - 返回(1,0,0)
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **196** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `vector` || (1,0,0) |
 */
  Query_Math_VectorRight: "Query.Math.Vector_Right",

  /**
 * **三维向量：前方** `(Query.Math.Vector_Forward)`
 *
 * - 返回(0,0,1)
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **197** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `vector` || (0,0,1) |
 */
  Query_Math_VectorForward: "Query.Math.Vector_Forward",

  /**
 * **三维向量：后方** `(Query.Math.Vector_Backward)`
 *
 * - 返回(0,0,-1)
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **198** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `vector` || (0,0,-1) |
 */
  Query_Math_VectorBackward: "Query.Math.Vector_Backward",

  /**
 * **加法运算** `(Arithmetic.Math.Add)`
 *
 * - 计算两个浮点数或整数的加法
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` ||  |
 * | 1 || 🔷 || **`R<T>`** || `b` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Add: "Arithmetic.Math.Add",

  /**
 * **减法运算** `(Arithmetic.Math.Subtract)`
 *
 * - 计算两个浮点数或整数的减法
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **202** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` ||  |
 * | 1 || 🔷 || **`R<T>`** || `b` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Subtract: "Arithmetic.Math.Subtract",

  /**
 * **乘法运算** `(Arithmetic.Math.Multiply)`
 *
 * - 乘法运算，支持浮点数乘法和整数乘法
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **204** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` ||  |
 * | 1 || 🔷 || **`R<T>`** || `b` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Multiply: "Arithmetic.Math.Multiply",

  /**
 * **除法运算** `(Arithmetic.Math.Divide)`
 *
 * - 除法运算，支持浮点数除法和整数除法。整数除法返回整除结果
 * - 除数不应为0，否则可能返回非法值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **206** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` ||  |
 * | 1 || 🔷 || **`R<T>`** || `b` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Divide: "Arithmetic.Math.Divide",

  /**
 * **模运算** `(Arithmetic.Math.Modulo)`
 *
 * - 返回输入2对输入1的取模运算
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **208** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `a` ||  |
 * | 1 || 🔹 || `Int` || `b` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || 结果 |
 */
  Arithmetic_Math_Modulo: "Arithmetic.Math.Modulo",

  /**
 * **幂运算** `(Arithmetic.Math.Power)`
 *
 * - 计算底数的指数次幂
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **209** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `base` || 底数 |
 * | 1 || 🔷 || **`R<T>`** || `exp` || 指数 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Power: "Arithmetic.Math.Power",

  /**
 * **取较大值** `(Arithmetic.Math.Max)`
 *
 * - 取出两个输入中较大的一个
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **211** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` || 输入1 |
 * | 1 || 🔷 || **`R<T>`** || `b` || 输入2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `max` || 较大值 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Max: "Arithmetic.Math.Max",

  /**
 * **取较小值** `(Arithmetic.Math.Min)`
 *
 * - 取出两个输入中较小的一个
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **213** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` || 输入1 |
 * | 1 || 🔷 || **`R<T>`** || `b` || 输入2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `min` || 较小值 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Min: "Arithmetic.Math.Min",

  /**
 * **对数运算** `(Arithmetic.Math.Log)`
 *
 * - 计算以底数为底真数的对数
 * - 底数不应为负数或等于1、真数不应为负数，否则可能产生非法值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **215** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `Input0` || 真数 |
 * | 1 || 🔹 || `Flt` || `Input1` || 底数 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || 结果 |
 */
  Arithmetic_Math_Log: "Arithmetic.Math.Log",

  /**
 * **绝对值运算** `(Arithmetic.Math.Abs)`
 *
 * - 返回输入的绝对值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **216** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `input` || 输入 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Abs: "Arithmetic.Math.Abs",

  /**
 * **取符号运算** `(Arithmetic.Math.Sign)`
 *
 * - 输入为正数时，返回1
 * - 输入为负数时，返回-1
 * - 输入为0时，返回0
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **218** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `input` || 输入 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Sign: "Arithmetic.Math.Sign",

  /**
 * **三维向量模运算** `(Arithmetic.Math.Vector_Length)`
 *
 * - 计算输入的三维向量的模
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **220** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `v` || 三维向量 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || 结果 |
 */
  Arithmetic_Math_VectorLength: "Arithmetic.Math.Vector_Length",

  /**
 * **算术平方根运算** `(Arithmetic.Math.Sqrt)`
 *
 * - 返回输入值的算术平方根
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **221** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `input` || 输入 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || 结果 |
 */
  Arithmetic_Math_Sqrt: "Arithmetic.Math.Sqrt",

  /**
 * **范围限制运算** `(Arithmetic.Math.Clamp)`
 *
 * - 将输入值限制在[下限,上限]（上下限均包含）后输出。
 * - 输入值如果小于下限，则返回下限值；如果输入值大于上限，则返回上限值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **222** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `input` || 输入 |
 * | 1 || 🔷 || **`R<T>`** || `min` || 下限 |
 * | 2 || 🔷 || **`R<T>`** || `max` || 上限 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Clamp: "Arithmetic.Math.Clamp",

  /**
 * **取整数运算** `(Arithmetic.Math.Round)`
 *
 * - 根据取整方式进行一次取整运算，返回取整后的正数
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **224** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `input` || 输入 |
 * | 1 || 🔹 || `E<ROND>` || `mode` || 取整方式: 四舍五入：按照四舍五入规则进行取整<br>向上取整：返回大于输入且离输入值最近的一个整数，例如：输入为1.2时，返回2；输入为-2.3时，返回-2<br>向下取整：返回小于输入且离输入值最近的一个整数。例如：输入为1.2时，返回1；输入为-2.3时，返回-3<br>截尾取整：截去浮点数尾部的小数部分，也相当于向0方向取整。例如：输入为1.2时，返回1；输入为-2.3时，返回-2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || 结果 |
 */
  Arithmetic_Math_Round: "Arithmetic.Math.Round",

  /**
 * **创建三维向量** `(Arithmetic.Math.Create_Vector)`
 *
 * - 根据x、y、z分量创建一个三维向量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **225** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `x` || X分量 |
 * | 1 || 🔹 || `Flt` || `y` || Y分量 |
 * | 2 || 🔹 || `Flt` || `z` || Z分量 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `vector` || 三维向量 |
 */
  Arithmetic_Math_CreateVector: "Arithmetic.Math.Create_Vector",

  /**
 * **逻辑与运算** `(Arithmetic.Math.And)`
 *
 * - 对输入的两个布尔值进行与运算后输出
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **226** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Bol` || `a` || 输入1 |
 * | 1 || 🔹 || `Bol` || `b` || 输入2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 结果 |
 */
  Arithmetic_Math_And: "Arithmetic.Math.And",

  /**
 * **逻辑或运算** `(Arithmetic.Math.Or)`
 *
 * - 对输入的两个布尔值进行或运算后输出
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **227** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Bol` || `a` || 输入1 |
 * | 1 || 🔹 || `Bol` || `b` || 输入2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 结果 |
 */
  Arithmetic_Math_Or: "Arithmetic.Math.Or",

  /**
 * **逻辑异或运算** `(Arithmetic.Math.Xor)`
 *
 * - 对输入的两个布尔值进行异或运算后输出
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **228** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Bol` || `a` || 输入1 |
 * | 1 || 🔹 || `Bol` || `b` || 输入2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 结果 |
 */
  Arithmetic_Math_Xor: "Arithmetic.Math.Xor",

  /**
 * **逻辑非运算** `(Arithmetic.Math.Not)`
 *
 * - 对输入的布尔值进行非运算后输出
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **229** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Bol` || `input` || 输入 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 结果 |
 */
  Arithmetic_Math_Not: "Arithmetic.Math.Not",

  /**
 * **数值小于** `(Arithmetic.Math.Less_Than)`
 *
 * - 返回左值是否小于右值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **230** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` || 左值 |
 * | 1 || 🔷 || **`R<T>`** || `b` || 右值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `ok` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_LessThan: "Arithmetic.Math.Less_Than",

  /**
 * **数值小于等于** `(Arithmetic.Math.Less_Equal)`
 *
 * - 返回左值是否小于等于右值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **231** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` || 左值 |
 * | 1 || 🔷 || **`R<T>`** || `b` || 右值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `ok` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_LessEqual: "Arithmetic.Math.Less_Equal",

  /**
 * **数值大于** `(Arithmetic.Math.Greater_Than)`
 *
 * - 返回左值是否大于右值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **232** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` || 左值 |
 * | 1 || 🔷 || **`R<T>`** || `b` || 右值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `ok` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_GreaterThan: "Arithmetic.Math.Greater_Than",

  /**
 * **数值大于等于** `(Arithmetic.Math.Greater_Equal)`
 *
 * - 返回左值是否大于等于右值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **233** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` || 左值 |
 * | 1 || 🔷 || **`R<T>`** || `b` || 右值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `ok` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_GreaterEqual: "Arithmetic.Math.Greater_Equal",

  /**
 * **激活/关闭原生碰撞** `(Execution.Collision.Set_Native_Collision)`
 *
 * - 修改实体自带的碰撞
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **240** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Bol` || `should_activate` || 是否激活: “是”为激活 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Collision_SetNativeCollision: "Execution.Collision.Set_Native_Collision",

  /**
 * **激活/关闭原生碰撞可攀爬性** `(Execution.Collision.Set_Native_Climb)`
 *
 * - 修改实体自带的碰撞的可攀爬性
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **241** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Bol` || `should_activate` || 是否激活: “是”为激活 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Collision_SetNativeClimb: "Execution.Collision.Set_Native_Climb",

  /**
 * **激活/关闭额外碰撞** `(Execution.Collision.Set_Extra_Collision)`
 *
 * - 修改实体额外碰撞组件内的数据，使额外碰撞开启/关闭
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **242** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Int` || `extra_collision_index` || 额外碰撞序号: 该额外碰撞的标识 |
 * | 2 || 🔹 || `Bol` || `should_activate` || 是否激活: “是”为激活 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Collision_SetExtraCollision: "Execution.Collision.Set_Extra_Collision",

  /**
 * **激活/关闭额外碰撞可攀爬性** `(Execution.Collision.Set_Extra_Climb)`
 *
 * - 修改实体额外碰撞组件的碰撞的可攀爬性
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **243** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Int` || `extra_collision_index` || 额外碰撞序号: 该额外碰撞的标识 |
 * | 2 || 🔹 || `Bol` || `should_activate` || 是否激活: “是”为激活 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Collision_SetExtraClimb: "Execution.Collision.Set_Extra_Climb",

  /**
 * **两坐标点距离** `(Arithmetic.Math.Distance)`
 *
 * - 计算两个坐标点之间的欧式距离
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **244** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `p1` || 坐标点1 |
 * | 1 || 🔹 || `Vec` || `p2` || 坐标点2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `distance` || 距离 |
 */
  Arithmetic_Math_Distance: "Arithmetic.Math.Distance",

  /**
 * **以GUID切换跟随运动器的目标** `(Execution.Follow_Motion.Set_Target_GUID)`
 *
 * - 以GUID切换跟随运动器的跟随目标
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **245** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Gid` || `follow_guid` || 跟随目标GUID: 跟随目标的标识 |
 * | 2 || 🔹 || `Str` || `socket_name` || 跟随目标挂接点名称: 跟随的挂接点名称 |
 * | 3 || 🔹 || `Vec` || `pos_offset` || 位置偏移: 以【跟随坐标系】为基准产生的位置偏移 |
 * | 4 || 🔹 || `Vec` || `rot_offset` || 旋转偏移: 以【跟随坐标系】为基准产生的旋转偏移 |
 * | 5 || 🔹 || `E<SYSC>` || `coord_sys` || 跟随坐标系: 可选”相对坐标系“、”世界坐标系“ |
 * | 6 || 🔹 || `E<FOLO>` || `follow_type` || 跟随类型: 可选”完全跟随“、”跟随位置“、”跟随旋转” |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_FollowMotion_SetTargetGUID: "Execution.Follow_Motion.Set_Target_GUID",

  /**
 * **获取跟随运动器的目标** `(Query.Follow_Motion.Get_Target)`
 *
 * - 获取跟随运动器的目标，可以获取目标实体和实体的GUID
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **246** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `follower` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `target_entity` || 跟随目标实体 |
 * | 1 || 🔸 || `Gid` || `target_guid` || 跟随目标GUID |
 */
  Query_FollowMotion_GetTarget: "Query.Follow_Motion.Get_Target",

  /**
 * **获取在场玩家实体列表** `(Query.Character_Related.Get_All_Players)`
 *
 * - 获取在场所有玩家实体组成的列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **248** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `players` || 玩家实体列表 |
 */
  Query_CharacterRelated_GetAllPlayers: "Query.Character_Related.Get_All_Players",

  /**
 * **查询实体阵营** `(Query.Faction_Related.Get_Faction)`
 *
 * - 查询指定实体的阵营
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **249** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Fct` || `camp` || 阵营 |
 */
  Query_FactionRelated_GetFaction: "Query.Faction_Related.Get_Faction",

  /**
 * **修改实体阵营** `(Execution.Faction_Related.Set_Faction)`
 *
 * - 修改指定目标实体的阵营
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **250** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 所要修改阵营的实体 |
 * | 1 || 🔹 || `Fct` || `faction` || 阵营: 修改后的阵营 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_FactionRelated_SetFaction: "Execution.Faction_Related.Set_Faction",

  /**
 * **实体阵营变化时** `(Trigger.Faction_Related.On_Faction_Change)`
 *
 * - 实体的阵营变化时，触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **251** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Fct` || `old_camp` || 变化前阵营 |
 * | 3 || 🔸 || `Fct` || `new_camp` || 变化后阵营 |
 */
  Trigger_FactionRelated_OnFactionChange: "Trigger.Faction_Related.On_Faction_Change",

  /**
 * **创建元件** `(Execution.Entity_Related.Create_Prefab)`
 *
 * - 根据元件ID创建一个实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **252** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Pfb` || `component_id` || 元件ID: 该元件的标识 |
 * | 1 || 🔹 || `Vec` || `position` || 位置: 绝对位置 |
 * | 2 || 🔹 || `Vec` || `rotation` || 旋转: 绝对旋转 |
 * | 3 || 🔹 || `Ety` || `owner_entity` || 拥有者实体: 可决定该创建后实体是否归属于某个实体 |
 * | 4 || 🔹 || `Bol` || `override_level` || 是否覆写等级: 为否时，【等级】参数不生效 |
 * | 5 || 🔹 || `Int` || `level` || 等级: 决定该实体创建时的等级 |
 * | 6 || 🔹 || `L<Int>` || `unit_tag_indexes` || 单位标签索引列表: 可决定该实体创建时携带的单位标签 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `created_entity` || 创建后实体: 以该方式创建的实体没有GUID |
 */
  Execution_EntityRelated_CreatePrefab: "Execution.Entity_Related.Create_Prefab",

  /**
 * **命中检测触发时** `(Trigger.Hit_Detection.On_Hit_Detected)`
 *
 * - 命中检测组件命中其他实体或场景时组件的持有者触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **253** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Bol` || `hit_hurtbox` || 是否命中受击盒: 为否时，命中的是场景<br>为是时，命中实体，此时可以从【命中实体】出参中取出值 |
 * | 3 || 🔸 || `Ety` || `hit_entity` || 命中实体: 仅当命中受击盒时，命中实体才有意义 |
 * | 4 || 🔸 || `Vec` || `hit_position` || 命中位置 |
 */
  Trigger_HitDetection_OnHitDetected: "Trigger.Hit_Detection.On_Hit_Detected",

  /**
 * **创建投射物** `(Execution.Projectile.Create)`
 *
 * - 根据元件ID创建一个投射物实体。与【创建元件】功能类似，但多一个【追踪目标】参数，可以为创建的投射物实体的投射运动器组件中追踪投射类型设置追踪目标
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **256** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Pfb` || `component_id` || 元件ID: 该投射物元件的标识 |
 * | 1 || 🔹 || `Vec` || `position` || 位置: 绝对位置 |
 * | 2 || 🔹 || `Vec` || `rotation` || 旋转: 绝对旋转 |
 * | 3 || 🔹 || `Ety` || `owner_entity` || 拥有者实体: 可决定该创建后实体是否归属于某个实体 |
 * | 4 || 🔹 || `Ety` || `track_target` || 追踪目标: 投射运动器组件中追踪投射类型设置的追踪目标 |
 * | 5 || 🔹 || `Bol` || `override_level` || 是否覆写等级: 为否时，【等级】参数不生效 |
 * | 6 || 🔹 || `Int` || `level` || 等级: 决定该实体创建时的等级 |
 * | 7 || 🔹 || `L<Int>` || `unit_tag_indexes` || 单位标签索引列表: 可决定该实体创建时携带的单位标签 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `created_entity` || 创建出的实体: 该实体继承该投射物元件的属性 |
 */
  Execution_Projectile_Create: "Execution.Projectile.Create",

  /**
 * **获取随机整数** `(Query.Math.Random_Int)`
 *
 * - 获取一个大于等于下限，小于等于上限的随机整数。注意该节点生成的随机数包含上下限
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **257** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `lower` || 下限 |
 * | 1 || 🔹 || `Int` || `upper` || 上限 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || 结果 |
 */
  Query_Math_RandomInt: "Query.Math.Random_Int",

  /**
 * **获取指定玩家所有角色实体** `(Query.Character_Related.Get_Player_Characters)`
 *
 * - 获取指定玩家实体的所有角色实体列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **258** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `player` || 玩家实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `characters` || 角色实体列表 |
 */
  Query_CharacterRelated_GetPlayerCharacters: "Query.Character_Related.Get_Player_Characters",

  /**
 * **获取角色归属的玩家实体** `(Query.Character_Related.Get_Owner_Player)`
 *
 * - 获取角色实体所归属的玩家实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **259** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `character` || 角色实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `owner` || 所属玩家实体 |
 */
  Query_CharacterRelated_GetOwnerPlayer: "Query.Character_Related.Get_Owner_Player",

  /**
 * **获取实体类型** `(Query.Entity_Related.Get_Type)`
 *
 * - 获取目标实体的实体类型
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **260** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `E<ENTY>` || `entity_type` || 实体类型: 分为玩家、角色、关卡、物件、造物 |
 */
  Query_EntityRelated_GetType: "Query.Entity_Related.Get_Type",

  /**
 * **切换主镜头模板** `(Execution.Camera.Switch_Template)`
 *
 * - 使目标玩家列表的镜头模板切换至指定模板
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **261** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `L<Ety>` || `target_players` || 目标玩家列表: 生效的玩家列表 |
 * | 1 || 🔹 || `Str` || `template_name` || 镜头模板名称: 镜头模板的标识 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Camera_SwitchTemplate: "Execution.Camera.Switch_Template",

  /**
 * **Activate Entity Camera** `(Hidden.Execution.Activate_Entity_Camera)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **262** || 🖥️ Server || 🚫 Hidden || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `L<Ety>` || `Input0` ||  |
 * | 1 || 🔹 || `Ety` || `Input1` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Hidden_Execution_ActivateEntityCamera: "Hidden.Execution.Activate_Entity_Camera",

  /**
 * **Disable Entity Camera** `(Hidden.Execution.Disable_Entity_Camera)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **263** || 🖥️ Server || 🚫 Hidden || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `L<Ety>` || `Input0` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Hidden_Execution_DisableEntityCamera: "Hidden.Execution.Disable_Entity_Camera",

  /**
 * **Activate Focus Camera** `(Hidden.Execution.Activate_Focus_Camera)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **264** || 🖥️ Server || 🚫 Hidden || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `L<Ety>` || `Input0` ||  |
 * | 1 || 🔹 || `Ety` || `Input1` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Hidden_Execution_ActivateFocusCamera: "Hidden.Execution.Activate_Focus_Camera",

  /**
 * **Disable Focus Camera** `(Hidden.Execution.Disable_Focus_Camera)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **265** || 🖥️ Server || 🚫 Hidden || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `L<Ety>` || `Input0` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Hidden_Execution_DisableFocusCamera: "Hidden.Execution.Disable_Focus_Camera",

  /**
 * **Activate Screen Shake** `(Hidden.Execution.Play_Screen_Shake)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **266** || 🖥️ Server || 🚫 Hidden || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `L<Ety>` || `Input0` ||  |
 * | 1 || 🔹 || `Flt` || `Input1` ||  |
 * | 2 || 🔹 || `Flt` || `Input2` ||  |
 * | 3 || 🔹 || `Flt` || `Input3` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Hidden_Execution_PlayScreenShake: "Hidden.Execution.Play_Screen_Shake",

  /**
 * **激活基础运动器** `(Execution.Motion_Device.Activate)`
 *
 * - 激活一个配置在目标实体基础运动器组件上的运动器
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **267** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Str` || `mover_name` || 运动器名称: 该运动器的标识 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_MotionDevice_Activate: "Execution.Motion_Device.Activate",

  /**
 * **查询预设点位置旋转** `(Query.Preset_Point.Get_Transform)`
 *
 * - 查询指定预设点的位置和旋转
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **270** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `point_index` || 点位索引 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `position` || 位置 |
 * | 1 || 🔸 || `Vec` || `rotation` || 旋转 |
 */
  Query_PresetPoint_GetTransform: "Query.Preset_Point.Get_Transform",

  /**
 * **以单位标签获取预设点位列表** `(Query.Preset_Point.Get_By_Tag)`
 *
 * - 根据单位标签索引查询所有携带该单位标签的预设点位列表，输出值为该预设点位的索引
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **271** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `unit_tag_index` || 单位标签索引 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `index_list` || 点位索引列表 |
 */
  Query_PresetPoint_GetByTag: "Query.Preset_Point.Get_By_Tag",

  /**
 * **激活复苏点** `(Execution.Character_Related.Activate_Revive_Point)`
 *
 * - 为该玩家激活指定序号的复苏点，此玩家后续触发复苏逻辑时，可以从该复苏点复苏
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **272** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player_entity` || 玩家实体: 生效的玩家 |
 * | 1 || 🔹 || `Int` || `revive_point_index` || 复苏点序号: 该复苏点的标识 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterRelated_ActivateRevivePoint: "Execution.Character_Related.Activate_Revive_Point",

  /**
 * **注销复苏点** `(Execution.Character_Related.Deactivate_Revive_Point)`
 *
 * - 为该玩家注销指定序号的复苏点。该玩家下次复苏时不会从该复苏点复苏
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **273** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player_entity` || 玩家实体: 生效的玩家 |
 * | 1 || 🔹 || `Int` || `revive_point_index` || 复苏点序号: 该复苏点的标识 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterRelated_DeactivateRevivePoint: "Execution.Character_Related.Deactivate_Revive_Point",

  /**
 * **允许/禁止玩家复苏** `(Execution.Character_Related.Set_Revive_Allowed)`
 *
 * - 设置指定玩家是否允许复苏
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **274** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player_entity` || 玩家实体: 生效的玩家 |
 * | 1 || 🔹 || `Bol` || `allow_revive` || 是否允许: “是”则允许复苏 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterRelated_SetReviveAllowed: "Execution.Character_Related.Set_Revive_Allowed",

  /**
 * **获取玩家剩余复苏次数** `(Query.Character_Related.Get_Revives)`
 *
 * - 获取指定玩家实体的剩余复苏次数
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **275** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `player` || 玩家实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `count` || 剩余次数 |
 */
  Query_CharacterRelated_GetRevives: "Query.Character_Related.Get_Revives",

  /**
 * **设置玩家剩余复苏次数** `(Execution.Character_Related.Set_Revive_Count)`
 *
 * - 设置指定玩家剩余复苏次数。设置为0时，该玩家无法复苏
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **276** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player_entity` || 玩家实体: 生效的玩家 |
 * | 1 || 🔹 || `Int` || `remaining_count` || 剩余次数: 设置为0时，该玩家无法复苏 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterRelated_SetReviveCount: "Execution.Character_Related.Set_Revive_Count",

  /**
 * **获取玩家复苏耗时** `(Query.Character_Related.Get_Revive_Time)`
 *
 * - 获取指定玩家实体的复苏耗时，单位秒
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **277** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `player` || 玩家实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `duration` || 时长 |
 */
  Query_CharacterRelated_GetReviveTime: "Query.Character_Related.Get_Revive_Time",

  /**
 * **设置玩家复苏耗时** `(Execution.Character_Related.Set_Revive_Time)`
 *
 * - 设置指定玩家的下一次复苏的时长。如果玩家当前正处于复苏中，不会影响该次复苏的耗时
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **278** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player_entity` || 玩家实体: 生效的玩家 |
 * | 1 || 🔹 || `Int` || `duration` || 时长: 单位为秒 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterRelated_SetReviveTime: "Execution.Character_Related.Set_Revive_Time",

  /**
 * **复苏角色** `(Execution.Character_Related.Revive_Single)`
 *
 * - 复苏指定的角色实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **279** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `character_entity` || 角色实体: 会被复苏的角色实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterRelated_ReviveSingle: "Execution.Character_Related.Revive_Single",

  /**
 * **角色倒下时** `(Trigger.Character_Related.On_Character_Down)`
 *
 * - 角色倒下时，角色实体上的节点图可以触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **280** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `character_entity` || 角色实体 |
 * | 1 || 🔸 || `E<DWNR>` || `reason` || 原因: 节点图导致：因节点图的【销毁实体】节点导致的角色倒下<br>正常倒下：因生命值变为0导致的角色倒下<br>非正常倒下：因溺水、坠入深渊等导致的角色倒下 |
 * | 2 || 🔸 || `Ety` || `attacker_entity` || 击倒者实体 |
 */
  Trigger_CharacterRelated_OnCharacterDown: "Trigger.Character_Related.On_Character_Down",

  /**
 * **角色复苏时** `(Trigger.Character_Related.On_Character_Revive)`
 *
 * - 角色复苏时，角色实体上的的节点图可以触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **281** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `character_entity` || 角色实体 |
 */
  Trigger_CharacterRelated_OnCharacterRevive: "Trigger.Character_Related.On_Character_Revive",

  /**
 * **击倒玩家所有角色** `(Execution.Character_Related.Defeat_All)`
 *
 * - 击倒指定玩家的所有角色，会导致该玩家进入_玩家所有角色倒下状态_
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **282** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player_entity` || 玩家实体: 角色归属的玩家实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterRelated_DefeatAll: "Execution.Character_Related.Defeat_All",

  /**
 * **复苏玩家所有角色** `(Execution.Character_Related.Revive_All)`
 *
 * - 复苏指定玩家的所有角色实体。在超限模式中，由于每个玩家只有一个角色，与【复苏角色】的效果相同
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **283** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `Input0` || 玩家实体: 角色归属的玩家实体 |
 * | 1 || 🔹 || `Bol` || `Input1` || 是否扣除复苏次数: 为否时，不会扣除复苏次数 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterRelated_ReviveAll: "Execution.Character_Related.Revive_All",

  /**
 * **玩家所有角色倒下时** `(Trigger.Character_Related.On_All_Down)`
 *
 * - 玩家的所有角色实体均倒下时，玩家实体的节点图上触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **284** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `player_entity` || 玩家实体 |
 * | 1 || 🔸 || `E<DWNR>` || `reason` || 原因: 节点图导致：因节点图的【销毁实体】节点导致的角色倒下<br>正常倒下：因生命值变为0导致的角色倒下<br>非正常倒下：因溺水、坠入深渊等导致的角色倒下 |
 */
  Trigger_CharacterRelated_OnAllDown: "Trigger.Character_Related.On_All_Down",

  /**
 * **玩家异常倒下并复苏时** `(Trigger.Character_Related.On_Abnormal_Revive)`
 *
 * - 角色因溺水、坠入深渊等原因倒下并复苏时，玩家实体上触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **285** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `player_entity` || 玩家实体 |
 */
  Trigger_CharacterRelated_OnAbnormalRevive: "Trigger.Character_Related.On_Abnormal_Revive",

  /**
 * **玩家所有角色复苏时** `(Trigger.Character_Related.On_All_Revived)`
 *
 * - 玩家的所有角色均复苏时，玩家实体的节点图触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **286** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `player_entity` || 玩家实体 |
 */
  Trigger_CharacterRelated_OnAllRevived: "Trigger.Character_Related.On_All_Revived",

  /**
 * **查询玩家角色是否全部倒下** `(Query.Character_Related.Is_All_Down)`
 *
 * - 查询玩家的所有角色是否已全部倒下
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **287** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `player` || 玩家实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 结果 |
 */
  Query_CharacterRelated_IsAllDown: "Query.Character_Related.Is_All_Down",

  /**
 * **传送玩家** `(Execution.Character_Related.Teleport)`
 *
 * - 传送指定玩家实体。会根据传送距离的远近决定是否有加载界面
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **288** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player_entity` || 玩家实体: 生效的玩家 |
 * | 1 || 🔹 || `Vec` || `target_position` || 目标位置: 绝对位置 |
 * | 2 || 🔹 || `Vec` || `target_rotation` || 目标旋转: 绝对旋转 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterRelated_Teleport: "Execution.Character_Related.Teleport",

  /**
 * **玩家传送完成时** `(Trigger.Character_Related.On_Teleport_Complete)`
 *
 * - 玩家传送完成时，在玩家实体的节点图上可以触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **289** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `player_entity` || 玩家实体 |
 * | 1 || 🔸 || `Gid` || `player_guid` || 玩家GUID |
 */
  Trigger_CharacterRelated_OnTeleportComplete: "Trigger.Character_Related.On_Teleport_Complete",

  /**
 * **查询游戏已进行时间** `(Query.Stage_Related.Get_Elapsed_Time)`
 *
 * - 查询游戏已进行了多长时间，单位秒
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **290** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `elapsed` || 游戏已进行时间 |
 */
  Query_StageRelated_GetElapsedTime: "Query.Stage_Related.Get_Elapsed_Time",

  /**
 * **正弦函数** `(Arithmetic.Math.Sin)`
 *
 * - 计算输入弧度的正弦
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **291** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `radians` || 弧度 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || 结果 |
 */
  Arithmetic_Math_Sin: "Arithmetic.Math.Sin",

  /**
 * **余弦函数** `(Arithmetic.Math.Cos)`
 *
 * - 计算输入弧度的余弦
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **292** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `radians` || 弧度 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || 结果 |
 */
  Arithmetic_Math_Cos: "Arithmetic.Math.Cos",

  /**
 * **正切函数** `(Arithmetic.Math.Tan)`
 *
 * - 计算输入弧度的正切
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **293** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `radians` || 弧度 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || 结果 |
 */
  Arithmetic_Math_Tan: "Arithmetic.Math.Tan",

  /**
 * **反正弦函数** `(Arithmetic.Math.Asin)`
 *
 * - 计算输入的反正弦值，返回为弧度值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **294** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `input` || 输入 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `radians` || 弧度 |
 */
  Arithmetic_Math_Asin: "Arithmetic.Math.Asin",

  /**
 * **反余弦函数** `(Arithmetic.Math.Acos)`
 *
 * - 计算输入的反余弦值，返回为弧度值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **295** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `input` || 输入 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `radians` || 弧度 |
 */
  Arithmetic_Math_Acos: "Arithmetic.Math.Acos",

  /**
 * **反正切函数** `(Arithmetic.Math.Atan)`
 *
 * - 计算输入的反正切值，返回为弧度值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **296** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `input` || 输入 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `radians` || 弧度 |
 */
  Arithmetic_Math_Atan: "Arithmetic.Math.Atan",

  /**
 * **添加单位状态** `(Execution.Unit_Status.Add_Status)`
 *
 * - 向指定目标实体添加一定层数的单位状态
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **297** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `applier` || 施加者实体: 决定了该次行为的施加者实体，默认为该节点图所关联的实体 |
 * | 1 || 🔹 || `Ety` || `target` || 施加目标实体: 实际被添加该单位状态的实体 |
 * | 2 || 🔹 || `Cfg` || `state_config_id` || 单位状态配置ID: 该单位状态的标识 |
 * | 3 || 🔹 || `Int` || `stacks` || 施加层数: 该单位状态的层数 |
 * | 4 || 🔹 || `D<Str,Flt>` || `params_dict` || 单位状态参数字典: 可以携带一组参数，用于覆写单位状态中的参数，目前仅支持对护盾中护盾模板的参数覆写 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `E<STAD>` || `apply_result` || 施加结果: 失败，其他异常<br>失败，让位于其他状态：目标上已有的单位状态与尝试施加的状态之间有让位关系<br>失败，超出并存上限：超出目标实体上的指定单位状态的并存上限<br>失败，附加叠层未成功：叠层失败<br>成功，施加新状态：成功附加新状态<br>成功，槽位叠层：目标上已有该单位状态，叠层 |
 * | 1 || 🔸 || `Int` || `slot_index` || 槽位序号: 如果施加成功，则返回一个该单位状态实例所在的单位状态槽位序号 |
 */
  Execution_UnitStatus_AddStatus: "Execution.Unit_Status.Add_Status",

  /**
 * **单位状态结束时** `(Trigger.Unit_Status.On_Status_End)`
 *
 * - 单位状态因为各种原因被移除或因时长结束时触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **299** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Cfg` || `state_config_id` || 单位状态配置ID |
 * | 3 || 🔸 || `Ety` || `applier_entity` || 施加者实体 |
 * | 4 || 🔸 || `Bol` || `is_infinite` || 持续时间是否无限 |
 * | 5 || 🔸 || `Flt` || `time_remain` || 状态剩余时长 |
 * | 6 || 🔸 || `Int` || `layer_remain` || 状态剩余层数 |
 * | 7 || 🔸 || `Ety` || `remover_entity` || 移除者实体 |
 * | 8 || 🔸 || `E<STRE>` || `remove_reason` || 移除原因: 其他单位状态顶替：因被施加了顶替状态导致单位状态被移除<br>超出持续时间：超出单位状态持续事件<br>被驱散：单位状态被直接移除<br>状态失效：因其他原因导致的状态失效<br>职业变更：因职业变更导致的状态被移除 |
 * | 9 || 🔸 || `Int` || `slot_index` || 槽位序号: 发生变化的单位状态槽位的序号 |
 */
  Trigger_UnitStatus_OnStatusEnd: "Trigger.Unit_Status.On_Status_End",

  /**
 * **单位状态变更时** `(Trigger.Unit_Status.On_Status_Change)`
 *
 * - 单位状态的层数发生变化时，触发该事件
 * - 单位状态的施加以及移除都会触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **300** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Cfg` || `state_config_id` || 单位状态配置ID |
 * | 3 || 🔸 || `Ety` || `applier_entity` || 施加者实体 |
 * | 4 || 🔸 || `Bol` || `is_infinite` || 持续时间是否无限 |
 * | 5 || 🔸 || `Flt` || `time_remain` || 状态剩余时长 |
 * | 6 || 🔸 || `Int` || `layer_remain` || 状态剩余层数: 变化后的层数 |
 * | 7 || 🔸 || `Int` || `layer_original` || 状态原始层数: 变化前的层数 |
 * | 8 || 🔸 || `Int` || `slot_index` || 槽位序号: 发生变化的单位状态槽位的序号 |
 */
  Trigger_UnitStatus_OnStatusChange: "Trigger.Unit_Status.On_Status_Change",

  /**
 * **移除单位状态** `(Execution.Unit_Status.Remove_Status)`
 *
 * - 从目标实体上移除指定单位状态。可以选择全部移除，或移除其中一层
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **301** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `remove_target` || 移除目标实体: 被移除该单位状态的实体 |
 * | 1 || 🔹 || `Cfg` || `state_config_id` || 单位状态配置ID: 该单位状态的标识 |
 * | 2 || 🔹 || `E<STRS>` || `remove_mode` || 移除方式: 所有同名并存状态：移除以该配置ID施加的所有同名状态<br>最快丢失叠加层数的状态：移除最快丢失叠加层数的一层状态 |
 * | 3 || 🔹 || `Ety` || `remover` || 移除者实体: 决定了该次行为的移除者实体，默认为该节点图所关联的实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_UnitStatus_RemoveStatus: "Execution.Unit_Status.Remove_Status",

  /**
 * **修改角色扰动装置** `(Execution.Character_Disruptor.Modify_Device)`
 *
 * - 通过序号修改目标实体上生效的角色扰动装置，若序号不存在则此次修改不生效
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **302** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Int` || `device_index` || 装置序号: 角色扰动装置的标识 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterDisruptor_ModifyDevice: "Execution.Character_Disruptor.Modify_Device",

  /**
 * **发起攻击** `(Execution.Combat.Attack)`
 *
 * - 使指定实体发起攻击。使用该节点的实体上需要有对应的能力单元配置。
 * - 分为两种使用方式：
 * - 当能力单元为【攻击盒攻击】时，会以目标实体的位置为基准，打出一次攻击盒攻击
 * - 当能力单元为【直接攻击】时，会直接攻击目标实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **303** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 根据能力单元不同，可以视为攻击盒位置的基准目标或攻击对象 |
 * | 1 || 🔹 || `Flt` || `damage_coeff` || 伤害系数: 该次攻击造成伤害的系数 |
 * | 2 || 🔹 || `Flt` || `damage_delta` || 伤害增量: 该次攻击造成伤害的增量 |
 * | 3 || 🔹 || `Vec` || `pos_offset` || 位置偏移: 使用【攻击盒攻击】时，决定了攻击盒的偏移<br>使用【直接攻击】时，决定了该次攻击的判定位置，影响受击特效等的创建位置 |
 * | 4 || 🔹 || `Vec` || `rot_offset` || 旋转偏移: 使用【攻击盒攻击】时，决定了攻击盒的旋转<br>使用【直接攻击】时，决定了该次攻击的判定位置，影响受击特效等的旋转 |
 * | 5 || 🔹 || `Str` || `ability_unit` || 能力单元: 引用的能力单元，需要配置在此节点图所关联的实体上 |
 * | 6 || 🔹 || `Bol` || `override_ability_unit` || 是否覆写能力单元配置: 为“是”时，伤害系数、伤害增量、位置偏移、旋转偏移这四个系数会覆写能力单元中的同名配置。为“否”时，则使用能力单元中的配置 |
 * | 7 || 🔹 || `Ety` || `attacker_entity` || 发起者实体: 决定了该次攻击的发起者实体，默认为该节点图所关联的实体。影响【攻击命中时】、【受到攻击时】等事件中判定的攻击者 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Combat_Attack: "Execution.Combat.Attack",

  /**
 * **受到攻击时** `(Trigger.Combat.On_Be_Attacked)`
 *
 * - 实体受到攻击时触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **304** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Ety` || `attacker` || 攻击者实体 |
 * | 3 || 🔸 || `Flt` || `damage` || 伤害量: 实际造成的伤害量。因无敌等原因未造成伤害时，伤害量为0 |
 * | 4 || 🔸 || `L<Str>` || `attack_tags` || 攻击标签列表 |
 * | 5 || 🔸 || `E<ELMT>` || `element_type` || 元素类型 |
 * | 6 || 🔸 || `Flt` || `element_adv` || 元素攻击强效: 攻击包含的元素含量 |
 */
  Trigger_Combat_OnBeAttacked: "Trigger.Combat.On_Be_Attacked",

  /**
 * **攻击命中时** `(Trigger.Combat.On_Hit_Target)`
 *
 * - 实体的攻击命中其他实体时，触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **305** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Ety` || `victim` || 受击者实体 |
 * | 3 || 🔸 || `Flt` || `damage` || 伤害量: 实际造成的伤害量。因无敌等原因未造成伤害时，伤害量为0 |
 * | 4 || 🔸 || `L<Str>` || `attack_tags` || 攻击标签列表 |
 * | 5 || 🔸 || `E<ELMT>` || `element_type` || 元素类型 |
 * | 6 || 🔸 || `Flt` || `element_adv` || 元素攻击强效: 攻击包含的元素含量 |
 */
  Trigger_Combat_OnHitTarget: "Trigger.Combat.On_Hit_Target",

  /**
 * **激活/关闭选项卡** `(Execution.Tab.Set_State)`
 *
 * - 可以修改目标实体的选项卡组件中对应序号的选项卡状态
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **306** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Int` || `tab_id` || 选项卡序号: 选项卡的标识 |
 * | 2 || 🔹 || `Bol` || `should_activate` || 是否激活: 为“是”则激活，可以被选取 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Tab_SetState: "Execution.Tab.Set_State",

  /**
 * **选项卡选中时** `(Trigger.Tab.On_Tab_Select)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **307** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体: 挂载选项卡组件的实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID: 挂载选项卡组件的实体GUID，若无则输出0 |
 * | 2 || 🔸 || `Int` || `tab_id` || 选项卡序号: 选项卡的序号 |
 * | 3 || 🔸 || `Ety` || `selector_entity` || 选择者实体: 触发选项卡时的角色实体 |
 */
  Trigger_Tab_OnTabSelect: "Trigger.Tab.On_Tab_Select",

  /**
 * **激活/关闭模型显示** `(Execution.Entity_Related.Set_Model_Visible)`
 *
 * - 更改实体的模型可见性属性设置，从而使实体的模型可见/不可见
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **308** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 所要修改的实体 |
 * | 1 || 🔹 || `Bol` || `should_activate` || 是否激活: “是”为使模型可见 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_EntityRelated_SetModelVisible: "Execution.Entity_Related.Set_Model_Visible",

  /**
 * **暂停全局计时器** `(Execution.Global_Timer.Pause)`
 *
 * - 通过节点图，可以暂停运行中的全局计时器
 * - 暂停时，若有界面控件引用对应计时器，则其显示时间也会暂停
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **309** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Str` || `timer_name` || 计时器名称: 该计时器的标识，只能引用在计时器管理中已经配置好的计时器名称 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_GlobalTimer_Pause: "Execution.Global_Timer.Pause",

  /**
 * **获取全局计时器当前时间** `(Query.Global_Timer.Get_Time)`
 *
 * - 获取目标实体上指定全局计时器的当前时间
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **310** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Str` || `timer_name` || 计时器名称 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `current_time` || 当前时间 |
 */
  Query_GlobalTimer_GetTime: "Query.Global_Timer.Get_Time",

  /**
 * **启动全局计时器** `(Execution.Global_Timer.Start)`
 *
 * - 在目标实体上启动一个全局计时器
 * - 目标实体上的计时器，通过计时器名称进行唯一标识
 * - 计时器根据计时器管理中的配置，会对应创生倒计时、正计时的计时器
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **311** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Str` || `timer_name` || 计时器名称: 该计时器的标识，只能引用在计时器管理中已经配置好的计时器名称 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_GlobalTimer_Start: "Execution.Global_Timer.Start",

  /**
 * **恢复全局计时器** `(Execution.Global_Timer.Resume)`
 *
 * - 使目标实体上一个处于暂停状态的计时器恢复运行
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **312** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Str` || `timer_name` || 计时器名称: 该计时器的标识，只能引用在计时器管理中已经配置好的计时器名称 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_GlobalTimer_Resume: "Execution.Global_Timer.Resume",

  /**
 * **终止全局计时器** `(Execution.Global_Timer.Stop)`
 *
 * - 通过节点图，提前结束运行中的全局计时器
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **313** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Str` || `timer_name` || 计时器名称: 该计时器的标识，只能引用在计时器管理中已经配置好的计时器名称 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_GlobalTimer_Stop: "Execution.Global_Timer.Stop",

  /**
 * **修改全局计时器** `(Execution.Global_Timer.Modify)`
 *
 * - 通过节点图，可以将运行中的全局计时器时间进行调整
 * - 若计时器先暂停，后修改减少时间，则修改后时间最少为0s
 * - 若为倒计时，则暂停后修改时间为0s且恢复计时器后，会触发【全局计时器触发时】事件
 * - 若计时器先暂停，后修改时间到0s，再修改增加时间，再恢复计时器，则不会触发【全局计时器触发时】事件
 * - 若有界面控件引用对应计时器，则界面控件的计时表现会同步修改
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **314** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Str` || `timer_name` || 计时器名称: 该计时器的标识，只能引用在计时器管理中已经配置好的计时器名称 |
 * | 2 || 🔹 || `Flt` || `delta` || 变化值: 若计时器为倒计时，则正数为增加倒计时剩余时间，负数为减少剩余时间<br>若计时器为正计时，则正数为增加正计时累计时间，负数为减少累计时间 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_GlobalTimer_Modify: "Execution.Global_Timer.Modify",

  /**
 * **全局计时器触发时** `(Trigger.Global_Timer.On_Timer_Trigger)`
 *
 * - 当倒计时的全局计时器计时结束时，会触发该事件
 * - 正计时的全局计时器不会触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **315** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Str` || `timer_name` || 计时器名称 |
 */
  Trigger_GlobalTimer_OnTimerTrigger: "Trigger.Global_Timer.On_Timer_Trigger",

  /**
 * **界面控件组触发时** `(Trigger.UI_Control_Group.On_Group_Trigger)`
 *
 * - 只有交互按钮和道具展示类型的界面控件，才会触发本事件
 * - 在关卡运行中，通过交互按钮或道具展示界面控件制作的界面控件组，被执行交互操作会发送节点图事件”界面控件组触发时“，此事件只有触发交互的_玩家_节点图可以获取
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **316** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Int` || `group_combo_index` || 界面控件组组合索引: 如果触发该事件的界面控件和其他界面控件组成了多控件界面控件组(即界面控件组组合)，此出参会有对应的值 |
 * | 3 || 🔸 || `Int` || `group_index` || 界面控件组索引: 触发该事件的界面控件为单控件界面控件组，则此处为该界面控件组的索引。<br>触发该事件的界面控件为多控件界面控件组，则此处为组合内对应该界面控件的索引 |
 */
  Trigger_UIControlGroup_OnGroupTrigger: "Trigger.UI_Control_Group.On_Group_Trigger",

  /**
 * **获取玩家当前界面布局** `(Query.UI_Control_Group.Get_Current_Layout)`
 *
 * - 获取指定玩家实体上当前生效的界面布局的索引
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **317** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `player` || 玩家实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `layout_idx` || 布局索引 |
 */
  Query_UIControlGroup_GetCurrentLayout: "Query.UI_Control_Group.Get_Current_Layout",

  /**
 * **获取场上所有实体** `(Query.Entity_Related.Get_All_Entities)`
 *
 * - 获取当前场上所有在场的实体，该实体列表的数量可能会较大
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **318** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `entities` || 实体列表 |
 */
  Query_EntityRelated_GetAllEntities: "Query.Entity_Related.Get_All_Entities",

  /**
 * **获取场上指定类型实体** `(Query.Entity_Related.Get_Entity_By_Type)`
 *
 * - 获取当前场上指定类型的所有实体，该实体列表的数量可能会较大
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **319** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `E<ENTY>` || `entity_type` || 实体类型: 分为关卡、物件、玩家、角色、造物 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `entities` || 实体列表 |
 */
  Query_EntityRelated_GetEntityByType: "Query.Entity_Related.Get_Entity_By_Type",

  /**
 * **获取场上指定元件ID的实体** `(Query.Entity_Related.Get_With_Prefab)`
 *
 * - 获取当前场上通过指定元件ID创建的所有实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **320** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Pfb` || `component_id` || 元件ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `entities` || 实体列表 |
 */
  Query_EntityRelated_GetWithPrefab: "Query.Entity_Related.Get_With_Prefab",

  /**
 * **弧度转角度** `(Arithmetic.Math.Rad_To_Deg)`
 *
 * - 将弧度值转为角度值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **321** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `radians` || 弧度值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `degrees` || 角度值 |
 */
  Arithmetic_Math_RadToDeg: "Arithmetic.Math.Rad_To_Deg",

  /**
 * **角度转弧度** `(Arithmetic.Math.Deg_To_Rad)`
 *
 * - 将角度值转为弧度值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **322** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `degrees` || 角度值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `radians` || 弧度值 |
 */
  Arithmetic_Math_DegToRad: "Arithmetic.Math.Deg_To_Rad",

  /**
 * **设置节点图变量** `(Execution.Custom_Variable.Set_Graph_Variable)`
 *
 * - 为当前节点图内的指定节点图变量设置值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **323** || 🖥️ Server || ⚙️ Execution || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Str` || `variable_name` || 变量名: 节点图变量的命名，同节点图内不可重复 |
 * | 1 || 🔷 || **`R<T>`** || `value` || 变量值: 赋予该变量的值 |
 * | 2 || 🔹 || `Bol` || `should_trigger_event` || 是否触发事件: 默认为是。选为否时，这次节点图变量修改不会触发节点图变量变化时事件 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 * * `C<T:Bol>`
 * * `C<T:Str>`
 * * `C<T:Gid>`
 * * `C<T:Ety>`
 * * `C<T:L<Gid>>`
 * * `C<T:L<Int>>`
 * * `C<T:L<Bol>>`
 * * `C<T:L<Flt>>`
 * * `C<T:L<Str>>`
 * * `C<T:Vec>`
 * * `C<T:L<Ety>>`
 * * `C<T:L<Vec>>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:L<Cfg>>`
 * * `C<T:L<Pfb>>`
 * * `C<T:Fct>`
 * * `C<T:L<Fct>>`
 * * `C<T:D<Ety,Ety>>`
 * * `C<T:D<Ety,Gid>>`
 * * `C<T:D<Ety,Int>>`
 * * `C<T:D<Ety,Bol>>`
 * * `C<T:D<Ety,Flt>>`
 * * `C<T:D<Ety,Str>>`
 * * `C<T:D<Ety,Fct>>`
 * * `C<T:D<Ety,Vec>>`
 * * `C<T:D<Ety,Cfg>>`
 * * `C<T:D<Ety,Pfb>>`
 * * `C<T:D<Ety,L<Ety>>>`
 * * `C<T:D<Ety,L<Gid>>>`
 * * `C<T:D<Ety,L<Int>>>`
 * * `C<T:D<Ety,L<Bol>>>`
 * * `C<T:D<Ety,L<Flt>>>`
 * * `C<T:D<Ety,L<Str>>>`
 * * `C<T:D<Ety,L<Fct>>>`
 * * `C<T:D<Ety,L<Vec>>>`
 * * `C<T:D<Ety,L<Cfg>>>`
 * * `C<T:D<Gid,Ety>>`
 * * `C<T:D<Gid,Gid>>`
 * * `C<T:D<Gid,Int>>`
 * * `C<T:D<Gid,Bol>>`
 * * `C<T:D<Gid,Flt>>`
 * * `C<T:D<Gid,Str>>`
 * * `C<T:D<Gid,Fct>>`
 * * `C<T:D<Gid,Vec>>`
 * * `C<T:D<Gid,Cfg>>`
 * * `C<T:D<Gid,Pfb>>`
 * * `C<T:D<Gid,L<Ety>>>`
 * * `C<T:D<Gid,L<Gid>>>`
 * * `C<T:D<Gid,L<Int>>>`
 * * `C<T:D<Gid,L<Bol>>>`
 * * `C<T:D<Gid,L<Flt>>>`
 * * `C<T:D<Gid,L<Str>>>`
 * * `C<T:D<Gid,L<Fct>>>`
 * * `C<T:D<Gid,L<Vec>>>`
 * * `C<T:D<Gid,L<Cfg>>>`
 * * `C<T:D<Int,Ety>>`
 * * `C<T:D<Int,Gid>>`
 * * `C<T:D<Int,Int>>`
 * * `C<T:D<Int,Bol>>`
 * * `C<T:D<Int,Flt>>`
 * * `C<T:D<Int,Str>>`
 * * `C<T:D<Int,Fct>>`
 * * `C<T:D<Int,Vec>>`
 * * `C<T:D<Int,Cfg>>`
 * * `C<T:D<Int,Pfb>>`
 * * `C<T:D<Int,L<Ety>>>`
 * * `C<T:D<Int,L<Gid>>>`
 * * `C<T:D<Int,L<Int>>>`
 * * `C<T:D<Int,L<Bol>>>`
 * * `C<T:D<Int,L<Flt>>>`
 * * `C<T:D<Int,L<Str>>>`
 * * `C<T:D<Int,L<Fct>>>`
 * * `C<T:D<Int,L<Vec>>>`
 * * `C<T:D<Int,L<Cfg>>>`
 * * `C<T:D<Str,Ety>>`
 * * `C<T:D<Str,Gid>>`
 * * `C<T:D<Str,Int>>`
 * * `C<T:D<Str,Bol>>`
 * * `C<T:D<Str,Flt>>`
 * * `C<T:D<Str,Str>>`
 * * `C<T:D<Str,Fct>>`
 * * `C<T:D<Str,Vec>>`
 * * `C<T:D<Str,Cfg>>`
 * * `C<T:D<Str,Pfb>>`
 * * `C<T:D<Str,L<Ety>>>`
 * * `C<T:D<Str,L<Gid>>>`
 * * `C<T:D<Str,L<Int>>>`
 * * `C<T:D<Str,L<Bol>>>`
 * * `C<T:D<Str,L<Flt>>>`
 * * `C<T:D<Str,L<Str>>>`
 * * `C<T:D<Str,L<Fct>>>`
 * * `C<T:D<Str,L<Vec>>>`
 * * `C<T:D<Str,L<Cfg>>>`
 * * `C<T:D<Fct,Ety>>`
 * * `C<T:D<Fct,Gid>>`
 * * `C<T:D<Fct,Int>>`
 * * `C<T:D<Fct,Bol>>`
 * * `C<T:D<Fct,Flt>>`
 * * `C<T:D<Fct,Str>>`
 * * `C<T:D<Fct,Fct>>`
 * * `C<T:D<Fct,Vec>>`
 * * `C<T:D<Fct,Cfg>>`
 * * `C<T:D<Fct,Pfb>>`
 * * `C<T:D<Fct,L<Ety>>>`
 * * `C<T:D<Fct,L<Gid>>>`
 * * `C<T:D<Fct,L<Int>>>`
 * * `C<T:D<Fct,L<Bol>>>`
 * * `C<T:D<Fct,L<Flt>>>`
 * * `C<T:D<Fct,L<Str>>>`
 * * `C<T:D<Fct,L<Fct>>>`
 * * `C<T:D<Fct,L<Vec>>>`
 * * `C<T:D<Fct,L<Cfg>>>`
 * * `C<T:D<Cfg,Ety>>`
 * * `C<T:D<Cfg,Gid>>`
 * * `C<T:D<Cfg,Int>>`
 * * `C<T:D<Cfg,Bol>>`
 * * `C<T:D<Cfg,Flt>>`
 * * `C<T:D<Cfg,Str>>`
 * * `C<T:D<Cfg,Fct>>`
 * * `C<T:D<Cfg,Vec>>`
 * * `C<T:D<Cfg,Cfg>>`
 * * `C<T:D<Cfg,Pfb>>`
 * * `C<T:D<Cfg,L<Ety>>>`
 * * `C<T:D<Cfg,L<Gid>>>`
 * * `C<T:D<Cfg,L<Int>>>`
 * * `C<T:D<Cfg,L<Bol>>>`
 * * `C<T:D<Cfg,L<Flt>>>`
 * * `C<T:D<Cfg,L<Str>>>`
 * * `C<T:D<Cfg,L<Fct>>>`
 * * `C<T:D<Cfg,L<Vec>>>`
 * * `C<T:D<Cfg,L<Cfg>>>`
 * * `C<T:D<Pfb,Ety>>`
 * * `C<T:D<Pfb,Gid>>`
 * * `C<T:D<Pfb,Int>>`
 * * `C<T:D<Pfb,Bol>>`
 * * `C<T:D<Pfb,Flt>>`
 * * `C<T:D<Pfb,Str>>`
 * * `C<T:D<Pfb,Fct>>`
 * * `C<T:D<Pfb,Vec>>`
 * * `C<T:D<Pfb,Cfg>>`
 * * `C<T:D<Pfb,Pfb>>`
 * * `C<T:D<Pfb,L<Ety>>>`
 * * `C<T:D<Pfb,L<Gid>>>`
 * * `C<T:D<Pfb,L<Int>>>`
 * * `C<T:D<Pfb,L<Bol>>>`
 * * `C<T:D<Pfb,L<Flt>>>`
 * * `C<T:D<Pfb,L<Str>>>`
 * * `C<T:D<Pfb,L<Fct>>>`
 * * `C<T:D<Pfb,L<Vec>>>`
 * * `C<T:D<Pfb,L<Cfg>>>`
 */
  Execution_CustomVariable_SetGraphVariable: "Execution.Custom_Variable.Set_Graph_Variable",

  /**
 * **获取节点图变量** `(Query.Custom_Variable.Get_Graph_Variable)`
 *
 * - 获取当前节点图的指定节点图变量的值
 * - 如果变量不存在，则返回类型的默认值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **337** || 🖥️ Server || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Str` || `var_name` || 变量名 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `value` || 变量值 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Int>`
 * * `C<T:Bol>`
 * * `C<T:Flt>`
 * * `C<T:Str>`
 * * `C<T:L<Gid>>`
 * * `C<T:L<Int>>`
 * * `C<T:L<Bol>>`
 * * `C<T:L<Flt>>`
 * * `C<T:L<Str>>`
 * * `C<T:Vec>`
 * * `C<T:L<Ety>>`
 * * `C<T:L<Vec>>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:L<Cfg>>`
 * * `C<T:L<Pfb>>`
 * * `C<T:Fct>`
 * * `C<T:L<Fct>>`
 * * `C<T:D<Ety,Ety>>`
 * * `C<T:D<Ety,Gid>>`
 * * `C<T:D<Ety,Int>>`
 * * `C<T:D<Ety,Bol>>`
 * * `C<T:D<Ety,Flt>>`
 * * `C<T:D<Ety,Str>>`
 * * `C<T:D<Ety,Fct>>`
 * * `C<T:D<Ety,Vec>>`
 * * `C<T:D<Ety,Cfg>>`
 * * `C<T:D<Ety,Pfb>>`
 * * `C<T:D<Ety,L<Ety>>>`
 * * `C<T:D<Ety,L<Gid>>>`
 * * `C<T:D<Ety,L<Int>>>`
 * * `C<T:D<Ety,L<Bol>>>`
 * * `C<T:D<Ety,L<Flt>>>`
 * * `C<T:D<Ety,L<Str>>>`
 * * `C<T:D<Ety,L<Fct>>>`
 * * `C<T:D<Ety,L<Vec>>>`
 * * `C<T:D<Ety,L<Cfg>>>`
 * * `C<T:D<Gid,Ety>>`
 * * `C<T:D<Gid,Gid>>`
 * * `C<T:D<Gid,Int>>`
 * * `C<T:D<Gid,Bol>>`
 * * `C<T:D<Gid,Flt>>`
 * * `C<T:D<Gid,Str>>`
 * * `C<T:D<Gid,Fct>>`
 * * `C<T:D<Gid,Vec>>`
 * * `C<T:D<Gid,Cfg>>`
 * * `C<T:D<Gid,Pfb>>`
 * * `C<T:D<Gid,L<Ety>>>`
 * * `C<T:D<Gid,L<Gid>>>`
 * * `C<T:D<Gid,L<Int>>>`
 * * `C<T:D<Gid,L<Bol>>>`
 * * `C<T:D<Gid,L<Flt>>>`
 * * `C<T:D<Gid,L<Str>>>`
 * * `C<T:D<Gid,L<Fct>>>`
 * * `C<T:D<Gid,L<Vec>>>`
 * * `C<T:D<Gid,L<Cfg>>>`
 * * `C<T:D<Int,Ety>>`
 * * `C<T:D<Int,Gid>>`
 * * `C<T:D<Int,Int>>`
 * * `C<T:D<Int,Bol>>`
 * * `C<T:D<Int,Flt>>`
 * * `C<T:D<Int,Str>>`
 * * `C<T:D<Int,Fct>>`
 * * `C<T:D<Int,Vec>>`
 * * `C<T:D<Int,Cfg>>`
 * * `C<T:D<Int,Pfb>>`
 * * `C<T:D<Int,L<Ety>>>`
 * * `C<T:D<Int,L<Gid>>>`
 * * `C<T:D<Int,L<Int>>>`
 * * `C<T:D<Int,L<Bol>>>`
 * * `C<T:D<Int,L<Flt>>>`
 * * `C<T:D<Int,L<Str>>>`
 * * `C<T:D<Int,L<Fct>>>`
 * * `C<T:D<Int,L<Vec>>>`
 * * `C<T:D<Int,L<Cfg>>>`
 * * `C<T:D<Str,Ety>>`
 * * `C<T:D<Str,Gid>>`
 * * `C<T:D<Str,Int>>`
 * * `C<T:D<Str,Bol>>`
 * * `C<T:D<Str,Flt>>`
 * * `C<T:D<Str,Str>>`
 * * `C<T:D<Str,Fct>>`
 * * `C<T:D<Str,Vec>>`
 * * `C<T:D<Str,Cfg>>`
 * * `C<T:D<Str,Pfb>>`
 * * `C<T:D<Str,L<Ety>>>`
 * * `C<T:D<Str,L<Gid>>>`
 * * `C<T:D<Str,L<Int>>>`
 * * `C<T:D<Str,L<Bol>>>`
 * * `C<T:D<Str,L<Flt>>>`
 * * `C<T:D<Str,L<Str>>>`
 * * `C<T:D<Str,L<Fct>>>`
 * * `C<T:D<Str,L<Vec>>>`
 * * `C<T:D<Str,L<Cfg>>>`
 * * `C<T:D<Fct,Ety>>`
 * * `C<T:D<Fct,Gid>>`
 * * `C<T:D<Fct,Int>>`
 * * `C<T:D<Fct,Bol>>`
 * * `C<T:D<Fct,Flt>>`
 * * `C<T:D<Fct,Str>>`
 * * `C<T:D<Fct,Fct>>`
 * * `C<T:D<Fct,Vec>>`
 * * `C<T:D<Fct,Cfg>>`
 * * `C<T:D<Fct,Pfb>>`
 * * `C<T:D<Fct,L<Ety>>>`
 * * `C<T:D<Fct,L<Gid>>>`
 * * `C<T:D<Fct,L<Int>>>`
 * * `C<T:D<Fct,L<Bol>>>`
 * * `C<T:D<Fct,L<Flt>>>`
 * * `C<T:D<Fct,L<Str>>>`
 * * `C<T:D<Fct,L<Fct>>>`
 * * `C<T:D<Fct,L<Vec>>>`
 * * `C<T:D<Fct,L<Cfg>>>`
 * * `C<T:D<Cfg,Ety>>`
 * * `C<T:D<Cfg,Gid>>`
 * * `C<T:D<Cfg,Int>>`
 * * `C<T:D<Cfg,Bol>>`
 * * `C<T:D<Cfg,Flt>>`
 * * `C<T:D<Cfg,Str>>`
 * * `C<T:D<Cfg,Fct>>`
 * * `C<T:D<Cfg,Vec>>`
 * * `C<T:D<Cfg,Cfg>>`
 * * `C<T:D<Cfg,Pfb>>`
 * * `C<T:D<Cfg,L<Ety>>>`
 * * `C<T:D<Cfg,L<Gid>>>`
 * * `C<T:D<Cfg,L<Int>>>`
 * * `C<T:D<Cfg,L<Bol>>>`
 * * `C<T:D<Cfg,L<Flt>>>`
 * * `C<T:D<Cfg,L<Str>>>`
 * * `C<T:D<Cfg,L<Fct>>>`
 * * `C<T:D<Cfg,L<Vec>>>`
 * * `C<T:D<Cfg,L<Cfg>>>`
 * * `C<T:D<Pfb,Ety>>`
 * * `C<T:D<Pfb,Gid>>`
 * * `C<T:D<Pfb,Int>>`
 * * `C<T:D<Pfb,Bol>>`
 * * `C<T:D<Pfb,Flt>>`
 * * `C<T:D<Pfb,Str>>`
 * * `C<T:D<Pfb,Fct>>`
 * * `C<T:D<Pfb,Vec>>`
 * * `C<T:D<Pfb,Cfg>>`
 * * `C<T:D<Pfb,Pfb>>`
 * * `C<T:D<Pfb,L<Ety>>>`
 * * `C<T:D<Pfb,L<Gid>>>`
 * * `C<T:D<Pfb,L<Int>>>`
 * * `C<T:D<Pfb,L<Bol>>>`
 * * `C<T:D<Pfb,L<Flt>>>`
 * * `C<T:D<Pfb,L<Str>>>`
 * * `C<T:D<Pfb,L<Fct>>>`
 * * `C<T:D<Pfb,L<Vec>>>`
 * * `C<T:D<Pfb,L<Cfg>>>`
 */
  Query_CustomVariable_GetGraphVariable: "Query.Custom_Variable.Get_Graph_Variable",

  /**
 * **节点图变量变化时** `(Trigger.Custom_Variable.On_Graph_Variable_Change)`
 *
 * - 当前节点图的节点图变量发生变化时，触发该事件
 * - 注意变化前值和变化后值为泛型，需确定其泛型类型后，才能正确接收到对应类型节点图变量的事件
 * - 容器类型的节点图变量没有变化前值和变化后值出参
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **351** || 🖥️ Server || ⚡ Trigger || 🧩Variant |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体: 与节点图关联的实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID: 与节点图关联的实体的GUID |
 * | 2 || 🔸 || `Str` || `variable_name` || 变量名: 发生变化的变量的名称 |
 * | 3 || 🔶 || **`R<T>`** || `old_value` || 变化前值: 变量变化前的值 |
 * | 4 || 🔶 || **`R<T>`** || `new_value` || 变化后值: 变量变化后的值 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Int>`
 * * `C<T:Bol>`
 * * `C<T:Flt>`
 * * `C<T:Str>`
 * * `C<T:L<Gid>>`
 * * `C<T:L<Int>>`
 * * `C<T:L<Bol>>`
 * * `C<T:L<Flt>>`
 * * `C<T:L<Str>>`
 * * `C<T:Vec>`
 * * `C<T:L<Ety>>`
 * * `C<T:L<Vec>>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:L<Cfg>>`
 * * `C<T:L<Pfb>>`
 * * `C<T:Fct>`
 * * `C<T:L<Fct>>`
 * * `C<T:D<Ety,Ety>>`
 * * `C<T:D<Ety,Gid>>`
 * * `C<T:D<Ety,Int>>`
 * * `C<T:D<Ety,Bol>>`
 * * `C<T:D<Ety,Flt>>`
 * * `C<T:D<Ety,Str>>`
 * * `C<T:D<Ety,Fct>>`
 * * `C<T:D<Ety,Vec>>`
 * * `C<T:D<Ety,Cfg>>`
 * * `C<T:D<Ety,Pfb>>`
 * * `C<T:D<Ety,L<Ety>>>`
 * * `C<T:D<Ety,L<Gid>>>`
 * * `C<T:D<Ety,L<Int>>>`
 * * `C<T:D<Ety,L<Bol>>>`
 * * `C<T:D<Ety,L<Flt>>>`
 * * `C<T:D<Ety,L<Str>>>`
 * * `C<T:D<Ety,L<Fct>>>`
 * * `C<T:D<Ety,L<Vec>>>`
 * * `C<T:D<Ety,L<Cfg>>>`
 * * `C<T:D<Gid,Ety>>`
 * * `C<T:D<Gid,Gid>>`
 * * `C<T:D<Gid,Int>>`
 * * `C<T:D<Gid,Bol>>`
 * * `C<T:D<Gid,Flt>>`
 * * `C<T:D<Gid,Str>>`
 * * `C<T:D<Gid,Fct>>`
 * * `C<T:D<Gid,Vec>>`
 * * `C<T:D<Gid,Cfg>>`
 * * `C<T:D<Gid,Pfb>>`
 * * `C<T:D<Gid,L<Ety>>>`
 * * `C<T:D<Gid,L<Gid>>>`
 * * `C<T:D<Gid,L<Int>>>`
 * * `C<T:D<Gid,L<Bol>>>`
 * * `C<T:D<Gid,L<Flt>>>`
 * * `C<T:D<Gid,L<Str>>>`
 * * `C<T:D<Gid,L<Fct>>>`
 * * `C<T:D<Gid,L<Vec>>>`
 * * `C<T:D<Gid,L<Cfg>>>`
 * * `C<T:D<Int,Ety>>`
 * * `C<T:D<Int,Gid>>`
 * * `C<T:D<Int,Int>>`
 * * `C<T:D<Int,Bol>>`
 * * `C<T:D<Int,Flt>>`
 * * `C<T:D<Int,Str>>`
 * * `C<T:D<Int,Fct>>`
 * * `C<T:D<Int,Vec>>`
 * * `C<T:D<Int,Cfg>>`
 * * `C<T:D<Int,Pfb>>`
 * * `C<T:D<Int,L<Ety>>>`
 * * `C<T:D<Int,L<Gid>>>`
 * * `C<T:D<Int,L<Int>>>`
 * * `C<T:D<Int,L<Bol>>>`
 * * `C<T:D<Int,L<Flt>>>`
 * * `C<T:D<Int,L<Str>>>`
 * * `C<T:D<Int,L<Fct>>>`
 * * `C<T:D<Int,L<Vec>>>`
 * * `C<T:D<Int,L<Cfg>>>`
 * * `C<T:D<Str,Ety>>`
 * * `C<T:D<Str,Gid>>`
 * * `C<T:D<Str,Int>>`
 * * `C<T:D<Str,Bol>>`
 * * `C<T:D<Str,Flt>>`
 * * `C<T:D<Str,Str>>`
 * * `C<T:D<Str,Fct>>`
 * * `C<T:D<Str,Vec>>`
 * * `C<T:D<Str,Cfg>>`
 * * `C<T:D<Str,Pfb>>`
 * * `C<T:D<Str,L<Ety>>>`
 * * `C<T:D<Str,L<Gid>>>`
 * * `C<T:D<Str,L<Int>>>`
 * * `C<T:D<Str,L<Bol>>>`
 * * `C<T:D<Str,L<Flt>>>`
 * * `C<T:D<Str,L<Str>>>`
 * * `C<T:D<Str,L<Fct>>>`
 * * `C<T:D<Str,L<Vec>>>`
 * * `C<T:D<Str,L<Cfg>>>`
 * * `C<T:D<Fct,Ety>>`
 * * `C<T:D<Fct,Gid>>`
 * * `C<T:D<Fct,Int>>`
 * * `C<T:D<Fct,Bol>>`
 * * `C<T:D<Fct,Flt>>`
 * * `C<T:D<Fct,Str>>`
 * * `C<T:D<Fct,Fct>>`
 * * `C<T:D<Fct,Vec>>`
 * * `C<T:D<Fct,Cfg>>`
 * * `C<T:D<Fct,Pfb>>`
 * * `C<T:D<Fct,L<Ety>>>`
 * * `C<T:D<Fct,L<Gid>>>`
 * * `C<T:D<Fct,L<Int>>>`
 * * `C<T:D<Fct,L<Bol>>>`
 * * `C<T:D<Fct,L<Flt>>>`
 * * `C<T:D<Fct,L<Str>>>`
 * * `C<T:D<Fct,L<Fct>>>`
 * * `C<T:D<Fct,L<Vec>>>`
 * * `C<T:D<Fct,L<Cfg>>>`
 * * `C<T:D<Cfg,Ety>>`
 * * `C<T:D<Cfg,Gid>>`
 * * `C<T:D<Cfg,Int>>`
 * * `C<T:D<Cfg,Bol>>`
 * * `C<T:D<Cfg,Flt>>`
 * * `C<T:D<Cfg,Str>>`
 * * `C<T:D<Cfg,Fct>>`
 * * `C<T:D<Cfg,Vec>>`
 * * `C<T:D<Cfg,Cfg>>`
 * * `C<T:D<Cfg,Pfb>>`
 * * `C<T:D<Cfg,L<Ety>>>`
 * * `C<T:D<Cfg,L<Gid>>>`
 * * `C<T:D<Cfg,L<Int>>>`
 * * `C<T:D<Cfg,L<Bol>>>`
 * * `C<T:D<Cfg,L<Flt>>>`
 * * `C<T:D<Cfg,L<Str>>>`
 * * `C<T:D<Cfg,L<Fct>>>`
 * * `C<T:D<Cfg,L<Vec>>>`
 * * `C<T:D<Cfg,L<Cfg>>>`
 * * `C<T:D<Pfb,Ety>>`
 * * `C<T:D<Pfb,Gid>>`
 * * `C<T:D<Pfb,Int>>`
 * * `C<T:D<Pfb,Bol>>`
 * * `C<T:D<Pfb,Flt>>`
 * * `C<T:D<Pfb,Str>>`
 * * `C<T:D<Pfb,Fct>>`
 * * `C<T:D<Pfb,Vec>>`
 * * `C<T:D<Pfb,Cfg>>`
 * * `C<T:D<Pfb,Pfb>>`
 * * `C<T:D<Pfb,L<Ety>>>`
 * * `C<T:D<Pfb,L<Gid>>>`
 * * `C<T:D<Pfb,L<Int>>>`
 * * `C<T:D<Pfb,L<Bol>>>`
 * * `C<T:D<Pfb,L<Flt>>>`
 * * `C<T:D<Pfb,L<Str>>>`
 * * `C<T:D<Pfb,L<Fct>>>`
 * * `C<T:D<Pfb,L<Vec>>>`
 * * `C<T:D<Pfb,L<Cfg>>>`
 */
  Trigger_CustomVariable_OnGraphVariableChange: "Trigger.Custom_Variable.On_Graph_Variable_Change",

  /**
 * **激活/关闭跟随运动器** `(Execution.Follow_Motion.Set_Device_State)`
 *
 * - 使目标实体上的跟随运动器组件逻辑激活/关闭
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **365** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Bol` || `should_activate` || 是否激活: “是”为激活 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_FollowMotion_SetDeviceState: "Execution.Follow_Motion.Set_Device_State",

  /**
 * **Activate/Disable Character Disruptor Device** `(Hidden.Execution.Set_Disruptor_State)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **366** || 🖥️ Server || 🚫 Hidden || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `Input0` ||  |
 * | 1 || 🔹 || `Unk` || `Input1` ||  |
 * | 2 || 🔹 || `Bol` || `Input2` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Hidden_Execution_SetDisruptorState: "Hidden.Execution.Set_Disruptor_State",

  /**
 * **激活/关闭碰撞触发源** `(Execution.Collision_Trigger_Source.Set_Source_State)`
 *
 * - 可以修改目标实体的碰撞触发源组件状态
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **367** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Bol` || `should_activate` || 是否激活: 为“是”则激活，可以与携带碰撞触发器组件的实体产生碰撞 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CollisionTriggerSource_SetSourceState: "Execution.Collision_Trigger_Source.Set_Source_State",

  /**
 * **移除实体** `(Execution.Entity_Related.Remove_Entity)`
 *
 * - 移除指定实体，与销毁实体不同的是，不会有销毁表现，也不会触发销毁后才会触发的逻辑
 * - 移除实体不会触发【实体销毁时】事件，但可以触发【实体移除/销毁时】事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **372** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 所要移除的实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_EntityRelated_RemoveEntity: "Execution.Entity_Related.Remove_Entity",

  /**
 * **实体销毁时** `(Trigger.Entity_Related.On_Destroyed)`
 *
 * - 关卡内物件和造物被销毁时触发该事件，该事件仅在关卡实体上可以触发
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **373** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体: 被销毁的实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Vec` || `position` || 位置 |
 * | 3 || 🔸 || `Vec` || `rotation` || 朝向 |
 * | 4 || 🔸 || `E<ENTY>` || `entity_type` || 实体类型 |
 * | 5 || 🔸 || `Fct` || `camp` || 阵营 |
 * | 6 || 🔸 || `Ety` || `damage_source` || 伤害来源 |
 * | 7 || 🔸 || `Ety` || `owner_entity` || 归属者实体 |
 * | 8 || 🔸 || `Vss` || `custom_vars_snap` || 自定义变量组件快照: 销毁时，该实体上的自定义变量组件的快照。可以使用【查询自定义变量快照】节点获取其中的自定义变量值 |
 */
  Trigger_EntityRelated_OnDestroyed: "Trigger.Entity_Related.On_Destroyed",

  /**
 * **造物入战时** `(Trigger.Creation.On_Enter_Combat)`
 *
 * - 仅在经典仇恨模式生效
 * - 造物入战时触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **374** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 */
  Trigger_Creation_OnEnterCombat: "Trigger.Creation.On_Enter_Combat",

  /**
 * **造物脱战时** `(Trigger.Creation.On_Leave_Combat)`
 *
 * - 仅在经典仇恨模式生效
 * - 造物脱战时触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **375** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 */
  Trigger_Creation_OnLeaveCombat: "Trigger.Creation.On_Leave_Combat",

  /**
 * **获取造物当前目标** `(Query.Creation.Get_Target)`
 *
 * - 根据造物当前行为的不同，目标实体也不尽相同。
 * - 例如当造物在攻击敌方时，造物的目标为敌方指定实体。
 * - 例如当造物在对友方进行治疗时，造物的目标为友方指定实体。
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **376** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `creation` || 造物实体: 运行时的造物实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `target` || 目标实体: 造物当前的智能选取目标实体 |
 */
  Query_Creation_GetTarget: "Query.Creation.Get_Target",

  /**
 * **获取指定类型的实体列表** `(Query.Entity_Related.Get_By_Type)`
 *
 * - 在目标实体列表中获取指定类型的实体列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **377** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `L<Ety>` || `source_list` || 目标实体列表 |
 * | 1 || 🔹 || `E<ENTY>` || `entity_type` || 实体类型: 分为玩家、角色、关卡、物件、造物 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `result_list` || 结果列表 |
 */
  Query_EntityRelated_GetByType: "Query.Entity_Related.Get_By_Type",

  /**
 * **获取指定元件ID的实体列表** `(Query.Entity_Related.Get_By_Prefab)`
 *
 * - 在目标实体列表中获取以指定元件ID创建的实体列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **378** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `L<Ety>` || `source_list` || 目标实体列表 |
 * | 1 || 🔹 || `Pfb` || `component_id` || 元件ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `result_list` || 结果列表 |
 */
  Query_EntityRelated_GetByPrefab: "Query.Entity_Related.Get_By_Prefab",

  /**
 * **获取指定阵营的实体列表** `(Query.Entity_Related.Get_By_Faction)`
 *
 * - 在目标实体列表中获取归属于某个阵营的实体列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **379** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `L<Ety>` || `source_list` || 目标实体列表 |
 * | 1 || 🔹 || `Fct` || `camp` || 阵营 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `result_list` || 结果列表 |
 */
  Query_EntityRelated_GetByFaction: "Query.Entity_Related.Get_By_Faction",

  /**
 * **获取指定范围的实体列表** `(Query.Entity_Related.Get_By_Range)`
 *
 * - 在目标实体列表中获取指定球形范围内的实体列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **380** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `L<Ety>` || `source_list` || 目标实体列表 |
 * | 1 || 🔹 || `Vec` || `center` || 中心点 |
 * | 2 || 🔹 || `Flt` || `radius` || 半径 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `result_list` || 结果列表 |
 */
  Query_EntityRelated_GetByRange: "Query.Entity_Related.Get_By_Range",

  /**
 * **获取造物属性** `(Query.Creation.Get_Attribute)`
 *
 * - 获取指定造物的属性
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **381** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `creation` || 造物实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `level` || 等级 |
 * | 1 || 🔸 || `Flt` || `hp_cur` || 当前生命值 |
 * | 2 || 🔸 || `Flt` || `hp_max` || 上限生命值 |
 * | 3 || 🔸 || `Flt` || `atk_cur` || 当前攻击力 |
 * | 4 || 🔸 || `Flt` || `atk_base` || 基础攻击力 |
 * | 5 || 🔸 || `Flt` || `poise_max` || 受打断值上限 |
 * | 6 || 🔸 || `Flt` || `poise_cur` || 当前受打断值 |
 * | 7 || 🔸 || `E<CIRS>` || `poise_state` || 当前受打断状态 |
 */
  Query_Creation_GetAttribute: "Query.Creation.Get_Attribute",

  /**
 * **切换当前界面布局** `(Execution.UI_Control_Group.Switch_Layout)`
 *
 * - 可以通过布局索引来切换目标玩家当前的界面布局
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **382** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player` || 目标玩家: 生效的玩家实体 |
 * | 1 || 🔹 || `Int` || `layout_index` || 布局索引: 界面布局的标识 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_UIControlGroup_SwitchLayout: "Execution.UI_Control_Group.Switch_Layout",

  /**
 * **激活控件组库内界面控件组** `(Execution.UI_Control_Group.Activate_Group)`
 *
 * - 可以在目标玩家的界面布局上激活处于界面控件组库内的以自定义模板形式存在的界面控件组
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **383** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player` || 目标玩家: 生效的玩家实体 |
 * | 1 || 🔹 || `Int` || `group_index` || 界面控件组索引: 界面控件组的标识 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_UIControlGroup_ActivateGroup: "Execution.UI_Control_Group.Activate_Group",

  /**
 * **修改界面布局内界面控件状态** `(Execution.UI_Control_Group.Modify_Status)`
 *
 * - 通过界面控件索引来修改目标玩家界面布局内对应界面控件的状态
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **384** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player` || 目标玩家: 生效的玩家实体 |
 * | 1 || 🔹 || `Int` || `control_index` || 界面控件索引: 界面控件的标识 |
 * | 2 || 🔹 || `E<UICG>` || `display_state` || 显示状态: 关闭：不可见且逻辑不运行<br>开启：可见+逻辑正常运行<br>隐藏：不可见+逻辑正常运行 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_UIControlGroup_ModifyStatus: "Execution.UI_Control_Group.Modify_Status",

  /**
 * **玩家职业更改时** `(Trigger.Class.On_Class_Change)`
 *
 * - 玩家职业更改时触发该事件发送给对应玩家，可以在更改后职业的职业节点图里收到
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **385** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Cfg` || `career_config_id_old` || 更改前职业配置ID |
 * | 3 || 🔸 || `Cfg` || `career_config_id_new` || 更改后职业配置ID |
 */
  Trigger_Class_OnClassChange: "Trigger.Class.On_Class_Change",

  /**
 * **玩家职业等级变化时** `(Trigger.Class.On_Level_Change)`
 *
 * - 玩家职业等级变化时触发该事件发送给对应玩家，可以在该职业的职业节点图里收到
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **386** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体: 生效的玩家实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Int` || `level_old` || 变化前等级 |
 * | 3 || 🔸 || `Int` || `level_new` || 变化后等级 |
 */
  Trigger_Class_OnLevelChange: "Trigger.Class.On_Level_Change",

  /**
 * **查询玩家职业** `(Query.Class.Get_Class)`
 *
 * - 查询玩家当前的职业，会输出该职业的配置ID
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **387** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `player` || 玩家实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Cfg` || `career_id` || 职业配置ID |
 */
  Query_Class_GetClass: "Query.Class.Get_Class",

  /**
 * **查询玩家职业的等级** `(Query.Class.Get_Level)`
 *
 * - 查询玩家指定职业的等级
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **388** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `player` || 玩家实体 |
 * | 1 || 🔹 || `Cfg` || `career_id` || 职业配置ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `level` || 等级 |
 */
  Query_Class_GetLevel: "Query.Class.Get_Level",

  /**
 * **更改玩家职业** `(Execution.Class.Change_Class)`
 *
 * - 修改玩家的当前职业为配置ID对应的职业
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **389** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player` || 目标玩家: 生效的玩家实体 |
 * | 1 || 🔹 || `Cfg` || `class_id` || 职业配置ID: 该职业的标识 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Class_ChangeClass: "Execution.Class.Change_Class",

  /**
 * **提升玩家当前职业经验** `(Execution.Class.Add_Exp)`
 *
 * - 提升玩家当前职业经验，超出最大等级的部分会无效
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **390** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player` || 目标玩家: 生效的玩家实体 |
 * | 1 || 🔹 || `Int` || `exp` || 经验值: 所要提升的经验值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Class_AddExp: "Execution.Class.Add_Exp",

  /**
 * **更改玩家当前职业等级** `(Execution.Class.Set_Level)`
 *
 * - 修改玩家当前职业等级，若超出定义的等级范围则会失效
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **391** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player` || 目标玩家: 生效的玩家实体 |
 * | 1 || 🔹 || `Int` || `level` || 等级: 修改后的等级 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Class_SetLevel: "Execution.Class.Set_Level",

  /**
 * **技能节点调用时** `(Trigger.Skill.On_Skill_Call)`
 *
 * - 通过技能节点图的【通知服务器节点图】节点触发，可以传入三个字符串类型的值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **392** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `invoker_entity` || 调用者实体 |
 * | 1 || 🔸 || `Gid` || `invoker_guid` || 调用者GUID |
 * | 2 || 🔸 || `Str` || `param1` || 参数1 |
 * | 3 || 🔸 || `Str` || `param2` || 参数2 |
 * | 4 || 🔸 || `Str` || `param3` || 参数3 |
 */
  Trigger_Skill_OnSkillCall: "Trigger.Skill.On_Skill_Call",

  /**
 * **修改技能资源量** `(Execution.Skill.Modify_Resource)`
 *
 * - 修改技能的资源量，会在当前值上加上变更值，变更值可以为负数
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **393** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的角色实体 |
 * | 1 || 🔹 || `Cfg` || `resource_config_id` || 技能资源配置ID: 技能资源的标识 |
 * | 2 || 🔹 || `Flt` || `delta_value` || 变更值: 修改后的值为：原值+变更值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Skill_ModifyResource: "Execution.Skill.Modify_Resource",

  /**
 * **设置技能资源量** `(Execution.Skill.Set_Resource)`
 *
 * - 修改角色的技能资源量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **394** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的角色实体 |
 * | 1 || 🔹 || `Cfg` || `resource_config_id` || 技能资源配置ID: 技能资源的标识 |
 * | 2 || 🔹 || `Flt` || `target_value` || 目标值: 修改后的值为该输入值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Skill_SetResource: "Execution.Skill.Set_Resource",

  /**
 * **添加角色技能** `(Execution.Skill.Add_Skill)`
 *
 * - 为指定目标角色的某个技能槽位添加技能
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **395** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的角色实体 |
 * | 1 || 🔹 || `Cfg` || `skill_config_id` || 技能配置ID: 技能的标识 |
 * | 2 || 🔹 || `E<SLOT>` || `skill_slot` || 技能槽位: 要添加的技能所在的槽位，分为普通攻击、技能1-E、技能2-Q、技能3-R、技能4-T和自定义技能 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Skill_AddSkill: "Execution.Skill.Add_Skill",

  /**
 * **以ID删除角色技能** `(Execution.Skill.Remove_By_ID)`
 *
 * - 遍历角色的所有槽位，删除所有指定配置ID的技能
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **396** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的角色实体 |
 * | 1 || 🔹 || `Cfg` || `skill_config_id` || 技能配置ID: 技能的标识 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Skill_RemoveByID: "Execution.Skill.Remove_By_ID",

  /**
 * **初始化角色技能** `(Execution.Skill.Init_Skill)`
 *
 * - 使目标角色的技能重置为职业模板上配置的技能
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **397** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的角色实体 |
 * | 1 || 🔹 || `E<SLOT>` || `skill_slot` || 角色技能槽位: 要初始化的技能所在的槽位，分为普通攻击、技能1-E、技能2-Q、技能3-R、技能4-T和自定义技能 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Skill_InitSkill: "Execution.Skill.Init_Skill",

  /**
 * **查询角色技能** `(Query.Skill.Get_Skill_Info)`
 *
 * - 查询角色指定槽位的技能，会输出该技能的配置ID
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **398** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `character` || 角色实体 |
 * | 1 || 🔹 || `E<SLOT>` || `slot` || 角色技能槽位 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Cfg` || `skill_config` || 技能配置ID |
 */
  Query_Skill_GetSkillInfo: "Query.Skill.Get_Skill_Info",

  /**
 * **以槽位删除角色技能** `(Execution.Skill.Remove_By_Slot)`
 *
 * - 删除目标角色指定槽位的技能
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **399** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的角色实体 |
 * | 1 || 🔹 || `E<SLOT>` || `skill_slot` || 角色技能槽位: 要删除的技能所在的槽位，分为普通攻击、技能1-E、技能2-Q、技能3-R、技能4-T和自定义技能 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Skill_RemoveBySlot: "Execution.Skill.Remove_By_Slot",

  /**
 * **When Native Custom Value Changes** `(Hidden.Trigger.On_Native_Value_Change)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **428** || 🖥️ Server || 🚫 Hidden || 🧩Variant |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `Output0` ||  |
 * | 1 || 🔸 || `Gid` || `Output1` ||  |
 * | 2 || 🔸 || `Str` || `Output2` ||  |
 * | 3 || 🔶 || **`R<T>`** || `Output3` ||  |
 * | 4 || 🔶 || **`R<T>`** || `Output4` ||  |
 * | 5 || 🔸 || `Bol` || `Output5` ||  |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:L<Int>>`
 * * `C<T:L<Str>>`
 * * `C<T:L<Ety>>`
 * * `C<T:L<Gid>>`
 * * `C<T:L<Flt>>`
 * * `C<T:L<Vec>>`
 * * `C<T:L<Bol>>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:L<Cfg>>`
 * * `C<T:L<Pfb>>`
 * * `C<T:Fct>`
 * * `C<T:L<Fct>>`
 * * `C<T:D<Ety,Ety>>`
 * * `C<T:D<Ety,Gid>>`
 * * `C<T:D<Ety,Int>>`
 * * `C<T:D<Ety,Bol>>`
 * * `C<T:D<Ety,Flt>>`
 * * `C<T:D<Ety,Str>>`
 * * `C<T:D<Ety,Fct>>`
 * * `C<T:D<Ety,Vec>>`
 * * `C<T:D<Ety,Cfg>>`
 * * `C<T:D<Ety,Pfb>>`
 * * `C<T:D<Ety,L<Ety>>>`
 * * `C<T:D<Ety,L<Gid>>>`
 * * `C<T:D<Ety,L<Int>>>`
 * * `C<T:D<Ety,L<Bol>>>`
 * * `C<T:D<Ety,L<Flt>>>`
 * * `C<T:D<Ety,L<Str>>>`
 * * `C<T:D<Ety,L<Fct>>>`
 * * `C<T:D<Ety,L<Vec>>>`
 * * `C<T:D<Ety,L<Cfg>>>`
 * * `C<T:D<Gid,Ety>>`
 * * `C<T:D<Gid,Gid>>`
 * * `C<T:D<Gid,Int>>`
 * * `C<T:D<Gid,Bol>>`
 * * `C<T:D<Gid,Flt>>`
 * * `C<T:D<Gid,Str>>`
 * * `C<T:D<Gid,Fct>>`
 * * `C<T:D<Gid,Vec>>`
 * * `C<T:D<Gid,Cfg>>`
 * * `C<T:D<Gid,Pfb>>`
 * * `C<T:D<Gid,L<Ety>>>`
 * * `C<T:D<Gid,L<Gid>>>`
 * * `C<T:D<Gid,L<Int>>>`
 * * `C<T:D<Gid,L<Bol>>>`
 * * `C<T:D<Gid,L<Flt>>>`
 * * `C<T:D<Gid,L<Str>>>`
 * * `C<T:D<Gid,L<Fct>>>`
 * * `C<T:D<Gid,L<Vec>>>`
 * * `C<T:D<Gid,L<Cfg>>>`
 * * `C<T:D<Int,Ety>>`
 * * `C<T:D<Int,Gid>>`
 * * `C<T:D<Int,Int>>`
 * * `C<T:D<Int,Bol>>`
 * * `C<T:D<Int,Flt>>`
 * * `C<T:D<Int,Str>>`
 * * `C<T:D<Int,Fct>>`
 * * `C<T:D<Int,Vec>>`
 * * `C<T:D<Int,Cfg>>`
 * * `C<T:D<Int,Pfb>>`
 * * `C<T:D<Int,L<Ety>>>`
 * * `C<T:D<Int,L<Gid>>>`
 * * `C<T:D<Int,L<Int>>>`
 * * `C<T:D<Int,L<Bol>>>`
 * * `C<T:D<Int,L<Flt>>>`
 * * `C<T:D<Int,L<Str>>>`
 * * `C<T:D<Int,L<Fct>>>`
 * * `C<T:D<Int,L<Vec>>>`
 * * `C<T:D<Int,L<Cfg>>>`
 * * `C<T:D<Str,Ety>>`
 * * `C<T:D<Str,Gid>>`
 * * `C<T:D<Str,Int>>`
 * * `C<T:D<Str,Bol>>`
 * * `C<T:D<Str,Flt>>`
 * * `C<T:D<Str,Str>>`
 * * `C<T:D<Str,Fct>>`
 * * `C<T:D<Str,Vec>>`
 * * `C<T:D<Str,Cfg>>`
 * * `C<T:D<Str,Pfb>>`
 * * `C<T:D<Str,L<Ety>>>`
 * * `C<T:D<Str,L<Gid>>>`
 * * `C<T:D<Str,L<Int>>>`
 * * `C<T:D<Str,L<Bol>>>`
 * * `C<T:D<Str,L<Flt>>>`
 * * `C<T:D<Str,L<Str>>>`
 * * `C<T:D<Str,L<Fct>>>`
 * * `C<T:D<Str,L<Vec>>>`
 * * `C<T:D<Str,L<Cfg>>>`
 * * `C<T:D<Fct,Ety>>`
 * * `C<T:D<Fct,Gid>>`
 * * `C<T:D<Fct,Int>>`
 * * `C<T:D<Fct,Bol>>`
 * * `C<T:D<Fct,Flt>>`
 * * `C<T:D<Fct,Str>>`
 * * `C<T:D<Fct,Fct>>`
 * * `C<T:D<Fct,Vec>>`
 * * `C<T:D<Fct,Cfg>>`
 * * `C<T:D<Fct,Pfb>>`
 * * `C<T:D<Fct,L<Ety>>>`
 * * `C<T:D<Fct,L<Gid>>>`
 * * `C<T:D<Fct,L<Int>>>`
 * * `C<T:D<Fct,L<Bol>>>`
 * * `C<T:D<Fct,L<Flt>>>`
 * * `C<T:D<Fct,L<Str>>>`
 * * `C<T:D<Fct,L<Fct>>>`
 * * `C<T:D<Fct,L<Vec>>>`
 * * `C<T:D<Fct,L<Cfg>>>`
 * * `C<T:D<Cfg,Ety>>`
 * * `C<T:D<Cfg,Gid>>`
 * * `C<T:D<Cfg,Int>>`
 * * `C<T:D<Cfg,Bol>>`
 * * `C<T:D<Cfg,Flt>>`
 * * `C<T:D<Cfg,Str>>`
 * * `C<T:D<Cfg,Fct>>`
 * * `C<T:D<Cfg,Vec>>`
 * * `C<T:D<Cfg,Cfg>>`
 * * `C<T:D<Cfg,Pfb>>`
 * * `C<T:D<Cfg,L<Ety>>>`
 * * `C<T:D<Cfg,L<Gid>>>`
 * * `C<T:D<Cfg,L<Int>>>`
 * * `C<T:D<Cfg,L<Bol>>>`
 * * `C<T:D<Cfg,L<Flt>>>`
 * * `C<T:D<Cfg,L<Str>>>`
 * * `C<T:D<Cfg,L<Fct>>>`
 * * `C<T:D<Cfg,L<Vec>>>`
 * * `C<T:D<Cfg,L<Cfg>>>`
 * * `C<T:D<Pfb,Ety>>`
 * * `C<T:D<Pfb,Gid>>`
 * * `C<T:D<Pfb,Int>>`
 * * `C<T:D<Pfb,Bol>>`
 * * `C<T:D<Pfb,Flt>>`
 * * `C<T:D<Pfb,Str>>`
 * * `C<T:D<Pfb,Fct>>`
 * * `C<T:D<Pfb,Vec>>`
 * * `C<T:D<Pfb,Cfg>>`
 * * `C<T:D<Pfb,Pfb>>`
 * * `C<T:D<Pfb,L<Ety>>>`
 * * `C<T:D<Pfb,L<Gid>>>`
 * * `C<T:D<Pfb,L<Int>>>`
 * * `C<T:D<Pfb,L<Bol>>>`
 * * `C<T:D<Pfb,L<Flt>>>`
 * * `C<T:D<Pfb,L<Str>>>`
 * * `C<T:D<Pfb,L<Fct>>>`
 * * `C<T:D<Pfb,L<Vec>>>`
 * * `C<T:D<Pfb,L<Cfg>>>`
 */
  Hidden_Trigger_OnNativeValueChange: "Hidden.Trigger.On_Native_Value_Change",

  /**
 * **Native Setting Custom Value** `(Hidden.Execution.Set_Native_Value)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **445** || 🖥️ Server || 🚫 Hidden || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `Input0` ||  |
 * | 1 || 🔹 || `Str` || `Input1` ||  |
 * | 2 || 🔷 || **`R<T>`** || `Input2` ||  |
 * | 3 || 🔹 || `Bol` || `Input3` ||  |
 * | 4 || 🔹 || `Bol` || `Input4` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:L<Int>>`
 * * `C<T:L<Str>>`
 * * `C<T:L<Ety>>`
 * * `C<T:L<Gid>>`
 * * `C<T:L<Flt>>`
 * * `C<T:L<Vec>>`
 * * `C<T:L<Bol>>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:L<Cfg>>`
 * * `C<T:L<Pfb>>`
 * * `C<T:Fct>`
 * * `C<T:L<Fct>>`
 * * `C<T:D<Ety,Ety>>`
 * * `C<T:D<Ety,Gid>>`
 * * `C<T:D<Ety,Int>>`
 * * `C<T:D<Ety,Bol>>`
 * * `C<T:D<Ety,Flt>>`
 * * `C<T:D<Ety,Str>>`
 * * `C<T:D<Ety,Fct>>`
 * * `C<T:D<Ety,Vec>>`
 * * `C<T:D<Ety,Cfg>>`
 * * `C<T:D<Ety,Pfb>>`
 * * `C<T:D<Ety,L<Ety>>>`
 * * `C<T:D<Ety,L<Gid>>>`
 * * `C<T:D<Ety,L<Int>>>`
 * * `C<T:D<Ety,L<Bol>>>`
 * * `C<T:D<Ety,L<Flt>>>`
 * * `C<T:D<Ety,L<Str>>>`
 * * `C<T:D<Ety,L<Fct>>>`
 * * `C<T:D<Ety,L<Vec>>>`
 * * `C<T:D<Ety,L<Cfg>>>`
 * * `C<T:D<Gid,Ety>>`
 * * `C<T:D<Gid,Gid>>`
 * * `C<T:D<Gid,Int>>`
 * * `C<T:D<Gid,Bol>>`
 * * `C<T:D<Gid,Flt>>`
 * * `C<T:D<Gid,Str>>`
 * * `C<T:D<Gid,Fct>>`
 * * `C<T:D<Gid,Vec>>`
 * * `C<T:D<Gid,Cfg>>`
 * * `C<T:D<Gid,Pfb>>`
 * * `C<T:D<Gid,L<Ety>>>`
 * * `C<T:D<Gid,L<Gid>>>`
 * * `C<T:D<Gid,L<Int>>>`
 * * `C<T:D<Gid,L<Bol>>>`
 * * `C<T:D<Gid,L<Flt>>>`
 * * `C<T:D<Gid,L<Str>>>`
 * * `C<T:D<Gid,L<Fct>>>`
 * * `C<T:D<Gid,L<Vec>>>`
 * * `C<T:D<Gid,L<Cfg>>>`
 * * `C<T:D<Int,Ety>>`
 * * `C<T:D<Int,Gid>>`
 * * `C<T:D<Int,Int>>`
 * * `C<T:D<Int,Bol>>`
 * * `C<T:D<Int,Flt>>`
 * * `C<T:D<Int,Str>>`
 * * `C<T:D<Int,Fct>>`
 * * `C<T:D<Int,Vec>>`
 * * `C<T:D<Int,Cfg>>`
 * * `C<T:D<Int,Pfb>>`
 * * `C<T:D<Int,L<Ety>>>`
 * * `C<T:D<Int,L<Gid>>>`
 * * `C<T:D<Int,L<Int>>>`
 * * `C<T:D<Int,L<Bol>>>`
 * * `C<T:D<Int,L<Flt>>>`
 * * `C<T:D<Int,L<Str>>>`
 * * `C<T:D<Int,L<Fct>>>`
 * * `C<T:D<Int,L<Vec>>>`
 * * `C<T:D<Int,L<Cfg>>>`
 * * `C<T:D<Str,Ety>>`
 * * `C<T:D<Str,Gid>>`
 * * `C<T:D<Str,Int>>`
 * * `C<T:D<Str,Bol>>`
 * * `C<T:D<Str,Flt>>`
 * * `C<T:D<Str,Str>>`
 * * `C<T:D<Str,Fct>>`
 * * `C<T:D<Str,Vec>>`
 * * `C<T:D<Str,Cfg>>`
 * * `C<T:D<Str,Pfb>>`
 * * `C<T:D<Str,L<Ety>>>`
 * * `C<T:D<Str,L<Gid>>>`
 * * `C<T:D<Str,L<Int>>>`
 * * `C<T:D<Str,L<Bol>>>`
 * * `C<T:D<Str,L<Flt>>>`
 * * `C<T:D<Str,L<Str>>>`
 * * `C<T:D<Str,L<Fct>>>`
 * * `C<T:D<Str,L<Vec>>>`
 * * `C<T:D<Str,L<Cfg>>>`
 * * `C<T:D<Fct,Ety>>`
 * * `C<T:D<Fct,Gid>>`
 * * `C<T:D<Fct,Int>>`
 * * `C<T:D<Fct,Bol>>`
 * * `C<T:D<Fct,Flt>>`
 * * `C<T:D<Fct,Str>>`
 * * `C<T:D<Fct,Fct>>`
 * * `C<T:D<Fct,Vec>>`
 * * `C<T:D<Fct,Cfg>>`
 * * `C<T:D<Fct,Pfb>>`
 * * `C<T:D<Fct,L<Ety>>>`
 * * `C<T:D<Fct,L<Gid>>>`
 * * `C<T:D<Fct,L<Int>>>`
 * * `C<T:D<Fct,L<Bol>>>`
 * * `C<T:D<Fct,L<Flt>>>`
 * * `C<T:D<Fct,L<Str>>>`
 * * `C<T:D<Fct,L<Fct>>>`
 * * `C<T:D<Fct,L<Vec>>>`
 * * `C<T:D<Fct,L<Cfg>>>`
 * * `C<T:D<Cfg,Ety>>`
 * * `C<T:D<Cfg,Gid>>`
 * * `C<T:D<Cfg,Int>>`
 * * `C<T:D<Cfg,Bol>>`
 * * `C<T:D<Cfg,Flt>>`
 * * `C<T:D<Cfg,Str>>`
 * * `C<T:D<Cfg,Fct>>`
 * * `C<T:D<Cfg,Vec>>`
 * * `C<T:D<Cfg,Cfg>>`
 * * `C<T:D<Cfg,Pfb>>`
 * * `C<T:D<Cfg,L<Ety>>>`
 * * `C<T:D<Cfg,L<Gid>>>`
 * * `C<T:D<Cfg,L<Int>>>`
 * * `C<T:D<Cfg,L<Bol>>>`
 * * `C<T:D<Cfg,L<Flt>>>`
 * * `C<T:D<Cfg,L<Str>>>`
 * * `C<T:D<Cfg,L<Fct>>>`
 * * `C<T:D<Cfg,L<Vec>>>`
 * * `C<T:D<Cfg,L<Cfg>>>`
 * * `C<T:D<Pfb,Ety>>`
 * * `C<T:D<Pfb,Gid>>`
 * * `C<T:D<Pfb,Int>>`
 * * `C<T:D<Pfb,Bol>>`
 * * `C<T:D<Pfb,Flt>>`
 * * `C<T:D<Pfb,Str>>`
 * * `C<T:D<Pfb,Fct>>`
 * * `C<T:D<Pfb,Vec>>`
 * * `C<T:D<Pfb,Cfg>>`
 * * `C<T:D<Pfb,Pfb>>`
 * * `C<T:D<Pfb,L<Ety>>>`
 * * `C<T:D<Pfb,L<Gid>>>`
 * * `C<T:D<Pfb,L<Int>>>`
 * * `C<T:D<Pfb,L<Bol>>>`
 * * `C<T:D<Pfb,L<Flt>>>`
 * * `C<T:D<Pfb,L<Str>>>`
 * * `C<T:D<Pfb,L<Fct>>>`
 * * `C<T:D<Pfb,L<Vec>>>`
 * * `C<T:D<Pfb,L<Cfg>>>`
 */
  Hidden_Execution_SetNativeValue: "Hidden.Execution.Set_Native_Value",

  /**
 * **Native Query Custom Value** `(Hidden.Query.Get_Native_Value)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **459** || 🖥️ Server || 🚫 Hidden || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Unk` || `Input0` ||  |
 * | 1 || 🔹 || `Str` || `Input1` ||  |
 * | 2 || 🔹 || `Bol` || `Input2` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `Output0` ||  |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:L<Int>>`
 * * `C<T:L<Str>>`
 * * `C<T:L<Ety>>`
 * * `C<T:L<Gid>>`
 * * `C<T:L<Flt>>`
 * * `C<T:L<Vec>>`
 * * `C<T:L<Bol>>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:L<Cfg>>`
 * * `C<T:L<Pfb>>`
 * * `C<T:Fct>`
 * * `C<T:L<Fct>>`
 * * `C<T:D<Ety,Ety>>`
 * * `C<T:D<Ety,Gid>>`
 * * `C<T:D<Ety,Int>>`
 * * `C<T:D<Ety,Bol>>`
 * * `C<T:D<Ety,Flt>>`
 * * `C<T:D<Ety,Str>>`
 * * `C<T:D<Ety,Fct>>`
 * * `C<T:D<Ety,Vec>>`
 * * `C<T:D<Ety,Cfg>>`
 * * `C<T:D<Ety,Pfb>>`
 * * `C<T:D<Ety,L<Ety>>>`
 * * `C<T:D<Ety,L<Gid>>>`
 * * `C<T:D<Ety,L<Int>>>`
 * * `C<T:D<Ety,L<Bol>>>`
 * * `C<T:D<Ety,L<Flt>>>`
 * * `C<T:D<Ety,L<Str>>>`
 * * `C<T:D<Ety,L<Fct>>>`
 * * `C<T:D<Ety,L<Vec>>>`
 * * `C<T:D<Ety,L<Cfg>>>`
 * * `C<T:D<Gid,Ety>>`
 * * `C<T:D<Gid,Gid>>`
 * * `C<T:D<Gid,Int>>`
 * * `C<T:D<Gid,Bol>>`
 * * `C<T:D<Gid,Flt>>`
 * * `C<T:D<Gid,Str>>`
 * * `C<T:D<Gid,Fct>>`
 * * `C<T:D<Gid,Vec>>`
 * * `C<T:D<Gid,Cfg>>`
 * * `C<T:D<Gid,Pfb>>`
 * * `C<T:D<Gid,L<Ety>>>`
 * * `C<T:D<Gid,L<Gid>>>`
 * * `C<T:D<Gid,L<Int>>>`
 * * `C<T:D<Gid,L<Bol>>>`
 * * `C<T:D<Gid,L<Flt>>>`
 * * `C<T:D<Gid,L<Str>>>`
 * * `C<T:D<Gid,L<Fct>>>`
 * * `C<T:D<Gid,L<Vec>>>`
 * * `C<T:D<Gid,L<Cfg>>>`
 * * `C<T:D<Int,Ety>>`
 * * `C<T:D<Int,Gid>>`
 * * `C<T:D<Int,Int>>`
 * * `C<T:D<Int,Bol>>`
 * * `C<T:D<Int,Flt>>`
 * * `C<T:D<Int,Str>>`
 * * `C<T:D<Int,Fct>>`
 * * `C<T:D<Int,Vec>>`
 * * `C<T:D<Int,Cfg>>`
 * * `C<T:D<Int,Pfb>>`
 * * `C<T:D<Int,L<Ety>>>`
 * * `C<T:D<Int,L<Gid>>>`
 * * `C<T:D<Int,L<Int>>>`
 * * `C<T:D<Int,L<Bol>>>`
 * * `C<T:D<Int,L<Flt>>>`
 * * `C<T:D<Int,L<Str>>>`
 * * `C<T:D<Int,L<Fct>>>`
 * * `C<T:D<Int,L<Vec>>>`
 * * `C<T:D<Int,L<Cfg>>>`
 * * `C<T:D<Str,Ety>>`
 * * `C<T:D<Str,Gid>>`
 * * `C<T:D<Str,Int>>`
 * * `C<T:D<Str,Bol>>`
 * * `C<T:D<Str,Flt>>`
 * * `C<T:D<Str,Str>>`
 * * `C<T:D<Str,Fct>>`
 * * `C<T:D<Str,Vec>>`
 * * `C<T:D<Str,Cfg>>`
 * * `C<T:D<Str,Pfb>>`
 * * `C<T:D<Str,L<Ety>>>`
 * * `C<T:D<Str,L<Gid>>>`
 * * `C<T:D<Str,L<Int>>>`
 * * `C<T:D<Str,L<Bol>>>`
 * * `C<T:D<Str,L<Flt>>>`
 * * `C<T:D<Str,L<Str>>>`
 * * `C<T:D<Str,L<Fct>>>`
 * * `C<T:D<Str,L<Vec>>>`
 * * `C<T:D<Str,L<Cfg>>>`
 * * `C<T:D<Fct,Ety>>`
 * * `C<T:D<Fct,Gid>>`
 * * `C<T:D<Fct,Int>>`
 * * `C<T:D<Fct,Bol>>`
 * * `C<T:D<Fct,Flt>>`
 * * `C<T:D<Fct,Str>>`
 * * `C<T:D<Fct,Fct>>`
 * * `C<T:D<Fct,Vec>>`
 * * `C<T:D<Fct,Cfg>>`
 * * `C<T:D<Fct,Pfb>>`
 * * `C<T:D<Fct,L<Ety>>>`
 * * `C<T:D<Fct,L<Gid>>>`
 * * `C<T:D<Fct,L<Int>>>`
 * * `C<T:D<Fct,L<Bol>>>`
 * * `C<T:D<Fct,L<Flt>>>`
 * * `C<T:D<Fct,L<Str>>>`
 * * `C<T:D<Fct,L<Fct>>>`
 * * `C<T:D<Fct,L<Vec>>>`
 * * `C<T:D<Fct,L<Cfg>>>`
 * * `C<T:D<Cfg,Ety>>`
 * * `C<T:D<Cfg,Gid>>`
 * * `C<T:D<Cfg,Int>>`
 * * `C<T:D<Cfg,Bol>>`
 * * `C<T:D<Cfg,Flt>>`
 * * `C<T:D<Cfg,Str>>`
 * * `C<T:D<Cfg,Fct>>`
 * * `C<T:D<Cfg,Vec>>`
 * * `C<T:D<Cfg,Cfg>>`
 * * `C<T:D<Cfg,Pfb>>`
 * * `C<T:D<Cfg,L<Ety>>>`
 * * `C<T:D<Cfg,L<Gid>>>`
 * * `C<T:D<Cfg,L<Int>>>`
 * * `C<T:D<Cfg,L<Bol>>>`
 * * `C<T:D<Cfg,L<Flt>>>`
 * * `C<T:D<Cfg,L<Str>>>`
 * * `C<T:D<Cfg,L<Fct>>>`
 * * `C<T:D<Cfg,L<Vec>>>`
 * * `C<T:D<Cfg,L<Cfg>>>`
 * * `C<T:D<Pfb,Ety>>`
 * * `C<T:D<Pfb,Gid>>`
 * * `C<T:D<Pfb,Int>>`
 * * `C<T:D<Pfb,Bol>>`
 * * `C<T:D<Pfb,Flt>>`
 * * `C<T:D<Pfb,Str>>`
 * * `C<T:D<Pfb,Fct>>`
 * * `C<T:D<Pfb,Vec>>`
 * * `C<T:D<Pfb,Cfg>>`
 * * `C<T:D<Pfb,Pfb>>`
 * * `C<T:D<Pfb,L<Ety>>>`
 * * `C<T:D<Pfb,L<Gid>>>`
 * * `C<T:D<Pfb,L<Int>>>`
 * * `C<T:D<Pfb,L<Bol>>>`
 * * `C<T:D<Pfb,L<Flt>>>`
 * * `C<T:D<Pfb,L<Str>>>`
 * * `C<T:D<Pfb,L<Fct>>>`
 * * `C<T:D<Pfb,L<Vec>>>`
 * * `C<T:D<Pfb,L<Cfg>>>`
 */
  Hidden_Query_GetNativeValue: "Hidden.Query.Get_Native_Value",

  /**
 * **根据特效资产清除特效** `(Execution.Special_Effect.Stop_By_Asset)`
 *
 * - 清除指定目标实体上所有使用该特效资产的特效。仅限循环特效
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **473** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Cfg` || `effect_asset` || 特效资产: 该特效的标识 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_SpecialEffect_StopByAsset: "Execution.Special_Effect.Stop_By_Asset",

  /**
 * **三维向量旋转** `(Arithmetic.Math.Vector_Rotate)`
 *
 * - 将被旋转的三维向量，按照旋转所表示的欧拉角进行旋转后返回结果
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **474** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `rotation` || 旋转: 该输入的三维向量指代一个特定的旋转欧拉角 |
 * | 1 || 🔹 || `Vec` || `vector` || 被旋转的三维向量 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || 结果 |
 */
  Arithmetic_Math_VectorRotate: "Arithmetic.Math.Vector_Rotate",

  /**
 * **枚举是否相等** `(Arithmetic.General.Enum_Equal)`
 *
 * - 确认枚举的类型后，判断两个输入的值是否相等
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **475** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `enum1` || 枚举1 |
 * | 1 || 🔷 || **`R<T>`** || `enum2` || 枚举2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 结果: 相等输出“是”，不相等输出“否” |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:E<OCMP>>`
 * * `C<T:E<LOGC>>`
 * * `C<T:E<MATH>>`
 * * `C<T:E<SHAP>>`
 * * `C<T:E<SURV>>`
 * * `C<T:E<SORT>>`
 * * `C<T:E<ROND>>`
 * * `C<T:E<TCOV>>`
 * * `C<T:E<MPPT>>`
 * * `C<T:E<MOTN>>`
 * * `C<T:E<FOLO>>`
 * * `C<T:E<SYSC>>`
 * * `C<T:E<ELMT>>`
 * * `C<T:E<ENTY>>`
 * * `C<T:E<STAD>>`
 * * `C<T:E<STRE>>`
 * * `C<T:E<STRS>>`
 * * `C<T:E<RPSS>>`
 * * `C<T:E<DWNR>>`
 * * `C<T:E<TRIG>>`
 * * `C<T:E<DDVT>>`
 * * `C<T:E<DDOR>>`
 * * `C<T:E<UICG>>`
 * * `C<T:E<TGTT>>`
 * * `C<T:E<TIGR>>`
 * * `C<T:E<HITT>>`
 * * `C<T:E<ATKT>>`
 * * `C<T:E<HITP>>`
 * * `C<T:E<CIRS>>`
 * * `C<T:E<GMOD>>`
 * * `C<T:E<IDVT>>`
 * * `C<T:E<SLOT>>`
 * * `C<T:E<SNDM>>`
 * * `C<T:E<SLCR>>`
 * * `C<T:E<SETL>>`
 * * `C<T:E<ITMC>>`
 * * `C<T:E<LOOT>>`
 * * `C<T:E<DRFM>>`
 * * `C<T:E<REAC>>`
 */
  Arithmetic_General_EnumEqual: "Arithmetic.General.Enum_Equal",

  /**
 * **三维向量内积** `(Arithmetic.Math.Vector_Dot)`
 *
 * - 计算两个输入三维向量的内积（点乘）
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **505** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `a` || 三维向量1 |
 * | 1 || 🔹 || `Vec` || `b` || 三维向量2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || 结果 |
 */
  Arithmetic_Math_VectorDot: "Arithmetic.Math.Vector_Dot",

  /**
 * **三维向量外积** `(Arithmetic.Math.Vector_Cross)`
 *
 * - 计算两个三维向量的外积（叉乘）
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **506** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `a` || 三维向量1 |
 * | 1 || 🔹 || `Vec` || `b` || 三维向量2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || 结果 |
 */
  Arithmetic_Math_VectorCross: "Arithmetic.Math.Vector_Cross",

  /**
 * **查询实体是否在场** `(Query.Entity_Related.Is_Active)`
 *
 * - 查询指定实体是否在场
 * - 注意角色实体即使处于倒下状态，仍然认为在场
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **507** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `is_alive` || 是否在场 |
 */
  Query_EntityRelated_IsActive: "Query.Entity_Related.Is_Active",

  /**
 * **查询实体是否具有单位状态** `(Query.Unit_Status.Has_Status)`
 *
 * - 查询指定实体是否具有特定配置ID的单位状态
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **508** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Cfg` || `config_id` || 单位状态配置ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `exists` || 是否具有 |
 */
  Query_UnitStatus_HasStatus: "Query.Unit_Status.Has_Status",

  /**
 * **列表迭代循环** `(Execution.List_Operation.For_Each)`
 *
 * - 按照列表顺序遍历循环指定列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **509** || 🖥️ Server || ⚙️ Execution || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `Start` ||  |
 * | - || ▶️ || - || `Break` ||  |
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || 迭代列表: 被遍历循环的列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `Iteration` ||  |
 * | - || ⏩ || - || `End` ||  |
 * | 0 || 🔶 || **`R<T>`** || `item` || 迭代值: 列表中的每个值 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Bol>`
 * * `C<T:Ety>`
 * * `C<T:Flt>`
 * * `C<T:Gid>`
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Vec>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:Fct>`
 */
  Execution_ListOperation_ForEach: "Execution.List_Operation.For_Each",

  /**
 * **获取实体向前向量** `(Query.Entity_Related.Get_Forward)`
 *
 * - 获取指定实体的向前向量（即该实体本地坐标系下的z轴正方向朝向）
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **516** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `forward` || 向前向量 |
 */
  Query_EntityRelated_GetForward: "Query.Entity_Related.Get_Forward",

  /**
 * **获取实体向右向量** `(Query.Entity_Related.Get_Right)`
 *
 * - 获取指定实体的向右向量（即该实体本地坐标系下的x轴正方向朝向）
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **517** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `right` || 向右向量 |
 */
  Query_EntityRelated_GetRight: "Query.Entity_Related.Get_Right",

  /**
 * **获取实体向上向量** `(Query.Entity_Related.Get_Up)`
 *
 * - 获取指定实体的向上向量（即该实体本地坐标系下的y轴正方向朝向）
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **518** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `up` || 向上向量 |
 */
  Query_EntityRelated_GetUp: "Query.Entity_Related.Get_Up",

  /**
 * **方向向量转旋转** `(Arithmetic.Math.Vector_To_Rotation)`
 *
 * - 给定向前向量和向上向量，转化为欧拉角
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **519** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `rotation` || 向前向量: 表示单位期望的朝向 |
 * | 1 || 🔹 || `Vec` || `dir` || 向上向量: 定义单位的上方向（用于确定旋转的旋转角度），默认值为世界坐标系Y轴正方向 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || 旋转 |
 */
  Arithmetic_Math_VectorToRotation: "Arithmetic.Math.Vector_To_Rotation",

  /**
 * **添加朝向目标旋转型基础运动器** `(Execution.Motion_Device.Add_Target_Rotation)`
 *
 * - 在关卡运行时为目标实体动态添加一个朝向目标旋转型基础运动器
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **520** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Str` || `mover_name` || 运动器名称: 该运动器的标识 |
 * | 2 || 🔹 || `Flt` || `duration` || 运动器时长: 该运动器生效的时长 |
 * | 3 || 🔹 || `Vec` || `target_euler` || 目标角度: 绝对角度 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_MotionDevice_AddTargetRotation: "Execution.Motion_Device.Add_Target_Rotation",

  /**
 * **移除控件组库内界面控件组** `(Execution.UI_Control_Group.Remove_Group)`
 *
 * - 可以在目标玩家的界面布局上移除已通过节点【激活控件组库内界面控件组】激活的界面控件组
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **521** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player` || 目标玩家: 生效的玩家实体 |
 * | 1 || 🔹 || `Int` || `group_index` || 界面控件组索引: 界面控件组的标识 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_UIControlGroup_RemoveGroup: "Execution.UI_Control_Group.Remove_Group",

  /**
 * **获取物件属性** `(Query.Entity_Related.Get_Obj_Attr)`
 *
 * - 获取物件的相关基础属性
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **580** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `object_entity` || 物件实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `level` || 等级 |
 * | 1 || 🔸 || `Flt` || `hp_cur` || 当前生命值 |
 * | 2 || 🔸 || `Flt` || `hp_max` || 上限生命值 |
 * | 3 || 🔸 || `Flt` || `atk_cur` || 当前攻击力 |
 * | 4 || 🔸 || `Flt` || `atk_base` || 基础攻击力 |
 * | 5 || 🔸 || `Flt` || `def_cur` || 当前防御力 |
 * | 6 || 🔸 || `Flt` || `def_base` || 基础防御力 |
 */
  Query_EntityRelated_GetObjAttr: "Query.Entity_Related.Get_Obj_Attr",

  /**
 * **恢复生命** `(Execution.Combat.Recover_HP)`
 *
 * - 通过能力单元为指定目标实体恢复生命
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **583** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 恢复生命的目标 |
 * | 1 || 🔹 || `Flt` || `heal_amount` || 恢复量: 该次恢复生命的恢复量 |
 * | 2 || 🔹 || `Str` || `ability_unit` || 能力单元: 引用的能力单元。需要配置在此节点图所关联的实体上 |
 * | 3 || 🔹 || `Bol` || `override_ability_unit` || 是否覆写能力单元配置: 为“是”时，恢复量会覆盖能力单元中的同名配置。为“否”时，使用能力单元中的配置 |
 * | 4 || 🔹 || `Ety` || `heal_source` || 恢复发起者实体: 决定了该次恢复行为的发起者实体，默认为该节点图所关联的实体。影响【被恢复生命值时】、【发起恢复生命值时】等事件中判定的恢复者 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Combat_RecoverHP: "Execution.Combat.Recover_HP",

  /**
 * **被恢复生命值时** `(Trigger.Combat.On_HP_Recover)`
 *
 * - 实体被恢复生命值时，触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **584** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Ety` || `healer` || 治疗者实体 |
 * | 3 || 🔸 || `Flt` || `heal_amount` || 恢复量: 实际的恢复量。如果实体恢复前并未损失生命值，则恢复量为0 |
 * | 4 || 🔸 || `L<Str>` || `heal_tags` || 恢复标签列表 |
 */
  Trigger_Combat_OnHPRecover: "Trigger.Combat.On_HP_Recover",

  /**
 * **发起恢复生命值时** `(Trigger.Combat.On_HP_Recovery_Start)`
 *
 * - 实体向其他实体恢复生命值时，发起者实体上触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **585** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Ety` || `heal_target` || 恢复目标实体 |
 * | 3 || 🔸 || `Flt` || `heal_amount` || 恢复量: 实际的恢复量。如果目标实体恢复前并未损失生命值，则恢复量为0 |
 * | 4 || 🔸 || `L<Str>` || `heal_tags` || 恢复标签列表 |
 */
  Trigger_Combat_OnHPRecoveryStart: "Trigger.Combat.On_HP_Recovery_Start",

  /**
 * **实体添加单位标签** `(Execution.Unit_Tag.Add_Tag)`
 *
 * - 对指定实体添加单位标签
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **586** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Int` || `tag_index` || 单位标签索引 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_UnitTag_AddTag: "Execution.Unit_Tag.Add_Tag",

  /**
 * **实体移除单位标签** `(Execution.Unit_Tag.Remove_Tag)`
 *
 * - 对指定实体移除单位标签
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **587** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Int` || `tag_index` || 单位标签索引 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_UnitTag_RemoveTag: "Execution.Unit_Tag.Remove_Tag",

  /**
 * **实体清空单位标签** `(Execution.Unit_Tag.Clear_Tags)`
 *
 * - 对指定实体清空单位标签
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **588** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_UnitTag_ClearTags: "Execution.Unit_Tag.Clear_Tags",

  /**
 * **获取实体单位标签列表** `(Query.Unit_Tag.Get_Tags)`
 *
 * - 获取目标实体上携带的所有单位标签组成的列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **589** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `unit_tags` || 单位标签列表 |
 */
  Query_UnitTag_GetTags: "Query.Unit_Tag.Get_Tags",

  /**
 * **获取单位标签的实体列表** `(Query.Unit_Tag.Get_By_Tag)`
 *
 * - 获取在场所有携带该单位标签的实体列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **590** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `unit_tag_index` || 单位标签索引 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `entities` || 实体列表 |
 */
  Query_UnitTag_GetByTag: "Query.Unit_Tag.Get_By_Tag",

  /**
 * **关闭指定音效播放器** `(Execution.Sound_Effect.Close_Player)`
 *
 * - 关闭指定目标实体上的音效播放器组件对应序号的音效播放器
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **591** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Int` || `player_index` || 音效播放器序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_SoundEffect_ClosePlayer: "Execution.Sound_Effect.Close_Player",

  /**
 * **启动/暂停指定音效播放器** `(Execution.Sound_Effect.Toggle_Player)`
 *
 * - 可以修改指定目标实体上的音效播放器组件对应序号的音效播放器状态，仅当该音效被设置为循环播放时有效，单次播放的音效该节点不生效
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **592** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Int` || `player_index` || 音效播放器序号 |
 * | 2 || 🔹 || `Bol` || `should_resume` || 是否恢复 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_SoundEffect_TogglePlayer: "Execution.Sound_Effect.Toggle_Player",

  /**
 * **调整指定音效播放器** `(Execution.Sound_Effect.Adjust_Player)`
 *
 * - 可以调整指定目标实体上的音效播放器组件对应序号的音效播放器的音量和播放速度
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **593** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Int` || `player_index` || 音效播放器序号 |
 * | 2 || 🔹 || `Int` || `volume` || 音量 |
 * | 3 || 🔹 || `Flt` || `playback_rate` || 播放速度 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_SoundEffect_AdjustPlayer: "Execution.Sound_Effect.Adjust_Player",

  /**
 * **添加音效播放器** `(Execution.Sound_Effect.Add_Player)`
 *
 * - 动态添加一个音效播放器，需要单位持有音效播放器组件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **594** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Int` || `audio_asset_index` || 音效资产索引 |
 * | 2 || 🔹 || `Int` || `volume` || 音量 |
 * | 3 || 🔹 || `Flt` || `playback_rate` || 播放速度 |
 * | 4 || 🔹 || `Bol` || `loop` || 是否循环播放 |
 * | 5 || 🔹 || `Flt` || `loop_interval` || 循环间隔时间 |
 * | 6 || 🔹 || `Bol` || `is3_d` || 是否为3D音效 |
 * | 7 || 🔹 || `Flt` || `radius` || 范围半径 |
 * | 8 || 🔹 || `E<SNDM>` || `attenuation` || 衰减方式 |
 * | 9 || 🔹 || `Str` || `socket_name` || 挂接点名称 |
 * | 10 || 🔹 || `Vec` || `socket_offset` || 挂接点偏移 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Int` || `created_player_index` || 音效播放器序号 |
 */
  Execution_SoundEffect_AddPlayer: "Execution.Sound_Effect.Add_Player",

  /**
 * **启动/暂停玩家背景音乐** `(Execution.Sound_Effect.Toggle_BGM)`
 *
 * - 修改对应玩家的背景音乐状态
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **595** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的玩家实体 |
 * | 1 || 🔹 || `Bol` || `should_resume` || 是否恢复 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_SoundEffect_ToggleBGM: "Execution.Sound_Effect.Toggle_BGM",

  /**
 * **调整玩家背景音乐音量** `(Execution.Sound_Effect.Set_BGM_Volume)`
 *
 * - 调整玩家背景音乐音量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **596** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的玩家实体 |
 * | 1 || 🔹 || `Int` || `volume` || 音量 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_SoundEffect_SetBGMVolume: "Execution.Sound_Effect.Set_BGM_Volume",

  /**
 * **修改玩家背景音乐** `(Execution.Sound_Effect.Set_BGM)`
 *
 * - 修改玩家背景音乐相关参数
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **597** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的玩家实体 |
 * | 1 || 🔹 || `Int` || `bgm_index` || 背景音乐索引 |
 * | 2 || 🔹 || `Flt` || `start_time` || 开始时间 |
 * | 3 || 🔹 || `Flt` || `end_time` || 结束时间 |
 * | 4 || 🔹 || `Int` || `volume` || 音量 |
 * | 5 || 🔹 || `Bol` || `loop` || 是否循环播放 |
 * | 6 || 🔹 || `Flt` || `loop_interval` || 循环播放间隔 |
 * | 7 || 🔹 || `Flt` || `playback_rate` || 播放速度 |
 * | 8 || 🔹 || `Bol` || `allow_join_leave` || 是否允许渐入渐出 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_SoundEffect_SetBGM: "Execution.Sound_Effect.Set_BGM",

  /**
 * **玩家播放单次2D音效** `(Execution.Sound_Effect.Play_2D_One_Shot)`
 *
 * - 玩家播放单次2D音效
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **598** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的玩家实体 |
 * | 1 || 🔹 || `Int` || `audio_asset_index` || 音效资产索引 |
 * | 2 || 🔹 || `Int` || `volume` || 音量 |
 * | 3 || 🔹 || `Flt` || `playback_rate` || 播放速度 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_SoundEffect_Play2DOneShot: "Execution.Sound_Effect.Play_2D_One_Shot",

  /**
 * **设置指定实体的仇恨值** `(Execution.Custom_Aggro.Set_Aggro)`
 *
 * - 仅自定义仇恨模式可用
 * - 设置指定目标实体在指定仇恨拥有者上的仇恨值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **599** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Ety` || `owner_entity` || 仇恨拥有者实体 |
 * | 2 || 🔹 || `Int` || `hatred_value` || 仇恨值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CustomAggro_SetAggro: "Execution.Custom_Aggro.Set_Aggro",

  /**
 * **将目标实体移除出仇恨列表** `(Execution.Custom_Aggro.Remove_Aggro)`
 *
 * - 仅自定义仇恨模式可用
 * - 将目标实体从仇恨拥有者的仇恨列表中移除，可能会导致目标实体脱战
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **600** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Ety` || `owner_entity` || 仇恨拥有者实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CustomAggro_RemoveAggro: "Execution.Custom_Aggro.Remove_Aggro",

  /**
 * **清空指定目标的仇恨列表** `(Execution.Custom_Aggro.Clear_Aggro)`
 *
 * - 仅自定义仇恨模式可用
 * - 清空仇恨拥有者的仇恨列表。可能会导致其脱战
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **601** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `owner_entity` || 仇恨拥有者 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CustomAggro_ClearAggro: "Execution.Custom_Aggro.Clear_Aggro",

  /**
 * **嘲讽目标** `(Execution.Custom_Aggro.Taunt)`
 *
 * - 仅自定义仇恨模式可用
 * - 使嘲讽者实体嘲讽指定目标实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **602** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `taunter` || 嘲讽者实体 |
 * | 1 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CustomAggro_Taunt: "Execution.Custom_Aggro.Taunt",

  /**
 * **查询指定实体的仇恨值** `(Query.Custom_Aggro.Get_Aggro_Value)`
 *
 * - 查询目标实体在仇恨拥有者上的仇恨值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **603** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 查询目标 |
 * | 1 || 🔹 || `Ety` || `owner_entity` || 仇恨拥有者 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `hatred` || 仇恨值 |
 */
  Query_CustomAggro_GetAggroValue: "Query.Custom_Aggro.Get_Aggro_Value",

  /**
 * **查询指定实体的仇恨倍率** `(Query.Custom_Aggro.Get_Multiplier)`
 *
 * - 查询指定实体的仇恨倍率
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **604** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 查询目标 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `multiplier` || 仇恨倍率 |
 */
  Query_CustomAggro_GetMultiplier: "Query.Custom_Aggro.Get_Multiplier",

  /**
 * **查询全局仇恨转移倍率** `(Query.Custom_Aggro.Get_Global_Multiplier)`
 *
 * - 查询全局仇恨转移倍率，在【关卡设置】中可以配置
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **605** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `multiplier` || 全局仇恨转移倍率 |
 */
  Query_CustomAggro_GetGlobalMultiplier: "Query.Custom_Aggro.Get_Global_Multiplier",

  /**
 * **获取指定实体的仇恨目标** `(Query.Custom_Aggro.Get_Aggro_Target)`
 *
 * - 获取指定实体的仇恨目标
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **606** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `owner_entity` || 仇恨拥有者 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `hatred_target` || 仇恨目标 |
 */
  Query_CustomAggro_GetAggroTarget: "Query.Custom_Aggro.Get_Aggro_Target",

  /**
 * **获取目标所在仇恨列表的拥有者列表** `(Query.Custom_Aggro.Get_Aggro_Owners)`
 *
 * - 查询指定目标实体在哪些实体的仇恨列表中
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **607** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 查询目标 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `owners` || 仇恨拥有者列表 |
 */
  Query_CustomAggro_GetAggroOwners: "Query.Custom_Aggro.Get_Aggro_Owners",

  /**
 * **获取以目标为仇恨目标的拥有者列表** `(Query.Custom_Aggro.Get_Targeting_Owners)`
 *
 * - 查询哪些实体以目标实体为仇恨目标
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **608** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `owners` || 仇恨拥有者列表 |
 */
  Query_CustomAggro_GetTargetingOwners: "Query.Custom_Aggro.Get_Targeting_Owners",

  /**
 * **获取指定实体的仇恨列表** `(Query.Custom_Aggro.Get_Aggro_List)`
 *
 * - 获取指定实体的仇恨列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **609** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `hatred_list` || 仇恨列表 |
 */
  Query_CustomAggro_GetAggroList: "Query.Custom_Aggro.Get_Aggro_List",

  /**
 * **查询指定实体是否已入战** `(Query.Custom_Aggro.Is_In_Combat)`
 *
 * - 查询指定实体是否已经入战
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **610** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 查询目标 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `in_combat` || 是否入战 |
 */
  Query_CustomAggro_IsInCombat: "Query.Custom_Aggro.Is_In_Combat",

  /**
 * **仇恨目标变化时** `(Trigger.Custom_Aggro.On_Target_Change)`
 *
 * - 仅自定义仇恨模式可用
 * - 仇恨目标发生变化时，触发该事件
 * - 入战和脱战也可以触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **611** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Ety` || `target_old` || 变化前仇恨目标 |
 * | 3 || 🔸 || `Ety` || `target_new` || 变化后仇恨目标 |
 */
  Trigger_CustomAggro_OnTargetChange: "Trigger.Custom_Aggro.On_Target_Change",

  /**
 * **自身入战时** `(Trigger.Custom_Aggro.On_Enter_Combat)`
 *
 * - 仅自定义仇恨模式可用
 * - 实体自身入战时，触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **612** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 */
  Trigger_CustomAggro_OnEnterCombat: "Trigger.Custom_Aggro.On_Enter_Combat",

  /**
 * **自身脱战时** `(Trigger.Custom_Aggro.On_Leave_Combat)`
 *
 * - 仅自定义仇恨模式可用
 * - 实体自身脱战时，触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **613** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 */
  Trigger_CustomAggro_OnLeaveCombat: "Trigger.Custom_Aggro.On_Leave_Combat",

  /**
 * **查询阵营是否敌对** `(Query.Faction_Related.Is_Hostile)`
 *
 * - 查询两个阵营是否敌对
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **614** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Fct` || `camp_a` || 阵营1 |
 * | 1 || 🔹 || `Fct` || `camp_b` || 阵营2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `hostile` || 是否敌对 |
 */
  Query_FactionRelated_IsHostile: "Query.Faction_Related.Is_Hostile",

  /**
 * **Add Entity Active Nameplate** `(Hidden.Execution.Add_Nameplate)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **615** || 🖥️ Server || 🚫 Hidden || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `Input0` ||  |
 * | 1 || 🔹 || `Cfg` || `Input1` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Hidden_Execution_AddNameplate: "Hidden.Execution.Add_Nameplate",

  /**
 * **Delete Entity Active Nameplate** `(Hidden.Execution.Remove_Nameplate)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **616** || 🖥️ Server || 🚫 Hidden || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `Input0` ||  |
 * | 1 || 🔹 || `Cfg` || `Input1` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Hidden_Execution_RemoveNameplate: "Hidden.Execution.Remove_Nameplate",

  /**
 * **设置实体生效铭牌** `(Execution.Nameplate.Set_Nameplate)`
 *
 * - 直接设置指定目标的生效铭牌列表，在入参列表中的铭牌配置会生效，不在列表中的会失效
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **617** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `L<Cfg>` || `config_id_list` || 铭牌配置ID列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Nameplate_SetNameplate: "Execution.Nameplate.Set_Nameplate",

  /**
 * **切换造物巡逻模板** `(Execution.Creation_Patrol.Switch_Template)`
 *
 * - 造物切换的巡逻模板即刻切换，并按照新的巡逻模板进行移动
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **618** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `construct_entity` || 造物实体 |
 * | 1 || 🔹 || `Int` || `template_index` || 巡逻模板序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CreationPatrol_SwitchTemplate: "Execution.Creation_Patrol.Switch_Template",

  /**
 * **获取当前造物的巡逻模板** `(Query.Creature_Patrol.Get_Patrol_Template)`
 *
 * - 获取指定造物实体的巡逻模板信息
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **619** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `creation` || 造物实体: 运行时的造物实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `template_idx` || 巡逻模板序号: 造物当前生效的巡逻模板序号 |
 * | 1 || 🔸 || `Int` || `path_index` || 路径索引: 造物当前生效的巡逻模板引用的路径索引 |
 * | 2 || 🔸 || `Int` || `target_point` || 目标路点序号: 造物即将前往的路点序号 |
 */
  Query_CreaturePatrol_GetPatrolTemplate: "Query.Creature_Patrol.Get_Patrol_Template",

  /**
 * **造物抵达巡逻路点时** `(Trigger.Creation_Patrol.On_Reach_Waypoint)`
 *
 * - 若在巡逻模板编辑中，勾选了指定路点的**到达发送节点图事件**选项，则会在满足条件时，收到该节点图事件
 * - 该节点图事件只能造物的节点图收到
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **620** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `construct_entity` || 造物实体: 运行时的造物实体 |
 * | 1 || 🔸 || `Gid` || `construct_guid` || 造物GUID: 造物的GUID，若非初始布设的造物，则输出为空 |
 * | 2 || 🔸 || `Int` || `patrol_template_index` || 当前巡逻模板序号: 造物当前生效的巡逻模板序号 |
 * | 3 || 🔸 || `Int` || `path_index` || 当前路径索引: 造物当前生效的巡逻模板引用的路径索引 |
 * | 4 || 🔸 || `Int` || `current_waypoint_index` || 当前抵达路点序号: 造物当前抵达的路点序号 |
 * | 5 || 🔸 || `Int` || `next_waypoint_index` || 即将前往路点序号: 造物即将前往的路点序号 |
 */
  Trigger_CreationPatrol_OnReachWaypoint: "Trigger.Creation_Patrol.On_Reach_Waypoint",

  /**
 * **获取指定路径点信息** `(Query.Global_Path.Get_Waypoint)`
 *
 * - 查询指定路径的特定路点信息
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **621** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `path_index` || 路径索引 |
 * | 1 || 🔹 || `Int` || `point_index` || 路径路点序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `position` || 路点位置 |
 * | 1 || 🔸 || `Vec` || `rotation` || 路点朝向 |
 */
  Query_GlobalPath_GetWaypoint: "Query.Global_Path.Get_Waypoint",

  /**
 * **切换生效的文本气泡** `(Execution.Text_Bubble.Set_Bubble)`
 *
 * - 目标实体的文本气泡组件中，会以配置ID对应的文本气泡替换当前生效的文本气泡
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **631** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Cfg` || `config_id` || 文本气泡配置ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_TextBubble_SetBubble: "Execution.Text_Bubble.Set_Bubble",

  /**
 * **唤起卡牌选择器** `(Execution.Deck_Selector.Open)`
 *
 * - 对目标玩家打开提前制作好的卡牌选择器
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **632** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_player` || 目标玩家: 指定运行时玩家，唤起卡牌选择器 |
 * | 1 || 🔹 || `Int` || `picker_index` || 卡牌选择器索引: 引用的界面控件组索引 |
 * | 2 || 🔹 || `Flt` || `duration` || 选择时长: 若为空，则读取卡牌选择器默认配置；若不为空，以此处时间参数为实际生效时长<br>单位为秒 |
 * | 3 || 🔹 || `L<Int>` || `result_map_list` || 选择结果对应列表: 和显示项一一对应，卡牌选择器返回的实际结果是显示项对应的结果值<br>推荐配置1至X |
 * | 4 || 🔹 || `L<Int>` || `display_map_list` || 选择显示对应列表: 卡牌库中的配置引用 |
 * | 5 || 🔹 || `Int` || `select_min` || 选择数量下限: 选择卡牌数量下限，满足数量才可进行合法的选择交互 |
 * | 6 || 🔹 || `Int` || `select_max` || 选择数量上限: 选择卡牌数量上限，满足数量才可进行合法的选择交互 |
 * | 7 || 🔹 || `E<DRFM>` || `refresh_mode` || 刷新方式: 不可刷新: 刷新数量下限和刷新数量上限，两入参无效，且选择界面无刷新按键<br>部分刷新: 刷新数量下限和刷新数量上限，两入参有效，且选择界面有刷新按键<br>全量刷新: 刷新数量下限和刷新数量上限，两入参无效，默认返回全量结果，且选择界面有刷新按键 |
 * | 8 || 🔹 || `Int` || `refresh_min` || 刷新数量下限: 选择卡牌数量下限，满足数量才可进行合法的刷新交互 |
 * | 9 || 🔹 || `Int` || `refresh_max` || 刷新数量上限: 选择卡牌数量上限，满足数量才可进行合法的刷新交互 |
 * | 10 || 🔹 || `L<Int>` || `default_return` || 默认返回选择: 如果卡牌选择器超时/未交互/卡牌选择器异常关闭等情况，支持强制赋予配置的该结果<br>该结果的列表长度，需要和合法选择卡牌数量一致 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_DeckSelector_Open: "Execution.Deck_Selector.Open",

  /**
 * **卡牌选择器完成时** `(Trigger.Deck_Selector.On_Deck_Selected)`
 *
 * - 玩家操作完成卡牌选择器/或者因为时间原因强制关闭等，都会给玩家节点图触发本事件
 * - 出参可以通知本次卡牌选择器的结果，和对应原因
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **633** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `target_player` || 目标玩家: 生效的玩家实体 |
 * | 1 || 🔸 || `L<Int>` || `result_list` || 选择结果列表: 触发选择选择交互时，合法的选择结果会作为该出参提供，并且完成原因为玩家完成<br>唤起弹窗选择全量刷新，触发刷新交互时，全量的选择结果对应列表会作为该出参提供，并且完成原因为全量刷新<br>唤起弹窗选择部分刷新，触发刷新交互时，合法的选择结果会作为该出参提供，并且完成原因为定量刷新<br>卡牌选择器超时未交互时，默认返回选择会作为该出参提供，并且完成原因为超时关闭<br>卡牌选择器的可放弃选择勾选时，触发关闭交互时，默认返回选择会作为该出参提供，并且完成原因为主动关闭<br>通过节点图关闭卡牌选择器节点造成的卡牌选择器关闭，默认返回选择会作为该出参提供，并且完成原因为节点图关闭 |
 * | 2 || 🔸 || `E<SLCR>` || `complete_reason` || 完成原因: 六种原因枚举<br>玩家完成、全量刷新、定量刷新、超时关闭、主动关闭、节点图关闭 |
 * | 3 || 🔸 || `Int` || `picker_index` || 卡牌选择器索引: 引用的卡牌选择器索引 |
 */
  Trigger_DeckSelector_OnDeckSelected: "Trigger.Deck_Selector.On_Deck_Selected",

  /**
 * **修改小地图缩放** `(Execution.Minimap_Marker.Set_Zoom)`
 *
 * - 修改目标玩家的小地图界面控件的地图比例
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **634** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_player` || 目标玩家 |
 * | 1 || 🔹 || `Flt` || `scale` || 缩放尺寸 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_MinimapMarker_SetZoom: "Execution.Minimap_Marker.Set_Zoom",

  /**
 * **修改小地图标识生效状态** `(Execution.Minimap_Marker.Set_Marker_State)`
 *
 * - 通过节点输入的小地图标识序号列表，批量修改目标实体的小地图标识生效状态
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **635** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 要修改的小地图标识组件归属的实体 |
 * | 1 || 🔹 || `L<Int>` || `marker_index_list` || 小地图标识序号列表: 需要指定状态的小地图标识序号列表<br>未配置的小地图标识会改为相反状态 |
 * | 2 || 🔹 || `Bol` || `enabled` || 是否生效: 若输入为“是”，<br>输入序号列表指定的序号，对应小地图标识状态改为生效状态<br>不在序号列表中的序号，对应小地图标识状态改为不生效状态 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_MinimapMarker_SetMarkerState: "Execution.Minimap_Marker.Set_Marker_State",

  /**
 * **修改可见小地图标识的玩家列表** `(Execution.Minimap_Marker.Set_Visible_List)`
 *
 * - 目标实体的小地图标识组件上对应序号的小地图标识对玩家列表中的玩家可见
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **636** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 要修改的小地图标识组件归属的实体 |
 * | 1 || 🔹 || `Int` || `marker_index` || 小地图标识序号: 要修改的指定小地图标识的序号 |
 * | 2 || 🔹 || `L<Ety>` || `player_list` || 玩家列表: 目标实体的指定小地图序号，只有输入玩家可见 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_MinimapMarker_SetVisibleList: "Execution.Minimap_Marker.Set_Visible_List",

  /**
 * **修改追踪小地图标识的玩家列表** `(Execution.Minimap_Marker.Set_Track_List)`
 *
 * - 将目标实体的对应序号的小地图标识对入参玩家修改为追踪表现
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **637** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Int` || `marker_index` || 小地图标识序号 |
 * | 2 || 🔹 || `L<Ety>` || `player_list` || 玩家列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_MinimapMarker_SetTrackList: "Execution.Minimap_Marker.Set_Track_List",

  /**
 * **查询指定小地图标识信息** `(Query.Minimap_Marker.Get_Marker_Info)`
 *
 * - 查询目标实体上小地图标识组件中特定序号对应的小地图标识的信息
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **638** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 运行时的实体 |
 * | 1 || 🔹 || `Int` || `marker_index` || 小地图标识序号: 要查询的指定小地图标识的序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `enabled` || 生效状态: 查询的小地图标识的生效状态 |
 * | 1 || 🔸 || `L<Ety>` || `visible_players` || 可见标识的玩家列表: 返回可见该标识的玩家列表 |
 * | 2 || 🔸 || `L<Ety>` || `tracking_players` || 追踪标识的玩家列表: 返回追踪该标识的玩家列表 |
 */
  Query_MinimapMarker_GetMarkerInfo: "Query.Minimap_Marker.Get_Marker_Info",

  /**
 * **获取实体的小地图标识状态** `(Query.Minimap_Marker.Get_Marker_Status)`
 *
 * - 查询实体当前小地图标识的配置及生效情况
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **639** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 运行时的实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `all_markers` || 全量小地图标识序号列表: 该实体的所有小地图标识枚举列表 |
 * | 1 || 🔸 || `L<Int>` || `enabled_markers` || 生效的小地图标识序号列表: 该实体的所有生效小地图标识枚举列表 |
 * | 2 || 🔸 || `L<Int>` || `disabled_markers` || 未生效的小地图标识序号列表: 该实体的所有未生效小地图标识枚举列表 |
 */
  Query_MinimapMarker_GetMarkerStatus: "Query.Minimap_Marker.Get_Marker_Status",

  /**
 * **修改小地图标识的玩家标记** `(Execution.Minimap_Marker.Update_Markers)`
 *
 * - 若小地图标识选择了玩家标记，在节点图输入对应玩家实体后，目标实体在小地图上的显示会变成输入玩家实体的头像
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **640** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 要修改的小地图标识组件归属的实体 |
 * | 1 || 🔹 || `Int` || `marker_index` || 小地图标识序号: 要修改的指定小地图标识的序号 |
 * | 2 || 🔹 || `Ety` || `player_entity` || 对应玩家实体: 修改后为对应玩家实体的头像 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_MinimapMarker_UpdateMarkers: "Execution.Minimap_Marker.Update_Markers",

  /**
 * **关闭卡牌选择器** `(Execution.Deck_Selector.Close)`
 *
 * - 关闭指定玩家当前生效的卡牌选择器
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **641** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_player` || 目标玩家: 生效的玩家实体 |
 * | 1 || 🔹 || `Int` || `picker_index` || 卡牌选择器索引 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_DeckSelector_Close: "Execution.Deck_Selector.Close",

  /**
 * **发生元素反应事件时** `(Trigger.Unit_Status.On_Element_Reaction)`
 *
 * - 为实体添加单位状态效果【监听元素反应】，达成条件会触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **642** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `E<REAC>` || `reaction_type` || 元素反应类型 |
 * | 3 || 🔸 || `Ety` || `trigger_entity` || 触发者实体 |
 * | 4 || 🔸 || `Gid` || `trigger_guid` || 触发者GUID |
 */
  Trigger_UnitStatus_OnElementReaction: "Trigger.Unit_Status.On_Element_Reaction",

  /**
 * **护盾受到攻击时** `(Trigger.Unit_Status.On_Shield_Hit)`
 *
 * - 为实体添加单位状态效果【添加护盾】，受到攻击时触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **643** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Ety` || `attacker_entity` || 攻击者实体 |
 * | 3 || 🔸 || `Gid` || `attacker_guid` || 攻击者GUID |
 * | 4 || 🔸 || `Cfg` || `state_config_id` || 单位状态配置ID |
 * | 5 || 🔸 || `Int` || `layer_before` || 攻击前层数 |
 * | 6 || 🔸 || `Int` || `layer_after` || 攻击后层数 |
 * | 7 || 🔸 || `Flt` || `shield_amount_before` || 攻击前该单位状态的护盾含量 |
 * | 8 || 🔸 || `Flt` || `shield_amount_after` || 攻击后该单位状态的护盾含量 |
 */
  Trigger_UnitStatus_OnShieldHit: "Trigger.Unit_Status.On_Shield_Hit",

  /**
 * **查询成就是否完成** `(Query.Achievement.Is_Completed)`
 *
 * - 查询目标实体上特定序号对应的成就是否完成
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **644** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Int` || `achievement_index` || 成就序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `completed` || 是否完成 |
 */
  Query_Achievement_IsCompleted: "Query.Achievement.Is_Completed",

  /**
 * **设置成就进度计数** `(Execution.Achievement.Set_Progress)`
 *
 * - 设置指定实体上对应成就序号的成就进度计数
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **645** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 设置实体 |
 * | 1 || 🔹 || `Int` || `achievement_index` || 成就序号 |
 * | 2 || 🔹 || `Int` || `progress_count` || 进度计数: 修改后的进度计数为输入的值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Achievement_SetProgress: "Execution.Achievement.Set_Progress",

  /**
 * **变更成就进度计数** `(Execution.Achievement.Add_Progress)`
 *
 * - 变更指定实体上对应成就序号的成就进度计数
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **646** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 变更实体 |
 * | 1 || 🔹 || `Int` || `achievement_index` || 成就序号 |
 * | 2 || 🔹 || `Int` || `delta` || 进度计数变更值: 变更后值=变更前值+变更值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Achievement_AddProgress: "Execution.Achievement.Add_Progress",

  /**
 * **设置玩家结算计分板展示数据** `(Execution.Stage_Settlement.Set_Scoreboard)`
 *
 * - 设置玩家结算计分板展示数据，显示在关卡结算后弹出的计分板内。由于该节点涉及了局外功能的显示，故【数据值】和【数据名称】目前仅在手动输入文本的时候支持多语言翻译，若为连线输入，则不支持多语言翻译
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **647** || 🖥️ Server || ⚙️ Execution || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 设置实体: 生效的玩家实体 |
 * | 1 || 🔹 || `Int` || `order` || 数据顺序: 该数据的排序 |
 * | 2 || 🔹 || `Str` || `name` || 数据名称: 该数据的名称 |
 * | 3 || 🔷 || **`R<T>`** || `value` || 数据值: 该数据的值，支持整数、浮点数、字符串 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 * * `C<T:Str>`
 */
  Execution_StageSettlement_SetScoreboard: "Execution.Stage_Settlement.Set_Scoreboard",

  /**
 * **设置玩家结算排名数值** `(Execution.Stage_Settlement.Set_Player_Rank)`
 *
 * - 设置玩家结算后的排名数值，再按照【关卡设置】-【结算】中的【排名数值比较顺序】的设置来决定最终的排名顺序
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **650** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player_entity` || 玩家实体 |
 * | 1 || 🔹 || `Int` || `rank_value` || 排名数值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_StageSettlement_SetPlayerRank: "Execution.Stage_Settlement.Set_Player_Rank",

  /**
 * **获取玩家结算排名数值** `(Query.Stage_Settlement.Get_Player_Rank)`
 *
 * - 获取指定玩家实体结算的排名数值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **651** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `player_entity` || 玩家实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `rank_value` || 排名数值 |
 */
  Query_StageSettlement_GetPlayerRank: "Query.Stage_Settlement.Get_Player_Rank",

  /**
 * **设置玩家结算成功状态** `(Execution.Stage_Settlement.Set_Player_Result)`
 *
 * - 设置玩家结算成功状态
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **652** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player_entity` || 玩家实体 |
 * | 1 || 🔹 || `E<SETL>` || `result_state` || 结算状态: 分为未定、胜利、失败三种 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_StageSettlement_SetPlayerResult: "Execution.Stage_Settlement.Set_Player_Result",

  /**
 * **获取玩家结算成功状态** `(Query.Stage_Settlement.Get_Player_Result)`
 *
 * - 获取玩家结算成功状态
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **653** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `player_entity` || 玩家实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `E<SETL>` || `success` || 结算状态: 分为未定、胜利、失败 |
 */
  Query_StageSettlement_GetPlayerResult: "Query.Stage_Settlement.Get_Player_Result",

  /**
 * **设置阵营结算排名数值** `(Execution.Stage_Settlement.Set_Faction_Rank)`
 *
 * - 设置阵营结算后的排名数值，再按照【关卡设置】-【结算】中的【排名数值比较顺序】的设置来决定最终的排名顺序
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **654** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Fct` || `camp` || 阵营: 生效的阵营实体 |
 * | 1 || 🔹 || `Int` || `rank_value` || 排名数值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_StageSettlement_SetFactionRank: "Execution.Stage_Settlement.Set_Faction_Rank",

  /**
 * **获取阵营结算排名数值** `(Query.Stage_Settlement.Get_Faction_Rank)`
 *
 * - 获取指定阵营结算的排名数值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **655** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Fct` || `camp` || 阵营 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `rank_value` || 排名数值 |
 */
  Query_StageSettlement_GetFactionRank: "Query.Stage_Settlement.Get_Faction_Rank",

  /**
 * **设置阵营结算成功状态** `(Execution.Stage_Settlement.Set_Faction_Result)`
 *
 * - 设置阵营结算成功状态
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **656** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Fct` || `camp` || 阵营: 生效的阵营实体 |
 * | 1 || 🔹 || `E<SETL>` || `result_state` || 结算状态: 分为未定、胜利、失败三种 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_StageSettlement_SetFactionResult: "Execution.Stage_Settlement.Set_Faction_Result",

  /**
 * **获取阵营结算成功状态** `(Query.Stage_Settlement.Get_Faction_Result)`
 *
 * - 获取阵营结算成功状态
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **657** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Fct` || `camp` || 阵营 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `E<SETL>` || `success` || 结算状态: 分为未定、胜利、失败 |
 */
  Query_StageSettlement_GetFactionResult: "Query.Stage_Settlement.Get_Faction_Result",

  /**
 * **获取玩家段位信息** `(Query.Rank_Tier.Get_Rank_Info)`
 *
 * - 获取玩家段位相关信息
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **658** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `player` || 玩家实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `total` || 玩家段位总分 |
 * | 1 || 🔸 || `Int` || `win_streak` || 玩家连胜次数 |
 * | 2 || 🔸 || `Int` || `lose_streak` || 玩家连败次数 |
 * | 3 || 🔸 || `Int` || `run_streak` || 玩家连续逃跑次数 |
 */
  Query_RankTier_GetRankInfo: "Query.Rank_Tier.Get_Rank_Info",

  /**
 * **设置玩家段位变化分数** `(Execution.Rank.Modify_Score)`
 *
 * - 根据结算状态设置玩家的段位变化分数
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **659** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player_entity` || 玩家实体 |
 * | 1 || 🔹 || `E<SETL>` || `settlement_state` || 结算状态: 分为未定、胜利、失败、逃跑 |
 * | 2 || 🔹 || `Int` || `delta_score` || 变化分数 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Rank_ModifyScore: "Execution.Rank.Modify_Score",

  /**
 * **获取玩家段位变化分数** `(Query.Rank_Tier.Get_Score_Change)`
 *
 * - 获取玩家实体在不同结算状态下段位的变化分数
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **660** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `player` || 玩家实体 |
 * | 1 || 🔹 || `E<SETL>` || `result` || 结算状态 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `score` || 分数 |
 */
  Query_RankTier_GetScoreChange: "Query.Rank_Tier.Get_Score_Change",

  /**
 * **设置玩家逃跑合法性** `(Execution.Rank.Set_Escape_Valid)`
 *
 * - 设置指定玩家逃跑的合法性
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **661** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player_entity` || 玩家实体 |
 * | 1 || 🔹 || `Bol` || `is_valid` || 是否合法 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Rank_SetEscapeValid: "Execution.Rank.Set_Escape_Valid",

  /**
 * **获取玩家逃跑合法性** `(Query.Rank_Tier.Get_Escape_Status)`
 *
 * - 获取玩家逃跑合法性
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **662** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `player` || 玩家实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `legal` || 是否合法 |
 */
  Query_RankTier_GetEscapeStatus: "Query.Rank_Tier.Get_Escape_Status",

  /**
 * **切换玩家竞技段位生效的计分组** `(Execution.Rank.Switch_Score_Group)`
 *
 * - 以计分组的序号切换指定玩家竞技段位生效的计分组
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **663** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player_entity` || 玩家实体 |
 * | 1 || 🔹 || `Int` || `group_index` || 计分组序号: 外围系统管理中指定计分组对应的序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Rank_SwitchScoreGroup: "Execution.Rank.Switch_Score_Group",

  /**
 * **查询当前环境时间** `(Query.Stage_Related.Get_Env_Time)`
 *
 * - 查询当前的环境时间，范围为[0,24)
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **664** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `env_time` || 当前环境时间: 获取到的值范围为[0,24) |
 * | 1 || 🔸 || `Int` || `day_count` || 当前循环天数: 当前已经循环了多少天 |
 */
  Query_StageRelated_GetEnvTime: "Query.Stage_Related.Get_Env_Time",

  /**
 * **设置当前环境时间** `(Execution.Stage_Related.Set_Time)`
 *
 * - 立即切换环境时间到指定小时，参数需要是0~24之间的浮点数值
 * - 若目标小时数小于当前时间，视为天数+1
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **665** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Flt` || `environment_time` || 环境时间: 需要是0~24浮点数值，超出范围外时节点不生效 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_StageRelated_SetTime: "Execution.Stage_Related.Set_Time",

  /**
 * **设置环境时间流逝速度** `(Execution.Stage_Related.Set_Time_Speed)`
 *
 * - 每秒流逝分钟数，会被限制在0~60之间（提瓦特速度为1）
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **666** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Flt` || `environment_time_rate` || 环境时间流逝速度: 会被限制在0~60之间，超出范围外时会按0或60生效 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_StageRelated_SetTimeSpeed: "Execution.Stage_Related.Set_Time_Speed",

  /**
 * **开关实体光源** `(Execution.Light_Component.Toggle_Light)`
 *
 * - 调整指定目标实体上的光源组件对应序号的光源状态
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **667** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Int` || `light_index` || 光源序号 |
 * | 2 || 🔹 || `Bol` || `toggle_mode` || 打开或关闭: “是”为打开 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_LightComponent_ToggleLight: "Execution.Light_Component.Toggle_Light",

  /**
 * **以实体切换跟随运动器的目标** `(Execution.Follow_Motion.Set_Target_Entity)`
 *
 * - 以实体切换跟随运动器的跟随目标
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **668** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Ety` || `follow_entity` || 跟随目标实体: 跟随目标的实体 |
 * | 2 || 🔹 || `Str` || `socket_name` || 跟随目标挂接点名称: 跟随的挂接点名称 |
 * | 3 || 🔹 || `Vec` || `pos_offset` || 位置偏移: 以【跟随坐标系】为基准产生的位置偏移 |
 * | 4 || 🔹 || `Vec` || `rot_offset` || 旋转偏移: 以【跟随坐标系】为基准产生的旋转偏移 |
 * | 5 || 🔹 || `E<SYSC>` || `coord_sys` || 跟随坐标系: 可选”相对坐标系“、”世界坐标系“ |
 * | 6 || 🔹 || `E<FOLO>` || `follow_type` || 跟随类型: 可选”完全跟随“、”跟随位置“、”跟随旋转” |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_FollowMotion_SetTargetEntity: "Execution.Follow_Motion.Set_Target_Entity",

  /**
 * **获取碰撞触发器内所有实体** `(Query.Collision_Trigger.Get_Overlapping_Entities)`
 *
 * - 获取目标实体上碰撞触发器组件中特定序号对应的碰撞触发器内的所有实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **669** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Int` || `trigger_index` || 触发器序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `entities` || 实体列表 |
 */
  Query_CollisionTrigger_GetOverlappingEntities: "Query.Collision_Trigger.Get_Overlapping_Entities",

  /**
 * **获取实体进阶属性** `(Query.Entity_Related.Get_Adv_Attr)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **670** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `crit_rate` || 暴击率 |
 * | 1 || 🔸 || `Flt` || `crit_dmg` || 暴击伤害 |
 * | 2 || 🔸 || `Flt` || `heal_bonus` || 治疗加成 |
 * | 3 || 🔸 || `Flt` || `incoming_healing_bonus` || 受治疗加成 |
 * | 4 || 🔸 || `Flt` || `energy_recharge` || 元素充能效率 |
 * | 5 || 🔸 || `Flt` || `cd_reduction` || 冷却缩减 |
 * | 6 || 🔸 || `Flt` || `shield_amount` || 护盾强效 |
 */
  Query_EntityRelated_GetAdvAttr: "Query.Entity_Related.Get_Adv_Attr",

  /**
 * **获取实体元素属性** `(Query.Entity_Related.Get_Elem_Attr)`
 *
 * - 获取目标实体的元素相关属性
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **671** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `pyro_bonus` || 火元素伤害加成 |
 * | 1 || 🔸 || `Flt` || `pyro_res` || 火元素抗性 |
 * | 2 || 🔸 || `Flt` || `hydro_bonus` || 水元素伤害加成 |
 * | 3 || 🔸 || `Flt` || `hydro_res` || 水元素抗性 |
 * | 4 || 🔸 || `Flt` || `dendro_bonus` || 草元素伤害加成 |
 * | 5 || 🔸 || `Flt` || `dendro_res` || 草元素抗性 |
 * | 6 || 🔸 || `Flt` || `electro_bonus` || 雷元素伤害加成 |
 * | 7 || 🔸 || `Flt` || `electro_res` || 雷元素抗性 |
 * | 8 || 🔸 || `Flt` || `anemo_bonus` || 风元素伤害加成 |
 * | 9 || 🔸 || `Flt` || `anemo_res` || 风元素抗性 |
 * | 10 || 🔸 || `Flt` || `cryo_bonus` || 冰元素伤害加成 |
 * | 11 || 🔸 || `Flt` || `cryo_res` || 冰元素抗性 |
 * | 12 || 🔸 || `Flt` || `geo_bonus` || 岩元素伤害加成 |
 * | 13 || 🔸 || `Flt` || `geo_res` || 岩元素抗性 |
 * | 14 || 🔸 || `Flt` || `physical_bonus` || 物理伤害加成 |
 * | 15 || 🔸 || `Flt` || `physical_res` || 物理抗性 |
 */
  Query_EntityRelated_GetElemAttr: "Query.Entity_Related.Get_Elem_Attr",

  /**
 * **装备添加词条** `(Execution.Equipment.Add_Affix)`
 *
 * - 对指定装备实例添加一条预先配置好的词条，可以覆写词条的数值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **672** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Int` || `equip_index` || 装备索引: 【装备初始化】时生成的整数型索引来标识该装备实例 |
 * | 1 || 🔹 || `Cfg` || `affix_config_id` || 词条配置ID: 装备数据管理中预先配置好的词条的对应配置ID |
 * | 2 || 🔹 || `Bol` || `overwrite` || 是否覆写词条值 |
 * | 3 || 🔹 || `Flt` || `affix_value` || 词条数值: 可以覆写预先配置好的词条上的数值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Equipment_AddAffix: "Execution.Equipment.Add_Affix",

  /**
 * **移除装备词条** `(Execution.Equipment.Remove_Affix)`
 *
 * - 移除指定装备实例的对应词条
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **673** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Int` || `equip_index` || 装备索引: 【装备初始化】时生成的整数型索引来标识该装备实例 |
 * | 1 || 🔹 || `Int` || `affix_index` || 词条序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Equipment_RemoveAffix: "Execution.Equipment.Remove_Affix",

  /**
 * **修改装备词条值** `(Execution.Equipment.Modify_Affix)`
 *
 * - 修改指定装备实例对应词条上的值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **674** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Int` || `equip_index` || 装备索引: 【装备初始化】时生成的整数型索引来标识该装备实例 |
 * | 1 || 🔹 || `Int` || `affix_index` || 词条序号 |
 * | 2 || 🔹 || `Flt` || `affix_value` || 词条数值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Equipment_ModifyAffix: "Execution.Equipment.Modify_Affix",

  /**
 * **获取装备词条列表** `(Query.Equipment.Get_Affixes)`
 *
 * - 获取该装备实例的所有词条组成的列表
 * - 装备初始化时，词条的数值会发生随机，所以装备实例上的装备词条也会生成对应的实例，故数据类型为整数而不是配置ID
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **675** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `equip_index` || 装备索引 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `entry_list` || 装备词条列表 |
 */
  Query_Equipment_GetAffixes: "Query.Equipment.Get_Affixes",

  /**
 * **获取装备词条配置ID** `(Query.Equipment.Get_Affix_Config)`
 *
 * - 根据装备实例上装备词条的序号获取该词条的配置ID
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **676** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `equip_index` || 装备索引 |
 * | 1 || 🔹 || `Int` || `entry_index` || 词条序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Cfg` || `entry_config_id` || 词条配置ID |
 */
  Query_Equipment_GetAffixConfig: "Query.Equipment.Get_Affix_Config",

  /**
 * **获取装备词条数值** `(Query.Equipment.Get_Affix_Value)`
 *
 * - 获取装备实例上对应序号词条的数值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **677** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `equip_index` || 装备索引 |
 * | 1 || 🔹 || `Int` || `entry_index` || 词条序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `entry_value` || 装备数值 |
 */
  Query_Equipment_GetAffixValue: "Query.Equipment.Get_Affix_Value",

  /**
 * **Update Player Leaderboard Score** `(Hidden.Execution.Update_Leaderboard)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **678** || 🖥️ Server || 🚫 Hidden || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `L<Int>` || `Input0` ||  |
 * | 1 || 🔹 || `Int` || `Input1` ||  |
 * | 2 || 🔹 || `Int` || `Input2` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Hidden_Execution_UpdateLeaderboard: "Hidden.Execution.Update_Leaderboard",

  /**
 * **文本气泡完成时** `(Trigger.Text_Bubble.On_Bubble_Complete)`
 *
 * - 该事件仅能被挂载文本气泡组件，且完成对话的实体节点图接收
 * - 完成的含义是最后一句对话播放完成
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **679** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `owner_entity` || 气泡归属者实体: 挂载文本气泡组件的运行时实体 |
 * | 1 || 🔸 || `Ety` || `character_entity` || 角色实体: 当前气泡对话的目标角色 |
 * | 2 || 🔸 || `Cfg` || `bubble_config_id` || 文本气泡配置ID: 当前生效的文本气泡配置ID |
 * | 3 || 🔸 || `Int` || `complete_count` || 文本气泡完成次数: 当前生效的文本气泡，对该对话角色，完整播放了几次 |
 */
  Trigger_TextBubble_OnBubbleComplete: "Trigger.Text_Bubble.On_Bubble_Complete",

  /**
 * **装备的词条数值改变时** `(Trigger.Equipment.On_Affix_Change)`
 *
 * - 装备词条数值改变时触发该事件，装备的持有者可以收到，需要配置在道具节点图里
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **680** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `owner_entity` || 装备持有者 |
 * | 1 || 🔸 || `Gid` || `owner_guid` || 装备持有者GUID |
 * | 2 || 🔸 || `Int` || `equip_index` || 装备索引 |
 * | 3 || 🔸 || `Int` || `affix_index` || 词条序号: 该词条在装备词条上的对应序号 |
 * | 4 || 🔸 || `Flt` || `value_old` || 改变前数值 |
 * | 5 || 🔸 || `Flt` || `value_new` || 改变后数值 |
 */
  Trigger_Equipment_OnAffixChange: "Trigger.Equipment.On_Affix_Change",

  /**
 * **背包道具新增时** `(Trigger.Item.On_Item_Add)`
 *
 * - 背包内新增该道具时触发事件，背包组件的持有者可以收到。如果没有新增道具仅有数量变化则不会触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **681** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `owner_entity` || 道具持有者实体 |
 * | 1 || 🔸 || `Gid` || `owner_guid` || 道具持有者GUID |
 * | 2 || 🔸 || `Cfg` || `item_config_id` || 道具配置ID |
 * | 3 || 🔸 || `Int` || `gain_count` || 获得数量 |
 */
  Trigger_Item_OnItemAdd: "Trigger.Item.On_Item_Add",

  /**
 * **背包道具失去时** `(Trigger.Item.On_Item_Lose)`
 *
 * - 背包内该道具失去，即背包内该道具数量为0时触发该事件，背包组件的持有者可以收到
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **682** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `owner_entity` || 道具持有者实体 |
 * | 1 || 🔸 || `Gid` || `owner_guid` || 道具持有者GUID |
 * | 2 || 🔸 || `Cfg` || `item_config_id` || 道具配置ID |
 * | 3 || 🔸 || `Int` || `lost_count` || 失去数量 |
 */
  Trigger_Item_OnItemLose: "Trigger.Item.On_Item_Lose",

  /**
 * **背包道具数量变化时** `(Trigger.Item.On_Item_Quantity_Change)`
 *
 * - 背包道具数量发生变化时触发该事件，背包组件的持有者可以收到
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **683** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `owner_entity` || 道具持有者实体 |
 * | 1 || 🔸 || `Gid` || `owner_guid` || 道具持有者GUID |
 * | 2 || 🔸 || `Cfg` || `item_config_id` || 道具配置ID |
 * | 3 || 🔸 || `Int` || `count_before` || 变化前数量 |
 * | 4 || 🔸 || `Int` || `count_after` || 变化后数量 |
 * | 5 || 🔸 || `E<ITMC>` || `change_reason` || 变化原因 |
 */
  Trigger_Item_OnItemQuantityChange: "Trigger.Item.On_Item_Quantity_Change",

  /**
 * **背包货币数量变化时** `(Trigger.Item.On_Currency_Change)`
 *
 * - 背包货币数量变化时触发该事件，背包组件的持有者可以收到
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **684** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `owner_entity` || 货币持有者实体 |
 * | 1 || 🔸 || `Gid` || `owner_guid` || 货币持有者GUID |
 * | 2 || 🔸 || `Cfg` || `currency_config_id` || 货币配置ID |
 * | 3 || 🔸 || `Int` || `currency_delta` || 货币变化值 |
 */
  Trigger_Item_OnCurrencyChange: "Trigger.Item.On_Currency_Change",

  /**
 * **增加背包最大容量** `(Execution.Inventory.Expand_Capacity)`
 *
 * - 增加指定背包持有者的背包最大容量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **685** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `owner_entity` || 背包持有者实体 |
 * | 1 || 🔹 || `Int` || `delta_capacity` || 增加容量 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Inventory_ExpandCapacity: "Execution.Inventory.Expand_Capacity",

  /**
 * **修改背包道具数量** `(Execution.Inventory.Modify_Item)`
 *
 * - 修改背包内指定道具的数量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **686** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `owner_entity` || 背包持有者实体 |
 * | 1 || 🔹 || `Cfg` || `item_config_id` || 道具配置ID |
 * | 2 || 🔹 || `Int` || `delta` || 变更值: 变更后的值=变更前的值+变更值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Inventory_ModifyItem: "Execution.Inventory.Modify_Item",

  /**
 * **设置背包掉落道具/货币数量** `(Execution.Inventory.Set_Drop_Amount)`
 *
 * - 设置背包掉落道具/货币的类型和数量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **687** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `owner_entity` || 背包持有者实体 |
 * | 1 || 🔹 || `Cfg` || `config_id` || 道具/货币配置ID |
 * | 2 || 🔹 || `Int` || `drop_count` || 掉落数量 |
 * | 3 || 🔹 || `E<LOOT>` || `drop_type` || 掉落类型: 分为全员一份、每人一份 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Inventory_SetDropAmount: "Execution.Inventory.Set_Drop_Amount",

  /**
 * **修改背包货币数量** `(Execution.Inventory.Modify_Currency)`
 *
 * - 修改背包内指定货币的数量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **688** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `owner_entity` || 背包持有者实体 |
 * | 1 || 🔹 || `Cfg` || `currency_config_id` || 货币配置ID |
 * | 2 || 🔹 || `Int` || `delta` || 变更值: 变更后的值=变更前的值+变更值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Inventory_ModifyCurrency: "Execution.Inventory.Modify_Currency",

  /**
 * **获取背包容量** `(Query.Item.Get_Capacity)`
 *
 * - 获取背包容量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **689** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `owner` || 背包持有者实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `capacity` || 背包容量 |
 */
  Query_Item_GetCapacity: "Query.Item.Get_Capacity",

  /**
 * **获取背包道具数量** `(Query.Item.Get_Item_Amount)`
 *
 * - 获取背包内特定配置ID的道具数量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **690** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `owner` || 背包持有者实体 |
 * | 1 || 🔹 || `Cfg` || `item_config_id` || 道具配置ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `item_count` || 道具数量 |
 */
  Query_Item_GetItemAmount: "Query.Item.Get_Item_Amount",

  /**
 * **获取背包货币数量** `(Query.Item.Get_Currency_Amount)`
 *
 * - 获取背包内特定配置ID的货币数量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **691** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `owner` || 背包持有者实体 |
 * | 1 || 🔹 || `Cfg` || `currency_id` || 货币配置ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `resource_num` || 资源数量 |
 */
  Query_Item_GetCurrencyAmount: "Query.Item.Get_Currency_Amount",

  /**
 * **装备初始化时** `(Trigger.Equipment.On_Init)`
 *
 * - 当装备首次被获取进入背包时，会进行初始化，此时事件出参会返回装备实例的唯一索引，通过此索引即可对装备进行动态修改。装备的持有者可以收到该事件，需要配置在道具节点图里
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **694** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `owner_entity` || 装备持有者 |
 * | 1 || 🔸 || `Gid` || `owner_guid` || 装备持有者GUID |
 * | 2 || 🔸 || `Int` || `equip_index` || 装备索引 |
 */
  Trigger_Equipment_OnInit: "Trigger.Equipment.On_Init",

  /**
 * **装备被穿戴时** `(Trigger.Equipment.On_Equip)`
 *
 * - 装备被穿戴时触发该事件，装备的持有者可以收到，需要配置在道具节点图里
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **695** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `owner_entity` || 装备持有者实体 |
 * | 1 || 🔸 || `Gid` || `owner_guid` || 装备持有者GUID |
 * | 2 || 🔸 || `Int` || `equip_index` || 装备索引 |
 */
  Trigger_Equipment_OnEquip: "Trigger.Equipment.On_Equip",

  /**
 * **装备被卸下时** `(Trigger.Equipment.On_Unequip)`
 *
 * - 装备被卸下时触发该事件，装备的持有者可以收到，需要配置在道具节点图里
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **696** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `owner_entity` || 装备持有者实体 |
 * | 1 || 🔸 || `Gid` || `owner_guid` || 装备持有者GUID |
 * | 2 || 🔸 || `Int` || `equip_index` || 装备索引 |
 */
  Trigger_Equipment_OnUnequip: "Trigger.Equipment.On_Unequip",

  /**
 * **损失生命** `(Execution.Combat.Loss_HP)`
 *
 * - 使指定目标直接损失生命。损失生命不是攻击，因此不会触发攻击相关的事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **697** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 损失生命的目标 |
 * | 1 || 🔹 || `Flt` || `hp_loss` || 生命损失量: 该次损失生命值的损失量 |
 * | 2 || 🔹 || `Bol` || `is_fatal` || 是否致命: 为“否”时，该次损失生命最多使目标生命扣为1点 |
 * | 3 || 🔹 || `Bol` || `can_be_blocked_by_invincible` || 是否可被无敌抵挡: 为“是”时，如果目标已经通过单位状态设置为了无敌，则损失生命不生效 |
 * | 4 || 🔹 || `Bol` || `can_be_blocked_by_lock_hp` || 是否可被锁定生命值抵挡: 为“是”时，如果目标已经通过单位状态设置为了锁定生命值，则损失生命不生效 |
 * | 5 || 🔹 || `E<CDMG>` || `damage_floating_text_type` || 伤害跳字类型: 无跳字<br>普通跳字<br>暴击跳字 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Combat_LossHP: "Execution.Combat.Loss_HP",

  /**
 * **直接恢复生命** `(Execution.Combat.Recover_HP_Instant)`
 *
 * - 直接恢复指定实体目标的生命。与【恢复生命】不同的是，此节点不需要使用能力单元
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **698** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `heal_source` || 恢复发起实体: 发起恢复的实体 |
 * | 1 || 🔹 || `Ety` || `heal_target` || 恢复目标实体: 恢复的目标实体 |
 * | 2 || 🔹 || `Flt` || `heal_amount` || 恢复量: 该次恢复生命的恢复量 |
 * | 3 || 🔹 || `Bol` || `ignore_adjust` || 是否忽略恢复量调整: 为“是”时，该次恢复量不受目标的恢复量调整类的单位状态的影响 |
 * | 4 || 🔹 || `Flt` || `hatred_rate` || 产生仇恨的倍率: 此次恢复产生的仇恨倍率。仅使用自定义仇恨模式时有意义 |
 * | 5 || 🔹 || `Flt` || `hatred_delta` || 产生仇恨的增量: 此次恢复产生的仇恨增量。仅使用自定义仇恨模式时有意义 |
 * | 6 || 🔹 || `L<Str>` || `heal_tags` || 治疗标签列表: 此次恢复行为的标签列表。在【发起恢复生命值】时以及【被恢复生命值时】事件中可以取出，用于判定一次特定的恢复行为 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Combat_RecoverHPInstant: "Execution.Combat.Recover_HP_Instant",

  /**
 * **商店出售自定义商品时** `(Trigger.Shop.On_Custom_Item_Sold)`
 *
 * - 商店出售自定义物品时触发，商店组件的持有者可收到
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **700** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `shop_owner` || 商店持有者 |
 * | 1 || 🔸 || `Gid` || `shop_owner_guid` || 商店持有者GUID |
 * | 2 || 🔸 || `Ety` || `buyer_entity` || 购买者实体 |
 * | 3 || 🔸 || `Int` || `shop_index` || 商店序号 |
 * | 4 || 🔸 || `Int` || `item_index` || 商品序号 |
 * | 5 || 🔸 || `Int` || `buy_count` || 购买数量 |
 */
  Trigger_Shop_OnCustomItemSold: "Trigger.Shop.On_Custom_Item_Sold",

  /**
 * **商店出售背包物品时** `(Trigger.Shop.On_Inv_Item_Sold)`
 *
 * - 商店出售背包物品时触发，商店组件的持有者可收到
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **701** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `shop_owner` || 商店持有者 |
 * | 1 || 🔸 || `Gid` || `shop_owner_guid` || 商店持有者GUID |
 * | 2 || 🔸 || `Ety` || `buyer_entity` || 购买者实体 |
 * | 3 || 🔸 || `Int` || `shop_index` || 商店序号 |
 * | 4 || 🔸 || `Cfg` || `item_config_id` || 道具配置ID |
 * | 5 || 🔸 || `Int` || `buy_count` || 购买数量 |
 */
  Trigger_Shop_OnInvItemSold: "Trigger.Shop.On_Inv_Item_Sold",

  /**
 * **打开商店** `(Execution.Shop.Open)`
 *
 * - 在游戏运行过程中以玩家实体的视角打开商店
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **702** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player_entity` || 玩家实体 |
 * | 1 || 🔹 || `Ety` || `owner_entity` || 商店归属者实体: 商店归属者实体的商店组件对应的商店序号 |
 * | 2 || 🔹 || `Int` || `shop_index` || 商店序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Shop_Open: "Execution.Shop.Open",

  /**
 * **关闭商店** `(Execution.Shop.Close)`
 *
 * - 在游戏运行过程中以玩家实体的视角关闭所有已打开的商店
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **703** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player_entity` || 玩家实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Shop_Close: "Execution.Shop.Close",

  /**
 * **修改自定义商店商品出售信息** `(Execution.Shop.Modify_Custom_Sale)`
 *
 * - 修改自定义商店商品出售信息
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **704** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `owner_entity` || 商店归属者实体 |
 * | 1 || 🔹 || `Int` || `shop_index` || 商店序号: 商店归属者实体的商店组件对应的商店序号 |
 * | 2 || 🔹 || `Int` || `item_index` || 商品序号 |
 * | 3 || 🔹 || `Cfg` || `config_id` || 道具配置ID |
 * | 4 || 🔹 || `D<Cfg,Int>` || `sell_currency` || 出售货币字典 |
 * | 5 || 🔹 || `Int` || `page_index` || 所属页签序号: 1装备、2消耗品、3材料、4贵重物品 |
 * | 6 || 🔹 || `Bol` || `is_limited` || 是否限购 |
 * | 7 || 🔹 || `Int` || `limit_count` || 限购数量 |
 * | 8 || 🔹 || `Int` || `priority` || 排序优先级 |
 * | 9 || 🔹 || `Bol` || `is_sellable` || 是否可出售 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Shop_ModifyCustomSale: "Execution.Shop.Modify_Custom_Sale",

  /**
 * **商店收购道具时** `(Trigger.Shop.On_Sell_Item)`
 *
 * - 商店收购道具时触发，商店组件的持有者可收到
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **705** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `shop_owner` || 商店持有者 |
 * | 1 || 🔸 || `Gid` || `shop_owner_guid` || 商店持有者GUID |
 * | 2 || 🔸 || `Ety` || `seller_entity` || 出售者实体 |
 * | 3 || 🔸 || `Int` || `shop_index` || 商店序号 |
 * | 4 || 🔸 || `D<Cfg,Int>` || `buy_dict` || 收购物品字典 |
 */
  Trigger_Shop_OnSellItem: "Trigger.Shop.On_Sell_Item",

  /**
 * **修改背包商店商品出售信息** `(Execution.Shop.Modify_Inventory_Sale)`
 *
 * - 修改背包商店商品出售信息
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **706** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `owner_entity` || 商店归属者实体 |
 * | 1 || 🔹 || `Int` || `shop_index` || 商店序号: 商店归属者实体的商店组件对应的商店序号 |
 * | 2 || 🔹 || `Cfg` || `config_id` || 道具配置ID |
 * | 3 || 🔹 || `D<Cfg,Int>` || `sell_currency` || 出售货币字典 |
 * | 4 || 🔹 || `Int` || `page_index` || 所属页签序号 |
 * | 5 || 🔹 || `Int` || `priority` || 排序优先级 |
 * | 6 || 🔹 || `Bol` || `is_sellable` || 是否可出售 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Shop_ModifyInventorySale: "Execution.Shop.Modify_Inventory_Sale",

  /**
 * **修改物品收购表中道具收购信息** `(Execution.Shop.Modify_Cart_Item)`
 *
 * - 修改物品收购表中道具收购信息
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **707** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `owner_entity` || 商店归属者实体 |
 * | 1 || 🔹 || `Int` || `shop_index` || 商店序号: 商店归属者实体的商店组件对应的商店序号 |
 * | 2 || 🔹 || `Cfg` || `item_config_id` || 商品道具配置ID |
 * | 3 || 🔹 || `D<Cfg,Int>` || `buy_currency` || 收购货币字典 |
 * | 4 || 🔹 || `Bol` || `is_purchasable` || 是否可收购 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Shop_ModifyCartItem: "Execution.Shop.Modify_Cart_Item",

  /**
 * **向自定义商店出售表中新增商品** `(Execution.Shop.Add_Custom_Sale)`
 *
 * - 向自定义商店出售表中新增商品，新增成功后出参会生成一个整数型索引作为该商品的标识
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **708** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `owner_entity` || 商店归属者实体 |
 * | 1 || 🔹 || `Int` || `shop_index` || 商店序号: 商店归属者实体的商店组件对应的商店序号 |
 * | 2 || 🔹 || `Cfg` || `item_config_id` || 商品道具配置ID |
 * | 3 || 🔹 || `D<Cfg,Int>` || `sell_currency` || 出售货币字典 |
 * | 4 || 🔹 || `Int` || `page_index` || 所属页签序号: 1装备、2消耗品、3材料、4贵重物品 |
 * | 5 || 🔹 || `Bol` || `is_limited` || 是否限购 |
 * | 6 || 🔹 || `Int` || `limit_count` || 限购数量 |
 * | 7 || 🔹 || `Int` || `priority` || 排序优先级 |
 * | 8 || 🔹 || `Bol` || `is_sellable` || 是否可出售 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Int` || `item_index_out` || 商品索引 |
 */
  Execution_Shop_AddCustomSale: "Execution.Shop.Add_Custom_Sale",

  /**
 * **向背包商店出售表中新增商品** `(Execution.Shop.Add_Inventory_Sale)`
 *
 * - 向背包商店出售表中新增商品
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **709** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `owner_entity` || 商店归属者实体 |
 * | 1 || 🔹 || `Int` || `shop_index` || 商店序号: 商店归属者实体的商店组件对应的商店序号 |
 * | 2 || 🔹 || `Cfg` || `item_config_id` || 商品道具配置ID |
 * | 3 || 🔹 || `D<Cfg,Int>` || `sell_currency` || 出售货币字典 |
 * | 4 || 🔹 || `Int` || `page_index` || 所属页签序号: 1装备、2消耗品、3材料、4贵重物品 |
 * | 5 || 🔹 || `Int` || `priority` || 排序优先级 |
 * | 6 || 🔹 || `Bol` || `is_sellable` || 是否可出售 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Shop_AddInventorySale: "Execution.Shop.Add_Inventory_Sale",

  /**
 * **向物品收购表中新增物品** `(Execution.Shop.Add_To_Cart)`
 *
 * - 向物品收购表中新增物品
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **710** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `owner_entity` || 商店归属者实体 |
 * | 1 || 🔹 || `Int` || `shop_index` || 商店序号: 商店归属者实体的商店组件对应的商店序号 |
 * | 2 || 🔹 || `Cfg` || `item_config_id` || 商品道具配置ID |
 * | 3 || 🔹 || `D<Cfg,Int>` || `buy_currency` || 收购货币字典 |
 * | 4 || 🔹 || `Bol` || `is_purchasable` || 是否可收购 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Shop_AddToCart: "Execution.Shop.Add_To_Cart",

  /**
 * **从自定义商店出售表中移除商品** `(Execution.Shop.Remove_Custom_Sale)`
 *
 * - 从自定义商店出售表中移除商品
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **711** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `owner_entity` || 商店归属者实体 |
 * | 1 || 🔹 || `Int` || `shop_index` || 商店序号: 商店归属者实体的商店组件对应的商店序号 |
 * | 2 || 🔹 || `Int` || `item_index` || 商品序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Shop_RemoveCustomSale: "Execution.Shop.Remove_Custom_Sale",

  /**
 * **从背包商店出售表中移除商品** `(Execution.Shop.Remove_Inventory_Sale)`
 *
 * - 从背包商店出售表中移除商品
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **712** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `owner_entity` || 商店归属者实体 |
 * | 1 || 🔹 || `Int` || `shop_index` || 商店序号: 商店归属者实体的商店组件对应的商店序号 |
 * | 2 || 🔹 || `Cfg` || `config_id` || 道具配置ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Shop_RemoveInventorySale: "Execution.Shop.Remove_Inventory_Sale",

  /**
 * **从物品收购表中移除物品** `(Execution.Shop.Remove_From_Cart)`
 *
 * - 从物品收购表中移除物品
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **713** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `owner_entity` || 商店归属者实体 |
 * | 1 || 🔹 || `Int` || `shop_index` || 商店序号: 商店归属者实体的商店组件对应的商店序号 |
 * | 2 || 🔹 || `Cfg` || `item_config_id` || 商品道具配置ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Shop_RemoveFromCart: "Execution.Shop.Remove_From_Cart",

  /**
 * **查询自定义商店商品出售列表** `(Query.Shop.Get_Custom_Sales)`
 *
 * - 查询自定义商店商品出售列表，出参为商品序号组成的列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **714** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `shop_owner` || 商店归属者实体 |
 * | 1 || 🔹 || `Int` || `shop_index` || 商店序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `goods_index_list` || 商品序号列表 |
 */
  Query_Shop_GetCustomSales: "Query.Shop.Get_Custom_Sales",

  /**
 * **查询背包商店物品出售列表** `(Query.Shop.Get_Inv_Sales)`
 *
 * - 查询背包商店物品出售列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **715** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `shop_owner` || 商店归属者实体 |
 * | 1 || 🔹 || `Int` || `shop_index` || 商店序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Cfg>` || `item_ids` || 道具配置ID列表 |
 */
  Query_Shop_GetInvSales: "Query.Shop.Get_Inv_Sales",

  /**
 * **查询商店收购物品列表** `(Query.Shop.Get_Cart_Items)`
 *
 * - 查询商店收购物品列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **716** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `shop_owner` || 商店归属者实体 |
 * | 1 || 🔹 || `Int` || `shop_index` || 商店序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Cfg>` || `item_ids` || 道具配置ID列表 |
 */
  Query_Shop_GetCartItems: "Query.Shop.Get_Cart_Items",

  /**
 * **查询自定义商店商品出售信息** `(Query.Shop.Get_Custom_Item_Info)`
 *
 * - 查询自定义商店特定商品的出售信息
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **717** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `shop_owner` || 商店归属者实体 |
 * | 1 || 🔹 || `Int` || `shop_index` || 商店序号 |
 * | 2 || 🔹 || `Int` || `goods_index` || 商品序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Cfg` || `item_config` || 道具配置ID |
 * | 1 || 🔸 || `D<Cfg,Int>` || `sell_currency` || 出售货币字典 |
 * | 2 || 🔸 || `Int` || `tab_id` || 所属页签序号 |
 * | 3 || 🔸 || `Bol` || `limited` || 是否限购 |
 * | 4 || 🔸 || `Int` || `limit_count` || 限购数量 |
 * | 5 || 🔸 || `Int` || `priority` || 排序优先级 |
 * | 6 || 🔸 || `Bol` || `can_sell` || 是否可出售 |
 */
  Query_Shop_GetCustomItemInfo: "Query.Shop.Get_Custom_Item_Info",

  /**
 * **查询背包商店商品出售信息** `(Query.Shop.Get_Inv_Item_Info)`
 *
 * - 查询背包商店种特定商品的出售信息
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **718** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `shop_owner` || 商店归属者实体 |
 * | 1 || 🔹 || `Int` || `shop_index` || 商店序号 |
 * | 2 || 🔹 || `Cfg` || `item_config_id` || 道具配置ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `D<Cfg,Int>` || `sell_currency` || 出售货币字典 |
 * | 1 || 🔸 || `Int` || `priority` || 排序优先级 |
 * | 2 || 🔸 || `Bol` || `can_sell` || 是否可出售 |
 */
  Query_Shop_GetInvItemInfo: "Query.Shop.Get_Inv_Item_Info",

  /**
 * **查询商店物品收购信息** `(Query.Shop.Get_Purchase_Info)`
 *
 * - 查询商店特定物品的收购信息
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **719** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `shop_owner` || 商店归属者实体 |
 * | 1 || 🔹 || `Int` || `shop_index` || 商店序号 |
 * | 2 || 🔹 || `Cfg` || `item_config_id` || 道具配置ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `D<Cfg,Int>` || `currency_dict` || 收购货币字典 |
 * | 1 || 🔸 || `Bol` || `can_purchase` || 是否可收购 |
 */
  Query_Shop_GetPurchaseInfo: "Query.Shop.Get_Purchase_Info",

  /**
 * **设置背包道具掉落内容** `(Execution.Inventory.Set_Drop_Items)`
 *
 * - 以字典形式设置背包道具掉落内容，并可以设置掉落类型
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **720** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `owner_entity` || 背包持有者实体 |
 * | 1 || 🔹 || `D<Cfg,Int>` || `item_drop_dict` || 道具掉落字典 |
 * | 2 || 🔹 || `E<LOOT>` || `drop_type` || 掉落类型: 分为全员一份、每人一份 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Inventory_SetDropItems: "Execution.Inventory.Set_Drop_Items",

  /**
 * **获取背包所有基础道具** `(Query.Item.Get_Basic_Items)`
 *
 * - 获取背包所有基础道具，包括道具类型和对应的数量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **721** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `owner` || 背包持有者实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `D<Cfg,Int>` || `basic_dict` || 基础道具字典 |
 */
  Query_Item_GetBasicItems: "Query.Item.Get_Basic_Items",

  /**
 * **获取背包所有货币** `(Query.Item.Get_Currency_All)`
 *
 * - 获取背包所有货币，包括货币类型和对应的数量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **722** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `owner` || 背包持有者实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `D<Cfg,Int>` || `coins` || 货币字典 |
 */
  Query_Item_GetCurrencyAll: "Query.Item.Get_Currency_All",

  /**
 * **获取背包所有装备** `(Query.Item.Get_Equipment_All)`
 *
 * - 获取背包所有装备，出参为所有装备索引组成的列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **723** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `owner` || 背包持有者实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `equip_index_list` || 装备索引列表 |
 */
  Query_Item_GetEquipmentAll: "Query.Item.Get_Equipment_All",

  /**
 * **触发战利品掉落** `(Execution.Inventory.Trigger_Drop)`
 *
 * - 对掉落者实体触发一次战利品掉落，可设置其掉落类型
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **724** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `dropper_entity` || 掉落者实体 |
 * | 1 || 🔹 || `E<LOOT>` || `drop_type` || 掉落类型: 分为全员一份、每人一份 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Inventory_TriggerDrop: "Execution.Inventory.Trigger_Drop",

  /**
 * **设置战利品掉落内容** `(Execution.Inventory.Set_Loot_Content)`
 *
 * - 以字典形式设置掉落者实体上战利品组件中战利品的掉落内容
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **725** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `dropper_entity` || 掉落者实体 |
 * | 1 || 🔹 || `D<Cfg,Int>` || `loot_dict` || 战利品掉落字典 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Inventory_SetLootContent: "Execution.Inventory.Set_Loot_Content",

  /**
 * **修改掉落物组件道具数量** `(Execution.Inventory.Modify_Loot_Item)`
 *
 * - 修改掉落物元件上掉落物组件内指定道具的数量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **726** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `drop_entity` || 掉落物实体 |
 * | 1 || 🔹 || `Cfg` || `item_config_id` || 道具配置ID |
 * | 2 || 🔹 || `Int` || `item_count` || 变更值: 变更后的值=变更前的值+变更值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Inventory_ModifyLootItem: "Execution.Inventory.Modify_Loot_Item",

  /**
 * **修改掉落物组件货币数量** `(Execution.Inventory.Modify_Loot_Currency)`
 *
 * - 修改掉落物元件上掉落物组件内指定货币的数量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **727** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `drop_entity` || 掉落物实体 |
 * | 1 || 🔹 || `Cfg` || `currency_config_id` || 货币配置ID |
 * | 2 || 🔹 || `Int` || `currency_count` || 变更值: 变更后的值=变更前的值+变更值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Inventory_ModifyLootCurrency: "Execution.Inventory.Modify_Loot_Currency",

  /**
 * **获取掉落物组件道具数量** `(Query.Item.Get_Loot_Item_Amount)`
 *
 * - 获取掉落物元件上掉落物组件中特定配置ID的道具数量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **728** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `drop_entity` || 掉落物实体 |
 * | 1 || 🔹 || `Cfg` || `item_config_id` || 道具配置ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `item_count` || 道具数量 |
 */
  Query_Item_GetLootItemAmount: "Query.Item.Get_Loot_Item_Amount",

  /**
 * **获取掉落物组件货币数量** `(Query.Item.Get_Loot_Currency_Amount)`
 *
 * - 获取掉落物元件上掉落物组件中特定配置ID的货币数量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **729** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `drop_entity` || 掉落物实体 |
 * | 1 || 🔹 || `Cfg` || `currency_id` || 货币配置ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `coin_count` || 货币数量 |
 */
  Query_Item_GetLootCurrencyAmount: "Query.Item.Get_Loot_Currency_Amount",

  /**
 * **获取掉落物组件所有道具** `(Query.Item.Get_Loot_Items)`
 *
 * - 获取掉落物元件上掉落物组件中的所有道具
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **730** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `looter` || 掉落者实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `D<Cfg,Int>` || `items` || 道具字典 |
 */
  Query_Item_GetLootItems: "Query.Item.Get_Loot_Items",

  /**
 * **获取掉落物组件所有货币** `(Query.Item.Get_Loot_Currency)`
 *
 * - 获取掉落物元件上掉落物组件中的所有货币
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **731** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `looter` || 掉落者实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `D<Cfg,Int>` || `coins` || 货币字典 |
 */
  Query_Item_GetLootCurrency: "Query.Item.Get_Loot_Currency",

  /**
 * **获取掉落物组件所有装备** `(Query.Item.Get_Loot_Equipment)`
 *
 * - 获取掉落物元件上掉落物组件中的所有装备
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **732** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `drop_entity` || 掉落物实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `equip_index_list` || 装备索引列表 |
 */
  Query_Item_GetLootEquipment: "Query.Item.Get_Loot_Equipment",

  /**
 * **背包内道具被使用时** `(Trigger.Item.On_Item_Use)`
 *
 * - 背包内道具被使用时触发该事件，背包组件的持有者可以收到
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **733** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `owner_entity` || 道具持有者实体 |
 * | 1 || 🔸 || `Gid` || `owner_guid` || 道具持有者GUID |
 * | 2 || 🔸 || `Cfg` || `item_config_id` || 道具配置ID |
 * | 3 || 🔸 || `Int` || `use_count` || 使用数量 |
 */
  Trigger_Item_OnItemUse: "Trigger.Item.On_Item_Use",

  /**
 * **查询装备标签列表** `(Query.Equipment.Get_Tags)`
 *
 * - 查询该装备实例的所有标签组成的列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **734** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `equip_index` || 装备索引 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Cfg>` || `tags` || 标签列表 |
 */
  Query_Equipment_GetTags: "Query.Equipment.Get_Tags",

  /**
 * **设置扫描标签的规则** `(Execution.Scan_Tag.Set_Rules)`
 *
 * - 设置扫描标签的规则，会以设置好的规则执行扫描标签的逻辑
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **735** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `E<STPT>` || `rule_type` || 规则类型: 分为视野优先、距离优先 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_ScanTag_SetRules: "Execution.Scan_Tag.Set_Rules",

  /**
 * **设置扫描组件的生效扫描标签序号** `(Execution.Scan_Tag.Set_Active_Tag)`
 *
 * - 将目标实体的扫描标签组件中对应序号的扫描标签设置为生效
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **736** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Int` || `tag_index` || 扫描标签序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_ScanTag_SetActiveTag: "Execution.Scan_Tag.Set_Active_Tag",

  /**
 * **获取当前生效的扫描标签配置ID** `(Query.Scan_Tag.Get_Active_Tag)`
 *
 * - 获取目标实体上当前生效的扫描标签的配置ID
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **737** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Cfg` || `config_id` || 扫描标签配置ID |
 */
  Query_ScanTag_GetActiveTag: "Query.Scan_Tag.Get_Active_Tag",

  /**
 * **获取角色属性** `(Query.Entity_Related.Get_Character_Attr)`
 *
 * - 获取角色实体的基础属性
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **738** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `level` || 等级 |
 * | 1 || 🔸 || `Flt` || `hp_cur` || 当前生命值 |
 * | 2 || 🔸 || `Flt` || `hp_max` || 上限生命值 |
 * | 3 || 🔸 || `Flt` || `atk_cur` || 当前攻击力 |
 * | 4 || 🔸 || `Flt` || `atk_base` || 基础攻击力 |
 * | 5 || 🔸 || `Flt` || `def_cur` || 当前防御力 |
 * | 6 || 🔸 || `Flt` || `def_base` || 基础防御力 |
 * | 7 || 🔸 || `Flt` || `poise_max` || 受打断值上限 |
 * | 8 || 🔸 || `Flt` || `poise_cur` || 当前受打断值 |
 * | 9 || 🔸 || `E<CIRS>` || `poise_state` || 当前受打断状态 |
 */
  Query_EntityRelated_GetCharacterAttr: "Query.Entity_Related.Get_Character_Attr",

  /**
 * **设置角色技能冷却** `(Execution.Skill.Set_CD)`
 *
 * - 直接设置目标角色某个技能槽位的冷却为指定值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **739** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的角色实体 |
 * | 1 || 🔹 || `E<SLOT>` || `skill_slot` || 角色技能槽位: 要修改的技能所在的槽位，分为普通攻击、技能1-E、技能2-Q、技能3-R、技能4-T和自定义技能 |
 * | 2 || 🔹 || `Flt` || `remain_seconds` || 冷却剩余时间: 修改后的冷却时间为该输入值 |
 * | 3 || 🔹 || `Bol` || `limit_max` || 是否限制最大冷却时间: 为“是”可以限制修改后的冷却时间不小于所限制的值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Skill_SetCD: "Execution.Skill.Set_CD",

  /**
 * **修改角色技能冷却** `(Execution.Skill.Modify_CD)`
 *
 * - 修改目标角色某个技能槽位的冷却，会在当前冷却时间上加修改值，修改值可以为负数
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **740** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的角色实体 |
 * | 1 || 🔹 || `E<SLOT>` || `skill_slot` || 角色技能槽位: 要修改的技能所在的槽位，分为普通攻击、技能1-E、技能2-Q、技能3-R、技能4-T和自定义技能 |
 * | 2 || 🔹 || `Flt` || `delta_seconds` || 冷却时间修改值: 修改后的值为：原值+修改值 |
 * | 3 || 🔹 || `Bol` || `limit_max` || 是否限制最大冷却时间: 为“是”可以限制修改后的冷却时间不小于所限制的值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Skill_ModifyCD: "Execution.Skill.Modify_CD",

  /**
 * **按最大冷却时间修改技能冷却百分比** `(Execution.Skill.Modify_CD_Ratio)`
 *
 * - 通过技能最大冷却时间的百分比来修改角色某个技能槽位内的技能
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **741** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的角色实体 |
 * | 1 || 🔹 || `E<SLOT>` || `skill_slot` || 角色技能槽位: 要修改的技能所在的槽位，分为普通攻击、技能1-E、技能2-Q、技能3-R、技能4-T和自定义技能 |
 * | 2 || 🔹 || `Flt` || `ratio_delta` || 冷却比例修改值: 修改后的实际冷却时间为：原冷却时间*冷却比例修改值 |
 * | 3 || 🔹 || `Bol` || `limit_max` || 是否限制最大冷却时间: 为“是”可以限制修改后的冷却时间不小于所限制的值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Skill_ModifyCDRatio: "Execution.Skill.Modify_CD_Ratio",

  /**
 * **装备指定序号添加词条** `(Execution.Equipment.Add_Affix_By_ID)`
 *
 * - 对指定装备实例的指定词条序号位置添加预先配置好的词条，可以覆写词条的数值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **742** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Int` || `equip_index` || 装备索引: 【装备初始化】时生成的整数型索引来标识该装备实例 |
 * | 1 || 🔹 || `Cfg` || `affix_config_id` || 词条配置ID: 装备数据管理中预先配置好的词条的对应配置ID |
 * | 2 || 🔹 || `Int` || `insert_index` || 插入序号 |
 * | 3 || 🔹 || `Bol` || `overwrite` || 是否覆写词条值 |
 * | 4 || 🔹 || `Flt` || `affix_value` || 词条数值: 可以覆写预先配置好的词条上的数值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Equipment_AddAffixByID: "Execution.Equipment.Add_Affix_By_ID",

  /**
 * **随机卡牌选择器选择列表** `(Execution.Deck_Selector.Get_Random_List)`
 *
 * - 将输入的列表进行随机排序
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **743** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `L<Int>` || `selection_list` || 列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_DeckSelector_GetRandomList: "Execution.Deck_Selector.Get_Random_List",

  /**
 * **获取拥有者实体** `(Query.Entity_Related.Get_Owner)`
 *
 * - 获取指定目标实体的拥有者实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **744** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `owner_entity` || 拥有者实体 |
 */
  Query_EntityRelated_GetOwner: "Query.Entity_Related.Get_Owner",

  /**
 * **获取实体拥有的实体列表** `(Query.Entity_Related.Get_Owned_Entities)`
 *
 * - 获取所有以目标实体为拥有者的实体组成的列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **745** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `entities` || 实体列表 |
 */
  Query_EntityRelated_GetOwnedEntities: "Query.Entity_Related.Get_Owned_Entities",

  /**
 * **根据槽位序号查询单位状态层数** `(Query.Unit_Status.Get_Status_Stacks)`
 *
 * - 查询目标实体指定槽位上的特定单位状态的层数
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **746** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 查询目标实体 |
 * | 1 || 🔹 || `Cfg` || `config_id` || 单位状态配置ID |
 * | 2 || 🔹 || `Int` || `slot_index` || 槽位序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `layers` || 层数 |
 */
  Query_UnitStatus_GetStatusStacks: "Query.Unit_Status.Get_Status_Stacks",

  /**
 * **根据槽位序号查询单位状态施加者** `(Query.Unit_Status.Get_Status_Applier)`
 *
 * - 查询目标实体指定槽位上的特定单位状态的施加者
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **747** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 查询目标实体 |
 * | 1 || 🔹 || `Cfg` || `config_id` || 单位状态配置ID |
 * | 2 || 🔹 || `Int` || `slot_index` || 槽位序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `applier` || 施加者实体 |
 */
  Query_UnitStatus_GetStatusApplier: "Query.Unit_Status.Get_Status_Applier",

  /**
 * **查询单位状态的槽位序号列表** `(Query.Unit_Status.Get_Status_Slots)`
 *
 * - 查询指定目标实体上特定配置ID的单位状态的所有槽位序号列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **748** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 查询目标实体 |
 * | 1 || 🔹 || `Cfg` || `config_id` || 单位状态配置ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `slot_index_list` || 槽位序号列表 |
 */
  Query_UnitStatus_GetStatusSlots: "Query.Unit_Status.Get_Status_Slots",

  /**
 * **根据装备索引查询装备配置ID** `(Query.Equipment.Get_Config_ID)`
 *
 * - 根据装备索引查询装备配置ID，装备实例的索引可以在【装备初始化】事件中获取到
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **749** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `equip_index` || 装备索引 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Cfg` || `equip_config_id` || 装备配置ID |
 */
  Query_Equipment_GetConfigID: "Query.Equipment.Get_Config_ID",

  /**
 * **根据玩家序号获取玩家GUID** `(Query.Character_Related.Get_GUID_By_ID)`
 *
 * - 根据玩家序号获取玩家GUID，玩家序号即该玩家为玩家几
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **750** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `player_index` || 玩家序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Gid` || `player_guid` || 玩家GUID |
 */
  Query_CharacterRelated_GetGUIDByID: "Query.Character_Related.Get_GUID_By_ID",

  /**
 * **根据玩家GUID获取玩家序号** `(Query.Character_Related.Get_ID_By_GUID)`
 *
 * - 根据玩家GUID获取玩家序号，玩家序号即该玩家为玩家几
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **751** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Gid` || `player_guid` || 玩家GUID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `player_index` || 玩家序号 |
 */
  Query_CharacterRelated_GetIDByGUID: "Query.Character_Related.Get_ID_By_GUID",

  /**
 * **根据时间戳计算格式化时间** `(Arithmetic.Math.Timestamp_To_Time)`
 *
 * - 根据输入的时间戳将其转化为格式化时间
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **752** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `timestamp` || 时间戳 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `year` || 年 |
 * | 1 || 🔸 || `Int` || `month` || 月 |
 * | 2 || 🔸 || `Int` || `day` || 日 |
 * | 3 || 🔸 || `Int` || `hour` || 时 |
 * | 4 || 🔸 || `Int` || `minute` || 分 |
 * | 5 || 🔸 || `Int` || `second` || 秒 |
 */
  Arithmetic_Math_TimestampToTime: "Arithmetic.Math.Timestamp_To_Time",

  /**
 * **根据格式化时间计算时间戳** `(Arithmetic.Math.Time_To_Timestamp)`
 *
 * - 根据输入的格式化时间将其转化为时间戳
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **753** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `year` || 年 |
 * | 1 || 🔹 || `Int` || `month` || 月 |
 * | 2 || 🔹 || `Int` || `day` || 日 |
 * | 3 || 🔹 || `Int` || `hour` || 时 |
 * | 4 || 🔹 || `Int` || `minute` || 分 |
 * | 5 || 🔹 || `Int` || `second` || 秒 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `timestamp` || 时间戳 |
 */
  Arithmetic_Math_TimeToTimestamp: "Arithmetic.Math.Time_To_Timestamp",

  /**
 * **根据时间戳计算星期几** `(Arithmetic.Math.Timestamp_To_Weekday)`
 *
 * - 根据输入的时间戳将其转化为星期几
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **754** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `timestamp` || 时间戳 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `weekday` || 星期 |
 */
  Arithmetic_Math_TimestampToWeekday: "Arithmetic.Math.Timestamp_To_Weekday",

  /**
 * **查询时间戳（UTC+0时区）** `(Query.Math.Get_Timestamp)`
 *
 * - 可以查询当前的时间戳
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **755** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `timestamp` || 时间戳 |
 */
  Query_Math_GetTimestamp: "Query.Math.Get_Timestamp",

  /**
 * **查询服务器时区** `(Query.Math.Get_Timezone)`
 *
 * - 可以查询服务器的时区
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **756** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `timezone` || 时区 |
 */
  Query_Math_GetTimezone: "Query.Math.Get_Timezone",

  /**
 * **创建元件组** `(Execution.Entity_Related.Create_Prefab_Group)`
 *
 * - 根据元件组索引创建该元件组内包含的实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **757** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Int` || `component_group_index` || 元件组索引: 该元件组的标识 |
 * | 1 || 🔹 || `Vec` || `position` || 位置: 元件组中心的绝对位置 |
 * | 2 || 🔹 || `Vec` || `rotation` || 旋转: 元件组中心的绝对旋转 |
 * | 3 || 🔹 || `Ety` || `owner_entity` || 归属者实体: 可决定创建后实体是否归属于某个实体 |
 * | 4 || 🔹 || `Int` || `level` || 等级: 决定实体创建时的等级 |
 * | 5 || 🔹 || `L<Int>` || `unit_tag_indexes` || 单位标签索引列表: 可决定实体创建时携带的单位标签 |
 * | 6 || 🔹 || `Bol` || `override_level` || 是否覆写等级: 为否时，【等级】参数不生效 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `L<Ety>` || `created_entities` || 创建后实体列表: 以该方式创建的实体没有GUID |
 */
  Execution_EntityRelated_CreatePrefabGroup: "Execution.Entity_Related.Create_Prefab_Group",

  /**
 * **获取默认模式的造物仇恨列表** `(Query.Creation.Get_Aggro_List)`
 *
 * - 获取造物的经典仇恨模式的仇恨列表，即仅仇恨配置为【默认类型】时，该节点才会有正确的输出列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **758** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `creation` || 造物实体: 运行时的造物实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `aggro` || 仇恨列表: 造物当前对哪些实体有仇恨，该列表是无序的 |
 */
  Query_Creation_GetAggroList: "Query.Creation.Get_Aggro_List",

  /**
 * **以整数设置玩家排行榜分数** `(Execution.Leaderboard.Set_Score_Int)`
 *
 * - 以整数设置玩家排行榜分数
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **761** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `L<Int>` || `player_index_list` || 玩家序号列表 |
 * | 1 || 🔹 || `Int` || `score` || 排行榜分数 |
 * | 2 || 🔹 || `Int` || `board_index` || 排行榜序号: 外围系统管理中指定排行榜对应的序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Leaderboard_SetScoreInt: "Execution.Leaderboard.Set_Score_Int",

  /**
 * **以浮点数设置玩家排行榜分数** `(Execution.Leaderboard.Set_Score_Float)`
 *
 * - 以浮点数设置玩家排行榜分数
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **762** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `L<Int>` || `player_index_list` || 玩家序号列表 |
 * | 1 || 🔹 || `Flt` || `score` || 排行榜分数 |
 * | 2 || 🔹 || `Int` || `board_index` || 排行榜序号: 外围系统管理中指定排行榜对应的序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Leaderboard_SetScoreFloat: "Execution.Leaderboard.Set_Score_Float",

  /**
 * **修改环境配置** `(Execution.Character_Related.Modify_Environment)`
 *
 * - 使指定玩家应用指定的环境配置，运行后会立即生效
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **763** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Int` || `config_index` || 环境配置索引: 环境配置的标识 |
 * | 1 || 🔹 || `L<Ety>` || `target_players` || 目标玩家列表: 只对指定玩家列表中的玩家生效 |
 * | 2 || 🔹 || `Bol` || `enable_weather_preset` || 是否启用天气配置: “是”为启用 |
 * | 3 || 🔹 || `Int` || `weather_preset_index` || 天气配置序号: 会生效该序号对应的天气配置，不存在该序号则不生效 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterRelated_ModifyEnvironment: "Execution.Character_Related.Modify_Environment",

  /**
 * **玩家职业解除时** `(Trigger.Class.On_Class_Remove)`
 *
 * - 玩家职业解除时触发该事件发送给对应玩家，可以在更改前职业的职业节点图里收到
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **764** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Cfg` || `career_config_id_old` || 更改前职业配置ID |
 * | 3 || 🔸 || `Cfg` || `career_config_id_new` || 更改后职业配置ID |
 */
  Trigger_Class_OnClassRemove: "Trigger.Class.On_Class_Remove",

  /**
 * **进入易受打断状态时** `(Trigger.Combat.On_Interruptible)`
 *
 * - 实体被攻击进入易受打断状态时触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **765** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Ety` || `attacker` || 攻击者 |
 */
  Trigger_Combat_OnInterruptible: "Trigger.Combat.On_Interruptible",

  /**
 * **查询对局游玩方式及人数** `(Query.General.Get_Game_Info)`
 *
 * - 查询进入对局的理论人数，即参与匹配或开房间的人数和进入对局的方式
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **766** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `player_count` || 游玩人数 |
 * | 1 || 🔸 || `E<GMOD>` || `mode` || 游玩方式: 分为试玩、房间游玩、匹配游玩 |
 */
  Query_General_GetGameInfo: "Query.General.Get_Game_Info",

  /**
 * **获取玩家昵称** `(Query.Character_Related.Get_Nickname)`
 *
 * - 获取玩家的昵称
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **767** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `player` || 玩家实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Str` || `nickname` || 玩家昵称 |
 */
  Query_CharacterRelated_GetNickname: "Query.Character_Related.Get_Nickname",

  /**
 * **获得玩家客户端输入设备类型** `(Query.Character_Related.Get_Input_Type)`
 *
 * - 获得玩家的客户端输入设备类型，根据用户界面的映射方式决定
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **768** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `player` || 玩家实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `E<IDVT>` || `input_type` || 输入设备类型: 分为键盘鼠标、手柄、触屏 |
 */
  Query_CharacterRelated_GetInputType: "Query.Character_Related.Get_Input_Type",

  /**
 * **设置聊天频道开关** `(Execution.Chat_Channel.Set_Switch)`
 *
 * - 设置聊天频道的开关
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **769** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Int` || `channel_index` || 频道索引 |
 * | 1 || 🔹 || `Bol` || `text_enabled` || 文字开关 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_ChatChannel_SetSwitch: "Execution.Chat_Channel.Set_Switch",

  /**
 * **修改玩家频道权限** `(Execution.Chat_Channel.Modify_Permission)`
 *
 * - 修改玩家频道权限
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **770** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Gid` || `player_guid` || 玩家GUID |
 * | 1 || 🔹 || `Int` || `channel_index` || 频道索引 |
 * | 2 || 🔹 || `Bol` || `join` || 是否加入: “是”则该频道指定玩家可用 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_ChatChannel_ModifyPermission: "Execution.Chat_Channel.Modify_Permission",

  /**
 * **设置玩家当前频道** `(Execution.Chat_Channel.Set_Current_Channel)`
 *
 * - 设置玩家当前可用的频道，在列表中的频道该玩家可用，不在的该玩家不可用
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **771** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Gid` || `player_guid` || 玩家GUID |
 * | 1 || 🔹 || `L<Int>` || `channel_index_list` || 频道索引列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_ChatChannel_SetCurrentChannel: "Execution.Chat_Channel.Set_Current_Channel",

  /**
 * **消耗礼盒** `(Execution.Wonderland_Box.Consume_Box)`
 *
 * - 可以消耗指定玩家的奇域礼盒
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **772** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `player_entity` || 玩家实体 |
 * | 1 || 🔹 || `Int` || `box_index` || 礼盒索引 |
 * | 2 || 🔹 || `Int` || `consume_count` || 消耗数量 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_WonderlandBox_ConsumeBox: "Execution.Wonderland_Box.Consume_Box",

  /**
 * **查询对应礼盒数量** `(Query.Wonderland_Box_Related.Get_Box_Quantity)`
 *
 * - 查询玩家实体上指定礼盒的数量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **773** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `player` || 玩家实体 |
 * | 1 || 🔹 || `Int` || `box_index` || 礼盒索引 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `count` || 数量 |
 */
  Query_WonderlandBoxRelated_GetBoxQuantity: "Query.Wonderland_Box_Related.Get_Box_Quantity",

  /**
 * **查询对应礼盒消耗数量** `(Query.Wonderland_Box_Related.Get_Box_Consumption)`
 *
 * - 查询玩家实体上指定礼盒的消耗数量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **774** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `player` || 玩家实体 |
 * | 1 || 🔹 || `Int` || `box_index` || 礼盒索引 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `count` || 数量 |
 */
  Query_WonderlandBoxRelated_GetBoxConsumption: "Query.Wonderland_Box_Related.Get_Box_Consumption",

  /**
 * **开启定点运动器** `(Execution.Motion_Device.Activate_Fixed_Point)`
 *
 * - 在关卡运行时为目标实体动态添加一个定点运动型基础运动器
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **775** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体: 生效的实体 |
 * | 1 || 🔹 || `Str` || `mover_name` || 运动器名称: 该运动器的标识 |
 * | 2 || 🔹 || `E<MOVE>` || `move_mode` || 移动方式 |
 * | 3 || 🔹 || `Flt` || `move_speed` || 移动速度 |
 * | 4 || 🔹 || `Vec` || `target_position` || 目标位置: 绝对位置 |
 * | 5 || 🔹 || `Vec` || `target_rotation` || 目标旋转: 绝对旋转 |
 * | 6 || 🔹 || `Bol` || `lock_rotation` || 是否锁定旋转 |
 * | 7 || 🔹 || `E<FMPR>` || `param_type` || 参数类型: 分为固定速度、固定时间 |
 * | 8 || 🔹 || `Flt` || `move_time` || 移动时间 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_MotionDevice_ActivateFixedPoint: "Execution.Motion_Device.Activate_Fixed_Point",

  /**
 * **左移运算** `(Arithmetic.Math.Left_Shift)`
 *
 * - 将输入值作为二进制数逻辑左移一定位数后输出
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **778** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `value` || 值 |
 * | 1 || 🔹 || `Int` || `offset` || 左移位数 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || 结果 |
 */
  Arithmetic_Math_LeftShift: "Arithmetic.Math.Left_Shift",

  /**
 * **右移运算** `(Arithmetic.Math.Right_Shift)`
 *
 * - 将输入值作为二进制数逻辑右移一定位数后输出
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **779** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `value` || 值 |
 * | 1 || 🔹 || `Int` || `offset` || 右移位数 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || 结果 |
 */
  Arithmetic_Math_RightShift: "Arithmetic.Math.Right_Shift",

  /**
 * **按位与** `(Arithmetic.Math.Bitwise_And)`
 *
 * - 将输入的两个值作为二进制进行按位与运算后返回结果
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **780** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `a` || 值1 |
 * | 1 || 🔹 || `Int` || `b` || 值2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || 结果 |
 */
  Arithmetic_Math_BitwiseAnd: "Arithmetic.Math.Bitwise_And",

  /**
 * **按位或** `(Arithmetic.Math.Bitwise_Or)`
 *
 * - 将输入的两个值作为二进制进行按位或运算后返回结果
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **781** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `a` || 值1 |
 * | 1 || 🔹 || `Int` || `b` || 值2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || 结果 |
 */
  Arithmetic_Math_BitwiseOr: "Arithmetic.Math.Bitwise_Or",

  /**
 * **按位异或** `(Arithmetic.Math.Bitwise_Xor)`
 *
 * - 将输入的两个值作为二进制进行按位异或运算后返回结果
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **782** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `a` || 值1 |
 * | 1 || 🔹 || `Int` || `b` || 值2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || 结果 |
 */
  Arithmetic_Math_BitwiseXor: "Arithmetic.Math.Bitwise_Xor",

  /**
 * **按位取补** `(Arithmetic.Math.Bitwise_Not)`
 *
 * - 将输入值作为二进制进行按位取补运算后返回结果
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **783** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `value` || 值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || 结果 |
 */
  Arithmetic_Math_BitwiseNot: "Arithmetic.Math.Bitwise_Not",

  /**
 * **按位写入** `(Arithmetic.Math.Write_Bit)`
 *
 * - 将写入值作为二进制数，写入被写入值（同样作为二进制数）的【起始位，结束位】。起始位从0开始算，写入的值长度包含起始位和结束位
 * - 如果写入值的二进制有效数字长度（从左起第一个1开始计算）超过写入的长度，则写入失败，返回被写入值
 * - 如果写入值是负数，也会因为写入值超出长度而写入失败（负数的二进制首位为符号位1）
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **784** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `Input0` || 被写入值 |
 * | 1 || 🔹 || `Int` || `Input1` || 写入值 |
 * | 2 || 🔹 || `Int` || `Input2` || 写入起始位 |
 * | 3 || 🔹 || `Int` || `Input3` || 写入结束位 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || 结果 |
 */
  Arithmetic_Math_WriteBit: "Arithmetic.Math.Write_Bit",

  /**
 * **按位读出** `(Arithmetic.Math.Read_Bit)`
 *
 * - 从值（以二进制表示）的【起始位，结束位】读出值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **785** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `Input0` || 值 |
 * | 1 || 🔹 || `Int` || `Input1` || 读出起始位 |
 * | 2 || 🔹 || `Int` || `Input2` || 读出结束位 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || 结果 |
 */
  Arithmetic_Math_ReadBit: "Arithmetic.Math.Read_Bit",

  /**
 * **角色移动速度达到条件时** `(Trigger.Entity_Related.On_Speed_Condition)`
 *
 * - 为角色实体添加单位状态效果【监听移动速率】，达成条件会触发该事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **946** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Cfg` || `state_config_id` || 单位状态配置ID |
 * | 3 || 🔸 || `E<OCMP>` || `cmp_type` || 条件：比较类型 |
 * | 4 || 🔸 || `Flt` || `cmp_value` || 条件：比较值 |
 * | 5 || 🔸 || `Flt` || `current_speed` || 当前移动速度 |
 */
  Trigger_EntityRelated_OnSpeedCondition: "Trigger.Entity_Related.On_Speed_Condition",

  /**
 * **查询角色当前移动速度** `(Query.Entity_Related.Get_Move_Speed)`
 *
 * - 仅当角色拥有【监听移动速率】的单位状态效果时，才能查询
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **947** || 🖥️ Server || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `character` || 角色实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `speed` || 当前速度 |
 * | 1 || 🔸 || `Vec` || `speed_vector` || 速度向量 |
 */
  Query_EntityRelated_GetMoveSpeed: "Query.Entity_Related.Get_Move_Speed",

  /**
 * **对字典设置或新增键值对** `(Execution.Dictionary.Set_Value)`
 *
 * - 为指定字典新增一个键值对
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **948** || 🖥️ Server || ⚙️ Execution || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || 字典 |
 * | 1 || 🔷 || **`R<K>`** || `key` || 键 |
 * | 2 || 🔷 || **`R<V>`** || `value` || 值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 *
 * #### 🧬 Variant Constraints
 * * `C<K:Ety,V:Ety>`
 * * `C<K:Ety,V:Gid>`
 * * `C<K:Ety,V:Int>`
 * * `C<K:Ety,V:Bol>`
 * * `C<K:Ety,V:Flt>`
 * * `C<K:Ety,V:Str>`
 * * `C<K:Ety,V:Fct>`
 * * `C<K:Ety,V:Vec>`
 * * `C<K:Ety,V:Cfg>`
 * * `C<K:Ety,V:Pfb>`
 * * `C<K:Ety,V:L<Ety>>`
 * * `C<K:Ety,V:L<Gid>>`
 * * `C<K:Ety,V:L<Int>>`
 * * `C<K:Ety,V:L<Bol>>`
 * * `C<K:Ety,V:L<Flt>>`
 * * `C<K:Ety,V:L<Str>>`
 * * `C<K:Ety,V:L<Fct>>`
 * * `C<K:Ety,V:L<Vec>>`
 * * `C<K:Ety,V:L<Cfg>>`
 * * `C<K:Gid,V:Ety>`
 * * `C<K:Gid,V:Gid>`
 * * `C<K:Gid,V:Int>`
 * * `C<K:Gid,V:Bol>`
 * * `C<K:Gid,V:Flt>`
 * * `C<K:Gid,V:Str>`
 * * `C<K:Gid,V:Fct>`
 * * `C<K:Gid,V:Vec>`
 * * `C<K:Gid,V:Cfg>`
 * * `C<K:Gid,V:Pfb>`
 * * `C<K:Gid,V:L<Ety>>`
 * * `C<K:Gid,V:L<Gid>>`
 * * `C<K:Gid,V:L<Int>>`
 * * `C<K:Gid,V:L<Bol>>`
 * * `C<K:Gid,V:L<Flt>>`
 * * `C<K:Gid,V:L<Str>>`
 * * `C<K:Gid,V:L<Fct>>`
 * * `C<K:Gid,V:L<Vec>>`
 * * `C<K:Gid,V:L<Cfg>>`
 * * `C<K:Int,V:Ety>`
 * * `C<K:Int,V:Gid>`
 * * `C<K:Int,V:Int>`
 * * `C<K:Int,V:Bol>`
 * * `C<K:Int,V:Flt>`
 * * `C<K:Int,V:Str>`
 * * `C<K:Int,V:Fct>`
 * * `C<K:Int,V:Vec>`
 * * `C<K:Int,V:Cfg>`
 * * `C<K:Int,V:Pfb>`
 * * `C<K:Int,V:L<Ety>>`
 * * `C<K:Int,V:L<Gid>>`
 * * `C<K:Int,V:L<Int>>`
 * * `C<K:Int,V:L<Bol>>`
 * * `C<K:Int,V:L<Flt>>`
 * * `C<K:Int,V:L<Str>>`
 * * `C<K:Int,V:L<Fct>>`
 * * `C<K:Int,V:L<Vec>>`
 * * `C<K:Int,V:L<Cfg>>`
 * * `C<K:Str,V:Ety>`
 * * `C<K:Str,V:Gid>`
 * * `C<K:Str,V:Int>`
 * * `C<K:Str,V:Bol>`
 * * `C<K:Str,V:Flt>`
 * * `C<K:Str,V:Str>`
 * * `C<K:Str,V:Fct>`
 * * `C<K:Str,V:Vec>`
 * * `C<K:Str,V:Cfg>`
 * * `C<K:Str,V:Pfb>`
 * * `C<K:Str,V:L<Ety>>`
 * * `C<K:Str,V:L<Gid>>`
 * * `C<K:Str,V:L<Int>>`
 * * `C<K:Str,V:L<Bol>>`
 * * `C<K:Str,V:L<Flt>>`
 * * `C<K:Str,V:L<Str>>`
 * * `C<K:Str,V:L<Fct>>`
 * * `C<K:Str,V:L<Vec>>`
 * * `C<K:Str,V:L<Cfg>>`
 * * `C<K:Fct,V:Ety>`
 * * `C<K:Fct,V:Gid>`
 * * `C<K:Fct,V:Int>`
 * * `C<K:Fct,V:Bol>`
 * * `C<K:Fct,V:Flt>`
 * * `C<K:Fct,V:Str>`
 * * `C<K:Fct,V:Fct>`
 * * `C<K:Fct,V:Vec>`
 * * `C<K:Fct,V:Cfg>`
 * * `C<K:Fct,V:Pfb>`
 * * `C<K:Fct,V:L<Ety>>`
 * * `C<K:Fct,V:L<Gid>>`
 * * `C<K:Fct,V:L<Int>>`
 * * `C<K:Fct,V:L<Bol>>`
 * * `C<K:Fct,V:L<Flt>>`
 * * `C<K:Fct,V:L<Str>>`
 * * `C<K:Fct,V:L<Fct>>`
 * * `C<K:Fct,V:L<Vec>>`
 * * `C<K:Fct,V:L<Cfg>>`
 * * `C<K:Cfg,V:Ety>`
 * * `C<K:Cfg,V:Gid>`
 * * `C<K:Cfg,V:Int>`
 * * `C<K:Cfg,V:Bol>`
 * * `C<K:Cfg,V:Flt>`
 * * `C<K:Cfg,V:Str>`
 * * `C<K:Cfg,V:Fct>`
 * * `C<K:Cfg,V:Vec>`
 * * `C<K:Cfg,V:Cfg>`
 * * `C<K:Cfg,V:Pfb>`
 * * `C<K:Cfg,V:L<Ety>>`
 * * `C<K:Cfg,V:L<Gid>>`
 * * `C<K:Cfg,V:L<Int>>`
 * * `C<K:Cfg,V:L<Bol>>`
 * * `C<K:Cfg,V:L<Flt>>`
 * * `C<K:Cfg,V:L<Str>>`
 * * `C<K:Cfg,V:L<Fct>>`
 * * `C<K:Cfg,V:L<Vec>>`
 * * `C<K:Cfg,V:L<Cfg>>`
 * * `C<K:Pfb,V:Ety>`
 * * `C<K:Pfb,V:Gid>`
 * * `C<K:Pfb,V:Int>`
 * * `C<K:Pfb,V:Bol>`
 * * `C<K:Pfb,V:Flt>`
 * * `C<K:Pfb,V:Str>`
 * * `C<K:Pfb,V:Fct>`
 * * `C<K:Pfb,V:Vec>`
 * * `C<K:Pfb,V:Cfg>`
 * * `C<K:Pfb,V:Pfb>`
 * * `C<K:Pfb,V:L<Ety>>`
 * * `C<K:Pfb,V:L<Gid>>`
 * * `C<K:Pfb,V:L<Int>>`
 * * `C<K:Pfb,V:L<Bol>>`
 * * `C<K:Pfb,V:L<Flt>>`
 * * `C<K:Pfb,V:L<Str>>`
 * * `C<K:Pfb,V:L<Fct>>`
 * * `C<K:Pfb,V:L<Vec>>`
 * * `C<K:Pfb,V:L<Cfg>>`
 */
  Execution_Dictionary_SetValue: "Execution.Dictionary.Set_Value",

  /**
 * **建立字典** `(Arithmetic.Dictionary.Create_Dictionary)`
 *
 * - 根据输入的键和值列表的顺序依次建立键值对。
 * - 此节点会按照键和值列表中较短的一个进行字典创建，多余的部分会被截断
 * - 如果键列表中存在重复值，则会创建失败，返回空字典
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **1088** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`L<R<K>>`** || `keys` || 键列表 |
 * | 1 || 🔷 || **`L<R<V>>`** || `values` || 值列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`D<R<K>,R<V>>`** || `dict` || 字典 |
 *
 * #### 🧬 Variant Constraints
 * * `C<K:Ety,V:Ety>`
 * * `C<K:Ety,V:Gid>`
 * * `C<K:Ety,V:Int>`
 * * `C<K:Ety,V:Bol>`
 * * `C<K:Ety,V:Flt>`
 * * `C<K:Ety,V:Str>`
 * * `C<K:Ety,V:Fct>`
 * * `C<K:Ety,V:Vec>`
 * * `C<K:Ety,V:Cfg>`
 * * `C<K:Ety,V:Pfb>`
 * * `C<K:Gid,V:Ety>`
 * * `C<K:Gid,V:Gid>`
 * * `C<K:Gid,V:Int>`
 * * `C<K:Gid,V:Bol>`
 * * `C<K:Gid,V:Flt>`
 * * `C<K:Gid,V:Str>`
 * * `C<K:Gid,V:Fct>`
 * * `C<K:Gid,V:Vec>`
 * * `C<K:Gid,V:Cfg>`
 * * `C<K:Gid,V:Pfb>`
 * * `C<K:Int,V:Ety>`
 * * `C<K:Int,V:Gid>`
 * * `C<K:Int,V:Int>`
 * * `C<K:Int,V:Bol>`
 * * `C<K:Int,V:Flt>`
 * * `C<K:Int,V:Str>`
 * * `C<K:Int,V:Fct>`
 * * `C<K:Int,V:Vec>`
 * * `C<K:Int,V:Cfg>`
 * * `C<K:Int,V:Pfb>`
 * * `C<K:Str,V:Ety>`
 * * `C<K:Str,V:Gid>`
 * * `C<K:Str,V:Int>`
 * * `C<K:Str,V:Bol>`
 * * `C<K:Str,V:Flt>`
 * * `C<K:Str,V:Str>`
 * * `C<K:Str,V:Fct>`
 * * `C<K:Str,V:Vec>`
 * * `C<K:Str,V:Cfg>`
 * * `C<K:Str,V:Pfb>`
 * * `C<K:Fct,V:Ety>`
 * * `C<K:Fct,V:Gid>`
 * * `C<K:Fct,V:Int>`
 * * `C<K:Fct,V:Bol>`
 * * `C<K:Fct,V:Flt>`
 * * `C<K:Fct,V:Str>`
 * * `C<K:Fct,V:Fct>`
 * * `C<K:Fct,V:Vec>`
 * * `C<K:Fct,V:Cfg>`
 * * `C<K:Fct,V:Pfb>`
 * * `C<K:Cfg,V:Ety>`
 * * `C<K:Cfg,V:Gid>`
 * * `C<K:Cfg,V:Int>`
 * * `C<K:Cfg,V:Bol>`
 * * `C<K:Cfg,V:Flt>`
 * * `C<K:Cfg,V:Str>`
 * * `C<K:Cfg,V:Fct>`
 * * `C<K:Cfg,V:Vec>`
 * * `C<K:Cfg,V:Cfg>`
 * * `C<K:Cfg,V:Pfb>`
 * * `C<K:Pfb,V:Ety>`
 * * `C<K:Pfb,V:Gid>`
 * * `C<K:Pfb,V:Int>`
 * * `C<K:Pfb,V:Bol>`
 * * `C<K:Pfb,V:Flt>`
 * * `C<K:Pfb,V:Str>`
 * * `C<K:Pfb,V:Fct>`
 * * `C<K:Pfb,V:Vec>`
 * * `C<K:Pfb,V:Cfg>`
 * * `C<K:Pfb,V:Pfb>`
 */
  Arithmetic_Dictionary_CreateDictionary: "Arithmetic.Dictionary.Create_Dictionary",

  /**
 * **以键查询字典值** `(Query.Dictionary.Get_Value)`
 *
 * - 根据键查询字典中对应的值，如果键不存在，则返回类型默认值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **1158** || 🖥️ Server || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || 字典 |
 * | 1 || 🔷 || **`R<K>`** || `key` || 键 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<V>`** || `value` || 值 |
 *
 * #### 🧬 Variant Constraints
 * * `C<K:Ety,V:Ety>`
 * * `C<K:Ety,V:Gid>`
 * * `C<K:Ety,V:Int>`
 * * `C<K:Ety,V:Bol>`
 * * `C<K:Ety,V:Flt>`
 * * `C<K:Ety,V:Str>`
 * * `C<K:Ety,V:Fct>`
 * * `C<K:Ety,V:Vec>`
 * * `C<K:Ety,V:Cfg>`
 * * `C<K:Ety,V:Pfb>`
 * * `C<K:Ety,V:L<Ety>>`
 * * `C<K:Ety,V:L<Gid>>`
 * * `C<K:Ety,V:L<Int>>`
 * * `C<K:Ety,V:L<Bol>>`
 * * `C<K:Ety,V:L<Flt>>`
 * * `C<K:Ety,V:L<Str>>`
 * * `C<K:Ety,V:L<Fct>>`
 * * `C<K:Ety,V:L<Vec>>`
 * * `C<K:Ety,V:L<Cfg>>`
 * * `C<K:Gid,V:Ety>`
 * * `C<K:Gid,V:Gid>`
 * * `C<K:Gid,V:Int>`
 * * `C<K:Gid,V:Bol>`
 * * `C<K:Gid,V:Flt>`
 * * `C<K:Gid,V:Str>`
 * * `C<K:Gid,V:Fct>`
 * * `C<K:Gid,V:Vec>`
 * * `C<K:Gid,V:Cfg>`
 * * `C<K:Gid,V:Pfb>`
 * * `C<K:Gid,V:L<Ety>>`
 * * `C<K:Gid,V:L<Gid>>`
 * * `C<K:Gid,V:L<Int>>`
 * * `C<K:Gid,V:L<Bol>>`
 * * `C<K:Gid,V:L<Flt>>`
 * * `C<K:Gid,V:L<Str>>`
 * * `C<K:Gid,V:L<Fct>>`
 * * `C<K:Gid,V:L<Vec>>`
 * * `C<K:Gid,V:L<Cfg>>`
 * * `C<K:Int,V:Ety>`
 * * `C<K:Int,V:Gid>`
 * * `C<K:Int,V:Int>`
 * * `C<K:Int,V:Bol>`
 * * `C<K:Int,V:Flt>`
 * * `C<K:Int,V:Str>`
 * * `C<K:Int,V:Fct>`
 * * `C<K:Int,V:Vec>`
 * * `C<K:Int,V:Cfg>`
 * * `C<K:Int,V:Pfb>`
 * * `C<K:Int,V:L<Ety>>`
 * * `C<K:Int,V:L<Gid>>`
 * * `C<K:Int,V:L<Int>>`
 * * `C<K:Int,V:L<Bol>>`
 * * `C<K:Int,V:L<Flt>>`
 * * `C<K:Int,V:L<Str>>`
 * * `C<K:Int,V:L<Fct>>`
 * * `C<K:Int,V:L<Vec>>`
 * * `C<K:Int,V:L<Cfg>>`
 * * `C<K:Str,V:Ety>`
 * * `C<K:Str,V:Gid>`
 * * `C<K:Str,V:Int>`
 * * `C<K:Str,V:Bol>`
 * * `C<K:Str,V:Flt>`
 * * `C<K:Str,V:Str>`
 * * `C<K:Str,V:Fct>`
 * * `C<K:Str,V:Vec>`
 * * `C<K:Str,V:Cfg>`
 * * `C<K:Str,V:Pfb>`
 * * `C<K:Str,V:L<Ety>>`
 * * `C<K:Str,V:L<Gid>>`
 * * `C<K:Str,V:L<Int>>`
 * * `C<K:Str,V:L<Bol>>`
 * * `C<K:Str,V:L<Flt>>`
 * * `C<K:Str,V:L<Str>>`
 * * `C<K:Str,V:L<Fct>>`
 * * `C<K:Str,V:L<Vec>>`
 * * `C<K:Str,V:L<Cfg>>`
 * * `C<K:Fct,V:Ety>`
 * * `C<K:Fct,V:Gid>`
 * * `C<K:Fct,V:Int>`
 * * `C<K:Fct,V:Bol>`
 * * `C<K:Fct,V:Flt>`
 * * `C<K:Fct,V:Str>`
 * * `C<K:Fct,V:Fct>`
 * * `C<K:Fct,V:Vec>`
 * * `C<K:Fct,V:Cfg>`
 * * `C<K:Fct,V:Pfb>`
 * * `C<K:Fct,V:L<Ety>>`
 * * `C<K:Fct,V:L<Gid>>`
 * * `C<K:Fct,V:L<Int>>`
 * * `C<K:Fct,V:L<Bol>>`
 * * `C<K:Fct,V:L<Flt>>`
 * * `C<K:Fct,V:L<Str>>`
 * * `C<K:Fct,V:L<Fct>>`
 * * `C<K:Fct,V:L<Vec>>`
 * * `C<K:Fct,V:L<Cfg>>`
 * * `C<K:Cfg,V:Ety>`
 * * `C<K:Cfg,V:Gid>`
 * * `C<K:Cfg,V:Int>`
 * * `C<K:Cfg,V:Bol>`
 * * `C<K:Cfg,V:Flt>`
 * * `C<K:Cfg,V:Str>`
 * * `C<K:Cfg,V:Fct>`
 * * `C<K:Cfg,V:Vec>`
 * * `C<K:Cfg,V:Cfg>`
 * * `C<K:Cfg,V:Pfb>`
 * * `C<K:Cfg,V:L<Ety>>`
 * * `C<K:Cfg,V:L<Gid>>`
 * * `C<K:Cfg,V:L<Int>>`
 * * `C<K:Cfg,V:L<Bol>>`
 * * `C<K:Cfg,V:L<Flt>>`
 * * `C<K:Cfg,V:L<Str>>`
 * * `C<K:Cfg,V:L<Fct>>`
 * * `C<K:Cfg,V:L<Vec>>`
 * * `C<K:Cfg,V:L<Cfg>>`
 * * `C<K:Pfb,V:Ety>`
 * * `C<K:Pfb,V:Gid>`
 * * `C<K:Pfb,V:Int>`
 * * `C<K:Pfb,V:Bol>`
 * * `C<K:Pfb,V:Flt>`
 * * `C<K:Pfb,V:Str>`
 * * `C<K:Pfb,V:Fct>`
 * * `C<K:Pfb,V:Vec>`
 * * `C<K:Pfb,V:Cfg>`
 * * `C<K:Pfb,V:Pfb>`
 * * `C<K:Pfb,V:L<Ety>>`
 * * `C<K:Pfb,V:L<Gid>>`
 * * `C<K:Pfb,V:L<Int>>`
 * * `C<K:Pfb,V:L<Bol>>`
 * * `C<K:Pfb,V:L<Flt>>`
 * * `C<K:Pfb,V:L<Str>>`
 * * `C<K:Pfb,V:L<Fct>>`
 * * `C<K:Pfb,V:L<Vec>>`
 * * `C<K:Pfb,V:L<Cfg>>`
 */
  Query_Dictionary_GetValue: "Query.Dictionary.Get_Value",

  /**
 * **以键对字典移除键值对** `(Execution.Dictionary.Remove_By_Key)`
 *
 * - 以键移除指定字典中的键值对
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **1298** || 🖥️ Server || ⚙️ Execution || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || 字典 |
 * | 1 || 🔷 || **`R<K>`** || `key` || 键 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 *
 * #### 🧬 Variant Constraints
 * * `C<K:Ety,V:Ety>`
 * * `C<K:Ety,V:Gid>`
 * * `C<K:Ety,V:Int>`
 * * `C<K:Ety,V:Bol>`
 * * `C<K:Ety,V:Flt>`
 * * `C<K:Ety,V:Str>`
 * * `C<K:Ety,V:Fct>`
 * * `C<K:Ety,V:Vec>`
 * * `C<K:Ety,V:Cfg>`
 * * `C<K:Ety,V:Pfb>`
 * * `C<K:Gid,V:Ety>`
 * * `C<K:Gid,V:Gid>`
 * * `C<K:Gid,V:Int>`
 * * `C<K:Gid,V:Bol>`
 * * `C<K:Gid,V:Flt>`
 * * `C<K:Gid,V:Str>`
 * * `C<K:Gid,V:Fct>`
 * * `C<K:Gid,V:Vec>`
 * * `C<K:Gid,V:Cfg>`
 * * `C<K:Gid,V:Pfb>`
 * * `C<K:Int,V:Ety>`
 * * `C<K:Int,V:Gid>`
 * * `C<K:Int,V:Int>`
 * * `C<K:Int,V:Bol>`
 * * `C<K:Int,V:Flt>`
 * * `C<K:Int,V:Str>`
 * * `C<K:Int,V:Fct>`
 * * `C<K:Int,V:Vec>`
 * * `C<K:Int,V:Cfg>`
 * * `C<K:Int,V:Pfb>`
 * * `C<K:Str,V:Ety>`
 * * `C<K:Str,V:Gid>`
 * * `C<K:Str,V:Int>`
 * * `C<K:Str,V:Bol>`
 * * `C<K:Str,V:Flt>`
 * * `C<K:Str,V:Str>`
 * * `C<K:Str,V:Fct>`
 * * `C<K:Str,V:Vec>`
 * * `C<K:Str,V:Cfg>`
 * * `C<K:Str,V:Pfb>`
 * * `C<K:Fct,V:Ety>`
 * * `C<K:Fct,V:Gid>`
 * * `C<K:Fct,V:Int>`
 * * `C<K:Fct,V:Bol>`
 * * `C<K:Fct,V:Flt>`
 * * `C<K:Fct,V:Str>`
 * * `C<K:Fct,V:Fct>`
 * * `C<K:Fct,V:Vec>`
 * * `C<K:Fct,V:Cfg>`
 * * `C<K:Fct,V:Pfb>`
 * * `C<K:Cfg,V:Ety>`
 * * `C<K:Cfg,V:Gid>`
 * * `C<K:Cfg,V:Int>`
 * * `C<K:Cfg,V:Bol>`
 * * `C<K:Cfg,V:Flt>`
 * * `C<K:Cfg,V:Str>`
 * * `C<K:Cfg,V:Fct>`
 * * `C<K:Cfg,V:Vec>`
 * * `C<K:Cfg,V:Cfg>`
 * * `C<K:Cfg,V:Pfb>`
 * * `C<K:Pfb,V:Ety>`
 * * `C<K:Pfb,V:Gid>`
 * * `C<K:Pfb,V:Int>`
 * * `C<K:Pfb,V:Bol>`
 * * `C<K:Pfb,V:Flt>`
 * * `C<K:Pfb,V:Str>`
 * * `C<K:Pfb,V:Fct>`
 * * `C<K:Pfb,V:Vec>`
 * * `C<K:Pfb,V:Cfg>`
 * * `C<K:Pfb,V:Pfb>`
 * * `C<K:Ety,V:L<Ety>>`
 * * `C<K:Ety,V:L<Gid>>`
 * * `C<K:Ety,V:L<Int>>`
 * * `C<K:Ety,V:L<Bol>>`
 * * `C<K:Ety,V:L<Flt>>`
 * * `C<K:Ety,V:L<Str>>`
 * * `C<K:Ety,V:L<Fct>>`
 * * `C<K:Ety,V:L<Vec>>`
 * * `C<K:Ety,V:L<Cfg>>`
 * * `C<K:Gid,V:L<Ety>>`
 * * `C<K:Gid,V:L<Gid>>`
 * * `C<K:Gid,V:L<Int>>`
 * * `C<K:Gid,V:L<Bol>>`
 * * `C<K:Gid,V:L<Flt>>`
 * * `C<K:Gid,V:L<Str>>`
 * * `C<K:Gid,V:L<Fct>>`
 * * `C<K:Gid,V:L<Vec>>`
 * * `C<K:Gid,V:L<Cfg>>`
 * * `C<K:Int,V:L<Ety>>`
 * * `C<K:Int,V:L<Gid>>`
 * * `C<K:Int,V:L<Int>>`
 * * `C<K:Int,V:L<Bol>>`
 * * `C<K:Int,V:L<Flt>>`
 * * `C<K:Int,V:L<Str>>`
 * * `C<K:Int,V:L<Fct>>`
 * * `C<K:Int,V:L<Vec>>`
 * * `C<K:Int,V:L<Cfg>>`
 * * `C<K:Str,V:L<Ety>>`
 * * `C<K:Str,V:L<Gid>>`
 * * `C<K:Str,V:L<Int>>`
 * * `C<K:Str,V:L<Bol>>`
 * * `C<K:Str,V:L<Flt>>`
 * * `C<K:Str,V:L<Str>>`
 * * `C<K:Str,V:L<Fct>>`
 * * `C<K:Str,V:L<Vec>>`
 * * `C<K:Str,V:L<Cfg>>`
 * * `C<K:Fct,V:L<Ety>>`
 * * `C<K:Fct,V:L<Gid>>`
 * * `C<K:Fct,V:L<Int>>`
 * * `C<K:Fct,V:L<Bol>>`
 * * `C<K:Fct,V:L<Flt>>`
 * * `C<K:Fct,V:L<Str>>`
 * * `C<K:Fct,V:L<Fct>>`
 * * `C<K:Fct,V:L<Vec>>`
 * * `C<K:Fct,V:L<Cfg>>`
 * * `C<K:Cfg,V:L<Ety>>`
 * * `C<K:Cfg,V:L<Gid>>`
 * * `C<K:Cfg,V:L<Int>>`
 * * `C<K:Cfg,V:L<Bol>>`
 * * `C<K:Cfg,V:L<Flt>>`
 * * `C<K:Cfg,V:L<Str>>`
 * * `C<K:Cfg,V:L<Fct>>`
 * * `C<K:Cfg,V:L<Vec>>`
 * * `C<K:Cfg,V:L<Cfg>>`
 * * `C<K:Pfb,V:L<Ety>>`
 * * `C<K:Pfb,V:L<Gid>>`
 * * `C<K:Pfb,V:L<Int>>`
 * * `C<K:Pfb,V:L<Bol>>`
 * * `C<K:Pfb,V:L<Flt>>`
 * * `C<K:Pfb,V:L<Str>>`
 * * `C<K:Pfb,V:L<Fct>>`
 * * `C<K:Pfb,V:L<Vec>>`
 * * `C<K:Pfb,V:L<Cfg>>`
 */
  Execution_Dictionary_RemoveByKey: "Execution.Dictionary.Remove_By_Key",

  /**
 * **查询字典是否包含特定键** `(Query.Dictionary.Has_Key)`
 *
 * - 查询指定字典是否包含特定的键
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **1368** || 🖥️ Server || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || 字典 |
 * | 1 || 🔷 || **`R<K>`** || `key` || 键 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `contains` || 是否包含 |
 *
 * #### 🧬 Variant Constraints
 * * `C<K:Ety,V:Ety>`
 * * `C<K:Ety,V:Gid>`
 * * `C<K:Ety,V:Int>`
 * * `C<K:Ety,V:Bol>`
 * * `C<K:Ety,V:Flt>`
 * * `C<K:Ety,V:Str>`
 * * `C<K:Ety,V:Fct>`
 * * `C<K:Ety,V:Vec>`
 * * `C<K:Ety,V:Cfg>`
 * * `C<K:Ety,V:Pfb>`
 * * `C<K:Gid,V:Ety>`
 * * `C<K:Gid,V:Gid>`
 * * `C<K:Gid,V:Int>`
 * * `C<K:Gid,V:Bol>`
 * * `C<K:Gid,V:Flt>`
 * * `C<K:Gid,V:Str>`
 * * `C<K:Gid,V:Fct>`
 * * `C<K:Gid,V:Vec>`
 * * `C<K:Gid,V:Cfg>`
 * * `C<K:Gid,V:Pfb>`
 * * `C<K:Int,V:Ety>`
 * * `C<K:Int,V:Gid>`
 * * `C<K:Int,V:Int>`
 * * `C<K:Int,V:Bol>`
 * * `C<K:Int,V:Flt>`
 * * `C<K:Int,V:Str>`
 * * `C<K:Int,V:Fct>`
 * * `C<K:Int,V:Vec>`
 * * `C<K:Int,V:Cfg>`
 * * `C<K:Int,V:Pfb>`
 * * `C<K:Str,V:Ety>`
 * * `C<K:Str,V:Gid>`
 * * `C<K:Str,V:Int>`
 * * `C<K:Str,V:Bol>`
 * * `C<K:Str,V:Flt>`
 * * `C<K:Str,V:Str>`
 * * `C<K:Str,V:Fct>`
 * * `C<K:Str,V:Vec>`
 * * `C<K:Str,V:Cfg>`
 * * `C<K:Str,V:Pfb>`
 * * `C<K:Fct,V:Ety>`
 * * `C<K:Fct,V:Gid>`
 * * `C<K:Fct,V:Int>`
 * * `C<K:Fct,V:Bol>`
 * * `C<K:Fct,V:Flt>`
 * * `C<K:Fct,V:Str>`
 * * `C<K:Fct,V:Fct>`
 * * `C<K:Fct,V:Vec>`
 * * `C<K:Fct,V:Cfg>`
 * * `C<K:Fct,V:Pfb>`
 * * `C<K:Cfg,V:Ety>`
 * * `C<K:Cfg,V:Gid>`
 * * `C<K:Cfg,V:Int>`
 * * `C<K:Cfg,V:Bol>`
 * * `C<K:Cfg,V:Flt>`
 * * `C<K:Cfg,V:Str>`
 * * `C<K:Cfg,V:Fct>`
 * * `C<K:Cfg,V:Vec>`
 * * `C<K:Cfg,V:Cfg>`
 * * `C<K:Cfg,V:Pfb>`
 * * `C<K:Pfb,V:Ety>`
 * * `C<K:Pfb,V:Gid>`
 * * `C<K:Pfb,V:Int>`
 * * `C<K:Pfb,V:Bol>`
 * * `C<K:Pfb,V:Flt>`
 * * `C<K:Pfb,V:Str>`
 * * `C<K:Pfb,V:Fct>`
 * * `C<K:Pfb,V:Vec>`
 * * `C<K:Pfb,V:Cfg>`
 * * `C<K:Pfb,V:Pfb>`
 * * `C<K:Ety,V:L<Ety>>`
 * * `C<K:Ety,V:L<Gid>>`
 * * `C<K:Ety,V:L<Int>>`
 * * `C<K:Ety,V:L<Bol>>`
 * * `C<K:Ety,V:L<Flt>>`
 * * `C<K:Ety,V:L<Str>>`
 * * `C<K:Ety,V:L<Fct>>`
 * * `C<K:Ety,V:L<Vec>>`
 * * `C<K:Ety,V:L<Cfg>>`
 * * `C<K:Gid,V:L<Ety>>`
 * * `C<K:Gid,V:L<Gid>>`
 * * `C<K:Gid,V:L<Int>>`
 * * `C<K:Gid,V:L<Bol>>`
 * * `C<K:Gid,V:L<Flt>>`
 * * `C<K:Gid,V:L<Str>>`
 * * `C<K:Gid,V:L<Fct>>`
 * * `C<K:Gid,V:L<Vec>>`
 * * `C<K:Gid,V:L<Cfg>>`
 * * `C<K:Int,V:L<Ety>>`
 * * `C<K:Int,V:L<Gid>>`
 * * `C<K:Int,V:L<Int>>`
 * * `C<K:Int,V:L<Bol>>`
 * * `C<K:Int,V:L<Flt>>`
 * * `C<K:Int,V:L<Str>>`
 * * `C<K:Int,V:L<Fct>>`
 * * `C<K:Int,V:L<Vec>>`
 * * `C<K:Int,V:L<Cfg>>`
 * * `C<K:Str,V:L<Ety>>`
 * * `C<K:Str,V:L<Gid>>`
 * * `C<K:Str,V:L<Int>>`
 * * `C<K:Str,V:L<Bol>>`
 * * `C<K:Str,V:L<Flt>>`
 * * `C<K:Str,V:L<Str>>`
 * * `C<K:Str,V:L<Fct>>`
 * * `C<K:Str,V:L<Vec>>`
 * * `C<K:Str,V:L<Cfg>>`
 * * `C<K:Fct,V:L<Ety>>`
 * * `C<K:Fct,V:L<Gid>>`
 * * `C<K:Fct,V:L<Int>>`
 * * `C<K:Fct,V:L<Bol>>`
 * * `C<K:Fct,V:L<Flt>>`
 * * `C<K:Fct,V:L<Str>>`
 * * `C<K:Fct,V:L<Fct>>`
 * * `C<K:Fct,V:L<Vec>>`
 * * `C<K:Fct,V:L<Cfg>>`
 * * `C<K:Cfg,V:L<Ety>>`
 * * `C<K:Cfg,V:L<Gid>>`
 * * `C<K:Cfg,V:L<Int>>`
 * * `C<K:Cfg,V:L<Bol>>`
 * * `C<K:Cfg,V:L<Flt>>`
 * * `C<K:Cfg,V:L<Str>>`
 * * `C<K:Cfg,V:L<Fct>>`
 * * `C<K:Cfg,V:L<Vec>>`
 * * `C<K:Cfg,V:L<Cfg>>`
 * * `C<K:Pfb,V:L<Ety>>`
 * * `C<K:Pfb,V:L<Gid>>`
 * * `C<K:Pfb,V:L<Int>>`
 * * `C<K:Pfb,V:L<Bol>>`
 * * `C<K:Pfb,V:L<Flt>>`
 * * `C<K:Pfb,V:L<Str>>`
 * * `C<K:Pfb,V:L<Fct>>`
 * * `C<K:Pfb,V:L<Vec>>`
 * * `C<K:Pfb,V:L<Cfg>>`
 */
  Query_Dictionary_HasKey: "Query.Dictionary.Has_Key",

  /**
 * **查询字典是否包含特定值** `(Query.Dictionary.Has_Value)`
 *
 * - 查询指定字典是否包含特定的值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **1438** || 🖥️ Server || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || 字典 |
 * | 1 || 🔷 || **`R<V>`** || `value` || 值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `contains` || 是否包含 |
 *
 * #### 🧬 Variant Constraints
 * * `C<K:Ety,V:Ety>`
 * * `C<K:Ety,V:Gid>`
 * * `C<K:Ety,V:Int>`
 * * `C<K:Ety,V:Bol>`
 * * `C<K:Ety,V:Flt>`
 * * `C<K:Ety,V:Str>`
 * * `C<K:Ety,V:Fct>`
 * * `C<K:Ety,V:Vec>`
 * * `C<K:Ety,V:Cfg>`
 * * `C<K:Ety,V:Pfb>`
 * * `C<K:Gid,V:Ety>`
 * * `C<K:Gid,V:Gid>`
 * * `C<K:Gid,V:Int>`
 * * `C<K:Gid,V:Bol>`
 * * `C<K:Gid,V:Flt>`
 * * `C<K:Gid,V:Str>`
 * * `C<K:Gid,V:Fct>`
 * * `C<K:Gid,V:Vec>`
 * * `C<K:Gid,V:Cfg>`
 * * `C<K:Gid,V:Pfb>`
 * * `C<K:Int,V:Ety>`
 * * `C<K:Int,V:Gid>`
 * * `C<K:Int,V:Int>`
 * * `C<K:Int,V:Bol>`
 * * `C<K:Int,V:Flt>`
 * * `C<K:Int,V:Str>`
 * * `C<K:Int,V:Fct>`
 * * `C<K:Int,V:Vec>`
 * * `C<K:Int,V:Cfg>`
 * * `C<K:Int,V:Pfb>`
 * * `C<K:Str,V:Ety>`
 * * `C<K:Str,V:Gid>`
 * * `C<K:Str,V:Int>`
 * * `C<K:Str,V:Bol>`
 * * `C<K:Str,V:Flt>`
 * * `C<K:Str,V:Str>`
 * * `C<K:Str,V:Fct>`
 * * `C<K:Str,V:Vec>`
 * * `C<K:Str,V:Cfg>`
 * * `C<K:Str,V:Pfb>`
 * * `C<K:Fct,V:Ety>`
 * * `C<K:Fct,V:Gid>`
 * * `C<K:Fct,V:Int>`
 * * `C<K:Fct,V:Bol>`
 * * `C<K:Fct,V:Flt>`
 * * `C<K:Fct,V:Str>`
 * * `C<K:Fct,V:Fct>`
 * * `C<K:Fct,V:Vec>`
 * * `C<K:Fct,V:Cfg>`
 * * `C<K:Fct,V:Pfb>`
 * * `C<K:Cfg,V:Ety>`
 * * `C<K:Cfg,V:Gid>`
 * * `C<K:Cfg,V:Int>`
 * * `C<K:Cfg,V:Bol>`
 * * `C<K:Cfg,V:Flt>`
 * * `C<K:Cfg,V:Str>`
 * * `C<K:Cfg,V:Fct>`
 * * `C<K:Cfg,V:Vec>`
 * * `C<K:Cfg,V:Cfg>`
 * * `C<K:Cfg,V:Pfb>`
 * * `C<K:Pfb,V:Ety>`
 * * `C<K:Pfb,V:Gid>`
 * * `C<K:Pfb,V:Int>`
 * * `C<K:Pfb,V:Bol>`
 * * `C<K:Pfb,V:Flt>`
 * * `C<K:Pfb,V:Str>`
 * * `C<K:Pfb,V:Fct>`
 * * `C<K:Pfb,V:Vec>`
 * * `C<K:Pfb,V:Cfg>`
 * * `C<K:Pfb,V:Pfb>`
 */
  Query_Dictionary_HasValue: "Query.Dictionary.Has_Value",

  /**
 * **获取字典中键组成的列表** `(Query.Dictionary.Get_Keys)`
 *
 * - 获取字典中所有键组成的列表。由于字典中键值对是无序排列的，所以取出的键列表也不一定按照其插入顺序排列
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **1508** || 🖥️ Server || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || 字典 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`L<R<K>>`** || `keys` || 键列表 |
 *
 * #### 🧬 Variant Constraints
 * * `C<K:Ety,V:Ety>`
 * * `C<K:Ety,V:Gid>`
 * * `C<K:Ety,V:Int>`
 * * `C<K:Ety,V:Bol>`
 * * `C<K:Ety,V:Flt>`
 * * `C<K:Ety,V:Str>`
 * * `C<K:Ety,V:Fct>`
 * * `C<K:Ety,V:Vec>`
 * * `C<K:Ety,V:Cfg>`
 * * `C<K:Ety,V:Pfb>`
 * * `C<K:Gid,V:Ety>`
 * * `C<K:Gid,V:Gid>`
 * * `C<K:Gid,V:Int>`
 * * `C<K:Gid,V:Bol>`
 * * `C<K:Gid,V:Flt>`
 * * `C<K:Gid,V:Str>`
 * * `C<K:Gid,V:Fct>`
 * * `C<K:Gid,V:Vec>`
 * * `C<K:Gid,V:Cfg>`
 * * `C<K:Gid,V:Pfb>`
 * * `C<K:Int,V:Ety>`
 * * `C<K:Int,V:Gid>`
 * * `C<K:Int,V:Int>`
 * * `C<K:Int,V:Bol>`
 * * `C<K:Int,V:Flt>`
 * * `C<K:Int,V:Str>`
 * * `C<K:Int,V:Fct>`
 * * `C<K:Int,V:Vec>`
 * * `C<K:Int,V:Cfg>`
 * * `C<K:Int,V:Pfb>`
 * * `C<K:Str,V:Ety>`
 * * `C<K:Str,V:Gid>`
 * * `C<K:Str,V:Int>`
 * * `C<K:Str,V:Bol>`
 * * `C<K:Str,V:Flt>`
 * * `C<K:Str,V:Str>`
 * * `C<K:Str,V:Fct>`
 * * `C<K:Str,V:Vec>`
 * * `C<K:Str,V:Cfg>`
 * * `C<K:Str,V:Pfb>`
 * * `C<K:Fct,V:Ety>`
 * * `C<K:Fct,V:Gid>`
 * * `C<K:Fct,V:Int>`
 * * `C<K:Fct,V:Bol>`
 * * `C<K:Fct,V:Flt>`
 * * `C<K:Fct,V:Str>`
 * * `C<K:Fct,V:Fct>`
 * * `C<K:Fct,V:Vec>`
 * * `C<K:Fct,V:Cfg>`
 * * `C<K:Fct,V:Pfb>`
 * * `C<K:Cfg,V:Ety>`
 * * `C<K:Cfg,V:Gid>`
 * * `C<K:Cfg,V:Int>`
 * * `C<K:Cfg,V:Bol>`
 * * `C<K:Cfg,V:Flt>`
 * * `C<K:Cfg,V:Str>`
 * * `C<K:Cfg,V:Fct>`
 * * `C<K:Cfg,V:Vec>`
 * * `C<K:Cfg,V:Cfg>`
 * * `C<K:Cfg,V:Pfb>`
 * * `C<K:Pfb,V:Ety>`
 * * `C<K:Pfb,V:Gid>`
 * * `C<K:Pfb,V:Int>`
 * * `C<K:Pfb,V:Bol>`
 * * `C<K:Pfb,V:Flt>`
 * * `C<K:Pfb,V:Str>`
 * * `C<K:Pfb,V:Fct>`
 * * `C<K:Pfb,V:Vec>`
 * * `C<K:Pfb,V:Cfg>`
 * * `C<K:Pfb,V:Pfb>`
 * * `C<K:Ety,V:L<Ety>>`
 * * `C<K:Ety,V:L<Gid>>`
 * * `C<K:Ety,V:L<Int>>`
 * * `C<K:Ety,V:L<Bol>>`
 * * `C<K:Ety,V:L<Flt>>`
 * * `C<K:Ety,V:L<Str>>`
 * * `C<K:Ety,V:L<Fct>>`
 * * `C<K:Ety,V:L<Vec>>`
 * * `C<K:Ety,V:L<Cfg>>`
 * * `C<K:Gid,V:L<Ety>>`
 * * `C<K:Gid,V:L<Gid>>`
 * * `C<K:Gid,V:L<Int>>`
 * * `C<K:Gid,V:L<Bol>>`
 * * `C<K:Gid,V:L<Flt>>`
 * * `C<K:Gid,V:L<Str>>`
 * * `C<K:Gid,V:L<Fct>>`
 * * `C<K:Gid,V:L<Vec>>`
 * * `C<K:Gid,V:L<Cfg>>`
 * * `C<K:Int,V:L<Ety>>`
 * * `C<K:Int,V:L<Gid>>`
 * * `C<K:Int,V:L<Int>>`
 * * `C<K:Int,V:L<Bol>>`
 * * `C<K:Int,V:L<Flt>>`
 * * `C<K:Int,V:L<Str>>`
 * * `C<K:Int,V:L<Fct>>`
 * * `C<K:Int,V:L<Vec>>`
 * * `C<K:Int,V:L<Cfg>>`
 * * `C<K:Str,V:L<Ety>>`
 * * `C<K:Str,V:L<Gid>>`
 * * `C<K:Str,V:L<Int>>`
 * * `C<K:Str,V:L<Bol>>`
 * * `C<K:Str,V:L<Flt>>`
 * * `C<K:Str,V:L<Str>>`
 * * `C<K:Str,V:L<Fct>>`
 * * `C<K:Str,V:L<Vec>>`
 * * `C<K:Str,V:L<Cfg>>`
 * * `C<K:Fct,V:L<Ety>>`
 * * `C<K:Fct,V:L<Gid>>`
 * * `C<K:Fct,V:L<Int>>`
 * * `C<K:Fct,V:L<Bol>>`
 * * `C<K:Fct,V:L<Flt>>`
 * * `C<K:Fct,V:L<Str>>`
 * * `C<K:Fct,V:L<Fct>>`
 * * `C<K:Fct,V:L<Vec>>`
 * * `C<K:Fct,V:L<Cfg>>`
 * * `C<K:Cfg,V:L<Ety>>`
 * * `C<K:Cfg,V:L<Gid>>`
 * * `C<K:Cfg,V:L<Int>>`
 * * `C<K:Cfg,V:L<Bol>>`
 * * `C<K:Cfg,V:L<Flt>>`
 * * `C<K:Cfg,V:L<Str>>`
 * * `C<K:Cfg,V:L<Fct>>`
 * * `C<K:Cfg,V:L<Vec>>`
 * * `C<K:Cfg,V:L<Cfg>>`
 * * `C<K:Pfb,V:L<Ety>>`
 * * `C<K:Pfb,V:L<Gid>>`
 * * `C<K:Pfb,V:L<Int>>`
 * * `C<K:Pfb,V:L<Bol>>`
 * * `C<K:Pfb,V:L<Flt>>`
 * * `C<K:Pfb,V:L<Str>>`
 * * `C<K:Pfb,V:L<Fct>>`
 * * `C<K:Pfb,V:L<Vec>>`
 * * `C<K:Pfb,V:L<Cfg>>`
 */
  Query_Dictionary_GetKeys: "Query.Dictionary.Get_Keys",

  /**
 * **获取字典中值组成的列表** `(Query.Dictionary.Get_Values)`
 *
 * - 获取字典中所有值组成的列表。由于字典中键值对是无序排列的，所以取出的值列表也不一定按照其插入顺序排列
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **1578** || 🖥️ Server || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || 字典 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`L<R<V>>`** || `values` || 值列表 |
 *
 * #### 🧬 Variant Constraints
 * * `C<K:Ety,V:Ety>`
 * * `C<K:Ety,V:Gid>`
 * * `C<K:Ety,V:Int>`
 * * `C<K:Ety,V:Bol>`
 * * `C<K:Ety,V:Flt>`
 * * `C<K:Ety,V:Str>`
 * * `C<K:Ety,V:Fct>`
 * * `C<K:Ety,V:Vec>`
 * * `C<K:Ety,V:Cfg>`
 * * `C<K:Ety,V:Pfb>`
 * * `C<K:Gid,V:Ety>`
 * * `C<K:Gid,V:Gid>`
 * * `C<K:Gid,V:Int>`
 * * `C<K:Gid,V:Bol>`
 * * `C<K:Gid,V:Flt>`
 * * `C<K:Gid,V:Str>`
 * * `C<K:Gid,V:Fct>`
 * * `C<K:Gid,V:Vec>`
 * * `C<K:Gid,V:Cfg>`
 * * `C<K:Gid,V:Pfb>`
 * * `C<K:Int,V:Ety>`
 * * `C<K:Int,V:Gid>`
 * * `C<K:Int,V:Int>`
 * * `C<K:Int,V:Bol>`
 * * `C<K:Int,V:Flt>`
 * * `C<K:Int,V:Str>`
 * * `C<K:Int,V:Fct>`
 * * `C<K:Int,V:Vec>`
 * * `C<K:Int,V:Cfg>`
 * * `C<K:Int,V:Pfb>`
 * * `C<K:Str,V:Ety>`
 * * `C<K:Str,V:Gid>`
 * * `C<K:Str,V:Int>`
 * * `C<K:Str,V:Bol>`
 * * `C<K:Str,V:Flt>`
 * * `C<K:Str,V:Str>`
 * * `C<K:Str,V:Fct>`
 * * `C<K:Str,V:Vec>`
 * * `C<K:Str,V:Cfg>`
 * * `C<K:Str,V:Pfb>`
 * * `C<K:Fct,V:Ety>`
 * * `C<K:Fct,V:Gid>`
 * * `C<K:Fct,V:Int>`
 * * `C<K:Fct,V:Bol>`
 * * `C<K:Fct,V:Flt>`
 * * `C<K:Fct,V:Str>`
 * * `C<K:Fct,V:Fct>`
 * * `C<K:Fct,V:Vec>`
 * * `C<K:Fct,V:Cfg>`
 * * `C<K:Fct,V:Pfb>`
 * * `C<K:Cfg,V:Ety>`
 * * `C<K:Cfg,V:Gid>`
 * * `C<K:Cfg,V:Int>`
 * * `C<K:Cfg,V:Bol>`
 * * `C<K:Cfg,V:Flt>`
 * * `C<K:Cfg,V:Str>`
 * * `C<K:Cfg,V:Fct>`
 * * `C<K:Cfg,V:Vec>`
 * * `C<K:Cfg,V:Cfg>`
 * * `C<K:Cfg,V:Pfb>`
 * * `C<K:Pfb,V:Ety>`
 * * `C<K:Pfb,V:Gid>`
 * * `C<K:Pfb,V:Int>`
 * * `C<K:Pfb,V:Bol>`
 * * `C<K:Pfb,V:Flt>`
 * * `C<K:Pfb,V:Str>`
 * * `C<K:Pfb,V:Fct>`
 * * `C<K:Pfb,V:Vec>`
 * * `C<K:Pfb,V:Cfg>`
 * * `C<K:Pfb,V:Pfb>`
 */
  Query_Dictionary_GetValues: "Query.Dictionary.Get_Values",

  /**
 * **查询字典长度** `(Query.Dictionary.Get_Length)`
 *
 * - 查询字典中键值对的数量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **1648** || 🖥️ Server || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || 字典 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `length` || 长度 |
 *
 * #### 🧬 Variant Constraints
 * * `C<K:Ety,V:Ety>`
 * * `C<K:Ety,V:Gid>`
 * * `C<K:Ety,V:Int>`
 * * `C<K:Ety,V:Bol>`
 * * `C<K:Ety,V:Flt>`
 * * `C<K:Ety,V:Str>`
 * * `C<K:Ety,V:Fct>`
 * * `C<K:Ety,V:Vec>`
 * * `C<K:Ety,V:Cfg>`
 * * `C<K:Ety,V:Pfb>`
 * * `C<K:Gid,V:Ety>`
 * * `C<K:Gid,V:Gid>`
 * * `C<K:Gid,V:Int>`
 * * `C<K:Gid,V:Bol>`
 * * `C<K:Gid,V:Flt>`
 * * `C<K:Gid,V:Str>`
 * * `C<K:Gid,V:Fct>`
 * * `C<K:Gid,V:Vec>`
 * * `C<K:Gid,V:Cfg>`
 * * `C<K:Gid,V:Pfb>`
 * * `C<K:Int,V:Ety>`
 * * `C<K:Int,V:Gid>`
 * * `C<K:Int,V:Int>`
 * * `C<K:Int,V:Bol>`
 * * `C<K:Int,V:Flt>`
 * * `C<K:Int,V:Str>`
 * * `C<K:Int,V:Fct>`
 * * `C<K:Int,V:Vec>`
 * * `C<K:Int,V:Cfg>`
 * * `C<K:Int,V:Pfb>`
 * * `C<K:Str,V:Ety>`
 * * `C<K:Str,V:Gid>`
 * * `C<K:Str,V:Int>`
 * * `C<K:Str,V:Bol>`
 * * `C<K:Str,V:Flt>`
 * * `C<K:Str,V:Str>`
 * * `C<K:Str,V:Fct>`
 * * `C<K:Str,V:Vec>`
 * * `C<K:Str,V:Cfg>`
 * * `C<K:Str,V:Pfb>`
 * * `C<K:Fct,V:Ety>`
 * * `C<K:Fct,V:Gid>`
 * * `C<K:Fct,V:Int>`
 * * `C<K:Fct,V:Bol>`
 * * `C<K:Fct,V:Flt>`
 * * `C<K:Fct,V:Str>`
 * * `C<K:Fct,V:Fct>`
 * * `C<K:Fct,V:Vec>`
 * * `C<K:Fct,V:Cfg>`
 * * `C<K:Fct,V:Pfb>`
 * * `C<K:Cfg,V:Ety>`
 * * `C<K:Cfg,V:Gid>`
 * * `C<K:Cfg,V:Int>`
 * * `C<K:Cfg,V:Bol>`
 * * `C<K:Cfg,V:Flt>`
 * * `C<K:Cfg,V:Str>`
 * * `C<K:Cfg,V:Fct>`
 * * `C<K:Cfg,V:Vec>`
 * * `C<K:Cfg,V:Cfg>`
 * * `C<K:Cfg,V:Pfb>`
 * * `C<K:Pfb,V:Ety>`
 * * `C<K:Pfb,V:Gid>`
 * * `C<K:Pfb,V:Int>`
 * * `C<K:Pfb,V:Bol>`
 * * `C<K:Pfb,V:Flt>`
 * * `C<K:Pfb,V:Str>`
 * * `C<K:Pfb,V:Fct>`
 * * `C<K:Pfb,V:Vec>`
 * * `C<K:Pfb,V:Cfg>`
 * * `C<K:Pfb,V:Pfb>`
 * * `C<K:Ety,V:L<Ety>>`
 * * `C<K:Ety,V:L<Gid>>`
 * * `C<K:Ety,V:L<Int>>`
 * * `C<K:Ety,V:L<Bol>>`
 * * `C<K:Ety,V:L<Flt>>`
 * * `C<K:Ety,V:L<Str>>`
 * * `C<K:Ety,V:L<Fct>>`
 * * `C<K:Ety,V:L<Vec>>`
 * * `C<K:Ety,V:L<Cfg>>`
 * * `C<K:Gid,V:L<Ety>>`
 * * `C<K:Gid,V:L<Gid>>`
 * * `C<K:Gid,V:L<Int>>`
 * * `C<K:Gid,V:L<Bol>>`
 * * `C<K:Gid,V:L<Flt>>`
 * * `C<K:Gid,V:L<Str>>`
 * * `C<K:Gid,V:L<Fct>>`
 * * `C<K:Gid,V:L<Vec>>`
 * * `C<K:Gid,V:L<Cfg>>`
 * * `C<K:Int,V:L<Ety>>`
 * * `C<K:Int,V:L<Gid>>`
 * * `C<K:Int,V:L<Int>>`
 * * `C<K:Int,V:L<Bol>>`
 * * `C<K:Int,V:L<Flt>>`
 * * `C<K:Int,V:L<Str>>`
 * * `C<K:Int,V:L<Fct>>`
 * * `C<K:Int,V:L<Vec>>`
 * * `C<K:Int,V:L<Cfg>>`
 * * `C<K:Str,V:L<Ety>>`
 * * `C<K:Str,V:L<Gid>>`
 * * `C<K:Str,V:L<Int>>`
 * * `C<K:Str,V:L<Bol>>`
 * * `C<K:Str,V:L<Flt>>`
 * * `C<K:Str,V:L<Str>>`
 * * `C<K:Str,V:L<Fct>>`
 * * `C<K:Str,V:L<Vec>>`
 * * `C<K:Str,V:L<Cfg>>`
 * * `C<K:Fct,V:L<Ety>>`
 * * `C<K:Fct,V:L<Gid>>`
 * * `C<K:Fct,V:L<Int>>`
 * * `C<K:Fct,V:L<Bol>>`
 * * `C<K:Fct,V:L<Flt>>`
 * * `C<K:Fct,V:L<Str>>`
 * * `C<K:Fct,V:L<Fct>>`
 * * `C<K:Fct,V:L<Vec>>`
 * * `C<K:Fct,V:L<Cfg>>`
 * * `C<K:Cfg,V:L<Ety>>`
 * * `C<K:Cfg,V:L<Gid>>`
 * * `C<K:Cfg,V:L<Int>>`
 * * `C<K:Cfg,V:L<Bol>>`
 * * `C<K:Cfg,V:L<Flt>>`
 * * `C<K:Cfg,V:L<Str>>`
 * * `C<K:Cfg,V:L<Fct>>`
 * * `C<K:Cfg,V:L<Vec>>`
 * * `C<K:Cfg,V:L<Cfg>>`
 * * `C<K:Pfb,V:L<Ety>>`
 * * `C<K:Pfb,V:L<Gid>>`
 * * `C<K:Pfb,V:L<Int>>`
 * * `C<K:Pfb,V:L<Bol>>`
 * * `C<K:Pfb,V:L<Flt>>`
 * * `C<K:Pfb,V:L<Str>>`
 * * `C<K:Pfb,V:L<Fct>>`
 * * `C<K:Pfb,V:L<Vec>>`
 * * `C<K:Pfb,V:L<Cfg>>`
 */
  Query_Dictionary_GetLength: "Query.Dictionary.Get_Length",

  /**
 * **清空字典** `(Execution.Dictionary.Clear)`
 *
 * - 清空指定字典的键值对
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **1718** || 🖥️ Server || ⚙️ Execution || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || 字典 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 *
 * #### 🧬 Variant Constraints
 * * `C<K:Ety,V:Ety>`
 * * `C<K:Ety,V:Gid>`
 * * `C<K:Ety,V:Int>`
 * * `C<K:Ety,V:Bol>`
 * * `C<K:Ety,V:Flt>`
 * * `C<K:Ety,V:Str>`
 * * `C<K:Ety,V:Fct>`
 * * `C<K:Ety,V:Vec>`
 * * `C<K:Ety,V:Cfg>`
 * * `C<K:Ety,V:Pfb>`
 * * `C<K:Gid,V:Ety>`
 * * `C<K:Gid,V:Gid>`
 * * `C<K:Gid,V:Int>`
 * * `C<K:Gid,V:Bol>`
 * * `C<K:Gid,V:Flt>`
 * * `C<K:Gid,V:Str>`
 * * `C<K:Gid,V:Fct>`
 * * `C<K:Gid,V:Vec>`
 * * `C<K:Gid,V:Cfg>`
 * * `C<K:Gid,V:Pfb>`
 * * `C<K:Int,V:Ety>`
 * * `C<K:Int,V:Gid>`
 * * `C<K:Int,V:Int>`
 * * `C<K:Int,V:Bol>`
 * * `C<K:Int,V:Flt>`
 * * `C<K:Int,V:Str>`
 * * `C<K:Int,V:Fct>`
 * * `C<K:Int,V:Vec>`
 * * `C<K:Int,V:Cfg>`
 * * `C<K:Int,V:Pfb>`
 * * `C<K:Str,V:Ety>`
 * * `C<K:Str,V:Gid>`
 * * `C<K:Str,V:Int>`
 * * `C<K:Str,V:Bol>`
 * * `C<K:Str,V:Flt>`
 * * `C<K:Str,V:Str>`
 * * `C<K:Str,V:Fct>`
 * * `C<K:Str,V:Vec>`
 * * `C<K:Str,V:Cfg>`
 * * `C<K:Str,V:Pfb>`
 * * `C<K:Fct,V:Ety>`
 * * `C<K:Fct,V:Gid>`
 * * `C<K:Fct,V:Int>`
 * * `C<K:Fct,V:Bol>`
 * * `C<K:Fct,V:Flt>`
 * * `C<K:Fct,V:Str>`
 * * `C<K:Fct,V:Fct>`
 * * `C<K:Fct,V:Vec>`
 * * `C<K:Fct,V:Cfg>`
 * * `C<K:Fct,V:Pfb>`
 * * `C<K:Cfg,V:Ety>`
 * * `C<K:Cfg,V:Gid>`
 * * `C<K:Cfg,V:Int>`
 * * `C<K:Cfg,V:Bol>`
 * * `C<K:Cfg,V:Flt>`
 * * `C<K:Cfg,V:Str>`
 * * `C<K:Cfg,V:Fct>`
 * * `C<K:Cfg,V:Vec>`
 * * `C<K:Cfg,V:Cfg>`
 * * `C<K:Cfg,V:Pfb>`
 * * `C<K:Pfb,V:Ety>`
 * * `C<K:Pfb,V:Gid>`
 * * `C<K:Pfb,V:Int>`
 * * `C<K:Pfb,V:Bol>`
 * * `C<K:Pfb,V:Flt>`
 * * `C<K:Pfb,V:Str>`
 * * `C<K:Pfb,V:Fct>`
 * * `C<K:Pfb,V:Vec>`
 * * `C<K:Pfb,V:Cfg>`
 * * `C<K:Pfb,V:Pfb>`
 * * `C<K:Ety,V:L<Ety>>`
 * * `C<K:Ety,V:L<Gid>>`
 * * `C<K:Ety,V:L<Int>>`
 * * `C<K:Ety,V:L<Bol>>`
 * * `C<K:Ety,V:L<Flt>>`
 * * `C<K:Ety,V:L<Str>>`
 * * `C<K:Ety,V:L<Fct>>`
 * * `C<K:Ety,V:L<Vec>>`
 * * `C<K:Ety,V:L<Cfg>>`
 * * `C<K:Gid,V:L<Ety>>`
 * * `C<K:Gid,V:L<Gid>>`
 * * `C<K:Gid,V:L<Int>>`
 * * `C<K:Gid,V:L<Bol>>`
 * * `C<K:Gid,V:L<Flt>>`
 * * `C<K:Gid,V:L<Str>>`
 * * `C<K:Gid,V:L<Fct>>`
 * * `C<K:Gid,V:L<Vec>>`
 * * `C<K:Gid,V:L<Cfg>>`
 * * `C<K:Int,V:L<Ety>>`
 * * `C<K:Int,V:L<Gid>>`
 * * `C<K:Int,V:L<Int>>`
 * * `C<K:Int,V:L<Bol>>`
 * * `C<K:Int,V:L<Flt>>`
 * * `C<K:Int,V:L<Str>>`
 * * `C<K:Int,V:L<Fct>>`
 * * `C<K:Int,V:L<Vec>>`
 * * `C<K:Int,V:L<Cfg>>`
 * * `C<K:Str,V:L<Ety>>`
 * * `C<K:Str,V:L<Gid>>`
 * * `C<K:Str,V:L<Int>>`
 * * `C<K:Str,V:L<Bol>>`
 * * `C<K:Str,V:L<Flt>>`
 * * `C<K:Str,V:L<Str>>`
 * * `C<K:Str,V:L<Fct>>`
 * * `C<K:Str,V:L<Vec>>`
 * * `C<K:Str,V:L<Cfg>>`
 * * `C<K:Fct,V:L<Ety>>`
 * * `C<K:Fct,V:L<Gid>>`
 * * `C<K:Fct,V:L<Int>>`
 * * `C<K:Fct,V:L<Bol>>`
 * * `C<K:Fct,V:L<Flt>>`
 * * `C<K:Fct,V:L<Str>>`
 * * `C<K:Fct,V:L<Fct>>`
 * * `C<K:Fct,V:L<Vec>>`
 * * `C<K:Fct,V:L<Cfg>>`
 * * `C<K:Cfg,V:L<Ety>>`
 * * `C<K:Cfg,V:L<Gid>>`
 * * `C<K:Cfg,V:L<Int>>`
 * * `C<K:Cfg,V:L<Bol>>`
 * * `C<K:Cfg,V:L<Flt>>`
 * * `C<K:Cfg,V:L<Str>>`
 * * `C<K:Cfg,V:L<Fct>>`
 * * `C<K:Cfg,V:L<Vec>>`
 * * `C<K:Cfg,V:L<Cfg>>`
 * * `C<K:Pfb,V:L<Ety>>`
 * * `C<K:Pfb,V:L<Gid>>`
 * * `C<K:Pfb,V:L<Int>>`
 * * `C<K:Pfb,V:L<Bol>>`
 * * `C<K:Pfb,V:L<Flt>>`
 * * `C<K:Pfb,V:L<Str>>`
 * * `C<K:Pfb,V:L<Fct>>`
 * * `C<K:Pfb,V:L<Vec>>`
 * * `C<K:Pfb,V:L<Cfg>>`
 */
  Execution_Dictionary_Clear: "Execution.Dictionary.Clear",

  /**
 * **拼装字典** `(Arithmetic.Dictionary.Assemble_Dictionary)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **1788** || 🖥️ Server || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<K>`** || `key0` || 键0 |
 * | 1 || 🔷 || **`R<V>`** || `val0` || 值0 |
 * | 2 || 🔷 || **`R<K>`** || `key1` || 键1 |
 * | 3 || 🔷 || **`R<V>`** || `val1` || 值1 |
 * | 4 || 🔷 || **`R<K>`** || `key2` || 键2 |
 * | 5 || 🔷 || **`R<V>`** || `val2` || 值2 |
 * | 6 || 🔷 || **`R<K>`** || `key3` || 键3 |
 * | 7 || 🔷 || **`R<V>`** || `val3` || 值3 |
 * | 8 || 🔷 || **`R<K>`** || `key4` || 键4 |
 * | 9 || 🔷 || **`R<V>`** || `val4` || 值4 |
 * | 10 || 🔷 || **`R<K>`** || `key5` || 键5 |
 * | 11 || 🔷 || **`R<V>`** || `val5` || 值5 |
 * | 12 || 🔷 || **`R<K>`** || `key6` || 键6 |
 * | 13 || 🔷 || **`R<V>`** || `val6` || 值6 |
 * | 14 || 🔷 || **`R<K>`** || `key7` || 键7 |
 * | 15 || 🔷 || **`R<V>`** || `val7` || 值7 |
 * | 16 || 🔷 || **`R<K>`** || `key8` || 键8 |
 * | 17 || 🔷 || **`R<V>`** || `val8` || 值8 |
 * | 18 || 🔷 || **`R<K>`** || `key9` || 键9 |
 * | 19 || 🔷 || **`R<V>`** || `val9` || 值9 |
 * | 20 || 🔷 || **`R<K>`** || `key10` || 键10 |
 * | 21 || 🔷 || **`R<V>`** || `val10` || 值10 |
 * | 22 || 🔷 || **`R<K>`** || `key11` || 键11 |
 * | 23 || 🔷 || **`R<V>`** || `val11` || 值11 |
 * | 24 || 🔷 || **`R<K>`** || `key12` || 键12 |
 * | 25 || 🔷 || **`R<V>`** || `val12` || 值12 |
 * | 26 || 🔷 || **`R<K>`** || `key13` || 键13 |
 * | 27 || 🔷 || **`R<V>`** || `val13` || 值13 |
 * | 28 || 🔷 || **`R<K>`** || `key14` || 键14 |
 * | 29 || 🔷 || **`R<V>`** || `val14` || 值14 |
 * | 30 || 🔷 || **`R<K>`** || `key15` || 键15 |
 * | 31 || 🔷 || **`R<V>`** || `val15` || 值15 |
 * | 32 || 🔷 || **`R<K>`** || `key16` || 键16 |
 * | 33 || 🔷 || **`R<V>`** || `val16` || 值16 |
 * | 34 || 🔷 || **`R<K>`** || `key17` || 键17 |
 * | 35 || 🔷 || **`R<V>`** || `val17` || 值17 |
 * | 36 || 🔷 || **`R<K>`** || `key18` || 键18 |
 * | 37 || 🔷 || **`R<V>`** || `val18` || 值18 |
 * | 38 || 🔷 || **`R<K>`** || `key19` || 键19 |
 * | 39 || 🔷 || **`R<V>`** || `val19` || 值19 |
 * | 40 || 🔷 || **`R<K>`** || `key20` || 键20 |
 * | 41 || 🔷 || **`R<V>`** || `val20` || 值20 |
 * | 42 || 🔷 || **`R<K>`** || `key21` || 键21 |
 * | 43 || 🔷 || **`R<V>`** || `val21` || 值21 |
 * | 44 || 🔷 || **`R<K>`** || `key22` || 键22 |
 * | 45 || 🔷 || **`R<V>`** || `val22` || 值22 |
 * | 46 || 🔷 || **`R<K>`** || `key23` || 键23 |
 * | 47 || 🔷 || **`R<V>`** || `val23` || 值23 |
 * | 48 || 🔷 || **`R<K>`** || `key24` || 键24 |
 * | 49 || 🔷 || **`R<V>`** || `val24` || 值24 |
 * | 50 || 🔷 || **`R<K>`** || `key25` || 键25 |
 * | 51 || 🔷 || **`R<V>`** || `val25` || 值25 |
 * | 52 || 🔷 || **`R<K>`** || `key26` || 键26 |
 * | 53 || 🔷 || **`R<V>`** || `val26` || 值26 |
 * | 54 || 🔷 || **`R<K>`** || `key27` || 键27 |
 * | 55 || 🔷 || **`R<V>`** || `val27` || 值27 |
 * | 56 || 🔷 || **`R<K>`** || `key28` || 键28 |
 * | 57 || 🔷 || **`R<V>`** || `val28` || 值28 |
 * | 58 || 🔷 || **`R<K>`** || `key29` || 键29 |
 * | 59 || 🔷 || **`R<V>`** || `val29` || 值29 |
 * | 60 || 🔷 || **`R<K>`** || `key30` || 键30 |
 * | 61 || 🔷 || **`R<V>`** || `val30` || 值30 |
 * | 62 || 🔷 || **`R<K>`** || `key31` || 键31 |
 * | 63 || 🔷 || **`R<V>`** || `val31` || 值31 |
 * | 64 || 🔷 || **`R<K>`** || `key32` || 键32 |
 * | 65 || 🔷 || **`R<V>`** || `val32` || 值32 |
 * | 66 || 🔷 || **`R<K>`** || `key33` || 键33 |
 * | 67 || 🔷 || **`R<V>`** || `val33` || 值33 |
 * | 68 || 🔷 || **`R<K>`** || `key34` || 键34 |
 * | 69 || 🔷 || **`R<V>`** || `val34` || 值34 |
 * | 70 || 🔷 || **`R<K>`** || `key35` || 键35 |
 * | 71 || 🔷 || **`R<V>`** || `val35` || 值35 |
 * | 72 || 🔷 || **`R<K>`** || `key36` || 键36 |
 * | 73 || 🔷 || **`R<V>`** || `val36` || 值36 |
 * | 74 || 🔷 || **`R<K>`** || `key37` || 键37 |
 * | 75 || 🔷 || **`R<V>`** || `val37` || 值37 |
 * | 76 || 🔷 || **`R<K>`** || `key38` || 键38 |
 * | 77 || 🔷 || **`R<V>`** || `val38` || 值38 |
 * | 78 || 🔷 || **`R<K>`** || `key39` || 键39 |
 * | 79 || 🔷 || **`R<V>`** || `val39` || 值39 |
 * | 80 || 🔷 || **`R<K>`** || `key40` || 键40 |
 * | 81 || 🔷 || **`R<V>`** || `val40` || 值40 |
 * | 82 || 🔷 || **`R<K>`** || `key41` || 键41 |
 * | 83 || 🔷 || **`R<V>`** || `val41` || 值41 |
 * | 84 || 🔷 || **`R<K>`** || `key42` || 键42 |
 * | 85 || 🔷 || **`R<V>`** || `val42` || 值42 |
 * | 86 || 🔷 || **`R<K>`** || `key43` || 键43 |
 * | 87 || 🔷 || **`R<V>`** || `val43` || 值43 |
 * | 88 || 🔷 || **`R<K>`** || `key44` || 键44 |
 * | 89 || 🔷 || **`R<V>`** || `val44` || 值44 |
 * | 90 || 🔷 || **`R<K>`** || `key45` || 键45 |
 * | 91 || 🔷 || **`R<V>`** || `val45` || 值45 |
 * | 92 || 🔷 || **`R<K>`** || `key46` || 键46 |
 * | 93 || 🔷 || **`R<V>`** || `val46` || 值46 |
 * | 94 || 🔷 || **`R<K>`** || `key47` || 键47 |
 * | 95 || 🔷 || **`R<V>`** || `val47` || 值47 |
 * | 96 || 🔷 || **`R<K>`** || `key48` || 键48 |
 * | 97 || 🔷 || **`R<V>`** || `val48` || 值48 |
 * | 98 || 🔷 || **`R<K>`** || `key49` || 键49 |
 * | 99 || 🔷 || **`R<V>`** || `val49` || 值49 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`D<R<K>,R<V>>`** || `dict` || 字典: 拼装成的字典 |
 *
 * #### 🧬 Variant Constraints
 * * `C<K:Ety,V:Ety>`
 * * `C<K:Ety,V:Gid>`
 * * `C<K:Ety,V:Int>`
 * * `C<K:Ety,V:Bol>`
 * * `C<K:Ety,V:Flt>`
 * * `C<K:Ety,V:Str>`
 * * `C<K:Ety,V:Fct>`
 * * `C<K:Ety,V:Vec>`
 * * `C<K:Ety,V:Cfg>`
 * * `C<K:Ety,V:Pfb>`
 * * `C<K:Ety,V:L<Ety>>`
 * * `C<K:Ety,V:L<Gid>>`
 * * `C<K:Ety,V:L<Int>>`
 * * `C<K:Ety,V:L<Bol>>`
 * * `C<K:Ety,V:L<Flt>>`
 * * `C<K:Ety,V:L<Str>>`
 * * `C<K:Ety,V:L<Fct>>`
 * * `C<K:Ety,V:L<Vec>>`
 * * `C<K:Ety,V:L<Cfg>>`
 * * `C<K:Gid,V:Ety>`
 * * `C<K:Gid,V:Gid>`
 * * `C<K:Gid,V:Int>`
 * * `C<K:Gid,V:Bol>`
 * * `C<K:Gid,V:Flt>`
 * * `C<K:Gid,V:Str>`
 * * `C<K:Gid,V:Fct>`
 * * `C<K:Gid,V:Vec>`
 * * `C<K:Gid,V:Cfg>`
 * * `C<K:Gid,V:Pfb>`
 * * `C<K:Gid,V:L<Ety>>`
 * * `C<K:Gid,V:L<Gid>>`
 * * `C<K:Gid,V:L<Int>>`
 * * `C<K:Gid,V:L<Bol>>`
 * * `C<K:Gid,V:L<Flt>>`
 * * `C<K:Gid,V:L<Str>>`
 * * `C<K:Gid,V:L<Fct>>`
 * * `C<K:Gid,V:L<Vec>>`
 * * `C<K:Gid,V:L<Cfg>>`
 * * `C<K:Int,V:Ety>`
 * * `C<K:Int,V:Gid>`
 * * `C<K:Int,V:Int>`
 * * `C<K:Int,V:Bol>`
 * * `C<K:Int,V:Flt>`
 * * `C<K:Int,V:Str>`
 * * `C<K:Int,V:Fct>`
 * * `C<K:Int,V:Vec>`
 * * `C<K:Int,V:Cfg>`
 * * `C<K:Int,V:Pfb>`
 * * `C<K:Int,V:L<Ety>>`
 * * `C<K:Int,V:L<Gid>>`
 * * `C<K:Int,V:L<Int>>`
 * * `C<K:Int,V:L<Bol>>`
 * * `C<K:Int,V:L<Flt>>`
 * * `C<K:Int,V:L<Str>>`
 * * `C<K:Int,V:L<Fct>>`
 * * `C<K:Int,V:L<Vec>>`
 * * `C<K:Int,V:L<Cfg>>`
 * * `C<K:Str,V:Ety>`
 * * `C<K:Str,V:Gid>`
 * * `C<K:Str,V:Int>`
 * * `C<K:Str,V:Bol>`
 * * `C<K:Str,V:Flt>`
 * * `C<K:Str,V:Str>`
 * * `C<K:Str,V:Fct>`
 * * `C<K:Str,V:Vec>`
 * * `C<K:Str,V:Cfg>`
 * * `C<K:Str,V:Pfb>`
 * * `C<K:Str,V:L<Ety>>`
 * * `C<K:Str,V:L<Gid>>`
 * * `C<K:Str,V:L<Int>>`
 * * `C<K:Str,V:L<Bol>>`
 * * `C<K:Str,V:L<Flt>>`
 * * `C<K:Str,V:L<Str>>`
 * * `C<K:Str,V:L<Fct>>`
 * * `C<K:Str,V:L<Vec>>`
 * * `C<K:Str,V:L<Cfg>>`
 * * `C<K:Fct,V:Ety>`
 * * `C<K:Fct,V:Gid>`
 * * `C<K:Fct,V:Int>`
 * * `C<K:Fct,V:Bol>`
 * * `C<K:Fct,V:Flt>`
 * * `C<K:Fct,V:Str>`
 * * `C<K:Fct,V:Fct>`
 * * `C<K:Fct,V:Vec>`
 * * `C<K:Fct,V:Cfg>`
 * * `C<K:Fct,V:Pfb>`
 * * `C<K:Fct,V:L<Ety>>`
 * * `C<K:Fct,V:L<Gid>>`
 * * `C<K:Fct,V:L<Int>>`
 * * `C<K:Fct,V:L<Bol>>`
 * * `C<K:Fct,V:L<Flt>>`
 * * `C<K:Fct,V:L<Str>>`
 * * `C<K:Fct,V:L<Fct>>`
 * * `C<K:Fct,V:L<Vec>>`
 * * `C<K:Fct,V:L<Cfg>>`
 * * `C<K:Cfg,V:Ety>`
 * * `C<K:Cfg,V:Gid>`
 * * `C<K:Cfg,V:Int>`
 * * `C<K:Cfg,V:Bol>`
 * * `C<K:Cfg,V:Flt>`
 * * `C<K:Cfg,V:Str>`
 * * `C<K:Cfg,V:Fct>`
 * * `C<K:Cfg,V:Vec>`
 * * `C<K:Cfg,V:Cfg>`
 * * `C<K:Cfg,V:Pfb>`
 * * `C<K:Cfg,V:L<Ety>>`
 * * `C<K:Cfg,V:L<Gid>>`
 * * `C<K:Cfg,V:L<Int>>`
 * * `C<K:Cfg,V:L<Bol>>`
 * * `C<K:Cfg,V:L<Flt>>`
 * * `C<K:Cfg,V:L<Str>>`
 * * `C<K:Cfg,V:L<Fct>>`
 * * `C<K:Cfg,V:L<Vec>>`
 * * `C<K:Cfg,V:L<Cfg>>`
 * * `C<K:Pfb,V:Ety>`
 * * `C<K:Pfb,V:Gid>`
 * * `C<K:Pfb,V:Int>`
 * * `C<K:Pfb,V:Bol>`
 * * `C<K:Pfb,V:Flt>`
 * * `C<K:Pfb,V:Str>`
 * * `C<K:Pfb,V:Fct>`
 * * `C<K:Pfb,V:Vec>`
 * * `C<K:Pfb,V:Cfg>`
 * * `C<K:Pfb,V:Pfb>`
 * * `C<K:Pfb,V:L<Ety>>`
 * * `C<K:Pfb,V:L<Gid>>`
 * * `C<K:Pfb,V:L<Int>>`
 * * `C<K:Pfb,V:L<Bol>>`
 * * `C<K:Pfb,V:L<Flt>>`
 * * `C<K:Pfb,V:L<Str>>`
 * * `C<K:Pfb,V:L<Fct>>`
 * * `C<K:Pfb,V:L<Vec>>`
 * * `C<K:Pfb,V:L<Cfg>>`
 */
  Arithmetic_Dictionary_AssembleDictionary: "Arithmetic.Dictionary.Assemble_Dictionary",

  /**
 * **对字典按键排序** `(Execution.Dictionary.Sort_By_Key)`
 *
 * - 将指定字典按键进行顺序或逆序排序后输出
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **1928** || 🖥️ Server || ⚙️ Execution || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || 字典 |
 * | 1 || 🔹 || `E<SORT>` || `order` || 排序方式 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔶 || **`L<R<K>>`** || `keys_out` || 键列表 |
 * | 1 || 🔶 || **`L<R<V>>`** || `values_out` || 值列表 |
 *
 * #### 🧬 Variant Constraints
 * * `C<K:Int,V:Ety>`
 * * `C<K:Int,V:Gid>`
 * * `C<K:Int,V:Int>`
 * * `C<K:Int,V:Bol>`
 * * `C<K:Int,V:Flt>`
 * * `C<K:Int,V:Str>`
 * * `C<K:Int,V:Fct>`
 * * `C<K:Int,V:Vec>`
 * * `C<K:Int,V:Cfg>`
 * * `C<K:Int,V:Pfb>`
 */
  Execution_Dictionary_SortByKey: "Execution.Dictionary.Sort_By_Key",

  /**
 * **对字典按值排序** `(Execution.Dictionary.Sort_By_Value)`
 *
 * - 将指定字典按值进行顺序或逆序排序后输出
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **1938** || 🖥️ Server || ⚙️ Execution || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || 字典 |
 * | 1 || 🔹 || `E<SORT>` || `order` || 排序方式 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔶 || **`L<R<K>>`** || `keys_out` || 键列表 |
 * | 1 || 🔶 || **`L<R<V>>`** || `values_out` || 值列表 |
 *
 * #### 🧬 Variant Constraints
 * * `C<K:Ety,V:Int>`
 * * `C<K:Ety,V:Flt>`
 * * `C<K:Gid,V:Int>`
 * * `C<K:Gid,V:Flt>`
 * * `C<K:Int,V:Int>`
 * * `C<K:Int,V:Flt>`
 * * `C<K:Str,V:Int>`
 * * `C<K:Str,V:Flt>`
 * * `C<K:Fct,V:Int>`
 * * `C<K:Fct,V:Flt>`
 * * `C<K:Cfg,V:Int>`
 * * `C<K:Cfg,V:Flt>`
 * * `C<K:Pfb,V:Int>`
 * * `C<K:Pfb,V:Flt>`
 */
  Execution_Dictionary_SortByValue: "Execution.Dictionary.Sort_By_Value",

  /**
 * **查询自定义变量快照** `(Query.Custom_Variable.Get_Snapshot)`
 *
 * - 从自定义变量组件快照中，查询指定变量名的值
 * - 仅可用于【实体销毁时】事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **3360** || 🖥️ Server || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vss` || `snapshot` || 自定义变量组件快照 |
 * | 1 || 🔹 || `Str` || `var_name` || 变量名 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `value` || 变量值 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:L<Int>>`
 * * `C<T:L<Str>>`
 * * `C<T:L<Ety>>`
 * * `C<T:L<Gid>>`
 * * `C<T:L<Flt>>`
 * * `C<T:L<Vec>>`
 * * `C<T:L<Bol>>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:L<Cfg>>`
 * * `C<T:L<Pfb>>`
 * * `C<T:Fct>`
 * * `C<T:L<Fct>>`
 * * `C<T:D<Ety,Ety>>`
 * * `C<T:D<Ety,Gid>>`
 * * `C<T:D<Ety,Int>>`
 * * `C<T:D<Ety,Bol>>`
 * * `C<T:D<Ety,Flt>>`
 * * `C<T:D<Ety,Str>>`
 * * `C<T:D<Ety,Fct>>`
 * * `C<T:D<Ety,Vec>>`
 * * `C<T:D<Ety,Cfg>>`
 * * `C<T:D<Ety,Pfb>>`
 * * `C<T:D<Ety,L<Ety>>>`
 * * `C<T:D<Ety,L<Gid>>>`
 * * `C<T:D<Ety,L<Int>>>`
 * * `C<T:D<Ety,L<Bol>>>`
 * * `C<T:D<Ety,L<Flt>>>`
 * * `C<T:D<Ety,L<Str>>>`
 * * `C<T:D<Ety,L<Fct>>>`
 * * `C<T:D<Ety,L<Vec>>>`
 * * `C<T:D<Ety,L<Cfg>>>`
 * * `C<T:D<Gid,Ety>>`
 * * `C<T:D<Gid,Gid>>`
 * * `C<T:D<Gid,Int>>`
 * * `C<T:D<Gid,Bol>>`
 * * `C<T:D<Gid,Flt>>`
 * * `C<T:D<Gid,Str>>`
 * * `C<T:D<Gid,Fct>>`
 * * `C<T:D<Gid,Vec>>`
 * * `C<T:D<Gid,Cfg>>`
 * * `C<T:D<Gid,Pfb>>`
 * * `C<T:D<Gid,L<Ety>>>`
 * * `C<T:D<Gid,L<Gid>>>`
 * * `C<T:D<Gid,L<Int>>>`
 * * `C<T:D<Gid,L<Bol>>>`
 * * `C<T:D<Gid,L<Flt>>>`
 * * `C<T:D<Gid,L<Str>>>`
 * * `C<T:D<Gid,L<Fct>>>`
 * * `C<T:D<Gid,L<Vec>>>`
 * * `C<T:D<Gid,L<Cfg>>>`
 * * `C<T:D<Int,Ety>>`
 * * `C<T:D<Int,Gid>>`
 * * `C<T:D<Int,Int>>`
 * * `C<T:D<Int,Bol>>`
 * * `C<T:D<Int,Flt>>`
 * * `C<T:D<Int,Str>>`
 * * `C<T:D<Int,Fct>>`
 * * `C<T:D<Int,Vec>>`
 * * `C<T:D<Int,Cfg>>`
 * * `C<T:D<Int,Pfb>>`
 * * `C<T:D<Int,L<Ety>>>`
 * * `C<T:D<Int,L<Gid>>>`
 * * `C<T:D<Int,L<Int>>>`
 * * `C<T:D<Int,L<Bol>>>`
 * * `C<T:D<Int,L<Flt>>>`
 * * `C<T:D<Int,L<Str>>>`
 * * `C<T:D<Int,L<Fct>>>`
 * * `C<T:D<Int,L<Vec>>>`
 * * `C<T:D<Int,L<Cfg>>>`
 * * `C<T:D<Str,Ety>>`
 * * `C<T:D<Str,Gid>>`
 * * `C<T:D<Str,Int>>`
 * * `C<T:D<Str,Bol>>`
 * * `C<T:D<Str,Flt>>`
 * * `C<T:D<Str,Str>>`
 * * `C<T:D<Str,Fct>>`
 * * `C<T:D<Str,Vec>>`
 * * `C<T:D<Str,Cfg>>`
 * * `C<T:D<Str,Pfb>>`
 * * `C<T:D<Str,L<Ety>>>`
 * * `C<T:D<Str,L<Gid>>>`
 * * `C<T:D<Str,L<Int>>>`
 * * `C<T:D<Str,L<Bol>>>`
 * * `C<T:D<Str,L<Flt>>>`
 * * `C<T:D<Str,L<Str>>>`
 * * `C<T:D<Str,L<Fct>>>`
 * * `C<T:D<Str,L<Vec>>>`
 * * `C<T:D<Str,L<Cfg>>>`
 * * `C<T:D<Fct,Ety>>`
 * * `C<T:D<Fct,Gid>>`
 * * `C<T:D<Fct,Int>>`
 * * `C<T:D<Fct,Bol>>`
 * * `C<T:D<Fct,Flt>>`
 * * `C<T:D<Fct,Str>>`
 * * `C<T:D<Fct,Fct>>`
 * * `C<T:D<Fct,Vec>>`
 * * `C<T:D<Fct,Cfg>>`
 * * `C<T:D<Fct,Pfb>>`
 * * `C<T:D<Fct,L<Ety>>>`
 * * `C<T:D<Fct,L<Gid>>>`
 * * `C<T:D<Fct,L<Int>>>`
 * * `C<T:D<Fct,L<Bol>>>`
 * * `C<T:D<Fct,L<Flt>>>`
 * * `C<T:D<Fct,L<Str>>>`
 * * `C<T:D<Fct,L<Fct>>>`
 * * `C<T:D<Fct,L<Vec>>>`
 * * `C<T:D<Fct,L<Cfg>>>`
 * * `C<T:D<Cfg,Ety>>`
 * * `C<T:D<Cfg,Gid>>`
 * * `C<T:D<Cfg,Int>>`
 * * `C<T:D<Cfg,Bol>>`
 * * `C<T:D<Cfg,Flt>>`
 * * `C<T:D<Cfg,Str>>`
 * * `C<T:D<Cfg,Fct>>`
 * * `C<T:D<Cfg,Vec>>`
 * * `C<T:D<Cfg,Cfg>>`
 * * `C<T:D<Cfg,Pfb>>`
 * * `C<T:D<Cfg,L<Ety>>>`
 * * `C<T:D<Cfg,L<Gid>>>`
 * * `C<T:D<Cfg,L<Int>>>`
 * * `C<T:D<Cfg,L<Bol>>>`
 * * `C<T:D<Cfg,L<Flt>>>`
 * * `C<T:D<Cfg,L<Str>>>`
 * * `C<T:D<Cfg,L<Fct>>>`
 * * `C<T:D<Cfg,L<Vec>>>`
 * * `C<T:D<Cfg,L<Cfg>>>`
 * * `C<T:D<Pfb,Ety>>`
 * * `C<T:D<Pfb,Gid>>`
 * * `C<T:D<Pfb,Int>>`
 * * `C<T:D<Pfb,Bol>>`
 * * `C<T:D<Pfb,Flt>>`
 * * `C<T:D<Pfb,Str>>`
 * * `C<T:D<Pfb,Fct>>`
 * * `C<T:D<Pfb,Vec>>`
 * * `C<T:D<Pfb,Cfg>>`
 * * `C<T:D<Pfb,Pfb>>`
 * * `C<T:D<Pfb,L<Ety>>>`
 * * `C<T:D<Pfb,L<Gid>>>`
 * * `C<T:D<Pfb,L<Int>>>`
 * * `C<T:D<Pfb,L<Bol>>>`
 * * `C<T:D<Pfb,L<Flt>>>`
 * * `C<T:D<Pfb,L<Str>>>`
 * * `C<T:D<Pfb,L<Fct>>>`
 * * `C<T:D<Pfb,L<Vec>>>`
 * * `C<T:D<Pfb,L<Cfg>>>`
 */
  Query_CustomVariable_GetSnapshot: "Query.Custom_Variable.Get_Snapshot",

  /**
 * **When Calling GM (This Node is Hidden Externally)** `(Hidden.Trigger.On_GM_Call)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **100000** || 🖥️ Server || 🚫 Hidden || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `Output0` ||  |
 * | 1 || 🔸 || `Gid` || `Output1` ||  |
 * | 2 || 🔸 || `Int` || `Output2` ||  |
 * | 3 || 🔸 || `Int` || `Output3` ||  |
 * | 4 || 🔸 || `Str` || `Output4` ||  |
 * | 5 || 🔸 || `Str` || `Output5` ||  |
 */
  Hidden_Trigger_OnGMCall: "Hidden.Trigger.On_GM_Call",

  /**
 * **节点图结束(布尔型)** `(Others.Port_Client.Graph_End_Bool)`
 *
 * - 布尔型本地过滤器的结束节点
 * - 以布尔型的True或者False作为最终结果，作用于引用的业务
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200000** || 📱 Client || 🔗 Others || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Bol` || `result` || 输出结果（布尔型） |
 */
  Others_PortClient_GraphEndBool: "Others.Port_Client.Graph_End_Bool",

  /**
 * **逻辑与运算** `(Arithmetic.Math_Client.And)`
 *
 * - 对输入的两个布尔值进行与运算后输出
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200001** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Bol` || `a` || 条件1 |
 * | 1 || 🔹 || `Bol` || `b` || 条件2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 结果 |
 */
  Arithmetic_MathClient_And: "Arithmetic.Math_Client.And",

  /**
 * **逻辑或运算** `(Arithmetic.Math_Client.Or)`
 *
 * - 对输入的两个布尔值进行或运算后输出
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200002** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Bol` || `a` || 条件1 |
 * | 1 || 🔹 || `Bol` || `b` || 条件2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 结果 |
 */
  Arithmetic_MathClient_Or: "Arithmetic.Math_Client.Or",

  /**
 * **逻辑非运算** `(Arithmetic.Math_Client.Not)`
 *
 * - 对输入的布尔值进行非运算后输出
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200003** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Bol` || `cond` || 条件 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 结果 |
 */
  Arithmetic_MathClient_Not: "Arithmetic.Math_Client.Not",

  /**
 * **逻辑异或运算** `(Arithmetic.Math_Client.Xor)`
 *
 * - 对输入的两个布尔值进行异或运算后输出
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200004** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Bol` || `a` || 条件1 |
 * | 1 || 🔹 || `Bol` || `b` || 条件2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 结果 |
 */
  Arithmetic_MathClient_Xor: "Arithmetic.Math_Client.Xor",

  /**
 * **枚举匹配** `(Arithmetic.General_Client.Enum_Match)`
 *
 * - 确认枚举的类型后，判断两个输入的值是否相等
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200005** || 📱 Client || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `enum1` || 枚举1 |
 * | 1 || 🔷 || **`R<T>`** || `enum2` || 枚举2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 结果: 相等输出“是”，不相等输出“否” |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:E<CGEN>>`
 * * `C<T:E<CCMP>>`
 * * `C<T:E<CLOG>>`
 * * `C<T:E<CBMO>>`
 * * `C<T:E<CASH>>`
 * * `C<T:E<CSVL>>`
 * * `C<T:E<CSRT>>`
 * * `C<T:E<CRND>>`
 * * `C<T:E<CCOV>>`
 * * `C<T:E<CMPP>>`
 * * `C<T:E<CMOT>>`
 * * `C<T:E<CFLL>>`
 * * `C<T:E<CCOR>>`
 * * `C<T:E<CELM>>`
 * * `C<T:E<CETY>>`
 * * `C<T:E<CUSF>>`
 * * `C<T:E<CUSS>>`
 * * `C<T:E<CUSR>>`
 * * `C<T:E<CUSX>>`
 * * `C<T:E<CRPT>>`
 * * `C<T:E<CDWN>>`
 * * `C<T:E<CTFX>>`
 * * `C<T:E<CDDT>>`
 * * `C<T:E<CDDO>>`
 * * `C<T:E<CUIS>>`
 * * `C<T:E<CTTP>>`
 * * `C<T:E<CQMA>>`
 * * `C<T:E<CHIT>>`
 * * `C<T:E<CATK>>`
 * * `C<T:E<CHLV>>`
 * * `C<T:E<CTST>>`
 * * `C<T:E<CALC>>`
 * * `C<T:E<CKBD>>`
 * * `C<T:E<CROT>>`
 * * `C<T:E<CSCT>>`
 * * `C<T:E<CCON>>`
 * * `C<T:E<CRTR>>`
 * * `C<T:E<CHTS>>`
 * * `C<T:E<CERE>>`
 * * `C<T:E<CFLT>>`
 * * `C<T:E<CCAM>>`
 * * `C<T:E<CSCN>>`
 * * `C<T:E<CDEV>>`
 */
  Arithmetic_GeneralClient_EnumMatch: "Arithmetic.General_Client.Enum_Match",

  /**
 * **是否相等** `(Arithmetic.General_Client.Equal)`
 *
 * - 判断两个输入是否相等
 * - 部分参数类型有较为特殊的判定规则：
 * - 浮点数：浮点数采用近似相等进行比较，当两个浮点数小于一个极小值时，这两个浮点数认为相等。例如：2.0000001与2.0认为相等
 * - 三维向量：三维向量的x、y、z分别采用浮点数近似相等比较
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200006** || 📱 Client || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` ||  |
 * | 1 || 🔷 || **`R<T>`** || `b` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Bol>`
 * * `C<T:Int>`
 * * `C<T:Flt>`
 * * `C<T:Str>`
 * * `C<T:Gid>`
 * * `C<T:Ety>`
 * * `C<T:Vec>`
 * * `C<T:Fct>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 */
  Arithmetic_GeneralClient_Equal: "Arithmetic.General_Client.Equal",

  /**
 * **是否大于** `(Arithmetic.Math_Client.Greater_Than)`
 *
 * - 返回左值是否大于右值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200007** || 📱 Client || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` ||  |
 * | 1 || 🔷 || **`R<T>`** || `b` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_GreaterThan: "Arithmetic.Math_Client.Greater_Than",

  /**
 * **是否小于** `(Arithmetic.Math_Client.Less_Than)`
 *
 * - 返回左值是否小于右值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200008** || 📱 Client || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` ||  |
 * | 1 || 🔷 || **`R<T>`** || `b` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_LessThan: "Arithmetic.Math_Client.Less_Than",

  /**
 * **是否小于等于** `(Arithmetic.Math_Client.Less_Equal)`
 *
 * - 返回左值是否小于等于右值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200009** || 📱 Client || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` ||  |
 * | 1 || 🔷 || **`R<T>`** || `b` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_LessEqual: "Arithmetic.Math_Client.Less_Equal",

  /**
 * **是否大于等于** `(Arithmetic.Math_Client.Greater_Equal)`
 *
 * - 返回左值是否大于等于右值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200010** || 📱 Client || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` ||  |
 * | 1 || 🔷 || **`R<T>`** || `b` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_GreaterEqual: "Arithmetic.Math_Client.Greater_Equal",

  /**
 * **加法运算** `(Arithmetic.Math_Client.Add)`
 *
 * - 计算两个浮点数或整数的加法
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200011** || 📱 Client || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` ||  |
 * | 1 || 🔷 || **`R<T>`** || `b` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_Add: "Arithmetic.Math_Client.Add",

  /**
 * **减法运算** `(Arithmetic.Math_Client.Subtract)`
 *
 * - 计算两个浮点数或整数的减法
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200012** || 📱 Client || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` ||  |
 * | 1 || 🔷 || **`R<T>`** || `b` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_Subtract: "Arithmetic.Math_Client.Subtract",

  /**
 * **乘法运算** `(Arithmetic.Math_Client.Multiply)`
 *
 * - 乘法运算，支持浮点数乘法和整数乘法
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200013** || 📱 Client || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` ||  |
 * | 1 || 🔷 || **`R<T>`** || `b` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_Multiply: "Arithmetic.Math_Client.Multiply",

  /**
 * **除法运算** `(Arithmetic.Math_Client.Divide)`
 *
 * - 除法运算，支持浮点数除法和整数除法。整数除法返回整除结果
 * - 除数不应为0，否则可能返回非法值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200014** || 📱 Client || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `a` ||  |
 * | 1 || 🔷 || **`R<T>`** || `b` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_Divide: "Arithmetic.Math_Client.Divide",

  /**
 * **绝对值运算** `(Arithmetic.Math_Client.Abs)`
 *
 * - 返回输入的绝对值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200015** || 📱 Client || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `input` || 输入 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_Abs: "Arithmetic.Math_Client.Abs",

  /**
 * **获取自定义变量** `(Query.Custom_Variable_Client.Get_Variable)`
 *
 * - 获取目标实体的指定自定义变量的值
 * - 如果变量不存在，则返回类型的默认值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200016** || 📱 Client || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Str` || `variable_name` || 变量名 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `variable_value` || 变量值 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Bol>`
 * * `C<T:Int>`
 * * `C<T:Flt>`
 * * `C<T:Str>`
 * * `C<T:Gid>`
 * * `C<T:Ety>`
 * * `C<T:Vec>`
 * * `C<T:L<Int>>`
 * * `C<T:L<Str>>`
 * * `C<T:L<Ety>>`
 * * `C<T:L<Gid>>`
 * * `C<T:L<Flt>>`
 * * `C<T:L<Vec>>`
 * * `C<T:L<Bol>>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:L<Cfg>>`
 * * `C<T:L<Pfb>>`
 * * `C<T:Fct>`
 */
  Query_CustomVariableClient_GetVariable: "Query.Custom_Variable_Client.Get_Variable",

  /**
 * **获取列表对应值** `(Query.List_Related_Client.Get_At_Index)`
 *
 * - 返回列表中指定序号对应的值。列表中序号从0开始
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200017** || 📱 Client || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `index` || 序号 |
 * | 1 || 🔷 || **`L<R<T>>`** || `data_list` || 数据列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Bol>`
 * * `C<T:Int>`
 * * `C<T:Flt>`
 * * `C<T:Str>`
 * * `C<T:Gid>`
 * * `C<T:Ety>`
 * * `C<T:Vec>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 */
  Query_ListRelatedClient_GetAtIndex: "Query.List_Related_Client.Get_At_Index",

  /**
 * **获取列表长度** `(Query.List_Related_Client.Get_Length)`
 *
 * - 获取列表长度（列表中的元素个数）
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200018** || 📱 Client || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `input_list` || 输入列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `length` || 长度 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:L<Bol>>`
 * * `C<T:L<Int>>`
 * * `C<T:L<Flt>>`
 * * `C<T:L<Str>>`
 * * `C<T:L<Gid>>`
 * * `C<T:L<Ety>>`
 * * `C<T:L<Vec>>`
 */
  Query_ListRelatedClient_GetLength: "Query.List_Related_Client.Get_Length",

  /**
 * **列表是否包含该值** `(Query.List_Related_Client.Contains)`
 *
 * - 返回列表中是否包含指定值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200019** || 📱 Client || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `value` || 值 |
 * | 1 || 🔷 || **`L<R<T>>`** || `list` || 列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || 结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Bol>`
 * * `C<T:Int>`
 * * `C<T:Flt>`
 * * `C<T:Str>`
 * * `C<T:Gid>`
 * * `C<T:Ety>`
 * * `C<T:Vec>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 */
  Query_ListRelatedClient_Contains: "Query.List_Related_Client.Contains",

  /**
 * **获取列表最大值** `(Query.List_Related_Client.Get_Max)`
 *
 * - 仅对浮点数列表和整数列表有意义，返回列表中的最大值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200020** || 📱 Client || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || 列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `max_value` || 最大值 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Query_ListRelatedClient_GetMax: "Query.List_Related_Client.Get_Max",

  /**
 * **获取列表最小值** `(Query.List_Related_Client.Get_Min)`
 *
 * - 仅对浮点数列表和整数列表有意义，返回列表中的最小值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200021** || 📱 Client || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || 列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `min_value` || 最小值 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Query_ListRelatedClient_GetMin: "Query.List_Related_Client.Get_Min",

  /**
 * **数据类型转换** `(Arithmetic.General_Client.Convert_Type)`
 *
 * - 将输入的参数类型转换为另一种类型输出。具体规则见[基础概念](https://act.mihoyo.com/ys/ugc/tutorial//detail/mhk23ora1wom)-【基础数据类型之间的转换规则】
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200022** || 📱 Client || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<K>`** || `input` || 输入 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<V>`** || `converted` || 转换结果 |
 *
 * #### 🧬 Variant Constraints
 * * `C<K:Int,V:Bol>`
 * * `C<K:Bol,V:Int>`
 * * `C<K:Flt,V:Int>`
 * * `C<K:Int,V:Flt>`
 * * `C<K:Bol,V:Str>`
 * * `C<K:Int,V:Str>`
 * * `C<K:Flt,V:Str>`
 * * `C<K:Gid,V:Str>`
 * * `C<K:Ety,V:Str>`
 * * `C<K:Vec,V:Str>`
 * * `C<K:Fct,V:Str>`
 */
  Arithmetic_GeneralClient_ConvertType: "Arithmetic.General_Client.Convert_Type",

  /**
 * **以GUID查询实体** `(Query.Entity_Related_Client.Get_By_GUID)`
 *
 * - 根据GUID查询实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200023** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Gid` || `guid` || GUID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `entity` || 实体 |
 */
  Query_EntityRelatedClient_GetByGUID: "Query.Entity_Related_Client.Get_By_GUID",

  /**
 * **获取指定玩家的角色实体** `(Query.Character_Related_Client.Get_Player_Character)`
 *
 * - 获取指定玩家实体的角色实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200024** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `player_entity` || 玩家实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `character_entity` || 角色实体 |
 */
  Query_CharacterRelatedClient_GetPlayerCharacter: "Query.Character_Related_Client.Get_Player_Character",

  /**
 * **获取角色归属的玩家实体** `(Query.Character_Related_Client.Get_Owner_Player)`
 *
 * - 获取角色实体所归属的玩家实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200025** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `character_entity` || 角色实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `owner_player_entity` || 所属玩家实体 |
 */
  Query_CharacterRelatedClient_GetOwnerPlayer: "Query.Character_Related_Client.Get_Owner_Player",

  /**
 * **获取在场玩家实体列表** `(Query.Character_Related_Client.Get_All_Players)`
 *
 * - 获取在场所有玩家实体组成的列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200026** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `player_entities` || 玩家实体列表 |
 */
  Query_CharacterRelatedClient_GetAllPlayers: "Query.Character_Related_Client.Get_All_Players",

  /**
 * **以实体查询GUID** `(Query.Character_Related_Client.Get_GUID)`
 *
 * - 查询指定实体的GUID
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200027** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `entity` || 实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Gid` || `guid` || GUID |
 */
  Query_CharacterRelatedClient_GetGUID: "Query.Character_Related_Client.Get_GUID",

  /**
 * **获取预设状态** `(Query.Preset_Status_Client.Get_Status)`
 *
 * - 获取指定实体的预设状态值。如果该实体没有指定的预设状态，则返回0
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200028** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `entity` || 实体 |
 * | 1 || 🔹 || `Int` || `preset_index` || 预设状态索引 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `preset_value` || 预设状态值 |
 */
  Query_PresetStatusClient_GetStatus: "Query.Preset_Status_Client.Get_Status",

  /**
 * **查询实体阵营** `(Query.Faction_Related_Client.Get_Faction)`
 *
 * - 查询目标实体的阵营
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200029** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Fct` || `camp` || 阵营 |
 */
  Query_FactionRelatedClient_GetFaction: "Query.Faction_Related_Client.Get_Faction",

  /**
 * **获取实体位置** `(Query.Entity_Related_Client.Get_Location)`
 *
 * - 获取指定实体的位置
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200030** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `entity` || 实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `position` || 位置 |
 */
  Query_EntityRelatedClient_GetLocation: "Query.Entity_Related_Client.Get_Location",

  /**
 * **获取实体旋转** `(Query.Entity_Related_Client.Get_Rotation)`
 *
 * - 获取指定实体以欧拉角表示的旋转
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200031** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `entity` || 实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `rotation` || 旋转 |
 */
  Query_EntityRelatedClient_GetRotation: "Query.Entity_Related_Client.Get_Rotation",

  /**
 * **获取随机数** `(Arithmetic.Math_Client.Random)`
 *
 * - 获取一个大于等于下限，小于等于上限的随机数。注意该节点生成的随机数包含上下限
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200032** || 📱 Client || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `min` || 下限 |
 * | 1 || 🔷 || **`R<T>`** || `max` || 上限 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `value` || 随机数 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_Random: "Arithmetic.Math_Client.Random",

  /**
 * **获取自身实体** `(Query.Entity_Related_Client.Get_Self)`
 *
 * - 返回该节点图所关联的实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200033** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `self` || 自身实体 |
 */
  Query_EntityRelatedClient_GetSelf: "Query.Entity_Related_Client.Get_Self",

  /**
 * **获取目标实体** `(Query.Entity_Related_Client.Get_Target)`
 *
 * - 获取目标实体，根据过滤器节点图被引用的功能模块不同，其指代含义会有区别
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200034** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `target_entity` || 目标实体 |
 */
  Query_EntityRelatedClient_GetTarget: "Query.Entity_Related_Client.Get_Target",

  /**
 * **获取单位攻击目标** `(Query.Entity_Related_Client.Get_Attack_Target)`
 *
 * - 获取单位实体当前正在攻击的目标实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200035** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `unit_entity` || 单位实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `attack_target_entity` || 攻击目标实体 |
 */
  Query_EntityRelatedClient_GetAttackTarget: "Query.Entity_Related_Client.Get_Attack_Target",

  /**
 * **Get Current Camera Template** `(Hidden.Query_Client.Get_Camera_Template)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200036** || 📱 Client || 🚫 Hidden || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `Output0` ||  |
 */
  Hidden_QueryClient_GetCameraTemplate: "Hidden.Query_Client.Get_Camera_Template",

  /**
 * **查询自身是否已入战** `(Query.Character_Related_Client.Is_In_Combat)`
 *
 * - 查询该节点图关联的实体是否入战
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200037** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `is_in_combat` || 是否入战 |
 */
  Query_CharacterRelatedClient_IsInCombat: "Query.Character_Related_Client.Is_In_Combat",

  /**
 * **播放限时特效** `(Execution.Character_Skill_Client.Play_Timed_FX)`
 *
 * - 在指定的世界坐标位置播放限时特效
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200038** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Cfg` || `effect_config_id` || 特效资产配置ID |
 * | 1 || 🔹 || `Vec` || `position` || 位置 |
 * | 2 || 🔹 || `Vec` || `rotation` || 旋转 |
 * | 3 || 🔹 || `Flt` || `scale` || 缩放倍率 |
 * | 4 || 🔹 || `Bol` || `play_default_sfx` || 是否播放默认音效 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_PlayTimedFX: "Execution.Character_Skill_Client.Play_Timed_FX",

  /**
 * **通知服务器节点图** `(Execution.Character_Skill_Client.Notify_Server)`
 *
 * - 通知服务器节点图，支持携带三个字符串参数
 * - 该节点运行时可以将逻辑传到服务器节点图上，在服务器节点图上会触发【技能节点调用时】事件
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200039** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Str` || `str1` || 字符串1 |
 * | 1 || 🔹 || `Str` || `str2` || 字符串2 |
 * | 2 || 🔹 || `Str` || `str3` || 字符串3 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_NotifyServer: "Execution.Character_Skill_Client.Notify_Server",

  /**
 * **玩家转向** `(Execution.Character_Skill_Client.Turn_Player)`
 *
 * - 可以让玩家按照配置的转向模式转向
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200040** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `E<CROT>` || `turn_mode` || 转向模式: 分为先目标后输入、输入朝向、目标朝向、先目标后镜头、镜头朝向、先输入后目标 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_TurnPlayer: "Execution.Character_Skill_Client.Turn_Player",

  /**
 * **设置自身攻击目标** `(Execution.Character_Skill_Client.Set_Target)`
 *
 * - 将目标实体设置为自身的攻击目标
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200041** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Bol` || `instant_turn` || 是否立即转向 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_SetTarget: "Execution.Character_Skill_Client.Set_Target",

  /**
 * **节点图开始** `(Others.Port_Client.Graph_Start)`
 *
 * - 技能节点图的开始事件
 * - 自定义技能的逻辑，在该节点后进行编辑，会依照节点图执行顺序执行后续节点
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200042** || 📱 Client || 🔗 Others || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Others_PortClient_GraphStart: "Others.Port_Client.Graph_Start",

  /**
 * **筛选球体范围内的实体列表** `(Query.Entity_Related_Client.Filter_Sphere)`
 *
 * - 以特定的规则和数量上限筛选在球形范围内的实体，满足条件的实体会组成实体列表输出
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200043** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `radius` || 半径 |
 * | 1 || 🔹 || `Vec` || `center` || 中心位置 |
 * | 2 || 🔹 || `Int` || `limit` || 筛选数量上限 |
 * | 3 || 🔹 || `E<CTST>` || `rule` || 筛选规则: 分为默认排序、随机排序、从近到远排序 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `result` || 筛选结果 |
 */
  Query_EntityRelatedClient_FilterSphere: "Query.Entity_Related_Client.Filter_Sphere",

  /**
 * **筛选方形范围内的实体列表** `(Query.Entity_Related_Client.Filter_Square)`
 *
 * - 以特定的规则和数量上限筛选在方形范围内的实体，满足条件的实体会组成实体列表输出
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200044** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `width` || 宽度 |
 * | 1 || 🔹 || `Flt` || `height` || 高度 |
 * | 2 || 🔹 || `Flt` || `length` || 长度 |
 * | 3 || 🔹 || `Vec` || `center` || 中心位置 |
 * | 4 || 🔹 || `Int` || `limit` || 筛选数量上限 |
 * | 5 || 🔹 || `E<CTST>` || `rule` || 筛选规则: 分为默认排序、随机排序、从近到远排序 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `result` || 筛选结果 |
 */
  Query_EntityRelatedClient_FilterSquare: "Query.Entity_Related_Client.Filter_Square",

  /**
 * **获取实体的类型** `(Query.Entity_Related_Client.Get_Type)`
 *
 * - 获取指定实体的类型
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200045** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `E<CETY>` || `entity_type` || 实体类型 |
 */
  Query_EntityRelatedClient_GetType: "Query.Entity_Related_Client.Get_Type",

  /**
 * **Get Camera Orientation** `(Hidden.Query_Client.Get_Camera_Rotation)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200046** || 📱 Client || 🚫 Hidden || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `Output0` ||  |
 */
  Hidden_QueryClient_GetCameraRotation: "Hidden.Query_Client.Get_Camera_Rotation",

  /**
 * **获取目标挂接点位置** `(Query.Entity_Related_Client.Get_Socket_Loc)`
 *
 * - 获取指定目标实体上对应挂接点名称的挂接点位置
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200047** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Str` || `attachment_name` || 挂接点名称 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `attachment_position` || 挂接点位置 |
 */
  Query_EntityRelatedClient_GetSocketLoc: "Query.Entity_Related_Client.Get_Socket_Loc",

  /**
 * **获取目标挂接点旋转** `(Query.Entity_Related_Client.Get_Socket_Rot)`
 *
 * - 获取指定目标实体上对应挂接点名称的挂接点旋转
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200048** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Str` || `attachment_name` || 挂接点名称 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `attachment_rotation` || 挂接点旋转 |
 */
  Query_EntityRelatedClient_GetSocketRot: "Query.Entity_Related_Client.Get_Socket_Rot",

  /**
 * **拼装列表** `(Arithmetic.List_Client.Assemble_List)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200049** || 📱 Client || 🔢 Arithmetic || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔷 || **`R<T>`** || `Input1` || 0: 将至多10个参数拼装为一个列表 |
 * | 1 || 🔷 || **`R<T>`** || `Input2` || 1: 将至多10个参数拼装为一个列表 |
 * | 2 || 🔷 || **`R<T>`** || `Input3` || 2: 将至多10个参数拼装为一个列表 |
 * | 3 || 🔷 || **`R<T>`** || `Input4` || 3: 将至多10个参数拼装为一个列表 |
 * | 4 || 🔷 || **`R<T>`** || `Input5` || 4: 将至多10个参数拼装为一个列表 |
 * | 5 || 🔷 || **`R<T>`** || `Input6` || 5: 将至多10个参数拼装为一个列表 |
 * | 6 || 🔷 || **`R<T>`** || `Input7` || 6: 将至多10个参数拼装为一个列表 |
 * | 7 || 🔷 || **`R<T>`** || `Input8` || 7: 将至多10个参数拼装为一个列表 |
 * | 8 || 🔷 || **`R<T>`** || `Input9` || 8: 将至多10个参数拼装为一个列表 |
 * | 9 || 🔷 || **`R<T>`** || `Input10` || 9: 将至多10个参数拼装为一个列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`L<R<T>>`** || `list` || 列表: 拼装成的列表 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Ety>`
 * * `C<T:Int>`
 * * `C<T:Bol>`
 * * `C<T:Flt>`
 * * `C<T:Str>`
 * * `C<T:Vec>`
 * * `C<T:Gid>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 */
  Arithmetic_ListClient_AssembleList: "Arithmetic.List_Client.Assemble_List",

  /**
 * **获取实体类型列表** `(Query.List_Related_Client.Get_Entity_Types)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200050** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `E<CETY>` || `enum0` || 0 |
 * | 1 || 🔹 || `E<CETY>` || `enum1` || 1 |
 * | 2 || 🔹 || `E<CETY>` || `enum2` || 2 |
 * | 3 || 🔹 || `E<CETY>` || `enum3` || 3 |
 * | 4 || 🔹 || `E<CETY>` || `enum4` || 4 |
 * | 5 || 🔹 || `E<CETY>` || `enum5` || 5 |
 * | 6 || 🔹 || `E<CETY>` || `enum6` || 6 |
 * | 7 || 🔹 || `E<CETY>` || `enum7` || 7 |
 * | 8 || 🔹 || `E<CETY>` || `enum8` || 8 |
 * | 9 || 🔹 || `E<CETY>` || `enum9` || 9 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<E<CETY>>` || `list` || 列表 |
 */
  Query_ListRelatedClient_GetEntityTypes: "Query.List_Related_Client.Get_Entity_Types",

  /**
 * **特定位置打攻击盒** `(Execution.Character_Skill_Client.Trigger_Hitbox_Loc)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200051** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `E<CTTP>` || `Input0` ||  |
 * | 1 || 🔹 || `Vec` || `Input1` ||  |
 * | 2 || 🔹 || `Vec` || `Input2` ||  |
 * | 3 || 🔹 || `Flt` || `Input3` ||  |
 * | 4 || 🔹 || `Flt` || `Input4` ||  |
 * | 5 || 🔹 || `L<E<CETY>>` || `Input5` ||  |
 * | 6 || 🔹 || `E<CTRG>` || `Input6` ||  |
 * | 7 || 🔹 || `Int` || `Input7` ||  |
 * | 8 || 🔹 || `E<CASH>` || `Input8` ||  |
 * | 9 || 🔹 || `Vec` || `Input9` ||  |
 * | 10 || 🔹 || `Flt` || `Input10` ||  |
 * | 11 || 🔹 || `Flt` || `Input11` ||  |
 * | 12 || 🔹 || `Flt` || `Input12` ||  |
 * | 13 || 🔹 || `Flt` || `Input13` ||  |
 * | 14 || 🔹 || `Flt` || `Input14` ||  |
 * | 15 || 🔹 || `E<CSCT>` || `Input15` ||  |
 * | 16 || 🔹 || `E<CALC>` || `Input16` ||  |
 * | 17 || 🔹 || `L<Str>` || `Input17` ||  |
 * | 18 || 🔹 || `E<CELM>` || `Input18` ||  |
 * | 19 || 🔹 || `Flt` || `Input19` ||  |
 * | 20 || 🔹 || `E<CHIT>` || `Input20` ||  |
 * | 21 || 🔹 || `E<CATK>` || `Input21` ||  |
 * | 22 || 🔹 || `Flt` || `Input22` ||  |
 * | 23 || 🔹 || `Bol` || `Input24` ||  |
 * | 24 || 🔹 || `Int` || `Input25` ||  |
 * | 25 || 🔹 || `E<CKBD>` || `Input27` ||  |
 * | 26 || 🔹 || `Bol` || `Input28` ||  |
 * | 27 || 🔹 || `Vec` || `Input32` ||  |
 * | 28 || 🔹 || `Vec` || `Input33` ||  |
 * | 29 || 🔹 || `Flt` || `Input34` ||  |
 * | 30 || 🔹 || `Vec` || `Input38` ||  |
 * | 31 || 🔹 || `Vec` || `Input39` ||  |
 * | 32 || 🔹 || `Flt` || `Input40` ||  |
 * | 33 || 🔹 || `Flt` || `Input41` ||  |
 * | 34 || 🔹 || `Int` || `Input42` ||  |
 * | 35 || 🔹 || `E<CHTS>` || `Input44` ||  |
 * | 36 || 🔹 || `Flt` || `Input45` ||  |
 * | 37 || 🔹 || `Flt` || `Input46` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_TriggerHitboxLoc: "Execution.Character_Skill_Client.Trigger_Hitbox_Loc",

  /**
 * **定点发射投射物** `(Execution.Character_Skill_Client.Launch_Projectile)`
 *
 * - 在世界坐标系的指定位置发射本地投射物
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200052** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Pfb` || `projectile_component_id` || 投射物的元件ID |
 * | 1 || 🔹 || `Vec` || `spawn_position` || 创建位置 |
 * | 2 || 🔹 || `Vec` || `spawn_rotation` || 创建旋转 |
 * | 3 || 🔹 || `Ety` || `tracking_target` || 追踪目标 |
 * | 4 || 🔹 || `Fct` || `projectile_camp` || 投射物阵营 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_LaunchProjectile: "Execution.Character_Skill_Client.Launch_Projectile",

  /**
 * **定点位移** `(Execution.Character_Skill_Client.Move_To_Point)`
 *
 * - 定点位移，从当前位置向目标位置位移
 * - 可配置位移时长与位移速度，当这二者都比较小时，可能无法位移到目标位置
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200053** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Flt` || `duration` || 位移时长 |
 * | 1 || 🔹 || `Flt` || `damping_duration` || 位移衰减时长 |
 * | 2 || 🔹 || `Flt` || `speed` || 位移速度 |
 * | 3 || 🔹 || `Vec` || `target_position` || 位移目标位置 |
 * | 4 || 🔹 || `Bol` || `stop_on_collision` || 碰撞是否终止位移 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_MoveToPoint: "Execution.Character_Skill_Client.Move_To_Point",

  /**
 * **遍历实体列表** `(Execution.Character_Skill_Client.For_Each_Entity)`
 *
 * - 遍历输入实体列表中的每个实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200055** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `Start` ||  |
 * | 0 || 🔹 || `L<Ety>` || `entity_list` || 实体列表 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `Iteration` ||  |
 * | - || ⏩ || - || `End` ||  |
 * | 0 || 🔸 || `Ety` || `current_entity` || 当前实体 |
 */
  Execution_CharacterSkillClient_ForEachEntity: "Execution.Character_Skill_Client.For_Each_Entity",

  /**
 * **双分支** `(Control.General_Client.Branch)`
 *
 * - 根据输入条件的判断结果可以分出“是”与“否”两个不同的分支
 * - 当布尔值为“是”时，后续会执行【是】对应的执行流；布尔值为“否”时，会执行【否】对应的执行流
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200056** || 📱 Client || 🔀 Control || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Bol` || `cond` || 条件 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `True` || 是 |
 * | - || ⏩ || - || `False` || 否 |
 */
  Control_GeneralClient_Branch: "Control.General_Client.Branch",

  /**
 * **添加单位状态** `(Execution.Character_Skill_Client.Add_Status)`
 *
 * - 为施加目标添加配置ID对应的单位状态
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200057** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 施加目标 |
 * | 1 || 🔹 || `Int` || `stack_count` || 层数 |
 * | 2 || 🔹 || `Cfg` || `state_config_id` || 单位状态配置ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_AddStatus: "Execution.Character_Skill_Client.Add_Status",

  /**
 * **移除单位状态** `(Execution.Character_Skill_Client.Remove_Status)`
 *
 * - 移除目标实体上指定配置ID对应的单位状态
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200058** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 移除目标 |
 * | 1 || 🔹 || `Cfg` || `state_config_id` || 单位状态配置ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_RemoveStatus: "Execution.Character_Skill_Client.Remove_Status",

  /**
 * **Trigger Hitbox at Specified Attachment Point** `(Execution.Character_Skill_Client.Trigger_Hitbox_Socket)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200059** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `E<CTTP>` || `Input0` ||  |
 * | 1 || 🔹 || `Str` || `Input1` ||  |
 * | 2 || 🔹 || `Vec` || `Input2` ||  |
 * | 3 || 🔹 || `Vec` || `Input3` ||  |
 * | 4 || 🔹 || `Flt` || `Input4` ||  |
 * | 5 || 🔹 || `Flt` || `Input5` ||  |
 * | 6 || 🔹 || `L<E<CETY>>` || `Input6` ||  |
 * | 7 || 🔹 || `E<CTRG>` || `Input7` ||  |
 * | 8 || 🔹 || `Int` || `Input8` ||  |
 * | 9 || 🔹 || `E<CASH>` || `Input9` ||  |
 * | 10 || 🔹 || `Vec` || `Input10` ||  |
 * | 11 || 🔹 || `Flt` || `Input11` ||  |
 * | 12 || 🔹 || `Flt` || `Input12` ||  |
 * | 13 || 🔹 || `Flt` || `Input13` ||  |
 * | 14 || 🔹 || `Flt` || `Input14` ||  |
 * | 15 || 🔹 || `Flt` || `Input15` ||  |
 * | 16 || 🔹 || `E<CSCT>` || `Input16` ||  |
 * | 17 || 🔹 || `E<CALC>` || `Input17` ||  |
 * | 18 || 🔹 || `L<Str>` || `Input18` ||  |
 * | 19 || 🔹 || `E<CELM>` || `Input19` ||  |
 * | 20 || 🔹 || `Flt` || `Input20` ||  |
 * | 21 || 🔹 || `E<CHIT>` || `Input21` ||  |
 * | 22 || 🔹 || `E<CATK>` || `Input22` ||  |
 * | 23 || 🔹 || `Flt` || `Input23` ||  |
 * | 24 || 🔹 || `Bol` || `Input25` ||  |
 * | 25 || 🔹 || `Int` || `Input26` ||  |
 * | 26 || 🔹 || `E<CKBD>` || `Input28` ||  |
 * | 27 || 🔹 || `Bol` || `Input29` ||  |
 * | 28 || 🔹 || `Vec` || `Input33` ||  |
 * | 29 || 🔹 || `Vec` || `Input34` ||  |
 * | 30 || 🔹 || `Flt` || `Input35` ||  |
 * | 31 || 🔹 || `Vec` || `Input39` ||  |
 * | 32 || 🔹 || `Vec` || `Input40` ||  |
 * | 33 || 🔹 || `Flt` || `Input41` ||  |
 * | 34 || 🔹 || `Flt` || `Input42` ||  |
 * | 35 || 🔹 || `Int` || `Input43` ||  |
 * | 36 || 🔹 || `E<CHTS>` || `Input45` ||  |
 * | 37 || 🔹 || `Flt` || `Input46` ||  |
 * | 38 || 🔹 || `Flt` || `Input47` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_TriggerHitboxSocket: "Execution.Character_Skill_Client.Trigger_Hitbox_Socket",

  /**
 * **移除指定角色扰动装置** `(Execution.Character_Skill_Client.Remove_Device)`
 *
 * - 移除指定类型的角色扰动装置
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200060** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `E<CDDT>` || `device_type` || 扰动装置类型: 分为力场器、弹射器、牵引器 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_RemoveDevice: "Execution.Character_Skill_Client.Remove_Device",

  /**
 * **修改攻击权重** `(Execution.Character_Skill_Client.Modify_Weight)`
 *
 * - 可以修改当前攻击目标的权重
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200061** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Flt` || `current_target_weight` || 当前攻击目标的权重 |
 * | 1 || 🔹 || `Bol` || `force_select_once` || 是否强制选一次目标 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_ModifyWeight: "Execution.Character_Skill_Client.Modify_Weight",

  /**
 * **镜头朝向检测数据** `(Execution.Character_Skill_Client.Get_Camera_Data)`
 *
 * - 镜头朝向检测数据，从镜头向出射位置打射线，返回路线上合法目标的旋转与位置
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200062** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `E<CCAM>` || `target_type` || 目标类型 |
 * | 1 || 🔹 || `Vec` || `origin` || 出射位置 |
 * | 2 || 🔹 || `Flt` || `min_distance` || 最近距离 |
 * | 3 || 🔹 || `Flt` || `max_distance` || 最远距离 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Vec` || `target_rotation` || 目标旋转 |
 * | 1 || 🔸 || `Vec` || `target_position` || 目标位置 |
 */
  Execution_CharacterSkillClient_GetCameraData: "Execution.Character_Skill_Client.Get_Camera_Data",

  /**
 * **三维向量内积** `(Arithmetic.Math_Client.Vector_Dot)`
 *
 * - 计算两个输入三维向量的内积（点乘）
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200063** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `vector1` || 三维向量1 |
 * | 1 || 🔹 || `Vec` || `vector2` || 三维向量2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `dot` || 计算结果 |
 */
  Arithmetic_MathClient_VectorDot: "Arithmetic.Math_Client.Vector_Dot",

  /**
 * **三维向量外积** `(Arithmetic.Math_Client.Vector_Cross)`
 *
 * - 计算两个三维向量的外积（叉乘）
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200064** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `vector1` || 三维向量1 |
 * | 1 || 🔹 || `Vec` || `vector2` || 三维向量2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `cross` || 计算结果 |
 */
  Arithmetic_MathClient_VectorCross: "Arithmetic.Math_Client.Vector_Cross",

  /**
 * **拆分三维向量** `(Arithmetic.Math_Client.Split_Vector)`
 *
 * - 将三维向量的x、y、z分量输出为三个浮点数
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200065** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `vector` || 三维向量 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `x` || X分量 |
 * | 1 || 🔸 || `Flt` || `y` || Y分量 |
 * | 2 || 🔸 || `Flt` || `z` || Z分量 |
 */
  Arithmetic_MathClient_SplitVector: "Arithmetic.Math_Client.Split_Vector",

  /**
 * **三维向量缩放** `(Arithmetic.Math_Client.Vector_Scale)`
 *
 * - 将输入的三维向量缩放后输出（三维向量数乘）
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200066** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `scale` || 缩放倍率 |
 * | 1 || 🔹 || `Vec` || `vector` || 三维向量 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || 结果 |
 */
  Arithmetic_MathClient_VectorScale: "Arithmetic.Math_Client.Vector_Scale",

  /**
 * **三维向量夹角** `(Arithmetic.Math_Client.Vector_Angle)`
 *
 * - 计算两个三维向量之间的夹角，以角度输出
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200067** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `vector1` || 三维向量1 |
 * | 1 || 🔹 || `Vec` || `vector2` || 三维向量2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `angle_degrees` || 夹角角度 |
 */
  Arithmetic_MathClient_VectorAngle: "Arithmetic.Math_Client.Vector_Angle",

  /**
 * **三维向量旋转** `(Arithmetic.Math_Client.Vector_Rotate)`
 *
 * - 将被旋转的三维向量，按照旋转所表示的欧拉角进行旋转后返回结果
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200068** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `vector` || 被旋转的三维向量 |
 * | 1 || 🔹 || `Vec` || `rotation` || 旋转 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || 结果 |
 */
  Arithmetic_MathClient_VectorRotate: "Arithmetic.Math_Client.Vector_Rotate",

  /**
 * **三维向量模运算** `(Arithmetic.Math_Client.Vector_Length)`
 *
 * - 计算输入三维向量的模
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200069** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `vector` || 三维向量 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || 结果 |
 */
  Arithmetic_MathClient_VectorLength: "Arithmetic.Math_Client.Vector_Length",

  /**
 * **创建三维向量** `(Arithmetic.Math_Client.Create_Vector)`
 *
 * - 根据x、y、z分量创建一个三维向量
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200070** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `x` || X分量 |
 * | 1 || 🔹 || `Flt` || `y` || Y分量 |
 * | 2 || 🔹 || `Flt` || `z` || Z分量 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `vector` || 三维向量 |
 */
  Arithmetic_MathClient_CreateVector: "Arithmetic.Math_Client.Create_Vector",

  /**
 * **三维向量加法** `(Arithmetic.Math_Client.Vector_Add)`
 *
 * - 计算两个三维向量的加法
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200071** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `vector1` || 三维向量1 |
 * | 1 || 🔹 || `Vec` || `vector2` || 三维向量2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `sum` || 计算结果 |
 */
  Arithmetic_MathClient_VectorAdd: "Arithmetic.Math_Client.Vector_Add",

  /**
 * **三维向量减法** `(Arithmetic.Math_Client.Vector_Subtract)`
 *
 * - 计算两个三维向量的减法
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200072** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `vector1` || 三维向量1 |
 * | 1 || 🔹 || `Vec` || `vector2` || 三维向量2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `diff` || 计算结果 |
 */
  Arithmetic_MathClient_VectorSubtract: "Arithmetic.Math_Client.Vector_Subtract",

  /**
 * **方向向量转旋转** `(Arithmetic.Math_Client.Vector_To_Rotation)`
 *
 * - 给定向前向量和向上向量，转化为欧拉角
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200073** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `forward` || 向前向量: 表示单位期望的朝向 |
 * | 1 || 🔹 || `Vec` || `up` || 向上向量: 定义单位的上方向（用于确定旋转的旋转角度），默认值为世界坐标系Y轴正方向 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `rotation` || 旋转 |
 */
  Arithmetic_MathClient_VectorToRotation: "Arithmetic.Math_Client.Vector_To_Rotation",

  /**
 * **朝向转旋转** `(Arithmetic.Math_Client.Orientation_To_Rotation)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200074** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `Input0` || 朝向 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `Output0` || 旋转 |
 */
  Arithmetic_MathClient_OrientationToRotation: "Arithmetic.Math_Client.Orientation_To_Rotation",

  /**
 * **恢复生命值** `(Execution.Character_Skill_Client.Recover_HP)`
 *
 * - 为目标实体发起一次恢复生命值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200075** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Flt` || `heal_amount` || 恢复量 |
 * | 2 || 🔹 || `Bol` || `ignore_healing_adjustments` || 是否忽略恢复调整效果 |
 * | 3 || 🔹 || `Flt` || `aggro_multiplier` || 本次治疗的仇恨倍率 |
 * | 4 || 🔹 || `Int` || `aggro_increment` || 本次治疗的仇恨增量 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_RecoverHP: "Execution.Character_Skill_Client.Recover_HP",

  /**
 * **获取当前角色** `(Query.Character_Related_Client.Get_Current_Character)`
 *
 * - 获取该玩家客户端当前控制的角色实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200076** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `character_entity` || 角色实体 |
 */
  Query_CharacterRelatedClient_GetCurrentCharacter: "Query.Character_Related_Client.Get_Current_Character",

  /**
 * **获取实体的单位标签列表** `(Query.Unit_Tag_Client.Get_Tags)`
 *
 * - 获取目标实体上携带的所有单位标签组成的列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200077** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `indexes` || 列表 |
 */
  Query_UnitTagClient_GetTags: "Query.Unit_Tag_Client.Get_Tags",

  /**
 * **获取单位标签的实体列表** `(Query.Unit_Tag_Client.Get_By_Tag)`
 *
 * - 获取在场所有携带该单位标签的实体列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200078** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `unit_tag_index` || 单位标签索引 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `entities` || 实体列表 |
 */
  Query_UnitTagClient_GetByTag: "Query.Unit_Tag_Client.Get_By_Tag",

  /**
 * **有限循环** `(Execution.General_Client.For_Loop)`
 *
 * - 从【循环起始值】开始到【循环终止值】结束，会遍历其中的循环值，每次整数加一。每次循环会执行一次【循环体】后连接的节点逻辑。完成一次完整遍历后，会执行【循环完成】后连接的节点逻辑。
 * - 可以使用【跳出循环】来提前结束该循环值遍历
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200079** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `Start` ||  |
 * | - || ▶️ || - || `Break` || 跳出循环 |
 * | 0 || 🔹 || `Int` || `start_index` || 循环起始值 |
 * | 1 || 🔹 || `Int` || `end_index` || 循环终止值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `Iteration` || 循环体 |
 * | - || ⏩ || - || `End` || 循环完成 |
 * | 0 || 🔸 || `Int` || `current_index` || 当前循环值 |
 */
  Execution_GeneralClient_ForLoop: "Execution.General_Client.For_Loop",

  /**
 * **跳出循环** `(Execution.General_Client.Break)`
 *
 * - 从有限循环中跳出。出引脚需要与节点【有限循环】的【跳出循环】入参相连
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200080** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_GeneralClient_Break: "Execution.General_Client.Break",

  /**
 * **设置局部变量** `(Execution.General_Client.Set_Local)`
 *
 * - 设置局部变量的值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200081** || 📱 Client || ⚙️ Execution || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Str` || `variable_name` || 变量名 |
 * | 1 || 🔷 || **`R<T>`** || `variable_value` || 变量值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:L<Int>>`
 * * `C<T:L<Str>>`
 * * `C<T:L<Ety>>`
 * * `C<T:L<Gid>>`
 * * `C<T:L<Flt>>`
 * * `C<T:L<Vec>>`
 * * `C<T:L<Bol>>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:Fct>`
 */
  Execution_GeneralClient_SetLocal: "Execution.General_Client.Set_Local",

  /**
 * **获取局部变量** `(Query.General_Client.Get_Local)`
 *
 * - 获取特定局部变量的变量值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200082** || 📱 Client || 🔍 Query || 🧩Variant |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Str` || `variable_name` || 变量名 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `value` || 变量值 |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Str>`
 * * `C<T:Ety>`
 * * `C<T:Gid>`
 * * `C<T:Flt>`
 * * `C<T:Vec>`
 * * `C<T:Bol>`
 * * `C<T:L<Int>>`
 * * `C<T:L<Str>>`
 * * `C<T:L<Ety>>`
 * * `C<T:L<Gid>>`
 * * `C<T:L<Flt>>`
 * * `C<T:L<Vec>>`
 * * `C<T:L<Bol>>`
 * * `C<T:Cfg>`
 * * `C<T:Pfb>`
 * * `C<T:Fct>`
 */
  Query_GeneralClient_GetLocal: "Query.General_Client.Get_Local",

  /**
 * **设置指定实体的仇恨值** `(Execution.Custom_Aggro_Client.Set_Aggro)`
 *
 * - 仅自定义仇恨模式可用
 * - 设置指定实体在仇恨拥有者实体上的仇恨值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200083** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target` || 目标实体 |
 * | 1 || 🔹 || `Ety` || `owner` || 仇恨拥有者实体 |
 * | 2 || 🔹 || `Int` || `value` || 仇恨值 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CustomAggroClient_SetAggro: "Execution.Custom_Aggro_Client.Set_Aggro",

  /**
 * **修改指定实体的仇恨值** `(Execution.Custom_Aggro_Client.Modify_Aggro)`
 *
 * - 仅自定义仇恨模式可用
 * - 修改指定实体在仇恨拥有者实体上的仇恨值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200084** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target` || 目标实体 |
 * | 1 || 🔹 || `Ety` || `owner` || 仇恨拥有者实体 |
 * | 2 || 🔹 || `Int` || `delta` || 仇恨值增量 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CustomAggroClient_ModifyAggro: "Execution.Custom_Aggro_Client.Modify_Aggro",

  /**
 * **按比例修改指定实体的仇恨值** `(Execution.Custom_Aggro_Client.Modify_Aggro_Ratio)`
 *
 * - 仅自定义仇恨模式可用
 * - 按比例修改目标实体在指定仇恨拥有者上的仇恨值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200085** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target` || 目标实体 |
 * | 1 || 🔹 || `Ety` || `owner` || 仇恨拥有者实体 |
 * | 2 || 🔹 || `Flt` || `ratio` || 修改的仇恨值比例 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CustomAggroClient_ModifyAggroRatio: "Execution.Custom_Aggro_Client.Modify_Aggro_Ratio",

  /**
 * **按比例转移指定实体的仇恨值** `(Execution.Custom_Aggro_Client.Transfer_Aggro)`
 *
 * - 仅自定义仇恨模式可用
 * - 将仇恨拥有者上对转移来源实体一定比例的仇恨转移到转移目标实体上
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200086** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target` || 转移目标实体 |
 * | 1 || 🔹 || `Ety` || `source` || 转移来源实体 |
 * | 2 || 🔹 || `Ety` || `owner` || 仇恨拥有者实体 |
 * | 3 || 🔹 || `Flt` || `ratio` || 转移比例 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CustomAggroClient_TransferAggro: "Execution.Custom_Aggro_Client.Transfer_Aggro",

  /**
 * **清空指定实体的仇恨列表** `(Execution.Custom_Aggro_Client.Clear_Aggro)`
 *
 * - 仅自定义仇恨模式可用
 * - 清空指定实体的仇恨列表，这通常会导致该目标脱战
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200087** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CustomAggroClient_ClearAggro: "Execution.Custom_Aggro_Client.Clear_Aggro",

  /**
 * **将目标实体移除出仇恨列表** `(Execution.Custom_Aggro_Client.Remove_Aggro)`
 *
 * - 仅自定义仇恨模式可用
 * - 将目标实体移出仇恨拥有者实体的仇恨列表，这可能导致目标实体脱战
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200088** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `target` || 目标实体 |
 * | 1 || 🔹 || `Ety` || `owner` || 仇恨拥有者实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CustomAggroClient_RemoveAggro: "Execution.Custom_Aggro_Client.Remove_Aggro",

  /**
 * **嘲讽目标** `(Execution.Custom_Aggro_Client.Taunt)`
 *
 * - 仅自定义仇恨模式可用
 * - 嘲讽者实体嘲讽指定目标实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200089** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Ety` || `taunter` || 嘲讽者实体 |
 * | 1 || 🔹 || `Ety` || `target` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CustomAggroClient_Taunt: "Execution.Custom_Aggro_Client.Taunt",

  /**
 * **获取指定实体的仇恨目标** `(Query.Custom_Aggro_Client.Get_Aggro_Target)`
 *
 * - 获取指定实体的仇恨目标
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200090** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `specified_entity` || 指定实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `hate_target` || 仇恨目标 |
 */
  Query_CustomAggroClient_GetAggroTarget: "Query.Custom_Aggro_Client.Get_Aggro_Target",

  /**
 * **获取指定实体的仇恨列表** `(Query.Custom_Aggro_Client.Get_Aggro_List)`
 *
 * - 获取指定实体的仇恨列表
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200091** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `specified_entity` || 指定实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `hate_list` || 仇恨列表 |
 */
  Query_CustomAggroClient_GetAggroList: "Query.Custom_Aggro_Client.Get_Aggro_List",

  /**
 * **查询指定实体是否入战** `(Query.Custom_Aggro_Client.Is_In_Combat)`
 *
 * - 查询指定实体是否已经入战
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200092** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `is_in_combat` || 是否入战 |
 */
  Query_CustomAggroClient_IsInCombat: "Query.Custom_Aggro_Client.Is_In_Combat",

  /**
 * **查询阵营是否敌对** `(Query.Faction_Related_Client.Is_Hostile)`
 *
 * - 查询阵营1和阵营2是否敌对
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200093** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Fct` || `camp1` || 阵营1 |
 * | 1 || 🔹 || `Fct` || `camp2` || 阵营2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `is_hostile` || 是否敌对 |
 */
  Query_FactionRelatedClient_IsHostile: "Query.Faction_Related_Client.Is_Hostile",

  /**
 * **正弦函数** `(Arithmetic.Math_Client.Sin)`
 *
 * - 计算输入弧度的正弦
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200094** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `radian` || 弧度 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || 结果 |
 */
  Arithmetic_MathClient_Sin: "Arithmetic.Math_Client.Sin",

  /**
 * **余弦函数** `(Arithmetic.Math_Client.Cos)`
 *
 * - 计算输入弧度的余弦
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200095** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `radian` || 弧度 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || 结果 |
 */
  Arithmetic_MathClient_Cos: "Arithmetic.Math_Client.Cos",

  /**
 * **正切函数** `(Arithmetic.Math_Client.Tan)`
 *
 * - 计算输入弧度的正切
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200096** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `Input1` || 弧度 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `Output0` || 结果 |
 */
  Arithmetic_MathClient_Tan: "Arithmetic.Math_Client.Tan",

  /**
 * **反正弦函数** `(Arithmetic.Math_Client.Asin)`
 *
 * - 计算输入的反正弦值，返回为弧度值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200097** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `input` || 输入 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `radians` || 弧度 |
 */
  Arithmetic_MathClient_Asin: "Arithmetic.Math_Client.Asin",

  /**
 * **反余弦函数** `(Arithmetic.Math_Client.Acos)`
 *
 * - 计算输入的反余弦值，返回为弧度值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200098** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `input` || 输入 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `radians` || 弧度 |
 */
  Arithmetic_MathClient_Acos: "Arithmetic.Math_Client.Acos",

  /**
 * **反正切函数** `(Arithmetic.Math_Client.Atan)`
 *
 * - 计算输入的反正切值，返回为弧度值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200099** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `input` || 输入 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `radians` || 弧度 |
 */
  Arithmetic_MathClient_Atan: "Arithmetic.Math_Client.Atan",

  /**
 * **三维向量归一化** `(Arithmetic.Math_Client.Vector_Normalize)`
 *
 * - 将三维向量的长度归一化后输出
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200100** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Vec` || `vector` || 三维向量 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || 结果 |
 */
  Arithmetic_MathClient_VectorNormalize: "Arithmetic.Math_Client.Vector_Normalize",

  /**
 * **弧度转角度** `(Arithmetic.Math_Client.Rad_To_Deg)`
 *
 * - 将弧度值转为角度值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200101** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `radian` || 弧度 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `degree` || 角度 |
 */
  Arithmetic_MathClient_RadToDeg: "Arithmetic.Math_Client.Rad_To_Deg",

  /**
 * **角度转弧度** `(Arithmetic.Math_Client.Deg_To_Rad)`
 *
 * - 将角度值转为弧度值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200102** || 📱 Client || 🔢 Arithmetic || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Flt` || `degree` || 角度 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `radian` || 弧度 |
 */
  Arithmetic_MathClient_DegToRad: "Arithmetic.Math_Client.Deg_To_Rad",

  /**
 * **查询实体是否在场** `(Query.Entity_Related_Client.Is_Active)`
 *
 * - 查询指定实体是否在场
 * - 注意角色实体即使处于倒下状态，仍然认为在场
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200103** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `is_present` || 是否在场 |
 */
  Query_EntityRelatedClient_IsActive: "Query.Entity_Related_Client.Is_Active",

  /**
 * **Node Graph Ends** `(Hidden.Other_Client.Graph_End)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200104** || 📱 Client || 🚫 Hidden || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `Input0` ||  |
 * | 1 || 🔹 || `E<CFLT>` || `Input1` ||  |
 */
  Hidden_OtherClient_GraphEnd: "Hidden.Other_Client.Graph_End",

  /**
 * **玩家转向指定朝向** `(Execution.Character_Skill_Client.Turn_To_Face)`
 *
 * - 玩家转向三维向量配置的方向
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200105** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `Vec` || `direction` || 朝向 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_TurnToFace: "Execution.Character_Skill_Client.Turn_To_Face",

  /**
 * **重置技能目标** `(Execution.Character_Skill_Client.Reset_Target)`
 *
 * - 重置技能目标，重新运行一次技能选取逻辑，选择一个新的目标
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200106** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_ResetTarget: "Execution.Character_Skill_Client.Reset_Target",

  /**
 * **获取碰撞触发器内所有实体** `(Query.Trigger_Client.Get_Overlapping_Entities)`
 *
 * - 获取目标实体上碰撞触发器组件中特定序号对应的碰撞触发器内的所有实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200107** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 * | 1 || 🔹 || `Int` || `trigger_index` || 触发器序号 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `entities` || 实体列表 |
 */
  Query_TriggerClient_GetOverlappingEntities: "Query.Trigger_Client.Get_Overlapping_Entities",

  /**
 * **强制退出瞄准状态** `(Execution.Character_Skill_Client.Exit_Aiming)`
 *
 * - 当角色处于瞄准状态是，会强制退出瞄准状态
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200108** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_ExitAiming: "Execution.Character_Skill_Client.Exit_Aiming",

  /**
 * **获取射线检测结果** `(Query.Ray_Client.Get_Ray_Result)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200109** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `Input0` ||  |
 * | 1 || 🔹 || `Vec` || `Input1` ||  |
 * | 2 || 🔹 || `Vec` || `Input2` ||  |
 * | 3 || 🔹 || `Flt` || `Input3` ||  |
 * | 4 || 🔹 || `E<CCAM>` || `Input4` ||  |
 * | 5 || 🔹 || `L<E<CETY>>` || `Input5` ||  |
 * | 6 || 🔹 || `L<E<CATX>>` || `Input6` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `Output0` ||  |
 * | 1 || 🔸 || `Ety` || `Output1` ||  |
 */
  Query_RayClient_GetRayResult: "Query.Ray_Client.Get_Ray_Result",

  /**
 * **获取射线筛选类型列表** `(Query.List_Related_Client.Get_Ray_Filters)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200110** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `E<CATX>` || `enum0` || 0 |
 * | 1 || 🔹 || `E<CATX>` || `enum1` || 1 |
 * | 2 || 🔹 || `E<CATX>` || `enum2` || 2 |
 * | 3 || 🔹 || `E<CATX>` || `enum3` || 3 |
 * | 4 || 🔹 || `E<CATX>` || `enum4` || 4 |
 * | 5 || 🔹 || `E<CATX>` || `enum5` || 5 |
 * | 6 || 🔹 || `E<CATX>` || `enum6` || 6 |
 * | 7 || 🔹 || `E<CATX>` || `enum7` || 7 |
 * | 8 || 🔹 || `E<CATX>` || `enum8` || 8 |
 * | 9 || 🔹 || `E<CATX>` || `enum9` || 9 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<E<CATX>>` || `list` || 列表 |
 */
  Query_ListRelatedClient_GetRayFilters: "Query.List_Related_Client.Get_Ray_Filters",

  /**
 * **特定位置打球形攻击盒** `(Execution.Character_Skill_Client.Trigger_Sphere_Hitbox_Loc)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200111** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `E<CTTP>` || `camp_filter` || 目标阵营筛选 |
 * | 1 || 🔹 || `Vec` || `position` || 位置 |
 * | 2 || 🔹 || `Vec` || `rotation` || 旋转 |
 * | 3 || 🔹 || `Flt` || `damage_ratio` || 伤害系数 |
 * | 4 || 🔹 || `Flt` || `damage_offset` || 伤害增量 |
 * | 5 || 🔹 || `L<E<CETY>>` || `entity_type_filter_list` || 攻击盒实体类型筛选列表 |
 * | 6 || 🔹 || `E<CTRG>` || `trigger_type` || 触发类型 |
 * | 7 || 🔹 || `Int` || `hit_scene_fx` || 命中场景特效 |
 * | 8 || 🔹 || `Vec` || `sphere_radius` || 攻击盒为球体时的半径 |
 * | 9 || 🔹 || `E<CALC>` || `hit_layer_filter` || 攻击层筛选 |
 * | 10 || 🔹 || `L<Str>` || `attack_tags` || 攻击标签列表 |
 * | 11 || 🔹 || `E<CELM>` || `element_type` || 元素类型 |
 * | 12 || 🔹 || `Flt` || `element_attack_enhance` || 元素攻击强效 |
 * | 13 || 🔹 || `E<CHIT>` || `hit_type` || 打击类型 |
 * | 14 || 🔹 || `E<CATK>` || `attack_type` || 攻击类型 |
 * | 15 || 🔹 || `Flt` || `interrupt_value` || 打断值 |
 * | 16 || 🔹 || `Bol` || `absolute_damage` || 是否是绝对伤害 |
 * | 17 || 🔹 || `Int` || `hit_fx` || 命中特效 |
 * | 18 || 🔹 || `E<CKBD>` || `knockback_direction` || 受击击退朝向 |
 * | 19 || 🔹 || `Bol` || `suppress_floating_text` || 是否屏蔽伤害跳字 |
 * | 20 || 🔹 || `Vec` || `hit_scene_fx_offset` || 命中场景特效偏移 |
 * | 21 || 🔹 || `Vec` || `hit_scene_fx_rotation` || 命中场景特效旋转 |
 * | 22 || 🔹 || `Flt` || `hit_scene_fx_scale` || 命中场景特效缩放 |
 * | 23 || 🔹 || `Vec` || `hit_fx_offset` || 命中特效偏移 |
 * | 24 || 🔹 || `Vec` || `hit_fx_rotation` || 命中特效旋转 |
 * | 25 || 🔹 || `Flt` || `hit_fx_scale` || 命中特效缩放 |
 * | 26 || 🔹 || `Flt` || `aggro_multiplier` || 本次攻击的仇恨倍率 |
 * | 27 || 🔹 || `Int` || `aggro_increment` || 本次攻击的仇恨增量 |
 * | 28 || 🔹 || `E<CHTS>` || `hit_level` || 受击等级 |
 * | 29 || 🔹 || `Flt` || `horizontal_impulse` || 命中水平冲量 |
 * | 30 || 🔹 || `Flt` || `vertical_impulse` || 命中垂直冲量 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_TriggerSphereHitboxLoc: "Execution.Character_Skill_Client.Trigger_Sphere_Hitbox_Loc",

  /**
 * **特定位置打矩形攻击盒** `(Execution.Character_Skill_Client.Trigger_Rect_Hitbox_Loc)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200112** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `E<CTTP>` || `camp_filter` || 目标阵营筛选 |
 * | 1 || 🔹 || `Vec` || `position` || 位置 |
 * | 2 || 🔹 || `Vec` || `rotation` || 旋转 |
 * | 3 || 🔹 || `Flt` || `damage_ratio` || 伤害系数 |
 * | 4 || 🔹 || `Flt` || `damage_offset` || 伤害增量 |
 * | 5 || 🔹 || `L<E<CETY>>` || `entity_type_filter_list` || 攻击盒实体类型筛选列表 |
 * | 6 || 🔹 || `E<CTRG>` || `trigger_type` || 触发类型 |
 * | 7 || 🔹 || `Int` || `hit_scene_fx` || 命中场景特效 |
 * | 8 || 🔹 || `Vec` || `box_scale` || 攻击盒为长方体时的缩放 |
 * | 9 || 🔹 || `E<CALC>` || `hit_layer_filter` || 攻击层筛选 |
 * | 10 || 🔹 || `L<Str>` || `attack_tags` || 攻击标签列表 |
 * | 11 || 🔹 || `E<CELM>` || `element_type` || 元素类型 |
 * | 12 || 🔹 || `Flt` || `element_attack_enhance` || 元素攻击强效 |
 * | 13 || 🔹 || `E<CHIT>` || `hit_type` || 打击类型 |
 * | 14 || 🔹 || `E<CATK>` || `attack_type` || 攻击类型 |
 * | 15 || 🔹 || `Flt` || `interrupt_value` || 打断值 |
 * | 16 || 🔹 || `Bol` || `absolute_damage` || 是否是绝对伤害 |
 * | 17 || 🔹 || `Int` || `hit_fx` || 命中特效 |
 * | 18 || 🔹 || `E<CKBD>` || `knockback_direction` || 受击击退朝向 |
 * | 19 || 🔹 || `Bol` || `suppress_floating_text` || 是否屏蔽伤害跳字 |
 * | 20 || 🔹 || `Vec` || `hit_scene_fx_offset` || 命中场景特效偏移 |
 * | 21 || 🔹 || `Vec` || `hit_scene_fx_rotation` || 命中场景特效旋转 |
 * | 22 || 🔹 || `Flt` || `hit_scene_fx_scale` || 命中场景特效缩放 |
 * | 23 || 🔹 || `Vec` || `hit_fx_offset` || 命中特效偏移 |
 * | 24 || 🔹 || `Vec` || `hit_fx_rotation` || 命中特效旋转 |
 * | 25 || 🔹 || `Flt` || `hit_fx_scale` || 命中特效缩放 |
 * | 26 || 🔹 || `Flt` || `aggro_multiplier` || 本次攻击的仇恨倍率 |
 * | 27 || 🔹 || `Int` || `aggro_increment` || 本次攻击的仇恨增量 |
 * | 28 || 🔹 || `E<CHTS>` || `hit_level` || 受击等级 |
 * | 29 || 🔹 || `Flt` || `horizontal_impulse` || 命中水平冲量 |
 * | 30 || 🔹 || `Flt` || `vertical_impulse` || 命中垂直冲量 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_TriggerRectHitboxLoc: "Execution.Character_Skill_Client.Trigger_Rect_Hitbox_Loc",

  /**
 * **特定位置打扇形攻击盒** `(Execution.Character_Skill_Client.Trigger_Sector_Hitbox_Loc)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200113** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `E<CTTP>` || `camp_filter` || 目标阵营筛选 |
 * | 1 || 🔹 || `Vec` || `position` || 位置 |
 * | 2 || 🔹 || `Vec` || `rotation` || 旋转 |
 * | 3 || 🔹 || `Flt` || `damage_ratio` || 伤害系数 |
 * | 4 || 🔹 || `Flt` || `damage_offset` || 伤害增量 |
 * | 5 || 🔹 || `L<E<CETY>>` || `entity_type_filter_list` || 攻击盒实体类型筛选列表 |
 * | 6 || 🔹 || `E<CTRG>` || `trigger_type` || 触发类型 |
 * | 7 || 🔹 || `Int` || `hit_scene_fx` || 命中场景特效 |
 * | 8 || 🔹 || `Flt` || `sector_height` || 攻击盒为扇形时的高度 |
 * | 9 || 🔹 || `Flt` || `sector_angle` || 攻击盒为扇形时的扇角度 |
 * | 10 || 🔹 || `Flt` || `sector_radius` || 攻击盒为扇形时的扇半径 |
 * | 11 || 🔹 || `Flt` || `sector_inner_radius` || 攻击盒为扇形时的内半径 |
 * | 12 || 🔹 || `E<CSCT>` || `sector_direction` || 攻击盒为扇形时的检测方向 |
 * | 13 || 🔹 || `E<CALC>` || `hit_layer_filter` || 攻击层筛选 |
 * | 14 || 🔹 || `L<Str>` || `attack_tags` || 攻击标签列表 |
 * | 15 || 🔹 || `E<CELM>` || `element_type` || 元素类型 |
 * | 16 || 🔹 || `Flt` || `element_attack_enhance` || 元素攻击强效 |
 * | 17 || 🔹 || `E<CHIT>` || `hit_type` || 打击类型 |
 * | 18 || 🔹 || `E<CATK>` || `attack_type` || 攻击类型 |
 * | 19 || 🔹 || `Flt` || `interrupt_value` || 打断值 |
 * | 20 || 🔹 || `Bol` || `absolute_damage` || 是否是绝对伤害 |
 * | 21 || 🔹 || `Int` || `hit_fx` || 命中特效 |
 * | 22 || 🔹 || `E<CKBD>` || `knockback_direction` || 受击击退朝向 |
 * | 23 || 🔹 || `Bol` || `suppress_floating_text` || 是否屏蔽伤害跳字 |
 * | 24 || 🔹 || `Vec` || `hit_scene_fx_offset` || 命中场景特效偏移 |
 * | 25 || 🔹 || `Vec` || `hit_scene_fx_rotation` || 命中场景特效旋转 |
 * | 26 || 🔹 || `Flt` || `hit_scene_fx_scale` || 命中场景特效缩放 |
 * | 27 || 🔹 || `Vec` || `hit_fx_offset` || 命中特效偏移 |
 * | 28 || 🔹 || `Vec` || `hit_fx_rotation` || 命中特效旋转 |
 * | 29 || 🔹 || `Flt` || `hit_fx_scale` || 命中特效缩放 |
 * | 30 || 🔹 || `Flt` || `aggro_multiplier` || 本次攻击的仇恨倍率 |
 * | 31 || 🔹 || `Int` || `aggro_increment` || 本次攻击的仇恨增量 |
 * | 32 || 🔹 || `E<CHTS>` || `hit_level` || 受击等级 |
 * | 33 || 🔹 || `Flt` || `horizontal_impulse` || 命中水平冲量 |
 * | 34 || 🔹 || `Flt` || `vertical_impulse` || 命中垂直冲量 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_TriggerSectorHitboxLoc: "Execution.Character_Skill_Client.Trigger_Sector_Hitbox_Loc",

  /**
 * **Trigger Spherical Hitbox at Specified Attachment Point** `(Execution.Character_Skill_Client.Trigger_Sphere_Hitbox_Socket)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200114** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `E<CTTP>` || `Input0` ||  |
 * | 1 || 🔹 || `Str` || `Input1` ||  |
 * | 2 || 🔹 || `Vec` || `Input2` ||  |
 * | 3 || 🔹 || `Vec` || `Input3` ||  |
 * | 4 || 🔹 || `Flt` || `Input4` ||  |
 * | 5 || 🔹 || `Flt` || `Input5` ||  |
 * | 6 || 🔹 || `L<E<CETY>>` || `Input6` ||  |
 * | 7 || 🔹 || `E<CTRG>` || `Input7` ||  |
 * | 8 || 🔹 || `Int` || `Input8` ||  |
 * | 9 || 🔹 || `Flt` || `Input12` ||  |
 * | 10 || 🔹 || `Flt` || `Input13` ||  |
 * | 11 || 🔹 || `Flt` || `Input14` ||  |
 * | 12 || 🔹 || `Flt` || `Input15` ||  |
 * | 13 || 🔹 || `E<CSCT>` || `Input16` ||  |
 * | 14 || 🔹 || `E<CALC>` || `Input17` ||  |
 * | 15 || 🔹 || `L<Str>` || `Input18` ||  |
 * | 16 || 🔹 || `E<CELM>` || `Input19` ||  |
 * | 17 || 🔹 || `Flt` || `Input20` ||  |
 * | 18 || 🔹 || `E<CHIT>` || `Input21` ||  |
 * | 19 || 🔹 || `E<CATK>` || `Input22` ||  |
 * | 20 || 🔹 || `Flt` || `Input23` ||  |
 * | 21 || 🔹 || `Bol` || `Input25` ||  |
 * | 22 || 🔹 || `Int` || `Input26` ||  |
 * | 23 || 🔹 || `E<CKBD>` || `Input28` ||  |
 * | 24 || 🔹 || `Bol` || `Input29` ||  |
 * | 25 || 🔹 || `Vec` || `Input33` ||  |
 * | 26 || 🔹 || `Vec` || `Input34` ||  |
 * | 27 || 🔹 || `Flt` || `Input35` ||  |
 * | 28 || 🔹 || `Vec` || `Input39` ||  |
 * | 29 || 🔹 || `Vec` || `Input40` ||  |
 * | 30 || 🔹 || `Flt` || `Input41` ||  |
 * | 31 || 🔹 || `Flt` || `Input42` ||  |
 * | 32 || 🔹 || `Int` || `Input43` ||  |
 * | 33 || 🔹 || `E<CHTS>` || `Input45` ||  |
 * | 34 || 🔹 || `Flt` || `Input46` ||  |
 * | 35 || 🔹 || `Flt` || `Input47` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_TriggerSphereHitboxSocket: "Execution.Character_Skill_Client.Trigger_Sphere_Hitbox_Socket",

  /**
 * **Trigger Rectangular Hitbox at Specified Attachment Point** `(Execution.Character_Skill_Client.Trigger_Rect_Hitbox_Socket)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200115** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `E<CTTP>` || `Input0` ||  |
 * | 1 || 🔹 || `Str` || `Input1` ||  |
 * | 2 || 🔹 || `Vec` || `Input2` ||  |
 * | 3 || 🔹 || `Vec` || `Input3` ||  |
 * | 4 || 🔹 || `Flt` || `Input4` ||  |
 * | 5 || 🔹 || `Flt` || `Input5` ||  |
 * | 6 || 🔹 || `L<E<CETY>>` || `Input6` ||  |
 * | 7 || 🔹 || `E<CTRG>` || `Input7` ||  |
 * | 8 || 🔹 || `Int` || `Input8` ||  |
 * | 9 || 🔹 || `Vec` || `Input10` ||  |
 * | 10 || 🔹 || `E<CALC>` || `Input17` ||  |
 * | 11 || 🔹 || `L<Str>` || `Input18` ||  |
 * | 12 || 🔹 || `E<CELM>` || `Input19` ||  |
 * | 13 || 🔹 || `Flt` || `Input20` ||  |
 * | 14 || 🔹 || `E<CHIT>` || `Input21` ||  |
 * | 15 || 🔹 || `E<CATK>` || `Input22` ||  |
 * | 16 || 🔹 || `Flt` || `Input23` ||  |
 * | 17 || 🔹 || `Bol` || `Input25` ||  |
 * | 18 || 🔹 || `Int` || `Input26` ||  |
 * | 19 || 🔹 || `E<CKBD>` || `Input28` ||  |
 * | 20 || 🔹 || `Bol` || `Input29` ||  |
 * | 21 || 🔹 || `Vec` || `Input33` ||  |
 * | 22 || 🔹 || `Vec` || `Input34` ||  |
 * | 23 || 🔹 || `Flt` || `Input35` ||  |
 * | 24 || 🔹 || `Vec` || `Input39` ||  |
 * | 25 || 🔹 || `Vec` || `Input40` ||  |
 * | 26 || 🔹 || `Flt` || `Input41` ||  |
 * | 27 || 🔹 || `Flt` || `Input42` ||  |
 * | 28 || 🔹 || `Int` || `Input43` ||  |
 * | 29 || 🔹 || `E<CHTS>` || `Input45` ||  |
 * | 30 || 🔹 || `Flt` || `Input46` ||  |
 * | 31 || 🔹 || `Flt` || `Input47` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_TriggerRectHitboxSocket: "Execution.Character_Skill_Client.Trigger_Rect_Hitbox_Socket",

  /**
 * **指定挂接点打攻击盒** `(Execution.Character_Skill_Client.Trigger_Sector_Hitbox_Socket)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200116** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 * | 0 || 🔹 || `E<CTTP>` || `Input0` ||  |
 * | 1 || 🔹 || `Str` || `Input1` ||  |
 * | 2 || 🔹 || `Vec` || `Input2` ||  |
 * | 3 || 🔹 || `Vec` || `Input3` ||  |
 * | 4 || 🔹 || `Flt` || `Input4` ||  |
 * | 5 || 🔹 || `Flt` || `Input5` ||  |
 * | 6 || 🔹 || `L<E<CETY>>` || `Input6` ||  |
 * | 7 || 🔹 || `E<CTRG>` || `Input7` ||  |
 * | 8 || 🔹 || `Int` || `Input8` ||  |
 * | 9 || 🔹 || `Flt` || `Input12` ||  |
 * | 10 || 🔹 || `Flt` || `Input13` ||  |
 * | 11 || 🔹 || `Flt` || `Input14` ||  |
 * | 12 || 🔹 || `Flt` || `Input15` ||  |
 * | 13 || 🔹 || `E<CSCT>` || `Input16` ||  |
 * | 14 || 🔹 || `E<CALC>` || `Input17` ||  |
 * | 15 || 🔹 || `L<Str>` || `Input18` ||  |
 * | 16 || 🔹 || `E<CELM>` || `Input19` ||  |
 * | 17 || 🔹 || `Flt` || `Input20` ||  |
 * | 18 || 🔹 || `E<CHIT>` || `Input21` ||  |
 * | 19 || 🔹 || `E<CATK>` || `Input22` ||  |
 * | 20 || 🔹 || `Flt` || `Input23` ||  |
 * | 21 || 🔹 || `Bol` || `Input25` ||  |
 * | 22 || 🔹 || `Int` || `Input26` ||  |
 * | 23 || 🔹 || `E<CKBD>` || `Input28` ||  |
 * | 24 || 🔹 || `Bol` || `Input29` ||  |
 * | 25 || 🔹 || `Vec` || `Input33` ||  |
 * | 26 || 🔹 || `Vec` || `Input34` ||  |
 * | 27 || 🔹 || `Flt` || `Input35` ||  |
 * | 28 || 🔹 || `Vec` || `Input39` ||  |
 * | 29 || 🔹 || `Vec` || `Input40` ||  |
 * | 30 || 🔹 || `Flt` || `Input41` ||  |
 * | 31 || 🔹 || `Flt` || `Input42` ||  |
 * | 32 || 🔹 || `Int` || `Input43` ||  |
 * | 33 || 🔹 || `E<CHTS>` || `Input45` ||  |
 * | 34 || 🔹 || `Flt` || `Input46` ||  |
 * | 35 || 🔹 || `Flt` || `Input47` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_CharacterSkillClient_TriggerSectorHitboxSocket: "Execution.Character_Skill_Client.Trigger_Sector_Hitbox_Socket",

  /**
 * **(Test) Send Client Signal** `(Hidden.Execution_Client.Test_Send_Signal)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200117** || 📱 Client || 🚫 Hidden || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Str` || `Input0` ||  |
 * | 1 || 🔹 || `Ety` || `Input1` ||  |
 * | 2 || 🔹 || `L<Ety>` || `Input2` ||  |
 * | 3 || 🔹 || `Int` || `Input3` ||  |
 * | 4 || 🔹 || `L<Int>` || `Input4` ||  |
 * | 5 || 🔹 || `Bol` || `Input5` ||  |
 * | 6 || 🔹 || `L<Bol>` || `Input6` ||  |
 * | 7 || 🔹 || `Flt` || `Input7` ||  |
 * | 8 || 🔹 || `L<Flt>` || `Input8` ||  |
 * | 9 || 🔹 || `Str` || `Input9` ||  |
 * | 10 || 🔹 || `L<Str>` || `Input10` ||  |
 * | 11 || 🔹 || `Vec` || `Input11` ||  |
 * | 12 || 🔹 || `L<Vec>` || `Input12` ||  |
 * | 13 || 🔹 || `Gid` || `Input13` ||  |
 * | 14 || 🔹 || `L<Gid>` || `Input14` ||  |
 * | 15 || 🔹 || `Fct` || `Input15` ||  |
 * | 16 || 🔹 || `Cfg` || `Input16` ||  |
 * | 17 || 🔹 || `L<Cfg>` || `Input17` ||  |
 * | 18 || 🔹 || `Pfb` || `Input18` ||  |
 * | 19 || 🔹 || `L<Pfb>` || `Input19` ||  |
 */
  Hidden_ExecutionClient_TestSendSignal: "Hidden.Execution_Client.Test_Send_Signal",

  /**
 * **获取扫描组件当前扫描到的实体** `(Query.Scanning_Client.Get_Scanned_Entity)`
 *
 * - 获取扫描组件当前扫描到的实体，指扫描状态为“激活状态”的实体
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200118** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `entity` || 对应实体 |
 * | 1 || 🔸 || `Cfg` || `scan_tag_config_id` || 扫描标签配置ID |
 */
  Query_ScanningClient_GetScannedEntity: "Query.Scanning_Client.Get_Scanned_Entity",

  /**
 * **获取扫描组件可扫描的所有合法对象** `(Query.Scanning_Client.Get_Scannable_Entities)`
 *
 * - 获取扫描组件可扫描的所有合法对象，此处的合法对象指代所有携带扫描组件且过滤器返回为“是”的单位，与单位的可扫描状态无关
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200119** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `objects` || 对象列表 |
 */
  Query_ScanningClient_GetScannableEntities: "Query.Scanning_Client.Get_Scannable_Entities",

  /**
 * **获取实体扫描状态** `(Query.Scanning_Client.Get_Scan_Status)`
 *
 * - 获取实体扫描状态
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200120** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `E<CSCN>` || `scan_state` || 扫描状态: 分为不可见、当前扫描目标、候选目标、不满足条件 |
 */
  Query_ScanningClient_GetScanStatus: "Query.Scanning_Client.Get_Scan_Status",

  /**
 * **获取实体当前生效的扫描标签** `(Query.Scanning_Client.Get_Active_Tags)`
 *
 * - 获取目标实体当前生效的扫描标签
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200121** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Ety` || `target_entity` || 目标实体 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Cfg` || `scan_tag_config_id` || 扫描标签配置ID |
 */
  Query_ScanningClient_GetActiveTags: "Query.Scanning_Client.Get_Active_Tags",

  /**
 * **节点图结束(整数)** `(Others.Port_Client.Graph_End_Int)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200122** || 📱 Client || 🔗 Others || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔹 || `Int` || `Input0` || 输出结果（整型） |
 */
  Others_PortClient_GraphEndInt: "Others.Port_Client.Graph_End_Int",

  /**
 * **获得玩家客户端输入设备类型** `(Query.Character_Related_Client.Get_Input_Type)`
 *
 * - 获得玩家的客户端输入设备类型，根据用户界面的映射方式决定
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200123** || 📱 Client || 🔍 Query || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `E<CDEV>` || `input_device_type` || 输入设备类型: 分为键盘鼠标、手柄、触屏 |
 */
  Query_CharacterRelatedClient_GetInputType: "Query.Character_Related_Client.Get_Input_Type",

  /**
 * **向服务器节点图发送信号** `(Execution.Signal_Client.Send_To_Server)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **200124** || 📱 Client || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_SignalClient_SendToServer: "Execution.Signal_Client.Send_To_Server",

  /**
 * **发送信号** `(Execution.Signal.Send)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **300000** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Signal_Send: "Execution.Signal.Send",

  /**
 * **监听信号** `(Trigger.Signal.On_Signal)`
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **300001** || 🖥️ Server || ⚡ Trigger || 📌Fixed |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `source_entity` || 事件源实体 |
 * | 1 || 🔸 || `Gid` || `source_guid` || 事件源GUID |
 * | 2 || 🔸 || `Ety` || `signal_from` || 信号来源实体 |
 */
  Trigger_Signal_OnSignal: "Trigger.Signal.On_Signal",

  /**
 * **拼装结构体** `(Arithmetic.Structure.Assemble_Struct)`
 *
 * - 将多个参数拼合为一个结构体类型的值
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **300002** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 */
  Arithmetic_Structure_AssembleStruct: "Arithmetic.Structure.Assemble_Struct",

  /**
 * **拆分结构体** `(Arithmetic.Structure.Split_Struct)`
 *
 * - 获取指定结构体的所有参数
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **300003** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 */
  Arithmetic_Structure_SplitStruct: "Arithmetic.Structure.Split_Struct",

  /**
 * **修改结构体** `(Execution.Structure.Modify)`
 *
 * - 在选定结构体后，可以修改该结构体的每个参数
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **300004** || 🖥️ Server || ⚙️ Execution || 📌Fixed |
 *
 * -----------
 *
 * #### 📥 Inputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ▶️ || - || `FlowIn` ||  |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 */
  Execution_Structure_Modify: "Execution.Structure.Modify",
} as const;

export type NodeIdentifier = typeof NODES[keyof typeof NODES];

export const NODE_NAMES = {
  /**  See `NODES.Execution_CommonNode_Print` for detailed documentation. */
  "打印字符串": "Execution.Common_Node.Print",
  /**  See `NODES.Control_General_Branch` for detailed documentation. */
  "双分支": "Control.General.Branch",
  /**  See `NODES.Control_General_Switch` for detailed documentation. */
  "多分支": "Control.General.Switch",
  /**  See `NODES.Execution_CommonNode_ForLoop` for detailed documentation. */
  "有限循环": "Execution.Common_Node.For_Loop",
  /**  See `NODES.Execution_CommonNode_Break` for detailed documentation. */
  "跳出循环": "Execution.Common_Node.Break",
  /**  See `NODES.Query_Math_RandomFloat` for detailed documentation. */
  "获取随机浮点数": "Query.Math.Random_Float",
  /**  See `NODES.Query_Math_WeightedRandom` for detailed documentation. */
  "权重随机": "Query.Math.Weighted_Random",
  /**  See `NODES.Arithmetic_Math_SplitVector` for detailed documentation. */
  "拆分三维向量": "Arithmetic.Math.Split_Vector",
  /**  See `NODES.Arithmetic_Math_VectorAdd` for detailed documentation. */
  "三维向量加法": "Arithmetic.Math.Vector_Add",
  /**  See `NODES.Arithmetic_Math_VectorSubtract` for detailed documentation. */
  "三维向量减法": "Arithmetic.Math.Vector_Subtract",
  /**  See `NODES.Arithmetic_Math_VectorScale` for detailed documentation. */
  "三维向量缩放": "Arithmetic.Math.Vector_Scale",
  /**  See `NODES.Arithmetic_Math_VectorAngle` for detailed documentation. */
  "三维向量夹角": "Arithmetic.Math.Vector_Angle",
  /**  See `NODES.Arithmetic_General_Equal` for detailed documentation. */
  "是否相等": "Arithmetic.General.Equal",
  /**  See `NODES.Query_General_GetLocal` for detailed documentation. */
  "获取局部变量": "Query.General.Get_Local",
  /**  See `NODES.Execution_CommonNode_SetLocal` for detailed documentation. */
  "设置局部变量": "Execution.Common_Node.Set_Local",
  /**  See `NODES.Execution_CustomVariable_SetVariable` for detailed documentation. */
  "设置自定义变量": "Execution.Custom_Variable.Set_Variable",
  /**  See `NODES.Trigger_CustomVariable_OnVariableChange` for detailed documentation. */
  "自定义变量变化时": "Trigger.Custom_Variable.On_Variable_Change",
  /**  See `NODES.Query_CustomVariable_GetVariable` for detailed documentation. */
  "获取自定义变量": "Query.Custom_Variable.Get_Variable",
  /**  See `NODES.Execution_PresetStatus_SetStatus` for detailed documentation. */
  "设置预设状态": "Execution.Preset_Status.Set_Status",
  /**  See `NODES.Trigger_PresetStatus_OnStatusChange` for detailed documentation. */
  "预设状态变化时": "Trigger.Preset_Status.On_Status_Change",
  /**  See `NODES.Query_PresetStatus_GetStatus` for detailed documentation. */
  "获取预设状态": "Query.Preset_Status.Get_Status",
  /**  See `NODES.Execution_EntityRelated_DestroyEntity` for detailed documentation. */
  "销毁实体": "Execution.Entity_Related.Destroy_Entity",
  /**  See `NODES.Execution_EntityRelated_CreateEntity` for detailed documentation. */
  "创建实体": "Execution.Entity_Related.Create_Entity",
  /**  See `NODES.Trigger_EntityRelated_OnCreated` for detailed documentation. */
  "实体创建时": "Trigger.Entity_Related.On_Created",
  /**  See `NODES.Trigger_EntityRelated_OnRemoved` for detailed documentation. */
  "实体移除/销毁时": "Trigger.Entity_Related.On_Removed",
  /**  See `NODES.Query_EntityRelated_GetSelf` for detailed documentation. */
  "获取自身实体": "Query.Entity_Related.Get_Self",
  /**  See `NODES.Arithmetic_Math_VectorNormalize` for detailed documentation. */
  "三维向量归一化": "Arithmetic.Math.Vector_Normalize",
  /**  See `NODES.Query_EntityRelated_GetByGUID` for detailed documentation. */
  "以GUID查询实体": "Query.Entity_Related.Get_By_GUID",
  /**  See `NODES.Query_EntityRelated_GetGUID` for detailed documentation. */
  "以实体查询GUID": "Query.Entity_Related.Get_GUID",
  /**  See `NODES.Execution_StageRelated_Settle` for detailed documentation. */
  "结算关卡": "Execution.Stage_Related.Settle",
  /**  See `NODES.Execution_Timer_Start` for detailed documentation. */
  "启动定时器": "Execution.Timer.Start",
  /**  See `NODES.Execution_Timer_Pause` for detailed documentation. */
  "暂停定时器": "Execution.Timer.Pause",
  /**  See `NODES.Execution_Timer_Resume` for detailed documentation. */
  "恢复定时器": "Execution.Timer.Resume",
  /**  See `NODES.Execution_Timer_Stop` for detailed documentation. */
  "终止定时器": "Execution.Timer.Stop",
  /**  See `NODES.Trigger_Timer_OnTimerTrigger` for detailed documentation. */
  "定时器触发时": "Trigger.Timer.On_Timer_Trigger",
  /**  See `NODES.Execution_MotionDevice_AddLinearMotion` for detailed documentation. */
  "添加匀速直线型基础运动器": "Execution.Motion_Device.Add_Linear_Motion",
  /**  See `NODES.Execution_MotionDevice_AddRotationMotion` for detailed documentation. */
  "添加匀速旋转型基础运动器": "Execution.Motion_Device.Add_Rotation_Motion",
  /**  See `NODES.Execution_MotionDevice_StopDelete` for detailed documentation. */
  "停止并删除基础运动器": "Execution.Motion_Device.Stop_Delete",
  /**  See `NODES.Execution_MotionDevice_Pause` for detailed documentation. */
  "暂停基础运动器": "Execution.Motion_Device.Pause",
  /**  See `NODES.Execution_MotionDevice_Resume` for detailed documentation. */
  "恢复基础运动器": "Execution.Motion_Device.Resume",
  /**  See `NODES.Trigger_MotionDevice_OnMotionStop` for detailed documentation. */
  "基础运动器停止时": "Trigger.Motion_Device.On_Motion_Stop",
  /**  See `NODES.Execution_CollisionTrigger_SetTriggerState` for detailed documentation. */
  "激活/关闭碰撞触发器": "Execution.Collision_Trigger.Set_Trigger_State",
  /**  See `NODES.Trigger_CollisionTrigger_OnExit` for detailed documentation. */
  "离开碰撞触发器时": "Trigger.Collision_Trigger.On_Exit",
  /**  See `NODES.Trigger_CollisionTrigger_OnEnter` for detailed documentation. */
  "进入碰撞触发器时": "Trigger.Collision_Trigger.On_Enter",
  /**  See `NODES.Execution_SpecialEffect_PlayTimed` for detailed documentation. */
  "播放限时特效": "Execution.Special_Effect.Play_Timed",
  /**  See `NODES.Execution_SpecialEffect_PlayLoop` for detailed documentation. */
  "挂载循环特效": "Execution.Special_Effect.Play_Loop",
  /**  See `NODES.Execution_SpecialEffect_StopLoop` for detailed documentation. */
  "清除循环特效": "Execution.Special_Effect.Stop_Loop",
  /**  See `NODES.Query_EntityRelated_GetTransform` for detailed documentation. */
  "获取实体位置与旋转": "Query.Entity_Related.Get_Transform",
  /**  See `NODES.Execution_ListOperation_Concatenate` for detailed documentation. */
  "拼接列表": "Execution.List_Operation.Concatenate",
  /**  See `NODES.Execution_ListOperation_Clear` for detailed documentation. */
  "清除列表": "Execution.List_Operation.Clear",
  /**  See `NODES.Query_ListRelated_Contains` for detailed documentation. */
  "列表是否包含该值": "Query.List_Related.Contains",
  /**  See `NODES.Query_ListRelated_FindIndex` for detailed documentation. */
  "查找列表并返回值的序号": "Query.List_Related.Find_Index",
  /**  See `NODES.Query_ListRelated_GetAtIndex` for detailed documentation. */
  "获取列表对应值": "Query.List_Related.Get_At_Index",
  /**  See `NODES.Execution_ListOperation_Insert` for detailed documentation. */
  "对列表插入值": "Execution.List_Operation.Insert",
  /**  See `NODES.Query_ListRelated_GetLength` for detailed documentation. */
  "获取列表长度": "Query.List_Related.Get_Length",
  /**  See `NODES.Query_ListRelated_GetMax` for detailed documentation. */
  "获取列表最大值": "Query.List_Related.Get_Max",
  /**  See `NODES.Query_ListRelated_GetMin` for detailed documentation. */
  "获取列表最小值": "Query.List_Related.Get_Min",
  /**  See `NODES.Execution_ListOperation_Remove` for detailed documentation. */
  "对列表移除值": "Execution.List_Operation.Remove",
  /**  See `NODES.Execution_ListOperation_ModifyIndex` for detailed documentation. */
  "对列表修改值": "Execution.List_Operation.Modify_Index",
  /**  See `NODES.Execution_ListOperation_Sort` for detailed documentation. */
  "列表排序": "Execution.List_Operation.Sort",
  /**  See `NODES.Arithmetic_General_AssembleList` for detailed documentation. */
  "拼装列表": "Arithmetic.General.Assemble_List",
  /**  See `NODES.Trigger_MotionDevice_OnReachWaypoint` for detailed documentation. */
  "路径到达路点时": "Trigger.Motion_Device.On_Reach_Waypoint",
  /**  See `NODES.Execution_EntityDeployment_SetGroupState` for detailed documentation. */
  "激活/关闭实体布设组": "Execution.Entity_Deployment.Set_Group_State",
  /**  See `NODES.Query_EntityLayout_GetActiveGroups` for detailed documentation. */
  "查询当前激活的实体布设组列表": "Query.Entity_Layout.Get_Active_Groups",
  /**  See `NODES.Arithmetic_General_ConvertType` for detailed documentation. */
  "数据类型转换": "Arithmetic.General.Convert_Type",
  /**  See `NODES.Execution_CommonNode_ForwardEvent` for detailed documentation. */
  "转发事件": "Execution.Common_Node.Forward_Event",
  /**  See `NODES.Query_Math_Pi` for detailed documentation. */
  "圆周率": "Query.Math.Pi",
  /**  See `NODES.Query_Math_VectorZero` for detailed documentation. */
  "三维向量：零向量": "Query.Math.Vector_Zero",
  /**  See `NODES.Query_Math_VectorUp` for detailed documentation. */
  "三维向量：上方": "Query.Math.Vector_Up",
  /**  See `NODES.Query_Math_VectorDown` for detailed documentation. */
  "三维向量：下方": "Query.Math.Vector_Down",
  /**  See `NODES.Query_Math_VectorLeft` for detailed documentation. */
  "三维向量：左侧": "Query.Math.Vector_Left",
  /**  See `NODES.Query_Math_VectorRight` for detailed documentation. */
  "三维向量：右侧": "Query.Math.Vector_Right",
  /**  See `NODES.Query_Math_VectorForward` for detailed documentation. */
  "三维向量：前方": "Query.Math.Vector_Forward",
  /**  See `NODES.Query_Math_VectorBackward` for detailed documentation. */
  "三维向量：后方": "Query.Math.Vector_Backward",
  /**  See `NODES.Arithmetic_Math_Add` for detailed documentation. */
  "加法运算": "Arithmetic.Math.Add",
  /**  See `NODES.Arithmetic_Math_Subtract` for detailed documentation. */
  "减法运算": "Arithmetic.Math.Subtract",
  /**  See `NODES.Arithmetic_Math_Multiply` for detailed documentation. */
  "乘法运算": "Arithmetic.Math.Multiply",
  /**  See `NODES.Arithmetic_Math_Divide` for detailed documentation. */
  "除法运算": "Arithmetic.Math.Divide",
  /**  See `NODES.Arithmetic_Math_Modulo` for detailed documentation. */
  "模运算": "Arithmetic.Math.Modulo",
  /**  See `NODES.Arithmetic_Math_Power` for detailed documentation. */
  "幂运算": "Arithmetic.Math.Power",
  /**  See `NODES.Arithmetic_Math_Max` for detailed documentation. */
  "取较大值": "Arithmetic.Math.Max",
  /**  See `NODES.Arithmetic_Math_Min` for detailed documentation. */
  "取较小值": "Arithmetic.Math.Min",
  /**  See `NODES.Arithmetic_Math_Log` for detailed documentation. */
  "对数运算": "Arithmetic.Math.Log",
  /**  See `NODES.Arithmetic_Math_Abs` for detailed documentation. */
  "绝对值运算": "Arithmetic.Math.Abs",
  /**  See `NODES.Arithmetic_Math_Sign` for detailed documentation. */
  "取符号运算": "Arithmetic.Math.Sign",
  /**  See `NODES.Arithmetic_Math_VectorLength` for detailed documentation. */
  "三维向量模运算": "Arithmetic.Math.Vector_Length",
  /**  See `NODES.Arithmetic_Math_Sqrt` for detailed documentation. */
  "算术平方根运算": "Arithmetic.Math.Sqrt",
  /**  See `NODES.Arithmetic_Math_Clamp` for detailed documentation. */
  "范围限制运算": "Arithmetic.Math.Clamp",
  /**  See `NODES.Arithmetic_Math_Round` for detailed documentation. */
  "取整数运算": "Arithmetic.Math.Round",
  /**  See `NODES.Arithmetic_Math_CreateVector` for detailed documentation. */
  "创建三维向量": "Arithmetic.Math.Create_Vector",
  /**  See `NODES.Arithmetic_Math_And` for detailed documentation. */
  "逻辑与运算": "Arithmetic.Math.And",
  /**  See `NODES.Arithmetic_Math_Or` for detailed documentation. */
  "逻辑或运算": "Arithmetic.Math.Or",
  /**  See `NODES.Arithmetic_Math_Xor` for detailed documentation. */
  "逻辑异或运算": "Arithmetic.Math.Xor",
  /**  See `NODES.Arithmetic_Math_Not` for detailed documentation. */
  "逻辑非运算": "Arithmetic.Math.Not",
  /**  See `NODES.Arithmetic_Math_LessThan` for detailed documentation. */
  "数值小于": "Arithmetic.Math.Less_Than",
  /**  See `NODES.Arithmetic_Math_LessEqual` for detailed documentation. */
  "数值小于等于": "Arithmetic.Math.Less_Equal",
  /**  See `NODES.Arithmetic_Math_GreaterThan` for detailed documentation. */
  "数值大于": "Arithmetic.Math.Greater_Than",
  /**  See `NODES.Arithmetic_Math_GreaterEqual` for detailed documentation. */
  "数值大于等于": "Arithmetic.Math.Greater_Equal",
  /**  See `NODES.Execution_Collision_SetNativeCollision` for detailed documentation. */
  "激活/关闭原生碰撞": "Execution.Collision.Set_Native_Collision",
  /**  See `NODES.Execution_Collision_SetNativeClimb` for detailed documentation. */
  "激活/关闭原生碰撞可攀爬性": "Execution.Collision.Set_Native_Climb",
  /**  See `NODES.Execution_Collision_SetExtraCollision` for detailed documentation. */
  "激活/关闭额外碰撞": "Execution.Collision.Set_Extra_Collision",
  /**  See `NODES.Execution_Collision_SetExtraClimb` for detailed documentation. */
  "激活/关闭额外碰撞可攀爬性": "Execution.Collision.Set_Extra_Climb",
  /**  See `NODES.Arithmetic_Math_Distance` for detailed documentation. */
  "两坐标点距离": "Arithmetic.Math.Distance",
  /**  See `NODES.Execution_FollowMotion_SetTargetGUID` for detailed documentation. */
  "以GUID切换跟随运动器的目标": "Execution.Follow_Motion.Set_Target_GUID",
  /**  See `NODES.Query_FollowMotion_GetTarget` for detailed documentation. */
  "获取跟随运动器的目标": "Query.Follow_Motion.Get_Target",
  /**  See `NODES.Query_CharacterRelated_GetAllPlayers` for detailed documentation. */
  "获取在场玩家实体列表": "Query.Character_Related.Get_All_Players",
  /**  See `NODES.Query_FactionRelated_GetFaction` for detailed documentation. */
  "查询实体阵营": "Query.Faction_Related.Get_Faction",
  /**  See `NODES.Execution_FactionRelated_SetFaction` for detailed documentation. */
  "修改实体阵营": "Execution.Faction_Related.Set_Faction",
  /**  See `NODES.Trigger_FactionRelated_OnFactionChange` for detailed documentation. */
  "实体阵营变化时": "Trigger.Faction_Related.On_Faction_Change",
  /**  See `NODES.Execution_EntityRelated_CreatePrefab` for detailed documentation. */
  "创建元件": "Execution.Entity_Related.Create_Prefab",
  /**  See `NODES.Trigger_HitDetection_OnHitDetected` for detailed documentation. */
  "命中检测触发时": "Trigger.Hit_Detection.On_Hit_Detected",
  /**  See `NODES.Execution_Projectile_Create` for detailed documentation. */
  "创建投射物": "Execution.Projectile.Create",
  /**  See `NODES.Query_Math_RandomInt` for detailed documentation. */
  "获取随机整数": "Query.Math.Random_Int",
  /**  See `NODES.Query_CharacterRelated_GetPlayerCharacters` for detailed documentation. */
  "获取指定玩家所有角色实体": "Query.Character_Related.Get_Player_Characters",
  /**  See `NODES.Query_CharacterRelated_GetOwnerPlayer` for detailed documentation. */
  "获取角色归属的玩家实体": "Query.Character_Related.Get_Owner_Player",
  /**  See `NODES.Query_EntityRelated_GetType` for detailed documentation. */
  "获取实体类型": "Query.Entity_Related.Get_Type",
  /**  See `NODES.Execution_Camera_SwitchTemplate` for detailed documentation. */
  "切换主镜头模板": "Execution.Camera.Switch_Template",
  /**  See `NODES.Hidden_Execution_ActivateEntityCamera` for detailed documentation. */
  "Activate Entity Camera": "Hidden.Execution.Activate_Entity_Camera",
  /**  See `NODES.Hidden_Execution_DisableEntityCamera` for detailed documentation. */
  "Disable Entity Camera": "Hidden.Execution.Disable_Entity_Camera",
  /**  See `NODES.Hidden_Execution_ActivateFocusCamera` for detailed documentation. */
  "Activate Focus Camera": "Hidden.Execution.Activate_Focus_Camera",
  /**  See `NODES.Hidden_Execution_DisableFocusCamera` for detailed documentation. */
  "Disable Focus Camera": "Hidden.Execution.Disable_Focus_Camera",
  /**  See `NODES.Hidden_Execution_PlayScreenShake` for detailed documentation. */
  "Activate Screen Shake": "Hidden.Execution.Play_Screen_Shake",
  /**  See `NODES.Execution_MotionDevice_Activate` for detailed documentation. */
  "激活基础运动器": "Execution.Motion_Device.Activate",
  /**  See `NODES.Query_PresetPoint_GetTransform` for detailed documentation. */
  "查询预设点位置旋转": "Query.Preset_Point.Get_Transform",
  /**  See `NODES.Query_PresetPoint_GetByTag` for detailed documentation. */
  "以单位标签获取预设点位列表": "Query.Preset_Point.Get_By_Tag",
  /**  See `NODES.Execution_CharacterRelated_ActivateRevivePoint` for detailed documentation. */
  "激活复苏点": "Execution.Character_Related.Activate_Revive_Point",
  /**  See `NODES.Execution_CharacterRelated_DeactivateRevivePoint` for detailed documentation. */
  "注销复苏点": "Execution.Character_Related.Deactivate_Revive_Point",
  /**  See `NODES.Execution_CharacterRelated_SetReviveAllowed` for detailed documentation. */
  "允许/禁止玩家复苏": "Execution.Character_Related.Set_Revive_Allowed",
  /**  See `NODES.Query_CharacterRelated_GetRevives` for detailed documentation. */
  "获取玩家剩余复苏次数": "Query.Character_Related.Get_Revives",
  /**  See `NODES.Execution_CharacterRelated_SetReviveCount` for detailed documentation. */
  "设置玩家剩余复苏次数": "Execution.Character_Related.Set_Revive_Count",
  /**  See `NODES.Query_CharacterRelated_GetReviveTime` for detailed documentation. */
  "获取玩家复苏耗时": "Query.Character_Related.Get_Revive_Time",
  /**  See `NODES.Execution_CharacterRelated_SetReviveTime` for detailed documentation. */
  "设置玩家复苏耗时": "Execution.Character_Related.Set_Revive_Time",
  /**  See `NODES.Execution_CharacterRelated_ReviveSingle` for detailed documentation. */
  "复苏角色": "Execution.Character_Related.Revive_Single",
  /**  See `NODES.Trigger_CharacterRelated_OnCharacterDown` for detailed documentation. */
  "角色倒下时": "Trigger.Character_Related.On_Character_Down",
  /**  See `NODES.Trigger_CharacterRelated_OnCharacterRevive` for detailed documentation. */
  "角色复苏时": "Trigger.Character_Related.On_Character_Revive",
  /**  See `NODES.Execution_CharacterRelated_DefeatAll` for detailed documentation. */
  "击倒玩家所有角色": "Execution.Character_Related.Defeat_All",
  /**  See `NODES.Execution_CharacterRelated_ReviveAll` for detailed documentation. */
  "复苏玩家所有角色": "Execution.Character_Related.Revive_All",
  /**  See `NODES.Trigger_CharacterRelated_OnAllDown` for detailed documentation. */
  "玩家所有角色倒下时": "Trigger.Character_Related.On_All_Down",
  /**  See `NODES.Trigger_CharacterRelated_OnAbnormalRevive` for detailed documentation. */
  "玩家异常倒下并复苏时": "Trigger.Character_Related.On_Abnormal_Revive",
  /**  See `NODES.Trigger_CharacterRelated_OnAllRevived` for detailed documentation. */
  "玩家所有角色复苏时": "Trigger.Character_Related.On_All_Revived",
  /**  See `NODES.Query_CharacterRelated_IsAllDown` for detailed documentation. */
  "查询玩家角色是否全部倒下": "Query.Character_Related.Is_All_Down",
  /**  See `NODES.Execution_CharacterRelated_Teleport` for detailed documentation. */
  "传送玩家": "Execution.Character_Related.Teleport",
  /**  See `NODES.Trigger_CharacterRelated_OnTeleportComplete` for detailed documentation. */
  "玩家传送完成时": "Trigger.Character_Related.On_Teleport_Complete",
  /**  See `NODES.Query_StageRelated_GetElapsedTime` for detailed documentation. */
  "查询游戏已进行时间": "Query.Stage_Related.Get_Elapsed_Time",
  /**  See `NODES.Arithmetic_Math_Sin` for detailed documentation. */
  "正弦函数": "Arithmetic.Math.Sin",
  /**  See `NODES.Arithmetic_Math_Cos` for detailed documentation. */
  "余弦函数": "Arithmetic.Math.Cos",
  /**  See `NODES.Arithmetic_Math_Tan` for detailed documentation. */
  "正切函数": "Arithmetic.Math.Tan",
  /**  See `NODES.Arithmetic_Math_Asin` for detailed documentation. */
  "反正弦函数": "Arithmetic.Math.Asin",
  /**  See `NODES.Arithmetic_Math_Acos` for detailed documentation. */
  "反余弦函数": "Arithmetic.Math.Acos",
  /**  See `NODES.Arithmetic_Math_Atan` for detailed documentation. */
  "反正切函数": "Arithmetic.Math.Atan",
  /**  See `NODES.Execution_UnitStatus_AddStatus` for detailed documentation. */
  "添加单位状态": "Execution.Unit_Status.Add_Status",
  /**  See `NODES.Trigger_UnitStatus_OnStatusEnd` for detailed documentation. */
  "单位状态结束时": "Trigger.Unit_Status.On_Status_End",
  /**  See `NODES.Trigger_UnitStatus_OnStatusChange` for detailed documentation. */
  "单位状态变更时": "Trigger.Unit_Status.On_Status_Change",
  /**  See `NODES.Execution_UnitStatus_RemoveStatus` for detailed documentation. */
  "移除单位状态": "Execution.Unit_Status.Remove_Status",
  /**  See `NODES.Execution_CharacterDisruptor_ModifyDevice` for detailed documentation. */
  "修改角色扰动装置": "Execution.Character_Disruptor.Modify_Device",
  /**  See `NODES.Execution_Combat_Attack` for detailed documentation. */
  "发起攻击": "Execution.Combat.Attack",
  /**  See `NODES.Trigger_Combat_OnBeAttacked` for detailed documentation. */
  "受到攻击时": "Trigger.Combat.On_Be_Attacked",
  /**  See `NODES.Trigger_Combat_OnHitTarget` for detailed documentation. */
  "攻击命中时": "Trigger.Combat.On_Hit_Target",
  /**  See `NODES.Execution_Tab_SetState` for detailed documentation. */
  "激活/关闭选项卡": "Execution.Tab.Set_State",
  /**  See `NODES.Trigger_Tab_OnTabSelect` for detailed documentation. */
  "选项卡选中时": "Trigger.Tab.On_Tab_Select",
  /**  See `NODES.Execution_EntityRelated_SetModelVisible` for detailed documentation. */
  "激活/关闭模型显示": "Execution.Entity_Related.Set_Model_Visible",
  /**  See `NODES.Execution_GlobalTimer_Pause` for detailed documentation. */
  "暂停全局计时器": "Execution.Global_Timer.Pause",
  /**  See `NODES.Query_GlobalTimer_GetTime` for detailed documentation. */
  "获取全局计时器当前时间": "Query.Global_Timer.Get_Time",
  /**  See `NODES.Execution_GlobalTimer_Start` for detailed documentation. */
  "启动全局计时器": "Execution.Global_Timer.Start",
  /**  See `NODES.Execution_GlobalTimer_Resume` for detailed documentation. */
  "恢复全局计时器": "Execution.Global_Timer.Resume",
  /**  See `NODES.Execution_GlobalTimer_Stop` for detailed documentation. */
  "终止全局计时器": "Execution.Global_Timer.Stop",
  /**  See `NODES.Execution_GlobalTimer_Modify` for detailed documentation. */
  "修改全局计时器": "Execution.Global_Timer.Modify",
  /**  See `NODES.Trigger_GlobalTimer_OnTimerTrigger` for detailed documentation. */
  "全局计时器触发时": "Trigger.Global_Timer.On_Timer_Trigger",
  /**  See `NODES.Trigger_UIControlGroup_OnGroupTrigger` for detailed documentation. */
  "界面控件组触发时": "Trigger.UI_Control_Group.On_Group_Trigger",
  /**  See `NODES.Query_UIControlGroup_GetCurrentLayout` for detailed documentation. */
  "获取玩家当前界面布局": "Query.UI_Control_Group.Get_Current_Layout",
  /**  See `NODES.Query_EntityRelated_GetAllEntities` for detailed documentation. */
  "获取场上所有实体": "Query.Entity_Related.Get_All_Entities",
  /**  See `NODES.Query_EntityRelated_GetEntityByType` for detailed documentation. */
  "获取场上指定类型实体": "Query.Entity_Related.Get_Entity_By_Type",
  /**  See `NODES.Query_EntityRelated_GetWithPrefab` for detailed documentation. */
  "获取场上指定元件ID的实体": "Query.Entity_Related.Get_With_Prefab",
  /**  See `NODES.Arithmetic_Math_RadToDeg` for detailed documentation. */
  "弧度转角度": "Arithmetic.Math.Rad_To_Deg",
  /**  See `NODES.Arithmetic_Math_DegToRad` for detailed documentation. */
  "角度转弧度": "Arithmetic.Math.Deg_To_Rad",
  /**  See `NODES.Execution_CustomVariable_SetGraphVariable` for detailed documentation. */
  "设置节点图变量": "Execution.Custom_Variable.Set_Graph_Variable",
  /**  See `NODES.Query_CustomVariable_GetGraphVariable` for detailed documentation. */
  "获取节点图变量": "Query.Custom_Variable.Get_Graph_Variable",
  /**  See `NODES.Trigger_CustomVariable_OnGraphVariableChange` for detailed documentation. */
  "节点图变量变化时": "Trigger.Custom_Variable.On_Graph_Variable_Change",
  /**  See `NODES.Execution_FollowMotion_SetDeviceState` for detailed documentation. */
  "激活/关闭跟随运动器": "Execution.Follow_Motion.Set_Device_State",
  /**  See `NODES.Hidden_Execution_SetDisruptorState` for detailed documentation. */
  "Activate/Disable Character Disruptor Device": "Hidden.Execution.Set_Disruptor_State",
  /**  See `NODES.Execution_CollisionTriggerSource_SetSourceState` for detailed documentation. */
  "激活/关闭碰撞触发源": "Execution.Collision_Trigger_Source.Set_Source_State",
  /**  See `NODES.Execution_EntityRelated_RemoveEntity` for detailed documentation. */
  "移除实体": "Execution.Entity_Related.Remove_Entity",
  /**  See `NODES.Trigger_EntityRelated_OnDestroyed` for detailed documentation. */
  "实体销毁时": "Trigger.Entity_Related.On_Destroyed",
  /**  See `NODES.Trigger_Creation_OnEnterCombat` for detailed documentation. */
  "造物入战时": "Trigger.Creation.On_Enter_Combat",
  /**  See `NODES.Trigger_Creation_OnLeaveCombat` for detailed documentation. */
  "造物脱战时": "Trigger.Creation.On_Leave_Combat",
  /**  See `NODES.Query_Creation_GetTarget` for detailed documentation. */
  "获取造物当前目标": "Query.Creation.Get_Target",
  /**  See `NODES.Query_EntityRelated_GetByType` for detailed documentation. */
  "获取指定类型的实体列表": "Query.Entity_Related.Get_By_Type",
  /**  See `NODES.Query_EntityRelated_GetByPrefab` for detailed documentation. */
  "获取指定元件ID的实体列表": "Query.Entity_Related.Get_By_Prefab",
  /**  See `NODES.Query_EntityRelated_GetByFaction` for detailed documentation. */
  "获取指定阵营的实体列表": "Query.Entity_Related.Get_By_Faction",
  /**  See `NODES.Query_EntityRelated_GetByRange` for detailed documentation. */
  "获取指定范围的实体列表": "Query.Entity_Related.Get_By_Range",
  /**  See `NODES.Query_Creation_GetAttribute` for detailed documentation. */
  "获取造物属性": "Query.Creation.Get_Attribute",
  /**  See `NODES.Execution_UIControlGroup_SwitchLayout` for detailed documentation. */
  "切换当前界面布局": "Execution.UI_Control_Group.Switch_Layout",
  /**  See `NODES.Execution_UIControlGroup_ActivateGroup` for detailed documentation. */
  "激活控件组库内界面控件组": "Execution.UI_Control_Group.Activate_Group",
  /**  See `NODES.Execution_UIControlGroup_ModifyStatus` for detailed documentation. */
  "修改界面布局内界面控件状态": "Execution.UI_Control_Group.Modify_Status",
  /**  See `NODES.Trigger_Class_OnClassChange` for detailed documentation. */
  "玩家职业更改时": "Trigger.Class.On_Class_Change",
  /**  See `NODES.Trigger_Class_OnLevelChange` for detailed documentation. */
  "玩家职业等级变化时": "Trigger.Class.On_Level_Change",
  /**  See `NODES.Query_Class_GetClass` for detailed documentation. */
  "查询玩家职业": "Query.Class.Get_Class",
  /**  See `NODES.Query_Class_GetLevel` for detailed documentation. */
  "查询玩家职业的等级": "Query.Class.Get_Level",
  /**  See `NODES.Execution_Class_ChangeClass` for detailed documentation. */
  "更改玩家职业": "Execution.Class.Change_Class",
  /**  See `NODES.Execution_Class_AddExp` for detailed documentation. */
  "提升玩家当前职业经验": "Execution.Class.Add_Exp",
  /**  See `NODES.Execution_Class_SetLevel` for detailed documentation. */
  "更改玩家当前职业等级": "Execution.Class.Set_Level",
  /**  See `NODES.Trigger_Skill_OnSkillCall` for detailed documentation. */
  "技能节点调用时": "Trigger.Skill.On_Skill_Call",
  /**  See `NODES.Execution_Skill_ModifyResource` for detailed documentation. */
  "修改技能资源量": "Execution.Skill.Modify_Resource",
  /**  See `NODES.Execution_Skill_SetResource` for detailed documentation. */
  "设置技能资源量": "Execution.Skill.Set_Resource",
  /**  See `NODES.Execution_Skill_AddSkill` for detailed documentation. */
  "添加角色技能": "Execution.Skill.Add_Skill",
  /**  See `NODES.Execution_Skill_RemoveByID` for detailed documentation. */
  "以ID删除角色技能": "Execution.Skill.Remove_By_ID",
  /**  See `NODES.Execution_Skill_InitSkill` for detailed documentation. */
  "初始化角色技能": "Execution.Skill.Init_Skill",
  /**  See `NODES.Query_Skill_GetSkillInfo` for detailed documentation. */
  "查询角色技能": "Query.Skill.Get_Skill_Info",
  /**  See `NODES.Execution_Skill_RemoveBySlot` for detailed documentation. */
  "以槽位删除角色技能": "Execution.Skill.Remove_By_Slot",
  /**  See `NODES.Hidden_Trigger_OnNativeValueChange` for detailed documentation. */
  "When Native Custom Value Changes": "Hidden.Trigger.On_Native_Value_Change",
  /**  See `NODES.Hidden_Execution_SetNativeValue` for detailed documentation. */
  "Native Setting Custom Value": "Hidden.Execution.Set_Native_Value",
  /**  See `NODES.Hidden_Query_GetNativeValue` for detailed documentation. */
  "Native Query Custom Value": "Hidden.Query.Get_Native_Value",
  /**  See `NODES.Execution_SpecialEffect_StopByAsset` for detailed documentation. */
  "根据特效资产清除特效": "Execution.Special_Effect.Stop_By_Asset",
  /**  See `NODES.Arithmetic_Math_VectorRotate` for detailed documentation. */
  "三维向量旋转": "Arithmetic.Math.Vector_Rotate",
  /**  See `NODES.Arithmetic_General_EnumEqual` for detailed documentation. */
  "枚举是否相等": "Arithmetic.General.Enum_Equal",
  /**  See `NODES.Arithmetic_Math_VectorDot` for detailed documentation. */
  "三维向量内积": "Arithmetic.Math.Vector_Dot",
  /**  See `NODES.Arithmetic_Math_VectorCross` for detailed documentation. */
  "三维向量外积": "Arithmetic.Math.Vector_Cross",
  /**  See `NODES.Query_EntityRelated_IsActive` for detailed documentation. */
  "查询实体是否在场": "Query.Entity_Related.Is_Active",
  /**  See `NODES.Query_UnitStatus_HasStatus` for detailed documentation. */
  "查询实体是否具有单位状态": "Query.Unit_Status.Has_Status",
  /**  See `NODES.Execution_ListOperation_ForEach` for detailed documentation. */
  "列表迭代循环": "Execution.List_Operation.For_Each",
  /**  See `NODES.Query_EntityRelated_GetForward` for detailed documentation. */
  "获取实体向前向量": "Query.Entity_Related.Get_Forward",
  /**  See `NODES.Query_EntityRelated_GetRight` for detailed documentation. */
  "获取实体向右向量": "Query.Entity_Related.Get_Right",
  /**  See `NODES.Query_EntityRelated_GetUp` for detailed documentation. */
  "获取实体向上向量": "Query.Entity_Related.Get_Up",
  /**  See `NODES.Arithmetic_Math_VectorToRotation` for detailed documentation. */
  "方向向量转旋转": "Arithmetic.Math.Vector_To_Rotation",
  /**  See `NODES.Execution_MotionDevice_AddTargetRotation` for detailed documentation. */
  "添加朝向目标旋转型基础运动器": "Execution.Motion_Device.Add_Target_Rotation",
  /**  See `NODES.Execution_UIControlGroup_RemoveGroup` for detailed documentation. */
  "移除控件组库内界面控件组": "Execution.UI_Control_Group.Remove_Group",
  /**  See `NODES.Query_EntityRelated_GetObjAttr` for detailed documentation. */
  "获取物件属性": "Query.Entity_Related.Get_Obj_Attr",
  /**  See `NODES.Execution_Combat_RecoverHP` for detailed documentation. */
  "恢复生命": "Execution.Combat.Recover_HP",
  /**  See `NODES.Trigger_Combat_OnHPRecover` for detailed documentation. */
  "被恢复生命值时": "Trigger.Combat.On_HP_Recover",
  /**  See `NODES.Trigger_Combat_OnHPRecoveryStart` for detailed documentation. */
  "发起恢复生命值时": "Trigger.Combat.On_HP_Recovery_Start",
  /**  See `NODES.Execution_UnitTag_AddTag` for detailed documentation. */
  "实体添加单位标签": "Execution.Unit_Tag.Add_Tag",
  /**  See `NODES.Execution_UnitTag_RemoveTag` for detailed documentation. */
  "实体移除单位标签": "Execution.Unit_Tag.Remove_Tag",
  /**  See `NODES.Execution_UnitTag_ClearTags` for detailed documentation. */
  "实体清空单位标签": "Execution.Unit_Tag.Clear_Tags",
  /**  See `NODES.Query_UnitTag_GetTags` for detailed documentation. */
  "获取实体单位标签列表": "Query.Unit_Tag.Get_Tags",
  /**  See `NODES.Query_UnitTag_GetByTag` for detailed documentation. */
  "获取单位标签的实体列表": "Query.Unit_Tag.Get_By_Tag",
  /**  See `NODES.Execution_SoundEffect_ClosePlayer` for detailed documentation. */
  "关闭指定音效播放器": "Execution.Sound_Effect.Close_Player",
  /**  See `NODES.Execution_SoundEffect_TogglePlayer` for detailed documentation. */
  "启动/暂停指定音效播放器": "Execution.Sound_Effect.Toggle_Player",
  /**  See `NODES.Execution_SoundEffect_AdjustPlayer` for detailed documentation. */
  "调整指定音效播放器": "Execution.Sound_Effect.Adjust_Player",
  /**  See `NODES.Execution_SoundEffect_AddPlayer` for detailed documentation. */
  "添加音效播放器": "Execution.Sound_Effect.Add_Player",
  /**  See `NODES.Execution_SoundEffect_ToggleBGM` for detailed documentation. */
  "启动/暂停玩家背景音乐": "Execution.Sound_Effect.Toggle_BGM",
  /**  See `NODES.Execution_SoundEffect_SetBGMVolume` for detailed documentation. */
  "调整玩家背景音乐音量": "Execution.Sound_Effect.Set_BGM_Volume",
  /**  See `NODES.Execution_SoundEffect_SetBGM` for detailed documentation. */
  "修改玩家背景音乐": "Execution.Sound_Effect.Set_BGM",
  /**  See `NODES.Execution_SoundEffect_Play2DOneShot` for detailed documentation. */
  "玩家播放单次2D音效": "Execution.Sound_Effect.Play_2D_One_Shot",
  /**  See `NODES.Execution_CustomAggro_SetAggro` for detailed documentation. */
  "设置指定实体的仇恨值": "Execution.Custom_Aggro.Set_Aggro",
  /**  See `NODES.Execution_CustomAggro_RemoveAggro` for detailed documentation. */
  "将目标实体移除出仇恨列表": "Execution.Custom_Aggro.Remove_Aggro",
  /**  See `NODES.Execution_CustomAggro_ClearAggro` for detailed documentation. */
  "清空指定目标的仇恨列表": "Execution.Custom_Aggro.Clear_Aggro",
  /**  See `NODES.Execution_CustomAggro_Taunt` for detailed documentation. */
  "嘲讽目标": "Execution.Custom_Aggro.Taunt",
  /**  See `NODES.Query_CustomAggro_GetAggroValue` for detailed documentation. */
  "查询指定实体的仇恨值": "Query.Custom_Aggro.Get_Aggro_Value",
  /**  See `NODES.Query_CustomAggro_GetMultiplier` for detailed documentation. */
  "查询指定实体的仇恨倍率": "Query.Custom_Aggro.Get_Multiplier",
  /**  See `NODES.Query_CustomAggro_GetGlobalMultiplier` for detailed documentation. */
  "查询全局仇恨转移倍率": "Query.Custom_Aggro.Get_Global_Multiplier",
  /**  See `NODES.Query_CustomAggro_GetAggroTarget` for detailed documentation. */
  "获取指定实体的仇恨目标": "Query.Custom_Aggro.Get_Aggro_Target",
  /**  See `NODES.Query_CustomAggro_GetAggroOwners` for detailed documentation. */
  "获取目标所在仇恨列表的拥有者列表": "Query.Custom_Aggro.Get_Aggro_Owners",
  /**  See `NODES.Query_CustomAggro_GetTargetingOwners` for detailed documentation. */
  "获取以目标为仇恨目标的拥有者列表": "Query.Custom_Aggro.Get_Targeting_Owners",
  /**  See `NODES.Query_CustomAggro_GetAggroList` for detailed documentation. */
  "获取指定实体的仇恨列表": "Query.Custom_Aggro.Get_Aggro_List",
  /**  See `NODES.Query_CustomAggro_IsInCombat` for detailed documentation. */
  "查询指定实体是否已入战": "Query.Custom_Aggro.Is_In_Combat",
  /**  See `NODES.Trigger_CustomAggro_OnTargetChange` for detailed documentation. */
  "仇恨目标变化时": "Trigger.Custom_Aggro.On_Target_Change",
  /**  See `NODES.Trigger_CustomAggro_OnEnterCombat` for detailed documentation. */
  "自身入战时": "Trigger.Custom_Aggro.On_Enter_Combat",
  /**  See `NODES.Trigger_CustomAggro_OnLeaveCombat` for detailed documentation. */
  "自身脱战时": "Trigger.Custom_Aggro.On_Leave_Combat",
  /**  See `NODES.Query_FactionRelated_IsHostile` for detailed documentation. */
  "查询阵营是否敌对": "Query.Faction_Related.Is_Hostile",
  /**  See `NODES.Hidden_Execution_AddNameplate` for detailed documentation. */
  "Add Entity Active Nameplate": "Hidden.Execution.Add_Nameplate",
  /**  See `NODES.Hidden_Execution_RemoveNameplate` for detailed documentation. */
  "Delete Entity Active Nameplate": "Hidden.Execution.Remove_Nameplate",
  /**  See `NODES.Execution_Nameplate_SetNameplate` for detailed documentation. */
  "设置实体生效铭牌": "Execution.Nameplate.Set_Nameplate",
  /**  See `NODES.Execution_CreationPatrol_SwitchTemplate` for detailed documentation. */
  "切换造物巡逻模板": "Execution.Creation_Patrol.Switch_Template",
  /**  See `NODES.Query_CreaturePatrol_GetPatrolTemplate` for detailed documentation. */
  "获取当前造物的巡逻模板": "Query.Creature_Patrol.Get_Patrol_Template",
  /**  See `NODES.Trigger_CreationPatrol_OnReachWaypoint` for detailed documentation. */
  "造物抵达巡逻路点时": "Trigger.Creation_Patrol.On_Reach_Waypoint",
  /**  See `NODES.Query_GlobalPath_GetWaypoint` for detailed documentation. */
  "获取指定路径点信息": "Query.Global_Path.Get_Waypoint",
  /**  See `NODES.Execution_TextBubble_SetBubble` for detailed documentation. */
  "切换生效的文本气泡": "Execution.Text_Bubble.Set_Bubble",
  /**  See `NODES.Execution_DeckSelector_Open` for detailed documentation. */
  "唤起卡牌选择器": "Execution.Deck_Selector.Open",
  /**  See `NODES.Trigger_DeckSelector_OnDeckSelected` for detailed documentation. */
  "卡牌选择器完成时": "Trigger.Deck_Selector.On_Deck_Selected",
  /**  See `NODES.Execution_MinimapMarker_SetZoom` for detailed documentation. */
  "修改小地图缩放": "Execution.Minimap_Marker.Set_Zoom",
  /**  See `NODES.Execution_MinimapMarker_SetMarkerState` for detailed documentation. */
  "修改小地图标识生效状态": "Execution.Minimap_Marker.Set_Marker_State",
  /**  See `NODES.Execution_MinimapMarker_SetVisibleList` for detailed documentation. */
  "修改可见小地图标识的玩家列表": "Execution.Minimap_Marker.Set_Visible_List",
  /**  See `NODES.Execution_MinimapMarker_SetTrackList` for detailed documentation. */
  "修改追踪小地图标识的玩家列表": "Execution.Minimap_Marker.Set_Track_List",
  /**  See `NODES.Query_MinimapMarker_GetMarkerInfo` for detailed documentation. */
  "查询指定小地图标识信息": "Query.Minimap_Marker.Get_Marker_Info",
  /**  See `NODES.Query_MinimapMarker_GetMarkerStatus` for detailed documentation. */
  "获取实体的小地图标识状态": "Query.Minimap_Marker.Get_Marker_Status",
  /**  See `NODES.Execution_MinimapMarker_UpdateMarkers` for detailed documentation. */
  "修改小地图标识的玩家标记": "Execution.Minimap_Marker.Update_Markers",
  /**  See `NODES.Execution_DeckSelector_Close` for detailed documentation. */
  "关闭卡牌选择器": "Execution.Deck_Selector.Close",
  /**  See `NODES.Trigger_UnitStatus_OnElementReaction` for detailed documentation. */
  "发生元素反应事件时": "Trigger.Unit_Status.On_Element_Reaction",
  /**  See `NODES.Trigger_UnitStatus_OnShieldHit` for detailed documentation. */
  "护盾受到攻击时": "Trigger.Unit_Status.On_Shield_Hit",
  /**  See `NODES.Query_Achievement_IsCompleted` for detailed documentation. */
  "查询成就是否完成": "Query.Achievement.Is_Completed",
  /**  See `NODES.Execution_Achievement_SetProgress` for detailed documentation. */
  "设置成就进度计数": "Execution.Achievement.Set_Progress",
  /**  See `NODES.Execution_Achievement_AddProgress` for detailed documentation. */
  "变更成就进度计数": "Execution.Achievement.Add_Progress",
  /**  See `NODES.Execution_StageSettlement_SetScoreboard` for detailed documentation. */
  "设置玩家结算计分板展示数据": "Execution.Stage_Settlement.Set_Scoreboard",
  /**  See `NODES.Execution_StageSettlement_SetPlayerRank` for detailed documentation. */
  "设置玩家结算排名数值": "Execution.Stage_Settlement.Set_Player_Rank",
  /**  See `NODES.Query_StageSettlement_GetPlayerRank` for detailed documentation. */
  "获取玩家结算排名数值": "Query.Stage_Settlement.Get_Player_Rank",
  /**  See `NODES.Execution_StageSettlement_SetPlayerResult` for detailed documentation. */
  "设置玩家结算成功状态": "Execution.Stage_Settlement.Set_Player_Result",
  /**  See `NODES.Query_StageSettlement_GetPlayerResult` for detailed documentation. */
  "获取玩家结算成功状态": "Query.Stage_Settlement.Get_Player_Result",
  /**  See `NODES.Execution_StageSettlement_SetFactionRank` for detailed documentation. */
  "设置阵营结算排名数值": "Execution.Stage_Settlement.Set_Faction_Rank",
  /**  See `NODES.Query_StageSettlement_GetFactionRank` for detailed documentation. */
  "获取阵营结算排名数值": "Query.Stage_Settlement.Get_Faction_Rank",
  /**  See `NODES.Execution_StageSettlement_SetFactionResult` for detailed documentation. */
  "设置阵营结算成功状态": "Execution.Stage_Settlement.Set_Faction_Result",
  /**  See `NODES.Query_StageSettlement_GetFactionResult` for detailed documentation. */
  "获取阵营结算成功状态": "Query.Stage_Settlement.Get_Faction_Result",
  /**  See `NODES.Query_RankTier_GetRankInfo` for detailed documentation. */
  "获取玩家段位信息": "Query.Rank_Tier.Get_Rank_Info",
  /**  See `NODES.Execution_Rank_ModifyScore` for detailed documentation. */
  "设置玩家段位变化分数": "Execution.Rank.Modify_Score",
  /**  See `NODES.Query_RankTier_GetScoreChange` for detailed documentation. */
  "获取玩家段位变化分数": "Query.Rank_Tier.Get_Score_Change",
  /**  See `NODES.Execution_Rank_SetEscapeValid` for detailed documentation. */
  "设置玩家逃跑合法性": "Execution.Rank.Set_Escape_Valid",
  /**  See `NODES.Query_RankTier_GetEscapeStatus` for detailed documentation. */
  "获取玩家逃跑合法性": "Query.Rank_Tier.Get_Escape_Status",
  /**  See `NODES.Execution_Rank_SwitchScoreGroup` for detailed documentation. */
  "切换玩家竞技段位生效的计分组": "Execution.Rank.Switch_Score_Group",
  /**  See `NODES.Query_StageRelated_GetEnvTime` for detailed documentation. */
  "查询当前环境时间": "Query.Stage_Related.Get_Env_Time",
  /**  See `NODES.Execution_StageRelated_SetTime` for detailed documentation. */
  "设置当前环境时间": "Execution.Stage_Related.Set_Time",
  /**  See `NODES.Execution_StageRelated_SetTimeSpeed` for detailed documentation. */
  "设置环境时间流逝速度": "Execution.Stage_Related.Set_Time_Speed",
  /**  See `NODES.Execution_LightComponent_ToggleLight` for detailed documentation. */
  "开关实体光源": "Execution.Light_Component.Toggle_Light",
  /**  See `NODES.Execution_FollowMotion_SetTargetEntity` for detailed documentation. */
  "以实体切换跟随运动器的目标": "Execution.Follow_Motion.Set_Target_Entity",
  /**  See `NODES.Query_CollisionTrigger_GetOverlappingEntities` for detailed documentation. */
  "获取碰撞触发器内所有实体": "Query.Collision_Trigger.Get_Overlapping_Entities",
  /**  See `NODES.Query_EntityRelated_GetAdvAttr` for detailed documentation. */
  "获取实体进阶属性": "Query.Entity_Related.Get_Adv_Attr",
  /**  See `NODES.Query_EntityRelated_GetElemAttr` for detailed documentation. */
  "获取实体元素属性": "Query.Entity_Related.Get_Elem_Attr",
  /**  See `NODES.Execution_Equipment_AddAffix` for detailed documentation. */
  "装备添加词条": "Execution.Equipment.Add_Affix",
  /**  See `NODES.Execution_Equipment_RemoveAffix` for detailed documentation. */
  "移除装备词条": "Execution.Equipment.Remove_Affix",
  /**  See `NODES.Execution_Equipment_ModifyAffix` for detailed documentation. */
  "修改装备词条值": "Execution.Equipment.Modify_Affix",
  /**  See `NODES.Query_Equipment_GetAffixes` for detailed documentation. */
  "获取装备词条列表": "Query.Equipment.Get_Affixes",
  /**  See `NODES.Query_Equipment_GetAffixConfig` for detailed documentation. */
  "获取装备词条配置ID": "Query.Equipment.Get_Affix_Config",
  /**  See `NODES.Query_Equipment_GetAffixValue` for detailed documentation. */
  "获取装备词条数值": "Query.Equipment.Get_Affix_Value",
  /**  See `NODES.Hidden_Execution_UpdateLeaderboard` for detailed documentation. */
  "Update Player Leaderboard Score": "Hidden.Execution.Update_Leaderboard",
  /**  See `NODES.Trigger_TextBubble_OnBubbleComplete` for detailed documentation. */
  "文本气泡完成时": "Trigger.Text_Bubble.On_Bubble_Complete",
  /**  See `NODES.Trigger_Equipment_OnAffixChange` for detailed documentation. */
  "装备的词条数值改变时": "Trigger.Equipment.On_Affix_Change",
  /**  See `NODES.Trigger_Item_OnItemAdd` for detailed documentation. */
  "背包道具新增时": "Trigger.Item.On_Item_Add",
  /**  See `NODES.Trigger_Item_OnItemLose` for detailed documentation. */
  "背包道具失去时": "Trigger.Item.On_Item_Lose",
  /**  See `NODES.Trigger_Item_OnItemQuantityChange` for detailed documentation. */
  "背包道具数量变化时": "Trigger.Item.On_Item_Quantity_Change",
  /**  See `NODES.Trigger_Item_OnCurrencyChange` for detailed documentation. */
  "背包货币数量变化时": "Trigger.Item.On_Currency_Change",
  /**  See `NODES.Execution_Inventory_ExpandCapacity` for detailed documentation. */
  "增加背包最大容量": "Execution.Inventory.Expand_Capacity",
  /**  See `NODES.Execution_Inventory_ModifyItem` for detailed documentation. */
  "修改背包道具数量": "Execution.Inventory.Modify_Item",
  /**  See `NODES.Execution_Inventory_SetDropAmount` for detailed documentation. */
  "设置背包掉落道具/货币数量": "Execution.Inventory.Set_Drop_Amount",
  /**  See `NODES.Execution_Inventory_ModifyCurrency` for detailed documentation. */
  "修改背包货币数量": "Execution.Inventory.Modify_Currency",
  /**  See `NODES.Query_Item_GetCapacity` for detailed documentation. */
  "获取背包容量": "Query.Item.Get_Capacity",
  /**  See `NODES.Query_Item_GetItemAmount` for detailed documentation. */
  "获取背包道具数量": "Query.Item.Get_Item_Amount",
  /**  See `NODES.Query_Item_GetCurrencyAmount` for detailed documentation. */
  "获取背包货币数量": "Query.Item.Get_Currency_Amount",
  /**  See `NODES.Trigger_Equipment_OnInit` for detailed documentation. */
  "装备初始化时": "Trigger.Equipment.On_Init",
  /**  See `NODES.Trigger_Equipment_OnEquip` for detailed documentation. */
  "装备被穿戴时": "Trigger.Equipment.On_Equip",
  /**  See `NODES.Trigger_Equipment_OnUnequip` for detailed documentation. */
  "装备被卸下时": "Trigger.Equipment.On_Unequip",
  /**  See `NODES.Execution_Combat_LossHP` for detailed documentation. */
  "损失生命": "Execution.Combat.Loss_HP",
  /**  See `NODES.Execution_Combat_RecoverHPInstant` for detailed documentation. */
  "直接恢复生命": "Execution.Combat.Recover_HP_Instant",
  /**  See `NODES.Trigger_Shop_OnCustomItemSold` for detailed documentation. */
  "商店出售自定义商品时": "Trigger.Shop.On_Custom_Item_Sold",
  /**  See `NODES.Trigger_Shop_OnInvItemSold` for detailed documentation. */
  "商店出售背包物品时": "Trigger.Shop.On_Inv_Item_Sold",
  /**  See `NODES.Execution_Shop_Open` for detailed documentation. */
  "打开商店": "Execution.Shop.Open",
  /**  See `NODES.Execution_Shop_Close` for detailed documentation. */
  "关闭商店": "Execution.Shop.Close",
  /**  See `NODES.Execution_Shop_ModifyCustomSale` for detailed documentation. */
  "修改自定义商店商品出售信息": "Execution.Shop.Modify_Custom_Sale",
  /**  See `NODES.Trigger_Shop_OnSellItem` for detailed documentation. */
  "商店收购道具时": "Trigger.Shop.On_Sell_Item",
  /**  See `NODES.Execution_Shop_ModifyInventorySale` for detailed documentation. */
  "修改背包商店商品出售信息": "Execution.Shop.Modify_Inventory_Sale",
  /**  See `NODES.Execution_Shop_ModifyCartItem` for detailed documentation. */
  "修改物品收购表中道具收购信息": "Execution.Shop.Modify_Cart_Item",
  /**  See `NODES.Execution_Shop_AddCustomSale` for detailed documentation. */
  "向自定义商店出售表中新增商品": "Execution.Shop.Add_Custom_Sale",
  /**  See `NODES.Execution_Shop_AddInventorySale` for detailed documentation. */
  "向背包商店出售表中新增商品": "Execution.Shop.Add_Inventory_Sale",
  /**  See `NODES.Execution_Shop_AddToCart` for detailed documentation. */
  "向物品收购表中新增物品": "Execution.Shop.Add_To_Cart",
  /**  See `NODES.Execution_Shop_RemoveCustomSale` for detailed documentation. */
  "从自定义商店出售表中移除商品": "Execution.Shop.Remove_Custom_Sale",
  /**  See `NODES.Execution_Shop_RemoveInventorySale` for detailed documentation. */
  "从背包商店出售表中移除商品": "Execution.Shop.Remove_Inventory_Sale",
  /**  See `NODES.Execution_Shop_RemoveFromCart` for detailed documentation. */
  "从物品收购表中移除物品": "Execution.Shop.Remove_From_Cart",
  /**  See `NODES.Query_Shop_GetCustomSales` for detailed documentation. */
  "查询自定义商店商品出售列表": "Query.Shop.Get_Custom_Sales",
  /**  See `NODES.Query_Shop_GetInvSales` for detailed documentation. */
  "查询背包商店物品出售列表": "Query.Shop.Get_Inv_Sales",
  /**  See `NODES.Query_Shop_GetCartItems` for detailed documentation. */
  "查询商店收购物品列表": "Query.Shop.Get_Cart_Items",
  /**  See `NODES.Query_Shop_GetCustomItemInfo` for detailed documentation. */
  "查询自定义商店商品出售信息": "Query.Shop.Get_Custom_Item_Info",
  /**  See `NODES.Query_Shop_GetInvItemInfo` for detailed documentation. */
  "查询背包商店商品出售信息": "Query.Shop.Get_Inv_Item_Info",
  /**  See `NODES.Query_Shop_GetPurchaseInfo` for detailed documentation. */
  "查询商店物品收购信息": "Query.Shop.Get_Purchase_Info",
  /**  See `NODES.Execution_Inventory_SetDropItems` for detailed documentation. */
  "设置背包道具掉落内容": "Execution.Inventory.Set_Drop_Items",
  /**  See `NODES.Query_Item_GetBasicItems` for detailed documentation. */
  "获取背包所有基础道具": "Query.Item.Get_Basic_Items",
  /**  See `NODES.Query_Item_GetCurrencyAll` for detailed documentation. */
  "获取背包所有货币": "Query.Item.Get_Currency_All",
  /**  See `NODES.Query_Item_GetEquipmentAll` for detailed documentation. */
  "获取背包所有装备": "Query.Item.Get_Equipment_All",
  /**  See `NODES.Execution_Inventory_TriggerDrop` for detailed documentation. */
  "触发战利品掉落": "Execution.Inventory.Trigger_Drop",
  /**  See `NODES.Execution_Inventory_SetLootContent` for detailed documentation. */
  "设置战利品掉落内容": "Execution.Inventory.Set_Loot_Content",
  /**  See `NODES.Execution_Inventory_ModifyLootItem` for detailed documentation. */
  "修改掉落物组件道具数量": "Execution.Inventory.Modify_Loot_Item",
  /**  See `NODES.Execution_Inventory_ModifyLootCurrency` for detailed documentation. */
  "修改掉落物组件货币数量": "Execution.Inventory.Modify_Loot_Currency",
  /**  See `NODES.Query_Item_GetLootItemAmount` for detailed documentation. */
  "获取掉落物组件道具数量": "Query.Item.Get_Loot_Item_Amount",
  /**  See `NODES.Query_Item_GetLootCurrencyAmount` for detailed documentation. */
  "获取掉落物组件货币数量": "Query.Item.Get_Loot_Currency_Amount",
  /**  See `NODES.Query_Item_GetLootItems` for detailed documentation. */
  "获取掉落物组件所有道具": "Query.Item.Get_Loot_Items",
  /**  See `NODES.Query_Item_GetLootCurrency` for detailed documentation. */
  "获取掉落物组件所有货币": "Query.Item.Get_Loot_Currency",
  /**  See `NODES.Query_Item_GetLootEquipment` for detailed documentation. */
  "获取掉落物组件所有装备": "Query.Item.Get_Loot_Equipment",
  /**  See `NODES.Trigger_Item_OnItemUse` for detailed documentation. */
  "背包内道具被使用时": "Trigger.Item.On_Item_Use",
  /**  See `NODES.Query_Equipment_GetTags` for detailed documentation. */
  "查询装备标签列表": "Query.Equipment.Get_Tags",
  /**  See `NODES.Execution_ScanTag_SetRules` for detailed documentation. */
  "设置扫描标签的规则": "Execution.Scan_Tag.Set_Rules",
  /**  See `NODES.Execution_ScanTag_SetActiveTag` for detailed documentation. */
  "设置扫描组件的生效扫描标签序号": "Execution.Scan_Tag.Set_Active_Tag",
  /**  See `NODES.Query_ScanTag_GetActiveTag` for detailed documentation. */
  "获取当前生效的扫描标签配置ID": "Query.Scan_Tag.Get_Active_Tag",
  /**  See `NODES.Query_EntityRelated_GetCharacterAttr` for detailed documentation. */
  "获取角色属性": "Query.Entity_Related.Get_Character_Attr",
  /**  See `NODES.Execution_Skill_SetCD` for detailed documentation. */
  "设置角色技能冷却": "Execution.Skill.Set_CD",
  /**  See `NODES.Execution_Skill_ModifyCD` for detailed documentation. */
  "修改角色技能冷却": "Execution.Skill.Modify_CD",
  /**  See `NODES.Execution_Skill_ModifyCDRatio` for detailed documentation. */
  "按最大冷却时间修改技能冷却百分比": "Execution.Skill.Modify_CD_Ratio",
  /**  See `NODES.Execution_Equipment_AddAffixByID` for detailed documentation. */
  "装备指定序号添加词条": "Execution.Equipment.Add_Affix_By_ID",
  /**  See `NODES.Execution_DeckSelector_GetRandomList` for detailed documentation. */
  "随机卡牌选择器选择列表": "Execution.Deck_Selector.Get_Random_List",
  /**  See `NODES.Query_EntityRelated_GetOwner` for detailed documentation. */
  "获取拥有者实体": "Query.Entity_Related.Get_Owner",
  /**  See `NODES.Query_EntityRelated_GetOwnedEntities` for detailed documentation. */
  "获取实体拥有的实体列表": "Query.Entity_Related.Get_Owned_Entities",
  /**  See `NODES.Query_UnitStatus_GetStatusStacks` for detailed documentation. */
  "根据槽位序号查询单位状态层数": "Query.Unit_Status.Get_Status_Stacks",
  /**  See `NODES.Query_UnitStatus_GetStatusApplier` for detailed documentation. */
  "根据槽位序号查询单位状态施加者": "Query.Unit_Status.Get_Status_Applier",
  /**  See `NODES.Query_UnitStatus_GetStatusSlots` for detailed documentation. */
  "查询单位状态的槽位序号列表": "Query.Unit_Status.Get_Status_Slots",
  /**  See `NODES.Query_Equipment_GetConfigID` for detailed documentation. */
  "根据装备索引查询装备配置ID": "Query.Equipment.Get_Config_ID",
  /**  See `NODES.Query_CharacterRelated_GetGUIDByID` for detailed documentation. */
  "根据玩家序号获取玩家GUID": "Query.Character_Related.Get_GUID_By_ID",
  /**  See `NODES.Query_CharacterRelated_GetIDByGUID` for detailed documentation. */
  "根据玩家GUID获取玩家序号": "Query.Character_Related.Get_ID_By_GUID",
  /**  See `NODES.Arithmetic_Math_TimestampToTime` for detailed documentation. */
  "根据时间戳计算格式化时间": "Arithmetic.Math.Timestamp_To_Time",
  /**  See `NODES.Arithmetic_Math_TimeToTimestamp` for detailed documentation. */
  "根据格式化时间计算时间戳": "Arithmetic.Math.Time_To_Timestamp",
  /**  See `NODES.Arithmetic_Math_TimestampToWeekday` for detailed documentation. */
  "根据时间戳计算星期几": "Arithmetic.Math.Timestamp_To_Weekday",
  /**  See `NODES.Query_Math_GetTimestamp` for detailed documentation. */
  "查询时间戳（UTC+0时区）": "Query.Math.Get_Timestamp",
  /**  See `NODES.Query_Math_GetTimezone` for detailed documentation. */
  "查询服务器时区": "Query.Math.Get_Timezone",
  /**  See `NODES.Execution_EntityRelated_CreatePrefabGroup` for detailed documentation. */
  "创建元件组": "Execution.Entity_Related.Create_Prefab_Group",
  /**  See `NODES.Query_Creation_GetAggroList` for detailed documentation. */
  "获取默认模式的造物仇恨列表": "Query.Creation.Get_Aggro_List",
  /**  See `NODES.Execution_Leaderboard_SetScoreInt` for detailed documentation. */
  "以整数设置玩家排行榜分数": "Execution.Leaderboard.Set_Score_Int",
  /**  See `NODES.Execution_Leaderboard_SetScoreFloat` for detailed documentation. */
  "以浮点数设置玩家排行榜分数": "Execution.Leaderboard.Set_Score_Float",
  /**  See `NODES.Execution_CharacterRelated_ModifyEnvironment` for detailed documentation. */
  "修改环境配置": "Execution.Character_Related.Modify_Environment",
  /**  See `NODES.Trigger_Class_OnClassRemove` for detailed documentation. */
  "玩家职业解除时": "Trigger.Class.On_Class_Remove",
  /**  See `NODES.Trigger_Combat_OnInterruptible` for detailed documentation. */
  "进入易受打断状态时": "Trigger.Combat.On_Interruptible",
  /**  See `NODES.Query_General_GetGameInfo` for detailed documentation. */
  "查询对局游玩方式及人数": "Query.General.Get_Game_Info",
  /**  See `NODES.Query_CharacterRelated_GetNickname` for detailed documentation. */
  "获取玩家昵称": "Query.Character_Related.Get_Nickname",
  /**  See `NODES.Query_CharacterRelated_GetInputType` for detailed documentation. */
  "获得玩家客户端输入设备类型": "Query.Character_Related.Get_Input_Type",
  /**  See `NODES.Execution_ChatChannel_SetSwitch` for detailed documentation. */
  "设置聊天频道开关": "Execution.Chat_Channel.Set_Switch",
  /**  See `NODES.Execution_ChatChannel_ModifyPermission` for detailed documentation. */
  "修改玩家频道权限": "Execution.Chat_Channel.Modify_Permission",
  /**  See `NODES.Execution_ChatChannel_SetCurrentChannel` for detailed documentation. */
  "设置玩家当前频道": "Execution.Chat_Channel.Set_Current_Channel",
  /**  See `NODES.Execution_WonderlandBox_ConsumeBox` for detailed documentation. */
  "消耗礼盒": "Execution.Wonderland_Box.Consume_Box",
  /**  See `NODES.Query_WonderlandBoxRelated_GetBoxQuantity` for detailed documentation. */
  "查询对应礼盒数量": "Query.Wonderland_Box_Related.Get_Box_Quantity",
  /**  See `NODES.Query_WonderlandBoxRelated_GetBoxConsumption` for detailed documentation. */
  "查询对应礼盒消耗数量": "Query.Wonderland_Box_Related.Get_Box_Consumption",
  /**  See `NODES.Execution_MotionDevice_ActivateFixedPoint` for detailed documentation. */
  "开启定点运动器": "Execution.Motion_Device.Activate_Fixed_Point",
  /**  See `NODES.Arithmetic_Math_LeftShift` for detailed documentation. */
  "左移运算": "Arithmetic.Math.Left_Shift",
  /**  See `NODES.Arithmetic_Math_RightShift` for detailed documentation. */
  "右移运算": "Arithmetic.Math.Right_Shift",
  /**  See `NODES.Arithmetic_Math_BitwiseAnd` for detailed documentation. */
  "按位与": "Arithmetic.Math.Bitwise_And",
  /**  See `NODES.Arithmetic_Math_BitwiseOr` for detailed documentation. */
  "按位或": "Arithmetic.Math.Bitwise_Or",
  /**  See `NODES.Arithmetic_Math_BitwiseXor` for detailed documentation. */
  "按位异或": "Arithmetic.Math.Bitwise_Xor",
  /**  See `NODES.Arithmetic_Math_BitwiseNot` for detailed documentation. */
  "按位取补": "Arithmetic.Math.Bitwise_Not",
  /**  See `NODES.Arithmetic_Math_WriteBit` for detailed documentation. */
  "按位写入": "Arithmetic.Math.Write_Bit",
  /**  See `NODES.Arithmetic_Math_ReadBit` for detailed documentation. */
  "按位读出": "Arithmetic.Math.Read_Bit",
  /**  See `NODES.Trigger_EntityRelated_OnSpeedCondition` for detailed documentation. */
  "角色移动速度达到条件时": "Trigger.Entity_Related.On_Speed_Condition",
  /**  See `NODES.Query_EntityRelated_GetMoveSpeed` for detailed documentation. */
  "查询角色当前移动速度": "Query.Entity_Related.Get_Move_Speed",
  /**  See `NODES.Execution_Dictionary_SetValue` for detailed documentation. */
  "对字典设置或新增键值对": "Execution.Dictionary.Set_Value",
  /**  See `NODES.Arithmetic_Dictionary_CreateDictionary` for detailed documentation. */
  "建立字典": "Arithmetic.Dictionary.Create_Dictionary",
  /**  See `NODES.Query_Dictionary_GetValue` for detailed documentation. */
  "以键查询字典值": "Query.Dictionary.Get_Value",
  /**  See `NODES.Execution_Dictionary_RemoveByKey` for detailed documentation. */
  "以键对字典移除键值对": "Execution.Dictionary.Remove_By_Key",
  /**  See `NODES.Query_Dictionary_HasKey` for detailed documentation. */
  "查询字典是否包含特定键": "Query.Dictionary.Has_Key",
  /**  See `NODES.Query_Dictionary_HasValue` for detailed documentation. */
  "查询字典是否包含特定值": "Query.Dictionary.Has_Value",
  /**  See `NODES.Query_Dictionary_GetKeys` for detailed documentation. */
  "获取字典中键组成的列表": "Query.Dictionary.Get_Keys",
  /**  See `NODES.Query_Dictionary_GetValues` for detailed documentation. */
  "获取字典中值组成的列表": "Query.Dictionary.Get_Values",
  /**  See `NODES.Query_Dictionary_GetLength` for detailed documentation. */
  "查询字典长度": "Query.Dictionary.Get_Length",
  /**  See `NODES.Execution_Dictionary_Clear` for detailed documentation. */
  "清空字典": "Execution.Dictionary.Clear",
  /**  See `NODES.Arithmetic_Dictionary_AssembleDictionary` for detailed documentation. */
  "拼装字典": "Arithmetic.Dictionary.Assemble_Dictionary",
  /**  See `NODES.Execution_Dictionary_SortByKey` for detailed documentation. */
  "对字典按键排序": "Execution.Dictionary.Sort_By_Key",
  /**  See `NODES.Execution_Dictionary_SortByValue` for detailed documentation. */
  "对字典按值排序": "Execution.Dictionary.Sort_By_Value",
  /**  See `NODES.Query_CustomVariable_GetSnapshot` for detailed documentation. */
  "查询自定义变量快照": "Query.Custom_Variable.Get_Snapshot",
  /**  See `NODES.Hidden_Trigger_OnGMCall` for detailed documentation. */
  "When Calling GM (This Node is Hidden Externally)": "Hidden.Trigger.On_GM_Call",
  /**  See `NODES.Others_PortClient_GraphEndBool` for detailed documentation. */
  "节点图结束(布尔型)_Client": "Others.Port_Client.Graph_End_Bool",
  /**  See `NODES.Arithmetic_MathClient_And` for detailed documentation. */
  "逻辑与运算_Client": "Arithmetic.Math_Client.And",
  /**  See `NODES.Arithmetic_MathClient_Or` for detailed documentation. */
  "逻辑或运算_Client": "Arithmetic.Math_Client.Or",
  /**  See `NODES.Arithmetic_MathClient_Not` for detailed documentation. */
  "逻辑非运算_Client": "Arithmetic.Math_Client.Not",
  /**  See `NODES.Arithmetic_MathClient_Xor` for detailed documentation. */
  "逻辑异或运算_Client": "Arithmetic.Math_Client.Xor",
  /**  See `NODES.Arithmetic_GeneralClient_EnumMatch` for detailed documentation. */
  "枚举匹配_Client": "Arithmetic.General_Client.Enum_Match",
  /**  See `NODES.Arithmetic_GeneralClient_Equal` for detailed documentation. */
  "是否相等_Client": "Arithmetic.General_Client.Equal",
  /**  See `NODES.Arithmetic_MathClient_GreaterThan` for detailed documentation. */
  "是否大于_Client": "Arithmetic.Math_Client.Greater_Than",
  /**  See `NODES.Arithmetic_MathClient_LessThan` for detailed documentation. */
  "是否小于_Client": "Arithmetic.Math_Client.Less_Than",
  /**  See `NODES.Arithmetic_MathClient_LessEqual` for detailed documentation. */
  "是否小于等于_Client": "Arithmetic.Math_Client.Less_Equal",
  /**  See `NODES.Arithmetic_MathClient_GreaterEqual` for detailed documentation. */
  "是否大于等于_Client": "Arithmetic.Math_Client.Greater_Equal",
  /**  See `NODES.Arithmetic_MathClient_Add` for detailed documentation. */
  "加法运算_Client": "Arithmetic.Math_Client.Add",
  /**  See `NODES.Arithmetic_MathClient_Subtract` for detailed documentation. */
  "减法运算_Client": "Arithmetic.Math_Client.Subtract",
  /**  See `NODES.Arithmetic_MathClient_Multiply` for detailed documentation. */
  "乘法运算_Client": "Arithmetic.Math_Client.Multiply",
  /**  See `NODES.Arithmetic_MathClient_Divide` for detailed documentation. */
  "除法运算_Client": "Arithmetic.Math_Client.Divide",
  /**  See `NODES.Arithmetic_MathClient_Abs` for detailed documentation. */
  "绝对值运算_Client": "Arithmetic.Math_Client.Abs",
  /**  See `NODES.Query_CustomVariableClient_GetVariable` for detailed documentation. */
  "获取自定义变量_Client": "Query.Custom_Variable_Client.Get_Variable",
  /**  See `NODES.Query_ListRelatedClient_GetAtIndex` for detailed documentation. */
  "获取列表对应值_Client": "Query.List_Related_Client.Get_At_Index",
  /**  See `NODES.Query_ListRelatedClient_GetLength` for detailed documentation. */
  "获取列表长度_Client": "Query.List_Related_Client.Get_Length",
  /**  See `NODES.Query_ListRelatedClient_Contains` for detailed documentation. */
  "列表是否包含该值_Client": "Query.List_Related_Client.Contains",
  /**  See `NODES.Query_ListRelatedClient_GetMax` for detailed documentation. */
  "获取列表最大值_Client": "Query.List_Related_Client.Get_Max",
  /**  See `NODES.Query_ListRelatedClient_GetMin` for detailed documentation. */
  "获取列表最小值_Client": "Query.List_Related_Client.Get_Min",
  /**  See `NODES.Arithmetic_GeneralClient_ConvertType` for detailed documentation. */
  "数据类型转换_Client": "Arithmetic.General_Client.Convert_Type",
  /**  See `NODES.Query_EntityRelatedClient_GetByGUID` for detailed documentation. */
  "以GUID查询实体_Client": "Query.Entity_Related_Client.Get_By_GUID",
  /**  See `NODES.Query_CharacterRelatedClient_GetPlayerCharacter` for detailed documentation. */
  "获取指定玩家的角色实体_Client": "Query.Character_Related_Client.Get_Player_Character",
  /**  See `NODES.Query_CharacterRelatedClient_GetOwnerPlayer` for detailed documentation. */
  "获取角色归属的玩家实体_Client": "Query.Character_Related_Client.Get_Owner_Player",
  /**  See `NODES.Query_CharacterRelatedClient_GetAllPlayers` for detailed documentation. */
  "获取在场玩家实体列表_Client": "Query.Character_Related_Client.Get_All_Players",
  /**  See `NODES.Query_CharacterRelatedClient_GetGUID` for detailed documentation. */
  "以实体查询GUID_Client": "Query.Character_Related_Client.Get_GUID",
  /**  See `NODES.Query_PresetStatusClient_GetStatus` for detailed documentation. */
  "获取预设状态_Client": "Query.Preset_Status_Client.Get_Status",
  /**  See `NODES.Query_FactionRelatedClient_GetFaction` for detailed documentation. */
  "查询实体阵营_Client": "Query.Faction_Related_Client.Get_Faction",
  /**  See `NODES.Query_EntityRelatedClient_GetLocation` for detailed documentation. */
  "获取实体位置_Client": "Query.Entity_Related_Client.Get_Location",
  /**  See `NODES.Query_EntityRelatedClient_GetRotation` for detailed documentation. */
  "获取实体旋转_Client": "Query.Entity_Related_Client.Get_Rotation",
  /**  See `NODES.Arithmetic_MathClient_Random` for detailed documentation. */
  "获取随机数_Client": "Arithmetic.Math_Client.Random",
  /**  See `NODES.Query_EntityRelatedClient_GetSelf` for detailed documentation. */
  "获取自身实体_Client": "Query.Entity_Related_Client.Get_Self",
  /**  See `NODES.Query_EntityRelatedClient_GetTarget` for detailed documentation. */
  "获取目标实体_Client": "Query.Entity_Related_Client.Get_Target",
  /**  See `NODES.Query_EntityRelatedClient_GetAttackTarget` for detailed documentation. */
  "获取单位攻击目标_Client": "Query.Entity_Related_Client.Get_Attack_Target",
  /**  See `NODES.Hidden_QueryClient_GetCameraTemplate` for detailed documentation. */
  "Get Current Camera Template_Client": "Hidden.Query_Client.Get_Camera_Template",
  /**  See `NODES.Query_CharacterRelatedClient_IsInCombat` for detailed documentation. */
  "查询自身是否已入战_Client": "Query.Character_Related_Client.Is_In_Combat",
  /**  See `NODES.Execution_CharacterSkillClient_PlayTimedFX` for detailed documentation. */
  "播放限时特效_Client": "Execution.Character_Skill_Client.Play_Timed_FX",
  /**  See `NODES.Execution_CharacterSkillClient_NotifyServer` for detailed documentation. */
  "通知服务器节点图_Client": "Execution.Character_Skill_Client.Notify_Server",
  /**  See `NODES.Execution_CharacterSkillClient_TurnPlayer` for detailed documentation. */
  "玩家转向_Client": "Execution.Character_Skill_Client.Turn_Player",
  /**  See `NODES.Execution_CharacterSkillClient_SetTarget` for detailed documentation. */
  "设置自身攻击目标_Client": "Execution.Character_Skill_Client.Set_Target",
  /**  See `NODES.Others_PortClient_GraphStart` for detailed documentation. */
  "节点图开始_Client": "Others.Port_Client.Graph_Start",
  /**  See `NODES.Query_EntityRelatedClient_FilterSphere` for detailed documentation. */
  "筛选球体范围内的实体列表_Client": "Query.Entity_Related_Client.Filter_Sphere",
  /**  See `NODES.Query_EntityRelatedClient_FilterSquare` for detailed documentation. */
  "筛选方形范围内的实体列表_Client": "Query.Entity_Related_Client.Filter_Square",
  /**  See `NODES.Query_EntityRelatedClient_GetType` for detailed documentation. */
  "获取实体的类型_Client": "Query.Entity_Related_Client.Get_Type",
  /**  See `NODES.Hidden_QueryClient_GetCameraRotation` for detailed documentation. */
  "Get Camera Orientation_Client": "Hidden.Query_Client.Get_Camera_Rotation",
  /**  See `NODES.Query_EntityRelatedClient_GetSocketLoc` for detailed documentation. */
  "获取目标挂接点位置_Client": "Query.Entity_Related_Client.Get_Socket_Loc",
  /**  See `NODES.Query_EntityRelatedClient_GetSocketRot` for detailed documentation. */
  "获取目标挂接点旋转_Client": "Query.Entity_Related_Client.Get_Socket_Rot",
  /**  See `NODES.Arithmetic_ListClient_AssembleList` for detailed documentation. */
  "拼装列表_Client": "Arithmetic.List_Client.Assemble_List",
  /**  See `NODES.Query_ListRelatedClient_GetEntityTypes` for detailed documentation. */
  "获取实体类型列表_Client": "Query.List_Related_Client.Get_Entity_Types",
  /**  See `NODES.Execution_CharacterSkillClient_TriggerHitboxLoc` for detailed documentation. */
  "特定位置打攻击盒_Client": "Execution.Character_Skill_Client.Trigger_Hitbox_Loc",
  /**  See `NODES.Execution_CharacterSkillClient_LaunchProjectile` for detailed documentation. */
  "定点发射投射物_Client": "Execution.Character_Skill_Client.Launch_Projectile",
  /**  See `NODES.Execution_CharacterSkillClient_MoveToPoint` for detailed documentation. */
  "定点位移_Client": "Execution.Character_Skill_Client.Move_To_Point",
  /**  See `NODES.Execution_CharacterSkillClient_ForEachEntity` for detailed documentation. */
  "遍历实体列表_Client": "Execution.Character_Skill_Client.For_Each_Entity",
  /**  See `NODES.Control_GeneralClient_Branch` for detailed documentation. */
  "双分支_Client": "Control.General_Client.Branch",
  /**  See `NODES.Execution_CharacterSkillClient_AddStatus` for detailed documentation. */
  "添加单位状态_Client": "Execution.Character_Skill_Client.Add_Status",
  /**  See `NODES.Execution_CharacterSkillClient_RemoveStatus` for detailed documentation. */
  "移除单位状态_Client": "Execution.Character_Skill_Client.Remove_Status",
  /**  See `NODES.Execution_CharacterSkillClient_TriggerHitboxSocket` for detailed documentation. */
  "Trigger Hitbox at Specified Attachment Point_Client": "Execution.Character_Skill_Client.Trigger_Hitbox_Socket",
  /**  See `NODES.Execution_CharacterSkillClient_RemoveDevice` for detailed documentation. */
  "移除指定角色扰动装置_Client": "Execution.Character_Skill_Client.Remove_Device",
  /**  See `NODES.Execution_CharacterSkillClient_ModifyWeight` for detailed documentation. */
  "修改攻击权重_Client": "Execution.Character_Skill_Client.Modify_Weight",
  /**  See `NODES.Execution_CharacterSkillClient_GetCameraData` for detailed documentation. */
  "镜头朝向检测数据_Client": "Execution.Character_Skill_Client.Get_Camera_Data",
  /**  See `NODES.Arithmetic_MathClient_VectorDot` for detailed documentation. */
  "三维向量内积_Client": "Arithmetic.Math_Client.Vector_Dot",
  /**  See `NODES.Arithmetic_MathClient_VectorCross` for detailed documentation. */
  "三维向量外积_Client": "Arithmetic.Math_Client.Vector_Cross",
  /**  See `NODES.Arithmetic_MathClient_SplitVector` for detailed documentation. */
  "拆分三维向量_Client": "Arithmetic.Math_Client.Split_Vector",
  /**  See `NODES.Arithmetic_MathClient_VectorScale` for detailed documentation. */
  "三维向量缩放_Client": "Arithmetic.Math_Client.Vector_Scale",
  /**  See `NODES.Arithmetic_MathClient_VectorAngle` for detailed documentation. */
  "三维向量夹角_Client": "Arithmetic.Math_Client.Vector_Angle",
  /**  See `NODES.Arithmetic_MathClient_VectorRotate` for detailed documentation. */
  "三维向量旋转_Client": "Arithmetic.Math_Client.Vector_Rotate",
  /**  See `NODES.Arithmetic_MathClient_VectorLength` for detailed documentation. */
  "三维向量模运算_Client": "Arithmetic.Math_Client.Vector_Length",
  /**  See `NODES.Arithmetic_MathClient_CreateVector` for detailed documentation. */
  "创建三维向量_Client": "Arithmetic.Math_Client.Create_Vector",
  /**  See `NODES.Arithmetic_MathClient_VectorAdd` for detailed documentation. */
  "三维向量加法_Client": "Arithmetic.Math_Client.Vector_Add",
  /**  See `NODES.Arithmetic_MathClient_VectorSubtract` for detailed documentation. */
  "三维向量减法_Client": "Arithmetic.Math_Client.Vector_Subtract",
  /**  See `NODES.Arithmetic_MathClient_VectorToRotation` for detailed documentation. */
  "方向向量转旋转_Client": "Arithmetic.Math_Client.Vector_To_Rotation",
  /**  See `NODES.Arithmetic_MathClient_OrientationToRotation` for detailed documentation. */
  "朝向转旋转_Client": "Arithmetic.Math_Client.Orientation_To_Rotation",
  /**  See `NODES.Execution_CharacterSkillClient_RecoverHP` for detailed documentation. */
  "恢复生命值_Client": "Execution.Character_Skill_Client.Recover_HP",
  /**  See `NODES.Query_CharacterRelatedClient_GetCurrentCharacter` for detailed documentation. */
  "获取当前角色_Client": "Query.Character_Related_Client.Get_Current_Character",
  /**  See `NODES.Query_UnitTagClient_GetTags` for detailed documentation. */
  "获取实体的单位标签列表_Client": "Query.Unit_Tag_Client.Get_Tags",
  /**  See `NODES.Query_UnitTagClient_GetByTag` for detailed documentation. */
  "获取单位标签的实体列表_Client": "Query.Unit_Tag_Client.Get_By_Tag",
  /**  See `NODES.Execution_GeneralClient_ForLoop` for detailed documentation. */
  "有限循环_Client": "Execution.General_Client.For_Loop",
  /**  See `NODES.Execution_GeneralClient_Break` for detailed documentation. */
  "跳出循环_Client": "Execution.General_Client.Break",
  /**  See `NODES.Execution_GeneralClient_SetLocal` for detailed documentation. */
  "设置局部变量_Client": "Execution.General_Client.Set_Local",
  /**  See `NODES.Query_GeneralClient_GetLocal` for detailed documentation. */
  "获取局部变量_Client": "Query.General_Client.Get_Local",
  /**  See `NODES.Execution_CustomAggroClient_SetAggro` for detailed documentation. */
  "设置指定实体的仇恨值_Client": "Execution.Custom_Aggro_Client.Set_Aggro",
  /**  See `NODES.Execution_CustomAggroClient_ModifyAggro` for detailed documentation. */
  "修改指定实体的仇恨值_Client": "Execution.Custom_Aggro_Client.Modify_Aggro",
  /**  See `NODES.Execution_CustomAggroClient_ModifyAggroRatio` for detailed documentation. */
  "按比例修改指定实体的仇恨值_Client": "Execution.Custom_Aggro_Client.Modify_Aggro_Ratio",
  /**  See `NODES.Execution_CustomAggroClient_TransferAggro` for detailed documentation. */
  "按比例转移指定实体的仇恨值_Client": "Execution.Custom_Aggro_Client.Transfer_Aggro",
  /**  See `NODES.Execution_CustomAggroClient_ClearAggro` for detailed documentation. */
  "清空指定实体的仇恨列表_Client": "Execution.Custom_Aggro_Client.Clear_Aggro",
  /**  See `NODES.Execution_CustomAggroClient_RemoveAggro` for detailed documentation. */
  "将目标实体移除出仇恨列表_Client": "Execution.Custom_Aggro_Client.Remove_Aggro",
  /**  See `NODES.Execution_CustomAggroClient_Taunt` for detailed documentation. */
  "嘲讽目标_Client": "Execution.Custom_Aggro_Client.Taunt",
  /**  See `NODES.Query_CustomAggroClient_GetAggroTarget` for detailed documentation. */
  "获取指定实体的仇恨目标_Client": "Query.Custom_Aggro_Client.Get_Aggro_Target",
  /**  See `NODES.Query_CustomAggroClient_GetAggroList` for detailed documentation. */
  "获取指定实体的仇恨列表_Client": "Query.Custom_Aggro_Client.Get_Aggro_List",
  /**  See `NODES.Query_CustomAggroClient_IsInCombat` for detailed documentation. */
  "查询指定实体是否入战_Client": "Query.Custom_Aggro_Client.Is_In_Combat",
  /**  See `NODES.Query_FactionRelatedClient_IsHostile` for detailed documentation. */
  "查询阵营是否敌对_Client": "Query.Faction_Related_Client.Is_Hostile",
  /**  See `NODES.Arithmetic_MathClient_Sin` for detailed documentation. */
  "正弦函数_Client": "Arithmetic.Math_Client.Sin",
  /**  See `NODES.Arithmetic_MathClient_Cos` for detailed documentation. */
  "余弦函数_Client": "Arithmetic.Math_Client.Cos",
  /**  See `NODES.Arithmetic_MathClient_Tan` for detailed documentation. */
  "正切函数_Client": "Arithmetic.Math_Client.Tan",
  /**  See `NODES.Arithmetic_MathClient_Asin` for detailed documentation. */
  "反正弦函数_Client": "Arithmetic.Math_Client.Asin",
  /**  See `NODES.Arithmetic_MathClient_Acos` for detailed documentation. */
  "反余弦函数_Client": "Arithmetic.Math_Client.Acos",
  /**  See `NODES.Arithmetic_MathClient_Atan` for detailed documentation. */
  "反正切函数_Client": "Arithmetic.Math_Client.Atan",
  /**  See `NODES.Arithmetic_MathClient_VectorNormalize` for detailed documentation. */
  "三维向量归一化_Client": "Arithmetic.Math_Client.Vector_Normalize",
  /**  See `NODES.Arithmetic_MathClient_RadToDeg` for detailed documentation. */
  "弧度转角度_Client": "Arithmetic.Math_Client.Rad_To_Deg",
  /**  See `NODES.Arithmetic_MathClient_DegToRad` for detailed documentation. */
  "角度转弧度_Client": "Arithmetic.Math_Client.Deg_To_Rad",
  /**  See `NODES.Query_EntityRelatedClient_IsActive` for detailed documentation. */
  "查询实体是否在场_Client": "Query.Entity_Related_Client.Is_Active",
  /**  See `NODES.Hidden_OtherClient_GraphEnd` for detailed documentation. */
  "Node Graph Ends_Client": "Hidden.Other_Client.Graph_End",
  /**  See `NODES.Execution_CharacterSkillClient_TurnToFace` for detailed documentation. */
  "玩家转向指定朝向_Client": "Execution.Character_Skill_Client.Turn_To_Face",
  /**  See `NODES.Execution_CharacterSkillClient_ResetTarget` for detailed documentation. */
  "重置技能目标_Client": "Execution.Character_Skill_Client.Reset_Target",
  /**  See `NODES.Query_TriggerClient_GetOverlappingEntities` for detailed documentation. */
  "获取碰撞触发器内所有实体_Client": "Query.Trigger_Client.Get_Overlapping_Entities",
  /**  See `NODES.Execution_CharacterSkillClient_ExitAiming` for detailed documentation. */
  "强制退出瞄准状态_Client": "Execution.Character_Skill_Client.Exit_Aiming",
  /**  See `NODES.Query_RayClient_GetRayResult` for detailed documentation. */
  "获取射线检测结果_Client": "Query.Ray_Client.Get_Ray_Result",
  /**  See `NODES.Query_ListRelatedClient_GetRayFilters` for detailed documentation. */
  "获取射线筛选类型列表_Client": "Query.List_Related_Client.Get_Ray_Filters",
  /**  See `NODES.Execution_CharacterSkillClient_TriggerSphereHitboxLoc` for detailed documentation. */
  "特定位置打球形攻击盒_Client": "Execution.Character_Skill_Client.Trigger_Sphere_Hitbox_Loc",
  /**  See `NODES.Execution_CharacterSkillClient_TriggerRectHitboxLoc` for detailed documentation. */
  "特定位置打矩形攻击盒_Client": "Execution.Character_Skill_Client.Trigger_Rect_Hitbox_Loc",
  /**  See `NODES.Execution_CharacterSkillClient_TriggerSectorHitboxLoc` for detailed documentation. */
  "特定位置打扇形攻击盒_Client": "Execution.Character_Skill_Client.Trigger_Sector_Hitbox_Loc",
  /**  See `NODES.Execution_CharacterSkillClient_TriggerSphereHitboxSocket` for detailed documentation. */
  "Trigger Spherical Hitbox at Specified Attachment Point_Client": "Execution.Character_Skill_Client.Trigger_Sphere_Hitbox_Socket",
  /**  See `NODES.Execution_CharacterSkillClient_TriggerRectHitboxSocket` for detailed documentation. */
  "Trigger Rectangular Hitbox at Specified Attachment Point_Client": "Execution.Character_Skill_Client.Trigger_Rect_Hitbox_Socket",
  /**  See `NODES.Execution_CharacterSkillClient_TriggerSectorHitboxSocket` for detailed documentation. */
  "指定挂接点打攻击盒_Client": "Execution.Character_Skill_Client.Trigger_Sector_Hitbox_Socket",
  /**  See `NODES.Hidden_ExecutionClient_TestSendSignal` for detailed documentation. */
  "(Test) Send Client Signal_Client": "Hidden.Execution_Client.Test_Send_Signal",
  /**  See `NODES.Query_ScanningClient_GetScannedEntity` for detailed documentation. */
  "获取扫描组件当前扫描到的实体_Client": "Query.Scanning_Client.Get_Scanned_Entity",
  /**  See `NODES.Query_ScanningClient_GetScannableEntities` for detailed documentation. */
  "获取扫描组件可扫描的所有合法对象_Client": "Query.Scanning_Client.Get_Scannable_Entities",
  /**  See `NODES.Query_ScanningClient_GetScanStatus` for detailed documentation. */
  "获取实体扫描状态_Client": "Query.Scanning_Client.Get_Scan_Status",
  /**  See `NODES.Query_ScanningClient_GetActiveTags` for detailed documentation. */
  "获取实体当前生效的扫描标签_Client": "Query.Scanning_Client.Get_Active_Tags",
  /**  See `NODES.Others_PortClient_GraphEndInt` for detailed documentation. */
  "节点图结束(整数)_Client": "Others.Port_Client.Graph_End_Int",
  /**  See `NODES.Query_CharacterRelatedClient_GetInputType` for detailed documentation. */
  "获得玩家客户端输入设备类型_Client": "Query.Character_Related_Client.Get_Input_Type",
  /**  See `NODES.Execution_SignalClient_SendToServer` for detailed documentation. */
  "向服务器节点图发送信号_Client": "Execution.Signal_Client.Send_To_Server",
  /**  See `NODES.Execution_Signal_Send` for detailed documentation. */
  "发送信号": "Execution.Signal.Send",
  /**  See `NODES.Trigger_Signal_OnSignal` for detailed documentation. */
  "监听信号": "Trigger.Signal.On_Signal",
  /**  See `NODES.Arithmetic_Structure_AssembleStruct` for detailed documentation. */
  "拼装结构体": "Arithmetic.Structure.Assemble_Struct",
  /**  See `NODES.Arithmetic_Structure_SplitStruct` for detailed documentation. */
  "拆分结构体": "Arithmetic.Structure.Split_Struct",
  /**  See `NODES.Execution_Structure_Modify` for detailed documentation. */
  "修改结构体": "Execution.Structure.Modify",
} as const;