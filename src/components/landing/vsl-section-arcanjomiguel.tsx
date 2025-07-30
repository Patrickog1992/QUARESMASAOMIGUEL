'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { BuyButtonArcanjoMiguel } from './buy-button-arcanjomiguel';

export function VSLSectionArcanjoMiguel() {
  useEffect(() => {
    const scriptId = 'vid-6889fd2c7833180535eec273-script';
    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://scripts.converteai.net/eb300a46-057f-479b-846c-c24cd8a57d7b/players/6889fd2c7833180535eec273/v4/player.js';
        script.async = true;
        document.head.appendChild(script);
    }
  }, []);
  
  const videoHtml = `<vturb-smartplayer id="vid-6889fd2c7833180535eec273" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;

  return (
    <section className="mb-12 md:mb-20">
      <div 
        className="relative overflow-hidden rounded-lg shadow-2xl"
        dangerouslySetInnerHTML={{ __html: videoHtml }}
      />
      
      <div className="mt-8 text-center">
        <BuyButtonArcanjoMiguel />
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
