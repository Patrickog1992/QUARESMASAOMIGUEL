'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, BookOpen, Mic, FileText, Star, ShieldCheck, ThumbsUp, Heart } from 'lucide-react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ProgressBar = ({ label, percentage, color }: {label: string, percentage: number, color: string}) => (
    <div>
        <p className="font-semibold">{label}</p>
        <div className="bg-gray-700 rounded-full h-4 mt-1">
            <div 
                className={`${color} h-4 rounded-full text-xs text-white flex items-center justify-center`}
                style={{ width: `${percentage}%`}}
            >
                {percentage}%
            </div>
        </div>
        <p className="text-sm font-bold mt-1" style={{ color: color.startsWith('bg-red') ? '#f87171' : '#4ade80' }}>
            {percentage < 50 ? 'Fraco' : 'Ótimo'}
        </p>
    </div>
);

const testimonials = [
    {
        quote: "Estava sem esperança, com dívidas e sentindo um vazio. No terceiro dia de oração, uma porta se abriu e consegui um novo emprego. É um milagre, não tenho outra palavra!",
        author: "Amanda R., Vitória - ES",
        avatarUrl: 'https://thumbs2.imgbox.com/fc/13/RXzAe2rE_t.png',
        avatarHint: 'woman portrait',
    },
    {
        quote: "Meu casamento estava por um fio. Começamos a orar juntos e a paz voltou para nossa casa. É como se a oração limpasse toda a energia negativa.",
        author: "José M., Belo Horizonte - MG",
        avatarUrl: 'https://thumbs2.imgbox.com/c3/9d/Qq4PQmYc_t.jpg',
        avatarHint: 'man portrait',
    },
    {
        quote: "Sentia dores fortes no corpo que os médicos não explicavam. Depois que recebi o método, as dores diminuíram até desaparecer. Sinto a proteção divina comigo. Obrigada!",
        author: "Eliane F., Guarulhos - SP",
        avatarUrl: 'https://thumbs2.imgbox.com/3d/ae/bHEFsuqi_t.jpg',
        avatarHint: 'woman portrait',
    }
];

