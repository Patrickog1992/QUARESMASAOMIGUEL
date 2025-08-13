'use client';

import { HeroSectionSegredoVaticano } from '@/components/landing/hero-section-segredovaticano';
import { VSLSectionSegredoVaticano } from '@/components/landing/vsl-section-segredovaticano';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import { SalesPopup } from '@/components/landing/sales-popup';
import { TopBanner } from '@/components/landing/top-banner';

export default function SegredoDivinoPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-blue-50 text-foreground overflow-x-hidden">
      <TopBanner className="bg-blue-800 text-white" />
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <HeroSectionSegredoVaticano />
        <VSLSectionSegredoVaticano />
        <TestimonialsSection />
      </main>
      <Footer />
      <SalesPopup />
    </div>
  );
}
