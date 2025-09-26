'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export default function ArcanjoMiguelQuiz3Page() {
  return (
    <div className="dark relative flex flex-col min-h-screen items-center justify-center bg-amber-900 text-white p-4 overflow-x-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')]"></div>
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center z-10">
            <Card className="w-full max-w-lg bg-gray-800/50 backdrop-blur-sm border-amber-400/30 text-center">
                <CardContent className="p-6 md:p-8 space-y-6">
                    <h1 className="text-2xl font-bold text-amber-300">Escreva aqui o que você mais sente falta na sua vida espiritual</h1>
                    <Textarea
                        placeholder="Digite aqui..."
                        className="bg-gray-900/50 text-white border-amber-400/50 focus:ring-amber-400"
                        rows={4}
                    />
                    <div className="pt-4">
                      <Link href="/arcanjomiguel/video" passHref>
                          <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold text-lg animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite] shadow-lg shadow-amber-500/30">
                              QUERO MINHA BENÇÃO
                          </Button>
                      </Link>
                    </div>
                </CardContent>
            </Card>
        </main>
    </div>
  );
}
