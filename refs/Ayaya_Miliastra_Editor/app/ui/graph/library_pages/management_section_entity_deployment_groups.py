from __future__ import annotations

from .management_sections_base import *
from app.ui.forms.schema_dialog import FormDialogBuilder


class EntityDeploymentGroupsSection(BaseManagementSection):
    """实体布设组管理 Section（对应 `ManagementData.entity_deployment_groups`）。"""

    section_key = "entity_deployment_groups"
    tree_label = "📦 实体布设组管理"
    type_name = "实体布设组"

    def iter_rows(self, package: ManagementPackage) -> Iterable[ManagementRowData]:
        groups_mapping = package.management.entity_deployment_groups
        if not isinstance(groups_mapping, dict):
            return

        for group_identifier, group_payload in groups_mapping.items():
            if not isinstance(group_payload, dict):
                continue

            group_name_text = str(group_payload.get("group_name", ""))
            spawn_mode_value = str(group_payload.get("spawn_mode", "all_at_once"))
            if spawn_mode_value == "all_at_once":
                spawn_mode_label = "一次性生成"
            elif spawn_mode_value == "sequential":
                spawn_mode_label = "顺序生成"
            elif spawn_mode_value == "random":
                spawn_mode_label = "随机生成"
            else:
                spawn_mode_label = spawn_mode_value

            initial_create_enabled = bool(group_payload.get("initial_create", True))
            entity_instances_value = group_payload.get("entity_instances", [])
            if isinstance(entity_instances_value, list):
                entity_instance_count = len(entity_instances_value)
            else:
                entity_instance_count = 0

            description_text = str(group_payload.get("description", ""))

            yield ManagementRowData(
                name=group_name_text or str(group_identifier),
                type_name=self.type_name,
                attr1=f"生成模式: {spawn_mode_label}",
                attr2=f"初始创建: {'是' if initial_create_enabled else '否'}",
                attr3=f"实体数量: {entity_instance_count}",
                description=description_text,
                last_modified=self._get_last_modified_text(group_payload),
                user_data=(self.section_key, str(group_identifier)),
            )

    def _build_form(
        self,
        parent_widget: QtWidgets.QWidget,
        *,
        title: str,
        initial: Optional[Dict[str, Any]] = None,
        existing_ids: Optional[Iterable[str]] = None,
        is_edit: bool = False,
    ) -> Optional[Dict[str, Any]]:
        initial_values: Dict[str, Any] = {
            "group_id": "",
            "group_name": "",
            "spawn_mode": "all_at_once",
            "initial_create": True,
            "spawn_delay": 0.0,
            "respawn_enabled": False,
            "respawn_interval": 30.0,
            "entity_instances_text": "",
            "description": "",
        }
        if initial:
            initial_values.update(initial)

        existing_identifier_set: set[str] = set()
        if existing_ids is not None:
            existing_identifier_set = {
                str(identifier)
                for identifier in existing_ids
                if isinstance(identifier, str)
            }

        builder = FormDialogBuilder(parent_widget, title, fixed_size=(480, 440))

        if is_edit:
            group_identifier_line_edit = builder.add_line_edit(
                "索引:",
                str(initial_values.get("group_id", "")),
                read_only=True,
            )
        else:
            group_identifier_line_edit = builder.add_line_edit(
                "索引*:",
                str(initial_values.get("group_id", "")),
                "请输入唯一的布设组索引",
            )

        group_name_line_edit = builder.add_line_edit(
            "布设组名称*:",
            str(initial_values.get("group_name", "")),
            "请输入布设组名称",
        )
        spawn_mode_combo_box = builder.add_combo_box(
            "生成模式:",
            ["all_at_once", "sequential", "random"],
            str(initial_values.get("spawn_mode", "all_at_once")),
        )
        initial_create_check_box = builder.add_check_box(
            "初始创建",
            bool(initial_values.get("initial_create", True)),
        )

        spawn_delay_spin_box = builder.add_double_spin_box(
            "生成延迟(秒):",
            minimum=0.0,
            maximum=3600.0,
            value=float(initial_values.get("spawn_delay", 0.0)),
            decimals=2,
            single_step=0.5,
            suffix=" 秒",
        )

        respawn_enabled_check_box = builder.add_check_box(
            "启用重生",
            bool(initial_values.get("respawn_enabled", False)),
        )
        respawn_interval_spin_box = builder.add_double_spin_box(
            "重生间隔(秒):",
            minimum=1.0,
            maximum=3600.0,
            value=float(initial_values.get("respawn_interval", 30.0)),
            decimals=2,
            single_step=0.5,
            suffix=" 秒",
        )

        entity_instances_text_edit = builder.add_plain_text_edit(
            "实体列表:",
            str(initial_values.get("entity_instances_text", "")),
            min_height=100,
            max_height=150,
        )
        entity_instances_text_edit.setPlaceholderText("每行一个实体ID")

        description_text_edit = builder.add_plain_text_edit(
            "描述:",
            str(initial_values.get("description", "")),
            min_height=80,
            max_height=160,
        )

        def _validate(dialog_self: QtWidgets.QDialog) -> bool:
            from app.ui.foundation import dialog_utils

            group_identifier_value = group_identifier_line_edit.text().strip()
            if not group_identifier_value:
                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "请输入布设组索引",
                )
                return False
            if not is_edit and group_identifier_value in existing_identifier_set:
                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "该布设组索引已存在",
                )
                return False
            if not group_name_line_edit.text().strip():
                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "请输入布设组名称",
                )
                return False
            return True

        builder.dialog.validate = types.MethodType(_validate, builder.dialog)

        if not builder.exec():
            return None

        group_identifier_value = group_identifier_line_edit.text().strip()
        entity_instances_text = entity_instances_text_edit.toPlainText().strip()
        entity_instances_list = [
            line.strip()
            for line in entity_instances_text.splitlines()
            if line.strip()
        ]

        return {
            "group_id": group_identifier_value,
            "group_name": group_name_line_edit.text().strip(),
            "spawn_mode": str(spawn_mode_combo_box.currentText()),
            "initial_create": bool(initial_create_check_box.isChecked()),
            "spawn_delay": float(spawn_delay_spin_box.value()),
            "respawn_enabled": bool(respawn_enabled_check_box.isChecked()),
            "respawn_interval": float(respawn_interval_spin_box.value()),
            "entity_instances": entity_instances_list,
            "description": description_text_edit.toPlainText(),
        }

    def create_item(
        self,
        parent_widget: QtWidgets.QWidget,
        package: ManagementPackage,
    ) -> bool:
        _ = parent_widget

        groups_mapping = package.management.entity_deployment_groups
        if not isinstance(groups_mapping, dict):
            groups_mapping = {}
            package.management.entity_deployment_groups = groups_mapping

        existing_ids = set(groups_mapping.keys())
        index = len(existing_ids) + 1
        group_id_value = f"group_{index}"
        while group_id_value in existing_ids:
            index += 1
            group_id_value = f"group_{index}"

        group_config = EntityDeploymentGroupConfig(
            group_id=group_id_value,
            group_name=f"实体布设组{index}",
            entity_instances=[],
            spawn_mode="all_at_once",
            spawn_delay=0.0,
            respawn_enabled=False,
            respawn_interval=30.0,
            description="",
        )
        group_payload = group_config.serialize()
        group_payload["initial_create"] = True
        groups_mapping[group_config.group_id] = group_payload
        return True

    def edit_item(
        self,
        parent_widget: QtWidgets.QWidget,
        package: ManagementPackage,
        item_id: str,
    ) -> bool:
        groups_mapping = package.management.entity_deployment_groups
        if not isinstance(groups_mapping, dict):
            return False

        group_payload = groups_mapping.get(item_id)
        if not isinstance(group_payload, dict):
            return False

        entity_instances_value = group_payload.get("entity_instances", [])
        if isinstance(entity_instances_value, list):
            entity_instances_text = "\n".join(
                str(instance_id) for instance_id in entity_instances_value
            )
        else:
            entity_instances_text = ""

        initial_values = {
            "group_id": item_id,
            "group_name": group_payload.get("group_name", ""),
            "spawn_mode": group_payload.get("spawn_mode", "all_at_once"),
            "initial_create": bool(group_payload.get("initial_create", True)),
            "spawn_delay": group_payload.get("spawn_delay", 0.0),
            "respawn_enabled": bool(group_payload.get("respawn_enabled", False)),
            "respawn_interval": group_payload.get("respawn_interval", 30.0),
            "entity_instances_text": entity_instances_text,
            "description": group_payload.get("description", ""),
        }

        dialog_data = self._build_form(
            parent_widget,
            title="编辑实体布设组",
            initial=initial_values,
            existing_ids=None,
            is_edit=True,
        )
        if dialog_data is None:
            return False

        group_payload["group_name"] = dialog_data["group_name"]
        group_payload["spawn_mode"] = dialog_data["spawn_mode"]
        group_payload["initial_create"] = dialog_data["initial_create"]
        group_payload["spawn_delay"] = dialog_data["spawn_delay"]
        group_payload["respawn_enabled"] = dialog_data["respawn_enabled"]
        group_payload["respawn_interval"] = dialog_data["respawn_interval"]
        group_payload["entity_instances"] = list(dialog_data["entity_instances"])
        group_payload["description"] = dialog_data["description"]
        return True

    def delete_item(self, package: ManagementPackage, item_id: str) -> bool:
        groups_mapping = package.management.entity_deployment_groups
        if not isinstance(groups_mapping, dict):
            return False
        if item_id not in groups_mapping:
            return False
        del groups_mapping[item_id]
        return True

    def build_inline_edit_form(
        self,
        *,
        parent: QtWidgets.QWidget,
        package: ManagementPackage,
        item_id: str,
        on_changed: Callable[[], None],
    ) -> Optional[Tuple[str, str, Callable[[QtWidgets.QFormLayout], None]]]:
        """在右侧属性面板中编辑实体布设组的基础信息（名称与描述）。"""
        groups_mapping = getattr(package.management, "entity_deployment_groups", None)
        if not isinstance(groups_mapping, dict):
            return None
        group_payload_any = groups_mapping.get(item_id)
        if not isinstance(group_payload_any, dict):
            return None

        group_payload = group_payload_any

        def build_form(form_layout: QtWidgets.QFormLayout) -> None:
            group_name_value = str(group_payload.get("group_name", ""))
            description_value = str(group_payload.get("description", ""))

            name_edit = QtWidgets.QLineEdit(group_name_value)
            description_edit = QtWidgets.QTextEdit()
            description_edit.setPlainText(description_value)
            description_edit.setMinimumHeight(80)
            description_edit.setMaximumHeight(200)

            def apply_changes() -> None:
                normalized_name = name_edit.text().strip()
                if normalized_name:
                    group_payload["group_name"] = normalized_name
                else:
                    group_payload["group_name"] = item_id
                group_payload["description"] = description_edit.toPlainText().strip()
                on_changed()

            name_edit.editingFinished.connect(apply_changes)
            description_edit.textChanged.connect(lambda: apply_changes())

            form_layout.addRow("布设组索引", QtWidgets.QLabel(item_id))
            form_layout.addRow("布设组名称", name_edit)
            form_layout.addRow("描述", description_edit)

        display_name_value = str(group_payload.get("group_name", "")).strip()
        display_name = display_name_value or item_id

        title = f"实体布设组详情：{display_name}"
        description = "在右侧直接修改实体布设组名称与描述，实体列表等高级参数仍通过弹窗维护。"
        return title, description, build_form



