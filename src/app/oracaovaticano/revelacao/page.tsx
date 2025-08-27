'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { RosaryIcon } from '@/components/landing/rosary-icon';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { FooterVaticano } from '@/components/landing/FooterVaticano';

function RosaryPattern() {
  return (
    <div className="absolute inset-0 z-0 opacity-5 text-black pointer-events-none">
      <RosaryIcon className="absolute top-[5%] left-[10%] w-24 h-24 transform -rotate-12" />
      <RosaryIcon className="absolute top-[15%] right-[5%] w-32 h-32 transform rotate-6" />
      <RosaryIcon className="absolute top-[40%] left-[20%] w-20 h-20 transform rotate-12" />
      <RosaryIcon className="absolute top-[55%] right-[15%] w-28 h-28 transform -rotate-6" />
      <RosaryIcon className="absolute bottom-[10%] left-[5%] w-40 h-40 transform rotate-15" />
      <RosaryIcon className="absolute bottom-[2%] right-[25%] w-24 h-24 transform -rotate-15" />
      <RosaryIcon className="absolute top-[50%] left-[45%] w-16 h-16 transform -rotate-20" />
      <RosaryIcon className="absolute top-[5%] right-[35%] w-16 h-16 transform rotate-45" />
    </div>
  );
}

function RevelacaoContent() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name');

    return (
        <div className="dark relative flex flex-col min-h-screen bg-[hsl(var(--quiz-background))] text-blue-900 overflow-x-hidden">
        <RosaryPattern />
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center z-10">
            <div className="max-w-2xl w-full mb-20">
            <Card className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-2xl border border-blue-200">
                <CardContent className="text-left text-lg md:text-xl space-y-4 text-blue-950">
                    <Image
                        src="https://i.imgur.com/SwRqG7D.png"
                        alt="Mãos em oração segurando um terço"
                        width={600}
                        height={400}
                        className="mx-auto mb-6 rounded-lg shadow-lg"
                        data-ai-hint="praying hands rosary"
                    />
                    <p>Você acaba de receber acesso às orações que o Vaticano nunca havia revelado — agora, o caminho para o seu milagre está aberto.</p>
                    <p>Essas orações, mantidas em segredo por séculos, foram preservadas por mãos silenciosas e corações devotos que sabiam do seu poder.</p>
                    <p>Não se trata apenas de palavras, mas de chaves espirituais capazes de abrir portas que a lógica não consegue explicar.</p>
                    <p>Ao entrar em contato com elas, você se conecta a uma força que transcende o visível, acessando uma dimensão onde a fé move o impossível.</p>
                    <p className="font-bold">Este é um momento sagrado: você não está aqui por acaso. Seu milagre começa agora, e tudo o que precisa fazer é permitir que essa energia divina atue em sua vida.</p>
                </CardContent>
            </Card>
            
            <div className="mt-8 text-center">
                <Link href={`/oracaovaticano/loading?name=${encodeURIComponent(name || '')}`}>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg md:text-xl py-4 px-8 uppercase shadow-lg h-auto whitespace-normal text-center">
                        Continuar
                    </Button>
                </Link>
            </div>
            </div>
        </main>
        <FooterVaticano />
        </div>
    );
}

export default function RevelacaoPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <RevelacaoContent />
        </Suspense>
    )
}
