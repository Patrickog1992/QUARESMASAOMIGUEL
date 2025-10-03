'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function BuyButtonPadrePio() {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    // Definindo tempo para o botão aparecer (ex: 15 minutos)
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, (15 * 60) * 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleBuyClick = () => {
    // Link de checkout placeholder
    window.open('https://pay.kirvano.com/some-checkout-link', '_self');
  };

  if (!showBuyButton) {
    // Reserva espaço para evitar pulo no layout
    return <div className="h-[92px] md:h-[108px]" />;
  }
  
  return (
    <div className="space-y-4">
        <Button
        size="lg"
        className="w-full max-w-md mx-auto bg-green-600 hover:bg-green-700 text-white font-bold h-auto py-4 text-xl md:text-2xl animate-pulse whitespace-normal shadow-lg shadow-green-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/40 transform hover:scale-105"
        onClick={handleBuyClick}
        >
            QUERO AS ORAÇÕES DO PADRE PIO AGORA
        </Button>
    </div>
  );
}
