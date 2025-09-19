'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SalesPopupChaveDoMilagre } from '@/components/landing/SalesPopupChaveDoMilagre';

const testimonials = [
    {
        name: "Lúcia de Fátima",
        text: "Eu estava sem esperança, com dívidas e sentindo um vazio. No terceiro dia de oração com a Chave do Milagre, uma porta se abriu e consegui um novo emprego. É um milagre, não tenho outra palavra!",
        time: "2 h",
        avatarUrl: 'https://thumbs2.imgbox.com/fc/13/RXzAe2rE_t.png',
        avatarHint: 'woman portrait',
        likes: 1872
    },
    {
        name: "Carlos Alberto",
        text: "Meu casamento estava por um fio. Começamos a orar juntos usando a Chave do Milagre e a paz voltou para nossa casa. É como se a oração limpasse toda a energia negativa.",
        time: "5 h",
        avatarUrl: 'https://thumbs2.imgbox.com/c3/9d/Qq4PQmYc_t.jpg',
        avatarHint: 'man portrait',
        likes: 1534
    },
    {
        name: "Antônia Maria",
        text: "Sentia dores fortes no corpo que os médicos não explicavam. Depois que recebi a Chave do Milagre, as dores diminuíram até desaparecer. Sinto a proteção divina comigo. Obrigada!",
        time: "1 d",
        avatarUrl: 'https://thumbs2.imgbox.com/3d/ae/bHEFsuqi_t.jpg',
        avatarHint: 'woman portrait',
        likes: 2041
    },
    {
        name: "João Pedro",
        text: "Meu pequeno negócio não saía do lugar. Depois de começar as orações, as vendas aumentaram de uma forma que não consigo explicar. A Chave do Milagre abriu as portas da prosperidade para mim.",
        time: "1 d",
        avatarUrl: 'https://thumbs2.imgbox.com/72/dc/GT3YxWwY_t.jpg',
        avatarHint: 'man portrait',
        likes: 1129
    },
    {
        name: "Sofia Costa",
        text: "Eu me sentia perdida, sem direção. A oração me trouxe uma clareza e um propósito que eu não encontrava em lugar nenhum. Sinto que finalmente estou no caminho certo, graças a Deus.",
        time: "2 d",
        avatarUrl: 'https://thumbs2.imgbox.com/dd/55/H0rZXQVM_t.jpg',
        avatarHint: 'woman portrait',
        likes: 983
    },
    {
        name: "Ricardo Almeida",
        text: "Sofria com uma dor crônica nas costas há anos. Nenhum tratamento funcionava. Comecei a fazer as orações com a Chave do Milagre e a dor simplesmente sumiu. É uma cura divina.",
        time: "2 d",
        avatarUrl: 'https://thumbs2.imgbox.com/14/e9/DUPvPss9_t.jpg',
        avatarHint: 'man portrait',
        likes: 1344
    },
    {
        name: "Camila Gomes",
        text: "Não falava com meu filho há quase um ano. Depois de uma semana de oração, ele me ligou e nos reconciliamos. Foi o milagre que eu mais pedia. Gratidão eterna!",
        time: "3 d",
        avatarUrl: 'https://thumbs2.imgbox.com/87/54/0dMM6ESV_t.png',
        avatarHint: 'woman portrait',
        likes: 1765
    },
    {
        name: "Roberto Nunes",
        text: "As portas financeiras se abriram de uma forma que eu não esperava. Consegui pagar uma dívida que me assombrava há anos. A Chave do Milagre é real!",
        time: "4 d",
        avatarUrl: 'https://thumbs2.imgbox.com/7b/b0/gsYWvBdF_t.jpg',
        avatarHint: 'man portrait',
        likes: 1201
    },
    {
        name: "Beatriz Lima",
        text: "Eu estava desempregada e desesperançosa. No quinto dia de oração, recebi uma ligação para uma entrevista e fui contratada no mesmo dia. Foi Deus agindo através desta oração.",
        time: "4 d",
        avatarUrl: 'https://thumbs2.imgbox.com/65/6a/L5JO7ilQ_t.jpg',
        avatarHint: 'woman portrait',
        likes: 1422
    },
    {
        name: "Eduardo Santos",
        text: "Meu negócio familiar estava passando por uma crise terrível. A Chave do Milagre nos uniu em oração e, em poucos dias, encontramos uma solução que salvou nossa empresa. A fé move montanhas!",
        time: "5 d",
        avatarUrl: 'https://thumbs2.imgbox.com/48/18/9JtnHEjz_t.png',
        avatarHint: 'man portrait',
        likes: 1056
    },
    {
        name: "Vanessa Pereira",
        text: "A paz que eu senti ao fazer essas orações é indescritível. Ansiedade e medo foram embora, dando lugar à confiança e à fé. Minha vida está mais leve e abençoada.",
        time: "6 d",
        avatarUrl: 'https://thumbs2.imgbox.com/eb/cb/zfODzSUu_t.png',
        avatarHint: 'woman portrait',
        likes: 1689
    }
];

