from sqlalchemy import Column, Integer, String
from sqlalchemy.dialects.postgresql import TEXT

from .config.db_config import Base


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    description = Column(TEXT)
