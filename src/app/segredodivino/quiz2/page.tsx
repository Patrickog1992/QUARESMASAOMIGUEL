'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function Quiz2Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex-grow flex flex-col items-center justify-center">
        <Card className="w-full max-w-lg mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardDescription>Para sabermos se você está apto a ter acesso as 12 frases bíblicas para atrair riqueza, responda essas 3 simples perguntas !</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center mb-4">
              <Image 
                src="https://i.imgur.com/AqZ9gsW.jpeg" 
                alt="Quiz Image" 
                width={400} 
                height={200}
                data-ai-hint="prayer reflection" 
                className="rounded-lg"
              />
            </div>
            <p className="text-center font-semibold mb-4 text-lg">Você sente que suas orações e pedidos não são ouvidos por Deus?</p>
            <div className="flex justify-center gap-4">
              <Link href="/segredodivino/quiz3" passHref>
                <Button size="lg">Sim</Button>
              </Link>
              <Link href="/segredodivino/quiz3" passHref>
                <Button size="lg" variant="outline">Não</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <footer className="w-full text-center py-4 text-gray-500 text-sm">
        A chave do milagre todos os direitos reservados 2025
      </footer>
    </div>
  );
}
