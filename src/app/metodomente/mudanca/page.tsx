'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const options = [
  'Paz interior e confiança para seguir em frente',
  'Clareza e foco para tomar decisões com sabedoria',
  'Presença e conexão profunda com Deus',
  'Leveza para viver os dias com mais calma e alegria',
];

export default function MudancaPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Card className="w-full max-w-lg bg-gray-800/50 backdrop-blur-sm border-amber-400/30">
        <CardContent className="p-6 md:p-8 space-y-6">
          <Image
            src="https://i.imgur.com/EfI6zuh.png"
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto"
            data-ai-hint="logo icon"
          />
          <h1 className="text-2xl font-bold text-amber-300">Se você pudesse mudar como se sente…</h1>
          <p className="text-amber-100">O que mais gostaria de experimentar nos próximos dias?</p>
          <div className="space-y-4">
            {options.map((option) => (
              <Link href="/metodomente/analise" key={option} passHref className="block">
                <Button variant="outline" size="lg" className="w-full h-auto py-3 text-md justify-center whitespace-normal border-amber-400/50 hover:bg-amber-900/50 text-amber-100">
                  {option}
                </Button>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
