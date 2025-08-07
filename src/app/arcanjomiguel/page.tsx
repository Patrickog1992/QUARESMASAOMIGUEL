'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer } from '@/components/landing/footer';
import { BackgroundPattern } from '@/components/landing/background-pattern';
import { Check, AlertTriangle, ScrollText, Lock, Star, Gift, Shield, ArrowDown, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TopBanner } from '@/components/landing/top-banner';
import { SalesPopup } from '@/components/landing/sales-popup';

const testimonials = [
    {
        quote: "Eu estava desempregado há meses. Comecei as orações do Arcanjo Miguel e na primeira semana, recebi a ligação para o emprego dos meus sonhos. Senti uma força me guiando. É inexplicável!",
        author: "Carlos F., São Paulo - SP",
        avatarUrl: 'https://thumbs2.imgbox.com/c3/9d/Qq4PQmYc_t.jpg',
        avatarHint: 'man portrait',
    },
    {
        quote: "Minha família estava desestruturada. Orei com a força do Arcanjo Miguel e hoje vivemos em paz e harmonia. Sinto minha casa protegida.",
        author: "Mariana L., Salvador - BA",
        avatarUrl: 'https://thumbs2.imgbox.com/fc/13/RXzAe2rE_t.png',
        avatarHint: 'woman portrait',
    },
    {
        quote: "Tinha uma dor crônica que nenhum médico resolvia. As orações me trouxeram um alívio que eu não sentia há anos. O Arcanjo Miguel intercedeu por mim. Tenham fé!",
        author: "Joana P., Recife - PE",
        avatarUrl: 'https://thumbs2.imgbox.com/3d/ae/bHEFsuqi_t.jpg',
        avatarHint: 'woman portrait',
    }
];

const faqItems = [
    {
        question: "Como vou receber as 40 orações?",
        answer: "O acesso é 100% digital e imediato. Assim que sua contribuição for confirmada, você receberá um e-mail com um link para acessar e baixar todas as orações e os bônus em formato PDF."
    },
    {
        question: "A compra é segura?",
        answer: "Sim, 100% segura. Utilizamos a plataforma Kirvano, uma das maiores e mais seguras do Brasil, para processar todos os pagamentos. Seus dados estão completamente protegidos."
    },
    {
        question: "E se eu não sentir nenhuma mudança?",
        answer: "Sua fé é o mais importante. Oferecemos uma garantia de 7 dias. Se por qualquer motivo você não se sentir tocado pelo material, basta nos enviar um e-mail e devolveremos o valor da sua contribuição, sem burocracia."
    },
    {
        question: "Preciso fazer as orações em um horário específico?",
        answer: "Não há um horário obrigatório, mas muitos fiéis relatam uma conexão mais forte durante a madrugada ou no início da manhã, momentos de maior silêncio e introspecção. O importante é orar com o coração aberto."
    }
]

