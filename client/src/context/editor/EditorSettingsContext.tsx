'use client';

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  Dispatch,
  SetStateAction,
  useMemo,
} from 'react';
import API_BASE_URL from '@/utils/config';

interface LanguageConfig {
  success: boolean;
  safeConfig: {
    defaultBoilerplate: string;
  };
}

interface LanguageConfigs {
  [key: string]: LanguageConfig;
}

interface EditorSettingsValue {
  language: string;
  isLanguageChangedByUser: boolean;
  isLoadingConfig: boolean;
  languageConfigs: LanguageConfigs;
}

interface EditorSettingsActions {
  setLanguage: Dispatch<SetStateAction<string>>;
  setIsLanguageChangedByUser: Dispatch<SetStateAction<boolean>>;
  setIsLoadingConfig: Dispatch<SetStateAction<boolean>>;
  fetchLanguageConfig: (lang: string, setCode: (code: string) => void) => Promise<void>;
}

const EditorSettingsValueContext = createContext<EditorSettingsValue | undefined>(undefined);
const EditorSettingsActionsContext = createContext<EditorSettingsActions | undefined>(undefined);

export function EditorSettingsProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState('javascript');
  const [isLanguageChangedByUser, setIsLanguageChangedByUser] = useState(true);
  const [languageConfigs, setLanguageConfigs] = useState<LanguageConfigs>({});
  const [isLoadingConfig, setIsLoadingConfig] = useState(false);

  const fetchLanguageConfig = useCallback(
    async (lang: string, setCode: (code: string) => void) => {
      if (languageConfigs[lang]) {
        setCode(languageConfigs[lang].safeConfig.defaultBoilerplate);
        return;
      }

      setIsLoadingConfig(true);
      try {
        const response = await fetch(`${API_BASE_URL}/languages/${lang}`);
        if (!response.ok) throw new Error(`Failed to fetch ${lang} configuration`);

        const config: LanguageConfig = await response.json();
        if (!config.success) throw new Error(`API error for ${lang} configuration`);

        setLanguageConfigs(prev => ({
          ...prev,
          [lang]: config,
        }));

        setCode(config.safeConfig.defaultBoilerplate);
      } catch (error: any) {
        console.error('Error fetching language config:', error);
      } finally {
        setIsLoadingConfig(false);
      }
    },
    [languageConfigs]
  );

  const value = useMemo(
    () => ({
      language,
      isLanguageChangedByUser,
      isLoadingConfig,
      languageConfigs,
    }),
    [language, isLanguageChangedByUser, isLoadingConfig, languageConfigs]
  );

  const actions = useMemo(
    () => ({
      setLanguage,
      setIsLanguageChangedByUser,
      setIsLoadingConfig,
      fetchLanguageConfig,
    }),
    [fetchLanguageConfig]
  );

  return (
    <EditorSettingsValueContext.Provider value={value}>
      <EditorSettingsActionsContext.Provider value={actions}>
        {children}
      </EditorSettingsActionsContext.Provider>
    </EditorSettingsValueContext.Provider>
  );
}

export const useEditorSettings = () => {
  const context = useContext(EditorSettingsValueContext);
  if (!context) throw new Error('useEditorSettings must be used within an EditorSettingsProvider');
  return context;
};

export const useEditorSettingsActions = () => {
  const context = useContext(EditorSettingsActionsContext);
  if (!context)
    throw new Error('useEditorSettingsActions must be used within an EditorSettingsProvider');
  return context;
};
