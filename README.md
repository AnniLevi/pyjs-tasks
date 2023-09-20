## Task List Management Application

### Features

- Ready-made solution with backend and frontend layers
- Displaying task list and task detail page
- Creating / modifying / deleting a task
- Error handling
- Calculation of server response time with warning if server response delay exceeds 500 milliseconds
- The application is packaged in Docker containers and ready to launch
- Using a third party OpenWeather API to get weather data
- Using Celery queue mechanism to process requests to external API

### Technologies used

- FastAPI
- SQLAlchemy
- React
- React Router
- Docker
- Celery
- Pipenv
- Pre-commit

### Prerequisites

- Docker

### How to run

- Create .env files based on the given examples
- Register on the OpenWeather service to get the OpenWeather API key. Place it in the .env file
- The response delay in the backend part is added for an example of handling the response time from the server. To speed up the application, it should be removed
- Run Docker in the root directory

```
docker-compose up -d --build
```

- Get access to the application on http://localhost:3000/
