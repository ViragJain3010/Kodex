// src/app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import { EditorProvider } from '@/context/EditorContext';

import { ThemeProvider } from '@/context/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kodex - Online Code Editor',
  description: 'A powerful online code editor with support for multiple languages and themes.',
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col h-screen scrollbar-custom`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <EditorProvider>{children}</EditorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
