
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, BookOpen, Heart, TrendingUp, Users, Check, AlertTriangle, ChevronsRight, Calendar, Star, Sun, Moon, Library, Pilcrow, Compass } from 'lucide-react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Footer } from '@/components/landing/footer';

const SwordIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 17.5 20 22"/>
        <path d="m2 22 5-5"/>
        <path d="m15 2-3.4 3.4"/>
        <path d="M9 8.5 2 15.5"/>
        <path d="M15.5 8.5 22 2"/>
        <path d="M8.5 15.5 5 19"/>
        <path d="m19 5-1.5 1.5"/>
    </svg>
);


const signs = [
  { icon: Heart, title: 'Fé Abalada', description: 'Sente que sua fé está fraca e precisa de renovação espiritual urgente.' },
  { icon: AlertTriangle, title: 'Ansiedade e Medo', description: 'Passa por momentos de ansiedade sem saber como encontrar paz verdadeira.' },
  { icon: BookOpen, title: 'Dificuldade na Oração', description: 'Tem dificuldade para manter uma rotina de oração consistente e disciplinada.' },
  { icon: Users, title: 'Família Necessitada', description: 'Quer proteger sua família espiritualmente mas não sabe como fazer.' },
  { icon: TrendingUp, title: 'Busca Espiritual', description: 'Busca uma experiência espiritual mais profunda mas não encontra o caminho.' },
  { icon: Shield, title: 'Reconexão com a Fé', description: 'Quer seguir uma tradição católica autêntica mas não sabe por onde começar.' },
];

const faqItems = [
    {
        question: "Esta devoção é aprovada pela Igreja Católica?",
        answer: "Sim, a Quaresma de São Miguel Arcanjo é uma devoção antiga e tradicional dentro da Igreja Católica, praticada por santos e fiéis há séculos como uma forma poderosa de preparação espiritual."
    },
    {
        question: "Posso fazer esta devoção mesmo sendo iniciante?",
        answer: "Com certeza! Este guia foi pensado para todos, desde os iniciantes até os mais experientes na fé. Ele oferece um passo a passo claro e simples para que qualquer pessoa possa viver a Quaresma com profundidade."
    },
    {
        question: "Quanto tempo por dia preciso dedicar?",
        answer: "A dedicação diária é flexível, mas recomendamos reservar cerca de 15 a 20 minutos para as orações e reflexões, em um local tranquilo onde você possa se concentrar."
    },
    {
        question: "Recebo o guia imediatamente?",
        answer: "Sim! O acesso é 100% digital e imediato. Assim que sua contribuição for confirmada, você receberá um e-mail com todas as instruções para acessar seu guia completo e todos os bônus."
    },
    {
        question: "Posso imprimir o guia?",
        answer: "Sim, o guia é disponibilizado em formato PDF, e você pode imprimi-lo para facilitar seu acompanhamento diário e fazer suas anotações pessoais."
    },
    {
        question: "Posso fazer a Quaresma de São Miguel em qualquer data do ano?",
        answer: "A data tradicional é de 15 de agosto a 29 de setembro. No entanto, o mais importante é a sua intenção e devoção. Você pode adaptar e iniciar seu período de 40 dias de oração em qualquer momento que sentir o chamado em seu coração."
    }
]


