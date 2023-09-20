import os
from time import sleep

import requests
from celery import Celery

app = Celery(__name__)

celery_config = {
    "CELERY_BROKER_URL": os.environ.get("CELERY_BROKER_URL", "redis://localhost:6379"),
    "CELERY_RESULT_BACKEND": os.environ.get(
        "CELERY_RESULT_BACKEND", "redis://localhost:6379"
    ),
}

app.config_from_object(celery_config)


@app.task(name="monitor_weather_task")
def monitor_weather_task(url):
    sleep(3)
    return requests.get(url).json()
