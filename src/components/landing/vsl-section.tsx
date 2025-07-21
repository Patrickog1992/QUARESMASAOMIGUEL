'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function VSLSection() {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    // Show the buy button after 5 seconds
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, 5 * 1000);

    const scriptId = 'vid-687dab447d725bff283daa43-script';
    // Avoid appending the script if it already exists
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://scripts.converteai.net/e2641383-5551-41c5-a77a-d490d4e47799/players/687dab447d725bff283daa43/v4/player.js';
      script.async = true;
      document.head.appendChild(script);
    }
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  const videoHtml = `<vturb-smartplayer id="vid-687dab447d725bff283daa43" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/af55abff-865d-4c58-8cb5-31a9d9647fa2', '_self');
  };

  return (
    <section className="mb-12 md:mb-20">
      <div 
        className="relative overflow-hidden rounded-lg shadow-2xl mx-auto"
        dangerouslySetInnerHTML={{ __html: videoHtml }}
      />

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

      <div className="mt-8 text-center h-[92px]">
        <Button
          size="lg"
          className={cn(
            "bg-green-600 hover:bg-green-700 text-white font-bold text-lg md:text-xl py-6 md:py-8 px-6 md:px-12 uppercase animate-pulse shadow-lg h-auto whitespace-normal transition-opacity duration-500",
            showBuyButton ? "opacity-100" : "opacity-0"
          )}
          onClick={handleBuyClick}
          disabled={!showBuyButton}
        >
          QUERO RECEBER AS ORAÇÕES SECRETAS
        </Button>
      </div>
    </section>
  );
}
