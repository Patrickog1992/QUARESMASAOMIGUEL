'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function ChaveDoMilagrePage() {
  const [timeLeft, setTimeLeft] = useState(100); // 1 minuto e 40 segundos

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardContent className="p-6">
          <Image
            src="https://i.imgur.com/31ubrhg.png"
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto"
            data-ai-hint="logo icon"
          />
          <p className="font-semibold text-gray-700 my-4">
            A oração ficará disponível por <span className="text-red-600 font-bold">{minutes}:{seconds}</span>
          </p>
          <h1 className="text-xl font-bold text-red-700 uppercase">
            Tem uma MALDIÇÃO escondida travando tua vida, e HOJE ela vai cair por terra!
          </h1>
          <p className="text-gray-600 my-4">Ouça essa oração poderosa do Padre Elisio</p>
          <Image
            src="https://i.imgur.com/bS30BjY.jpeg"
            alt="Padre Elisio"
            width={400}
            height={300}
            className="rounded-lg mx-auto"
            data-ai-hint="priest praying"
          />
          <Link href="/chavedomilagre/nome" passHref>
            <Button size="lg" className="w-full mt-6 bg-green-600 hover:bg-green-700 text-lg">
              EU QUERO OUVIR A ORAÇÃO🙏
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
