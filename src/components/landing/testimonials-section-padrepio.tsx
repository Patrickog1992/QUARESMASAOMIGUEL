'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, ThumbsUp } from 'lucide-react';

const testimonials = [
    {
        id: 5,
        name: 'Reginaldo Manzotti',
        avatarUrl: 'https://thumbs2.imgbox.com/b9/08/pB4d3kjj_t.png',
        avatarHint: 'priest portrait',
        text: 'As orações do Padre Pio são um refúgio para a alma aflita. Elas fortalecem a fé e nos aproximam dos milagres. Recomendo que todos se permitam sentir essa graça.',
        likes: 2134,
        time: '3 h',
    },
    {
        id: 1,
        name: 'Frei Gilson',
        avatarUrl: 'https://thumbs2.imgbox.com/16/a6/bzjtDdJQ_t.png',
        avatarHint: 'priest portrait',
        text: 'Testemunhei o poder transformador das orações do Padre Pio. Elas são uma ponte direta para o coração de Deus. Assista ao vídeo e sinta essa conexão profunda.',
        likes: 2001,
        time: '1 h',
    },
    {
        id: 9,
        name: 'Patrícia Lima',
        avatarUrl: 'https://thumbs2.imgbox.com/da/67/ajSKP3eY_t.jpg',
        avatarHint: 'woman portrait',
        text: 'Meu marido estava desempregado há meses. Começamos a rezar com as orações do Padre Pio e ele conseguiu um emprego na mesma semana! A fé move montanhas! 🙌',
        likes: 412,
        time: '1 h',
    },
    {
        id: 10,
        name: 'João Pedro',
        avatarUrl: 'https://thumbs2.imgbox.com/72/dc/GT3YxWwY_t.jpg',
        avatarHint: 'man portrait',
        text: 'Senti uma paz imensa e uma presença inexplicável ao fazer a primeira oração. A intercessão do Padre Pio é real e poderosa. 🙏',
        likes: 341,
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


export function TestimonialsSectionPadrePio() {
    return (
        <section>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                O que os fiéis dizem sobre as orações do Padre Pio:
            </h2>
            <div className="space-y-6">
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} {...testimonial} />
                ))}
            </div>
        </section>
    )
}
