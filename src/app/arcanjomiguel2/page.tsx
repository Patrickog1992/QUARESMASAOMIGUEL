import { OfferSection } from '@/components/landing/offer-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import { SalesPopup } from '@/components/landing/sales-popup';
import { TopBanner } from '@/components/landing/top-banner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oferta Especial - Orações Secretas',
  description: 'Descubra as orações secretas que estavam guardadas a 7 chaves no vaticano.',
};

export const dynamic = 'force-dynamic';

export default function ArcanjoMiguel2Page() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <TopBanner />
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <OfferSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <SalesPopup />
    </div>
  );
}
