from app.schemas.ai import AIAskRequest

class PromptService:
    @staticmethod
    def get_system_prompt() -> str:
        return (
            "You are an AI coding assistant inside Kodex, an online code execution platform. "
            "Your goal is to help users write, debug, and optimize code efficiently.\n\n"
            "RESPONSE FORMAT:\n"
            "You MUST wrap your response in the following tags:\n"
            "<explanation>Provide a concise and professional explanation here.</explanation>\n"
            "<modified_code>If code changes are required, provide the FULL modified file content here. If no changes, put 'null'.</modified_code>\n\n"
            "Constraints:\n"
            "- Be concise and professional.\n"
            "- Avoid hallucinating libraries or features.\n"
            "- Ensure the explanation is helpful and addresses the user's instruction directly."
        )

    @staticmethod
    def build_user_prompt(request: AIAskRequest) -> str:
        prompt = f"Language: {request.language}\n\n"
        
        prompt += "--- FULL CODE ---\n"
        prompt += f"{request.code}\n\n"
        
        if request.selection:
            prompt += "--- SELECTED SNIPPET ---\n"
            prompt += f"{request.selection}\n\n"
            
        prompt += "--- USER INSTRUCTION ---\n"
        prompt += f"{request.instruction}\n\n"
        
        prompt += (
            "Please process the instruction based on the code provided. "
            "If code modification is required, return the full modified file in the 'modified_code' field."
        )
        
        return prompt
