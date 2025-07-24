'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FooterVaticano } from '@/components/landing/FooterVaticano';
import { RosaryIcon } from '@/components/landing/rosary-icon';
import { Check, ShieldCheck, Gift, AlertTriangle } from 'lucide-react';
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

export default function VaticanoPapaPage() {
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
              <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2 uppercase">
                🙏 A Oração Revelada Pelo Vaticano Que Pode Mudar a Sua Vida
              </h1>
              <p className="text-md md:text-lg text-blue-900/80 mb-6">
                Um segredo escondido por séculos... finalmente revelado ao mundo por um frei brasileiro, a pedido do próprio Papa. Você está prestes a acessar um conteúdo espiritual que o Vaticano guardou a 7 chaves — e que agora pode ser o canal para o milagre que você tanto espera.
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
                    <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-4">🕊️ Você Não Está Aqui Por Acaso</h2>
                    <p className="mb-4">Poucos dias antes de sua morte, um dos últimos Papas revelou, em sigilo, uma oração escondida nos arquivos secretos do Vaticano — passada de geração em geração por monges e padres escolhidos.</p>
                    <p className="mb-4">Segundo ele, “essa oração só poderia ser revelada quando o mundo estivesse em profunda aflição espiritual”.</p>
                    <p className="font-bold">Esse momento chegou. E agora você foi guiado(a) até aqui para ouvir essa oração.</p>
                </div>

                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-4">✝️ Por Que Esta Oração É Tão Especial?</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">📜 <span className="flex-1"><span className="font-semibold">Traduzida diretamente</span> de manuscritos preservados no Vaticano</span></li>
                    <li className="flex items-start gap-3">🙏 <span className="flex-1"><span className="font-semibold">Escolhida com base</span> no seu momento espiritual</span></li>
                    <li className="flex items-start gap-3">🎙️ <span className="flex-1"><span className="font-semibold">Narrada por um frei</span> consagrado, em versão áudio devocional</span></li>
                    <li className="flex items-start gap-3">📩 <span className="flex-1"><span className="font-semibold">Entrega imediata</span> no seu e-mail + acesso vitalício</span></li>
                    <li className="flex items-start gap-3">🕊️ <span className="flex-1"><span className="font-semibold">Inspirada</span> pela orientação espiritual de Papa Francisco e Padre Pio</span></li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                    <Gift className="w-6 h-6" /> 🎁 Você Vai Receber:
                  </h2>
                  <ul className="space-y-3">
                      <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1 shrink-0" /> <span className="flex-1"><span className="font-semibold">A Oração Revelada Pelo Vaticano:</span> Tradução fiel de um antigo dialeto litúrgico, com narração devocional feita por um frei.</span></li>
                      <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1 shrink-0" /> <span className="flex-1"><span className="font-semibold">Jornada de 30 Dias de Fé:</span> Guia espiritual com reflexões diárias para fortalecer sua conexão com Deus.</span></li>
                      <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1 shrink-0" /> <span className="flex-1"><span className="font-semibold">Diário de Milagres (Presente Exclusivo):</span> Escreva seus pedidos, bênçãos e testemunhos. Um verdadeiro altar pessoal.</span></li>
                      <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1 shrink-0" /> <span className="flex-1"><span className="font-semibold">Orações em Áudio (Presente Exclusivo):</span> Escute onde e quando quiser. Em momentos de paz ou aflição, deixe-se guiar.</span></li>
                      <li className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1 shrink-0" /> <span className="flex-1"><span className="font-semibold">Mensagens Devocionais Semanais:</span> Conteúdo exclusivo direto no seu e-mail, para manter sua fé renovada.</span></li>
                  </ul>
                </div>

              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl w-full border-2 border-green-500 rounded-xl">
            <CardContent className="p-6 md:p-8 space-y-4">
                <p className="font-bold text-xl text-blue-800">💖 Contribuição Simbólica</p>
                <p>Para tornar esse conteúdo acessível e manter a estrutura que o sustenta (traduções, produção de áudio, hospedagem), pedimos uma contribuição única.</p>
                <div>
                    <p className="text-xl text-blue-900/80">De: <span className="line-through text-red-600">R$ 119,90</span></p>
                </div>
                 <div>
                    <p className="font-semibold text-blue-800">Por Apenas:</p>
                    <p className="text-5xl font-bold text-green-600">R$ 19,90</p>
                    <p className="font-semibold text-blue-900/80">Contribuição única. Sem mensalidades.</p>
                </div>
              <Button onClick={handleCheckout} size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-auto py-4 animate-pulse whitespace-normal text-center text-lg md:text-xl">
                👉 QUERO RECEBER A ORAÇÃO AGORA – CONTRIBUIR COM R$ 19,90
              </Button>
              <div className="text-center text-blue-900/80 text-sm space-y-3 mt-4">
                <div>
                    <p className="font-bold">✅ Garantia de Fé: 7 Dias</p>
                    <p>Se a oração não tocar seu coração, devolvemos sua contribuição sem perguntas. Essa é nossa Garantia de Fé.</p>
                </div>
                <div className="flex items-center justify-center gap-2 text-amber-600">
                    <AlertTriangle className="w-4 h-4"/>
                    <p className="font-semibold">Atenção: Poucas pessoas terão acesso. Essa página pode sair do ar a qualquer momento.</p>
                </div>
                 <p className="flex items-center justify-center gap-2"><ShieldCheck className="w-4 h-4"/> Contribuição protegida e segura</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <FooterVaticano />
    </div>
  );
}
