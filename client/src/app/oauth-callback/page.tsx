'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Loader2 } from 'lucide-react';

function OAuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');

    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // Note: We don't have user info yet, but the AuthContext useEffect will
      // trigger after reload or we can fetch it if needed.
      // For now, let's redirect to home and let it handle auth check.
      router.push('/');
      router.refresh(); // Trigger a refresh to update AuthContext
    } else {
      router.push('/login?error=OAuth failed');
    }
  }, [searchParams, router]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 bg-black text-white">
      <Loader2 className="h-12 w-12 text-cyan-500 animate-spin mb-4" />
      <h2 className="text-xl font-semibold">Finalizing authentication...</h2>
      <p className="text-gray-400">You will be redirected shortly.</p>
    </div>
  );
}

export default function OAuthCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 flex flex-col items-center justify-center p-4 bg-black text-white">
          <Loader2 className="h-12 w-12 text-cyan-500 animate-spin mb-4" />
        </div>
      }
    >
      <OAuthCallbackContent />
    </Suspense>
  );
}
