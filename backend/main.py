from app import models
from app.db.db_config import engine
from app.routers import api_router
from fastapi import FastAPI


def create_app():
    fastapi_app = FastAPI()
    fastapi_app.include_router(api_router, prefix="/api")
    models.Base.metadata.create_all(bind=engine)
    return fastapi_app


app = create_app()
