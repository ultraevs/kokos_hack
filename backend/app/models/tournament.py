from sqlalchemy import Column, Integer, String, ARRAY
from app.db.base import Base

class User(Base):
    __tablename__ = "kokos_tournament"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=False, index=True, nullable=False)
    date = Column(String, unique=False, index=True, nullable=False)
    commands = Column(ARRAY(String), nullable=False)
    matches = Column(ARRAY(String), nullable=False)
