import { HeroSectionPadrePio } from '@/components/landing/hero-section-padrepio';
import { VSLSectionPadrePio } from '@/components/landing/vsl-section-padrepio';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import { SalesPopupPadrePio } from '@/components/landing/sales-popup-padre-pio';
import { TopBanner } from '@/components/landing/top-banner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quaresma do Padre Pio - Orações para um Milagre',
  description: 'Descubra as orações milagrosas do Padre Pio para alcançar sua bênção.',
};

export const dynamic = 'force-dynamic';

export default function QuaresmaPadrePioPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <TopBanner />
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <HeroSectionPadrePio />
        <VSLSectionPadrePio />
        <TestimonialsSection />
      </main>
      <Footer />
      <SalesPopupPadrePio />
    </div>
  );
}
