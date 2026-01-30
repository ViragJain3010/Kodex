'use client';

import { useState, useEffect } from 'react';
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
    const expirationTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const expirationKey = 'devNotesExpiration';
    const currentTime = new Date().getTime();
    localStorage.setItem(expirationKey, (currentTime + expirationTime).toString());
  };

  const handleClose = () => {
    handleGotIt();
    setCurrentModal(null);
  };

  if (!currentModal || !isPageLoaded) return null;

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-[95%] sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <CardHeader>
          <CardTitle className="flex justify-between items-center text-lg sm:text-xl md:text-2xl">
            Welcome to Kodex!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm sm:text-base">
          <>
            <p>Here are some key features:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Support for multiple programming languages</li>
              <li>URL based Code Sharing</li>
              <li>Dark/Light Mode</li>
              <li>Resizable layout</li>
            </ul>
          </>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2 pt-4">
          <Button
            onClick={handleClose}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 text-sm sm:text-base"
          >
            Got it!
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
