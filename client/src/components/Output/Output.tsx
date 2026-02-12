'use client';
import { useEditor } from '@/context/EditorContext';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ClipboardCopy, Check } from 'lucide-react';
import { formatExecutionTime } from '@/utils/timeUtils';

export default function OutputArea() {
  const { output, isOutputSuccess, executionTime } = useEditor();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const formattedTime = formatExecutionTime(executionTime);

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold">Output</h2>
          {executionTime !== 0 && (
            <div className="mt-2 flex items-center space-x-2">
              <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                Execution Time:
              </span>
              <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-md">
                {formattedTime}
              </span>
            </div>
          )}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
          disabled={!output}
          className={`transition-all duration-300 ease-in-out ${
            copied ? 'bg-green-500 text-white' : ''
          } hover:bg-opacity-90 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-700 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 mr-2" />
              Copied
            </>
          ) : (
            <>
              <ClipboardCopy className="h-4 w-4 mr-2" />
              Copy
            </>
          )}
        </Button>
      </div>
      <div className="flex-1 p-4 rounded-md bg-gray-200 dark:bg-gray-700 whitespace-pre-wrap overflow-auto transition-all duration-300 ease-in-out">
        <pre
          className={`selection:bg-blue-200 dark:selection:bg-blue-700 selection:text-gray-800 dark:selection:text-gray-200 ${
            isOutputSuccess ? '' : 'text-red-500'
          }`}
        >
          {output}
        </pre>
      </div>
    </div>
  );
}
