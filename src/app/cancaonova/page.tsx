'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/landing/background-pattern';

export default function CancaoNovaQuizPage() {
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

          <h1 className="text-2xl md:text-4xl font-bold text-blue-600 mb-4 uppercase">
            Descubra o Manuscrito Sagrado Capaz de Transformar SUA Vida em Apenas 7 Dias...
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/90 mb-8 font-bold">
            Você foi guiado(a) até aqui por um motivo divino. em poucos minutos, descubra o manuscrito sagrado que foi destinado para sua cura!
          </p>
          
          <Image
            src="https://i.imgur.com/NnpPI3u.jpeg"
            alt="Cura Divina"
            width={600}
            height={400}
            className="mx-auto mb-8 rounded-lg shadow-lg"
            data-ai-hint="divine guidance"
          />
          
          <Link href="/cancaonova/quiz">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg md:text-xl py-6 md:py-8 px-6 md:px-12 uppercase animate-pulse shadow-lg h-auto whitespace-normal">
              Continuar
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
