from fastapi import APIRouter, HTTPException, status

from app.core.security import create_access_token
from app.schemas.auth import LoginRequest, TokenResponse

router = APIRouter()


@router.post("/login", response_model=TokenResponse)
def login(payload: LoginRequest) -> TokenResponse:
    # Replace with database lookup. This bootstrap account keeps the contract
    # explicit while the first admin is provisioned.
    if payload.email != "admin@hamrohcargo.tj" or payload.password != "change-me-now":
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    token = create_access_token(subject=payload.email, role="super_admin")
    return TokenResponse(access_token=token, role="super_admin")
