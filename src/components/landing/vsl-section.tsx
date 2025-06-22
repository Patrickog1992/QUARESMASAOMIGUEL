'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function VSLSection() {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    // Show the buy button after 24 minutes and 20 seconds
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, (24 * 60 + 20) * 1000);

    const scriptId = 'scr_685797132aa650383f53bc95';
    // Avoid appending the script if it already exists
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://scripts.converteai.net/62757a1b-3965-4814-8cfb-7803a2e429e1/players/685797132aa650383f53bc95/player.js';
      script.async = true;
      document.head.appendChild(script);
    }
    
    return () => {
      clearTimeout(timer);
      // We don't remove the script on unmount because the player might be needed
      // again and re-initializing could cause issues.
    };
  }, []);

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/af55abff-865d-4c58-8cb5-31a9d9647fa2', '_self');
  };

  return (
    <section className="mb-12 md:mb-20">
       {/* Container for the Converte.ai player */}
      <div className="relative overflow-hidden rounded-lg shadow-2xl bg-black">
        <div id="vid_685797132aa650383f53bc95" style={{ position: 'relative', width: '100%', padding: '125% 0 0' }}>
          <img
            id="thumb_685797132aa650383f53bc95"
            src="https://images.converteai.net/62757a1b-3965-4814-8cfb-7803a2e429e1/players/685797132aa650383f53bc95/thumbnail.jpg"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            alt="thumbnail"
          />
          <div
            id="backdrop_685797132aa650383f53bc95"
            style={{ WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%' }}
          ></div>
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
