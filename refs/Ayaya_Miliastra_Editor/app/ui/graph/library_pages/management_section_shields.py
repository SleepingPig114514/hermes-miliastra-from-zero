from __future__ import annotations

from .management_sections_base import *
from app.ui.forms.schema_dialog import FormDialogBuilder


class ShieldSection(BaseManagementSection):
    """护盾管理 Section（对应 `ManagementData.shields`）。"""

    section_key = "shields"
    tree_label = "🛡️ 护盾管理"
    type_name = "护盾"

    def iter_rows(self, package: ManagementPackage) -> Iterable[ManagementRowData]:
        for shield_id, shield_payload in package.management.shields.items():
            if not isinstance(shield_payload, dict):
                continue

            merged_payload: Dict[str, Any] = dict(shield_payload)
            if "shield_id" not in merged_payload:
                merged_payload["shield_id"] = shield_id
            if "shield_name" not in merged_payload:
                merged_payload["shield_name"] = shield_id

            shield_config = ShieldConfig.deserialize(merged_payload)
            name_value = shield_config.shield_name or shield_config.shield_id
            shield_value_text = f"{shield_config.shield_value:g}"
            absorption_ratio_text = f"{shield_config.absorption_ratio:g}"
            priority_text = str(shield_config.settlement_priority)

            description_text = shield_config.description

            yield ManagementRowData(
                name=name_value,
                type_name=self.type_name,
                attr1=f"护盾值: {shield_value_text}",
                attr2=f"吸收比例: {absorption_ratio_text}",
                attr3=f"结算优先级: {priority_text}",
                description=description_text,
                last_modified=self._get_last_modified_text(shield_payload),
                user_data=(self.section_key, shield_id),
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
            "shield_id": "",
            "shield_name": "",
            "shield_value": 100.0,
            "damage_ratio": 1.0,
            "remove_when_depleted": True,
            "show_ui": True,
            "ui_color": ThemeManager.Colors.INFO,
            "absorption_ratio": 1.0,
            "infinite_absorption": False,
            "settlement_priority": 0,
            "layer_based_effect": False,
            "nullify_overflow_damage": False,
            "ignore_shield_amplification": False,
            "absorbable_damage_types": [],
            "attack_tags": [],
            "description": "",
        }
        if initial:
            initial_values.update(initial)

        builder = FormDialogBuilder(parent_widget, title, fixed_size=(540, 660))

        shield_id_edit = builder.add_line_edit(
            "配置ID:",
            str(initial_values.get("shield_id", "")),
            "唯一标识，例如 shield_main",
            read_only=is_edit,
        )
        shield_name_edit = builder.add_line_edit(
            "护盾名称:",
            str(initial_values.get("shield_name", "")),
            "显示名称",
        )

        builder.add_custom_row("", QtWidgets.QLabel("<b>核心配置</b>"))
        shield_value_spin = builder.add_double_spin_box(
            "护盾值:",
            minimum=1.0,
            maximum=999999.0,
            value=float(initial_values.get("shield_value", 100.0)),
            decimals=1,
            single_step=10.0,
        )
        damage_ratio_spin = builder.add_double_spin_box(
            "承伤比例(0-1):",
            minimum=0.0,
            maximum=1.0,
            value=float(initial_values.get("damage_ratio", 1.0)),
            decimals=2,
            single_step=0.1,
        )
        remove_when_depleted_check = builder.add_check_box(
            "护盾值耗尽时移除",
            bool(initial_values.get("remove_when_depleted", True)),
        )
        show_ui_check = builder.add_check_box(
            "显示UI（护盾条）",
            bool(initial_values.get("show_ui", True)),
        )
        ui_color_edit = builder.add_color_picker(
            "UI颜色:",
            str(initial_values.get("ui_color", ThemeManager.Colors.INFO)),
        )

        builder.add_custom_row("", QtWidgets.QLabel("<b>高级配置</b>"))
        absorption_ratio_spin = builder.add_double_spin_box(
            "吸收比例:",
            minimum=0.1,
            maximum=999.0,
            value=float(initial_values.get("absorption_ratio", 1.0)),
            decimals=2,
            single_step=0.1,
        )
        infinite_absorption_check = builder.add_check_box(
            "无限吸收（每次仅扣1点）",
            bool(initial_values.get("infinite_absorption", False)),
        )
        settlement_priority_spin = builder.add_spin_box(
            "结算优先级:",
            minimum=-999,
            maximum=999,
            value=int(initial_values.get("settlement_priority", 0)),
        )
        layer_based_effect_check = builder.add_check_box(
            "按层生效（仅取最早一层）",
            bool(initial_values.get("layer_based_effect", False)),
        )
        nullify_overflow_damage_check = builder.add_check_box(
            "吸收溢出时伤害归零",
            bool(initial_values.get("nullify_overflow_damage", False)),
        )
        ignore_shield_amplification_check = builder.add_check_box(
            "忽略护盾强效调整率",
            bool(initial_values.get("ignore_shield_amplification", False)),
        )
        absorbable_damage_types_list: List[str] = list(
            initial_values.get("absorbable_damage_types", []),
        )
        absorbable_damage_types_edit = builder.add_line_edit(
            "可吸收伤害类型:",
            ", ".join(absorbable_damage_types_list),
            "留空=吸收所有伤害",
        )
        attack_tags_list: List[str] = list(initial_values.get("attack_tags", []))
        attack_tags_edit = builder.add_line_edit(
            "攻击标签:",
            ", ".join(attack_tags_list),
            "留空=所有攻击生效",
        )
        description_edit = builder.add_plain_text_edit(
            "描述:",
            str(initial_values.get("description", "")),
            min_height=80,
            max_height=200,
        )

        def _validate(dialog_self: QtWidgets.QDialog) -> bool:
            from app.ui.foundation import dialog_utils

            if not shield_id_edit.text().strip():
                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "配置ID不能为空",
                )
                return False
            if not shield_name_edit.text().strip():
                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "请输入护盾名称",
                )
                return False
            return True

        builder.dialog.validate = types.MethodType(_validate, builder.dialog)

        if not builder.exec():
            return None

        absorbable_damage_types_value = [
            entry.strip()
            for entry in absorbable_damage_types_edit.text().split(",")
            if entry.strip()
        ]
        attack_tags_value = [
            entry.strip() for entry in attack_tags_edit.text().split(",") if entry.strip()
        ]

        return {
            "shield_id": shield_id_edit.text().strip(),
            "shield_name": shield_name_edit.text().strip(),
            "shield_value": float(shield_value_spin.value()),
            "damage_ratio": float(damage_ratio_spin.value()),
            "remove_when_depleted": bool(remove_when_depleted_check.isChecked()),
            "show_ui": bool(show_ui_check.isChecked()),
            "ui_color": ui_color_edit.text().strip() or ThemeManager.Colors.INFO,
            "absorption_ratio": float(absorption_ratio_spin.value()),
            "infinite_absorption": bool(infinite_absorption_check.isChecked()),
            "settlement_priority": int(settlement_priority_spin.value()),
            "layer_based_effect": bool(layer_based_effect_check.isChecked()),
            "nullify_overflow_damage": bool(nullify_overflow_damage_check.isChecked()),
            "ignore_shield_amplification": bool(
                ignore_shield_amplification_check.isChecked(),
            ),
            "absorbable_damage_types": absorbable_damage_types_value,
            "attack_tags": attack_tags_value,
            "description": description_edit.toPlainText().strip(),
        }

    def create_item(
        self,
        parent_widget: QtWidgets.QWidget,
        package: ManagementPackage,
    ) -> bool:
        _ = parent_widget

        shields = package.management.shields
        if not isinstance(shields, dict):
            shields = {}
            package.management.shields = shields

        existing_ids = set(shields.keys())
        shield_id = generate_prefixed_id("shield")
        while shield_id in existing_ids:
            shield_id = generate_prefixed_id("shield")

        default_index = len(shields) + 1
        shield_name = f"护盾{default_index}"

        shield_config = ShieldConfig(
            shield_id=shield_id,
            shield_name=shield_name,
        )
        shields[shield_id] = shield_config.serialize()
        return True

    def edit_item(
        self,
        parent_widget: QtWidgets.QWidget,
        package: ManagementPackage,
        item_id: str,
    ) -> bool:
        shield_payload = package.management.shields.get(item_id)
        if shield_payload is None:
            return False

        merged_payload: Dict[str, Any] = dict(shield_payload)
        if "shield_id" not in merged_payload:
            merged_payload["shield_id"] = item_id
        if "shield_name" not in merged_payload:
            merged_payload["shield_name"] = item_id

        shield_config = ShieldConfig.deserialize(merged_payload)

        initial_values: Dict[str, Any] = {
            "shield_id": shield_config.shield_id,
            "shield_name": shield_config.shield_name,
            "shield_value": shield_config.shield_value,
            "damage_ratio": shield_config.damage_ratio,
            "remove_when_depleted": shield_config.remove_when_depleted,
            "show_ui": shield_config.show_ui,
            "ui_color": shield_config.ui_color,
            "absorption_ratio": shield_config.absorption_ratio,
            "infinite_absorption": shield_config.infinite_absorption,
            "settlement_priority": shield_config.settlement_priority,
            "layer_based_effect": shield_config.layer_based_effect,
            "nullify_overflow_damage": shield_config.nullify_overflow_damage,
            "ignore_shield_amplification": shield_config.ignore_shield_amplification,
            "absorbable_damage_types": list(shield_config.absorbable_damage_types),
            "attack_tags": list(shield_config.attack_tags),
            "description": shield_config.description,
        }
        dialog_data = self._build_form(
            parent_widget,
            title="编辑护盾",
            initial=initial_values,
            is_edit=True,
        )
        if dialog_data is None:
            return False

        shield_payload["shield_name"] = dialog_data["shield_name"]
        shield_payload["shield_value"] = dialog_data["shield_value"]
        shield_payload["damage_ratio"] = dialog_data["damage_ratio"]
        shield_payload["remove_when_depleted"] = dialog_data["remove_when_depleted"]
        shield_payload["show_ui"] = dialog_data["show_ui"]
        shield_payload["ui_color"] = dialog_data["ui_color"]
        shield_payload["absorption_ratio"] = dialog_data["absorption_ratio"]
        shield_payload["infinite_absorption"] = dialog_data["infinite_absorption"]
        shield_payload["settlement_priority"] = dialog_data["settlement_priority"]
        shield_payload["layer_based_effect"] = dialog_data["layer_based_effect"]
        shield_payload["nullify_overflow_damage"] = dialog_data[
            "nullify_overflow_damage"
        ]
        shield_payload["ignore_shield_amplification"] = dialog_data[
            "ignore_shield_amplification"
        ]
        shield_payload["absorbable_damage_types"] = dialog_data[
            "absorbable_damage_types"
        ]
        shield_payload["attack_tags"] = dialog_data["attack_tags"]
        shield_payload["description"] = dialog_data["description"]
        return True

    def delete_item(self, package: ManagementPackage, item_id: str) -> bool:
        if item_id not in package.management.shields:
            return False
        package.management.shields.pop(item_id, None)
        return True

    def build_inline_edit_form(
        self,
        *,
        parent: QtWidgets.QWidget,
        package: ManagementPackage,
        item_id: str,
        on_changed: Callable[[], None],
    ) -> Optional[Tuple[str, str, Callable[[QtWidgets.QFormLayout], None]]]:
        """在右侧属性面板中编辑护盾的全部主要字段。"""
        shields_mapping = getattr(package.management, "shields", None)
        if not isinstance(shields_mapping, dict):
            return None
        shield_payload_any = shields_mapping.get(item_id)
        if not isinstance(shield_payload_any, dict):
            return None

        shield_payload = shield_payload_any

        def build_form(form_layout: QtWidgets.QFormLayout) -> None:
            shield_name_value = str(shield_payload.get("shield_name", ""))
            shield_value_any = shield_payload.get("shield_value", 100.0)
            if isinstance(shield_value_any, (int, float)):
                shield_value = float(shield_value_any)
            else:
                shield_value = 100.0
            damage_ratio_any = shield_payload.get("damage_ratio", 1.0)
            if isinstance(damage_ratio_any, (int, float)):
                damage_ratio_value = float(damage_ratio_any)
            else:
                damage_ratio_value = 1.0
            remove_when_depleted_value = bool(
                shield_payload.get("remove_when_depleted", True),
            )
            show_ui_value = bool(shield_payload.get("show_ui", True))
            ui_color_value = str(
                shield_payload.get("ui_color", ThemeManager.Colors.INFO)
            )
            absorption_ratio_any = shield_payload.get("absorption_ratio", 1.0)
            if isinstance(absorption_ratio_any, (int, float)):
                absorption_ratio_value = float(absorption_ratio_any)
            else:
                absorption_ratio_value = 1.0
            infinite_absorption_value = bool(
                shield_payload.get("infinite_absorption", False),
            )
            settlement_priority_any = shield_payload.get("settlement_priority", 0)
            if isinstance(settlement_priority_any, int):
                settlement_priority_value = settlement_priority_any
            else:
                settlement_priority_value = 0
            layer_based_effect_value = bool(
                shield_payload.get("layer_based_effect", False),
            )
            nullify_overflow_damage_value = bool(
                shield_payload.get("nullify_overflow_damage", False),
            )
            ignore_shield_amplification_value = bool(
                shield_payload.get("ignore_shield_amplification", False),
            )
            absorbable_damage_types_list: List[str] = list(
                shield_payload.get("absorbable_damage_types", []),
            )
            attack_tags_list: List[str] = list(shield_payload.get("attack_tags", []))
            description_value = str(shield_payload.get("description", ""))

            name_edit = QtWidgets.QLineEdit(shield_name_value)

            shield_value_spin = QtWidgets.QDoubleSpinBox()
            shield_value_spin.setRange(1.0, 999999.0)
            shield_value_spin.setDecimals(1)
            shield_value_spin.setSingleStep(10.0)
            shield_value_spin.setValue(shield_value)

            damage_ratio_spin = QtWidgets.QDoubleSpinBox()
            damage_ratio_spin.setRange(0.0, 1.0)
            damage_ratio_spin.setDecimals(2)
            damage_ratio_spin.setSingleStep(0.1)
            damage_ratio_spin.setValue(damage_ratio_value)

            remove_when_depleted_check = QtWidgets.QCheckBox("护盾值耗尽时移除")
            remove_when_depleted_check.setChecked(remove_when_depleted_value)

            show_ui_check = QtWidgets.QCheckBox("显示UI（护盾条）")
            show_ui_check.setChecked(show_ui_value)

            ui_color_edit = QtWidgets.QLineEdit(ui_color_value)

            absorption_ratio_spin = QtWidgets.QDoubleSpinBox()
            absorption_ratio_spin.setRange(0.1, 999.0)
            absorption_ratio_spin.setDecimals(2)
            absorption_ratio_spin.setSingleStep(0.1)
            absorption_ratio_spin.setValue(absorption_ratio_value)

            infinite_absorption_check = QtWidgets.QCheckBox("无限吸收（每次仅扣1点）")
            infinite_absorption_check.setChecked(infinite_absorption_value)

            settlement_priority_spin = QtWidgets.QSpinBox()
            settlement_priority_spin.setRange(-999, 999)
            settlement_priority_spin.setValue(settlement_priority_value)

            layer_based_effect_check = QtWidgets.QCheckBox("按层生效（仅取最早一层）")
            layer_based_effect_check.setChecked(layer_based_effect_value)

            nullify_overflow_damage_check = QtWidgets.QCheckBox("吸收溢出时伤害归零")
            nullify_overflow_damage_check.setChecked(nullify_overflow_damage_value)

            ignore_shield_amplification_check = QtWidgets.QCheckBox("忽略护盾强效调整率")
            ignore_shield_amplification_check.setChecked(
                ignore_shield_amplification_value,
            )

            absorbable_damage_types_edit = QtWidgets.QLineEdit(
                ", ".join(absorbable_damage_types_list),
            )
            absorbable_damage_types_edit.setPlaceholderText("留空=吸收所有伤害")

            attack_tags_edit = QtWidgets.QLineEdit(", ".join(attack_tags_list))
            attack_tags_edit.setPlaceholderText("留空=所有攻击生效")

            description_edit = QtWidgets.QTextEdit()
            description_edit.setPlainText(description_value)
            description_edit.setMinimumHeight(80)
            description_edit.setMaximumHeight(200)

            def apply_changes() -> None:
                normalized_name = name_edit.text().strip()
                if normalized_name:
                    shield_payload["shield_name"] = normalized_name
                else:
                    shield_payload["shield_name"] = item_id
                shield_payload["shield_value"] = float(shield_value_spin.value())
                shield_payload["damage_ratio"] = float(damage_ratio_spin.value())
                shield_payload["remove_when_depleted"] = bool(
                    remove_when_depleted_check.isChecked(),
                )
                shield_payload["show_ui"] = bool(show_ui_check.isChecked())
                shield_payload["ui_color"] = ui_color_edit.text().strip() or ThemeManager.Colors.INFO
                shield_payload["absorption_ratio"] = float(
                    absorption_ratio_spin.value(),
                )
                shield_payload["infinite_absorption"] = bool(
                    infinite_absorption_check.isChecked(),
                )
                shield_payload["settlement_priority"] = int(
                    settlement_priority_spin.value(),
                )
                shield_payload["layer_based_effect"] = bool(
                    layer_based_effect_check.isChecked(),
                )
                shield_payload["nullify_overflow_damage"] = bool(
                    nullify_overflow_damage_check.isChecked(),
                )
                shield_payload["ignore_shield_amplification"] = bool(
                    ignore_shield_amplification_check.isChecked(),
                )
                absorbable_damage_types_value = [
                    entry.strip()
                    for entry in absorbable_damage_types_edit.text().split(",")
                    if entry.strip()
                ]
                attack_tags_value = [
                    entry.strip()
                    for entry in attack_tags_edit.text().split(",")
                    if entry.strip()
                ]
                shield_payload["absorbable_damage_types"] = absorbable_damage_types_value
                shield_payload["attack_tags"] = attack_tags_value
                shield_payload["description"] = description_edit.toPlainText().strip()
                on_changed()

            name_edit.editingFinished.connect(apply_changes)
            shield_value_spin.editingFinished.connect(apply_changes)
            damage_ratio_spin.editingFinished.connect(apply_changes)
            remove_when_depleted_check.stateChanged.connect(
                lambda _state: apply_changes(),
            )
            show_ui_check.stateChanged.connect(lambda _state: apply_changes())
            ui_color_edit.editingFinished.connect(apply_changes)
            absorption_ratio_spin.editingFinished.connect(apply_changes)
            infinite_absorption_check.stateChanged.connect(
                lambda _state: apply_changes(),
            )
            settlement_priority_spin.editingFinished.connect(apply_changes)
            layer_based_effect_check.stateChanged.connect(
                lambda _state: apply_changes(),
            )
            nullify_overflow_damage_check.stateChanged.connect(
                lambda _state: apply_changes(),
            )
            ignore_shield_amplification_check.stateChanged.connect(
                lambda _state: apply_changes(),
            )
            absorbable_damage_types_edit.editingFinished.connect(apply_changes)
            attack_tags_edit.editingFinished.connect(apply_changes)
            description_edit.textChanged.connect(lambda: apply_changes())

            form_layout.addRow("配置ID", QtWidgets.QLabel(item_id))
            form_layout.addRow("护盾名称", name_edit)
            form_layout.addRow("护盾值", shield_value_spin)
            form_layout.addRow("承伤比例(0-1)", damage_ratio_spin)
            form_layout.addRow("", remove_when_depleted_check)
            form_layout.addRow("", show_ui_check)
            form_layout.addRow("UI颜色", ui_color_edit)
            form_layout.addRow("吸收比例", absorption_ratio_spin)
            form_layout.addRow("", infinite_absorption_check)
            form_layout.addRow("结算优先级", settlement_priority_spin)
            form_layout.addRow("", layer_based_effect_check)
            form_layout.addRow("", nullify_overflow_damage_check)
            form_layout.addRow("", ignore_shield_amplification_check)
            form_layout.addRow("可吸收伤害类型", absorbable_damage_types_edit)
            form_layout.addRow("攻击标签", attack_tags_edit)
            form_layout.addRow("描述", description_edit)

        display_name_value = str(shield_payload.get("shield_name", "")).strip()
        display_name = display_name_value or item_id

        title = f"护盾详情：{display_name}"
        description = "在右侧直接修改护盾名称、护盾值、承伤比例、UI 配置、吸收比例、各种开关、可吸收伤害类型与攻击标签等属性，修改会立即保存到当前视图。"
        return title, description, build_form


