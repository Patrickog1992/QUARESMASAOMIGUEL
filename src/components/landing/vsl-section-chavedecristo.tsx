'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const BuyButtonChaveDeCristo = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Aparece depois de 18 minutos e 50 segundos
    const timer = setTimeout(() => {
      setShow(true);
    }, (18 * 60 + 50) * 1000); 

    return () => clearTimeout(timer);
  }, []);

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/99015503-c0de-4020-b89f-203a02684d7e', '_self');
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
    const scriptId = 'vid-688fe16c51ec00e4ce20dac3-script';
    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://scripts.converteai.net/20cc6a98-96ef-4135-bef8-e3435f4fd521/players/688fe16c51ec00e4ce20dac3/v4/player.js';
        script.async = true;
        document.head.appendChild(script);
    }
  }, []);
  
  const videoHtml = `<vturb-smartplayer id="vid-688fe16c51ec00e4ce20dac3" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;

  return (
    <section className="mb-12 md:mb-20">
      <div 
        className="relative overflow-hidden rounded-lg shadow-2xl bg-black mx-auto max-w-lg"
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
