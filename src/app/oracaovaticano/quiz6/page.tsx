'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { RosaryIcon } from '@/components/landing/rosary-icon';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { FooterVaticano } from '@/components/landing/FooterVaticano';

const quizOptions = [
  { text: 'Sim, estou pronto' },
  { text: 'Sim, com o coração aberto' },
  { text: 'Sim, quero o milagre' },
];

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

function QuizContent() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name');

    return (
        <div className="dark relative flex flex-col min-h-screen bg-[hsl(var(--quiz-background))] text-blue-900 overflow-x-hidden">
        <RosaryPattern />
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center z-10">
            <div className="max-w-md w-full mb-20">
            <Card className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-2xl border border-blue-200">
                <CardContent className="space-y-6 text-blue-950">
                <h1 className="text-xl md:text-2xl font-bold text-center text-blue-800">
                    Você se compromete a escutar essa oração com fé e respeito, caso ela seja revelada para você agora?
                </h1>
                <div className="space-y-4">
                    {quizOptions.map((option, index) => (
                    <Link href={`/oracaovaticano/revelacao?name=${encodeURIComponent(name || '')}`} key={index} className="block w-full">
                        <Button
                        size="lg"
                        variant="outline"
                        className="w-full bg-white/50 hover:bg-blue-600 hover:text-white border-blue-300 text-blue-800 font-semibold h-auto py-3 text-base justify-center whitespace-normal text-center"
                        >
                        <span className="flex-1">{option.text}</span>
                        </Button>
                    </Link>
                    ))}
                </div>
                </CardContent>
            </Card>
            </div>
        </main>
        <FooterVaticano />
        </div>
    );
}


export default function OracaoVaticanoQuiz6Page() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <QuizContent />
        </Suspense>
    )
}
