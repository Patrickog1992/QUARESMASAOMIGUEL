'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function NomePage() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/chavedomilagre/confirmacao?name=${encodeURIComponent(name)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex-grow flex flex-col items-center justify-center">
        <Image
          src="https://i.imgur.com/oU1Etag.png"
          alt="Manuscrito Sagrado"
          width={500}
          height={150}
          className="mb-8 rounded-lg"
          data-ai-hint="sacred manuscript"
        />
        <Card className="w-full max-w-md mx-auto shadow-lg text-center">
          <CardContent className="p-6">
            <Image
              src="https://i.imgur.com/CSSfW88.png"
              alt="Livro de Orações"
              width={400}
              height={300}
              className="rounded-lg mx-auto mb-4"
              data-ai-hint="prayer book"
            />
            <p className="font-semibold text-gray-700 mb-4">
              Deixe seu nome abaixo para que possamos adicionar em nosso livro de orações🙏
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Digite seu nome aqui..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-center"
                required
              />
              <Button type="submit" size="lg" className="w-full">
                Continuar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
       <footer className="w-full text-center py-4 text-gray-500 text-sm">
        A chave do milagre todos os direitos reservados 2025
      </footer>
    </div>
  );
}
