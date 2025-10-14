# models.py
from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from .init_db import Base

class Contact(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))
    email = Column(String(100))
    phone = Column(String(20))
    role = Column(String(30))
    message = Column(String(1000))
    created_at = Column(DateTime, default=datetime.utcnow)
