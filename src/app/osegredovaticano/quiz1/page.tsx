'use client';

import { Button } from '@/components/ui/button';
import { RosaryIcon } from '@/components/landing/rosary-icon';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
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

export default function OsegredoVaticanoQuiz1Page() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-[hsl(var(--quiz-background))] text-blue-900 overflow-x-hidden">
      <RosaryPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center z-10">
        <div className="max-w-3xl w-full">
          <Card className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-2xl border border-blue-200">
            <CardContent className="text-left text-lg md:text-xl space-y-4 text-blue-950">
                <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-6">
                    🕯️ A Última Revelação: O Segredo do Papa Antes de Morrer
                </h1>
                <p>Poucos dias antes de sua morte, um dos últimos Papas fez algo que abalou os corredores silenciosos do Vaticano.</p>
                <p>Ele chamou um frei de confiança para uma conversa privada e disse com voz baixa:</p>
                <p className="italic font-semibold text-blue-800">“Há uma oração... uma oração escondida há séculos, que só pode ser revelada àqueles que estiverem prontos espiritualmente.”</p>
                <p>Essa oração havia sido guardada a sete chaves, trancada nos arquivos secretos do Vaticano, entre documentos selados com sangue, fé e temor.</p>
                <p>Segundo o Papa, essa oração foi passada de geração em geração, entre poucos escolhidos. Ela teria sido revelada por um anjo a um monge desconhecido, durante uma visão celestial no século XII — e só deveria ser revelada quando o mundo estivesse em profunda aflição espiritual.</p>
                <Image
                    src="https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/004-2cmyk-blackmar28.webp?w=1450&h=1895&p=top"
                    alt="Papa em oração"
                    width={600}
                    height={777}
                    className="mx-auto my-6 rounded-lg shadow-lg"
                    data-ai-hint="praying pope"
                />
                <p className="italic font-semibold text-blue-800">“Agora é a hora. O mundo precisa dessa oração.”</p>
                <p>Dias depois, o Papa faleceu em silêncio... Mas o frei guardou essas palavras, e hoje, você pode ser uma das poucas pessoas a ter acesso a esse conteúdo sagrado.</p>
                <p>A oração, narrada por esse mesmo frei, está prestes a ser revelada — mas somente àqueles que abrirem as 7 chaves da fé.</p>
            </CardContent>
          </Card>
          
          <div className="mt-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-6">
              ✝️ Você está pronto para acessar o que foi escondido por séculos?
            </h2>
            <Link href="/osegredovaticano/quiz3">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg md:text-xl py-4 px-8 uppercase shadow-lg h-auto whitespace-normal text-center">
                    Sim, estou pronto para a revelação
                </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
