import { Card } from "@/components/ui/card";
import { Check } from 'lucide-react';

export function HeroSectionArcanjoMiguel() {
  return (
    <section className="flex flex-col items-center text-center mb-12 md:mb-20">
      <Card className="bg-accent text-accent-foreground p-4 md:p-6 rounded-xl shadow-lg mb-8 max-w-4xl w-full">
        <h1 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight">
          40 ORAÇÕES SECRETAS: PESSOAS CHORAM AO OUVIR AS ORAÇÕES POR ALGUNS SEGUNDOS E SENTIREM O TOQUE DO <span className="text-primary">ARCANJO MIGUEL</span>
        </h1>
      </Card>

      <ul className="space-y-3 text-md md:text-lg text-foreground/90 max-w-3xl font-medium mt-6 text-left">
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Frei Gilson ouviu e traduziu as orações.</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Essas orações estavam guardadas a 7 chaves dentro de arquivos secretos do Vaticano.</span>
        </li>
         <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Ao pedir as orações hoje, você ganhará um terço perolado bento.</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Mas hoje você pode acessá-las e sentir a proteção do Arcanjo Miguel agir em sua vida.</span>
        </li>
      </ul>
      
      <p className="mt-8 text-primary font-bold uppercase tracking-wider animate-pulse md:text-lg">
        VEJA O VÍDEO
      </p>
    </section>
  );
}
