'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function VSLSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showBuyButton, setShowBuyButton] = useState(false);
  const [isInitialMute, setIsInitialMute] = useState(true);
  const [showProgress, setShowProgress] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSrc = "https://d3s1jrfpp0f48y.cloudfront.net/k3skl7%2Ffile%2Fd7b16a9ef5c155558a07bf3cf02a8f44_0a7d1df4ce1b6a0ee4d801525406d2a8.mp4?response-content-disposition=inline%3Bfilename%3D%22d7b16a9ef5c155558a07bf3cf02a8f44_0a7d1df4ce1b6a0ee4d801525406d2a8.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1750564062&Signature=CVGw2SUQ8-XIyI6fdP9li11F7hf~-S17PYwKz6VYmuW9VpW2mSLfkRbYb-1khpjrC56qcTJ4DTlO5rGDkqFn~1dH9Rn5K5-L4aZ1eSU5y6mi2BcNVbmSHS69nCMEFVeGk9IFDnQfc-~cBcOaGqDQY5Lc693CFUFvQAZT73XSQMzs4RdCeR8l-Os6XkTPjeB2GKOXZhq2Y-cnCg9dWOBJCZdDnSkXcbdckZVpGwLqUY0cmWvsW15jEXaH3JJbvtJP3sZkpPame~wplFHyj68nyA7vMvNzGonCjV7YA~viY8pgpxMbYR-gDcacUyIgu3EnDs1LOZjZV3j~Z7ZP-dx5LQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    
    const onTimeUpdate = () => {
      const vid = videoRef.current;
      if (vid) {
        // A simple check to avoid frequent state updates if the change is negligible
        if (Math.abs(vid.currentTime - currentTime) > 0.1) {
          setCurrentTime(vid.currentTime);
        }
        if (vid.currentTime > (24 * 60 + 20)) {
          setShowBuyButton(true);
        }
      }
    };

    const onLoadedMetadata = () => {
      if (videoRef.current && isFinite(videoRef.current.duration)) {
        setDuration(videoRef.current.duration);
      }
    };

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('loadedmetadata', onLoadedMetadata);

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.warn("Autoplay was prevented:", error);
        setIsPlaying(false);
      });
    }

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('timeupdate', onTimeUpdate);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isInitialMute) {
        setIsInitialMute(false);
        video.muted = false;
        if (video.paused) {
            video.play();
        }
    } else {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
    }
  };

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/af55abff-865d-4c58-8cb5-31a9d9647fa2', '_self');
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  
  return (
    <section className="mb-12 md:mb-20">
      <div 
        className="relative overflow-hidden rounded-lg shadow-2xl bg-black group/video"
        onMouseEnter={() => setShowProgress(true)}
        onMouseLeave={() => setShowProgress(false)}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full"
          playsInline
          onClick={togglePlayPause}
        />
        
        {isInitialMute && (
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 cursor-pointer"
            onClick={togglePlayPause}
          >
            <div className="text-center p-4 rounded-lg text-primary">
              <Volume2 className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 animate-bounce" />
              <p className="text-xl md:text-2xl font-bold uppercase tracking-wider text-center drop-shadow-lg">
                UMA BENÇÃO ESPERA POR VOCÊ<br/>CLIQUE PARA OUVIR
              </p>
            </div>
          </div>
        )}

        {/* Custom Progress Bar */}
        <div 
          className={`absolute bottom-0 left-0 right-0 p-2 sm:p-4 transition-opacity duration-300 ${showProgress && !isInitialMute ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="w-full h-1 bg-gray-500/50 rounded-full">
            <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }} />
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
            className="font-bold text-lg md:text-xl py-6 md:py-8 px-6 md:px-12 uppercase animate-pulse shadow-lg h-auto whitespace-normal"
            onClick={handleBuyClick}
          >
            QUERO RECEBER A QUARESMA DO PADRE PIO
          </Button>
        </div>
      )}
    </section>
  );
}
