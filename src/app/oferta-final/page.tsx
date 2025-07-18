
'use client';

import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Footer } from '@/components/landing/footer';
import { RosaryIcon } from '@/components/landing/rosary-icon';
import { BookOpen, Headphones, Gift, Check } from 'lucide-react';
import Image from 'next/image';

function RosaryPattern() {
  return (
    <div className="absolute inset-0 z-0 opacity-5 text-black pointer-events-none">
      <RosaryIcon className="absolute top-[5%] left-[10%] w-24 h-24 transform -rotate-12" />
      <RosaryIcon className="absolute top-[15%] right-[5%] w-32 h-32 transform rotate-6" />
      <RosaryIcon className="absolute top-[40%] left-[20%] w-20 h-20 transform rotate-12" />
      <RosaryIcon className="absolute top-[55%] right-[15%] w-28 h-28 transform -rotate-6" />
      <RosaryIcon className="absolute bottom-[10%] left-[5%] w-40 h-40 transform rotate-15" />
      <RosaryIcon className="absolute bottom-[2%] right-[25%] w-24 h-24 transform -rotate-15" />
      <RosaryIcon className="absolute top-[50%] left-[45%] w-16 h-16 transform -rotate-20" />
      <RosaryIcon className="absolute top-[5%] right-[35%] w-16 h-16 transform rotate-45" />
    </div>
  );
}

export default function OfertaFinalPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || '';

  const handleCheckout = () => {
    window.open('https://pay.kirvano.com/some-checkout-link', '_self');
  };

  return (
    <div className="dark relative flex flex-col min-h-screen bg-[hsl(var(--quiz-background))] text-blue-900 overflow-x-hidden">
      <RosaryPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center z-10">
        <div className="max-w-3xl w-full">
          <Card className="bg-white/80 backdrop-blur-sm mb-10 rounded-xl shadow-2xl border border-blue-200">
            <CardContent className="p-6 md:p-8">
              <h1 className="text-2xl md:text-4xl font-bold text-blue-800 mb-2">
                A Oração Secreta Feita Especialmente Para Você{name ? `, ${name.split(' ')[0]}` : ''}
              </h1>
              <p className="text-lg md:text-xl text-blue-900/80 mb-8">
                Receba a oração que tocará sua vida e abrirá os caminhos que você tanto precisa.
              </p>
              
              <Image
                src="https://i.imgur.com/WnIxuok.png"
                alt="Oração Secreta"
                width={600}
                height={400}
                className="mx-auto my-6 rounded-lg shadow-lg"
                data-ai-hint="praying person"
              />

              <div className="text-left space-y-6 text-blue-950">
                <div>
                  <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                    <BookOpen className="w-6 h-6" /> A Oração Secreta
                  </h2>
                  <h3 className="font-semibold text-lg mb-2">Por que esta oração é especial?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                      <span>Oração personalizada para seu momento de vida</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                      <span>Envio imediato por e-mail e acesso online</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                      <span>Baseada nos ensinamentos de fé de Padre Pio</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Você vai receber acesso a uma plataforma dedicada ao caminho divino e junto irá receber também:</h3>
                  <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                          <span>A Jornada de 30 Dias: um guia espiritual com reflexões diárias</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                          <span>Acesso exclusivo a conteúdos devocionais.</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                          <span>Acesso imediato e vitalício</span>
                      </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm p-6 text-center mb-10 rounded-xl shadow-2xl border border-blue-200">
            <Gift className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h2 className="text-xl md:text-2xl font-bold text-blue-800">HOJE PADRE PIO VAI TE ABENÇOAR COMPLETAMENTE COM TODA SUA SABEDORIA</h2>
            <p className="italic text-blue-900/80 mt-2">"Filho, estes presentes foram preparados com amor, para que você sinta o céu mais perto do seu coração."</p>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 mb-10 text-left">
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl border border-blue-200">
                <CardContent className="p-6">
                    <h3 className="font-bold text-lg flex items-center gap-2 text-blue-800"><Gift className="w-5 h-5"/> PRESENTE DE PADRE PIO</h3>
                    <h4 className="font-bold text-2xl my-2 text-blue-950">Diário de Milagres</h4>
                    <p className="text-blue-900/90">"Escreva seus pedidos, bênçãos e experiências. Ele será o testemunho do agir divino em sua vida."</p>
                </CardContent>
            </Card>
             <Card className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl border border-blue-200">
                <CardContent className="p-6">
                    <h3 className="font-bold text-lg flex items-center gap-2 text-blue-800"><Headphones className="w-5 h-5"/> PRESENTE DE PADRE PIO</h3>
                    <h4 className="font-bold text-2xl my-2 text-blue-950">Orações em Áudio</h4>
                    <p className="text-blue-900/90">"Escute a oração em momentos de paz ou aflição. Deixe a voz sagrada guiar seu coração."</p>
                </CardContent>
            </Card>
          </div>
          <p className="italic text-blue-900/80 mt-2 mb-10">"Estes presentes são sinais divinos de que você não está sozinho(a)."</p>

          <Card className="bg-white/90 backdrop-blur-sm shadow-xl w-full border-2 border-green-500 rounded-xl">
            <CardContent className="p-6 md:p-8 space-y-4">
                <p className="font-semibold text-lg text-blue-950">Contribua para que nosso projeto abençoe milhares de famílias, assim como você</p>
                <div>
                    <p className="text-blue-900/80">Valor original:</p>
                    <p className="text-2xl font-bold line-through text-red-600">R$ 119,90</p>
                </div>
                 <div>
                    <p className="font-bold text-blue-800">Oferta de Fé:</p>
                    <p className="text-5xl font-bold text-green-600">R$ 19,90</p>
                    <p className="font-semibold text-blue-900/80">Contribuição única, com propósito</p>
                </div>
              <Button onClick={handleCheckout} size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xl h-auto py-4 animate-pulse">
                Receber Minha Oração Secreta
              </Button>
              <div className="text-center text-blue-900/80 text-sm space-y-2 mt-4">
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
