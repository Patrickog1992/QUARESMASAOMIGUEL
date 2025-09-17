import { HebrewPattern } from "@/components/landing/hebrew-pattern";

export default function MetodoMenteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="dark relative flex flex-col min-h-screen bg-amber-900 text-white overflow-x-hidden">
      <HebrewPattern />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 z-10">
        {children}
      </main>
    </div>
  );
}
