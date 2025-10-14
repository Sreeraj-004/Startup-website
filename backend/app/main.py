# backend/main.py
from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session
from datetime import datetime

from .init_db import Base, engine, SessionLocal  # absolute imports
from .models import Contact

# Create tables
Base.metadata.create_all(bind=engine)

# FastAPI app
app = FastAPI(title="Portfolio Backend")

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For production, restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- Contact API ----------------
class ContactRequest(BaseModel):
    name: str
    email: str
    phone: str
    role: str
    message: str

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/api/contact")
def save_contact(data: ContactRequest, db: Session = Depends(get_db)):
    try:
        contact = Contact(
            name=data.name,
            email=data.email,
            phone=data.phone,
            role=data.role,
            message=data.message,
            created_at=datetime.utcnow(),
        )
        db.add(contact)
        db.commit()
        db.refresh(contact)
        return {"status": "success", "message": "Contact saved successfully"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

# ---------------- Root & About ----------------
@app.get("/")
def read_root():
    return {"message": "Welcome to my portfolio backend"}

@app.get("/api/about")
def about():
    return {
        "name": "Sreeraj Pv",
        "role": "Developer",
        "description": "I build creative, performant web applications."
    }