const TestimonialCard = ({ quote, author, avatarUrl, avatarHint }: (typeof testimonials)[0]) => (
    <Card className="bg-card/80 p-4 shadow-lg text-left">
        <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10 shrink-0">
                <AvatarImage src={avatarUrl} alt={author} data-ai-hint={avatarHint}/>
                <AvatarFallback>{author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <p className="font-bold">{author}</p>
                <p className="italic mt-1">“{quote}”</p>
            </div>
        </div>
    </Card>
);

export default function ArcanjoMiguelPage() {
    
    useEffect(() => {
        const scriptId = 'vid-68925811e69e8e799c274811-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://scripts.converteai.net/1b791434-3e0f-4e75-a646-c8074375e059/players/68925811e69e8e799c274811/v4/player.js';
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    const videoHtml = `<vturb-smartplayer id="vid-68925811e69e8e799c274811" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;

    const handleCheckout = () => {
        window.open('https://pay.kirvano.com/6d4a8c2c-5933-4ec4-a873-585f75d81a8b', '_self');
    };

    return (
        <div className="dark relative flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
            <TopBanner />
            <BackgroundPattern />
            <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
                <div className="max-w-3xl mx-auto space-y-12 text-center">

                    <section className="space-y-4">
                        <Card className="bg-accent text-accent-foreground p-4 md:p-6 rounded-xl shadow-lg">
                           <h1 className="text-2xl md:text-4xl font-bold uppercase">As 40 Orações Secretas que invocam o Arcanjo Miguel para sua proteção e abrem as portas para seus milagres</h1>
                        </Card>
                         <Image src="https://i.imgur.com/xYf9q2s.png" alt="Arcanjo Miguel" width={600} height={400} className="rounded-lg mx-auto shadow-md" data-ai-hint="archangel michael" />
                        <p className="text-lg md:text-xl font-semibold text-foreground/80 flex items-center justify-center gap-2">
                          <Shield className="w-5 h-5 text-primary"/>
                          <span>Você não chegou aqui por acaso. Sinta o chamado para a sua proteção.</span>
                        </p>
                    </section>

                    <section>
                        <div 
                            className="relative overflow-hidden rounded-lg shadow-2xl"
                            dangerouslySetInnerHTML={{ __html: videoHtml }}
                        />
                    </section>

                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">O que Fiel dizem após 7 dias de Oração:</h2>
                        <div className="space-y-6">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard key={index} {...testimonial} />
                            ))}
                        </div>
                    </section>

                     <Card className="bg-primary/10 p-6 md:p-8 rounded-xl shadow-2xl border-2 border-primary">
                        <CardHeader className="p-0 mb-4">
                           <CardTitle className="text-2xl md:text-3xl font-bold text-primary">Tenha acesso a um tesouro espiritual</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 space-y-4">
                            <p>Estas 40 orações, traduzidas de manuscritos antigos, são uma ferramenta poderosa de fé. Um verdadeiro escudo espiritual para o seu dia a dia.</p>
                            <div className="text-left space-y-3 my-4">
                                <p className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1"/><span>Orações para proteção da família e do lar.</span></p>
                                <p className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1"/><span>Orações para abrir caminhos financeiros e de trabalho.</span></p>
                                <p className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1"/><span>Orações para cura de feridas emocionais e físicas.</span></p>
                                <p className="flex items-start gap-3"><Check className="w-5 h-5 text-green-600 mt-1"/><span>Orações para livramento de inveja e energias negativas.</span></p>
                            </div>
                            <p className="font-bold text-lg">Por uma contribuição simbólica, você recebe este tesouro de fé:</p>
                            <div>
                                <span className="text-lg line-through text-destructive">De R$97,00</span>
                                <p className="text-4xl md:text-5xl font-bold text-primary">Por apenas R$ 27,00</p>
                            </div>
                             <Button onClick={handleCheckout} size="lg" className="w-full max-w-md mx-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-auto py-4 text-xl md:text-2xl animate-pulse whitespace-normal mt-4">
                                QUERO MINHA PROTEÇÃO AGORA
                                <ArrowDown className="w-6 h-6 ml-2 animate-bounce"/>
                            </Button>
                            <p className="text-sm">Acesso vitalício e imediato por e-mail.</p>
                        </CardContent>
                    </Card>

                    <section>
                         <h3 className="text-xl font-bold flex items-center justify-center gap-2"><Check className="w-6 h-6 text-green-600"/> Garantia de 7 Dias</h3>
                         <p className="mt-2">Sua fé é nossa prioridade. Se em 7 dias você não sentir a paz e a proteção que busca, devolvemos sua contribuição. Sem perguntas.</p>
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

                    <section className="bg-destructive/10 text-destructive p-4 rounded-lg flex items-center gap-4 justify-center">
                        <AlertTriangle className="w-8 h-8"/>
                        <div>
                            <h3 className="font-bold">Atenção: Acesso limitado!</h3>
                            <p>Para garantir a qualidade e a energia deste material, as vagas são limitadas. Esta página pode sair do ar a qualquer momento.</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
            <SalesPopup />
        </div>
    );
}
