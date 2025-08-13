'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function BuyButtonSegredoVaticano() {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    // Timer para mostrar o botão após 15 minutos
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, (15 * 60) * 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleBuyClick = () => {
    // Link de checkout placeholder
    window.open('https://pay.kirvano.com/d9a4b3d2-c1e0-4b2a-8f5c-9d6e4a8b1a3e', '_self');
  };

  if (!showBuyButton) {
    // Reserva espaço para evitar pulo no layout
    return <div className="h-[76px] md:h-[92px]" />;
  }
  
  return (
    <Button
      size="lg"
      className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg md:text-xl py-6 md:py-8 px-6 md:px-12 uppercase animate-pulse shadow-lg h-auto whitespace-normal"
      onClick={handleBuyClick}
    >
      QUERO OS SEGREDOS DIVINOS
    </Button>
  );
}
