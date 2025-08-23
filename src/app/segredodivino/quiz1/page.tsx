'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function Quiz1Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-lg mx-auto shadow-lg">
        <CardHeader className="text-center">
          <CardDescription>Para sabermos se você está apto a ter acesso as 12 frases bíblicas para atrair riqueza, responda essas 3 simples perguntas !</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center mb-4">
            <Image 
              src="https://i.imgur.com/0BXlpvG.jpeg" 
              alt="Quiz Image" 
              width={400} 
              height={200}
              data-ai-hint="faith prosperity" 
              className="rounded-lg"
            />
          </div>
          <p className="text-center font-semibold mb-4 text-lg">Você acredita em Deus?</p>
          <div className="flex justify-center gap-4">
            <Link href="/segredodivino/quiz2" passHref>
              <Button size="lg">Sim</Button>
            </Link>
            <Link href="/segredodivino/quiz2" passHref>
              <Button size="lg" variant="outline">Não</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
