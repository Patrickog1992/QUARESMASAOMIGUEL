import { Card } from "@/components/ui/card";
import { Check, KeyRound } from 'lucide-react';

export function HeroSectionChaveDeCristo() {
  return (
    <section className="flex flex-col items-center text-center mb-12 md:mb-20">
      <Card className="bg-accent text-accent-foreground p-4 md:p-6 rounded-xl shadow-lg mb-8 max-w-4xl w-full">
        <h1 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight flex items-center justify-center gap-4">
            <KeyRound className="h-8 w-8 sm:h-10 sm:w-10 shrink-0"/>
            A Chave de Cristo: A Oração Secreta que Abre as Portas para Seus Maiores Milagres
        </h1>
      </Card>

      <ul className="space-y-3 text-md md:text-lg text-foreground/90 max-w-3xl font-medium mt-6 text-left">
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Uma oração antiga, revelada a poucos, com o poder de transformar vidas.</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Conecte-se com a força divina que pode resolver seus problemas financeiros, de saúde e familiares.</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Descubra o segredo que estava guardado e receba a sua bênção.</span>
        </li>
      </ul>
      
      <p className="mt-8 text-primary font-bold uppercase tracking-wider animate-pulse md:text-lg">
        ASSISTA AO VÍDEO PARA DESCOBRIR
      </p>
    </section>
  );
}
