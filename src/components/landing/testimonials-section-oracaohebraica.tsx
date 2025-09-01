'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, ThumbsUp } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Rabino David',
        avatarUrl: 'https://thumbs2.imgbox.com/16/a6/bzjtDdJQ_t.png',
        avatarHint: 'priest portrait',
        text: 'As orações hebraicas são um tesouro de sabedoria ancestral. Quando as recitei, senti uma clareza para a prosperidade que nunca havia experimentado. Rezem com fé, e a sabedoria divina guiará vocês. Se você está aqui, não é por acaso, é um chamado. 🙏',
        likes: 2134,
        time: '3 h',
        replies: [
          {
            id: 2,
            name: 'Sara Levi',
            username: '@RabinoDavid',
            avatarUrl: 'https://thumbs2.imgbox.com/fc/13/RXzAe2rE_t.png',
            avatarHint: 'woman portrait',
            text: 'Rabino, comecei a orar e sinto uma paz e uma direção que não sentia há anos. Obrigada por compartilhar essa bênção! 🙌',
            likes: 254,
            time: '3 h',
          },
        ],
    },
    {
        id: 3,
        name: 'Mestre Cohen',
        avatarUrl: 'https://thumbs2.imgbox.com/4b/7d/zDjIQAwV_t.png',
        avatarHint: 'priest portrait',
        text: 'Vi de perto o poder destas palavras sagradas. Não são apenas sons, são uma conexão direta com a fonte da criação. Assista ao vídeo e sinta a sabedoria divina em sua vida.',
        likes: 2001,
        time: '1 h',
        replies: [
          {
            id: 4,
            name: 'Leah Silva',
            username: '@MestreCohen',
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
        name: 'Isaac Goldstein',
        avatarUrl: 'https://thumbs2.imgbox.com/b9/08/pB4d3kjj_t.png',
        avatarHint: 'priest portrait',
        text: 'As orações hebraicas são um presente do céu para os momentos de decisão. Elas renovam a fé e trazem a certeza da direção divina. Receba essa graça em sua vida!',
        likes: 1654,
        time: '1 h',
        replies: [
          {
            id: 6,
            name: 'Rebeca Almeida',
            username: '@IsaacGoldstein',
            avatarUrl: 'https://thumbs2.imgbox.com/eb/cb/zfODzSUu_t.png',
            avatarHint: 'woman portrait',
            text: 'Comecei hoje e já me sinto mais sábia para enfrentar meus problemas. 🙌',
            likes: 135,
            time: '1 h',
          },
        ],
    },
    {
        id: 7,
        name: 'Professor Mizrahi',
        avatarUrl: 'https://thumbs2.imgbox.com/5a/9a/LSUTrLtZ_t.png',
        avatarHint: 'priest portrait',
        text: 'Há orações que nos tocam de forma única. As hebraicas têm uma força especial. Que mais pessoas possam ter acesso a essa fonte de sabedoria.',
        likes: 1361,
        time: '1 h',
        replies: [
        {
            id: 8,
            name: 'Carlos Henrique',
            username: '@ProfessorMizrahi',
            avatarUrl: 'https://thumbs2.imgbox.com/c3/9d/Qq4PQmYc_t.jpg',
            avatarHint: 'man portrait',
            text: 'Meu pai chorou ouvindo. Ele estava perdido nos negócios. Hoje ele rezou comigo, pedindo a sabedoria divina. 🙏',
            likes: 318,
            time: '2 d',
        },
        ],
    },
    {
        id: 9,
        name: 'Ester Ferreira',
        avatarUrl: 'https://thumbs2.imgbox.com/da/67/ajSKP3eY_t.jpg',
        avatarHint: 'woman portrait',
        text: 'Meu negócio estava quase falindo. Fiz as orações hebraicas por 7 dias. Hoje, fechamos um contrato que salvou nosso ano! 🙌',
        likes: 412,
        time: '1 h',
    },
    {
        id: 10,
        name: 'Davi Santos',
        avatarUrl: 'https://thumbs2.imgbox.com/72/dc/GT3YxWwY_t.jpg',
        avatarHint: 'man portrait',
        text: 'Senti uma clareza e uma paz quando comecei a orar. A sabedoria dessas orações é real! 🙏',
        likes: 341,
        time: '1 h',
    },
    {
        id: 11,
        name: 'Raquel Silva',
        avatarUrl: 'https://thumbs2.imgbox.com/65/6a/L5JO7ilQ_t.jpg',
        avatarHint: 'woman portrait',
        text: 'Tô arrepiada! Essas orações para prosperidade são surreais. 😭🌟',
        likes: 267,
        time: '1 h',
    },
    {
        id: 12,
        name: 'Samuel Andrade',
        avatarUrl: 'https://thumbs2.imgbox.com/7b/b0/gsYWvBdF_t.jpg',
        avatarHint: 'man portrait',
        text: '3º dia de oração e recebi uma notícia maravilhosa sobre um investimento antigo. 🙌',
        likes: 198,
        time: '1 h',
    },
    {
        id: 13,
        name: 'Tânia Souza',
        avatarUrl: 'https://thumbs2.imgbox.com/3d/ae/bHEFsuqi_t.jpg',
        avatarHint: 'woman portrait',
        text: 'Estou fazendo as orações todos os dias. Sinto minhas finanças e minha casa mais prósperas.',
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
        text: 'Confiei na sabedoria antiga e hoje estou vivendo meu milagre financeiro! 🙏😭 Glória a Deus!',
        likes: 354,
        time: '1 h',
    },
    {
        id: 16,
        name: 'Ricardo Pereira',
        avatarUrl: 'https://thumbs2.imgbox.com/48/18/9JtnHEjz_t.png',
        avatarHint: 'man portrait',
        text: 'Senti a sabedoria em minhas decisões no trabalho. As coisas começaram a dar certo. Que loucura! 🙌',
        likes: 322,
        time: '1 h',
    },
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


export function TestimonialsSectionOracaoHebraica() {
    return (
        <section>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                O que dizem após as orações:
            </h2>
            <div className="space-y-6">
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} {...testimonial} />
                ))}
            </div>
        </section>
    )
}
