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
import { generateSlug } from 'random-word-slugs';
import API_BASE_URL from '@/utils/config';

interface SnippetValue {
  slug: string;
}

interface SnippetActions {
  setSlug: Dispatch<SetStateAction<string>>;
  fetchSnippet: (
    slugParam: string
  ) => Promise<{ code: string; input: string; output: string; language: string } | null>;
  createSlug: () => Promise<void>;
}

const SnippetValueContext = createContext<SnippetValue | undefined>(undefined);
const SnippetActionsContext = createContext<SnippetActions | undefined>(undefined);

const slugFormat: any = {
  format: 'kebab',
  partsOfSpeech: ['adjective', 'noun'],
  categories: {
    adjective: ['color', 'appearance', 'shapes', 'taste'],
    noun: ['animals', 'food', 'media'],
  },
};

export function SnippetProvider({ children }: { children: ReactNode }) {
  const [slug, setSlug] = useState('');

  const createSlug = useCallback(async () => {
    if (slug) return;

    let temp: string | undefined;
    try {
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
    } catch (error: any) {
      console.error('Error generating slug:', error);
    }
  }, [slug]);

  const fetchSnippet = useCallback(async (slugParam: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${slugParam}`);
      if (!response.ok) throw new Error('Failed to fetch snippet');
      const data = await response.json();
      return data || null;
    } catch (error: any) {
      console.error('Error fetching snippet:', error);
      return null;
    }
  }, []);

  const value = useMemo(() => ({ slug }), [slug]);
  const actions = useMemo(
    () => ({ setSlug, fetchSnippet, createSlug }),
    [fetchSnippet, createSlug]
  );

  return (
    <SnippetValueContext.Provider value={value}>
      <SnippetActionsContext.Provider value={actions}>{children}</SnippetActionsContext.Provider>
    </SnippetValueContext.Provider>
  );
}

export const useSnippet = () => {
  const context = useContext(SnippetValueContext);
  if (!context) throw new Error('useSnippet must be used within a SnippetProvider');
  return context;
};

export const useSnippetActions = () => {
  const context = useContext(SnippetActionsContext);
  if (!context) throw new Error('useSnippetActions must be used within a SnippetProvider');
  return context;
};
