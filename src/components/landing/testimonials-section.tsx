import { TestimonialCard, type Testimonial } from './testimonial-card';

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Frei Gilson',
    avatarUrl: 'https://thumbs2.imgbox.com/16/a6/bzjtDdJQ_t.png',
    avatarHint: 'priest portrait',
    text: 'As Orações Originais são uma das experiências espirituais mais fortes que já vivi. Quando comecei a praticar essas orações, percebi mudanças reais na minha vida e na vida das pessoas que oravam comigo. Se você está aqui, é porque seu anjo quer te mostrar esse caminho 🙏',
    likes: 2134,
    time: '3 h',
    replies: [
      {
        id: 2,
        name: 'Maria Santos',
        username: '@FreiGilson',
        avatarUrl: 'https://thumbs2.imgbox.com/fc/13/RXzAe2rE_t.png',
        avatarHint: 'woman portrait',
        text: 'eu comecei ontem e hoje acordei com uma paz que nunca tinha sentido. 🙌🌟',
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
    text: 'Eu vivi o que está nesse vídeo. As Orações Originais não são só palavras, é um encontro real com Deus. Quem fizer com fé, vai sentir a mudança. Assista até o final e se permita viver essa experiência!',
    likes: 2001,
    time: '1 h',
    replies: [
      {
        id: 4,
        name: 'Gleicy Costa',
        username: '@MarceloRossi',
        avatarUrl: 'https://thumbs2.imgbox.com/87/54/0dMM6ESV_t.png',
        avatarHint: 'woman portrait',
        text: 'no final eu só conseguia chorar. É muito forte 😭 Obrigada por confirmar o que senti, padre!',
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
    text: 'Essa oração reacendeu minha fé. As Orações Originais são um presente direto do Céu. Se você está aqui, é porque essa bênção também é para você. Receba com fé!',
    likes: 1654,
    time: '1 h',
    replies: [
      {
        id: 6,
        name: 'Ana Luiza',
        username: '@ReginaldoManzotti',
        avatarUrl: 'https://thumbs2.imgbox.com/eb/cb/zfODzSUu_t.png',
        avatarHint: 'woman portrait',
        text: 'comecei hj e já sinto meu coracao diferente 🙌',
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
    text: 'Essa oração tocou meu coração de um jeito que não consigo explicar. Que mais pessoas tenham essa chance. É forte demais.',
    likes: 1361,
    time: '1 h',
    replies: [
      {
        id: 8,
        name: 'Carlos Henrique',
        username: '@FabioDeMelo',
        avatarUrl: 'https://thumbs2.imgbox.com/c3/9d/Qq4PQmYc_t.jpg',
        avatarHint: 'man portrait',
        text: 'meu pai chorou ouvindo. Tava afastado de Deus há anos. Hoje ele rezou comigo 🙏',
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
    text: 'Meu marido voltou a trabalhar depois de fazer a oração por 7 dias seguidos! Deus é fiel! 🙌',
    likes: 412,
    time: '1 h',
  },
  {
    id: 10,
    name: 'João Pedro',
    avatarUrl: 'https://thumbs2.imgbox.com/72/dc/GT3YxWwY_t.jpg',
    avatarHint: 'man portrait',
    text: 'Comecei a oração e uma luz invadiu meu quarto, foi lindo! 🙏',
    likes: 341,
    time: '1 h',
  },
  {
    id: 11,
    name: 'Luciana Silva',
    avatarUrl: 'https://thumbs2.imgbox.com/65/6a/L5JO7ilQ_t.jpg',
    avatarHint: 'woman portrait',
    text: 'Tô arrepiada! Essas 12 orações são surreais. 😭🌟',
    likes: 267,
    time: '1 h',
  },
  {
    id: 12,
    name: 'Mateus Andrade',
    avatarUrl: 'https://thumbs2.imgbox.com/7b/b0/gsYWvBdF_t.jpg',
    avatarHint: 'man portrait',
    text: '3º dia de oração e recebi uma notícia maravilhosa hoje 🙌',
    likes: 198,
    time: '1 h',
  },
  {
    id: 13,
    name: 'Tânia Souza',
    avatarUrl: 'https://thumbs2.imgbox.com/3d/ae/bHEFsuqi_t.jpg',
    avatarHint: 'woman portrait',
    text: 'Alguém mais sentindo uma energia diferente? Eu tô!',
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
    text: 'Confiei nas Orações Originais e hoje estou vivendo meu milagre! 🙏😭 Glória a Deus!',
    likes: 354,
    time: '1 h',
  },
  {
    id: 16,
    name: 'Ricardo Pereira',
    avatarUrl: 'https://thumbs2.imgbox.com/48/18/9JtnHEjz_t.png',
    avatarHint: 'man portrait',
    text: 'Senti um arrepio diferente ao recitar as orações! Que loucura! 🙌',
    likes: 322,
    time: '1 h',
  },
];


export function TestimonialsSection() {
  return (
    <section>
      <div className="space-y-6 max-w-2xl mx-auto">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
