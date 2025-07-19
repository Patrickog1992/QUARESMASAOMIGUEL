import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary/50 py-8 mt-16 text-xs text-muted-foreground">
      <div className="container mx-auto px-4 text-center space-y-4">
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 md:gap-x-6 text-sm mb-4">
          <Link href="#" className="hover:text-foreground transition-colors">Termos de Serviço</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Política de Privacidade</Link>
        </div>
        <p>
          © 2025 O Segredo do Vaticano. Todos os direitos reservados.
        </p>
        <p className="max-w-3xl mx-auto">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Jamais fazemos qualquer tipo de spam. Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 às 18h00. Lemos e respondemos todas as mensagens por ordem de chegada.
        </p>
      </div>
    </footer>
  );
}
