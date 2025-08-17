import { Card } from "@/components/ui/card";
import { Check, ScrollText } from 'lucide-react';

export function HeroSectionSegredoVaticano() {
  return (
    <section className="flex flex-col items-center text-center mb-12 md:mb-20">
      <Card className="bg-blue-800 text-white p-4 md:p-6 rounded-xl shadow-lg mb-8 max-w-4xl w-full">
        <h1 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight">
          Suas orações continuarão sendo ignoradas por Deus se você não usar as <span className="text-amber-300">ORAÇÕES ORIGINAIS</span> apenas essas 12 são capazes de abrir os caminhos para dinheiro, amor e abundância sem esforço.
        </h1>
      </Card>
      
      <p className="mt-8 text-primary font-bold uppercase tracking-wider animate-pulse md:text-lg">
        ASSISTA AO VÍDEO ABAIXO
      </p>
    </section>
  );
}
