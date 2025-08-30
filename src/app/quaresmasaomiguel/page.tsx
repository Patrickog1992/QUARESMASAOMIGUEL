
'use client';

import { HeroSectionArcanjoMiguel } from '@/components/landing/hero-section-arcanjomiguel';
import { VSLSectionArcanjoMiguel } from '@/components/landing/vsl-section-arcanjomiguel';
import { TestimonialsSectionArcanjoMiguel } from '@/components/landing/testimonials-section-arcanjomiguel';
import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import { SalesPopup } from '@/components/landing/sales-popup';
import { TopBanner } from '@/components/landing/top-banner';

export default function QuaresmaSaoMiguelPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 text-white overflow-x-hidden">
      <TopBanner className="bg-red-600 text-white" text="Esta bênção está disponível somente até (Coloque a data que a pessoa está acessando). Assista antes que saia do ar!" />
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
