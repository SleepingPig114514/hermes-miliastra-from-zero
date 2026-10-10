from __future__ import annotations

from datetime import datetime
import types

from .management_sections_base import *
from app.ui.forms.schema_dialog import FormDialogBuilder


class PeripheralSystemSection(BaseManagementSection):
    """外围系统管理 Section。

    语义约定：
    - `ManagementData.peripheral_systems` 视为“外围系统模板”的聚合字典：
      {system_id: system_payload, ...}；
    - 每个外围系统模板承载一组高级游戏系统配置，包括：排行榜 / 竞技段位 / 成就；
    - 右侧详细编辑由专用面板负责（`PeripheralSystemManagementPanel`，包含三个标签页）；
      本 Section 仅负责在管理库右侧列表中枚举、创建与删除外围系统模板。
    """

    section_key = "peripheral_systems"
    tree_label = "🔧 外围系统管理"
    type_name = "外围系统模板"

    def iter_rows(self, package: ManagementPackage) -> Iterable[ManagementRowData]:
        """在右侧列表中按“外围系统模板”为粒度枚举行数据。"""
        root_container = self._ensure_root_container(package)

        # 按 system_name / system_id 排序，保证列表顺序稳定
        for system_id, system_payload_any in sorted(
            root_container.items(),
            key=lambda pair: (
                str(pair[1].get("system_name", "") if isinstance(pair[1], dict) else "").lower(),
                str(pair[0]).lower(),
            ),
        ):
            if not isinstance(system_payload_any, dict):
                continue
            system_payload: Dict[str, Any] = system_payload_any

            system_id_text = str(system_payload.get("system_id", system_id)).strip() or str(system_id)
            system_name_text = str(system_payload.get("system_name", "")).strip()
            display_name = system_name_text or system_id_text

            leaderboard_config_any = system_payload.get("leaderboard_settings") or {}
            leaderboard_count = self._count_entries(
                getattr(leaderboard_config_any, "get", lambda _key, _default=None: [])("records", [])
                if isinstance(leaderboard_config_any, dict)
                else []
            )

            competitive_rank_config_any = system_payload.get("competitive_rank_settings") or {}
            score_group_count = self._count_entries(
                getattr(competitive_rank_config_any, "get", lambda _key, _default=None: [])("score_groups", [])
                if isinstance(competitive_rank_config_any, dict)
                else []
            )

            achievement_config_any = system_payload.get("achievement_settings") or {}
            achievement_count = self._count_entries(
                getattr(achievement_config_any, "get", lambda _key, _default=None: [])("items", [])
                if isinstance(achievement_config_any, dict)
                else []
            )

            description_text = str(system_payload.get("description", "")).strip()
            last_modified_text = self._get_last_modified_text(system_payload)

            yield ManagementRowData(
                name=display_name,
                type_name=self.type_name,
                attr1=f"成就数: {achievement_count}",
                attr2=f"排行榜数: {leaderboard_count}",
                attr3=f"计分组数: {score_group_count}",
                description=description_text,
                last_modified=last_modified_text,
                user_data=(self.section_key, system_id_text),
            )

    def create_item(
        self,
        parent_widget: QtWidgets.QWidget,
        package: ManagementPackage,
    ) -> bool:
        """新建一个外围系统模板。

        行为约定：
        - 不弹出类型选择或表单对话框，直接生成一个带默认名称的模板；
        - 右侧由 `PeripheralSystemManagementPanel` 负责承载具体配置的三个标签页；
        - 模板的 ID 使用 `peripheral` 前缀生成，名称按“外围系统N”递增。
        """
        _ = parent_widget

        root_container = self._ensure_root_container(package)
        existing_ids = {str(system_id) for system_id in root_container.keys()}

        system_id = generate_prefixed_id("peripheral")
        while system_id in existing_ids:
            system_id = generate_prefixed_id("peripheral")

        display_index = len(root_container) + 1
        system_name = f"外围系统{display_index}"

        system_payload: Dict[str, Any] = {
            "system_id": system_id,
            "system_name": system_name,
            # 兼容任务与通用展示逻辑的 name/title 约定
            "name": system_name,
            "description": "",
            "leaderboard_settings": {
                "enabled": False,
                "allow_room_settle": False,
                "records": [],
            },
            "competitive_rank_settings": {
                "enabled": False,
                "allow_room_settle": False,
                "note": "",
                "score_groups": [],
            },
            "achievement_settings": {
                "enabled": False,
                "allow_room_settle": False,
                "extreme_enabled": False,
                "items": [],
            },
            "last_modified": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        }

        root_container[system_id] = system_payload
        return True

    def edit_item(
        self,
        parent_widget: QtWidgets.QWidget,
        package: ManagementPackage,
        item_id: str,
    ) -> bool:
        """编辑外围系统模板的基础信息（名称与描述）。"""
        root_container = self._ensure_root_container(package)
        payload_any = root_container.get(item_id)
        if not isinstance(payload_any, dict):
            return False
        payload: Dict[str, Any] = payload_any

        initial_name = str(payload.get("system_name", "")).strip()
        initial_description = str(payload.get("description", "")).strip()

        builder = FormDialogBuilder(parent_widget, "编辑外围系统模板", fixed_size=(420, 260))
        name_edit = builder.add_line_edit(
            "模板名称*:",
            initial_name,
            "请输入外围系统名称，例如：段位与排行榜系统",
        )
        description_edit = builder.add_plain_text_edit(
            "描述:",
            initial_description,
            min_height=80,
            max_height=160,
        )

        def _validate(dialog_self: QtWidgets.QDialog) -> bool:
            normalized_name = name_edit.text().strip()
            if not normalized_name:
                from app.ui.foundation import dialog_utils

                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "请输入模板名称",
                )
                return False
            return True

        builder.dialog.validate = types.MethodType(_validate, builder.dialog)

        if not builder.exec():
            return False

        normalized_name = name_edit.text().strip()
        description_text = description_edit.toPlainText().strip()

        payload["system_name"] = normalized_name
        payload["name"] = normalized_name
        payload["description"] = description_text
        payload["last_modified"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        return True

    def delete_item(self, package: ManagementPackage, item_id: str) -> bool:
        """删除整个外围系统模板。"""
        root_container = self._ensure_root_container(package)
        if item_id not in root_container:
            return False
        root_container.pop(item_id, None)
        return True

    def build_inline_edit_form(
        self,
        *,
        parent: QtWidgets.QWidget,
        package: ManagementPackage,
        item_id: str,
        on_changed: Callable[[], None],
    ) -> Optional[Tuple[str, str, Callable[[QtWidgets.QFormLayout], None]]]:
        """外围系统模板使用专用右侧面板编辑，此处不再构建内联表单。"""
        _ = (parent, package, item_id, on_changed)
        return None

    @staticmethod
    def _ensure_root_container(package: ManagementPackage) -> Dict[str, Any]:
        """确保 `management.peripheral_systems` 采用“system_id → 模板配置体”的结构。

        兼容处理：
        - 旧数据可能仍使用 {achievements/leaderboards/ranks} 作为聚合视图；
          首次访问时会被迁移为一个名为“默认外围系统”的模板。
        """
        container_any: Any = package.management.peripheral_systems
        if not isinstance(container_any, dict):
            container: Dict[str, Any] = {}
            package.management.peripheral_systems = container
            return container

        container = container_any

        # 如果已经是 {system_id: {system_id/system_name/...}} 结构，则直接返回
        for value in container.values():
            if isinstance(value, dict) and value.get("system_id"):
                return container

        # 若不符合目标结构，则重置为空字典，避免后续访问出错。
        new_container: Dict[str, Any] = {}
        package.management.peripheral_systems = new_container
        return new_container

    @staticmethod
    def _get_dataset(container: Dict[str, Any], dataset_key: str) -> list:
        dataset_value = container.get(dataset_key)
        if isinstance(dataset_value, list):
            return dataset_value
        dataset_list: list = []
        container[dataset_key] = dataset_list
        return dataset_list

    @staticmethod
    def _count_entries(raw_items: Any) -> int:
        """统计列表中有效字典条目的数量"""
        if not isinstance(raw_items, list):
            return 0
        count = 0
        for entry in raw_items:
            if isinstance(entry, dict):
                count += 1
        return count

    @staticmethod
    def _split_item_id(raw_item_id: str) -> Tuple[str, str]:
        if not raw_item_id:
            return "", ""
        parts = raw_item_id.split(":", 1)
        if len(parts) != 2:
            return "", ""
        dataset_key, record_id = parts[0].strip(), parts[1].strip()
        if not dataset_key or not record_id:
            return "", ""
        return dataset_key, record_id

    def _resolve_dataset_key_for_creation(
        self,
        parent_widget: QtWidgets.QWidget,
        root_container: Dict[str, Any],
    ) -> str:
        """根据当前上下文推断“新建”应落入的子列表类型。

        策略：
        - 如当前列表中选中了同一 Section 下的某条记录，则复用该记录所属的子列表类型；
        - 否则在三类列表中选择当前条目数量最少的类型，尽量保持成就 / 排行榜 / 段位数量的平衡。
        """
        item_list_any = getattr(parent_widget, "item_list", None)
        if isinstance(item_list_any, QtWidgets.QListWidget):
            current_item = item_list_any.currentItem()
            if current_item is not None:
                user_data_value = current_item.data(QtCore.Qt.ItemDataRole.UserRole)
                if isinstance(user_data_value, tuple) and len(user_data_value) == 2:
                    section_key_value, raw_item_id_value = user_data_value
                    if isinstance(section_key_value, str) and isinstance(raw_item_id_value, str):
                        if section_key_value == self.section_key:
                            dataset_key_candidate, _record_id = self._split_item_id(raw_item_id_value)
                            if dataset_key_candidate in (
                                self._ACHIEVEMENTS_DATASET_KEY,
                                self._LEADERBOARDS_DATASET_KEY,
                                self._RANKS_DATASET_KEY,
                            ):
                                return dataset_key_candidate

        achievements_dataset = self._get_dataset(root_container, self._ACHIEVEMENTS_DATASET_KEY)
        leaderboards_dataset = self._get_dataset(root_container, self._LEADERBOARDS_DATASET_KEY)
        ranks_dataset = self._get_dataset(root_container, self._RANKS_DATASET_KEY)

        dataset_lengths: Dict[str, int] = {
            self._ACHIEVEMENTS_DATASET_KEY: len(achievements_dataset),
            self._LEADERBOARDS_DATASET_KEY: len(leaderboards_dataset),
            self._RANKS_DATASET_KEY: len(ranks_dataset),
        }

        preferred_order = [
            self._ACHIEVEMENTS_DATASET_KEY,
            self._LEADERBOARDS_DATASET_KEY,
            self._RANKS_DATASET_KEY,
        ]
        best_key = preferred_order[0]
        best_length = dataset_lengths[best_key]
        for candidate_key in preferred_order[1:]:
            candidate_length = dataset_lengths[candidate_key]
            if candidate_length < best_length:
                best_key = candidate_key
                best_length = candidate_length
        return best_key

    def _touch_updated_at(self, root_container: Dict[str, Any]) -> None:
        """更新聚合配置的更新时间字段，便于在列表中展示最近修改时间。"""
        root_container["updated_at"] = datetime.now().isoformat(timespec="seconds")

    def _prompt_dataset_key(self, parent_widget: QtWidgets.QWidget) -> str:
        builder = FormDialogBuilder(
            parent_widget,
            "选择外围系统类型",
            fixed_size=(380, 200),
        )
        type_combo = builder.add_combo_box(
            "系统类型:",
            ["成就", "排行榜", "竞技段位"],
        )

        if not builder.exec():
            return ""

        selected_label = str(type_combo.currentText())
        if selected_label == "成就":
            return self._ACHIEVEMENTS_DATASET_KEY
        if selected_label == "排行榜":
            return self._LEADERBOARDS_DATASET_KEY
        if selected_label == "竞技段位":
            return self._RANKS_DATASET_KEY
        return ""

    def _create_achievement(
        self,
        root_container: Dict[str, Any],
    ) -> bool:
        dataset = self._get_dataset(root_container, self._ACHIEVEMENTS_DATASET_KEY)
        existing_ids = {
            str(entry.get(self._ACHIEVEMENTS_ID_FIELD) or "").strip()
            for entry in dataset
            if isinstance(entry, dict)
        }
        new_id_value = generate_prefixed_id("achievement")
        while new_id_value in existing_ids:
            new_id_value = generate_prefixed_id("achievement")

        default_name = f"成就{len(dataset) + 1}"
        new_entry = {
            self._ACHIEVEMENTS_ID_FIELD: new_id_value,
            "achievement_name": default_name,
            "description": "",
            "reward": "",
            "icon": "",
        }
        dataset.append(new_entry)
        self._touch_updated_at(root_container)
        return True

    def _edit_achievement(
        self,
        parent_widget: QtWidgets.QWidget,
        root_container: Dict[str, Any],
        record_id: str,
    ) -> bool:
        dataset = self._get_dataset(root_container, self._ACHIEVEMENTS_DATASET_KEY)
        target_entry, target_index = self._find_record_in_dataset(
            dataset,
            self._ACHIEVEMENTS_ID_FIELD,
            record_id,
        )
        if target_entry is None or target_index < 0:
            return False

        existing_ids = {
            str(entry.get(self._ACHIEVEMENTS_ID_FIELD) or "").strip()
            for entry in dataset
            if isinstance(entry, dict) and entry is not target_entry
        }
        form_values = self._build_achievement_form(
            parent_widget,
            title="编辑成就",
            initial=dict(target_entry),
            existing_ids=existing_ids,
            read_only_id=True,
        )
        if form_values is None:
            return False

        target_entry.update(form_values)
        dataset[target_index] = target_entry
        self._touch_updated_at(root_container)
        return True

    def _create_leaderboard(
        self,
        root_container: Dict[str, Any],
    ) -> bool:
        dataset = self._get_dataset(root_container, self._LEADERBOARDS_DATASET_KEY)
        existing_ids = {
            str(entry.get(self._LEADERBOARDS_ID_FIELD) or "").strip()
            for entry in dataset
            if isinstance(entry, dict)
        }
        new_id_value = generate_prefixed_id("leaderboard")
        while new_id_value in existing_ids:
            new_id_value = generate_prefixed_id("leaderboard")

        default_name = f"排行榜{len(dataset) + 1}"
        new_entry = {
            self._LEADERBOARDS_ID_FIELD: new_id_value,
            "leaderboard_name": default_name,
            "stat_type": "",
            "sort_order": "descending",
        }
        dataset.append(new_entry)
        self._touch_updated_at(root_container)
        return True

    def _edit_leaderboard(
        self,
        parent_widget: QtWidgets.QWidget,
        root_container: Dict[str, Any],
        record_id: str,
    ) -> bool:
        dataset = self._get_dataset(root_container, self._LEADERBOARDS_DATASET_KEY)
        target_entry, target_index = self._find_record_in_dataset(
            dataset,
            self._LEADERBOARDS_ID_FIELD,
            record_id,
        )
        if target_entry is None or target_index < 0:
            return False

        existing_ids = {
            str(entry.get(self._LEADERBOARDS_ID_FIELD) or "").strip()
            for entry in dataset
            if isinstance(entry, dict) and entry is not target_entry
        }
        form_values = self._build_leaderboard_form(
            parent_widget,
            title="编辑排行榜",
            initial=dict(target_entry),
            existing_ids=existing_ids,
            read_only_id=True,
        )
        if form_values is None:
            return False

        target_entry.update(form_values)
        dataset[target_index] = target_entry
        self._touch_updated_at(root_container)
        return True

    def _create_rank(
        self,
        root_container: Dict[str, Any],
    ) -> bool:
        dataset = self._get_dataset(root_container, self._RANKS_DATASET_KEY)
        existing_ids = {
            str(entry.get(self._RANKS_ID_FIELD) or "").strip()
            for entry in dataset
            if isinstance(entry, dict)
        }
        new_id_value = generate_prefixed_id("rank")
        while new_id_value in existing_ids:
            new_id_value = generate_prefixed_id("rank")

        default_name = f"段位{len(dataset) + 1}"
        new_entry = {
            self._RANKS_ID_FIELD: new_id_value,
            "rank_name": default_name,
            "required_points": 0,
            "icon": "",
        }
        dataset.append(new_entry)
        self._touch_updated_at(root_container)
        return True

    def _edit_rank(
        self,
        parent_widget: QtWidgets.QWidget,
        root_container: Dict[str, Any],
        record_id: str,
    ) -> bool:
        dataset = self._get_dataset(root_container, self._RANKS_DATASET_KEY)
        target_entry, target_index = self._find_record_in_dataset(
            dataset,
            self._RANKS_ID_FIELD,
            record_id,
        )
        if target_entry is None or target_index < 0:
            return False

        existing_ids = {
            str(entry.get(self._RANKS_ID_FIELD) or "").strip()
            for entry in dataset
            if isinstance(entry, dict) and entry is not target_entry
        }
        form_values = self._build_rank_form(
            parent_widget,
            title="编辑段位",
            initial=dict(target_entry),
            existing_ids=existing_ids,
            read_only_id=True,
        )
        if form_values is None:
            return False

        target_entry.update(form_values)
        dataset[target_index] = target_entry
        self._touch_updated_at(root_container)
        return True

    @staticmethod
    def _find_record_in_dataset(
        dataset: list,
        id_field: str,
        record_id: str,
    ) -> Tuple[Optional[dict], int]:
        for entry_index, entry_data in enumerate(dataset):
            if not isinstance(entry_data, dict):
                continue
            current_id_value = str(entry_data.get(id_field) or "").strip()
            if current_id_value == record_id:
                return entry_data, entry_index
        return None, -1

    @staticmethod
    def _delete_record_from_dataset(
        root_container: Dict[str, Any],
        dataset_key: str,
        id_field: str,
        record_id: str,
    ) -> bool:
        dataset_value = root_container.get(dataset_key)
        if not isinstance(dataset_value, list):
            return False

        for entry_index, entry_data in enumerate(dataset_value):
            if not isinstance(entry_data, dict):
                continue
            current_id_value = str(entry_data.get(id_field) or "").strip()
            if current_id_value != record_id:
                continue
            del dataset_value[entry_index]
            return True
        return False

    def _build_achievement_form(
        self,
        parent_widget: QtWidgets.QWidget,
        *,
        title: str,
        initial: Optional[Dict[str, Any]],
        existing_ids: set[str],
        read_only_id: bool,
    ) -> Optional[Dict[str, Any]]:
        initial_values: Dict[str, Any] = {
            "achievement_id": "",
            "achievement_name": "",
            "description": "",
            "reward": "",
            "icon": "",
        }
        if initial:
            initial_values.update(initial)

        builder = FormDialogBuilder(parent_widget, title, fixed_size=(460, 420))

        achievement_id_edit = builder.add_line_edit(
            "成就ID*:",
            str(initial_values.get("achievement_id", "")),
            "请输入成就ID",
            read_only=read_only_id,
        )
        achievement_name_edit = builder.add_line_edit(
            "成就名称*:",
            str(initial_values.get("achievement_name", "")),
            "请输入成就名称",
        )
        description_edit = builder.add_plain_text_edit(
            "描述:",
            str(initial_values.get("description", "")),
            min_height=100,
            max_height=220,
        )
        reward_edit = builder.add_line_edit(
            "奖励:",
            str(initial_values.get("reward", "")),
        )
        icon_edit = builder.add_line_edit(
            "图标:",
            str(initial_values.get("icon", "")),
        )

        def _validate(dialog_self: QtWidgets.QDialog) -> bool:
            achievement_id_text = achievement_id_edit.text().strip()
            achievement_name_text = achievement_name_edit.text().strip()

            if not achievement_id_text:
                from app.ui.foundation import dialog_utils

                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "请输入成就ID",
                )
                return False

            if not read_only_id and achievement_id_text in existing_ids:
                from app.ui.foundation import dialog_utils

                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "成就ID已存在，请使用其他标识",
                )
                return False

            if not achievement_name_text:
                from app.ui.foundation import dialog_utils

                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "请输入成就名称",
                )
                return False

            return True

        builder.dialog.validate = types.MethodType(_validate, builder.dialog)

        if not builder.exec():
            return None

        return {
            "achievement_id": achievement_id_edit.text().strip(),
            "achievement_name": achievement_name_edit.text().strip(),
            "description": description_edit.toPlainText().strip(),
            "reward": reward_edit.text().strip(),
            "icon": icon_edit.text().strip(),
        }

    def _build_leaderboard_form(
        self,
        parent_widget: QtWidgets.QWidget,
        *,
        title: str,
        initial: Optional[Dict[str, Any]],
        existing_ids: set[str],
        read_only_id: bool,
    ) -> Optional[Dict[str, Any]]:
        initial_values: Dict[str, Any] = {
            "leaderboard_id": "",
            "leaderboard_name": "",
            "stat_type": "",
            "sort_order": "descending",
        }
        if initial:
            initial_values.update(initial)

        builder = FormDialogBuilder(parent_widget, title, fixed_size=(420, 360))

        leaderboard_id_edit = builder.add_line_edit(
            "排行榜ID*:",
            str(initial_values.get("leaderboard_id", "")),
            "请输入排行榜ID",
            read_only=read_only_id,
        )
        leaderboard_name_edit = builder.add_line_edit(
            "排行榜名称*:",
            str(initial_values.get("leaderboard_name", "")),
            "请输入排行榜名称",
        )
        stat_type_edit = builder.add_line_edit(
            "统计类型:",
            str(initial_values.get("stat_type", "")),
        )
        sort_order_combo = builder.add_combo_box(
            "排序规则:",
            ["ascending", "descending"],
            str(initial_values.get("sort_order", "descending")),
        )

        def _validate(dialog_self: QtWidgets.QDialog) -> bool:
            leaderboard_id_text = leaderboard_id_edit.text().strip()
            leaderboard_name_text = leaderboard_name_edit.text().strip()

            if not leaderboard_id_text:
                from app.ui.foundation import dialog_utils

                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "请输入排行榜ID",
                )
                return False

            if not read_only_id and leaderboard_id_text in existing_ids:
                from app.ui.foundation import dialog_utils

                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "排行榜ID已存在，请使用其他标识",
                )
                return False

            if not leaderboard_name_text:
                from app.ui.foundation import dialog_utils

                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "请输入排行榜名称",
                )
                return False

            return True

        builder.dialog.validate = types.MethodType(_validate, builder.dialog)

        if not builder.exec():
            return None

        return {
            "leaderboard_id": leaderboard_id_edit.text().strip(),
            "leaderboard_name": leaderboard_name_edit.text().strip(),
            "stat_type": stat_type_edit.text().strip(),
            "sort_order": str(sort_order_combo.currentText()),
        }

    def _build_rank_form(
        self,
        parent_widget: QtWidgets.QWidget,
        *,
        title: str,
        initial: Optional[Dict[str, Any]],
        existing_ids: set[str],
        read_only_id: bool,
    ) -> Optional[Dict[str, Any]]:
        initial_values: Dict[str, Any] = {
            "rank_id": "",
            "rank_name": "",
            "required_points": 0,
            "icon": "",
        }
        if initial:
            initial_values.update(initial)

        builder = FormDialogBuilder(parent_widget, title, fixed_size=(420, 320))

        rank_id_edit = builder.add_line_edit(
            "段位ID*:",
            str(initial_values.get("rank_id", "")),
            "请输入段位ID",
            read_only=read_only_id,
        )
        rank_name_edit = builder.add_line_edit(
            "段位名称*:",
            str(initial_values.get("rank_name", "")),
            "请输入段位名称",
        )
        required_points_value = int(initial_values.get("required_points", 0))
        required_points_spin = builder.add_spin_box(
            "所需积分:",
            minimum=0,
            maximum=999999,
            value=required_points_value,
            single_step=100,
        )
        icon_edit = builder.add_line_edit(
            "图标:",
            str(initial_values.get("icon", "")),
        )

        def _validate(dialog_self: QtWidgets.QDialog) -> bool:
            rank_id_text = rank_id_edit.text().strip()
            rank_name_text = rank_name_edit.text().strip()

            if not rank_id_text:
                from app.ui.foundation import dialog_utils

                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "请输入段位ID",
                )
                return False

            if not read_only_id and rank_id_text in existing_ids:
                from app.ui.foundation import dialog_utils

                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "段位ID已存在，请使用其他标识",
                )
                return False

            if not rank_name_text:
                from app.ui.foundation import dialog_utils

                dialog_utils.show_warning_dialog(
                    dialog_self,
                    "提示",
                    "请输入段位名称",
                )
                return False

            return True

        builder.dialog.validate = types.MethodType(_validate, builder.dialog)

        if not builder.exec():
            return None

        return {
            "rank_id": rank_id_edit.text().strip(),
            "rank_name": rank_name_edit.text().strip(),
            "required_points": int(required_points_spin.value()),
            "icon": icon_edit.text().strip(),
        }



