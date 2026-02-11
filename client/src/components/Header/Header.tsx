'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import KodexLogo from './KodexLogo';
import Link from 'next/link';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-background/20 backdrop-blur-sm border-b border-border sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <Link href="/">
          <KodexLogo />
        </Link>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
        >
          {theme === 'dark' ? (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
}
