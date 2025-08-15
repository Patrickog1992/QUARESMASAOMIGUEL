import { AlertTriangle } from "lucide-react";

export function WarningSection() {
    return (
        <section className="bg-red-900/50 text-red-100 p-4 rounded-lg flex items-center gap-4 justify-center border border-red-500/50">
            <AlertTriangle className="w-8 h-8 text-red-300 shrink-0"/>
            <div>
                <h3 className="font-bold">Atenção: Acesso limitado!</h3>
                <p className="text-sm">Para garantir a qualidade e a energia deste material, as vagas são limitadas. Esta página pode sair do ar a qualquer momento.</p>
            </div>
        </section>
    )
}
