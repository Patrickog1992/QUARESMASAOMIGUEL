'use client';

import { Suspense, useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Play, Pause } from 'lucide-react';
import Image from 'next/image';

const WhatsAppAudioPlayer = () => {
  const audioUrl = "https://media.audio.com/1846506684604200.mp3";
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      if (audioRef.current.ended) {
          audioRef.current.currentTime = 0;
      }
      audioRef.current.play().catch(e => console.error("Erro ao tocar áudio:", e));
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.load();

    const setAudioData = () => {
      if (isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(duration);
    };

    audio.addEventListener('durationchange', setAudioData);
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('durationchange', setAudioData);
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [duration]);

  const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="flex items-center gap-3 w-full bg-gray-700/50 rounded-full p-2 border border-amber-400/30">
      <audio ref={audioRef} src={audioUrl} preload="metadata" />
      <Button onClick={togglePlayPause} variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-amber-500 hover:bg-amber-600 text-white shrink-0">
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
      </Button>
      <div className="flex-grow bg-gray-600 h-1 rounded-full relative">
        <div style={{ width: `${progress}%` }} className="bg-amber-400 h-1 rounded-full absolute top-0 left-0" />
        <div style={{ left: `${progress}%` }} className="w-3 h-3 bg-amber-300 rounded-full absolute top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <span className="text-xs text-amber-100 w-10 text-right">{formatTime(isPlaying || currentTime > 0 ? currentTime : duration)}</span>
    </div>
  );
};

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
                        <div className="flex items-center gap-4 my-4">
                            <div className="flex-1 text-left">
                                <WhatsAppAudioPlayer />
                            </div>
                        </div>

                        <div className="pt-4">
                            <Link href="/arcanjomiguel/video" passHref className="block">
                                <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold uppercase animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite] shadow-lg">
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
