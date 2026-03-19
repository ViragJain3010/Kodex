from unittest.mock import MagicMock, patch
import os

# Set dummy env var before importing app
os.environ["GEMINI_API_KEY"] = "mock-key"

with patch("app.services.ai_service.genai.Client"):
    from app.main import app

from fastapi.testclient import TestClient
client = TestClient(app)

def test_health_check():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "healthy", "service": "ai-service"}

def test_ask_ai_invalid_request():
    # Missing required fields like user_id, language, etc.
    response = client.post("/internal/ask", json={})
    assert response.status_code == 422

def test_ask_ai_valid_schema_but_no_key():
    # Valid schema but will fail in AIService due to missing OPENAI_API_KEY
    payload = {
        "user_id": "test-user-123",
        "language": "python",
        "code": "print('hello')",
        "instruction": "Explain this"
    }
    response = client.post("/internal/ask", json=payload)
    # The current implementation returns a 200 StreamingResponse but the stream yields an error JSON
    assert response.status_code == 200
    
    # Check first chunk of the stream
    for line in response.iter_lines():
        if line:
            line_str = line if isinstance(line, str) else line.decode('utf-8')
            assert "error" in line_str
            break
