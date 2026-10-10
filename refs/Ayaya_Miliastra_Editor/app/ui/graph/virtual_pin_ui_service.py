"""虚拟引脚相关的 UI 服务与装饰器。

本模块位于图编辑 UI 层与复合节点管理器之间，负责：
- 统一从 `GraphScene.composite_edit_context` 中提取复合节点编辑上下文；
- 提供按端口查询虚拟引脚映射的帮助函数；
- 集中构建端口右键菜单（虚拟引脚操作 / 删除连线 / 删除分支端口），
  让 `PortGraphicsItem` 只关心触发菜单而不是菜单内容细节。
"""

from __future__ import annotations

from typing import Optional, Tuple, Dict, TYPE_CHECKING, Set

from PyQt6 import QtWidgets

from engine.utils.logging.logger import log_info

if TYPE_CHECKING:
    from app.ui.graph.graph_scene import GraphScene
    from app.ui.graph.items.port_item import PortGraphicsItem
    from app.ui.foundation.context_menu_builder import ContextMenuBuilder


def get_composite_edit_context(scene: QtWidgets.QGraphicsScene) -> Optional[Dict[str, object]]:
    """获取复合节点编辑上下文。

    统一封装对 `scene.is_composite_editor` 与 `scene.composite_edit_context` 的访问，
    避免在端口图形项或其他 UI 模块内部散落字符串 key 与判空逻辑。
    """
    if not getattr(scene, "is_composite_editor", False):
        return None
    context = getattr(scene, "composite_edit_context", None)
    if not isinstance(context, dict):
        return None
    composite_id = context.get("composite_id")
    manager = context.get("manager")
    if not composite_id or manager is None:
        return None
    return context


def find_virtual_pin_for_port(
    scene: QtWidgets.QGraphicsScene,
    node_id: str,
    port_name: str,
) -> Tuple[Optional[Dict[str, object]], Optional[object]]:
    """查找指定端口对应的虚拟引脚。

    返回 `(context, virtual_pin)`：
    - context: 复合节点编辑上下文字典，若不在复合节点编辑器中则为 None
    - virtual_pin: 若端口已映射到虚拟引脚则为 VirtualPinConfig，否则为 None
    """
    context = get_composite_edit_context(scene)
    if not context:
        return None, None
    composite_id = context["composite_id"]
    manager = context["manager"]
    virtual_pin = manager.find_port_virtual_pin(composite_id, node_id, port_name)
    return context, virtual_pin


