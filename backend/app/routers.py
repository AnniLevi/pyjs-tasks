from fastapi import APIRouter

from .views.tasks_views import tasks_router

api_router = APIRouter()

api_router.include_router(tasks_router, prefix="/tasks")
