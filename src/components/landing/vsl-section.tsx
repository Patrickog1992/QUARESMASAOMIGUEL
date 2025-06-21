'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function VSLSection() {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    // Show buy button after 24 minutes and 20 seconds
    const showButtonTimeInSeconds = 24 * 60 + 20; // 1460 seconds
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, showButtonTimeInSeconds * 1000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/af55abff-865d-4c58-8cb5-31a9d9647fa2', '_self');
  };

  return (
    <section className="mb-12 md:mb-20">
      <div className="relative overflow-hidden rounded-lg shadow-2xl bg-black">
        {/* Responsive iframe wrapper for 16:9 aspect ratio */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            id="js_video_iframe"
            src="https://jumpshare.com/embed/jlQnaieHvAHRbTgPHvLE"
            frameBorder="0"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
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

      {showBuyButton && (
        <div className="mt-8 text-center">
          <Button 
            size="lg" 
            className="font-bold text-lg md:text-xl py-6 md:py-8 px-8 md:px-12 uppercase animate-pulse shadow-lg"
            onClick={handleBuyClick}
          >
            QUERO RECEBER A QUARESMA DO PADRE PIO
          </Button>
        </div>
      )}
    </section>
  );
}
