from pydantic import BaseModel


class TaskBase(BaseModel):
    title: str
    description: str


class TaskCreate(TaskBase):
    pass


class TaskUpdate(TaskBase):
    title: str | None = None
    description: str | None = None
    is_done: bool = False


class Task(TaskBase):
    id: int
    is_done: bool = False
