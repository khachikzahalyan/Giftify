import { SVGProps } from "react";

export function IconWeb(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M4 24H44"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M24 4C30 12 30 36 24 44"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M24 4C18 12 18 36 24 44"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
