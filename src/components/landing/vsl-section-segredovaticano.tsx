'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { BuyButtonSegredoVaticano } from './buy-button-segredovaticano';

export function VSLSectionSegredoVaticano() {
  useEffect(() => {
    const scriptId = 'vid-68791a8c3d4f1b2c3d4f5e6a-script';
    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://scripts.converteai.net/0c8a72db-f75b-4b35-ba2c-4a6f347a22f7/players/68791a8c3d4f1b2c3d4f5e6a/v4/player.js';
        script.async = true;
        document.head.appendChild(script);
    }
  }, []);
  
  const videoHtml = `<vturb-smartplayer id="vid-68791a8c3d4f1b2c3d4f5e6a" style="display: block; margin: 0 auto; width: 100%; max-width: 800px;"></vturb-smartplayer>`;

  return (
    <section className="mb-12 md:mb-20">
      <div className="relative overflow-hidden rounded-lg shadow-2xl aspect-video bg-black mx-auto max-w-4xl">
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
