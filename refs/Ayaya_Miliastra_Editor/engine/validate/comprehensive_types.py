from __future__ import annotations

from dataclasses import dataclass
from typing import Any, Dict

from .issue import EngineIssue


@dataclass
class ValidationIssue(EngineIssue):
    """统一的存档验证问题数据结构。"""

    suggestion: str = ""
    reference: str = ""

    def __post_init__(self) -> None:
        if self.detail is None:
            self.detail = {}

    def __str__(self) -> str:
        prefix = {
            "error": "❌",
            "warning": "⚠️",
            "info": "ℹ️",
        }.get(self.level, "·")
        location = self.location or ""
        result = f"{prefix} [{self.category}] {location}\n  {self.message}"
        if self.suggestion:
            result += f"\n  💡 建议：{self.suggestion}"
        if self.reference:
            result += f"\n  📖 参考：{self.reference}"
        return result


__all__ = ["ValidationIssue"]

