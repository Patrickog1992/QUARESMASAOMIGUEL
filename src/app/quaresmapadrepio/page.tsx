'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import { Check, AlertTriangle, ScrollText, Lock, Star, Gift, Heart, ArrowDown, Sparkles, BookOpen, FileText, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const testimonials = [
    {
        quote: "Na terceira madrugada de oração, sonhei com um homem de luz. Acordei chorando. No dia seguinte, meu pai foi chamado para o emprego que estava esperando há 1 ano.",
        author: "Amanda R., Vitória - ES",
        avatarUrl: 'https://thumbs2.imgbox.com/fc/13/RXzAe2rE_t.png',
        avatarHint: 'woman portrait',
        likes: 1872,
        time: '2 h',
    },
    {
        quote: "Estava sem dinheiro e com dívidas atrasadas. Fiz as orações da Quaresma por 7 dias. No oitavo, recebi uma herança inesperada.",
        author: "José M., Belo Horizonte - MG",
        avatarUrl: 'https://thumbs2.imgbox.com/c3/9d/Qq4PQmYc_t.jpg',
        avatarHint: 'man portrait',
        likes: 1534,
        time: '5 h',
    },
    {
        quote: "Minha mãe, com osteoporose severa, chorava de dor. Após 5 dias orando com ela às 3h da manhã, ela simplesmente parou de sentir dor. Os exames mostraram melhora inexplicável.",
        author: "Eliane F., Guarulhos - SP",
        avatarUrl: 'https://thumbs2.imgbox.com/3d/ae/bHEFsuqi_t.jpg',
        avatarHint: 'woman portrait',
        likes: 2041,
        time: '1 d',
    }
];

const faqItems = [
    {
        question: "Como vou receber o material?",
        answer: "O acesso é 100% digital. Assim que sua contribuição for confirmada, você receberá um e-mail com todas as instruções e links para acessar a Quaresma do Padre Pio, os áudios e todos os bônus. O acesso é imediato e vitalício."
    },
    {
        question: "A compra é segura?",
        answer: "Sim, totalmente segura. O pagamento é processado pela Kirvano, uma das maiores e mais seguras plataformas de produtos digitais do Brasil. Seus dados estão protegidos."
    },
    {
        question: "E se eu não gostar ou não sentir nenhuma mudança?",
        answer: "Sua fé e satisfação são nossa prioridade. Por isso, oferecemos uma garantia incondicional de 30 dias. Se por qualquer motivo você não se sentir tocado pelo material, basta nos enviar um e-mail e devolveremos 100% do valor da sua contribuição, sem perguntas."
    },
    {
        question: "Preciso orar exatamente entre 3h e 5h da manhã?",
        answer: "Este é o horário recomendado por Padre Pio para uma conexão espiritual mais forte. No entanto, entendemos que nem todos têm essa disponibilidade. O mais importante é que você encontre um momento de paz e silêncio, onde possa se concentrar totalmente na oração, com o coração aberto."
    }
]

const CrossIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14"/>
    <path d="M5 12h14"/>
  </svg>
);

