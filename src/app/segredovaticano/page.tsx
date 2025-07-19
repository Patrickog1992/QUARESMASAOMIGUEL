import { HeroSectionSegredoVaticano } from '@/components/landing/hero-section-segredovaticano';
import { VSLSectionSegredoVaticano } from '@/components/landing/vsl-section-segredovaticano';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import { SalesPopup } from '@/components/landing/sales-popup';
import { TopBanner } from '@/components/landing/top-banner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O Segredo do Vaticano - A Oração Revelada',
  description: 'Descubra a oração secreta do Vaticano que pode mudar sua vida.',
};

export const dynamic = 'force-dynamic';

export default function SegredoVaticanoPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <TopBanner />
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
