/**
 * Utility for handling typewriter typing animation.
 */
export class Typewriter {
  /**
   * Types out text character by character.
   * @param text The text to type.
   * @param onChar Callback for each character.
   * @param charDelay Delay between characters in ms.
   */
  static async type(
    text: string,
    onChar: (char: string) => void,
    charDelay: number,
    signal?: AbortSignal
  ): Promise<void> {
    if (charDelay <= 0) {
      onChar(text);
      return;
    }

    for (const char of text) {
      if (signal?.aborted) return;
      onChar(char);
      await new Promise(resolve => setTimeout(resolve, charDelay));
    }
  }
}
