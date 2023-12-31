from fastapi import APIRouter

from .views.tasks_views import tasks_router
from .views.weather_views import weather_router

api_router = APIRouter()

api_router.include_router(tasks_router, prefix="/tasks")
api_router.include_router(weather_router, prefix="/weather")
