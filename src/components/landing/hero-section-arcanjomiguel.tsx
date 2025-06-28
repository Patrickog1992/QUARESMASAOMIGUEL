import { Card } from "@/components/ui/card";

export function HeroSectionArcanjoMiguel() {
  return (
    <section className="flex flex-col items-center text-center mb-12 md:mb-20">
      <Card className="bg-accent text-accent-foreground p-4 md:p-6 rounded-xl shadow-lg mb-8 max-w-4xl w-full">
        <h1 className="font-headline text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight">
          40 ORAÇÕES SECRETAS: PESSOAS CHORAM AO OUVIR AS ORAÇÕES POR ALGUNS SEGUNDOS E SENTIREM O TOQUE DO <span className="text-primary">ARCANJO MIGUEL</span>
        </h1>
      </Card>
      
      <p className="mt-8 text-primary font-bold uppercase tracking-wider animate-pulse md:text-lg">
        VEJA O VÍDEO
      </p>
    </section>
  );
}
