'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Volume2, Volume1, VolumeX, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

export function VSLSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showBuyButton, setShowBuyButton] = useState(false);
  const [volume, setVolume] = useState(0);
  const [lastVolume, setLastVolume] = useState(1);
  const [isInitialMute, setIsInitialMute] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const videoSrc = "https://d3s1jrfpp0f48y.cloudfront.net/k3skl7%2Ffile%2Fd7b16a9ef5c155558a07bf3cf02a8f44_0a7d1df4ce1b6a0ee4d801525406d2a8.mp4?response-content-disposition=inline%3Bfilename%3D%22d7b16a9ef5c155558a07bf3cf02a8f44_0a7d1df4ce1b6a0ee4d801525406d2a8.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1750564062&Signature=CVGw2SUQ8-XIyI6fdP9li11F7hf~-S17PYwKz6VYmuW9VpW2mSLfkRbYb-1khpjrC56qcTJ4DTlO5rGDkqFn~1dH9Rn5K5-L4aZ1eSU5y6mi2BcNVbmSHS69nCMEFVeGk9IFDnQfc-~cBcOaGqDQY5Lc693CFUFvQAZT73XSQMzs4RdCeR8l-Os6XkTPjeB2GKOXZhq2Y-cnCg9dWOBJCZdDnSkXcbdckZVpGwLqUY0cmWvsW15jEXaH3JJbvtJP3sZkpPame~wplFHyj68nyA7vMvNzGonCjV7YA~viY8pgpxMbYR-gDcacUyIgu3EnDs1LOZjZV3j~Z7ZP-dx5LQ__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    
    const onTimeUpdate = () => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
        if (videoRef.current.currentTime > (24 * 60 + 20)) {
          setShowBuyButton(true);
        }
      }
    };

    const onLoadedMetadata = () => {
      if (videoRef.current && isFinite(videoRef.current.duration)) {
        setDuration(videoRef.current.duration);
      }
    };
    
    const onVolumeChange = () => {
      if(videoRef.current) {
        setVolume(videoRef.current.volume);
        if(!videoRef.current.muted && videoRef.current.volume > 0) {
            setIsInitialMute(false);
        }
      }
    };

    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('timeupdate', onTimeUpdate);
    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('volumechange', onVolumeChange);

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
      video.removeEventListener('volumechange', onVolumeChange);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
        video.volume = volume;
        video.muted = volume === 0;
    }
  }, [volume]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isInitialMute) {
        setIsInitialMute(false);
        setVolume(1);
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

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    if(newVolume > 0) {
        setIsInitialMute(false);
    }
  };

  const toggleMute = () => {
    if (volume > 0) {
      setLastVolume(volume);
      setVolume(0);
    } else {
      setVolume(lastVolume > 0 ? lastVolume : 1);
    }
  };

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/af55abff-865d-4c58-8cb5-31a9d9647fa2', '_self');
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const VolumeIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <section className="mb-12 md:mb-20">
      <div 
        className="relative overflow-hidden rounded-lg shadow-2xl bg-black group/video" 
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
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

        {/* Custom Controls */}
        <div 
          className={`absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${showControls && !isInitialMute ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Bottom Controls */}
          <div className="flex items-center gap-4 text-white mb-2">
            <button onClick={togglePlayPause} className="focus:outline-none">
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </button>
            <div className="flex items-center gap-2 w-24">
              <button onClick={toggleMute} className="focus:outline-none">
                 <VolumeIcon className="h-6 w-6" />
              </button>
              <Slider
                value={[volume]}
                max={1}
                step={0.05}
                onValueChange={handleVolumeChange}
                className="w-full"
              />
            </div>
          </div>
          
          {/* Progress Bar */}
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
