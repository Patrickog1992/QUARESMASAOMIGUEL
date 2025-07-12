'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function UpsellPage() {
  const handleUpsellAccept = () => {
    // TODO: Adicione aqui o link de checkout para o produto do upsell
    window.open('https://pay.kirvano.com/seu-link-de-upsell', '_self');
  };

  const handleUpsellDecline = () => {
    // TODO: Adicione aqui o link para a página de obrigado ou próxima etapa
    console.log('Upsell recusado.');
    window.open('/obrigado', '_self');
  };

  return (
    <div className="dark relative flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-5xl w-full">
            <h1 className="text-2xl md:text-4xl font-bold text-primary animate-pulse mb-4">
              ESPERE! SUAS BENÇÃOS AINDA NÃO ACABARAM...
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-10">
              Antes de ir, temos uma oferta única e exclusiva para você.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <Card className="bg-card shadow-lg border-secondary flex flex-col">
                <CardHeader>
                  <Image src="https://placehold.co/600x400.png" alt="Card 1" width={600} height={400} className="rounded-t-lg" data-ai-hint="glowing book" />
                  <CardTitle className="pt-4">Oração da Manhã</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <p className="mb-2">Comece seu dia com proteção e bênçãos.</p>
                    <p className="mb-4 font-bold text-lg">
                        <span className="line-through text-destructive">De R$47,00</span> por <span className="text-green-600">R$19,90</span>
                    </p>
                  </div>
                  <Button onClick={handleUpsellAccept} className="w-full mt-auto bg-green-600 hover:bg-green-700 text-white animate-pulse">Comprar Agora</Button>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-lg border-primary border-2 flex flex-col">
                <CardHeader>
                  <Image src="https://placehold.co/600x400.png" alt="Card 2" width={600} height={400} className="rounded-t-lg" data-ai-hint="shining cross" />
                  <CardTitle className="pt-4">Oração da Tarde</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <p className="mb-2">Renove suas forças e sua fé durante o dia.</p>
                    <p className="mb-4 font-bold text-lg">
                        <span className="line-through text-destructive">De R$47,00</span> por <span className="text-green-600">R$19,90</span>
                    </p>
                  </div>
                  <Button onClick={handleUpsellAccept} className="w-full mt-auto bg-green-600 hover:bg-green-700 text-white animate-pulse">Comprar Agora</Button>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-lg border-secondary flex flex-col">
                <CardHeader>
                  <Image src="https://placehold.co/600x400.png" alt="Card 3" width={600} height={400} className="rounded-t-lg" data-ai-hint="praying hands night" />
                  <CardTitle className="pt-4">Oração da Noite</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                    <div>
                        <p className="mb-2">Durma em paz e agradeça pelas graças recebidas.</p>
                        <p className="mb-4 font-bold text-lg">
                            <span className="line-through text-destructive">De R$47,00</span> por <span className="text-green-600">R$19,90</span>
                        </p>
                    </div>
                   <Button onClick={handleUpsellAccept} className="w-full mt-auto bg-green-600 hover:bg-green-700 text-white animate-pulse">Comprar Agora</Button>
                </CardContent>
              </Card>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
