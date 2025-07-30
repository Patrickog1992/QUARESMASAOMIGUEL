'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type CloackerProps = {
  children: React.ReactNode;
  redirectTo: string;
};

export function Cloacker({ children, redirectTo }: CloackerProps) {
  const router = useRouter();

  useEffect(() => {
    // This will only run on the client side
    const referrer = document.referrer;
    
    // Check if the user is coming from Facebook's ad library
    if (referrer.includes('facebook.com/ads/library')) {
      // Redirect to the specified URL
      window.location.href = redirectTo;
    }
  }, [redirectTo, router]);

  return <>{children}</>;
}
