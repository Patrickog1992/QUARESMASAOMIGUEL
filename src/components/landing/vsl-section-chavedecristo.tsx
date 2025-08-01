'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const BuyButtonChaveDeCristo = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Aparece depois de 15 minutos
    const timer = setTimeout(() => {
      setShow(true);
    }, (15 * 60) * 1000); 

    return () => clearTimeout(timer);
  }, []);

  const handleBuyClick = () => {
    // Substituir pelo link de checkout correto
    window.open('https://pay.kirvano.com/placeholder-link', '_self');
  };
  
  if (!show) {
    // Reserva espaço para o botão
    return <div className="h-[76px] md:h-[92px]" />;
  }

  return (
    <Button
      size="lg"
      className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg md:text-xl py-6 md:py-8 px-6 md:px-12 uppercase animate-pulse shadow-lg h-auto whitespace-normal w-full max-w-lg mx-auto"
      onClick={handleBuyClick}
    >
      SIM, QUERO A CHAVE DE CRISTO
    </Button>
  );
};


export function VSLSectionChaveDeCristo() {
  useEffect(() => {
    // ID do script do player de vídeo - Usando um placeholder
    const scriptId = 'vid-placeholder-chavedecristo-script';
    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        // Substituir pelo SRC do script correto
        script.src = 'https://scripts.converteai.net/e67d6b57-0257-406a-8870-de6c6124203c/players/688c931242446e639faf7b4d/v4/player.js';
        script.async = true;
        document.head.appendChild(script);
    }
  }, []);
  
  // HTML do player de vídeo - Usando um placeholder
  const videoHtml = `<vturb-smartplayer id="vid-688c931242446e639faf7b4d" style="display: block; margin: 0 auto; width: 100%; max-width: 800px;"></vturb-smartplayer>`;

  return (
    <section className="mb-12 md:mb-20">
      <div 
        className="relative overflow-hidden rounded-lg shadow-2xl bg-black aspect-video max-w-4xl mx-auto"
        dangerouslySetInnerHTML={{ __html: videoHtml }}
      />
      
      <div className="mt-8 text-center">
        <BuyButtonChaveDeCristo />
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
