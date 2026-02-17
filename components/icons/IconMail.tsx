import { SVGProps } from "react";

export function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Envelope body */}
      <rect
        x="6"
        y="12"
        width="36"
        height="24"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Envelope flap */}
      <path
        d="M6 14L24 28L42 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
