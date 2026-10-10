from __future__ import annotations

from .management_sections_base import *


class ScanTagSection(BaseManagementSection):
    """扫描标签管理 Section（对应 `ManagementData.scan_tags`）。"""

    section_key = "scan_tags"
    tree_label = "🔍 扫描标签管理"
    type_name = "扫描标签"

    def iter_rows(self, package: ManagementPackage) -> Iterable[ManagementRowData]:
        for scan_tag_id, scan_tag_payload in package.management.scan_tags.items():
            if not isinstance(scan_tag_payload, dict):
                continue

            merged_payload: Dict[str, Any] = dict(scan_tag_payload)
            if "scan_tag_id" not in merged_payload:
                merged_payload["scan_tag_id"] = scan_tag_id
            if "scan_tag_name" not in merged_payload:
                merged_payload["scan_tag_name"] = scan_tag_id

            scan_tag_config = ScanTagConfig.deserialize(merged_payload)
            name_value = scan_tag_config.scan_tag_name or scan_tag_config.scan_tag_id
            is_scannable = bool(scan_tag_config.scannable)
            scan_range_text = f"{scan_tag_config.scan_range:g}"

            description_text = scan_tag_config.description

            yield ManagementRowData(
                name=name_value,
                type_name=self.type_name,
                attr1=f"索引: {scan_tag_config.scan_tag_id}",
                attr2=f"可扫描: {'是' if is_scannable else '否'}",
                attr3=f"扫描范围: {scan_range_text}",
                description=description_text,
                last_modified=self._get_last_modified_text(scan_tag_payload),
                user_data=(self.section_key, scan_tag_id),
            )

    def _build_form(
        self,
        parent_widget: QtWidgets.QWidget,
        *,
        title: str,
        initial: Optional[Dict[str, Any]] = None,
        is_edit: bool,
    ) -> Optional[Dict[str, Any]]:
        initial_values: Dict[str, Any] = {
            "scan_tag_id": "",
            "scan_tag_name": "",
            "scannable": True,
            "scan_range": 10.0,
            "scan_highlight_color": ThemeManager.Colors.SUCCESS,
            "scan_info_text": "",
            "description": "",
        }
        if initial:
            initial_values.update(initial)

        builder = FormDialogBuilder(parent_widget, title, fixed_size=(460, 460))

        scan_tag_id_edit = builder.add_line_edit(
            "索引:",
            str(initial_values.get("scan_tag_id", "")),
            "请输入扫描标签索引",
            read_only=is_edit,
        )
        scan_tag_name_edit = builder.add_line_edit(
            "扫描标签名称:",
            str(initial_values.get("scan_tag_name", "")),
        )
        scannable_check = builder.add_check_box(
            "可被扫描",
            bool(initial_values.get("scannable", True)),
        )
        scan_range_spin = builder.add_double_spin_box(
            "扫描范围:",
            minimum=0.1,
            maximum=999.0,
            value=float(initial_values.get("scan_range", 10.0)),
            decimals=2,
            single_step=0.5,
        )
        highlight_color_edit = builder.add_color_picker(
            "高亮颜色:",
            str(initial_values.get("scan_highlight_color", ThemeManager.Colors.SUCCESS)),
        )
        info_text_edit = builder.add_line_edit(
            "扫描信息文本:",
            str(initial_values.get("scan_info_text", "")),
        )
        description_edit = builder.add_plain_text_edit(
            "描述:",
            str(initial_values.get("description", "")),
            min_height=80,
            max_height=200,
        )

        def _validate(dialog_self: QtWidgets.QDialog) -> bool:
            from app.ui.foundation import dialog_utils

            if not scan_tag_id_edit.text().strip():
                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "索引不能为空",
                )
                return False
            if not scan_tag_name_edit.text().strip():
                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "请输入扫描标签名称",
                )
                return False
            return True

        builder.dialog.validate = types.MethodType(_validate, builder.dialog)

        if not builder.exec():
            return None

        return {
            "scan_tag_id": scan_tag_id_edit.text().strip(),
            "scan_tag_name": scan_tag_name_edit.text().strip(),
            "scannable": bool(scannable_check.isChecked()),
            "scan_range": float(scan_range_spin.value()),
            "scan_highlight_color": highlight_color_edit.text().strip()
            or ThemeManager.Colors.SUCCESS,
            "scan_info_text": info_text_edit.text().strip(),
            "description": description_edit.toPlainText().strip(),
        }

    def create_item(
        self,
        parent_widget: QtWidgets.QWidget,
        package: ManagementPackage,
    ) -> bool:
        _ = parent_widget

        scan_tags = package.management.scan_tags
        if not isinstance(scan_tags, dict):
            scan_tags = {}
            package.management.scan_tags = scan_tags

        max_index = 0
        for existing_id in scan_tags.keys():
            if isinstance(existing_id, str) and existing_id.isdigit():
                max_index = max(max_index, int(existing_id))
        new_index = max_index + 1
        scan_tag_id = str(new_index)

        scan_tag_config = ScanTagConfig(
            scan_tag_id=scan_tag_id,
            scan_tag_name=f"扫描标签{new_index}",
            scannable=True,
            scan_range=10.0,
            scan_highlight_color=ThemeManager.Colors.SUCCESS,
            scan_info_text="",
            description="",
        )
        scan_tags[scan_tag_id] = scan_tag_config.serialize()
        return True

    def edit_item(
        self,
        parent_widget: QtWidgets.QWidget,
        package: ManagementPackage,
        item_id: str,
    ) -> bool:
        scan_tag_payload = package.management.scan_tags.get(item_id)
        if scan_tag_payload is None:
            return False

        merged_payload: Dict[str, Any] = dict(scan_tag_payload)
        if "scan_tag_id" not in merged_payload:
            merged_payload["scan_tag_id"] = item_id
        if "scan_tag_name" not in merged_payload:
            merged_payload["scan_tag_name"] = item_id

        scan_tag_config = ScanTagConfig.deserialize(merged_payload)

        initial_values: Dict[str, Any] = {
            "scan_tag_id": scan_tag_config.scan_tag_id,
            "scan_tag_name": scan_tag_config.scan_tag_name,
            "scannable": scan_tag_config.scannable,
            "scan_range": scan_tag_config.scan_range,
            "scan_highlight_color": scan_tag_config.scan_highlight_color,
            "scan_info_text": scan_tag_config.scan_info_text,
            "description": scan_tag_config.description,
        }
        dialog_data = self._build_form(
            parent_widget,
            title="编辑扫描标签",
            initial=initial_values,
            is_edit=True,
        )
        if dialog_data is None:
            return False

        scan_tag_payload["scan_tag_name"] = dialog_data["scan_tag_name"]
        scan_tag_payload["scannable"] = dialog_data["scannable"]
        scan_tag_payload["scan_range"] = dialog_data["scan_range"]
        scan_tag_payload["scan_highlight_color"] = dialog_data[
            "scan_highlight_color"
        ]
        scan_tag_payload["scan_info_text"] = dialog_data["scan_info_text"]
        scan_tag_payload["description"] = dialog_data["description"]
        return True

    def delete_item(self, package: ManagementPackage, item_id: str) -> bool:
        if item_id not in package.management.scan_tags:
            return False
        package.management.scan_tags.pop(item_id, None)
        return True

    def build_inline_edit_form(
        self,
        *,
        parent: QtWidgets.QWidget,
        package: ManagementPackage,
        item_id: str,
        on_changed: Callable[[], None],
    ) -> Optional[Tuple[str, str, Callable[[QtWidgets.QFormLayout], None]]]:
        """在右侧属性面板中编辑扫描标签的全部主要字段。"""
        scan_tags_mapping = getattr(package.management, "scan_tags", None)
        if not isinstance(scan_tags_mapping, dict):
            return None
        scan_tag_payload_any = scan_tags_mapping.get(item_id)
        if not isinstance(scan_tag_payload_any, dict):
            return None

        scan_tag_payload = scan_tag_payload_any

        def build_form(form_layout: QtWidgets.QFormLayout) -> None:
            scan_tag_name_value = str(scan_tag_payload.get("scan_tag_name", ""))
            scannable_value = bool(scan_tag_payload.get("scannable", True))
            scan_range_any = scan_tag_payload.get("scan_range", 10.0)
            if isinstance(scan_range_any, (int, float)):
                scan_range_value = float(scan_range_any)
            else:
                scan_range_value = 10.0
            scan_highlight_color_value = str(
                scan_tag_payload.get(
                    "scan_highlight_color", ThemeManager.Colors.SUCCESS
                ),
            )
            scan_info_text_value = str(scan_tag_payload.get("scan_info_text", ""))
            description_value = str(scan_tag_payload.get("description", ""))

            name_edit = QtWidgets.QLineEdit(scan_tag_name_value)

            scannable_check = QtWidgets.QCheckBox("可被扫描")
            scannable_check.setChecked(scannable_value)

            scan_range_spin = QtWidgets.QDoubleSpinBox()
            scan_range_spin.setRange(0.1, 999.0)
            scan_range_spin.setDecimals(2)
            scan_range_spin.setSingleStep(0.5)
            scan_range_spin.setValue(scan_range_value)

            highlight_color_edit = QtWidgets.QLineEdit(scan_highlight_color_value)

            info_text_edit = QtWidgets.QLineEdit(scan_info_text_value)

            description_edit = QtWidgets.QTextEdit()
            description_edit.setPlainText(description_value)
            description_edit.setMinimumHeight(80)
            description_edit.setMaximumHeight(200)

            def apply_changes() -> None:
                normalized_name = name_edit.text().strip()
                if normalized_name:
                    scan_tag_payload["scan_tag_name"] = normalized_name
                else:
                    scan_tag_payload["scan_tag_name"] = item_id
                scan_tag_payload["scannable"] = bool(scannable_check.isChecked())
                scan_tag_payload["scan_range"] = float(scan_range_spin.value())
                scan_tag_payload["scan_highlight_color"] = (
                    highlight_color_edit.text().strip() or ThemeManager.Colors.SUCCESS
                )
                scan_tag_payload["scan_info_text"] = info_text_edit.text().strip()
                scan_tag_payload["description"] = description_edit.toPlainText().strip()
                on_changed()

            name_edit.editingFinished.connect(apply_changes)
            scannable_check.stateChanged.connect(lambda _state: apply_changes())
            scan_range_spin.editingFinished.connect(apply_changes)
            highlight_color_edit.editingFinished.connect(apply_changes)
            info_text_edit.editingFinished.connect(apply_changes)
            description_edit.textChanged.connect(lambda: apply_changes())

            form_layout.addRow("标签索引", QtWidgets.QLabel(item_id))
            form_layout.addRow("扫描标签名称", name_edit)
            form_layout.addRow("", scannable_check)
            form_layout.addRow("扫描范围", scan_range_spin)
            form_layout.addRow("高亮颜色", highlight_color_edit)
            form_layout.addRow("扫描信息文本", info_text_edit)
            form_layout.addRow("描述", description_edit)

        display_name_value = str(scan_tag_payload.get("scan_tag_name", "")).strip()
        display_name = display_name_value or item_id

        title = f"扫描标签详情：{display_name}"
        description = "在右侧直接修改扫描标签名称、是否可扫描、范围、高亮颜色、信息文本与描述，修改会立即保存到当前视图。"
        return title, description, build_form


