'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useAIStream } from '@/hooks/useAIStream';
import { useAuth } from '@/context/AuthContext';
import { Sparkles, Send, Square, Copy, Check, Lock } from 'lucide-react';
import Link from 'next/link';

export default function AISidebar() {
  const [instruction, setInstruction] = useState('');
  const [copied, setCopied] = useState(false);
  const { user } = useAuth();
  const { displayText, isStreaming, fullResponse, modifiedCode, error, ask, abort, mock } =
    useAIStream();

  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-grow textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [instruction]);

  // Auto-scroll when streaming
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayText]);

  const handleSend = () => {
    if (isStreaming) {
      abort();
      return;
    }
    if (!instruction.trim()) return;

    ask({
      instruction,
      language: 'javascript', // Default to JS, in future get from active file
      code: '',
    });
    setInstruction('');
  };

  const handleCopy = () => {
    if (modifiedCode || fullResponse) {
      navigator.clipboard.writeText(modifiedCode || fullResponse || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!user) {
    return (
      <div className="flex flex-col h-full bg-white dark:bg-gray-950 items-center justify-center p-8 text-center space-y-6">
        <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-full">
          <Lock className="w-12 h-12 text-blue-500" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 italic">
            Kodex AI Assistant
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[280px]">
            Please login to unlock professional AI code explanation, debugging, and optimizations.
          </p>
        </div>
        <Link
          href="/login"
          className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95"
        >
          Login to Continue
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-950 shadow-sm overflow-hidden relative">
      {/* Chat Area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-800"
      >
        {!displayText && !error && !isStreaming && (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-8 py-10">
            <div className="p-5 bg-blue-50 dark:bg-blue-900/10 rounded-full shadow-sm border border-blue-100 dark:border-blue-800/20">
              <Sparkles className="w-10 h-10 text-blue-500 animate-pulse" />
            </div>
            <div className="space-y-3 px-4">
              <p className="font-semibold text-gray-800 dark:text-gray-50 text-2xl tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-800 dark:to-gray-400">
                Hi {user.username}, How can I help you today?
              </p>
            </div>
          </div>
        )}

        {displayText && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="p-4 bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100/50 dark:border-blue-800/30 rounded-2xl relative group shadow-sm">
              <div className="prose prose-sm dark:prose-invert max-w-none font-sans text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-wrap">
                {displayText}
                {isStreaming && (
                  <span className="inline-block w-2 h-4 bg-blue-500 ml-1 animate-pulse rounded-full align-middle" />
                )}
              </div>

              {!isStreaming && (fullResponse || modifiedCode) && (
                <div className="mt-4 flex gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm text-gray-600 dark:text-gray-300"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-green-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                  {modifiedCode && (
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-xs font-medium hover:bg-blue-700 transition-all shadow-sm shadow-blue-500/20">
                      <Sparkles className="w-3.5 h-3.5" />
                      Apply Code
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {error && (
          <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-xl text-red-600 dark:text-red-400 text-xs animate-in zoom-in-95 font-medium">
            <strong>Stream Error:</strong> {error}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white/50 dark:bg-gray-950/80 border-t border-gray-200 dark:border-gray-800/50 backdrop-blur-sm">
        <div className="relative group flex items-end gap-2 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800/80 rounded-2xl p-1 focus-within:border-blue-500 transition-all shadow-inner">
          <textarea
            ref={textareaRef}
            value={instruction}
            onChange={e => setInstruction(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask AI anything..."
            className="flex-1 bg-transparent border-none py-3 px-3 text-sm focus:ring-0 outline-none transition-all resize-none min-h-[44px] max-h-[160px] scrollbar-none text-gray-800 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
            rows={1}
          />
          {/* Button Wrapper: and Height matches the textarea's min-height (44px) to ensure perfect vertical centering for 1 line, while staying at the bottom for multiline */}
          <div className="flex h-[44px] items-center pr-1.5 shrink-0">
            <button
              onClick={handleSend}
              disabled={!instruction.trim() && !isStreaming}
              className={`p-2.5 rounded-xl transition-all active:scale-95 shadow-lg shrink-0 h-9 w-9 flex items-center justify-center ${
                isStreaming
                  ? 'bg-red-500 hover:bg-red-600 text-white shadow-red-500/20'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20 disabled:bg-gray-300 dark:disabled:bg-gray-800 disabled:shadow-none'
              }`}
            >
              {isStreaming ? (
                <Square className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Send className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </div>
        <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2 ml-1 flex justify-between">
          <span>Shift + Enter for new line</span>
          <span className="opacity-0 group-focus-within:opacity-100 transition-opacity italic">
            AI helps, human verifies.
          </span>
        </p>
      </div>
    </div>
  );
}
