import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { DisableDevTools } from '@/components/disable-devtools';
import { app } from '@/lib/firebase'; // Import to initialize Firebase

export const metadata: Metadata = {
  title: 'Orações Secretas',
  description: 'Hoje pode ser o dia da sua vitória: descubra as orações secretas para restaurar sua saúde e sua vida',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        {/* Meta Pixel Code */}
        <Script id="fb-pixel-osegredovaticano" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '612623455156577');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="font-body antialiased">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=612623455156577&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <DisableDevTools />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
