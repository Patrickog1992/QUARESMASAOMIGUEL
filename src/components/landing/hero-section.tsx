import { Card } from "@/components/ui/card";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center mb-12 md:mb-20">
      <Card className="bg-accent text-accent-foreground p-2 md:p-4 rounded-xl shadow-lg mb-8 max-w-2xl w-full">
        <h1 className="font-headline text-2xl md:text-4xl font-bold uppercase tracking-wide">
          Quaresma do Padre Pio
        </h1>
      </Card>
      <h2 className="font-headline text-xl md:text-3xl font-bold max-w-3xl">
        Hoje pode ser o dia da sua vitória: descubra como restaurar sua saúde e sua vida
      </h2>
    </section>
  );
}
