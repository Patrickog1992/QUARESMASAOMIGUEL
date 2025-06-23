import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import { TopBanner } from '@/components/landing/top-banner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arcanjo Miguel 2',
  description: 'Página de Arcanjo Miguel 2',
};

export default function ArcanjoMiguel2Page() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <TopBanner />
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-4xl font-bold text-center">Página Arcanjo Miguel 2</h1>
        <p className="text-center mt-4">Conteúdo da nova página.</p>
      </main>
      <Footer />
    </div>
  );
}