const TestimonialCardComponent = ({ quote, author, avatarUrl, avatarHint, likes, time }: (typeof testimonials)[0]) => (
    <Card className="bg-card/80 p-4 shadow-lg text-left">
        <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10 shrink-0">
                <AvatarImage src={avatarUrl} alt={author} data-ai-hint={avatarHint}/>
                <AvatarFallback>{author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <p className="font-bold">{author}</p>
                <p className="italic mt-1">“{quote}”</p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-2">
                    <button className="hover:underline font-bold">Curtir</button>
                    <span aria-hidden="true">·</span>
                    <button className="hover:underline font-bold">Responder</button>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3 text-blue-500" />
                        <Heart className="h-3 w-3 text-red-500" fill="currentColor" />
                        <span className="ml-1">{likes.toLocaleString('pt-BR')}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{time}</span>
                </div>
            </div>
        </div>
    </Card>
);

export default function QuaresmaPadrePioPage() {
    
    const handleCheckout = () => {
        window.open('https://pay.kirvano.com/e4a1b0c9-9b98-4c8d-8a5f-7e0f8c5b6e7f', '_self');
    };

    return (
        <div className="dark relative flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
            <BackgroundPattern />
            <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-3xl mx-auto space-y-12 text-center">

                    <section className="space-y-4">
                        <h1 className="text-2xl md:text-4xl font-bold text-primary uppercase">A ORAÇÃO PERDIDA DE PADRE PIO QUE RESTAURA SUA CONEXÃO COM O ANJO DA GUARDA E ABRE AS PORTAS DA CURA, PROSPERIDADE E MILAGRES EM SUA VIDA</h1>
                        <p className="text-lg md:text-xl font-semibold text-foreground/80 flex items-center justify-center gap-2">
                          <Heart className="w-5 h-5 text-primary"/>
                          <span>Você não está aqui por acaso. Seu anjo da guarda quer falar com você.</span>
                        </p>
                    </section>

                    <section>
                        <p className="text-md md:text-lg mb-6">Se você chegou até aqui, talvez esteja sentindo que algo em sua vida precisa mudar. Talvez você esteja enfrentando:</p>
                        <Card className="bg-card/80 p-6 shadow-lg border-primary/20">
                            <ul className="space-y-3 text-left">
                                <li className="flex items-start gap-3"><Heart className="w-5 h-5 text-destructive mt-1"/><span>Problemas financeiros que parecem não ter fim...</span></li>
                                <li className="flex items-start gap-3"><Heart className="w-5 h-5 text-destructive mt-1"/><span>Um problema de saúde que desafia os médicos…</span></li>
                                <li className="flex items-start gap-3"><Heart className="w-5 h-5 text-destructive mt-1"/><span>A dor da perda, da solidão, da estagnação…</span></li>
                            </ul>
                        </Card>
                        <p className="text-md md:text-lg mt-6">E, no fundo, você sente que Deus está em silêncio. Mas a verdade é que <span className="font-bold">Deus nunca para de falar</span>. Nós é que perdemos a conexão com o mensageiro Dele: o nosso anjo da guarda.</p>
                    </section>
                    
                    <section className="bg-card/80 p-6 md:p-8 rounded-xl shadow-xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                           <CrossIcon className="w-6 h-6"/> Padre Pio: O Santo que Falava com os Anjos
                        </h2>
                        <Image src="https://i.imgur.com/H1qvjJ8.png" alt="Padre Pio" width={600} height={400} className="rounded-lg mx-auto shadow-md mb-6" data-ai-hint="Padre Pio portrait" />
                        <p className="text-md md:text-lg mt-6">Padre Pio, um dos santos mais milagrosos da história da Igreja, vivia na pequena cidade de San Giovanni Rotondo, na Itália. Era conhecido por realizar curas instantâneas, prever o futuro e estar em dois lugares ao mesmo tempo. Mas o que poucos sabem é que:</p>
                        <p className="text-lg md:text-xl font-bold text-primary mt-4 flex items-center justify-center gap-2"><Lock className="w-5 h-5"/>Padre Pio mantinha uma comunicação direta com seu anjo da guarda.</p>
                        <p className="italic text-md md:text-lg mt-2">Ele dizia: “Se você não consegue falar comigo, envie seu anjo.”</p>
                        <p className="text-md md:text-lg mt-4">Em cartas secretas descobertas em seu quarto após sua morte, Padre Pio registrou orações que usava para se conectar com seu anjo — e para ajudar fiéis a receberem milagres. Essas orações estavam desaparecidas. Até agora.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                            <Star className="w-6 h-6"/> O Que é a Quaresma Secreta do Padre Pio?
                        </h2>
                        <p className="text-md md:text-lg mb-6">É um conjunto sagrado com as orações que Padre Pio usava para manifestar curas, riquezas, livramentos e respostas impossíveis, organizadas para você usar por 7 dias consecutivos, no exato horário em que os anjos estão ativos: entre 3h e 5h da madrugada.</p>
                        <Card className="bg-card/80 p-6 shadow-lg border-primary/20">
                             <CardHeader className="p-0 mb-4">
                                <CardTitle className="text-xl md:text-2xl font-bold text-primary">Nela, você terá:</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0 text-left space-y-3">
                                <p className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1"/><span>Oração Sagrada para abrir os caminhos do dinheiro</span></p>
                                <p className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1"/><span>Oração do amanhecer para reconectar com seu anjo da guarda</span></p>
                                <p className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1"/><span>Oração da madrugada para cura de enfermidades</span></p>
                                <p className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1"/><span>Oração de proteção para sua casa</span></p>
                                <p className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1"/><span>Oração para restauração de relacionamentos</span></p>
                                <p className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1"/><span>Oração secreta para que seu anjo fale com você em sonhos</span></p>
                            </CardContent>
                        </Card>
                         <p className="text-md md:text-lg mt-6 font-semibold">São mais de 30 orações poderosas reveladas por Padre Pio — traduzidas do italiano antigo e agora acessíveis em português para fiéis brasileiros.</p>
                    </section>

                     <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 flex items-center justify-center gap-2">
                           <Sparkles className="w-6 h-6" /> Relatos de Quem Já Usou e Sentiu o Poder
                        </h2>
                        <div className="space-y-6">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCardComponent key={index} {...testimonial} />
                            ))}
                        </div>
                    </section>

                     <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 flex items-center justify-center gap-2">
                            <Gift className="w-6 h-6"/> Bônus Exclusivos (por tempo limitado)
                        </h2>
                         <div className="space-y-4 text-left">
                            <Card className="bg-card/80 p-4 shadow-md flex items-center gap-4">
                                <Star className="w-8 h-8 text-yellow-500 shrink-0"/>
                                <div>
                                    <h3 className="font-bold">1. Canto Secreto dos Anjos</h3>
                                    <p>Uma trilha sagrada que, segundo os monges de San Giovanni, abre os canais da alma para ouvir o seu anjo durante a oração.</p>
                                </div>
                            </Card>
                             <Card className="bg-card/80 p-4 shadow-md flex items-center gap-4">
                                <BookOpen className="w-8 h-8 text-yellow-500 shrink-0"/>
                                <div>
                                    <h3 className="font-bold">2. Guia Digital: Como Orar na Hora dos Anjos (entre 3h e 5h)</h3>
                                    <p>Passo a passo para realizar sua jornada de 7 dias, com instruções claras e práticas.</p>
                                </div>
                            </Card>
                             <Card className="bg-card/80 p-4 shadow-md flex items-center gap-4">
                                <FileText className="w-8 h-8 text-yellow-500 shrink-0"/>
                                <div>
                                    <h3 className="font-bold">3. Os 5 Sinais de que Seu Anjo Está Tentando Falar com Você</h3>
                                    <p>Manual espiritual para interpretar visões, sonhos e coincidências com orientação divina.</p>
                                </div>
                            </Card>
                        </div>
                    </section>

                     <Card className="bg-card/90 p-6 md:p-8 rounded-xl shadow-2xl border-2 border-primary">
                        <CardHeader className="p-0 mb-4">
                           <CardTitle className="text-2xl md:text-3xl font-bold text-primary">Quanto Custa Viver uma Vida Abençoada?</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 space-y-4">
                            <p>A versão original dessas orações foi vendida por <span className="line-through">R$ 497</span> em outras páginas — com promessas vazias e exploração da fé. Mas aqui, o propósito é diferente: Queremos colocar essa revelação nas mãos do maior número de pessoas possível, sem peso financeiro.</p>
                            <p className="font-bold text-lg">Hoje, por tempo limitado, você pode ter acesso completo à Quaresma do Padre Pio por apenas:</p>
                            <p className="text-4xl md:text-5xl font-bold text-green-600">R$ 29,90 à vista</p>
                             <Button onClick={handleCheckout} size="lg" className="w-full max-w-md mx-auto bg-green-600 hover:bg-green-700 text-white font-bold h-auto py-4 text-xl md:text-2xl animate-pulse whitespace-normal mt-4">
                                QUERO RECEBER A QUARESMA DE PADRE PIO AGORA
                                <ArrowDown className="w-6 h-6 ml-2 animate-bounce"/>
                            </Button>
                            <p className="text-sm">Entrega imediata em formato digital, direto no seu e-mail após confirmação.</p>
                        </CardContent>
                    </Card>

                    <section>
                         <h3 className="text-xl font-bold flex items-center justify-center gap-2"><Check className="w-6 h-6 text-green-600"/> Garantia Incondicional de 30 Dias</h3>
                         <p className="mt-2">Se você fizer a oração por 7 dias e não sentir nenhuma transformação — emocional, espiritual ou material — devolvemos 100% do seu dinheiro. Sem perguntas, sem julgamentos. É a sua fé que importa.</p>
                    </section>
                    
                     <section className="bg-destructive/10 text-destructive p-4 rounded-lg flex items-center gap-4 justify-center">
                        <AlertTriangle className="w-8 h-8"/>
                        <div>
                            <h3 className="font-bold">Atenção: Últimas 57 unidades disponíveis neste lote</h3>
                            <p>Por conta da tradução, revisão e alta demanda, este conteúdo está disponível por tempo limitado. Quando acabar, não sabemos quando será reaberto.</p>
                        </div>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Perguntas Frequentes</h2>
                        <Accordion type="single" collapsible className="w-full text-left">
                            {faqItems.map((item, index) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger className="font-semibold">{item.question}</AccordionTrigger>
                                    <AccordionContent className="text-foreground/80">
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-xl md:text-2xl font-bold">Clique agora no botão abaixo e dê esse passo de fé.</h2>
                        <p>Você pode continuar vivendo os mesmos problemas… Ou pode dar esse passo e permitir que seu anjo da guarda aja com todo o poder do céu.</p>
                         <Button onClick={handleCheckout} size="lg" className="w-full max-w-md mx-auto bg-green-600 hover:bg-green-700 text-white font-bold h-auto py-4 text-xl md:text-2xl animate-pulse whitespace-normal">
                             QUERO RECEBER A QUARESMA DE PADRE PIO AGORA
                        </Button>
                        <p className="text-lg font-semibold mt-4 flex items-center justify-center gap-2">
                            <Heart className="w-5 h-5 text-primary"/>
                            <span>Você está a uma oração de distância da vida que sempre pediu a Deus. Que seu anjo fale com você esta madrugada.</span>
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
