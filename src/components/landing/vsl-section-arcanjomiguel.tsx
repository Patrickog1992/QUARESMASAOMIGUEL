'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { BuyButtonArcanjoMiguel } from './buy-button-arcanjomiguel';

export function VSLSectionArcanjoMiguel() {
  useEffect(() => {
    const scriptId = 'vid-68d6c97660f5e1ab216b2d22-script';
    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://scripts.converteai.net/b45e4a12-72fd-43f2-a7e4-73d6b242d5d9/players/68d6c97660f5e1ab216b2d22/v4/player.js';
        script.async = true;
        document.head.appendChild(script);
    }
  }, []);
  
  const videoHtml = `<vturb-smartplayer id="vid-68d6c97660f5e1ab216b2d22" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;

  return (
    <section>
        <div 
            className="relative overflow-hidden rounded-lg shadow-2xl shadow-amber-500/20"
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
