import { HeroSectionCancaoNova } from '@/components/landing/hero-section-cancaonova';
import { VSLSectionCancaoNova } from '@/components/landing/vsl-section-cancaonova';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import { SalesPopup } from '@/components/landing/sales-popup';
import { TopBanner } from '@/components/landing/top-banner';

export const dynamic = 'force-dynamic';

export default function CancaoNovaPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <TopBanner />
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <HeroSectionCancaoNova />
        <VSLSectionCancaoNova />
        <TestimonialsSection />
      </main>
      <Footer />
      <SalesPopup />
    </div>
  );
}
