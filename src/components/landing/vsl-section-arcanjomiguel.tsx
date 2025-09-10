'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { BuyButtonArcanjoMiguel } from './buy-button-arcanjomiguel';

const VideoPlayer = () => {
    useEffect(() => {
        const scriptId = 'vid-68c0e635bec2bc3ddb427caf-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://scripts.converteai.net/33cb564e-4020-408a-aa81-ef0e9550d70c/players/68c0e635bec2bc3ddb427caf/v4/player.js';
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

export function VSLSectionArcanjoMiguel() {

  return (
    <section>
        <VideoPlayer />
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
