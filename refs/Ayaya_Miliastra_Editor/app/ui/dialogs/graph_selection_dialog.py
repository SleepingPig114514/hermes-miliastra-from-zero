"""节点图选择对话框 - 从节点图库选择或新建节点图"""

from PyQt6 import QtWidgets
from typing import Optional

from app.ui.foundation.base_widgets import BaseDialog
from app.ui.foundation.theme_manager import ThemeManager
from app.ui.foundation import dialog_utils
from app.ui.graph.library_pages.graph_library_widget import GraphLibraryWidget
from engine.resources.resource_manager import ResourceManager
from engine.resources.package_index_manager import PackageIndexManager


class GraphSelectionDialog(BaseDialog):
    """节点图选择对话框（复用节点图库界面）"""

    def __init__(
        self,
        resource_manager: ResourceManager,
        package_index_manager: PackageIndexManager,
        parent=None,
        *,
        allowed_graph_type: Optional[str] = None,
        allowed_folder_prefix: Optional[str] = None,
    ):
        self.resource_manager = resource_manager
        self.package_index_manager = package_index_manager
        self.selected_graph_id: Optional[str] = None
        # 可选限制：仅允许选择指定类型/文件夹前缀下的节点图
        self.allowed_graph_type = allowed_graph_type
        self.allowed_folder_prefix = allowed_folder_prefix

        super().__init__(
            title="选择节点图",
            width=960,
            height=640,
            parent=parent,
        )

        self._build_content()

    def _apply_styles(self) -> None:
        self.setStyleSheet(ThemeManager.dialog_surface_style())

    def _build_content(self) -> None:
        layout = self.content_layout

        info_label = QtWidgets.QLabel("💡 在下方节点图库中选择节点图，或直接使用左上角的“+ 新建节点图”。")
        info_label.setStyleSheet(ThemeManager.subtle_info_style())
        layout.addWidget(info_label)

        self.library_widget = GraphLibraryWidget(
            self.resource_manager,
            self.package_index_manager,
            selection_mode=True,
        )
        layout.addWidget(self.library_widget, 1)

        # 如有显式类型限制，优先切换到目标类型（server/client）
        if self.allowed_graph_type in {"server", "client"}:
            type_combo = self.library_widget.type_combo
            for index in range(type_combo.count()):
                if type_combo.itemData(index) == self.allowed_graph_type:
                    type_combo.setCurrentIndex(index)
                    break
        self.library_widget.graph_selected.connect(self._on_graph_selected)
        self.library_widget.graph_double_clicked.connect(self._on_graph_double_clicked)

        ok_button = self.button_box.button(QtWidgets.QDialogButtonBox.StandardButton.Ok)
        if ok_button is not None:
            ok_button.setText("选择")
            ok_button.setEnabled(False)

    # ------------------------------------------------------------------ 内部辅助

    def _is_graph_allowed(self, graph_id: str) -> bool:
        """根据 allowed_graph_type / allowed_folder_prefix 判定图是否可选。"""
        if not graph_id:
            return False
        if not (self.allowed_graph_type or self.allowed_folder_prefix):
            return True

        metadata = self.resource_manager.load_graph_metadata(graph_id)
        if not isinstance(metadata, dict):
            return False

        if self.allowed_graph_type in {"server", "client"}:
            graph_type_value = metadata.get("graph_type", "server")
            if graph_type_value != self.allowed_graph_type:
                return False

        if self.allowed_folder_prefix:
            folder_path_value = str(metadata.get("folder_path", "") or "").strip()
            prefix = self.allowed_folder_prefix.strip()
            if not folder_path_value.startswith(prefix):
                return False

        return True

    def _on_graph_selected(self, graph_id: str) -> None:
        # 选中列表项时先记录 ID，真正的合法性校验在“选择”按钮或双击时完成，
        # 以避免在列表上频繁弹出警告对话框。
        self.selected_graph_id = graph_id
        ok_button = self.button_box.button(QtWidgets.QDialogButtonBox.StandardButton.Ok)
        if ok_button is not None:
            ok_button.setEnabled(bool(graph_id))

    def _on_graph_double_clicked(self, graph_id: str, _: dict) -> None:
        if not graph_id:
            return
        if not self._is_graph_allowed(graph_id):
            message_lines = ["当前上下文仅支持绑定限定范围内的节点图。"]
            if self.allowed_graph_type or self.allowed_folder_prefix:
                detail_parts = []
                if self.allowed_graph_type:
                    detail_parts.append(f"类型: {self.allowed_graph_type}")
                if self.allowed_folder_prefix:
                    detail_parts.append(f"文件夹前缀: {self.allowed_folder_prefix}")
                message_lines.append("限制条件：" + "，".join(detail_parts))
            dialog_utils.show_warning_dialog(self, "不支持的节点图", "\n".join(message_lines))
            return
        self.selected_graph_id = graph_id
        self.accept()

    def validate(self) -> bool:
        graph_id = self.library_widget.get_selected_graph_id()
        if not graph_id:
            dialog_utils.show_warning_dialog(self, "提示", "请先选择一个节点图")
            return False
        if not self._is_graph_allowed(graph_id):
            message_lines = ["当前上下文仅支持绑定限定范围内的节点图。"]
            if self.allowed_graph_type or self.allowed_folder_prefix:
                detail_parts = []
                if self.allowed_graph_type:
                    detail_parts.append(f"类型: {self.allowed_graph_type}")
                if self.allowed_folder_prefix:
                    detail_parts.append(f"文件夹前缀: {self.allowed_folder_prefix}")
                message_lines.append("限制条件：" + "，".join(detail_parts))
            dialog_utils.show_warning_dialog(self, "不支持的节点图", "\n".join(message_lines))
            return False
        self.selected_graph_id = graph_id
        return True

    def get_selected_graph_id(self) -> Optional[str]:
        return self.selected_graph_id

