"""节点图详情对话框 - 显示节点图信息和引用列表"""

from PyQt6 import QtCore, QtWidgets, QtGui
from typing import List, Tuple, Dict

from app.ui.foundation.base_widgets import BaseDialog
from app.ui.foundation.theme_manager import ThemeManager, Colors, Sizes
from app.ui.foundation import dialog_utils
from app.ui.widgets.graph_references_table_widget import GraphReferencesTableWidget
from engine.resources.resource_manager import ResourceManager, ResourceType
from engine.resources.package_index_manager import PackageIndexManager
from engine.resources.graph_reference_tracker import GraphReferenceTracker
from engine.graph.models.graph_config import GraphConfig


class GraphDetailDialog(BaseDialog):
    """节点图详情对话框"""
    
    jump_to_reference = QtCore.pyqtSignal(str, str, str)  # (entity_type, entity_id, package_id)
    
    def __init__(
        self,
        graph_id: str,
        resource_manager: ResourceManager,
        package_index_manager: PackageIndexManager,
        parent=None,
    ) -> None:
        self.graph_id = graph_id
        self.resource_manager = resource_manager
        self.package_index_manager = package_index_manager
        self.reference_tracker = GraphReferenceTracker(resource_manager, package_index_manager)
        
        super().__init__(
            title="节点图详情",
            width=700,
            height=500,
            buttons=QtWidgets.QDialogButtonBox.StandardButton.Close,
            parent=parent,
        )
        
        self._build_content()
        self._load_data()
    
    def _apply_styles(self) -> None:
        """应用主题样式"""
        self.setStyleSheet(ThemeManager.dialog_surface_style(include_tables=True))
        close_btn = self.button_box.button(QtWidgets.QDialogButtonBox.StandardButton.Close)
        if close_btn is not None:
            close_btn.setText("关闭")
    
    def _build_content(self) -> None:
        """设置UI"""
        layout = self.content_layout
        
        # 标签页
        tabs = QtWidgets.QTabWidget()
        
        # 基本信息标签页
        basic_tab = self._create_basic_tab()
        tabs.addTab(basic_tab, "基本信息")
        
        # 引用列表标签页
        references_tab = self._create_references_tab()
        tabs.addTab(references_tab, "引用列表")
        
        layout.addWidget(tabs)
    
    def _create_basic_tab(self) -> QtWidgets.QWidget:
        """创建基本信息标签页"""
        widget = QtWidgets.QWidget()
        layout = QtWidgets.QFormLayout(widget)
        
        self.name_label = QtWidgets.QLabel()
        self.type_label = QtWidgets.QLabel()
        self.folder_label = QtWidgets.QLabel()
        self.description_label = QtWidgets.QLabel()
        self.description_label.setWordWrap(True)
        
        self.node_count_label = QtWidgets.QLabel()
        self.edge_count_label = QtWidgets.QLabel()
        self.reference_count_label = QtWidgets.QLabel()
        
        self.created_at_label = QtWidgets.QLabel()
        self.updated_at_label = QtWidgets.QLabel()
        
        layout.addRow("节点图名称:", self.name_label)
        layout.addRow("类型:", self.type_label)
        layout.addRow("文件夹:", self.folder_label)
        layout.addRow("描述:", self.description_label)
        
        layout.addRow("", QtWidgets.QLabel())  # 空行分隔
        
        layout.addRow("节点数量:", self.node_count_label)
        layout.addRow("连接数量:", self.edge_count_label)
        layout.addRow("引用次数:", self.reference_count_label)
        
        layout.addRow("", QtWidgets.QLabel())  # 空行分隔
        
        layout.addRow("创建时间:", self.created_at_label)
        layout.addRow("更新时间:", self.updated_at_label)
        
        return widget
    
    def _create_references_tab(self) -> QtWidgets.QWidget:
        """创建引用列表标签页"""
        self.references_widget = GraphReferencesTableWidget(self)
        self.references_widget.reference_activated.connect(self._jump_to_entity)
        return self.references_widget
    
    def _load_data(self) -> None:
        """加载节点图数据"""
        graph_data = self.resource_manager.load_resource(ResourceType.GRAPH, self.graph_id)
        if not graph_data:
            dialog_utils.show_warning_dialog(self, "错误", "无法加载节点图数据")
            return
        
        graph_config = GraphConfig.deserialize(graph_data)
        
        # 填充基本信息
        self.name_label.setText(graph_config.name)
        
        type_text = "🔷 服务器" if graph_config.graph_type == "server" else "🔶 客户端"
        self.type_label.setText(type_text)
        
        folder_text = graph_config.folder_path if graph_config.folder_path else "<根目录>"
        self.folder_label.setText(folder_text)
        
        desc_text = graph_config.description if graph_config.description else "<无描述>"
        self.description_label.setText(desc_text)
        
        self.node_count_label.setText(str(graph_config.get_node_count()))
        self.edge_count_label.setText(str(graph_config.get_edge_count()))
        
        # 引用信息
        references = self.reference_tracker.find_references(self.graph_id)
        self.reference_count_label.setText(str(len(references)))

        # 存档名称映射
        package_name_map: Dict[str, str] = {
            package_info["package_id"]: package_info.get("name", package_info["package_id"])
            for package_info in self.package_index_manager.list_packages()
        }
        self.references_widget.set_references(references, package_name_map)
        
        # 时间戳
        created_at = graph_config.metadata.get("created_at", "未知")
        updated_at = graph_config.metadata.get("updated_at", "未知")
        self.created_at_label.setText(self._format_datetime(created_at))
        self.updated_at_label.setText(self._format_datetime(updated_at))
    
    def _jump_to_entity(self, entity_type: str, entity_id: str, package_id: str) -> None:
        """跳转到实体编辑界面"""
        self.jump_to_reference.emit(entity_type, entity_id, package_id)
        self.accept()  # 关闭对话框
    
    def _format_datetime(self, dt_str: str) -> str:
        """格式化日期时间"""
        if not dt_str or dt_str == "未知":
            return "未知"
        
        # 尝试格式化ISO格式的时间戳
        from datetime import datetime
        dt = datetime.fromisoformat(dt_str)
        return dt.strftime("%Y-%m-%d %H:%M:%S")

