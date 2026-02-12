'use client';

import Footer from '@/components/Footer/Footer';
import ResizableLayout from '@/components/ResizableLayout/ResizableLayout';
import DropdownPane from '@/components/DropdownPane/DropdownPane';
import DevNotesModal from '@/components/DeveloperNotesModal/DevNotesModal';
import { useState, useEffect, memo } from 'react';
import { useCodeActions, useInputActions } from '@/context/editor/EditorContentContext';
import { useExecutionActions } from '@/context/editor/ExecutionContext';
import { useEditorSettingsActions } from '@/context/editor/EditorSettingsContext';
import { useSnippetActions } from '@/context/editor/SnippetContext';
import { useParams, useRouter } from 'next/navigation';

const SlugPage = memo(() => {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const { setCode } = useCodeActions();
  const { setInput } = useInputActions();
  const { setOutput } = useExecutionActions();
  const { setLanguage, setIsLanguageChangedByUser } = useEditorSettingsActions();
  const { fetchSnippet } = useSnippetActions();

  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const loadSnippet = async () => {
      if (slug) {
        setIsLanguageChangedByUser(false);
        const data = await fetchSnippet(slug);
        if (data) {
          setCode(data.code);
          setInput(data.input);
          setOutput(data.output);
          setLanguage(data.language);
        } else {
          router.push('/');
        }
      }
      setIsPageLoaded(true);
    };

    loadSnippet();
  }, [
    slug,
    fetchSnippet,
    setCode,
    setInput,
    setOutput,
    setLanguage,
    setIsLanguageChangedByUser,
    router,
  ]);

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

SlugPage.displayName = 'SlugPage';

export default SlugPage;
