type IconBrandProps = {
  className?: string;
};

export function IconBrand({ className = "" }: IconBrandProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brandGradient" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="50%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>

      {/* Outer subtle circle */}
      <circle
        cx="24"
        cy="24"
        r="20"
        stroke="url(#brandGradient)"
        strokeWidth="2"
        opacity="0.3"
      />

      {/* Stylized G */}
      <path
        d="M30 24H24V28H34C34 18 28 14 22 14C16 14 12 18 12 24C12 30 16 34 22 34C26 34 29 32 31 29"
        stroke="url(#brandGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
