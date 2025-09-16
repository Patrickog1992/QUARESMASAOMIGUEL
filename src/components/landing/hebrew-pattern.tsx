import type { SVGProps } from "react";

function HebrewCharacter(props: SVGProps<SVGSVGElement>) {
  const characters = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'];
  const char = characters[Math.floor(Math.random() * characters.length)];
  return (
    <text x={props.x} y={props.y} fontSize="20" fill="currentColor" textAnchor="middle">
      {char}
    </text>
  );
}

export function HebrewPattern() {
  return (
    <div className="absolute inset-0 z-0 opacity-[0.03] text-amber-300 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%">
            <defs>
                <pattern id="hebrew" patternUnits="userSpaceOnUse" width="100" height="100">
                    <HebrewCharacter x="10" y="20" />
                    <HebrewCharacter x="50" y="50" />
                    <HebrewCharacter x="90" y="80" />
                    <HebrewCharacter x="30" y="90" />
                    <HebrewCharacter x="70" y="10" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hebrew)" />
        </svg>
    </div>
  );
}
