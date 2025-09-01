'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const BuyButtonOracaoHebraica = () => {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, 5 * 1000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);


  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/5aad4662-0df0-451b-8bed-3ec1b9d3df60', '_self');
  };
  
  if (!showBuyButton) {
    // Reserve space to prevent layout shift
    return <div className="h-[60px]" />;
  }

  return (
    <Button
      size="lg"
      className="w-full max-w-md mx-auto bg-green-600 hover:bg-green-700 text-white font-bold h-auto py-4 text-xl md:text-2xl animate-pulse whitespace-normal shadow-lg"
      onClick={handleBuyClick}
    >
      QUERO AS ORAÇÕES HEBRAICAS
    </Button>
  );
}


const VideoPlayer = () => {
    useEffect(() => {
        const scriptId = 'vid-68b5d8f59762276e295435f3-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://scripts.converteai.net/eaf579c8-6aa1-4f6f-b5bd-8ba46f9e23f8/players/68b5d8f59762276e295435f3/v4/player.js';
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    const videoHtml = `<vturb-smartplayer id="vid-68b5d8f59762276e295435f3" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;
    
    return (
        <div 
            className="relative overflow-hidden rounded-lg shadow-2xl shadow-amber-500/20"
            dangerouslySetInnerHTML={{ __html: videoHtml }}
        />
    );
};

export function VSLSectionOracaoHebraica() {
  return (
    <section className="space-y-8">
        <VideoPlayer />
        
        <div className="mt-8 text-center">
            <BuyButtonOracaoHebraica />
        </div>

        <div className="flex justify-center">
            <Image
                src="https://i.imgur.com/XH2eHXm.png"
                alt="Selo de Garantia"
                width={600}
                height={200}
                className="rounded-lg"
                data-ai-hint="guarantee seal"
            />
        </div>
    </section>
  );
}
