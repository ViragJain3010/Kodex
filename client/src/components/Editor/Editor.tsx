'use client';
import dynamic from 'next/dynamic';
import { useCode, useCodeActions } from '@/context/editor/EditorContentContext';
import { useEditorSettings } from '@/context/editor/EditorSettingsContext';
import { useSnippet } from '@/context/editor/SnippetContext';
import { useSnippetActions } from '@/context/editor/SnippetContext';
import { useEffect, useCallback, memo } from 'react';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
});

interface EditorProps {
  onLoad: () => void;
}

const Editor = memo(({ onLoad }: EditorProps) => {
  // Subscribe ONLY to code value
  const { code } = useCode();
  const { setCode } = useCodeActions();

  const { language, isLoadingConfig } = useEditorSettings();
  const { slug } = useSnippet();
  const { createSlug } = useSnippetActions();

  const handleChange = useCallback(
    (newValue: string | undefined) => {
      if (newValue !== undefined) {
        setCode(newValue);
        if (!slug) {
          createSlug();
        }
      }
    },
    [setCode, createSlug, slug]
  );

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  if (isLoadingConfig) {
    return (
      <div className="flex flex-col h-full">
        <div className="flex-1 border rounded-md overflow-hidden bg-gray-900 animate-pulse">
          <div className="h-full w-full flex items-center justify-center text-gray-400">
            Loading {language} configuration...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 border rounded-md overflow-hidden">
        <MonacoEditor
          height="100%"
          language={language}
          value={code}
          theme="vs-dark"
          onChange={handleChange}
          onMount={onLoad}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            roundedSelection: false,
            scrollBeyondLastLine: false,
            readOnly: false,
            automaticLayout: true,
          }}
        />
      </div>
    </div>
  );
});

Editor.displayName = 'Editor';

export default Editor;
