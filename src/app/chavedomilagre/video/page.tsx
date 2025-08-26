'use client';

import { useEffect } from 'react';
import Image from 'next/image';

const VideoPlayer = () => {
    useEffect(() => {
        const scriptId = 'vturb-player-script-68adb7b4bad9a934cfd7b884';
        if (document.getElementById(scriptId)) return;

        const script = document.createElement('script');
        script.id = scriptId;
        script.src = "https://scripts.converteai.net/eaf579c8-6aa1-4f6f-b5bd-8ba46f9e23f8/players/68adb7b4bad9a934cfd7b884/v4/player.js";
        script.async = true;
        document.head.appendChild(script);
    }, []);

    const videoHtml = `<vturb-smartplayer id="vid-68adb7b4bad9a934cfd7b884" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>`;

    return (
        <div 
            className="w-full max-w-2xl rounded-lg shadow-lg"
            dangerouslySetInnerHTML={{ __html: videoHtml }}
        />
    );
};

export default function VideoPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
            <Image
                src="https://i.imgur.com/oU1Etag.png"
                alt="Manuscrito Sagrado"
                width={500}
                height={150}
                className="mb-8 rounded-lg"
                data-ai-hint="sacred manuscript"
            />
            <h1 className="text-2xl font-bold text-red-700 uppercase mb-6 max-w-xl">
                Tem uma MALDIÇÃO escondida travando tua vida, e HOJE ela vai cair por terra!
            </h1>
            <VideoPlayer />
        </div>
    );
}
