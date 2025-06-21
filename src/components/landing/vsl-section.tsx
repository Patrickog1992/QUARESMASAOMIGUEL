import { PlayCircle } from 'lucide-react';

export function VSLSection() {
  return (
    <section className="mb-12 md:mb-20">
      <div className="aspect-video max-w-4xl mx-auto bg-slate-800 rounded-lg shadow-2xl flex items-center justify-center border-4 border-slate-700">
        <div className="text-center text-slate-300">
          <PlayCircle strokeWidth={1.5} className="h-20 w-20 mx-auto text-slate-400" />
          <p className="mt-4 font-semibold">Seu vídeo iniciará em breve</p>
        </div>
      </div>
    </section>
  );
}
