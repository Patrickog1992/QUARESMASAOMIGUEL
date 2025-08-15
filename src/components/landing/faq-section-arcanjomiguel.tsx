'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";

const faqItems = [
    {
        question: "Como vou receber as 40 orações?",
        answer: "O acesso é 100% digital e imediato. Assim que sua contribuição for confirmada, você receberá um e-mail com um link para acessar e baixar todas as orações e os bônus em formato PDF."
    },
    {
        question: "A compra é segura?",
        answer: "Sim, 100% segura. Utilizamos a plataforma Kirvano, uma das maiores e mais seguras do Brasil, para processar todos os pagamentos. Seus dados estão completamente protegidos."
    },
    {
        question: "E se eu não sentir nenhuma mudança?",
        answer: "Sua fé é o mais importante. Oferecemos uma garantia de 7 dias. Se por qualquer motivo você não se sentir tocado pelo material, basta nos enviar um e-mail e devolveremos o valor da sua contribuição, sem burocracia."
    },
    {
        question: "Preciso fazer as orações em um horário específico?",
        answer: "Não há um horário obrigatório, mas muitos fiéis relatam uma conexão mais forte durante a madrugada ou no início da manhã, momentos de maior silêncio e introspecção. O importante é orar com o coração aberto."
    }
];

export function FAQSectionArcanjoMiguel() {
    return (
        <section>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
                Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="w-full text-left max-w-xl mx-auto">
                {faqItems.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="border-blue-400/30">
                        <AccordionTrigger className="font-semibold text-lg hover:text-amber-300">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-blue-200 text-base">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
             <div className="mt-8">
                <h3 className="text-xl font-bold flex items-center justify-center gap-2 text-green-400"><Check className="w-6 h-6"/> Garantia de 7 Dias</h3>
                <p className="mt-2 max-w-md mx-auto text-blue-200">Sua fé é nossa prioridade. Se em 7 dias você não sentir a paz e a proteção que busca, devolvemos sua contribuição. Sem perguntas.</p>
            </div>
        </section>
    );
}
