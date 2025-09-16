'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const BuyButtonReiSalomao = () => {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    // Timer para 20 minutos
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, (20 * 60) * 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/CHECKOUT_LINK_HERE', '_self');
  };

  if (!showBuyButton) {
    return <div className="h-[92px] md:h-[108px]" />;
  }
  
  return (
    <div className="space-y-4">
        <Button
        size="lg"
        className="w-full max-w-md mx-auto bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold h-auto py-4 text-xl md:text-2xl animate-pulse whitespace-normal shadow-lg shadow-amber-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/40 transform hover:scale-105"
        onClick={handleBuyClick}
        >
            QUERO AS 22 PALAVRAS DE SALOMÃO
        </Button>
    </div>
  );
}

const VideoPlayer = () => {
    useEffect(() => {
        // Placeholder VTurb ID - substitua pelo ID real
        const scriptId = 'vid-reisalomao-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://scripts.converteai.net/33cb564e-4020-408a-aa81-ef0e9550d70c/players/68c0e635bec2bc3ddb427caf/v4/player.js'; // Usando o vídeo do arcanjomiguel como placeholder
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    const videoHtml = `<vturb-smartplayer id="vid-68c0e635bec2bc3ddb427caf" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;
    
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
