from fastapi import APIRouter

from app.schemas.content import ContentBlockOut, ContentBlockUpdate

router = APIRouter()


@router.get("/modules")
def admin_modules() -> list[dict[str, str]]:
    return [
        {"key": "brand", "title": "Brand system"},
        {"key": "homepage", "title": "Homepage builder"},
        {"key": "shipments", "title": "Shipment tracking"},
        {"key": "seo", "title": "SEO center"},
        {"key": "translations", "title": "Translations"},
        {"key": "users", "title": "Users and RBAC"},
    ]


@router.put("/content/{key}", response_model=ContentBlockOut)
def update_content(key: str, payload: ContentBlockUpdate) -> ContentBlockOut:
    return ContentBlockOut(key=key, locale=payload.locale, title=payload.title, body=payload.body)
