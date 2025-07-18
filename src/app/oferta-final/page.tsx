
'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import Image from 'next/image';
import { Check, Gift, BookOpen, Headphones } from 'lucide-react';

export default function OfertaFinalPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || '';

  const handleCheckout = () => {
    // Você pode atualizar este link de checkout se necessário
    window.open('https://pay.kirvano.com/some-checkout-link', '_self');
  };

  return (
    <div className="dark relative flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl w-full">
          <h1 className="text-2xl md:text-4xl font-bold text-primary mb-2">
            A Oração Secreta Feita Especialmente Para Você{name ? `, ${name.split(' ')[0]}` : ''}
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-10">
            Receba a oração que tocará sua vida e abrirá os caminhos que você tanto precisa.
          </p>

          <Card className="bg-card shadow-lg w-full mb-10 border border-primary/50">
            <CardContent className="p-6 md:p-8 text-left space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <BookOpen className="w-7 h-7" /> A Oração Secreta
                </h2>
                <h3 className="font-semibold text-lg mb-2">Por que esta oração é especial?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                    <span>Oração personalizada para seu momento de vida</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                    <span>Envio imediato por e-mail e acesso online</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                    <span>Baseada nos ensinamentos de fé de Padre Pio</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Você vai receber acesso a uma plataforma dedicada ao caminho divino e junto irá receber também:</h3>
                <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                        <span>A Jornada de 30 Dias: um guia espiritual com reflexões diárias</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                        <span>Acesso exclusivo a conteúdos devocionais.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-1 shrink-0" />
                        <span>Acesso imediato e vitalício</span>
                    </li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-accent/30 rounded-lg p-6 text-center mb-10">
            <Gift className="w-12 h-12 mx-auto text-primary mb-4" />
            <h2 className="text-xl md:text-2xl font-bold text-primary">HOJE PADRE PIO VAI TE ABENÇOAR COMPLETAMENTE COM TODA SUA SABEDORIA</h2>
            <p className="italic text-foreground/80 mt-2">"Filho, estes presentes foram preparados com amor, para que você sinta o céu mais perto do seu coração."</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10 text-left">
            <Card className="bg-card shadow-md">
                <CardContent className="p-6">
                    <h3 className="font-bold text-lg flex items-center gap-2"><BookOpen className="w-5 h-5 text-primary"/> 🎁 PRESENTE DE PADRE PIO</h3>
                    <h4 className="font-bold text-2xl my-2">Diário de Milagres</h4>
                    <p className="text-muted-foreground">"Escreva seus pedidos, bênçãos e experiências. Ele será o testemunho do agir divino em sua vida."</p>
                </CardContent>
            </Card>
             <Card className="bg-card shadow-md">
                <CardContent className="p-6">
                    <h3 className="font-bold text-lg flex items-center gap-2"><Headphones className="w-5 h-5 text-primary"/> 🎁 PRESENTE DE PADRE PIO</h3>
                    <h4 className="font-bold text-2xl my-2">Orações em Áudio</h4>
                    <p className="text-muted-foreground">"Escute a oração em momentos de paz ou aflição. Deixe a voz sagrada guiar seu coração."</p>
                </CardContent>
            </Card>
          </div>
           <p className="italic text-foreground/80 mt-2 mb-10">"Estes presentes são sinais divinos de que você não está sozinho(a)."</p>


          <Card className="bg-card shadow-xl w-full border-2 border-green-500">
            <CardContent className="p-6 md:p-8 space-y-6">
                <p className="font-semibold text-lg">Contribua para que nosso projeto abençoe milhares de famílias, assim como você</p>
                <div>
                    <p className="text-muted-foreground">Valor original:</p>
                    <p className="text-2xl font-bold line-through text-destructive">R$ 119,90</p>
                </div>
                 <div>
                    <p className="font-bold text-primary">Oferta de Fé:</p>
                    <p className="text-5xl font-bold text-green-600">R$ 19,90</p>
                    <p className="font-semibold text-muted-foreground">Contribuição única, com propósito</p>
                </div>
              <Button onClick={handleCheckout} size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xl h-auto py-4 animate-pulse">
                Receber Minha Oração Secreta
              </Button>
              <div className="text-center text-muted-foreground text-sm space-y-2">
                 <p>7 dias de bênção ou sua contribuição será devolvida</p>
                 <p className="font-bold">Se sua alma não for tocada, devolvemos sua oferta</p>
                 <p>Contribuição protegida e guiada pela fé</p>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
      <Footer />
    </div>
  );
}
