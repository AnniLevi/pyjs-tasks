import os

import requests
from fastapi import APIRouter, status

from ..schemas import weather_schemas

weather_router = APIRouter()

WEATHER_API_KEY = os.environ.get("WEATHER_API_KEY")
WEATHER_API_URL = os.environ.get("WEATHER_API_URL")


@weather_router.post(
    "/",
    status_code=status.HTTP_200_OK,
)
def get_weather_view(location: weather_schemas.Location):
    url = f"{WEATHER_API_URL}/data/2.5/weather?appid={WEATHER_API_KEY}&lat={location.latitude}&lon={location.longitude}&units=metric"
    return requests.get(url).json()
