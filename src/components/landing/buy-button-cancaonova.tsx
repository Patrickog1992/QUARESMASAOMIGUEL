'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function BuyButtonCancaoNova() {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    // Show after 15 minutes
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, (15 * 60) * 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleBuyClick = () => {
    // Placeholder link
    window.open('https://pay.kirvano.com/80aac1c2-c705-436a-a44e-36aa62049297', '_self');
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
      QUERO OUVIR AS ORAÇÕES CANTADAS
    </Button>
  );
}
