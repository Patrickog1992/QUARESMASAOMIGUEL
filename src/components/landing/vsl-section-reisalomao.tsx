'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const BuyButtonReiSalomao = () => {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    // Timer para 18 minutos e 11 segundos
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, (18 * 60 + 11) * 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/744371e3-f71d-4496-89ed-fbd85f690eca', '_self');
  };

  if (!showBuyButton) {
    return <div className="h-[92px] md:h-[108px]" />;
  }
  
  return (
    <div className="space-y-4">
        <Button
        size="lg"
        className="w-full max-w-md mx-auto bg-green-600 hover:bg-green-700 text-white font-bold h-auto py-4 text-xl md:text-2xl animate-pulse whitespace-normal shadow-lg shadow-green-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/40 transform hover:scale-105"
        onClick={handleBuyClick}
        >
            QUERO O TRUQUE DE SALOMÃO
        </Button>
    </div>
  );
}

const VideoPlayer = () => {
    useEffect(() => {
        const scriptId = 'vid-68c96bc89c55ddf1509d5054-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://scripts.converteai.net/b45e4a12-72fd-43f2-a7e4-73d6b242d5d9/players/68c96bc89c55ddf1509d5054/v4/player.js';
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    const videoHtml = `<vturb-smartplayer id="vid-68c96bc89c55ddf1509d5054" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;
    
    return (
        <div 
            className="relative overflow-hidden rounded-lg shadow-2xl shadow-amber-500/20"
            dangerouslySetInnerHTML={{ __html: videoHtml }}
        />
    );
};

export function VSLSectionReiSalomao() {

  return (
    <section>
        <VideoPlayer />
        <div className="mt-8 text-center">
            <BuyButtonReiSalomao />
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
    </section>
  );
}
