'use client';

import type { Metadata } from 'next';
import Image from 'next/image';
import { Menu, Search, Smile, UserCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

// Using a simplified metadata approach for client components
// export const metadata: Metadata = {
//   title: 'Oração de Santo Antônio | Ao Vivo',
//   description: 'A oração de Santo Antônio escondida pela Maçonaria.',
// };

const YoutubeLogo = () => (
  <svg
    width="90"
    height="20"
    viewBox="0 0 90 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.99 19.14a2.9 2.9 0 01-2.05-.85 2.87 2.87 0 01-.85-2.05V3.76a2.87 2.87 0 01.85-2.05 2.9 2.9 0 012.05-.85c.78 0 1.45.29 2.05.85a2.87 2.87 0 01.85 2.05v12.48a2.87 2.87 0 01-.85 2.05 2.9 2.9 0 01-2.05.85zm0-2.3c.31 0 .58-.1.79-.31a2.12 2.12 0 00.32-.8V4.18a2.12 2.12 0 00-.32-.8 2.39 2.39 0 00-.79-.32 2.39 2.39 0 00-.8.32 2.12 2.12 0 00-.31.8v11.64c0 .33.1.6.31.8.22.22.49.31.8.31zM34.58 19.14a2.9 2.9 0 01-2.05-.85 2.87 2.87 0 01-.85-2.05V3.76a2.87 2.87 0 01.85-2.05 2.9 2.9 0 012.05-.85c.78 0 1.45.29 2.05.85a2.87 2.87 0 01.85 2.05v12.48a2.87 2.87 0 01-.85 2.05 2.9 2.9 0 01-2.05.85zm0-2.3c.31 0 .58-.1.79-.31a2.12 2.12 0 00.32-.8V4.18a2.12 2.12 0 00-.32-.8 2.39 2.39 0 00-.79-.32 2.39 2.39 0 00-.8.32 2.12 2.12 0 00-.31.8v11.64c0 .33.1.6.31.8.22.22.49.31.8.31zM44.49 19.34a5.2 5.2 0 01-2.33-.48 4.01 4.01 0 01-1.72-1.42l1.9-1.2a1.86 1.86 0 00.9.83c.32.17.66.25 1.02.25.38 0 .69-.07.9-.22.22-.15.33-.35.33-.61 0-.2-.07-.37-.2-.51a1.2 1.2 0 00-.53-.33 5.99 5.99 0 00-1.1-.33 8.33 8.33 0 01-2.14-.7 3.5 3.5 0 01-1.37-1.28c-.33-.5-.5-1.1-.5-1.81 0-.8.25-1.5.74-2.12a4.4 4.4 0 012-1.47 5.2 5.2 0 012.6-.53c.87 0 1.67.18 2.4.54a4.2 4.2 0 011.8 1.5l-1.98 1.2a2.3 2.3 0 00-1-.87 2.2 2.2 0 00-1.12-.31c-.39 0-.69.07-.89.22s-.3.35-.3.6c0 .2.06.36.19.49.13.13.3.24.52.34.22.09.5.18.84.28a7.83 7.83 0 012.21.72 3.4 3.4 0 011.6 1.5c.36.57.54 1.25.54 2.04 0 .84-.25 1.57-.74 2.19a4.47 4.47 0 01-2.04 1.47 5.7 5.7 0 01-2.8.54zM53.64 19.14a4.42 4.42 0 01-3.2-1.3l-.1.94-2.5.3V.94h2.55v11.75c0 .6.14 1.04.43 1.32.29.28.67.43 1.15.43.43 0 .78-.1 1.06-.3a2.3 2.3 0 00.67-.8V.94h2.55v17.4h-2.1l-.2-1.25a4.15 4.15 0 01-3.23 1.95zM60.7 13.94l-1.95-9.3h2.7l1.05 4.95c.18.87.32 1.55.42 2.05h.1c.07-.5.2-1.18.4-2.05l1.1-4.95h2.7l-1.94 9.3v5.4h-2.5v-5.4zM67.8 19.14a4.91 4.91 0 01-3.52-1.45A4.91 4.91 0 0162.83 14a4.91 4.91 0 011.45-3.52A4.91 4.91 0 0167.8 9a4.91 4.91 0 013.52 1.45A4.91 4.91 0 0172.77 14a4.91 4.91 0 01-1.45 3.52A4.91 4.91 0 0167.8 19.14zm0-2.29c.6 0 1.1-.2 1.52-.61.42-.4.63-.94.63-1.61 0-.67-.21-1.2-.63-1.6a2.12 2.12 0 00-1.52-.62 2.12 2.12 0 00-1.52.62c-.42.4-.63.93-.63 1.6 0 .67.21 1.2.63 1.61.42.4.92.61 1.52.61zM78.68 19.14a2.76 2.76 0 01-1.97-.83 2.8 2.8 0 01-.83-2V.94h2.55v15.22c0 .4.1.7.32.88.22.18.5.28.85.28.35 0 .63-.1.85-.28.22-.18.33-.48.33-.88V.94h2.55v15.37a2.8 2.8 0 01-.83 2 2.76 2.76 0 01-1.97.83zM89.04 19.34a5.2 5.2 0 01-2.33-.48 4.01 4.01 0 01-1.72-1.42l1.9-1.2a1.86 1.86 0 00.9.83c.32.17.66.25 1.02.25.38 0 .69-.07.9-.22.22-.15.33-.35.33-.61 0-.2-.07-.37-.2-.51a1.2 1.2 0 00-.53-.33 5.99 5.99 0 00-1.1-.33 8.33 8.33 0 01-2.14-.7 3.5 3.5 0 01-1.37-1.28c-.33-.5-.5-1.1-.5-1.81 0-.8.25-1.5.74-2.12a4.4 4.4 0 012-1.47 5.2 5.2 0 012.6-.53c.87 0 1.67.18 2.4.54a4.2 4.2 0 011.8 1.5l-1.98 1.2a2.3 2.3 0 00-1-.87 2.2 2.2 0 00-1.12-.31c-.39 0-.69.07-.89.22s-.3.35-.3.6c0 .2.06.36.19.49.13.13.3.24.52.34.22.09.5.18.84.28a7.83 7.83 0 012.21.72 3.4 3.4 0 011.6 1.5c.36.57.54 1.25.54 2.04 0 .84-.25 1.57-.74 2.19a4.47 4.47 0 01-2.04 1.47 5.7 5.7 0 01-2.8.54z"
      fill="#fff"
    ></path>
    <path
      d="M17.43 19.34c-1.72 0-3.1-.42-4.14-1.25a4.7 4.7 0 01-1.55-3.36h2.6c.07.86.4 1.52 1 1.97.6.45 1.38.68 2.34.68.8 0 1.47-.2 2.01-.6.54-.4.81-1 .81-1.81V.94h2.55v11.7c0 1.5-.42 2.62-1.25 3.36s-1.95 1.1-3.37 1.1A10.3 10.3 0 0115 18l.1-.95-2.5-.3v-2.1l.35.15c.53.22 1.1.33 1.7.33.63 0 1.16-.14 1.59-.43.43-.28.64-.7.64-1.25V.94h2.55v11.7c0 1.5-.42 2.62-1.25 3.36a3.8 3.8 0 01-2.73 1.11z"
      fill="#fff"
    ></path>
    <path
      d="M9.81 19.14a4.03 4.03 0 01-2.9-1.2A4.03 4.03 0 015.7.02l.15 2.85A1.8 1.8 0 006.37 14a1.8 1.8 0 001.35 1.79V19.14zM0 14a7 7 0 012.05-5.02A7 7 0 017.07 4a7 7 0 015.02 2.05A7 7 0 0114.14 14a7 7 0 01-2.05 5.02A7 7 0 017.07 21.07a7 7 0 01-5.02-2.05A7 7 0 010 14zm7.07-11.14a4.13 4.13 0 00-2.9 1.2 4.13 4.13 0 00-1.2 2.9c0 1.15.4 2.15 1.2 2.9a4.13 4.13 0 002.9 1.2c1.15 0 2.15-.4 2.9-1.2a4.13 4.13 0 001.2-2.9 4.13 4.13 0 00-1.2-2.9 4.13 4.13 0 00-2.9-1.2z"
      fill="#FF0000"
    ></path>
  </svg>
);

const chatMessages = [
  { name: 'Roberto Silva', message: 'Que Deus abençoe a todos! 🙏 Em nome de jesus' },
  { name: 'Carla Fernandes', message: 'Cheguei agora, o que tá acontecendo? Já começou?' },
  { name: 'Ediene Silva', message: 'ó Jesus e Maria fortalece minha vida e a de João Batista na união vinda de vós pelo espírito santo amém' },
  { name: 'Terezinha Souza', message: 'Amém, meu Deus! Só Tu és fiel ❤️' },
  { name: 'Sueli Andrade', message: 'Nossa, entrei bem na hora da oração… Graças a Deus 😇😇' },
  { name: 'André Luiz', message: 'Deus é maravilhoso! Amém 🙌' },
  { name: 'Paulo César', message: 'Santo Antônio, guia nossos passos!' },
  { name: 'Vera Lúcia', message: 'Abençoa, Senhor, cada família conectada nessa live 🙌🙌🙌' },
  { name: 'Iracema Nogueira', message: '❤️❤️❤️❤️❤️' },
  { name: 'Claudete Ferreira', message: 'Amén!! 🙏🙏🙏' },
  { name: 'Gilberto Lima', message: 'Poxa interessante uma Oração de 800 anos? Só pode ser de Deus mesmo' },
  { name: 'Regina Célia', message: 'Glória a Ti, Senhor! Estamos prontos 🙏' },
  { name: 'Marta de Jesus', message: 'Comecei a assistir agora… alguém já usou essa oração?' },
  { name: 'Eliane Ramos', message: '🙏🙏🙏' },
  { name: 'Equipe de Suporte', message: 'Sim, Marta! Milhares de pessoas já estão relatando curas, bênçãos financeiras e restauração familiar com essa Oração de 7 minutos de Santo Antônio. 🙌📿', isSupport: true },
  { name: 'Joana Lima', message: 'Amém, glória a Deus!' },
  { name: 'Neide Souza', message: 'Amém, amém, amém!!!' },
  { name: 'Paulo Vieira', message: '😇😇😇😇😇😇' },
  { name: 'Ana Paula', message: 'Amém 🙏 Deus é fiel' },
  { name: 'Adriana Gomes', message: 'Aleluia!!' },
  { name: 'Jacinta Feitosa', message: 'Bom dia peço oração pela minha família, minha filha, meu esposo e a mim. Principalmente pela conversão do meu esposo, livrai-nos de todos os perigos. E que o Espírito Santo esteja conosco.' },
  { name: 'Maria Rita', message: 'Aqui é a Maria Rita de Aparecida - SP. Peço oração para quitar 80 mil em dívidas de cartão de crédito e para abençoar os estudos dos netos…' },
  { name: 'Severiana Amorim', message: 'peço orações pela minha família' },
  { name: 'Cláudio Teixeira', message: 'Santo Antônio, me ajuda a pagar meu aluguel esse mês.' },
  { name: 'Lucas Bernardes', message: 'Sou de Goiânia. Posso pedir oração pelo meu negócio?' },
  { name: 'Marta Helena', message: 'Alguém mais sentindo uma paz diferente nesse momento?' },
  { name: 'Adriana Lins', message: 'Amados irmãos, vamos orar com fé 🙏' },
  { name: 'Alex Rodrigues', message: 'A minha família é uma benção...' },
  { name: 'Gerson Oliveira', message: 'Essa live vai ficar salva depois? Quero mandar pra minha mãe.' },
  { name: 'José da Silva', message: 'Sou o José da Silva de Fortaleza. peço uma bênção de um emprego para tirar a família das dificuldades e realizar o sonho da casa própria…' },
  { name: 'Henrique', message: 'Deus abençoe minha família, abre as portas de trabalho pra minha irmã Joyce.' },
  { name: 'Sérgio Lima', message: 'Esse canal é novo? Como nunca vi isso antes? Que benção🙏' },
  { name: 'Ivone Oliveira', message: 'Meu Senhor e Meu Deus,rezo hoje por todas as minhas intenções e por todos os que me pedem orações....' },
  { name: 'Tiene Delvalles', message: 'pela saúde de meus filos' },
  { name: 'Edhite Souza', message: 'Orações em ação de graças pela paz do mundo inteiro. 🙏' },
  { name: 'Rosana Oliveira', message: 'Peço orações pela cura da minha mãe que se encontra hospitalizada em estado grave🥺JESUS EU CREI MAS AUMENTA A MINHA FÉ 😭😭😭' },
  { name: 'Márcia Cardoso', message: 'Padre, sou a Márcia de BH. Peço oração pelo meu casamento e pelas minhas dores nas juntas e problemas de diabetes…' },
  { name: 'Margarida Maria', message: 'Padre peço sua benção pra minha familia pela converssão de todos.❤️' },
  { name: 'Beatriz Santos', message: 'pela cirurgia do coração da minha netinha Ária. Jesus eu confio em vós. 🙏🙏🙏🙏' },
  { name: 'Denize Michelle', message: 'Pelo meu matrimônio, meus filhos' },
  { name: 'Semirames', message: 'Rezo pela minha vida profissional, que Deus faça o melhor por mim.' },
  { name: 'Sandra', message: 'Padre, peça a Santo Antônio pra trazer meu marido de volta… ele saiu de casa faz 2 meses 😢' },
  { name: 'Carlos Eduardo', message: 'Ore pela minha mãe, Padre… ela está lutando contra um câncer e precisa de forças 🙏📿' },
  { name: 'Dona Terezinha', message: 'Peço oração pela minha filha que está com depressão… que Deus cure o coração dela 🙏' },
  { name: 'Cida Ramos', message: 'Amém! Que bênção 🙏' },
  { name: 'Elis Regina', message: 'A-M-É-M 🙌' },
  { name: 'Moisés Ribeiro', message: '59 mil pessoas e todas unidas em oração… é emocionante.' },
  { name: 'Marenilde Sousa', message: 'rezo pela minha família, pelos meus filhos, pela minha vida espiritual, financeira, sentimental e física' },
  { name: 'Luciana Mendes', message: 'Só pode ser algo muito poderoso mesmo' },
  { name: 'Roberto Carvalho', message: 'Acabei de pesquisar no Google, é realmente não tem anda parecido! que interessante Gloria a Deus' },
  { name: 'Delvita Silva', message: 'peço oração pela minha mãe que fez 103 anos' },
  { name: 'Eduardo Félix', message: 'Essa oração que tá sendo estudada pela Nasa? 😳' },
  { name: 'Aline Torres', message: 'COMO ASSIM a NASA tá estudando uma oração??? Serioo! 😳' },
  { name: 'Nogueira', message: '🙏🙏🙏🙏🫨🫨🫨' },
  { name: 'Gabriel Diniz', message: 'Uau! Não sabia que até os cientistas estão estudando isso.❤️' },
  { name: 'Cintia Barreto', message: 'Nunca ouvi nada parecido. Estou impactada.' },
  { name: 'Carlos Eduardo', message: 'Cientistas ateus confirmando??? Deus mostrando que é real!' },
  { name: 'Cristiane Luz', message: 'Isso é profético! 🙌' },
  { name: 'Valdirene Costa', message: '2000 anos? Só pode ser de Deus mesmo!' },
  { name: 'Everton Gomes', message: 'Agora faz sentido tudo que tenho vivido ultimamente' },
  { name: 'Cida Reis', message: 'Misericórdia Senhor de todos nós vossos filhos e filhas.' },
  { name: 'Douglas Ramos', message: 'Meu espírito confirma… isso é muito sério.' },
  { name: 'Gilsandra de Oliveira', message: 'Obrigada, Deus 🙏🙏🙏' },
  { name: 'Vania Lucia', message: 'SALVA o BRASIL Senhor JESUS 🙏🏻🙏🏻🙏🏻🇧🇷' },
  { name: 'Priscila', message: '🙌🙌🙌' },
  { name: 'Denise Rocha', message: 'Não é à toa que a Maçonaria escondeu isso' },
  { name: 'Heloísa Cardoso', message: 'Deus escolheu o momento certo pra revelar isso' },
  { name: 'Paulo G.', message: 'Eu sabia que os maçons escondiam algo secreto...' },
  { name: 'Lívia Santos', message: 'Então é isso que os judeus usam há séculos pra atrair riqueza? 😮✨' },
  { name: 'Ruth Cardoso', message: 'Eu sabia que o Neymar tinha esses segredinhos' },
  { name: 'Carlos M.', message: 'Luciano Huck?? Nunca imaginei ele envolvido nisso 😳' },
  { name: 'Patrícia Gomes', message: 'Se isso ajudou até Davi e Salomão… 🙌 já quero ouvir essa oração!' },
  { name: 'Cláudia Lima', message: 'Eu prometo usar essa oração pra ajudar minha família toda ❤️❤️' },
  { name: 'Tiene Delvalles', message: 'Meu Deus quanto famosos estão usando essa benção!!' },
  { name: 'Elizângela F.', message: 'Não é justo! A gente ralando todo dia e eles com esse segredo guardado Graças a Deus o Padre esta mostrado para a gente' },
  { name: 'Camila Andrade', message: 'Sinto que essa live vai mudar minha vida. Estou aqui por um propósito divino! Gloria a Deus ❤️' },
  { name: 'Fernanda Salomão', message: 'Obrigada por ter coragem de falar isso, padre! 🕊️' },
  { name: 'João Batista', message: 'Tô curioso… nunca vi o Padre assim tão sério 🙏' },
  { name: 'Carmem Lúcia', message: 'Gente, segura a emoção… lá vem bênção forte!' },
  { name: 'Mônica Vieira', message: 'Alguém mais tá com o coração batendo forte?' },
  { name: 'Paulo Sérgio', message: 'Algo me diz que isso vai mudar tudo… 🙌' },
  { name: 'Vera Lima', message: 'Que testemunhos lindos 🕊️😭' },
  { name: 'Eduardo Lima', message: 'Essa oração precisa ser espalhada pro mundo! Que coisa linda 😭' },
  { name: 'Renata Campos', message: 'Isso não tem como ser coincidência. É Deus!' },
  { name: 'Carlos Junior', message: 'quero esse milagre tbm 🙏' },
  { name: 'Tânia Rocha', message: 'Padre, como faço pra ouvir a oração todo dia?' },
  { name: 'Luciana Dantas', message: 'Amo vender doces também! Vou começar a fazer essa oração amanhã cedo' },
  { name: 'Carla Montes', message: 'Amém!! 🙏❤️' },
  { name: 'Cícera Maria', message: 'A fé move montanhas! Já tô com lágrimas nos olhos 😭' },
  { name: 'Tainá Moura', message: 'Chorei aqui… o milagre do casamento restaurado me pegou 😭' },
  { name: 'Francisco Silva', message: 'Amém Jesus! Que bênção ouvir esses relatos 🙏' },
  { name: 'Neide Rodrigues', message: 'Amém! Que oração maravilhosa, quero escutar ouvi-la!' },
  { name: 'Denise F.', message: 'Essa oração veio direto do céu!' },
  { name: 'Luciana Prado', message: 'Glória a Deus pela cura, padre! 🙏' },
  { name: 'Dona Nai', message: 'Eu também sinto dores fortes na coluna, vou fazer essa oração com fé! 😢' },
  { name: 'Vanessa Ribeiro', message: 'Gente, o padre tá falando que vai mudar tudo o que sabemos sobre milagres… Tô arrepiada 🙏' },
  { name: 'João Batista', message: 'Não conhecia o Padre Fernando, mas já senti uma paz só de ouvir ele 🙌' },
  { name: 'Gabriel Nogueira', message: 'Isso aqui tá diferente… não é live comum não. É coisa divina mesmo 🙏' },
  { name: 'Patrícia Silveira', message: 'Padre, é verdade que a oração funciona até pra quem tá afastado da fé? 😢' },
];

const ChatMessage = ({ name, message, isSupport = false }: { name: string; message: string; isSupport?: boolean }) => (
  <div className="flex items-start gap-2 p-2 hover:bg-white/10 rounded-md">
    <Avatar className="h-6 w-6">
      <AvatarImage src={`https://i.pravatar.cc/32?u=${name}`} alt={name} />
      <AvatarFallback>{name.charAt(0)}</AvatarFallback>
    </Avatar>
    <div className="flex-1">
      <span className={`text-sm font-semibold ${isSupport ? 'text-yellow-400' : 'text-neutral-400'}`}>{name}</span>
      <p className="text-sm text-white break-words">{message}</p>
    </div>
  </div>
);

export default function SantoAntonioPage() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-[#212121] border-b border-neutral-700 sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Menu className="h-6 w-6 text-white" />
          <YoutubeLogo />
        </div>
        <div className="flex-1 max-w-2xl mx-4 hidden sm:flex">
          <Input 
            placeholder="Pesquisar"
            className="bg-[#121212] border-neutral-700 rounded-l-full rounded-r-none h-10 px-4 flex-1 focus:ring-1 focus:ring-blue-500"
          />
          <Button variant="secondary" className="bg-neutral-700 hover:bg-neutral-600 rounded-r-full rounded-l-none h-10 px-6 border-l-0">
            <Search className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <UserCircle className="h-8 w-8 text-white" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row p-4 gap-4">
        {/* Video Section */}
        <div className="flex-1">
          <div className="aspect-video bg-black rounded-lg mb-4 flex items-center justify-center">
            <p className="text-neutral-400">[Simulação de Vídeo]</p>
          </div>
          <h1 className="text-xl font-bold mb-2 break-words">
            Padre Fernando Lisboa | A oração de Santo Antônio escondida pela Maçonaria por mais de 800 anos que tem trazido milagres a mais de 59 mil pessoas | Live Ao Vivo às 01:08, 28/06/2025.
          </h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://yt3.ggpht.com/ytc/AIdro_k3w_q8d-PQ1G1kL2Zo_3Bx-i2a-2jJdeN5fA=s48-c-k-c0x00ffffff-no-rj" alt="Fernando Lisboa" />
                <AvatarFallback>FL</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Fernando Lisboa</p>
                <p className="text-sm text-neutral-400">96 mil inscritos</p>
              </div>
            </div>
            <Button className="bg-white text-black font-semibold hover:bg-neutral-200 rounded-full">
              Inscrever-se
            </Button>
          </div>
        </div>

        {/* Chat Section */}
        <div className="w-full lg:w-96 lg:max-w-sm flex-shrink-0">
          <div className="bg-[#181818] rounded-lg border border-neutral-700 h-[calc(100vh-120px)] flex flex-col">
            <div className="p-4 border-b border-neutral-700">
              <h2 className="font-bold">Live chat</h2>
            </div>
            <ScrollArea className="flex-1 p-2">
              <div className="flex flex-col gap-2">
                {chatMessages.map((msg, index) => (
                  <ChatMessage key={index} name={msg.name} message={msg.message} isSupport={msg.isSupport} />
                ))}
              </div>
            </ScrollArea>
            <div className="p-4 border-t border-neutral-700">
              <div className="relative">
                <Input
                  placeholder="Chat..."
                  className="bg-[#121212] border-neutral-600 rounded-full h-10 pl-4 pr-10"
                />
                <Smile className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
