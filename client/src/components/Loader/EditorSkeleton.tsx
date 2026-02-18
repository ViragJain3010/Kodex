import React from 'react';

const EditorSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-background animate-pulse p-4 space-y-4">
      <div className="flex items-center space-x-2">
        <div className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
      <div className="space-y-2">
        <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-800 rounded"></div>
        <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-800 rounded"></div>
        <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-800 rounded"></div>
        <div className="h-3 w-2/3 bg-gray-200 dark:bg-gray-800 rounded"></div>
        <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-800 rounded"></div>
        <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-800 rounded"></div>
        <div className="h-3 w-5/6 bg-gray-200 dark:bg-gray-800 rounded"></div>
        <div className="h-3 w-2/3 bg-gray-200 dark:bg-gray-800 rounded"></div>
      </div>
    </div>
  );
};

export default EditorSkeleton;
