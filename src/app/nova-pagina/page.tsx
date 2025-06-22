import { HeroSectionNova } from '@/components/landing/hero-section-nova';
import { VSLSection } from '@/components/landing/vsl-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import { SalesPopup } from '@/components/landing/sales-popup';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '40 Orações Secretas - Toque do Arcanjo Miguel',
  description: 'Descubra as orações secretas que estavam guardadas a 7 chaves no vaticano.',
};

export const dynamic = 'force-dynamic';

export default function NovaPaginaPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <HeroSectionNova />
        <VSLSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <SalesPopup />
    </div>
  );
}
