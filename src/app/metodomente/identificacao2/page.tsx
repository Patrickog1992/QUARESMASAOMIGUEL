'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const options = [
  { emoji: '🧠', text: 'Sinto que minha mente comanda minhas emoções e eu perco o controle.' },
  { emoji: '🚨', text: 'Fico em alerta o tempo todo, como se algo ruim fosse acontecer.' },
  { emoji: '😓', text: 'As pequenas coisas do dia me sobrecarregam com facilidade.' },
  { emoji: '🌀', text: 'Me sinto preso(a) num ciclo sem fim de estresse e cansaço.' },
];

export default function Identificacao2Page() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Card className="w-full max-w-lg bg-gray-800/50 backdrop-blur-sm border-amber-400/30">
        <CardContent className="p-6 md:p-8 space-y-6">
          <h1 className="text-2xl font-bold text-amber-300">Com qual dessas situações você mais se identifica hoje?</h1>
          <div className="space-y-4">
            {options.map((option) => (
              <Link href="/metodomente/areas" key={option.text} passHref className="block">
                <Button variant="outline" size="lg" className="w-full h-auto py-4 text-lg justify-start text-left whitespace-normal border-amber-400/50 hover:bg-amber-900/50">
                  <span className="text-2xl mr-4">{option.emoji}</span>
                  <span className="text-amber-100">{option.text}</span>
                </Button>
              </Link>
            ))}
          </div>
          <Link href="/metodomente/areas" passHref>
            <Button size="lg" className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold">Continuar</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
