from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.dialects.postgresql import TEXT

from .db.db_config import Base


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    description = Column(TEXT, nullable=False)
    is_done = Column(Boolean, default=False)
