'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const options = [
  { emoji: '🤯', text: 'Acelerada e cheia de preocupações o tempo todo' },
  { emoji: '😓', text: 'Agitada, com muitos pensamentos girando sem parar' },
  { emoji: '😕', text: 'Alguns dias bons, outros bem difíceis' },
  { emoji: '😅', text: 'Mais tranquila, mas com algumas tensões ainda' },
];

export default function SentimentoPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Card className="w-full max-w-lg bg-gray-800/50 backdrop-blur-sm border-amber-400/30">
        <CardContent className="p-6 md:p-8 space-y-6">
          <h1 className="text-2xl font-bold text-amber-300">E a sua mente, como tem se sentido nos últimos dias?</h1>
          <p className="text-amber-100">(Escolha a que mais te representa hoje)</p>
          <div className="space-y-4">
            {options.map((option) => (
              <Link href="/metodomente/identificacao" key={option.text} passHref className="block">
                <Button variant="outline" size="lg" className="w-full h-auto py-4 text-lg justify-start text-left whitespace-normal border-amber-400/50 hover:bg-amber-900/50">
                  <span className="text-2xl mr-4">{option.emoji}</span>
                  <span className="text-amber-100">{option.text}</span>
                </Button>
              </Link>
            ))}
          </div>
          <Link href="/metodomente/identificacao" passHref>
            <Button size="lg" className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold">Continuar</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
