# backend/main.py
from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session
from datetime import datetime
from .discord import send_discord_notification  # absolute import
from .init_db import Base, engine, SessionLocal  # absolute imports
from .models import Contact
import os
from dotenv import load_dotenv

load_dotenv()

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

# ---------------- Contact Numbers API ----------------
@app.get("/api/contact-numbers")
def get_contact_numbers():
    return {
        "numbers": [
            os.getenv("CONTACT_NUMBER_1"),
            os.getenv("CONTACT_NUMBER_2")
        ]
    }


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

        #send Discord notification
        send_discord_notification({
            "name": contact.name,
            "email": contact.email,
            "phone": contact.phone,
            "role": contact.role,
            "message": contact.message,
            "created_at": contact.created_at,
        })
        return {"status": "success", "message": "Contact saved successfully"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