export default function QuaresmaSaoMiguelPage() {
    const handleCheckout = () => {
        window.open('https://pay.kirvano.com/YOUR_CHECKOUT_LINK', '_self'); // Substitua com seu link de checkout
    };

    return (
        <div className="dark relative flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 text-white overflow-x-hidden font-body">
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')]"></div>
            <main className="flex-grow container mx-auto px-4 py-8 md:py-12 z-10">
                <div className="max-w-3xl mx-auto space-y-16 text-center">

                    <section className="space-y-6">
                        <p className="text-xl md:text-2xl font-semibold text-amber-300 uppercase tracking-widest">A Quaresma de São Miguel Arcanjo</p>
                        <h1 className="text-3xl md:text-5xl font-bold text-amber-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">Viva 40 dias de oração com São Miguel Arcanjo</h1>
                        <p className="text-lg md:text-xl text-blue-200">Um caminho de fé e devoção para encontrar mais paz, confiança em Deus e renovação espiritual.</p>
                        <Button onClick={handleCheckout} size="lg" className="bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold h-auto py-4 px-8 text-xl animate-pulse shadow-lg">QUERO O MEU GUIA AGORA</Button>
                        <p className="text-sm text-blue-300">Garantia incondicional de 7 dias</p>
                        <Image src="https://i.imgur.com/RvNLWDz.png" alt="São Miguel Arcanjo" width={600} height={400} className="rounded-lg mx-auto shadow-2xl mt-8" data-ai-hint="archangel michael" />
                        <p className="italic text-blue-200 mt-4 text-lg">"São Miguel Arcanjo, Príncipe dos Anjos, defendei-nos no combate contra as maldades e ciladas do demônio."</p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-amber-300 mb-2">Estes Sinais Revelam Que Sua Vida Espiritual Precisa de Renovação</h2>
                        <p className="text-blue-200 mb-8">Se você se identificar com pelo menos 3 desses pontos, a Quaresma de São Miguel pode transformar a sua vida espiritual.</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                            {signs.map((sign, index) => (
                                <Card key={index} className="bg-blue-800/50 border-blue-400/30 p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <sign.icon className="w-6 h-6 text-amber-300"/>
                                        <h3 className="font-bold text-lg">{sign.title}</h3>
                                    </div>
                                    <p className="text-blue-200 text-sm">{sign.description}</p>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className="bg-blue-800/50 p-6 md:p-8 rounded-xl shadow-xl border border-blue-400/30">
                        <h2 className="text-3xl font-bold text-amber-300 mb-4">O Caminho de Renovação Espiritual Está Aqui</h2>
                        <Image src="https://i.imgur.com/fK3pfsp.png" alt="Guia Quaresma de São Miguel" width={400} height={500} className="rounded-lg mx-auto shadow-md my-6" data-ai-hint="guide book" />
                        <CardTitle className="text-2xl font-bold text-amber-400">QUARESMA DE SÃO MIGUEL</CardTitle>
                        <div className="text-left text-blue-200 space-y-4 mt-6 text-lg">
                           <p>Um guia completo em português que ensina você a viver, de forma autêntica, a Quaresma de São Miguel Arcanjo.</p>
                           <p>Seguindo a tradição da Igreja, você poderá experimentar os frutos espirituais dessa devoção poderosa e transformadora, que há séculos fortalece a fé de milhões de católicos.</p>
                           <p className="font-bold text-white">Este não é apenas um e-book comum. É um verdadeiro caminho de espiritualidade, baseado em uma das práticas católicas mais antigas e preciosas, vivida por santos, papas e fiéis ao longo da história da Igreja.</p>
                        </div>
                    </section>
                    
                     <section>
                        <h2 className="text-3xl font-bold text-amber-300 mb-6">Frutos da Quaresma de São Miguel</h2>
                        <p className="text-blue-200 mb-8 text-lg">Transformações espirituais que esta devoção pode proporcionar</p>
                        <div className="grid md:grid-cols-2 gap-6 text-left">
                            <Card className="bg-blue-800/50 border-blue-400/30 p-4 flex flex-col items-start gap-2">
                                <div className="flex items-center gap-3"><Check className="w-6 h-6 text-green-400 shrink-0"/> <h3 className="font-semibold text-lg">Proteção espiritual</h3></div>
                                <p className="text-blue-200 pl-9">Ao se consagrar a São Miguel, você invoca a proteção do líder dos exércitos celestiais contra as ciladas e tentações do dia a dia. Sinta-se guardado por uma força divina que afasta o mal e fortalece sua alma. Essa conexão cria um escudo espiritual ao seu redor.</p>
                            </Card>
                            <Card className="bg-blue-800/50 border-blue-400/30 p-4 flex flex-col items-start gap-2">
                                <div className="flex items-center gap-3"><Check className="w-6 h-6 text-green-400 shrink-0"/> <h3 className="font-semibold text-lg">Vida de oração renovada</h3></div>
                                <p className="text-blue-200 pl-9">A Quaresma de São Miguel oferece uma estrutura diária de oração que combate a preguiça espiritual e o desânimo. Você redescobrirá o prazer da oração disciplinada, transformando-a em um hábito que nutre e fortalece sua alma. É um convite para reacender a chama da sua comunicação com Deus.</p>
                            </Card>
                            <Card className="bg-blue-800/50 border-blue-400/30 p-4 flex flex-col items-start gap-2">
                                <div className="flex items-center gap-3"><Check className="w-6 h-6 text-green-400 shrink-0"/> <h3 className="font-semibold text-lg">Fé fortalecida</h3></div>
                                <p className="text-blue-200 pl-9">Ao testemunhar pequenas e grandes graças durante os 40 dias, sua confiança no poder de Deus se tornará inabalável. A Quaresma é uma jornada para experimentar a fidelidade divina de forma concreta. Cada oração respondida será um tijolo a mais na construção de uma fé sólida.</p>
                            </Card>
                            <Card className="bg-blue-800/50 border-blue-400/30 p-4 flex flex-col items-start gap-2">
                                <div className="flex items-center gap-3"><Check className="w-6 h-6 text-green-400 shrink-0"/> <h3 className="font-semibold text-lg">Paz interior</h3></div>
                                <p className="text-blue-200 pl-9">Entregando suas ansiedades e medos a São Miguel Arcanjo, você encontrará uma serenidade que o mundo não pode oferecer. A devoção traz um profundo senso de paz, mesmo em meio às tempestades da vida. É a certeza de que você não está lutando sozinho.</p>
                            </Card>
                             <Card className="bg-blue-800/50 border-blue-400/30 p-4 flex flex-col items-start gap-2">
                                <div className="flex items-center gap-3"><Check className="w-6 h-6 text-green-400 shrink-0"/> <h3 className="font-semibold text-lg">Família abençoada</h3></div>
                                <p className="text-blue-200 pl-9">As orações da Quaresma se estendem como um manto de proteção sobre sua casa e seus entes queridos. Você se tornará um canal de bênçãos, intercedendo por sua família e consagrando seu lar a Deus. A harmonia e a proteção divina reinarão em seu lar.</p>
                            </Card>
                            <Card className="bg-blue-800/50 border-blue-400/30 p-4 flex flex-col items-start gap-2">
                                <div className="flex items-center gap-3"><Check className="w-6 h-6 text-green-400 shrink-0"/> <h3 className="font-semibold text-lg">Crescimento espiritual</h3></div>
                                <p className="text-blue-200 pl-9">Esta jornada de 40 dias é um convite para um profundo amadurecimento na fé. Ao final, você se sentirá mais próximo de Deus, com maior discernimento espiritual e clareza sobre seu propósito. É uma experiência transformadora que deixará marcas eternas em sua alma.</p>
                            </Card>
                        </div>
                        <Button onClick={handleCheckout} size="lg" className="bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold h-auto py-4 px-8 text-xl mt-8 animate-pulse shadow-lg">QUERO O MEU GUIA AGORA</Button>
                    </section>
                    
                    <section className="bg-blue-800/50 p-6 md:p-8 rounded-xl shadow-xl border border-blue-400/30">
                        <h2 className="text-3xl font-bold text-amber-300 mb-4">Momento Especial do Ano Litúrgico</h2>
                        <p className="text-blue-200 mb-8">Esta devoção especial ocorre de 15 de agosto até 29 de setembro. Se você perder este período, terá que esperar um ano inteiro para vivê-la novamente.</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-center">
                            <div className="flex flex-col items-center space-y-2">
                                <Sun className="w-10 h-10 text-amber-300"/>
                                <p className="font-bold">15 de Agosto</p>
                                <p className="text-sm text-blue-200">Início da Quaresma (Assunção de Nossa Senhora)</p>
                            </div>
                             <ChevronsRight className="w-8 h-8 text-blue-400 hidden md:block"/>
                            <div className="flex flex-col items-center space-y-2 col-start-1 md:col-start-auto">
                                <Calendar className="w-10 h-10 text-amber-300"/>
                                <p className="font-bold">40 Dias</p>
                                <p className="text-sm text-blue-200">De oração e transformação espiritual</p>
                            </div>
                            <ChevronsRight className="w-8 h-8 text-blue-400 hidden md:block"/>
                            <div className="flex flex-col items-center space-y-2">
                                <Star className="w-10 h-10 text-amber-300"/>
                                <p className="font-bold">Uma vez por ano</p>
                                <p className="text-sm text-blue-200">Oportunidade única de crescimento</p>
                            </div>
                            <div className="flex flex-col items-center space-y-2">
                                <Moon className="w-10 h-10 text-amber-300"/>
                                <p className="font-bold">29 de Setembro</p>
                                <p className="text-sm text-blue-200">Festa de São Miguel (Final da Quaresma)</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-amber-300 mb-2">Por Que Este Guia é Confiável?</h2>
                        <p className="text-blue-200 mb-8">Enraizado na tradição católica, fiel ao ensinamento da Igreja.</p>
                        <div className="grid md:grid-cols-3 gap-6 text-left">
                            <Card className="bg-blue-800/50 border-blue-400/30 p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <Library className="w-6 h-6 text-amber-300"/>
                                    <h3 className="font-bold text-lg">Tradição Católica</h3>
                                </div>
                                <p className="text-blue-200 text-sm">Este guia foi cuidadosamente elaborado com base em fontes tradicionais e na rica herança da Igreja, garantindo uma experiência autêntica e fiel à devoção de séculos.</p>
                            </Card>
                             <Card className="bg-blue-800/50 border-blue-400/30 p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <Pilcrow className="w-6 h-6 text-amber-300"/>
                                    <h3 className="font-bold text-lg">Fundamentação Bíblica</h3>
                                </div>
                                <p className="text-blue-200 text-sm">Cada oração e reflexão está enraizada nas Sagradas Escrituras, proporcionando uma base sólida para o seu crescimento espiritual e uma conexão mais profunda com a Palavra de Deus.</p>
                            </Card>
                             <Card className="bg-blue-800/50 border-blue-400/30 p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <Compass className="w-6 h-6 text-amber-300"/>
                                    <h3 className="font-bold text-lg">Orientação Segura</h3>
                                </div>
                                <p className="text-blue-200 text-sm">O conteúdo foi revisado para assegurar que esteja em plena conformidade com o Catecismo e o Magistério da Igreja, oferecendo um caminho seguro e confiável para sua jornada de fé.</p>
                            </Card>
                        </div>
                    </section>

                    <Card className="bg-blue-100 text-blue-900 p-6 md:p-8 rounded-xl shadow-2xl border-2 border-blue-400">
                        <h2 className="text-3xl font-bold text-blue-800 mb-4">O Caminho Espiritual que Pode Mudar a Sua Vida, por um Valor Simbólico</h2>
                        <p className="text-lg">Um retiro espiritual pode custar centenas de reais.</p>
                        <p className="text-lg">Cursos de formação passam facilmente de mil reais.</p>
                        <p className="text-lg">Livros sobre espiritualidade chegam a ser caros e fragmentados.</p>
                        <p className="font-semibold my-4 text-lg">Este guia reúne tudo isso em um caminho acessível por apenas:</p>
                        <p className="text-2xl text-red-600 font-bold line-through">DE R$ 197,00</p>
                        <p className="text-5xl md:text-6xl font-bold text-green-600 my-2">por R$ 27,00</p>
                        <Button onClick={handleCheckout} size="lg" className="w-full max-w-md mx-auto bg-green-600 hover:bg-green-700 text-white font-bold h-auto py-4 text-xl md:text-2xl animate-pulse whitespace-normal mt-4">
                            QUERO O MEU GUIA COMPLETO AGORA
                        </Button>
                        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm mt-6">
                            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600"/> Acesso Imediato</span>
                            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600"/> Guia Completo 40 Dias</span>
                            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600"/> Todas as Orações</span>
                            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-green-600"/> 4 Presentes Exclusivos</span>
                        </div>
                        <p className="text-xs font-semibold mt-4">COMPRA 100% SEGURA</p>
                    </Card>

                    <section className="border-2 border-dashed border-blue-400/50 rounded-lg p-6">
                         <h3 className="text-xl font-bold flex items-center justify-center gap-2 text-green-400"><Shield className="w-6 h-6"/> Garantia Incontestável de 7 dias</h3>
                         <p className="mt-2 text-blue-200">Estamos confiantes de que este guia vai abençoar sua vida espiritual. Se por qualquer motivo você não ficar satisfeito nos primeiros 7 dias, devolvemos 100% do seu dinheiro, sem perguntas, sem complicações.</p>
                         <p className="font-bold mt-2 text-amber-300">VOCÊ NÃO TEM NADA A PERDER E TUDO A GANHAR!</p>
                    </section>
                    
                    <section>
                        <h2 className="text-3xl font-bold text-amber-300 mb-6">Perguntas Mais Frequentes</h2>
                         <Accordion type="single" collapsible className="w-full text-left max-w-xl mx-auto">
                            {faqItems.map((item, index) => (
                                <AccordionItem value={`item-${index}`} key={index} className="border-blue-400/30">
                                    <AccordionTrigger className="font-semibold text-lg hover:text-amber-300">{item.question}</AccordionTrigger>
                                    <AccordionContent className="text-blue-200 text-base">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>
                    
                    <section className="text-blue-200 text-sm">
                        <p className="font-bold text-lg text-amber-300 mb-4">Quaresma de São Miguel – Caminho de Oração e Proteção</p>
                        <p>© 2025 – Guia Completo de Oração e Devoção</p>
                        <p className="max-w-xl mx-auto mt-2">Este material foi criado a partir da tradição católica autêntica, para ajudar você a viver esta devoção com profundidade. Não substitui o acompanhamento de um diretor espiritual, pois cada jornada é pessoal e única. Os frutos dependem da fé, da entrega e da abertura às graças divinas.</p>
                        <p className="mt-4 font-semibold">Garantia de 7 dias ou seu dinheiro de volta</p>
                        <p className="mt-6 text-xl font-bold text-amber-300 flex items-center justify-center gap-2"><SwordIcon className="w-6 h-6"/> SÃO MIGUEL ARCANJO, DEFENDEI-NOS NO COMBATE!</p>
                    </section>

                </div>
            </main>
        </div>
    );
}

    