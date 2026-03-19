// client/src/hooks/useAIStream.ts

import { useState, useCallback, useRef } from 'react';
import { AIStreamService } from '@/services/AiStreamService';
import { AIAskPayload, AIStreamCallbacks, TypewriterOptions } from '@/types/ai';

export interface UseAIStreamReturn {
  displayText: string;
  fullResponse: string | null;
  modifiedCode: string | null;
  isStreaming: boolean;
  error: string | null;
  ask: (payload: AIAskPayload, typewriterOptions?: TypewriterOptions) => void;
  mock: (language: string, typewriterOptions?: TypewriterOptions) => void;
  abort: () => void;
  reset: () => void;
}

export function useAIStream(baseUrl?: string): UseAIStreamReturn {
  const serviceRef = useRef(new AIStreamService(baseUrl));

  const [displayText, setDisplayText] = useState('');
  const [fullResponse, setFullResponse] = useState<string | null>(null);
  const [modifiedCode, setModifiedCode] = useState<string | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = useCallback(() => {
    serviceRef.current.abort();
    setDisplayText('');
    setFullResponse(null);
    setModifiedCode(null);
    setIsStreaming(false);
    setError(null);
  }, []);

  const abort = useCallback(() => {
    serviceRef.current.abort();
    setIsStreaming(false);
  }, []);

  const buildCallbacks = useCallback(
    (): AIStreamCallbacks => ({
      onChunk: char => setDisplayText(prev => prev + char),
      onDone: (response, code) => {
        setFullResponse(response);
        setModifiedCode(code);
        setIsStreaming(false);
      },
      onError: msg => {
        setError(msg);
        setIsStreaming(false);
      },
    }),
    []
  );

  const ask = useCallback(
    (payload: AIAskPayload, typewriterOptions?: TypewriterOptions) => {
      reset();
      setIsStreaming(true);
      serviceRef.current.ask(payload, buildCallbacks(), typewriterOptions).catch(err => {
        setIsStreaming(false);
        setError(err.message);
      });
    },
    [reset, buildCallbacks]
  );

  const mock = useCallback(
    (language: string, typewriterOptions?: TypewriterOptions) => {
      reset();
      setIsStreaming(true);
      serviceRef.current.mock({ language }, buildCallbacks(), typewriterOptions).catch(err => {
        setIsStreaming(false);
        setError(err.message);
      });
    },
    [reset, buildCallbacks]
  );

  return { displayText, fullResponse, modifiedCode, isStreaming, error, ask, mock, abort, reset };
}
