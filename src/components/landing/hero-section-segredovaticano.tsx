import { Card } from "@/components/ui/card";
import { Check, ScrollText } from 'lucide-react';

export function HeroSectionSegredoVaticano() {
  return (
    <section className="flex flex-col items-center text-center mb-12 md:mb-20">
      <Card className="bg-blue-800 text-white p-4 md:p-6 rounded-xl shadow-lg mb-8 max-w-4xl w-full">
        <h1 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight">
          Suas orações serão sempre ignoradas por Deus se você não recitar as suas ORAÇÕES ORIGINAIS! <span className="text-amber-300">Somente essas 12 orações são capazes de trazer dinheiro, amor e abundância</span> para sua vida sem esforço
        </h1>
      </Card>

      <ul className="space-y-3 text-md md:text-lg text-foreground/90 max-w-3xl font-medium mt-6 text-left">
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Uma oração poderosa guardada nos arquivos secretos do Vaticano.</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Revelada por um frei para abençoar sua vida.</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Descubra o segredo que pode trazer paz e prosperidade para você e sua família.</span>
        </li>
      </ul>
      
      <p className="mt-8 text-primary font-bold uppercase tracking-wider animate-pulse md:text-lg">
        ASSISTA AO VÍDEO ABAIXO
      </p>
    </section>
  );
}
