'use client';

import { HeroSectionArcanjoMiguel } from '@/components/landing/hero-section-arcanjomiguel';
import { VSLSectionArcanjoMiguel } from '@/components/landing/vsl-section-arcanjomiguel';
import { TestimonialsSectionArcanjoMiguel } from '@/components/landing/testimonials-section-arcanjomiguel';
import { FAQSectionArcanjoMiguel } from '@/components/landing/faq-section-arcanjomiguel';
import { WarningSection } from '@/components/landing/warning-section';
import { Footer } from '@/components/landing/footer';
import { SalesPopup } from '@/components/landing/sales-popup';
import { TopBanner } from '@/components/landing/top-banner';
import { BackgroundPattern } from '@/components/landing/background-pattern';

export default function ArcanjoMiguelPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 text-white overflow-x-hidden">
      <TopBanner />
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')]"></div>
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 z-10">
        <div className="max-w-3xl mx-auto space-y-12 text-center">
          <HeroSectionArcanjoMiguel />
          <VSLSectionArcanjoMiguel />
          <TestimonialsSectionArcanjoMiguel />
          <FAQSectionArcanjoMiguel />
          <WarningSection />
        </div>
      </main>
      <Footer />
      <SalesPopup />
    </div>
  );
}
