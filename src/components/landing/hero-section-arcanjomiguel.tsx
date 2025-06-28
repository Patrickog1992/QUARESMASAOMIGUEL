import { Card } from "@/components/ui/card";
import { BookHeart, Check } from 'lucide-react';

export function HeroSectionArcanjoMiguel() {
  return (
    <section className="flex flex-col items-center text-center mb-12 md:mb-20">
      <Card className="bg-accent text-accent-foreground p-3 md:p-4 rounded-xl shadow-lg mb-8 max-w-3xl w-full">
        <h1 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold flex items-center justify-center gap-3 md:gap-4">
          <BookHeart className="h-8 w-8 sm:h-10 sm:w-10 shrink-0" />
          <span>
            40 orações secretas
          </span>
        </h1>
      </Card>
      
      <h2 className="font-headline text-lg md:text-2xl font-bold max-w-3xl mt-4">
        Pessoas choram ao ouvir as orações por alguns segundos e sentirem o toque do arcanjo miguel
      </h2>

      <ul className="space-y-3 text-md md:text-lg text-foreground/90 max-w-3xl font-medium mt-6 text-left">
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Frei Gilson ouviu e traduziu as orações</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Essas orações estavam guardadas a 7 chaves dentro de arquivos secretos do Vaticano</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Mas hoje você pode acessá-las e sentir a proteção do Arcanjo Miguel agir em sua vida</span>
        </li>
      </ul>

      <p className="mt-8 text-primary font-bold uppercase tracking-wider animate-pulse md:text-lg">
        VEJA O VÍDEO
      </p>
    </section>
  );
}
