'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function UpsellPage() {
  const handlePadrePioCheckout = () => {
    window.open('https://pay.kirvano.com/859e54be-95a0-4243-96cd-5dd7043097e0', '_self');
  };

  const handleVaticanoCheckout = () => {
    window.open('https://pay.kirvano.com/87004489-1ca3-49fc-a8fc-002952f0dcde', '_self');
  };

  const handleGuiaCheckout = () => {
    window.open('https://pay.kirvano.com/ee21dbf6-05a6-469e-bde5-7a9efd90c6b6', '_self');
  };

  const handleQuaresmaCheckout = () => {
    window.open('https://pay.kirvano.com/52b25369-75d5-48bf-a5fe-546ab6ebe7a1', '_self');
  };

  const handleAllFourCheckout = () => {
    window.open('https://pay.kirvano.com/64053a4f-201b-4e23-b7a5-0e2a9b60f8e7', '_self');
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
        <div className="max-w-7xl w-full">
            <h1 className="text-2xl md:text-4xl font-bold text-primary animate-pulse mb-4">
              ESPERE! SUAS BENÇÃOS AINDA NÃO ACABARAM...
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-10">
              Antes de ir, temos uma oferta única e exclusiva para você.
            </p>

            <div className="grid md:grid-cols-4 gap-8 mb-10">
              <Card className="bg-card shadow-lg flex flex-col border-2 border-primary">
                <CardHeader>
                  <Image src="https://i.imgur.com/F8d7Dym.png" alt="Card 1" width={600} height={400} className="rounded-t-lg" data-ai-hint="glowing book" />
                  <CardTitle className="pt-4">A biografia de Padre Pio</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <p className="mb-2">Conheça a história desse abençoado Padre</p>
                    <p className="mb-4 font-bold text-lg">
                        <span className="line-through text-destructive">De R$47,00</span> por <span className="text-green-600">R$19,90</span>
                    </p>
                  </div>
                  <Button onClick={handlePadrePioCheckout} className="w-full mt-auto bg-green-600 hover:bg-green-700 text-white animate-pulse">Comprar Agora</Button>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-lg flex flex-col border-2 border-primary">
                <CardHeader>
                  <Image src="https://i.imgur.com/vh5FHgl.png" alt="Card 2" width={600} height={400} className="rounded-t-lg" data-ai-hint="shining cross" />
                  <CardTitle className="pt-4">Os segredos do Vaticano revelados</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <p className="mb-2">DESCUBRA tudo que eles escondem de você</p>
                    <p className="mb-4 font-bold text-lg">
                        <span className="line-through text-destructive">De R$47,00</span> por <span className="text-green-600">R$19,90</span>
                    </p>
                  </div>
                  <Button onClick={handleVaticanoCheckout} className="w-full mt-auto bg-green-600 hover:bg-green-700 text-white animate-pulse">Comprar Agora</Button>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-lg flex flex-col border-2 border-primary">
                <CardHeader>
                  <Image src="https://i.imgur.com/Ka1k6li.png" alt="Card 3" width={600} height={400} className="rounded-t-lg" data-ai-hint="bible open" />
                  <CardTitle className="pt-4">Guia de versículos bíblicos poderosos</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                    <div>
                        <p className="mb-2">Esse guia tem um versículo para cada situação da sua vida que está passando</p>
                        <p className="mb-4 font-bold text-lg">
                            <span className="line-through text-destructive">De R$47,00</span> por <span className="text-green-600">R$19,90</span>
                        </p>
                    </div>
                   <Button onClick={handleGuiaCheckout} className="w-full mt-auto bg-green-600 hover:bg-green-700 text-white animate-pulse">Comprar Agora</Button>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-lg flex flex-col border-2 border-primary">
                <CardHeader>
                  <Image src="https://i.imgur.com/4PGkM5T.png" alt="A Quaresma de Padre Pio" width={600} height={400} className="rounded-t-lg" data-ai-hint="praying man" />
                  <CardTitle className="pt-4">A Quaresma de Padre Pio</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                    <div>
                        <p className="mb-2">Junte-se a quaresma</p>
                        <p className="mb-4 font-bold text-lg">
                            <span className="line-through text-destructive">De R$197,00</span> por <span className="text-green-600">R$29,90</span>
                        </p>
                    </div>
                   <Button onClick={handleQuaresmaCheckout} className="w-full mt-auto bg-green-600 hover:bg-green-700 text-white animate-pulse">Comprar Agora</Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-10 mb-10 text-center">
                <Button 
                    onClick={handleAllFourCheckout} 
                    size="lg"
                    className="w-full max-w-2xl mx-auto bg-green-600 hover:bg-green-700 text-white animate-pulse font-bold h-auto py-4 text-base md:text-lg md:py-6 whitespace-normal"
                >
                    APROVEITE ESSA OFERTA OS 4 POR APENAS R$ 37,00
                </Button>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
