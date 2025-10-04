'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function ArcanjoMiguelNomePage() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navega para a próxima etapa do quiz, pode passar o nome como query param se necessário
    router.push(`/arcanjomiguel/quiz1`);
  };

  return (
    <div className="dark relative flex flex-col min-h-screen items-center justify-center bg-amber-900 text-white p-4 overflow-x-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')]"></div>
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center z-10">
        <Card className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm border-amber-400/30 text-center">
          <CardContent className="p-6 md:p-8 space-y-6">
            <h1 className="text-xl font-bold text-amber-300">
              Deixe seu nome abaixo para que possamos adicionar em nosso livro de orações🙏
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Digite seu nome aqui..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-center bg-gray-900/50 text-white border-amber-400/50 focus:ring-amber-400"
                required
              />
              <Button type="submit" size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold">
                Continuar
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
