'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Suspense } from 'react';
import Image from 'next/image';

function DesejoContent() {
    const [desire, setDesire] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const name = searchParams.get('name') || '';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/chavedomilagre/carregando?name=${encodeURIComponent(name)}`);
    };

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
                    Qual é o maior desejo do seu coração hoje?
                </h1>
                <p className="text-gray-600 my-4">
                    Compartilhe conosco o que mais deseja alcançar. O Padre Elisio ouvirá seu pedido.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Textarea
                    placeholder="Escreva aqui o maior desejo do seu coração..."
                    value={desire}
                    onChange={(e) => setDesire(e.target.value)}
                    maxLength={200}
                    className="resize-none"
                    />
                    <p className="text-xs text-gray-500 text-right">{desire.length}/200</p>
                    <Button type="submit" size="lg" className="w-full">
                    Continuar
                    </Button>
                </form>
                <div className="mt-6 text-xs text-gray-500">
                    <p>"Mas tu, quando orares, entra no teu quarto e, fechando a tua porta, ora a teu Pai que está em secreto; e teu Pai, que vê em secreto, te recompensará publicamente."</p>
                    <p className="font-semibold">Mateus 6:6</p>
                </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default function DesejoPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <DesejoContent />
        </Suspense>
    )
}
