"""实体分类树构建 Mixin"""

from __future__ import annotations

from PyQt6 import QtCore, QtWidgets

from engine.graph.models.entity_templates import (
    get_entity_type_info,
    get_template_library_category_types,
)


class EntityCategoryTreeMixin:
    """提供标准化的实体类型分类树构建方法。"""

    def build_entity_category_tree(
        self,
        tree_widget: QtWidgets.QTreeWidget,
        *,
        all_label: str,
        entity_label_suffix: str = "",
        include_level_entity: bool = False,
        level_entity_label: str = "📍 关卡实体",
    ) -> dict[str, QtWidgets.QTreeWidgetItem]:
        """创建实体分类树并返回 key->item 映射。

        约定：
        - 根级顺序固定为：“全部实体”在最上，其次为“关卡实体”（如启用），再往下是各实体类型/扩展分类；
        - 具体文案由调用方通过 all_label / level_entity_label 与 entity_label_suffix 控制。
        """
        tree_widget.clear()
        items: dict[str, QtWidgets.QTreeWidgetItem] = {}

        all_item = QtWidgets.QTreeWidgetItem(tree_widget)
        all_item.setText(0, all_label)
        all_item.setData(0, QtCore.Qt.ItemDataRole.UserRole, "all")
        items["all"] = all_item

        if include_level_entity:
            level_item = QtWidgets.QTreeWidgetItem(tree_widget)
            level_item.setText(0, level_entity_label)
            level_item.setData(0, QtCore.Qt.ItemDataRole.UserRole, "level_entity")
            items["level_entity"] = level_item

        for entity_type in get_template_library_category_types():
            icon = get_entity_type_info(entity_type).get("icon", "📦")
            item = QtWidgets.QTreeWidgetItem(tree_widget)
            item.setText(0, f"{icon} {entity_type}{entity_label_suffix}")
            item.setData(0, QtCore.Qt.ItemDataRole.UserRole, entity_type)
            items[entity_type] = item

        return items

