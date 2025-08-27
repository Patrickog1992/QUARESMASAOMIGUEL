'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

const options = [
  { text: 'Sim, com certeza.' },
  { text: 'Sim, se eu conseguir me organizar.' },
  { text: 'Depende da orientação.' },
  { text: 'Não tenho certeza ainda.' },
];

function Quiz4Content() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name') || '';

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="flex-grow flex flex-col items-center justify-center">
                <Image
                    src="https://i.imgur.com/oU1Etag.png"
                    alt="Manuscrito Sagrado"
                    width={500}
                    height={150}
                    className="mb-8 rounded-lg"
                    data-ai-hint="sacred manuscript"
                />
                <Card className="w-full max-w-md mx-auto shadow-lg text-center">
                    <CardContent className="p-6">
                    <h1 className="text-lg font-bold text-gray-800">
                        Se você recebesse uma orientação espiritual simples, você aplicaria nos próximos 3 dias?
                    </h1>
                    <p className="text-gray-600 my-4">
                        Às vezes, tudo que Deus espera é um “sim” pra começar a agir. Fé não é sentir… é obedecer mesmo sem entender.
                    </p>
                    <div className="space-y-3">
                        {options.map((option, index) => (
                        <Link key={index} href={`/chavedomilagre/audio?name=${encodeURIComponent(name)}`} passHref>
                            <Button
                            variant="outline"
                            size="lg"
                            className="w-full h-auto py-3 justify-center border-gray-300 bg-white"
                            >
                            {option.text}
                            </Button>
                        </Link>
                        ))}
                    </div>
                    <div className="mt-6 text-xs text-gray-500">
                        <p>"Mas tu, quando orares, entra no teu quarto e, fechando a tua porta, ora a teu Pai que está em secreto; e teu Pai, que vê em secreto, te recompensará publicamente."</p>
                        <p className="font-semibold">Mateus 6:6</p>
                    </div>
                    </CardContent>
                </Card>
            </div>
            <footer className="w-full text-center py-4 text-gray-500 text-sm">
                A chave do milagre todos os direitos reservados 2025
            </footer>
        </div>
    );
}


export default function Quiz4Page() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <Quiz4Content />
        </Suspense>
    )
}
