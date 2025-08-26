'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const options = [
  { emoji: '🌟', text: 'Acredito Fielmente Nisso!' },
  { emoji: '🔥', text: 'Sim, é claro pra mim.' },
  { emoji: '🛡️', text: 'Acredito Mas Me Sinto Distante...' },
  { emoji: '💡', text: 'Nunca Parei pra pensar nisso.' },
];

function Quiz3Content() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name') || '';
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <Card className="w-full max-w-md mx-auto shadow-lg text-center">
            <CardContent className="p-6">
            <h1 className="text-lg font-bold text-gray-800">
                Você acredita que o poder do Padre Elisio pode te guiar para uma conexão profunda com o Espírito Santo?
            </h1>
            <p className="text-gray-600 my-4">
                Ele pode te ajudar a alcançar o que tanto precisa
            </p>
            <div className="space-y-3">
                {options.map((option, index) => (
                <Link key={index} href={`/chavedomilagre/quiz4?name=${encodeURIComponent(name)}`} passHref>
                    <Button
                    variant="outline"
                    size="lg"
                    className="w-full h-auto py-3 justify-start text-left"
                    >
                    <span className="text-2xl mr-3">{option.emoji}</span>
                    <span>{option.text}</span>
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


export default function Quiz3Page() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <Quiz3Content />
        </Suspense>
    )
}
