'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { BuyButtonSegredoVaticano } from './buy-button-segredovaticano';

export function VSLSectionSegredoVaticano() {
  useEffect(() => {
    const scriptId = 'vid-689cb380e1219f3777ade5f1-script';
    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://scripts.converteai.net/f346c08c-758d-441a-9d6c-63af28029a8c/players/689cb380e1219f3777ade5f1/v4/player.js';
        script.async = true;
        document.head.appendChild(script);
    }
  }, []);
  
  const videoHtml = `<vturb-smartplayer id="vid-689cb380e1219f3777ade5f1" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;

  return (
    <section className="mb-12 md:mb-20">
      <div className="relative overflow-hidden rounded-lg shadow-2xl bg-black mx-auto max-w-lg">
        <div dangerouslySetInnerHTML={{ __html: videoHtml }} />
      </div>
      
      <div className="mt-8 text-center">
        <BuyButtonSegredoVaticano />
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
