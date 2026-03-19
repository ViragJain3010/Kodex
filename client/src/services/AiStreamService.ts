import { AIStreamEvent, AIAskPayload, AIStreamCallbacks, TypewriterOptions } from '@/types/ai';
import { SSEParser } from '@/utils/SSEParser';
import { Typewriter } from '@/utils/Typewriter';

/**
 * Core service for handling SSE streams from the AI backend.
 * Coordinates request, parsing, and typewriter effects.
 */
export class AIStreamService {
  private readonly baseUrl: string;
  private activeController: AbortController | null = null;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
  }

  abort(): void {
    this.activeController?.abort();
    this.activeController = null;
  }

  async ask(
    payload: AIAskPayload,
    callbacks: AIStreamCallbacks,
    options: TypewriterOptions = {}
  ): Promise<void> {
    return this._stream(`${this.baseUrl}/api/ai/ask`, payload, callbacks, options);
  }

  async mock(
    payload: Pick<AIAskPayload, 'language'>,
    callbacks: AIStreamCallbacks,
    options: TypewriterOptions = {}
  ): Promise<void> {
    return this._stream(`${this.baseUrl}/api/ai/mock`, payload, callbacks, options);
  }

  private async _stream(
    url: string,
    payload: any,
    callbacks: AIStreamCallbacks,
    { charDelay = 18 }: TypewriterOptions
  ): Promise<void> {
    this.abort();
    this.activeController = new AbortController();

    try {
      const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
      console.log(`[AIStreamService] Requesting: ${url}`);
      console.log(
        `[AIStreamService] Token found: ${token ? `${token.substring(0, 10)}...` : 'NONE'}`
      );

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'text/event-stream',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(payload),
        signal: this.activeController.signal,
      });

      console.log(`[AIStreamService] Response status: ${response.status}`);

      const remaining = response.headers.get('X-RateLimit-Remaining');
      if (remaining) console.log(`[AIStreamService] Rate limit remaining: ${remaining}`);

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        callbacks.onError(body?.error ?? `Request failed (${response.status})`);
        return;
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('Stream not supported.');

      const parser = new SSEParser();
      const decoder = new TextDecoder();

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const events = parser.push(decoder.decode(value, { stream: true }));
          for (const ev of events) {
            if (this.activeController?.signal.aborted) break;
            await this._handleEvent(ev, callbacks, charDelay, this.activeController?.signal);
          }
        }

        const finalEvent = parser.flush();
        if (finalEvent && !this.activeController?.signal.aborted) {
          await this._handleEvent(finalEvent, callbacks, charDelay, this.activeController?.signal);
        }
      } finally {
        reader.releaseLock();
      }
    } catch (err: any) {
      if (err.name !== 'AbortError') callbacks.onError(err.message);
    } finally {
      this.activeController = null;
    }
  }

  private async _handleEvent(
    event: AIStreamEvent,
    callbacks: AIStreamCallbacks,
    charDelay: number,
    signal?: AbortSignal
  ): Promise<void> {
    if (signal?.aborted) return;

    switch (event.type) {
      case 'chunk':
        await Typewriter.type(event.content, callbacks.onChunk, charDelay, signal);
        break;
      case 'done':
        callbacks.onDone(event.full_response, event.modified_code);
        break;
      case 'error':
        callbacks.onError(event.message);
        break;
    }
  }
}

export const aiStreamService = new AIStreamService();
