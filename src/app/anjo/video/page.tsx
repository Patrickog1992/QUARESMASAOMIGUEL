'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Heart, ThumbsUp } from 'lucide-react';
import { useEffect, useState } from 'react';

const comments = [
    {
        name: "Maria Cardoso",
        text: "Depois de ouvir os cantos, minha vida deu uma guinada que parecia impossível. Minhas dívidas foram quitadas de formas inesperadas, e hoje vivo uma abundância que nunca imaginei. São Miguel Arcanjo tem sido meu protetor em todas as batalhas.",
        time: "3 min",
        avatarUrl: "https://thumbs2.imgbox.com/3d/ae/bHEFsuqi_t.jpg",
        avatarHint: "woman portrait",
        likes: 1872
    },
    {
        name: "Juliana de Almeida",
        text: "Não sabia como superar as dificuldades financeiras que me sufocavam, mas ao me reconectar com meu anjo, senti uma paz imensa e em pouco tempo, as soluções começaram a surgir. Tenho certeza de que São Miguel me guiou para esse caminho.",
        time: "4 min",
        avatarUrl: "https://thumbs2.imgbox.com/dd/55/H0rZXQVM_t.jpg",
        avatarHint: "woman portrait",
        likes: 1534
    },
    {
        name: "Fátima do Rosário",
        text: "Eu estava no fundo do poço, mas esses cantos mudaram tudo. Em menos de um mês, consegui quitar dívidas, reorganizar minha vida e, finalmente, senti uma sensação de propósito.",
        time: "5 min",
        avatarUrl: "https://thumbs2.imgbox.com/65/6a/L5JO7ilQ_t.jpg",
        avatarHint: "woman portrait",
        likes: 2041
    },
    {
        name: "Rodrigo Carvalho",
        text: "Acordei de um sonho com São Miguel Arcanjo e, naquele mesmo dia, recebi a notícia de que uma oportunidade incrível havia surgido no trabalho. Desde então, tudo flui com tanta naturalidade que só posso agradecer.",
        time: "10 min",
        avatarUrl: "https://thumbs2.imgbox.com/14/e9/DUPvPss9_t.jpg",
        avatarHint: "man portrait",
        likes: 1210
    },
    {
        name: "Maria dos Santos",
        text: "Não tenho palavras para descrever o que senti ao ouvir os cantos. Meu negócio, que estava à beira da falência, agora prospera como nunca antes. Sinto que minha vida foi abençoada de maneira sobrenatural.",
        time: "16 min",
        avatarUrl: "https://thumbs2.imgbox.com/da/67/ajSKP3eY_t.jpg",
        avatarHint: "woman portrait",
        likes: 987
    },
    {
        name: "Lourdes Lima",
        text: "Sim Maria, depois que ouvi o canto minha vida mudou. Sonhei com números e ganhei 2mil reais quando joguei na loto, nem acreditei.",
        time: "14 min",
        avatarUrl: "https://thumbs2.imgbox.com/fc/13/RXzAe2rE_t.png",
        avatarHint: "woman portrait",
        likes: 845
    },
    {
        name: "Maria dos Santos",
        text: "Que ótimo Lourdes, muita sorte para nós!!",
        time: "10 min",
        avatarUrl: "https://thumbs2.imgbox.com/da/67/ajSKP3eY_t.jpg",
        avatarHint: "woman portrait",
        likes: 712
    },
    {
        name: "Gabriela Carvalho",
        text: "O mais surpreendente foi a forma como tudo mudou rapidamente. Eu me reconectei com meu propósito de vida e, como resultado, alcancei metas que antes pareciam impossíveis. Minha gratidão é imensa.",
        time: "35 min",
        avatarUrl: "https://thumbs2.imgbox.com/87/54/0dMM6ESV_t.png",
        avatarHint: "woman portrait",
        likes: 650
    },
    {
        name: "Fernando da Silva",
        text: "Sempre trabalhei duro, mas nunca saía do lugar. Após ouvir os cantos, oportunidades começaram a aparecer e, pela primeira vez, consegui poupar dinheiro e realizar sonhos antigos.",
        time: "52 min",
        avatarUrl: "https://thumbs2.imgbox.com/7b/b0/gsYWvBdF_t.jpg",
        avatarHint: "man portrait",
        likes: 523
    },
]

const VideoPlayer = () => {
    useEffect(() => {
        const scriptId = 'vturb-player-script-68a352b43bd6420abc99e73a';
        if (document.getElementById(scriptId)) return;

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = "https://scripts.converteai.net/90084bd8-d48f-4960-9f81-a9443a15af3d/players/68a352b43bd6420abc99e73a/v4/player.js";
        script.async = true;
        document.head.appendChild(script);
    }, []);

    const videoHtml = `<vturb-smartplayer id="vid-68a352b43bd6420abc99e73a" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;

    return (
        <div 
            className="aspect-w-16 aspect-h-9 mb-8 bg-black rounded-lg shadow-lg"
            dangerouslySetInnerHTML={{ __html: videoHtml }}
        />
    );
};

const CheckoutButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, (53 * 60 + 19) * 1000); // 53 minutes and 19 seconds
        
        return () => clearTimeout(timer);
    }, []);

    const handleCheckoutClick = () => {
        window.open('https://pay.kirvano.com/bdd2de1d-a765-4976-a730-73bab251260d', '_self');
    };

    if (!showButton) {
        // Reserve space to prevent layout shift
        return <div className="h-[92px] md:h-[108px]" />;
    }

    return (
        <div className="my-8 text-center">
            <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg md:text-xl py-6 md:py-8 px-6 md:px-12 uppercase animate-pulse shadow-lg h-auto whitespace-normal text-center w-full max-w-lg"
                onClick={handleCheckoutClick}
            >
                SIM ! QUERO A JORNADA DO MEU ANJO POR R$97,00
            </Button>
        </div>
    );
};


export default function AnjoVideoPage() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 text-amber-700 uppercase">O CANTO SAGRADO DE SÃO MIGUEL ARCANJO PARA MANIFESTAR EM 24HORAS</h1>
          <p className="text-center text-lg text-gray-600 mb-6 uppercase">OUÇA E MANIFESTE DINHEIRO AINDA HOJE!</p>

          <VideoPlayer />
          
          <CheckoutButton />
          
          <div className="space-y-6">
            <h2 className="font-bold text-lg">{comments.length} de 149 Comentários</h2>
            {comments.map((comment, index) => (
              <div key={index} className="flex items-start gap-3">
                <Avatar>
                  {comment.avatarUrl ? (
                    <AvatarImage src={comment.avatarUrl} alt={comment.name} data-ai-hint={comment.avatarHint} />
                  ) : null}
                  <AvatarFallback>{comment.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-xl p-3">
                    <p className="font-bold text-sm">{comment.name}</p>
                    <p className="mt-1 text-sm">{comment.text}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1 px-2">
                    <button className="hover:underline font-medium">Responder</button>
                    <span>·</span>
                    <button className="hover:underline font-medium">Curtir</button>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                        <ThumbsUp className="h-3 w-3 text-blue-500" />
                        <Heart className="h-3 w-3 text-red-500" fill="currentColor" />
                        <span className="ml-1">{comment.likes.toLocaleString('pt-BR')}</span>
                    </span>
                    <span>·</span>
                    <span>{comment.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
