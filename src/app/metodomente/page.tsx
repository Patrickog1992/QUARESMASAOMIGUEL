'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, BadgeCheck, BookHeart } from 'lucide-react';

export default function MetodoMentePage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-amber-300">Sua mente não para?</h1>
          <p className="text-lg text-amber-100">
            Descubra por que isso acontece e o que fazer.
            Um teste rápido e gratuito que revela:
          </p>

          <div className="text-left space-y-3 text-white max-w-md mx-auto">
            <p className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-400 mt-1 shrink-0" />
              <span>O que está por trás da sua agitação mental</span>
            </p>
            <p className="flex items-start gap-3">
              <Check className="w-5 h-5 text-green-400 mt-1 shrink-0" />
              <span>E se o Método Mente em Paz é indicado para você.</span>
            </p>
          </div>

          <Image
            src="https://i.imgur.com/N17nccD.png"
            alt="Pessoas em oração"
            width={500}
            height={281}
            className="rounded-lg mx-auto shadow-lg"
            data-ai-hint="praying people collage"
          />

          <div className="space-y-3 text-amber-200">
            <p className="flex items-center justify-center gap-2">
              <BadgeCheck className="w-5 h-5" />
              <span>Já ajudou +2.000 cristãos a acalmar a mente ansiosa</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              <BookHeart className="w-5 h-5" />
              <span>Baseado na fé e comprovado pela ciência.</span>
            </p>
          </div>

          <p className="text-amber-100">
            Comece agora, é rápido e pode mudar sua forma de lidar com o que sente.
          </p>

          <Link href="/metodomente/genero" passHref>
            <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold text-lg animate-pulse">
              Quero fazer o teste gratuito
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
