'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { BuyButtonPadrePio } from './buy-button-padrepio';

export function VSLSectionPadrePio() {
  useEffect(() => {
    // Usando o mesmo vídeo do Arcanjo Miguel como placeholder
    const scriptId = 'vid-68dd3c22f6488d2f4d4ebee4-script';
    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://scripts.converteai.net/db159b27-2739-477e-a1ae-6458da34c980/players/68dd3c22f6488d2f4d4ebee4/v4/player.js';
        script.async = true;
        document.head.appendChild(script);
    }
  }, []);
  
  const videoHtml = `<vturb-smartplayer id="vid-68dd3c22f6488d2f4d4ebee4" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;

  return (
    <section>
        <div 
            className="relative overflow-hidden rounded-lg shadow-2xl shadow-amber-500/20"
            dangerouslySetInnerHTML={{ __html: videoHtml }}
        />
        <div className="mt-8 text-center">
            <BuyButtonPadrePio />
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
