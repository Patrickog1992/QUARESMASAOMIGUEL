'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/landing/background-pattern';

export default function CancaoNovaManuscritoPage() {

  const handleAccessClick = () => {
    window.open('https://pay.kirvano.com/80aac1c2-c705-436a-a44e-36aa62049297', '_self');
  };

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

          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
            Deus envia sinais aos escolhidos. Sua Vitória está próxima...
          </h1>

          <p className="text-lg md:text-xl text-foreground/90 mb-8">
            Clique no Botão Abaixo e tenha Acesso ao Manuscrito Sagrado!
          </p>

          <Image
            src="https://i.imgur.com/Bz3hYk0.png"
            alt="Manuscrito Sagrado Preview"
            width={600}
            height={400}
            className="mx-auto mb-8 rounded-lg shadow-lg"
            data-ai-hint="sacred manuscript pages"
          />

          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg md:text-xl py-6 md:py-8 px-6 md:px-12 uppercase animate-pulse shadow-lg h-auto whitespace-normal"
            onClick={handleAccessClick}
          >
            <span className="mr-2" role="img" aria-label="hands praying">🙌</span>
            Acessar Meu Manuscrito Sagrado
            <span className="ml-2" role="img" aria-label="hands praying">🙌</span>
          </Button>
        </div>
      </main>
    </div>
  );
}
