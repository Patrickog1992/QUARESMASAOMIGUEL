'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { BuyButtonArcanjoMiguel } from './buy-button-arcanjomiguel';

export function VSLSectionArcanjoMiguel() {
  useEffect(() => {
    const scriptId = 'vid-68ff78280a5b1514b8ec8a11-script';
    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://scripts.converteai.net/7fdefb10-7541-49c0-8175-a504785477a3/players/68ff78280a5b1514b8ec8a11/v4/player.js';
        script.async = true;
        document.head.appendChild(script);
    }
  }, []);
  
  const videoHtml = `<vturb-smartplayer id="vid-68ff78280a5b1514b8ec8a11" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;

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
