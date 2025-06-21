import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary/50 py-8 mt-16">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 md:gap-x-6 text-sm mb-4">
          <Link href="#" className="hover:text-foreground transition-colors">Termos de Uso</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Política de Privacidade</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Política de Devolução</Link>
        </div>
        <p className="text-xs">
          ©︎ 2025 Quaresma do Padre Pio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
