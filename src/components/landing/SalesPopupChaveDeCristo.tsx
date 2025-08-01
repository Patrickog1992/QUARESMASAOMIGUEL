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

export function SalesPopupChaveDeCristo() {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const showRandomNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      setNotification({ name: randomName, location: randomLocation });
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      // Schedule the next notification in 15 seconds
      timeoutId = setTimeout(showRandomNotification, 15000);
    };

    // Initial delay before the first notification
    timeoutId = setTimeout(showRandomNotification, 8000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (!notification) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 z-50 w-full max-w-[240px] transition-transform duration-500 ease-in-out',
        isVisible ? 'translate-x-0' : 'translate-x-[calc(100%+2rem)]'
      )}
    >
      <Card className="bg-red-600 text-white shadow-lg">
        <CardContent className="p-2 flex items-center gap-2">
          <CheckCircle className="h-4 w-4 shrink-0" />
          <p className="text-xs font-semibold">
            {notification.name} {notification.location} acabou de receber a Chave de Cristo.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
