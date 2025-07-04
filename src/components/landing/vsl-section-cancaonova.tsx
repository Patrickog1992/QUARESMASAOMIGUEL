'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { BuyButtonCancaoNova } from './buy-button-cancaonova';

export function VSLSectionCancaoNova() {
  useEffect(() => {
    const scriptId = 'scr-685fefad80579a0ff032f65c-cancaonova'; // Placeholder video, unique id
    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://scripts.converteai.net/62757a1b-3965-4814-8cfb-7803a2e429e1/players/685fefad80579a0ff032f65c/v4/player.js';
        script.async = true;
        document.head.appendChild(script);
    }
  }, []);
  
  const videoHtml = `<vturb-smartplayer id="vid-685fefad80579a0ff032f65c" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>`;

  return (
    <section className="mb-12 md:mb-20">
      <div className="relative overflow-hidden rounded-lg shadow-2xl max-w-4xl mx-auto aspect-video bg-black">
          <div dangerouslySetInnerHTML={{ __html: videoHtml }} />
      </div>
      
      <div className="mt-8 text-center">
        <BuyButtonCancaoNova />
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
