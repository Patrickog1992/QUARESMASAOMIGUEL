import type {Metadata} from 'next';
import '../globals.css';
import { Toaster } from "@/components/ui/toaster";
import { DisableDevTools } from '@/components/disable-devtools';

export const metadata: Metadata = {
  title: 'Manuscrito Sagrado - Quiz Divino',
  description: 'Descubra o manuscrito sagrado que pode transformar sua vida.',
};

export default function CancaoNovaLayout({
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
      </head>
      <body className="font-body antialiased">
        <DisableDevTools />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
