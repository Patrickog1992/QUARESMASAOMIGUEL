'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const names = [
  'Maria C.', 'José S.', 'Ana P.', 'João L.', 'Antônia F.', 'Francisco M.', 'Adriana A.', 'Carlos R.',
  'Fernanda O.', 'Paulo V.', 'Sandra B.', 'Marcos T.', 'Camila G.', 'Roberto N.', 'Juliana H.',
  'Ricardo E.', 'Marta J.', 'Luiz D.', 'Patrícia K.', 'Sérgio Q.',
];

const locations = [
  'de São Paulo, SP', 'do Rio de Janeiro, RJ', 'de Belo Horizonte, MG', 'de Salvador, BA', 'de Fortaleza, CE',
  'de Curitiba, PR', 'de Manaus, AM', 'de Recife, PE', 'de Porto Alegre, RS', 'de Goiânia, GO',
  'de Belém, PA', 'de Guarulhos, SP', 'de Campinas, SP', 'de São Luís, MA', 'de Maceió, AL',
];

type Notification = {
  name: string;
  location: string;
};

export function SalesPopup() {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showRandomNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      setNotification({ name: randomName, location: randomLocation });
      setIsVisible(true);

      // Hide after a few seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // visible for 5 seconds
    };

    // Initial delay
    let timeoutId = setTimeout(showRandomNotification, 7000);

    const intervalId = setInterval(() => {
      // Set up the next notification
      timeoutId = setTimeout(showRandomNotification, Math.random() * 8000 + 6000); // next one in 6-14 seconds
    }, 12000); // cycle every 12 seconds

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  if (!notification) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed bottom-4 left-4 z-50 w-full max-w-sm transition-transform duration-500 ease-in-out',
        isVisible ? 'translate-x-0' : '-translate-x-[calc(100%+2rem)]'
      )}
    >
      <Card className="bg-accent text-accent-foreground shadow-lg">
        <CardContent className="p-4 flex items-center gap-3">
          <CheckCircle className="h-6 w-6 shrink-0" />
          <p className="text-sm font-semibold">
            {notification.name} {notification.location} acabou de receber as orações.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
