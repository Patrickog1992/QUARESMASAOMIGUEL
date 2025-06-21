import type { SVGProps } from "react";

export function OurLadyIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12 5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M12 5C7 5 4 10 4 15c0 5 8 7 8 7s8-2 8-7c0-5-3-10-8-10z" />
    </svg>
  );
}
