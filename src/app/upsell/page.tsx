'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import type { Metadata } from 'next';
import Image from 'next/image';

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
        <Card className="max-w-3xl w-full bg-card shadow-2xl border-primary border-2">
          <CardHeader>
            <CardTitle className="text-2xl md:text-4xl font-bold text-primary animate-pulse">
              ESPERE! SUA COMPRA AINDA NÃO ACABOU...
            </CardTitle>
            <CardDescription className="text-lg md:text-xl text-foreground/80 pt-4">
              Antes de ir, temos uma oferta única e exclusiva para você.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6">
            <h2 className="text-xl md:text-2xl font-bold text-accent-foreground">
              Adicione ao seu pedido o "Salmo Secreto dos Milionários" por apenas <span className="text-primary line-through">R$67</span> <span className="text-green-600">R$10</span>!
            </h2>
            
            <Image 
                src="https://placehold.co/600x400.png"
                width={600}
                height={400}
                alt="Salmo Secreto dos Milionários"
                className="rounded-lg shadow-lg"
                data-ai-hint="secret scripture treasure"
            />

            <p className="text-md md:text-lg text-foreground/90">
              Este é o Salmo que reis e milionários usaram ao longo da história para construir grandes fortunas. É a sua chance de ter acesso a essa sabedoria e transformar sua vida financeira.
            </p>
            
            <div className="w-full max-w-md flex flex-col gap-4">
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
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