def build_port_context_menu(
    port_item: "PortGraphicsItem",
    scene: "GraphScene",
    builder_cls: type["ContextMenuBuilder"],
) -> Optional["ContextMenuBuilder"]:
    """构建端口右键菜单。

    集中组织“虚拟引脚操作 / 删除连线 / 删除分支端口”等条目，
    调用方（通常为 `PortGraphicsItem.contextMenuEvent`）只需调用本函数
    并执行返回的菜单实例。
    """
    builder = builder_cls()
    has_items = False

    # 复合节点编辑器：虚拟引脚菜单
    context = get_composite_edit_context(scene)
    if context:
        composite_id = context["composite_id"]
        manager = context["manager"]
        log_info(
            "[虚拟引脚菜单] composite_id={}, manager={}",
            composite_id,
            "存在" if manager else "为空",
        )
        virtual_pin = manager.find_port_virtual_pin(
            composite_id,
            port_item.node_item.node.id,
            port_item.name,
        )
        if virtual_pin:
            builder.add_action(
                f"❌ 取消设置为引脚 (虚拟引脚: {virtual_pin.pin_name})",
                lambda: port_item._remove_virtual_pin_mapping(scene),
            )
            has_items = True
        else:
            builder.add_action(
                "🌟 暴露为虚拟引脚",
                lambda: port_item._expose_as_new_virtual_pin(scene),
            )
            available_pins = manager.get_available_virtual_pins(
                composite_id,
                port_item.is_input,
                port_item.is_flow,
            )
            if available_pins:
                builder.add_action(
                    f"🔗 添加到现有虚拟引脚 ({len(available_pins)}个可用)",
                    lambda: port_item._add_to_existing_virtual_pin(scene),
                )
            has_items = True

    # 删除该端口的所有连线
    connected_edges = []
    if hasattr(scene, "edge_items"):
        for edge_id, edge_item in scene.edge_items.items():
            if edge_item.src is port_item or edge_item.dst is port_item:
                connected_edges.append((edge_id, edge_item))
    if connected_edges:
        if has_items:
            builder.add_separator()

        def _delete_all_edges() -> None:
            from app.ui.graph.graph_undo import DeleteEdgeCommand

            log_info("[端口菜单] 删除 {} 条连线", len(connected_edges))
            for edge_id, _edge_item in connected_edges:
                cmd = DeleteEdgeCommand(scene.model, scene, edge_id)
                scene.undo_manager.execute_command(cmd)

        builder.add_action(
            f"🗑️ 删除此端口的所有连线 ({len(connected_edges)}条)",
            _delete_all_edges,
        )
        has_items = True

    # 多分支节点：删除分支菜单
    if (
        (not port_item.is_input)
        and port_item.is_flow
        and port_item.node_item.node.title == "多分支"
        and port_item.name != "默认"
    ):
        if has_items:
            builder.add_separator()

        has_connections = scene.model.has_port_connections(
            port_item.node_item.node.id,
            port_item.name,
            port_item.is_input,
        )
        text = (
            f"删除分支 '{port_item.name}'"
            if not has_connections
            else f"删除分支 '{port_item.name}' (该端口有连线)"
        )
        builder.add_action(text, port_item.remove_branch_port, enabled=not has_connections)
        has_items = True

    return builder if has_items else None


def cleanup_virtual_pins_for_deleted_node(
    scene: "GraphScene",
    node_id: str,
) -> Tuple[bool, Set[str]]:
    """清理删除节点后的虚拟引脚映射（UI 与引擎之间的桥接层）。

    职责划分：
    - 具体清理算法与统计逻辑委托给 `CompositeVirtualPinManager.cleanup_mappings_for_deleted_node`；
    - 本函数只负责：
      * 从 `GraphScene` 提取复合节点上下文；
      * 根据只读标志决定是否调用 `update_composite_node` 落盘；
      * 返回受影响的内部节点 ID，供图层刷新端口提示。

    Args:
        scene: 当前图场景（需要暴露 `composite_edit_context` 与 `model` 属性）
        node_id: 在复合子图中被删除的内部节点 ID

    Returns:
        (has_changes, affected_node_ids)
    """
    context = get_composite_edit_context(scene)
    if not context:
        return False, set()

    composite_id = context["composite_id"]
    manager = context["manager"]
    if "can_persist" in context:
        can_persist_context = bool(context.get("can_persist"))
    else:
        # 兼容旧字段：read_only=True 表示“逻辑只读（不落盘）”
        can_persist_context = not bool(context.get("read_only"))
    is_logic_read_only_context = not can_persist_context

    has_changes, affected_node_ids, removed_pins = manager.virtual_pin_manager.cleanup_mappings_for_deleted_node(
        composite_id,
        node_id,
    )
    if not has_changes:
        return False, set()

    composite = manager.get_composite_node(composite_id)
    if composite is not None and not is_logic_read_only_context:
        # 非只读：同步写回函数文件
        manager.update_composite_node(composite_id, composite)
        log_info(
            "[虚拟引脚清理] 复合节点 {}: 已保存配置（移除节点 {} 的映射, 删除 {} 个虚拟引脚）",
            composite_id,
            node_id,
            removed_pins,
        )
    else:
        log_info(
            "[虚拟引脚清理] 复合节点 {}: 逻辑只读，仅更新内存配置（移除节点 {} 的映射, 删除 {} 个虚拟引脚）",
            composite_id,
            node_id,
            removed_pins,
        )

    # 通知外层（如复合节点管理器）刷新属性面板等 UI
    callback = context.get("on_virtual_pins_changed")
    if callable(callback):
        callback()

    return True, affected_node_ids

