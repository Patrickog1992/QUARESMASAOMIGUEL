import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arcanjo Miguel 3',
  description: 'Nova página Arcanjo Miguel 3.',
};

export default function ArcanjoMiguel3Page() {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <h1 className="text-4xl font-bold text-center">Página Arcanjo Miguel 3</h1>
      </main>
      <Footer />
    </div>
  );
}
