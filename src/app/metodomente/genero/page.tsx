'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function GeneroPage() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Card className="w-full max-w-lg bg-gray-800/50 backdrop-blur-sm border-amber-400/30">
        <CardContent className="p-6 md:p-8 space-y-6">
          <Image
            src="https://i.imgur.com/EfI6zuh.png"
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto"
            data-ai-hint="logo icon"
          />
          <h1 className="text-2xl font-bold text-amber-300">Selecione seu gênero para continuar</h1>
          <p className="text-amber-100">O questionário leva poucos minutos.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/metodomente/idade" passHref className="w-full">
              <Button size="lg" className="w-full h-auto py-4 text-lg bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold">
                Sou Homem
              </Button>
            </Link>
            <Link href="/metodomente/idade" passHref className="w-full">
              <Button size="lg" className="w-full h-auto py-4 text-lg bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold">
                Sou Mulher
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
