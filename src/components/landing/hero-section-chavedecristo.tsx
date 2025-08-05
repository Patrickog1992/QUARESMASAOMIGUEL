
import { Card } from "@/components/ui/card";
import { Check, KeyRound } from 'lucide-react';

export function HeroSectionChaveDeCristo() {
  return (
    <section className="flex flex-col items-center text-center mb-12 md:mb-20">
      <Card className="bg-red-600 text-white p-4 md:p-6 rounded-xl shadow-lg mb-8 max-w-4xl w-full">
        <h1 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight flex items-center justify-center gap-4">
            <KeyRound className="h-8 w-8 sm:h-10 sm:w-10 shrink-0"/>
            DESCOBERTA AS 22 ORAÇÕES SAGRADAS DO GROTTO DE LOURES QUE ESTÁ DESTRAVANDO MILAGRES EM 7 DIAS
        </h1>
      </Card>

      <ul className="space-y-3 text-md md:text-lg text-foreground/90 max-w-3xl font-medium mt-6 text-left">
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-red-600 shrink-0 mt-1" />
          <span>Milhares de brasileiros estão ativando bençãos, curas e prosperidade com apenas 22 palavras sagradas, chamadas de <span className="text-red-600 font-bold">a chave de Cristo</span></span>
        </li>
      </ul>
      
      <p className="mt-8 text-red-600 font-bold uppercase tracking-wider animate-pulse md:text-lg">
        ASSISTA AO VÍDEO PARA DESCOBRIR
      </p>
    </section>
  );
}
