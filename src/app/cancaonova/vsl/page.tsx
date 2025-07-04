'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/landing/background-pattern';

export default function CancaoNovaVSLIntroPage() {
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

          <p className="text-lg md:text-xl text-foreground/90 mb-4">
            Tenho certeza que ja deve estar perdendo as esperanças...
          </p>
          
          <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-8">
            👇 MAS DEUS NOS DIZ: 👇
          </p>

          <Image
            src="https://i.imgur.com/YyJCqnd.jpeg" 
            alt="Jesus apontando para o céu"
            width={600}
            height={400}
            className="mx-auto mb-8 rounded-lg shadow-lg"
            data-ai-hint="Jesus pointing"
          />

          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8">
            ✝️ Você acredita que Deus tem um propósito maior para sua vida?
          </h2>

          <Link href="/cancaonova/vsl-final"> 
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg md:text-xl py-4 px-8 uppercase shadow-lg h-auto whitespace-normal">
              Continuar
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
