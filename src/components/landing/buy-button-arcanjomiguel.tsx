'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function BuyButtonArcanjoMiguel() {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, (13 * 60 + 34) * 1000); // 13 minutes and 34 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/d31e1786-289f-41de-a786-00b8925bdfa9', '_self');
  };

  if (!showBuyButton) {
    // Reserve space to prevent layout shift
    return <div className="h-[92px] md:h-[108px]" />;
  }
  
  return (
    <div className="space-y-4">
        <Button
        size="lg"
        className="w-full max-w-md mx-auto bg-green-600 hover:bg-green-700 text-white font-bold h-auto py-4 text-xl md:text-2xl animate-pulse whitespace-normal shadow-lg shadow-green-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/40 transform hover:scale-105"
        onClick={handleBuyClick}
        >
            QUERO AS 50 ORAÇÕES AGORA
        </Button>
    </div>
  );
}
