import { Card } from "@/components/ui/card";
import { Shield } from 'lucide-react';

export function HeroSectionNova() {
  return (
    <section className="flex flex-col items-center text-center mb-12 md:mb-20">
      <Card className="bg-accent text-accent-foreground p-3 md:p-4 rounded-xl shadow-lg mb-8 max-w-3xl w-full">
        <h1 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold flex items-center justify-center gap-3 md:gap-4">
          <Shield className="h-8 w-8 sm:h-10 sm:w-10 shrink-0" />
          <span>
            OS SEGREDOS QUE O VATICANO NÃO QUER QUE VOCÊ SAIBA
          </span>
        </h1>
      </Card>
      
      <ol className="space-y-2 text-md md:text-lg text-foreground/90 max-w-3xl font-bold mt-6 list-decimal list-inside text-left">
        <li>Frei Gilson traduziu todas as orações</li>
        <li>Essas orações estavam guardadas a 7 chaves dentro de arquivos secretos do vaticano</li>
        <li>Mas somente hoje você pode ter acesso a todas elas</li>
      </ol>

      <p className="mt-8 text-primary font-bold uppercase tracking-wider animate-pulse md:text-lg">
        VEJA O VÍDEO
      </p>
    </section>
  );
}
