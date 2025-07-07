'use client';

import { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function DevNotesModal({ isPageLoaded }) {
  const [currentModal, setCurrentModal] = useState(null);

  useEffect(() => {
    if (isPageLoaded) {
      const expirationKey = 'devNotesExpiration';
      const storedExpiration = localStorage.getItem(expirationKey);
      const currentTime = new Date().getTime();

      if (!storedExpiration || currentTime > parseInt(storedExpiration, 10)) {
        setCurrentModal('welcome');
      }
    }
  }, [isPageLoaded]);

  const handleGotIt = () => {
    setCurrentModal('directions');
    const expirationTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const expirationKey = 'devNotesExpiration';
    const currentTime = new Date().getTime();
    localStorage.setItem(expirationKey, (currentTime + expirationTime).toString());
  };

  const handleClose = () => {
    setCurrentModal(null);
  };

  if (!currentModal || !isPageLoaded) return null;

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <CardHeader>
          <CardTitle className="flex justify-between items-center text-lg sm:text-xl md:text-2xl">
            {currentModal === 'welcome' ? 'Developer Notes' : 'Deployment Issues'}
            {/* <Button variant="ghost" size="icon" onClick={handleClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button> */}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm sm:text-base">
          {currentModal === 'welcome' ? (
            <>
              <p>Welcome to our online code editor! Here are some key features:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Support for multiple programming languages</li>
                <li>Resizable layout</li>
                <li>URL based Code Sharing</li>
                <li>Real-time collaboration (coming soon)</li>
              </ul>
            </>
          ) : (
            <>
              <p>Here are some known issues with the current deployment:</p>
              <ul className="list-disc list-outside ml-4 space-y-2">
                <li>
                  Currently, the backend server is down due to <b className='text-red-500'>AWS Free Tier</b> usage limitations. This means that code execution and other backend functionalities are temporarily unavailable.
                </li>
              </ul>
            </>
          )}
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2 pt-4">
          {currentModal === 'welcome' ? (
            <Button
              onClick={handleGotIt}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 text-sm sm:text-base"
            >
              Got it!
            </Button>
          ) : (
            <>
              <Button
                onClick={handleClose}
                className="w-full bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-sm sm:text-base"
              >
                Proceed to Editor
              </Button>
              {/* <Button
                variant="outline"
                onClick={() => window.open('https://github.com/yourusername/your-repo', '_blank')}
                className="w-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 text-sm sm:text-base"
              >
                Show me the workaround <ExternalLink className=" h-4 w-4" />
              </Button> */}
            </>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
