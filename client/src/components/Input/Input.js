'use client';
import { Textarea } from '@/components/ui/textarea';
import { useEditor } from '@/context/EditorContext';

export default function InputArea() {
  const { input, setInput } = useEditor();

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-semibold mb-4">Input</h2>
      <Textarea
        placeholder="Enter input here..."
        className="flex-1 resize-none"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </div>
  );
}
