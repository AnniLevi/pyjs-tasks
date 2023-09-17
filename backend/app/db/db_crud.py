from sqlalchemy.orm import Session

from ..models import Task
from ..schemas import tasks_schemas


def fetch_tasks_db(db: Session, offset: int, limit: int):
    return db.query(Task).order_by(Task.id.desc()).offset(offset).limit(limit).all()


def fetch_task_detail_db(db: Session, task_id: int):
    return db.query(Task).filter_by(id=task_id).one_or_none()


def create_new_task_db(db: Session, task_schema: tasks_schemas.TaskCreate) -> Task:
    new_task = Task(**task_schema.model_dump())
    db.add(new_task)
    db.commit()
    db.refresh(new_task)
    return new_task


def update_task_db(db: Session, task_id: int, data_to_update: tasks_schemas.TaskUpdate):
    updated = (
        db.query(Task)
        .filter_by(id=task_id)
        .update(data_to_update.model_dump(exclude_unset=True))
    )
    db.commit()
    return updated


def delete_task_db(db: Session, task_id: int):
    deleted = db.query(Task).filter_by(id=task_id).delete()
    db.commit()
    return deleted
