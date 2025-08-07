'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function BuyButtonArcanjoMiguel() {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, 5 * 1000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/6d4a8c2c-5933-4ec4-a873-585f75d81a8b', '_self');
  };

  if (!showBuyButton) {
    // Reserve space to prevent layout shift
    return <div className="h-[76px] md:h-[92px]" />;
  }
  
  return (
    <Button
      size="lg"
      className="font-bold text-lg md:text-xl py-6 md:py-8 px-6 md:px-12 uppercase animate-pulse shadow-lg h-auto whitespace-normal"
      onClick={handleBuyClick}
    >
      QUERO RECEBER MINHAS ORAÇÕES AGORA
    </Button>
  );
}
