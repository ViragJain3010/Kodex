// src/app/layout.tsx
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import { EditorProvider } from '@/context/EditorContext';
import { ThemeProvider } from '@/context/ThemeProvider';
import { AuthProvider } from '@/context/AuthContext';
import LogoutOverlay from '@/components/Auth/LogoutOverlay';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kodex - Online Code Editor',
  description: 'A powerful online code editor with support for multiple languages and themes.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col h-screen scrollbar-custom`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AuthProvider>
            <Header />
            <EditorProvider>{children}</EditorProvider>
            <LogoutOverlay />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
