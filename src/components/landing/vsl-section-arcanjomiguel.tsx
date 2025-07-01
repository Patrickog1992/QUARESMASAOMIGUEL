'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function VSLSectionArcanjoMiguel() {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    // Show the buy button after 13 minutes and 35 seconds
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, (13 * 60 + 35) * 1000);

    const scriptId = 'scr-6863f7275c1018cf3f63a5a9';
    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://scripts.converteai.net/ba88e257-ee82-4efe-bc55-87bc87882ad1/players/6863f7275c1018cf3f63a5a9/v4/player.js';
        script.async = true;
        document.head.appendChild(script);
    }
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/6d4a8c2c-5933-4ec4-a873-585f75d81a8b', '_self');
  };
  
  const videoHtml = `<vturb-smartplayer id="vid-6863f7275c1018cf3f63a5a9" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;

  return (
    <section className="mb-12 md:mb-20">
      <div 
        className="relative overflow-hidden rounded-lg shadow-2xl"
        dangerouslySetInnerHTML={{ __html: videoHtml }}
      />
      
      {showBuyButton && (
        <div className="mt-8 text-center">
          <Button
            size="lg"
            className="font-bold text-lg md:text-xl py-6 md:py-8 px-6 md:px-12 uppercase animate-pulse shadow-lg h-auto whitespace-normal"
            onClick={handleBuyClick}
          >
            QUERO RECEBER MINHAS ORAÇÕES AGORA
          </Button>
        </div>
      )}

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
    </section>
  );
}
