'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function AudioContent() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name') || '';
    const soundcloudEmbed = `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2159627031&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"></iframe>`;


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <Card className="w-full max-w-md mx-auto shadow-lg text-center">
            <CardContent className="p-6">
            <h1 className="text-lg font-bold text-gray-800">
                Caminhe com o Padre Elisio em seu dia a dia, ele tem as Orações Poderosas especialmente para seu problema.
            </h1>
            <Image
                src="https://i.imgur.com/bS30BjY.jpeg"
                alt="Padre Elisio"
                width={400}
                height={300}
                className="rounded-lg mx-auto my-4"
                data-ai-hint="priest"
            />
            <p className="text-gray-600 my-4">
                A família é um presente de Deus. Padre Elisio intercede pela harmonia, compreensão e amor em seu lar.
            </p>
            <p className="font-semibold my-2">Ouça o que o Padre Elisio tem para te falar:</p>
            <div dangerouslySetInnerHTML={{ __html: soundcloudEmbed }} />
            <Link href={`/chavedomilagre/desejo?name=${encodeURIComponent(name)}`} passHref>
                <Button size="lg" className="w-full mt-6">
                Saiba Mais
                </Button>
            </Link>
            </CardContent>
        </Card>
        </div>
    );
}

export default function AudioPage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <AudioContent />
        </Suspense>
    )
}
