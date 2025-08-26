'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';

export default function CarregandoPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setInterval(() => {
        setProgress(prev => (prev >= 100 ? 100 : prev + 5));
    }, 200);

    const redirectTimer = setTimeout(() => {
      router.push(`/chavedomilagre/video`);
    }, 4500);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardContent className="p-8 space-y-6 text-center">
          <h1 className="text-xl font-bold text-gray-800">
            BUSCANDO A ORAÇÃO IDEAL PARA VOCÊ...
          </h1>
          <Progress value={progress} className="w-full" />
          <p className="text-gray-600 animate-pulse">
            Aguarde, o melhor está por vir...
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
