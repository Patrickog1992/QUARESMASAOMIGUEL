
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Footer } from '@/components/landing/footer';
import { TestimonialCard, type Testimonial } from '@/components/landing/testimonial-card';
import { ThumbsUp, Heart, Menu, Search, Check } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SalesPopupChaveDeCristo } from '@/components/landing/SalesPopupChaveDeCristo';


const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Santos',
    avatarUrl: 'https://thumbs2.imgbox.com/fc/13/RXzAe2rE_t.png',
    avatarHint: 'woman portrait',
    text: 'Eu estava desesperada com as dívidas. Fiz a oração com toda a minha fé. Uma semana depois, uma oportunidade de negócio que eu não esperava apareceu e mudou tudo. É um milagre, só pode ser!',
    likes: 2134,
    time: '3 h',
  },
  {
    id: 2,
    name: 'João Carlos Pereira',
    avatarUrl: 'https://thumbs2.imgbox.com/7b/b0/gsYWvBdF_t.jpg',
    avatarHint: 'man portrait',
    text: 'Meu pai estava muito doente e os médicos não davam esperança. Começamos a fazer a oração em família e ele apresentou uma melhora que nem a equipe médica soube explicar. A fé realmente move montanhas.',
    likes: 1897,
    time: '5 h',
  },
   {
    id: 3,
    name: 'Ana Luiza',
    avatarUrl: 'https://thumbs2.imgbox.com/eb/cb/zfODzSUu_t.png',
    avatarHint: 'woman portrait',
    text: 'Meu casamento estava em crise, quase acabando. A Chave de Cristo trouxe uma paz de volta para o nosso lar que há muito tempo não sentíamos. Estamos nos reconectando. Obrigada, meu Deus!',
    likes: 1654,
    time: '1 d',
  },
    {
    id: 4,
    name: 'Roberto Menezes',
    avatarUrl: 'https://thumbs2.imgbox.com/14/e9/DUPvPss9_t.jpg',
    avatarHint: 'man portrait',
    text: 'Sempre fui muito cético, mas estava numa situação difícil e resolvi tentar. A serenidade que eu senti depois da oração é algo que não tem preço. As coisas começaram a se ajeitar.',
    likes: 987,
    time: '1 d',
  },
  {
    id: 5,
    name: 'Fernanda Lima',
    avatarUrl: 'https://thumbs2.imgbox.com/dd/55/H0rZXQVM_t.jpg',
    avatarHint: 'woman portrait',
    text: 'Meu filho não conseguia passar numa prova importante. Oramos com a Chave de Cristo e ele não só passou, como ficou em primeiro lugar. Agradeço todos os dias por essa bênção.',
    likes: 1123,
    time: '2 d',
  },
  {
    id: 6,
    name: 'Sandra B.',
    avatarUrl: 'https://thumbs2.imgbox.com/65/6a/L5JO7ilQ_t.jpg',
    avatarHint: 'woman portrait',
    text: 'Estava desempregada há meses, já sem esperança. Recebi a oração e no mesmo dia me ligaram para uma entrevista. Hoje estou trabalhando e muito feliz! Deus é fiel.',
    likes: 1345,
    time: '2 d'
    },
    {
    id: 7,
    name: 'Marcos T.',
    avatarUrl: 'https://thumbs2.imgbox.com/48/18/9JtnHEjz_t.png',
    avatarHint: 'man portrait',
    text: 'A paz que essa oração trouxe para a minha casa não tem explicação. Minha família estava sempre em conflito, agora vivemos em harmonia. É a Chave de Cristo agindo.',
    likes: 876,
    time: '3 d'
    },
    {
    id: 8,
    name: 'Camila G.',
    avatarUrl: 'https://i.imgur.com/example_avatar_1.png',
    avatarHint: 'woman portrait',
    text: 'Eu sentia uma angústia muito grande no peito. Depois que comecei a fazer a oração, essa sensação foi sumindo e dando lugar a uma calma que eu nunca tinha sentido. Recomendo para todos!',
    likes: 753,
    time: '4 d'
    },
    {
    id: 9,
    name: 'Juliana H.',
    avatarUrl: 'https://i.imgur.com/example_avatar_2.png',
    avatarHint: 'woman portrait',
    text: 'Meu negócio estava quase falindo. A oração da Chave de Cristo me deu força e clareza para tomar as decisões certas. Hoje, a empresa está se recuperando. Gratidão!',
    likes: 921,
    time: '4 d'
    },
];

