'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer } from '@/components/landing/footer';
import { Check, AlertTriangle, Shield, ArrowDown, Sparkles, ThumbsUp, Heart } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SalesPopup } from '@/components/landing/sales-popup';

const testimonials = [
    {
        quote: "Eu estava desempregado há meses. Comecei as orações do Arcanjo Miguel e na primeira semana, recebi a ligação para o emprego dos meus sonhos. Senti uma força me guiando. É inexplicável!",
        author: "Carlos F., São Paulo - SP",
        avatarUrl: 'https://thumbs2.imgbox.com/c3/9d/Qq4PQmYc_t.jpg',
        avatarHint: 'man portrait',
        likes: 2134,
        time: '3 h',
    },
    {
        quote: "Minha família estava desestruturada. Orei com a força do Arcanjo Miguel e hoje vivemos em paz e harmonia. Sinto minha casa protegida.",
        author: "Mariana L., Salvador - BA",
        avatarUrl: 'https://thumbs2.imgbox.com/fc/13/RXzAe2rE_t.png',
        avatarHint: 'woman portrait',
        likes: 1534,
        time: '5 h',
    },
    {
        quote: "Tinha uma dor crônica que nenhum médico resolvia. As orações me trouxeram um alívio que eu não sentia há anos. O Arcanjo Miguel intercedeu por mim. Tenham fé!",
        author: "Joana P., Recife - PE",
        avatarUrl: 'https://thumbs2.imgbox.com/3d/ae/bHEFsuqi_t.jpg',
        avatarHint: 'woman portrait',
        likes: 2041,
        time: '1 d',
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
];

const TestimonialCard = ({ quote, author, avatarUrl, avatarHint, likes, time }: (typeof testimonials)[0]) => (
    <Card className="bg-white/10 p-4 shadow-lg text-left text-white border border-blue-400/30">
        <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10 shrink-0">
                <AvatarImage src={avatarUrl} alt={author} data-ai-hint={avatarHint}/>
                <AvatarFallback className="bg-blue-300 text-blue-900">{author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <p className="font-bold text-amber-300">{author}</p>
                <p className="italic mt-1 text-blue-100">“{quote}”</p>
                <div className="flex items-center gap-3 text-xs text-blue-300 mt-2">
                    <button className="hover:underline font-bold">Curtir</button>
                    <span aria-hidden="true">·</span>
                    <button className="hover:underline font-bold">Responder</button>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3 text-blue-400" />
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

    const videoHtml = `<vturb-smartplayer id="vid-68925811e69e8e799c274811" style="display: block; margin: 0 auto; width: 100%; max-width: 400px; border-radius: 8px;"></vturb-smartplayer>`;

    const handleCheckout = () => {
        window.open('https://pay.kirvano.com/6d4a8c2c-5933-4ec4-a873-585f75d81a8b', '_self');
    };

    return (
        <div className="dark relative flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 text-white overflow-x-hidden">
             <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')]"></div>
            <main className="flex-grow container mx-auto px-4 py-8 md:py-12 z-10">
                <div className="max-w-3xl mx-auto space-y-16 text-center">

                    <section className="space-y-6">
                        <h1 className="text-3xl md:text-5xl font-bold uppercase text-amber-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">As 40 Orações Secretas do Arcanjo Miguel</h1>
                        <p className="text-lg md:text-xl font-medium text-blue-200">
                           Invoque o poder do Arcanjo para sua proteção, quebre as correntes que te prendem e abra as portas para os seus milagres.
                        </p>
                        <div className="p-6 bg-black/20 rounded-xl border border-blue-400/30 text-left max-w-lg mx-auto space-y-3">
                           <p className="flex items-start gap-3"><Check className="w-5 h-5 text-amber-300 mt-1 shrink-0"/><span>Orações traduzidas de manuscritos antigos do Vaticano.</span></p>
                           <p className="flex items-start gap-3"><Check className="w-5 h-5 text-amber-300 mt-1 shrink-0"/><span>Um escudo espiritual para proteger sua família, finanças e saúde.</span></p>
                           <p className="flex items-start gap-3"><Check className="w-5 h-5 text-amber-300 mt-1 shrink-0"/><span>Sinta a presença do Arcanjo Miguel agindo em sua vida em poucos dias.</span></p>
                        </div>
                    </section>
                    
                    <p className="font-bold text-amber-300 uppercase tracking-wider animate-pulse md:text-lg">
                        Assista ao vídeo abaixo e receba a sua bênção
                    </p>

                    <section>
                        <div 
                            className="relative overflow-hidden rounded-lg shadow-2xl shadow-amber-500/20"
                            dangerouslySetInnerHTML={{ __html: videoHtml }}
                        />
                    </section>

                    <section>
                        <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">O que os Fíeis Dizem após 7 Dias de Oração:</h2>
                        <div className="space-y-6">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard key={index} {...testimonial} />
                            ))}
                        </div>
                    </section>

                     <Card className="bg-gradient-to-br from-blue-800 to-blue-900 p-6 md:p-8 rounded-xl shadow-2xl border-2 border-amber-300">
                        <CardHeader className="p-0 mb-6">
                           <CardTitle className="text-3xl md:text-4xl font-bold text-amber-300 flex items-center justify-center gap-3"><Shield className="w-8 h-8"/>Tenha Acesso a um Tesouro Espiritual</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 space-y-6">
                            <p className="text-blue-100 text-lg">Estas 40 orações são uma ferramenta poderosa de fé. Um verdadeiro escudo espiritual para o seu dia a dia.</p>
                            <div>
                                <p className="text-lg line-through text-blue-300">De R$97,00</p>
                                <p className="text-5xl md:text-6xl font-bold text-amber-300 drop-shadow-lg my-2">Por apenas R$ 27,00</p>
                            </div>
                             <Button onClick={handleCheckout} size="lg" className="w-full max-w-md mx-auto bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold h-auto py-4 text-xl md:text-2xl animate-pulse whitespace-normal shadow-lg shadow-amber-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/40 transform hover:scale-105">
                                QUERO MINHA PROTEÇÃO AGORA
                                <ArrowDown className="w-6 h-6 ml-2 animate-bounce"/>
                            </Button>
                            <p className="text-sm text-blue-200">Acesso vitalício e imediato por e-mail.</p>
                        </CardContent>
                    </Card>

                    <section className="text-blue-200">
                         <h3 className="text-xl font-bold flex items-center justify-center gap-2"><Check className="w-6 h-6 text-green-400"/> Garantia de 7 Dias</h3>
                         <p className="mt-2 max-w-md mx-auto">Sua fé é nossa prioridade. Se em 7 dias você não sentir a paz e a proteção que busca, devolvemos sua contribuição. Sem perguntas.</p>
                    </section>
                    
                    <section>
                        <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">Perguntas Frequentes</h2>
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

                    <section className="bg-red-900/50 text-red-100 p-4 rounded-lg flex items-center gap-4 justify-center border border-red-500/50">
                        <AlertTriangle className="w-8 h-8 text-red-300 shrink-0"/>
                        <div>
                            <h3 className="font-bold">Atenção: Acesso limitado!</h3>
                            <p className="text-sm">Para garantir a qualidade e a energia deste material, as vagas são limitadas. Esta página pode sair do ar a qualquer momento.</p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
            <SalesPopup />
        </div>
    );
}
