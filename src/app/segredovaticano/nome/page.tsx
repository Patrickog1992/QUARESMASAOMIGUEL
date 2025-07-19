'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RosaryIcon } from '@/components/landing/rosary-icon';
import { Card, CardContent } from '@/components/ui/card';

function RosaryPattern() {
  return (
    <div className="absolute inset-0 z-0 opacity-5 text-black pointer-events-none">
      <RosaryIcon className="absolute top-[5%] left-[10%] w-24 h-24 transform -rotate-12" />
      <RosaryIcon className="absolute top-[15%] right-[5%] w-32 h-32 transform rotate-6" />
      <RosaryIcon className="absolute top-[40%] left-[20%] w-20 h-20 transform rotate-12" />
      <RosaryIcon className="absolute top-[55%] right-[15%] w-28 h-28 transform -rotate-6" />
      <RosaryIcon className="absolute bottom-[10%] left-[5%] w-40 h-40 transform rotate-15" />
      <RosaryIcon className="absolute bottom-[2%] right-[25%] w-24 h-24 transform -rotate-15" />
      <RosaryIcon className="absolute top-[50%] left-[45%] w-16 h-16 transform -rotate-20" />
      <RosaryIcon className="absolute top-[5%] right-[35%] w-16 h-16 transform rotate-45" />
    </div>
  );
}

export default function SegredoVaticanoNomePage() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/segredovaticano/quiz3?name=${encodeURIComponent(name)}`);
  };

  return (
    <div className="dark relative flex flex-col min-h-screen bg-[hsl(var(--quiz-background))] text-blue-900 overflow-x-hidden">
      <RosaryPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center z-10">
        <div className="max-w-md w-full">
          <Card className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-2xl border border-blue-200">
            <CardContent className="space-y-6 text-blue-950">
              <h1 className="text-xl md:text-2xl font-bold text-center text-blue-800">
                ORAÇÕES PARA SEUS MILAGRES
              </h1>
              <p className="font-semibold text-blue-800">Caminho Abençoado</p>
              <p className="text-center text-blue-900/90">
                Deixe seu nome abaixo para que possamos te mandar as orações específicas para seu problema 🙏
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white/50 border-blue-300 text-blue-800 placeholder:text-blue-500 text-center"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold"
                >
                  Continuar
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
