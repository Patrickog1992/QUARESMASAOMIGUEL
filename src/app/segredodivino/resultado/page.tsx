'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';

export default function ResultadoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex-grow flex flex-col items-center justify-center">
        <Card className="w-full max-w-lg mx-auto shadow-lg text-center">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-green-600">PARABÉNS!!</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-lg mb-4">
              Você está apto para ter o acesso as 12 orações sagradas que vai atrair riqueza imediata!
            </CardDescription>
            <p className="mb-6">Eu gravei um curto video de 4 minutos explicando como usar essas 12 frases sagradas e atrair toda a riqueza que você merece. Clique no botão abaixo e veja agora!</p>
            <Link href="/segredodivino" passHref>
              <Button size="lg" className="w-full">Clique aqui para ver o video</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      <footer className="w-full text-center py-4 text-gray-500 text-sm">
        A chave do milagre todos os direitos reservados 2025
      </footer>
    </div>
  );
}
