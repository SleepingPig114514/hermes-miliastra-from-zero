// ==================================================================
// AUTO-GENERATED FILE. DO NOT EDIT.
// ==================================================================

export const NODES = {
  /**
 * **Print String** `(Execution.Common_Node.Print)`
 *
 * - Outputs a string to the log, generally used for logic checks and debugging
 * - In the log, this string prints whenever the logic runs successfully, regardless of whether this Node Graph is toggled
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
 * | 0 || 🔹 || `Str` || `text` || String: The string to be printed |
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
 * **Double Branch** `(Control.General.Branch)`
 *
 * - Branches into True or False based on the evaluated condition
 * - When the Boolean is True, the [True] execution flow runs; when it is False, the [False] execution flow runs
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
 * | 0 || 🔹 || `Bol` || `cond` || Condition |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `True` || Yes |
 * | - || ⏩ || - || `False` || No |
 */
  Control_General_Branch: "Control.General.Branch",

  /**
 * **Multiple Branches** `(Control.General.Switch)`
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
 * | 0 || 🔷 || **`R<T>`** || `key` || Control Expression: Only supports Integers or Strings |
 * | 1 || 🔷 || **`L<R<T>>`** || `cases` || Judge Parameter |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `DefaultBranch` || Default |
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
 * **Finite Loop** `(Execution.Common_Node.For_Loop)`
 *
 * - From the [Loop Start Value] to the [Loop End Value], the loop iterates, incrementing the Integer by 1 each time. On each iteration, it executes the Nodes connected to [Loop Body]. After a full iteration, it executes the Nodes connected to [Loop Complete].
 * - Use [Break Loop] to end the iteration early. After exiting the loop, the logic connected to the [Loop Complete] node will also be executed.
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
 * | - || ▶️ || - || `Break` || Break Loop |
 * | 0 || 🔹 || `Int` || `start_index` || Loop Start Value: Starting integer value for iteration |
 * | 1 || 🔹 || `Int` || `end_index` || Loop End Value: Integer value at which the iteration ends |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `Iteration` || Loop Body |
 * | - || ⏩ || - || `End` || Loop Complete |
 * | 0 || 🔸 || `Int` || `current_index` || Current Loop Value: Integer value of the current execution logic |
 */
  Execution_CommonNode_ForLoop: "Execution.Common_Node.For_Loop",

  /**
 * **Break Loop** `(Execution.Common_Node.Break)`
 *
 * - Break out of a Finite Loop. The output pin must connect to the [Break Loop] input parameter of the [Finite Loop] Node
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
 * **Get Random Floating Point Number** `(Query.Math.Random_Float)`
 *
 * - Returns a random Floating Point Number that is ≥ the lower limit and ≤ the upper limit. The range is inclusive
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
 * | 0 || 🔹 || `Flt` || `lower` || Lower Limit |
 * | 1 || 🔹 || `Flt` || `upper` || Upper Limit |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || Result |
 */
  Query_Math_RandomFloat: "Query.Math.Random_Float",

  /**
 * **Weighted Random** `(Query.Math.Weighted_Random)`
 *
 * - Takes a list of weights and randomly selects an ID based on the weight distribution
 * - For example, with a weight list {10, 20, 66, 4}, this node outputs 0, 1, 2, or 3 with probabilities 10%, 20%, 66%, and 4% respectively
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
 * | 0 || 🔹 || `L<Int>` || `weights` || Weight List |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `index` || Weight ID |
 */
  Query_Math_WeightedRandom: "Query.Math.Weighted_Random",

  /**
 * **Split 3D Vector** `(Arithmetic.Math.Split_Vector)`
 *
 * - Outputs the x, y, and z components of a 3D Vector as three Floating Point Numbers
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
 * | 0 || 🔹 || `Vec` || `vector` || 3D Vector |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `x` || X-Component |
 * | 1 || 🔸 || `Flt` || `y` || Y-Component |
 * | 2 || 🔸 || `Flt` || `z` || Z-Component |
 */
  Arithmetic_Math_SplitVector: "Arithmetic.Math.Split_Vector",

  /**
 * **3D Vector Addition** `(Arithmetic.Math.Vector_Add)`
 *
 * - Calculates the sum of two 3D Vectors
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
 * | 0 || 🔹 || `Vec` || `a` || 3D Vector 1 |
 * | 1 || 🔹 || `Vec` || `b` || 3D Vector 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || Result |
 */
  Arithmetic_Math_VectorAdd: "Arithmetic.Math.Vector_Add",

  /**
 * **3D Vector Subtraction** `(Arithmetic.Math.Vector_Subtract)`
 *
 * - Calculates the difference of two 3D Vectors
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
 * | 0 || 🔹 || `Vec` || `a` || 3D Vector 1 |
 * | 1 || 🔹 || `Vec` || `b` || 3D Vector 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || Result |
 */
  Arithmetic_Math_VectorSubtract: "Arithmetic.Math.Vector_Subtract",

  /**
 * **3D Vector Zoom** `(Arithmetic.Math.Vector_Scale)`
 *
 * - Scales the input 3D Vector (scalar multiplication) and outputs the result
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
 * | 0 || 🔹 || `Vec` || `v` || 3D Vector |
 * | 1 || 🔹 || `Flt` || `scale` || Zoom Multiplier |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || Result |
 */
  Arithmetic_Math_VectorScale: "Arithmetic.Math.Vector_Scale",

  /**
 * **3D Vector Angle** `(Arithmetic.Math.Vector_Angle)`
 *
 * - Calculates the angle between two 3D Vectors and outputs it in radians
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
 * | 0 || 🔹 || `Vec` || `a` || 3D Vector 1 |
 * | 1 || 🔹 || `Vec` || `b` || 3D Vector 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `radians` || Angle (Radians) |
 */
  Arithmetic_Math_VectorAngle: "Arithmetic.Math.Vector_Angle",

  /**
 * **Equal** `(Arithmetic.General.Equal)`
 *
 * - Determines whether two inputs are equal
 * - Some Parameter Types have special comparison rules:
 * - Floating Point Numbers: Floating Point Numbers are compared using approximate equality. When the difference between two Floating Point Numbers is less than an extremely small value, the two numbers are considered equal. For example: 2.0000001 and 2.0 are considered equal
 * - 3D Vector: The x, y, and z components of a 3D Vector are compared using Floating Point approximate equality
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
 * | 0 || 🔷 || **`R<T>`** || `input1` || Input 1 |
 * | 1 || 🔷 || **`R<T>`** || `input2` || Input 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || Result: Output True if equal, False if not equal |
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
 * **Get Local Variable** `(Query.General.Get_Local)`
 *
 * - Retrieves a Local Variable and optionally sets its [Initial Value]
 * - After setting the [Initial Value], the [Value] output parameter will be equal to the input [Initial Value]
 * - When the output [Local Variable] is connected to the [Set Local Variable] Execution Node's input [Local Variable], the input [Value] of [Set Local Variable] overwrites this Search Node's output [Value]. The next time you use [Get Local Variable], the output [Value] is the overwritten value
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
 * | 0 || 🔷 || **`R<T>`** || `initial_value` || Initial Value: Allows you to set the default initial value for local variables |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Loc` || `local_variable` || Local Variable: Container for data storage |
 * | 1 || 🔶 || **`R<T>`** || `value` || Value: When not Overwritten, this value equals the Initial Value; after it is Overwritten, it equals the new value |
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
 * **Set Local Variable** `(Execution.Common_Node.Set_Local)`
 *
 * - When connected to the Query Node [Get Local Variable], this overwrites the value of that Local Variable
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
 * | 0 || 🔹 || `Loc` || `variable` || Local Variable: Container for data storage |
 * | 1 || 🔷 || **`R<T>`** || `value` || Value: Value used to overwrite this local variable |
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
 * **Set Custom Variable** `(Execution.Custom_Variable.Set_Variable)`
 *
 * - Set the value of the specified Custom Variable on the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: The variable is mounted on this entity |
 * | 1 || 🔹 || `Str` || `variable_name` || Variable Name: Custom variable name. Must be unique |
 * | 2 || 🔷 || **`R<T>`** || `value` || Variable Value: Value assigned to this variable |
 * | 3 || 🔹 || `Bol` || `should_trigger_event` || Trigger Event: Default: True. When set to False, this custom variable editing will not trigger the On Custom Variable Change event |
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
 * **When Custom Variable Changes** `(Trigger.Custom_Variable.On_Variable_Change)`
 *
 * - This event is triggered when the Custom Variable of the Entity associated with the current Node Graph changes
 * - The previous and current values are Generic. Determine the Generic type before you can correctly receive events for Custom Variables of the corresponding type
 * - Vessel-type Custom Variables do not provide before-value and after-value Output Parameters
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity: The Entity associated with this Node Graph |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID: GUID of the Entity associated with this Node Graph |
 * | 2 || 🔸 || `Str` || `variable_name` || Variable Name: Name of the Variable that was changed |
 * | 3 || 🔶 || **`R<T>`** || `old_value` || Pre-Change Value: The Variable's value before the change |
 * | 4 || 🔶 || **`R<T>`** || `new_value` || Post-Change Value: The Variable's value after the change |
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
 * **Get Custom Variable** `(Query.Custom_Variable.Get_Variable)`
 *
 * - Returns the value of the specified Custom Variable from the Target Entity
 * - If the variable does not exist, returns the type's default value
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Str` || `var_name` || Variable Name |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `value` || Variable Value |
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
 * **Set Preset Status** `(Execution.Preset_Status.Set_Status)`
 *
 * - Set the Preset Status of the specified Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Preset Status set for the entity |
 * | 1 || 🔹 || `Int` || `preset_index` || Preset Status Index: The unique identifier for the Preset Status |
 * | 2 || 🔹 || `Int` || `preset_value` || Preset Status Value: Generally "0" for off, "1" for on |
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
 * **When Preset Status Changes** `(Trigger.Preset_Status.On_Status_Change)`
 *
 * - This event is triggered when the Preset Status of the Entity associated with the Node Graph changes
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Int` || `preset_index` || Preset Status ID |
 * | 3 || 🔸 || `Int` || `old_value` || Pre-Change Value |
 * | 4 || 🔸 || `Int` || `new_value` || Post-Change Value |
 */
  Trigger_PresetStatus_OnStatusChange: "Trigger.Preset_Status.On_Status_Change",

  /**
 * **Get Preset Status** `(Query.Preset_Status.Get_Status)`
 *
 * - Returns the value of the specified Preset Status for the Target Entity. Returns 0 if the Entity does not have that Preset Status
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Int` || `preset_index` || Preset Status Index |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `preset_value` || Preset Status Value |
 */
  Query_PresetStatus_GetStatus: "Query.Preset_Status.Get_Status",

  /**
 * **Destroy Entity** `(Execution.Entity_Related.Destroy_Entity)`
 *
 * - Destroy the specified Entity with a destruction effect. This can trigger logic that runs only after destruction, such as end-of-lifecycle behaviors for Local Projectiles
 * - The [When Entity Is Destroyed] and [When Entity Is Removed/Destroyed] events can be monitored on Stage Entities
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: The entity to be destroyed |
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
 * **Create Entity** `(Execution.Entity_Related.Create_Entity)`
 *
 * - Create an Entity by GUID. The Entity must be pre-placed in the Scene
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
 * | 0 || 🔹 || `Gid` || `guid` || Target GUID: Identifier for this entity |
 * | 1 || 🔹 || `L<Int>` || `unit_tag_indexes` || Unit Tag Index List: Determines the Unit Tags carried when this entity is created |
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
 * **When Entity Is Created** `(Trigger.Entity_Related.On_Created)`
 *
 * - This event is triggered when an Entity is created
 * - All types of Entities can trigger this event. Stage Entities, Character Entities, and Player Entities trigger this event when entering a Stage
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 */
  Trigger_EntityRelated_OnCreated: "Trigger.Entity_Related.On_Created",

  /**
 * **When Entity Is Removed/Destroyed** `(Trigger.Entity_Related.On_Removed)`
 *
 * - This event is triggered when any Entity in the Stage is removed or destroyed, and it can only be triggered on Stage Entities
 * - This event is triggered upon Entity destruction or removal. Therefore, when an Entity is destroyed, it triggers both the [On Entity Destroyed] and [On Entity Removed/Destroyed] events in sequence
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
 * | 0 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 */
  Trigger_EntityRelated_OnRemoved: "Trigger.Entity_Related.On_Removed",

  /**
 * **Get Self Entity** `(Query.Entity_Related.Get_Self)`
 *
 * - Returns the Entity associated with this Node Graph
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
 * | 0 || 🔸 || `Ety` || `self` || Self Entity |
 */
  Query_EntityRelated_GetSelf: "Query.Entity_Related.Get_Self",

  /**
 * **3D Vector Normalization** `(Arithmetic.Math.Vector_Normalize)`
 *
 * - Normalizes the length of a 3D Vector and outputs the result
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
 * | 0 || 🔹 || `Vec` || `v` || 3D Vector |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || Result |
 */
  Arithmetic_Math_VectorNormalize: "Arithmetic.Math.Vector_Normalize",

  /**
 * **Query Entity by GUID** `(Query.Entity_Related.Get_By_GUID)`
 *
 * - Searches for an Entity by GUID
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
 * | 0 || 🔸 || `Ety` || `entity` || Entity |
 */
  Query_EntityRelated_GetByGUID: "Query.Entity_Related.Get_By_GUID",

  /**
 * **Query GUID by Entity** `(Query.Entity_Related.Get_GUID)`
 *
 * - Searches for the GUID of the specified Entity
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
 * | 0 || 🔹 || `Ety` || `entity` || Entity |
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
 * **Settle Stage** `(Execution.Stage_Related.Settle)`
 *
 * - Triggers the Stage Settlement process, which executes out-of-stage logic as defined in [Stage Settlement](https://act.mihoyo.com/ys/ugc/tutorial//detail/mhx1du08nhwo)
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
 * **Start Timer** `(Execution.Timer.Start)`
 *
 * - Start a Timer on the Target Entity
 * - The Timer is uniquely identified by its name
 * - A Timer consists of a looping or non-looping Timer Sequence. The Timer Sequence is a set of time points in seconds arranged in ascending order; when the Timer reaches these points, it triggers the [On Timer Triggered] event. The maximum length of a Timer Sequence is 100
 * - For example, if you input the Timer Sequence [1, 3, 5, 7], the [On Timer Triggered] event fires at 1s, 3s, 5s, and 7s
 * - When Loop is set to "Yes," the Timer restarts from 0s after reaching the last time point. For [1, 3, 5, 7], it restarts from 0s after reaching 7s
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Str` || `timer_name` || Timer Name: Timer Identifier |
 * | 2 || 🔹 || `Bol` || `loop` || Loop: If set to True, the Timer Sequence executes in a loop |
 * | 3 || 🔹 || `L<Flt>` || `timer_sequence` || Timer Sequence: Provide a list sorted in ascending order. If the list is invalid (not strictly ascending, contains negatives, etc.), the Timer will not run |
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
 * **Pause Timer** `(Execution.Timer.Pause)`
 *
 * - Pauses the specified Timer on the Target Entity. The [Resume Timer] node can then be used to resume its countdown
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Str` || `timer_name` || Timer Name: Timer Identifier |
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
 * **Resume Timer** `(Execution.Timer.Resume)`
 *
 * - Resume a paused Timer on the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Str` || `timer_name` || Timer Name: Timer Identifier |
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
 * **Stop Timer** `(Execution.Timer.Stop)`
 *
 * - Completely terminate the specified Timer on the Target Entity; it cannot be resumed
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Str` || `timer_name` || Timer Name: Timer Identifier |
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
 * **When Timer Is Triggered** `(Trigger.Timer.On_Timer_Trigger)`
 *
 * - This event is triggered when the Timer reaches the specified time node
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Str` || `timer_name` || Timer Name |
 * | 3 || 🔸 || `Int` || `timer_sequence` || Timer Sequence ID |
 * | 4 || 🔸 || `Int` || `loop_number` || Number of Loops |
 */
  Trigger_Timer_OnTimerTrigger: "Trigger.Timer.On_Timer_Trigger",

  /**
 * **Add Uniform Basic Linear Motion Device** `(Execution.Motion_Device.Add_Linear_Motion)`
 *
 * - Dynamically add a Basic Motion Device with Uniform Linear Motion at runtime
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Str` || `mover_name` || Motion Device Name: Identifier for this motion device |
 * | 2 || 🔹 || `Flt` || `duration` || Motion Device Duration: The duration for which this motion device remains active |
 * | 3 || 🔹 || `Vec` || `velocity` || Velocity Vector: Determines the magnitude and direction of the velocity |
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
 * **Add Uniform Basic Rotation-Based Motion Device** `(Execution.Motion_Device.Add_Rotation_Motion)`
 *
 * - Dynamically add a Basic Motion Device with Uniform Rotation at runtime
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Str` || `mover_name` || Motion Device Name: Identifier for this motion device |
 * | 2 || 🔹 || `Flt` || `duration` || Motion Device Duration: The duration for which this motion device remains active |
 * | 3 || 🔹 || `Flt` || `angular_velocity` || Angular Velocity (°/s): Angular Velocity Magnitude |
 * | 4 || 🔹 || `Vec` || `axis` || Rotation Axis Orientation: Relative Orientation |
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
 * **Stop and Delete Basic Motion Device** `(Execution.Motion_Device.Stop_Delete)`
 *
 * - Stop and delete a running Motion Device
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Str` || `mover_name` || Motion Device Name: Identifier for this motion device |
 * | 2 || 🔹 || `Bol` || `stop_all` || Stop All Basic Motion Devices: If set to True, stops all Basic Motion Devices on this Entity. If set to False, stops only the Motion Device whose name matches the specified Motion Device |
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
 * **Pause Basic Motion Device** `(Execution.Motion_Device.Pause)`
 *
 * - Pause a running Motion Device. The Resume Motion Device node can then be used to resume it
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Str` || `mover_name` || Motion Device Name: Identifier for this motion device |
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
 * **Recover Basic Motion Device** `(Execution.Motion_Device.Resume)`
 *
 * - Resume a paused Basic Motion Device on the Target Entity. The Target Entity must have the Basic Motion Device Component
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Str` || `mover_name` || Motion Device Name: Identifier for this motion device |
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
 * **When Basic Motion Device Stops** `(Trigger.Motion_Device.On_Motion_Stop)`
 *
 * - This event is sent to the Component Owner when a Basic Motion Device on the Basic Motion Device Component completes its movement or is disabled
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity: Component Owner |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Str` || `mover_name` || Motion Device Name |
 */
  Trigger_MotionDevice_OnMotionStop: "Trigger.Motion_Device.On_Motion_Stop",

  /**
 * **Activate/Disable Collision Trigger** `(Execution.Collision_Trigger.Set_Trigger_State)`
 *
 * - Edit the Collision Trigger Component data to Activate/Disable the Trigger at the specified ID
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
 * | 0 || 🔹 || `Ety` || `collision_trigger_guid` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Int` || `collision_unit_index` || Trigger ID: Identifier for this Collision Trigger |
 * | 2 || 🔹 || `Bol` || `should_register` || Activate: Set to True to activate |
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
 * **When Exiting Collision Trigger** `(Trigger.Collision_Trigger.On_Exit)`
 *
 * - When the "Collision Trigger Source" range of active Entity A leaves the "Collision Trigger" range of active Entity B
 * - Node graph events will be sent to the entity B configured with "Collision Trigger"
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
 * | 0 || 🔸 || `Ety` || `leaver_entity` || Exiting Entity: Entity A (referenced above) |
 * | 1 || 🔸 || `Gid` || `leaver_guid` || Exiting Entity GUID |
 * | 2 || 🔸 || `Ety` || `trigger_entity` || Trigger Entity: Entity B (mentioned above) |
 * | 3 || 🔸 || `Gid` || `trigger_guid` || Trigger Entity GUID |
 * | 4 || 🔸 || `Int` || `trigger_index` || Trigger ID |
 */
  Trigger_CollisionTrigger_OnExit: "Trigger.Collision_Trigger.On_Exit",

  /**
 * **When Entering Collision Trigger** `(Trigger.Collision_Trigger.On_Enter)`
 *
 * - The "Collision Trigger Source" range of a runtime entity A enters the "Collision Trigger" range of another runtime entity B
 * - Node graph events will be sent to the entity B configured with "Collision Trigger"
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
 * | 0 || 🔸 || `Ety` || `enterer_entity` || Entering Entity: Entity A (referenced above) |
 * | 1 || 🔸 || `Gid` || `enterer_guid` || Entering Entity GUID |
 * | 2 || 🔸 || `Ety` || `trigger_entity` || Trigger Entity: Entity B (mentioned above) |
 * | 3 || 🔸 || `Gid` || `trigger_guid` || Trigger Entity GUID |
 * | 4 || 🔸 || `Int` || `trigger_index` || Trigger ID: The trigger with the corresponding ID in Entity B's Collision Trigger Component |
 */
  Trigger_CollisionTrigger_OnEnter: "Trigger.Collision_Trigger.On_Enter",

  /**
 * **Play Timed Effects** `(Execution.Special_Effect.Play_Timed)`
 *
 * - Play a Timed Effect relative to the Target Entity. A valid Target Entity and Attachment Point are required
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
 * | 0 || 🔹 || `Cfg` || `effect_asset` || Special Effects Asset: Identifier for this Effect |
 * | 1 || 🔹 || `Ety` || `target_entity` || Target Entity: If the Entity does not exist, the Effect will not play |
 * | 2 || 🔹 || `Str` || `socket_name` || Attachment Point Name: If the Attachment Point Name does not exist, the Special Effect will not play |
 * | 3 || 🔹 || `Bol` || `follow_move` || Move With the Target: If set to True, follows the Target Entity's Motion |
 * | 4 || 🔹 || `Bol` || `follow_rotate` || Rotate With the Target: If set to True, follows the Target Entity's Rotation |
 * | 5 || 🔹 || `Vec` || `pos_offset` || Location Offset: Location Offset relative to the Target Entity's specified Attachment Point |
 * | 6 || 🔹 || `Vec` || `rot_offset` || Rotation Offset: Rotation offset relative to the Target Entity's specified Attachment Point |
 * | 7 || 🔹 || `Flt` || `scale` || Zoom Multiplier: The Zoom Multiplier of this Effect |
 * | 8 || 🔹 || `Bol` || `play_built_in_sfx` || Play Built-In Sound Effect: If set to True, plays the built-in Sound Effect as well |
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
 * **Mount Looping Special Effect** `(Execution.Special_Effect.Play_Loop)`
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
 * | 0 || 🔹 || `Cfg` || `effect_asset` || Special Effects Asset: Identifier for this Effect |
 * | 1 || 🔹 || `Ety` || `target_entity` || Target Entity: If the Entity does not exist, the Effect will not play |
 * | 2 || 🔹 || `Str` || `socket_name` || Attachment Point Name: If the Attachment Point Name does not exist, the Special Effect will not play |
 * | 3 || 🔹 || `Bol` || `follow_move` || Move With the Target: If set to True, follows the Target Entity's Motion |
 * | 4 || 🔹 || `Bol` || `follow_rotate` || Rotate With the Target: If set to True, follows the Target Entity's Rotation |
 * | 5 || 🔹 || `Vec` || `pos_offset` || Location Offset: Location Offset relative to the Target Entity's specified Attachment Point |
 * | 6 || 🔹 || `Vec` || `rot_offset` || Rotation Offset: Rotation offset relative to the Target Entity's specified Attachment Point |
 * | 7 || 🔹 || `Flt` || `scale` || Zoom Multiplier: The Zoom Multiplier of this Effect |
 * | 8 || 🔹 || `Bol` || `play_built_in_sfx` || Play Built-In Sound Effect |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Int` || `effect_instance_id_out` || Special Effect Instance ID: The Instance ID automatically generated when mounting this Effect |
 */
  Execution_SpecialEffect_PlayLoop: "Execution.Special_Effect.Play_Loop",

  /**
 * **Clear Looping Special Effect** `(Execution.Special_Effect.Stop_Loop)`
 *
 * - Clear the specified Looping Effect on the Target Entity by Effect Instance ID. After a successful mount, the [Mount Looping Effect] node generates an Effect Instance ID
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
 * | 0 || 🔹 || `Int` || `effect_instance_id` || Special Effect Instance ID: Instance ID automatically generated by the Mount Looping Special Effect node |
 * | 1 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
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
 * **Get Entity Location and Rotation** `(Query.Entity_Related.Get_Transform)`
 *
 * - Returns the Location and Rotation of the Target Entity
 * - Not applicable to Player Entities or Stage Entities
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `position` || Location |
 * | 1 || 🔸 || `Vec` || `rotation` || Rotate |
 */
  Query_EntityRelated_GetTransform: "Query.Entity_Related.Get_Transform",

  /**
 * **Concatenate List** `(Execution.List_Operation.Concatenate)`
 *
 * - Append the input List to the end of the Target List. For example, Target List [1, 2, 3] with input [4, 5] becomes [1, 2, 3, 4, 5] after execution
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
 * | 0 || 🔷 || **`L<R<T>>`** || `target_list` || Target List: List being input |
 * | 1 || 🔷 || **`L<R<T>>`** || `incoming_list` || Input List: The input list will be added to the end of the Target list |
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
 * **Clear List** `(Execution.List_Operation.Clear)`
 *
 * - Clear the specified List
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
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || List: List to be cleared |
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
 * **List Includes This Value** `(Query.List_Related.Contains)`
 *
 * - Returns whether the list contains the specified value
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
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || List |
 * | 1 || 🔷 || **`R<T>`** || `value` || Value |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || Include |
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
 * **Search List and Return Value ID** `(Query.List_Related.Find_Index)`
 *
 * - Find the specified value in the list and return a list of IDs where it appears
 * - For example, if the target list is {1,2,3,2,1} and the value is 1, the returned ID list is {0,4}, meaning 1 appears at IDs 0 and 4 in the target list
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
 * | 0 || 🔷 || **`L<R<T>>`** || `target_list` || Target List |
 * | 1 || 🔷 || **`R<T>`** || `value` || Value |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `index_list` || ID List: Returns an empty list if not found |
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
 * **Get Corresponding Value From List** `(Query.List_Related.Get_At_Index)`
 *
 * - Returns the value at the specified ID in the list (0-based)
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
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || List |
 * | 1 || 🔹 || `Int` || `index` || ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `value` || Value |
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
 * **Insert Value Into List** `(Execution.List_Operation.Insert)`
 *
 * - Insert a value at the specified ID Location in the specified List. The inserted value appears at that ID after insertion
 * - For example: Inserting 5 at ID 2 in the List [1, 2, 3, 4] results in [1, 2, 5, 3, 4] (5 appears at ID 2)
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
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || List: Reference to the list being inserted |
 * | 1 || 🔹 || `Int` || `index` || Insert ID: ID of the inserted value (after insertion) |
 * | 2 || 🔷 || **`R<T>`** || `value` || Insert Value: Value to be inserted |
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
 * **Get List Length** `(Query.List_Related.Get_Length)`
 *
 * - Returns the length of the list (number of elements)
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
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || List |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `length` || Length |
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
 * **Get Maximum Value from List** `(Query.List_Related.Get_Max)`
 *
 * - Applies only to Floating Point Number or Integer lists; returns the maximum value
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
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || List |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `max` || Maximum Value |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Query_ListRelated_GetMax: "Query.List_Related.Get_Max",

  /**
 * **Get Minimum Value From List** `(Query.List_Related.Get_Min)`
 *
 * - Applies only to Floating Point Number or Integer lists; returns the minimum value
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
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || List |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `min` || Minimum Value |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Query_ListRelated_GetMin: "Query.List_Related.Get_Min",

  /**
 * **Remove Value From List** `(Execution.List_Operation.Remove)`
 *
 * - Remove the value at the specified ID Location from the specified List. All subsequent values shift forward by one position
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
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || List: Reference to the list of values to remove |
 * | 1 || 🔹 || `Int` || `index` || Remove ID: ID to remove |
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
 * **Modify Value in List** `(Execution.List_Operation.Modify_Index)`
 *
 * - Edit the value at the specified ID Location in the specified List
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
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || List: Edited list reference |
 * | 1 || 🔹 || `Int` || `index` || ID: ID of edited value |
 * | 2 || 🔷 || **`R<T>`** || `value` || Value: Edited Value |
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
 * **List Sorting** `(Execution.List_Operation.Sort)`
 *
 * - Sort the specified List according to the chosen sort method
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
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || List: Integer List or Floating Point Number List |
 * | 1 || 🔹 || `E<SORT>` || `mode` || Sort By: Ascending or Descending |
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
 * **Assembly List** `(Arithmetic.General.Assemble_List)`
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
 * | 0 || 🔷 || **`R<T>`** || `Input1` || 0: Assembles up to 100 parameters into a list |
 * | 1 || 🔷 || **`R<T>`** || `Input2` || 1: Assembles up to 100 parameters into a list |
 * | 2 || 🔷 || **`R<T>`** || `Input3` || 2: Assembles up to 100 parameters into a list |
 * | 3 || 🔷 || **`R<T>`** || `Input4` || 3: Assembles up to 100 parameters into a list |
 * | 4 || 🔷 || **`R<T>`** || `Input5` || 4: Assembles up to 100 parameters into a list |
 * | 5 || 🔷 || **`R<T>`** || `Input6` || 5: Assembles up to 100 parameters into a list |
 * | 6 || 🔷 || **`R<T>`** || `Input7` || 6: Assembles up to 100 parameters into a list |
 * | 7 || 🔷 || **`R<T>`** || `Input8` || 7: Assembles up to 100 parameters into a list |
 * | 8 || 🔷 || **`R<T>`** || `Input9` || 8: Assembles up to 100 parameters into a list |
 * | 9 || 🔷 || **`R<T>`** || `Input10` || 9: Assembles up to 100 parameters into a list |
 * | 10 || 🔷 || **`R<T>`** || `Input11` || 10: Assembles up to 100 parameters into a list |
 * | 11 || 🔷 || **`R<T>`** || `Input12` || 11: Assembles up to 100 parameters into a list |
 * | 12 || 🔷 || **`R<T>`** || `Input13` || 12: Assembles up to 100 parameters into a list |
 * | 13 || 🔷 || **`R<T>`** || `Input14` || 13: Assembles up to 100 parameters into a list |
 * | 14 || 🔷 || **`R<T>`** || `Input15` || 14: Assembles up to 100 parameters into a list |
 * | 15 || 🔷 || **`R<T>`** || `Input16` || 15: Assembles up to 100 parameters into a list |
 * | 16 || 🔷 || **`R<T>`** || `Input17` || 16: Assembles up to 100 parameters into a list |
 * | 17 || 🔷 || **`R<T>`** || `Input18` || 17: Assembles up to 100 parameters into a list |
 * | 18 || 🔷 || **`R<T>`** || `Input19` || 18: Assembles up to 100 parameters into a list |
 * | 19 || 🔷 || **`R<T>`** || `Input20` || 19: Assembles up to 100 parameters into a list |
 * | 20 || 🔷 || **`R<T>`** || `Input21` || 20: Assembles up to 100 parameters into a list |
 * | 21 || 🔷 || **`R<T>`** || `Input22` || 21: Assembles up to 100 parameters into a list |
 * | 22 || 🔷 || **`R<T>`** || `Input23` || 22: Assembles up to 100 parameters into a list |
 * | 23 || 🔷 || **`R<T>`** || `Input24` || 23: Assembles up to 100 parameters into a list |
 * | 24 || 🔷 || **`R<T>`** || `Input25` || 24: Assembles up to 100 parameters into a list |
 * | 25 || 🔷 || **`R<T>`** || `Input26` || 25: Assembles up to 100 parameters into a list |
 * | 26 || 🔷 || **`R<T>`** || `Input27` || 26: Assembles up to 100 parameters into a list |
 * | 27 || 🔷 || **`R<T>`** || `Input28` || 27: Assembles up to 100 parameters into a list |
 * | 28 || 🔷 || **`R<T>`** || `Input29` || 28: Assembles up to 100 parameters into a list |
 * | 29 || 🔷 || **`R<T>`** || `Input30` || 29: Assembles up to 100 parameters into a list |
 * | 30 || 🔷 || **`R<T>`** || `Input31` || 30: Assembles up to 100 parameters into a list |
 * | 31 || 🔷 || **`R<T>`** || `Input32` || 31: Assembles up to 100 parameters into a list |
 * | 32 || 🔷 || **`R<T>`** || `Input33` || 32: Assembles up to 100 parameters into a list |
 * | 33 || 🔷 || **`R<T>`** || `Input34` || 33: Assembles up to 100 parameters into a list |
 * | 34 || 🔷 || **`R<T>`** || `Input35` || 34: Assembles up to 100 parameters into a list |
 * | 35 || 🔷 || **`R<T>`** || `Input36` || 35: Assembles up to 100 parameters into a list |
 * | 36 || 🔷 || **`R<T>`** || `Input37` || 36: Assembles up to 100 parameters into a list |
 * | 37 || 🔷 || **`R<T>`** || `Input38` || 37: Assembles up to 100 parameters into a list |
 * | 38 || 🔷 || **`R<T>`** || `Input39` || 38: Assembles up to 100 parameters into a list |
 * | 39 || 🔷 || **`R<T>`** || `Input40` || 39: Assembles up to 100 parameters into a list |
 * | 40 || 🔷 || **`R<T>`** || `Input41` || 40: Assembles up to 100 parameters into a list |
 * | 41 || 🔷 || **`R<T>`** || `Input42` || 41: Assembles up to 100 parameters into a list |
 * | 42 || 🔷 || **`R<T>`** || `Input43` || 42: Assembles up to 100 parameters into a list |
 * | 43 || 🔷 || **`R<T>`** || `Input44` || 43: Assembles up to 100 parameters into a list |
 * | 44 || 🔷 || **`R<T>`** || `Input45` || 44: Assembles up to 100 parameters into a list |
 * | 45 || 🔷 || **`R<T>`** || `Input46` || 45: Assembles up to 100 parameters into a list |
 * | 46 || 🔷 || **`R<T>`** || `Input47` || 46: Assembles up to 100 parameters into a list |
 * | 47 || 🔷 || **`R<T>`** || `Input48` || 47: Assembles up to 100 parameters into a list |
 * | 48 || 🔷 || **`R<T>`** || `Input49` || 48: Assembles up to 100 parameters into a list |
 * | 49 || 🔷 || **`R<T>`** || `Input50` || 49: Assembles up to 100 parameters into a list |
 * | 50 || 🔷 || **`R<T>`** || `Input51` || 50: Assembles up to 100 parameters into a list |
 * | 51 || 🔷 || **`R<T>`** || `Input52` || 51: Assembles up to 100 parameters into a list |
 * | 52 || 🔷 || **`R<T>`** || `Input53` || 52: Assembles up to 100 parameters into a list |
 * | 53 || 🔷 || **`R<T>`** || `Input54` || 53: Assembles up to 100 parameters into a list |
 * | 54 || 🔷 || **`R<T>`** || `Input55` || 54: Assembles up to 100 parameters into a list |
 * | 55 || 🔷 || **`R<T>`** || `Input56` || 55: Assembles up to 100 parameters into a list |
 * | 56 || 🔷 || **`R<T>`** || `Input57` || 56: Assembles up to 100 parameters into a list |
 * | 57 || 🔷 || **`R<T>`** || `Input58` || 57: Assembles up to 100 parameters into a list |
 * | 58 || 🔷 || **`R<T>`** || `Input59` || 58: Assembles up to 100 parameters into a list |
 * | 59 || 🔷 || **`R<T>`** || `Input60` || 59: Assembles up to 100 parameters into a list |
 * | 60 || 🔷 || **`R<T>`** || `Input61` || 60: Assembles up to 100 parameters into a list |
 * | 61 || 🔷 || **`R<T>`** || `Input62` || 61: Assembles up to 100 parameters into a list |
 * | 62 || 🔷 || **`R<T>`** || `Input63` || 62: Assembles up to 100 parameters into a list |
 * | 63 || 🔷 || **`R<T>`** || `Input64` || 63: Assembles up to 100 parameters into a list |
 * | 64 || 🔷 || **`R<T>`** || `Input65` || 64: Assembles up to 100 parameters into a list |
 * | 65 || 🔷 || **`R<T>`** || `Input66` || 65: Assembles up to 100 parameters into a list |
 * | 66 || 🔷 || **`R<T>`** || `Input67` || 66: Assembles up to 100 parameters into a list |
 * | 67 || 🔷 || **`R<T>`** || `Input68` || 67: Assembles up to 100 parameters into a list |
 * | 68 || 🔷 || **`R<T>`** || `Input69` || 68: Assembles up to 100 parameters into a list |
 * | 69 || 🔷 || **`R<T>`** || `Input70` || 69: Assembles up to 100 parameters into a list |
 * | 70 || 🔷 || **`R<T>`** || `Input71` || 70: Assembles up to 100 parameters into a list |
 * | 71 || 🔷 || **`R<T>`** || `Input72` || 71: Assembles up to 100 parameters into a list |
 * | 72 || 🔷 || **`R<T>`** || `Input73` || 72: Assembles up to 100 parameters into a list |
 * | 73 || 🔷 || **`R<T>`** || `Input74` || 73: Assembles up to 100 parameters into a list |
 * | 74 || 🔷 || **`R<T>`** || `Input75` || 74: Assembles up to 100 parameters into a list |
 * | 75 || 🔷 || **`R<T>`** || `Input76` || 75: Assembles up to 100 parameters into a list |
 * | 76 || 🔷 || **`R<T>`** || `Input77` || 76: Assembles up to 100 parameters into a list |
 * | 77 || 🔷 || **`R<T>`** || `Input78` || 77: Assembles up to 100 parameters into a list |
 * | 78 || 🔷 || **`R<T>`** || `Input79` || 78: Assembles up to 100 parameters into a list |
 * | 79 || 🔷 || **`R<T>`** || `Input80` || 79: Assembles up to 100 parameters into a list |
 * | 80 || 🔷 || **`R<T>`** || `Input81` || 80: Assembles up to 100 parameters into a list |
 * | 81 || 🔷 || **`R<T>`** || `Input82` || 81: Assembles up to 100 parameters into a list |
 * | 82 || 🔷 || **`R<T>`** || `Input83` || 82: Assembles up to 100 parameters into a list |
 * | 83 || 🔷 || **`R<T>`** || `Input84` || 83: Assembles up to 100 parameters into a list |
 * | 84 || 🔷 || **`R<T>`** || `Input85` || 84: Assembles up to 100 parameters into a list |
 * | 85 || 🔷 || **`R<T>`** || `Input86` || 85: Assembles up to 100 parameters into a list |
 * | 86 || 🔷 || **`R<T>`** || `Input87` || 86: Assembles up to 100 parameters into a list |
 * | 87 || 🔷 || **`R<T>`** || `Input88` || 87: Assembles up to 100 parameters into a list |
 * | 88 || 🔷 || **`R<T>`** || `Input89` || 88: Assembles up to 100 parameters into a list |
 * | 89 || 🔷 || **`R<T>`** || `Input90` || 89: Assembles up to 100 parameters into a list |
 * | 90 || 🔷 || **`R<T>`** || `Input91` || 90: Assembles up to 100 parameters into a list |
 * | 91 || 🔷 || **`R<T>`** || `Input92` || 91: Assembles up to 100 parameters into a list |
 * | 92 || 🔷 || **`R<T>`** || `Input93` || 92: Assembles up to 100 parameters into a list |
 * | 93 || 🔷 || **`R<T>`** || `Input94` || 93: Assembles up to 100 parameters into a list |
 * | 94 || 🔷 || **`R<T>`** || `Input95` || 94: Assembles up to 100 parameters into a list |
 * | 95 || 🔷 || **`R<T>`** || `Input96` || 95: Assembles up to 100 parameters into a list |
 * | 96 || 🔷 || **`R<T>`** || `Input97` || 96: Assembles up to 100 parameters into a list |
 * | 97 || 🔷 || **`R<T>`** || `Input98` || 97: Assembles up to 100 parameters into a list |
 * | 98 || 🔷 || **`R<T>`** || `Input99` || 98: Assembles up to 100 parameters into a list |
 * | 99 || 🔷 || **`R<T>`** || `Input100` || 99: Assembles up to 100 parameters into a list |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`L<R<T>>`** || `list` || list: The assembled list |
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
 * **When Path Reaches Waypoint** `(Trigger.Motion_Device.On_Reach_Waypoint)`
 *
 * - When the Pathing Motion Device reaches a Waypoint, it sends this event to the Owner of the Basic Motion Device Component. This event is triggered only if "Send Event on Waypoint Arrival" is enabled in the Waypoint settings
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity: Component Owner |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Str` || `device_name` || Motion Device Name |
 * | 3 || 🔸 || `Int` || `path_id` || Path Point ID |
 */
  Trigger_MotionDevice_OnReachWaypoint: "Trigger.Motion_Device.On_Reach_Waypoint",

  /**
 * **Activate/Disable Entity Deployment Group** `(Execution.Entity_Deployment.Set_Group_State)`
 *
 * - Edit the Initial Creation Switch state of the Entity Layout Group
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
 * | 0 || 🔹 || `Int` || `group_index` || Entity Deployment Group Index |
 * | 1 || 🔹 || `Bol` || `should_activate` || Activate: If set to True, the Entity Layout Group's Initial Creation switch is enabled |
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
 * **Get Currently Active Entity Deployment Groups** `(Query.Entity_Layout.Get_Active_Groups)`
 *
 * - Searches the list of Entity Layout Groups currently active in the Stage
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
 * | 0 || 🔸 || `L<Int>` || `group_index_list` || Entity Deployment Group Index List |
 */
  Query_EntityLayout_GetActiveGroups: "Query.Entity_Layout.Get_Active_Groups",

  /**
 * **Data Type Conversion** `(Arithmetic.General.Convert_Type)`
 *
 * - Converts input parameter types to another type for output. For specific rules, see [Basic Concepts](https://act.mihoyo.com/ys/ugc/tutorial//detail/mhk23ora1wom) - [Conversion Rules Between Basic Data Types]
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
 * | 0 || 🔷 || **`R<K>`** || `input` || Input |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<V>`** || `output` || Output |
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
 * **Forwarding Event** `(Execution.Common_Node.Forward_Event)`
 *
 * - Forwards the source event of this Node's Execution Flow to the specified Target Entity. The event with the same name on the Target Entity's Node Graph will be triggered
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Target entity being forwarded |
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
 * **Pi (π)** `(Query.Math.Pi)`
 *
 * - Returns the approximate value of π (≈ 3.142)
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
 * | 0 || 🔸 || `Flt` || `pi` || Pi (π) |
 */
  Query_Math_Pi: "Query.Math.Pi",

  /**
 * **3D Vector: Zero Vector** `(Query.Math.Vector_Zero)`
 *
 * - Return (0,0,0)
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
 * **3D Vector: Up** `(Query.Math.Vector_Up)`
 *
 * - Return (0,1,0)
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
 * **3D Vector: Down** `(Query.Math.Vector_Down)`
 *
 * - Return (0,-1,0)
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
 * **3D Vector: Left** `(Query.Math.Vector_Left)`
 *
 * - Return (-1,0,0)
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
 * **3D Vector: Right** `(Query.Math.Vector_Right)`
 *
 * - Return (1,0,0)
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
 * **3D Vector: Forward** `(Query.Math.Vector_Forward)`
 *
 * - Return (0,0,1)
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
 * **3D Vector: Backward** `(Query.Math.Vector_Backward)`
 *
 * - Return (0,0,-1)
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
 * **Addition** `(Arithmetic.Math.Add)`
 *
 * - Adds two Floating Point Numbers or Integers
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
 * | 0 || 🔶 || **`R<T>`** || `result` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Add: "Arithmetic.Math.Add",

  /**
 * **Subtraction** `(Arithmetic.Math.Subtract)`
 *
 * - Subtracts two Floating Point Numbers or Integers
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
 * | 0 || 🔶 || **`R<T>`** || `result` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Subtract: "Arithmetic.Math.Subtract",

  /**
 * **Multiplication** `(Arithmetic.Math.Multiply)`
 *
 * - Performs multiplication, supporting Floating Point and Integer multiplication
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
 * | 0 || 🔶 || **`R<T>`** || `result` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Multiply: "Arithmetic.Math.Multiply",

  /**
 * **Division** `(Arithmetic.Math.Divide)`
 *
 * - Performs division, supporting Floating Point division and Integer division. Integer division returns the quotient result
 * - The divisor should not be 0, otherwise it may return an illegal value
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
 * | 0 || 🔶 || **`R<T>`** || `result` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Divide: "Arithmetic.Math.Divide",

  /**
 * **Modulo Operation** `(Arithmetic.Math.Modulo)`
 *
 * - Returns the modulus of Input 2 and Input 1
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
 * | 0 || 🔸 || `Int` || `result` || Result |
 */
  Arithmetic_Math_Modulo: "Arithmetic.Math.Modulo",

  /**
 * **Exponentiation** `(Arithmetic.Math.Power)`
 *
 * - Raises the base to the given exponent and returns the result
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
 * | 0 || 🔷 || **`R<T>`** || `base` || Base |
 * | 1 || 🔷 || **`R<T>`** || `exp` || Exponent |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Power: "Arithmetic.Math.Power",

  /**
 * **Take Larger Value** `(Arithmetic.Math.Max)`
 *
 * - Returns the larger of two inputs
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
 * | 0 || 🔷 || **`R<T>`** || `a` || Input 1 |
 * | 1 || 🔷 || **`R<T>`** || `b` || Input 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `max` || Larger Value |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Max: "Arithmetic.Math.Max",

  /**
 * **Take Smaller Value** `(Arithmetic.Math.Min)`
 *
 * - Returns the smaller of two inputs
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
 * | 0 || 🔷 || **`R<T>`** || `a` || Input 1 |
 * | 1 || 🔷 || **`R<T>`** || `b` || Input 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `min` || Smaller Value |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Min: "Arithmetic.Math.Min",

  /**
 * **Logarithm Operation** `(Arithmetic.Math.Log)`
 *
 * - Calculates the logarithm of the argument with the specified base
 * - The base should not be negative or equal to 1, and the argument should not be negative, otherwise illegal values may be generated
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
 * | 0 || 🔹 || `Flt` || `Input0` || Real Number |
 * | 1 || 🔹 || `Flt` || `Input1` || Base |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || Result |
 */
  Arithmetic_Math_Log: "Arithmetic.Math.Log",

  /**
 * **Absolute Value Operation** `(Arithmetic.Math.Abs)`
 *
 * - Returns the absolute value of the input
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
 * | 0 || 🔷 || **`R<T>`** || `input` || Input |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Abs: "Arithmetic.Math.Abs",

  /**
 * **Sign Operation** `(Arithmetic.Math.Sign)`
 *
 * - When the input is positive, returns 1
 * - When the input is negative, returns -1
 * - When the input is 0, returns 0
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
 * | 0 || 🔷 || **`R<T>`** || `input` || Input |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Sign: "Arithmetic.Math.Sign",

  /**
 * **3D Vector Modulo Operation** `(Arithmetic.Math.Vector_Length)`
 *
 * - Calculates the magnitude of the input 3D Vector
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
 * | 0 || 🔹 || `Vec` || `v` || 3D Vector |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || Result |
 */
  Arithmetic_Math_VectorLength: "Arithmetic.Math.Vector_Length",

  /**
 * **Arithmetic Square Root Operation** `(Arithmetic.Math.Sqrt)`
 *
 * - Returns the arithmetic square root of the input value
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
 * | 0 || 🔹 || `Flt` || `input` || Input |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || Result |
 */
  Arithmetic_Math_Sqrt: "Arithmetic.Math.Sqrt",

  /**
 * **Range Limiting Operation** `(Arithmetic.Math.Clamp)`
 *
 * - Clamps the input value to the range [lower limit, upper limit] (both bounds inclusive) and outputs the result
 * - If the input falls within [lower limit, upper limit], returns the original value
 * - If the input is below the lower limit, returns the lower limit; if it exceeds the upper limit, returns the upper limit
 * - If the lower limit is greater than the upper limit, treats the input as invalid and returns an illegal value
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
 * | 0 || 🔷 || **`R<T>`** || `input` || Input |
 * | 1 || 🔷 || **`R<T>`** || `min` || Lower Limit |
 * | 2 || 🔷 || **`R<T>`** || `max` || Upper Limit |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_Clamp: "Arithmetic.Math.Clamp",

  /**
 * **Round to Integer Operation** `(Arithmetic.Math.Round)`
 *
 * - Performs a rounding operation based on the rounding method and returns the rounded positive number
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
 * | 0 || 🔹 || `Flt` || `input` || Input |
 * | 1 || 🔹 || `E<ROND>` || `mode` || Rounding Mode: Round: Rounds to the nearest integer according to standard rules<br>Round Up: Returns the smallest integer greater than the input value. For example: input 1.2 → 2; input −2.3 → −2<br>Round Down: Returns the largest integer smaller than the input value. For example: input 1.2 → 1; input −2.3 → −3<br>Truncate: Removes the decimal part of the floating point number (rounds toward zero). For example: input 1.2 → 1; input −2.3 → −2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || Result |
 */
  Arithmetic_Math_Round: "Arithmetic.Math.Round",

  /**
 * **Create 3D Vector** `(Arithmetic.Math.Create_Vector)`
 *
 * - Creates a 3D Vector from x, y, and z components
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
 * | 0 || 🔹 || `Flt` || `x` || X-Component |
 * | 1 || 🔹 || `Flt` || `y` || Y-Component |
 * | 2 || 🔹 || `Flt` || `z` || Z-Component |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `vector` || 3D Vector |
 */
  Arithmetic_Math_CreateVector: "Arithmetic.Math.Create_Vector",

  /**
 * **Logical AND Operation** `(Arithmetic.Math.And)`
 *
 * - Performs a logical AND operation on the two input Boolean values and returns the result
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
 * | 0 || 🔹 || `Bol` || `a` || Input 1 |
 * | 1 || 🔹 || `Bol` || `b` || Input 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || Result |
 */
  Arithmetic_Math_And: "Arithmetic.Math.And",

  /**
 * **Logical OR Operation** `(Arithmetic.Math.Or)`
 *
 * - Performs a logical OR operation on the two input Boolean values and returns the result
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
 * | 0 || 🔹 || `Bol` || `a` || Input 1 |
 * | 1 || 🔹 || `Bol` || `b` || Input 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || Result |
 */
  Arithmetic_Math_Or: "Arithmetic.Math.Or",

  /**
 * **Logical XOR Operation** `(Arithmetic.Math.Xor)`
 *
 * - Performs a logical XOR operation on the two input Boolean values and returns the result
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
 * | 0 || 🔹 || `Bol` || `a` || Input 1 |
 * | 1 || 🔹 || `Bol` || `b` || Input 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || Result |
 */
  Arithmetic_Math_Xor: "Arithmetic.Math.Xor",

  /**
 * **Logical NOT Operation** `(Arithmetic.Math.Not)`
 *
 * - Performs a logical NOT operation on the input Boolean value and returns the result
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
 * | 0 || 🔹 || `Bol` || `input` || Input |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || Result |
 */
  Arithmetic_Math_Not: "Arithmetic.Math.Not",

  /**
 * **Less Than** `(Arithmetic.Math.Less_Than)`
 *
 * - Returns whether the left value is less than the right value
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
 * | 0 || 🔷 || **`R<T>`** || `a` || Left Value |
 * | 1 || 🔷 || **`R<T>`** || `b` || Right Value |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `ok` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_LessThan: "Arithmetic.Math.Less_Than",

  /**
 * **Less Than or Equal To** `(Arithmetic.Math.Less_Equal)`
 *
 * - Returns whether the left value is less than or equal to the right value
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
 * | 0 || 🔷 || **`R<T>`** || `a` || Left Value |
 * | 1 || 🔷 || **`R<T>`** || `b` || Right Value |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `ok` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_LessEqual: "Arithmetic.Math.Less_Equal",

  /**
 * **Greater Than** `(Arithmetic.Math.Greater_Than)`
 *
 * - Returns whether the left value is greater than the right value
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
 * | 0 || 🔷 || **`R<T>`** || `a` || Left Value |
 * | 1 || 🔷 || **`R<T>`** || `b` || Right Value |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `ok` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_GreaterThan: "Arithmetic.Math.Greater_Than",

  /**
 * **Greater Than or Equal To** `(Arithmetic.Math.Greater_Equal)`
 *
 * - Returns whether the left value is greater than or equal to the right value
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
 * | 0 || 🔷 || **`R<T>`** || `a` || Left Value |
 * | 1 || 🔷 || **`R<T>`** || `b` || Right Value |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `ok` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_Math_GreaterEqual: "Arithmetic.Math.Greater_Equal",

  /**
 * **Activate/Disable Native Collision** `(Execution.Collision.Set_Native_Collision)`
 *
 * - Edit the Entity's Native Collision
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Bol` || `should_activate` || Activate: Set to True to activate |
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
 * **Activate/Disable Native Collision Climbability** `(Execution.Collision.Set_Native_Climb)`
 *
 * - Edit the Climbability of the Entity's Native Collision
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Bol` || `should_activate` || Activate: Set to True to activate |
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
 * **Activate/Disable Extra Collision** `(Execution.Collision.Set_Extra_Collision)`
 *
 * - Edit data in the Entity's Extra Collision Component to enable/disable Extra Collision
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Int` || `extra_collision_index` || Extra Collision ID: Identifier for this Extra Collision |
 * | 2 || 🔹 || `Bol` || `should_activate` || Activate: Set to True to activate |
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
 * **Activate/Disable Extra Collision Climbability** `(Execution.Collision.Set_Extra_Climb)`
 *
 * - Edit the Climbability of the Entity's Extra Collision Component
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Int` || `extra_collision_index` || Extra Collision ID: Identifier for this Extra Collision |
 * | 2 || 🔹 || `Bol` || `should_activate` || Activate: Set to True to activate |
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
 * **Distance Between Two Coordinate Points** `(Arithmetic.Math.Distance)`
 *
 * - Calculates the Euclidean distance between two coordinates
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
 * | 0 || 🔹 || `Vec` || `p1` || Coordinate Point 1 |
 * | 1 || 🔹 || `Vec` || `p2` || Coordinate Point 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `distance` || Distance |
 */
  Arithmetic_Math_Distance: "Arithmetic.Math.Distance",

  /**
 * **Switch Follow Motion Device Target by GUID** `(Execution.Follow_Motion.Set_Target_GUID)`
 *
 * - Switch the Follow Target of the Follow Motion Device by GUID
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Gid` || `follow_guid` || Follow Target GUID: Identifier for the Follow Target |
 * | 2 || 🔹 || `Str` || `socket_name` || Follow Target Attachment Point Name: Name of the Attachment Point to follow |
 * | 3 || 🔹 || `Vec` || `pos_offset` || Location Offset: Location Offset based on the Follow Coordinate System |
 * | 4 || 🔹 || `Vec` || `rot_offset` || Rotation Offset: Rotation Offset based on the Follow Coordinate System |
 * | 5 || 🔹 || `E<SYSC>` || `coord_sys` || Follow Coordinate System: Options: Relative Coordinate System or World Coordinate System |
 * | 6 || 🔹 || `E<FOLO>` || `follow_type` || Follow Type: Options: Completely Follow, Follow Location, Follow Rotation |
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
 * **Get Follow Motion Device Target** `(Query.Follow_Motion.Get_Target)`
 *
 * - Returns the Target of the Follow Motion Device, including the Target Entity and its GUID
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
 * | 0 || 🔹 || `Ety` || `follower` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `target_entity` || Follow Target Entity |
 * | 1 || 🔸 || `Gid` || `target_guid` || Follow Target GUID |
 */
  Query_FollowMotion_GetTarget: "Query.Follow_Motion.Get_Target",

  /**
 * **Get List of Player Entities on the Field** `(Query.Character_Related.Get_All_Players)`
 *
 * - Returns a list of all Player Entities present in the scene
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
 * | 0 || 🔸 || `L<Ety>` || `players` || Player Entity List |
 */
  Query_CharacterRelated_GetAllPlayers: "Query.Character_Related.Get_All_Players",

  /**
 * **Query Entity Faction** `(Query.Faction_Related.Get_Faction)`
 *
 * - Searches the Faction of the specified Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Fct` || `camp` || Faction |
 */
  Query_FactionRelated_GetFaction: "Query.Faction_Related.Get_Faction",

  /**
 * **Modify Entity Faction** `(Execution.Faction_Related.Set_Faction)`
 *
 * - Edit the Faction of the specified Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Entity whose faction is to be edited |
 * | 1 || 🔹 || `Fct` || `faction` || Faction: Edited Faction |
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
 * **When Entity Faction Changes** `(Trigger.Faction_Related.On_Faction_Change)`
 *
 * - This event is triggered when an Entity's Faction changes
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Fct` || `old_camp` || Pre-Change Faction |
 * | 3 || 🔸 || `Fct` || `new_camp` || Post-Change Faction |
 */
  Trigger_FactionRelated_OnFactionChange: "Trigger.Faction_Related.On_Faction_Change",

  /**
 * **Create Prefab** `(Execution.Entity_Related.Create_Prefab)`
 *
 * - Create an Entity by Prefab ID
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
 * | 0 || 🔹 || `Pfb` || `component_id` || Prefab ID: Identifier for this Prefab |
 * | 1 || 🔹 || `Vec` || `position` || Location: Absolute Location |
 * | 2 || 🔹 || `Vec` || `rotation` || Rotate: Absolute Rotation |
 * | 3 || 🔹 || `Ety` || `owner_entity` || Owner Entity: Determines whether the created entity belongs to another entity |
 * | 4 || 🔹 || `Bol` || `override_level` || Overwrite Level: When set to False, the [Level] parameter has no effect |
 * | 5 || 🔹 || `Int` || `level` || Level: Determines the Level when the entity is created |
 * | 6 || 🔹 || `L<Int>` || `unit_tag_indexes` || Unit Tag Index List: Determines the Unit Tags carried when this entity is created |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `created_entity` || Created Entity: Entities created in this way do not have a GUID |
 */
  Execution_EntityRelated_CreatePrefab: "Execution.Entity_Related.Create_Prefab",

  /**
 * **When On-Hit Detection Is Triggered** `(Trigger.Hit_Detection.On_Hit_Detected)`
 *
 * - This event is triggered when the On-Hit Detection Component's Owner hits other Entities or the Scene
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Bol` || `hit_hurtbox` || On-Hit Hurtbox: If set to False: The environment was hit<br>If set to True: An Entity was hit. Retrieve values from the Hit Entity output parameter |
 * | 3 || 🔸 || `Ety` || `hit_entity` || On-Hit Entity: Hit Entity is only valid when a Hurtbox is hit |
 * | 4 || 🔸 || `Vec` || `hit_position` || On-Hit Location |
 */
  Trigger_HitDetection_OnHitDetected: "Trigger.Hit_Detection.On_Hit_Detected",

  /**
 * **Create Projectile** `(Execution.Projectile.Create)`
 *
 * - Create a Projectile Entity using the Prefab ID. This function is similar to [Create Prefab], but includes an additional [Track Target] parameter, which sets the tracking target for projectiles of the Tracking type in the Projectile Motion Device Component of the created Entity
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
 * | 0 || 🔹 || `Pfb` || `component_id` || Prefab ID: Identifier for this Projectile Prefab |
 * | 1 || 🔹 || `Vec` || `position` || Location: Absolute Location |
 * | 2 || 🔹 || `Vec` || `rotation` || Rotate: Absolute Rotation |
 * | 3 || 🔹 || `Ety` || `owner_entity` || Owner Entity: Determines whether the created entity belongs to another entity |
 * | 4 || 🔹 || `Ety` || `track_target` || Track Target: The Tracking Target set by the Tracking Projectile type in the Projectile Motion Device component |
 * | 5 || 🔹 || `Bol` || `override_level` || Overwrite Level: When set to False, the [Level] parameter has no effect |
 * | 6 || 🔹 || `Int` || `level` || Level: Determines the Level when the entity is created |
 * | 7 || 🔹 || `L<Int>` || `unit_tag_indexes` || Unit Tag Index List: Determines the Unit Tags carried when this entity is created |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Ety` || `created_entity` || Created Entity: This Entity inherits the attributes of the Projectile Prefab |
 */
  Execution_Projectile_Create: "Execution.Projectile.Create",

  /**
 * **Get Random Integer** `(Query.Math.Random_Int)`
 *
 * - Returns a random Integer that is ≥ the lower limit and ≤ the upper limit. The range is inclusive
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
 * | 0 || 🔹 || `Int` || `lower` || Lower Limit |
 * | 1 || 🔹 || `Int` || `upper` || Upper Limit |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || Result |
 */
  Query_Math_RandomInt: "Query.Math.Random_Int",

  /**
 * **Get All Character Entities of Specified Player** `(Query.Character_Related.Get_Player_Characters)`
 *
 * - Returns a list of all Character Entities for the specified Player Entity
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
 * | 0 || 🔹 || `Ety` || `player` || Player Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `characters` || Character Entity List |
 */
  Query_CharacterRelated_GetPlayerCharacters: "Query.Character_Related.Get_Player_Characters",

  /**
 * **Get Player Entity to Which the Character Belongs** `(Query.Character_Related.Get_Owner_Player)`
 *
 * - Returns the Player Entity that owns the Character Entity
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
 * | 0 || 🔹 || `Ety` || `character` || Character Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `owner` || Affiliated Player Entity |
 */
  Query_CharacterRelated_GetOwnerPlayer: "Query.Character_Related.Get_Owner_Player",

  /**
 * **Get Entity Type** `(Query.Entity_Related.Get_Type)`
 *
 * - Returns the Entity Type of the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `E<ENTY>` || `entity_type` || Entity Type: Includes Player, Character, Stage, Object, Creation. |
 */
  Query_EntityRelated_GetType: "Query.Entity_Related.Get_Type",

  /**
 * **Switch Main Camera Template** `(Execution.Camera.Switch_Template)`
 *
 * - Switch the Main Camera Template for the target Player List to the specified Template
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
 * | 0 || 🔹 || `L<Ety>` || `target_players` || Target Player List: Active Player List |
 * | 1 || 🔹 || `Str` || `template_name` || Camera Template Name: Camera Template Identifier |
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
 * **Activate Basic Motion Device** `(Execution.Motion_Device.Activate)`
 *
 * - Activate a Basic Motion Device configured within the Target Entity's Basic Motion Device Component
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Str` || `mover_name` || Motion Device Name: Identifier for this motion device |
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
 * **Query Preset Point Position Rotation** `(Query.Preset_Point.Get_Transform)`
 *
 * - Searches the Location and Rotation of the specified Preset Point
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
 * | 0 || 🔹 || `Int` || `point_index` || Point Index |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `position` || Location |
 * | 1 || 🔸 || `Vec` || `rotation` || Rotate |
 */
  Query_PresetPoint_GetTransform: "Query.Preset_Point.Get_Transform",

  /**
 * **Get Preset Point List by Unit Tag** `(Query.Preset_Point.Get_By_Tag)`
 *
 * - Searches all Preset Points that carry the Unit Tag by its ID; outputs each Preset Point's ID
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
 * | 0 || 🔹 || `Int` || `unit_tag_index` || Unit Tag ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `index_list` || Point Index List |
 */
  Query_PresetPoint_GetByTag: "Query.Preset_Point.Get_By_Tag",

  /**
 * **Activate Revive Point** `(Execution.Character_Related.Activate_Revive_Point)`
 *
 * - Activate the specified Revive Point ID for the player. When the player later triggers Revive logic, they can revive at this Revive Point
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
 * | 0 || 🔹 || `Ety` || `player_entity` || Player Entity: Active Player |
 * | 1 || 🔹 || `Int` || `revive_point_index` || Revive Point ID: Identifier for this Revive Point |
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
 * **Deactivate Revive Point** `(Execution.Character_Related.Deactivate_Revive_Point)`
 *
 * - Unregister the specified Revive Point ID for the player. The layer will not revive at this Revive Point next time
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
 * | 0 || 🔹 || `Ety` || `player_entity` || Player Entity: Active Player |
 * | 1 || 🔹 || `Int` || `revive_point_index` || Revive Point ID: Identifier for this Revive Point |
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
 * **Allow/Forbid Player to Revive** `(Execution.Character_Related.Set_Revive_Allowed)`
 *
 * - Set whether the specified player is allowed to revive
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
 * | 0 || 🔹 || `Ety` || `player_entity` || Player Entity: Active Player |
 * | 1 || 🔹 || `Bol` || `allow_revive` || Allow: If set to True, reviving is allowed |
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
 * **Get Player Remaining Revives** `(Query.Character_Related.Get_Revives)`
 *
 * - Returns the remaining number of revives for the specified Player Entity
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
 * | 0 || 🔹 || `Ety` || `player` || Player Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `count` || Remaining Times |
 */
  Query_CharacterRelated_GetRevives: "Query.Character_Related.Get_Revives",

  /**
 * **Set Player Remaining Revives** `(Execution.Character_Related.Set_Revive_Count)`
 *
 * - Set the remaining number of revives for the specified Player. When set to 0, the Player cannot revive
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
 * | 0 || 🔹 || `Ety` || `player_entity` || Player Entity: Active Player |
 * | 1 || 🔹 || `Int` || `remaining_count` || Remaining Times: When set to 0, the player will not be revived |
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
 * **Get Player Revive Time** `(Query.Character_Related.Get_Revive_Time)`
 *
 * - Returns the revive duration of the specified Player Entity, in seconds
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
 * | 0 || 🔹 || `Ety` || `player` || Player Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `duration` || Duration |
 */
  Query_CharacterRelated_GetReviveTime: "Query.Character_Related.Get_Revive_Time",

  /**
 * **Set Player Revive Time** `(Execution.Character_Related.Set_Revive_Time)`
 *
 * - Set the duration for the Player's next revive. If the Player is currently reviving, this does not affect the ongoing revive process
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
 * | 0 || 🔹 || `Ety` || `player_entity` || Player Entity: Active Player |
 * | 1 || 🔹 || `Int` || `duration` || Duration: Unit in seconds |
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
 * **Revive Character** `(Execution.Character_Related.Revive_Single)`
 *
 * - Revive the specified Character Entity
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
 * | 0 || 🔹 || `Ety` || `character_entity` || Character Entity: The Character Entity to be revived |
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
 * **When the Character Is Down** `(Trigger.Character_Related.On_Character_Down)`
 *
 * - When a Character is Downed, the Node Graph on the Character Entity can trigger this event
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
 * | 0 || 🔸 || `Ety` || `character_entity` || Character Entity |
 * | 1 || 🔸 || `E<DWNR>` || `reason` || Reason: Node Graph caused: the Character was Downed by the Destroy Entity node in the Node Graph<br>Normal Down: the Character was Downed because HP reached 0<br>Abnormal Down: the character was downed due to drowning, falling into an abyss, etc. |
 * | 2 || 🔸 || `Ety` || `attacker_entity` || Knockdown Entity |
 */
  Trigger_CharacterRelated_OnCharacterDown: "Trigger.Character_Related.On_Character_Down",

  /**
 * **When Character Revives** `(Trigger.Character_Related.On_Character_Revive)`
 *
 * - When a Character is Revived, the Node Graph on the Character Entity can trigger this event
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
 * | 0 || 🔸 || `Ety` || `character_entity` || Character Entity |
 */
  Trigger_CharacterRelated_OnCharacterRevive: "Trigger.Character_Related.On_Character_Revive",

  /**
 * **Defeat All Player's Characters** `(Execution.Character_Related.Defeat_All)`
 *
 * - Knock down all characters of the specified player, causing the player to enter _When All Player's Characters Are Down_ _state_.
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
 * | 0 || 🔹 || `Ety` || `player_entity` || Player Entity: The Player Entity that owns the Character |
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
 * **Revive All Player's Characters** `(Execution.Character_Related.Revive_All)`
 *
 * - Revive all Character Entities of the specified player. In Beyond Mode, since each player has only one character, this is equivalent to [Revive Character]
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
 * | 0 || 🔹 || `Ety` || `Input0` || Player Entity: The Player Entity that owns the Character |
 * | 1 || 🔹 || `Bol` || `Input1` || Deduct Revives: If set to False, the Revive Count will not be deducted |
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
 * **When All Player's Characters Are Down** `(Trigger.Character_Related.On_All_Down)`
 *
 * - This event is triggered on the Player Entity's Node Graph when all of the Player's Character Entities are Downed
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
 * | 0 || 🔸 || `Ety` || `player_entity` || Player Entity |
 * | 1 || 🔸 || `E<DWNR>` || `reason` || Reason: Node Graph caused: the Character was Downed by the Destroy Entity node in the Node Graph<br>Normal Down: the Character was Downed because HP reached 0<br>Abnormal Down: the character was downed due to drowning, falling into an abyss, etc. |
 */
  Trigger_CharacterRelated_OnAllDown: "Trigger.Character_Related.On_All_Down",

  /**
 * **When Player Is Abnormally Downed and Revives** `(Trigger.Character_Related.On_Abnormal_Revive)`
 *
 * - This event is triggered on the Player Entity when a Character is Downed and then Revived due to drowning, falling into an abyss, or similar reasons
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
 * | 0 || 🔸 || `Ety` || `player_entity` || Player Entity |
 */
  Trigger_CharacterRelated_OnAbnormalRevive: "Trigger.Character_Related.On_Abnormal_Revive",

  /**
 * **When All Player's Characters Are Revived** `(Trigger.Character_Related.On_All_Revived)`
 *
 * - This event is triggered on the Player Entity's Node Graph when all of the Player's Characters are Revived
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
 * | 0 || 🔸 || `Ety` || `player_entity` || Player Entity |
 */
  Trigger_CharacterRelated_OnAllRevived: "Trigger.Character_Related.On_All_Revived",

  /**
 * **Query If All Player Characters Are Down** `(Query.Character_Related.Is_All_Down)`
 *
 * - Check if all of the player's characters are downed
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
 * | 0 || 🔹 || `Ety` || `player` || Player Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || Result |
 */
  Query_CharacterRelated_IsAllDown: "Query.Character_Related.Is_All_Down",

  /**
 * **Teleport Player** `(Execution.Character_Related.Teleport)`
 *
 * - Teleport the specified Player Entity. A loading interface may appear depending on teleport distance
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
 * | 0 || 🔹 || `Ety` || `player_entity` || Player Entity: Active Player |
 * | 1 || 🔹 || `Vec` || `target_position` || Target Location: Absolute Location |
 * | 2 || 🔹 || `Vec` || `target_rotation` || Target Rotation: Absolute Rotation |
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
 * **When Player Teleport Completes** `(Trigger.Character_Related.On_Teleport_Complete)`
 *
 * - This event is triggered on the Player Entity's Node Graph when the Player completes teleportation
 * - This event is also triggered when a Player enters a Stage for the first time
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
 * | 0 || 🔸 || `Ety` || `player_entity` || Player Entity |
 * | 1 || 🔸 || `Gid` || `player_guid` || Player GUID |
 */
  Trigger_CharacterRelated_OnTeleportComplete: "Trigger.Character_Related.On_Teleport_Complete",

  /**
 * **Query Game Time Elapsed** `(Query.Stage_Related.Get_Elapsed_Time)`
 *
 * - Searches how long the game has been running, in seconds
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
 * | 0 || 🔸 || `Int` || `elapsed` || Game Time Elapsed |
 */
  Query_StageRelated_GetElapsedTime: "Query.Stage_Related.Get_Elapsed_Time",

  /**
 * **Sine Function** `(Arithmetic.Math.Sin)`
 *
 * - Calculates the sine of the input in radians
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
 * | 0 || 🔹 || `Flt` || `radians` || Radian |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || Result |
 */
  Arithmetic_Math_Sin: "Arithmetic.Math.Sin",

  /**
 * **Cosine Function** `(Arithmetic.Math.Cos)`
 *
 * - Calculates the cosine of the input in radians
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
 * | 0 || 🔹 || `Flt` || `radians` || Radian |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || Result |
 */
  Arithmetic_Math_Cos: "Arithmetic.Math.Cos",

  /**
 * **Tangent Function** `(Arithmetic.Math.Tan)`
 *
 * - Calculates the tangent of the input in radians
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
 * | 0 || 🔹 || `Flt` || `radians` || Radian |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || Result |
 */
  Arithmetic_Math_Tan: "Arithmetic.Math.Tan",

  /**
 * **Arcsine Function** `(Arithmetic.Math.Asin)`
 *
 * - Calculates the arcsine of the input and returns the value in radians
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
 * | 0 || 🔹 || `Flt` || `input` || Input |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `radians` || Radian |
 */
  Arithmetic_Math_Asin: "Arithmetic.Math.Asin",

  /**
 * **Arccosine Function** `(Arithmetic.Math.Acos)`
 *
 * - Calculates the arccosine of the input and returns the value in radians
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
 * | 0 || 🔹 || `Flt` || `input` || Input |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `radians` || Radian |
 */
  Arithmetic_Math_Acos: "Arithmetic.Math.Acos",

  /**
 * **Arctangent Function** `(Arithmetic.Math.Atan)`
 *
 * - Calculates the arctangent of the input and returns the value in radians
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
 * | 0 || 🔹 || `Flt` || `input` || Input |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `radians` || Radian |
 */
  Arithmetic_Math_Atan: "Arithmetic.Math.Atan",

  /**
 * **Add Unit Status** `(Execution.Unit_Status.Add_Status)`
 *
 * - Add a specified Stack Count of Unit Status to the Target Entity
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
 * | 0 || 🔹 || `Ety` || `applier` || Applier Entity: Determines the Applier Entity for this action. Defaults to the Entity associated with this Node Graph |
 * | 1 || 🔹 || `Ety` || `target` || Application Target Entity: The Entity that actually receives this Unit Status |
 * | 2 || 🔹 || `Cfg` || `state_config_id` || Unit Status Config ID: Identifier for this Unit Status |
 * | 3 || 🔹 || `Int` || `stacks` || Applied Stacks: The Stack Count for this Unit Status |
 * | 4 || 🔹 || `D<Str,Flt>` || `params_dict` || Unit Status Parameter Dictionary: Can carry a set of parameters to overwrite parameters defined in the Unit Status. Currently, only parameters within shield templates can be overwritten. |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `E<STAD>` || `apply_result` || Application Result: Failed, other exceptions<br>Failed: Yielded to another status. A yielding relationship exists between the Target's current Unit Status and the one being applied<br>Failed: Maximum coexistence limit reached. The specified Unit Status on the Target Entity has reached its Coexistence Limit<br>Failed: Unable to add additional stack. Stack addition failed<br>Success: New status applied. Successfully applied new Unit Status<br>Success: Slot stacking. Target already has this Unit Status, stacking applied |
 * | 1 || 🔸 || `Int` || `slot_index` || Slot ID: If application succeeds, returns the Unit Status Slot ID containing the instance |
 */
  Execution_UnitStatus_AddStatus: "Execution.Unit_Status.Add_Status",

  /**
 * **When Unit Status Ends** `(Trigger.Unit_Status.On_Status_End)`
 *
 * - This event is triggered when a Unit Status is removed for any reason or when its Runtime Duration expires
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Cfg` || `state_config_id` || Unit Status Config ID |
 * | 3 || 🔸 || `Ety` || `applier_entity` || Applier Entity |
 * | 4 || 🔸 || `Bol` || `is_infinite` || Infinite Duration |
 * | 5 || 🔸 || `Flt` || `time_remain` || Remaining Status Duration |
 * | 6 || 🔸 || `Int` || `layer_remain` || Remaining Status Stacks |
 * | 7 || 🔸 || `Ety` || `remover_entity` || Remover Entity |
 * | 8 || 🔸 || `E<STRE>` || `remove_reason` || Removal Reason: Status Replacement: The Unit Status was removed because it was replaced by another status<br>Duration Exceeded: The Unit Status exceeded its runtime duration<br>Dispelled: The Unit Status was removed directly<br>Status Expired: The Unit Status became invalid due to other reasons<br>Class Changed: The Unit Status was removed due to a class change |
 * | 9 || 🔸 || `Int` || `slot_index` || Slot ID: ID of the Unit Status slot that changed |
 */
  Trigger_UnitStatus_OnStatusEnd: "Trigger.Unit_Status.On_Status_End",

  /**
 * **When Unit Status Changes** `(Trigger.Unit_Status.On_Status_Change)`
 *
 * - This event is triggered when the Stack Count of a Unit Status changes
 * - This event is triggered when Unit Status effects are applied or removed
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Cfg` || `state_config_id` || Unit Status Config ID |
 * | 3 || 🔸 || `Ety` || `applier_entity` || Applier Entity |
 * | 4 || 🔸 || `Bol` || `is_infinite` || Infinite Duration |
 * | 5 || 🔸 || `Flt` || `time_remain` || Remaining Status Duration |
 * | 6 || 🔸 || `Int` || `layer_remain` || Remaining Status Stacks: Edited Stack Count |
 * | 7 || 🔸 || `Int` || `layer_original` || Original Status Stacks: Previous Stack Count |
 * | 8 || 🔸 || `Int` || `slot_index` || Slot ID: ID of the Unit Status slot that changed |
 */
  Trigger_UnitStatus_OnStatusChange: "Trigger.Unit_Status.On_Status_Change",

  /**
 * **Remove Unit Status** `(Execution.Unit_Status.Remove_Status)`
 *
 * - Remove a specified Unit Status from the Target Entity. Either all stacks or a single stack can be removed
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
 * | 0 || 🔹 || `Ety` || `remove_target` || Remove Target Entity: The Entity from which the Unit Status will be removed |
 * | 1 || 🔹 || `Cfg` || `state_config_id` || Unit Status Config ID: Identifier for this Unit Status |
 * | 2 || 🔹 || `E<STRS>` || `remove_mode` || Removal Method: All Coexisting Statuses with the Same Name: Removes all statuses applied with this Config ID that share the same name<br>Status With Fastest Stack Loss: Removes one stack from the status that loses stacks the fastest |
 * | 3 || 🔹 || `Ety` || `remover` || Remover Entity: Determines the Remover Entity for this action. Defaults to the Entity associated with this Node Graph |
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
 * **Modifying Character Disruptor Device** `(Execution.Character_Disruptor.Modify_Device)`
 *
 * - Edit the Character Disruptor Device active on the Target Entity by ID; if the ID does not exist, the change has no effect
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Int` || `device_index` || Device ID: Identifier for the Character Disruptor Device |
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
 * **Initiate Attack** `(Execution.Combat.Attack)`
 *
 * - Make the specified Entity initiate an attack. The Entity that uses this node must have the corresponding Ability Unit configured.
 * - There are two usage modes:
 * - When the Ability Unit is [Hitbox Attack], it executes a hitbox attack centered on the Target Entity's Location
 * - When the Ability Unit is [Direct Attack], it directly attacks the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Depending on the Ability Unit, this can be treated either as the reference target for the Hitbox Location or as the attack target |
 * | 1 || 🔹 || `Flt` || `damage_coeff` || Damage Coefficient: The coefficient applied to the damage dealt by this attack |
 * | 2 || 🔹 || `Flt` || `damage_delta` || Damage Increment: The incremental damage applied by this attack |
 * | 3 || 🔹 || `Vec` || `pos_offset` || Location Offset: When using Hitbox Attack, determines the Hitbox offset<br>When using Direct Attack, determines the hit-detection location for the attack and thus where on-hit special effects are created |
 * | 4 || 🔹 || `Vec` || `rot_offset` || Rotation Offset: When using Hitbox Attack, determines the Hitbox rotation<br>When using Direct Attack, determines the hit-detection location for the attack and thus the rotation used for on-hit effects |
 * | 5 || 🔹 || `Str` || `ability_unit` || Ability Unit: Referenced Ability Unit. Must be configured on the entity associated with this Node Graph |
 * | 6 || 🔹 || `Bol` || `override_ability_unit` || Overwrite Ability Unit Config: When set to True, the four parameters — Damage Coefficient, Damage Increment, Location Offset, and Rotation Offset — overwrite parameters of the same name in the Ability Unit. When set to False, the Ability Unit's original configuration is used |
 * | 7 || 🔹 || `Ety` || `attacker_entity` || Initiator Entity: Determines the Initiator Entity for this attack. Defaults to the Entity associated with this Node Graph. Affects which attacker is identified in events such as On Hit and When Attacked |
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
 * **When Attacked** `(Trigger.Combat.On_Be_Attacked)`
 *
 * - This event is triggered when the Entity is attacked
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Ety` || `attacker` || Attacker Entity |
 * | 3 || 🔸 || `Flt` || `damage` || Damage: Actual damage dealt. If no damage is dealt due to Invincible or other reasons, the amount is 0 |
 * | 4 || 🔸 || `L<Str>` || `attack_tags` || Attack Tag List |
 * | 5 || 🔸 || `E<ELMT>` || `element_type` || Elemental Type |
 * | 6 || 🔸 || `Flt` || `element_adv` || Elemental Attack Potency: Elemental Gauge in the Attack |
 */
  Trigger_Combat_OnBeAttacked: "Trigger.Combat.On_Be_Attacked",

  /**
 * **When Attack Hits** `(Trigger.Combat.On_Hit_Target)`
 *
 * - This event is triggered when an Entity's attack hits other Entities
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Ety` || `victim` || Hit Target Entity |
 * | 3 || 🔸 || `Flt` || `damage` || Damage: Actual damage dealt. If no damage is dealt due to Invincible or other reasons, the amount is 0 |
 * | 4 || 🔸 || `L<Str>` || `attack_tags` || Attack Tag List |
 * | 5 || 🔸 || `E<ELMT>` || `element_type` || Elemental Type |
 * | 6 || 🔸 || `Flt` || `element_adv` || Elemental Attack Potency: Elemental Gauge in the Attack |
 */
  Trigger_Combat_OnHitTarget: "Trigger.Combat.On_Hit_Target",

  /**
 * **Activate/Disable Tab** `(Execution.Tab.Set_State)`
 *
 * - Edit the Tab state by ID in the Target Entity's Tab Component
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Int` || `tab_id` || Tab ID: Identifier for the Tab |
 * | 2 || 🔹 || `Bol` || `should_activate` || Activate: If set to True, it is active and can be selected |
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
 * **When Tab Is Selected** `(Trigger.Tab.On_Tab_Select)`
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity: Entity with the tab component mounted |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID: GUID of the Entity with the tab component mounted; outputs 0 if none exists |
 * | 2 || 🔸 || `Int` || `tab_id` || Tab ID: The tab ID |
 * | 3 || 🔸 || `Ety` || `selector_entity` || Selector Entity: Character Entity that triggers the tab |
 */
  Trigger_Tab_OnTabSelect: "Trigger.Tab.On_Tab_Select",

  /**
 * **Activate/Disable Model Display** `(Execution.Entity_Related.Set_Model_Visible)`
 *
 * - Edit the Entity's Model Visibility attribute to make its Model visible or hidden
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: The entity to be edited |
 * | 1 || 🔹 || `Bol` || `should_activate` || Activate: Set to True to make the model visible |
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
 * **Pause Global Timer** `(Execution.Global_Timer.Pause)`
 *
 * - Pause a running Global Timer via the Node Graph
 * - When paused, the UI controls linked to the timer will also pause their display
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Str` || `timer_name` || Timer Name: Identifier for the Timer. Only Timer Names configured in Timer Management can be referenced |
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
 * **Get Current Global Timer Time** `(Query.Global_Timer.Get_Time)`
 *
 * - Returns the current time of the specified Global Timer on the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Str` || `timer_name` || Timer Name |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `current_time` || Current Time |
 */
  Query_GlobalTimer_GetTime: "Query.Global_Timer.Get_Time",

  /**
 * **Start Global Timer** `(Execution.Global_Timer.Start)`
 *
 * - Start a Global Timer on the Target Entity
 * - The Timer on the Target Entity is uniquely identified by its name
 * - Based on Timer Management settings, Countdown and Stopwatch Timers are created accordingly
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Str` || `timer_name` || Timer Name: Identifier for the Timer. Only Timer Names configured in Timer Management can be referenced |
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
 * **Recover Global Timer** `(Execution.Global_Timer.Resume)`
 *
 * - Resume a paused Global Timer on the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Str` || `timer_name` || Timer Name: Identifier for the Timer. Only Timer Names configured in Timer Management can be referenced |
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
 * **Stop Global Timer** `(Execution.Global_Timer.Stop)`
 *
 * - Use the node graph to stop running a global timer early
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Str` || `timer_name` || Timer Name: Identifier for the Timer. Only Timer Names configured in Timer Management can be referenced |
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
 * **Modify Global Timer** `(Execution.Global_Timer.Modify)`
 *
 * - Adjust the time of a running Global Timer via the Node Graph
 * - If the timer is paused first and then modified to reduce the time, the modified time will be at least 0 seconds.
 * - For countdown timers, pausing followed by modifying the time to 0s will trigger the [When the Global Timer Is Triggered] event upon resuming the timer.
 * - If the timer is paused first, then modified to 0s, followed by modifying the time to increase it, and finally resumed, the [When the Global Timer Is Triggered] event will not be triggered.
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Str` || `timer_name` || Timer Name: Identifier for the Timer. Only Timer Names configured in Timer Management can be referenced |
 * | 2 || 🔹 || `Flt` || `delta` || Change Value: For a Countdown Timer, a positive value increases the remaining time; a negative value decreases the remaining time<br>If the timer is set to Stopwatch, a positive value increases the accumulated time, while a negative value decreases it |
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
 * **When Global Timer Is Triggered** `(Trigger.Global_Timer.On_Timer_Trigger)`
 *
 * - This event is triggered when the Global Countdown Timer reaches zero
 * - The Global Stopwatch Timer does not trigger this event
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Str` || `timer_name` || Timer Name |
 */
  Trigger_GlobalTimer_OnTimerTrigger: "Trigger.Global_Timer.On_Timer_Trigger",

  /**
 * **When UI Control Group Is Triggered** `(Trigger.UI_Control_Group.On_Group_Trigger)`
 *
 * - Only UI Controls of the Interactive Button and Item Display types trigger this event
 * - The Node Graph event "UI Control Group Triggered" is sent during Stage runtime when a UI Control Group created through an Interactive Button or an Item Display UI Control is interacted with. This event can only be received by the Node Graph of the _Player_ who triggered the interaction
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Int` || `group_combo_index` || UI Control Group Composite Index: If the UI control that triggered this event forms a multi-control UI group with other controls, this output parameter returns the corresponding group value |
 * | 3 || 🔸 || `Int` || `group_index` || UI Control Group Index: If the triggering UI control is a single-control UI group, this value represents the ID of that UI control group<br>If the triggering UI control is part of a multi-control UI group, this value represents the ID of the control within that group |
 */
  Trigger_UIControlGroup_OnGroupTrigger: "Trigger.UI_Control_Group.On_Group_Trigger",

  /**
 * **Get Player's Current UI Layout** `(Query.UI_Control_Group.Get_Current_Layout)`
 *
 * - Returns the ID of the currently active Interface Layout on the specified Player Entity
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
 * | 0 || 🔹 || `Ety` || `player` || Player Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `layout_idx` || Layout Index |
 */
  Query_UIControlGroup_GetCurrentLayout: "Query.UI_Control_Group.Get_Current_Layout",

  /**
 * **Get All Entities on the Field** `(Query.Entity_Related.Get_All_Entities)`
 *
 * - Returns all Entities currently present in the scene. The number of Entities in this List may be large
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
 * | 0 || 🔸 || `L<Ety>` || `entities` || Entity List |
 */
  Query_EntityRelated_GetAllEntities: "Query.Entity_Related.Get_All_Entities",

  /**
 * **Get Specified Type of Entity on the Field** `(Query.Entity_Related.Get_Entity_By_Type)`
 *
 * - Returns all Entities of the specified type currently in the scene. The number of Entities in this list may be large
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
 * | 0 || 🔹 || `E<ENTY>` || `entity_type` || Entity Type: Includes Stage, Object, Player, Character, Creation |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `entities` || Entity List |
 */
  Query_EntityRelated_GetEntityByType: "Query.Entity_Related.Get_Entity_By_Type",

  /**
 * **Get Entities With Specified Prefab on the Field** `(Query.Entity_Related.Get_With_Prefab)`
 *
 * - Returns all Entities currently in the scene that were created by the specified Prefab ID
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
 * | 0 || 🔹 || `Pfb` || `component_id` || Prefab ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `entities` || Entity List |
 */
  Query_EntityRelated_GetWithPrefab: "Query.Entity_Related.Get_With_Prefab",

  /**
 * **Radians to Degrees** `(Arithmetic.Math.Rad_To_Deg)`
 *
 * - Converts radians to degrees
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
 * | 0 || 🔹 || `Flt` || `radians` || Radian Value |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `degrees` || Angle Value |
 */
  Arithmetic_Math_RadToDeg: "Arithmetic.Math.Rad_To_Deg",

  /**
 * **Degrees to Radians** `(Arithmetic.Math.Deg_To_Rad)`
 *
 * - Converts degrees to radians
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
 * | 0 || 🔹 || `Flt` || `degrees` || Angle Value |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `radians` || Radian Value |
 */
  Arithmetic_Math_DegToRad: "Arithmetic.Math.Deg_To_Rad",

  /**
 * **Set Node Graph Variable** `(Execution.Custom_Variable.Set_Graph_Variable)`
 *
 * - Set the value of the specified Node Graph Variable in the current Node Graph
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
 * | 0 || 🔹 || `Str` || `variable_name` || Variable Name: Name of the Node Graph Variable. Must be unique within the same Node Graph |
 * | 1 || 🔷 || **`R<T>`** || `value` || Variable Value: Value assigned to this variable |
 * | 2 || 🔹 || `Bol` || `should_trigger_event` || Trigger Event: Default: True. If set to False, this Node Graph Variable editing will not trigger the Variable Change Event |
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
 * **Get Node Graph Variable** `(Query.Custom_Variable.Get_Graph_Variable)`
 *
 * - Returns the value of the specified Node Graph Variable from the current Node Graph
 * - If the variable does not exist, returns the type's default value
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
 * | 0 || 🔹 || `Str` || `var_name` || Variable Name |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `value` || Variable Value |
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
 * **When Node Graph Variable Changes** `(Trigger.Custom_Variable.On_Graph_Variable_Change)`
 *
 * - This event is triggered when a Node Graph Variable in the current Node Graph changes
 * - The previous and current values are Generic. Determine the Generic type to correctly receive events for Node Graph Variables of the corresponding type
 * - Vessel-type Node Graph Variables do not provide before-value and after-value Output Parameters
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity: The Entity associated with this Node Graph |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID: GUID of the Entity associated with this Node Graph |
 * | 2 || 🔸 || `Str` || `variable_name` || Variable Name: Name of the Variable that was changed |
 * | 3 || 🔶 || **`R<T>`** || `old_value` || Pre-Change Value: The Variable's value before the change |
 * | 4 || 🔶 || **`R<T>`** || `new_value` || Post-Change Value: The Variable's value after the change |
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
 * **Activate/Disable Follow Motion Device** `(Execution.Follow_Motion.Set_Device_State)`
 *
 * - Enable/Disable the Follow Motion Device logic on the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Bol` || `should_activate` || Activate: Set to True to activate |
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
 * **Activate/Disable Collision Trigger Source** `(Execution.Collision_Trigger_Source.Set_Source_State)`
 *
 * - Edit the state of the Collision Trigger Source Component on the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Bol` || `should_activate` || Activate: If set to True, activates collision with Entities that carry Collision Trigger Components |
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
 * **Remove Entity** `(Execution.Entity_Related.Remove_Entity)`
 *
 * - Remove the specified Entity. Unlike destroying an Entity, this has no destruction effect and does not trigger logic that runs only after destruction
 * - Removing an Entity does not trigger the [On Entity Destroyed] event, but it can trigger the [On Entity Removed/Destroyed] event
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: The entity to be removed |
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
 * **When Entity Is Destroyed** `(Trigger.Entity_Related.On_Destroyed)`
 *
 * - This event triggers when objects and creations within the stage are destroyed. This event can only trigger on stage entities.
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity: Destroyed Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Vec` || `position` || Location |
 * | 3 || 🔸 || `Vec` || `rotation` || Orientation |
 * | 4 || 🔸 || `E<ENTY>` || `entity_type` || Entity Type |
 * | 5 || 🔸 || `Fct` || `camp` || Faction |
 * | 6 || 🔸 || `Ety` || `damage_source` || Damage Source |
 * | 7 || 🔸 || `Ety` || `owner_entity` || Owner Entity |
 * | 8 || 🔸 || `Vss` || `custom_vars_snap` || Custom Variable Component Snapshot: On destroy, captures a snapshot of the Custom Variable component on this Entity. Use the Search Custom Variable Snapshot node to retrieve its Custom Variable values |
 */
  Trigger_EntityRelated_OnDestroyed: "Trigger.Entity_Related.On_Destroyed",

  /**
 * **When Creation Enters Combat** `(Trigger.Creation.On_Enter_Combat)`
 *
 * - Only effective in Classic Aggro Mode
 * - This event is triggered when a Creation enters battle
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 */
  Trigger_Creation_OnEnterCombat: "Trigger.Creation.On_Enter_Combat",

  /**
 * **When Creation Leaves Combat** `(Trigger.Creation.On_Leave_Combat)`
 *
 * - Only effective in Classic Aggro Mode
 * - This event is triggered when a Creation leaves battle
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 */
  Trigger_Creation_OnLeaveCombat: "Trigger.Creation.On_Leave_Combat",

  /**
 * **Get Creation's Current Target** `(Query.Creation.Get_Target)`
 *
 * - The Target Entity varies with the Creation's current behavior
 * - For example, when a Creation is attacking, its Target is the specified enemy Entity
 * - For example, when a Creation is healing allies, its Target is the specified allied Entity
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
 * | 0 || 🔹 || `Ety` || `creation` || Creation Entity: Runtime Creation Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `target` || Target Entity: Current intelligently selected Target Entity of the Creation |
 */
  Query_Creation_GetTarget: "Query.Creation.Get_Target",

  /**
 * **Get Entity List by Specified Type** `(Query.Entity_Related.Get_By_Type)`
 *
 * - Returns a list of specified Entity types from the Target Entity List
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
 * | 0 || 🔹 || `L<Ety>` || `source_list` || Target Entity List |
 * | 1 || 🔹 || `E<ENTY>` || `entity_type` || Entity Type: Includes Player, Character, Stage, Object, Creation. |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `result_list` || Result List |
 */
  Query_EntityRelated_GetByType: "Query.Entity_Related.Get_By_Type",

  /**
 * **Get Entity List by Specified Prefab ID** `(Query.Entity_Related.Get_By_Prefab)`
 *
 * - Returns a list of Entities created with the specified Prefab ID from the Target Entity List
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
 * | 0 || 🔹 || `L<Ety>` || `source_list` || Target Entity List |
 * | 1 || 🔹 || `Pfb` || `component_id` || Prefab ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `result_list` || Result List |
 */
  Query_EntityRelated_GetByPrefab: "Query.Entity_Related.Get_By_Prefab",

  /**
 * **Get Entity List by Specified Faction** `(Query.Entity_Related.Get_By_Faction)`
 *
 * - Returns the list of Entities belonging to a specific Faction from the Target Entity List
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
 * | 0 || 🔹 || `L<Ety>` || `source_list` || Target Entity List |
 * | 1 || 🔹 || `Fct` || `camp` || Faction |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `result_list` || Result List |
 */
  Query_EntityRelated_GetByFaction: "Query.Entity_Related.Get_By_Faction",

  /**
 * **Get Entity List by Specified Range** `(Query.Entity_Related.Get_By_Range)`
 *
 * - Returns a list of Entities within a specified spherical range from the Target Entity List
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
 * | 0 || 🔹 || `L<Ety>` || `source_list` || Target Entity List |
 * | 1 || 🔹 || `Vec` || `center` || Center Point |
 * | 2 || 🔹 || `Flt` || `radius` || Radius |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `result_list` || Result List |
 */
  Query_EntityRelated_GetByRange: "Query.Entity_Related.Get_By_Range",

  /**
 * **Get Creation Attribute** `(Query.Creation.Get_Attribute)`
 *
 * - Returns the Attributes of the specified Creation
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
 * | 0 || 🔹 || `Ety` || `creation` || Creation Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `level` || Level |
 * | 1 || 🔸 || `Flt` || `hp_cur` || Current HP |
 * | 2 || 🔸 || `Flt` || `hp_max` || Max HP |
 * | 3 || 🔸 || `Flt` || `atk_cur` || Current ATK |
 * | 4 || 🔸 || `Flt` || `atk_base` || Base ATK |
 * | 5 || 🔸 || `Flt` || `poise_max` || Interrupt Value Threshold |
 * | 6 || 🔸 || `Flt` || `poise_cur` || Current Interrupt Value |
 * | 7 || 🔸 || `E<CIRS>` || `poise_state` || Current Interrupt Status |
 */
  Query_Creation_GetAttribute: "Query.Creation.Get_Attribute",

  /**
 * **Switch Current Interface Layout** `(Execution.UI_Control_Group.Switch_Layout)`
 *
 * - Switch the Target Player's current Interface Layout via Layout ID
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
 * | 0 || 🔹 || `Ety` || `player` || Target Player: Active Player Entity |
 * | 1 || 🔹 || `Int` || `layout_index` || Layout Index: Identifier for the UI Layout |
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
 * **Activate UI Control Group in Control Group Library** `(Execution.UI_Control_Group.Activate_Group)`
 *
 * - Activate the UI Control Groups stored as Custom Templates in the UI Control Group Library within the Target Player's Interface Layout
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
 * | 0 || 🔹 || `Ety` || `player` || Target Player: Active Player Entity |
 * | 1 || 🔹 || `Int` || `group_index` || UI Control Group Index: Identifier for the UI Control Group |
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
 * **Modify UI Control Status Within the Interface Layout** `(Execution.UI_Control_Group.Modify_Status)`
 *
 * - Edit the state of the UI Control in the Target Player's Interface Layout by its UI Control ID
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
 * | 0 || 🔹 || `Ety` || `player` || Target Player: Active Player Entity |
 * | 1 || 🔹 || `Int` || `control_index` || UI Control Index: Identifier for the UI Control |
 * | 2 || 🔹 || `E<UICG>` || `display_state` || Display Status: Off: Invisible and logic not running<br>On: Visible and logic running normally<br>Hidden: Invisible and logic running normally |
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
 * **When Player Class Changes** `(Trigger.Class.On_Class_Change)`
 *
 * - This event is triggered when a Player's Class changes and is sent to the corresponding Player. It can be received in the Node Graph of the new Class
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Cfg` || `career_config_id_old` || Pre-Modification Class Config ID |
 * | 3 || 🔸 || `Cfg` || `career_config_id_new` || Post-Modification Config ID |
 */
  Trigger_Class_OnClassChange: "Trigger.Class.On_Class_Change",

  /**
 * **When Player Class Level Changes** `(Trigger.Class.On_Level_Change)`
 *
 * - This event is triggered when a Player's Class Level changes and is sent to the corresponding Player. It can be received in that Class's Node Graph
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity: Active Player Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Int` || `level_old` || Pre-Change Level |
 * | 3 || 🔸 || `Int` || `level_new` || Post-Change Level |
 */
  Trigger_Class_OnLevelChange: "Trigger.Class.On_Level_Change",

  /**
 * **Query Player Class** `(Query.Class.Get_Class)`
 *
 * - Searches the Player's current Class; outputs the Config ID of that Class
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
 * | 0 || 🔹 || `Ety` || `player` || Player Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Cfg` || `career_id` || Class Config ID |
 */
  Query_Class_GetClass: "Query.Class.Get_Class",

  /**
 * **Query Player Class Level** `(Query.Class.Get_Level)`
 *
 * - Searches the Player's Level of the specified Class
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
 * | 0 || 🔹 || `Ety` || `player` || Player Entity |
 * | 1 || 🔹 || `Cfg` || `career_id` || Class Config ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `level` || Level |
 */
  Query_Class_GetLevel: "Query.Class.Get_Level",

  /**
 * **Change Player Class** `(Execution.Class.Change_Class)`
 *
 * - Set the Player's current Class to the Class referenced by the Config ID
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
 * | 0 || 🔹 || `Ety` || `player` || Target Player: Active Player Entity |
 * | 1 || 🔹 || `Cfg` || `class_id` || Class Config ID: Class Identifier |
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
 * **Increase Player's Current Class EXP** `(Execution.Class.Add_Exp)`
 *
 * - Increase the Player's current Class EXP. Any excess beyond the maximum Level will not take effect
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
 * | 0 || 🔹 || `Ety` || `player` || Target Player: Active Player Entity |
 * | 1 || 🔹 || `Int` || `exp` || EXP: Amount of EXP to be increased |
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
 * **Change Player's Current Class Level** `(Execution.Class.Set_Level)`
 *
 * - Set the Player's current Class Level. If it exceeds the defined range, the change will not take effect
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
 * | 0 || 🔹 || `Ety` || `player` || Target Player: Active Player Entity |
 * | 1 || 🔹 || `Int` || `level` || Level: Edited Level |
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
 * **When Skill Node Is Called** `(Trigger.Skill.On_Skill_Call)`
 *
 * - This event is triggered by the [Notify Server Node Graph] Node in the Skill Node Graph. Up to three strings can be passed in
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
 * | 0 || 🔸 || `Ety` || `invoker_entity` || Caller Entity |
 * | 1 || 🔸 || `Gid` || `invoker_guid` || Caller GUID |
 * | 2 || 🔸 || `Str` || `param1` || Parameter 1 |
 * | 3 || 🔸 || `Str` || `param2` || Parameter 2 |
 * | 4 || 🔸 || `Str` || `param3` || Parameter 3 |
 */
  Trigger_Skill_OnSkillCall: "Trigger.Skill.On_Skill_Call",

  /**
 * **Modify Skill Resource Amount** `(Execution.Skill.Modify_Resource)`
 *
 * - Edit the skill's resource amount by adding the change value to the current value. The change value can be negative
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Character Entity |
 * | 1 || 🔹 || `Cfg` || `resource_config_id` || Skill Resource Config ID: Skill Resource Identifier |
 * | 2 || 🔹 || `Flt` || `delta_value` || Change Value: New Value = Original Value + Change Value |
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
 * **Set Skill Resource Amount** `(Execution.Skill.Set_Resource)`
 *
 * - Edit the Character's skill resource amount
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Character Entity |
 * | 1 || 🔹 || `Cfg` || `resource_config_id` || Skill Resource Config ID: Skill Resource Identifier |
 * | 2 || 🔹 || `Flt` || `target_value` || Target Value: Edited value will be set to this input value |
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
 * **Add Character Skill** `(Execution.Skill.Add_Skill)`
 *
 * - Add a skill to the specified Target Character's Skill Slot
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Character Entity |
 * | 1 || 🔹 || `Cfg` || `skill_config_id` || Skill Config ID: Skill Identifier |
 * | 2 || 🔹 || `E<SLOT>` || `skill_slot` || Skill Slot: The Skill Slot to be added: Normal Attack, Skill 1-E, Skill 2-Q, Skill 3-R, Skill 4-T, or Custom Skill |
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
 * **Delete Character Skill by ID** `(Execution.Skill.Remove_By_ID)`
 *
 * - Iterate through and delete all skills with the specified Config ID across all of the Character's slots
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Character Entity |
 * | 1 || 🔹 || `Cfg` || `skill_config_id` || Skill Config ID: Skill Identifier |
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
 * **Initialize Character Skill** `(Execution.Skill.Init_Skill)`
 *
 * - Reset the Target Character's skills to those defined in the Class Template
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Character Entity |
 * | 1 || 🔹 || `E<SLOT>` || `skill_slot` || Character Skill Slot: The Skill Slot to initialize: Normal Attack, Skill 1-E, Skill 2-Q, Skill 3-R, Skill 4-T, or Custom Skill |
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
 * **Query Character Skill** `(Query.Skill.Get_Skill_Info)`
 *
 * - Searches the Skill in the specified slot of a Character; outputs that Skill's Config ID
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
 * | 0 || 🔹 || `Ety` || `character` || Character Entity |
 * | 1 || 🔹 || `E<SLOT>` || `slot` || Character Skill Slot |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Cfg` || `skill_config` || Skill Config ID |
 */
  Query_Skill_GetSkillInfo: "Query.Skill.Get_Skill_Info",

  /**
 * **Delete Character Skill by Slot** `(Execution.Skill.Remove_By_Slot)`
 *
 * - Delete the skill in the specified slot of the Target Character
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Character Entity |
 * | 1 || 🔹 || `E<SLOT>` || `skill_slot` || Character Skill Slot: The Skill Slot to be deleted: Normal Attack, Skill 1-E, Skill 2-Q, Skill 3-R, Skill 4-T, or Custom Skill |
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
 * **Clear Special Effects Based on Special Effect Assets** `(Execution.Special_Effect.Stop_By_Asset)`
 *
 * - Clear all Effects on the specified Target Entity that use the given Effect Asset. Applies to Looping Effects only
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Cfg` || `effect_asset` || Special Effects Asset: Identifier for this Effect |
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
 * **3D Vector Rotation** `(Arithmetic.Math.Vector_Rotate)`
 *
 * - Rotates the input 3D Vector by the Euler Angles specified by the rotation and returns the result
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
 * | 0 || 🔹 || `Vec` || `rotation` || Rotate: This 3D input vector represents a specific rotation in Euler angles |
 * | 1 || 🔹 || `Vec` || `vector` || Rotated 3D Vector |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || Result |
 */
  Arithmetic_Math_VectorRotate: "Arithmetic.Math.Vector_Rotate",

  /**
 * **Enumerations Equal** `(Arithmetic.General.Enum_Equal)`
 *
 * - After confirming the Enumeration type, determines whether the two input values are equal
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
 * | 0 || 🔷 || **`R<T>`** || `enum1` || Enumeration 1 |
 * | 1 || 🔷 || **`R<T>`** || `enum2` || Enumeration 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || Result: Output True if equal, False if not equal |
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
 * **3D Vector Dot Product** `(Arithmetic.Math.Vector_Dot)`
 *
 * - Calculates the dot product of two input 3D Vectors
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
 * | 0 || 🔹 || `Vec` || `a` || 3D Vector 1 |
 * | 1 || 🔹 || `Vec` || `b` || 3D Vector 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || Result |
 */
  Arithmetic_Math_VectorDot: "Arithmetic.Math.Vector_Dot",

  /**
 * **3D Vector Cross Product** `(Arithmetic.Math.Vector_Cross)`
 *
 * - Calculates the cross product of two 3D Vectors
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
 * | 0 || 🔹 || `Vec` || `a` || 3D Vector 1 |
 * | 1 || 🔹 || `Vec` || `b` || 3D Vector 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || Result |
 */
  Arithmetic_Math_VectorCross: "Arithmetic.Math.Vector_Cross",

  /**
 * **Query If Entity Is on the Field** `(Query.Entity_Related.Is_Active)`
 *
 * - Searches whether the specified Entity is present
 * - Note that Character Entities are still considered present even when Downed
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `is_alive` || On the Field |
 */
  Query_EntityRelated_IsActive: "Query.Entity_Related.Is_Active",

  /**
 * **Query If Entity Has Unit Status** `(Query.Unit_Status.Has_Status)`
 *
 * - Searches whether the specified Entity has a Unit Status with the given Config ID
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Cfg` || `config_id` || Unit Status Config ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `exists` || Has |
 */
  Query_UnitStatus_HasStatus: "Query.Unit_Status.Has_Status",

  /**
 * **List Iteration Loop** `(Execution.List_Operation.For_Each)`
 *
 * - Iterate through the specified List in sequential order
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
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || Iteration List: List to iterate through |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `Iteration` ||  |
 * | - || ⏩ || - || `End` ||  |
 * | 0 || 🔶 || **`R<T>`** || `item` || Iteration Value: Each value in the list |
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
 * **Get Entity Forward Vector** `(Query.Entity_Related.Get_Forward)`
 *
 * - Returns the Forward Vector of the specified Entity (the positive Z-axis direction in the Entity's relative coordinate system)
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `forward` || Forward Vector |
 */
  Query_EntityRelated_GetForward: "Query.Entity_Related.Get_Forward",

  /**
 * **Get Entity Right Vector** `(Query.Entity_Related.Get_Right)`
 *
 * - Returns the Right Vector of the specified Entity (the positive X-axis direction in the Entity's relative coordinate system)
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `right` || Right Vector |
 */
  Query_EntityRelated_GetRight: "Query.Entity_Related.Get_Right",

  /**
 * **Get Entity Upward Vector** `(Query.Entity_Related.Get_Up)`
 *
 * - Returns the Upward Vector of the specified Entity (the positive Y-axis direction in the Entity's relative coordinate system)
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `up` || Upward Vector |
 */
  Query_EntityRelated_GetUp: "Query.Entity_Related.Get_Up",

  /**
 * **Direction Vector to Rotation** `(Arithmetic.Math.Vector_To_Rotation)`
 *
 * - Converts the Forward Vector and Upward Vector to Euler Angles
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
 * | 0 || 🔹 || `Vec` || `rotation` || Forward Vector: Represents the desired Orientation of the Unit |
 * | 1 || 🔹 || `Vec` || `dir` || Upward Vector: Defines the Unit's Up direction (used to determine the rotation angle). Default is the positive Y-axis of the World Coordinate System |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || Rotate |
 */
  Arithmetic_Math_VectorToRotation: "Arithmetic.Math.Vector_To_Rotation",

  /**
 * **Add Target-Oriented Rotation-Based Motion Device** `(Execution.Motion_Device.Add_Target_Rotation)`
 *
 * - Dynamically add a Basic Motion Device with Target-Oriented Rotation to the Target Entity during Stage runtime
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Str` || `mover_name` || Motion Device Name: Identifier for this motion device |
 * | 2 || 🔹 || `Flt` || `duration` || Motion Device Duration: The duration for which this motion device remains active |
 * | 3 || 🔹 || `Vec` || `target_euler` || Target Angle: Absolute Angle |
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
 * **Remove Interface Control Group From Control Group Library** `(Execution.UI_Control_Group.Remove_Group)`
 *
 * - Remove the UI Control Groups activated via [Activate UI Control Group in Control Group Library] from the Target Player's Interface Layout
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
 * | 0 || 🔹 || `Ety` || `player` || Target Player: Active Player Entity |
 * | 1 || 🔹 || `Int` || `group_index` || UI Control Group Index: Identifier for the UI Control Group |
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
 * **Get Object Attribute** `(Query.Entity_Related.Get_Obj_Attr)`
 *
 * - Returns the Base Attributes of the Object
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
 * | 0 || 🔹 || `Ety` || `object_entity` || Object Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `level` || Level |
 * | 1 || 🔸 || `Flt` || `hp_cur` || Current HP |
 * | 2 || 🔸 || `Flt` || `hp_max` || Max HP |
 * | 3 || 🔸 || `Flt` || `atk_cur` || Current ATK |
 * | 4 || 🔸 || `Flt` || `atk_base` || Base ATK |
 * | 5 || 🔸 || `Flt` || `def_cur` || Current DEF |
 * | 6 || 🔸 || `Flt` || `def_base` || Base DEF |
 */
  Query_EntityRelated_GetObjAttr: "Query.Entity_Related.Get_Obj_Attr",

  /**
 * **Recover HP** `(Execution.Combat.Recover_HP)`
 *
 * - Restore HP to the specified Target Entity via an Ability Unit
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Target of HP restoration |
 * | 1 || 🔹 || `Flt` || `heal_amount` || Recovery Amount: The amount of HP restored in this healing instance |
 * | 2 || 🔹 || `Str` || `ability_unit` || Ability Unit: Referenced Ability Unit. Must be configured on the entity associated with this Node Graph |
 * | 3 || 🔹 || `Bol` || `override_ability_unit` || Overwrite Ability Unit Config: When set to True, the Recovery Amount overwrites the parameter of the same name in the Ability Unit. When set to False, the Ability Unit's original configuration is used |
 * | 4 || 🔹 || `Ety` || `heal_source` || Recover Initiator Entity: Determines the Initiator Entity of this healing action. Defaults to the Entity associated with this Node Graph. Affects healer identification in events such as When HP Is Recovered and When Initiating HP Recovery |
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
 * **When HP Is Recovered** `(Trigger.Combat.On_HP_Recover)`
 *
 * - This event is triggered when an Entity's HP is restored
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Ety` || `healer` || Healer Entity |
 * | 3 || 🔸 || `Flt` || `heal_amount` || Recovery Amount: Actual healing amount. If the Entity had not lost any HP prior to healing, the amount is 0 |
 * | 4 || 🔸 || `L<Str>` || `heal_tags` || Recover Tag List |
 */
  Trigger_Combat_OnHPRecover: "Trigger.Combat.On_HP_Recover",

  /**
 * **When Initiating HP Recovery** `(Trigger.Combat.On_HP_Recovery_Start)`
 *
 * - This event is triggered on the initiating Entity when an Entity restores HP to other Entities
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Ety` || `heal_target` || Recover Target Entity |
 * | 3 || 🔸 || `Flt` || `heal_amount` || Recovery Amount: Actual healing amount. If the Target Entity had not lost any HP prior to healing, the amount is 0 |
 * | 4 || 🔸 || `L<Str>` || `heal_tags` || Recover Tag List |
 */
  Trigger_Combat_OnHPRecoveryStart: "Trigger.Combat.On_HP_Recovery_Start",

  /**
 * **Add Unit Tag to Entity** `(Execution.Unit_Tag.Add_Tag)`
 *
 * - Add Unit Tags to the specified Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Int` || `tag_index` || Unit Tag Index |
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
 * **Remove Unit Tag from Entity** `(Execution.Unit_Tag.Remove_Tag)`
 *
 * - Remove Unit Tags from the specified Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Int` || `tag_index` || Unit Tag Index |
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
 * **Clear Unit Tags from Entity** `(Execution.Unit_Tag.Clear_Tags)`
 *
 * - Clear Unit Tags for the specified Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
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
 * **Get Entity Unit Tag List** `(Query.Unit_Tag.Get_Tags)`
 *
 * - Returns a list of all Unit Tags carried by the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `unit_tags` || Unit Tag List |
 */
  Query_UnitTag_GetTags: "Query.Unit_Tag.Get_Tags",

  /**
 * **Get Entity List by Unit Tag** `(Query.Unit_Tag.Get_By_Tag)`
 *
 * - Returns a list of all Entities in the scene that carry this Unit Tag
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
 * | 0 || 🔹 || `Int` || `unit_tag_index` || Unit Tag Index |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `entities` || Entity List |
 */
  Query_UnitTag_GetByTag: "Query.Unit_Tag.Get_By_Tag",

  /**
 * **Close Specified Sound Effect Player** `(Execution.Sound_Effect.Close_Player)`
 *
 * - Disable the Sound Effect Player with the specified ID in the Sound Effect Player Component on the specified Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Int` || `player_index` || SFX Player ID |
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
 * **Start/Pause Specified Sound Effect Player** `(Execution.Sound_Effect.Toggle_Player)`
 *
 * - Edit the state of the Sound Effect Player with the specified ID in the Sound Effect Player Component on the Target Entity. This node is only active when the sound effect is set to loop playback. It does not take effect for sound effects configured for single-playback.
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Int` || `player_index` || SFX Player ID |
 * | 2 || 🔹 || `Bol` || `should_resume` || Recover |
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
 * **Adjust Specified Sound Effect Player** `(Execution.Sound_Effect.Adjust_Player)`
 *
 * - Adjust the volume and playback speed of the Sound Effect Player with the specified ID in the Sound Effect Player Component on the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Int` || `player_index` || SFX Player ID |
 * | 2 || 🔹 || `Int` || `volume` || Volume |
 * | 3 || 🔹 || `Flt` || `playback_rate` || Playback Speed |
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
 * **Add Sound Effect Player** `(Execution.Sound_Effect.Add_Player)`
 *
 * - Dynamically add a Sound Effect Player. The Unit must have a Sound Effect Player Component
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Int` || `audio_asset_index` || Sound Effect Asset Index |
 * | 2 || 🔹 || `Int` || `volume` || Volume |
 * | 3 || 🔹 || `Flt` || `playback_rate` || Playback Speed |
 * | 4 || 🔹 || `Bol` || `loop` || Loop Playback |
 * | 5 || 🔹 || `Flt` || `loop_interval` || Loop Interval Time |
 * | 6 || 🔹 || `Bol` || `is3_d` || 3D Sound Effect |
 * | 7 || 🔹 || `Flt` || `radius` || Range Radius |
 * | 8 || 🔹 || `E<SNDM>` || `attenuation` || Attenuation Mode |
 * | 9 || 🔹 || `Str` || `socket_name` || Attachment Point Name |
 * | 10 || 🔹 || `Vec` || `socket_offset` || Attachment Point Offset |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Int` || `created_player_index` || SFX Player ID |
 */
  Execution_SoundEffect_AddPlayer: "Execution.Sound_Effect.Add_Player",

  /**
 * **Start/Pause Player Background Music** `(Execution.Sound_Effect.Toggle_BGM)`
 *
 * - Edit the background music state for the specified Player
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Player Entity |
 * | 1 || 🔹 || `Bol` || `should_resume` || Recover |
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
 * **Adjust Player Background Music Volume** `(Execution.Sound_Effect.Set_BGM_Volume)`
 *
 * - Adjust Player Background Music Volume
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Player Entity |
 * | 1 || 🔹 || `Int` || `volume` || Volume |
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
 * **Modify Player Background Music** `(Execution.Sound_Effect.Set_BGM)`
 *
 * - Edit background music parameters for the Player
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Player Entity |
 * | 1 || 🔹 || `Int` || `bgm_index` || Background Music Index |
 * | 2 || 🔹 || `Flt` || `start_time` || Start Time |
 * | 3 || 🔹 || `Flt` || `end_time` || End Time |
 * | 4 || 🔹 || `Int` || `volume` || Volume |
 * | 5 || 🔹 || `Bol` || `loop` || Loop Playback |
 * | 6 || 🔹 || `Flt` || `loop_interval` || Loop Interval |
 * | 7 || 🔹 || `Flt` || `playback_rate` || Playback Speed |
 * | 8 || 🔹 || `Bol` || `allow_join_leave` || Enable Fade In/Out |
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
 * **Player Plays One-Shot 2D Sound Effect** `(Execution.Sound_Effect.Play_2D_One_Shot)`
 *
 * - Player plays a one-shot 2D Sound Effect
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Player Entity |
 * | 1 || 🔹 || `Int` || `audio_asset_index` || Sound Effect Asset Index |
 * | 2 || 🔹 || `Int` || `volume` || Volume |
 * | 3 || 🔹 || `Flt` || `playback_rate` || Playback Speed |
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
 * **Set the Aggro Value of Specified Entity** `(Execution.Custom_Aggro.Set_Aggro)`
 *
 * - Available only in Custom Aggro Mode
 * - Set the Aggro Value of the specified Target Entity on the specified Aggro Owner
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Ety` || `owner_entity` || Aggro Owner Entity |
 * | 2 || 🔹 || `Int` || `hatred_value` || Aggro Value |
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
 * **Remove Target Entity From Aggro List** `(Execution.Custom_Aggro.Remove_Aggro)`
 *
 * - Available only in Custom Aggro Mode
 * - Remove the Target Entity from the Aggro Owner's Aggro List; this may cause the target to leave battle
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Ety` || `owner_entity` || Aggro Owner Entity |
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
 * **Clear Specified Target's Aggro List** `(Execution.Custom_Aggro.Clear_Aggro)`
 *
 * - Available only in Custom Aggro Mode
 * - Clear the Aggro Owner's Aggro List. This may cause them to leave battle
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
 * | 0 || 🔹 || `Ety` || `owner_entity` || Aggro Owner |
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
 * **Taunt Target** `(Execution.Custom_Aggro.Taunt)`
 *
 * - Available only in Custom Aggro Mode
 * - Make the Taunter Entity taunt the specified Target Entity
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
 * | 0 || 🔹 || `Ety` || `taunter` || Taunter Entity |
 * | 1 || 🔹 || `Ety` || `target_entity` || Target Entity |
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
 * **Query the Aggro Value of the Specified Entity** `(Query.Custom_Aggro.Get_Aggro_Value)`
 *
 * - Searches the Aggro Value of the Target Entity on its Aggro Owners
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Query Target |
 * | 1 || 🔹 || `Ety` || `owner_entity` || Aggro Owner |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `hatred` || Aggro Value |
 */
  Query_CustomAggro_GetAggroValue: "Query.Custom_Aggro.Get_Aggro_Value",

  /**
 * **Query the Aggro Multiplier of the Specified Entity** `(Query.Custom_Aggro.Get_Multiplier)`
 *
 * - Query Aggro Multiplier of Specific Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Query Target |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `multiplier` || Aggro Multiplier |
 */
  Query_CustomAggro_GetMultiplier: "Query.Custom_Aggro.Get_Multiplier",

  /**
 * **Query Global Aggro Transfer Multiplier** `(Query.Custom_Aggro.Get_Global_Multiplier)`
 *
 * - Searches the Global Aggro Transfer Multiplier; it can be configured in [Stage Settings]
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
 * | 0 || 🔸 || `Flt` || `multiplier` || Global Aggro Transfer Multiplier |
 */
  Query_CustomAggro_GetGlobalMultiplier: "Query.Custom_Aggro.Get_Global_Multiplier",

  /**
 * **Get the Aggro Target of the Specified Entity** `(Query.Custom_Aggro.Get_Aggro_Target)`
 *
 * - Get Aggro Target of Specific Entity
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
 * | 0 || 🔹 || `Ety` || `owner_entity` || Aggro Owner |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `hatred_target` || Aggro Target |
 */
  Query_CustomAggro_GetAggroTarget: "Query.Custom_Aggro.Get_Aggro_Target",

  /**
 * **Get List of Owners Who Have the Target in Their Aggro List** `(Query.Custom_Aggro.Get_Aggro_Owners)`
 *
 * - Searches which Entities' Aggro Lists include the specified Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Query Target |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `owners` || Aggro Owner List |
 */
  Query_CustomAggro_GetAggroOwners: "Query.Custom_Aggro.Get_Aggro_Owners",

  /**
 * **Get List of Owners That Have the Target As Their Aggro Target** `(Query.Custom_Aggro.Get_Targeting_Owners)`
 *
 * - Searches which Entities have the Target Entity as their Aggro Target
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `owners` || Aggro Owner List |
 */
  Query_CustomAggro_GetTargetingOwners: "Query.Custom_Aggro.Get_Targeting_Owners",

  /**
 * **Get the Aggro List of the Specified Entity** `(Query.Custom_Aggro.Get_Aggro_List)`
 *
 * - Get Specific Entity's Aggro List
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `hatred_list` || Aggro List |
 */
  Query_CustomAggro_GetAggroList: "Query.Custom_Aggro.Get_Aggro_List",

  /**
 * **Query if Specified Entity Is in Combat** `(Query.Custom_Aggro.Is_In_Combat)`
 *
 * - Searches whether the specified Entity has entered battle
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Query Target |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `in_combat` || In Combat |
 */
  Query_CustomAggro_IsInCombat: "Query.Custom_Aggro.Is_In_Combat",

  /**
 * **When Aggro Target Changes** `(Trigger.Custom_Aggro.On_Target_Change)`
 *
 * - Available only in Custom Aggro Mode
 * - This event is triggered when the Aggro Target changes
 * - This event can also be triggered when entering or leaving battle
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Ety` || `target_old` || Pre-Change Aggro Target |
 * | 3 || 🔸 || `Ety` || `target_new` || Post-Change Aggro Target |
 */
  Trigger_CustomAggro_OnTargetChange: "Trigger.Custom_Aggro.On_Target_Change",

  /**
 * **When Self Enters Combat** `(Trigger.Custom_Aggro.On_Enter_Combat)`
 *
 * - Available only in Custom Aggro Mode
 * - This event is triggered when the Entity itself enters battle
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 */
  Trigger_CustomAggro_OnEnterCombat: "Trigger.Custom_Aggro.On_Enter_Combat",

  /**
 * **When Self Leaves Combat** `(Trigger.Custom_Aggro.On_Leave_Combat)`
 *
 * - Available only in Custom Aggro Mode
 * - This event is triggered when the Entity itself leaves battle
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 */
  Trigger_CustomAggro_OnLeaveCombat: "Trigger.Custom_Aggro.On_Leave_Combat",

  /**
 * **Query If Faction Is Hostile** `(Query.Faction_Related.Is_Hostile)`
 *
 * - Searches whether two Factions are hostile to each other
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
 * | 0 || 🔹 || `Fct` || `camp_a` || Faction 1 |
 * | 1 || 🔹 || `Fct` || `camp_b` || Faction 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `hostile` || Hostile |
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
 * **Set Entity Active Nameplate** `(Execution.Nameplate.Set_Nameplate)`
 *
 * - Set the active Nameplate list for the specified target. Nameplates included in the input list are enabled, while those not included are disabled
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `L<Cfg>` || `config_id_list` || Nameplate Config ID List |
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
 * **Switch Creation Patrol Template** `(Execution.Creation_Patrol.Switch_Template)`
 *
 * - Immediately switch the patrol template for the Creation and move according to the new template
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
 * | 0 || 🔹 || `Ety` || `construct_entity` || Creation Entity |
 * | 1 || 🔹 || `Int` || `template_index` || Patrol Template ID |
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
 * **Get Current Creation's Patrol Template** `(Query.Creature_Patrol.Get_Patrol_Template)`
 *
 * - Returns the Patrol Template information of the specified Creation Entity
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
 * | 0 || 🔹 || `Ety` || `creation` || Creation Entity: Runtime Creation Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `template_idx` || Patrol Template ID: The Patrol Template ID currently active on this Creation |
 * | 1 || 🔸 || `Int` || `path_index` || Path Index: The Path ID referenced by the Creation's currently active Patrol Template |
 * | 2 || 🔸 || `Int` || `target_point` || Target Waypoint Index: The Waypoint ID the Creation will move to next |
 */
  Query_CreaturePatrol_GetPatrolTemplate: "Query.Creature_Patrol.Get_Patrol_Template",

  /**
 * **When Creation Reaches Patrol Waypoint** `(Trigger.Creation_Patrol.On_Reach_Waypoint)`
 *
 * - When the **Send Node Graph Event on Arrival** option is enabled for a waypoint in the Patrol template, a Node Graph Event is triggered once the specified conditions are met
 * - This Node Graph Event can only be received by the creation's node graph
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
 * | 0 || 🔸 || `Ety` || `construct_entity` || Creation Entity: Runtime Creation Entity |
 * | 1 || 🔸 || `Gid` || `construct_guid` || Creation GUID: The GUID of the Creation. If it was not an initially placed Creation, the output is empty |
 * | 2 || 🔸 || `Int` || `patrol_template_index` || Current Patrol Template ID: The Patrol Template ID currently active on this Creation |
 * | 3 || 🔸 || `Int` || `path_index` || Current Path Index: The Path ID referenced by the Creation's currently active Patrol Template |
 * | 4 || 🔸 || `Int` || `current_waypoint_index` || Current Reached Waypoint ID: The Waypoint ID the Creation has currently reached |
 * | 5 || 🔸 || `Int` || `next_waypoint_index` || Next Waypoint ID: The Waypoint ID the Creation will move to next |
 */
  Trigger_CreationPatrol_OnReachWaypoint: "Trigger.Creation_Patrol.On_Reach_Waypoint",

  /**
 * **Get Specified Waypoint Info** `(Query.Global_Path.Get_Waypoint)`
 *
 * - Searches the specified Waypoint information for the given Path
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
 * | 0 || 🔹 || `Int` || `path_index` || Path Index |
 * | 1 || 🔹 || `Int` || `point_index` || Path Waypoint ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `position` || Waypoint Location |
 * | 1 || 🔸 || `Vec` || `rotation` || Waypoint Orientation |
 */
  Query_GlobalPath_GetWaypoint: "Query.Global_Path.Get_Waypoint",

  /**
 * **Switch Active Text Bubble** `(Execution.Text_Bubble.Set_Bubble)`
 *
 * - In the Target Entity's Text Bubble Component, replace the current active Text Bubble with the one corresponding to the Config ID
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Cfg` || `config_id` || Text Bubble Configuration ID |
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
 * **Invoke Deck Selector** `(Execution.Deck_Selector.Open)`
 *
 * - Open the pre-made Deck Selector for the Target Player
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
 * | 0 || 🔹 || `Ety` || `target_player` || Target Player: Specify the runtime Player to invoke the Deck Selector |
 * | 1 || 🔹 || `Int` || `picker_index` || Deck Selector ID: Referenced UI Control Group ID |
 * | 2 || 🔹 || `Flt` || `duration` || Select Duration: If empty, uses the Deck Selector's default configuration; otherwise, this time value is used as the effective duration<br>Unit in seconds |
 * | 3 || 🔹 || `L<Int>` || `result_map_list` || Select Result Corresponding List: One-to-one with display items: the Deck Selector returns the result value corresponding to each display item<br>Recommended configuration: 1 to X |
 * | 4 || 🔹 || `L<Int>` || `display_map_list` || Select Display Corresponding List: Deck Library Configuration Reference |
 * | 5 || 🔹 || `Int` || `select_min` || Select Minimum Quantity: The minimum number of cards that must be selected for a valid interaction |
 * | 6 || 🔹 || `Int` || `select_max` || Select Maximum Quantity: The maximum number of cards that can be selected for a valid interaction |
 * | 7 || 🔹 || `E<DRFM>` || `refresh_mode` || Refresh Mode: No Refresh: The minimum and maximum refresh count parameters are invalid, and the selection interface has no Refresh button<br>Partial Refresh: Both input parameters (minimum and maximum refresh count) take effect, and the selection screen includes a refresh button<br>Full Refresh: Both input parameters (minimum and maximum refresh count) are ignored. All results are returned by default, and the selection screen includes a refresh button |
 * | 8 || 🔹 || `Int` || `refresh_min` || Refresh Minimum Quantity: The minimum number of cards that must be selected for a valid refresh interaction. |
 * | 9 || 🔹 || `Int` || `refresh_max` || Refresh Maximum Quantity: The maximum number of cards that can be selected for a valid refresh interaction |
 * | 10 || 🔹 || `L<Int>` || `default_return` || Default Return Selection: If the Deck Selector times out, has no interaction, or closes abnormally, force-assign this configured result<br>The length of this Result List must match the valid card selection count |
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
 * **When Deck Selector Is Complete** `(Trigger.Deck_Selector.On_Deck_Selected)`
 *
 * - This event is triggered on the Player's Node Graph when the Player completes the Deck Selector, or when it is forcibly closed due to time constraints
 * - The output parameters report the Deck Selector's result and the corresponding reason
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
 * | 0 || 🔸 || `Ety` || `target_player` || Target Player: Active Player Entity |
 * | 1 || 🔸 || `L<Int>` || `result_list` || Selection Result List: When a selection interaction is triggered, valid selection results are returned as this output parameter, and the completion reason isCompleted by Player<br>When a Full Refresh pop-up selection is triggered, the complete selection result list is returned as this output parameter, and the completion reason isRefresh All<br>When a Fixed-Quantity Refresh pop-up selection is triggered, valid selection results are returned as this output parameter, and the completion reason is Fixed-Quantity Refresh<br>When the Deck Selector times out with no interaction, the default selection is returned is returned as this output parameter, and the completion reason is Timeout<br>When Allow Discard Selection is enabled and the Deck Selector is closed by the player, the default selection is returned as this output parameter, and the completion reason is Closed Manually<br>When the Deck Selector is closed via the Node Graph, the default selection is returned as this output parameter, and the completion reason isClosed by Node Graph |
 * | 2 || 🔸 || `E<SLCR>` || `complete_reason` || Completion Reason: Six reason enumerations<br>Completed by Player, Refresh All, Fixed-Quantity Refresh, Timeout, Closed Manually, Closed by Node Graph |
 * | 3 || 🔸 || `Int` || `picker_index` || Deck Selector Index: Referenced Deck Selector ID |
 */
  Trigger_DeckSelector_OnDeckSelected: "Trigger.Deck_Selector.On_Deck_Selected",

  /**
 * **Modify Mini-Map Zoom** `(Execution.Minimap_Marker.Set_Zoom)`
 *
 * - Edit the map scale of the Target Player's mini-map UI control
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
 * | 0 || 🔹 || `Ety` || `target_player` || Target Player |
 * | 1 || 🔹 || `Flt` || `scale` || Zoom Dimensions |
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
 * **Modify Mini-Map Marker Activation Status** `(Execution.Minimap_Marker.Set_Marker_State)`
 *
 * - Edit the active state of mini-map markers on the Target Entity in batches using the input list of Mini-map Marker IDs
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Entity that owns the Mini-map Marker component to be edited |
 * | 1 || 🔹 || `L<Int>` || `marker_index_list` || Mini-Map Marker ID List: List of Mini-map Marker IDs to be set to the specified status<br>Unconfigured Mini-map Markers will be set to the opposite status |
 * | 2 || 🔹 || `Bol` || `enabled` || Active: If input is True,<br>the Mini-map Markers corresponding to the specified ID numbers in the input list will be set to Enabled<br>For IDs not in the input list, the corresponding Mini-map Markers will be set to Disabled |
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
 * **Modify Player List for Visible Mini-Map Markers** `(Execution.Minimap_Marker.Set_Visible_List)`
 *
 * - The mini-map marker at the specified ID in the Target Entity's Mini-map Marker Component is visible to all Players in the Player List
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Entity that owns the Mini-map Marker component to be edited |
 * | 1 || 🔹 || `Int` || `marker_index` || Mini-Map Marker ID: ID of the specified Mini-map Marker to be edited |
 * | 2 || 🔹 || `L<Ety>` || `player_list` || Player List: The specified Mini-map ID on the Target Entity, visible only to the Player providing input |
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
 * **Modify Player List for Tracking Mini-Map Markers** `(Execution.Minimap_Marker.Set_Track_List)`
 *
 * - Set the mini-map marker at the specified ID on the Target Entity to Tracking Display for the input Player
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Int` || `marker_index` || Mini-Map Marker ID |
 * | 2 || 🔹 || `L<Ety>` || `player_list` || Player List |
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
 * **Query Specified Mini-Map Marker Information** `(Query.Minimap_Marker.Get_Marker_Info)`
 *
 * - Searches the information of the Mini-map Marker with the specified ID in the Mini-map Marker Component on the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Runtime Entity |
 * | 1 || 🔹 || `Int` || `marker_index` || Mini-Map Marker ID: The Mini-map Marker ID to search |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `enabled` || Activation Staet: The active state of the searched Mini-map Marker |
 * | 1 || 🔸 || `L<Ety>` || `visible_players` || List of Players With Visible Markers: Returns the list of Players who can see this Marker |
 * | 2 || 🔸 || `L<Ety>` || `tracking_players` || List of Players Tracking Markers: Returns the list of Players tracking this Marker |
 */
  Query_MinimapMarker_GetMarkerInfo: "Query.Minimap_Marker.Get_Marker_Info",

  /**
 * **Get Entity's Mini-Map Marker Status** `(Query.Minimap_Marker.Get_Marker_Status)`
 *
 * - Searches the configuration and activation status of the Entity's current Mini-map Marker
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Runtime Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `all_markers` || Full Mini-Map Marker ID List: Complete list of Mini-map Marker IDs for this Entity |
 * | 1 || 🔸 || `L<Int>` || `enabled_markers` || Active Mini-Map Marker ID List: Complete list of active Mini-map Marker IDs for this Entity |
 * | 2 || 🔸 || `L<Int>` || `disabled_markers` || Inactive Mini-Map Marker ID List: Complete list of inactive Mini-map Marker IDs for this Entity |
 */
  Query_MinimapMarker_GetMarkerStatus: "Query.Minimap_Marker.Get_Marker_Status",

  /**
 * **Modify Player Markers on the Mini-Map** `(Execution.Minimap_Marker.Update_Markers)`
 *
 * - When the Player Marker option is selected and a corresponding Player Entity is linked in the Node Graph, the Target Entity's display on the mini-map changes to that Player's avatar
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Entity that owns the Mini-map Marker component to be edited |
 * | 1 || 🔹 || `Int` || `marker_index` || Mini-Map Marker ID: ID of the specified Mini-map Marker to be edited |
 * | 2 || 🔹 || `Ety` || `player_entity` || Corresponding Player Entity: Changes the avatar of the corresponding Player Entity |
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
 * **Close Deck Selector** `(Execution.Deck_Selector.Close)`
 *
 * - Close the currently active Deck Selector for the specified Player
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
 * | 0 || 🔹 || `Ety` || `target_player` || Target Player: Active Player Entity |
 * | 1 || 🔹 || `Int` || `picker_index` || Deck Selector Index |
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
 * **When Elemental Reaction Event Occurs** `(Trigger.Unit_Status.On_Element_Reaction)`
 *
 * - Adds the Unit Status effect [Monitor Elemental Reaction] to the Entity. This event is triggered when the conditions are met
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `E<REAC>` || `reaction_type` || Elemental Reaction Type |
 * | 3 || 🔸 || `Ety` || `trigger_entity` || Triggerer Entity |
 * | 4 || 🔸 || `Gid` || `trigger_guid` || Triggerer Entity GUID |
 */
  Trigger_UnitStatus_OnElementReaction: "Trigger.Unit_Status.On_Element_Reaction",

  /**
 * **When Shield Is Attacked** `(Trigger.Unit_Status.On_Shield_Hit)`
 *
 * - Adds the Unit Status effect [Add Shield] to the Entity. This event is triggered when the Shield takes damage
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Ety` || `attacker_entity` || Attacker Entity |
 * | 3 || 🔸 || `Gid` || `attacker_guid` || Attacker GUID |
 * | 4 || 🔸 || `Cfg` || `state_config_id` || Unit Status Config ID |
 * | 5 || 🔸 || `Int` || `layer_before` || Pre-Attack Layers |
 * | 6 || 🔸 || `Int` || `layer_after` || Post-Attack Layers |
 * | 7 || 🔸 || `Flt` || `shield_amount_before` || Shield Value of this Unit Status Before Attack |
 * | 8 || 🔸 || `Flt` || `shield_amount_after` || Shield Value of this Unit Status After Attack |
 */
  Trigger_UnitStatus_OnShieldHit: "Trigger.Unit_Status.On_Shield_Hit",

  /**
 * **Query If Achievement Is Completed** `(Query.Achievement.Is_Completed)`
 *
 * - Searches whether the Achievement corresponding to a specific ID on the Target Entity is complete
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Int` || `achievement_index` || Achievement ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `completed` || Completed |
 */
  Query_Achievement_IsCompleted: "Query.Achievement.Is_Completed",

  /**
 * **Set Achievement Progress Tally** `(Execution.Achievement.Set_Progress)`
 *
 * - Set the progress counter for the specified Achievement ID on the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Set Entity |
 * | 1 || 🔹 || `Int` || `achievement_index` || Achievement ID |
 * | 2 || 🔹 || `Int` || `progress_count` || Progress Tally: Sets the Progress Count to the input value |
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
 * **Change Achievement Progress Tally** `(Execution.Achievement.Add_Progress)`
 *
 * - Change the progress counter for the specified Achievement ID on the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Change Entity |
 * | 1 || 🔹 || `Int` || `achievement_index` || Achievement ID |
 * | 2 || 🔹 || `Int` || `delta` || Progress Tally Change Value: New Value = Previous Value + Change Value |
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
 * **Set Player Settlement Scoreboard Data Display** `(Execution.Stage_Settlement.Set_Scoreboard)`
 *
 * - Set the Player's Scoreboard display data, which is shown on the Scoreboard after Stage Settlement. Since this node involves the display of external functions, [Data Value] and [Data Name] currently support multilingual translation only when manually entering text. If entered via connection input, multilingual translation is not supported.
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Set Entity: Active Player Entity |
 * | 1 || 🔹 || `Int` || `order` || Data Order: The sort order of this data |
 * | 2 || 🔹 || `Str` || `name` || Data Name: The name of this data |
 * | 3 || 🔷 || **`R<T>`** || `value` || Data Value: The value of this data. Supports Integer, Floating Point Number, and String |
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
 * **Set Player Settlement Ranking Value** `(Execution.Stage_Settlement.Set_Player_Rank)`
 *
 * - Set the Player's ranking value after Settlement, then determine the final ranking order according to [Ranking Value Comparison Order] in [Stage Settings] – [Settlement]
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
 * | 0 || 🔹 || `Ety` || `player_entity` || Player Entity |
 * | 1 || 🔹 || `Int` || `rank_value` || Ranking Value |
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
 * **Get Player Settlement Ranking Value** `(Query.Stage_Settlement.Get_Player_Rank)`
 *
 * - Returns the Settlement ranking value for the specified Player Entity
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
 * | 0 || 🔹 || `Ety` || `player_entity` || Player Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `rank_value` || Ranking Value |
 */
  Query_StageSettlement_GetPlayerRank: "Query.Stage_Settlement.Get_Player_Rank",

  /**
 * **Set Player Settlement Success Status** `(Execution.Stage_Settlement.Set_Player_Result)`
 *
 * - Set Player Settlement Success Status
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
 * | 0 || 🔹 || `Ety` || `player_entity` || Player Entity |
 * | 1 || 🔹 || `E<SETL>` || `result_state` || Settlement Status: Three types: Undefined, Victory, Defeat |
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
 * **Get Player Settlement Success Status** `(Query.Stage_Settlement.Get_Player_Result)`
 *
 * - Get Player Settlement Success Status
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
 * | 0 || 🔹 || `Ety` || `player_entity` || Player Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `E<SETL>` || `success` || Settlement Status: Includes: Undetermined, Victory, Defeat |
 */
  Query_StageSettlement_GetPlayerResult: "Query.Stage_Settlement.Get_Player_Result",

  /**
 * **Set Faction Settlement Ranking Value** `(Execution.Stage_Settlement.Set_Faction_Rank)`
 *
 * - Set the faction's ranking value after Settlement, then determine the final ranking order according to [Ranking Value Comparison Order] in [Stage Settings] – [Settlement]
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
 * | 0 || 🔹 || `Fct` || `camp` || Faction: Active Faction Entity |
 * | 1 || 🔹 || `Int` || `rank_value` || Ranking Value |
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
 * **Get Faction Settlement Ranking Value** `(Query.Stage_Settlement.Get_Faction_Rank)`
 *
 * - Returns the Settlement ranking value for the specified Faction
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
 * | 0 || 🔹 || `Fct` || `camp` || Faction |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `rank_value` || Ranking Value |
 */
  Query_StageSettlement_GetFactionRank: "Query.Stage_Settlement.Get_Faction_Rank",

  /**
 * **Set Faction Settlement Success Status** `(Execution.Stage_Settlement.Set_Faction_Result)`
 *
 * - Set Faction Settlement Success Status
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
 * | 0 || 🔹 || `Fct` || `camp` || Faction: Active Faction Entity |
 * | 1 || 🔹 || `E<SETL>` || `result_state` || Settlement Status: Three types: Undefined, Victory, Defeat |
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
 * **Get Faction Settlement Success Status** `(Query.Stage_Settlement.Get_Faction_Result)`
 *
 * - Get Faction Settlement Success Status
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
 * | 0 || 🔹 || `Fct` || `camp` || Faction |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `E<SETL>` || `success` || Settlement Status: Includes: Undetermined, Victory, Defeat |
 */
  Query_StageSettlement_GetFactionResult: "Query.Stage_Settlement.Get_Faction_Result",

  /**
 * **Get Player Ranking Info** `(Query.Rank_Tier.Get_Rank_Info)`
 *
 * - Returns the Player's Rank-related information
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
 * | 0 || 🔹 || `Ety` || `player` || Player Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `total` || Player Rank Total Score |
 * | 1 || 🔸 || `Int` || `win_streak` || Player Win Streak |
 * | 2 || 🔸 || `Int` || `lose_streak` || Player Lose Streak |
 * | 3 || 🔸 || `Int` || `run_streak` || Player Consecutive Escapes |
 */
  Query_RankTier_GetRankInfo: "Query.Rank_Tier.Get_Rank_Info",

  /**
 * **Set Player Rank Score Change** `(Execution.Rank.Modify_Score)`
 *
 * - Set the Player's rank score change based on the settlement status
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
 * | 0 || 🔹 || `Ety` || `player_entity` || Player Entity |
 * | 1 || 🔹 || `E<SETL>` || `settlement_state` || Settlement Status: Includes: Undefined, Victory, Defeat, Escape |
 * | 2 || 🔹 || `Int` || `delta_score` || Score Change |
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
 * **Get Player Rank Score Change** `(Query.Rank_Tier.Get_Score_Change)`
 *
 * - Returns the Rank change score for the Player Entity under different Settlement states
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
 * | 0 || 🔹 || `Ety` || `player` || Player Entity |
 * | 1 || 🔹 || `E<SETL>` || `result` || Settlement Status |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `score` || Score |
 */
  Query_RankTier_GetScoreChange: "Query.Rank_Tier.Get_Score_Change",

  /**
 * **Set Player Escape Validity** `(Execution.Rank.Set_Escape_Valid)`
 *
 * - Set whether escaping is permitted for the specified Player
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
 * | 0 || 🔹 || `Ety` || `player_entity` || Player Entity |
 * | 1 || 🔹 || `Bol` || `is_valid` || Valid |
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
 * **Get Player Escape Validity** `(Query.Rank_Tier.Get_Escape_Status)`
 *
 * - Get Player Escape Permission
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
 * | 0 || 🔹 || `Ety` || `player` || Player Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `legal` || Valid |
 */
  Query_RankTier_GetEscapeStatus: "Query.Rank_Tier.Get_Escape_Status",

  /**
 * **Switch the scoring group that affects player's competitive rank** `(Execution.Rank.Switch_Score_Group)`
 *
 * - Switch the active Scoring Group of the specified Player's Ranking by Scoring Group ID
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
 * | 0 || 🔹 || `Ety` || `player_entity` || Player Entity |
 * | 1 || 🔹 || `Int` || `group_index` || Score Group ID: The ID corresponding to the specified Score Group in Peripheral System management |
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
 * **Query Current Environment Time** `(Query.Stage_Related.Get_Env_Time)`
 *
 * - Searches the current Environment Time, in the range [0, 24)
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
 * | 0 || 🔸 || `Flt` || `env_time` || Current Environment Time: The value range is [0, 24) |
 * | 1 || 🔸 || `Int` || `day_count` || Current Loop Day: Number of Loop Days elapsed |
 */
  Query_StageRelated_GetEnvTime: "Query.Stage_Related.Get_Env_Time",

  /**
 * **Set Current Environment Time** `(Execution.Stage_Related.Set_Time)`
 *
 * - Instantly switch Environment Time to the specified hour. The parameter must be a Floating Point Number between 0 and 24
 * - If the target hour is earlier than the current hour, it is treated as the next day (+1 day)
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
 * | 0 || 🔹 || `Flt` || `environment_time` || Environment Time: Must be a floating point value between 0–24; this Node will not take effect if the value is outside this range |
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
 * **Set Environment Time Passage Speed** `(Execution.Stage_Related.Set_Time_Speed)`
 *
 * - Minutes elapsed per second, limited to 0 - 60 (Teyvat speed is 1)
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
 * | 0 || 🔹 || `Flt` || `environment_time_rate` || Environment Time Passage Speed: Clamped to the range 0–60. Values outside this range are automatically set to 0 or 60 |
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
 * **Toggle Entity Light Source** `(Execution.Light_Component.Toggle_Light)`
 *
 * - Adjust the Light Source state at the specified ID in the Light Source Component on the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Int` || `light_index` || Light Source ID |
 * | 2 || 🔹 || `Bol` || `toggle_mode` || Enable or Disable: If set to True, turns On |
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
 * **Switch Follow Motion Device Target by Entity** `(Execution.Follow_Motion.Set_Target_Entity)`
 *
 * - Switch the Follow Target of the Follow Motion Device by Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Ety` || `follow_entity` || Follow Target Entity: The Entity that follows the Target |
 * | 2 || 🔹 || `Str` || `socket_name` || Follow Target Attachment Point Name: Name of the Attachment Point to follow |
 * | 3 || 🔹 || `Vec` || `pos_offset` || Location Offset: Location Offset based on the Follow Coordinate System |
 * | 4 || 🔹 || `Vec` || `rot_offset` || Rotation Offset: Rotation Offset based on the Follow Coordinate System |
 * | 5 || 🔹 || `E<SYSC>` || `coord_sys` || Follow Coordinate System: Options: Relative Coordinate System or World Coordinate System |
 * | 6 || 🔹 || `E<FOLO>` || `follow_type` || Follow Type: Options: Completely Follow, Follow Location, Follow Rotation |
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
 * **Get All Entities Within the Collision Trigger** `(Query.Collision_Trigger.Get_Overlapping_Entities)`
 *
 * - Returns all Entities within the Collision Trigger corresponding to a specific ID in the Collision Trigger Component on the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Int` || `trigger_index` || Trigger ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `entities` || Entity List |
 */
  Query_CollisionTrigger_GetOverlappingEntities: "Query.Collision_Trigger.Get_Overlapping_Entities",

  /**
 * **Get Entity Advanced Attribute** `(Query.Entity_Related.Get_Adv_Attr)`
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `crit_rate` || CRIT Rate |
 * | 1 || 🔸 || `Flt` || `crit_dmg` || CRIT DMG |
 * | 2 || 🔸 || `Flt` || `heal_bonus` || Healing Bonus |
 * | 3 || 🔸 || `Flt` || `incoming_healing_bonus` || Incoming Healing Bonus |
 * | 4 || 🔸 || `Flt` || `energy_recharge` || Energy Recharge |
 * | 5 || 🔸 || `Flt` || `cd_reduction` || CD Reduction |
 * | 6 || 🔸 || `Flt` || `shield_amount` || Shield Strength |
 */
  Query_EntityRelated_GetAdvAttr: "Query.Entity_Related.Get_Adv_Attr",

  /**
 * **Get Entity Elemental Attribute** `(Query.Entity_Related.Get_Elem_Attr)`
 *
 * - Returns the Element Attributes of the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `pyro_bonus` || Pyro DMG Bonus |
 * | 1 || 🔸 || `Flt` || `pyro_res` || Pyro RES |
 * | 2 || 🔸 || `Flt` || `hydro_bonus` || Hydro DMG Bonus |
 * | 3 || 🔸 || `Flt` || `hydro_res` || Hydro RES |
 * | 4 || 🔸 || `Flt` || `dendro_bonus` || Dendro DMG Bonus |
 * | 5 || 🔸 || `Flt` || `dendro_res` || Dendro RES |
 * | 6 || 🔸 || `Flt` || `electro_bonus` || Electro DMG Bonus |
 * | 7 || 🔸 || `Flt` || `electro_res` || Electro RES |
 * | 8 || 🔸 || `Flt` || `anemo_bonus` || Anemo DMG Bonus |
 * | 9 || 🔸 || `Flt` || `anemo_res` || Anemo RES |
 * | 10 || 🔸 || `Flt` || `cryo_bonus` || Cryo DMG Bonus |
 * | 11 || 🔸 || `Flt` || `cryo_res` || Cryo RES |
 * | 12 || 🔸 || `Flt` || `geo_bonus` || Geo DMG Bonus |
 * | 13 || 🔸 || `Flt` || `geo_res` || Geo RES |
 * | 14 || 🔸 || `Flt` || `physical_bonus` || Physical DMG Bonus |
 * | 15 || 🔸 || `Flt` || `physical_res` || Physical RES |
 */
  Query_EntityRelated_GetElemAttr: "Query.Entity_Related.Get_Elem_Attr",

  /**
 * **Add Affix to Equipment** `(Execution.Equipment.Add_Affix)`
 *
 * - Add a preconfigured Affix to the specified Equipment instance, with the option to overwrite the Affix value
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
 * | 0 || 🔹 || `Int` || `equip_index` || Equipment ID: Integer ID generated during Equipment Initialization to identify the equipment instance |
 * | 1 || 🔹 || `Cfg` || `affix_config_id` || Affix Config ID: The Config ID of the preconfigured Affix defined in Equipment Data Management |
 * | 2 || 🔹 || `Bol` || `overwrite` || Overwrite Affix Value |
 * | 3 || 🔹 || `Flt` || `affix_value` || Affix Value: Can overwrite the value on a pre-configured Affix |
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
 * **Remove Equipment Affix** `(Execution.Equipment.Remove_Affix)`
 *
 * - Remove the specified Affix from the Equipment instance
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
 * | 0 || 🔹 || `Int` || `equip_index` || Equipment ID: Integer ID generated during Equipment Initialization to identify the equipment instance |
 * | 1 || 🔹 || `Int` || `affix_index` || Affix ID |
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
 * **Modify Equipment Affix Value** `(Execution.Equipment.Modify_Affix)`
 *
 * - Edit the value of the specified Affix on the Equipment instance
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
 * | 0 || 🔹 || `Int` || `equip_index` || Equipment Index: Integer ID generated during Equipment Initialization to identify the equipment instance |
 * | 1 || 🔹 || `Int` || `affix_index` || Affix ID |
 * | 2 || 🔹 || `Flt` || `affix_value` || Affix Value |
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
 * **Get Equipment Affix List** `(Query.Equipment.Get_Affixes)`
 *
 * - Returns a list of all Affixes on this Equipment instance
 * - When Equipment is initialized, Affix values are randomized, so the Equipment Affixes on the Equipment instance also generate corresponding instances. Therefore, the data type is Integer rather than Config ID
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
 * | 0 || 🔹 || `Int` || `equip_index` || Equipment Index |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `entry_list` || Equipment Affix List |
 */
  Query_Equipment_GetAffixes: "Query.Equipment.Get_Affixes",

  /**
 * **Get Equipment Affix Config ID** `(Query.Equipment.Get_Affix_Config)`
 *
 * - Returns the Config ID of an Equipment Affix by its ID on the Equipment instance
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
 * | 0 || 🔹 || `Int` || `equip_index` || Equipment Index |
 * | 1 || 🔹 || `Int` || `entry_index` || Affix ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Cfg` || `entry_config_id` || Affix Config ID |
 */
  Query_Equipment_GetAffixConfig: "Query.Equipment.Get_Affix_Config",

  /**
 * **Get Equipment Affix Value** `(Query.Equipment.Get_Affix_Value)`
 *
 * - Returns the value of the Affix at the specified ID on the Equipment instance
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
 * | 0 || 🔹 || `Int` || `equip_index` || Equipment Index |
 * | 1 || 🔹 || `Int` || `entry_index` || Affix ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `entry_value` || Affix Value |
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
 * **When Text Bubble Is Completed** `(Trigger.Text_Bubble.On_Bubble_Complete)`
 *
 * - This event can only be mounted by Text Bubble Components and is received by the Entity's Node Graph that completed the dialogue
 * - Completion refers to when the final line of dialogue has finished playing
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
 * | 0 || 🔸 || `Ety` || `owner_entity` || Bubble Owner Entity: Runtime Entity with the Text Bubble component mounted |
 * | 1 || 🔸 || `Ety` || `character_entity` || Character Entity: Target Character of the current Bubble dialogue |
 * | 2 || 🔸 || `Cfg` || `bubble_config_id` || Text Bubble Configuration ID: Currently active Text Bubble Config ID |
 * | 3 || 🔸 || `Int` || `complete_count` || Text Bubble Completion Count: Number of times the currently active Text Bubble has been fully played for this dialogue Character |
 */
  Trigger_TextBubble_OnBubbleComplete: "Trigger.Text_Bubble.On_Bubble_Complete",

  /**
 * **When Equipment Affix Value Changes** `(Trigger.Equipment.On_Affix_Change)`
 *
 * - This event is triggered when Equipment Affix values change. The Owner of the Equipment will receive it. Configure this in the Item Node Graph
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
 * | 0 || 🔸 || `Ety` || `owner_entity` || Equipment Owner |
 * | 1 || 🔸 || `Gid` || `owner_guid` || Equipment Owner GUID |
 * | 2 || 🔸 || `Int` || `equip_index` || Equipment Index |
 * | 3 || 🔸 || `Int` || `affix_index` || Affix ID: The corresponding ID of this Entry within the Equipment Affixes |
 * | 4 || 🔸 || `Flt` || `value_old` || Pre-Change Value |
 * | 5 || 🔸 || `Flt` || `value_new` || Post-Change Value |
 */
  Trigger_Equipment_OnAffixChange: "Trigger.Equipment.On_Affix_Change",

  /**
 * **When Item Is Added to Inventory** `(Trigger.Item.On_Item_Add)`
 *
 * - This event is triggered when a new Item is added to the Inventory. The Owner of the Inventory Component will receive it. This event is not triggered by quantity-only changes
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
 * | 0 || 🔸 || `Ety` || `owner_entity` || Item Owner Entity |
 * | 1 || 🔸 || `Gid` || `owner_guid` || Item Owner GUID |
 * | 2 || 🔸 || `Cfg` || `item_config_id` || Item Config ID |
 * | 3 || 🔸 || `Int` || `gain_count` || Quantity Obtained |
 */
  Trigger_Item_OnItemAdd: "Trigger.Item.On_Item_Add",

  /**
 * **When Item Is Lost From Inventory** `(Trigger.Item.On_Item_Lose)`
 *
 * - This event is triggered when an Item is removed from the Inventory (its quantity becomes 0). The Owner of the Inventory Component will receive it
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
 * | 0 || 🔸 || `Ety` || `owner_entity` || Item Owner Entity |
 * | 1 || 🔸 || `Gid` || `owner_guid` || Item Owner GUID |
 * | 2 || 🔸 || `Cfg` || `item_config_id` || Item Config ID |
 * | 3 || 🔸 || `Int` || `lost_count` || Quantity Lost |
 */
  Trigger_Item_OnItemLose: "Trigger.Item.On_Item_Lose",

  /**
 * **When the Quantity of Inventory Item Changes** `(Trigger.Item.On_Item_Quantity_Change)`
 *
 * - This event is triggered when the quantity of Items in the Inventory changes. The Owner of the Inventory Component will receive it
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
 * | 0 || 🔸 || `Ety` || `owner_entity` || Item Owner Entity |
 * | 1 || 🔸 || `Gid` || `owner_guid` || Item Owner GUID |
 * | 2 || 🔸 || `Cfg` || `item_config_id` || Item Config ID |
 * | 3 || 🔸 || `Int` || `count_before` || Pre-Change Quantity |
 * | 4 || 🔸 || `Int` || `count_after` || Post-Change Quantity |
 * | 5 || 🔸 || `E<ITMC>` || `change_reason` || Reason for Change |
 */
  Trigger_Item_OnItemQuantityChange: "Trigger.Item.On_Item_Quantity_Change",

  /**
 * **When the Quantity of Inventory Currency Changes** `(Trigger.Item.On_Currency_Change)`
 *
 * - This event is triggered when the amount of Inventory Currency changes. The Owner of the Inventory Component will receive it
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
 * | 0 || 🔸 || `Ety` || `owner_entity` || Currency Owner Entity |
 * | 1 || 🔸 || `Gid` || `owner_guid` || Currency Owner GUID |
 * | 2 || 🔸 || `Cfg` || `currency_config_id` || Currency Config ID |
 * | 3 || 🔸 || `Int` || `currency_delta` || Currency Change Value |
 */
  Trigger_Item_OnCurrencyChange: "Trigger.Item.On_Currency_Change",

  /**
 * **Increase Maximum Inventory Capacity** `(Execution.Inventory.Expand_Capacity)`
 *
 * - Increase the maximum Inventory capacity of the specified Inventory Owner
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
 * | 0 || 🔹 || `Ety` || `owner_entity` || Inventory Owner Entity |
 * | 1 || 🔹 || `Int` || `delta_capacity` || Increase Capacity |
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
 * **Modify Inventory Item Quantity** `(Execution.Inventory.Modify_Item)`
 *
 * - Edit the quantity of the specified Item in the Inventory
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
 * | 0 || 🔹 || `Ety` || `owner_entity` || Inventory Owner Entity |
 * | 1 || 🔹 || `Cfg` || `item_config_id` || Item Config ID |
 * | 2 || 🔹 || `Int` || `delta` || Change Value: New Value = Original Value + Change Value |
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
 * **Set Inventory Loot Item/Currency Quantity** `(Execution.Inventory.Set_Drop_Amount)`
 *
 * - Set the type and quantity of Items or Currency for the Inventory drop
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
 * | 0 || 🔹 || `Ety` || `owner_entity` || Inventory Owner Entity |
 * | 1 || 🔹 || `Cfg` || `config_id` || Item/Currency Config ID |
 * | 2 || 🔹 || `Int` || `drop_count` || Quantity Dropped |
 * | 3 || 🔹 || `E<LOOT>` || `drop_type` || Loot Type: Types: Shared Reward (one share for all), Individualized Reward (one share per person) |
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
 * **Modify Inventory Currency Quantity** `(Execution.Inventory.Modify_Currency)`
 *
 * - Edit the amount of the specified Currency in the Inventory
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
 * | 0 || 🔹 || `Ety` || `owner_entity` || Inventory Owner Entity |
 * | 1 || 🔹 || `Cfg` || `currency_config_id` || Currency Config ID |
 * | 2 || 🔹 || `Int` || `delta` || Change Value: New Value = Original Value + Change Value |
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
 * **Get Inventory Capacity** `(Query.Item.Get_Capacity)`
 *
 * - Get Inventory Capacity
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
 * | 0 || 🔹 || `Ety` || `owner` || Inventory Owner Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `capacity` || Inventory Capacity |
 */
  Query_Item_GetCapacity: "Query.Item.Get_Capacity",

  /**
 * **Get Inventory Item Quantity** `(Query.Item.Get_Item_Amount)`
 *
 * - Returns the quantity of the Item with the specified Config ID in the Inventory
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
 * | 0 || 🔹 || `Ety` || `owner` || Inventory Owner Entity |
 * | 1 || 🔹 || `Cfg` || `item_config_id` || Item Config ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `item_count` || Item Quantity |
 */
  Query_Item_GetItemAmount: "Query.Item.Get_Item_Amount",

  /**
 * **Get Inventory Currency Quantity** `(Query.Item.Get_Currency_Amount)`
 *
 * - Returns the amount of Currency with the specified Config ID in the Inventory
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
 * | 0 || 🔹 || `Ety` || `owner` || Inventory Owner Entity |
 * | 1 || 🔹 || `Cfg` || `currency_id` || Currency Config ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `resource_num` || Resource Quantity |
 */
  Query_Item_GetCurrencyAmount: "Query.Item.Get_Currency_Amount",

  /**
 * **When Equipment Is Initialized** `(Trigger.Equipment.On_Init)`
 *
 * - When Equipment is first obtained and enters the Inventory, it is initialized. The event's output parameters return the unique ID of the Equipment instance. Use this ID to edit the Equipment dynamically. The Owner of the Equipment will receive this event. Configure this in the Item Node Graph
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
 * | 0 || 🔸 || `Ety` || `owner_entity` || Equipment Owner |
 * | 1 || 🔸 || `Gid` || `owner_guid` || Equipment Owner GUID |
 * | 2 || 🔸 || `Int` || `equip_index` || Equipment Index |
 */
  Trigger_Equipment_OnInit: "Trigger.Equipment.On_Init",

  /**
 * **When Equipment Is Equipped** `(Trigger.Equipment.On_Equip)`
 *
 * - This event is triggered when Equipment is equipped. The Owner of the Equipment will receive it. Configure this in the Item Node Graph
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
 * | 0 || 🔸 || `Ety` || `owner_entity` || Equipment Holder Entity |
 * | 1 || 🔸 || `Gid` || `owner_guid` || Equipment Holder GUID |
 * | 2 || 🔸 || `Int` || `equip_index` || Equipment Index |
 */
  Trigger_Equipment_OnEquip: "Trigger.Equipment.On_Equip",

  /**
 * **When Equipment Is Unequipped** `(Trigger.Equipment.On_Unequip)`
 *
 * - This event is triggered when Equipment is unequipped. The Owner of the Equipment will receive it. Configure this in the Item Node Graph
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
 * | 0 || 🔸 || `Ety` || `owner_entity` || Equipment Owner Entity |
 * | 1 || 🔸 || `Gid` || `owner_guid` || Equipment Owner GUID |
 * | 2 || 🔸 || `Int` || `equip_index` || Equipment Index |
 */
  Trigger_Equipment_OnUnequip: "Trigger.Equipment.On_Unequip",

  /**
 * **Loss HP** `(Execution.Combat.Loss_HP)`
 *
 * - Directly cause the specified target to lose HP. Losing HP is not an attack, so it does not trigger attack-related events
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Target that loses HP |
 * | 1 || 🔹 || `Flt` || `hp_loss` || HP Loss: The amount of HP lost in this instance |
 * | 2 || 🔹 || `Bol` || `is_fatal` || Lethal: If set to False, this HP loss will leave the Target with at least 1 HP remaining |
 * | 3 || 🔹 || `Bol` || `can_be_blocked_by_invincible` || Can be blocked by invincibility: If set to True, and the Target is set to Invincible via Unit Status, HP loss has no effect |
 * | 4 || 🔹 || `Bol` || `can_be_blocked_by_lock_hp` || Can be Blocked by Locked HP?: If set to True, and the Target's HP is locked via Unit Status, HP loss has no effect |
 * | 5 || 🔹 || `E<CDMG>` || `damage_floating_text_type` || Damage Pop-Up Type: No Pop-Up<br>Normal Pop-Up<br>CRIT Hit Pop-Up |
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
 * **Recover HP Directly** `(Execution.Combat.Recover_HP_Instant)`
 *
 * - Directly restore HP to the specified Target Entity. Unlike [Recover HP], this node does not require an Ability Unit
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
 * | 0 || 🔹 || `Ety` || `heal_source` || Recover Initiator Entity: The Entity that initiates healing |
 * | 1 || 🔹 || `Ety` || `heal_target` || Recover Target Entity: The Target Entity to be healed |
 * | 2 || 🔹 || `Flt` || `heal_amount` || Recovery Amount: The amount of HP restored in this healing instance |
 * | 3 || 🔹 || `Bol` || `ignore_adjust` || Ignore Recovery Amount Adjustment: If set to True, this healing amount is not affected by the Target's Unit Status effects that adjust healing |
 * | 4 || 🔹 || `Flt` || `hatred_rate` || Aggro Generation Multiplier: The Aggro generated by this healing, expressed as a multiplier. Only applicable when using Custom Aggro Mode |
 * | 5 || 🔹 || `Flt` || `hatred_delta` || Aggro Generation Increment: The Aggro generated by this healing, expressed as an incremental value. Only applicable when using Custom Aggro Mode |
 * | 6 || 🔹 || `L<Str>` || `heal_tags` || Healing Tag List: The list of tags associated with this healing action. These can be accessed in the When HP Is Recovered and When Initiating HP Recovery events to identify a specific healing action |
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
 * **When Custom Shop Item Is Sold** `(Trigger.Shop.On_Custom_Item_Sold)`
 *
 * - This event is triggered when Custom items are sold in the Shop. The Owner of the Shop Component will receive it
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
 * | 0 || 🔸 || `Ety` || `shop_owner` || Shop Owner |
 * | 1 || 🔸 || `Gid` || `shop_owner_guid` || Shop Owner GUID |
 * | 2 || 🔸 || `Ety` || `buyer_entity` || Buyer Entity |
 * | 3 || 🔸 || `Int` || `shop_index` || Shop ID |
 * | 4 || 🔸 || `Int` || `item_index` || Shop Item ID |
 * | 5 || 🔸 || `Int` || `buy_count` || Purchase Quantity |
 */
  Trigger_Shop_OnCustomItemSold: "Trigger.Shop.On_Custom_Item_Sold",

  /**
 * **When Selling Inventory Items in the Shop** `(Trigger.Shop.On_Inv_Item_Sold)`
 *
 * - This event is triggered when Inventory items are sold in the Shop. The Owner of the Shop Component will receive it
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
 * | 0 || 🔸 || `Ety` || `shop_owner` || Shop Owner |
 * | 1 || 🔸 || `Gid` || `shop_owner_guid` || Shop Owner GUID |
 * | 2 || 🔸 || `Ety` || `buyer_entity` || Buyer Entity |
 * | 3 || 🔸 || `Int` || `shop_index` || Shop ID |
 * | 4 || 🔸 || `Cfg` || `item_config_id` || Item Config ID |
 * | 5 || 🔸 || `Int` || `buy_count` || Purchase Quantity |
 */
  Trigger_Shop_OnInvItemSold: "Trigger.Shop.On_Inv_Item_Sold",

  /**
 * **Open Shop** `(Execution.Shop.Open)`
 *
 * - Open the Shop from the Player Entity's perspective during gameplay
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
 * | 0 || 🔹 || `Ety` || `player_entity` || Player Entity |
 * | 1 || 🔹 || `Ety` || `owner_entity` || Shop Owner Entity: The Shop ID corresponding to the Shop component on the Shop Owner Entity |
 * | 2 || 🔹 || `Int` || `shop_index` || Shop ID |
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
 * **Close Shop** `(Execution.Shop.Close)`
 *
 * - Close all open Shops from the Player Entity's perspective during gameplay
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
 * | 0 || 🔹 || `Ety` || `player_entity` || Player Entity |
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
 * **Modify Custom Shop Item Sales Info** `(Execution.Shop.Modify_Custom_Sale)`
 *
 * - Edit sale info for custom shop items
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
 * | 0 || 🔹 || `Ety` || `owner_entity` || Shop Owner Entity |
 * | 1 || 🔹 || `Int` || `shop_index` || Shop ID: The Shop ID corresponding to the Shop component on the Shop Owner Entity |
 * | 2 || 🔹 || `Int` || `item_index` || Shop Item ID |
 * | 3 || 🔹 || `Cfg` || `config_id` || Item Config ID |
 * | 4 || 🔹 || `D<Cfg,Int>` || `sell_currency` || Sell Currency Dictionary |
 * | 5 || 🔹 || `Int` || `page_index` || Affiliated Tab ID: 1 Equipment, 2 Consumables, 3 Materials, 4 Valuables |
 * | 6 || 🔹 || `Bol` || `is_limited` || Limit Purchase |
 * | 7 || 🔹 || `Int` || `limit_count` || Purchase Limit |
 * | 8 || 🔹 || `Int` || `priority` || Sort Priority |
 * | 9 || 🔹 || `Bol` || `is_sellable` || Can Be Sold |
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
 * **When selling items to the shop** `(Trigger.Shop.On_Sell_Item)`
 *
 * - This event is triggered when items are purchased by the Shop. The Owner of the Shop Component will receive it
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
 * | 0 || 🔸 || `Ety` || `shop_owner` || Shop Owner |
 * | 1 || 🔸 || `Gid` || `shop_owner_guid` || Shop Owner GUID |
 * | 2 || 🔸 || `Ety` || `seller_entity` || Seller Entity |
 * | 3 || 🔸 || `Int` || `shop_index` || Shop ID |
 * | 4 || 🔸 || `D<Cfg,Int>` || `buy_dict` || Purchase Item Dictionary |
 */
  Trigger_Shop_OnSellItem: "Trigger.Shop.On_Sell_Item",

  /**
 * **Modify Inventory Shop Item Sales Info** `(Execution.Shop.Modify_Inventory_Sale)`
 *
 * - Edit sale info for inventory shop items
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
 * | 0 || 🔹 || `Ety` || `owner_entity` || Shop Owner Entity |
 * | 1 || 🔹 || `Int` || `shop_index` || Shop ID: The Shop ID corresponding to the Shop component on the Shop Owner Entity |
 * | 2 || 🔹 || `Cfg` || `config_id` || Item Config ID |
 * | 3 || 🔹 || `D<Cfg,Int>` || `sell_currency` || Sell Currency Dictionary |
 * | 4 || 🔹 || `Int` || `page_index` || Affiliated Tab ID |
 * | 5 || 🔹 || `Int` || `priority` || Sort Priority |
 * | 6 || 🔹 || `Bol` || `is_sellable` || Can Be Sold |
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
 * **Modify Item Purchase Info in the Purchase List** `(Execution.Shop.Modify_Cart_Item)`
 *
 * - Edit Item Purchase Information in the Item Purchase List
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
 * | 0 || 🔹 || `Ety` || `owner_entity` || Shop Owner Entity |
 * | 1 || 🔹 || `Int` || `shop_index` || Shop ID: The Shop ID corresponding to the Shop component on the Shop Owner Entity |
 * | 2 || 🔹 || `Cfg` || `item_config_id` || Shop Item Config ID |
 * | 3 || 🔹 || `D<Cfg,Int>` || `buy_currency` || Purchase Currency Dictionary |
 * | 4 || 🔹 || `Bol` || `is_purchasable` || Purchasable |
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
 * **Add New Item to Custom Shop Sales List** `(Execution.Shop.Add_Custom_Sale)`
 *
 * - Add items to the Custom Shop Sales List. Upon success, an Integer ID is generated in the Output Parameter as the item identifier
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
 * | 0 || 🔹 || `Ety` || `owner_entity` || Shop Owner Entity |
 * | 1 || 🔹 || `Int` || `shop_index` || Shop ID: The Shop ID corresponding to the Shop component on the Shop Owner Entity |
 * | 2 || 🔹 || `Cfg` || `item_config_id` || Shop Item Config ID |
 * | 3 || 🔹 || `D<Cfg,Int>` || `sell_currency` || Sell Currency Dictionary |
 * | 4 || 🔹 || `Int` || `page_index` || Affiliated Tab ID: 1 Equipment, 2 Consumables, 3 Materials, 4 Valuables |
 * | 5 || 🔹 || `Bol` || `is_limited` || Limit Purchase |
 * | 6 || 🔹 || `Int` || `limit_count` || Purchase Limit |
 * | 7 || 🔹 || `Int` || `priority` || Sort Priority |
 * | 8 || 🔹 || `Bol` || `is_sellable` || Can Be Sold |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Int` || `item_index_out` || Item Index |
 */
  Execution_Shop_AddCustomSale: "Execution.Shop.Add_Custom_Sale",

  /**
 * **Add New Item to Inventory Shop Sales List** `(Execution.Shop.Add_Inventory_Sale)`
 *
 * - Add new items to the inventory shop's sales list
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
 * | 0 || 🔹 || `Ety` || `owner_entity` || Shop Owner Entity |
 * | 1 || 🔹 || `Int` || `shop_index` || Shop ID: The Shop ID corresponding to the Shop component on the Shop Owner Entity |
 * | 2 || 🔹 || `Cfg` || `item_config_id` || Shop Item Config ID |
 * | 3 || 🔹 || `D<Cfg,Int>` || `sell_currency` || Sell Currency Dictionary |
 * | 4 || 🔹 || `Int` || `page_index` || Affiliated Tab ID: 1 Equipment, 2 Consumables, 3 Materials, 4 Valuables |
 * | 5 || 🔹 || `Int` || `priority` || Sort Priority |
 * | 6 || 🔹 || `Bol` || `is_sellable` || Can Be Sold |
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
 * **Add Items to the Purchase List** `(Execution.Shop.Add_To_Cart)`
 *
 * - Add New Items to the Item Purchase List
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
 * | 0 || 🔹 || `Ety` || `owner_entity` || Shop Owner Entity |
 * | 1 || 🔹 || `Int` || `shop_index` || Shop ID: The Shop ID corresponding to the Shop component on the Shop Owner Entity |
 * | 2 || 🔹 || `Cfg` || `item_config_id` || Shop Item Config ID |
 * | 3 || 🔹 || `D<Cfg,Int>` || `buy_currency` || Purchase Currency Dictionary |
 * | 4 || 🔹 || `Bol` || `is_purchasable` || Purchasable |
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
 * **Remove Item From Custom Shop Sales List** `(Execution.Shop.Remove_Custom_Sale)`
 *
 * - Remove items from the custom shop's sales list
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
 * | 0 || 🔹 || `Ety` || `owner_entity` || Shop Owner Entity |
 * | 1 || 🔹 || `Int` || `shop_index` || Shop ID: The Shop ID corresponding to the Shop component on the Shop Owner Entity |
 * | 2 || 🔹 || `Int` || `item_index` || Shop Item ID |
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
 * **Remove Item From Inventory Shop Sales List** `(Execution.Shop.Remove_Inventory_Sale)`
 *
 * - Remove items from the inventory shop's sales list
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
 * | 0 || 🔹 || `Ety` || `owner_entity` || Shop Owner Entity |
 * | 1 || 🔹 || `Int` || `shop_index` || Shop ID: The Shop ID corresponding to the Shop component on the Shop Owner Entity |
 * | 2 || 🔹 || `Cfg` || `config_id` || Item Config ID |
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
 * **Remove item from purchase list** `(Execution.Shop.Remove_From_Cart)`
 *
 * - Remove items from the purchase list
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
 * | 0 || 🔹 || `Ety` || `owner_entity` || Shop Owner Entity |
 * | 1 || 🔹 || `Int` || `shop_index` || Shop ID: The Shop ID corresponding to the Shop component on the Shop Owner Entity |
 * | 2 || 🔹 || `Cfg` || `item_config_id` || Shop Item Config ID |
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
 * **Query Custom Shop Item Sales List** `(Query.Shop.Get_Custom_Sales)`
 *
 * - Searches the Custom Shop sale list; the output parameter is a list of Item IDs
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
 * | 0 || 🔹 || `Ety` || `shop_owner` || Shop Owner Entity |
 * | 1 || 🔹 || `Int` || `shop_index` || Shop ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `goods_index_list` || Shop Item ID List |
 */
  Query_Shop_GetCustomSales: "Query.Shop.Get_Custom_Sales",

  /**
 * **Query Inventory Shop Item Sales List** `(Query.Shop.Get_Inv_Sales)`
 *
 * - Search the inventory shop's sales list
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
 * | 0 || 🔹 || `Ety` || `shop_owner` || Shop Owner Entity |
 * | 1 || 🔹 || `Int` || `shop_index` || Shop ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Cfg>` || `item_ids` || Item Config ID List |
 */
  Query_Shop_GetInvSales: "Query.Shop.Get_Inv_Sales",

  /**
 * **Query Shop Purchase Item List** `(Query.Shop.Get_Cart_Items)`
 *
 * - Search the shop's purchase list
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
 * | 0 || 🔹 || `Ety` || `shop_owner` || Shop Owner Entity |
 * | 1 || 🔹 || `Int` || `shop_index` || Shop ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Cfg>` || `item_ids` || Item Config ID List |
 */
  Query_Shop_GetCartItems: "Query.Shop.Get_Cart_Items",

  /**
 * **Query Custom Shop Item Sales Info** `(Query.Shop.Get_Custom_Item_Info)`
 *
 * - Searches sale information for a specified Item in the Custom Shop
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
 * | 0 || 🔹 || `Ety` || `shop_owner` || Shop Owner Entity |
 * | 1 || 🔹 || `Int` || `shop_index` || Shop ID |
 * | 2 || 🔹 || `Int` || `goods_index` || Shop Item ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Cfg` || `item_config` || Item Config ID |
 * | 1 || 🔸 || `D<Cfg,Int>` || `sell_currency` || Sell Currency Dictionary |
 * | 2 || 🔸 || `Int` || `tab_id` || Affiliated Tab ID |
 * | 3 || 🔸 || `Bol` || `limited` || Limit Purchase |
 * | 4 || 🔸 || `Int` || `limit_count` || Purchase Limit |
 * | 5 || 🔸 || `Int` || `priority` || Sort Priority |
 * | 6 || 🔸 || `Bol` || `can_sell` || Can Be Sold |
 */
  Query_Shop_GetCustomItemInfo: "Query.Shop.Get_Custom_Item_Info",

  /**
 * **Query Inventory Shop Item Sales Info** `(Query.Shop.Get_Inv_Item_Info)`
 *
 * - Searches sale information for a specified Item in the Inventory Shop
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
 * | 0 || 🔹 || `Ety` || `shop_owner` || Shop Owner Entity |
 * | 1 || 🔹 || `Int` || `shop_index` || Shop ID |
 * | 2 || 🔹 || `Cfg` || `item_config_id` || Item Config ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `D<Cfg,Int>` || `sell_currency` || Sell Currency Dictionary |
 * | 1 || 🔸 || `Int` || `priority` || Sort Priority |
 * | 2 || 🔸 || `Bol` || `can_sell` || Can Be Sold |
 */
  Query_Shop_GetInvItemInfo: "Query.Shop.Get_Inv_Item_Info",

  /**
 * **Query Shop Item Purchase Info** `(Query.Shop.Get_Purchase_Info)`
 *
 * - Searches purchase information for a specified Item in the Shop
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
 * | 0 || 🔹 || `Ety` || `shop_owner` || Shop Owner Entity |
 * | 1 || 🔹 || `Int` || `shop_index` || Shop ID |
 * | 2 || 🔹 || `Cfg` || `item_config_id` || Item Config ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `D<Cfg,Int>` || `currency_dict` || Purchase Currency Dictionary |
 * | 1 || 🔸 || `Bol` || `can_purchase` || Purchasable |
 */
  Query_Shop_GetPurchaseInfo: "Query.Shop.Get_Purchase_Info",

  /**
 * **Set Inventory Item Drop Content** `(Execution.Inventory.Set_Drop_Items)`
 *
 * - Configure the Inventory Item drop data in Dictionary format, and specify the Drop Type
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
 * | 0 || 🔹 || `Ety` || `owner_entity` || Inventory Owner Entity |
 * | 1 || 🔹 || `D<Cfg,Int>` || `item_drop_dict` || Item Drop Dictionary |
 * | 2 || 🔹 || `E<LOOT>` || `drop_type` || Loot Type: Types: Shared Reward (one share for all), Individualized Reward (one share per person) |
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
 * **Get all basic items from Inventory** `(Query.Item.Get_Basic_Items)`
 *
 * - Returns all Basic Items in the Inventory, including Item types and their quantities
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
 * | 0 || 🔹 || `Ety` || `owner` || Inventory Owner Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `D<Cfg,Int>` || `basic_dict` || Basic Item Dictionary |
 */
  Query_Item_GetBasicItems: "Query.Item.Get_Basic_Items",

  /**
 * **Get All Currency From Inventory** `(Query.Item.Get_Currency_All)`
 *
 * - Returns all Currencies in the Inventory, including types and corresponding amounts
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
 * | 0 || 🔹 || `Ety` || `owner` || Inventory Owner Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `D<Cfg,Int>` || `coins` || Currency Dictionary |
 */
  Query_Item_GetCurrencyAll: "Query.Item.Get_Currency_All",

  /**
 * **Get all equipment from Inventory** `(Query.Item.Get_Equipment_All)`
 *
 * - Returns all Equipment in the Inventory; the output parameter is a list of all Equipment IDs
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
 * | 0 || 🔹 || `Ety` || `owner` || Inventory Owner Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `equip_index_list` || Equipment Index List |
 */
  Query_Item_GetEquipmentAll: "Query.Item.Get_Equipment_All",

  /**
 * **Trigger Loot Drop** `(Execution.Inventory.Trigger_Drop)`
 *
 * - Triggers a loot drop for the dropper entity, with configurable loot type.
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
 * | 0 || 🔹 || `Ety` || `dropper_entity` || Dropper Entity |
 * | 1 || 🔹 || `E<LOOT>` || `drop_type` || Loot Type: Types: Shared Reward (one share for all), Individualized Reward (one share per person) |
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
 * **Set Loot Drop Content** `(Execution.Inventory.Set_Loot_Content)`
 *
 * - Configure the Loot drop data in the Loot Component on the Dropper Entity in Dictionary format
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
 * | 0 || 🔹 || `Ety` || `dropper_entity` || Dropper Entity |
 * | 1 || 🔹 || `D<Cfg,Int>` || `loot_dict` || Loot Drop Dictionary |
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
 * **Modify Loot Item Component Quantity** `(Execution.Inventory.Modify_Loot_Item)`
 *
 * - Edit the quantity of the specified Item in the Loot Component on the Loot Prefab
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
 * | 0 || 🔹 || `Ety` || `drop_entity` || Loot Entity |
 * | 1 || 🔹 || `Cfg` || `item_config_id` || Item Config ID |
 * | 2 || 🔹 || `Int` || `item_count` || Change Value: New Value = Original Value + Change Value |
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
 * **Modify Loot Component Currency Amount** `(Execution.Inventory.Modify_Loot_Currency)`
 *
 * - Edit the amount of the specified Currency in the Loot Component on the Loot Prefab
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
 * | 0 || 🔹 || `Ety` || `drop_entity` || Loot Entity |
 * | 1 || 🔹 || `Cfg` || `currency_config_id` || Currency Config ID |
 * | 2 || 🔹 || `Int` || `currency_count` || Change Value: New Value = Original Value + Change Value |
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
 * **Get Loot Component Item Quantity** `(Query.Item.Get_Loot_Item_Amount)`
 *
 * - Returns the quantity of Items with the specified Config ID from the Loot Component on the Loot Prefab
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
 * | 0 || 🔹 || `Ety` || `drop_entity` || Loot Entity |
 * | 1 || 🔹 || `Cfg` || `item_config_id` || Item Config ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `item_count` || Item Quantity |
 */
  Query_Item_GetLootItemAmount: "Query.Item.Get_Loot_Item_Amount",

  /**
 * **Get Loot Component Currency Quantity** `(Query.Item.Get_Loot_Currency_Amount)`
 *
 * - Returns the amount of Currency with the specified Config ID from the Loot Component on the Loot Prefab
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
 * | 0 || 🔹 || `Ety` || `drop_entity` || Loot Entity |
 * | 1 || 🔹 || `Cfg` || `currency_id` || Currency Config ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `coin_count` || Currency Amount |
 */
  Query_Item_GetLootCurrencyAmount: "Query.Item.Get_Loot_Currency_Amount",

  /**
 * **Get All Items from Loot Component** `(Query.Item.Get_Loot_Items)`
 *
 * - Returns all Items from the Loot Component on the Loot Prefab
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
 * | 0 || 🔹 || `Ety` || `looter` || Dropper Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `D<Cfg,Int>` || `items` || Item Dictionary |
 */
  Query_Item_GetLootItems: "Query.Item.Get_Loot_Items",

  /**
 * **Get All Currency from Loot Component** `(Query.Item.Get_Loot_Currency)`
 *
 * - Returns all Currencies from the Loot Component on the Loot Prefab
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
 * | 0 || 🔹 || `Ety` || `looter` || Dropper Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `D<Cfg,Int>` || `coins` || Currency Dictionary |
 */
  Query_Item_GetLootCurrency: "Query.Item.Get_Loot_Currency",

  /**
 * **Get All Equipment from Loot Component** `(Query.Item.Get_Loot_Equipment)`
 *
 * - Returns all Equipment from the Loot Component on the Loot Prefab
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
 * | 0 || 🔹 || `Ety` || `drop_entity` || Loot Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `equip_index_list` || Equipment Index List |
 */
  Query_Item_GetLootEquipment: "Query.Item.Get_Loot_Equipment",

  /**
 * **When Items in the Inventory Are Used** `(Trigger.Item.On_Item_Use)`
 *
 * - This event is triggered when an Item in the Inventory is used. The Owner of the Inventory Component will receive it
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
 * | 0 || 🔸 || `Ety` || `owner_entity` || Item Owner Entity |
 * | 1 || 🔸 || `Gid` || `owner_guid` || Item Owner GUID |
 * | 2 || 🔸 || `Cfg` || `item_config_id` || Item Config ID |
 * | 3 || 🔸 || `Int` || `use_count` || Amount to Use |
 */
  Trigger_Item_OnItemUse: "Trigger.Item.On_Item_Use",

  /**
 * **Query Equipment Tag List** `(Query.Equipment.Get_Tags)`
 *
 * - Searches the list of all Tags on this Equipment instance
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
 * | 0 || 🔹 || `Int` || `equip_index` || Equipment Index |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Cfg>` || `tags` || Tag List |
 */
  Query_Equipment_GetTags: "Query.Equipment.Get_Tags",

  /**
 * **Set Scan Tag Rules** `(Execution.Scan_Tag.Set_Rules)`
 *
 * - Configure rules for Scan Tags. The scanning logic is executed based on the configured rules
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `E<STPT>` || `rule_type` || Rule Type: Options: Prioritize View or Prioritize Distance |
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
 * **Set Scan Component's Active Scan Tag ID** `(Execution.Scan_Tag.Set_Active_Tag)`
 *
 * - Set the Scan Tag with the specified ID in the Target Entity's Scan Tag Component to the active state
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Int` || `tag_index` || Scan Tag ID |
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
 * **Get the Currently Active Scan Tag Config ID** `(Query.Scan_Tag.Get_Active_Tag)`
 *
 * - Returns the Configuration ID of the currently active Scan Tags on the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Cfg` || `config_id` || Scan Tag Config ID |
 */
  Query_ScanTag_GetActiveTag: "Query.Scan_Tag.Get_Active_Tag",

  /**
 * **Get Character Attribute** `(Query.Entity_Related.Get_Character_Attr)`
 *
 * - Returns the Base Attributes of the Character Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `level` || Level |
 * | 1 || 🔸 || `Flt` || `hp_cur` || Current HP |
 * | 2 || 🔸 || `Flt` || `hp_max` || Max HP |
 * | 3 || 🔸 || `Flt` || `atk_cur` || Current ATK |
 * | 4 || 🔸 || `Flt` || `atk_base` || Base ATK |
 * | 5 || 🔸 || `Flt` || `def_cur` || Current DEF |
 * | 6 || 🔸 || `Flt` || `def_base` || Base DEF |
 * | 7 || 🔸 || `Flt` || `poise_max` || Interrupt Value Threshold |
 * | 8 || 🔸 || `Flt` || `poise_cur` || Current Interrupt Value |
 * | 9 || 🔸 || `E<CIRS>` || `poise_state` || Current Interrupt Status |
 */
  Query_EntityRelated_GetCharacterAttr: "Query.Entity_Related.Get_Character_Attr",

  /**
 * **Set Character Skill CD** `(Execution.Skill.Set_CD)`
 *
 * - Directly set the cooldown of a specific Skill Slot on the Target Character to a specified value
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Character Entity |
 * | 1 || 🔹 || `E<SLOT>` || `skill_slot` || Character Skill Slot: The Skill Slot to edited: Normal Attack, Skill 1-E, Skill 2-Q, Skill 3-R, Skill 4-T, or Custom Skill |
 * | 2 || 🔹 || `Flt` || `remain_seconds` || Remaining CD Time: Edited Cooldown will be set to this input value |
 * | 3 || 🔹 || `Bol` || `limit_max` || Limit Maximum CD Time: If set to True, the edited Cooldown cannot be less than the specified minimum value |
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
 * **Modify Character Skill CD** `(Execution.Skill.Modify_CD)`
 *
 * - Edit the cooldown of the specified Skill Slot on the Target Character. The edit value is added to the current cooldown and can be negative
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Character Entity |
 * | 1 || 🔹 || `E<SLOT>` || `skill_slot` || Character Skill Slot: The Skill Slot to edited: Normal Attack, Skill 1-E, Skill 2-Q, Skill 3-R, Skill 4-T, or Custom Skill |
 * | 2 || 🔹 || `Flt` || `delta_seconds` || CD Modifier: New Value = Original Value + Edit Value |
 * | 3 || 🔹 || `Bol` || `limit_max` || Limit Maximum CD Time: If set to True, the edited Cooldown cannot be less than the specified minimum value |
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
 * **Modify Skill CD Percentage Based on Max CD** `(Execution.Skill.Modify_CD_Ratio)`
 *
 * - Edit the cooldown percentage of a skill in a Character's Skill Slot based on its maximum cooldown
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Character Entity |
 * | 1 || 🔹 || `E<SLOT>` || `skill_slot` || Character Skill Slot: The Skill Slot to edited: Normal Attack, Skill 1-E, Skill 2-Q, Skill 3-R, Skill 4-T, or Custom Skill |
 * | 2 || 🔹 || `Flt` || `ratio_delta` || Cooldown Ratio Modifier: Actual Cooldown after Editing = Original Cooldown × Cooldown Ratio Edit Value |
 * | 3 || 🔹 || `Bol` || `limit_max` || Limit Maximum CD Time: If set to True, the edited Cooldown cannot be less than the specified minimum value |
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
 * **Add Affix to Equipment at Specified ID** `(Execution.Equipment.Add_Affix_By_ID)`
 *
 * - Add a preconfigured Affix at the specified Affix ID on the Equipment instance, with the option to overwrite the Affix value
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
 * | 0 || 🔹 || `Int` || `equip_index` || Equipment ID: Integer ID generated during Equipment Initialization to identify the equipment instance |
 * | 1 || 🔹 || `Cfg` || `affix_config_id` || Affix Config ID: The Config ID of the preconfigured Affix defined in Equipment Data Management |
 * | 2 || 🔹 || `Int` || `insert_index` || Insert ID |
 * | 3 || 🔹 || `Bol` || `overwrite` || Overwrite Affix Value |
 * | 4 || 🔹 || `Flt` || `affix_value` || Affix Value: Can overwrite the value on a pre-configured Affix |
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
 * **Random Deck Selector Selection List** `(Execution.Deck_Selector.Get_Random_List)`
 *
 * - Randomly sort the input List
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
 * | 0 || 🔹 || `L<Int>` || `selection_list` || List |
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
 * **Get Owner Entity** `(Query.Entity_Related.Get_Owner)`
 *
 * - Returns the Owner Entity of the specified Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `owner_entity` || Owner Entity |
 */
  Query_EntityRelated_GetOwner: "Query.Entity_Related.Get_Owner",

  /**
 * **Get List of Entities Owned by the Entity** `(Query.Entity_Related.Get_Owned_Entities)`
 *
 * - Returns a list of all Entities owned by the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `entities` || Entity List |
 */
  Query_EntityRelated_GetOwnedEntities: "Query.Entity_Related.Get_Owned_Entities",

  /**
 * **Query Unit Status Stacks by Slot ID** `(Query.Unit_Status.Get_Status_Stacks)`
 *
 * - Searches the Stack Count of the specified Unit Status on the Target Entity's designated Slot
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Query Target Entity |
 * | 1 || 🔹 || `Cfg` || `config_id` || Unit Status Config ID |
 * | 2 || 🔹 || `Int` || `slot_index` || Slot ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `layers` || Stacks |
 */
  Query_UnitStatus_GetStatusStacks: "Query.Unit_Status.Get_Status_Stacks",

  /**
 * **Query Unit Status Applier by Slot ID** `(Query.Unit_Status.Get_Status_Applier)`
 *
 * - Searches the Applier of the specified Unit Status on the Target Entity's designated Slot
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Query Target Entity |
 * | 1 || 🔹 || `Cfg` || `config_id` || Unit Status Config ID |
 * | 2 || 🔹 || `Int` || `slot_index` || Slot ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `applier` || Applier Entity |
 */
  Query_UnitStatus_GetStatusApplier: "Query.Unit_Status.Get_Status_Applier",

  /**
 * **List of Slot IDs Querying Unit Status** `(Query.Unit_Status.Get_Status_Slots)`
 *
 * - Searches the list of all Slot IDs for the Unit Status with the specified Config ID on the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Query Target Entity |
 * | 1 || 🔹 || `Cfg` || `config_id` || Unit Status Config ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `slot_index_list` || Slot ID List |
 */
  Query_UnitStatus_GetStatusSlots: "Query.Unit_Status.Get_Status_Slots",

  /**
 * **Query Equipment Config ID by Equipment ID** `(Query.Equipment.Get_Config_ID)`
 *
 * - Searches the Equipment Config ID by Equipment ID. The Equipment Instance ID can be obtained in the [Equipment Initialization] event
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
 * | 0 || 🔹 || `Int` || `equip_index` || Equipment Index |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Cfg` || `equip_config_id` || Equipment Config ID |
 */
  Query_Equipment_GetConfigID: "Query.Equipment.Get_Config_ID",

  /**
 * **Get Player GUID by Player ID** `(Query.Character_Related.Get_GUID_By_ID)`
 *
 * - Returns the Player GUID based on Player ID, where the ID indicates which Player they are
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
 * | 0 || 🔹 || `Int` || `player_index` || Player ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Gid` || `player_guid` || Player GUID |
 */
  Query_CharacterRelated_GetGUIDByID: "Query.Character_Related.Get_GUID_By_ID",

  /**
 * **Get Player ID by Player GUID** `(Query.Character_Related.Get_ID_By_GUID)`
 *
 * - Returns the Player ID based on Player GUID, where the ID indicates which Player they are
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
 * | 0 || 🔹 || `Gid` || `player_guid` || Player GUID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `player_index` || Player ID |
 */
  Query_CharacterRelated_GetIDByGUID: "Query.Character_Related.Get_ID_By_GUID",

  /**
 * **Calculate formatted time from timestamp** `(Arithmetic.Math.Timestamp_To_Time)`
 *
 * - Converts a timestamp to formatted time
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
 * | 0 || 🔹 || `Int` || `timestamp` || Timestamp |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `year` || Year |
 * | 1 || 🔸 || `Int` || `month` || Month |
 * | 2 || 🔸 || `Int` || `day` || Day |
 * | 3 || 🔸 || `Int` || `hour` || Hour |
 * | 4 || 🔸 || `Int` || `minute` || Minute |
 * | 5 || 🔸 || `Int` || `second` || Second |
 */
  Arithmetic_Math_TimestampToTime: "Arithmetic.Math.Timestamp_To_Time",

  /**
 * **Calculate Timestamp From Formatted Time** `(Arithmetic.Math.Time_To_Timestamp)`
 *
 * - Converts a formatted time to a timestamp
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
 * | 0 || 🔹 || `Int` || `year` || Year |
 * | 1 || 🔹 || `Int` || `month` || Month |
 * | 2 || 🔹 || `Int` || `day` || Day |
 * | 3 || 🔹 || `Int` || `hour` || Hour |
 * | 4 || 🔹 || `Int` || `minute` || Minute |
 * | 5 || 🔹 || `Int` || `second` || Second |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `timestamp` || Timestamp |
 */
  Arithmetic_Math_TimeToTimestamp: "Arithmetic.Math.Time_To_Timestamp",

  /**
 * **Calculate day of the week from timestamp** `(Arithmetic.Math.Timestamp_To_Weekday)`
 *
 * - Converts a timestamp to the day of the week
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
 * | 0 || 🔹 || `Int` || `timestamp` || Timestamp |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `weekday` || Weekday |
 */
  Arithmetic_Math_TimestampToWeekday: "Arithmetic.Math.Timestamp_To_Weekday",

  /**
 * **Query Timestamp (UTC+0)** `(Query.Math.Get_Timestamp)`
 *
 * - Searches the current timestamp
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
 * | 0 || 🔸 || `Int` || `timestamp` || Timestamp |
 */
  Query_Math_GetTimestamp: "Query.Math.Get_Timestamp",

  /**
 * **Query Server Time Zone** `(Query.Math.Get_Timezone)`
 *
 * - Searches the Server's timezone
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
 * | 0 || 🔸 || `Int` || `timezone` || Time Zone |
 */
  Query_Math_GetTimezone: "Query.Math.Get_Timezone",

  /**
 * **Create Prefab Group** `(Execution.Entity_Related.Create_Prefab_Group)`
 *
 * - Create the Entities contained in the Prefab Group by Prefab Group ID
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
 * | 0 || 🔹 || `Int` || `component_group_index` || Prefab Group ID: Identifier for this Prefab Group |
 * | 1 || 🔹 || `Vec` || `position` || Location: Absolute Location of the Prefab Group center |
 * | 2 || 🔹 || `Vec` || `rotation` || Rotate: Absolute Rotation of the Prefab Group center |
 * | 3 || 🔹 || `Ety` || `owner_entity` || Owner Entity: Determines whether the entity belongs to another entity after creation |
 * | 4 || 🔹 || `Int` || `level` || Level: Determines the Level when the entity is created |
 * | 5 || 🔹 || `L<Int>` || `unit_tag_indexes` || Unit Tag Index List: Determines the Unit Tags carried when the entity is created |
 * | 6 || 🔹 || `Bol` || `override_level` || Overwrite Level: When set to False, the [Level] parameter has no effect |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `L<Ety>` || `created_entities` || Created Entity List: Entities created in this way do not have a GUID |
 */
  Execution_EntityRelated_CreatePrefabGroup: "Execution.Entity_Related.Create_Prefab_Group",

  /**
 * **Get Aggro List of Creation in Default Mode** `(Query.Creation.Get_Aggro_List)`
 *
 * - Returns the Aggro List in Classic Mode. This Node only outputs a valid list when the Aggro Configuration is set to [Default Type]
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
 * | 0 || 🔹 || `Ety` || `creation` || Creation Entity: Runtime Creation Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `aggro` || Aggro List: Unordered list of Entities this Creation currently has Aggro against |
 */
  Query_Creation_GetAggroList: "Query.Creation.Get_Aggro_List",

  /**
 * **Set Player Leaderboard Score as an Integer** `(Execution.Leaderboard.Set_Score_Int)`
 *
 * - Set Player Leaderboard Score (Integer)
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
 * | 0 || 🔹 || `L<Int>` || `player_index_list` || Player ID List |
 * | 1 || 🔹 || `Int` || `score` || Leaderboard Score |
 * | 2 || 🔹 || `Int` || `board_index` || Leaderboard ID: The ID corresponding to the specified Leaderboard in Peripheral System management |
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
 * **Set Player Leaderboard Score as a Float** `(Execution.Leaderboard.Set_Score_Float)`
 *
 * - Set Player Leaderboard Score (Float)
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
 * | 0 || 🔹 || `L<Int>` || `player_index_list` || Player ID List |
 * | 1 || 🔹 || `Flt` || `score` || Leaderboard Score |
 * | 2 || 🔹 || `Int` || `board_index` || Leaderboard ID: The ID corresponding to the specified Leaderboard in Peripheral System management |
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
 * **Modify environment settings** `(Execution.Character_Related.Modify_Environment)`
 *
 * - Apply the specified Environment Configuration to the designated player. Takes effect immediately upon execution
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
 * | 0 || 🔹 || `Int` || `config_index` || Environment Config Index: Identifier for this Environment Configuration |
 * | 1 || 🔹 || `L<Ety>` || `target_players` || Target Player List: Applies only to Players in the specified list |
 * | 2 || 🔹 || `Bol` || `enable_weather_preset` || Enable Weather Config: Set to True to enable |
 * | 3 || 🔹 || `Int` || `weather_preset_index` || Weather Config Index: The Weather Configuration matching this ID will take effect. If the ID does not exist, nothing happens |
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
 * **When Player Class Is Removed** `(Trigger.Class.On_Class_Remove)`
 *
 * - This event is triggered when a Player's Class is removed and sent to the corresponding Player. It can be received in the Node Graph of the previous Class
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Cfg` || `career_config_id_old` || Pre-Modification Class Config ID |
 * | 3 || 🔸 || `Cfg` || `career_config_id_new` || Post-Modification Config ID |
 */
  Trigger_Class_OnClassRemove: "Trigger.Class.On_Class_Remove",

  /**
 * **When Entering an Interruptible State** `(Trigger.Combat.On_Interruptible)`
 *
 * - This event is triggered when an Entity is attacked and enters the Vulnerable Status
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Ety` || `attacker` || Attacker |
 */
  Trigger_Combat_OnInterruptible: "Trigger.Combat.On_Interruptible",

  /**
 * **Query Game Mode and Player Number** `(Query.General.Get_Game_Info)`
 *
 * - Searches the theoretical number of players entering the match, including players via Matchmaking or Room creation, and the method of entry
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
 * | 0 || 🔸 || `Int` || `player_count` || Player Count |
 * | 1 || 🔸 || `E<GMOD>` || `mode` || Gameplay Mode: Includes Playtest, Room Play, and Matchmaking Play |
 */
  Query_General_GetGameInfo: "Query.General.Get_Game_Info",

  /**
 * **Get Player Nickname** `(Query.Character_Related.Get_Nickname)`
 *
 * - Returns the Player's nickname
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
 * | 0 || 🔹 || `Ety` || `player` || Player Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Str` || `nickname` || Player Nickname |
 */
  Query_CharacterRelated_GetNickname: "Query.Character_Related.Get_Nickname",

  /**
 * **Get Player Client Input Device Type** `(Query.Character_Related.Get_Input_Type)`
 *
 * - Returns the Player's local input device type, as determined by the Interface mapping method
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
 * | 0 || 🔹 || `Ety` || `player` || Player Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `E<IDVT>` || `input_type` || Input Device Type: Includes keyboard/mouse, gamepad, touchscreen |
 */
  Query_CharacterRelated_GetInputType: "Query.Character_Related.Get_Input_Type",

  /**
 * **Set Chat Channel Switch** `(Execution.Chat_Channel.Set_Switch)`
 *
 * - Set the Chat Channel switch
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
 * | 0 || 🔹 || `Int` || `channel_index` || Channel Index |
 * | 1 || 🔹 || `Bol` || `text_enabled` || Text Switch |
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
 * **Modify Player Channel Permission** `(Execution.Chat_Channel.Modify_Permission)`
 *
 * - Edit Player Channel Permissions
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
 * | 0 || 🔹 || `Gid` || `player_guid` || Player GUID |
 * | 1 || 🔹 || `Int` || `channel_index` || Channel Index |
 * | 2 || 🔹 || `Bol` || `join` || Join: If set to True, the channel is available to the specified Player |
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
 * **Set Player's Current Channel** `(Execution.Chat_Channel.Set_Current_Channel)`
 *
 * - Set the Player's currently available channels. Channels in the list are available to the Player, and channels not in the list are unavailable
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
 * | 0 || 🔹 || `Gid` || `player_guid` || Player GUID |
 * | 1 || 🔹 || `L<Int>` || `channel_index_list` || Channel Index List |
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
 * **Consume Gift Box** `(Execution.Wonderland_Box.Consume_Box)`
 *
 * - Consume the specified Player's Wonderland Gift Box
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
 * | 0 || 🔹 || `Ety` || `player_entity` || Player Entity |
 * | 1 || 🔹 || `Int` || `box_index` || Gift Box Index |
 * | 2 || 🔹 || `Int` || `consume_count` || Consumption Quantity |
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
 * **Query Corresponding Gift Box Quantity** `(Query.Wonderland_Box_Related.Get_Box_Quantity)`
 *
 * - Searches the quantity of the specified Gift Box on the Player Entity
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
 * | 0 || 🔹 || `Ety` || `player` || Player Entity |
 * | 1 || 🔹 || `Int` || `box_index` || Gift Box Index |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `count` || Quantity |
 */
  Query_WonderlandBoxRelated_GetBoxQuantity: "Query.Wonderland_Box_Related.Get_Box_Quantity",

  /**
 * **Query Corresponding Gift Box Consumption** `(Query.Wonderland_Box_Related.Get_Box_Consumption)`
 *
 * - Searches the consumed quantity of the specified Gift Box on the Player Entity
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
 * | 0 || 🔹 || `Ety` || `player` || Player Entity |
 * | 1 || 🔹 || `Int` || `box_index` || Gift Box Index |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `count` || Quantity |
 */
  Query_WonderlandBoxRelated_GetBoxConsumption: "Query.Wonderland_Box_Related.Get_Box_Consumption",

  /**
 * **Activate Fixed-Point Motion Device** `(Execution.Motion_Device.Activate_Fixed_Point)`
 *
 * - Dynamically add a Fixed-Point Basic Motion Device to the Target Entity during Stage runtime
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity: Active Entity |
 * | 1 || 🔹 || `Str` || `mover_name` || Motion Device Name: Identifier for this motion device |
 * | 2 || 🔹 || `E<MOVE>` || `move_mode` || Movement Mode |
 * | 3 || 🔹 || `Flt` || `move_speed` || Movement SPD |
 * | 4 || 🔹 || `Vec` || `target_position` || Target Location: Absolute Location |
 * | 5 || 🔹 || `Vec` || `target_rotation` || Target Rotation: Absolute Rotation |
 * | 6 || 🔹 || `Bol` || `lock_rotation` || Lock Rotation |
 * | 7 || 🔹 || `E<FMPR>` || `param_type` || Parameter Type: Options: Fixed Speed or Fixed Time |
 * | 8 || 🔹 || `Flt` || `move_time` || Movement Time |
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
 * **Left Shift Operation** `(Arithmetic.Math.Left_Shift)`
 *
 * - Performs a logical left shift on the input by the specified bit count and outputs the result
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
 * | 0 || 🔹 || `Int` || `value` || Value |
 * | 1 || 🔹 || `Int` || `offset` || Left Shift Count |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || Result |
 */
  Arithmetic_Math_LeftShift: "Arithmetic.Math.Left_Shift",

  /**
 * **Right Shift Operation** `(Arithmetic.Math.Right_Shift)`
 *
 * - Performs a logical right shift on the input by the specified bit count and outputs the result
 * - Performs an arithmetic right shift, preserving the sign bit
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
 * | 0 || 🔹 || `Int` || `value` || Value |
 * | 1 || 🔹 || `Int` || `offset` || Right Shift Count |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || Result |
 */
  Arithmetic_Math_RightShift: "Arithmetic.Math.Right_Shift",

  /**
 * **Bitwise AND** `(Arithmetic.Math.Bitwise_And)`
 *
 * - Performs a bitwise AND operation on the two inputs and returns the result
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
 * | 0 || 🔹 || `Int` || `a` || Value 1 |
 * | 1 || 🔹 || `Int` || `b` || Value 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || Result |
 */
  Arithmetic_Math_BitwiseAnd: "Arithmetic.Math.Bitwise_And",

  /**
 * **Bitwise OR** `(Arithmetic.Math.Bitwise_Or)`
 *
 * - Performs a bitwise OR operation on the two inputs and returns the result
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
 * | 0 || 🔹 || `Int` || `a` || Value 1 |
 * | 1 || 🔹 || `Int` || `b` || Value 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || Result |
 */
  Arithmetic_Math_BitwiseOr: "Arithmetic.Math.Bitwise_Or",

  /**
 * **XOR (Exclusive OR)** `(Arithmetic.Math.Bitwise_Xor)`
 *
 * - Performs a bitwise XOR operation on the two inputs and returns the result
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
 * | 0 || 🔹 || `Int` || `a` || Value 1 |
 * | 1 || 🔹 || `Int` || `b` || Value 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || Result |
 */
  Arithmetic_Math_BitwiseXor: "Arithmetic.Math.Bitwise_Xor",

  /**
 * **Bitwise Complement** `(Arithmetic.Math.Bitwise_Not)`
 *
 * - Performs a bitwise complement operation on the input and returns the result
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
 * | 0 || 🔹 || `Int` || `value` || Value |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || Result |
 */
  Arithmetic_Math_BitwiseNot: "Arithmetic.Math.Bitwise_Not",

  /**
 * **Write by bit** `(Arithmetic.Math.Write_Bit)`
 *
 * - Writes the write value as a binary number to the [start bit, end bit] of the target value (also a binary number). The start bit is indexed from 0, and the write length includes both the start and end bits
 * - If the binary significant length of the write value (counted from the first 1 from the left) exceeds the write length, the write fails and returns the original value
 * - If the write value is negative, it also fails due to exceeding the write length (the first bit of a negative number's binary representation is the sign bit 1)
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
 * | 0 || 🔹 || `Int` || `Input0` || Written value |
 * | 1 || 🔹 || `Int` || `Input1` || Write value |
 * | 2 || 🔹 || `Int` || `Input2` || Write starting position |
 * | 3 || 🔹 || `Int` || `Input3` || Write end position |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || Result |
 */
  Arithmetic_Math_WriteBit: "Arithmetic.Math.Write_Bit",

  /**
 * **Read by bit** `(Arithmetic.Math.Read_Bit)`
 *
 * - Reads the value from [start bit, end bit] of the value (in binary representation)
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
 * | 0 || 🔹 || `Int` || `Input0` || Value |
 * | 1 || 🔹 || `Int` || `Input1` || Read starting position |
 * | 2 || 🔹 || `Int` || `Input2` || Read end position |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `result` || Result |
 */
  Arithmetic_Math_ReadBit: "Arithmetic.Math.Read_Bit",

  /**
 * **When Character Movement SPD Meets Condition** `(Trigger.Entity_Related.On_Speed_Condition)`
 *
 * - Adds the Unit Status effect [Monitor Movement Speed] to the Character Entity. This event is triggered when the conditions are met
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Cfg` || `state_config_id` || Unit Status Config ID |
 * | 3 || 🔸 || `E<OCMP>` || `cmp_type` || Condition: Comparison Type |
 * | 4 || 🔸 || `Flt` || `cmp_value` || Condition: Comparison Value |
 * | 5 || 🔸 || `Flt` || `current_speed` || Current Movement SPD |
 */
  Trigger_EntityRelated_OnSpeedCondition: "Trigger.Entity_Related.On_Speed_Condition",

  /**
 * **Query Character's Current Movement SPD** `(Query.Entity_Related.Get_Move_Speed)`
 *
 * - Can only be searched when the Character has the [Monitor Movement Speed] Unit Status effect
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
 * | 0 || 🔹 || `Ety` || `character` || Character Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `speed` || Current Speed |
 * | 1 || 🔸 || `Vec` || `speed_vector` || Velocity Vector |
 */
  Query_EntityRelated_GetMoveSpeed: "Query.Entity_Related.Get_Move_Speed",

  /**
 * **Set or Add Key Value Pairs to Dictionary** `(Execution.Dictionary.Set_Value)`
 *
 * - Add a Key-Value Pair to the specified Dictionary
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
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || Dictionary |
 * | 1 || 🔷 || **`R<K>`** || `key` || Key |
 * | 2 || 🔷 || **`R<V>`** || `value` || Value |
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
 * **Create Dictionary** `(Arithmetic.Dictionary.Create_Dictionary)`
 *
 * - Creates Key-Value Pairs sequentially from the input key and value lists
 * - This node builds the Dictionary using the shorter of the key and value lists; extra items are truncated
 * - If duplicate keys are found in the key list, creation fails and returns an empty Dictionary
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
 * | 0 || 🔷 || **`L<R<K>>`** || `keys` || Key List |
 * | 1 || 🔷 || **`L<R<V>>`** || `values` || Value List |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`D<R<K>,R<V>>`** || `dict` || Dictionary |
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
 * **Query Dictionary Value by Key** `(Query.Dictionary.Get_Value)`
 *
 * - Searches the corresponding Value in the Dictionary by Key. If the Key does not exist, returns the type's default value
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
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || Dictionary |
 * | 1 || 🔷 || **`R<K>`** || `key` || Key |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<V>`** || `value` || Value |
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
 * **Remove Key Value Pairs from Dictionary by Key** `(Execution.Dictionary.Remove_By_Key)`
 *
 * - Remove Key-Value Pairs from the specified Dictionary by key
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
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || Dictionary |
 * | 1 || 🔷 || **`R<K>`** || `key` || Key |
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
 * **Query If Dictionary Contains Specific Key** `(Query.Dictionary.Has_Key)`
 *
 * - Searches whether the specified Dictionary contains the specified Key
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
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || Dictionary |
 * | 1 || 🔷 || **`R<K>`** || `key` || Key |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `contains` || Include |
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
 * **Query If Dictionary Contains Specific Value** `(Query.Dictionary.Has_Value)`
 *
 * - Searches whether the specified Dictionary contains the specified Value
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
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || Dictionary |
 * | 1 || 🔷 || **`R<V>`** || `value` || Value |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `contains` || Include |
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
 * **Get List of Keys from Dictionary** `(Query.Dictionary.Get_Keys)`
 *
 * - Returns a list of all Keys in the Dictionary. Because Key-Value Pairs are unordered, the Keys may not be returned in insertion order
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
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || Dictionary |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`L<R<K>>`** || `keys` || Key List |
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
 * **Get List of Values from Dictionary** `(Query.Dictionary.Get_Values)`
 *
 * - Returns a list of all Values in the Dictionary. Because Key-Value Pairs are unordered, the Values may not be returned in insertion order
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
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || Dictionary |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`L<R<V>>`** || `values` || Value List |
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
 * **Query Dictionary's Length** `(Query.Dictionary.Get_Length)`
 *
 * - Searches the number of Key-Value Pairs in the Dictionary
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
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || Dictionary |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `length` || Length |
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
 * **Clear Dictionary** `(Execution.Dictionary.Clear)`
 *
 * - Clear all Key-Value Pairs from the specified Dictionary
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
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || Dictionary |
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
 * **Assembly Dictionary** `(Arithmetic.Dictionary.Assemble_Dictionary)`
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
 * | 0 || 🔷 || **`R<K>`** || `key0` || Key 0 |
 * | 1 || 🔷 || **`R<V>`** || `val0` || Value 0 |
 * | 2 || 🔷 || **`R<K>`** || `key1` || Key 1 |
 * | 3 || 🔷 || **`R<V>`** || `val1` || Value 1 |
 * | 4 || 🔷 || **`R<K>`** || `key2` || Key 2 |
 * | 5 || 🔷 || **`R<V>`** || `val2` || Value 2 |
 * | 6 || 🔷 || **`R<K>`** || `key3` || Key 3 |
 * | 7 || 🔷 || **`R<V>`** || `val3` || Value 3 |
 * | 8 || 🔷 || **`R<K>`** || `key4` || Key 4 |
 * | 9 || 🔷 || **`R<V>`** || `val4` || Value 4 |
 * | 10 || 🔷 || **`R<K>`** || `key5` || Key 5 |
 * | 11 || 🔷 || **`R<V>`** || `val5` || Value 5 |
 * | 12 || 🔷 || **`R<K>`** || `key6` || Key 6 |
 * | 13 || 🔷 || **`R<V>`** || `val6` || Value 6 |
 * | 14 || 🔷 || **`R<K>`** || `key7` || Key 7 |
 * | 15 || 🔷 || **`R<V>`** || `val7` || Value 7 |
 * | 16 || 🔷 || **`R<K>`** || `key8` || Key 8 |
 * | 17 || 🔷 || **`R<V>`** || `val8` || Value 8 |
 * | 18 || 🔷 || **`R<K>`** || `key9` || Key 9 |
 * | 19 || 🔷 || **`R<V>`** || `val9` || Value 9 |
 * | 20 || 🔷 || **`R<K>`** || `key10` || Key 10 |
 * | 21 || 🔷 || **`R<V>`** || `val10` || Value 10 |
 * | 22 || 🔷 || **`R<K>`** || `key11` || Key 11 |
 * | 23 || 🔷 || **`R<V>`** || `val11` || Value 11 |
 * | 24 || 🔷 || **`R<K>`** || `key12` || Key 12 |
 * | 25 || 🔷 || **`R<V>`** || `val12` || Value 12 |
 * | 26 || 🔷 || **`R<K>`** || `key13` || Key 13 |
 * | 27 || 🔷 || **`R<V>`** || `val13` || Value 13 |
 * | 28 || 🔷 || **`R<K>`** || `key14` || Key 14 |
 * | 29 || 🔷 || **`R<V>`** || `val14` || Value 14 |
 * | 30 || 🔷 || **`R<K>`** || `key15` || Key 15 |
 * | 31 || 🔷 || **`R<V>`** || `val15` || Value 15 |
 * | 32 || 🔷 || **`R<K>`** || `key16` || Key 16 |
 * | 33 || 🔷 || **`R<V>`** || `val16` || Value 16 |
 * | 34 || 🔷 || **`R<K>`** || `key17` || Key 17 |
 * | 35 || 🔷 || **`R<V>`** || `val17` || Value 17 |
 * | 36 || 🔷 || **`R<K>`** || `key18` || Key 18 |
 * | 37 || 🔷 || **`R<V>`** || `val18` || Value 18 |
 * | 38 || 🔷 || **`R<K>`** || `key19` || Key 19 |
 * | 39 || 🔷 || **`R<V>`** || `val19` || Value 19 |
 * | 40 || 🔷 || **`R<K>`** || `key20` || Key 20 |
 * | 41 || 🔷 || **`R<V>`** || `val20` || Value 20 |
 * | 42 || 🔷 || **`R<K>`** || `key21` || Key 21 |
 * | 43 || 🔷 || **`R<V>`** || `val21` || Value 21 |
 * | 44 || 🔷 || **`R<K>`** || `key22` || Key 22 |
 * | 45 || 🔷 || **`R<V>`** || `val22` || Value 22 |
 * | 46 || 🔷 || **`R<K>`** || `key23` || Key 23 |
 * | 47 || 🔷 || **`R<V>`** || `val23` || Value 23 |
 * | 48 || 🔷 || **`R<K>`** || `key24` || Key 24 |
 * | 49 || 🔷 || **`R<V>`** || `val24` || Value 24 |
 * | 50 || 🔷 || **`R<K>`** || `key25` || Key 25 |
 * | 51 || 🔷 || **`R<V>`** || `val25` || Value 25 |
 * | 52 || 🔷 || **`R<K>`** || `key26` || Key 26 |
 * | 53 || 🔷 || **`R<V>`** || `val26` || Value 26 |
 * | 54 || 🔷 || **`R<K>`** || `key27` || Key 27 |
 * | 55 || 🔷 || **`R<V>`** || `val27` || Value 27 |
 * | 56 || 🔷 || **`R<K>`** || `key28` || Key 28 |
 * | 57 || 🔷 || **`R<V>`** || `val28` || Value 28 |
 * | 58 || 🔷 || **`R<K>`** || `key29` || Key 29 |
 * | 59 || 🔷 || **`R<V>`** || `val29` || Value 29 |
 * | 60 || 🔷 || **`R<K>`** || `key30` || Key 30 |
 * | 61 || 🔷 || **`R<V>`** || `val30` || Value 30 |
 * | 62 || 🔷 || **`R<K>`** || `key31` || Key 31 |
 * | 63 || 🔷 || **`R<V>`** || `val31` || Value 31 |
 * | 64 || 🔷 || **`R<K>`** || `key32` || Key 32 |
 * | 65 || 🔷 || **`R<V>`** || `val32` || Value 32 |
 * | 66 || 🔷 || **`R<K>`** || `key33` || Key 33 |
 * | 67 || 🔷 || **`R<V>`** || `val33` || Value 33 |
 * | 68 || 🔷 || **`R<K>`** || `key34` || Key 34 |
 * | 69 || 🔷 || **`R<V>`** || `val34` || Value 34 |
 * | 70 || 🔷 || **`R<K>`** || `key35` || Key 35 |
 * | 71 || 🔷 || **`R<V>`** || `val35` || Value 35 |
 * | 72 || 🔷 || **`R<K>`** || `key36` || Key 36 |
 * | 73 || 🔷 || **`R<V>`** || `val36` || Value 36 |
 * | 74 || 🔷 || **`R<K>`** || `key37` || Key 37 |
 * | 75 || 🔷 || **`R<V>`** || `val37` || Value 37 |
 * | 76 || 🔷 || **`R<K>`** || `key38` || Key 38 |
 * | 77 || 🔷 || **`R<V>`** || `val38` || Value 38 |
 * | 78 || 🔷 || **`R<K>`** || `key39` || Key 39 |
 * | 79 || 🔷 || **`R<V>`** || `val39` || Value 39 |
 * | 80 || 🔷 || **`R<K>`** || `key40` || Key 40 |
 * | 81 || 🔷 || **`R<V>`** || `val40` || Value 40 |
 * | 82 || 🔷 || **`R<K>`** || `key41` || Key 41 |
 * | 83 || 🔷 || **`R<V>`** || `val41` || Value 41 |
 * | 84 || 🔷 || **`R<K>`** || `key42` || Key 42 |
 * | 85 || 🔷 || **`R<V>`** || `val42` || Value 42 |
 * | 86 || 🔷 || **`R<K>`** || `key43` || Key 43 |
 * | 87 || 🔷 || **`R<V>`** || `val43` || Value 43 |
 * | 88 || 🔷 || **`R<K>`** || `key44` || Key 44 |
 * | 89 || 🔷 || **`R<V>`** || `val44` || Value 44 |
 * | 90 || 🔷 || **`R<K>`** || `key45` || Key 45 |
 * | 91 || 🔷 || **`R<V>`** || `val45` || Value 45 |
 * | 92 || 🔷 || **`R<K>`** || `key46` || Key 46 |
 * | 93 || 🔷 || **`R<V>`** || `val46` || Value 46 |
 * | 94 || 🔷 || **`R<K>`** || `key47` || Key 47 |
 * | 95 || 🔷 || **`R<V>`** || `val47` || Value 47 |
 * | 96 || 🔷 || **`R<K>`** || `key48` || Key 48 |
 * | 97 || 🔷 || **`R<V>`** || `val48` || Value 48 |
 * | 98 || 🔷 || **`R<K>`** || `key49` || Key 49 |
 * | 99 || 🔷 || **`R<V>`** || `val49` || Value 49 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`D<R<K>,R<V>>`** || `dict` || Dictionary: The assembled dictionary |
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
 * **Sort Dictionary by Key** `(Execution.Dictionary.Sort_By_Key)`
 *
 * - Sort and output the specified Dictionary by keys in ascending or descending order
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
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || Dictionary |
 * | 1 || 🔹 || `E<SORT>` || `order` || Sort By |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔶 || **`L<R<K>>`** || `keys_out` || Key List |
 * | 1 || 🔶 || **`L<R<V>>`** || `values_out` || Value List |
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
 * **Sort Dictionary by Value** `(Execution.Dictionary.Sort_By_Value)`
 *
 * - Sort and output the specified Dictionary by values in ascending or descending order
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
 * | 0 || 🔷 || **`D<R<K>,R<V>>`** || `dict` || Dictionary |
 * | 1 || 🔹 || `E<SORT>` || `order` || Sort By |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔶 || **`L<R<K>>`** || `keys_out` || Key List |
 * | 1 || 🔶 || **`L<R<V>>`** || `values_out` || Value List |
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
 * **Query Custom Variable Snapshot** `(Query.Custom_Variable.Get_Snapshot)`
 *
 * - Searches the value of the specified Variable Name from the Custom Variable Component snapshot
 * - Only available for the [On Entity Destroyed] event
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
 * | 0 || 🔹 || `Vss` || `snapshot` || Custom Variable Component Snapshot |
 * | 1 || 🔹 || `Str` || `var_name` || Variable Name |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `value` || Variable Value |
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
 * **Node Graph End (Boolean)** `(Others.Port_Client.Graph_End_Bool)`
 *
 * - End Node for Boolean Local Filter
 * - Outputs True or False as the final result; applies to the referenced logic
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
 * | 0 || 🔹 || `Bol` || `result` || Output Result (Boolean) |
 */
  Others_PortClient_GraphEndBool: "Others.Port_Client.Graph_End_Bool",

  /**
 * **Logical AND Operation** `(Arithmetic.Math_Client.And)`
 *
 * - Performs a logical AND operation on the two input Boolean values and returns the result
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
 * | 0 || 🔹 || `Bol` || `a` || Condition 1 |
 * | 1 || 🔹 || `Bol` || `b` || Condition 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || Result |
 */
  Arithmetic_MathClient_And: "Arithmetic.Math_Client.And",

  /**
 * **Logical OR Operation** `(Arithmetic.Math_Client.Or)`
 *
 * - Performs a logical OR operation on the two input Boolean values and returns the result
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
 * | 0 || 🔹 || `Bol` || `a` || Condition 1 |
 * | 1 || 🔹 || `Bol` || `b` || Condition 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || Result |
 */
  Arithmetic_MathClient_Or: "Arithmetic.Math_Client.Or",

  /**
 * **Logical NOT Operation** `(Arithmetic.Math_Client.Not)`
 *
 * - Performs a logical NOT operation on the input Boolean value and returns the result
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
 * | 0 || 🔹 || `Bol` || `cond` || Condition |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || Result |
 */
  Arithmetic_MathClient_Not: "Arithmetic.Math_Client.Not",

  /**
 * **Logical XOR Operation** `(Arithmetic.Math_Client.Xor)`
 *
 * - Performs a logical XOR operation on the two input Boolean values and returns the result
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
 * | 0 || 🔹 || `Bol` || `a` || Condition 1 |
 * | 1 || 🔹 || `Bol` || `b` || Condition 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || Result |
 */
  Arithmetic_MathClient_Xor: "Arithmetic.Math_Client.Xor",

  /**
 * **Enumeration Match** `(Arithmetic.General_Client.Enum_Match)`
 *
 * - After confirming the Enumeration type, determines whether the two input values are equal
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
 * | 0 || 🔷 || **`R<T>`** || `enum1` || Enumeration 1 |
 * | 1 || 🔷 || **`R<T>`** || `enum2` || Enumeration 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || Result: Output True if equal, False if not equal |
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
 * **Equal** `(Arithmetic.General_Client.Equal)`
 *
 * - Determines whether two inputs are equal
 * - Some Parameter Types have special comparison rules:
 * - Floating Point Numbers: Floating Point Numbers are compared using approximate equality. When the difference between two Floating Point Numbers is less than an extremely small value, the two numbers are considered equal. For example: 2.0000001 and 2.0 are considered equal
 * - 3D Vector: The x, y, and z components of a 3D Vector are compared using Floating Point approximate equality
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
 * | 0 || 🔸 || `Bol` || `result` || Result |
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
 * **Greater Than** `(Arithmetic.Math_Client.Greater_Than)`
 *
 * - Returns whether the left value is greater than the right value
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
 * | 0 || 🔸 || `Bol` || `result` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_GreaterThan: "Arithmetic.Math_Client.Greater_Than",

  /**
 * **Less Than** `(Arithmetic.Math_Client.Less_Than)`
 *
 * - Returns whether the left value is less than the right value
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
 * | 0 || 🔸 || `Bol` || `result` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_LessThan: "Arithmetic.Math_Client.Less_Than",

  /**
 * **Less Than or Equal To** `(Arithmetic.Math_Client.Less_Equal)`
 *
 * - Returns whether the left value is less than or equal to the right value
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
 * | 0 || 🔸 || `Bol` || `result` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_LessEqual: "Arithmetic.Math_Client.Less_Equal",

  /**
 * **Greater Than or Equal To** `(Arithmetic.Math_Client.Greater_Equal)`
 *
 * - Returns whether the left value is greater than or equal to the right value
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
 * | 0 || 🔸 || `Bol` || `result` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_GreaterEqual: "Arithmetic.Math_Client.Greater_Equal",

  /**
 * **Addition** `(Arithmetic.Math_Client.Add)`
 *
 * - Adds two Floating Point Numbers or Integers
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
 * | 0 || 🔶 || **`R<T>`** || `result` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_Add: "Arithmetic.Math_Client.Add",

  /**
 * **Subtraction** `(Arithmetic.Math_Client.Subtract)`
 *
 * - Subtracts two Floating Point Numbers or Integers
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
 * | 0 || 🔶 || **`R<T>`** || `result` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_Subtract: "Arithmetic.Math_Client.Subtract",

  /**
 * **Multiplication** `(Arithmetic.Math_Client.Multiply)`
 *
 * - Performs multiplication, supporting Floating Point and Integer multiplication
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
 * | 0 || 🔶 || **`R<T>`** || `result` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_Multiply: "Arithmetic.Math_Client.Multiply",

  /**
 * **Division** `(Arithmetic.Math_Client.Divide)`
 *
 * - Performs division, supporting Floating Point division and Integer division. Integer division returns the quotient result
 * - The divisor should not be 0, otherwise it may return an illegal value
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
 * | 0 || 🔶 || **`R<T>`** || `result` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_Divide: "Arithmetic.Math_Client.Divide",

  /**
 * **Absolute Value Operation** `(Arithmetic.Math_Client.Abs)`
 *
 * - Returns the absolute value of the input
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
 * | 0 || 🔷 || **`R<T>`** || `input` || Input |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || Result |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_Abs: "Arithmetic.Math_Client.Abs",

  /**
 * **Get Custom Variable** `(Query.Custom_Variable_Client.Get_Variable)`
 *
 * - Returns the value of the specified Custom Variable from the Target Entity
 * - If the variable does not exist, returns the type's default value
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Str` || `variable_name` || Variable Name |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `variable_value` || Variable Value |
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
 * **Get Corresponding Value From List** `(Query.List_Related_Client.Get_At_Index)`
 *
 * - Returns the value at the specified ID in the List. IDs start at 0
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
 * | 0 || 🔹 || `Int` || `index` || ID |
 * | 1 || 🔷 || **`L<R<T>>`** || `data_list` || Data List |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `result` || Result |
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
 * **Get List Length** `(Query.List_Related_Client.Get_Length)`
 *
 * - Returns the length of the list (number of elements)
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
 * | 0 || 🔷 || **`R<T>`** || `input_list` || Input List |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `length` || Length |
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
 * **List Includes This Value** `(Query.List_Related_Client.Contains)`
 *
 * - Returns whether the list contains the specified value
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
 * | 0 || 🔷 || **`R<T>`** || `value` || Value |
 * | 1 || 🔷 || **`L<R<T>>`** || `list` || List |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `result` || Result |
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
 * **Get Maximum Value From List** `(Query.List_Related_Client.Get_Max)`
 *
 * - Applies only to Floating Point Number or Integer lists; returns the maximum value
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
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || List |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `max_value` || Maximum Value |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Query_ListRelatedClient_GetMax: "Query.List_Related_Client.Get_Max",

  /**
 * **Get Minimum Value From List** `(Query.List_Related_Client.Get_Min)`
 *
 * - Applies only to Floating Point Number or Integer lists; returns the minimum value
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
 * | 0 || 🔷 || **`L<R<T>>`** || `list` || List |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `min_value` || Minimum Value |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Query_ListRelatedClient_GetMin: "Query.List_Related_Client.Get_Min",

  /**
 * **Data Type Conversion** `(Arithmetic.General_Client.Convert_Type)`
 *
 * - Converts input parameter types to another type for output. For specific rules, see [Basic Concepts](https://act.mihoyo.com/ys/ugc/tutorial//detail/mhk23ora1wom) - [Conversion Rules Between Basic Data Types]
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
 * | 0 || 🔷 || **`R<K>`** || `input` || Input |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<V>`** || `converted` || Conversion Result |
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
 * **Query Entity by GUID** `(Query.Entity_Related_Client.Get_By_GUID)`
 *
 * - Searches for an Entity by GUID
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
 * | 0 || 🔸 || `Ety` || `entity` || Entity |
 */
  Query_EntityRelatedClient_GetByGUID: "Query.Entity_Related_Client.Get_By_GUID",

  /**
 * **Get Character Entity of Specified Player** `(Query.Character_Related_Client.Get_Player_Character)`
 *
 * - Returns the Character Entity of the specified Player Entity
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
 * | 0 || 🔹 || `Ety` || `player_entity` || Player Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `character_entity` || Character Entity |
 */
  Query_CharacterRelatedClient_GetPlayerCharacter: "Query.Character_Related_Client.Get_Player_Character",

  /**
 * **Get Player Entity to Which the Character Belongs** `(Query.Character_Related_Client.Get_Owner_Player)`
 *
 * - Returns the Player Entity that owns the Character Entity
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
 * | 0 || 🔹 || `Ety` || `character_entity` || Character Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `owner_player_entity` || Affiliated Player Entity |
 */
  Query_CharacterRelatedClient_GetOwnerPlayer: "Query.Character_Related_Client.Get_Owner_Player",

  /**
 * **Get List of Player Entities on the Field** `(Query.Character_Related_Client.Get_All_Players)`
 *
 * - Returns a list of all Player Entities present in the scene
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
 * | 0 || 🔸 || `L<Ety>` || `player_entities` || Player Entity List |
 */
  Query_CharacterRelatedClient_GetAllPlayers: "Query.Character_Related_Client.Get_All_Players",

  /**
 * **Query GUID by Entity** `(Query.Character_Related_Client.Get_GUID)`
 *
 * - Searches for the GUID of the specified Entity
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
 * | 0 || 🔹 || `Ety` || `entity` || Entity |
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
 * **Get Preset Status** `(Query.Preset_Status_Client.Get_Status)`
 *
 * - Returns the Preset Status value of the specified Entity. Returns 0 if the Entity does not have the specified Preset Status
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
 * | 0 || 🔹 || `Ety` || `entity` || Entity |
 * | 1 || 🔹 || `Int` || `preset_index` || Preset Status Index |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Int` || `preset_value` || Preset Status Value |
 */
  Query_PresetStatusClient_GetStatus: "Query.Preset_Status_Client.Get_Status",

  /**
 * **Query Entity Faction** `(Query.Faction_Related_Client.Get_Faction)`
 *
 * - Searches Target Entity's Faction
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Fct` || `camp` || Faction |
 */
  Query_FactionRelatedClient_GetFaction: "Query.Faction_Related_Client.Get_Faction",

  /**
 * **Get Entity Location** `(Query.Entity_Related_Client.Get_Location)`
 *
 * - Returns the Location of the specified Entity
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
 * | 0 || 🔹 || `Ety` || `entity` || Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `position` || Location |
 */
  Query_EntityRelatedClient_GetLocation: "Query.Entity_Related_Client.Get_Location",

  /**
 * **Get Entity Rotation** `(Query.Entity_Related_Client.Get_Rotation)`
 *
 * - Returns the Rotation of the specified Entity in Euler Angles
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
 * | 0 || 🔹 || `Ety` || `entity` || Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `rotation` || Rotate |
 */
  Query_EntityRelatedClient_GetRotation: "Query.Entity_Related_Client.Get_Rotation",

  /**
 * **Get Random Number** `(Arithmetic.Math_Client.Random)`
 *
 * - Returns a random number in [Lower Limit, Upper Limit] (inclusive)
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
 * | 0 || 🔷 || **`R<T>`** || `min` || Lower Limit |
 * | 1 || 🔷 || **`R<T>`** || `max` || Upper Limit |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `value` || Random Number |
 *
 * #### 🧬 Variant Constraints
 * * `C<T:Int>`
 * * `C<T:Flt>`
 */
  Arithmetic_MathClient_Random: "Arithmetic.Math_Client.Random",

  /**
 * **Get Self Entity** `(Query.Entity_Related_Client.Get_Self)`
 *
 * - Returns the Entity associated with this Node Graph
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
 * | 0 || 🔸 || `Ety` || `self` || Self Entity |
 */
  Query_EntityRelatedClient_GetSelf: "Query.Entity_Related_Client.Get_Self",

  /**
 * **Get Target Entity** `(Query.Entity_Related_Client.Get_Target)`
 *
 * - Returns the Target Entity. The meaning of this output varies depending on the functional module that references the Filter Node Graph
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
 * | 0 || 🔸 || `Ety` || `target_entity` || Target Entity |
 */
  Query_EntityRelatedClient_GetTarget: "Query.Entity_Related_Client.Get_Target",

  /**
 * **Get Unit Attack Target** `(Query.Entity_Related_Client.Get_Attack_Target)`
 *
 * - Returns the Target Entity that the Unit Entity is currently attacking
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
 * | 0 || 🔹 || `Ety` || `unit_entity` || Unit Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `attack_target_entity` || Attack Target Entity |
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
 * **Query If Self Is in Combat** `(Query.Character_Related_Client.Is_In_Combat)`
 *
 * - Searches whether the Entity associated with this Node Graph has entered battle
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
 * | 0 || 🔸 || `Bol` || `is_in_combat` || In Combat |
 */
  Query_CharacterRelatedClient_IsInCombat: "Query.Character_Related_Client.Is_In_Combat",

  /**
 * **Play Timed Effects** `(Execution.Character_Skill_Client.Play_Timed_FX)`
 *
 * - Plays Timed Effects at the specified World Location
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
 * | 0 || 🔹 || `Cfg` || `effect_config_id` || Special Effects Asset Configuration ID |
 * | 1 || 🔹 || `Vec` || `position` || Location |
 * | 2 || 🔹 || `Vec` || `rotation` || Rotate |
 * | 3 || 🔹 || `Flt` || `scale` || Zoom Multiplier |
 * | 4 || 🔹 || `Bol` || `play_default_sfx` || Play Default Sound Effects? |
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
 * **Notify Server Node Graph** `(Execution.Character_Skill_Client.Notify_Server)`
 *
 * - Notifies the Server Node Graph; supports up to three String parameters
 * - At runtime, forwards logic to the Server Node Graph and triggers the [On Skill Node Call] Event on the Server Node Graph
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
 * | 0 || 🔹 || `Str` || `str1` || String 1 |
 * | 1 || 🔹 || `Str` || `str2` || String 2 |
 * | 2 || 🔹 || `Str` || `str3` || String 3 |
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
 * **Player Turning** `(Execution.Character_Skill_Client.Turn_Player)`
 *
 * - Turns the Player using the configured turning mode
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
 * | 0 || 🔹 || `E<CROT>` || `turn_mode` || Turning Mode: Includes: Target then Input, Input Direction, Target Direction, Target then Camera, Camera Direction, Input then Target |
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
 * **Set Own Attack Target** `(Execution.Character_Skill_Client.Set_Target)`
 *
 * - Sets the Target Entity as its Attack Target
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Bol` || `instant_turn` || Whether to Turn Immediately |
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
 * **Node Graph Begins** `(Others.Port_Client.Graph_Start)`
 *
 * - Start event of the Skill Node Graph
 * - Used to customize the Skill logic after this Node; subsequent Nodes execute in the order defined by the Node Graph
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
 * **Filter Entity List Within Spherical Range** `(Query.Entity_Related_Client.Filter_Sphere)`
 *
 * - Filters Entities within a spherical range according to specific rules and a maximum count, and returns a list of Entities that meet the conditions
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
 * | 0 || 🔹 || `Flt` || `radius` || Radius |
 * | 1 || 🔹 || `Vec` || `center` || Central Location |
 * | 2 || 🔹 || `Int` || `limit` || Maximum Filter Quantity |
 * | 3 || 🔹 || `E<CTST>` || `rule` || Filter Rules: Options: Default, Random, or Nearest-to-Farthest order |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `result` || Filter Results |
 */
  Query_EntityRelatedClient_FilterSphere: "Query.Entity_Related_Client.Filter_Sphere",

  /**
 * **Filter Entity List Within Square Range** `(Query.Entity_Related_Client.Filter_Square)`
 *
 * - Filters Entities within a square range according to specified rules and a maximum count, and returns a list of Entities that meet the conditions
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
 * | 0 || 🔹 || `Flt` || `width` || Width |
 * | 1 || 🔹 || `Flt` || `height` || Height |
 * | 2 || 🔹 || `Flt` || `length` || Length |
 * | 3 || 🔹 || `Vec` || `center` || Central Location |
 * | 4 || 🔹 || `Int` || `limit` || Maximum Filter Quantity |
 * | 5 || 🔹 || `E<CTST>` || `rule` || Filter Rules: Options: Default, Random, or Nearest-to-Farthest order |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `result` || Filter Results |
 */
  Query_EntityRelatedClient_FilterSquare: "Query.Entity_Related_Client.Filter_Square",

  /**
 * **Get Entity's Type** `(Query.Entity_Related_Client.Get_Type)`
 *
 * - Returns the type of the specified Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `E<CETY>` || `entity_type` || Entity Type |
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
 * **Get Target Attachment Point Location** `(Query.Entity_Related_Client.Get_Socket_Loc)`
 *
 * - Returns the Attachment Point Location corresponding to the specified Attachment Point Name on the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Str` || `attachment_name` || Attachment Point Name |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `attachment_position` || Attachment Point Location |
 */
  Query_EntityRelatedClient_GetSocketLoc: "Query.Entity_Related_Client.Get_Socket_Loc",

  /**
 * **Get Target Attachment Point Rotation** `(Query.Entity_Related_Client.Get_Socket_Rot)`
 *
 * - Returns the Attachment Point Rotation corresponding to the specified Attachment Point Name on the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Str` || `attachment_name` || Attachment Point Name |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `attachment_rotation` || Attachment Point Rotation |
 */
  Query_EntityRelatedClient_GetSocketRot: "Query.Entity_Related_Client.Get_Socket_Rot",

  /**
 * **Assembly List** `(Arithmetic.List_Client.Assemble_List)`
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
 * | 0 || 🔷 || **`R<T>`** || `Input1` || 0: Assembles up to 10 parameters into a list |
 * | 1 || 🔷 || **`R<T>`** || `Input2` || 1: Assembles up to 10 parameters into a list |
 * | 2 || 🔷 || **`R<T>`** || `Input3` || 2: Assembles up to 10 parameters into a list |
 * | 3 || 🔷 || **`R<T>`** || `Input4` || 3: Assembles up to 10 parameters into a list |
 * | 4 || 🔷 || **`R<T>`** || `Input5` || 4: Assembles up to 10 parameters into a list |
 * | 5 || 🔷 || **`R<T>`** || `Input6` || 5: Assembles up to 10 parameters into a list |
 * | 6 || 🔷 || **`R<T>`** || `Input7` || 6: Assembles up to 10 parameters into a list |
 * | 7 || 🔷 || **`R<T>`** || `Input8` || 7: Assembles up to 10 parameters into a list |
 * | 8 || 🔷 || **`R<T>`** || `Input9` || 8: Assembles up to 10 parameters into a list |
 * | 9 || 🔷 || **`R<T>`** || `Input10` || 9: Assembles up to 10 parameters into a list |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`L<R<T>>`** || `list` || 列表: The assembled list |
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
 * **Get Entity Type List** `(Query.List_Related_Client.Get_Entity_Types)`
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
 * | 0 || 🔸 || `L<E<CETY>>` || `list` || list |
 */
  Query_ListRelatedClient_GetEntityTypes: "Query.List_Related_Client.Get_Entity_Types",

  /**
 * **Trigger Hitbox at Specific Location** `(Execution.Character_Skill_Client.Trigger_Hitbox_Loc)`
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
 * **Fixed-Point Projectile Launch** `(Execution.Character_Skill_Client.Launch_Projectile)`
 *
 * - Spawns a Local Projectile at the specified Location in the World Coordinate System
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
 * | 0 || 🔹 || `Pfb` || `projectile_component_id` || Projectile's Prefab ID |
 * | 1 || 🔹 || `Vec` || `spawn_position` || Create Location |
 * | 2 || 🔹 || `Vec` || `spawn_rotation` || Create Rotation |
 * | 3 || 🔹 || `Ety` || `tracking_target` || Track Target |
 * | 4 || 🔹 || `Fct` || `projectile_camp` || Projectile Faction |
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
 * **Fixed-Point Displacement** `(Execution.Character_Skill_Client.Move_To_Point)`
 *
 * - Moves from the current Location to the Target Location
 * - Supports configuring movement duration and speed; if both are small, the movement may not reach the Target Location
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
 * | 0 || 🔹 || `Flt` || `duration` || Displacement Duration |
 * | 1 || 🔹 || `Flt` || `damping_duration` || Displacement Attenuation Duration |
 * | 2 || 🔹 || `Flt` || `speed` || Displacement Speed |
 * | 3 || 🔹 || `Vec` || `target_position` || Displacement Target Location |
 * | 4 || 🔹 || `Bol` || `stop_on_collision` || Terminate Displacement on Collision |
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
 * **Traverse Entity List** `(Execution.Character_Skill_Client.For_Each_Entity)`
 *
 * - Iterates through each Entity in the input Entity List
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
 * | 0 || 🔹 || `L<Ety>` || `entity_list` || Entity List |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `Iteration` ||  |
 * | - || ⏩ || - || `End` ||  |
 * | 0 || 🔸 || `Ety` || `current_entity` || Current Entity |
 */
  Execution_CharacterSkillClient_ForEachEntity: "Execution.Character_Skill_Client.For_Each_Entity",

  /**
 * **Double Branch** `(Control.General_Client.Branch)`
 *
 * - Branches into True or False based on the evaluated condition
 * - When the Boolean is True, the [True] execution flow runs; when it is False, the [False] execution flow runs
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
 * | 0 || 🔹 || `Bol` || `cond` || Condition |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `True` || Yes |
 * | - || ⏩ || - || `False` || No |
 */
  Control_GeneralClient_Branch: "Control.General_Client.Branch",

  /**
 * **Add Unit Status** `(Execution.Character_Skill_Client.Add_Status)`
 *
 * - Applies the Unit Status defined by the configuration ID to the Target
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Application Target |
 * | 1 || 🔹 || `Int` || `stack_count` || Stacks |
 * | 2 || 🔹 || `Cfg` || `state_config_id` || Unit Status Config ID |
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
 * **Remove Unit Status** `(Execution.Character_Skill_Client.Remove_Status)`
 *
 * - Removes the Unit Status corresponding to the specified configuration ID from the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Removal Target |
 * | 1 || 🔹 || `Cfg` || `state_config_id` || Unit Status Config ID |
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
 * **Remove Specified Character Disruptor Device** `(Execution.Character_Skill_Client.Remove_Device)`
 *
 * - Removes the specified type of Character Disruptor Device
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
 * | 0 || 🔹 || `E<CDDT>` || `device_type` || Disruptor Device Type: Includes: Force Field Device, Ejector, and Traction Device |
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
 * **Modify Attack Weight** `(Execution.Character_Skill_Client.Modify_Weight)`
 *
 * - Edits the weight of the current Attack Target
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
 * | 0 || 🔹 || `Flt` || `current_target_weight` || Current Attack Target Weight |
 * | 1 || 🔹 || `Bol` || `force_select_once` || Forcibly Select a Target Once |
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
 * **Camera Orientation Detection Data** `(Execution.Character_Skill_Client.Get_Camera_Data)`
 *
 * - Casts a ray from the Camera to the emission Location and returns the Rotation and Location of valid Targets along the path
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
 * | 0 || 🔹 || `E<CCAM>` || `target_type` || Target Type |
 * | 1 || 🔹 || `Vec` || `origin` || Launch Location |
 * | 2 || 🔹 || `Flt` || `min_distance` || Nearest Distance |
 * | 3 || 🔹 || `Flt` || `max_distance` || Furthest Distance |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `FlowOut` ||  |
 * | 0 || 🔸 || `Vec` || `target_rotation` || Target Rotation |
 * | 1 || 🔸 || `Vec` || `target_position` || Target Location |
 */
  Execution_CharacterSkillClient_GetCameraData: "Execution.Character_Skill_Client.Get_Camera_Data",

  /**
 * **3D Vector Dot Product** `(Arithmetic.Math_Client.Vector_Dot)`
 *
 * - Calculates the dot product of two input 3D Vectors
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
 * | 0 || 🔹 || `Vec` || `vector1` || 3D Vector 1 |
 * | 1 || 🔹 || `Vec` || `vector2` || 3D Vector 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `dot` || Calculation Result |
 */
  Arithmetic_MathClient_VectorDot: "Arithmetic.Math_Client.Vector_Dot",

  /**
 * **3D Vector Cross Product** `(Arithmetic.Math_Client.Vector_Cross)`
 *
 * - Calculates the cross product of two 3D Vectors
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
 * | 0 || 🔹 || `Vec` || `vector1` || 3D Vector 1 |
 * | 1 || 🔹 || `Vec` || `vector2` || 3D Vector 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `cross` || Calculation Result |
 */
  Arithmetic_MathClient_VectorCross: "Arithmetic.Math_Client.Vector_Cross",

  /**
 * **Split 3D Vector** `(Arithmetic.Math_Client.Split_Vector)`
 *
 * - Outputs the x, y, and z components of a 3D Vector as three Floating Point Numbers
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
 * | 0 || 🔹 || `Vec` || `vector` || 3D Vector |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `x` || X-Component |
 * | 1 || 🔸 || `Flt` || `y` || Y-Component |
 * | 2 || 🔸 || `Flt` || `z` || Z-Component |
 */
  Arithmetic_MathClient_SplitVector: "Arithmetic.Math_Client.Split_Vector",

  /**
 * **3D Vector Zoom** `(Arithmetic.Math_Client.Vector_Scale)`
 *
 * - Scales the input 3D Vector (scalar multiplication) and outputs the result
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
 * | 0 || 🔹 || `Flt` || `scale` || Zoom Multiplier |
 * | 1 || 🔹 || `Vec` || `vector` || 3D Vector |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || Result |
 */
  Arithmetic_MathClient_VectorScale: "Arithmetic.Math_Client.Vector_Scale",

  /**
 * **3D Vector Angle** `(Arithmetic.Math_Client.Vector_Angle)`
 *
 * - Calculates the angle between two 3D Vectors and outputs the value in degrees
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
 * | 0 || 🔹 || `Vec` || `vector1` || 3D Vector 1 |
 * | 1 || 🔹 || `Vec` || `vector2` || 3D Vector 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `angle_degrees` || Angle |
 */
  Arithmetic_MathClient_VectorAngle: "Arithmetic.Math_Client.Vector_Angle",

  /**
 * **3D Vector Rotation** `(Arithmetic.Math_Client.Vector_Rotate)`
 *
 * - Rotates the input 3D Vector by the Euler Angles specified by the rotation and returns the result
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
 * | 0 || 🔹 || `Vec` || `vector` || Rotated 3D Vector |
 * | 1 || 🔹 || `Vec` || `rotation` || Rotate |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || Result |
 */
  Arithmetic_MathClient_VectorRotate: "Arithmetic.Math_Client.Vector_Rotate",

  /**
 * **3D Vector Modulo Operation** `(Arithmetic.Math_Client.Vector_Length)`
 *
 * - Calculates the magnitude of the input 3D Vector
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
 * | 0 || 🔹 || `Vec` || `vector` || 3D Vector |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || Result |
 */
  Arithmetic_MathClient_VectorLength: "Arithmetic.Math_Client.Vector_Length",

  /**
 * **Create 3D Vector** `(Arithmetic.Math_Client.Create_Vector)`
 *
 * - Creates a 3D Vector from x, y, and z components
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
 * | 0 || 🔹 || `Flt` || `x` || X-Component |
 * | 1 || 🔹 || `Flt` || `y` || Y-Component |
 * | 2 || 🔹 || `Flt` || `z` || Z-Component |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `vector` || 3D Vector |
 */
  Arithmetic_MathClient_CreateVector: "Arithmetic.Math_Client.Create_Vector",

  /**
 * **3D Vector Addition** `(Arithmetic.Math_Client.Vector_Add)`
 *
 * - Calculates the sum of two 3D Vectors
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
 * | 0 || 🔹 || `Vec` || `vector1` || 3D Vector 1 |
 * | 1 || 🔹 || `Vec` || `vector2` || 3D Vector 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `sum` || Calculation Result |
 */
  Arithmetic_MathClient_VectorAdd: "Arithmetic.Math_Client.Vector_Add",

  /**
 * **3D Vector Subtraction** `(Arithmetic.Math_Client.Vector_Subtract)`
 *
 * - Calculates the difference of two 3D Vectors
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
 * | 0 || 🔹 || `Vec` || `vector1` || 3D Vector 1 |
 * | 1 || 🔹 || `Vec` || `vector2` || 3D Vector 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `diff` || Calculation Result |
 */
  Arithmetic_MathClient_VectorSubtract: "Arithmetic.Math_Client.Vector_Subtract",

  /**
 * **Direction Vector to Rotation** `(Arithmetic.Math_Client.Vector_To_Rotation)`
 *
 * - Converts the Forward Vector and Upward Vector to Euler Angles
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
 * | 0 || 🔹 || `Vec` || `forward` || Forward Vector: Represents the desired Orientation of the Unit |
 * | 1 || 🔹 || `Vec` || `up` || Upward Vector: Defines the Unit's Up direction (used to determine the rotation angle). Default is the positive Y-axis of the World Coordinate System |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `rotation` || Rotate |
 */
  Arithmetic_MathClient_VectorToRotation: "Arithmetic.Math_Client.Vector_To_Rotation",

  /**
 * **Orientation to Rotation** `(Arithmetic.Math_Client.Orientation_To_Rotation)`
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
 * | 0 || 🔹 || `Vec` || `Input0` || Orientation |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `Output0` || Rotate |
 */
  Arithmetic_MathClient_OrientationToRotation: "Arithmetic.Math_Client.Orientation_To_Rotation",

  /**
 * **Recover HP** `(Execution.Character_Skill_Client.Recover_HP)`
 *
 * - Initiates a one-time HP restoration for the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Flt` || `heal_amount` || Recovery Amount |
 * | 2 || 🔹 || `Bol` || `ignore_healing_adjustments` || Ignore Recovery Adjustment Effect |
 * | 3 || 🔹 || `Flt` || `aggro_multiplier` || Aggro Multiplier for This Healing |
 * | 4 || 🔹 || `Int` || `aggro_increment` || Aggro Increment for This Healing |
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
 * **Get Current Character** `(Query.Character_Related_Client.Get_Current_Character)`
 *
 * - Returns the Character Entity currently controlled by this Player's client
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
 * | 0 || 🔸 || `Ety` || `character_entity` || Character Entity |
 */
  Query_CharacterRelatedClient_GetCurrentCharacter: "Query.Character_Related_Client.Get_Current_Character",

  /**
 * **Get Entity's Unit Tag List** `(Query.Unit_Tag_Client.Get_Tags)`
 *
 * - Returns a list of all Unit Tags carried by the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Int>` || `indexes` || List |
 */
  Query_UnitTagClient_GetTags: "Query.Unit_Tag_Client.Get_Tags",

  /**
 * **Get Entity List by Unit Tag** `(Query.Unit_Tag_Client.Get_By_Tag)`
 *
 * - Returns a list of all Entities in the scene that carry this Unit Tag
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
 * | 0 || 🔹 || `Int` || `unit_tag_index` || Unit Tag Index |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `entities` || Entity List |
 */
  Query_UnitTagClient_GetByTag: "Query.Unit_Tag_Client.Get_By_Tag",

  /**
 * **Finite Loop** `(Execution.General_Client.For_Loop)`
 *
 * - From the [Loop Start Value] to the [Loop End Value], the loop iterates, incrementing the Integer by 1 each time. On each iteration, it executes the Nodes connected to [Loop Body]. After a full iteration, it executes the Nodes connected to [Loop Complete].
 * - Use [Break Loop] to end the iteration early
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
 * | - || ▶️ || - || `Break` || Break Loop |
 * | 0 || 🔹 || `Int` || `start_index` || Loop Start Value |
 * | 1 || 🔹 || `Int` || `end_index` || Loop Termination Value |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | - || ⏩ || - || `Iteration` || Loop Body |
 * | - || ⏩ || - || `End` || Loop Complete |
 * | 0 || 🔸 || `Int` || `current_index` || Current Loop Value |
 */
  Execution_GeneralClient_ForLoop: "Execution.General_Client.For_Loop",

  /**
 * **Break Loop** `(Execution.General_Client.Break)`
 *
 * - Break out of a Finite Loop. The output pin must connect to the [Break Loop] input parameter of the [Finite Loop] Node
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
 * **Set Local Variable** `(Execution.General_Client.Set_Local)`
 *
 * - Sets the value of a local variable
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
 * | 0 || 🔹 || `Str` || `variable_name` || Variable Name |
 * | 1 || 🔷 || **`R<T>`** || `variable_value` || Variable Value |
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
 * **Get Local Variable** `(Query.General_Client.Get_Local)`
 *
 * - Returns the value of a specific local variable
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
 * | 0 || 🔹 || `Str` || `variable_name` || Variable Name |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔶 || **`R<T>`** || `value` || Variable Value |
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
 * **Set the Aggro Value of the Specified Entity** `(Execution.Custom_Aggro_Client.Set_Aggro)`
 *
 * - Available only in Custom Aggro Mode
 * - Sets the Aggro Value of the specified Entity on the Aggro Owner Entity
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
 * | 0 || 🔹 || `Ety` || `target` || Target Entity |
 * | 1 || 🔹 || `Ety` || `owner` || Aggro Owner Entity |
 * | 2 || 🔹 || `Int` || `value` || Aggro Value |
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
 * **Modify the Aggro Value of the Specified Entity** `(Execution.Custom_Aggro_Client.Modify_Aggro)`
 *
 * - Available only in Custom Aggro Mode
 * - Edits the Aggro Value of the specified Entity on the Aggro Owner Entity
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
 * | 0 || 🔹 || `Ety` || `target` || Target Entity |
 * | 1 || 🔹 || `Ety` || `owner` || Aggro Owner Entity |
 * | 2 || 🔹 || `Int` || `delta` || Aggro Value Increment |
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
 * **Modify the Aggro Value of the Specified Entity Proportionally** `(Execution.Custom_Aggro_Client.Modify_Aggro_Ratio)`
 *
 * - Available only in Custom Aggro Mode
 * - Proportionally edits the Target Entity's Aggro Value on the specified Aggro Owner
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
 * | 0 || 🔹 || `Ety` || `target` || Target Entity |
 * | 1 || 🔹 || `Ety` || `owner` || Aggro Owner Entity |
 * | 2 || 🔹 || `Flt` || `ratio` || Modified Aggro Value Ratio |
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
 * **Transfer the Aggro Value of the Specified Entity Proportionally** `(Execution.Custom_Aggro_Client.Transfer_Aggro)`
 *
 * - Available only in Custom Aggro Mode
 * - Transfers a percentage of Aggro on the Aggro Owner from the Source Entity to the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target` || Transfer Target Entity |
 * | 1 || 🔹 || `Ety` || `source` || Transfer Source Entity |
 * | 2 || 🔹 || `Ety` || `owner` || Aggro Owner Entity |
 * | 3 || 🔹 || `Flt` || `ratio` || Transfer Ratio |
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
 * **Clear the Aggro List of the Specified Entity** `(Execution.Custom_Aggro_Client.Clear_Aggro)`
 *
 * - Available only in Custom Aggro Mode
 * - Clears the Aggro List of the specified Entity; this usually causes the Target to leave battle
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
 * | 0 || 🔹 || `Ety` || `target` || Target Entity |
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
 * **Remove Target Entity From Aggro List** `(Execution.Custom_Aggro_Client.Remove_Aggro)`
 *
 * - Available only in Custom Aggro Mode
 * - Removes the Target Entity from the Aggro Owner Entity's Aggro List; this may cause the Target Entity to leave battle
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
 * | 0 || 🔹 || `Ety` || `target` || Target Entity |
 * | 1 || 🔹 || `Ety` || `owner` || Aggro Owner Entity |
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
 * **Taunt Target** `(Execution.Custom_Aggro_Client.Taunt)`
 *
 * - Available only in Custom Aggro Mode
 * - The Taunter Entity taunts the specified Target Entity
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
 * | 0 || 🔹 || `Ety` || `taunter` || Taunter Entity |
 * | 1 || 🔹 || `Ety` || `target` || Target Entity |
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
 * **Get the Aggro Target of the Specified Entity** `(Query.Custom_Aggro_Client.Get_Aggro_Target)`
 *
 * - Get Aggro Target of Specific Entity
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
 * | 0 || 🔹 || `Ety` || `specified_entity` || Specified Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Ety` || `hate_target` || Aggro Target |
 */
  Query_CustomAggroClient_GetAggroTarget: "Query.Custom_Aggro_Client.Get_Aggro_Target",

  /**
 * **Get the Aggro List of the Specified Entity** `(Query.Custom_Aggro_Client.Get_Aggro_List)`
 *
 * - Get Specific Entity's Aggro List
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
 * | 0 || 🔹 || `Ety` || `specified_entity` || Specified Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `hate_list` || Aggro List |
 */
  Query_CustomAggroClient_GetAggroList: "Query.Custom_Aggro_Client.Get_Aggro_List",

  /**
 * **Query if Specified Entity is in Combat** `(Query.Custom_Aggro_Client.Is_In_Combat)`
 *
 * - Searches whether the specified Entity has entered battle
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `is_in_combat` || In Combat |
 */
  Query_CustomAggroClient_IsInCombat: "Query.Custom_Aggro_Client.Is_In_Combat",

  /**
 * **Query If Faction Is Hostile** `(Query.Faction_Related_Client.Is_Hostile)`
 *
 * - Searches whether Faction 1 and Faction 2 are hostile
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
 * | 0 || 🔹 || `Fct` || `camp1` || Faction 1 |
 * | 1 || 🔹 || `Fct` || `camp2` || Faction 2 |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `is_hostile` || Hostile |
 */
  Query_FactionRelatedClient_IsHostile: "Query.Faction_Related_Client.Is_Hostile",

  /**
 * **Sine Function** `(Arithmetic.Math_Client.Sin)`
 *
 * - Calculates the sine of the input in radians
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
 * | 0 || 🔹 || `Flt` || `radian` || Radian |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || Result |
 */
  Arithmetic_MathClient_Sin: "Arithmetic.Math_Client.Sin",

  /**
 * **Cosine Function** `(Arithmetic.Math_Client.Cos)`
 *
 * - Calculates the cosine of the input in radians
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
 * | 0 || 🔹 || `Flt` || `radian` || Radian |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `result` || Result |
 */
  Arithmetic_MathClient_Cos: "Arithmetic.Math_Client.Cos",

  /**
 * **Tangent Function** `(Arithmetic.Math_Client.Tan)`
 *
 * - Calculates the tangent of the input in radians
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
 * | 0 || 🔹 || `Flt` || `Input1` || Radian |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `Output0` || Result |
 */
  Arithmetic_MathClient_Tan: "Arithmetic.Math_Client.Tan",

  /**
 * **Arcsine Function** `(Arithmetic.Math_Client.Asin)`
 *
 * - Calculates the arcsine of the input and returns the value in radians
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
 * | 0 || 🔹 || `Flt` || `input` || Input |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `radians` || Radian |
 */
  Arithmetic_MathClient_Asin: "Arithmetic.Math_Client.Asin",

  /**
 * **Arccosine Function** `(Arithmetic.Math_Client.Acos)`
 *
 * - Calculates the arccosine of the input and returns the value in radians
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
 * | 0 || 🔹 || `Flt` || `input` || Input |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `radians` || Radian |
 */
  Arithmetic_MathClient_Acos: "Arithmetic.Math_Client.Acos",

  /**
 * **Arctangent Function** `(Arithmetic.Math_Client.Atan)`
 *
 * - Calculates the arctangent of the input and returns the value in radians
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
 * | 0 || 🔹 || `Flt` || `input` || Input |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `radians` || Radian |
 */
  Arithmetic_MathClient_Atan: "Arithmetic.Math_Client.Atan",

  /**
 * **3D Vector Normalization** `(Arithmetic.Math_Client.Vector_Normalize)`
 *
 * - Normalizes the length of a 3D Vector and outputs the result
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
 * | 0 || 🔹 || `Vec` || `vector` || 3D Vector |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Vec` || `result` || Result |
 */
  Arithmetic_MathClient_VectorNormalize: "Arithmetic.Math_Client.Vector_Normalize",

  /**
 * **Radians to Degrees** `(Arithmetic.Math_Client.Rad_To_Deg)`
 *
 * - Converts radians to degrees
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
 * | 0 || 🔹 || `Flt` || `radian` || Radian |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `degree` || Angle |
 */
  Arithmetic_MathClient_RadToDeg: "Arithmetic.Math_Client.Rad_To_Deg",

  /**
 * **Degrees to Radians** `(Arithmetic.Math_Client.Deg_To_Rad)`
 *
 * - Converts degrees to radians
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
 * | 0 || 🔹 || `Flt` || `degree` || Angle |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Flt` || `radian` || Radian |
 */
  Arithmetic_MathClient_DegToRad: "Arithmetic.Math_Client.Deg_To_Rad",

  /**
 * **Query If Entity Is on the Field** `(Query.Entity_Related_Client.Is_Active)`
 *
 * - Searches whether the specified Entity is present
 * - Note that Character Entities are still considered present even when Downed
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Bol` || `is_present` || On the Field |
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
 * **Player Turns to Face Set Direction** `(Execution.Character_Skill_Client.Turn_To_Face)`
 *
 * - Turns the Player toward the direction specified by the 3D Vector configuration
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
 * | 0 || 🔹 || `Vec` || `direction` || Orientation |
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
 * **Reset Skill Target** `(Execution.Character_Skill_Client.Reset_Target)`
 *
 * - Resets the Skill Target and reruns the Skill selection logic to choose a new Target
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
 * **Get All Entities Within the Collision Trigger** `(Query.Trigger_Client.Get_Overlapping_Entities)`
 *
 * - Returns all Entities within the Collision Trigger corresponding to a specific ID in the Collision Trigger Component on the Target Entity
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 * | 1 || 🔹 || `Int` || `trigger_index` || Trigger ID |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `L<Ety>` || `entities` || Entity List |
 */
  Query_TriggerClient_GetOverlappingEntities: "Query.Trigger_Client.Get_Overlapping_Entities",

  /**
 * **Force Exit Aiming State** `(Execution.Character_Skill_Client.Exit_Aiming)`
 *
 * - Forces the Character to exit Aiming Status if the Character is currently in it
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
 * **Get Ray Detection Result** `(Query.Ray_Client.Get_Ray_Result)`
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
 * **Get Ray Filter Type List** `(Query.List_Related_Client.Get_Ray_Filters)`
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
 * | 0 || 🔸 || `L<E<CATX>>` || `list` || list |
 */
  Query_ListRelatedClient_GetRayFilters: "Query.List_Related_Client.Get_Ray_Filters",

  /**
 * **Trigger Spherical Hitbox at Specific Location** `(Execution.Character_Skill_Client.Trigger_Sphere_Hitbox_Loc)`
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
 * **Trigger Rectangular Hitbox at Specific Location** `(Execution.Character_Skill_Client.Trigger_Rect_Hitbox_Loc)`
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
 * **Trigger Sector Hitbox at Specific Location** `(Execution.Character_Skill_Client.Trigger_Sector_Hitbox_Loc)`
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
 * **Trigger Sector Hitbox at Specified Attachment Point** `(Execution.Character_Skill_Client.Trigger_Sector_Hitbox_Socket)`
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
 * **Get Entity Currently Scanned by Scan Component** `(Query.Scanning_Client.Get_Scanned_Entity)`
 *
 * - Returns Entities currently detected by the Scan Component; these are Entities in the Active State
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
 * | 0 || 🔸 || `Ety` || `entity` || Corresponding Entity |
 * | 1 || 🔸 || `Cfg` || `scan_tag_config_id` || Scan Tag Config ID |
 */
  Query_ScanningClient_GetScannedEntity: "Query.Scanning_Client.Get_Scanned_Entity",

  /**
 * **Get All Valid Entities That Are Scannable by Scan Component** `(Query.Scanning_Client.Get_Scannable_Entities)`
 *
 * - Returns all Units carrying a Scan Component whose Filter returns True, regardless of the Unit's scannable status
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
 * | 0 || 🔸 || `L<Ety>` || `objects` || Object List |
 */
  Query_ScanningClient_GetScannableEntities: "Query.Scanning_Client.Get_Scannable_Entities",

  /**
 * **Get Entity's Scan Status** `(Query.Scanning_Client.Get_Scan_Status)`
 *
 * - Get Entity Scan Status
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `E<CSCN>` || `scan_state` || Scan Status: Options: Invisible, Current Scan Target, Candidate Target, Not Eligible |
 */
  Query_ScanningClient_GetScanStatus: "Query.Scanning_Client.Get_Scan_Status",

  /**
 * **Get Entity's Current Active Scan Tags** `(Query.Scanning_Client.Get_Active_Tags)`
 *
 * - Returns the Target Entity's Current Active Scan Tags
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
 * | 0 || 🔹 || `Ety` || `target_entity` || Target Entity |
 *
 * -----------
 *
 * #### 📤 Outputs
 * | Idx | │ | Dir | │ | Type | │ | Identifier | │ | Info |
 * | :-: |:-:| :-: |:-:| :--: |:-:| :-------- |:-:| :-- |
 * | 0 || 🔸 || `Cfg` || `scan_tag_config_id` || Scan Tag Config ID |
 */
  Query_ScanningClient_GetActiveTags: "Query.Scanning_Client.Get_Active_Tags",

  /**
 * **Node Graph End (Integer)** `(Others.Port_Client.Graph_End_Int)`
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
 * | 0 || 🔹 || `Int` || `Input0` || Output Result (integer) |
 */
  Others_PortClient_GraphEndInt: "Others.Port_Client.Graph_End_Int",

  /**
 * **Get Player Client Input Device Type** `(Query.Character_Related_Client.Get_Input_Type)`
 *
 * - Returns the Player's local input device type, as determined by the Interface mapping method
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
 * | 0 || 🔸 || `E<CDEV>` || `input_device_type` || Input Device Type: Includes keyboard/mouse, gamepad, touchscreen |
 */
  Query_CharacterRelatedClient_GetInputType: "Query.Character_Related_Client.Get_Input_Type",

  /**
 * **Send Signal to Server Node Graph** `(Execution.Signal_Client.Send_To_Server)`
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
 * **Send Signal** `(Execution.Signal.Send)`
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
 * **Monitor Signal** `(Trigger.Signal.On_Signal)`
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
 * | 0 || 🔸 || `Ety` || `source_entity` || Event Source Entity |
 * | 1 || 🔸 || `Gid` || `source_guid` || Event Source GUID |
 * | 2 || 🔸 || `Ety` || `signal_from` || Signal Source Entity |
 */
  Trigger_Signal_OnSignal: "Trigger.Signal.On_Signal",

  /**
 * **Assemble Structure** `(Arithmetic.Structure.Assemble_Struct)`
 *
 * - Combines multiple parameters into a single Structure-type value
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **300002** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 */
  Arithmetic_Structure_AssembleStruct: "Arithmetic.Structure.Assemble_Struct",

  /**
 * **Split Structure** `(Arithmetic.Structure.Split_Struct)`
 *
 * - Returns all parameters of the specified Structure
 *
 * -----------
 *
 * | ID | │ | System | │ | Domain | │ | Type |
 * | :-:|:-:| :----: |:-:| :----: |:-:| :--: |
 * | **300003** || 🖥️ Server || 🔢 Arithmetic || 📌Fixed |
 */
  Arithmetic_Structure_SplitStruct: "Arithmetic.Structure.Split_Struct",

  /**
 * **Modify Structure** `(Execution.Structure.Modify)`
 *
 * - After selecting a Structure, you can edit each parameter of that Structure
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
  Print_String: "Execution.Common_Node.Print",
  /**  See `NODES.Control_General_Branch` for detailed documentation. */
  Double_Branch: "Control.General.Branch",
  /**  See `NODES.Control_General_Switch` for detailed documentation. */
  Multiple_Branches: "Control.General.Switch",
  /**  See `NODES.Execution_CommonNode_ForLoop` for detailed documentation. */
  Finite_Loop: "Execution.Common_Node.For_Loop",
  /**  See `NODES.Execution_CommonNode_Break` for detailed documentation. */
  Break_Loop: "Execution.Common_Node.Break",
  /**  See `NODES.Query_Math_RandomFloat` for detailed documentation. */
  Get_Random_Floating_Point_Number: "Query.Math.Random_Float",
  /**  See `NODES.Query_Math_WeightedRandom` for detailed documentation. */
  Weighted_Random: "Query.Math.Weighted_Random",
  /**  See `NODES.Arithmetic_Math_SplitVector` for detailed documentation. */
  Split_3D_Vector: "Arithmetic.Math.Split_Vector",
  /**  See `NODES.Arithmetic_Math_VectorAdd` for detailed documentation. */
  _3D_Vector_Addition: "Arithmetic.Math.Vector_Add",
  /**  See `NODES.Arithmetic_Math_VectorSubtract` for detailed documentation. */
  _3D_Vector_Subtraction: "Arithmetic.Math.Vector_Subtract",
  /**  See `NODES.Arithmetic_Math_VectorScale` for detailed documentation. */
  _3D_Vector_Zoom: "Arithmetic.Math.Vector_Scale",
  /**  See `NODES.Arithmetic_Math_VectorAngle` for detailed documentation. */
  _3D_Vector_Angle: "Arithmetic.Math.Vector_Angle",
  /**  See `NODES.Arithmetic_General_Equal` for detailed documentation. */
  Equal: "Arithmetic.General.Equal",
  /**  See `NODES.Query_General_GetLocal` for detailed documentation. */
  Get_Local_Variable: "Query.General.Get_Local",
  /**  See `NODES.Execution_CommonNode_SetLocal` for detailed documentation. */
  Set_Local_Variable: "Execution.Common_Node.Set_Local",
  /**  See `NODES.Execution_CustomVariable_SetVariable` for detailed documentation. */
  Set_Custom_Variable: "Execution.Custom_Variable.Set_Variable",
  /**  See `NODES.Trigger_CustomVariable_OnVariableChange` for detailed documentation. */
  When_Custom_Variable_Changes: "Trigger.Custom_Variable.On_Variable_Change",
  /**  See `NODES.Query_CustomVariable_GetVariable` for detailed documentation. */
  Get_Custom_Variable: "Query.Custom_Variable.Get_Variable",
  /**  See `NODES.Execution_PresetStatus_SetStatus` for detailed documentation. */
  Set_Preset_Status: "Execution.Preset_Status.Set_Status",
  /**  See `NODES.Trigger_PresetStatus_OnStatusChange` for detailed documentation. */
  When_Preset_Status_Changes: "Trigger.Preset_Status.On_Status_Change",
  /**  See `NODES.Query_PresetStatus_GetStatus` for detailed documentation. */
  Get_Preset_Status: "Query.Preset_Status.Get_Status",
  /**  See `NODES.Execution_EntityRelated_DestroyEntity` for detailed documentation. */
  Destroy_Entity: "Execution.Entity_Related.Destroy_Entity",
  /**  See `NODES.Execution_EntityRelated_CreateEntity` for detailed documentation. */
  Create_Entity: "Execution.Entity_Related.Create_Entity",
  /**  See `NODES.Trigger_EntityRelated_OnCreated` for detailed documentation. */
  When_Entity_Is_Created: "Trigger.Entity_Related.On_Created",
  /**  See `NODES.Trigger_EntityRelated_OnRemoved` for detailed documentation. */
  When_Entity_Is_Removed_Destroyed: "Trigger.Entity_Related.On_Removed",
  /**  See `NODES.Query_EntityRelated_GetSelf` for detailed documentation. */
  Get_Self_Entity: "Query.Entity_Related.Get_Self",
  /**  See `NODES.Arithmetic_Math_VectorNormalize` for detailed documentation. */
  _3D_Vector_Normalization: "Arithmetic.Math.Vector_Normalize",
  /**  See `NODES.Query_EntityRelated_GetByGUID` for detailed documentation. */
  Query_Entity_by_GUID: "Query.Entity_Related.Get_By_GUID",
  /**  See `NODES.Query_EntityRelated_GetGUID` for detailed documentation. */
  Query_GUID_by_Entity: "Query.Entity_Related.Get_GUID",
  /**  See `NODES.Execution_StageRelated_Settle` for detailed documentation. */
  Settle_Stage: "Execution.Stage_Related.Settle",
  /**  See `NODES.Execution_Timer_Start` for detailed documentation. */
  Start_Timer: "Execution.Timer.Start",
  /**  See `NODES.Execution_Timer_Pause` for detailed documentation. */
  Pause_Timer: "Execution.Timer.Pause",
  /**  See `NODES.Execution_Timer_Resume` for detailed documentation. */
  Resume_Timer: "Execution.Timer.Resume",
  /**  See `NODES.Execution_Timer_Stop` for detailed documentation. */
  Stop_Timer: "Execution.Timer.Stop",
  /**  See `NODES.Trigger_Timer_OnTimerTrigger` for detailed documentation. */
  When_Timer_Is_Triggered: "Trigger.Timer.On_Timer_Trigger",
  /**  See `NODES.Execution_MotionDevice_AddLinearMotion` for detailed documentation. */
  Add_Uniform_Basic_Linear_Motion_Device: "Execution.Motion_Device.Add_Linear_Motion",
  /**  See `NODES.Execution_MotionDevice_AddRotationMotion` for detailed documentation. */
  Add_Uniform_Basic_Rotation_Based_Motion_Device: "Execution.Motion_Device.Add_Rotation_Motion",
  /**  See `NODES.Execution_MotionDevice_StopDelete` for detailed documentation. */
  Stop_and_Delete_Basic_Motion_Device: "Execution.Motion_Device.Stop_Delete",
  /**  See `NODES.Execution_MotionDevice_Pause` for detailed documentation. */
  Pause_Basic_Motion_Device: "Execution.Motion_Device.Pause",
  /**  See `NODES.Execution_MotionDevice_Resume` for detailed documentation. */
  Recover_Basic_Motion_Device: "Execution.Motion_Device.Resume",
  /**  See `NODES.Trigger_MotionDevice_OnMotionStop` for detailed documentation. */
  When_Basic_Motion_Device_Stops: "Trigger.Motion_Device.On_Motion_Stop",
  /**  See `NODES.Execution_CollisionTrigger_SetTriggerState` for detailed documentation. */
  Activate_Disable_Collision_Trigger: "Execution.Collision_Trigger.Set_Trigger_State",
  /**  See `NODES.Trigger_CollisionTrigger_OnExit` for detailed documentation. */
  When_Exiting_Collision_Trigger: "Trigger.Collision_Trigger.On_Exit",
  /**  See `NODES.Trigger_CollisionTrigger_OnEnter` for detailed documentation. */
  When_Entering_Collision_Trigger: "Trigger.Collision_Trigger.On_Enter",
  /**  See `NODES.Execution_SpecialEffect_PlayTimed` for detailed documentation. */
  Play_Timed_Effects: "Execution.Special_Effect.Play_Timed",
  /**  See `NODES.Execution_SpecialEffect_PlayLoop` for detailed documentation. */
  Mount_Looping_Special_Effect: "Execution.Special_Effect.Play_Loop",
  /**  See `NODES.Execution_SpecialEffect_StopLoop` for detailed documentation. */
  Clear_Looping_Special_Effect: "Execution.Special_Effect.Stop_Loop",
  /**  See `NODES.Query_EntityRelated_GetTransform` for detailed documentation. */
  Get_Entity_Location_and_Rotation: "Query.Entity_Related.Get_Transform",
  /**  See `NODES.Execution_ListOperation_Concatenate` for detailed documentation. */
  Concatenate_List: "Execution.List_Operation.Concatenate",
  /**  See `NODES.Execution_ListOperation_Clear` for detailed documentation. */
  Clear_List: "Execution.List_Operation.Clear",
  /**  See `NODES.Query_ListRelated_Contains` for detailed documentation. */
  List_Includes_This_Value: "Query.List_Related.Contains",
  /**  See `NODES.Query_ListRelated_FindIndex` for detailed documentation. */
  Search_List_and_Return_Value_ID: "Query.List_Related.Find_Index",
  /**  See `NODES.Query_ListRelated_GetAtIndex` for detailed documentation. */
  Get_Corresponding_Value_From_List: "Query.List_Related.Get_At_Index",
  /**  See `NODES.Execution_ListOperation_Insert` for detailed documentation. */
  Insert_Value_Into_List: "Execution.List_Operation.Insert",
  /**  See `NODES.Query_ListRelated_GetLength` for detailed documentation. */
  Get_List_Length: "Query.List_Related.Get_Length",
  /**  See `NODES.Query_ListRelated_GetMax` for detailed documentation. */
  Get_Maximum_Value_from_List: "Query.List_Related.Get_Max",
  /**  See `NODES.Query_ListRelated_GetMin` for detailed documentation. */
  Get_Minimum_Value_From_List: "Query.List_Related.Get_Min",
  /**  See `NODES.Execution_ListOperation_Remove` for detailed documentation. */
  Remove_Value_From_List: "Execution.List_Operation.Remove",
  /**  See `NODES.Execution_ListOperation_ModifyIndex` for detailed documentation. */
  Modify_Value_in_List: "Execution.List_Operation.Modify_Index",
  /**  See `NODES.Execution_ListOperation_Sort` for detailed documentation. */
  List_Sorting: "Execution.List_Operation.Sort",
  /**  See `NODES.Arithmetic_General_AssembleList` for detailed documentation. */
  Assembly_List: "Arithmetic.General.Assemble_List",
  /**  See `NODES.Trigger_MotionDevice_OnReachWaypoint` for detailed documentation. */
  When_Path_Reaches_Waypoint: "Trigger.Motion_Device.On_Reach_Waypoint",
  /**  See `NODES.Execution_EntityDeployment_SetGroupState` for detailed documentation. */
  Activate_Disable_Entity_Deployment_Group: "Execution.Entity_Deployment.Set_Group_State",
  /**  See `NODES.Query_EntityLayout_GetActiveGroups` for detailed documentation. */
  Get_Currently_Active_Entity_Deployment_Groups: "Query.Entity_Layout.Get_Active_Groups",
  /**  See `NODES.Arithmetic_General_ConvertType` for detailed documentation. */
  Data_Type_Conversion: "Arithmetic.General.Convert_Type",
  /**  See `NODES.Execution_CommonNode_ForwardEvent` for detailed documentation. */
  Forwarding_Event: "Execution.Common_Node.Forward_Event",
  /**  See `NODES.Query_Math_Pi` for detailed documentation. */
  Pi: "Query.Math.Pi",
  /**  See `NODES.Query_Math_VectorZero` for detailed documentation. */
  _3D_Vector_Zero_Vector: "Query.Math.Vector_Zero",
  /**  See `NODES.Query_Math_VectorUp` for detailed documentation. */
  _3D_Vector_Up: "Query.Math.Vector_Up",
  /**  See `NODES.Query_Math_VectorDown` for detailed documentation. */
  _3D_Vector_Down: "Query.Math.Vector_Down",
  /**  See `NODES.Query_Math_VectorLeft` for detailed documentation. */
  _3D_Vector_Left: "Query.Math.Vector_Left",
  /**  See `NODES.Query_Math_VectorRight` for detailed documentation. */
  _3D_Vector_Right: "Query.Math.Vector_Right",
  /**  See `NODES.Query_Math_VectorForward` for detailed documentation. */
  _3D_Vector_Forward: "Query.Math.Vector_Forward",
  /**  See `NODES.Query_Math_VectorBackward` for detailed documentation. */
  _3D_Vector_Backward: "Query.Math.Vector_Backward",
  /**  See `NODES.Arithmetic_Math_Add` for detailed documentation. */
  Addition: "Arithmetic.Math.Add",
  /**  See `NODES.Arithmetic_Math_Subtract` for detailed documentation. */
  Subtraction: "Arithmetic.Math.Subtract",
  /**  See `NODES.Arithmetic_Math_Multiply` for detailed documentation. */
  Multiplication: "Arithmetic.Math.Multiply",
  /**  See `NODES.Arithmetic_Math_Divide` for detailed documentation. */
  Division: "Arithmetic.Math.Divide",
  /**  See `NODES.Arithmetic_Math_Modulo` for detailed documentation. */
  Modulo_Operation: "Arithmetic.Math.Modulo",
  /**  See `NODES.Arithmetic_Math_Power` for detailed documentation. */
  Exponentiation: "Arithmetic.Math.Power",
  /**  See `NODES.Arithmetic_Math_Max` for detailed documentation. */
  Take_Larger_Value: "Arithmetic.Math.Max",
  /**  See `NODES.Arithmetic_Math_Min` for detailed documentation. */
  Take_Smaller_Value: "Arithmetic.Math.Min",
  /**  See `NODES.Arithmetic_Math_Log` for detailed documentation. */
  Logarithm_Operation: "Arithmetic.Math.Log",
  /**  See `NODES.Arithmetic_Math_Abs` for detailed documentation. */
  Absolute_Value_Operation: "Arithmetic.Math.Abs",
  /**  See `NODES.Arithmetic_Math_Sign` for detailed documentation. */
  Sign_Operation: "Arithmetic.Math.Sign",
  /**  See `NODES.Arithmetic_Math_VectorLength` for detailed documentation. */
  _3D_Vector_Modulo_Operation: "Arithmetic.Math.Vector_Length",
  /**  See `NODES.Arithmetic_Math_Sqrt` for detailed documentation. */
  Arithmetic_Square_Root_Operation: "Arithmetic.Math.Sqrt",
  /**  See `NODES.Arithmetic_Math_Clamp` for detailed documentation. */
  Range_Limiting_Operation: "Arithmetic.Math.Clamp",
  /**  See `NODES.Arithmetic_Math_Round` for detailed documentation. */
  Round_to_Integer_Operation: "Arithmetic.Math.Round",
  /**  See `NODES.Arithmetic_Math_CreateVector` for detailed documentation. */
  Create_3D_Vector: "Arithmetic.Math.Create_Vector",
  /**  See `NODES.Arithmetic_Math_And` for detailed documentation. */
  Logical_AND_Operation: "Arithmetic.Math.And",
  /**  See `NODES.Arithmetic_Math_Or` for detailed documentation. */
  Logical_OR_Operation: "Arithmetic.Math.Or",
  /**  See `NODES.Arithmetic_Math_Xor` for detailed documentation. */
  Logical_XOR_Operation: "Arithmetic.Math.Xor",
  /**  See `NODES.Arithmetic_Math_Not` for detailed documentation. */
  Logical_NOT_Operation: "Arithmetic.Math.Not",
  /**  See `NODES.Arithmetic_Math_LessThan` for detailed documentation. */
  Less_Than: "Arithmetic.Math.Less_Than",
  /**  See `NODES.Arithmetic_Math_LessEqual` for detailed documentation. */
  Less_Than_or_Equal_To: "Arithmetic.Math.Less_Equal",
  /**  See `NODES.Arithmetic_Math_GreaterThan` for detailed documentation. */
  Greater_Than: "Arithmetic.Math.Greater_Than",
  /**  See `NODES.Arithmetic_Math_GreaterEqual` for detailed documentation. */
  Greater_Than_or_Equal_To: "Arithmetic.Math.Greater_Equal",
  /**  See `NODES.Execution_Collision_SetNativeCollision` for detailed documentation. */
  Activate_Disable_Native_Collision: "Execution.Collision.Set_Native_Collision",
  /**  See `NODES.Execution_Collision_SetNativeClimb` for detailed documentation. */
  Activate_Disable_Native_Collision_Climbability: "Execution.Collision.Set_Native_Climb",
  /**  See `NODES.Execution_Collision_SetExtraCollision` for detailed documentation. */
  Activate_Disable_Extra_Collision: "Execution.Collision.Set_Extra_Collision",
  /**  See `NODES.Execution_Collision_SetExtraClimb` for detailed documentation. */
  Activate_Disable_Extra_Collision_Climbability: "Execution.Collision.Set_Extra_Climb",
  /**  See `NODES.Arithmetic_Math_Distance` for detailed documentation. */
  Distance_Between_Two_Coordinate_Points: "Arithmetic.Math.Distance",
  /**  See `NODES.Execution_FollowMotion_SetTargetGUID` for detailed documentation. */
  Switch_Follow_Motion_Device_Target_by_GUID: "Execution.Follow_Motion.Set_Target_GUID",
  /**  See `NODES.Query_FollowMotion_GetTarget` for detailed documentation. */
  Get_Follow_Motion_Device_Target: "Query.Follow_Motion.Get_Target",
  /**  See `NODES.Query_CharacterRelated_GetAllPlayers` for detailed documentation. */
  Get_List_of_Player_Entities_on_the_Field: "Query.Character_Related.Get_All_Players",
  /**  See `NODES.Query_FactionRelated_GetFaction` for detailed documentation. */
  Query_Entity_Faction: "Query.Faction_Related.Get_Faction",
  /**  See `NODES.Execution_FactionRelated_SetFaction` for detailed documentation. */
  Modify_Entity_Faction: "Execution.Faction_Related.Set_Faction",
  /**  See `NODES.Trigger_FactionRelated_OnFactionChange` for detailed documentation. */
  When_Entity_Faction_Changes: "Trigger.Faction_Related.On_Faction_Change",
  /**  See `NODES.Execution_EntityRelated_CreatePrefab` for detailed documentation. */
  Create_Prefab: "Execution.Entity_Related.Create_Prefab",
  /**  See `NODES.Trigger_HitDetection_OnHitDetected` for detailed documentation. */
  When_On_Hit_Detection_Is_Triggered: "Trigger.Hit_Detection.On_Hit_Detected",
  /**  See `NODES.Execution_Projectile_Create` for detailed documentation. */
  Create_Projectile: "Execution.Projectile.Create",
  /**  See `NODES.Query_Math_RandomInt` for detailed documentation. */
  Get_Random_Integer: "Query.Math.Random_Int",
  /**  See `NODES.Query_CharacterRelated_GetPlayerCharacters` for detailed documentation. */
  Get_All_Character_Entities_of_Specified_Player: "Query.Character_Related.Get_Player_Characters",
  /**  See `NODES.Query_CharacterRelated_GetOwnerPlayer` for detailed documentation. */
  Get_Player_Entity_to_Which_the_Character_Belongs: "Query.Character_Related.Get_Owner_Player",
  /**  See `NODES.Query_EntityRelated_GetType` for detailed documentation. */
  Get_Entity_Type: "Query.Entity_Related.Get_Type",
  /**  See `NODES.Execution_Camera_SwitchTemplate` for detailed documentation. */
  Switch_Main_Camera_Template: "Execution.Camera.Switch_Template",
  /**  See `NODES.Hidden_Execution_ActivateEntityCamera` for detailed documentation. */
  Activate_Entity_Camera: "Hidden.Execution.Activate_Entity_Camera",
  /**  See `NODES.Hidden_Execution_DisableEntityCamera` for detailed documentation. */
  Disable_Entity_Camera: "Hidden.Execution.Disable_Entity_Camera",
  /**  See `NODES.Hidden_Execution_ActivateFocusCamera` for detailed documentation. */
  Activate_Focus_Camera: "Hidden.Execution.Activate_Focus_Camera",
  /**  See `NODES.Hidden_Execution_DisableFocusCamera` for detailed documentation. */
  Disable_Focus_Camera: "Hidden.Execution.Disable_Focus_Camera",
  /**  See `NODES.Hidden_Execution_PlayScreenShake` for detailed documentation. */
  Activate_Screen_Shake: "Hidden.Execution.Play_Screen_Shake",
  /**  See `NODES.Execution_MotionDevice_Activate` for detailed documentation. */
  Activate_Basic_Motion_Device: "Execution.Motion_Device.Activate",
  /**  See `NODES.Query_PresetPoint_GetTransform` for detailed documentation. */
  Query_Preset_Point_Position_Rotation: "Query.Preset_Point.Get_Transform",
  /**  See `NODES.Query_PresetPoint_GetByTag` for detailed documentation. */
  Get_Preset_Point_List_by_Unit_Tag: "Query.Preset_Point.Get_By_Tag",
  /**  See `NODES.Execution_CharacterRelated_ActivateRevivePoint` for detailed documentation. */
  Activate_Revive_Point: "Execution.Character_Related.Activate_Revive_Point",
  /**  See `NODES.Execution_CharacterRelated_DeactivateRevivePoint` for detailed documentation. */
  Deactivate_Revive_Point: "Execution.Character_Related.Deactivate_Revive_Point",
  /**  See `NODES.Execution_CharacterRelated_SetReviveAllowed` for detailed documentation. */
  Allow_Forbid_Player_to_Revive: "Execution.Character_Related.Set_Revive_Allowed",
  /**  See `NODES.Query_CharacterRelated_GetRevives` for detailed documentation. */
  Get_Player_Remaining_Revives: "Query.Character_Related.Get_Revives",
  /**  See `NODES.Execution_CharacterRelated_SetReviveCount` for detailed documentation. */
  Set_Player_Remaining_Revives: "Execution.Character_Related.Set_Revive_Count",
  /**  See `NODES.Query_CharacterRelated_GetReviveTime` for detailed documentation. */
  Get_Player_Revive_Time: "Query.Character_Related.Get_Revive_Time",
  /**  See `NODES.Execution_CharacterRelated_SetReviveTime` for detailed documentation. */
  Set_Player_Revive_Time: "Execution.Character_Related.Set_Revive_Time",
  /**  See `NODES.Execution_CharacterRelated_ReviveSingle` for detailed documentation. */
  Revive_Character: "Execution.Character_Related.Revive_Single",
  /**  See `NODES.Trigger_CharacterRelated_OnCharacterDown` for detailed documentation. */
  When_the_Character_Is_Down: "Trigger.Character_Related.On_Character_Down",
  /**  See `NODES.Trigger_CharacterRelated_OnCharacterRevive` for detailed documentation. */
  When_Character_Revives: "Trigger.Character_Related.On_Character_Revive",
  /**  See `NODES.Execution_CharacterRelated_DefeatAll` for detailed documentation. */
  Defeat_All_Player_s_Characters: "Execution.Character_Related.Defeat_All",
  /**  See `NODES.Execution_CharacterRelated_ReviveAll` for detailed documentation. */
  Revive_All_Player_s_Characters: "Execution.Character_Related.Revive_All",
  /**  See `NODES.Trigger_CharacterRelated_OnAllDown` for detailed documentation. */
  When_All_Player_s_Characters_Are_Down: "Trigger.Character_Related.On_All_Down",
  /**  See `NODES.Trigger_CharacterRelated_OnAbnormalRevive` for detailed documentation. */
  When_Player_Is_Abnormally_Downed_and_Revives: "Trigger.Character_Related.On_Abnormal_Revive",
  /**  See `NODES.Trigger_CharacterRelated_OnAllRevived` for detailed documentation. */
  When_All_Player_s_Characters_Are_Revived: "Trigger.Character_Related.On_All_Revived",
  /**  See `NODES.Query_CharacterRelated_IsAllDown` for detailed documentation. */
  Query_If_All_Player_Characters_Are_Down: "Query.Character_Related.Is_All_Down",
  /**  See `NODES.Execution_CharacterRelated_Teleport` for detailed documentation. */
  Teleport_Player: "Execution.Character_Related.Teleport",
  /**  See `NODES.Trigger_CharacterRelated_OnTeleportComplete` for detailed documentation. */
  When_Player_Teleport_Completes: "Trigger.Character_Related.On_Teleport_Complete",
  /**  See `NODES.Query_StageRelated_GetElapsedTime` for detailed documentation. */
  Query_Game_Time_Elapsed: "Query.Stage_Related.Get_Elapsed_Time",
  /**  See `NODES.Arithmetic_Math_Sin` for detailed documentation. */
  Sine_Function: "Arithmetic.Math.Sin",
  /**  See `NODES.Arithmetic_Math_Cos` for detailed documentation. */
  Cosine_Function: "Arithmetic.Math.Cos",
  /**  See `NODES.Arithmetic_Math_Tan` for detailed documentation. */
  Tangent_Function: "Arithmetic.Math.Tan",
  /**  See `NODES.Arithmetic_Math_Asin` for detailed documentation. */
  Arcsine_Function: "Arithmetic.Math.Asin",
  /**  See `NODES.Arithmetic_Math_Acos` for detailed documentation. */
  Arccosine_Function: "Arithmetic.Math.Acos",
  /**  See `NODES.Arithmetic_Math_Atan` for detailed documentation. */
  Arctangent_Function: "Arithmetic.Math.Atan",
  /**  See `NODES.Execution_UnitStatus_AddStatus` for detailed documentation. */
  Add_Unit_Status: "Execution.Unit_Status.Add_Status",
  /**  See `NODES.Trigger_UnitStatus_OnStatusEnd` for detailed documentation. */
  When_Unit_Status_Ends: "Trigger.Unit_Status.On_Status_End",
  /**  See `NODES.Trigger_UnitStatus_OnStatusChange` for detailed documentation. */
  When_Unit_Status_Changes: "Trigger.Unit_Status.On_Status_Change",
  /**  See `NODES.Execution_UnitStatus_RemoveStatus` for detailed documentation. */
  Remove_Unit_Status: "Execution.Unit_Status.Remove_Status",
  /**  See `NODES.Execution_CharacterDisruptor_ModifyDevice` for detailed documentation. */
  Modifying_Character_Disruptor_Device: "Execution.Character_Disruptor.Modify_Device",
  /**  See `NODES.Execution_Combat_Attack` for detailed documentation. */
  Initiate_Attack: "Execution.Combat.Attack",
  /**  See `NODES.Trigger_Combat_OnBeAttacked` for detailed documentation. */
  When_Attacked: "Trigger.Combat.On_Be_Attacked",
  /**  See `NODES.Trigger_Combat_OnHitTarget` for detailed documentation. */
  When_Attack_Hits: "Trigger.Combat.On_Hit_Target",
  /**  See `NODES.Execution_Tab_SetState` for detailed documentation. */
  Activate_Disable_Tab: "Execution.Tab.Set_State",
  /**  See `NODES.Trigger_Tab_OnTabSelect` for detailed documentation. */
  When_Tab_Is_Selected: "Trigger.Tab.On_Tab_Select",
  /**  See `NODES.Execution_EntityRelated_SetModelVisible` for detailed documentation. */
  Activate_Disable_Model_Display: "Execution.Entity_Related.Set_Model_Visible",
  /**  See `NODES.Execution_GlobalTimer_Pause` for detailed documentation. */
  Pause_Global_Timer: "Execution.Global_Timer.Pause",
  /**  See `NODES.Query_GlobalTimer_GetTime` for detailed documentation. */
  Get_Current_Global_Timer_Time: "Query.Global_Timer.Get_Time",
  /**  See `NODES.Execution_GlobalTimer_Start` for detailed documentation. */
  Start_Global_Timer: "Execution.Global_Timer.Start",
  /**  See `NODES.Execution_GlobalTimer_Resume` for detailed documentation. */
  Recover_Global_Timer: "Execution.Global_Timer.Resume",
  /**  See `NODES.Execution_GlobalTimer_Stop` for detailed documentation. */
  Stop_Global_Timer: "Execution.Global_Timer.Stop",
  /**  See `NODES.Execution_GlobalTimer_Modify` for detailed documentation. */
  Modify_Global_Timer: "Execution.Global_Timer.Modify",
  /**  See `NODES.Trigger_GlobalTimer_OnTimerTrigger` for detailed documentation. */
  When_Global_Timer_Is_Triggered: "Trigger.Global_Timer.On_Timer_Trigger",
  /**  See `NODES.Trigger_UIControlGroup_OnGroupTrigger` for detailed documentation. */
  When_UI_Control_Group_Is_Triggered: "Trigger.UI_Control_Group.On_Group_Trigger",
  /**  See `NODES.Query_UIControlGroup_GetCurrentLayout` for detailed documentation. */
  Get_Player_s_Current_UI_Layout: "Query.UI_Control_Group.Get_Current_Layout",
  /**  See `NODES.Query_EntityRelated_GetAllEntities` for detailed documentation. */
  Get_All_Entities_on_the_Field: "Query.Entity_Related.Get_All_Entities",
  /**  See `NODES.Query_EntityRelated_GetEntityByType` for detailed documentation. */
  Get_Specified_Type_of_Entity_on_the_Field: "Query.Entity_Related.Get_Entity_By_Type",
  /**  See `NODES.Query_EntityRelated_GetWithPrefab` for detailed documentation. */
  Get_Entities_With_Specified_Prefab_on_the_Field: "Query.Entity_Related.Get_With_Prefab",
  /**  See `NODES.Arithmetic_Math_RadToDeg` for detailed documentation. */
  Radians_to_Degrees: "Arithmetic.Math.Rad_To_Deg",
  /**  See `NODES.Arithmetic_Math_DegToRad` for detailed documentation. */
  Degrees_to_Radians: "Arithmetic.Math.Deg_To_Rad",
  /**  See `NODES.Execution_CustomVariable_SetGraphVariable` for detailed documentation. */
  Set_Node_Graph_Variable: "Execution.Custom_Variable.Set_Graph_Variable",
  /**  See `NODES.Query_CustomVariable_GetGraphVariable` for detailed documentation. */
  Get_Node_Graph_Variable: "Query.Custom_Variable.Get_Graph_Variable",
  /**  See `NODES.Trigger_CustomVariable_OnGraphVariableChange` for detailed documentation. */
  When_Node_Graph_Variable_Changes: "Trigger.Custom_Variable.On_Graph_Variable_Change",
  /**  See `NODES.Execution_FollowMotion_SetDeviceState` for detailed documentation. */
  Activate_Disable_Follow_Motion_Device: "Execution.Follow_Motion.Set_Device_State",
  /**  See `NODES.Hidden_Execution_SetDisruptorState` for detailed documentation. */
  Activate_Disable_Character_Disruptor_Device: "Hidden.Execution.Set_Disruptor_State",
  /**  See `NODES.Execution_CollisionTriggerSource_SetSourceState` for detailed documentation. */
  Activate_Disable_Collision_Trigger_Source: "Execution.Collision_Trigger_Source.Set_Source_State",
  /**  See `NODES.Execution_EntityRelated_RemoveEntity` for detailed documentation. */
  Remove_Entity: "Execution.Entity_Related.Remove_Entity",
  /**  See `NODES.Trigger_EntityRelated_OnDestroyed` for detailed documentation. */
  When_Entity_Is_Destroyed: "Trigger.Entity_Related.On_Destroyed",
  /**  See `NODES.Trigger_Creation_OnEnterCombat` for detailed documentation. */
  When_Creation_Enters_Combat: "Trigger.Creation.On_Enter_Combat",
  /**  See `NODES.Trigger_Creation_OnLeaveCombat` for detailed documentation. */
  When_Creation_Leaves_Combat: "Trigger.Creation.On_Leave_Combat",
  /**  See `NODES.Query_Creation_GetTarget` for detailed documentation. */
  Get_Creation_s_Current_Target: "Query.Creation.Get_Target",
  /**  See `NODES.Query_EntityRelated_GetByType` for detailed documentation. */
  Get_Entity_List_by_Specified_Type: "Query.Entity_Related.Get_By_Type",
  /**  See `NODES.Query_EntityRelated_GetByPrefab` for detailed documentation. */
  Get_Entity_List_by_Specified_Prefab_ID: "Query.Entity_Related.Get_By_Prefab",
  /**  See `NODES.Query_EntityRelated_GetByFaction` for detailed documentation. */
  Get_Entity_List_by_Specified_Faction: "Query.Entity_Related.Get_By_Faction",
  /**  See `NODES.Query_EntityRelated_GetByRange` for detailed documentation. */
  Get_Entity_List_by_Specified_Range: "Query.Entity_Related.Get_By_Range",
  /**  See `NODES.Query_Creation_GetAttribute` for detailed documentation. */
  Get_Creation_Attribute: "Query.Creation.Get_Attribute",
  /**  See `NODES.Execution_UIControlGroup_SwitchLayout` for detailed documentation. */
  Switch_Current_Interface_Layout: "Execution.UI_Control_Group.Switch_Layout",
  /**  See `NODES.Execution_UIControlGroup_ActivateGroup` for detailed documentation. */
  Activate_UI_Control_Group_in_Control_Group_Library: "Execution.UI_Control_Group.Activate_Group",
  /**  See `NODES.Execution_UIControlGroup_ModifyStatus` for detailed documentation. */
  Modify_UI_Control_Status_Within_the_Interface_Layout: "Execution.UI_Control_Group.Modify_Status",
  /**  See `NODES.Trigger_Class_OnClassChange` for detailed documentation. */
  When_Player_Class_Changes: "Trigger.Class.On_Class_Change",
  /**  See `NODES.Trigger_Class_OnLevelChange` for detailed documentation. */
  When_Player_Class_Level_Changes: "Trigger.Class.On_Level_Change",
  /**  See `NODES.Query_Class_GetClass` for detailed documentation. */
  Query_Player_Class: "Query.Class.Get_Class",
  /**  See `NODES.Query_Class_GetLevel` for detailed documentation. */
  Query_Player_Class_Level: "Query.Class.Get_Level",
  /**  See `NODES.Execution_Class_ChangeClass` for detailed documentation. */
  Change_Player_Class: "Execution.Class.Change_Class",
  /**  See `NODES.Execution_Class_AddExp` for detailed documentation. */
  Increase_Player_s_Current_Class_EXP: "Execution.Class.Add_Exp",
  /**  See `NODES.Execution_Class_SetLevel` for detailed documentation. */
  Change_Player_s_Current_Class_Level: "Execution.Class.Set_Level",
  /**  See `NODES.Trigger_Skill_OnSkillCall` for detailed documentation. */
  When_Skill_Node_Is_Called: "Trigger.Skill.On_Skill_Call",
  /**  See `NODES.Execution_Skill_ModifyResource` for detailed documentation. */
  Modify_Skill_Resource_Amount: "Execution.Skill.Modify_Resource",
  /**  See `NODES.Execution_Skill_SetResource` for detailed documentation. */
  Set_Skill_Resource_Amount: "Execution.Skill.Set_Resource",
  /**  See `NODES.Execution_Skill_AddSkill` for detailed documentation. */
  Add_Character_Skill: "Execution.Skill.Add_Skill",
  /**  See `NODES.Execution_Skill_RemoveByID` for detailed documentation. */
  Delete_Character_Skill_by_ID: "Execution.Skill.Remove_By_ID",
  /**  See `NODES.Execution_Skill_InitSkill` for detailed documentation. */
  Initialize_Character_Skill: "Execution.Skill.Init_Skill",
  /**  See `NODES.Query_Skill_GetSkillInfo` for detailed documentation. */
  Query_Character_Skill: "Query.Skill.Get_Skill_Info",
  /**  See `NODES.Execution_Skill_RemoveBySlot` for detailed documentation. */
  Delete_Character_Skill_by_Slot: "Execution.Skill.Remove_By_Slot",
  /**  See `NODES.Hidden_Trigger_OnNativeValueChange` for detailed documentation. */
  When_Native_Custom_Value_Changes: "Hidden.Trigger.On_Native_Value_Change",
  /**  See `NODES.Hidden_Execution_SetNativeValue` for detailed documentation. */
  Native_Setting_Custom_Value: "Hidden.Execution.Set_Native_Value",
  /**  See `NODES.Hidden_Query_GetNativeValue` for detailed documentation. */
  Native_Query_Custom_Value: "Hidden.Query.Get_Native_Value",
  /**  See `NODES.Execution_SpecialEffect_StopByAsset` for detailed documentation. */
  Clear_Special_Effects_Based_on_Special_Effect_Assets: "Execution.Special_Effect.Stop_By_Asset",
  /**  See `NODES.Arithmetic_Math_VectorRotate` for detailed documentation. */
  _3D_Vector_Rotation: "Arithmetic.Math.Vector_Rotate",
  /**  See `NODES.Arithmetic_General_EnumEqual` for detailed documentation. */
  Enumerations_Equal: "Arithmetic.General.Enum_Equal",
  /**  See `NODES.Arithmetic_Math_VectorDot` for detailed documentation. */
  _3D_Vector_Dot_Product: "Arithmetic.Math.Vector_Dot",
  /**  See `NODES.Arithmetic_Math_VectorCross` for detailed documentation. */
  _3D_Vector_Cross_Product: "Arithmetic.Math.Vector_Cross",
  /**  See `NODES.Query_EntityRelated_IsActive` for detailed documentation. */
  Query_If_Entity_Is_on_the_Field: "Query.Entity_Related.Is_Active",
  /**  See `NODES.Query_UnitStatus_HasStatus` for detailed documentation. */
  Query_If_Entity_Has_Unit_Status: "Query.Unit_Status.Has_Status",
  /**  See `NODES.Execution_ListOperation_ForEach` for detailed documentation. */
  List_Iteration_Loop: "Execution.List_Operation.For_Each",
  /**  See `NODES.Query_EntityRelated_GetForward` for detailed documentation. */
  Get_Entity_Forward_Vector: "Query.Entity_Related.Get_Forward",
  /**  See `NODES.Query_EntityRelated_GetRight` for detailed documentation. */
  Get_Entity_Right_Vector: "Query.Entity_Related.Get_Right",
  /**  See `NODES.Query_EntityRelated_GetUp` for detailed documentation. */
  Get_Entity_Upward_Vector: "Query.Entity_Related.Get_Up",
  /**  See `NODES.Arithmetic_Math_VectorToRotation` for detailed documentation. */
  Direction_Vector_to_Rotation: "Arithmetic.Math.Vector_To_Rotation",
  /**  See `NODES.Execution_MotionDevice_AddTargetRotation` for detailed documentation. */
  Add_Target_Oriented_Rotation_Based_Motion_Device: "Execution.Motion_Device.Add_Target_Rotation",
  /**  See `NODES.Execution_UIControlGroup_RemoveGroup` for detailed documentation. */
  Remove_Interface_Control_Group_From_Control_Group_Library: "Execution.UI_Control_Group.Remove_Group",
  /**  See `NODES.Query_EntityRelated_GetObjAttr` for detailed documentation. */
  Get_Object_Attribute: "Query.Entity_Related.Get_Obj_Attr",
  /**  See `NODES.Execution_Combat_RecoverHP` for detailed documentation. */
  Recover_HP: "Execution.Combat.Recover_HP",
  /**  See `NODES.Trigger_Combat_OnHPRecover` for detailed documentation. */
  When_HP_Is_Recovered: "Trigger.Combat.On_HP_Recover",
  /**  See `NODES.Trigger_Combat_OnHPRecoveryStart` for detailed documentation. */
  When_Initiating_HP_Recovery: "Trigger.Combat.On_HP_Recovery_Start",
  /**  See `NODES.Execution_UnitTag_AddTag` for detailed documentation. */
  Add_Unit_Tag_to_Entity: "Execution.Unit_Tag.Add_Tag",
  /**  See `NODES.Execution_UnitTag_RemoveTag` for detailed documentation. */
  Remove_Unit_Tag_from_Entity: "Execution.Unit_Tag.Remove_Tag",
  /**  See `NODES.Execution_UnitTag_ClearTags` for detailed documentation. */
  Clear_Unit_Tags_from_Entity: "Execution.Unit_Tag.Clear_Tags",
  /**  See `NODES.Query_UnitTag_GetTags` for detailed documentation. */
  Get_Entity_Unit_Tag_List: "Query.Unit_Tag.Get_Tags",
  /**  See `NODES.Query_UnitTag_GetByTag` for detailed documentation. */
  Get_Entity_List_by_Unit_Tag: "Query.Unit_Tag.Get_By_Tag",
  /**  See `NODES.Execution_SoundEffect_ClosePlayer` for detailed documentation. */
  Close_Specified_Sound_Effect_Player: "Execution.Sound_Effect.Close_Player",
  /**  See `NODES.Execution_SoundEffect_TogglePlayer` for detailed documentation. */
  Start_Pause_Specified_Sound_Effect_Player: "Execution.Sound_Effect.Toggle_Player",
  /**  See `NODES.Execution_SoundEffect_AdjustPlayer` for detailed documentation. */
  Adjust_Specified_Sound_Effect_Player: "Execution.Sound_Effect.Adjust_Player",
  /**  See `NODES.Execution_SoundEffect_AddPlayer` for detailed documentation. */
  Add_Sound_Effect_Player: "Execution.Sound_Effect.Add_Player",
  /**  See `NODES.Execution_SoundEffect_ToggleBGM` for detailed documentation. */
  Start_Pause_Player_Background_Music: "Execution.Sound_Effect.Toggle_BGM",
  /**  See `NODES.Execution_SoundEffect_SetBGMVolume` for detailed documentation. */
  Adjust_Player_Background_Music_Volume: "Execution.Sound_Effect.Set_BGM_Volume",
  /**  See `NODES.Execution_SoundEffect_SetBGM` for detailed documentation. */
  Modify_Player_Background_Music: "Execution.Sound_Effect.Set_BGM",
  /**  See `NODES.Execution_SoundEffect_Play2DOneShot` for detailed documentation. */
  Player_Plays_One_Shot_2D_Sound_Effect: "Execution.Sound_Effect.Play_2D_One_Shot",
  /**  See `NODES.Execution_CustomAggro_SetAggro` for detailed documentation. */
  Set_the_Aggro_Value_of_Specified_Entity: "Execution.Custom_Aggro.Set_Aggro",
  /**  See `NODES.Execution_CustomAggro_RemoveAggro` for detailed documentation. */
  Remove_Target_Entity_From_Aggro_List: "Execution.Custom_Aggro.Remove_Aggro",
  /**  See `NODES.Execution_CustomAggro_ClearAggro` for detailed documentation. */
  Clear_Specified_Target_s_Aggro_List: "Execution.Custom_Aggro.Clear_Aggro",
  /**  See `NODES.Execution_CustomAggro_Taunt` for detailed documentation. */
  Taunt_Target: "Execution.Custom_Aggro.Taunt",
  /**  See `NODES.Query_CustomAggro_GetAggroValue` for detailed documentation. */
  Query_the_Aggro_Value_of_the_Specified_Entity: "Query.Custom_Aggro.Get_Aggro_Value",
  /**  See `NODES.Query_CustomAggro_GetMultiplier` for detailed documentation. */
  Query_the_Aggro_Multiplier_of_the_Specified_Entity: "Query.Custom_Aggro.Get_Multiplier",
  /**  See `NODES.Query_CustomAggro_GetGlobalMultiplier` for detailed documentation. */
  Query_Global_Aggro_Transfer_Multiplier: "Query.Custom_Aggro.Get_Global_Multiplier",
  /**  See `NODES.Query_CustomAggro_GetAggroTarget` for detailed documentation. */
  Get_the_Aggro_Target_of_the_Specified_Entity: "Query.Custom_Aggro.Get_Aggro_Target",
  /**  See `NODES.Query_CustomAggro_GetAggroOwners` for detailed documentation. */
  Get_List_of_Owners_Who_Have_the_Target_in_Their_Aggro_List: "Query.Custom_Aggro.Get_Aggro_Owners",
  /**  See `NODES.Query_CustomAggro_GetTargetingOwners` for detailed documentation. */
  Get_List_of_Owners_That_Have_the_Target_As_Their_Aggro_Target: "Query.Custom_Aggro.Get_Targeting_Owners",
  /**  See `NODES.Query_CustomAggro_GetAggroList` for detailed documentation. */
  Get_the_Aggro_List_of_the_Specified_Entity: "Query.Custom_Aggro.Get_Aggro_List",
  /**  See `NODES.Query_CustomAggro_IsInCombat` for detailed documentation. */
  Query_if_Specified_Entity_Is_in_Combat: "Query.Custom_Aggro.Is_In_Combat",
  /**  See `NODES.Trigger_CustomAggro_OnTargetChange` for detailed documentation. */
  When_Aggro_Target_Changes: "Trigger.Custom_Aggro.On_Target_Change",
  /**  See `NODES.Trigger_CustomAggro_OnEnterCombat` for detailed documentation. */
  When_Self_Enters_Combat: "Trigger.Custom_Aggro.On_Enter_Combat",
  /**  See `NODES.Trigger_CustomAggro_OnLeaveCombat` for detailed documentation. */
  When_Self_Leaves_Combat: "Trigger.Custom_Aggro.On_Leave_Combat",
  /**  See `NODES.Query_FactionRelated_IsHostile` for detailed documentation. */
  Query_If_Faction_Is_Hostile: "Query.Faction_Related.Is_Hostile",
  /**  See `NODES.Hidden_Execution_AddNameplate` for detailed documentation. */
  Add_Entity_Active_Nameplate: "Hidden.Execution.Add_Nameplate",
  /**  See `NODES.Hidden_Execution_RemoveNameplate` for detailed documentation. */
  Delete_Entity_Active_Nameplate: "Hidden.Execution.Remove_Nameplate",
  /**  See `NODES.Execution_Nameplate_SetNameplate` for detailed documentation. */
  Set_Entity_Active_Nameplate: "Execution.Nameplate.Set_Nameplate",
  /**  See `NODES.Execution_CreationPatrol_SwitchTemplate` for detailed documentation. */
  Switch_Creation_Patrol_Template: "Execution.Creation_Patrol.Switch_Template",
  /**  See `NODES.Query_CreaturePatrol_GetPatrolTemplate` for detailed documentation. */
  Get_Current_Creation_s_Patrol_Template: "Query.Creature_Patrol.Get_Patrol_Template",
  /**  See `NODES.Trigger_CreationPatrol_OnReachWaypoint` for detailed documentation. */
  When_Creation_Reaches_Patrol_Waypoint: "Trigger.Creation_Patrol.On_Reach_Waypoint",
  /**  See `NODES.Query_GlobalPath_GetWaypoint` for detailed documentation. */
  Get_Specified_Waypoint_Info: "Query.Global_Path.Get_Waypoint",
  /**  See `NODES.Execution_TextBubble_SetBubble` for detailed documentation. */
  Switch_Active_Text_Bubble: "Execution.Text_Bubble.Set_Bubble",
  /**  See `NODES.Execution_DeckSelector_Open` for detailed documentation. */
  Invoke_Deck_Selector: "Execution.Deck_Selector.Open",
  /**  See `NODES.Trigger_DeckSelector_OnDeckSelected` for detailed documentation. */
  When_Deck_Selector_Is_Complete: "Trigger.Deck_Selector.On_Deck_Selected",
  /**  See `NODES.Execution_MinimapMarker_SetZoom` for detailed documentation. */
  Modify_Mini_Map_Zoom: "Execution.Minimap_Marker.Set_Zoom",
  /**  See `NODES.Execution_MinimapMarker_SetMarkerState` for detailed documentation. */
  Modify_Mini_Map_Marker_Activation_Status: "Execution.Minimap_Marker.Set_Marker_State",
  /**  See `NODES.Execution_MinimapMarker_SetVisibleList` for detailed documentation. */
  Modify_Player_List_for_Visible_Mini_Map_Markers: "Execution.Minimap_Marker.Set_Visible_List",
  /**  See `NODES.Execution_MinimapMarker_SetTrackList` for detailed documentation. */
  Modify_Player_List_for_Tracking_Mini_Map_Markers: "Execution.Minimap_Marker.Set_Track_List",
  /**  See `NODES.Query_MinimapMarker_GetMarkerInfo` for detailed documentation. */
  Query_Specified_Mini_Map_Marker_Information: "Query.Minimap_Marker.Get_Marker_Info",
  /**  See `NODES.Query_MinimapMarker_GetMarkerStatus` for detailed documentation. */
  Get_Entity_s_Mini_Map_Marker_Status: "Query.Minimap_Marker.Get_Marker_Status",
  /**  See `NODES.Execution_MinimapMarker_UpdateMarkers` for detailed documentation. */
  Modify_Player_Markers_on_the_Mini_Map: "Execution.Minimap_Marker.Update_Markers",
  /**  See `NODES.Execution_DeckSelector_Close` for detailed documentation. */
  Close_Deck_Selector: "Execution.Deck_Selector.Close",
  /**  See `NODES.Trigger_UnitStatus_OnElementReaction` for detailed documentation. */
  When_Elemental_Reaction_Event_Occurs: "Trigger.Unit_Status.On_Element_Reaction",
  /**  See `NODES.Trigger_UnitStatus_OnShieldHit` for detailed documentation. */
  When_Shield_Is_Attacked: "Trigger.Unit_Status.On_Shield_Hit",
  /**  See `NODES.Query_Achievement_IsCompleted` for detailed documentation. */
  Query_If_Achievement_Is_Completed: "Query.Achievement.Is_Completed",
  /**  See `NODES.Execution_Achievement_SetProgress` for detailed documentation. */
  Set_Achievement_Progress_Tally: "Execution.Achievement.Set_Progress",
  /**  See `NODES.Execution_Achievement_AddProgress` for detailed documentation. */
  Change_Achievement_Progress_Tally: "Execution.Achievement.Add_Progress",
  /**  See `NODES.Execution_StageSettlement_SetScoreboard` for detailed documentation. */
  Set_Player_Settlement_Scoreboard_Data_Display: "Execution.Stage_Settlement.Set_Scoreboard",
  /**  See `NODES.Execution_StageSettlement_SetPlayerRank` for detailed documentation. */
  Set_Player_Settlement_Ranking_Value: "Execution.Stage_Settlement.Set_Player_Rank",
  /**  See `NODES.Query_StageSettlement_GetPlayerRank` for detailed documentation. */
  Get_Player_Settlement_Ranking_Value: "Query.Stage_Settlement.Get_Player_Rank",
  /**  See `NODES.Execution_StageSettlement_SetPlayerResult` for detailed documentation. */
  Set_Player_Settlement_Success_Status: "Execution.Stage_Settlement.Set_Player_Result",
  /**  See `NODES.Query_StageSettlement_GetPlayerResult` for detailed documentation. */
  Get_Player_Settlement_Success_Status: "Query.Stage_Settlement.Get_Player_Result",
  /**  See `NODES.Execution_StageSettlement_SetFactionRank` for detailed documentation. */
  Set_Faction_Settlement_Ranking_Value: "Execution.Stage_Settlement.Set_Faction_Rank",
  /**  See `NODES.Query_StageSettlement_GetFactionRank` for detailed documentation. */
  Get_Faction_Settlement_Ranking_Value: "Query.Stage_Settlement.Get_Faction_Rank",
  /**  See `NODES.Execution_StageSettlement_SetFactionResult` for detailed documentation. */
  Set_Faction_Settlement_Success_Status: "Execution.Stage_Settlement.Set_Faction_Result",
  /**  See `NODES.Query_StageSettlement_GetFactionResult` for detailed documentation. */
  Get_Faction_Settlement_Success_Status: "Query.Stage_Settlement.Get_Faction_Result",
  /**  See `NODES.Query_RankTier_GetRankInfo` for detailed documentation. */
  Get_Player_Ranking_Info: "Query.Rank_Tier.Get_Rank_Info",
  /**  See `NODES.Execution_Rank_ModifyScore` for detailed documentation. */
  Set_Player_Rank_Score_Change: "Execution.Rank.Modify_Score",
  /**  See `NODES.Query_RankTier_GetScoreChange` for detailed documentation. */
  Get_Player_Rank_Score_Change: "Query.Rank_Tier.Get_Score_Change",
  /**  See `NODES.Execution_Rank_SetEscapeValid` for detailed documentation. */
  Set_Player_Escape_Validity: "Execution.Rank.Set_Escape_Valid",
  /**  See `NODES.Query_RankTier_GetEscapeStatus` for detailed documentation. */
  Get_Player_Escape_Validity: "Query.Rank_Tier.Get_Escape_Status",
  /**  See `NODES.Execution_Rank_SwitchScoreGroup` for detailed documentation. */
  Switch_the_scoring_group_that_affects_player_s_competitive_rank: "Execution.Rank.Switch_Score_Group",
  /**  See `NODES.Query_StageRelated_GetEnvTime` for detailed documentation. */
  Query_Current_Environment_Time: "Query.Stage_Related.Get_Env_Time",
  /**  See `NODES.Execution_StageRelated_SetTime` for detailed documentation. */
  Set_Current_Environment_Time: "Execution.Stage_Related.Set_Time",
  /**  See `NODES.Execution_StageRelated_SetTimeSpeed` for detailed documentation. */
  Set_Environment_Time_Passage_Speed: "Execution.Stage_Related.Set_Time_Speed",
  /**  See `NODES.Execution_LightComponent_ToggleLight` for detailed documentation. */
  Toggle_Entity_Light_Source: "Execution.Light_Component.Toggle_Light",
  /**  See `NODES.Execution_FollowMotion_SetTargetEntity` for detailed documentation. */
  Switch_Follow_Motion_Device_Target_by_Entity: "Execution.Follow_Motion.Set_Target_Entity",
  /**  See `NODES.Query_CollisionTrigger_GetOverlappingEntities` for detailed documentation. */
  Get_All_Entities_Within_the_Collision_Trigger: "Query.Collision_Trigger.Get_Overlapping_Entities",
  /**  See `NODES.Query_EntityRelated_GetAdvAttr` for detailed documentation. */
  Get_Entity_Advanced_Attribute: "Query.Entity_Related.Get_Adv_Attr",
  /**  See `NODES.Query_EntityRelated_GetElemAttr` for detailed documentation. */
  Get_Entity_Elemental_Attribute: "Query.Entity_Related.Get_Elem_Attr",
  /**  See `NODES.Execution_Equipment_AddAffix` for detailed documentation. */
  Add_Affix_to_Equipment: "Execution.Equipment.Add_Affix",
  /**  See `NODES.Execution_Equipment_RemoveAffix` for detailed documentation. */
  Remove_Equipment_Affix: "Execution.Equipment.Remove_Affix",
  /**  See `NODES.Execution_Equipment_ModifyAffix` for detailed documentation. */
  Modify_Equipment_Affix_Value: "Execution.Equipment.Modify_Affix",
  /**  See `NODES.Query_Equipment_GetAffixes` for detailed documentation. */
  Get_Equipment_Affix_List: "Query.Equipment.Get_Affixes",
  /**  See `NODES.Query_Equipment_GetAffixConfig` for detailed documentation. */
  Get_Equipment_Affix_Config_ID: "Query.Equipment.Get_Affix_Config",
  /**  See `NODES.Query_Equipment_GetAffixValue` for detailed documentation. */
  Get_Equipment_Affix_Value: "Query.Equipment.Get_Affix_Value",
  /**  See `NODES.Hidden_Execution_UpdateLeaderboard` for detailed documentation. */
  Update_Player_Leaderboard_Score: "Hidden.Execution.Update_Leaderboard",
  /**  See `NODES.Trigger_TextBubble_OnBubbleComplete` for detailed documentation. */
  When_Text_Bubble_Is_Completed: "Trigger.Text_Bubble.On_Bubble_Complete",
  /**  See `NODES.Trigger_Equipment_OnAffixChange` for detailed documentation. */
  When_Equipment_Affix_Value_Changes: "Trigger.Equipment.On_Affix_Change",
  /**  See `NODES.Trigger_Item_OnItemAdd` for detailed documentation. */
  When_Item_Is_Added_to_Inventory: "Trigger.Item.On_Item_Add",
  /**  See `NODES.Trigger_Item_OnItemLose` for detailed documentation. */
  When_Item_Is_Lost_From_Inventory: "Trigger.Item.On_Item_Lose",
  /**  See `NODES.Trigger_Item_OnItemQuantityChange` for detailed documentation. */
  When_the_Quantity_of_Inventory_Item_Changes: "Trigger.Item.On_Item_Quantity_Change",
  /**  See `NODES.Trigger_Item_OnCurrencyChange` for detailed documentation. */
  When_the_Quantity_of_Inventory_Currency_Changes: "Trigger.Item.On_Currency_Change",
  /**  See `NODES.Execution_Inventory_ExpandCapacity` for detailed documentation. */
  Increase_Maximum_Inventory_Capacity: "Execution.Inventory.Expand_Capacity",
  /**  See `NODES.Execution_Inventory_ModifyItem` for detailed documentation. */
  Modify_Inventory_Item_Quantity: "Execution.Inventory.Modify_Item",
  /**  See `NODES.Execution_Inventory_SetDropAmount` for detailed documentation. */
  Set_Inventory_Loot_Item_Currency_Quantity: "Execution.Inventory.Set_Drop_Amount",
  /**  See `NODES.Execution_Inventory_ModifyCurrency` for detailed documentation. */
  Modify_Inventory_Currency_Quantity: "Execution.Inventory.Modify_Currency",
  /**  See `NODES.Query_Item_GetCapacity` for detailed documentation. */
  Get_Inventory_Capacity: "Query.Item.Get_Capacity",
  /**  See `NODES.Query_Item_GetItemAmount` for detailed documentation. */
  Get_Inventory_Item_Quantity: "Query.Item.Get_Item_Amount",
  /**  See `NODES.Query_Item_GetCurrencyAmount` for detailed documentation. */
  Get_Inventory_Currency_Quantity: "Query.Item.Get_Currency_Amount",
  /**  See `NODES.Trigger_Equipment_OnInit` for detailed documentation. */
  When_Equipment_Is_Initialized: "Trigger.Equipment.On_Init",
  /**  See `NODES.Trigger_Equipment_OnEquip` for detailed documentation. */
  When_Equipment_Is_Equipped: "Trigger.Equipment.On_Equip",
  /**  See `NODES.Trigger_Equipment_OnUnequip` for detailed documentation. */
  When_Equipment_Is_Unequipped: "Trigger.Equipment.On_Unequip",
  /**  See `NODES.Execution_Combat_LossHP` for detailed documentation. */
  Loss_HP: "Execution.Combat.Loss_HP",
  /**  See `NODES.Execution_Combat_RecoverHPInstant` for detailed documentation. */
  Recover_HP_Directly: "Execution.Combat.Recover_HP_Instant",
  /**  See `NODES.Trigger_Shop_OnCustomItemSold` for detailed documentation. */
  When_Custom_Shop_Item_Is_Sold: "Trigger.Shop.On_Custom_Item_Sold",
  /**  See `NODES.Trigger_Shop_OnInvItemSold` for detailed documentation. */
  When_Selling_Inventory_Items_in_the_Shop: "Trigger.Shop.On_Inv_Item_Sold",
  /**  See `NODES.Execution_Shop_Open` for detailed documentation. */
  Open_Shop: "Execution.Shop.Open",
  /**  See `NODES.Execution_Shop_Close` for detailed documentation. */
  Close_Shop: "Execution.Shop.Close",
  /**  See `NODES.Execution_Shop_ModifyCustomSale` for detailed documentation. */
  Modify_Custom_Shop_Item_Sales_Info: "Execution.Shop.Modify_Custom_Sale",
  /**  See `NODES.Trigger_Shop_OnSellItem` for detailed documentation. */
  When_selling_items_to_the_shop: "Trigger.Shop.On_Sell_Item",
  /**  See `NODES.Execution_Shop_ModifyInventorySale` for detailed documentation. */
  Modify_Inventory_Shop_Item_Sales_Info: "Execution.Shop.Modify_Inventory_Sale",
  /**  See `NODES.Execution_Shop_ModifyCartItem` for detailed documentation. */
  Modify_Item_Purchase_Info_in_the_Purchase_List: "Execution.Shop.Modify_Cart_Item",
  /**  See `NODES.Execution_Shop_AddCustomSale` for detailed documentation. */
  Add_New_Item_to_Custom_Shop_Sales_List: "Execution.Shop.Add_Custom_Sale",
  /**  See `NODES.Execution_Shop_AddInventorySale` for detailed documentation. */
  Add_New_Item_to_Inventory_Shop_Sales_List: "Execution.Shop.Add_Inventory_Sale",
  /**  See `NODES.Execution_Shop_AddToCart` for detailed documentation. */
  Add_Items_to_the_Purchase_List: "Execution.Shop.Add_To_Cart",
  /**  See `NODES.Execution_Shop_RemoveCustomSale` for detailed documentation. */
  Remove_Item_From_Custom_Shop_Sales_List: "Execution.Shop.Remove_Custom_Sale",
  /**  See `NODES.Execution_Shop_RemoveInventorySale` for detailed documentation. */
  Remove_Item_From_Inventory_Shop_Sales_List: "Execution.Shop.Remove_Inventory_Sale",
  /**  See `NODES.Execution_Shop_RemoveFromCart` for detailed documentation. */
  Remove_item_from_purchase_list: "Execution.Shop.Remove_From_Cart",
  /**  See `NODES.Query_Shop_GetCustomSales` for detailed documentation. */
  Query_Custom_Shop_Item_Sales_List: "Query.Shop.Get_Custom_Sales",
  /**  See `NODES.Query_Shop_GetInvSales` for detailed documentation. */
  Query_Inventory_Shop_Item_Sales_List: "Query.Shop.Get_Inv_Sales",
  /**  See `NODES.Query_Shop_GetCartItems` for detailed documentation. */
  Query_Shop_Purchase_Item_List: "Query.Shop.Get_Cart_Items",
  /**  See `NODES.Query_Shop_GetCustomItemInfo` for detailed documentation. */
  Query_Custom_Shop_Item_Sales_Info: "Query.Shop.Get_Custom_Item_Info",
  /**  See `NODES.Query_Shop_GetInvItemInfo` for detailed documentation. */
  Query_Inventory_Shop_Item_Sales_Info: "Query.Shop.Get_Inv_Item_Info",
  /**  See `NODES.Query_Shop_GetPurchaseInfo` for detailed documentation. */
  Query_Shop_Item_Purchase_Info: "Query.Shop.Get_Purchase_Info",
  /**  See `NODES.Execution_Inventory_SetDropItems` for detailed documentation. */
  Set_Inventory_Item_Drop_Content: "Execution.Inventory.Set_Drop_Items",
  /**  See `NODES.Query_Item_GetBasicItems` for detailed documentation. */
  Get_all_basic_items_from_Inventory: "Query.Item.Get_Basic_Items",
  /**  See `NODES.Query_Item_GetCurrencyAll` for detailed documentation. */
  Get_All_Currency_From_Inventory: "Query.Item.Get_Currency_All",
  /**  See `NODES.Query_Item_GetEquipmentAll` for detailed documentation. */
  Get_all_equipment_from_Inventory: "Query.Item.Get_Equipment_All",
  /**  See `NODES.Execution_Inventory_TriggerDrop` for detailed documentation. */
  Trigger_Loot_Drop: "Execution.Inventory.Trigger_Drop",
  /**  See `NODES.Execution_Inventory_SetLootContent` for detailed documentation. */
  Set_Loot_Drop_Content: "Execution.Inventory.Set_Loot_Content",
  /**  See `NODES.Execution_Inventory_ModifyLootItem` for detailed documentation. */
  Modify_Loot_Item_Component_Quantity: "Execution.Inventory.Modify_Loot_Item",
  /**  See `NODES.Execution_Inventory_ModifyLootCurrency` for detailed documentation. */
  Modify_Loot_Component_Currency_Amount: "Execution.Inventory.Modify_Loot_Currency",
  /**  See `NODES.Query_Item_GetLootItemAmount` for detailed documentation. */
  Get_Loot_Component_Item_Quantity: "Query.Item.Get_Loot_Item_Amount",
  /**  See `NODES.Query_Item_GetLootCurrencyAmount` for detailed documentation. */
  Get_Loot_Component_Currency_Quantity: "Query.Item.Get_Loot_Currency_Amount",
  /**  See `NODES.Query_Item_GetLootItems` for detailed documentation. */
  Get_All_Items_from_Loot_Component: "Query.Item.Get_Loot_Items",
  /**  See `NODES.Query_Item_GetLootCurrency` for detailed documentation. */
  Get_All_Currency_from_Loot_Component: "Query.Item.Get_Loot_Currency",
  /**  See `NODES.Query_Item_GetLootEquipment` for detailed documentation. */
  Get_All_Equipment_from_Loot_Component: "Query.Item.Get_Loot_Equipment",
  /**  See `NODES.Trigger_Item_OnItemUse` for detailed documentation. */
  When_Items_in_the_Inventory_Are_Used: "Trigger.Item.On_Item_Use",
  /**  See `NODES.Query_Equipment_GetTags` for detailed documentation. */
  Query_Equipment_Tag_List: "Query.Equipment.Get_Tags",
  /**  See `NODES.Execution_ScanTag_SetRules` for detailed documentation. */
  Set_Scan_Tag_Rules: "Execution.Scan_Tag.Set_Rules",
  /**  See `NODES.Execution_ScanTag_SetActiveTag` for detailed documentation. */
  Set_Scan_Component_s_Active_Scan_Tag_ID: "Execution.Scan_Tag.Set_Active_Tag",
  /**  See `NODES.Query_ScanTag_GetActiveTag` for detailed documentation. */
  Get_the_Currently_Active_Scan_Tag_Config_ID: "Query.Scan_Tag.Get_Active_Tag",
  /**  See `NODES.Query_EntityRelated_GetCharacterAttr` for detailed documentation. */
  Get_Character_Attribute: "Query.Entity_Related.Get_Character_Attr",
  /**  See `NODES.Execution_Skill_SetCD` for detailed documentation. */
  Set_Character_Skill_CD: "Execution.Skill.Set_CD",
  /**  See `NODES.Execution_Skill_ModifyCD` for detailed documentation. */
  Modify_Character_Skill_CD: "Execution.Skill.Modify_CD",
  /**  See `NODES.Execution_Skill_ModifyCDRatio` for detailed documentation. */
  Modify_Skill_CD_Percentage_Based_on_Max_CD: "Execution.Skill.Modify_CD_Ratio",
  /**  See `NODES.Execution_Equipment_AddAffixByID` for detailed documentation. */
  Add_Affix_to_Equipment_at_Specified_ID: "Execution.Equipment.Add_Affix_By_ID",
  /**  See `NODES.Execution_DeckSelector_GetRandomList` for detailed documentation. */
  Random_Deck_Selector_Selection_List: "Execution.Deck_Selector.Get_Random_List",
  /**  See `NODES.Query_EntityRelated_GetOwner` for detailed documentation. */
  Get_Owner_Entity: "Query.Entity_Related.Get_Owner",
  /**  See `NODES.Query_EntityRelated_GetOwnedEntities` for detailed documentation. */
  Get_List_of_Entities_Owned_by_the_Entity: "Query.Entity_Related.Get_Owned_Entities",
  /**  See `NODES.Query_UnitStatus_GetStatusStacks` for detailed documentation. */
  Query_Unit_Status_Stacks_by_Slot_ID: "Query.Unit_Status.Get_Status_Stacks",
  /**  See `NODES.Query_UnitStatus_GetStatusApplier` for detailed documentation. */
  Query_Unit_Status_Applier_by_Slot_ID: "Query.Unit_Status.Get_Status_Applier",
  /**  See `NODES.Query_UnitStatus_GetStatusSlots` for detailed documentation. */
  List_of_Slot_IDs_Querying_Unit_Status: "Query.Unit_Status.Get_Status_Slots",
  /**  See `NODES.Query_Equipment_GetConfigID` for detailed documentation. */
  Query_Equipment_Config_ID_by_Equipment_ID: "Query.Equipment.Get_Config_ID",
  /**  See `NODES.Query_CharacterRelated_GetGUIDByID` for detailed documentation. */
  Get_Player_GUID_by_Player_ID: "Query.Character_Related.Get_GUID_By_ID",
  /**  See `NODES.Query_CharacterRelated_GetIDByGUID` for detailed documentation. */
  Get_Player_ID_by_Player_GUID: "Query.Character_Related.Get_ID_By_GUID",
  /**  See `NODES.Arithmetic_Math_TimestampToTime` for detailed documentation. */
  Calculate_formatted_time_from_timestamp: "Arithmetic.Math.Timestamp_To_Time",
  /**  See `NODES.Arithmetic_Math_TimeToTimestamp` for detailed documentation. */
  Calculate_Timestamp_From_Formatted_Time: "Arithmetic.Math.Time_To_Timestamp",
  /**  See `NODES.Arithmetic_Math_TimestampToWeekday` for detailed documentation. */
  Calculate_day_of_the_week_from_timestamp: "Arithmetic.Math.Timestamp_To_Weekday",
  /**  See `NODES.Query_Math_GetTimestamp` for detailed documentation. */
  Query_Timestamp_UTC_0: "Query.Math.Get_Timestamp",
  /**  See `NODES.Query_Math_GetTimezone` for detailed documentation. */
  Query_Server_Time_Zone: "Query.Math.Get_Timezone",
  /**  See `NODES.Execution_EntityRelated_CreatePrefabGroup` for detailed documentation. */
  Create_Prefab_Group: "Execution.Entity_Related.Create_Prefab_Group",
  /**  See `NODES.Query_Creation_GetAggroList` for detailed documentation. */
  Get_Aggro_List_of_Creation_in_Default_Mode: "Query.Creation.Get_Aggro_List",
  /**  See `NODES.Execution_Leaderboard_SetScoreInt` for detailed documentation. */
  Set_Player_Leaderboard_Score_as_an_Integer: "Execution.Leaderboard.Set_Score_Int",
  /**  See `NODES.Execution_Leaderboard_SetScoreFloat` for detailed documentation. */
  Set_Player_Leaderboard_Score_as_a_Float: "Execution.Leaderboard.Set_Score_Float",
  /**  See `NODES.Execution_CharacterRelated_ModifyEnvironment` for detailed documentation. */
  Modify_environment_settings: "Execution.Character_Related.Modify_Environment",
  /**  See `NODES.Trigger_Class_OnClassRemove` for detailed documentation. */
  When_Player_Class_Is_Removed: "Trigger.Class.On_Class_Remove",
  /**  See `NODES.Trigger_Combat_OnInterruptible` for detailed documentation. */
  When_Entering_an_Interruptible_State: "Trigger.Combat.On_Interruptible",
  /**  See `NODES.Query_General_GetGameInfo` for detailed documentation. */
  Query_Game_Mode_and_Player_Number: "Query.General.Get_Game_Info",
  /**  See `NODES.Query_CharacterRelated_GetNickname` for detailed documentation. */
  Get_Player_Nickname: "Query.Character_Related.Get_Nickname",
  /**  See `NODES.Query_CharacterRelated_GetInputType` for detailed documentation. */
  Get_Player_Client_Input_Device_Type: "Query.Character_Related.Get_Input_Type",
  /**  See `NODES.Execution_ChatChannel_SetSwitch` for detailed documentation. */
  Set_Chat_Channel_Switch: "Execution.Chat_Channel.Set_Switch",
  /**  See `NODES.Execution_ChatChannel_ModifyPermission` for detailed documentation. */
  Modify_Player_Channel_Permission: "Execution.Chat_Channel.Modify_Permission",
  /**  See `NODES.Execution_ChatChannel_SetCurrentChannel` for detailed documentation. */
  Set_Player_s_Current_Channel: "Execution.Chat_Channel.Set_Current_Channel",
  /**  See `NODES.Execution_WonderlandBox_ConsumeBox` for detailed documentation. */
  Consume_Gift_Box: "Execution.Wonderland_Box.Consume_Box",
  /**  See `NODES.Query_WonderlandBoxRelated_GetBoxQuantity` for detailed documentation. */
  Query_Corresponding_Gift_Box_Quantity: "Query.Wonderland_Box_Related.Get_Box_Quantity",
  /**  See `NODES.Query_WonderlandBoxRelated_GetBoxConsumption` for detailed documentation. */
  Query_Corresponding_Gift_Box_Consumption: "Query.Wonderland_Box_Related.Get_Box_Consumption",
  /**  See `NODES.Execution_MotionDevice_ActivateFixedPoint` for detailed documentation. */
  Activate_Fixed_Point_Motion_Device: "Execution.Motion_Device.Activate_Fixed_Point",
  /**  See `NODES.Arithmetic_Math_LeftShift` for detailed documentation. */
  Left_Shift_Operation: "Arithmetic.Math.Left_Shift",
  /**  See `NODES.Arithmetic_Math_RightShift` for detailed documentation. */
  Right_Shift_Operation: "Arithmetic.Math.Right_Shift",
  /**  See `NODES.Arithmetic_Math_BitwiseAnd` for detailed documentation. */
  Bitwise_AND: "Arithmetic.Math.Bitwise_And",
  /**  See `NODES.Arithmetic_Math_BitwiseOr` for detailed documentation. */
  Bitwise_OR: "Arithmetic.Math.Bitwise_Or",
  /**  See `NODES.Arithmetic_Math_BitwiseXor` for detailed documentation. */
  XOR_Exclusive_OR: "Arithmetic.Math.Bitwise_Xor",
  /**  See `NODES.Arithmetic_Math_BitwiseNot` for detailed documentation. */
  Bitwise_Complement: "Arithmetic.Math.Bitwise_Not",
  /**  See `NODES.Arithmetic_Math_WriteBit` for detailed documentation. */
  Write_by_bit: "Arithmetic.Math.Write_Bit",
  /**  See `NODES.Arithmetic_Math_ReadBit` for detailed documentation. */
  Read_by_bit: "Arithmetic.Math.Read_Bit",
  /**  See `NODES.Trigger_EntityRelated_OnSpeedCondition` for detailed documentation. */
  When_Character_Movement_SPD_Meets_Condition: "Trigger.Entity_Related.On_Speed_Condition",
  /**  See `NODES.Query_EntityRelated_GetMoveSpeed` for detailed documentation. */
  Query_Character_s_Current_Movement_SPD: "Query.Entity_Related.Get_Move_Speed",
  /**  See `NODES.Execution_Dictionary_SetValue` for detailed documentation. */
  Set_or_Add_Key_Value_Pairs_to_Dictionary: "Execution.Dictionary.Set_Value",
  /**  See `NODES.Arithmetic_Dictionary_CreateDictionary` for detailed documentation. */
  Create_Dictionary: "Arithmetic.Dictionary.Create_Dictionary",
  /**  See `NODES.Query_Dictionary_GetValue` for detailed documentation. */
  Query_Dictionary_Value_by_Key: "Query.Dictionary.Get_Value",
  /**  See `NODES.Execution_Dictionary_RemoveByKey` for detailed documentation. */
  Remove_Key_Value_Pairs_from_Dictionary_by_Key: "Execution.Dictionary.Remove_By_Key",
  /**  See `NODES.Query_Dictionary_HasKey` for detailed documentation. */
  Query_If_Dictionary_Contains_Specific_Key: "Query.Dictionary.Has_Key",
  /**  See `NODES.Query_Dictionary_HasValue` for detailed documentation. */
  Query_If_Dictionary_Contains_Specific_Value: "Query.Dictionary.Has_Value",
  /**  See `NODES.Query_Dictionary_GetKeys` for detailed documentation. */
  Get_List_of_Keys_from_Dictionary: "Query.Dictionary.Get_Keys",
  /**  See `NODES.Query_Dictionary_GetValues` for detailed documentation. */
  Get_List_of_Values_from_Dictionary: "Query.Dictionary.Get_Values",
  /**  See `NODES.Query_Dictionary_GetLength` for detailed documentation. */
  Query_Dictionary_s_Length: "Query.Dictionary.Get_Length",
  /**  See `NODES.Execution_Dictionary_Clear` for detailed documentation. */
  Clear_Dictionary: "Execution.Dictionary.Clear",
  /**  See `NODES.Arithmetic_Dictionary_AssembleDictionary` for detailed documentation. */
  Assembly_Dictionary: "Arithmetic.Dictionary.Assemble_Dictionary",
  /**  See `NODES.Execution_Dictionary_SortByKey` for detailed documentation. */
  Sort_Dictionary_by_Key: "Execution.Dictionary.Sort_By_Key",
  /**  See `NODES.Execution_Dictionary_SortByValue` for detailed documentation. */
  Sort_Dictionary_by_Value: "Execution.Dictionary.Sort_By_Value",
  /**  See `NODES.Query_CustomVariable_GetSnapshot` for detailed documentation. */
  Query_Custom_Variable_Snapshot: "Query.Custom_Variable.Get_Snapshot",
  /**  See `NODES.Hidden_Trigger_OnGMCall` for detailed documentation. */
  When_Calling_GM_This_Node_is_Hidden_Externally: "Hidden.Trigger.On_GM_Call",
  /**  See `NODES.Others_PortClient_GraphEndBool` for detailed documentation. */
  Node_Graph_End_Boolean_Client: "Others.Port_Client.Graph_End_Bool",
  /**  See `NODES.Arithmetic_MathClient_And` for detailed documentation. */
  Logical_AND_Operation_Client: "Arithmetic.Math_Client.And",
  /**  See `NODES.Arithmetic_MathClient_Or` for detailed documentation. */
  Logical_OR_Operation_Client: "Arithmetic.Math_Client.Or",
  /**  See `NODES.Arithmetic_MathClient_Not` for detailed documentation. */
  Logical_NOT_Operation_Client: "Arithmetic.Math_Client.Not",
  /**  See `NODES.Arithmetic_MathClient_Xor` for detailed documentation. */
  Logical_XOR_Operation_Client: "Arithmetic.Math_Client.Xor",
  /**  See `NODES.Arithmetic_GeneralClient_EnumMatch` for detailed documentation. */
  Enumeration_Match_Client: "Arithmetic.General_Client.Enum_Match",
  /**  See `NODES.Arithmetic_GeneralClient_Equal` for detailed documentation. */
  Equal_Client: "Arithmetic.General_Client.Equal",
  /**  See `NODES.Arithmetic_MathClient_GreaterThan` for detailed documentation. */
  Greater_Than_Client: "Arithmetic.Math_Client.Greater_Than",
  /**  See `NODES.Arithmetic_MathClient_LessThan` for detailed documentation. */
  Less_Than_Client: "Arithmetic.Math_Client.Less_Than",
  /**  See `NODES.Arithmetic_MathClient_LessEqual` for detailed documentation. */
  Less_Than_or_Equal_To_Client: "Arithmetic.Math_Client.Less_Equal",
  /**  See `NODES.Arithmetic_MathClient_GreaterEqual` for detailed documentation. */
  Greater_Than_or_Equal_To_Client: "Arithmetic.Math_Client.Greater_Equal",
  /**  See `NODES.Arithmetic_MathClient_Add` for detailed documentation. */
  Addition_Client: "Arithmetic.Math_Client.Add",
  /**  See `NODES.Arithmetic_MathClient_Subtract` for detailed documentation. */
  Subtraction_Client: "Arithmetic.Math_Client.Subtract",
  /**  See `NODES.Arithmetic_MathClient_Multiply` for detailed documentation. */
  Multiplication_Client: "Arithmetic.Math_Client.Multiply",
  /**  See `NODES.Arithmetic_MathClient_Divide` for detailed documentation. */
  Division_Client: "Arithmetic.Math_Client.Divide",
  /**  See `NODES.Arithmetic_MathClient_Abs` for detailed documentation. */
  Absolute_Value_Operation_Client: "Arithmetic.Math_Client.Abs",
  /**  See `NODES.Query_CustomVariableClient_GetVariable` for detailed documentation. */
  Get_Custom_Variable_Client: "Query.Custom_Variable_Client.Get_Variable",
  /**  See `NODES.Query_ListRelatedClient_GetAtIndex` for detailed documentation. */
  Get_Corresponding_Value_From_List_Client: "Query.List_Related_Client.Get_At_Index",
  /**  See `NODES.Query_ListRelatedClient_GetLength` for detailed documentation. */
  Get_List_Length_Client: "Query.List_Related_Client.Get_Length",
  /**  See `NODES.Query_ListRelatedClient_Contains` for detailed documentation. */
  List_Includes_This_Value_Client: "Query.List_Related_Client.Contains",
  /**  See `NODES.Query_ListRelatedClient_GetMax` for detailed documentation. */
  Get_Maximum_Value_From_List_Client: "Query.List_Related_Client.Get_Max",
  /**  See `NODES.Query_ListRelatedClient_GetMin` for detailed documentation. */
  Get_Minimum_Value_From_List_Client: "Query.List_Related_Client.Get_Min",
  /**  See `NODES.Arithmetic_GeneralClient_ConvertType` for detailed documentation. */
  Data_Type_Conversion_Client: "Arithmetic.General_Client.Convert_Type",
  /**  See `NODES.Query_EntityRelatedClient_GetByGUID` for detailed documentation. */
  Query_Entity_by_GUID_Client: "Query.Entity_Related_Client.Get_By_GUID",
  /**  See `NODES.Query_CharacterRelatedClient_GetPlayerCharacter` for detailed documentation. */
  Get_Character_Entity_of_Specified_Player_Client: "Query.Character_Related_Client.Get_Player_Character",
  /**  See `NODES.Query_CharacterRelatedClient_GetOwnerPlayer` for detailed documentation. */
  Get_Player_Entity_to_Which_the_Character_Belongs_Client: "Query.Character_Related_Client.Get_Owner_Player",
  /**  See `NODES.Query_CharacterRelatedClient_GetAllPlayers` for detailed documentation. */
  Get_List_of_Player_Entities_on_the_Field_Client: "Query.Character_Related_Client.Get_All_Players",
  /**  See `NODES.Query_CharacterRelatedClient_GetGUID` for detailed documentation. */
  Query_GUID_by_Entity_Client: "Query.Character_Related_Client.Get_GUID",
  /**  See `NODES.Query_PresetStatusClient_GetStatus` for detailed documentation. */
  Get_Preset_Status_Client: "Query.Preset_Status_Client.Get_Status",
  /**  See `NODES.Query_FactionRelatedClient_GetFaction` for detailed documentation. */
  Query_Entity_Faction_Client: "Query.Faction_Related_Client.Get_Faction",
  /**  See `NODES.Query_EntityRelatedClient_GetLocation` for detailed documentation. */
  Get_Entity_Location_Client: "Query.Entity_Related_Client.Get_Location",
  /**  See `NODES.Query_EntityRelatedClient_GetRotation` for detailed documentation. */
  Get_Entity_Rotation_Client: "Query.Entity_Related_Client.Get_Rotation",
  /**  See `NODES.Arithmetic_MathClient_Random` for detailed documentation. */
  Get_Random_Number_Client: "Arithmetic.Math_Client.Random",
  /**  See `NODES.Query_EntityRelatedClient_GetSelf` for detailed documentation. */
  Get_Self_Entity_Client: "Query.Entity_Related_Client.Get_Self",
  /**  See `NODES.Query_EntityRelatedClient_GetTarget` for detailed documentation. */
  Get_Target_Entity_Client: "Query.Entity_Related_Client.Get_Target",
  /**  See `NODES.Query_EntityRelatedClient_GetAttackTarget` for detailed documentation. */
  Get_Unit_Attack_Target_Client: "Query.Entity_Related_Client.Get_Attack_Target",
  /**  See `NODES.Hidden_QueryClient_GetCameraTemplate` for detailed documentation. */
  Get_Current_Camera_Template_Client: "Hidden.Query_Client.Get_Camera_Template",
  /**  See `NODES.Query_CharacterRelatedClient_IsInCombat` for detailed documentation. */
  Query_If_Self_Is_in_Combat_Client: "Query.Character_Related_Client.Is_In_Combat",
  /**  See `NODES.Execution_CharacterSkillClient_PlayTimedFX` for detailed documentation. */
  Play_Timed_Effects_Client: "Execution.Character_Skill_Client.Play_Timed_FX",
  /**  See `NODES.Execution_CharacterSkillClient_NotifyServer` for detailed documentation. */
  Notify_Server_Node_Graph_Client: "Execution.Character_Skill_Client.Notify_Server",
  /**  See `NODES.Execution_CharacterSkillClient_TurnPlayer` for detailed documentation. */
  Player_Turning_Client: "Execution.Character_Skill_Client.Turn_Player",
  /**  See `NODES.Execution_CharacterSkillClient_SetTarget` for detailed documentation. */
  Set_Own_Attack_Target_Client: "Execution.Character_Skill_Client.Set_Target",
  /**  See `NODES.Others_PortClient_GraphStart` for detailed documentation. */
  Node_Graph_Begins_Client: "Others.Port_Client.Graph_Start",
  /**  See `NODES.Query_EntityRelatedClient_FilterSphere` for detailed documentation. */
  Filter_Entity_List_Within_Spherical_Range_Client: "Query.Entity_Related_Client.Filter_Sphere",
  /**  See `NODES.Query_EntityRelatedClient_FilterSquare` for detailed documentation. */
  Filter_Entity_List_Within_Square_Range_Client: "Query.Entity_Related_Client.Filter_Square",
  /**  See `NODES.Query_EntityRelatedClient_GetType` for detailed documentation. */
  Get_Entity_s_Type_Client: "Query.Entity_Related_Client.Get_Type",
  /**  See `NODES.Hidden_QueryClient_GetCameraRotation` for detailed documentation. */
  Get_Camera_Orientation_Client: "Hidden.Query_Client.Get_Camera_Rotation",
  /**  See `NODES.Query_EntityRelatedClient_GetSocketLoc` for detailed documentation. */
  Get_Target_Attachment_Point_Location_Client: "Query.Entity_Related_Client.Get_Socket_Loc",
  /**  See `NODES.Query_EntityRelatedClient_GetSocketRot` for detailed documentation. */
  Get_Target_Attachment_Point_Rotation_Client: "Query.Entity_Related_Client.Get_Socket_Rot",
  /**  See `NODES.Arithmetic_ListClient_AssembleList` for detailed documentation. */
  Assembly_List_Client: "Arithmetic.List_Client.Assemble_List",
  /**  See `NODES.Query_ListRelatedClient_GetEntityTypes` for detailed documentation. */
  Get_Entity_Type_List_Client: "Query.List_Related_Client.Get_Entity_Types",
  /**  See `NODES.Execution_CharacterSkillClient_TriggerHitboxLoc` for detailed documentation. */
  Trigger_Hitbox_at_Specific_Location_Client: "Execution.Character_Skill_Client.Trigger_Hitbox_Loc",
  /**  See `NODES.Execution_CharacterSkillClient_LaunchProjectile` for detailed documentation. */
  Fixed_Point_Projectile_Launch_Client: "Execution.Character_Skill_Client.Launch_Projectile",
  /**  See `NODES.Execution_CharacterSkillClient_MoveToPoint` for detailed documentation. */
  Fixed_Point_Displacement_Client: "Execution.Character_Skill_Client.Move_To_Point",
  /**  See `NODES.Execution_CharacterSkillClient_ForEachEntity` for detailed documentation. */
  Traverse_Entity_List_Client: "Execution.Character_Skill_Client.For_Each_Entity",
  /**  See `NODES.Control_GeneralClient_Branch` for detailed documentation. */
  Double_Branch_Client: "Control.General_Client.Branch",
  /**  See `NODES.Execution_CharacterSkillClient_AddStatus` for detailed documentation. */
  Add_Unit_Status_Client: "Execution.Character_Skill_Client.Add_Status",
  /**  See `NODES.Execution_CharacterSkillClient_RemoveStatus` for detailed documentation. */
  Remove_Unit_Status_Client: "Execution.Character_Skill_Client.Remove_Status",
  /**  See `NODES.Execution_CharacterSkillClient_TriggerHitboxSocket` for detailed documentation. */
  Trigger_Hitbox_at_Specified_Attachment_Point_Client: "Execution.Character_Skill_Client.Trigger_Hitbox_Socket",
  /**  See `NODES.Execution_CharacterSkillClient_RemoveDevice` for detailed documentation. */
  Remove_Specified_Character_Disruptor_Device_Client: "Execution.Character_Skill_Client.Remove_Device",
  /**  See `NODES.Execution_CharacterSkillClient_ModifyWeight` for detailed documentation. */
  Modify_Attack_Weight_Client: "Execution.Character_Skill_Client.Modify_Weight",
  /**  See `NODES.Execution_CharacterSkillClient_GetCameraData` for detailed documentation. */
  Camera_Orientation_Detection_Data_Client: "Execution.Character_Skill_Client.Get_Camera_Data",
  /**  See `NODES.Arithmetic_MathClient_VectorDot` for detailed documentation. */
  _3D_Vector_Dot_Product_Client: "Arithmetic.Math_Client.Vector_Dot",
  /**  See `NODES.Arithmetic_MathClient_VectorCross` for detailed documentation. */
  _3D_Vector_Cross_Product_Client: "Arithmetic.Math_Client.Vector_Cross",
  /**  See `NODES.Arithmetic_MathClient_SplitVector` for detailed documentation. */
  Split_3D_Vector_Client: "Arithmetic.Math_Client.Split_Vector",
  /**  See `NODES.Arithmetic_MathClient_VectorScale` for detailed documentation. */
  _3D_Vector_Zoom_Client: "Arithmetic.Math_Client.Vector_Scale",
  /**  See `NODES.Arithmetic_MathClient_VectorAngle` for detailed documentation. */
  _3D_Vector_Angle_Client: "Arithmetic.Math_Client.Vector_Angle",
  /**  See `NODES.Arithmetic_MathClient_VectorRotate` for detailed documentation. */
  _3D_Vector_Rotation_Client: "Arithmetic.Math_Client.Vector_Rotate",
  /**  See `NODES.Arithmetic_MathClient_VectorLength` for detailed documentation. */
  _3D_Vector_Modulo_Operation_Client: "Arithmetic.Math_Client.Vector_Length",
  /**  See `NODES.Arithmetic_MathClient_CreateVector` for detailed documentation. */
  Create_3D_Vector_Client: "Arithmetic.Math_Client.Create_Vector",
  /**  See `NODES.Arithmetic_MathClient_VectorAdd` for detailed documentation. */
  _3D_Vector_Addition_Client: "Arithmetic.Math_Client.Vector_Add",
  /**  See `NODES.Arithmetic_MathClient_VectorSubtract` for detailed documentation. */
  _3D_Vector_Subtraction_Client: "Arithmetic.Math_Client.Vector_Subtract",
  /**  See `NODES.Arithmetic_MathClient_VectorToRotation` for detailed documentation. */
  Direction_Vector_to_Rotation_Client: "Arithmetic.Math_Client.Vector_To_Rotation",
  /**  See `NODES.Arithmetic_MathClient_OrientationToRotation` for detailed documentation. */
  Orientation_to_Rotation_Client: "Arithmetic.Math_Client.Orientation_To_Rotation",
  /**  See `NODES.Execution_CharacterSkillClient_RecoverHP` for detailed documentation. */
  Recover_HP_Client: "Execution.Character_Skill_Client.Recover_HP",
  /**  See `NODES.Query_CharacterRelatedClient_GetCurrentCharacter` for detailed documentation. */
  Get_Current_Character_Client: "Query.Character_Related_Client.Get_Current_Character",
  /**  See `NODES.Query_UnitTagClient_GetTags` for detailed documentation. */
  Get_Entity_s_Unit_Tag_List_Client: "Query.Unit_Tag_Client.Get_Tags",
  /**  See `NODES.Query_UnitTagClient_GetByTag` for detailed documentation. */
  Get_Entity_List_by_Unit_Tag_Client: "Query.Unit_Tag_Client.Get_By_Tag",
  /**  See `NODES.Execution_GeneralClient_ForLoop` for detailed documentation. */
  Finite_Loop_Client: "Execution.General_Client.For_Loop",
  /**  See `NODES.Execution_GeneralClient_Break` for detailed documentation. */
  Break_Loop_Client: "Execution.General_Client.Break",
  /**  See `NODES.Execution_GeneralClient_SetLocal` for detailed documentation. */
  Set_Local_Variable_Client: "Execution.General_Client.Set_Local",
  /**  See `NODES.Query_GeneralClient_GetLocal` for detailed documentation. */
  Get_Local_Variable_Client: "Query.General_Client.Get_Local",
  /**  See `NODES.Execution_CustomAggroClient_SetAggro` for detailed documentation. */
  Set_the_Aggro_Value_of_the_Specified_Entity_Client: "Execution.Custom_Aggro_Client.Set_Aggro",
  /**  See `NODES.Execution_CustomAggroClient_ModifyAggro` for detailed documentation. */
  Modify_the_Aggro_Value_of_the_Specified_Entity_Client: "Execution.Custom_Aggro_Client.Modify_Aggro",
  /**  See `NODES.Execution_CustomAggroClient_ModifyAggroRatio` for detailed documentation. */
  Modify_the_Aggro_Value_of_the_Specified_Entity_Proportionally_Client: "Execution.Custom_Aggro_Client.Modify_Aggro_Ratio",
  /**  See `NODES.Execution_CustomAggroClient_TransferAggro` for detailed documentation. */
  Transfer_the_Aggro_Value_of_the_Specified_Entity_Proportionally_Client: "Execution.Custom_Aggro_Client.Transfer_Aggro",
  /**  See `NODES.Execution_CustomAggroClient_ClearAggro` for detailed documentation. */
  Clear_the_Aggro_List_of_the_Specified_Entity_Client: "Execution.Custom_Aggro_Client.Clear_Aggro",
  /**  See `NODES.Execution_CustomAggroClient_RemoveAggro` for detailed documentation. */
  Remove_Target_Entity_From_Aggro_List_Client: "Execution.Custom_Aggro_Client.Remove_Aggro",
  /**  See `NODES.Execution_CustomAggroClient_Taunt` for detailed documentation. */
  Taunt_Target_Client: "Execution.Custom_Aggro_Client.Taunt",
  /**  See `NODES.Query_CustomAggroClient_GetAggroTarget` for detailed documentation. */
  Get_the_Aggro_Target_of_the_Specified_Entity_Client: "Query.Custom_Aggro_Client.Get_Aggro_Target",
  /**  See `NODES.Query_CustomAggroClient_GetAggroList` for detailed documentation. */
  Get_the_Aggro_List_of_the_Specified_Entity_Client: "Query.Custom_Aggro_Client.Get_Aggro_List",
  /**  See `NODES.Query_CustomAggroClient_IsInCombat` for detailed documentation. */
  Query_if_Specified_Entity_is_in_Combat_Client: "Query.Custom_Aggro_Client.Is_In_Combat",
  /**  See `NODES.Query_FactionRelatedClient_IsHostile` for detailed documentation. */
  Query_If_Faction_Is_Hostile_Client: "Query.Faction_Related_Client.Is_Hostile",
  /**  See `NODES.Arithmetic_MathClient_Sin` for detailed documentation. */
  Sine_Function_Client: "Arithmetic.Math_Client.Sin",
  /**  See `NODES.Arithmetic_MathClient_Cos` for detailed documentation. */
  Cosine_Function_Client: "Arithmetic.Math_Client.Cos",
  /**  See `NODES.Arithmetic_MathClient_Tan` for detailed documentation. */
  Tangent_Function_Client: "Arithmetic.Math_Client.Tan",
  /**  See `NODES.Arithmetic_MathClient_Asin` for detailed documentation. */
  Arcsine_Function_Client: "Arithmetic.Math_Client.Asin",
  /**  See `NODES.Arithmetic_MathClient_Acos` for detailed documentation. */
  Arccosine_Function_Client: "Arithmetic.Math_Client.Acos",
  /**  See `NODES.Arithmetic_MathClient_Atan` for detailed documentation. */
  Arctangent_Function_Client: "Arithmetic.Math_Client.Atan",
  /**  See `NODES.Arithmetic_MathClient_VectorNormalize` for detailed documentation. */
  _3D_Vector_Normalization_Client: "Arithmetic.Math_Client.Vector_Normalize",
  /**  See `NODES.Arithmetic_MathClient_RadToDeg` for detailed documentation. */
  Radians_to_Degrees_Client: "Arithmetic.Math_Client.Rad_To_Deg",
  /**  See `NODES.Arithmetic_MathClient_DegToRad` for detailed documentation. */
  Degrees_to_Radians_Client: "Arithmetic.Math_Client.Deg_To_Rad",
  /**  See `NODES.Query_EntityRelatedClient_IsActive` for detailed documentation. */
  Query_If_Entity_Is_on_the_Field_Client: "Query.Entity_Related_Client.Is_Active",
  /**  See `NODES.Hidden_OtherClient_GraphEnd` for detailed documentation. */
  Node_Graph_Ends_Client: "Hidden.Other_Client.Graph_End",
  /**  See `NODES.Execution_CharacterSkillClient_TurnToFace` for detailed documentation. */
  Player_Turns_to_Face_Set_Direction_Client: "Execution.Character_Skill_Client.Turn_To_Face",
  /**  See `NODES.Execution_CharacterSkillClient_ResetTarget` for detailed documentation. */
  Reset_Skill_Target_Client: "Execution.Character_Skill_Client.Reset_Target",
  /**  See `NODES.Query_TriggerClient_GetOverlappingEntities` for detailed documentation. */
  Get_All_Entities_Within_the_Collision_Trigger_Client: "Query.Trigger_Client.Get_Overlapping_Entities",
  /**  See `NODES.Execution_CharacterSkillClient_ExitAiming` for detailed documentation. */
  Force_Exit_Aiming_State_Client: "Execution.Character_Skill_Client.Exit_Aiming",
  /**  See `NODES.Query_RayClient_GetRayResult` for detailed documentation. */
  Get_Ray_Detection_Result_Client: "Query.Ray_Client.Get_Ray_Result",
  /**  See `NODES.Query_ListRelatedClient_GetRayFilters` for detailed documentation. */
  Get_Ray_Filter_Type_List_Client: "Query.List_Related_Client.Get_Ray_Filters",
  /**  See `NODES.Execution_CharacterSkillClient_TriggerSphereHitboxLoc` for detailed documentation. */
  Trigger_Spherical_Hitbox_at_Specific_Location_Client: "Execution.Character_Skill_Client.Trigger_Sphere_Hitbox_Loc",
  /**  See `NODES.Execution_CharacterSkillClient_TriggerRectHitboxLoc` for detailed documentation. */
  Trigger_Rectangular_Hitbox_at_Specific_Location_Client: "Execution.Character_Skill_Client.Trigger_Rect_Hitbox_Loc",
  /**  See `NODES.Execution_CharacterSkillClient_TriggerSectorHitboxLoc` for detailed documentation. */
  Trigger_Sector_Hitbox_at_Specific_Location_Client: "Execution.Character_Skill_Client.Trigger_Sector_Hitbox_Loc",
  /**  See `NODES.Execution_CharacterSkillClient_TriggerSphereHitboxSocket` for detailed documentation. */
  Trigger_Spherical_Hitbox_at_Specified_Attachment_Point_Client: "Execution.Character_Skill_Client.Trigger_Sphere_Hitbox_Socket",
  /**  See `NODES.Execution_CharacterSkillClient_TriggerRectHitboxSocket` for detailed documentation. */
  Trigger_Rectangular_Hitbox_at_Specified_Attachment_Point_Client: "Execution.Character_Skill_Client.Trigger_Rect_Hitbox_Socket",
  /**  See `NODES.Execution_CharacterSkillClient_TriggerSectorHitboxSocket` for detailed documentation. */
  Trigger_Sector_Hitbox_at_Specified_Attachment_Point_Client: "Execution.Character_Skill_Client.Trigger_Sector_Hitbox_Socket",
  /**  See `NODES.Hidden_ExecutionClient_TestSendSignal` for detailed documentation. */
  _Test_Send_Client_Signal_Client: "Hidden.Execution_Client.Test_Send_Signal",
  /**  See `NODES.Query_ScanningClient_GetScannedEntity` for detailed documentation. */
  Get_Entity_Currently_Scanned_by_Scan_Component_Client: "Query.Scanning_Client.Get_Scanned_Entity",
  /**  See `NODES.Query_ScanningClient_GetScannableEntities` for detailed documentation. */
  Get_All_Valid_Entities_That_Are_Scannable_by_Scan_Component_Client: "Query.Scanning_Client.Get_Scannable_Entities",
  /**  See `NODES.Query_ScanningClient_GetScanStatus` for detailed documentation. */
  Get_Entity_s_Scan_Status_Client: "Query.Scanning_Client.Get_Scan_Status",
  /**  See `NODES.Query_ScanningClient_GetActiveTags` for detailed documentation. */
  Get_Entity_s_Current_Active_Scan_Tags_Client: "Query.Scanning_Client.Get_Active_Tags",
  /**  See `NODES.Others_PortClient_GraphEndInt` for detailed documentation. */
  Node_Graph_End_Integer_Client: "Others.Port_Client.Graph_End_Int",
  /**  See `NODES.Query_CharacterRelatedClient_GetInputType` for detailed documentation. */
  Get_Player_Client_Input_Device_Type_Client: "Query.Character_Related_Client.Get_Input_Type",
  /**  See `NODES.Execution_SignalClient_SendToServer` for detailed documentation. */
  Send_Signal_to_Server_Node_Graph_Client: "Execution.Signal_Client.Send_To_Server",
  /**  See `NODES.Execution_Signal_Send` for detailed documentation. */
  Send_Signal: "Execution.Signal.Send",
  /**  See `NODES.Trigger_Signal_OnSignal` for detailed documentation. */
  Monitor_Signal: "Trigger.Signal.On_Signal",
  /**  See `NODES.Arithmetic_Structure_AssembleStruct` for detailed documentation. */
  Assemble_Structure: "Arithmetic.Structure.Assemble_Struct",
  /**  See `NODES.Arithmetic_Structure_SplitStruct` for detailed documentation. */
  Split_Structure: "Arithmetic.Structure.Split_Struct",
  /**  See `NODES.Execution_Structure_Modify` for detailed documentation. */
  Modify_Structure: "Execution.Structure.Modify",
} as const;