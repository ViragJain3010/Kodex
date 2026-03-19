from pydantic import BaseModel, Field
from typing import Optional
from uuid import UUID

class AIAskRequest(BaseModel):
    user_id: str = Field(..., description="Unique identifier for the user")
    language: str = Field(..., description="Programming language of the code")
    code: str = Field(..., description="Full content of the file")
    selection: Optional[str] = Field(None, description="Optional selected snippet of code")
    instruction: str = Field(..., description="User instruction for the AI")

class AIResponseData(BaseModel):
    explanation: str = Field(..., description="AI generated explanation")
    modified_code: Optional[str] = Field(None, description="AI generated or modified code if applicable")

class AISSEChunk(BaseModel):
    type: str = Field("chunk", description="Type of the SSE message")
    content: str = Field(..., description="Content chunk")

class AISSEDone(BaseModel):
    type: str = Field("done", description="Type of the SSE message")
    full_response: str = Field(..., description="The complete concatenated explanation")
    modified_code: Optional[str] = Field(None, description="The final extracted modified code")
