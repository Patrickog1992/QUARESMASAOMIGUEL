'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const quizSteps = [
  {
    type: 'intro',
    title: 'FAÇA ESSE TESTE DE 30 SEGUNDOS E VEJA SE VOCÊ ESTÁ PRONTO PARA RECEBER A ORAÇÃO DA PROSPERIDADE DE SÃO CIPRIANO',
    options: [
      { text: 'Homem', image: 'https://i.imgur.com/XvOJd97.png' },
      { text: 'Mulher', image: 'https://i.imgur.com/GeUUAzw.png' },
    ],
  },
  {
    type: 'question',
    title: 'Há quanto tempo você luta contra dificuldades financeiras?',
    options: [
      { emoji: '😰', text: 'Mais de 5 anos - estou desesperado(a)' },
      { emoji: '😔', text: 'Entre 2-5 anos - já tentei de tudo' },
      { emoji: '😕', text: '1-2 anos - começando a me preocupar' },
      { emoji: '🧐', text: 'Não tenho problema financeiro' },
    ],
  },
  {
    type: 'question',
    title: 'Qual dessas situações mais te assombra à noite?',
    options: [
      { emoji: '💸', text: '"Vou morrer pobre e deixar minha família na miséria"' },
      { emoji: '😱', text: '"Nunca vou conseguir sair dessa situação"' },
      { emoji: '😢', text: '"Deus me abandonou financeiramente"' },
      { emoji: '😤', text: '"Trabalho tanto e nunca sobra nada"' },
    ],
  },
  {
    type: 'revelation',
    title: 'REVELAÇÃO CHOCANTE: Você sabia que São Cipriano, hoje santo católico, era antes de sua conversão um bruxo de alto escalão que descobriu uma oração capaz de quebrar qualquer maldição de pobreza?',
    image: 'https://i.imgur.com/SMRs4Vd.jpeg',
    options: [
      { emoji: '🤯', text: 'Isso explica muita coisa na minha vida' },
      { emoji: '😮', text: 'Nunca ouvi falar disso' },
      { emoji: '🧐', text: 'Sempre soube que havia algo escondido' },
      { emoji: '😱', text: 'Preciso saber mais sobre isso' },
    ],
  },
  {
    type: 'question',
    title: 'Quando você pensa na sua situação financeira atual, qual é seu maior medo?',
    options: [
      { emoji: '😰', text: 'Morrer pobre e ser esquecido' },
      { emoji: '💔', text: 'Decepcionar quem amo' },
      { emoji: '😡', text: 'Nunca conseguir me vingar da vida' },
      { emoji: '🙏', text: 'Não conseguir ajudar ninguém' },
    ],
  },
  {
    type: 'revelation',
    title: 'SEGREDO EXPLOSIVO: A Igreja mantém o livro secreto de São Cipriano no Vaticano há 1.700 anos. Mas os Rockefeller - família mais rica do mundo há 150 anos, que controla bancos e governos - conseguiu acesso através de doações bilionárias secretas ao Vaticano.',
    subTitle: 'Em troca de financiar a Igreja por décadas, receberam acesso aos arquivos secretos, incluindo a oração de prosperidade de São Cipriano.\n\nPor isso continuam imensamente ricos geração após geração, enquanto bilhões lutam na pobreza.\n\nComo você se sente sabendo que a elite comprou acesso ao poder de São Cipriano enquanto você sofre financeiramente?',
    image: 'https://i.imgur.com/CFSDIHq.jpeg',
    options: [
      { emoji: '🔥', text: 'Furioso - quero esse conhecimento AGORA' },
      { emoji: '😤', text: 'Revoltado - sempre soube que escondiam algo' },
      { emoji: '😢', text: 'Triste - me sinto traído pela elite e Igreja' },
      { emoji: '🤔', text: 'Curioso - preciso entender esse acordo secreto' },
    ],
  },
  {
    type: 'question',
    title: 'Se eu te dissesse que nos próximos 6 minutos você vai descobrir exatamente como acessar esta oração secreta que pode acabar com sua pobreza para sempre, você:',
    options: [
      { emoji: '⚡', text: 'Assistiria IMEDIATAMENTE - estou desesperado' },
      { emoji: '🎯', text: 'Prestaria atenção total - é minha última esperança' },
      { emoji: '🤨', text: 'Ficaria cético mas assistiria' },
      { emoji: '😐', text: 'Talvez assistisse depois' },
    ],
  },
  {
    type: 'question',
    title: 'ÚLTIMA PERGUNTA DECISIVA:\nA oração secreta de São Cipriano só pode ser feita 3 vezes ao ano e tem o poder de quebrar maldições de pobreza que passam de geração em geração.\n\nVocê jura por tudo que é sagrado que usará este conhecimento apenas para o bem?',
    options: [
      { emoji: '🙏', text: 'SIM - Juro solenemente e estou pronto para receber' },
      { emoji: '❌', text: 'NÃO - Não posso fazer essa promessa' },
    ],
  },
  {
    type: 'approved',
    title: 'PARABÉNS! Você foi APROVADO para receber a revelação mais poderosa dos últimos 1.700 anos',
    warning: 'Esta revelação só estará disponível nas próximas 2 horas. Apenas 47 pessoas receberão acesso hoje. Depois de meia-noite, este conhecimento será selado novamente.',
    buttonText: 'QUERO ASSISTIR AGORA !',
    subText: '👇 CLIQUE ABAIXO PARA ASSISTIR À REVELAÇÃO SECRETA\n(2 minutos que podem mudar sua vida para sempre)',
  },
  {
    type: 'video',
    title: 'ASSISTA O VÍDEO ABAIXO PARA RECEBER A ORAÇÃO SECRETA DE SÃO CIPRIANO...',
    warning: 'Aviso: se você sair dessa página, perde o acesso para sempre',
  },
];

