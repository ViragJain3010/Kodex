'use client';

import { useState, useCallback } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import Editor from '@/components/Editor/Editor';
import InputArea from '@/components/Input/Input';
import OutputArea from '@/components/Output/Output';
import AISidebar from '@/components/AISidebar/AISidebar';

export default function ResizableLayout() {
  const [leftWidth, setLeftWidth] = useState<number>(50);
  const [upperRightHeight, setUpperRightHeight] = useState<number>(50);
  const [showAI, setShowAI] = useState<boolean>(false);

  const handleLeftResize = useCallback((sizes: number[]) => {
    setLeftWidth(sizes[0]);
  }, []);

  const handleUpperRightResize = useCallback((sizes: number[]) => {
    setUpperRightHeight(sizes[0]);
  }, []);

  return (
    <>
      <div className="hidden md:block h-full rounded-2xl p-1">
        <PanelGroup direction="horizontal" onLayout={handleLeftResize}>
          <Panel defaultSize={leftWidth} minSize={20} className="rounded-2xl">
            <div className="h-full p-4 bg-background text-foreground overflow-auto">
              <Editor />
            </div>
          </Panel>

          <PanelResizeHandle className="w-2 dark:bg-muted bg-gray-200 flex items-center justify-center rounded-xl group relative overflow-visible">
            <div className="w-1 h-16 bg-gray-600 rounded-2xl group-hover:bg-blue-600 group-active:bg-blue-600 dark:group-hover:bg-green-500 dark:group-active:bg-green-500 group-hover:h-full group-active:h-full transition-all duration-300 ease-in-out" />
          </PanelResizeHandle>

          <Panel
            defaultSize={100 - leftWidth}
            minSize={20}
            className="relative rounded-2xl overflow-hidden bg-background"
          >
            {!showAI ? (
              <div className="h-full flex transition-all duration-300">
                <div className="flex-1 h-full min-w-0 overflow-hidden">
                  <PanelGroup direction="vertical" onLayout={handleUpperRightResize}>
                    <Panel defaultSize={upperRightHeight} minSize={20} className="rounded-2xl">
                      <div className="h-full p-4 bg-background text-foreground overflow-auto scrollbar-custom">
                        <InputArea />
                      </div>
                    </Panel>
                    <PanelResizeHandle className="h-2 dark:bg-muted bg-gray-200 flex items-center justify-center rounded-xl group/inner">
                      <div className="w-16 h-1 bg-gray-600 rounded-2xl group-hover/inner:bg-blue-600 group-active/inner:bg-blue-600 dark:group-hover/inner:bg-green-500 dark:group-active/inner:bg-green-500 group-hover/inner:w-full group-active/inner:w-full transition-all duration-300 ease-in-out" />
                    </PanelResizeHandle>
                    <Panel
                      defaultSize={100 - upperRightHeight}
                      minSize={20}
                      className="rounded-2xl"
                    >
                      <div className="h-full p-4 bg-background text-foreground overflow-auto scrollbar-custom">
                        <OutputArea />
                      </div>
                    </Panel>
                  </PanelGroup>
                </div>

                {/* AI Toggle Bar (Right side) */}
                <button
                  onClick={() => setShowAI(true)}
                  className="w-10 flex flex-col items-center pt-12 gap-4 border-l-4 border-gray-200 dark:border-gray-700 hover:bg-blue-500/10 transition-colors group/ai z-40"
                  title="Open AI Assistant"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shadow-lg group-hover/ai:scale-110 transition-transform font-black text-white text-xs">
                    ‹
                  </div>
                  <div className="[writing-mode:vertical-lr] text-[14px] font-black uppercase tracking-widest group-hover/ai:text-blue-500 transition-colors animate-shimmer-text">
                    Kodex AI
                  </div>
                </button>
              </div>
            ) : (
              <div className="h-full flex animate-in slide-in-from-right duration-500 ease-out border-l dark:border-gray-800 relative group/ai-container transition-all duration-300">
                {/* IO Restore Bar (Left side) */}
                <button
                  onClick={() => setShowAI(false)}
                  className="w-10 flex flex-col items-center pt-8 gap-4 border-r border-gray-200 dark:border-gray-700 hover:bg-green-500/10 transition-colors group/io z-50"
                  title="Back to Input/Output"
                >
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-lg group-hover/io:scale-110 transition-transform font-black text-white text-xs">
                    ›
                  </div>
                  <div className="[writing-mode:vertical-lr] text-[12px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-400 group-hover/io:text-green-500 transition-colors">
                    Input / Output
                  </div>
                </button>

                <div className="flex-1 h-full min-w-0">
                  <AISidebar />
                </div>
              </div>
            )}
          </Panel>
        </PanelGroup>
      </div>

      {/* Mobile Layout (smaller than md) */}
      <div className="md:hidden h-full">
        <div className="flex flex-col gap-4 p-1">
          <div className="h-[300px] bg-background text-foreground overflow-auto rounded-lg border p-2">
            <Editor />
          </div>
          <div className="h-[200px] bg-background text-foreground overflow-auto rounded-lg border p-2">
            <InputArea />
          </div>
          <div className="h-[200px] bg-background text-foreground overflow-auto rounded-lg border p-2">
            <OutputArea />
          </div>
        </div>
      </div>
    </>
  );
}
