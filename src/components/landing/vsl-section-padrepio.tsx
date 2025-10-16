'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { BuyButtonPadrePio } from './buy-button-padrepio';

export function VSLSectionPadrePio() {
  useEffect(() => {
    const scriptId = 'vid-68eb343ff14b2c1f241df258-script';
    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://scripts.converteai.net/072b0676-85aa-49bb-b085-c507ba561c37/players/68eb343ff14b2c1f241df258/v4/player.js';
        script.async = true;
        document.head.appendChild(script);
    }
  }, []);
  
  const videoHtml = `<vturb-smartplayer id="vid-68eb343ff14b2c1f241df258" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;

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
