'use client';

import Footer from '@/components/Footer/Footer';
import ResizableLayout from '@/components/ResizableLayout/ResizableLayout';
import DropdownPane from '@/components/DropdownPane/DropdownPane';
import DevNotesModal from '@/components/DeveloperNotesModal/DevNotesModal';
import { useState, useEffect, memo } from 'react';

const Home = memo(() => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  return (
    <>
      <main className="flex flex-col min-h-full bg-gray-200 dark:bg-gray-800">
        <DropdownPane />
        <ResizableLayout />
        <Footer />
      </main>
      <DevNotesModal isPageLoaded={isPageLoaded} />
    </>
  );
});

Home.displayName = 'Home';

export default Home;
