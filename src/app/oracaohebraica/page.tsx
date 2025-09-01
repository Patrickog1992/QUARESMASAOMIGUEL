'use client';

import { VSLSectionOracaoHebraica } from '@/components/landing/vsl-section-oracaohebraica';
import { TestimonialsSectionOracaoHebraica } from '@/components/landing/testimonials-section-oracaohebraica';
import { TopBanner } from '@/components/landing/top-banner';
import { BackgroundPattern } from '@/components/landing/background-pattern';

export default function OracaoHebraicaPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-x-hidden">
      <TopBanner className="bg-red-600 text-white" text="ATENÇÃO : Devido ao grande número de acessos essa página irá ficar fora do ar no dia :" />
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')]"></div>
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 z-10">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          
          <section className="space-y-4">
            <h1 className="text-2xl md:text-4xl font-bold uppercase text-amber-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
              VOCÊ NÃO CHEGOU AQUI POR ACASO !
            </h1>
            <p className="text-lg md:text-xl font-bold text-white">
              Hoje vai ser o dia da sua vitória : Um milagre irá acontece hoje na sua vida para restaurar sua <span className="text-amber-400">SAÚDE</span> e sua <span className="text-amber-400">VIDA FINANCEIRA</span> !
            </p>
          </section>

          <VSLSectionOracaoHebraica />
          <TestimonialsSectionOracaoHebraica />

        </div>
      </main>
    </div>
  );
}
