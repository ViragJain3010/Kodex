'use client';
import { Textarea } from '@/components/ui/textarea';
import { useInput, useInputActions } from '@/context/editor/EditorContentContext';
import { ChangeEvent, memo } from 'react';

const InputArea = memo(() => {
  // Subscribe ONLY to input value, NOT code value.
  const { input } = useInput();
  const { setInput } = useInputActions();

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-4">Input</h2>
      <Textarea
        placeholder="Enter input here..."
        className="flex-1 resize-none"
        value={input}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
      />
    </div>
  );
});

InputArea.displayName = 'InputArea';

export default InputArea;
