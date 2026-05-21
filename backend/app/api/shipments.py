from datetime import datetime, timezone

from fastapi import APIRouter, HTTPException, status

from app.models.entities import ShipmentStatus
from app.schemas.shipments import ShipmentOut, ShipmentUpdateOut

router = APIRouter()


@router.get("/{tracking_code}", response_model=ShipmentOut)
def get_shipment(tracking_code: str) -> ShipmentOut:
    if not tracking_code:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Tracking code is required")

    return ShipmentOut(
        tracking_code=tracking_code,
        customer_name="Hamroh customer",
        status=ShipmentStatus.china_warehouse,
        operator_note="Package received at China warehouse. Packaging review is pending.",
        updates=[
            ShipmentUpdateOut(status=ShipmentStatus.created, note="Shipment created by operator.", created_at=datetime(2026, 5, 21, 9, 0, tzinfo=timezone.utc)),
            ShipmentUpdateOut(status=ShipmentStatus.china_warehouse, note="Package received in China warehouse.", created_at=datetime(2026, 5, 21, 12, 30, tzinfo=timezone.utc)),
        ],
    )
