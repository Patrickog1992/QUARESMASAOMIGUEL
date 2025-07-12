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
    console.log('Upsell aceito!');
    // Exemplo: window.open('https://pay.kirvano.com/seu-link-de-upsell', '_self');
  };

  const handleUpsellDecline = () => {
    // TODO: Adicione aqui o link para a página de obrigado ou próxima etapa
    console.log('Upsell recusado.');
    // Exemplo: window.open('/obrigado', '_self');
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
              <Card className="bg-card shadow-lg border-secondary">
                <CardHeader>
                  <Image src="https://placehold.co/600x400.png" alt="Card 1" width={600} height={400} className="rounded-t-lg" data-ai-hint="glowing book" />
                  <CardTitle className="pt-4">Oração da Manhã</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Comece seu dia com proteção e bênçãos.</p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-lg border-primary border-2">
                <CardHeader>
                  <Image src="https://placehold.co/600x400.png" alt="Card 2" width={600} height={400} className="rounded-t-lg" data-ai-hint="shining cross" />
                  <CardTitle className="pt-4">Oração da Tarde</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Renove suas forças e sua fé durante o dia.</p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-lg border-secondary">
                <CardHeader>
                  <Image src="https://placehold.co/600x400.png" alt="Card 3" width={600} height={400} className="rounded-t-lg" data-ai-hint="praying hands night" />
                  <CardTitle className="pt-4">Oração da Noite</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Durma em paz e agradeça pelas graças recebidas.</p>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-xl md:text-2xl font-bold text-accent-foreground">
              Adicione ao seu pedido o "Salmo Secreto dos Milionários" por apenas <span className="text-primary line-through">R$67</span> <span className="text-green-600">R$10</span>!
            </h2>
            
            <p className="text-md md:text-lg text-foreground/90 mt-4 max-w-3xl mx-auto">
              Este é o Salmo que reis e milionários usaram ao longo da história para construir grandes fortunas. É a sua chance de ter acesso a essa sabedoria e transformar sua vida financeira.
            </p>
            
            <div className="w-full max-w-md flex flex-col gap-4 mt-8 mx-auto">
                <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg md:text-xl py-6 uppercase animate-pulse shadow-lg h-auto"
                    onClick={handleUpsellAccept}
                >
                    Sim, eu quero adicionar por R$10
                </Button>
                
                <Button
                    variant="link"
                    className="text-muted-foreground hover:text-foreground"
                    onClick={handleUpsellDecline}
                >
                    Não, obrigado. Quero recusar essa oferta.
                </Button>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}