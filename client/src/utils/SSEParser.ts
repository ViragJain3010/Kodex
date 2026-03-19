import { AIStreamEvent } from '@/types/ai';

/**
 * Utility to parse Server-Sent Events (SSE) from raw data chunks.
 */
export class SSEParser {
  private buffer = '';

  /**
   * Appends a new chunk of data and returns all complete events found.
   */
  push(chunk: string): AIStreamEvent[] {
    this.buffer += chunk;
    const parts = this.buffer.split('\n\n');

    // The last part might be incomplete, so keep it in the buffer
    this.buffer = parts.pop() || '';

    const events: AIStreamEvent[] = [];
    for (const part of parts) {
      const event = this._parseEvent(part);
      if (event) events.push(event);
    }
    return events;
  }

  /**
   * Flushes any remaining data in the buffer as a final event if possible.
   */
  flush(): AIStreamEvent | null {
    if (!this.buffer.trim()) return null;
    return this._parseEvent(this.buffer);
  }

  private _parseEvent(raw: string): AIStreamEvent | null {
    const lines = raw.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed.startsWith('data:')) continue;

      const jsonStr = trimmed.slice(5).trim();
      try {
        return JSON.parse(jsonStr) as AIStreamEvent;
      } catch {
        console.warn('[SSEParser] Parse failed:', jsonStr);
      }
    }
    return null;
  }
}
