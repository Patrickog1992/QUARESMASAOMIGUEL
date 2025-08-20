'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AngelIcon } from '@/components/landing/AngelIcon';
import { Suspense } from 'react';
import Image from 'next/image';

function AnjoNomeContent() {
    const [name, setName] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name) {
            router.push(`/anjodaguarda/loading?name=${encodeURIComponent(name)}`);
        }
    };
    
    return (
        <div className="dark relative flex flex-col min-h-screen items-center justify-center bg-gray-50 text-gray-800 p-4 overflow-x-hidden">
            <div className="absolute inset-0 z-0 opacity-[0.03] text-black pointer-events-none">
                <AngelIcon className="absolute top-[5%] left-[10%] w-24 h-24 transform -rotate-12" />
                <AngelIcon className="absolute top-[15%] right-[5%] w-32 h-32 transform rotate-6" />
                <AngelIcon className="absolute top-[40%] left-[20%] w-20 h-20 transform rotate-12" />
                <AngelIcon className="absolute top-[55%] right-[15%] w-28 h-28 transform -rotate-6" />
                <AngelIcon className="absolute bottom-[10%] left-[5%] w-40 h-40 transform rotate-15" />
                <AngelIcon className="absolute bottom-[2%] right-[25%] w-24 h-24 transform -rotate-15" />
            </div>
          <Card className="w-full max-w-2xl bg-white/80 backdrop-blur-sm shadow-2xl z-10 p-4">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-amber-600 uppercase">Qual é Seu Anjo?</CardTitle>
              <CardDescription className="font-bold text-gray-700">Para descobrir qual é seu <span className="text-amber-600">Anjo da Guarda</span>, você precisa responder 2 breves perguntas...</CardDescription>
            </CardHeader>
            <CardContent>
                <Image
                    src="https://i.ibb.co/DPn9HrxP/1632485586-anjos-1.webp"
                    alt="Anjos da Guarda"
                    width={500}
                    height={200}
                    className="mx-auto mb-4 rounded-lg"
                    data-ai-hint="guardian angels"
                />
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium text-gray-700">Qual o seu nome?</label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white/50 border-gray-300 text-center text-gray-800"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold">
                  Enviar minha resposta
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
    );
}


export default function AnjoNomePage() {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <AnjoNomeContent />
        </Suspense>
    );
}
