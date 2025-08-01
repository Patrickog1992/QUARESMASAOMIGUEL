
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Footer } from '@/components/landing/footer';
import { TestimonialCard, type Testimonial } from '@/components/landing/testimonial-card';
import { TopBanner } from '@/components/landing/top-banner';
import { ThumbsUp, Heart } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Santos',
    avatarUrl: 'https://thumbs2.imgbox.com/fc/13/RXzAe2rE_t.png',
    avatarHint: 'woman portrait',
    text: 'Eu estava desesperada com as dívidas. Fiz a oração com toda a minha fé. Uma semana depois, uma oportunidade de negócio que eu não esperava apareceu e mudou tudo. É um milagre, só pode ser!',
    likes: 2134,
    time: '3 h',
  },
  {
    id: 2,
    name: 'João Carlos Pereira',
    avatarUrl: 'https://thumbs2.imgbox.com/7b/b0/gsYWvBdF_t.jpg',
    avatarHint: 'man portrait',
    text: 'Meu pai estava muito doente e os médicos não davam esperança. Começamos a fazer a oração em família e ele apresentou uma melhora que nem a equipe médica soube explicar. A fé realmente move montanhas.',
    likes: 1897,
    time: '5 h',
  },
   {
    id: 3,
    name: 'Ana Luiza',
    avatarUrl: 'https://thumbs2.imgbox.com/eb/cb/zfODzSUu_t.png',
    avatarHint: 'woman portrait',
    text: 'Meu casamento estava em crise, quase acabando. A Chave de Cristo trouxe uma paz de volta para o nosso lar que há muito tempo não sentíamos. Estamos nos reconectando. Obrigada, meu Deus!',
    likes: 1654,
    time: '1 d',
  },
];

const VSLPlayer = () => {
    useEffect(() => {
        const scriptId = 'vid-688c931242446e639faf7b4d-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://scripts.converteai.net/e67d6b57-0257-406a-8870-de6c6124203c/players/688c931242446e639faf7b4d/v4/player.js';
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    const videoHtml = `<vturb-smartplayer id="vid-688c931242446e639faf7b4d" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>`;
    return (
        <div 
            className="relative overflow-hidden rounded-lg shadow-2xl bg-black aspect-video w-full"
            dangerouslySetInnerHTML={{ __html: videoHtml }}
        />
    );
};

const BuyButton = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, (15 * 60) * 1000); // 15 minutos

        return () => clearTimeout(timer);
    }, []);

    const handleBuyClick = () => {
        window.open('https://pay.kirvano.com/d9a4b3d2-c1e0-4b2a-8f5c-9d6e4a8b1a3e', '_self');
    };

    if (!show) {
        return <div className="h-[60px]" />;
    }

    return (
        <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg md:text-xl py-6 px-6 uppercase animate-pulse shadow-lg h-auto whitespace-normal w-full"
            onClick={handleBuyClick}
        >
            SIM, QUERO ACESSAR A ORAÇÃO SECRETA
        </Button>
    );
};


export default function ChaveDeCristoPage() {
    const [publishDate, setPublishDate] = useState('');

    useEffect(() => {
        const now = new Date();
        const date = now.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
        const time = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        setPublishDate(`${date} às ${time}`);
    }, []);

    return (
        <div className="bg-white text-black font-['Open_Sans',_sans-serif]">
            <TopBanner variant="news" text="ÚLTIMAS UNIDADES HOJE (coloque o dia)" />

            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <article>
                    <header className="border-b pb-4 mb-6">
                        <p className="text-primary font-bold text-lg">FÉ E RELIGIÃO</p>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 my-2 leading-tight">
                            A ‘Chave de Cristo’: Oração secreta guardada por séculos no Vaticano é revelada e relatos de milagres se espalham pelo Brasil.
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Documento antigo, traduzido por um frei brasileiro, contém oração que estaria ligada a curas, prosperidade e resolução de problemas impossíveis.
                        </p>
                        <p className="text-sm text-gray-500 mt-4">
                            Por Redação de Notícias da Fé | {publishDate}
                        </p>
                    </header>

                    <div className="prose prose-lg max-w-none text-gray-800">
                        <Image
                            src="https://i.imgur.com/v2wJ9pM.jpeg"
                            alt="Corredor do Vaticano"
                            width={800}
                            height={450}
                            className="rounded-lg mb-6 shadow-md"
                            data-ai-hint="vatican hallway"
                        />

                        <p>
                            Uma descoberta nos arquivos secretos do Vaticano está causando comoção entre os fiéis brasileiros. Trata-se de um manuscrito antigo, contendo uma oração poderosa conhecida como a “Chave de Cristo”. Segundo relatos, o documento foi revelado a um frei brasileiro durante uma visita a Roma, com a missão de divulgá-lo em um momento de grande necessidade espiritual.
                        </p>
                        
                        <p>
                            A oração, até então desconhecida do grande público, teria o poder de “destrancar” as portas do céu, permitindo que graças e milagres se manifestem rapidamente na vida de quem a reza com fé. O documento descreve a oração como uma ferramenta espiritual para problemas financeiros, de saúde, familiares e para obter paz de espírito.
                        </p>

                        <blockquote className="border-l-4 border-primary pl-4 italic my-6">
                            "É uma conexão direta com o sagrado. Não são apenas palavras, é uma frequência espiritual que alinha a alma com o poder divino," afirma o frei responsável pela tradução, que prefere manter o anonimato.
                        </blockquote>
                        
                        <p>
                           A notícia se espalhou rapidamente em grupos de oração, e os testemunhos começaram a surgir. Pessoas de todo o país relatam mudanças extraordinárias após iniciarem a prática da oração.
                        </p>
                        
                        <div className="my-8 p-4 bg-gray-100 rounded-lg">
                             <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Assista à reportagem completa e entenda o poder da oração:</h2>
                            <VSLPlayer />
                            <div className="mt-6 text-center">
                                <BuyButton />
                            </div>
                        </div>

                        <p>
                           Especialistas em história da Igreja e teólogos estão divididos. Alguns veem com ceticismo, enquanto outros apontam para a longa tradição de orações e devoções que surgem em momentos de crise e renovam a fé popular. O fato é que, para milhares de brasileiros, a “Chave de Cristo” já se tornou um símbolo de esperança e um caminho para o milagre.
                        </p>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4">
                            Comentários ({testimonialsData.length})
                        </h2>
                        <div className="space-y-6">
                             {testimonialsData.map((testimonial) => (
                               <div key={testimonial.id} className="flex items-start gap-3 w-full border-b pb-4">
                                    <Avatar className="h-10 w-10 shrink-0">
                                        <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.avatarHint}/>
                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <div className="bg-gray-100 rounded-xl p-3">
                                        <p className="font-bold text-sm text-gray-900">{testimonial.name}</p>
                                        <p className="mt-1 text-sm text-gray-800">{testimonial.text}</p>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1 px-2">
                                            <button className="hover:underline font-bold">Curtir</button>
                                            <span aria-hidden="true">·</span>
                                            <span>{testimonial.time}</span>
                                            <span className="flex items-center gap-1 ml-auto">
                                                <ThumbsUp className="h-4 w-4 text-gray-400" />
                                                <span className="ml-1">{testimonial.likes.toLocaleString('pt-BR')}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}
