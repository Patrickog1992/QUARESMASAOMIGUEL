'use client';

import { Check } from 'lucide-react';

export function HeroSectionArcanjoMiguel() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl md:text-5xl font-bold uppercase text-amber-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
        Padre REGINALDO MANZOTTI traduziu 50 orações do Arcanjo Miguel que estavam escondidas e acaba de liberar para o povo brasileiro
      </h1>
      <p className="text-lg md:text-xl font-medium text-amber-400">
        40 dias de devoção: alcance milagres na saúde, nas finanças e na vida espiritual com a quaresma de São Miguel
      </p>
      <div className="p-4 bg-black/20 rounded-xl border border-blue-400/30 text-left max-w-lg mx-auto space-y-3">
        <p className="flex items-start gap-3">
          <Check className="w-5 h-5 text-amber-300 mt-1 shrink-0" />
          <span>Padre Reginaldo Manzotti ouviu e traduziu as orações.</span>
        </p>
        <p className="flex items-start gap-3">
          <Check className="w-5 h-5 text-amber-300 mt-1 shrink-0" />
          <span>
            Um escudo espiritual para proteger sua família, finanças e saúde.
          </span>
        </p>
      </div>
       <p className="font-bold text-amber-300 uppercase tracking-wider animate-pulse md:text-lg">
            Assista ao vídeo abaixo e receba a sua bênção
        </p>
    </section>
  );
}
