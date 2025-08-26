'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, ThumbsUp } from 'lucide-react';

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
        const scriptId = 'vturb-player-script-68adb7b4bad9a934cfd7b884';
        if (document.getElementById(scriptId)) return;

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = "https://scripts.converteai.net/eaf579c8-6aa1-4f6f-b5bd-8ba46f9e23f8/players/68adb7b4bad9a934cfd7b884/v4/player.js";
        script.async = true;
        document.head.appendChild(script);
    }, []);

    const videoHtml = `<vturb-smartplayer id="vid-68adb7b4bad9a934cfd7b884" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;

    return (
        <div 
            className="w-full max-w-2xl rounded-lg shadow-lg"
            dangerouslySetInnerHTML={{ __html: videoHtml }}
        />
    );
};

export default function VideoPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
            <div className="w-full max-w-2xl mx-auto">
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
                    <Image
                        src="https://i.imgur.com/XH2eHXm.png"
                        alt="Garantia"
                        width={600}
                        height={200}
                        className="mx-auto"
                        data-ai-hint="guarantee seal"
                    />
                </div>
                
                <div className="my-8 h-16" />

                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-gray-800">
                        O que dizem sobre a Chave do Milagre:
                    </h2>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </div>
    );
}
