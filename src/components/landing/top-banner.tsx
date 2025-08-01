
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, Search } from 'lucide-react';

type TopBannerProps = {
  className?: string;
  text?: string;
  variant?: 'default' | 'news';
};

export function TopBanner({ className, text, variant = 'default' }: TopBannerProps) {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
    });
    setCurrentDate(formattedDate);
  }, []);

  if (!currentDate) {
    return null;
  }

  const bannerText = text 
    ? text.replace('(coloque o dia)', currentDate)
    : `Hoje, ${currentDate}, é o último dia para receber essa bênção.`;

  if (variant === 'news') {
    return (
      <div
        className={cn(
          'bg-red-700 text-white text-center py-2 px-4 font-bold font-sans sticky top-0 z-20 shadow-lg w-full',
          className
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
                <Menu className="h-6 w-6" />
                <span className="text-lg hidden sm:inline tracking-wider">NOTÍCIA</span>
            </div>
            <p className="text-sm md:text-base font-semibold text-center flex-grow px-2 uppercase tracking-wide">{bannerText}</p>
            <Search className="h-6 w-6" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'bg-primary text-primary-foreground text-center py-2 px-4 font-semibold text-sm md:text-base sticky top-0 z-20 shadow-lg',
        className
      )}
    >
      <p>{bannerText}</p>
    </div>
  );
}
