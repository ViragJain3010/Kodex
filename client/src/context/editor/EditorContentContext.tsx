'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useMemo,
  useRef,
  useEffect,
} from 'react';

// --- Code Context ---
interface CodeValue {
  code: string;
}

interface CodeActions {
  setCode: Dispatch<SetStateAction<string>>;
  codeRef: React.MutableRefObject<string>;
}

const CodeValueContext = createContext<CodeValue | undefined>(undefined);
const CodeActionsContext = createContext<CodeActions | undefined>(undefined);

// --- Input Context ---
interface InputValue {
  input: string;
}

interface InputActions {
  setInput: Dispatch<SetStateAction<string>>;
  inputRef: React.MutableRefObject<string>;
}

const InputValueContext = createContext<InputValue | undefined>(undefined);
const InputActionsContext = createContext<InputActions | undefined>(undefined);

export function EditorContentProvider({ children }: { children: ReactNode }) {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');

  const codeRef = useRef(code);
  const inputRef = useRef(input);

  useEffect(() => {
    codeRef.current = code;
  }, [code]);

  useEffect(() => {
    inputRef.current = input;
  }, [input]);

  const codeValue = useMemo(() => ({ code }), [code]);
  const codeActions = useMemo(() => ({ setCode, codeRef }), []);

  const inputValue = useMemo(() => ({ input }), [input]);
  const inputActions = useMemo(() => ({ setInput, inputRef }), []);

  return (
    <CodeValueContext.Provider value={codeValue}>
      <CodeActionsContext.Provider value={codeActions}>
        <InputValueContext.Provider value={inputValue}>
          <InputActionsContext.Provider value={inputActions}>
            {children}
          </InputActionsContext.Provider>
        </InputValueContext.Provider>
      </CodeActionsContext.Provider>
    </CodeValueContext.Provider>
  );
}

export const useCode = () => {
  const value = useContext(CodeValueContext);
  if (!value) throw new Error('useCode must be used within an EditorContentProvider');
  return value;
};

export const useCodeActions = () => {
  const actions = useContext(CodeActionsContext);
  if (!actions) throw new Error('useCodeActions must be used within an EditorContentProvider');
  return actions;
};

export const useInput = () => {
  const value = useContext(InputValueContext);
  if (!value) throw new Error('useInput must be used within an EditorContentProvider');
  return value;
};

export const useInputActions = () => {
  const actions = useContext(InputActionsContext);
  if (!actions) throw new Error('useInputActions must be used within an EditorContentProvider');
  return actions;
};
