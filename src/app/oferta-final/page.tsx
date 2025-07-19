'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FooterVaticano } from '@/components/landing/FooterVaticano';
import { RosaryIcon } from '@/components/landing/rosary-icon';
import { Lock, ShieldCheck, Gift, Check, CircleHelp } from 'lucide-react';
import Image from 'next/image';
import { SalesPopupBlue } from '@/components/landing/SalesPopupBlue';

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

function OfertaFinalContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || '';

  const handleCheckout = () => {
    window.open('https://pay.kirvano.com/fe8eb1f1-8e8b-4607-9267-de35d30113c4', '_self');
  };

  return (
    <div className="dark relative flex flex-col min-h-screen bg-[hsl(var(--quiz-background))] text-blue-900 overflow-x-hidden">
      <RosaryPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center z-10">
        <div className="max-w-3xl w-full">
          <Card className="bg-white/80 backdrop-blur-sm mb-10 rounded-xl shadow-2xl border border-blue-200">
            <CardContent className="p-6 md:p-8">
              <h1 className="text-2xl md:text-4xl font-bold text-blue-800 mb-2 uppercase flex items-center justify-center flex-wrap gap-2">
                <Lock className="inline-block w-8 h-8 align-middle" />
                A Oração Revelada Pelo Vaticano Feita Especialmente Para Você{name ? `, ${name.split(' ')[0]}` : ''}
              </h1>
              <p className="text-md md:text-lg text-blue-900/80 mb-6 font-medium">
                Receba uma oração guardada por anos nos arquivos do Vaticano, revelada por Papa Francisco a um frei brasileiro pouco antes de uma audiência privada. Ela foi cuidadosamente traduzida e preparada para tocar a sua alma, abrir seus caminhos e trazer respostas do Céu ao seu coração.
              </p>
              
              <Image
                src="https://i.imgur.com/WnIxuok.png"
                alt="Oração Secreta"
                width={600}
                height={400}
                className="mx-auto my-6 rounded-lg shadow-lg"
                data-ai-hint="praying person"
              />

              <div className="text-left space-y-8 text-blue-950">
                <div>
                  <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6" /> ✝️ Por que esta oração é tão especial?
                  </h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-xl shrink-0">📜</span>
                      <span><span className="font-semibold">Oração secreta traduzida</span> diretamente de manuscritos preservados no Vaticano</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl shrink-0">🙏</span>
                      <span><span className="font-semibold">Escolhida com base em seu momento espiritual</span> (via um pequeno questionário)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl shrink-0">📩</span>
                      <span><span className="font-semibold">Entrega imediata</span> por e-mail e acesso online vitalício</span>
                    </li>
                     <li className="flex items-start gap-3">
                      <span className="text-xl shrink-0">🕊️</span>
                      <span><span className="font-semibold">Inspirada na orientação espiritual</span> de Papa Francisco e Padre Pio</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                    <Gift className="w-6 h-6" /> 🎁 Ao contribuir, você receberá:
                  </h2>
                  <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                          <span><span className="font-semibold">A Oração Revelada pelo Vaticano:</span> Traduzida de um antigo dialeto litúrgico por um especialista, com narração devocional feita por um frei consagrado.</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                          <span><span className="font-semibold">A Jornada de 30 Dias:</span> Um guia de reflexões espirituais diárias para ajudar você a viver com fé e propósito.</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                          <span><span className="font-semibold">Diário de Milagres (PRESENTE EXCLUSIVO):</span> "Escreva seus pedidos, bênçãos e experiências. Ele será o testemunho do agir divino em sua vida."</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                          <span><span className="font-semibold">Orações em Áudio (PRESENTE EXCLUSIVO):</span> "Escute a oração em momentos de paz ou aflição. Deixe a voz sagrada guiar seu coração."</span>
                      </li>
                      <li className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-600 mt-1 shrink-0" />
                          <span><span className="font-semibold">Mensagens Devocionais Exclusivas:</span> Conteúdos inspiradores enviados diretamente ao seu e-mail.</span>
                      </li>
                  </ul>
                  <p className="italic text-blue-900/80 mt-4">“Filho, estes presentes foram preparados com amor, para que você sinta o céu mais perto do seu coração.”</p>
                </div>
                 <div>
                  <h2 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                    <CircleHelp className="w-6 h-6" /> 💬 Por que há uma contribuição?
                  </h2>
                    <p>Para tornar possível o acesso a esta oração rara e valiosa, foi necessário traduzir documentos antigos, produzir as versões em áudio e manter a plataforma online para milhares de fiéis. Por isso, pedimos uma contribuição simbólica única de <span className="font-bold">R$ 19,90</span> — que também ajuda a manter este projeto vivo, levando fé a quem mais precisa.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl w-full border-2 border-green-500 rounded-xl">
            <CardContent className="p-6 md:p-8 space-y-4">
                <p className="font-bold text-2xl text-blue-800">🙌 Oferta de Fé:</p>
                <div>
                    <p className="text-xl text-blue-900/80">De: <span className="line-through text-red-600">R$ 119,90</span></p>
                </div>
                 <div>
                    <p className="font-semibold text-blue-800">Por:</p>
                    <p className="text-5xl font-bold text-green-600">R$ 19,90</p>
                    <p className="font-semibold text-blue-900/80">Contribuição única, com propósito espiritual</p>
                </div>
              <Button onClick={handleCheckout} size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-auto py-4 animate-pulse whitespace-normal text-center text-lg md:text-xl">
                🎁 Clique abaixo para receber agora sua oração revelada pelo Vaticano.
              </Button>
              <div className="text-center text-blue-900/80 text-sm space-y-2 mt-4">
                 <p className="font-bold">✅ Garantia de Fé:</p>
                 <p>7 dias de bênção ou sua contribuição será devolvida.</p>
                 <p>Se sua alma não for tocada, devolvemos sua oferta sem questionamentos.</p>
                 <p>🔒 Contribuição protegida e guiada pela fé.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <FooterVaticano />
      <SalesPopupBlue />
    </div>
  );
}

export default function OfertaFinalPage() {
  return (
    <Suspense fallback={<div>Carregando oferta...</div>}>
      <OfertaFinalContent />
    </Suspense>
  );
}
