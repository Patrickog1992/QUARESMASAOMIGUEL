'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { RosaryIcon } from '@/components/landing/rosary-icon';

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

export default function OsegredoVaticanoQuizPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-[hsl(var(--quiz-background))] text-blue-900 overflow-x-hidden">
      <RosaryPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center z-10">
        <div className="max-w-2xl w-full">
          <Image
            src="https://i.imgur.com/oU1Etag.png"
            alt="Manuscrito Sagrado"
            width={500}
            height={150}
            className="mx-auto mb-8 rounded-lg"
            data-ai-hint="sacred manuscript"
          />

          <h1 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 uppercase">
            Descubra as Orações Secretas que Podem Mudar Sua Vida Revelada Após 7 Chaves do Vaticano
          </h1>
          
          <p className="text-lg md:text-xl text-blue-900/90 mb-8 font-bold">
            Você foi guiado(a) até aqui por um motivo. Em poucos minutos, descubra esse segredo destinado para sua cura!
          </p>
          
          <Image
            src="https://i.imgur.com/5wARayj.png"
            alt="Cura Divina"
            width={600}
            height={400}
            className="mx-auto mb-8 rounded-lg shadow-lg"
            data-ai-hint="divine guidance"
          />
          
          <Link href="/osegredovaticano/quiz1">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg md:text-xl py-6 md:py-8 px-6 md:px-12 uppercase animate-pulse shadow-lg h-auto whitespace-normal text-center">
              Continuar
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
