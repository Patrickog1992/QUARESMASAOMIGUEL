'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, Search, Smile, UserCircle } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

type ChatMessageData = {
  name: string;
  message: string;
  isSupport?: boolean;
  avatarUrl?: string;
  avatarHint?: string;
};

const allChatMessages: ChatMessageData[] = [
    { name: 'Roberto Silva', message: 'Que a sabedoria do Rei Salomão abençoe a todos! 🙏', avatarUrl: 'https://thumbs2.imgbox.com/14/e9/DUPvPss9_t.jpg', avatarHint: 'man portrait' },
    { name: 'Carla Fernandes', message: 'Cheguei agora, já começou a revelação das orações?', avatarUrl: 'https://thumbs2.imgbox.com/dd/55/H0rZXQVM_t.jpg', avatarHint: 'woman portrait' },
    { name: 'Terezinha Souza', message: 'Amém, meu Deus! Só Tu és fiel ❤️', avatarUrl: 'https://thumbs2.imgbox.com/3d/ae/bHEFsuqi_t.jpg', avatarHint: 'woman portrait' },
    { name: 'André Luiz', message: 'A sabedoria de Salomão é maravilhosa! Amém 🙌', avatarUrl: 'https://thumbs2.imgbox.com/7b/b0/gsYWvBdF_t.jpg', avatarHint: 'man portrait' },
    { name: 'Regina Célia', message: 'Glória a Ti, Senhor! Estamos prontos para receber essa bênção 🙏', avatarUrl: 'https://thumbs2.imgbox.com/65/6a/L5JO7ilQ_t.jpg', avatarHint: 'woman portrait' },
    { name: 'Equipe de Suporte', message: 'Sim! Milhares de pessoas já estão relatando milagres financeiros e bênçãos com as orações do Rei Salomão. 🙌', isSupport: true },
    { name: 'Joana Lima', message: 'Amém, glória a Deus!', avatarUrl: 'https://thumbs2.imgbox.com/87/54/0dMM6ESV_t.png', avatarHint: 'woman portrait' },
    { name: 'Paulo Vieira', message: '😇😇😇😇😇😇', avatarUrl: 'https://thumbs2.imgbox.com/48/18/9JtnHEjz_t.png', avatarHint: 'man portrait' },
    { name: 'Lucas Bernardes', message: 'Sou de Goiânia. Posso pedir uma oração para o meu negócio prosperar?', avatarUrl: 'https://thumbs2.imgbox.com/72/dc/GT3YxWwY_t.jpg', avatarHint: 'man portrait' },
    { name: 'Marta Helena', message: 'Alguém mais sentindo uma paz diferente nesse momento?', avatarUrl: 'https://thumbs2.imgbox.com/da/67/ajSKP3eY_t.jpg', avatarHint: 'woman portrait' },
    { name: 'Rosana Oliveira', message: 'Peço orações pela cura da minha mãe que está hospitalizada. Rei Salomão, interceda por nós!', avatarUrl: 'https://thumbs2.imgbox.com/eb/cb/zfODzSUu_t.png', avatarHint: 'woman portrait' },
    { name: 'Carlos Eduardo', message: 'Ore pela minha mãe, por favor… ela está lutando contra um câncer e precisa de forças 🙏📿', avatarUrl: 'https://thumbs2.imgbox.com/c3/9d/Qq4PQmYc_t.jpg', avatarHint: 'man portrait' },
    { name: 'Lívia Santos', message: 'Então é isso que os sábios usam há séculos pra atrair riqueza? 😮✨' },
    { name: 'Ruth Cardoso', message: 'Eu sabia que os milionários tinham esses segredinhos.' },
    { name: 'Carlos M.', message: 'Silvio Santos usa isso?? Nunca imaginei 😳' },
    { name: 'Patrícia Gomes', message: 'Se isso ajudou até o Rei Salomão… 🙌 já quero ouvir essa oração!' },
    { name: 'Cláudia Lima', message: 'Eu prometo usar essa oração pra ajudar minha família toda ❤️❤️' },
    { name: 'Elizângela F.', message: 'Não é justo! A gente trabalhando todo dia e eles com esse segredo guardado. Graças a Deus foi revelado para nós.' },
    { name: 'Camila Andrade', message: 'Sinto que essa live vai mudar minha vida. Estou aqui por um propósito divino! Gloria a Deus ❤️' },
    { name: 'Fernanda Salomão', message: 'Obrigada por ter coragem de revelar isso, José! 🕊️' },
    { name: 'João Batista', message: 'Tô curioso… nunca ouvi falar sobre isso de forma tão clara. 🙏' },
    { name: 'Carmem Lúcia', message: 'Gente, segura a emoção… lá vem bênção forte!' },
    { name: 'Mônica Vieira', message: 'Alguém mais tá com o coração batendo forte?' },
    { name: 'Vera Lima', message: 'Que testemunhos lindos 🕊️😭' },
    { name: 'Eduardo Lima', message: 'Essa sabedoria precisa ser espalhada pro mundo! Que coisa linda 😭' },
    { name: 'Renata Campos', message: 'Isso não tem como ser coincidência. É Deus!' },
    { name: 'Carlos Junior', message: 'quero esse milagre pra minha vida financeira também 🙏' },
    { name: 'Tânia Rocha', message: 'Como faço pra ter acesso a todas as orações?' },
    { name: 'Cícera Maria', message: 'A fé move montanhas! Já tô com lágrimas nos olhos 😭' },
    { name: 'Francisco Silva', message: 'Amém Jesus! Que bênção ouvir esses relatos 🙏' },
    { name: 'Denise F.', message: 'Essa oração veio direto do céu!' },
    { name: 'Dona Nai', message: 'Eu também preciso de um milagre financeiro. Vou fazer essa oração com fé! 😢' },
    { name: 'Gabriel Nogueira', message: 'Isso aqui tá diferente… não é uma live comum. É coisa divina mesmo 🙏' },
    { name: 'Patrícia Silveira', message: 'É verdade que a oração funciona até pra quem tá afastado da fé? 😢' },
];

