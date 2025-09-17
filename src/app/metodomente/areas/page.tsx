'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const options = [
  { emoji: '🙏🏻', text: 'Minha vida espiritual: rezo, mas não encontro paz' },
  { emoji: '❤', text: 'Meus relacionamentos: me sinto impaciente ou distante' },
  { emoji: '💼', text: 'Meu trabalho: perco o foco, o ânimo e a confiança' },
  { emoji: '🩺', text: 'Minha saúde: cansaço, tensão e dores no corpo' },
];

export default function AreasPage() {
  return (
    <div className="flex flex-col items-center justify-between min-h-[calc(100vh-10rem)] w-full">
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
          <h1 className="text-2xl font-bold text-amber-300">Quais áreas da sua vida têm mais sofrido por causa dessa agitação mental?</h1>
          <p className="text-amber-100">Selecione uma ou mais opções para avançar</p>
          <div className="space-y-4">
            {options.map((option) => (
              <Link href="/metodomente/momentos" key={option.text} passHref className="block">
                <Button variant="outline" size="lg" className="w-full h-auto py-4 text-lg justify-start text-left whitespace-normal border-amber-400/50 hover:bg-amber-900/50">
                  <span className="text-2xl mr-4">{option.emoji}</span>
                  <span className="text-amber-100">{option.text}</span>
                </Button>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
      <footer className="w-full text-center py-4 text-amber-100 text-sm mt-8">
        Método Mente em Paz todos os direitos reservados 2025.
      </footer>
    </div>
  );
}
