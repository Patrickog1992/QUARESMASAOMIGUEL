'use client';

import { HeroSectionReiSalomao } from '@/components/landing/hero-section-reisalomao';
import { VSLSectionReiSalomao } from '@/components/landing/vsl-section-reisalomao';
import { TestimonialsSectionReiSalomao } from '@/components/landing/testimonials-section-reisalomao';
import { Footer } from '@/components/landing/footer';
import { TopBanner } from '@/components/landing/top-banner';
import { HebrewPattern } from '@/components/landing/hebrew-pattern';

export default function ReiSalomaoPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-amber-900 text-white overflow-x-hidden">
      <TopBanner className="bg-amber-600 text-amber-950" text="ATENÇÃO : Devido aos grandes ricos do nosso país estar tentando nos processar por revelar o segredo esse vídeo ficará disponível somente até hoje : 16 de setembro" />
      <HebrewPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 z-10">
        <div className="max-w-3xl mx-auto space-y-12 text-center">
          <HeroSectionReiSalomao />
          <VSLSectionReiSalomao />
          <TestimonialsSectionReiSalomao />
        </div>
      </main>
      <Footer />
    </div>
  );
}
