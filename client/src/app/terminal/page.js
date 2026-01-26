// src/app/[slug]/page.js
'use client';
import { useEffect } from 'react';
import { useEditor } from '@/context/EditorContext';
import { useParams } from 'next/navigation';
import TerminalComponent from '@/components/Terminal/Terminal';

export default function Home() {
  const { slug } = useParams();
  const { fetchSnippet, setIsLanguageChangedByUser } = useEditor();
  useEffect(() => {
    if (slug) {
      setIsLanguageChangedByUser(false);
      fetchSnippet(slug);
    }
  }, [slug]);

  return (
    <>
      <TerminalComponent />
    </>
  );
}
