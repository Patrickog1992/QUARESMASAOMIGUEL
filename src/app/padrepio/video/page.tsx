'use client';

import { HeroSectionPadrePio } from '@/components/landing/hero-section-padrepio';
import { VSLSectionPadrePio } from '@/components/landing/vsl-section-padrepio';
import { TestimonialsSectionPadrePio } from '@/components/landing/testimonials-section-padrepio';
import { Footer } from '@/components/landing/footer';
import { SalesPopup } from '@/components/landing/sales-popup';
import { TopBanner } from '@/components/landing/top-banner';
import { BackgroundPattern } from '@/components/landing/background-pattern';

export default function PadrePioVideoPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-amber-900 text-white overflow-x-hidden">
      <TopBanner text="ATENÇÃO : Devido ao vaticano estar proibindo essas orações esse site irá sair do ar em : (coloque a data que a pessoa está acessando)" className="bg-red-600 text-white" />
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')]"></div>
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 z-10">
        <div className="max-w-3xl mx-auto space-y-12 text-center">
          <HeroSectionPadrePio />
          <VSLSectionPadrePio />
          <TestimonialsSectionPadrePio />
        </div>
      </main>
      <Footer />
      <SalesPopup />
    </div>
  );
}
