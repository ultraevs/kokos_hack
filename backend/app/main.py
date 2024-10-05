from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi
from pydantic import BaseModel
from app.api.endpoints import users
from app.db.base import Base
from app.db.session import engine
from app.services.cardGenerator import Cards

app = FastAPI(docs_url="/v1/swagger", openapi_url="/v1/openapi.json")

# cards = Cards()

def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    openapi_schema = get_openapi(
        title="KOKOS API",
        version="1.0.0",
        description="--",
        routes=app.routes
    )
    app.openapi_schema = openapi_schema
    return app.openapi_schema

app.openapi = custom_openapi

class ImageBase64(BaseModel):
    image: str

@app.get("/items/")
def read_items():
    return [{"item_id": "ZZZZZOOOVVV"}]

@app.post('/generate_card/')
def generate_card(image: ImageBase64):
    card = cards.generate_card(image.image)
    return card

Base.metadata.create_all(bind=engine)

app.include_router(users.router, prefix="/users", tags=["users"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
