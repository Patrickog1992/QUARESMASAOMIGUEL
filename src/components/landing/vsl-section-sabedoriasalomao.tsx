'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const BuyButtonSabedoriaSalomao = () => {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, (13 * 60 + 35) * 1000); // 13 minutes and 35 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/SOME_LINK_HERE', '_self');
  };

  if (!showBuyButton) {
    // Reserve space to prevent layout shift
    return <div className="h-[92px] md:h-[108px]" />;
  }
  
  return (
    <div className="space-y-4">
        <Button
        size="lg"
        className="w-full max-w-md mx-auto bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold h-auto py-4 text-xl md:text-2xl animate-pulse whitespace-normal shadow-lg shadow-amber-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/40 transform hover:scale-105"
        onClick={handleBuyClick}
        >
            QUERO RECEBER A SABEDORIA DE SALOMÃO
        </Button>
    </div>
  );
}


const VideoPlayer = () => {
    useEffect(() => {
        const scriptId = 'vid-68a623b4e299480c79eafe7b-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://scripts.converteai.net/eaf579c8-6aa1-4f6f-b5bd-8ba46f9e23f8/players/68a623b4e299480c79eafe7b/v4/player.js';
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    const videoHtml = `<vturb-smartplayer id="vid-68a623b4e299480c79eafe7b" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;
    
    return (
        <div 
            className="relative overflow-hidden rounded-lg shadow-2xl shadow-amber-500/20"
            dangerouslySetInnerHTML={{ __html: videoHtml }}
        />
    );
};

export function VSLSectionSabedoriaSalomao() {

  return (
    <section>
        <VideoPlayer />
        <div className="mt-8 text-center">
            <BuyButtonSabedoriaSalomao />
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
