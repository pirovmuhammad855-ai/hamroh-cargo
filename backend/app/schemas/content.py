from pydantic import BaseModel


class ContentBlockOut(BaseModel):
    key: str
    locale: str
    title: str
    body: str


class ContentBlockUpdate(BaseModel):
    title: str
    body: str
    locale: str = "tj"
