'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function VSLSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showBuyButton, setShowBuyButton] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSrc = "https://d3s1jrfpp0f48y.cloudfront.net/k3skl7%2Ffile%2Fd7b16a9ef5c155558a07bf3cf02a8f44_0a7d1df4ce1b6a0ee4d801525406d2a8.mp4?response-content-disposition=inline%3Bfilename%3D%22d7b16a9ef5c155558a07bf3cf02a8f44_0a7d1df4ce1b6a0ee4d801525406d2a8.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1750564062&Signature=CVGw2SUQ8-XIyI6fdP9li11F7hf~-S17PYwKz6VYmuW9VpW2mSLfkRbYb-1khpjrC56qcTJ4DTlO5rGDkqFn~1dH9Rn5K5-L4aZ1eSU5y6mi2BcNVbmSHS69nCMEFVeGk9IFDnQfc-~cBcOaGqDQY5Lc693CFUFvQAZT73XSQMzs4RdCeR8l-Os6XkTPjeB2GKOXZhq2Y-cnCg9dWOBJCZdDnSkXcbdckZVpGwLqUY0cmWvsW15jEXaH3JJbvtJP3sZkpPame~wplFHyj68nyA7vMvNzGonCjV7YA~viY8pgpxMbYR-gDcacUyIgu3EnDs1LOZjZV3j~Z7ZP-dx5LQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    const updateTime = () => {
      if (!video) return;
      setCurrentTime(video.currentTime);
      if (video.currentTime > (24 * 60 + 20) && !showBuyButton) {
        setShowBuyButton(true);
      }
    };

    const handleLoadedMetadata = () => {
      if(video) setDuration(video.duration);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Muted autoplay is generally allowed
    video.muted = true;
    const playPromise = video.play();
    if(playPromise !== undefined){
      playPromise.catch(error => {
        console.warn("Autoplay was prevented:", error);
        setIsPlaying(false);
        // User might need to click to start, overlay handles this
      });
    }

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [showBuyButton]);

  const handleUserInteraction = () => {
    const video = videoRef.current;
    if (video) {
      if (video.muted) {
        // First interaction unmutes and ensures video is playing
        video.muted = false;
        setIsMuted(false);
        if (video.paused) {
          video.play();
        }
      } else {
        // Subsequent interactions toggle play/pause
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }
    }
  };

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/af55abff-865d-4c58-8cb5-31a9d9647fa2', '_self');
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className="mb-12 md:mb-20">
      <div className="relative overflow-hidden rounded-lg shadow-2xl bg-black cursor-pointer" onClick={handleUserInteraction}>
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full"
          playsInline
          // No controls attribute to hide default controls
        />
        
        {isMuted && (
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60"
          >
            <div className="text-center p-4 rounded-lg text-primary">
              <Volume2 className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 animate-pulse" />
              <p className="text-lg sm:text-xl font-bold uppercase tracking-wider text-center">
                UMA BENÇÃO ESPERA POR VOCÊ<br/>CLIQUE PARA OUVIR
              </p>
            </div>
          </div>
        )}

        {/* Visual-only progress bar at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-500/50 pointer-events-none">
          <div className="h-full bg-primary" style={{ width: `${progress}%` }} />
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
