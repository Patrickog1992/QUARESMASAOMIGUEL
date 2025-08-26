'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

function ConfirmacaoContent() {
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
                <h1 className="text-lg font-bold text-gray-800 uppercase">
                    {name ? `${name}, ` : ''}PADRE ELISIO TEM UMA PALAVRA PARA VOCÊ
                </h1>
                <p className="text-gray-600 my-2">Agora você ficará em nosso livro de orações🙏</p>
                <Image
                    src="https://i.imgur.com/c8oWk8W.png"
                    alt="Oração"
                    width={400}
                    height={300}
                    className="rounded-lg mx-auto"
                    data-ai-hint="prayer hands"
                />
                <p className="font-semibold text-gray-700 my-4">
                    SERÁ LEMBRADO COM CARINHO EM CADA PRECE. AMÉM!
                </p>
                <Link href={`/chavedomilagre/quiz1?name=${encodeURIComponent(name)}`} passHref>
                    <Button size="lg" className="w-full">
                    Continuar
                    </Button>
                </Link>
                <div className="mt-4 text-xs text-gray-500">
                    <p>"Mas tu, quando orares, entra no teu quarto e, fechando a tua porta, ora a teu Pai que está em secreto; e teu Pai, que vê em secreto, te recompensará publicamente."</p>
                    <p className="font-semibold">Mateus 6:6</p>
                </div>
                </CardContent>
            </Card>
        </div>
    );
}


export default function ConfirmacaoPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <ConfirmacaoContent />
        </Suspense>
    )
}
