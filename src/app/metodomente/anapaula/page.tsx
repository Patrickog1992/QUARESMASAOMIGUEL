'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function DepoimentoPage() {
  return (
    <div className="flex flex-col items-center justify-between min-h-[calc(100vh-10rem)] w-full">
      <Card className="w-full max-w-2xl bg-gray-800/50 backdrop-blur-sm border-amber-400/30">
        <CardContent className="p-6 md:p-8 space-y-6">
          <Image
            src="https://i.imgur.com/EfI6zuh.png"
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto"
            data-ai-hint="logo icon"
          />
          <h1 className="text-2xl md:text-3xl font-bold text-amber-300">Veja o depoimento da nossa querida Ana Paula</h1>
          
          <div className="w-full max-w-lg mx-auto">
            <Image
                src="https://i.imgur.com/FXZ2CKN.png"
                alt="Depoimento de Ana Paula"
                width={640}
                height={360}
                className="rounded-lg shadow-lg"
                data-ai-hint="woman testimonial"
            />
          </div>
          
          <p className="text-lg text-amber-100 max-w-xl mx-auto italic">
            "Eu vivia em um turbilhão de pensamentos, não conseguia dormir e sentia que estava perdendo a minha fé. O Método Mente em Paz foi um resgate. Em poucos dias, aplicando os 3 minutos diários, senti uma calma que não experimentava há anos. A ciência me ajudou a entender minha mente, e a fé me reconectou com Deus. Hoje, durmo em paz e rezo com o coração tranquilo."
          </p>

          <Link href="/metodomente/virada-de-chave" passHref>
            <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold text-lg">
              Eu também quero essa transformação
            </Button>
          </Link>
        </CardContent>
      </Card>
      <footer className="w-full text-center py-4 text-amber-100 text-sm mt-8">
        Método Mente em Paz todos os direitos reservados 2025.
      </footer>
    </div>
  );
}
