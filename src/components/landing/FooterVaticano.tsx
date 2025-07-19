import Link from "next/link";

export function FooterVaticano() {
  return (
    <footer className="bg-transparent py-8 mt-16 text-xs text-blue-900/80 z-10 relative">
      <div className="container mx-auto px-4 text-center space-y-4">
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 md:gap-x-6 text-sm mb-4">
          <Link href="#" className="hover:text-blue-900 transition-colors">Termos de Serviço</Link>
          <Link href="#" className="hover:text-blue-900 transition-colors">Política de Privacidade</Link>
        </div>
        <p>
          © 2025 O Segredo do Vaticano. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
