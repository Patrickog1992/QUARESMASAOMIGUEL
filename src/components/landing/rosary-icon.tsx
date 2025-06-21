import type { SVGProps } from "react";

export function RosaryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 13a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
      <path d="M12 13v4" />
      <path d="M10 20h4" />
      <path d="M12 17v5" />
    </svg>
  );
}
