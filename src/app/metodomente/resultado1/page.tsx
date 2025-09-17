'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AgitationChart = () => (
    <div className="relative w-full h-40 bg-gray-700/50 rounded-lg p-4 flex gap-4">
        <div className="flex flex-col justify-between h-full text-xs text-amber-100 shrink-0">
            <span>Alto</span>
            <span>Médio</span>
            <span>Normal</span>
            <span>Aceitável</span>
            <span>Baixo</span>
        </div>
        <div className="relative flex-grow h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-red-500 via-yellow-500 to-green-500 opacity-70 rounded-md"></div>
            {/* "Você" marker */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full px-2">
                 <div className="relative w-full h-full">
                    <div className="absolute -top-2 right-0 text-center">
                        <div className="bg-white text-black text-xs font-bold px-2 py-1 rounded">Você</div>
                        <div className="w-px h-2 bg-white mx-auto"></div>
                        <div className="w-3 h-3 bg-white rounded-full border-2 border-black mx-auto"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);


export default function Resultado1Page() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Card className="w-full max-w-3xl bg-gray-800/50 backdrop-blur-sm border-amber-400/30">
        <CardContent className="p-6 md:p-8 space-y-6">
          <p className="text-amber-100">O nível de agitação mental considerado aceitável para uma boa saúde mental fica em torno de 20 a 25 em uma escala de 0 a 100.</p>
          <h1 className="text-2xl font-bold text-amber-300">Seu nível de agitação mental</h1>
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
          
          <div className="bg-amber-900/50 p-4 rounded-lg border border-amber-400/30">
            <h3 className="font-bold text-amber-200 text-lg">Como o Método Mente em Paz pode te ajudar:</h3>
            <p className="text-amber-100 mt-2">📌 A prática diária de 3 minutos treina o seu cérebro a sair do estado de alerta, regulando os sinais de estresse no corpo e restaurando a segurança interior com fé e ciência.</p>
            <p className="text-amber-100 mt-2">Você vai se sentir mais seguro(a), presente e disponível para viver com paz mesmo em meio às tensões do dia.</p>
            <p className="text-amber-100 mt-4">🎧 É uma prática simples, acessível, baseada em neurociência e fé católica, que ajuda a:</p>
            <ul className="list-disc list-inside text-left text-amber-100 mt-2 ml-4">
                <li>Silenciar a mente agitada</li>
                <li>Dormir com mais paz</li>
                <li>Rezar com presença</li>
                <li>Retomar o controle emocional</li>
            </ul>
             <p className="text-amber-100 mt-2">Tudo isso com pequenos passos diários.</p>
             <p className="font-bold text-amber-200 mt-4">💡 Você não precisa mudar tudo de uma vez. Só precisa começar.</p>
          </div>

          <Link href="/metodomente/resultado2" passHref>
            <Button size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold text-lg">
              Sim, quero aprender o método para acalmar minha mente
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
