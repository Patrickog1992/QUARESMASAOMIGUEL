'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import Image from 'next/image';

export default function CancaoNovaVideoPage() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const scriptId = "vturb-player-script-6867df691dde06edc9041e7e";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://scripts.converteai.net/ba88e257-ee82-4efe-bc55-87bc87882ad1/players/6867df691dde06edc9041e7e/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    // Show button at 29 minutes and 13 seconds.
    const timer = setTimeout(() => {
        setShowButton(true);
    }, (29 * 60 + 13) * 1000); 

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const videoHtml = `<vturb-smartplayer id="vid-6867df691dde06edc9041e7e" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;

  const handleCheckoutClick = () => {
    window.open('https://pay.kirvano.com/bd3ab7c5-a8ac-4e1e-ba5e-150da54872a0', '_self');
  };

  return (
    <div className="dark relative flex flex-col min-h-screen bg-blue-50 text-foreground overflow-x-hidden">
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-2xl w-full">
            <Image
                src="https://i.imgur.com/oU1Etag.png"
                alt="Manuscrito Sagrado"
                width={500}
                height={150}
                className="mx-auto mb-8 rounded-lg"
                data-ai-hint="sacred manuscript"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8">
                Descubra Como Pessoas Estão<br />
                Sendo Curadas e Enriquecendo<br />
                Em Apenas 7 Dias...
            </h1>
            
            <div 
                className="relative overflow-hidden rounded-lg shadow-2xl mx-auto w-full max-w-sm"
                dangerouslySetInnerHTML={{ __html: videoHtml }}
            />
            
            <div className="mt-8 text-center">
                 {showButton ? (
                    <Button
                        size="lg"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg md:text-xl py-6 md:py-8 px-6 md:px-12 uppercase animate-pulse shadow-lg h-auto whitespace-normal text-center w-full max-w-md"
                        onClick={handleCheckoutClick}
                        >
                        EU QUERO OS MANUSCRITOS
                    </Button>
                 ) : (
                    <div className="h-[76px] md:h-[92px]" />
                 )}
            </div>
        </div>
      </main>
    </div>
  );
}
