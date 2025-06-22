'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function VSLSection() {
  const [showVideo, setShowVideo] = useState(false);
  const [showBuyButton, setShowBuyButton] = useState(false);
  const videoId = '6i77T4HnUEY';

  useEffect(() => {
    // Show the buy button after 24 minutes and 20 seconds
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, (24 * 60 + 20) * 1000);

    return () => clearTimeout(timer);
  }, []);

  const handlePlay = () => {
    setShowVideo(true);
  };

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/af55abff-865d-4c58-8cb5-31a9d9647fa2', '_self');
  };
  
  return (
    <section className="mb-12 md:mb-20">
      <div 
        className="relative overflow-hidden rounded-lg shadow-2xl bg-black aspect-video"
      >
        {showVideo ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3`}
            className="w-full h-full absolute top-0 left-0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video player"
          ></iframe>
        ) : (
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 cursor-pointer"
            onClick={handlePlay}
          >
            <div className="text-center p-4 rounded-lg">
              <Volume2 className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 animate-bounce text-primary" />
              <p className="text-xl md:text-2xl font-bold uppercase tracking-wider text-center drop-shadow-lg text-yellow-400">
                UMA BENÇÃO ESPERA POR VOCÊ
              </p>
               <p className="mt-2 text-lg md:text-xl font-bold uppercase tracking-wider text-center drop-shadow-lg text-white">
                CLIQUE PARA OUVIR
              </p>
            </div>
          </div>
        )}
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
