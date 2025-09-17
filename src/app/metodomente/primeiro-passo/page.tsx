'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const options = [
  'Sim, com certeza estou pronto(a) pra começar',
  'Sim, se for algo simples e aplicável no dia a dia',
  'Talvez, depende se eu conseguir me conectar mesmo',
  'Sim, se for acessível financeiramente pra mim',
];

export default function PrimeiroPassoPage() {
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
          <h1 className="text-2xl font-bold text-amber-300">Se você pudesse experimentar um passo simples com base na fé e na ciência para acalmar sua mente em apenas 3 minutos, toparia dar esse primeiro passo para retomar o controle?</h1>
          <div className="space-y-4">
            {options.map((option) => (
              <Link href="/metodomente/explicacao3" key={option} passHref className="block">
                <Button variant="outline" size="lg" className="w-full h-auto py-3 text-md justify-center whitespace-normal border-amber-400/50 hover:bg-amber-900/50 text-amber-100">
                  {option}
                </Button>
              </Link>
            ))}
          </div>
          <Link href="/metodomente/explicacao3" passHref>
            <Button size="lg" className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold">Continuar</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
