# Kodex AI Service

The **AI Service** is a dedicated microservice for the Kodex platform, powered by **Google Gemini**. It provides intelligent code explanation, debugging, and optimization suggestions, seamlessly integrated into the editor through real-time streaming.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup](#setup)
- [Running the Service](#running-the-service)
- [Architecture](#architecture)
- [API Endpoints](#api-endpoints)

## Features

- **Streaming Responses**: Real-time character-by-character explanation streaming using Server-Sent Events (SSE).
- **Structured Output**: Uses tag-based parsing to isolate natural language explanations from code modifications.
- **FastAPI Backend**: Built with high-performance asynchronous FastAPI for concurrent stream handling.

## Requirements

- **Python** (version 3.9 or higher)
- **Google Gemini API Key**

## Setup

1. **Navigate to the Directory:**
   ```bash
   cd Kodex/ai-service
   ```

2. **Create a Virtual Environment (Recommended):**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure the Environment:**
   - Create a `.env` file based on [.env.example](.env.example).
   - Add your `GEMINI_API_KEY`.

## Running the Service

The service MUST be run as a package from the `ai-service` root directory to ensure internal module imports are resolved correctly.

```bash
python3 -m app.main
```

Alternatively, you can use `uvicorn` directly:
```bash
uvicorn app.main:app --port 8001 --reload
```

The service will start on `http://localhost:8001` by default.

## Architecture

- **`app/main.py`**: Entry point, FastAPI application setup, and CORS configuration.
- **`app/services/ai_service.py`**: Core logic for interacting with Gemini and implementing the state-machine for tag-based streaming.
- **`app/services/prompt_service.py`**: Manages system and user prompts, enforcing a consistent tag-based response format.
- **`app/schemas/ai.py`**: Pydantic models for robust request and response validation.

## API Endpoints

### **AI Assistant**

- **`POST /internal/ask`**  
  Internal endpoint typically proxied by the main Express server.  
  **Request Body**:
  ```json
  {
    "instruction": "Explain this code",
    "language": "python",
    "code": "print('hello')",
    "selection": null
  }
  ```
  **Response**: Server-Sent Events (SSE) stream returning JSON chunks:
  - `{"type": "chunk", "content": "..."}`
  - `{"type": "done", "full_response": "...", "modified_code": "..."}`

### **Health Check**

- **`GET /health`**  
  Returns the health status of the service.
  ```json
  { "status": "healthy", "service": "ai-service" }
  ```