const VideoPlayer = () => {
    useEffect(() => {
        const scriptId = 'vid-68f915e8b6eef1c8dc741e6f-script';
        if (document.getElementById(scriptId)) return;

        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://scripts.converteai.net/072b0676-85aa-49bb-b085-c507ba561c37/players/68f915e8b6eef1c8dc741e6f/v4/player.js";
        script.async = true;
        document.head.appendChild(script);

        return () => {
            const existingScript = document.getElementById(scriptId);
            if (existingScript && existingScript.parentNode) {
                existingScript.parentNode.removeChild(existingScript);
            }
        };
    }, []);

    return <div id="vid-68f915e8b6eef1c8dc741e6f" style={{ display: 'block', margin: '0 auto', width: '100%' }}></div>;
};

export default function SaoCiprianoQuizPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const stepData = quizSteps[currentStep];

  return (
    <div className="dark relative flex flex-col min-h-screen items-center justify-center bg-black text-white p-4 overflow-x-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{backgroundImage: "url('https://i.imgur.com/SMRs4Vd.jpeg')"}}></div>
      <div className="absolute inset-0 bg-black/70"></div>
      
      <main className="relative flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center justify-center text-center z-10">
        <Card className="w-full max-w-2xl bg-gray-900/70 backdrop-blur-sm border-amber-500/50 text-center shadow-2xl shadow-amber-500/10">
          <CardContent className="p-6 md:p-8 space-y-6">
            {stepData.type === 'intro' && (
              <>
                <h1 className="text-xl md:text-2xl font-bold text-amber-300">{stepData.title}</h1>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {stepData.options.map((option, index) => (
                    <button key={index} onClick={handleNextStep} className="group flex-1">
                      <Image src={option.image!} alt={option.text} width={200} height={200} className="rounded-lg border-2 border-transparent group-hover:border-amber-400 transition-all duration-300" />
                      <p className="mt-2 font-semibold text-amber-200">{option.text}</p>
                    </button>
                  ))}
                </div>
              </>
            )}

            {stepData.type === 'question' && (
              <>
                <h1 className="text-xl md:text-2xl font-bold text-amber-300 whitespace-pre-line">{stepData.title}</h1>
                <div className="space-y-3">
                  {stepData.options.map((option, index) => (
                    <Button key={index} onClick={handleNextStep} variant="outline" size="lg" className="w-full h-auto py-3 text-md justify-start text-left whitespace-normal border-amber-400/50 bg-gray-800/50 hover:bg-amber-900/50 text-amber-100">
                      <span className="text-2xl mr-4">{option.emoji}</span>
                      <span className="flex-1">{option.text}</span>
                    </Button>
                  ))}
                </div>
              </>
            )}
            
            {(stepData.type === 'revelation') && (
              <>
                <h1 className="text-lg md:text-xl font-bold text-amber-300">{stepData.title}</h1>
                 {stepData.image && <Image src={stepData.image} alt="Revelação" width={500} height={300} className="rounded-lg mx-auto shadow-lg" />}
                {stepData.subTitle && <p className="text-amber-100 whitespace-pre-line">{stepData.subTitle}</p>}
                <div className="space-y-3 pt-4">
                   {stepData.options.map((option, index) => (
                    <Button key={index} onClick={handleNextStep} variant="outline" size="lg" className="w-full h-auto py-3 text-md justify-start text-left whitespace-normal border-amber-400/50 bg-gray-800/50 hover:bg-amber-900/50 text-amber-100">
                      <span className="text-2xl mr-4">{option.emoji}</span>
                      <span className="flex-1">{option.text}</span>
                    </Button>
                  ))}
                </div>
              </>
            )}

            {stepData.type === 'approved' && (
                <>
                    <h1 className="text-2xl md:text-3xl font-bold text-green-400">{stepData.title}</h1>
                    <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 space-y-2">
                        <p className="font-bold text-red-400 text-lg">⚠️ ATENÇÃO CRÍTICA:</p>
                        <p className="text-white">{stepData.warning}</p>
                    </div>
                    <p className="text-amber-200 font-semibold whitespace-pre-line">{stepData.subText}</p>
                    <Button onClick={handleNextStep} size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-xl h-auto py-4 animate-pulse">
                        {stepData.buttonText}
                    </Button>
                </>
            )}

             {stepData.type === 'video' && (
                <>
                    <h1 className="text-xl md:text-2xl font-bold text-amber-300">{stepData.title}</h1>
                    <p className="text-red-500 font-semibold">{stepData.warning}</p>
                    <div className="w-full max-w-lg mx-auto aspect-video">
                        <VideoPlayer />
                    </div>
                </>
             )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
