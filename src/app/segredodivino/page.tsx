'use client';

import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';

export default function SegredoDivinoPage() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold">Página Segredo Divino</h1>
        <p className="mt-4 text-lg">Esta é a sua nova página.</p>
      </main>
      <Footer />
    </div>
  );
}
