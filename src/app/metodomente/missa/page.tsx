'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const options = [
  'Vou sempre (domingos e dias de preceito)',
  'Costumo ir algumas vezes por mês',
  'Faz tempo que não consigo ir',
  'Estou afastado(a), mas gostaria de voltar',
];

export default function MissaPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Card className="w-full max-w-lg bg-gray-800/50 backdrop-blur-sm border-amber-400/30">
        <CardContent className="p-6 md:p-8 space-y-6">
          <h1 className="text-xl font-bold text-amber-300">Sabemos que, em momentos de agitação, até a prática da fé pode ser afetada.</h1>
          <p className="text-amber-100">Por isso, queremos entender um pouco mais da sua realidade hoje:</p>
          <p className="text-amber-100 font-semibold text-lg">Como está sua frequência na Missa atualmente?</p>
          <div className="space-y-4">
            {options.map((option) => (
              <Link href="/metodomente/identificacao2" key={option} passHref className="block">
                <Button variant="outline" size="lg" className="w-full h-auto py-3 text-md justify-center whitespace-normal border-amber-400/50 hover:bg-amber-900/50 text-amber-100">
                  {option}
                </Button>
              </Link>
            ))}
          </div>
          <Link href="/metodomente/identificacao2" passHref>
            <Button size="lg" className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold">Continuar</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
