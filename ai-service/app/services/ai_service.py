import json
import os
from google import genai
from google.genai import types
from app.schemas.ai import AIAskRequest
from app.services.prompt_service import PromptService
from typing import AsyncGenerator

class AIService:
    def __init__(self):
        # We use the same client but will access .aio property for async calls
        self.client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
        self.model_name = os.getenv("AI_MODEL", "gemini-1.5-flash")

    async def get_ai_response_stream(self, request: AIAskRequest) -> AsyncGenerator[str, None]:
        user_prompt = PromptService.build_user_prompt(request)
        system_prompt = PromptService.get_system_prompt()

        try:
            config = types.GenerateContentConfig(
                system_instruction=system_prompt,
                response_mime_type="text/plain", # Use plain text for better streaming
            )

            full_content = ""
            explanation_buffer = ""
            in_explanation = False
            
            stream = await self.client.aio.models.generate_content_stream(
                model=self.model_name,
                contents=user_prompt,
                config=config
            )

            async for chunk in stream:
                if chunk.text:
                    full_content += chunk.text
                    
                    # Very basic state machine to extract explanation content
                    if not in_explanation and "<explanation>" in full_content:
                        # Find the start of content after <explanation>
                        start_tag = "<explanation>"
                        start_idx = full_content.find(start_tag) + len(start_tag)
                        pending_content = full_content[start_idx:]
                        if pending_content:
                            in_explanation = True
                            # Only yield what's not the end tag
                            clean_content = pending_content.split("</explanation>")[0]
                            if clean_content:
                                yield f"data: {json.dumps({'type': 'chunk', 'content': clean_content})}\n\n"
                                explanation_buffer = clean_content
                    
                    elif in_explanation:
                        # Already in explanation, find what's new since last chunk
                        start_tag = "<explanation>"
                        start_idx = full_content.find(start_tag) + len(start_tag)
                        current_all_explanation = full_content[start_idx:].split("</explanation>")[0]
                        
                        new_content = current_all_explanation[len(explanation_buffer):]
                        if new_content:
                            yield f"data: {json.dumps({'type': 'chunk', 'content': new_content})}\n\n"
                            explanation_buffer = current_all_explanation
                        
                        if "</explanation>" in full_content:
                            in_explanation = False

            # End of stream, send final parsed response
            import re
            explanation_match = re.search(r"<explanation>(.*?)</explanation>", full_content, re.DOTALL)
            code_match = re.search(r"<modified_code>(.*?)</modified_code>", full_content, re.DOTALL)
            
            explanation = explanation_match.group(1).strip() if explanation_match else ""
            modified_code = code_match.group(1).strip() if code_match else None
            if modified_code == "null": modified_code = None

            done_msg = {
                "type": "done",
                "full_response": explanation,
                "modified_code": modified_code
            }
            yield f"data: {json.dumps(done_msg)}\n\n"

        except Exception as e:
            yield f"data: {json.dumps({'type': 'error', 'message': str(e)})}\n\n"
