'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const AgitationChart = () => (
    <div className="relative w-full h-48 bg-gray-700/50 rounded-lg p-4 flex flex-col">
        <div className="flex justify-between text-xs text-amber-100">
            <span>Alto</span>
            <span>Médio</span>
            <span>Normal</span>
            <span>Aceitável</span>
            <span>Baixo</span>
        </div>
        <div className="relative flex-grow mt-2">
             {/* Toboggan/Slide path */}
             <div 
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 opacity-80"
                style={{
                    clipPath: 'polygon(0 0, 15% 0, 100% 100%, 85% 100%)'
                }}
            ></div>
            
            {/* Você Hoje marker */}
            <div className="absolute top-[-8px] left-[5%]">
                <div className="relative">
                    <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded shadow-lg">Você Hoje</div>
                     <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-px h-2 bg-white"></div>
                    <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-3 h-3 bg-white rounded-full border-2 border-black"></div>
                </div>
            </div>

            {/* Você Depois marker */}
            <div className="absolute bottom-[-8px] right-[5%]">
                <div className="relative flex flex-col items-center">
                    <div className="w-3 h-3 bg-green-300 rounded-full border-2 border-black"></div>
                    <div className="w-px h-2 bg-green-300"></div>
                    <div className="bg-green-300 text-black text-xs font-bold px-2 py-1 rounded shadow-lg">Você depois do Método</div>
                </div>
            </div>
        </div>
    </div>
);

export default function Resultado2Page() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
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
          <h1 className="text-2xl font-bold text-green-400">Boa notícia: o Método Mente em Paz é um caminho simples que vai funcionar para você.</h1>
          <p className="text-amber-100">Com base nas suas respostas, este é o resultado possível que você pode alcançar ao praticar o Método Mente em Paz diariamente.</p>
          
          <h2 className="text-xl font-bold text-amber-300">Nível de agitação mental</h2>
          <AgitationChart />

          <p className="text-xl font-bold text-green-400">NÍVEL BAIXO</p>
          <p className="text-lg font-semibold text-amber-100">Em menos de 7 dias você conseguirá reduzir o seu nível de ansiedade, angústia e agitação.</p>
          
          <Link href="/metodomente/oferta" passHref>
            <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold text-lg">
              Quero conhecer o Método Mente em Paz
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
