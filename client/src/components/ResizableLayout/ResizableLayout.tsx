'use client';

import { useState, useCallback } from 'react';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import Editor from '@/components/Editor/Editor';
import InputArea from '@/components/Input/Input';
import OutputArea from '@/components/Output/Output';

export default function ResizableLayout() {
  const [leftWidth, setLeftWidth] = useState<number>(50);
  const [upperRightHeight, setUpperRightHeight] = useState<number>(50);

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
          <PanelResizeHandle className="w-2 dark:bg-muted  bg-gray-200 flex items-center justify-center rounded-xl group">
            <div className="w-1 h-16 bg-gray-600 rounded-2xl group-hover:bg-blue-600 group-active:bg-blue-600 dark:group-hover:bg-green-500 dark:group-active:bg-green-500 group-hover:h-full group-active:h-full transition-all duration-300 ease-in-out" />
          </PanelResizeHandle>
          <Panel defaultSize={100 - leftWidth} minSize={20}>
            <PanelGroup direction="vertical" onLayout={handleUpperRightResize}>
              <Panel defaultSize={upperRightHeight} minSize={20} className="rounded-2xl">
                <div className="h-full p-4 bg-background text-foreground overflow-auto">
                  <InputArea />
                </div>
              </Panel>
              <PanelResizeHandle className="h-2 dark:bg-muted  bg-gray-200 flex items-center justify-center rounded-xl group">
                <div className="w-16 h-1 bg-gray-600 rounded-2xl group-hover:bg-blue-600 group-active:bg-blue-600 dark:group-hover:bg-green-500 dark:group-active:bg-green-500 group-hover:w-full group-active:w-full transition-all duration-300 ease-in-out" />
              </PanelResizeHandle>
              <Panel defaultSize={100 - upperRightHeight} minSize={20} className="rounded-2xl">
                <div className="h-full p-4 bg-background text-foreground overflow-auto">
                  <OutputArea />
                </div>
              </Panel>
            </PanelGroup>
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
