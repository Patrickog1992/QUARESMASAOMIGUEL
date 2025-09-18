'use client';

import { useEffect, useState } from 'react';
import { Footer } from '@/components/landing/footer';
import { HebrewPattern } from '@/components/landing/hebrew-pattern';
import { TopBanner } from '@/components/landing/top-banner';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { TestimonialsSectionFrequenciaDivina } from '@/components/landing/testimonials-section-frequenciadivina';

const VideoPlayer = () => {
  useEffect(() => {
    const scriptId = 'vid-68cc1bce667dc295479ce7c5-script';
    if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://scripts.converteai.net/b45e4a12-72fd-43f2-a7e4-73d6b242d5d9/players/68cc1bce667dc295479ce7c5/v4/player.js';
        script.async = true;
        document.head.appendChild(script);
    }
  }, []);

  const videoHtml = `<vturb-smartplayer id="vid-68cc1bce667dc295479ce7c5" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;
    
  return (
      <div 
          className="relative overflow-hidden rounded-lg shadow-2xl shadow-amber-500/20"
          dangerouslySetInnerHTML={{ __html: videoHtml }}
      />
  );
};

const CheckoutButton = () => {
    const handleCheckoutClick = () => {
        window.open('https://pay.kirvano.com/3131a301-2ace-4521-94e9-820f861b980b', '_self');
    };

    return (
        <div className="my-8 text-center">
            <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg md:text-xl py-6 md:py-8 px-6 md:px-12 uppercase animate-pulse shadow-lg h-auto whitespace-normal text-center w-full max-w-lg"
                onClick={handleCheckoutClick}
            >
                QUERO A FREQUÊNCIA DIVINA AGORA
            </Button>
        </div>
    );
};


export default function FrequenciaDivinaPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-amber-900 text-white overflow-x-hidden">
      <TopBanner text="Devido a grande quantidade de pessoas e poucas frequências esse vídeo erá sair do ar hoje : (Coloque a data que a pessoa está acessando)" />
      <HebrewPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 z-10">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          
          <section className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold uppercase text-amber-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
              HOJE É O DIA DO SEU MILAGRE:
            </h1>
            <p className="text-lg md:text-xl font-medium text-amber-100">
                Descubra como restaurar sua saúde e prosperidade agora
            </p>
            <p className="font-bold text-amber-300 uppercase tracking-wider animate-pulse md:text-lg">Veja o vídeo abaixo ( ligue o som )</p>
          </section>

          <VideoPlayer />
          
          <CheckoutButton />

          <Image 
            src="https://i.imgur.com/XH2eHXm.png"
            alt="Garantia"
            width={600}
            height={200}
            className="mx-auto"
            data-ai-hint="guarantee seal"
          />

          <TestimonialsSectionFrequenciaDivina />

        </div>
      </main>
      <Footer />
    </div>
  );
}
