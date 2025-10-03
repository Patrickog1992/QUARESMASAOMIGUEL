'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function BuyButtonPadrePio() {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    // Definindo tempo para o botão aparecer (copiado de arcanjomiguel)
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, (13 * 60 + 34) * 1000); // 13 minutes and 34 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleBuyClick = () => {
    // Link de checkout (usando o mesmo do arcanjomiguel como placeholder)
    window.open('https://pay.kirvano.com/3a6ebdce-f5ce-4a44-896a-315d6c749bda', '_self');
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
            QUERO AS ORAÇÕES AGORA
        </Button>
    </div>
  );
}
