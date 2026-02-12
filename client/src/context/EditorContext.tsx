'use client';

import { ReactNode, useEffect } from 'react';
import {
  EditorContentProvider,
  useCode,
  useCodeActions,
  useInput,
  useInputActions,
} from './editor/EditorContentContext';
import { ExecutionProvider, useExecution, useExecutionActions } from './editor/ExecutionContext';
import {
  EditorSettingsProvider,
  useEditorSettings,
  useEditorSettingsActions,
} from './editor/EditorSettingsContext';
import { SnippetProvider, useSnippet, useSnippetActions } from './editor/SnippetContext';

function EditorInitializer() {
  const { language, isLanguageChangedByUser } = useEditorSettings();
  const { fetchLanguageConfig } = useEditorSettingsActions();
  const { setCode } = useCodeActions();

  useEffect(() => {
    if (isLanguageChangedByUser) {
      fetchLanguageConfig(language, setCode);
    }
  }, [language, isLanguageChangedByUser, fetchLanguageConfig, setCode]);

  return null;
}

export function EditorProvider({ children }: { children: ReactNode }) {
  return (
    <EditorSettingsProvider>
      <EditorContentProvider>
        <SnippetProvider>
          <ExecutionProvider>
            <EditorInitializer />
            {children}
          </ExecutionProvider>
        </SnippetProvider>
      </EditorContentProvider>
    </EditorSettingsProvider>
  );
}

// Legacy facade - still suffers from re-renders but maintains compatibility
export const useEditor = () => {
  const codeValue = useCode();
  const codeActions = useCodeActions();
  const inputValue = useInput();
  const inputActions = useInputActions();
  const executionValue = useExecution();
  const executionActions = useExecutionActions();
  const settingsValue = useEditorSettings();
  const settingsActions = useEditorSettingsActions();
  const snippetValue = useSnippet();
  const snippetActions = useSnippetActions();

  return {
    ...codeValue,
    ...codeActions,
    ...inputValue,
    ...inputActions,
    ...executionValue,
    ...executionActions,
    ...settingsValue,
    ...settingsActions,
    ...snippetValue,
    ...snippetActions,
    handleRun: () =>
      executionActions.handleRun(
        settingsValue.language,
        codeValue.code,
        inputValue.input,
        snippetValue.slug
      ),
    handleReset: () => {
      if (settingsValue.languageConfigs[settingsValue.language]) {
        codeActions.setCode(
          settingsValue.languageConfigs[settingsValue.language].safeConfig.defaultBoilerplate
        );
      }
      inputActions.setInput('');
      executionActions.setOutput('');
      executionActions.setExecutionTime(0);
    },
  };
};
