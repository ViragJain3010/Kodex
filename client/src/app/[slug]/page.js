// src/app/[slug]/page.js
'use client';
import Footer from '@/components/Footer/Footer';
import ResizableLayout from '@/components/ResizableLayout/ResizableLayout';
import DropdownPane from '@/components/DropdownPane/DropdownPane';
import DevNotesModal from '@/components/DeveloperNotesModal/DevNotesModal';
import { useState, useEffect } from 'react';
import { useEditor } from '@/context/EditorContext';
import { useParams } from 'next/navigation';

export default function Home() {
  const { slug } = useParams();
  const { fetchSnippet, setIsLanguageChangedByUser } = useEditor();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    if (slug) {
      setIsLanguageChangedByUser(false);
      fetchSnippet(slug);
    }
    setIsPageLoaded(true);
  }, [slug]);

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
}
