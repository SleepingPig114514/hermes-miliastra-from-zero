#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
额外高级配置 - 扩展的高级概念和辅助功能配置
"""

from dataclasses import dataclass, field
from typing import List, Optional, Dict, Any
from enum import Enum


# ==================== 界面控件组配置 ====================
# 设计参考：界面控件组与界面布局相关的内部文档

class WidgetGroupState(Enum):
    """界面控件组状态"""
    ACTIVATED = "activated"  # 激活 - 存在于界面布局，可通过节点图管理表现状态
    DEACTIVATED = "deactivated"  # 未激活 - 不存在于界面布局


class WidgetGroupDisplayState(Enum):
    """界面控件组表现状态（已激活的控件组）"""
    OPEN = "open"  # 开启 - 可见性开启
    CLOSED = "closed"  # 关闭 - 可见性关闭，不保留动态改动的信息
    HIDDEN = "hidden"  # 隐藏 - 可见性关闭，保留动态改动的信息


@dataclass
class UIWidgetGroupConfig:
    """
    界面控件组配置
    界面控件组是对单个/多个预制界面控件的组合、编辑参数后保存的数据
    包括单个界面控件和组合界面控件两种
    """
    
    # 基础信息
    widget_group_index: int  # 界面控件组索引，用于节点图引用
    widget_group_name: str = ""  # 界面控件组名称
    
    # 控件组状态
    state: WidgetGroupState = WidgetGroupState.DEACTIVATED  # 控件组状态
    display_state: Optional[WidgetGroupDisplayState] = None  # 表现状态（仅激活时有效）
    
    # 包含的控件
    widget_indices: List[int] = field(default_factory=list)  # 组内控件索引列表
    
    # 激活设置
    auto_activate_with_layout: bool = False  # 是否随界面布局一同激活
    can_modify_state: bool = True  # 是否可对状态修改（布局引用的控件组不可修改状态）
    
    notes: str = ""
    
    class Config:
        doc_reference = ""


@dataclass
class UILayoutConfig:
    """
    界面布局配置
    
    界面布局是对界面控件组的引用和管理
    """
    
    layout_name: str = "默认布局"
    
    # 引用的控件组
    referenced_widget_groups: List[int] = field(default_factory=list)  # 引用的界面控件组索引
    
    # 布局设置
    auto_activate_groups: bool = True  # 是否自动激活引用的控件组
    
    notes: str = ""
    
    class Config:
        doc_reference = "界面控件组与界面布局（内部文档）"


# ==================== 负载计算功能配置 ====================
# 设计参考：负载计算功能相关的内部说明

class LoadLevel(Enum):
    """关卡负载等级"""
    LOW = "low"  # 低负载
    MEDIUM = "medium"  # 中等负载
    HIGH = "high"  # 高负载
    VERY_HIGH = "very_high"  # 极高负载


class LoadIndicatorStatus(Enum):
    """负载指标状态"""
    NORMAL = "normal"  # 正常 - 白色
    WARNING = "warning"  # 警告 - 黄色
    CRITICAL = "critical"  # 超标 - 红色


@dataclass
class StaticLoadIndicator:
    """
    静态负载指标
    
    用于编辑时的负载估算
    """
    
    # 计算负载
    computation_load: float = 0.0  # 当前计算静态负载
    computation_load_limit: float = 100.0  # 计算负载上限
    computation_status: LoadIndicatorStatus = LoadIndicatorStatus.NORMAL
    
    # 内存负载
    memory_load: float = 0.0  # 当前内存静态负载
    memory_load_limit: float = 100.0  # 内存负载上限
    memory_status: LoadIndicatorStatus = LoadIndicatorStatus.NORMAL
    
    # 存档大小
    save_size_mb: float = 0.0  # 预估存档大小（MB）
    save_size_limit_mb: float = 10.0  # 存档大小上限
    
    # 全局资源占比
    global_resource_usage: float = 0.0  # 0-100的百分比
    

@dataclass
class RegionalLoadDetail:
    """
    区域负载详情
    
    按区域划分的负载计算
    """
    
    region_id: int  # 区域序号
    center_position: tuple = (0, 0, 0)  # 区域中心位置
    
    # 内存静态负载
    memory_load: float = 0.0
    
    # 计算静态负载（按朝向）
    directional_loads: Dict[str, float] = field(default_factory=dict)  # 朝向 -> 负载值
    # 支持的朝向："+X", "-X", "+Y", "-Y", "+Z", "-Z"
    
    # 状态
    is_overloaded: bool = False  # 是否超标
    
    # 包含的实体
    entities_in_region: List[str] = field(default_factory=list)  # 实体GUID列表


@dataclass
class DynamicLoadSnapshot:
    """
    动态负载快照
    
    运行时的负载记录
    """
    
    timestamp: float  # 时间戳（秒）
    screenshot_path: str = ""  # 截图路径
    
    # 客户端负载
    client_computation_load: float = 0.0  # 客户端计算负载
    client_memory_load: float = 0.0  # 客户端内存负载
    
    # 服务端负载
    server_processor_load: float = 0.0  # 服务端处理器负载
    server_memory_load: float = 0.0  # 服务端内存负载
    
    # 异常信息
    is_abnormal: bool = False
    abnormal_reason: str = ""  # 异常原因
    
    # 实体列表
    entities_snapshot: List[Dict[str, Any]] = field(default_factory=list)


@dataclass
class LoadCalculationConfig:
    """
    负载计算功能配置
    提供静态和动态两种负载计算方式
    """
    
    # 关卡负载等级设置
    load_level: LoadLevel = LoadLevel.MEDIUM  # 关卡负载需求档位
    
    # 静态负载计算
    enable_static_load_check: bool = True  # 启用静态负载检查
    static_load_global: StaticLoadIndicator = field(default_factory=StaticLoadIndicator)  # 全局静态负载
    regional_loads: List[RegionalLoadDetail] = field(default_factory=list)  # 区域负载列表
    
    # 静态负载设置
    only_show_overloaded_regions: bool = True  # 仅显示负载超标区域
    detection_distance_meters: float = 80.0  # 视距检测范围（米）
    
    # 动态负载计算
    enable_dynamic_load_recording: bool = False  # 启用动态负载记录
    dynamic_snapshots: List[DynamicLoadSnapshot] = field(default_factory=list)  # 动态负载快照列表
    
    # 服务端负载计算
    min_player_count_for_server_load: int = 1  # 最小人数（用于计算服务端负载投放）
    
    notes: str = "负载计算功能可提供编辑时和运行时的负载辅助检测"
    
    class Config:
        doc_reference = ""


# ==================== 资产相关配置 ====================
# 设计参考：资产系统相关内部说明

@dataclass
class SkillAnimationConfig:
    """
    技能动画配置
    技能动画是为实体设计和实现的各种战斗动作的动画资产
    """
    
    animation_id: str  # 动画资产ID
    animation_name: str = ""  # 动画名称
    
    # 依赖信息
    required_entity_type: str = "character"  # 必须依赖的实体类型（character/creature）
    
    # 引用方式
    referenced_by_skill_id: Optional[str] = None  # 被哪个技能引用
    
    # 动画参数
    duration_seconds: float = 1.0  # 动画时长（秒）
    is_looping: bool = False  # 是否循环播放
    
    notes: str = "角色技能动画必须依赖角色实体，通过技能释放时播放"
    
    class Config:
        doc_reference = ""


class EffectType(Enum):
    """特效类型"""
    TIMED = "timed"  # 限时特效 - 播放一次后结束
    LOOPING = "looping"  # 循环特效 - 循环播放直到被停止


@dataclass
class AdvancedEffectAssetConfig:
    """
    高级特效资产配置（重命名以避免冲突）
    特效是游戏运行时用于增强视觉表现效果的美术资产
    特效必须依赖实体，挂载在实体的挂接点上
    
    原名：EffectConfig
    """
    
    effect_id: str  # 特效资产ID
    effect_name: str = ""  # 特效名称
    effect_type: EffectType = EffectType.TIMED  # 特效类型
    
    # 挂载信息
    required_component: str = "特效播放"  # 必须依赖的组件
    default_attach_point: str = "RootNode"  # 默认挂接点
    
    # 特效参数
    duration_seconds: Optional[float] = None  # 时长（限时特效有效）
    
    # 使用方式
    can_use_in_component: bool = True  # 可通过组件挂载
    can_use_in_node_graph: bool = True  # 可通过节点图控制
    
    notes: str = "特效必须依赖实体，以实体的挂接点为基准位置"
    
    class Config:
        doc_reference = ""


@dataclass
class PresetStateConfig:
    """
    预设状态配置
    预设状态是动态物件实体运行时的表现动画
    """
    
    preset_state_id: str  # 预设状态ID
    preset_state_name: str = ""  # 预设状态名称
    
    # 状态维度
    dimension_name: str = "默认维度"  # 表现维度名称
    state_value: int = 0  # 状态值（用于区分同一维度的不同状态）
    
    # 所属物件
    dynamic_object_id: str = ""  # 所属动态物件ID
    
    # 状态池
    available_states: List[int] = field(default_factory=list)  # 可用的状态值列表
    initial_state_value: int = 0  # 初始状态值
    
    # 管理方式
    can_edit_in_entity: bool = True  # 可在实体编辑时设置初始状态
    can_manage_in_node_graph: bool = True  # 可通过节点图管理
    
    notes: str = "预设状态是动态物件的表现动画，同一维度通过状态值区分"
    
    class Config:
        doc_reference = ""


# ==================== 编辑器界面配置（低优先级） ====================
# 设计参考：编辑器界面相关内部说明

@dataclass
class SandboxInterfaceConfig:
    """
    千星沙箱界面配置
    千星沙箱主界面功能配置
    """
    
    # 资源管理器
    enable_resource_manager: bool = True  # 左侧资源管理器
    
    # 节点图资源管理器
    enable_server_node_graph_manager: bool = True  # 服务器节点图资源管理器（默认打开）
    enable_client_node_graph_manager: bool = True  # 客户端节点图资源管理器
    
    # 可打开的窗口
    available_windows: List[str] = field(default_factory=lambda: [
        "resource_manager",  # 资源管理器
        "client_node_graph_manager",  # 客户端节点图资源管理器
        "node_manager",  # 节点管理器
        "log_window",  # 日志
        "server_signal_manager",  # 服务器信号管理器
        "load_detection"  # 负载检测
    ])
    
    # 节点图管理功能
    support_entity_node_graph: bool = True  # 实体节点图
    support_state_node_graph: bool = True  # 状态节点图
    support_profession_node_graph: bool = True  # 职业节点图
    support_item_node_graph: bool = True  # 道具节点图
    support_local_filter_node_graph: bool = True  # 本地过滤器节点图（布尔、整数）
    support_skill_node_graph: bool = True  # 技能节点图
    
    # 复合节点管理
    support_compound_node: bool = True  # 复合节点创建和管理
    
    # 外部资产导入
    support_external_node_graph_import: bool = True  # 节点图外部资产导入
    support_external_compound_node_import: bool = True  # 复合节点外部资产导入
    
    notes: str = "千星沙箱主界面配置"
    
    class Config:
        doc_reference = ""


@dataclass
class TerrainEditConfig:
    """
    地形编辑配置
    地形编辑界面功能配置
    """
    
    # 基础设置
    min_unit_size: tuple = (5, 5, 2.5)  # 最小操作单位（长、宽、层高）
    initial_terrain_size: tuple = (100, 100)  # 初始地形大小
    initial_position: tuple = (0, 0, 0)  # 初始创建位置
    
    # 可用材质（7种）
    available_materials: List[str] = field(default_factory=lambda: [
        "grass", "stone", "sand", "snow", "wood", "metal", "custom"
    ])
    
    # 地形操作模式
    support_pointer_mode: bool = True  # 指针操作
    support_free_edit_mode: bool = True  # 自由编辑
    support_precise_edit_mode: bool = True  # 精准编辑
    
    # 笔刷功能
    brush_modes: List[str] = field(default_factory=lambda: [
        "block_operation",  # 地块操作（创建、删除、抹平）
        "slope_operation",  # 斜坡操作（创建斜坡、删除斜坡）
        "water_operation",  # 水体操作（创建水体、删除水体）
        "path_operation"  # 路径操作（创建路径、删除路径）
    ])
    
    # 变换工具
    support_move_tool: bool = True  # 移动工具
    support_rotate_tool: bool = True  # 旋转工具（仅Y轴）
    
    # 快捷操作
    support_uniform_height: bool = True  # 统一高度（Alt键）
    support_quick_generation: bool = True  # 快捷生成（Shift键）
    
    # 层数调整
    support_layer_adjust: bool = True  # 抬高/下沉一层
    
    # 地块选择和分割
    support_block_selection: bool = True  # 地块选择
    support_terrain_split: bool = True  # 地形分割
    
    notes: str = "地形编辑界面配置"
    
    class Config:
        doc_reference = ""


@dataclass
class MultiplayerTestConfig:
    """
    多人试玩配置
    多人试玩功能配置
    """
    
    # 房间设置
    max_invited_players_per_day: int = 16  # 每日最多邀请玩家数
    invitation_response_timeout: int = 15  # 邀请响应超时时间（秒）
    
    # 区域设置
    support_waiting_area: bool = True  # 等候区
    support_ready_area: bool = True  # 准备区
    
    # 房间功能
    support_player_invite: bool = True  # 玩家邀请（搜索、今日列表、好友）
    support_seat_switch: bool = True  # 席位切换
    support_ready_system: bool = True  # 准备系统
    
    # 试玩设置
    support_level_update: bool = True  # 更新关卡
    support_test_report_generation: bool = True  # 生成试玩报告
    support_character_display: bool = True  # 角色展示设置
    support_settlement_toggle: bool = True  # 启用结算开关
    support_avatar_type_selection: bool = True  # 试用奇偶选择
    support_seat_data_settings: bool = True  # 试玩数据设置
    
    # 成员管理
    support_kick_player: bool = True  # 请离玩家
    support_move_to_waiting: bool = True  # 移至等候区
    support_room_dismiss: bool = True  # 房间解散
    support_room_minimize: bool = True  # 房间收起
    
    # 局内控制
    support_retry: bool = True  # 重新挑战（仅房主）
    support_terminate: bool = True  # 中断挑战
    
    # 报告存储路径
    report_storage_path: str = r""
    
    notes: str = "多人试玩功能配置"
    
    class Config:
        doc_reference = ""


@dataclass
class SingleplayerTestConfig:
    """
    试玩配置
    单人试玩功能配置
    """
    
    # 试玩流程
    test_flow: List[str] = field(default_factory=lambda: [
        "preparation",  # 试玩前准备（上传、校验）
        "outfit_display",  # 装扮展示
        "loading_screen",  # 加载界面
        "enter_level",  # 进入关卡
        "settlement"  # 结算关卡
    ])
    
    # 试玩前设置
    support_player_selection: bool = True  # 试玩玩家选取
    support_chip_data_settings: bool = True  # 芯片数据设置
    
    # 试玩选项
    enable_outfit_display: bool = True  # 装扮展示阶段（可关闭）
    enable_settlement: bool = True  # 启用试玩结算（可关闭）
    support_avatar_type_selection: bool = True  # 试用奇偶选择
    
    # 局内控制
    support_retry: bool = True  # 重新挑战
    support_terminate: bool = True  # 中断挑战
    
    # 校验系统
    enable_test_validation: bool = True  # 试玩必要校验
    
    notes: str = "单人试玩功能配置"
    
    class Config:
        doc_reference = ""


@dataclass
class AssetImportExportConfig:
    """
    资产导入导出配置
    资产导入导出功能配置
    """
    
    # 导出方式
    export_methods: List[str] = field(default_factory=lambda: [
        "in_level_select",  # 关卡内选中导出（单个）
        "in_level_multi_select",  # 关卡内多选导出（组合）
        "interface_export"  # 界面单选/多选导出（组合）
    ])
    
    # 可导出内容
    exportable_content: List[str] = field(default_factory=lambda: [
        "terrain",  # 地形实体
        "object_entity",  # 物件实体
        "creature_entity",  # 造物实体
        "object_component",  # 物件元件
        "creature_component",  # 造物元件
        "server_node_graph",  # 服务器节点图
        "compound_node",  # 复合节点
        "skill",  # 技能
        "state",  # 状态
        "item"  # 道具
    ])
    
    # 文件格式
    export_file_format: str = ".gia"  # 导出文件格式
    
    # 关联项导出
    auto_export_node_graph: bool = True  # 自动导出挂载节点图
    auto_export_component: bool = True  # 自动导出归属元件
    
    # 导入功能
    support_local_asset_import: bool = True  # 本地资产导入
    auto_import_on_first_open: bool = True  # 首次打开自动导入
    
    # 资产使用
    support_component_to_tab: bool = True  # 元件添加至页签
    support_entity_to_level: bool = True  # 实体添加至关卡
    support_combined_asset_import: bool = True  # 组合资产导入
    
    # 引用关系恢复
    preserve_reference_relationship: bool = True  # 保留引用关系（通过GUID）
    
    notes: str = "资产导入导出功能配置"
    
    class Config:
        doc_reference = ""


@dataclass
class OverallInterfaceConfig:
    """
    整体界面配置
    千星沙箱整体界面功能配置
    """
    
    # 系统菜单功能
    system_menu_functions: List[str] = field(default_factory=lambda: [
        # 基础功能
        "save_archive", "open_archive", "upload_level", "open_sandbox", "exit_archive",
        # 设置和管理
        "level_settings", "ui_widget_group_edit", "main_camera_management", 
        "test_play", "multiplayer_test", "peripheral_system_management",
        # 资源管理
        "backpack_currency_management", "gift_box_management",
        "timer_management", "level_variable_management", "preset_point_management",
        "skill_resource_management", "bgm_management", "asset_import_export",
        "equipment_data_management", "shop_template_management", "advanced_data_management",
        # 其他功能
        "ingame_save_management", "test_temp_data_management", "entity_deployment_group",
        "unit_tag_management", "shield_management", "scan_tag_management",
        "path_management", "multilingual_text_management", "environment_light_management",
        "text_chat_management", "shortcut_view",
        # 创作者信息
        "creator_level", "creator_permission"
    ])
    
    # 资产栏功能
    asset_bar_features: List[str] = field(default_factory=lambda: [
        "search",  # 搜索
        "uncategorized_tab",  # 未分类页签
        "custom_tab_management"  # 自定义页签管理（新建、重命名、置顶、解散）
    ])
    
    # 快捷设置
    quick_settings: Dict[str, Any] = field(default_factory=lambda: {
        "camera_horizontal_speed": 1.0,  # 镜头水平速度
        "camera_vertical_speed": 1.0,  # 镜头垂直速度
        "horizontal_lock": False,  # 水平锁
        "ground_snap": False,  # 贴地摆放
        "surface_snap": False,  # 表面吸附
        "align_after_snap": False,  # 吸附表面后转正
        "center_align": False,  # 中心对齐
        "show_distance_when_moving": True,  # 移动时显示距离
        "show_creature_combat_range": True,  # 造物入战范围
        "show_preset_points": True,  # 预设点常驻显示
        "show_empty_objects": False,  # 空物件提示模型常驻显示
        "show_paths": True,  # 路径常驻显示
        "alt_copy_count": 1,  # Alt复制数量
        "environment_settings": {  # 环境设置
            "background": "default",
            "lighting": "default",
            "weather": "clear"
        }
    })
    
    # 编辑模式
    edit_modes: List[str] = field(default_factory=lambda: [
        "terrain_edit",  # 地形编辑
        "entity_placement",  # 实体摆放
        "component_library",  # 元件库
        "combat_preset"  # 战斗预设
    ])
    
    # 相机操作快捷键
    camera_shortcuts: Dict[str, str] = field(default_factory=lambda: {
        "free_move": "WASD",
        "ascend": "E",
        "descend": "Q",
        "rotate": "鼠标右键",
        "horizontal_move": "鼠标中键",
        "zoom": "鼠标滚轮",
        "toggle_horizontal_lock": "ALT+L"
    })
    
    notes: str = "千星沙箱整体界面配置"
    
    class Config:
        doc_reference = ""


@dataclass
class ComponentLibraryConfig:
    """
    元件库配置
    用于管理元件的界面配置（编辑器UI功能）
    """
    
    # 自定义页签
    custom_tabs: List[str] = field(default_factory=lambda: ["未分类"])  # 自定义页签列表
    
    # 基础模块元件分类
    dynamic_components: List[str] = field(default_factory=lambda: ["流程物件", "玩法机关", "其他"])
    static_components: List[str] = field(default_factory=lambda: ["树木", "植被", "地貌"])
    
    # 元件操作
    support_copy_paste: bool = True  # 支持复制粘贴
    support_save_as: bool = True  # 支持另存为
    support_overwrite_save: bool = True  # 支持覆盖保存
    
    notes: str = "元件库界面配置，用于管理元件资产"
    
    class Config:
        doc_reference = ""


@dataclass
class EditorLevelSettingsUIConfig:
    """
    编辑器关卡设置UI配置（重命名以避免与management.LevelSettingsConfig冲突）
    关卡的整体设置（编辑器UI功能，用于界面展示和编辑）
    原名：LevelSettingsConfig
    """
    
    # 基础设置
    scene_effective_range: Optional[tuple] = None  # 场景生效范围
    environment_level: int = 1  # 环境等级（1-120）
    initial_time: str = "12:00"  # 初始时间
    time_flow_ratio: float = 1.0  # 时间流逝比例（秒=分钟，最大60）
    
    # 负载设置
    load_optimization_level: LoadLevel = LoadLevel.MEDIUM
    enable_out_of_range_optimization: bool = True  # 超出范围不运行
    
    # 仇恨设置
    hatred_type: str = "default"  # default/custom
    
    # 护盾设置
    shield_calculation_mode: str = "unified"  # unified统一计算/independent独立计算
    
    # 阵营设置
    camp_configs: List[Dict[str, Any]] = field(default_factory=list)
    
    # 出生点设置
    spawn_points: List[Dict[str, Any]] = field(default_factory=list)
    
    # 复苏点设置
    respawn_points: List[Dict[str, Any]] = field(default_factory=list)
    
    # 人数设置
    player_groups: List[Dict[str, Any]] = field(default_factory=list)
    
    # 加载界面
    loading_background_image: str = ""
    loading_title: str = ""
    loading_description: str = ""
    
    # 结算设置
    settlement_type: str = "personal"  # personal个人/camp阵营
    enable_in_game_ranking: bool = False
    
    notes: str = "关卡设置界面配置"
    
    class Config:
        doc_reference = ""


@dataclass
class EntityPlacementConfig:
    """
    实体摆放配置
    实体摆放界面功能配置（编辑器UI功能）
    """
    
    # 摆放操作
    support_single_select: bool = True
    support_multi_select: bool = True
    support_transform_tools: bool = True  # 移动、旋转、缩放
    
    # 变换工具设置
    transform_tool_type: str = "all_in_one"  # all_in_one/move/rotate/scale
    enable_step_mode: bool = True  # 步进功能
    
    # 复制设置
    alt_copy_count: int = 1  # Alt复制数量
    
    # 便捷功能
    enable_ground_snap: bool = False  # 贴地摆放
    enable_surface_snap: bool = False  # 表面吸附
    enable_align_after_snap: bool = False  # 吸附后转正
    enable_center_align: bool = False  # 中心对齐
    show_distance_when_moving: bool = True  # 移动时显示距离
    
    # 显示设置
    show_creature_combat_range: bool = True  # 显示造物入战范围
    show_preset_points: bool = True  # 显示预设点
    show_empty_objects: bool = False  # 显示空物件
    show_path_points: bool = True  # 显示路径点
    
    notes: str = "实体摆放界面配置"
    
    class Config:
        doc_reference = ""


@dataclass
class CombatPresetConfig:
    """
    战斗预设配置
    战斗预设界面功能配置（编辑器UI功能）
    """
    
    # 编辑模块
    available_modules: List[str] = field(default_factory=lambda: [
        "player_and_profession",  # 玩家与职业编辑
        "unit_state",  # 单位状态编辑
        "skill",  # 技能编辑
        "local_projectile",  # 本地投射物编辑
        "item"  # 道具编辑
    ])
    
    # 自动保存设置
    auto_save_modules: List[str] = field(default_factory=lambda: ["player_and_profession"])
    manual_save_modules: List[str] = field(default_factory=lambda: ["unit_state", "skill", "local_projectile", "item"])
    
    # 模型设置
    support_gender_switch: bool = True  # 支持切换性别
    default_gender: str = "male"  # male/female
    
    notes: str = "战斗预设界面配置"
    
    class Config:
        doc_reference = ""


# ==================== 配置集合 ====================

@dataclass
class AdditionalAdvancedConfigsCollection:
    """额外高级配置集合"""
    
    # 界面控件组
    ui_widget_groups: List[UIWidgetGroupConfig] = field(default_factory=list)
    ui_layouts: List[UILayoutConfig] = field(default_factory=list)
    
    # 负载计算
    load_calculation: Optional[LoadCalculationConfig] = None
    
    # 资产配置
    skill_animations: List[SkillAnimationConfig] = field(default_factory=list)
    effects: List[AdvancedEffectAssetConfig] = field(default_factory=list)  # 更新引用
    preset_states: List[PresetStateConfig] = field(default_factory=list)
    
    # 编辑器界面配置（低优先级）
    sandbox_interface: Optional[SandboxInterfaceConfig] = None
    terrain_edit: Optional[TerrainEditConfig] = None
    multiplayer_test: Optional[MultiplayerTestConfig] = None
    singleplayer_test: Optional[SingleplayerTestConfig] = None
    asset_import_export: Optional[AssetImportExportConfig] = None
    overall_interface: Optional[OverallInterfaceConfig] = None
    component_library: Optional[ComponentLibraryConfig] = None
    level_settings: Optional[EditorLevelSettingsUIConfig] = None  # 重命名
    entity_placement: Optional[EntityPlacementConfig] = None
    combat_preset: Optional[CombatPresetConfig] = None


if __name__ == "__main__":
    print("✅ 额外高级配置模块加载成功")
    print("\n📋 配置类列表:")
    print("\n高级概念:")
    print("  1. UIWidgetGroupConfig - 界面控件组配置")
    print("  2. UILayoutConfig - 界面布局配置")
    
    print("\n辅助功能:")
    print("  3. LoadCalculationConfig - 负载计算功能配置")
    print("  4. StaticLoadIndicator - 静态负载指标")
    print("  5. RegionalLoadDetail - 区域负载详情")
    print("  6. DynamicLoadSnapshot - 动态负载快照")
    
    print("\n资产相关:")
    print("  7. SkillAnimationConfig - 技能动画配置")
    print("  8. EffectConfig - 特效配置")
    print("  9. PresetStateConfig - 预设状态配置")
    
    print("\n编辑器界面（UI功能）:")
    print("  10. SandboxInterfaceConfig - 千星沙箱界面配置")
    print("  11. TerrainEditConfig - 地形编辑配置")
    print("  12. MultiplayerTestConfig - 多人试玩配置")
    print("  13. SingleplayerTestConfig - 单人试玩配置")
    print("  14. AssetImportExportConfig - 资产导入导出配置")
    print("  15. OverallInterfaceConfig - 整体界面配置")
    print("  16. ComponentLibraryConfig - 元件库配置")
    print("  17. LevelSettingsConfig - 关卡设置配置")
    print("  18. EntityPlacementConfig - 实体摆放配置")
    print("  19. CombatPresetConfig - 战斗预设配置")
    
    print("\n📄 文档覆盖 (共17个文档):")
    print("\n高级概念:")
    print("  ✅ 界面控件组/界面布局.md")
    print("  ✅ 元件组.md")
    print("  ✅ 掉落物.md")
    
    print("\n辅助功能:")
    print("  ✅ 负载计算功能.md")
    
    print("\n资产相关:")
    print("  ✅ 技能动画.md")
    print("  ✅ 特效.md")
    print("  ✅ 预设状态.md")
    
    print("\n界面介绍:")
    print("  ✅ 千星沙箱.md")
    print("  ✅ 地形编辑.md")
    print("  ✅ 多人试玩.md")
    print("  ✅ 试玩.md")
    print("  ✅ 资产导入导出.md")
    print("  ✅ 整体界面.md")
    print("  ✅ 元件库.md")
    print("  ✅ 关卡设置.md")
    print("  ✅ 实体摆放.md")
    print("  ✅ 战斗预设.md")
    
    print("\n💡 注意：界面介绍相关文档为编辑器UI功能，优先级较低")