const VSLPlayer = () => {
    useEffect(() => {
        const scriptId = 'vid-688ccd7bf5739e8702880e89-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://scripts.converteai.net/e67d6b57-0257-406a-8870-de6c6124203c/players/688ccd7bf5739e8702880e89/v4/player.js';
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    const videoHtml = `<vturb-smartplayer id="vid-688ccd7bf5739e8702880e89" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>`;
    return (
        <div 
            className="relative overflow-hidden w-full"
            dangerouslySetInnerHTML={{ __html: videoHtml }}
        />
    );
};

const TimedCheckoutButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, (18 * 60 + 50) * 1000); // 18 minutos e 50 segundos
  
      return () => clearTimeout(timer);
    }, []);

    const handleCheckoutClick = () => {
        window.open('https://pay.kirvano.com/99015503-c0de-4020-b89f-203a02684d7e', '_self');
    };
    
    return (
        <div className="mt-6 text-center">
            {showButton ? (
            <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg md:text-xl py-6 px-6 uppercase animate-pulse shadow-lg h-auto whitespace-normal w-full"
                onClick={handleCheckoutClick}
                >
                EU QUERO A CHAVE DE CRISTO
            </Button>
            ) : (
            <div className="h-[60px]" />
            )}
        </div>
    );
};


const StaticTopBanner = () => {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        });
        setCurrentDate(formattedDate);
    }, []);

    if (!currentDate) return null;

    const bannerText = `ÚLTIMAS UNIDADES HOJE (${currentDate})`;

    return (
        <div className="bg-red-700 text-white py-2 px-4 font-bold font-sans w-full">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Menu className="h-6 w-6" />
                    <span className="text-lg hidden sm:inline tracking-wider">NOTÍCIA</span>
                </div>
                <p className="text-sm md:text-base font-semibold text-center flex-grow px-2 uppercase tracking-wide">{bannerText}</p>
                <Search className="h-6 w-6" />
            </div>
        </div>
    );
};


export default function ChaveDeCristoPage() {
    const [publishDate, setPublishDate] = useState('');

    useEffect(() => {
        const now = new Date();
        const date = now.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const time = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        setPublishDate(`${date} às ${time}`);
    }, []);

    return (
        <div className="bg-white text-black font-sans">
            <StaticTopBanner />

            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <article>
                    <header className="border-b pb-4 mb-6">
                        <p className="text-primary font-bold text-lg">FÉ E RELIGIÃO</p>
                        <h1 className="text-3xl md:text-5xl font-bold text-red-600 my-2 leading-tight">
                            DESCOBERTO O MANUSCRITO SAGRADO DO GROTTO DE LOURDES QUE ESTÁ DESTRAVANDO MILAGRES EM 7 DIAS
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 flex items-start gap-2">
                          <Check className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                          <span>Milhares de Brasileiros estão ativando suas bençãos , curas e prosperidade com apenas 22 orações sagradas, chamadas de <span className="text-red-600 font-bold">CHAVE DE CRISTO</span></span>
                        </p>
                        <p className="text-sm text-gray-500 mt-4">
                            Por Redação de Notícias da Fé | {publishDate}
                        </p>
                    </header>

                    <div className="prose prose-lg max-w-none text-gray-800">
                        <div className="my-8">
                             <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Assista à reportagem completa e entenda o poder da oração:</h2>
                            <VSLPlayer />
                            <TimedCheckoutButton />
                        </div>

                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                            Comentários ({testimonialsData.length})
                        </h2>
                        <div className="space-y-6">
                             {testimonialsData.map((testimonial) => (
                               <div key={testimonial.id} className="flex items-start gap-3 w-full border-b pb-4">
                                    <Avatar className="h-10 w-10 shrink-0">
                                        <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.avatarHint}/>
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <div className="bg-gray-100 rounded-xl p-3">
                                        <p className="font-bold text-sm text-gray-900">{testimonial.name}</p>
                                        <p className="mt-1 text-sm text-gray-800">{testimonial.text}</p>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1 px-2">
                                            <button className="hover:underline font-bold">Curtir</button>
                                            <span aria-hidden="true">·</span>
                                            <span>{testimonial.time}</span>
                                            <span className="flex items-center gap-1 ml-auto">
                                                <ThumbsUp className="h-4 w-4 text-gray-400" />
                                                <span className="ml-1">{testimonial.likes.toLocaleString('pt-BR')}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
            <SalesPopupChaveDeCristo />
        </div>
    );
}
