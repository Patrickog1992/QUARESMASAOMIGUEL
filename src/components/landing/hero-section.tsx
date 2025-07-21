import { Card } from "@/components/ui/card";
import { BookOpen } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center mb-12 md:mb-20">
      <Card className="bg-blue-800 text-white p-2 md:p-4 rounded-xl shadow-lg mb-8 max-w-2xl w-full">
        <h1 className="font-headline text-lg sm:text-2xl md:text-4xl font-bold uppercase tracking-wide flex items-center justify-center gap-2 md:gap-3">
          <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
          <span className="whitespace-nowrap">Quaresma do Padre Pio</span>
        </h1>
      </Card>
      <h2 className="font-headline text-xl md:text-3xl font-bold max-w-3xl uppercase">
        <span className="text-blue-800">AS ORAÇÕES MILAGROSAS</span> DE PADRE PIO: O CAMINHO PARA O SEU MILAGRE
      </h2>
      <p className="mt-4 text-blue-800 font-bold uppercase tracking-wider animate-pulse md:text-lg">
        VEJA O VÍDEO
      </p>
    </section>
  );
}
