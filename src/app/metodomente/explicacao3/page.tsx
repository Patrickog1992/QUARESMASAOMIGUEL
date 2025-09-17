'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Explicacao3Page() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Card className="w-full max-w-2xl bg-gray-800/50 backdrop-blur-sm border-amber-400/30">
        <CardContent className="p-6 md:p-8 space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-amber-300">Fé e Ciência Caminhando Juntas</h1>
          <p className="text-lg text-amber-100">Muitos que chegaram aqui relataram a mesma coisa: dificuldade de dormir, rezar, focar, conversar.</p>
          <p className="text-xl font-bold text-green-400">A boa notícia é que isso pode ser treinado.</p>
          <p className="text-lg text-amber-100">Deus nos deu corpo e alma. A espiritualidade fortalece o coração. A ciência nos ajuda a entender a mente.</p>
          <p className="text-lg font-semibold text-amber-100">Unir os dois é o caminho para restaurar a paz mesmo em meio à tempestade.</p>
          <p className="text-lg text-amber-100">Com prática, isso é possível.</p>
          <Image
            src="https://i.imgur.com/3FJd5Hj.png"
            alt="Fé e ciência"
            width={500}
            height={281}
            className="rounded-lg mx-auto shadow-lg"
            data-ai-hint="faith science"
          />
          <Link href="/metodomente/mudanca" passHref>
            <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold text-lg">
              Continuar nessa direção
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