const TestimonialCard = ({ name, text, time, avatarUrl, avatarHint, likes }: (typeof testimonials)[0]) => (
    <div className="flex items-start gap-3 w-full text-left bg-gray-100 p-3 rounded-lg">
      <Avatar className="h-10 w-10 shrink-0">
        <AvatarImage src={avatarUrl} alt={name} data-ai-hint={avatarHint}/>
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <p className="font-bold text-sm">{name}</p>
        <p className="mt-1 text-sm">{text}</p>
        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
            <button className="hover:underline font-bold">Curtir</button>
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
);

const VideoPlayer = () => {
    useEffect(() => {
        const scriptId = 'vid-68cd57b7713fc4a51325407c-script';
        if (document.getElementById(scriptId)) return;

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = "https://scripts.converteai.net/b45e4a12-72fd-43f2-a7e4-73d6b242d5d9/players/68cd57b7713fc4a51325407c/v4/player.js";
        script.async = true;
        document.head.appendChild(script);
    }, []);

    const videoHtml = `<vturb-smartplayer id="vid-68cd57b7713fc4a51325407c" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;

    return (
        <div 
            className="w-full max-w-2xl rounded-lg shadow-lg"
            dangerouslySetInnerHTML={{ __html: videoHtml }}
        />
    );
};

const CheckoutButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 5 * 1000); // 5 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleCheckout = () => {
        window.open('https://pay.kirvano.com/b41415c6-cf8f-420d-98b8-ebe199c68121', '_self');
    };
    
    // Reserve space to prevent layout shift
    if (!showButton) {
        return <div className="h-[76px] md:h-[92px]" />;
    }

    return (
        <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg h-auto py-4 animate-pulse"
            onClick={handleCheckout}
        >
            QUERO A CHAVE DO MILAGRE
        </Button>
    );
}

export default function VideoPage() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        });
        setCurrentDate(formattedDate);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
            <div className="w-full max-w-2xl mx-auto">
                <div className="bg-red-600 text-white p-2 rounded-md mb-4 text-center font-bold">
                    ATENÇÃO: Devido ao grande número de acesso essa página vai estar dísponivel somente até: <span className="text-yellow-300">{currentDate}</span>
                </div>
                <Image
                    src="https://i.imgur.com/oU1Etag.png"
                    alt="Manuscrito Sagrado"
                    width={500}
                    height={150}
                    className="mb-8 rounded-lg mx-auto"
                    data-ai-hint="sacred manuscript"
                />
                <h1 className="text-2xl font-bold text-red-700 uppercase mb-6 max-w-xl mx-auto">
                    Tem uma MALDIÇÃO escondida travando tua vida, e HOJE ela vai cair por terra!
                </h1>
                <VideoPlayer />

                <div className="my-8">
                    <CheckoutButton />
                </div>

                <div className="my-8">
                    <Image
                        src="https://i.imgur.com/XH2eHXm.png"
                        alt="Garantia"
                        width={600}
                        height={200}
                        className="mx-auto"
                        data-ai-hint="guarantee seal"
                    />
                </div>
                
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-gray-800">
                        O que dizem sobre a Chave do Milagre:
                    </h2>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
            <SalesPopupChaveDoMilagre />
        </div>
    );
}
