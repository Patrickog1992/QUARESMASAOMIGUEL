import { Check } from 'lucide-react';

export function HeroSectionSabedoriaSalomao() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl md:text-5xl font-bold uppercase text-amber-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
        A ORAÇÃO PERDIDA DE SALOMÃO é capaz de prover milagres financeiros e a restauração da sáude em até 7 dias
      </h1>
      <p className="text-lg md:text-xl font-medium text-amber-400">
        Desvende os segredos ancestrais da prosperidade e riqueza.
      </p>
      <div className="p-4 bg-black/20 rounded-xl border border-blue-400/30 text-left max-w-lg mx-auto space-y-3">
        <p className="flex items-start gap-3">
          <Check className="w-5 h-5 text-amber-300 mt-1 shrink-0" />
          <span>Ensinamentos traduzidos de manuscritos antigos.</span>
        </p>
        <p className="flex items-start gap-3">
          <Check className="w-5 h-5 text-amber-300 mt-1 shrink-0" />
          <span>
            Um guia espiritual para proteger suas finanças e família.
          </span>
        </p>
        <p className="flex items-start gap-3">
          <Check className="w-5 h-5 text-amber-300 mt-1 shrink-0" />
          <span>
            Sinta o poder da sabedoria de Salomão agindo em sua vida.
          </span>
        </p>
      </div>
       <p className="font-bold text-amber-300 uppercase tracking-wider animate-pulse md:text-lg">
            Assista ao vídeo abaixo e receba a sua bênção
        </p>
    </section>
  );
}
