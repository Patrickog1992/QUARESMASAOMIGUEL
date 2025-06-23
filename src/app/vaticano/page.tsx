import { HeroSectionNova } from '@/components/landing/hero-section-nova';
import { VSLSectionNova } from '@/components/landing/vsl-section-nova';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import { SalesPopup } from '@/components/landing/sales-popup';
import { TopBanner } from '@/components/landing/top-banner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O Segredo do Vaticano - Orações Secretas',
  description: 'Descubra as orações secretas guardadas nos arquivos do Vaticano.',
};

export const dynamic = 'force-dynamic';

export default function VaticanoPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <TopBanner />
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <HeroSectionNova />
        <VSLSectionNova />
        <TestimonialsSection />
      </main>
      <Footer />
      <SalesPopup />
    </div>
  );
}
