'use client';
import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { generateSlug } from 'random-word-slugs';
import API_BASE_URL from '@/utils/config';

const EditorContext = createContext();

export function EditorProvider({ children }) {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isOutputSuccess, setIsOutputSuccess] = useState(true);
  const [executionTime, setExecutionTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [language, setLanguage] = useState('javascript');
  const [isLanguageChangedByUser, setIsLanguageChangedByUser] = useState(true);
  const [slug, setSlug] = useState('');
  // Cache for language configurations
  const [languageConfigs, setLanguageConfigs] = useState({});
  const [isLoadingConfig, setIsLoadingConfig] = useState(false);

  const slugFormat = {
    format: 'kebab',
    partsOfSpeech: ['adjective', 'noun'],
    categories: {
      adjective: ['color', 'appearance', 'shapes', 'taste'],
      noun: ['animals', 'food', 'media'],
    },
  };

  // Fetch language config and update code
  const fetchLanguageConfig = useCallback(
    async lang => {
      // If we already have the config, use it
      if (languageConfigs[lang]) {
        setCode(languageConfigs[lang].safeConfig.defaultBoilerplate);
        return;
      }

      setIsLoadingConfig(true);
      try {
        const response = await fetch(`${API_BASE_URL}/languages/${lang}`);
        if (!response.ok) throw new Error(`Failed to fetch ${lang} configuration`);

        const config = await response.json();
        if (!config.success) throw new Error(`API error for ${lang} configuration`);

        // Update cache with new config
        setLanguageConfigs(prev => ({
          ...prev,
          [lang]: config,
        }));

        // Set the boilerplate code
        setCode(config.safeConfig.defaultBoilerplate);
      } catch (error) {
        console.error('Error fetching language config:', error);
        setOutput(`Error loading ${lang} configuration: ${error.message}`);
      } finally {
        setIsLoadingConfig(false);
      }
    },
    [language]
  );

  // Effect to fetch config when language changes
  useEffect(() => {
    if (isLanguageChangedByUser) {
      fetchLanguageConfig(language);
    }
  }, [language, fetchLanguageConfig]);

  const createSlug = useCallback(async () => {
    let temp;
    try {
      if (!slug) {
        {
          let attempts = 0;
          const maxAttempts = 10;

          while (attempts < maxAttempts) {
            temp = generateSlug(2, slugFormat);
            const checkResponse = await fetch(`${API_BASE_URL}/check/${temp}`);
            if (checkResponse.ok) {
              setSlug(temp);
              break;
            }
            attempts++;
          }

          if (!temp) {
            throw new Error('Failed to generate a valid slug after multiple attempts.');
          }
        }
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  });

  // Run code
  const handleRun = useCallback(async () => {
    setIsRunning(true);
    try {
      const response = await fetch(`${API_BASE_URL}/execute`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          slug,
          language,
          code,
          input,
        }),
      });

      const data = await response.json();
      if (!data.success) {
        setIsOutputSuccess(false);
        setOutput(data.error);
        setExecutionTime(0);
      } else {
        setIsOutputSuccess(true);
        setOutput(data.output);
        setExecutionTime(data.executionTime);
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  }, [language, code, input, slugFormat]);

  const fetchSnippet = useCallback(async slugParam => {
    try {
      const response = await fetch(`${API_BASE_URL}/${slugParam}`);
      if (!response.ok) {
        throw new Error('Failed to fetch snippet');
      }
      const data = await response.json();
      if (!data) {
        window.history.pushState(null, '', `/`);
        handleReset;
      } else {
        setCode(data.code);
        setInput(data.input);
        setOutput(data.output);
        setLanguage(data.language);
      }
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  });

  const handleReset = useCallback(() => {
    // Use cached config to reset code
    if (languageConfigs[language]) {
      setCode(languageConfigs[language].safeConfig.defaultBoilerplate);
    }
    setInput('');
    setOutput('');
    setExecutionTime(0);
  }, [language, languageConfigs]);

  const value = {
    code, // user code
    setCode,
    input, // user input
    setInput,
    output, // output from code execution
    setOutput,
    language, // selected language
    setLanguage,
    isRunning, // is code running
    isLoadingConfig, // is language config loading
    handleRun, // function to run code
    handleReset, // function to reset code, input, output
    slug, // unique slug for the snippet
    fetchSnippet, // function to fetch snippet from server
    setIsLanguageChangedByUser, // function to check if language is changed by user (for [slug]/page.js else it will fetch the language config of the language in the snippet and override the code from the snippet with the default boilerplate code) => This results in the editor always ending up with the default boilerplate code of the language in the snippet instead of the code fetched from the snippet.
    createSlug, // function to generate a unique slug
    isOutputSuccess, // is the output successful
    executionTime, // execution time of the code
  };

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
}

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
};
