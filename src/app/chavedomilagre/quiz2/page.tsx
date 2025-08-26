'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

const options = [
  { emoji: '👎', text: 'Me sinto sozinha, mesmo cercada de pessoas.' },
  { emoji: '❌', text: 'Parece que tudo está dando errado ao mesmo tempo.' },
  { emoji: '🤕', text: 'Estou cansada de lutar e não ver resultado.' },
  { emoji: '🙏', text: 'Tenho orado, mas não sinto resposta de Deus.' },
];

function Quiz2Content() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name') || '';

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
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
                    O que mais tem doído na sua vida nos últimos dias?
                </h1>
                <p className="text-gray-600 my-4">
                    Às vezes a dor é silenciosa, mas ela consome por dentro. Identificar onde dói é o primeiro passo para receber cura.
                </p>
                <div className="space-y-3">
                    {options.map((option, index) => (
                    <Link key={index} href={`/chavedomilagre/quiz3?name=${encodeURIComponent(name)}`} passHref>
                        <Button
                        variant="outline"
                        size="lg"
                        className="w-full h-auto py-3 justify-start text-left whitespace-normal border-gray-300"
                        >
                        <span className="text-2xl mr-3">{option.emoji}</span>
                        <span className="flex-1">{option.text}</span>
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
    );
}


export default function Quiz2Page() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <Quiz2Content />
        </Suspense>
    )
}
