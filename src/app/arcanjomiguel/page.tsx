'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Footer } from '@/components/landing/footer';
import { Check, AlertTriangle, Shield, ThumbsUp, Heart } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SalesPopup } from '@/components/landing/sales-popup';
import { TopBanner } from '@/components/landing/top-banner';

const testimonials = [
    {
        id: 1,
        name: 'Frei Gilson',
        avatarUrl: 'https://thumbs2.imgbox.com/16/a6/bzjtDdJQ_t.png',
        avatarHint: 'priest portrait',
        text: 'As 40 orações do Arcanjo Miguel são um escudo para a alma. Quando as traduzi, senti uma força protetora imensa. Rezem com fé, e Miguel Arcanjo lutará por vocês. Se você está aqui, não é por acaso, é um chamado. 🙏',
        likes: 2134,
        time: '3 h',
        replies: [
          {
            id: 2,
            name: 'Maria Santos',
            username: '@FreiGilson',
            avatarUrl: 'https://thumbs2.imgbox.com/fc/13/RXzAe2rE_t.png',
            avatarHint: 'woman portrait',
            text: 'Padre, comecei a orar e sinto uma paz e uma coragem que não sentia há anos. Obrigada por compartilhar essa bênção! 🙌',
            likes: 254,
            time: '3 h',
          },
        ],
    },
    {
        id: 3,
        name: 'Marcelo Rossi',
        avatarUrl: 'https://thumbs2.imgbox.com/4b/7d/zDjIQAwV_t.png',
        avatarHint: 'priest portrait',
        text: 'Vi de perto o poder dessas orações. Não são apenas palavras, são uma conexão direta com o Príncipe dos Anjos. Assista ao vídeo e sinta a presença de São Miguel Arcanjo em sua vida.',
        likes: 2001,
        time: '1 h',
        replies: [
          {
            id: 4,
            name: 'Gleicy Costa',
            username: '@MarceloRossi',
            avatarUrl: 'https://thumbs2.imgbox.com/87/54/0dMM6ESV_t.png',
            avatarHint: 'woman portrait',
            text: 'No final do vídeo eu já sentia a energia diferente. É muito poderoso! 😭',
            likes: 189,
            time: '1 h',
          },
        ],
    },
    {
        id: 5,
        name: 'Reginaldo Manzotti',
        avatarUrl: 'https://thumbs2.imgbox.com/b9/08/pB4d3kjj_t.png',
        avatarHint: 'priest portrait',
        text: 'Essas 40 orações são um presente do céu para os momentos de batalha espiritual. Elas renovam a fé e trazem a certeza da proteção divina. Receba essa graça em sua vida!',
        likes: 1654,
        time: '1 h',
        replies: [
          {
            id: 6,
            name: 'Ana Luiza',
            username: '@ReginaldoManzotti',
            avatarUrl: 'https://thumbs2.imgbox.com/eb/cb/zfODzSUu_t.png',
            avatarHint: 'woman portrait',
            text: 'Comecei hoje e já me sinto mais forte para enfrentar meus problemas. 🙌',
            likes: 135,
            time: '1 h',
          },
        ],
    },
    {
        id: 7,
        name: 'Fábio de Melo',
        avatarUrl: 'https://thumbs2.imgbox.com/5a/9a/LSUTrLtZ_t.png',
        avatarHint: 'priest portrait',
        text: 'Há orações que nos tocam de forma única. As de São Miguel Arcanjo têm uma força especial. Que mais pessoas possam ter acesso a essa fonte de proteção.',
        likes: 1361,
        time: '1 h',
        replies: [
        {
            id: 8,
            name: 'Carlos Henrique',
            username: '@FabioDeMelo',
            avatarUrl: 'https://thumbs2.imgbox.com/c3/9d/Qq4PQmYc_t.jpg',
            avatarHint: 'man portrait',
            text: 'Meu pai chorou ouvindo. Ele estava afastado de Deus há anos. Hoje ele rezou comigo, pedindo a proteção do Arcanjo. 🙏',
            likes: 318,
            time: '2 d',
        },
        ],
    },
    {
        id: 9,
        name: 'Patrícia Lima',
        avatarUrl: 'https://thumbs2.imgbox.com/da/67/ajSKP3eY_t.jpg',
        avatarHint: 'woman portrait',
        text: 'Meu marido voltou a trabalhar depois de fazer a oração do Arcanjo por 7 dias seguidos! Deus é fiel e São Miguel é poderoso! 🙌',
        likes: 412,
        time: '1 h',
    },
    {
        id: 10,
        name: 'João Pedro',
        avatarUrl: 'https://thumbs2.imgbox.com/72/dc/GT3YxWwY_t.jpg',
        avatarHint: 'man portrait',
        text: 'Senti um arrepio e uma paz quando comecei a orar. A presença do Arcanjo é real! 🙏',
        likes: 341,
        time: '1 h',
    },
    {
        id: 11,
        name: 'Luciana Silva',
        avatarUrl: 'https://thumbs2.imgbox.com/65/6a/L5JO7ilQ_t.jpg',
        avatarHint: 'woman portrait',
        text: 'Tô arrepiada! Essas orações de proteção do Arcanjo Miguel são surreais. 😭🌟',
        likes: 267,
        time: '1 h',
    },
    {
        id: 12,
        name: 'Mateus Andrade',
        avatarUrl: 'https://thumbs2.imgbox.com/7b/b0/gsYWvBdF_t.jpg',
        avatarHint: 'man portrait',
        text: '3º dia de oração e recebi uma notícia maravilhosa hoje. Tenho certeza que foi intercessão de São Miguel. 🙌',
        likes: 198,
        time: '1 h',
    },
    {
        id: 13,
        name: 'Tânia Souza',
        avatarUrl: 'https://thumbs2.imgbox.com/3d/ae/bHEFsuqi_t.jpg',
        avatarHint: 'woman portrait',
        text: 'Estou fazendo as orações todos os dias. Sinto minha casa e minha família mais protegidas.',
        likes: 541,
        time: '1 h',
    },
    {
        id: 14,
        name: 'Roberto Menezes',
        avatarUrl: 'https://thumbs2.imgbox.com/14/e9/DUPvPss9_t.jpg',
        avatarHint: 'man portrait',
        text: 'Ouvi dizer que o vídeo vai sair do ar logo! Assistam antes que tirem!!',
        likes: 114,
        time: '1 h',
    },
    {
        id: 15,
        name: 'Rafaela Martins',
        avatarUrl: 'https://thumbs2.imgbox.com/dd/55/H0rZXQVM_t.jpg',
        avatarHint: 'woman portrait',
        text: 'Confiei no poder de São Miguel e hoje estou vivendo meu milagre! 🙏😭 Glória a Deus!',
        likes: 354,
        time: '1 h',
    },
    {
        id: 16,
        name: 'Ricardo Pereira',
        avatarUrl: 'https://thumbs2.imgbox.com/48/18/9JtnHEjz_t.png',
        avatarHint: 'man portrait',
        text: 'Senti a proteção do Arcanjo no meu trabalho. As coisas começaram a dar certo. Que loucura! 🙌',
        likes: 322,
        time: '1 h',
    },
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

const TestimonialCard = ({ id, name, username, avatarUrl, avatarHint, text, likes, time, replies }: (typeof testimonials)[0]) => (
    <div className="flex items-start gap-3 w-full text-left">
      <Avatar className="h-10 w-10 shrink-0">
        <AvatarImage src={avatarUrl} alt={name} data-ai-hint={avatarHint}/>
        <AvatarFallback className="bg-blue-300 text-blue-900">{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="bg-blue-800/50 rounded-xl p-3">
          <p className="font-bold text-sm text-amber-300">
            {name}
            {username && <span className="text-blue-300 font-normal ml-2">{username}</span>}
          </p>
          <p className="mt-1 text-sm text-blue-100">{text}</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-blue-300 mt-1 px-2">
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
        
        {replies && replies.length > 0 && (
          <div className="mt-2 pl-4">
            {replies.map(reply => (
              <div key={reply.id} className="flex items-start gap-3 w-full pt-4">
                  <Avatar className="h-8 w-8 shrink-0">
                    <AvatarImage src={reply.avatarUrl} alt={reply.name} data-ai-hint={reply.avatarHint}/>
                    <AvatarFallback className="bg-blue-300 text-blue-900 text-xs">{reply.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                   <div className="flex-1">
                    <div className="bg-blue-800/50 rounded-xl p-2">
                      <p className="font-bold text-xs text-amber-300">
                        {reply.name}
                        {reply.username && <span className="text-blue-300 font-normal ml-2">{reply.username}</span>}
                      </p>
                      <p className="mt-1 text-xs text-blue-100">{reply.text}</p>
                    </div>
                     <div className="flex items-center gap-2 text-xs text-blue-300 mt-1 px-2">
                        <button className="hover:underline font-bold">Curtir</button>
                        <span aria-hidden="true">·</span>
                        <button className="hover:underline font-bold">Responder</button>
                         <span aria-hidden="true">·</span>
                        <span>{reply.time}</span>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
);


const VideoPlayer = () => {
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
    
    return (
        <div 
            className="relative overflow-hidden rounded-lg shadow-2xl shadow-amber-500/20"
            dangerouslySetInnerHTML={{ __html: videoHtml }}
        />
    );
};

const BuyButtonArcanjoMiguel = () => {
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, 5 * 1000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/6d4a8c2c-5933-4ec4-a873-585f75d81a8b', '_self');
  };

  if (!showBuyButton) {
    // Reserve space to prevent layout shift
    return <div className="h-[52px]" />;
  }
  
  return (
      <Button
        size="lg"
        className="w-full max-w-md mx-auto bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold h-auto py-4 text-xl md:text-2xl animate-pulse whitespace-normal shadow-lg shadow-amber-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/40 transform hover:scale-105"
        onClick={handleBuyClick}
      >
        QUERO RECEBER AS ORAÇÕES AGORA
      </Button>
  );
}


export default function ArcanjoMiguelPage() {
    
    return (
        <div className="dark relative flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-gray-900 text-white overflow-x-hidden">
             <TopBanner />
             <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/gplay.png')]"></div>
            <main className="flex-grow container mx-auto px-4 py-8 md:py-12 z-10">
                <div className="max-w-3xl mx-auto space-y-12 text-center">

                    <section className="space-y-4">
                        <h1 className="text-3xl md:text-5xl font-bold uppercase text-amber-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">As 40 Orações Secretas do Arcanjo Miguel</h1>
                        <p className="text-lg md:text-xl font-medium text-amber-300">
                           Invoque o poder do Arcanjo para sua proteção, quebre as correntes que te prendem e abra as portas para os seus milagres.
                        </p>
                        <div className="p-4 bg-black/20 rounded-xl border border-blue-400/30 text-left max-w-lg mx-auto space-y-3">
                           <p className="flex items-start gap-3"><Check className="w-5 h-5 text-amber-300 mt-1 shrink-0"/><span>Orações traduzidas de manuscritos antigos do Vaticano.</span></p>
                           <p className="flex items-start gap-3"><Check className="w-5 h-5 text-amber-300 mt-1 shrink-0"/><span>Um escudo espiritual para proteger sua família, finanças e saúde.</span></p>
                           <p className="flex items-start gap-3"><Check className="w-5 h-5 text-amber-300 mt-1 shrink-0"/><span>Sinta a presença do Arcanjo Miguel agindo em sua vida em poucos dias.</span></p>
                        </div>
                    </section>
                    
                    <p className="font-bold text-amber-300 uppercase tracking-wider animate-pulse md:text-lg">
                        Assista ao vídeo abaixo e receba a sua bênção
                    </p>

                    <section>
                        <VideoPlayer />
                        <div className="mt-8 text-center">
                            <BuyButtonArcanjoMiguel />
                        </div>
                         <div className="mt-8 flex justify-center">
                            <Image
                            src="https://i.imgur.com/o8id6M2.png"
                            alt="Selo de Garantia"
                            width={600}
                            height={155}
                            className="rounded-lg shadow-md"
                            data-ai-hint="guarantee badge"
                            />
                        </div>
                    </section>
                    
                    <section>
                        <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">O que os fiéis dizem após 7 dias de oração:</h2>
                        <div className="space-y-6">
                            {testimonials.map((testimonial) => (
                                <TestimonialCard key={testimonial.id} {...testimonial} />
                            ))}
                        </div>
                    </section>

                    <section>
                         <h3 className="text-xl font-bold flex items-center justify-center gap-2"><Check className="w-6 h-6 text-green-400"/> Garantia de 7 Dias</h3>
                         <p className="mt-2 max-w-md mx-auto text-blue-200">Sua fé é nossa prioridade. Se em 7 dias você não sentir a paz e a proteção que busca, devolvemos sua contribuição. Sem perguntas.</p>
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