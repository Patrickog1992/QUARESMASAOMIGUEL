'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const BuyButtonOracaoHebraica = () => {
  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/placeholder-link', '_self'); // ADICIONE SEU LINK DE CHECKOUT AQUI
  };
  
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
        const scriptId = 'vid-hebraica-placeholder-script'; // ID único para este player
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            // ATENÇÃO: Substitua pelo SRC do script do seu vídeo da Vturb
            script.src = 'https://scripts.converteai.net/eaf579c8-6aa1-4f6f-b5bd-8ba46f9e23f8/players/68a623b4e299480c79eafe7b/v4/player.js';
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    // ATENÇÃO: Substitua pelo ID do seu vídeo da Vturb
    const videoHtml = `<vturb-smartplayer id="vid-68a623b4e299480c79eafe7b" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;
    
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
