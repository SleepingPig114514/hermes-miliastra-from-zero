from __future__ import annotations

from .management_sections_base import *


class PathSection(BaseManagementSection):
    """路径管理 Section（对应 `ManagementData.paths`）。"""

    section_key = "paths"
    tree_label = "🛤️ 路径管理"
    type_name = "路径"

    _float_pattern = re.compile(r"^-?\d+(?:\.\d+)?$")
    _path_types: Sequence[str] = ("linear", "loop", "bounce")

    def iter_rows(self, package: ManagementPackage) -> Iterable[ManagementRowData]:
        for path_id, path_payload in package.management.paths.items():
            path_name_value = str(path_payload.get("path_name", ""))
            path_type_value = str(path_payload.get("path_type", "linear"))
            speed_value = path_payload.get("speed", 5.0)
            waypoint_count_text = self._get_waypoint_count_text(path_payload)
            yield ManagementRowData(
                name=path_name_value or path_id,
                type_name=self.type_name,
                attr1=f"类型: {path_type_value}",
                attr2=f"路径点数: {waypoint_count_text}",
                attr3=f"速度: {speed_value}",
                description=str(path_payload.get("description", "")),
                last_modified=self._get_last_modified_text(path_payload),
                user_data=(self.section_key, path_id),
            )

    @staticmethod
    def _get_waypoint_count_text(path_payload: Dict[str, Any]) -> str:
        waypoints_value = path_payload.get("waypoints")
        if isinstance(waypoints_value, list):
            return str(len(waypoints_value))
        return "0"

    def _build_form(
        self,
        parent_widget: QtWidgets.QWidget,
        *,
        title: str,
        is_edit: bool,
        existing_ids: Sequence[str],
        initial: Optional[Dict[str, Any]] = None,
    ) -> Optional[Dict[str, Any]]:
        initial_values: Dict[str, Any] = {
            "path_id": "",
            "path_name": "",
            "path_type": "linear",
            "speed": 5.0,
            "smooth_curve": False,
            "waypoints_text": "",
            "description": "",
        }
        if initial:
            initial_values.update(initial)

        builder = FormDialogBuilder(parent_widget, title, fixed_size=(480, 560))

        path_id_widget = builder.add_line_edit(
            "路径ID:",
            str(initial_values.get("path_id", "")),
            "唯一 ID，例如 path_main",
            read_only=is_edit,
        )
        path_name_widget = builder.add_line_edit(
            "路径名称:",
            str(initial_values.get("path_name", "")),
            "路径显示名称",
        )
        path_type_widget = builder.add_combo_box(
            "路径类型:",
            list(self._path_types),
            current_text=str(initial_values.get("path_type", "linear")),
        )
        speed_widget = builder.add_double_spin_box(
            "移动速度:",
            minimum=0.1,
            maximum=100.0,
            value=float(initial_values.get("speed", 5.0)),
            decimals=2,
            single_step=0.5,
            suffix=" u/s",
        )
        smooth_curve_widget = builder.add_check_box(
            "平滑曲线",
            bool(initial_values.get("smooth_curve", False)),
        )
        waypoints_widget = builder.add_plain_text_edit(
            "路径点列表（x,y,z，每行一条）",
            str(initial_values.get("waypoints_text", "")),
            min_height=140,
            max_height=220,
        )
        description_widget = builder.add_plain_text_edit(
            "描述",
            str(initial_values.get("description", "")),
            min_height=80,
            max_height=200,
        )

        def _validate(dialog_self: QtWidgets.QDialog) -> bool:
            from app.ui.foundation import dialog_utils

            path_id_text = path_id_widget.text().strip()
            if not path_id_text:
                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "路径 ID 不能为空",
                )
                return False
            if (not is_edit) and path_id_text in existing_ids:
                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "该路径 ID 已存在",
                )
                return False
            return True

        builder.dialog.validate = types.MethodType(_validate, builder.dialog)

        if not builder.exec():
            return None

        return {
            "path_id": path_id_widget.text().strip(),
            "path_name": path_name_widget.text().strip(),
            "path_type": str(path_type_widget.currentText()),
            "speed": float(speed_widget.value()),
            "smooth_curve": bool(smooth_curve_widget.isChecked()),
            "waypoints_text": waypoints_widget.toPlainText().strip(),
            "description": description_widget.toPlainText().strip(),
        }

    def _parse_waypoints_text(self, text_value: str) -> List[List[float]]:
        if not isinstance(text_value, str):
            return []
        stripped_text = text_value.strip()
        if not stripped_text:
            return []
        waypoints_result: List[List[float]] = []
        for line_text in stripped_text.splitlines():
            parts = [segment.strip() for segment in line_text.split(",")]
            if len(parts) != 3:
                continue
            if not all(self._float_pattern.match(part) for part in parts):
                continue
            waypoint_components = [float(parts[0]), float(parts[1]), float(parts[2])]
            waypoints_result.append(waypoint_components)
        return waypoints_result

    @staticmethod
    def _format_waypoints_text(raw_value: Any) -> str:
        if not isinstance(raw_value, list):
            return ""
        segments: List[str] = []
        for item in raw_value:
            if not isinstance(item, (list, tuple)) or len(item) != 3:
                continue
            segments.append(f"{item[0]},{item[1]},{item[2]}")
        return "\n".join(segments)

    def _merge_form_into_payload(
        self,
        path_id: str,
        form_data: Dict[str, Any],
        target_payload: Dict[str, Any],
    ) -> Dict[str, Any]:
        payload = target_payload
        name_value = str(form_data.get("path_name") or "").strip()
        if not name_value:
            name_value = f"路径_{path_id}"
        payload["path_name"] = name_value
        payload["path_type"] = form_data.get("path_type", "linear")
        payload["speed"] = float(form_data.get("speed", 5.0))
        payload["smooth_curve"] = bool(form_data.get("smooth_curve", False))
        payload["waypoints"] = self._parse_waypoints_text(str(form_data.get("waypoints_text", "")))
        payload["description"] = str(form_data.get("description", "")).strip()
        return payload

    def create_item(
        self,
        parent_widget: QtWidgets.QWidget,
        package: ManagementPackage,
    ) -> bool:
        _ = parent_widget

        paths_mapping = package.management.paths
        if not isinstance(paths_mapping, dict):
            paths_mapping = {}
            package.management.paths = paths_mapping

        existing_ids = set(paths_mapping.keys())
        path_id_value = generate_prefixed_id("path")
        while path_id_value in existing_ids:
            path_id_value = generate_prefixed_id("path")

        payload: Dict[str, Any] = {
            "path_id": path_id_value,
            "path_name": f"路径_{path_id_value}",
            "waypoints": [],
            "path_type": "linear",
            "speed": 5.0,
            "smooth_curve": False,
            "description": "",
            "metadata": {},
        }
        paths_mapping[path_id_value] = payload
        return True

    def edit_item(
        self,
        parent_widget: QtWidgets.QWidget,
        package: ManagementPackage,
        item_id: str,
    ) -> bool:
        path_payload = package.management.paths.get(item_id)
        if path_payload is None:
            return False

        initial_values = {
            "path_id": item_id,
            "path_name": path_payload.get("path_name", ""),
            "path_type": path_payload.get("path_type", "linear"),
            "speed": path_payload.get("speed", 5.0),
            "smooth_curve": bool(path_payload.get("smooth_curve", False)),
            "waypoints_text": self._format_waypoints_text(path_payload.get("waypoints")),
            "description": path_payload.get("description", ""),
        }
        existing_ids = list(package.management.paths.keys())
        dialog_data = self._build_form(
            parent_widget,
            title="编辑路径",
            is_edit=True,
            existing_ids=existing_ids,
            initial=initial_values,
        )
        if dialog_data is None:
            return False

        self._merge_form_into_payload(item_id, dialog_data, path_payload)
        return True

    def delete_item(self, package: ManagementPackage, item_id: str) -> bool:
        if item_id not in package.management.paths:
            return False
        package.management.paths.pop(item_id, None)
        return True

    def build_inline_edit_form(
        self,
        *,
        parent: QtWidgets.QWidget,
        package: ManagementPackage,
        item_id: str,
        on_changed: Callable[[], None],
    ) -> Optional[Tuple[str, str, Callable[[QtWidgets.QFormLayout], None]]]:
        """在右侧属性面板中编辑路径的全部主要字段。"""
        path_payload_any = getattr(package.management, "paths", {}).get(item_id)
        if not isinstance(path_payload_any, dict):
            return None

        path_payload = path_payload_any

        def build_form(form_layout: QtWidgets.QFormLayout) -> None:
            path_name_value = str(path_payload.get("path_name", ""))
            path_type_value = str(path_payload.get("path_type", "linear"))
            speed_any = path_payload.get("speed", 5.0)
            if isinstance(speed_any, (int, float)):
                speed_value = float(speed_any)
            else:
                speed_value = 5.0
            smooth_curve_value = bool(path_payload.get("smooth_curve", False))
            waypoints_text_value = self._format_waypoints_text(
                path_payload.get("waypoints"),
            )
            description_value = str(path_payload.get("description", ""))

            name_edit = QtWidgets.QLineEdit(path_name_value)

            path_type_widget = QtWidgets.QComboBox()
            path_type_widget.addItems(list(self._path_types))
            if path_type_value in self._path_types:
                path_type_widget.setCurrentText(path_type_value)

            speed_widget = QtWidgets.QDoubleSpinBox()
            speed_widget.setRange(0.1, 100.0)
            speed_widget.setDecimals(2)
            speed_widget.setSingleStep(0.5)
            speed_widget.setValue(speed_value)

            smooth_curve_widget = QtWidgets.QCheckBox("平滑曲线")
            smooth_curve_widget.setChecked(smooth_curve_value)

            waypoints_widget = QtWidgets.QTextEdit()
            waypoints_widget.setPlainText(waypoints_text_value)
            waypoints_widget.setMinimumHeight(140)
            waypoints_widget.setMaximumHeight(220)

            description_edit = QtWidgets.QTextEdit()
            description_edit.setPlainText(description_value)
            description_edit.setMinimumHeight(80)
            description_edit.setMaximumHeight(200)

            def apply_changes() -> None:
                form_data = {
                    "path_name": name_edit.text().strip(),
                    "path_type": str(path_type_widget.currentText()),
                    "speed": float(speed_widget.value()),
                    "smooth_curve": bool(smooth_curve_widget.isChecked()),
                    "waypoints_text": waypoints_widget.toPlainText().strip(),
                    "description": description_edit.toPlainText().strip(),
                }
                self._merge_form_into_payload(item_id, form_data, path_payload)
                on_changed()

            name_edit.editingFinished.connect(apply_changes)
            path_type_widget.currentIndexChanged.connect(lambda _index: apply_changes())
            speed_widget.editingFinished.connect(apply_changes)
            smooth_curve_widget.stateChanged.connect(lambda _state: apply_changes())
            waypoints_widget.textChanged.connect(lambda: apply_changes())
            description_edit.textChanged.connect(lambda: apply_changes())

            form_layout.addRow("路径ID", QtWidgets.QLabel(item_id))
            form_layout.addRow("路径名称", name_edit)
            form_layout.addRow("路径类型", path_type_widget)
            form_layout.addRow("移动速度", speed_widget)
            form_layout.addRow("平滑曲线", smooth_curve_widget)
            form_layout.addRow("路径点列表（x,y,z，每行一条）", waypoints_widget)
            form_layout.addRow("描述", description_edit)

        display_name_value = str(path_payload.get("path_name", "")).strip()
        display_name = display_name_value or item_id

        title = f"路径详情：{display_name}"
        description = "在右侧直接修改路径名称、类型、速度、路径点与描述，修改会立即保存到当前视图。"
        return title, description, build_form



