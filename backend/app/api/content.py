from fastapi import APIRouter

from app.schemas.content import ContentBlockOut

router = APIRouter()


@router.get("/homepage", response_model=list[ContentBlockOut])
def homepage_content() -> list[ContentBlockOut]:
    return [
        ContentBlockOut(
            key="hero",
            locale="en",
            title="Fast Delivery From China",
            body="Professional cargo and China marketplace assistant service between China and Tajikistan.",
        )
    ]
