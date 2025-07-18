
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Progress } from '@/components/ui/progress';
import { RosaryIcon } from '@/components/landing/rosary-icon';
import { Card, CardContent } from '@/components/ui/card';

function RosaryPattern() {
  return (
    <div className="absolute inset-0 z-0 opacity-5 text-black pointer-events-none">
      <RosaryIcon className="absolute top-[5%] left-[10%] w-24 h-24 transform -rotate-12" />
      <RosaryIcon className="absolute top-[15%] right-[5%] w-32 h-32 transform rotate-6" />
      <RosaryIcon className="absolute top-[40%] left-[20%] w-20 h-20 transform rotate-12" />
      <RosaryIcon className="absolute top-[55%] right-[15%] w-28 h-28 transform -rotate-6" />
      <RosaryIcon className="absolute bottom-[10%] left-[5%] w-40 h-40 transform rotate-15" />
      <RosaryIcon className="absolute bottom-[2%] right-[25%] w-24 h-24 transform -rotate-15" />
      <RosaryIcon className="absolute top-[50%] left-[45%] w-16 h-16 transform -rotate-20" />
      <RosaryIcon className="absolute top-[5%] right-[35%] w-16 h-16 transform rotate-45" />
    </div>
  );
}

export default function LoadingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const name = searchParams.get('name') || '';

  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(74), 500);

    const redirectTimer = setTimeout(() => {
      router.push(`/vaticano?name=${encodeURIComponent(name)}`);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    };
  }, [name, router]);

  return (
    <div className="dark relative flex flex-col min-h-screen bg-[hsl(var(--quiz-background))] text-blue-900 overflow-x-hidden">
      <RosaryPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center z-10">
        <div className="max-w-md w-full">
          <Card className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-2xl border border-blue-200">
            <CardContent className="space-y-6 text-blue-950">
              <h1 className="text-xl md:text-2xl font-bold text-center text-blue-800">
                BUSCANDO A ORAÇÃO IDEAL PARA VOCÊ{name ? `, ${name.split(' ')[0]}` : ''}...
              </h1>
              <Progress value={progress} className="w-full" />
              <p className="text-center text-blue-900/90 animate-pulse">
                Aguarde, o melhor está por vir....
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
