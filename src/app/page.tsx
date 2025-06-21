import { HeroSection } from '@/components/landing/hero-section';
import { VSLSection } from '@/components/landing/vsl-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <HeroSection />
        <VSLSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
