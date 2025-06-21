'use client';

import { useState, useRef, useEffect } from 'react';
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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
        setIsMuted(true);
      }).catch(error => {
        console.error("O autoplay foi bloqueado pelo navegador:", error);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };
  
  const handleVideoClick = () => {
    if (videoRef.current) {
      // If muted, the overlay click handler (unmuteVideo) is called instead.
      // This only toggles play/pause if audio is already on.
      if (!isMuted) {
        if (videoRef.current.paused) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
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
        // Ensure video plays when unmuted
        if (videoRef.current.paused) {
          videoRef.current.play();
          setIsPlaying(true);
        }
    }
  };

  const handleVolumeChange = (value: number[]) => {
    if (videoRef.current) {
      const newVolume = value[0];
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      
      if (newVolume > 0 && videoRef.current.muted) {
        videoRef.current.muted = false;
        setIsMuted(false);
      } else if (newVolume === 0 && !videoRef.current.muted) {
         videoRef.current.muted = true;
         setIsMuted(true);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
        if(videoRef.current.muted){
          unmuteVideo(e);
          return;
        }
        const newMutedState = !videoRef.current.muted;
        videoRef.current.muted = newMutedState;
        setIsMuted(newMutedState);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const { currentTime, duration } = videoRef.current;
      if (duration) {
        const progressPercentage = (currentTime / duration) * 100;
        setProgress(progressPercentage);
      }
    }
  };

  return (
    <section className="mb-12 md:mb-20">
      <div 
        className="relative overflow-hidden rounded-lg shadow-2xl group bg-black cursor-pointer"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        onClick={handleVideoClick}
      >
        <div className="aspect-video">
          <video
            ref={videoRef}
            loop
            src="https://d3s1jrfpp0f48y.cloudfront.net/k3skl7%2Ffile%2Fd7b16a9ef5c155558a07bf3cf02a8f44_0a7d1df4ce1b6a0ee4d801525406d2a8.mp4?response-content-disposition=inline%3Bfilename%3D%22d7b16a9ef5c155558a07bf3cf02a8f44_0a7d1df4ce1b6a0ee4d801525406d2a8.mp4%22%3B&response-content-type=video%2Fmp4&Expires=1750537178&Signature=Zlm9kIqG2pVQG759chJijnn~oYePWjaa2NHlTn4LFYl2FrHX0sKiKpVFpz0d-yOd6w2zXJ3lyOd~mFQ-aDcfWmr4ZOduA8SuoV5LF30r~W1u~hb4bkZx9aP3XkplRmVWypAQ0b2XP9FsLxtwc-A5Cch7xXv6ElDty8vACTuW1gWXTN~8a5rCgFpIT9yYhJhPpZSF1o2EqGLOr2ALA~g4e2iBPoAcUho61DJrYR2LZQ3EopGYTM~JXYTUNeisUZeOCTGmatjdptDRsHNjvUtCBfjBnTPrqwdZpRCzeFTNktiigHvzKyJNujLWu~atVCzOMkn1JqOE8ppkPnxgTbfyNA__&Key-Pair-Id=APKAJT5WQLLEOADKLHBQ"
            className="w-full h-full object-contain"
            onTimeUpdate={handleTimeUpdate}
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
          
          {isMuted && (
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/60"
              onClick={unmuteVideo}
            >
              <VolumeX className="h-12 w-12 text-primary mb-4 animate-bounce" />
              <p className="text-primary text-xl font-bold uppercase tracking-wider">
                Clique para ouvir
              </p>
            </div>
          )}
        </div>

        <div 
          className={cn(
            "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 pointer-events-none",
            (showControls || !isPlaying) ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="w-full">
            <Progress value={progress} className="h-1" />
          </div>

          <div 
            className="flex items-center justify-between text-white mt-2 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
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
        </div>
      </div>
    </section>
  );
}