const TestimonialCard = ({ quote, author, avatarUrl, avatarHint }: (typeof testimonials)[0]) => (
    <Card className="bg-gray-800/50 p-4 shadow-lg text-left">
        <div className="flex items-start gap-4">
            <Avatar className="h-12 w-12 shrink-0">
                <AvatarImage src={avatarUrl} alt={author} data-ai-hint={avatarHint}/>
                <AvatarFallback>{author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
                <p className="italic text-amber-100">“{quote}”</p>
                <p className="font-bold text-amber-300 mt-2">- {author}</p>
            </div>
        </div>
    </Card>
);

const faqItems = [
    {
        question: "Como vou receber o material?",
        answer: "O acesso é 100% digital. Assim que sua contribuição for confirmada, você receberá um e-mail com todas as instruções e links para acessar o conteúdo. O acesso é imediato e vitalício."
    },
    {
        question: "A compra é segura?",
        answer: "Sim, totalmente segura. O pagamento é processado por uma das maiores e mais seguras plataformas de produtos digitais do Brasil. Seus dados estão protegidos."
    },
    {
        question: "E se eu não gostar?",
        answer: "Sua satisfação é nossa prioridade. Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não se sentir tocado pelo material, basta nos enviar um e-mail e devolveremos 100% do valor da sua contribuição."
    }
]

export default function OfertaPage() {

    const handleCheckout = () => {
        window.open('https://pay.kirvano.com/45c712e5-0d56-4587-80a6-a0ae291fcfe5', '_self');
    };

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="w-full max-w-4xl space-y-12">
                <Image
                    src="https://i.imgur.com/EfI6zuh.png"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="mx-auto"
                    data-ai-hint="logo icon"
                />
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <Card className="bg-gray-800/50 backdrop-blur-sm border-amber-400/30">
                        <CardHeader>
                            <CardTitle className="text-amber-300">Antes do Método Mente em Paz</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Image src="https://media.inlead.cloud/uploads/36089/2025-09-01/md-j6wPd-masterclass-39.png" alt="Antes" width={400} height={225} className="rounded-lg mx-auto" data-ai-hint="anxious brain"/>
                            <ProgressBar label="Nível da Saúde Mental" percentage={20} color="bg-red-500" />
                            <ProgressBar label="Nível da sua confiança" percentage={22} color="bg-red-500" />
                        </CardContent>
                    </Card>
                     <Card className="bg-gray-800/50 backdrop-blur-sm border-amber-400/30">
                        <CardHeader>
                            <CardTitle className="text-amber-300">Depois do Método Mente em Paz</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Image src="https://media.inlead.cloud/uploads/36089/2025-09-01/md-rIVJx-masterclass-40.png" alt="Depois" width={400} height={225} className="rounded-lg mx-auto" data-ai-hint="peaceful brain"/>
                             <ProgressBar label="Nível da Saúde Mental" percentage={96} color="bg-green-500" />
                            <ProgressBar label="Nível da sua confiança" percentage={100} color="bg-green-500" />
                        </CardContent>
                    </Card>
                </div>
                
                <section>
                    <h2 className="text-2xl font-bold text-amber-300 mb-6">Pessoas reais, resultados reais:</h2>
                    <div className="space-y-6">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </section>

                <Card className="bg-amber-800/30 border-amber-400 p-6 rounded-xl">
                     <h2 className="text-2xl font-bold text-amber-200">Receba essa oferta exclusiva do resultado do quizz!</h2>
                     <p className="text-amber-100 my-4">Você destravou um desconto especial e temporário para começar sua jornada com o Método Mente em Paz.</p>
                     <p className="text-xl">De <span className="line-through">R$ 197,00</span> por apenas</p>
                     <p className="text-5xl font-bold text-amber-300 my-2">R$ 37,00</p>
                     <Button onClick={handleCheckout} size="lg" className="w-full max-w-md mx-auto bg-green-600 hover:bg-green-700 text-white font-bold text-lg animate-pulse">
                        OBTER MEU PROTOCOLO AGORA
                     </Button>
                </Card>

                <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/50">
                        <h3 className="text-xl font-bold text-red-300 mb-4">A vida antes de começar a praticar o Método da Mente em Paz</h3>
                        <ul className="space-y-2 text-red-200">
                            <li className="flex items-start gap-2">❌ <span>Deita na cama, mas a cabeça não para de repassar conversas e preocupações.</span></li>
                            <li className="flex items-start gap-2">❌ <span>Está no trabalho, mas não consegue focar porque a mente salta de um pensamento para outro.</span></li>
                            <li className="flex items-start gap-2">❌ <span>Se irrita com facilidade porque sente que está sempre “no limite”.</span></li>
                            <li className="flex items-start gap-2">❌ <span>Deseja reagir com calma, mesmo em momentos de pressão.</span></li>
                             <li className="flex items-start gap-2">❌ <span>Quer aproveitar o presente sem ser sequestrado por pensamentos ruins.</span></li>
                             <li className="flex items-start gap-2">❌ <span>Quer ter controle da sua mente e do seu coração, em qualquer situação.</span></li>
                        </ul>
                    </div>
                    <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/50">
                        <h3 className="text-xl font-bold text-green-300 mb-4">A vida depois de começar a praticar o Método da Mente em Paz</h3>
                        <ul className="space-y-2 text-green-200">
                            <li className="flex items-start gap-2">✅ <span>Dormir bem e sem aquele peso no peito e acordar pela manhã com a mente tranquila.</span></li>
                            <li className="flex items-start gap-2">✅ <span>Responder a um conflito ou notícia ruim com serenidade, sem explodir ou entrar em pânico</span></li>
                            <li className="flex items-start gap-2">✅ <span>Participar de um almoço em família sem estar com a cabeça presa em preocupações do trabalho ou no medo do amanhã</span></li>
                             <li className="flex items-start gap-2">✅ <span>Voltar a aproveitar momentos simples do dia como tomar um café ou caminhar sem a mente repleta de “e se…”</span></li>
                             <li className="flex items-start gap-2">✅ <span>Interromper os sintomas da ansiedade em poucos minutos, sentindo o corpo relaxar e a respiração voltar ao ritmo natural</span></li>
                              <li className="flex items-start gap-2">✅ <span>Encontrar paz e clareza ao rezar, sentindo que Deus está no controle e que você pode descansar</span></li>
                        </ul>
                    </div>
                </div>

                <Card className="bg-gray-800/50 backdrop-blur-sm border-amber-400/30 p-6">
                    <h2 className="text-2xl font-bold text-amber-300 mb-4">Como será seu acesso ao Método do Mente em Paz</h2>
                    <p className="text-amber-100">Todo o material do protocolo pode ser acessado pelo e-mail cadastrado que está disponível para baixar tanto em celulares modelo Iphone quanto em modelo Android.</p>
                </Card>

                <section>
                    <h2 className="text-2xl font-bold text-amber-300 mb-6">Veja o que você vai receber ao fazer sua inscrição</h2>
                    <div className="space-y-4 text-left">
                        <Card className="bg-gray-800/50 p-4 flex flex-col md:flex-row items-center gap-4">
                            <BookOpen className="w-12 h-12 text-amber-300 shrink-0 md:w-8 md:h-8"/>
                            <div>
                                <h3 className="font-bold text-amber-200 text-lg">E-book Método Mente em Paz</h3>
                                <p className="text-amber-100 mt-2">Um eBook simples, direto e profundo — que te ensina passo a passo como restaurar seu senso de segurança e acalmar a mente em momentos de tensão. Baseado em fé e neurociência, já ajudou milhares de pessoas a superarem momentos difíceis com serenidade. Entregue em PDF para você e baixar.</p>
                            </div>
                        </Card>
                         <Card className="bg-gray-800/50 p-4 flex flex-col md:flex-row items-center gap-4">
                            <Mic className="w-12 h-12 text-amber-300 shrink-0 md:w-8 md:h-8"/>
                            <div>
                                <h3 className="font-bold text-amber-200 text-lg">Protocolo em Áudio Guiado</h3>
                                <p className="text-amber-100 mt-2">Ideal para os momentos em que você precisa de alívio imediato, mas não consegue ler. Um áudio calmo, guiado, que te conduz por todo o protocolo com voz acolhedora e ritmo sereno. Perfeito para ouvir em qualquer lugar, com fones de ouvido e coração aberto. Duração: 3 minutos.</p>
                            </div>
                        </Card>
                         <Card className="bg-gray-800/50 p-4 flex flex-col md:flex-row items-center gap-4">
                            <FileText className="w-12 h-12 text-amber-300 shrink-0 md:w-8 md:h-8"/>
                            <div>
                                <h3 className="font-bold text-amber-200 text-lg">Guia de Bolso Método Mente em Paz</h3>
                                <p className="text-amber-100 mt-2">Um guia pronto para você imprimir, compacto e direto ao ponto para usar nos momentos de tensão ou quando a mente estiver acelerada. Imprima e guarde na bolsa, carteira ou caderno — e recorra a ele sempre que precisar recuperar a calma e a presença com fé. Imprima e tenha o passo a passo do Protocolo sempre com você.</p>
                            </div>
                        </Card>
                    </div>
                 </section>
                
                 <section>
                    <h2 className="text-2xl font-bold text-amber-300 mb-6">E MAIS... Você também vai receber:</h2>
                    <div className="space-y-4 text-left">
                        <Card className="bg-gray-800/50 p-4">
                             <h3 className="font-bold text-amber-200 text-lg flex items-center gap-2"><Star/>4 Meditações Guiadas para se Reconectar com Deus</h3>
                             <p className="text-amber-100 mt-2">Cada meditação é como um refúgio silencioso, onde você se reconecta com Deus, encontra clareza e recupera forças para seguir em frente. Imagine ter, na palma da sua mão, um espaço de silêncio e presença para transformar seus dias em minutos.</p>
                             <p className="text-amber-100 mt-2 font-semibold">Meditações incluídas:</p>
                             <ul className="list-disc list-inside text-amber-100 mt-2 ml-4">
                                <li>🎧 Amor Incondicional – Sinta-se acolhido pelo amor que nunca falha.</li>
                                <li>🎧 Nada Está Perdido – Restaure a esperança e descubra novos começos.</li>
                                <li>🎧 O Futuro Está em Suas Mãos – Encontre coragem para dar os próximos passos.</li>
                                <li>🎧 A Ordem do Universo – Experimente paz ao confiar no cuidado constante de Deus.</li>
                            </ul>
                        </Card>
                        <Card className="bg-gray-800/50 p-4">
                             <h3 className="font-bold text-amber-200 text-lg flex items-center gap-2"><Star/>Bônus Exclusivo: SALA DE RESGATE</h3>
                             <p className="text-amber-100 mt-2">Uma aula para quem precisa de socorro imediato da alma — e um lugar onde você será acolhido. Ao garantir seu acesso ao Método Mente em Paz, você recebe um ingresso exclusivo para entrar na Sala de Resgate — uma aula que já transformou a vida de milhares de católicos e pode ser o ponto de virada que você tanto espera.</p>
                              <p className="text-amber-100 mt-2 font-semibold">Nesta experiência única, você vai:</p>
                              <ul className="list-disc list-inside text-amber-100 mt-2 ml-4">
                                <li>✅ Descobrir o que realmente causa sua ansiedade (e por que ela não é culpa sua)</li>
                                <li>✅ Aprender a desligar o alarme emocional que dispara as crises antes que elas te dominem</li>
                                <li>✅ Praticar, junto com Mateus, o exercício completo do método</li>
                                <li>✅ Ouvir testemunhos reais de libertação, de pessoas que estavam no fundo do poço e foram resgatadas</li>
                            </ul>
                        </Card>
                    </div>
                 </section>

                <Button onClick={handleCheckout} size="lg" className="w-full max-w-md mx-auto bg-green-600 hover:bg-green-700 text-white font-bold text-lg animate-pulse">
                    SIM, QUERO O MÉTODO E OS BÔNUS
                </Button>

                <div className="bg-gray-800/50 p-4 rounded-lg">
                    <h3 className="font-bold text-amber-200 text-lg flex items-center justify-center gap-2"><ShieldCheck /> GARANTIA DE 7 DIAS</h3>
                    <p className="text-amber-100 mt-2">O Método Mente em Paz é apoiado por uma garantia de 100% de reembolso. Estamos tão confiantes de que o Método vai te ajudar que garantimos um reembolso total no prazo de 7 dias após a compra.</p>
                </div>
                
                <section>
                    <h2 className="text-2xl font-bold text-amber-300 mb-6">FAQ</h2>
                     <Accordion type="single" collapsible className="w-full text-left text-amber-100">
                        {faqItems.map((item, index) => (
                            <AccordionItem value={`item-${index}`} key={index} className="border-amber-400/30">
                                <AccordionTrigger className="font-semibold text-amber-200">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>
            </div>
        </div>
    );
}
