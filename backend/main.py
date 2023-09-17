from app import models
from app.db.db_config import engine
from app.routers import api_router
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]


def create_app():
    fastapi_app = FastAPI()
    fastapi_app.include_router(api_router, prefix="/api")
    models.Base.metadata.create_all(bind=engine)
    fastapi_app.add_middleware(
        CORSMiddleware,
        allow_origins=ORIGINS,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    return fastapi_app


app = create_app()
