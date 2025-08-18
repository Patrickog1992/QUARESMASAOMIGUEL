import type { SVGProps } from "react";

export function AngelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.5 8.5c-.8-1-2.2-1-3 0" />
      <path d="M12.5 15.5c.8 1 2.2 1 3 0" />
      <path d="M4.2 19.8c-1.6-1.6-1.6-4.1 0-5.7" />
      <path d="M19.8 4.2c1.6 1.6 1.6 4.1 0 5.7" />
      <path d="M8.2 5.8A8.4 8.4 0 0 0 12 4.1a8.4 8.4 0 0 0 3.8 1.6" />
      <path d="M15.8 18.2a8.4 8.4 0 0 0-3.8 1.6 8.4 8.4 0 0 0-3.8-1.6" />
      <path d="M12 4.1V2" />
      <path d="M12 22v-2.1" />
      <path d="M22 12h-2.1" />
      <path d="M4.1 12H2" />
      <path d="M12 8.3a4.1 4.1 0 0 0-4.1 4.1 4.1 4.1 0 0 0 4.1 4" />
      <path d="M12 12.3a4.1 4.1 0 0 1 4.1 4 4.1 4.1 0 0 1-4.1 4.1" />
    </svg>
  );
}
