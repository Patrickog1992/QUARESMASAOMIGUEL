'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Play, Pause } from 'lucide-react';

const WhatsAppAudioPlayer = () => {
  const audioUrl = "https://archive.org/download/a-chave-do-milagre/A%20Chave%20Do%20Milagre.mp3";
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    }

    const setAudioTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);

    // Event listener for when audio finishes
    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnded);
    }
  }, []);

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex items-center gap-3 w-full bg-gray-200 rounded-lg p-2">
      <audio ref={audioRef} src={audioUrl} preload="metadata" />
      <Button onClick={togglePlayPause} variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-green-500 hover:bg-green-600 text-white shrink-0">
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
      </Button>
      <div className="flex-grow bg-gray-300 h-1 rounded-full relative">
        <div style={{ width: `${progress}%` }} className="bg-green-500 h-1 rounded-full absolute top-0 left-0" />
        <div style={{ left: `${progress}%` }} className="w-3 h-3 bg-green-600 rounded-full absolute top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <span className="text-xs text-gray-500 w-10 text-right">{formatTime(currentTime)}</span>
    </div>
  )
}


function AudioContent() {
    const searchParams = useSearchParams();
    const name = searchParams.get('name') || '';
    
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
            <p className="font-semibold my-4">Ouça o que o Padre Elisio tem para te falar:</p>
            
            <div className="flex items-center gap-4 my-4">
              <Image
                  src="https://i.imgur.com/bS30BjY.jpeg"
                  alt="Avatar Padre Elisio"
                  width={48}
                  height={48}
                  className="rounded-full w-12 h-12 object-cover"
                  data-ai-hint="priest portrait"
              />
              <div className="flex-1 text-left">
                  <p className="font-bold text-gray-800 mb-1">Padre Elisio</p>
                  <WhatsAppAudioPlayer />
              </div>
            </div>

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
