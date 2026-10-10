"""节点图变量网格组件 - 使用通用两行结构字段表格。"""

from __future__ import annotations

from typing import Optional, List, Mapping, Tuple

from PyQt6 import QtCore, QtWidgets

from engine.graph.models.graph_model import GraphModel
from engine.graph.models.entity_templates import get_all_variable_types
from engine.graph.models.package_model import GraphVariableConfig
from engine.utils.name_utils import generate_unique_name
from app.ui.dialogs.struct_definition_value_editors import DictValueEditor, ListValueEditor
from app.ui.dialogs.variable_edit_dialogs import GraphVariableEditDialog
from app.ui.foundation.dialog_utils import ask_yes_no_dialog, show_warning_dialog
from app.ui.foundation.theme_manager import ThemeManager
from app.ui.foundation.toast_notification import ToastNotification
from app.ui.widgets.base_table_manager import BaseCrudTableWidget
from app.ui.widgets.two_row_field_table_widget import TwoRowFieldTableWidget


class GraphVariableTableWidget(BaseCrudTableWidget):
    """封装节点图变量的增删改查、搜索与表格展示。
    
    使用通用的两行结构字段表格组件实现内联编辑。
    """

    variables_changed = QtCore.pyqtSignal()

    def __init__(self, parent=None):
        super().__init__(parent)
        self._graph_model: Optional[GraphModel] = None
        # 是否处于“只读查看模式”（用于节点图库 / 图属性面板等场景）：
        # - 禁用增删与单元格编辑；
        # - 仍允许滚动与列表/字典折叠展开，便于查看复杂默认值。
        self._read_only_mode: bool = False
        # 用于为字典变量提供“键/值类型”的 UI 展示（例如 dict_key_type/dict_value_type）
        # key: id(default_value_dict) → (key_type_name, value_type_name)
        self._dict_type_index: dict[int, Tuple[str, str]] = {}
        self._struct_id_options: List[str] = []

        self._setup_ui()
        self._update_enabled_state()

    def set_graph_model(self, graph_model: Optional[GraphModel]) -> None:
        self._graph_model = graph_model
        self._rebuild_dict_type_index()
        self._load_variables()
        self._update_enabled_state()

    def set_struct_id_options(self, struct_ids: List[str]) -> None:
        """配置可供选择的结构体 ID 列表，用于“结构体 / 结构体列表”变量类型。"""
        normalized_ids: List[str] = []
        seen: set[str] = set()
        for struct_id in struct_ids:
            text = str(struct_id).strip()
            if not text or text in seen:
                continue
            seen.add(text)
            normalized_ids.append(text)
        self._struct_id_options = normalized_ids
        if hasattr(self, "fields_table_widget"):
            self.fields_table_widget.set_struct_id_options(self._struct_id_options)

    # --- UI 初始化 ---
    def _setup_ui(self) -> None:
        self.build_toolbar(
            [
                ("+ 新建变量", "add", self._add_variable),
                ("🗑️ 删除", "delete", self._delete_variable),
            ],
            "搜索变量...",
            self._filter_variables,
        )
        
        # 使用通用的两行结构字段表格组件（节点图变量额外展示“对外暴露”勾选列）
        self.fields_table_widget = TwoRowFieldTableWidget(
            get_all_variable_types(),
            parent=self,
            column_headers=["序号", "名字", "数据类型", "数据值", "对外暴露"],
        )
        # 为字典变量提供键/值类型解析回调，便于在 UI 中展示更准确的类型信息
        self.fields_table_widget.set_dict_type_resolver(
            self._resolve_dict_types_for_value
        )
        self.main_layout.addWidget(self.fields_table_widget)
        
        # 连接信号
        self.fields_table_widget.field_changed.connect(self._on_variables_changed)

    def _set_is_exposed_cell(self, main_row_index: int, *, checked: bool) -> None:
        """在指定变量主行写入“对外暴露”勾选框（第 4 列）。"""
        table = self.fields_table_widget.table

        container = QtWidgets.QWidget(table)
        layout = QtWidgets.QHBoxLayout(container)
        layout.setContentsMargins(0, 0, 0, 0)
        layout.setSpacing(0)
        layout.addStretch(1)

        exposed_checkbox = QtWidgets.QCheckBox(container)
        exposed_checkbox.setChecked(bool(checked))
        exposed_checkbox.setEnabled(not self._read_only_mode)
        layout.addWidget(exposed_checkbox, 0, QtCore.Qt.AlignmentFlag.AlignCenter)
        layout.addStretch(1)

        # 仅在设置初始勾选状态之后再连接信号，避免 _load_variables 阶段触发写回
        exposed_checkbox.stateChanged.connect(
            lambda _state: self._on_variables_changed()
        )
        table.setCellWidget(main_row_index, 4, container)

    def _get_is_exposed_for_row(self, main_row_index: int) -> bool:
        """读取指定变量主行的“对外暴露”勾选状态。"""
        table = self.fields_table_widget.table
        widget = table.cellWidget(main_row_index, 4)
        if widget is None:
            return False
        checkbox = widget.findChild(QtWidgets.QCheckBox)
        if checkbox is None:
            return False
        return bool(checkbox.isChecked())

    # --- 外部模式控制 ---
    def set_read_only_mode(self, read_only: bool) -> None:
        """切换为只读查看模式。

        只读模式下：
        - 工具栏按钮与搜索框禁用；
        - 表格本身保持可见，可滚动；
        - 单元格与内联列表/字典编辑器不再接受编辑，仅用于浏览与折叠/展开。
        """
        self._read_only_mode = bool(read_only)
        self._update_enabled_state()
        if self._graph_model is not None and self._read_only_mode:
            self._apply_read_only_view()

    def _update_enabled_state(self) -> None:
        has_graph_model = self._graph_model is not None
        # 工具栏与搜索框仅在有模型且处于可编辑模式时启用
        controls_enabled = has_graph_model and (not self._read_only_mode)
        self.set_controls_enabled(controls_enabled)
        # 表格本身在有模型时始终可见与可滚动，便于在只读场景下浏览
        self.fields_table_widget.setEnabled(has_graph_model)
        if not has_graph_model:
            self.fields_table_widget.clear_fields()

    # --- 数据加载 ---
    def _load_variables(self) -> None:
        if not self._graph_model:
            self.fields_table_widget.clear_fields()
            return

        fields = []
        for var_data in self._graph_model.graph_variables:
            var_config = GraphVariableConfig.deserialize(var_data)
            # 转换为通用组件格式
            value = self._convert_variable_to_value(var_config)
            fields.append({
                "name": var_config.name,
                "type_name": var_config.variable_type,
                "value": value,
            })

        self.fields_table_widget.load_fields(fields)

        # 写入“对外暴露”列：每个变量占 2 行，勾选框放在主行第 4 列
        table = self.fields_table_widget.table
        for variable_index, var_data in enumerate(self._graph_model.graph_variables):
            main_row_index = variable_index * 2
            if main_row_index >= table.rowCount():
                break
            var_config = GraphVariableConfig.deserialize(var_data)
            self._set_is_exposed_cell(main_row_index, checked=var_config.is_exposed)

        if self._read_only_mode:
            # 重新加载字段后重新应用只读视图，确保新建/切换图时控制生效
            self._apply_read_only_view()
        
        if self.search_edit:
            self._filter_variables(self.search_edit.text())

    def _convert_variable_to_value(self, var_config: GraphVariableConfig) -> object:
        """将 GraphVariableConfig 的 default_value 转换为通用组件格式。"""
        default_value = var_config.default_value
        variable_type = (var_config.variable_type or "").strip()
        
        # 列表类型
        if variable_type.endswith("列表") and variable_type != "结构体列表":
            if isinstance(default_value, list):
                return [str(v) for v in default_value]
            return []
        
        # 字典类型
        if variable_type == "字典":
            if isinstance(default_value, dict):
                return default_value
            return {}
        
        # 其他类型
        return default_value if default_value is not None else ""

    def _rebuild_dict_type_index(self) -> None:
        """根据当前 graph_model 中的图变量重建字典类型索引。"""
        self._dict_type_index = {}
        if not self._graph_model:
            return

        raw_variables = getattr(self._graph_model, "graph_variables", []) or []
        for raw_entry in raw_variables:
            if not isinstance(raw_entry, dict):
                continue
            variable_type_text = str(raw_entry.get("variable_type", "") or "").strip()
            if not variable_type_text.endswith("字典"):
                continue
            default_value_object = raw_entry.get("default_value")
            if not isinstance(default_value_object, dict):
                continue
            key_type_text = str(raw_entry.get("dict_key_type", "") or "").strip()
            value_type_text = str(raw_entry.get("dict_value_type", "") or "").strip()
            if not key_type_text and not value_type_text:
                continue
            normalized_key_type = key_type_text or "字符串"
            normalized_value_type = value_type_text or "字符串"
            self._dict_type_index[id(default_value_object)] = (
                normalized_key_type,
                normalized_value_type,
            )

    def _resolve_dict_types_for_value(
        self,
        type_name: str,
        value_mapping: Mapping[str, object],
    ) -> Tuple[str, str]:
        """供两行字段表格在渲染字典型图变量时查询“键/值类型”。

        优先使用 GraphModel.graph_variables 中的 dict_key_type/dict_value_type；
        若未找到对应记录，则回退为“字符串/字符串”。
        """
        if not isinstance(value_mapping, Mapping):
            return "字符串", "字符串"

        key = id(value_mapping)
        if key in self._dict_type_index:
            return self._dict_type_index[key]

        return "字符串", "字符串"

    def _apply_read_only_view(self) -> None:
        """为当前表格内容应用只读装饰，但保留集合类型的折叠/展开能力。"""
        table = self.fields_table_widget.table
        row = 0
        row_count = table.rowCount()

        while row < row_count:
            main_row = row
            detail_row = row + 1

            # 名字列：改为只读输入框样式
            name_edit = self.fields_table_widget._get_cell_line_edit(main_row, 1)
            if name_edit is not None:
                name_edit.setReadOnly(True)
                name_edit.setStyleSheet(ThemeManager.readonly_input_style())

            # 类型列：禁用下拉框，防止通过 UI 误改类型
            type_container = table.cellWidget(main_row, 2)
            if isinstance(type_container, QtWidgets.QWidget):
                for combo in type_container.findChildren(QtWidgets.QComboBox):
                    combo.setEnabled(False)

            # 值列：根据具体编辑器类型做只读处理（集合类型的详情行子表格在第 1 列）
            detail_widget = table.cellWidget(detail_row, 3)
            if detail_widget is None:
                detail_widget = table.cellWidget(detail_row, 1)

            # 对外暴露列：禁用勾选
            exposed_widget = table.cellWidget(main_row, 4)
            if exposed_widget is not None:
                exposed_checkbox = exposed_widget.findChild(QtWidgets.QCheckBox)
                if exposed_checkbox is not None:
                    exposed_checkbox.setEnabled(False)

            # 列表变量：禁用增删与元素编辑，但保留折叠按钮可点击
            if isinstance(detail_widget, ListValueEditor):
                detail_widget.add_button.setEnabled(False)
                detail_widget.remove_button.setEnabled(False)
                # 只读模式下禁用子表格的右键菜单，防止通过“删除当前行”误改视图内容。
                detail_widget.table.setContextMenuPolicy(
                    QtCore.Qt.ContextMenuPolicy.NoContextMenu
                )
                for line_edit in detail_widget.table.findChildren(QtWidgets.QLineEdit):
                    line_edit.setReadOnly(True)
                    line_edit.setStyleSheet(ThemeManager.readonly_input_style())

            # 字典变量：禁用键/值类型选择与增删，仅保留折叠按钮与摘要
            elif isinstance(detail_widget, DictValueEditor):
                detail_widget.add_button.setEnabled(False)
                detail_widget.remove_button.setEnabled(False)
                detail_widget.key_type_combo.setEnabled(False)
                detail_widget.value_type_combo.setEnabled(False)
                detail_widget.table.setContextMenuPolicy(
                    QtCore.Qt.ContextMenuPolicy.NoContextMenu
                )
                for line_edit in detail_widget.table.findChildren(QtWidgets.QLineEdit):
                    line_edit.setReadOnly(True)
                    line_edit.setStyleSheet(ThemeManager.readonly_input_style())

            # 其他值（标量/结构体等）：禁用编辑
            elif isinstance(detail_widget, QtWidgets.QWidget):
                line_edit = detail_widget.findChild(QtWidgets.QLineEdit)
                if line_edit is not None:
                    line_edit.setReadOnly(True)
                    line_edit.setStyleSheet(ThemeManager.readonly_input_style())

            row += 2

    # --- CRUD 操作 ---
    def _add_variable(self) -> None:
        """直接添加一个默认变量到表格中，让用户内联编辑。"""
        if not self._graph_model:
            return

        # 为默认变量名称生成不重复的名字（新变量 / 新变量_1 / 新变量_2 ...）
        existing_names = []
        for raw in self._graph_model.graph_variables:
            if isinstance(raw, dict):
                name = str(raw.get("name", "")).strip()
                if name:
                    existing_names.append(name)
        variable_name = generate_unique_name("新变量", existing_names)

        # 创建默认变量配置
        default_var_config = GraphVariableConfig(
            name=variable_name,
            variable_type="字符串",
            default_value="",
            is_exposed=False,
            description="",
        )

        # 添加到模型
        self._graph_model.graph_variables.append(default_var_config.serialize())
        
        # 重新加载显示
        self._load_variables()
        self.variables_changed.emit()
        
        # 选中新添加的行（最后一个变量）
        table = self.fields_table_widget.table
        last_row = table.rowCount() - 2  # 最后一个变量的主行（每个变量占2行）
        if last_row >= 0:
            table.selectRow(last_row)
            table.setFocus()

    def _delete_variable(self) -> None:
        if not self._graph_model:
            return

        # 获取当前选中的行（主行索引）
        table = self.fields_table_widget.table
        current_row = table.currentRow()
        if current_row < 0:
            show_warning_dialog(self, "警告", "请先选择要删除的变量")
            return
        
        # 计算实际的变量索引（因为每个变量占2行）
        variable_index = current_row // 2
        if variable_index >= len(self._graph_model.graph_variables):
            show_warning_dialog(self, "警告", "请先选择要删除的变量")
            return

        var_data = self._graph_model.graph_variables[variable_index]
        var_config = GraphVariableConfig.deserialize(var_data)

        confirm_message = (
            f"确定要删除变量 '{var_config.name}' 吗？\n"
            "删除后，使用此变量的节点将无法正常工作。"
        )
        if not ask_yes_no_dialog(self, "确认删除", confirm_message):
            return

        del self._graph_model.graph_variables[variable_index]
        self._load_variables()
        self.variables_changed.emit()
        ToastNotification.show_message(self, f"已删除变量 '{var_config.name}'。", "success")

    def _on_variables_changed(self) -> None:
        """字段内容变化时，写回到graph_model。"""
        if not self._graph_model:
            return

        # 只读模式下不接受任何通过 UI 的修改，直接丢弃变更信号
        if self._read_only_mode:
            return

        # 旧数据快照：尽量保留 UI 未展示的字段（如 description / dict_key_type / dict_value_type）
        old_by_name: dict[str, GraphVariableConfig] = {}
        for raw_entry in getattr(self._graph_model, "graph_variables", []) or []:
            if not isinstance(raw_entry, dict):
                continue
            old_config = GraphVariableConfig.deserialize(raw_entry)
            if old_config.name:
                old_by_name[old_config.name] = old_config

        # 从通用组件获取所有字段
        fields = self.fields_table_widget.get_all_fields()
        
        # 转换回 GraphVariableConfig 格式
        new_variables = []
        table = self.fields_table_widget.table
        for field_index, field in enumerate(fields):
            name = field.get("name", "").strip()
            type_name = field.get("type_name", "").strip()
            value = field.get("value")
            
            if not name or not type_name:
                continue

            main_row_index = field_index * 2
            is_exposed = self._get_is_exposed_for_row(main_row_index)

            old_config = old_by_name.get(name)
            description = old_config.description if old_config is not None else ""

            dict_key_type = ""
            dict_value_type = ""
            if type_name == "字典":
                detail_row_index = main_row_index + 1
                dict_editor = table.cellWidget(detail_row_index, 1)
                if isinstance(dict_editor, DictValueEditor):
                    dict_key_type = str(dict_editor.key_type_combo.currentText()).strip()
                    dict_value_type = str(dict_editor.value_type_combo.currentText()).strip()
                if not dict_key_type and old_config is not None:
                    dict_key_type = str(old_config.dict_key_type or "").strip()
                if not dict_value_type and old_config is not None:
                    dict_value_type = str(old_config.dict_value_type or "").strip()
            
            # 创建新的变量配置
            var_config = GraphVariableConfig(
                name=name,
                variable_type=type_name,
                default_value=value,
                is_exposed=is_exposed,
                description=description,
                dict_key_type=dict_key_type,
                dict_value_type=dict_value_type,
            )
            new_variables.append(var_config.serialize())
        
        # 更新模型
        self._graph_model.graph_variables = new_variables
        self._rebuild_dict_type_index()
        self.variables_changed.emit()

    def _filter_variables(self, text: str) -> None:
        """搜索过滤变量（针对两行结构）。

        约定：
        - 每个变量仍占用“主行 + 详情行”的两行结构；
        - 仅当值编辑器为列表/字典（ListValueEditor/DictValueEditor）且未折叠时，详情行才会可见；
        - 标量/结构体类型的详情行始终保持隐藏，搜索只控制主行的可见性。
        """
        table = self.fields_table_widget.table
        search_text = (text or "").lower()
        row = 0
        row_count = table.rowCount()

        while row < row_count:
            # 主行：名字列用于匹配
            name_widget = self.fields_table_widget._get_cell_line_edit(row, 1)
            name_text = name_widget.text() if name_widget else ""
            matches = search_text in name_text.lower()

            # 主行显示/隐藏
            table.setRowHidden(row, not matches)

            # 详情行：仅对集合型（列表/字典）开放，且需考虑折叠状态
            detail_row = row + 1
            if detail_row < row_count:
                detail_widget = table.cellWidget(detail_row, 3)
                if detail_widget is None:
                    # 集合类型详情行的子表格放在合并后的第 1 列
                    detail_widget = table.cellWidget(detail_row, 1)
                if isinstance(detail_widget, (ListValueEditor, DictValueEditor)):
                    is_collapsed_getter = getattr(detail_widget, "is_collapsed", None)
                    is_collapsed = (
                        bool(is_collapsed_getter())
                        if callable(is_collapsed_getter)
                        else False
                    )
                    should_show_detail = matches and not is_collapsed
                    table.setRowHidden(detail_row, not should_show_detail)
                else:
                    # 非列表/字典类型的详情行保持隐藏，避免出现视觉上的“空第二行”
                    table.setRowHidden(detail_row, True)

            row += 2


__all__ = ["GraphVariableTableWidget"]
