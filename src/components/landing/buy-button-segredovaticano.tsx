'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function BuyButtonSegredoVaticano() {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, (46 * 60 + 43) * 1000); // 46 minutes and 43 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/7dd669b1-45d8-440a-b107-3b3881c36d22', '_self');
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
      SIM ! EU QUERO ACESSO AS ORAÇÕES SAGRADAS POR R$ 97,00
    </Button>
  );
}
