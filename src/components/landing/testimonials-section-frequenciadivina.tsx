'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, ThumbsUp } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Frei Gilson',
        avatarUrl: 'https://thumbs2.imgbox.com/16/a6/bzjtDdJQ_t.png',
        avatarHint: 'priest portrait',
        text: 'A Frequência Divina é um tesouro espiritual. Quando a ouvi, senti uma clareza para a prosperidade que nunca havia experimentado. Ouçam com fé, e a sabedoria divina guiará vocês. Se você está aqui, é um sinal. 🙏',
        likes: 2134,
        time: '3 h'
    },
    {
        id: 3,
        name: 'Marcelo Rossi',
        avatarUrl: 'https://thumbs2.imgbox.com/4b/7d/zDjIQAwV_t.png',
        avatarHint: 'priest portrait',
        text: 'Vi de perto o poder desta frequência sagrada. Não são apenas sons, são uma conexão direta com a fonte da sabedoria divina. Assista ao vídeo e sinta essa bênção em sua vida.',
        likes: 2001,
        time: '1 h'
    },
    {
        id: 9,
        name: 'Patrícia Lima',
        avatarUrl: 'https://thumbs2.imgbox.com/da/67/ajSKP3eY_t.jpg',
        avatarHint: 'woman portrait',
        text: 'Meu negócio estava quase falindo. Ouvi a Frequência Divina por 7 dias. Hoje, fechamos um contrato que salvou nosso ano! 🙌',
        likes: 412,
        time: '1 h',
    },
    {
        id: 10,
        name: 'João Pedro',
        avatarUrl: 'https://thumbs2.imgbox.com/72/dc/GT3YxWwY_t.jpg',
        avatarHint: 'man portrait',
        text: 'Senti uma clareza e uma paz quando comecei a ouvir. A sabedoria da Frequência Divina é real! 🙏',
        likes: 341,
        time: '1 h',
    },
    {
        id: 15,
        name: 'Rafaela Martins',
        avatarUrl: 'https://thumbs2.imgbox.com/dd/55/H0rZXQVM_t.jpg',
        avatarHint: 'woman portrait',
        text: 'Confiei na Frequência Divina e hoje estou vivendo meu milagre financeiro! 🙏😭 Glória a Deus!',
        likes: 354,
        time: '1 h',
    },
];

const TestimonialCard = ({ id, name, avatarUrl, avatarHint, text, likes, time }: (typeof testimonials)[0]) => (
    <div className="flex items-start gap-3 w-full text-left">
      <Avatar className="h-10 w-10 shrink-0">
        <AvatarImage src={avatarUrl} alt={name} data-ai-hint={avatarHint}/>
        <AvatarFallback className="bg-amber-300 text-amber-900">{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="bg-gray-800/50 rounded-xl p-3">
          <p className="font-bold text-sm text-amber-300">{name}</p>
          <p className="mt-1 text-sm text-amber-100">{text}</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-amber-200 mt-1 px-2">
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
);

export function TestimonialsSectionFrequenciaDivina() {
    return (
        <section>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                O que dizem após ouvir a Frequência Divina:
            </h2>
            <div className="space-y-6">
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} {...testimonial} />
                ))}
            </div>
        </section>
    )
}
