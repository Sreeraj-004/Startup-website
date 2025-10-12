BetaMind TechSolutions - Portfolio Webpage

This repository contains a simple portfolio webpage for BetaMind TechSolutions, built with:

Frontend: React + Tailwind CSS v3

Backend: FastAPI

Docker: For easy development and deployment

Project Structure

Startup-portfolio/
├── backend/ # FastAPI backend
├── frontend/ # React frontend
├── docker-compose.yml
├── README.md

Quick Start with Docker (Recommended)

Clone the repository:
git clone https://github.com/YOUR_GITHUB_USERNAME/Startup-portfolio.git

cd Startup-portfolio

Build and start containers:
docker-compose up --build

Backend: http://localhost:8000

Frontend: http://localhost:3000

Frontend hot reload is enabled (changes in frontend/src update automatically).
Backend hot reload is enabled via uvicorn --reload.

Stop containers:
docker-compose down

Local Development (Optional)

If you prefer to run the frontend and backend locally without Docker:

Backend:
cd backend
python -m venv venv

Activate venv:
Windows: venv\Scripts\activate
Mac/Linux: source venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000 --reload

Frontend:
cd frontend
npm install
npm start

Open http://localhost:3000
 in the browser. Tailwind CSS classes and hot reload will work automatically.

Notes

Tailwind CSS v3 is used for styling.

Animations are configured in frontend/tailwind.config.js.

Replace the placeholder BetaMind logo in frontend/src/logo.svg with your actual logo.

The project is already Dockerized for easy setup across different machines.
