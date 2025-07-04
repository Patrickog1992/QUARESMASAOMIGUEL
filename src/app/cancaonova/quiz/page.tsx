'use client';

import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import Link from 'next/link';

const quizOptions = [
  { emoji: '🥺', text: 'Dor física (doenças crônicas, limitações)', link: '/cancaonova/vsl' },
  { emoji: '😩', text: 'Crise financeira (dívidas, falta de dinheiro)', link: '/cancaonova/vsl' },
  { emoji: '😔', text: 'Problemas familiares (filhos distantes, conflitos)', link: '/cancaonova/vsl' },
  { emoji: '😞', text: 'Solidão/angústia (vazio espiritual)', link: '/cancaonova/vsl' },
];

export default function CancaoNovaQuizStep2Page() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-blue-50 text-foreground overflow-x-hidden">
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-2xl w-full">
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
