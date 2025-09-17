'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Explicacao2Page() {
  return (
    <div className="flex flex-col items-center justify-between min-h-[calc(100vh-10rem)] w-full">
      <Card className="w-full max-w-2xl bg-gray-800/50 backdrop-blur-sm border-amber-400/30">
        <CardContent className="p-6 md:p-8 space-y-6">
          <Image
            src="https://i.imgur.com/EfI6zuh.png"
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto"
            data-ai-hint="logo icon"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-amber-300">Estudos mostram que o cérebro não diferencia realidade de imaginação.</h1>
          <p className="text-lg text-amber-100">
            Por isso, preocupações futuras ativam o mesmo alarme corporal que um perigo real.
          </p>
          <p className="text-lg text-amber-100">
            O que você pensa, sente e imagina pode gerar reações físicas intensas.
          </p>
          <p className="text-xl font-bold text-green-400">
            Felizmente, isso pode ser revertido com um método validado cientificamente e enraizado na fé.
          </p>
          <p className="text-lg text-amber-100">
            Mais de 2 mil cristãos já usaram o Método Mente em Paz para acalmar a mente ansiosa com fé e ciência em apenas 3 minutos por dia.
          </p>
          <Image
            src="https://i.imgur.com/k7Kl5zm.png"
            alt="Pessoas sorrindo"
            width={500}
            height={281}
            className="rounded-lg mx-auto shadow-lg"
            data-ai-hint="smiling people collage"
          />
          <Link href="/metodomente/anapaula" passHref>
            <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold text-lg">
              Continuar
            </Button>
          </Link>
        </CardContent>
      </Card>
      <footer className="w-full text-center py-4 text-amber-100 text-sm mt-8">
        Método Mente em Paz todos os direitos reservados 2025.
      </footer>
    </div>
  );
}
