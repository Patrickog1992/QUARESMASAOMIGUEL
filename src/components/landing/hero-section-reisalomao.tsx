'use client';

import { Check, KeyRound } from 'lucide-react';

export function HeroSectionReiSalomao() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl md:text-5xl font-bold uppercase text-amber-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
        O TRUQUE SECRETO DO REI SALOMÃO FOI DESCOBERTO
      </h1>
      <p className="text-lg md:text-xl font-medium text-amber-100">
        A população Brasileiro está recebendo suas riquezas, prosperidade e bençãos com essas <span className="font-bold text-amber-400">22 PALAVRAS SAGRADAS</span> que estão chamando de <span className="font-bold text-amber-400">O TRUQUE SAGRADO DO REI SALOMÃO</span>
      </p>
      <div className="p-4 bg-black/20 rounded-xl border border-amber-400/30 text-left max-w-lg mx-auto space-y-3">
        <p className="flex items-start gap-3">
          <KeyRound className="w-5 h-5 text-amber-300 mt-1 shrink-0" />
          <span>Orações secretas traduzidas de manuscritos hebraicos.</span>
        </p>
        <p className="flex items-start gap-3">
          <KeyRound className="w-5 h-5 text-amber-300 mt-1 shrink-0" />
          <span>
            Ative um campo de prosperidade e proteção ao seu redor com a sabedoria do rei mais rico.
          </span>
        </p>
      </div>
       <p className="font-bold text-amber-300 uppercase tracking-wider animate-pulse md:text-lg pt-4">
            Assista ao vídeo abaixo para receber sua bênção
        </p>
    </section>
  );
}
