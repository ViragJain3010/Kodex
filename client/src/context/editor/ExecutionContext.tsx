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

interface ExecutionValue {
  output: string;
  isRunning: boolean;
  isOutputSuccess: boolean;
  executionTime: number;
}

interface ExecutionActions {
  setOutput: Dispatch<SetStateAction<string>>;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  setIsOutputSuccess: Dispatch<SetStateAction<boolean>>;
  setExecutionTime: Dispatch<SetStateAction<number>>;
  handleRun: (language: string, code: string, input: string, slug: string) => Promise<void>;
}

const ExecutionValueContext = createContext<ExecutionValue | undefined>(undefined);
const ExecutionActionsContext = createContext<ExecutionActions | undefined>(undefined);

export function ExecutionProvider({ children }: { children: ReactNode }) {
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isOutputSuccess, setIsOutputSuccess] = useState(true);
  const [executionTime, setExecutionTime] = useState(0);

  const handleRun = useCallback(
    async (language: string, code: string, input: string, slug: string) => {
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
      } catch (error: any) {
        setOutput(`Error: ${error.message}`);
      } finally {
        setIsRunning(false);
      }
    },
    []
  );

  const value = useMemo(
    () => ({
      output,
      isRunning,
      isOutputSuccess,
      executionTime,
    }),
    [output, isRunning, isOutputSuccess, executionTime]
  );

  const actions = useMemo(
    () => ({
      setOutput,
      setIsRunning,
      setIsOutputSuccess,
      setExecutionTime,
      handleRun,
    }),
    [handleRun]
  );

  return (
    <ExecutionValueContext.Provider value={value}>
      <ExecutionActionsContext.Provider value={actions}>
        {children}
      </ExecutionActionsContext.Provider>
    </ExecutionValueContext.Provider>
  );
}

export const useExecution = () => {
  const context = useContext(ExecutionValueContext);
  if (!context) throw new Error('useExecution must be used within an ExecutionProvider');
  return context;
};

export const useExecutionActions = () => {
  const context = useContext(ExecutionActionsContext);
  if (!context) throw new Error('useExecutionActions must be used within an ExecutionProvider');
  return context;
};
