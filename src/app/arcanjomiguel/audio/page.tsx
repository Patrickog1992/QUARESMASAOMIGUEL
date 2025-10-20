
'use client';

import { Suspense, useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Pause } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

const CustomAudioPlayer = () => {
  const audioUrl = "https://archive.org/download/a-chave-do-milagre/A%20Chave%20Do%20Milagre.mp3";
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que o clique se propague para outros elementos
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      if (audioRef.current.ended) {
          audioRef.current.currentTime = 0;
      }
      audioRef.current.play().catch(error => console.error("Error playing audio:", error));
    }
    setIsPlaying(!isPlaying);
  };
  
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleAudioEnd = () => {
      setIsPlaying(false);
      // Opcional: resetar o áudio para o início
      if(audioRef.current) {
        audioRef.current.currentTime = 0;
      }
    };

    audio.addEventListener('ended', handleAudioEnd);
    return () => {
      audio.removeEventListener('ended', handleAudioEnd);
    };
  }, []);

  return (
    <div className="relative w-52 h-52 mx-auto cursor-pointer" onClick={togglePlayPause}>
      <audio ref={audioRef} src={audioUrl} preload="metadata" />
      <Image
        src="https://i.imgur.com/KLKNKbg.jpeg"
        alt="Frei Gilson"
        layout="fill"
        objectFit="cover"
        className="rounded-lg shadow-lg"
        data-ai-hint="priest portrait"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
            <Button
            onClick={togglePlayPause}
            variant="ghost"
            size="icon"
            className="h-16 w-16 rounded-full bg-white/80 hover:bg-white text-black"
            >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
            </Button>
        </div>
      </div>
    </div>
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
                        
                        <CustomAudioPlayer />

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
