'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const options = [
  'Sim, só preciso de um caminho claro e possível pra mim',
  'Acredito que sim, se for algo que eu consiga aplicar no meu dia a dia',
  'Sim, se eu sentir que não estou sozinho(a) e houver acolhimento',
  'Tenho dúvidas, mas estou aberto(a) a tentar algo novo',
];

export default function ViradaDeChavePage() {
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
          <h1 className="text-2xl font-bold text-amber-300">Se você tivesse o direcionamento certo, acredita que conseguiria virar essa chave emocional e retomar o controle da sua mente?</h1>
          <div className="space-y-4">
            {options.map((option) => (
              <Link href="/metodomente/primeiro-passo" key={option} passHref className="block">
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
