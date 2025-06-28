'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function VSLSectionNova() {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    // Temporarily show the buy button after 1 second for review
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, 1000);

    const scriptId = 'scr_68580daef5d522f5f216ce24';
    // Avoid appending the script if it already exists
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://scripts.converteai.net/62757a1b-3965-4814-8cfb-7803a2e429e1/players/68580daef5d522f5f216ce24/player.js';
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
    window.open('https://pay.kirvano.com/6d4a8c2c-5933-4ec4-a873-585f75d81a8b', '_self');
  };

  return (
    <section className="mb-12 md:mb-20">
       {/* Container for the Converte.ai player */}
      <div className="relative overflow-hidden rounded-lg shadow-2xl">
        <div id="vid_68580daef5d522f5f216ce24" style={{ position: 'relative', width: '100%', padding: '178.21782178217822% 0 0' }}>
          <img
            id="thumb_68580daef5d522f5f216ce24"
            src="https://images.converteai.net/62757a1b-3965-4814-8cfb-7803a2e429e1/players/68580daef5d522f5f216ce24/thumbnail.jpg"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            alt="thumbnail"
          />
          <div
            id="backdrop_68580daef5d522f5f216ce24"
            style={{ WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%' }}
          ></div>
        </div>
      </div>

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
