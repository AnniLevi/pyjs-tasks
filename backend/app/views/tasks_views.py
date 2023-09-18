from time import sleep

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from ..db import db_crud
from ..dependencies import get_db, pagination_query_params
from ..schemas import tasks_schemas

tasks_router = APIRouter()


@tasks_router.get(
    "/",
    response_model=list[tasks_schemas.Task],
    status_code=status.HTTP_200_OK,
)
def all_tasks_view(
    query_params: dict = Depends(pagination_query_params), db: Session = Depends(get_db)
):
    sleep(5)
    return db_crud.fetch_tasks_db(db=db, **query_params)


@tasks_router.post(
    "/", response_model=tasks_schemas.Task, status_code=status.HTTP_201_CREATED
)
def create_task_view(task: tasks_schemas.TaskCreate, db: Session = Depends(get_db)):
    return db_crud.create_new_task_db(db=db, task_schema=task)


@tasks_router.get(
    "/{task_id}",
    response_model=tasks_schemas.Task,
    status_code=status.HTTP_200_OK,
)
def task_detail_view(task_id: int, db: Session = Depends(get_db)):
    sleep(5)
    task = db_crud.fetch_task_detail_db(db=db, task_id=task_id)
    if not task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Task not found"
        )
    return task


@tasks_router.patch(
    "/{task_id}",
    status_code=status.HTTP_200_OK,
)
def update_task_view(
    task_id: int, data: tasks_schemas.TaskUpdate, db: Session = Depends(get_db)
):
    tasks_updated = db_crud.update_task_db(db, task_id, data_to_update=data)
    if tasks_updated == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Task not found"
        )
    return {"updated": tasks_updated}


@tasks_router.delete(
    "/{task_id}",
    status_code=status.HTTP_200_OK,
)
def delete_task_view(task_id: int, db: Session = Depends(get_db)):
    tasks_deleted = db_crud.delete_task_db(db=db, task_id=task_id)
    if tasks_deleted == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Task not found"
        )
    return {"deleted": tasks_deleted}
