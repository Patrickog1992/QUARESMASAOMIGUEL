'use client';

import { useState, useEffect } from 'react';

export function TopBanner() {
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

  return (
    <div className="bg-primary text-primary-foreground text-center py-2 px-4 font-semibold text-sm md:text-base sticky top-0 z-20 shadow-lg">
      <p>
        Hoje, {currentDate}, é o último dia para receber essa bênção.
      </p>
    </div>
  );
}
