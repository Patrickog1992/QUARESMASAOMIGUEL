'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ThumbsUp, MessageCircle } from 'lucide-react';

export default function ReportagemPage() {

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
           <Image 
            src="https://s2.glbimg.com/L-k9aCBLbV9vTTT-n2-i_T-y-yI=/0x0:1024x223/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b58693ed41d04a39826739159bf4042a/internal_photos/bs/2023/5/3/xTf12xSNuy3e36j611AQ/g1-logo-2023.svg"
            alt="G1 Logo"
            width={80}
            height={30}
            data-ai-hint="news logo"
           />
           <div className="text-sm text-gray-500">
            {new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
           </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">"É de arrepiar!" diz Ana Maria Braga sobre Padre que benze água à distância e realiza milagres</h1>
            <p className="text-gray-600 mb-4">Apresentadora compartilhou em seu programa matinal a história do Padre Elisio, que tem emocionado o Brasil com suas orações poderosas.</p>
            <div className="border-t border-b border-gray-200 py-2 my-4 flex items-center justify-between text-sm">
                <p className="text-gray-500">Por <span className="font-bold text-red-700">Redação G1</span></p>
                <p className="text-gray-500">{new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })} às {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
            
            <Image
              src="https://i.ibb.co/3cYsR2N/image.png"
              alt="Ana Maria Braga no programa Mais Você"
              width={800}
              height={450}
              className="rounded-lg mb-6 shadow-md"
              data-ai-hint="TV host smiling"
            />

            <article className="prose max-w-none text-gray-800 text-lg space-y-4">
              <p>A apresentadora Ana Maria Braga surpreendeu seus telespectadores na manhã desta quarta-feira ao compartilhar a história do Padre Elisio, um religioso que vem ganhando notoriedade por suas orações que, segundo relatos, são capazes de realizar milagres financeiros e de saúde em poucos dias.</p>
              
              <p>"Eu recebi centenas de mensagens, gente. É uma coisa que arrepia. Pessoas contando que, depois de ouvir as palavras desse padre, a vida delas mudou completamente", comentou Ana Maria, visivelmente emocionada.</p>

              <blockquote className="border-l-4 border-red-700 pl-4 italic text-gray-600">
                "É a fé, né? Quando a gente acredita, quando a gente se conecta com algo maior, as coisas acontecem. E o que esse padre faz é resgatar essa fé nas pessoas", disse a apresentadora.
              </blockquote>

              <p>O Padre Elisio utiliza um método antigo, baseado em orações e na bênção da água, mesmo à distância, para quebrar o que ele chama de "maldições que travam a vida". Os testemunhos se espalham rapidamente pela internet, com pessoas relatando desde o pagamento de dívidas inesperadas até a cura de enfermidades.</p>
              
              <Image
                src="https://i.imgur.com/bS30BjY.jpeg"
                alt="Padre Elisio em oração"
                width={700}
                height={400}
                className="rounded-lg my-6 shadow-md"
                data-ai-hint="priest praying"
              />

              <p>A equipe do G1 entrou em contato com fiéis que afirmam ter recebido milagres. "Eu estava desempregada há 2 anos, com o nome sujo. Ouvi a oração do Padre Elisio com um copo d'água na mão. No dia seguinte, uma empresa que eu nem lembrava que tinha mandado currículo me ligou. Hoje estou empregada", relatou Maria das Graças, de 54 anos, de Belo Horizonte.</p>
              <p>Ao final da reportagem, Ana Maria Braga deixou uma mensagem de esperança: "Se você está precisando de um milagre, talvez essa seja a resposta que você tanto pediu. A fé não tem limites."</p>
            </article>

            <div className="mt-8 text-center border-t pt-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Você também quer receber a oração poderosa do Padre Elisio?</h2>
                <p className="text-gray-600 mb-6">Milhares de brasileiros estão transformando suas vidas. Clique no botão abaixo para descobrir como.</p>
                <Link href="/chavedomilagre/nome" passHref>
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg animate-pulse w-full max-w-md mx-auto">
                        QUERO DESCOBRIR A ORAÇÃO
                    </Button>
                </Link>
            </div>
            <div className="mt-8 flex justify-between items-center text-gray-500">
                <div className="flex gap-2 items-center">
                    <button className="flex items-center gap-1 hover:text-blue-600"><ThumbsUp size={18} /> 1.2k</button>
                    <button className="flex items-center gap-1 hover:text-blue-600"><MessageCircle size={18} /> 89</button>
                </div>
                <div>
                    <p className="text-sm">Compartilhe essa bênção</p>
                </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
