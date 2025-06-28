'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Menu, Search, Smile, UserCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

type ChatMessageData = {
  name: string;
  message: string;
  isSupport?: boolean;
  avatarUrl?: string;
};

const allChatMessages: ChatMessageData[] = [
  { name: 'Roberto Silva', message: 'Que Deus abençoe a todos! 🙏 Em nome de jesus', avatarUrl: 'https://thumbs2.imgbox.com/14/e9/DUPvPss9_t.jpg' },
  { name: 'Carla Fernandes', message: 'Cheguei agora, o que tá acontecendo? Já começou?', avatarUrl: 'https://thumbs2.imgbox.com/dd/55/H0rZXQVM_t.jpg' },
  { name: 'Ediene Silva', message: 'ó Jesus e Maria fortalece minha vida e a de João Batista na união vinda de vós pelo espírito santo amém' },
  { name: 'Terezinha Souza', message: 'Amém, meu Deus! Só Tu és fiel ❤️', avatarUrl: 'https://thumbs2.imgbox.com/3d/ae/bHEFsuqi_t.jpg' },
  { name: 'Sueli Andrade', message: 'Nossa, entrei bem na hora da oração… Graças a Deus 😇😇' },
  { name: 'André Luiz', message: 'Deus é maravilhoso! Amém 🙌', avatarUrl: 'https://thumbs2.imgbox.com/7b/b0/gsYWvBdF_t.jpg' },
  { name: 'Paulo César', message: 'Santo Antônio, guia nossos passos!' },
  { name: 'Vera Lúcia', message: 'Abençoa, Senhor, cada família conectada nessa live 🙌🙌🙌' },
  { name: 'Iracema Nogueira', message: '❤️❤️❤️❤️❤️' },
  { name: 'Claudete Ferreira', message: 'Amén!! 🙏🙏🙏' },
  { name: 'Gilberto Lima', message: 'Poxa interessante uma Oração de 800 anos? Só pode ser de Deus mesmo' },
  { name: 'Regina Célia', message: 'Glória a Ti, Senhor! Estamos prontos 🙏', avatarUrl: 'https://thumbs2.imgbox.com/65/6a/L5JO7ilQ_t.jpg' },
  { name: 'Marta de Jesus', message: 'Comecei a assistir agora… alguém já usou essa oração?' },
  { name: 'Eliane Ramos', message: '🙏🙏🙏' },
  { name: 'Equipe de Suporte', message: 'Sim, Marta! Milhares de pessoas já estão relatando curas, bênçãos financeiras e restauração familiar com essa Oração de 7 minutos de Santo Antônio. 🙌📿', isSupport: true },
  { name: 'Joana Lima', message: 'Amém, glória a Deus!', avatarUrl: 'https://thumbs2.imgbox.com/87/54/0dMM6ESV_t.png' },
  { name: 'Neide Souza', message: 'Amém, amém, amém!!!' },
  { name: 'Paulo Vieira', message: '😇😇😇😇😇😇', avatarUrl: 'https://thumbs2.imgbox.com/48/18/9JtnHEjz_t.png' },
  { name: 'Ana Paula', message: 'Amém 🙏 Deus é fiel' },
  { name: 'Adriana Gomes', message: 'Aleluia!!' },
  { name: 'Jacinta Feitosa', message: 'Bom dia peço oração pela minha família, minha filha, meu esposo e a mim. Principalmente pela conversão do meu esposo, livrai-nos de todos os perigos. E que o Espírito Santo esteja conosco.' },
  { name: 'Maria Rita', message: 'Aqui é a Maria Rita de Aparecida - SP. Peço oração para quitar 80 mil em dívidas de cartão de crédito e para abençoar os estudos dos netos…' },
  { name: 'Severiana Amorim', message: 'peço orações pela minha família' },
  { name: 'Cláudio Teixeira', message: 'Santo Antônio, me ajuda a pagar meu aluguel esse mês.' },
  { name: 'Lucas Bernardes', message: 'Sou de Goiânia. Posso pedir oração pelo meu negócio?', avatarUrl: 'https://thumbs2.imgbox.com/72/dc/GT3YxWwY_t.jpg' },
  { name: 'Marta Helena', message: 'Alguém mais sentindo uma paz diferente nesse momento?', avatarUrl: 'https://thumbs2.imgbox.com/da/67/ajSKP3eY_t.jpg' },
  { name: 'Adriana Lins', message: 'Amados irmãos, vamos orar com fé 🙏' },
  { name: 'Alex Rodrigues', message: 'A minha família é uma benção...' },
  { name: 'Gerson Oliveira', message: 'Essa live vai ficar salva depois? Quero mandar pra minha mãe.' },
  { name: 'José da Silva', message: 'Sou o José da Silva de Fortaleza. peço uma bênção de um emprego para tirar a família das dificuldades e realizar o sonho da casa própria…' },
  { name: 'Henrique', message: 'Deus abençoe minha família, abre as portas de trabalho pra minha irmã Joyce.' },
  { name: 'Sérgio Lima', message: 'Esse canal é novo? Como nunca vi isso antes? Que benção🙏' },
  { name: 'Ivone Oliveira', message: 'Meu Senhor e Meu Deus,rezo hoje por todas as minhas intenções e por todos os que me pedem orações....' },
  { name: 'Tiene Delvalles', message: 'pela saúde de meus filos' },
  { name: 'Edhite Souza', message: 'Orações em ação de graças pela paz do mundo inteiro. 🙏' },
  { name: 'Rosana Oliveira', message: 'Peço orações pela cura da minha mãe que se encontra hospitalizada em estado grave🥺JESUS EU CREI MAS AUMENTA A MINHA FÉ 😭😭😭', avatarUrl: 'https://thumbs2.imgbox.com/eb/cb/zfODzSUu_t.png' },
  { name: 'Márcia Cardoso', message: 'Padre, sou a Márcia de BH. Peço oração pelo meu casamento e pelas minhas dores nas juntas e problemas de diabetes…' },
  { name: 'Margarida Maria', message: 'Padre peço sua benção pra minha familia pela converssão de todos.❤️' },
  { name: 'Beatriz Santos', message: 'pela cirurgia do coração da minha netinha Ária. Jesus eu confio em vós. 🙏🙏🙏🙏' },
  { name: 'Denize Michelle', message: 'Pelo meu matrimônio, meus filhos' },
  { name: 'Semirames', message: 'Rezo pela minha vida profissional, que Deus faça o melhor por mim.' },
  { name: 'Sandra', message: 'Padre, peça a Santo Antônio pra trazer meu marido de volta… ele saiu de casa faz 2 meses 😢' },
  { name: 'Carlos Eduardo', message: 'Ore pela minha mãe, Padre… ela está lutando contra um câncer e precisa de forças 🙏📿', avatarUrl: 'https://thumbs2.imgbox.com/c3/9d/Qq4PQmYc_t.jpg' },
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

const ChatMessage = ({ name, message, avatarUrl, isSupport = false }: ChatMessageData) => (
  <div className="flex items-start gap-2 p-2 hover:bg-gray-200/50 rounded-md">
    <Avatar className="h-6 w-6">
      {avatarUrl ? <AvatarImage src={avatarUrl} alt={name} /> : <AvatarFallback className="bg-neutral-300 text-black text-xs">{name.charAt(0)}</AvatarFallback>}
    </Avatar>
    <div className="flex-1">
      <span className={`text-sm font-semibold ${isSupport ? 'text-yellow-500' : 'text-neutral-500'}`}>{name}</span>
      <p className="text-sm text-black break-words">{message}</p>
    </div>
  </div>
);

export default function SantoAntonioPage() {
  const [viewerCount, setViewerCount] = useState(55452);
  const [displayedMessages, setDisplayedMessages] = useState<ChatMessageData[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [liveTime, setLiveTime] = useState('');

  useEffect(() => {
    const scriptId = "converteai-v4-script-santoantonio";
    if (document.getElementById(scriptId)) {
        return; 
    }
    const s = document.createElement("script");
    s.id = scriptId;
    s.src = "https://scripts.converteai.net/62757a1b-3965-4814-8cfb-7803a2e429e1/players/685f710952325b14a81dc1dd/v4/player.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  useEffect(() => {
    setDisplayedMessages(allChatMessages.slice(0, 15));

    const now = new Date();
    const time = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString('pt-BR');
    setLiveTime(`às ${time}, ${date}`);
  }, []);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setViewerCount(prevCount => prevCount + Math.floor(Math.random() * 21) - 10);
    }, 3000);

    let messageIndex = 15;
    const messageInterval = setInterval(() => {
      if (messageIndex < allChatMessages.length) {
        setDisplayedMessages(prevMessages => [...prevMessages, allChatMessages[messageIndex]]);
        messageIndex++;
      }
    }, 2500);

    return () => {
      clearInterval(countInterval);
      clearInterval(messageInterval);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [displayedMessages]);

  return (
    <div className="bg-white text-black h-screen max-h-screen font-sans flex flex-col">
      <header className="flex items-center justify-between px-4 py-2 bg-white border-b border-neutral-200 z-10 flex-shrink-0">
        <div className="flex items-center gap-4">
          <Menu className="h-6 w-6 text-neutral-800" />
          <Image
            src="https://classic.exame.com/wp-content/uploads/2017/08/new-youtube-logo-840x402.jpg"
            alt="YouTube Logo"
            width={90}
            height={20}
            className="object-contain"
            data-ai-hint="youtube logo"
          />
        </div>
        <div className="flex-1 max-w-2xl mx-4 hidden sm:flex">
          <Input 
            placeholder="Pesquisar"
            className="bg-gray-100 border-neutral-300 rounded-l-full rounded-r-none h-10 px-4 flex-1 focus:ring-1 focus:ring-blue-500 border-r-0"
          />
          <Button variant="secondary" className="bg-gray-100 hover:bg-gray-200 rounded-r-full rounded-l-none h-10 px-6 border border-neutral-300 border-l-0">
            <Search className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <UserCircle className="h-8 w-8 text-neutral-800" />
        </div>
      </header>

      <main className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="bg-black rounded-lg mb-4">
            <div id="vid-685f710952325b14a81dc1dd" style={{ display: 'block', margin: '0 auto', width: '100%' }}></div>
          </div>
          <h1 className="text-xl font-bold mb-1 break-words">
            Padre Fernando Lisboa | A oração de Santo Antônio escondida pela Maçonaria por mais de 800 anos que tem trazido milagres a mais de 59 mil pessoas | Live Ao Vivo {liveTime && `${liveTime}.`}
          </h1>
          <div className="text-sm text-neutral-600 mb-4">
            <span className="font-bold">{viewerCount.toLocaleString('pt-BR')} assistindo agora</span>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://xn--oraaosecreta-mdb.site/live/images/osa_foto_perfil_padre.webp" alt="Fernando Lisboa" />
                <AvatarFallback>FL</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Fernando Lisboa</p>
                <p className="text-sm text-neutral-600">96 mil inscritos</p>
              </div>
            </div>
            <Button className="bg-black text-white font-semibold hover:bg-neutral-800 rounded-full">
              Inscrever-se
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-96 lg:max-w-sm flex flex-col flex-shrink-0 border-t lg:border-t-0 lg:border-l border-neutral-200 bg-gray-50">
          <div className="p-4 border-b border-neutral-200 flex-shrink-0">
            <h2 className="font-bold">Live chat</h2>
          </div>
          <ScrollArea className="flex-1 p-2">
            <div className="flex flex-col gap-2">
              {displayedMessages.map((msg, index) => (
                <ChatMessage key={index} {...msg} />
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          <div className="p-4 border-t border-neutral-200 bg-gray-50 flex-shrink-0">
            <div className="relative">
              <Input
                placeholder="Chat..."
                className="bg-white border-neutral-300 rounded-full h-10 pl-4 pr-10"
                disabled
              />
              <Smile className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
