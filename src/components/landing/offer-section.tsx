'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Timer } from 'lucide-react';

export function OfferSection() {
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/80aac1c2-c705-436a-a44e-36aa62049297', '_self');
  };

  return (
    <section className="flex flex-col items-center text-center mb-12 md:mb-20">
      <Card className="bg-accent text-accent-foreground p-3 md:p-4 rounded-xl shadow-lg mb-8 max-w-3xl w-full">
        <h1 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <Timer className="h-8 w-8 sm:h-10 sm:w-10 shrink-0" />
          <span className="text-center">
            DESCONTO ESPECIAL DE <span className="line-through">R$47,00</span> por R$27,00: {minutes}:{seconds}
          </span>
        </h1>
      </Card>

      <div className="mt-8 flex flex-col items-center gap-8 w-full max-w-lg">
        <Image
          src="https://images2.imgbox.com/51/ed/QsrQDGbj_o.jpg"
          alt="Depoimentos de padres sobre as orações"
          width={800}
          height={600}
          className="rounded-lg shadow-md"
          data-ai-hint="priests collage"
        />

        <Button
          size="lg"
          className="font-bold text-lg md:text-xl py-6 md:py-8 px-6 md:px-12 uppercase animate-pulse shadow-lg h-auto whitespace-normal"
          onClick={handleBuyClick}
        >
          EU QUERO AS ORAÇÕES COM DESCONTO POR R$27,00
        </Button>
      </div>
    </section>
  );
}
