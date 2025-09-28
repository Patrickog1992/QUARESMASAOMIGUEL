'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const options = [
  'Proteção contra energias negativas',
  'Saúde e bem-estar',
  'Prosperidade e abundância financeira',
  'Harmonia e união na família',
];

export default function PalavrasReiSalomaoQuiz1Page() {
  return (
    <div className="dark relative flex flex-col min-h-screen items-center justify-center bg-amber-900 text-white p-4 overflow-x-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')]"></div>
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center z-10">
            <Card className="w-full max-w-lg bg-gray-800/50 backdrop-blur-sm border-amber-400/30 text-center">
                <CardContent className="p-6 md:p-8 space-y-6">
                    <h1 className="text-2xl font-bold text-amber-300">Qual é sua maior preocupação hoje?</h1>
                    <div className="space-y-4">
                        {options.map((option) => (
                        <Link href="/7palavrasreisalomao/quiz2" key={option} passHref className="block">
                            <Button variant="outline" size="lg" className="w-full h-auto py-3 text-md justify-center whitespace-normal border-amber-400/50 hover:bg-amber-900/50 text-amber-100">
                            {option}
                            </Button>
                        </Link>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </main>
    </div>
  );
}
