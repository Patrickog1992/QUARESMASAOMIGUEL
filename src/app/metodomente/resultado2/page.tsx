'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AgitationChart = () => (
    <div className="relative w-full h-40 bg-gray-700/50 rounded-lg p-4">
        <div className="flex flex-col justify-between h-full absolute left-4 top-0 text-xs text-amber-100">
            <span>Alto</span>
            <span>Médio</span>
            <span>Normal</span>
            <span>Aceitável</span>
            <span>Baixo</span>
        </div>
        <div className="absolute top-0 bottom-0 left-16 right-4">
            <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-yellow-500 to-green-500 opacity-70 rounded-md"></div>
                
                {/* Você Hoje marker */}
                <div className="absolute top-[10%] left-1/4 -translate-x-1/2 text-center">
                    <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded">Você Hoje</div>
                    <div className="w-px h-2 bg-white mx-auto"></div>
                    <div className="w-3 h-3 bg-white rounded-full border-2 border-black mx-auto"></div>
                </div>

                 {/* Você Depois marker */}
                <div className="absolute top-[75%] left-3/4 -translate-x-1/2 text-center">
                    <div className="bg-green-300 text-black text-xs font-bold px-2 py-1 rounded">Você depois do Método</div>
                    <div className="w-px h-2 bg-green-300 mx-auto"></div>
                    <div className="w-3 h-3 bg-green-300 rounded-full border-2 border-black mx-auto"></div>
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
          <h1 className="text-2xl font-bold text-green-400">Boa notícia: o Método Mente em Paz é um caminho simples que vai funcionar para você.</h1>
          <p className="text-amber-100">Com base nas suas respostas, este é o resultado possível que você pode alcançar ao praticar o Protocolo Corações ao Alto diariamente.</p>
          
          <h2 className="text-xl font-bold text-amber-300">Nível de agitação mental</h2>
          <AgitationChart />

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
