'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, ThumbsUp } from 'lucide-react';

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

const TestimonialCard = ({ id, name, username, avatarUrl, avatarHint, text, likes, time, replies }: (typeof testimonials)[0]) => (
    <div className="flex items-start gap-3 w-full text-left">
      <Avatar className="h-10 w-10 shrink-0">
        <AvatarImage src={avatarUrl} alt={name} data-ai-hint={avatarHint}/>
        <AvatarFallback className="bg-amber-300 text-amber-900">{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div className="bg-gray-800/50 rounded-xl p-3">
          <p className="font-bold text-sm text-amber-300">
            {name}
            {username && <span className="text-amber-100 font-normal ml-2">{username}</span>}
          </p>
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
        
        {replies && replies.length > 0 && (
          <div className="mt-2 pl-4">
            {replies.map(reply => (
              <div key={reply.id} className="flex items-start gap-3 w-full pt-4">
                  <Avatar className="h-8 w-8 shrink-0">
                    <AvatarImage src={reply.avatarUrl} alt={reply.name} data-ai-hint={reply.avatarHint}/>
                    <AvatarFallback className="bg-amber-300 text-amber-900 text-xs">{reply.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                   <div className="flex-1">
                    <div className="bg-gray-800/50 rounded-xl p-2">
                      <p className="font-bold text-xs text-amber-300">
                        {reply.name}
                        {reply.username && <span className="text-amber-100 font-normal ml-2">{reply.username}</span>}
                      </p>
                      <p className="mt-1 text-xs text-amber-100">{reply.text}</p>
                    </div>
                     <div className="flex items-center gap-2 text-xs text-amber-200 mt-1 px-2">
                        <button className="hover:underline font-bold">Curtir</button>
                        <span aria-hidden="true">·</span>
                        <button className="hover:underline font-bold">Responder</button>
                         <span aria-hidden="true">·</span>
                        <span>{time}</span>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
);


export function TestimonialsSectionArcanjoMiguel() {
    return (
        <section>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                O que os fiéis dizem após as orações:
            </h2>
            <div className="space-y-6">
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} {...testimonial} />
                ))}
            </div>
        </section>
    )
}
