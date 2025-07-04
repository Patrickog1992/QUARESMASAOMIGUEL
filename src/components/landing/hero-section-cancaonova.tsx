import { Card } from "@/components/ui/card";
import { Check, Music } from 'lucide-react';

export function HeroSectionCancaoNova() {
  return (
    <section className="flex flex-col items-center text-center mb-12 md:mb-20">
      <Card className="bg-accent text-accent-foreground p-4 md:p-6 rounded-xl shadow-lg mb-8 max-w-4xl w-full">
        <h1 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight flex items-center justify-center gap-4">
          <Music className="h-8 w-8 sm:h-10 sm:w-10 shrink-0" />
          <span>
            AS ORAÇÕES CANTADAS DA CANÇÃO NOVA QUE TOCAM A ALMA
          </span>
        </h1>
      </Card>

      <ul className="space-y-3 text-md md:text-lg text-foreground/90 max-w-3xl font-medium mt-6 text-left">
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Canções de cura e libertação inspiradas por Deus.</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Sinta a presença do Espírito Santo através de melodias abençoadas.</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Orações em forma de música para fortalecer sua fé e trazer paz ao seu coração.</span>
        </li>
      </ul>
      
      <p className="mt-8 text-primary font-bold uppercase tracking-wider animate-pulse md:text-lg">
        VEJA O VÍDEO
      </p>
    </section>
  );
}
