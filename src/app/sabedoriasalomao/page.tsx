'use client';

import { HeroSectionSabedoriaSalomao } from '@/components/landing/hero-section-sabedoriasalomao';
import { VSLSectionSabedoriaSalomao } from '@/components/landing/vsl-section-sabedoriasalomao';
import { TestimonialsSectionSabedoriaSalomao } from '@/components/landing/testimonials-section-sabedoriasalomao';
import { FAQSectionArcanjoMiguel } from '@/components/landing/faq-section-arcanjomiguel';
import { WarningSection } from '@/components/landing/warning-section';
import { Footer } from '@/components/landing/footer';
import { TopBanner } from '@/components/landing/top-banner';
import { BackgroundPattern } from '@/components/landing/background-pattern';

export default function SabedoriaSalomaoPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 text-white overflow-x-hidden">
      <TopBanner className="bg-red-600 text-white" text="ATENÇÃO : Para evitar a queda do site devido ao alto número de acessos, esse vídeo só estará disponível para você até o dia : (coloque o dia que a pessoa está acessando)" />
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')]"></div>
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 z-10">
        <div className="max-w-3xl mx-auto space-y-12 text-center">
          <HeroSectionSabedoriaSalomao />
          <VSLSectionSabedoriaSalomao />
          <TestimonialsSectionSabedoriaSalomao />
          <FAQSectionArcanjoMiguel />
          <WarningSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
