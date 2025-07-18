
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { RosaryIcon } from '@/components/landing/rosary-icon';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

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

export default function OsegredoVaticanoQuiz2Page() {
  const [name, setName] = useState('');
  const router = useRouter();

  const isButtonDisabled = !name.trim();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isButtonDisabled) {
      e.preventDefault();
    }
  };

  return (
    <div className="dark relative flex flex-col min-h-screen bg-[hsl(var(--quiz-background))] text-blue-900 overflow-x-hidden">
      <RosaryPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center z-10">
        <div className="max-w-md w-full">
          <Card className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-2xl border border-blue-200">
            <CardContent className="space-y-6 text-blue-950">
              <div className="space-y-6">
                <div className="text-center">
                  <Label htmlFor="name" className="text-lg md:text-xl font-semibold text-blue-800">
                    Deixe seu nome abaixo para que possamos destinar as orações para seu problema em específico 🙏
                  </Label>
                </div>
                <Input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome completo aqui..."
                  className="text-center text-lg bg-white/50 border-blue-300 focus:ring-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <Link 
                  href={`/osegredovaticano/quiz3?name=${encodeURIComponent(name)}`}
                  onClick={handleClick}
                  className={cn(
                    "block w-full",
                    isButtonDisabled && "pointer-events-none opacity-50"
                  )}
                  aria-disabled={isButtonDisabled}
                  tabIndex={isButtonDisabled ? -1 : undefined}
                >
                  <Button
                    asChild={false} 
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg md:text-xl py-4 uppercase shadow-lg h-auto"
                    disabled={isButtonDisabled}
                  >
                    Receber minhas orações
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
