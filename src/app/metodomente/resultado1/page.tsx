'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const AgitationChart = () => (
    <div className="relative w-full h-48 bg-gray-700/50 rounded-lg p-4 flex">
        <div className="flex flex-col justify-between text-xs text-amber-100 h-full w-16 text-right pr-2">
            <span>Alto</span>
            <span>Médio</span>
            <span>Normal</span>
            <span>Aceitável</span>
            <span>Baixo</span>
        </div>
        <div className="relative flex-grow h-full">
            {/* Toboggan/Slide path */}
            <div 
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 opacity-80"
                style={{
                    clipPath: 'polygon(0 0, 100% 85%, 100% 100%, 0 15%)'
                }}
            ></div>
            {/* "Você" marker */}
            <div className="absolute top-[10%] left-[5%]">
                <div className="relative">
                    <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded shadow-lg -translate-y-full -translate-x-1/2">Você</div>
                    <div className="absolute top-0 left-1/2 w-px h-2 bg-white -translate-x-1/2"></div>
                    <div className="absolute top-2 left-1/2 w-3 h-3 bg-white rounded-full border-2 border-black -translate-x-1/2"></div>
                </div>
            </div>
        </div>
    </div>
);


export default function Resultado1Page() {
  return (
    <div className="flex flex-col items-center justify-between min-h-[calc(100vh-10rem)] w-full">
      <Card className="w-full max-w-3xl bg-gray-800/50 backdrop-blur-sm border-amber-400/30">
        <CardContent className="p-6 md:p-8 space-y-6 text-center">
          <Image
            src="https://i.imgur.com/EfI6zuh.png"
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto"
            data-ai-hint="logo icon"
          />
          <p className="text-amber-100">O nível de agitação mental considerado aceitável para uma boa saúde mental fica em torno de 20 a 25 em uma escala de 0 a 100.</p>
          <h1 className="text-2xl font-bold text-amber-300">Seu nível de agitação mental é 85 ALTO</h1>
          <p className="text-amber-100 text-sm">Uma análise com base em mais de 2 mil casos reais de pessoas que enfrentavam os mesmos sintomas.</p>

          <AgitationChart />

          <p className="font-bold text-green-400 text-lg">Você está com sinais consistentes de agitação mental. Isso impacta sua mente, seu corpo e sua vida espiritual mas a boa notícia é que existe um caminho comprovado para mudar esse quadro, mesmo em poucos minutos por dia.</p>
          
          <h2 className="text-xl font-bold text-amber-300 pt-4">Análise dos motivos da sua agitação mental</h2>
          
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-bold text-amber-200">Tipo de Agitação: Estado de Alerta Constante</h3>
                <p className="text-amber-100 mt-2">Seu sistema nervoso está com o alarme quase sempre ativado. Seu corpo vive em estado de vigilância, como se algo ruim estivesse prestes a acontecer mesmo sem ameaça real.</p>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-bold text-amber-200">Padrão Repetido</h3>
                <p className="text-amber-100 mt-2">Expectativa de perigo, tensão muscular, sensação de urgência sem motivo claro.</p>
            </div>
             <div className="bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-bold text-amber-200">Gatilhos Comuns</h3>
                <p className="text-amber-100 mt-2">Silêncio, notícias ruins, conversas difíceis, sensação de descontrole ou abandono.</p>
            </div>
             <div className="bg-gray-700/50 p-4 rounded-lg">
                <h3 className="font-bold text-amber-200">Nível de Equilíbrio Atual</h3>
                <p className="text-amber-100 mt-2">Sua mente está presa no “modo de sobrevivência”, dificultando o descanso, a concentração e até a oração. Mas esse alarme interno pode ser desligado.</p>
            </div>
          </div>
          
          <div className="bg-amber-900/50 p-4 rounded-lg border border-amber-400/30 text-left">
            <h3 className="font-bold text-amber-200 text-lg">Como o Método Mente em Paz pode te ajudar:</h3>
            <p className="text-amber-100 mt-2">📌 A prática diária de 3 minutos treina o seu cérebro a sair do estado de alerta, regulando os sinais de estresse no corpo e restaurando a segurança interior com fé e ciência.</p>
            <p className="text-amber-100 mt-2">Você vai se sentir mais seguro(a), presente e disponível para viver com paz mesmo em meio às tensões do dia.</p>
            <p className="text-amber-100 mt-4">🎧 É uma prática simples, acessível, baseada em neurociência e fé católica, que ajuda a:</p>
            <ul className="list-disc list-inside text-amber-100 mt-2 ml-4">
                <li>Silenciar a mente agitada</li>
                <li>Dormir com mais paz</li>
                <li>Rezar com presença</li>
                <li>Retomar o controle emocional</li>
            </ul>
             <p className="text-amber-100 mt-2">Tudo isso com pequenos passos diários.</p>
             <p className="font-bold text-amber-200 mt-4">💡 Você não precisa mudar tudo de uma vez. Só precisa começar.</p>
          </div>

          <Link href="/metodomente/resultado2" passHref>
            <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold text-lg whitespace-normal h-auto py-3">
              Sim, quero aprender o método para acalmar minha mente
            </Button>
          </Link>
        </CardContent>
      </Card>
      <footer className="w-full text-center py-4 text-amber-100 text-sm mt-8">
        Método Mente em Paz todos os direitos reservados 2025.
      </footer>
    </div>
  );
}
