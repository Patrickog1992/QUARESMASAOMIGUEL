'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Explicacao1Page() {
  return (
    <div className="flex flex-col items-center justify-between min-h-[calc(100vh-10rem)] w-full">
      <Card className="w-full max-w-2xl bg-gray-800/50 backdrop-blur-sm border-amber-400/30 text-center">
        <CardContent className="p-6 md:p-8 space-y-6">
          <Image
            src="https://i.imgur.com/EfI6zuh.png"
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto"
            data-ai-hint="logo icon"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-amber-300">O que você sente tem uma causa científica real: seu cérebro está em modo de sobrevivência.</h1>
          <p className="text-lg text-amber-100">
            Esse estado de alerta faz sua mente acelerar mesmo quando não há perigo real.
          </p>
          <p className="text-lg text-amber-100">
            Quando isso acontece, o corpo libera hormônios, como o cortisol, gerando:
          </p>
          <ul className="list-disc list-inside text-left text-amber-100 space-y-2 max-w-md mx-auto">
            <li>Tensão muscular</li>
            <li>Pensamentos em espiral</li>
            <li>Dificuldade para dormir e até para rezar</li>
          </ul>
          <Image
            src="https://i.imgur.com/l6Ej21n.png"
            alt="Ilustração do cérebro"
            width={500}
            height={281}
            className="rounded-lg mx-auto shadow-lg"
            data-ai-hint="brain illustration"
          />
          <p className="text-xl font-bold text-green-400">
            A boa notícia? Isso pode ser interrompido.
          </p>
          <p className="text-lg text-amber-100">
            Com o método certo, é possível acalmar seu sistema de alarme e restaurar o equilíbrio.
          </p>
          <p className="text-lg text-amber-100">
            Existe um caminho para isso e ele começa aqui.
          </p>

          <Link href="/metodomente/oracao" passHref>
            <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold text-lg">
              Quero começar esse caminho agora
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
