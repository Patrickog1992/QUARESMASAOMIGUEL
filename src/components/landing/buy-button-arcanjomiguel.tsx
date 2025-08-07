
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function BuyButtonArcanjoMiguel() {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, (20 * 60) * 1000); // 20 minutes

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
    <div className="space-y-4">
        <p className="text-lg line-through text-blue-300">De R$97,00</p>
        <p className="text-5xl md:text-6xl font-bold text-amber-300 drop-shadow-lg my-2">Por apenas R$ 27,00</p>
        <Button
        size="lg"
        className="w-full max-w-md mx-auto bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold h-auto py-4 text-xl md:text-2xl animate-pulse whitespace-normal shadow-lg shadow-amber-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/40 transform hover:scale-105"
        onClick={handleBuyClick}
        >
            QUERO MINHA PROTEÇÃO AGORA
            <ArrowDown className="w-6 h-6 ml-2 animate-bounce"/>
        </Button>
        <p className="text-sm text-blue-200">Acesso vitalício e imediato por e-mail.</p>
    </div>
  );
}
