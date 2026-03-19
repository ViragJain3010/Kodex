from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
import os
from dotenv import load_dotenv
from app.schemas.ai import AIAskRequest
from app.services.ai_service import AIService

from pathlib import Path
load_dotenv(dotenv_path=Path(__file__).parent.parent / ".env")

app = FastAPI(title="Kodex AI Service", description="Internal AI Microservice for Kodex")

ai_service = AIService()

# In a production environment, this would be restricted to the internal network
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Internal only, so we can be permissive or restrict to Node server IP
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "ai-service"}

@app.post("/internal/ask")
async def ask_ai(request: AIAskRequest):
    return StreamingResponse(
        ai_service.get_ai_response_stream(request),
        media_type="text/event-stream"
    )

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
