from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Portfolio Backend")

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify your domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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
