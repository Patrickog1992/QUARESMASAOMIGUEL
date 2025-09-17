'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const ageOptions = [
  { label: 'Menos de 30 anos' },
  { label: 'Entre 30 e 40 anos' },
  { label: 'Entre 41 e 50 anos' },
  { label: 'Entre 51 e 60 anos' },
  { label: 'Acima de 60 anos' },
];

export default function IdadePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Card className="w-full max-w-xl bg-gray-800/50 backdrop-blur-sm border-amber-400/30">
        <CardContent className="p-6 md:p-8 space-y-6">
          <Image
            src="https://i.imgur.com/EfI6zuh.png"
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto"
            data-ai-hint="logo icon"
          />
          <h1 className="text-2xl font-bold text-amber-300">Qual a sua faixa etária?</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ageOptions.map((option) => (
              <Link href="/metodomente/rotina" key={option.label} passHref>
                <Button variant="outline" className="h-auto p-4 flex flex-col gap-2 border-amber-400/50 hover:bg-amber-900/50 text-amber-100 text-lg">
                  <span>{option.label}</span>
                </Button>
              </Link>
            ))}
          </div>
          <Link href="/metodomente/rotina" passHref>
            <Button size="lg" className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold">Continuar</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
