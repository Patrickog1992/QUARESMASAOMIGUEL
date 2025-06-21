'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export function VSLSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Autoplay started
        }).catch(error => {
          console.error("O autoplay foi bloqueado pelo navegador:", error);
          setIsPlaying(false);
        });
      }
    }
  }, []);

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };
  
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (!isMuted) {
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }
    }
  }

  const unmuteVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
        videoRef.current.muted = false;
        setIsMuted(false);
        if (videoRef.current.volume === 0) {
            videoRef.current.volume = 1;
            setVolume(1);
        }
        if (videoRef.current.paused) {
          videoRef.current.play();
        }
    }
  };

  const handleVolumeChange = (value: number[]) => {
    if (videoRef.current) {
      const newVolume = value[0];
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      
      const newMutedState = newVolume === 0;
      if (isMuted !== newMutedState) {
        videoRef.current.muted = newMutedState;
        setIsMuted(newMutedState);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
        const newMutedState = !isMuted;
        videoRef.current.muted = newMutedState;
        if(!newMutedState && volume === 0) {
            const newVolume = 1;
            setVolume(newVolume);
            videoRef.current.volume = newVolume;
        }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const { currentTime, duration } = videoRef.current;
      if (duration) {
        const progressPercentage = (currentTime / duration) * 100;
        setProgress(progressPercentage);
      }

      const showButtonTime = 24 * 60 + 20; // 1460 seconds
      if (!showBuyButton && currentTime >= showButtonTime) {
        setShowBuyButton(true);
      }
    }
  };

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/af55abff-865d-4c58-8cb5-31a9d9647fa2', '_self');
  };

  const handleMouseEnter = () => {
    if (!isMuted) {
      setShowControls(true);
    }
  };

  const handleMouseLeave = () => {
    if(isPlaying){
      setShowControls(false);
    }
  };
  
  useEffect(() => {
    if (isPlaying && !isMuted) {
      const timer = setTimeout(() => {
        setShowControls(false);
      }, 2000); // Hide controls after 2 seconds of playing
      return () => clearTimeout(timer);
    } else if (!isPlaying) {
      setShowControls(true);
    }
  }, [isPlaying, isMuted]);


  return (
    <section className="mb-12 md:mb-20">
      <div 
        className="relative overflow-hidden rounded-lg shadow-2xl group bg-black cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleVideoClick}
      >
        <div className="aspect-video">
          <video
            ref={videoRef}
            loop
            playsInline
            src="https://d3s1jrfpp0f48y.cloudfront.net/k3skl7%2Ffile%2Fd7b16a9ef5c155558a07bf3cf02a8f44_0a7d1df4ce1b6a0ee4d801525406d2a8.mp4?response-content-disposition=inline%3Bfilename%3D%22d7b16a9ef5c155558a07bf3cf02a8f44_0a7d1df4ce1b6a0ee4d801525406d2a8.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1750564062&Signature=CVGw2SUQ8-XIyI6fdP9li11F7hf~-S17PYwKz6VYmuW9VpW2mSLfkRbYb-1khpjrC56qcTJ4DTlO5rGDkqFn~1dH9Rn5K5-L4aZ1eSU5y6mi2BcNVbmSHS69nCMEFVeGk9IFDnQfc-~cBcOaGqDQY5Lc693CFUFvQAZT73XSQMzs4RdCeR8l-Os6XkTPjeB2GKOXZhq2Y-cnCg9dWOBJCZdDnSkXcbdckZVpGwLqUY0cmWvsW15jEXaH3JJbvtJP3sZkpPame~wplFHyj68nyA7vMvNzGonCjV7YA~viY8pgpxMbYR-gDcacUyIgu3EnDs1LOZjZV3j~Z7ZP-dx5LQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ"
            className="w-full h-full object-contain"
            onTimeUpdate={handleTimeUpdate}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
          
          {isMuted && (
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/60"
              onClick={unmuteVideo}
            >
              <VolumeX className="h-12 w-12 text-primary mb-4 animate-bounce" />
              <p className="text-primary text-xl font-bold uppercase tracking-wider text-center px-4">
                Uma bênção espera por você clique para ouvir
              </p>
            </div>
          )}
        </div>

        <div 
          className={cn(
            "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300",
            (showControls || !isPlaying) ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="flex flex-col gap-2" onClick={(e) => e.stopPropagation()}>
            <div 
              className="flex items-center justify-between text-white pointer-events-auto"
            >
              <div className="flex items-center gap-2">
                <Button onClick={togglePlayPause} variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white">
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
                <div className="flex items-center gap-2 w-24">
                  <Button onClick={toggleMute} variant="ghost" size="icon" className="text-white hover:bg-white/20 hover:text-white">
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </Button>
                  <Slider 
                    min={0}
                    max={1}
                    step={0.05}
                    value={[isMuted ? 0 : volume]}
                    onValueChange={handleVolumeChange}
                  />
                </div>
              </div>
            </div>
            <Progress value={progress} className="h-1 pointer-events-none" />
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-center">
        <Image
          src="https://i.imgur.com/o8id6M2.png"
          alt="Selo de Garantia"
          width={600}
          height={155}
          className="rounded-lg shadow-md"
          data-ai-hint="guarantee badge"
        />
      </div>

      {showBuyButton && (
        <div className="mt-8 text-center">
          <Button 
            size="lg" 
            className="font-bold text-lg md:text-xl py-6 md:py-8 px-8 md:px-12 uppercase animate-pulse shadow-lg"
            onClick={handleBuyClick}
          >
            QUERO RECEBER A QUARESMA DO PADRE PIO
          </Button>
        </div>
      )}
    </section>
  );
}
