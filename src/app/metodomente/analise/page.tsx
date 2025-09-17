'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const VideoSection = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show button after 1 minute
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 60 * 1000);

    // Load video player script
    const scriptId = 'vid-68cafadfb90c8375abdc314f-script';
    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://scripts.converteai.net/b45e4a12-72fd-43f2-a7e4-73d6b242d5d9/players/68cafadfb90c8375abdc314f/v4/player.js';
        script.async = true;
        document.head.appendChild(script);
    }

    return () => clearTimeout(timer);
  }, []);

  const videoHtml = `<vturb-smartplayer id="vid-68cafadfb90c8375abdc314f" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>`;
  
  return (
    <>
      <div className="aspect-video w-full rounded-lg overflow-hidden">
         <div dangerouslySetInnerHTML={{ __html: videoHtml }} />
      </div>

      {showButton && (
        <Link href="/metodomente/resultado1" passHref>
          <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold text-lg animate-pulse">
            QUERO VER MEU RESULTADO
          </Button>
        </Link>
      )}
    </>
  );
};


export default function AnalisePage() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Card className="w-full max-w-2xl bg-gray-800/50 backdrop-blur-sm border-amber-400/30">
        <CardContent className="p-6 md:p-8 space-y-6">
          <h1 className="text-2xl font-bold text-amber-300">Quase lá!</h1>
          <p className="text-amber-100">Enquanto analisamos suas respostas e preparamos o seu resultado, assista esse vídeo:</p>
          
          <VideoSection />

        </CardContent>
      </Card>
    </div>
  );
}