const ChatMessage = ({ name, message, avatarUrl, avatarHint, isSupport = false }: ChatMessageData) => (
  <div className="flex items-start gap-2 p-2 hover:bg-gray-200/50 rounded-md">
    <Avatar className="h-6 w-6">
      {avatarUrl ? <AvatarImage src={avatarUrl} alt={name} data-ai-hint={avatarHint} /> : <AvatarFallback className="bg-neutral-300 text-black text-xs">{name.charAt(0)}</AvatarFallback>}
    </Avatar>
    <div className="flex-1">
      <span className={`text-sm font-semibold ${isSupport ? 'text-yellow-500' : 'text-neutral-500'}`}>{name}</span>
      <p className="text-sm text-black break-words">{message}</p>
    </div>
  </div>
);

export default function FrequenciasDaCuraPage() {
  const [viewerCount] = useState(55452);
  const [liveTime, setLiveTime] = useState('');
  const [showBuyButton, setShowBuyButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBuyButton(true);
    }, 5 * 1000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const now = new Date();
    const time = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const date = now.toLocaleDateString('pt-BR');
    setLiveTime(`às ${time}, ${date}`);
  }, []);
  
  useEffect(() => {
    const scriptId = "vturb-player-script-68d55dd33cef69e1d154431b";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://scripts.converteai.net/b45e4a12-72fd-43f2-a7e4-73d6b242d5d9/players/68d55dd33cef69e1d154431b/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  const handleBuyClick = () => {
    window.open('https://pay.kirvano.com/42887aa4-262c-435e-b91c-42a8f8f4d849', '_self');
  };

  return (
    <div className="bg-white text-black font-sans">
      <header className="flex items-center justify-between px-4 py-2 bg-white border-b border-neutral-200 z-10">
        <div className="flex items-center gap-4 shrink-0">
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
        <div className="hidden sm:flex flex-1 justify-center px-4">
          <div className="w-full max-w-lg flex">
            <Input
              placeholder="Pesquisar"
              className="bg-white border-neutral-300 rounded-l-full rounded-r-none h-10 px-4 flex-1 focus:ring-1 focus:ring-blue-500 border-r-0"
            />
            <Button variant="secondary" className="bg-white hover:bg-gray-100 rounded-r-full rounded-l-none h-10 px-6 border border-neutral-300 border-l-0">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <Search className="h-6 w-6 text-neutral-800 sm:hidden" />
          <UserCircle className="h-8 w-8 text-neutral-800" />
        </div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-[1fr_402px]">
        {/* Video and Info Section */}
        <div className="flex flex-col px-4 lg:px-6 py-4">
          <div
            id="video-container"
            className="relative w-full bg-black aspect-video"
          >
            <div dangerouslySetInnerHTML={{ __html: `<vturb-smartplayer id="vid-68d55dd33cef69e1d154431b" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>` }} />
          </div>

          <div className="mt-8 text-center h-[76px] md:h-[92px]">
              <Button
                  size="lg"
                  className={cn(
                      "bg-green-600 hover:bg-green-700 text-white font-bold text-lg md:text-xl py-6 md:py-8 px-6 md:px-12 uppercase animate-pulse shadow-lg h-auto whitespace-normal w-full max-w-lg mx-auto transition-opacity duration-500",
                      showBuyButton ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}
                  onClick={handleBuyClick}
              >
                  EU QUERO ESSAS ORAÇÕES
              </Button>
          </div>

          <div className="mt-4">
            <h1 className="text-xl font-bold mb-1 break-words">
              Foi revelado as orações do Rei Salomão para ganhar milagres e benção divina
            </h1>
            <div className="text-sm text-neutral-600 mb-4">
              <span className="font-bold">{viewerCount.toLocaleString('pt-BR')} assistindo agora</span>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="https://media.atomicatpages.net/u/p4N19AiZlnhPlDEbsYMdAfxKjQk2/Pictures/share/pageHQGYeTB/iXjccx9971522.webp?quality=77#240159" alt="José Alvarenga" />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">José Alvarenga</p>
                  <p className="text-sm text-neutral-600">96 mil inscritos</p>
                </div>
              </div>
              <Button className="bg-black text-white font-semibold hover:bg-neutral-800 rounded-full">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div className="w-full border-t lg:border-t-0 lg:border-l flex flex-col">
          <div className="p-4 border-b shrink-0">
            <h2 className="font-bold">Live chat</h2>
          </div>
          <div className="flex-1 p-2">
            <div className="flex flex-col gap-2">
              {allChatMessages.map((msg, index) => (
                <ChatMessage key={index} {...msg} />
              ))}
            </div>
          </div>
          <div className="p-4 border-t bg-white shrink-0">
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
