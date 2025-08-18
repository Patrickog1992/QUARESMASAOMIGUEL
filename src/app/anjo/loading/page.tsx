'use client';

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { AngelIcon } from '@/components/landing/AngelIcon';

function LoadingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const name = searchParams.get('name') || '';

  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(82), 500);

    const redirectTimer = setTimeout(() => {
      router.push(`/anjo/revelacao?name=${encodeURIComponent(name)}`);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, [name, router]);

  return (
    <div className="dark relative flex flex-col min-h-screen items-center justify-center bg-gray-50 text-gray-800 p-4 overflow-x-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03] text-black pointer-events-none">
            <AngelIcon className="absolute top-[5%] left-[10%] w-24 h-24 transform -rotate-12" />
            <AngelIcon className="absolute top-[15%] right-[5%] w-32 h-32 transform rotate-6" />
        </div>
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center z-10">
        <div className="max-w-md w-full">
          <Card className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-2xl border border-gray-200">
            <CardContent className="space-y-6 text-gray-950">
              <h1 className="text-xl md:text-2xl font-bold text-center text-amber-600">
                ESTAMOS DESCOBRINDO O SEU ANJO DA GUARDA
              </h1>
              <Progress value={progress} className="w-full [&>div]:bg-amber-500" />
              <p className="text-center text-gray-600 animate-pulse">
                Aguarde, sua bênção está a caminho...
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default function LoadingPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <LoadingContent />
        </Suspense>
    );
}
