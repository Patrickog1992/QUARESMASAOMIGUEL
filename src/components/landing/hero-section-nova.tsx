import { Card } from "@/components/ui/card";
import { Shield } from 'lucide-react';

export function HeroSectionNova() {
  return (
    <section className="flex flex-col items-center text-center mb-12 md:mb-20">
      <Card className="bg-accent text-accent-foreground p-3 md:p-4 rounded-xl shadow-lg mb-8 max-w-3xl w-full">
        <h1 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold flex items-center justify-center gap-3 md:gap-4">
          <Shield className="h-8 w-8 sm:h-10 sm:w-10 shrink-0" />
          <span>
            40 orações secretas: pessoas choram ao ouvir as orações por alguns segundos e sentem o toque do Arcanjo Miguel
          </span>
        </h1>
      </Card>
      
      <div className="space-y-2 text-md md:text-lg text-foreground/90 max-w-3xl font-medium mt-6">
        <p>- Frei Gilson traduziu todas as orações</p>
        <p>- Essas orações estavam guardadas a 7 chaves dentro de arquivos secretos do vaticano</p>
        <p>- Mas somente hoje você pode ter acesso a todas elas</p>
      </div>

      <p className="mt-8 text-primary font-bold uppercase tracking-wider animate-pulse md:text-lg">
        VEJA O VÍDEO
      </p>
    </section>
  );
}
