'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

// Componente para o Player de Vídeo, sem estado interno.
const VideoPlayer = () => {
  useEffect(() => {
    const scriptId = 'vid-687dab447d725bff283daa43-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://scripts.converteai.net/e2641383-5551-41c5-a77a-d490d4e47799/players/687dab447d725bff283daa43/v4/player.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  const videoHtml = `<vturb-smartplayer id="vid-687dab447d725bff283daa43" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-2xl mx-auto"
      dangerouslySetInnerHTML={{ __html: videoHtml }}
    />
  );
};

// Componente para o Botão de Compra com sua própria lógica de tempo.
const TimedBuyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, (24 * 60 + 20) * 1000); // 24 minutes and 20 seconds

    return () => clearTimeout(timer);
  }, []);
  
  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/af55abff-865d-4c58-8cb5-31a9d9647fa2', '_self');
  };
  
  // Reserve space to prevent layout shift
  if (!isVisible) {
    return <div className="h-[92px]" />;
  }

  return (
    <div className="mt-8 text-center">
      <Button
        size="lg"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg md:text-xl py-6 md:py-8 px-6 md:px-12 uppercase animate-pulse shadow-lg h-auto whitespace-normal"
        onClick={handleBuyClick}
      >
        QUERO RECEBER AS ORAÇÕES SECRETAS
      </Button>
    </div>
  );
};


export function VSLSection() {
  return (
    <section className="mb-12 md:mb-20">
      <VideoPlayer />
      
      <TimedBuyButton />

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
