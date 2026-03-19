// client/src/types/ai.ts

export interface AIChunkEvent {
  type: 'chunk';
  content: string;
}

export interface AIDoneEvent {
  type: 'done';
  full_response: string;
  modified_code: string | null;
}

export interface AIErrorEvent {
  type: 'error';
  message: string;
}

export type AIStreamEvent = AIChunkEvent | AIDoneEvent | AIErrorEvent;

export interface AIAskPayload {
  language: string;
  code: string;
  selection?: string;
  instruction: string;
}

export interface AIStreamCallbacks {
  onChunk: (chunk: string) => void;
  onDone: (fullResponse: string, modifiedCode: string | null) => void;
  onError: (message: string) => void;
}

export interface TypewriterOptions {
  /** Delay in ms between chars. 0 = instant. @default 18 */
  charDelay?: number;
}
