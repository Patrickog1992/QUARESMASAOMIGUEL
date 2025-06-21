import { TestimonialCard, type Testimonial } from './testimonial-card';

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Frei Gilson',
    avatarUrl: 'https://yt3.googleusercontent.com/ytc/AIdro_k4m_g_V3s-5h7z2t-Y-0g0Q4D8c4b9B6A9Z8E=s900-c-k-c0x00ffffff-no-rj',
    avatarHint: 'priest portrait',
    text: 'A Quaresma do Padre Pio é uma das experiências espirituais mais fortes que já vivi. Quando comecei a praticar essas orações, percebi mudanças reais na minha vida e na vida das pessoas que oravam comigo. Se você está aqui, é porque seu anjo quer te mostrar esse caminho 🙏',
    likes: 2134,
    time: '3 h',
    replies: [
      {
        id: 2,
        name: 'Maria Santos',
        username: '@FreiGilson',
        avatarUrl: 'https://placehold.co/100x100.png',
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
    avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Padre_Marcelo_Rossi_no_Hallel_de_Franca_2019.jpg/800px-Padre_Marcelo_Rossi_no_Hallel_de_Franca_2019.jpg',
    avatarHint: 'priest portrait',
    text: 'Eu vivi o que está nesse vídeo. A Quaresma do Padre Pio não é só um livro, é um encontro real com Deus. Quem fizer com fé, vai sentir a mudança. Assista até o final e se permita viver essa experiência!',
    likes: 2001,
    time: '1 h',
    replies: [
      {
        id: 4,
        name: 'Gleicy Costa',
        username: '@MarceloRossi',
        avatarUrl: 'https://placehold.co/100x100.png',
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
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XpD_xG1qP8L2hJ6w_X_tV6wR3Y_N5nQ&s',
    avatarHint: 'priest portrait',
    text: 'Essa oração reacendeu minha fé. A Quaresma do Padre Pio é mais do que uma devoção, é um presente direto do Céu. Se você está aqui, é porque essa bênção também é para você. Receba com fé!',
    likes: 1654,
    time: '1 h',
    replies: [
      {
        id: 6,
        name: 'Ana Luiza',
        username: '@ReginaldoManzotti',
        avatarUrl: 'https://placehold.co/100x100.png',
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
    avatarUrl: 'https://s2.glbimg.com/AYM2m0mJsiq9aK_A7sA4coKlw5E=/e.glbimg.com/og/ed/f/original/2020/09/25/padre-fabio-de-melo.jpeg',
    avatarHint: 'priest portrait',
    text: 'Essa oração tocou meu coração de um jeito que não consigo explicar. Que mais pessoas tenham essa chance. É forte demais.',
    likes: 1361,
    time: '1 h',
    replies: [
      {
        id: 8,
        name: 'Carlos Henrique',
        username: '@FabioDeMelo',
        avatarUrl: 'https://placehold.co/100x100.png',
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
    avatarUrl: 'https://placehold.co/100x100.png',
    avatarHint: 'woman portrait',
    text: 'Meu marido voltou a trabalhar depois de fazer a oração 7 dias seguidos! Deus é fiel! 🙌',
    likes: 412,
    time: '1 h',
  },
  {
    id: 10,
    name: 'João Pedro',
    avatarUrl: 'https://placehold.co/100x100.png',
    avatarHint: 'man portrait',
    text: 'Comecei a oração e uma luz invadiu meu quarto, foi lindo! 🙏',
    likes: 341,
    time: '1 h',
  },
  {
    id: 11,
    name: 'Luciana Silva',
    avatarUrl: 'https://placehold.co/100x100.png',
    avatarHint: 'woman portrait',
    text: 'Tô arrepiada! Essa oração das 3h é surreal. 😭🌟',
    likes: 267,
    time: '1 h',
  },
  {
    id: 12,
    name: 'Mateus Andrade',
    avatarUrl: 'https://placehold.co/100x100.png',
    avatarHint: 'man portrait',
    text: '3º dia de oração e recebi uma notícia maravilhosa hoje 🙌',
    likes: 198,
    time: '1 h',
  },
  {
    id: 13,
    name: 'Tânia Souza',
    avatarUrl: 'https://placehold.co/100x100.png',
    avatarHint: 'woman portrait',
    text: 'Tem alguém mais acordando às 3h pra orar? Eu tô!',
    likes: 541,
    time: '1 h',
  },
  {
    id: 14,
    name: 'Roberto Menezes',
    avatarUrl: 'https://placehold.co/100x100.png',
    avatarHint: 'man portrait',
    text: 'Ouvi dizer que o vídeo vai sair do ar logo! Assistam antes que tirem!!',
    likes: 114,
    time: '1 h',
  },
  {
    id: 15,
    name: 'Rafaela Martins',
    avatarUrl: 'https://placehold.co/100x100.png',
    avatarHint: 'woman portrait',
    text: 'Confiei e hoje estou vivendo meu milagre! 🙏😭 Glória a Deus!',
    likes: 354,
    time: '1 h',
  },
  {
    id: 16,
    name: 'Ricardo Pereira',
    avatarUrl: 'https://placehold.co/100x100.png',
    avatarHint: 'man portrait',
    text: 'Senti meu anjo tocando minha cabeça na oração de ontem às 3h! Que loucura! 🙌',
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
