from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware
from slowapi.util import get_remote_address

from app.api import admin, auth, content, health, shipments
from app.core.config import settings

limiter = Limiter(key_func=get_remote_address)

app = FastAPI(
    title="Hamroh Cargo API",
    version="1.0.0",
    description="Enterprise logistics, content, tracking, and admin API for Hamroh Cargo.",
)

app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
app.add_middleware(SlowAPIMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/health", tags=["health"])
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(content.router, prefix="/content", tags=["content"])
app.include_router(shipments.router, prefix="/shipments", tags=["shipments"])
app.include_router(admin.router, prefix="/admin", tags=["admin"])
