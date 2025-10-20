'use client';

import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const AudioComPlayer = () => {
  const audioHtml = `<div style="height: 228px; width: 204px;"><iframe src="https://audio.com/embed/audio/1846506684604200?theme=dark" style="display:block; border-radius: 1px; border: none; height: 204px; width: 204px;"></iframe><a href='https://audio.com/geraldooliveira19921992' style="text-align: center; display: block; color: #A4ABB6; font-size: 12px; font-family: sans-serif; line-height: 16px; margin-top: 8px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">@geraldooliveira19921992</a></div>`;
  return (
    <div className="flex justify-center my-4" dangerouslySetInnerHTML={{ __html: audioHtml }} />
  );
}

function AudioContent() {
    return (
        <div className="dark relative flex flex-col min-h-screen items-center justify-center bg-amber-900 text-white p-4 overflow-x-hidden">
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')]"></div>
            <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center z-10">
                <Card className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm border-amber-400/30 text-center">
                    <CardContent className="p-6 md:p-8 space-y-6">
                        <h1 className="text-2xl font-bold text-amber-300">
                           ESCUTE ESSA MENSAGEM DE FREI GILSON
                        </h1>
                        <Image
                            src="https://i.imgur.com/KLKNKbg.jpeg"
                            alt="Frei Gilson"
                            width={120}
                            height={120}
                            className="rounded-full mx-auto shadow-lg border-2 border-amber-400"
                            data-ai-hint="priest portrait"
                        />
                        
                        <AudioComPlayer />

                        <div className="pt-4">
                            <Link href="/arcanjomiguel/video" passHref className="block">
                                <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold uppercase animate-pulse shadow-lg">
                                    QUERO AS ORAÇÕES
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}

export default function AudioPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-amber-900 text-white">Carregando...</div>}>
            <AudioContent />
        </Suspense>
    )
}
