'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function PadrePioQuizStartPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen items-center justify-center bg-amber-900 text-white p-4 overflow-x-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')]"></div>
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center z-10">
        <Card className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm border-amber-400/30 text-center">
            <CardContent className="p-6 md:p-8 space-y-6">
                <h1 className="text-2xl font-bold text-amber-300">Tem uma MALDIÇÃO escondida travando tua vida, e HOJE ela vai cair por terra!</h1>
                <Image
                    src="https://i.imgur.com/UC7Mkql.png"
                    alt="Maldição sendo quebrada"
                    width={400}
                    height={225}
                    className="rounded-lg mx-auto shadow-lg"
                    data-ai-hint="curse broken light"
                />
                <div className="pt-4">
                  <Link href="/padrepio/quiz1" passHref>
                      <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold text-lg animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite] shadow-lg shadow-amber-500/30">
                          EU QUERO OUVIR AS ORAÇÕES
                      </Button>
                  </Link>
                </div>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
