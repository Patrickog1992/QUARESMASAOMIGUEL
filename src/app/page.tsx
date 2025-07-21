import { HeroSection } from '@/components/landing/hero-section';
import { VSLSection } from '@/components/landing/vsl-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import { SalesPopupPadrePio } from '@/components/landing/sales-popup-padre-pio';

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-blue-50 text-foreground overflow-x-hidden">
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <HeroSection />
        <VSLSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <SalesPopupPadrePio />
    </div>
  );
}
