'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AngelIcon } from '@/components/landing/AngelIcon';
import Link from 'next/link';
import Image from 'next/image';

function RevelacaoContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || '';

  return (
    <div className="dark relative flex flex-col min-h-screen items-center justify-center bg-gray-50 text-gray-800 p-4 overflow-x-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.03] text-black pointer-events-none">
            <AngelIcon className="absolute top-[5%] left-[10%] w-24 h-24 transform -rotate-12" />
            <AngelIcon className="absolute top-[15%] right-[5%] w-32 h-32 transform rotate-6" />
            <AngelIcon className="absolute bottom-[5%] right-[10%] w-20 h-20 transform rotate-12" />
            <AngelIcon className="absolute bottom-[15%] left-[5%] w-28 h-28 transform -rotate-6" />
        </div>
      <Card className="w-full max-w-lg bg-white/80 backdrop-blur-sm shadow-2xl z-10 text-center">
        <CardContent className="p-6 md:p-8">
            <h1 className="text-xl md:text-2xl font-bold text-amber-600 mb-4">
                INCRÍVEL! {name ? `${name.toUpperCase()}, ` : ''}SEU ANJO DA GUARDA É SÃO MIGUEL ARCANJO!
            </h1>
            <Image 
                src="https://i.imgur.com/uG26GHe.png"
                alt="São Miguel Arcanjo"
                width={200}
                height={200}
                className="mx-auto my-4 rounded-full border-4 border-amber-400 shadow-lg"
                data-ai-hint="archangel michael"
            />
            <h2 className="text-lg font-bold text-gray-800">São Miguel Arcanjo</h2>
            <p className="text-gray-600 mt-2 mb-6">
                Líder do exército celestial, seu canto, o mais intenso, pode realizar milagres financeiros em menos de 24 horas.
            </p>
             <p className="text-gray-600 mt-2 mb-6 font-bold">
                Clique no Botão Abaixo para ouvir o canto do seu Anjo!
            </p>
          <Link href="/anjo/video" passHref>
            <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg h-auto py-4 animate-pulse">
                <span className="text-2xl mr-2">▶</span>
                Clique Aqui para Manifestar com São Miguel
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}


export default function RevelacaoPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <RevelacaoContent />
        </Suspense>
    );
}
