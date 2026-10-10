from __future__ import annotations

from .management_sections_base import *


class PresetPointSection(BaseManagementSection):
    """预设点管理 Section（对应 `ManagementData.preset_points`）。"""

    section_key = "preset_point"
    tree_label = "📍 预设点"
    type_name = "预设点"

    def iter_rows(self, package: ManagementPackage) -> Iterable[ManagementRowData]:
        preset_points = package.management.preset_points
        if not isinstance(preset_points, dict):
            return []

        reference_stats = self._build_reference_stats(package)

        for point_id, raw_point_data in preset_points.items():
            if not isinstance(raw_point_data, dict):
                continue
            point_data: Dict[str, Any] = raw_point_data

            point_name = str(point_data.get("point_name", "")).strip()
            point_type_key = str(point_data.get("point_type", "spawn"))

            position_value = point_data.get("position", [0.0, 0.0, 0.0])
            pos_x, pos_y, pos_z = self._normalize_position(position_value)
            position_text = f"({pos_x:.1f}, {pos_y:.1f}, {pos_z:.1f})"

            index_value = point_data.get("point_index")
            index_text = str(index_value) if index_value is not None else ""

            stats_entry = reference_stats.get(point_id, {})
            spawn_count = int(stats_entry.get("spawn_count", 0))
            respawn_count = int(stats_entry.get("respawn_count", 0))

            if index_text:
                attr2_text = f"类型: {point_type_key} | 索引: {index_text}"
            else:
                attr2_text = f"类型: {point_type_key}"

            reference_parts: list[str] = []
            if spawn_count:
                reference_parts.append(f"出生点引用: {spawn_count}")
            if respawn_count:
                reference_parts.append(f"复苏点引用: {respawn_count}")
            attr3_text = " | ".join(reference_parts)

            yield ManagementRowData(
                name=point_name or point_id,
                type_name=self.type_name,
                attr1=f"位置: {position_text}",
                attr2=attr2_text,
                attr3=attr3_text,
                description=str(point_data.get("description", "")),
                last_modified=self._get_last_modified_text(point_data),
                user_data=(self.section_key, point_id),
            )

    @staticmethod
    def _build_reference_stats(package: ManagementPackage) -> Dict[str, Dict[str, int]]:
        """统计每个预设点被出生点与复苏点引用的次数。

        - 出生点与复苏点数据统一来源于 `management.level_settings`。
        - 返回结构：{preset_point_id: {"spawn_count": N, "respawn_count": M}}。
        """
        stats: Dict[str, Dict[str, int]] = {}

        level_settings_payload = package.management.level_settings
        if not isinstance(level_settings_payload, dict) or not level_settings_payload:
            return stats

        settings = LevelSettingsConfig.deserialize(level_settings_payload)

        for spawn_point in settings.spawn_points:
            preset_point_id = spawn_point.preset_point_id.strip()
            if not preset_point_id:
                continue
            entry = stats.setdefault(
                preset_point_id,
                {"spawn_count": 0, "respawn_count": 0},
            )
            entry["spawn_count"] = int(entry.get("spawn_count", 0)) + 1

        for respawn_point in settings.respawn_points:
            preset_point_id = respawn_point.preset_point_id.strip()
            if not preset_point_id:
                continue
            entry = stats.setdefault(
                preset_point_id,
                {"spawn_count": 0, "respawn_count": 0},
            )
            entry["respawn_count"] = int(entry.get("respawn_count", 0)) + 1

        return stats

    @staticmethod
    def _normalize_position(raw_position: Any) -> Tuple[float, float, float]:
        if not isinstance(raw_position, (list, tuple)):
            return 0.0, 0.0, 0.0
        extended = list(raw_position) + [0.0, 0.0, 0.0]
        return float(extended[0]), float(extended[1]), float(extended[2])

    def _build_form(
        self,
        parent_widget: QtWidgets.QWidget,
        *,
        title: str,
        initial: Optional[Dict[str, Any]] = None,
    ) -> Optional[Dict[str, Any]]:
        """构建“编辑预设点”表单。

        字段包含：名称、索引、类型、基础开关（锁定变换 / 是否在场景中显示）、位置与旋转向量以及单位标签列表。
        索引为可选字段，但若填写则必须为纯数字字符串。
        """
        initial_values: Dict[str, Any] = {
            "point_name": "",
            "point_type": "spawn",
            "pos_x": 0.0,
            "pos_y": 0.0,
            "pos_z": 0.0,
            "rot_x": 0.0,
            "rot_y": 0.0,
            "rot_z": 0.0,
            "point_index": None,
            "lock_transform": False,
            "visible_in_scene": True,
            "unit_tags_text": "",
        }
        if initial:
            initial_values.update(initial)

        builder = FormDialogBuilder(parent_widget, title, fixed_size=(480, 520))

        name_edit = builder.add_line_edit(
            "预设点名*:",
            str(initial_values.get("point_name", "")),
            "请输入预设点名称",
        )
        index_raw = initial_values.get("point_index")
        index_text = str(index_raw) if index_raw is not None else ""
        index_edit = builder.add_line_edit(
            "索引:",
            index_text,
            "可选，仅输入数字，例如 1073741825",
        )
        type_combo = builder.add_combo_box(
            "类型:",
            ["spawn", "teleport", "camera", "custom"],
            str(initial_values.get("point_type", "spawn")),
        )
        lock_transform_check_box = builder.add_check_box(
            "锁定变换",
            bool(initial_values.get("lock_transform", False)),
        )
        visible_in_scene_check_box = builder.add_check_box(
            "在场景中显示",
            bool(initial_values.get("visible_in_scene", True)),
        )

        from typing import Sequence

        position_sequence: Sequence[float] = [
            float(initial_values.get("pos_x", 0.0)),
            float(initial_values.get("pos_y", 0.0)),
            float(initial_values.get("pos_z", 0.0)),
        ]
        pos_x_editor, pos_y_editor, pos_z_editor = builder.add_vector3_editor(
            "位置",
            position_sequence,
            minimum=-99999.0,
            maximum=99999.0,
            decimals=2,
        )

        rotation_sequence: Sequence[float] = [
            float(initial_values.get("rot_x", 0.0)),
            float(initial_values.get("rot_y", 0.0)),
            float(initial_values.get("rot_z", 0.0)),
        ]
        rot_x_editor, rot_y_editor, rot_z_editor = builder.add_vector3_editor(
            "旋转",
            rotation_sequence,
            minimum=-360.0,
            maximum=360.0,
            decimals=1,
        )

        unit_tags_text = str(initial_values.get("unit_tags_text", ""))
        unit_tags_edit = builder.add_plain_text_edit(
            "单位标签:",
            unit_tags_text,
            min_height=80,
            max_height=160,
        )
        unit_tags_edit.setPlaceholderText("每行一个单位标签ID，可留空")

        def _validate(dialog_self: QtWidgets.QDialog) -> bool:
            from app.ui.foundation import dialog_utils

            if not name_edit.text().strip():
                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "请输入预设点名称",
                )
                return False

            index_text_value = index_edit.text().strip()
            if index_text_value and not index_text_value.isdigit():
                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "索引只能包含数字（可留空）。",
                )
                return False
            return True

        builder.dialog.validate = types.MethodType(_validate, builder.dialog)

        if not builder.exec():
            return None

        index_text_value = index_edit.text().strip()
        if index_text_value:
            point_index_value: Optional[int] = int(index_text_value)
        else:
            point_index_value = None

        unit_tags_text_after = unit_tags_edit.toPlainText().strip()
        unit_tags_list: list[str] = [
            line.strip()
            for line in unit_tags_text_after.splitlines()
            if line.strip()
        ]

        return {
            "point_name": name_edit.text().strip(),
            "point_type": str(type_combo.currentText()),
            "pos_x": float(pos_x_editor.value()),
            "pos_y": float(pos_y_editor.value()),
            "pos_z": float(pos_z_editor.value()),
            "rot_x": float(rot_x_editor.value()),
            "rot_y": float(rot_y_editor.value()),
            "rot_z": float(rot_z_editor.value()),
            "point_index": point_index_value,
            "lock_transform": bool(lock_transform_check_box.isChecked()),
            "visible_in_scene": bool(visible_in_scene_check_box.isChecked()),
            "unit_tags": unit_tags_list,
        }

    def create_item(
        self,
        parent_widget: QtWidgets.QWidget,
        package: ManagementPackage,
    ) -> bool:
        _ = parent_widget

        preset_points = package.management.preset_points
        if not isinstance(preset_points, dict):
            preset_points = {}
            package.management.preset_points = preset_points  # type: ignore[assignment]

        point_id = generate_prefixed_id("point")
        default_name = f"预设点{len(preset_points) + 1}"

        payload: Dict[str, Any] = {
            "point_id": point_id,
            "point_name": default_name,
            "position": [0.0, 0.0, 0.0],
            "rotation": [0.0, 0.0, 0.0],
            "point_type": "spawn",
            "tags": [],
            "description": "",
            "metadata": {},
            "lock_transform": False,
            "visible_in_scene": True,
        }
        preset_points[point_id] = payload
        return True

    def edit_item(
        self,
        parent_widget: QtWidgets.QWidget,
        package: ManagementPackage,
        item_id: str,
    ) -> bool:
        preset_points = package.management.preset_points
        if not isinstance(preset_points, dict):
            return False

        point_data_any = preset_points.get(item_id)
        if not isinstance(point_data_any, dict):
            return False
        point_data: Dict[str, Any] = point_data_any

        pos_x, pos_y, pos_z = self._normalize_position(
            point_data.get("position", [0.0, 0.0, 0.0])
        )
        rot_x, rot_y, rot_z = self._normalize_position(
            point_data.get("rotation", [0.0, 0.0, 0.0])
        )

        tags_value = point_data.get("tags", [])
        if isinstance(tags_value, list):
            unit_tags_text = "\n".join(str(tag) for tag in tags_value if str(tag))
        else:
            unit_tags_text = ""

        initial_values = {
            "point_name": point_data.get("point_name", ""),
            "point_type": point_data.get("point_type", "spawn"),
            "pos_x": pos_x,
            "pos_y": pos_y,
            "pos_z": pos_z,
            "rot_x": rot_x,
            "rot_y": rot_y,
            "rot_z": rot_z,
            "point_index": point_data.get("point_index"),
            "lock_transform": bool(point_data.get("lock_transform", False)),
            "visible_in_scene": bool(point_data.get("visible_in_scene", True)),
            "unit_tags_text": unit_tags_text,
        }
        dialog_data = self._build_form(
            parent_widget,
            title="编辑预设点",
            initial=initial_values,
        )
        if dialog_data is None:
            return False

        point_data["point_name"] = dialog_data["point_name"]
        point_data["point_type"] = dialog_data["point_type"]
        point_data["position"] = [
            float(dialog_data["pos_x"]),
            float(dialog_data["pos_y"]),
            float(dialog_data["pos_z"]),
        ]
        point_data["rotation"] = [
            float(dialog_data["rot_x"]),
            float(dialog_data["rot_y"]),
            float(dialog_data["rot_z"]),
        ]

        index_value = dialog_data.get("point_index")
        if index_value is None:
            point_data.pop("point_index", None)
        else:
            point_data["point_index"] = int(index_value)

        point_data["lock_transform"] = bool(dialog_data.get("lock_transform", False))
        point_data["visible_in_scene"] = bool(
            dialog_data.get("visible_in_scene", True)
        )

        unit_tags_list = dialog_data.get("unit_tags", [])
        if isinstance(unit_tags_list, list):
            point_data["tags"] = [str(tag) for tag in unit_tags_list if str(tag)]
        else:
            point_data["tags"] = []
        return True

    def delete_item(self, package: ManagementPackage, item_id: str) -> bool:
        if item_id not in package.management.preset_points:
            return False
        package.management.preset_points.pop(item_id, None)
        return True

    def build_inline_edit_form(
        self,
        *,
        parent: QtWidgets.QWidget,
        package: ManagementPackage,
        item_id: str,
        on_changed: Callable[[], None],
    ) -> Optional[Tuple[str, str, Callable[[QtWidgets.QFormLayout], None]]]:
        """在右侧属性面板中就地编辑预设点的基础字段。

        字段包含：名称、索引、类型、位置与旋转向量以及单位标签列表和基础开关。
        """
        preset_points = package.management.preset_points
        if not isinstance(preset_points, dict):
            return None

        point_data_any = preset_points.get(item_id)
        if not isinstance(point_data_any, dict):
            return None
        point_data: Dict[str, Any] = point_data_any

        pos_x_value, pos_y_value, pos_z_value = self._normalize_position(
            point_data.get("position", [0.0, 0.0, 0.0]),
        )
        rot_x_value, rot_y_value, rot_z_value = self._normalize_position(
            point_data.get("rotation", [0.0, 0.0, 0.0]),
        )

        tags_value = point_data.get("tags", [])
        if isinstance(tags_value, list):
            unit_tags_text = "\n".join(str(tag) for tag in tags_value if str(tag))
        else:
            unit_tags_text = ""

        def build_form(form_layout: QtWidgets.QFormLayout) -> None:
            point_name_value = str(point_data.get("point_name", ""))
            point_type_value = str(point_data.get("point_type", "spawn"))
            point_index_value = point_data.get("point_index")
            index_text = str(point_index_value) if point_index_value is not None else ""
            lock_transform_value = bool(point_data.get("lock_transform", False))
            visible_in_scene_value = bool(point_data.get("visible_in_scene", True))

            id_label = QtWidgets.QLabel(item_id)

            name_edit = QtWidgets.QLineEdit(point_name_value)
            index_edit = QtWidgets.QLineEdit(index_text)
            index_edit.setPlaceholderText("可选，仅输入数字，例如 1073741825")

            type_combo = QtWidgets.QComboBox()
            type_combo.addItems(["spawn", "teleport", "camera", "custom"])
            type_combo.setCurrentText(point_type_value or "spawn")

            lock_transform_check_box = QtWidgets.QCheckBox("锁定变换")
            lock_transform_check_box.setChecked(lock_transform_value)
            visible_in_scene_check_box = QtWidgets.QCheckBox("在场景中显示")
            visible_in_scene_check_box.setChecked(visible_in_scene_value)

            pos_x_editor = QtWidgets.QDoubleSpinBox()
            pos_y_editor = QtWidgets.QDoubleSpinBox()
            pos_z_editor = QtWidgets.QDoubleSpinBox()
            for editor in (pos_x_editor, pos_y_editor, pos_z_editor):
                editor.setRange(-99999.0, 99999.0)
                editor.setDecimals(2)
            pos_x_editor.setValue(pos_x_value)
            pos_y_editor.setValue(pos_y_value)
            pos_z_editor.setValue(pos_z_value)

            rot_x_editor = QtWidgets.QDoubleSpinBox()
            rot_y_editor = QtWidgets.QDoubleSpinBox()
            rot_z_editor = QtWidgets.QDoubleSpinBox()
            for editor in (rot_x_editor, rot_y_editor, rot_z_editor):
                editor.setRange(-360.0, 360.0)
                editor.setDecimals(1)
            rot_x_editor.setValue(rot_x_value)
            rot_y_editor.setValue(rot_y_value)
            rot_z_editor.setValue(rot_z_value)

            unit_tags_edit = QtWidgets.QTextEdit()
            unit_tags_edit.setPlainText(unit_tags_text)
            unit_tags_edit.setMinimumHeight(80)
            unit_tags_edit.setMaximumHeight(180)
            unit_tags_edit.setPlaceholderText("每行一个单位标签ID，可留空")

            def apply_changes() -> None:
                normalized_name = name_edit.text().strip()
                if normalized_name:
                    point_data["point_name"] = normalized_name
                else:
                    point_data["point_name"] = item_id

                point_data["point_type"] = str(type_combo.currentText())

                index_text_value = index_edit.text().strip()
                if index_text_value:
                    if index_text_value.isdigit():
                        point_data["point_index"] = int(index_text_value)
                else:
                    point_data.pop("point_index", None)

                point_data["lock_transform"] = bool(lock_transform_check_box.isChecked())
                point_data["visible_in_scene"] = bool(
                    visible_in_scene_check_box.isChecked(),
                )

                point_data["position"] = [
                    float(pos_x_editor.value()),
                    float(pos_y_editor.value()),
                    float(pos_z_editor.value()),
                ]
                point_data["rotation"] = [
                    float(rot_x_editor.value()),
                    float(rot_y_editor.value()),
                    float(rot_z_editor.value()),
                ]

                unit_tags_text_after = unit_tags_edit.toPlainText().strip()
                unit_tags_list: list[str] = [
                    line.strip()
                    for line in unit_tags_text_after.splitlines()
                    if line.strip()
                ]
                point_data["tags"] = unit_tags_list

                on_changed()

            name_edit.editingFinished.connect(apply_changes)
            index_edit.editingFinished.connect(apply_changes)
            type_combo.currentIndexChanged.connect(lambda _index: apply_changes())
            lock_transform_check_box.stateChanged.connect(lambda _state: apply_changes())
            visible_in_scene_check_box.stateChanged.connect(
                lambda _state: apply_changes(),
            )
            pos_x_editor.editingFinished.connect(apply_changes)
            pos_y_editor.editingFinished.connect(apply_changes)
            pos_z_editor.editingFinished.connect(apply_changes)
            rot_x_editor.editingFinished.connect(apply_changes)
            rot_y_editor.editingFinished.connect(apply_changes)
            rot_z_editor.editingFinished.connect(apply_changes)
            unit_tags_edit.textChanged.connect(lambda: apply_changes())

            type_and_flags_container = QtWidgets.QWidget()
            type_and_flags_layout = QtWidgets.QHBoxLayout(type_and_flags_container)
            type_and_flags_layout.setContentsMargins(0, 0, 0, 0)
            type_and_flags_layout.setSpacing(8)
            type_and_flags_layout.addWidget(type_combo)
            type_and_flags_layout.addWidget(lock_transform_check_box)
            type_and_flags_layout.addWidget(visible_in_scene_check_box)

            pos_container = QtWidgets.QWidget()
            pos_layout = QtWidgets.QHBoxLayout(pos_container)
            pos_layout.setContentsMargins(0, 0, 0, 0)
            pos_layout.setSpacing(4)
            pos_layout.addWidget(pos_x_editor)
            pos_layout.addWidget(pos_y_editor)
            pos_layout.addWidget(pos_z_editor)

            rot_container = QtWidgets.QWidget()
            rot_layout = QtWidgets.QHBoxLayout(rot_container)
            rot_layout.setContentsMargins(0, 0, 0, 0)
            rot_layout.setSpacing(4)
            rot_layout.addWidget(rot_x_editor)
            rot_layout.addWidget(rot_y_editor)
            rot_layout.addWidget(rot_z_editor)

            form_layout.addRow("预设点ID", id_label)
            form_layout.addRow("预设点名", name_edit)
            form_layout.addRow("索引", index_edit)
            form_layout.addRow("类型与开关", type_and_flags_container)
            form_layout.addRow("位置", pos_container)
            form_layout.addRow("旋转", rot_container)
            form_layout.addRow("单位标签", unit_tags_edit)

        display_name_value = str(point_data.get("point_name", "")).strip()
        display_name = display_name_value or item_id

        title = f"预设点详情：{display_name}"
        description = "在右侧直接编辑预设点名称、类型、索引、位置、旋转与单位标签，修改会立即保存到当前视图。"
        return title, description, build_form
