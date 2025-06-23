import { Card } from "@/components/ui/card";
import { Landmark, Check } from 'lucide-react';

export function HeroSectionNova() {
  return (
    <section className="flex flex-col items-center text-center mb-12 md:mb-20">
      <Card className="bg-accent text-accent-foreground p-3 md:p-4 rounded-xl shadow-lg mb-8 max-w-3xl w-full">
        <h1 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold flex items-center justify-center gap-3 md:gap-4">
          <Landmark className="h-8 w-8 sm:h-10 sm:w-10 shrink-0" />
          <span>
            OS SEGREDOS QUE O VATICANO NÃO QUER QUE VOCÊ SAIBA
          </span>
        </h1>
      </Card>
      
      <ul className="space-y-3 text-md md:text-lg text-foreground/90 max-w-3xl font-medium mt-6 text-left">
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Revelações inéditas sobre os bastidores da Igreja</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>Documentos secretos e fatos ocultos por séculos</span>
        </li>
        <li className="flex items-start gap-3">
          <Check className="h-6 w-6 text-primary shrink-0 mt-1" />
          <span>O que o Vaticano não quer que você descubra... até agora!</span>
        </li>
      </ul>

      <p className="mt-8 text-primary font-bold uppercase tracking-wider animate-pulse md:text-lg">
        VEJA O VÍDEO
      </p>
    </section>
  );
}
