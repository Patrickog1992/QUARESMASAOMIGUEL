'use client';

import { HeroSectionChaveDeCristo } from '@/components/landing/hero-section-chavedecristo';
import { VSLSectionChaveDeCristo } from '@/components/landing/vsl-section-chavedecristo';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import { SalesPopupChaveDeCristo } from '@/components/landing/SalesPopupChaveDeCristo';
import { TopBanner } from '@/components/landing/top-banner';

export default function ChaveDeCristoPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <TopBanner />
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <HeroSectionChaveDeCristo />
        <VSLSectionChaveDeCristo />
        <TestimonialsSection />
      </main>
      <Footer />
      <SalesPopupChaveDeCristo />
    </div>
  );
}
