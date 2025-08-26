'use client';

export default function VideoPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
            <h1 className="text-2xl font-bold text-red-700 uppercase mb-6 max-w-xl">
                Tem uma MALDIÇÃO escondida travando tua vida, e HOJE ela vai cair por terra!
            </h1>
            {/* Placeholder for video */}
            <div className="w-full max-w-2xl aspect-video bg-black rounded-lg shadow-lg flex items-center justify-center text-white">
                Espaço para o vídeo
            </div>
        </div>
    );
}
