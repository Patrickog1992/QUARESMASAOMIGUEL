'use client';

import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import Link from 'next/link';
import Image from 'next/image';

const quizOptions = [
  { emoji: '😃', text: 'Sim, algo relacionado a água/deserto', link: '/cancaonova/manuscrito' },
  { emoji: '😯', text: 'Sonhos com curas ou mensagens', link: '/cancaonova/manuscrito' },
  { emoji: '😉', text: 'Nada, mas sinto que algo está por vir', link: '/cancaonova/manuscrito' },
  { emoji: '😔', text: 'Não acredito nisso', link: '/cancaonova/manuscrito' },
];

export default function CancaoNovaVSLFinalPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-blue-50 text-foreground overflow-x-hidden">
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-2xl w-full">
          <Image
            src="https://i.imgur.com/oU1Etag.png"
            alt="Manuscrito Sagrado"
            width={500}
            height={150}
            className="mx-auto mb-8 rounded-lg"
            data-ai-hint="sacred manuscript"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8">
            Qual dessas situações mais te aflige Atualmente?
          </h1>

          <div className="space-y-4">
            {quizOptions.map((option, index) => (
              <Link href={option.link} key={index} className="block">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full h-auto py-4 px-6 text-left justify-start text-md md:text-lg bg-white hover:bg-blue-100 border-blue-200"
                >
                  <span className="text-2xl mr-4">{option.emoji}</span>
                  <span>{option.text}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
