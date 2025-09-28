'use client';

import { HeroSectionArcanjoMiguel } from '@/components/landing/hero-section-arcanjomiguel';
import { VSLSectionArcanjoMiguel } from '@/components/landing/vsl-section-arcanjomiguel';
import { TestimonialsSectionArcanjoMiguel } from '@/components/landing/testimonials-section-arcanjomiguel';
import { Footer } from '@/components/landing/footer';
import { SalesPopup } from '@/components/landing/sales-popup';
import { TopBanner } from '@/components/landing/top-banner';
import { BackgroundPattern } from '@/components/landing/background-pattern';

export default function ArcanjoMiguelPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-amber-900 text-white overflow-x-hidden">
      <TopBanner text="ATENÇÃO : Devido a grande quantidade de pessoas e poucas unidades esse vídeo irá sair do ar hoje : 28 de setembro" />
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')]"></div>
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 z-10">
        <div className="max-w-3xl mx-auto space-y-12 text-center">
          <HeroSectionArcanjoMiguel />
          <VSLSectionArcanjoMiguel />
          <TestimonialsSectionArcanjoMiguel />
        </div>
      </main>
      <Footer />
      <SalesPopup />
    </div>
  );
}
