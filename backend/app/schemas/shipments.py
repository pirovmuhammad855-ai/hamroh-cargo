from datetime import datetime

from pydantic import BaseModel

from app.models.entities import ShipmentStatus


class ShipmentUpdateOut(BaseModel):
    status: ShipmentStatus
    note: str
    created_at: datetime


class ShipmentOut(BaseModel):
    tracking_code: str
    customer_name: str
    status: ShipmentStatus
    operator_note: str | None = None
    updates: list[ShipmentUpdateOut] = []


class ShipmentCreate(BaseModel):
    tracking_code: str
    customer_name: str
    operator_note: str | None = None
