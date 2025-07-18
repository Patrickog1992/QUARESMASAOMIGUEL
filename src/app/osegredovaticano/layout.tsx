import type {Metadata} from 'next';
import Script from 'next/script';
import '../globals.css';
import { Toaster } from "@/components/ui/toaster";
import { DisableDevTools } from '@/components/disable-devtools';

export const metadata: Metadata = {
  title: 'O Segredo do Vaticano - Revelado',
  description: 'Descubra os segredos que o Vaticano guardou por séculos.',
};

export default function OsegredoVaticanoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
      <div>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=612623455156577&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </div>
      {/* End Meta Pixel Code */}
      <DisableDevTools />
      {children}
      <Toaster />
    </>
  );
}
