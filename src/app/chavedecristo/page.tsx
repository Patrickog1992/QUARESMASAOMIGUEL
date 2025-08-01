import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import { SalesPopup } from '@/components/landing/sales-popup';
import { TopBanner } from '@/components/landing/top-banner';
import { HeroSectionChaveDeCristo } from '@/components/landing/hero-section-chavedecristo';
import { VSLSectionChaveDeCristo } from '@/components/landing/vsl-section-chavedecristo';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'A Chave de Cristo - O Segredo Revelado',
  description: 'Descubra a oração que abre as portas para os milagres em sua vida.',
};

export const dynamic = 'force-dynamic';

export default function ChaveDeCristoPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <TopBanner variant="news" />
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <HeroSectionChaveDeCristo />
        <VSLSectionChaveDeCristo />
        <TestimonialsSection />
      </main>
      <Footer />
      <SalesPopup />
    </div>
  );
}
