import { Card } from "@/components/ui/card";
import { Check } from 'lucide-react';

export function HeroSectionPadrePio() {
  return (
    <section className="flex flex-col items-center text-center mb-12 md:mb-20">
      <Card className="bg-accent text-accent-foreground p-4 md:p-6 rounded-xl shadow-lg mb-8 max-w-4xl w-full">
        <h1 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight">
          A Quaresma do Padre Pio: As Orações Poderosas que Têm Tocado Milhares de Corações e Trazido <span className="text-primary">Milagres Inesperados</span>
        </h1>
      </Card>

      <ul className="space-y-3 text-md md:text-lg text-foreground/90 max-w-3xl font-medium mt-6 text-left">
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Orações que foram reveladas a Padre Pio em seus momentos de maior intimidade com Deus.</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Sinta a presença e a intercessão de um dos santos mais poderosos da nossa história.</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Prepare seu espírito para receber a bênção que você tanto precisa em sua vida.</span>
        </li>
      </ul>
      
      <p className="mt-8 text-primary font-bold uppercase tracking-wider animate-pulse md:text-lg">
        ASSISTA AO VÍDEO PARA SABER MAIS
      </p>
    </section>
  );
}
