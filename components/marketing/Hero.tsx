"use client";

import Container from "../ui/Container";
import Button from "../ui/Button";

type HeroContent = {
  titleLine1: string;
  titleHighlight: string;
  description: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
};

export default function Hero({ content }: { content: HeroContent }) {
  return (
<section className="relative overflow-hidden min-h-[95vh] flex items-center justify-center text-center">
{/* TOP SOFT WAVE */}
<div className="absolute top-15 left-0 w-full overflow-hidden pointer-events-none">
  <svg
    className="relative block w-[200%] h-[160px] animate-waveSlow opacity-20"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0,0V46.29c47.29,22,104.57,29,158,17.39C230.88,47.5,284.26,5,339,1.8c54.73-3.2,109.73,30.23,164,37.44C557.44,46.45,612.44,26.08,667,17.12c54.56-9,109.56-6.09,164,5.6C885.44,34.41,940.44,54.28,995,56.19c54.56,1.9,109.56-14.19,164-25.23V0Z"
      fill="url(#waveGradientTop)"
    />
    <defs>
      <linearGradient id="waveGradientTop" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>
  </svg>
</div>

  {/* SOFT ANIMATED WAVES */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none rotate-180">
  <svg
    className="relative block w-[200%] h-[180px] animate-waveSlow"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path
      d="M0,0V46.29c47.29,22,104.57,29,158,17.39C230.88,47.5,284.26,5,339,1.8c54.73-3.2,109.73,30.23,164,37.44C557.44,46.45,612.44,26.08,667,17.12c54.56-9,109.56-6.09,164,5.6C885.44,34.41,940.44,54.28,995,56.19c54.56,1.9,109.56-14.19,164-25.23V0Z"
      fill="url(#waveGradient)"
      opacity="0.15"
    />
    <defs>
      <linearGradient id="waveGradient" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>
  </svg>
</div>


  <Container className="relative">

<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
  {content.titleLine1}<br />
  <span className="gradient-text-animated">
    {content.titleHighlight}
  </span>
</h1>

    <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
      {content.description}
    </p>

    <div className="mt-12 flex justify-center gap-6 flex-wrap">
      <Button href={content.primaryButton.href}>
        {content.primaryButton.label}
      </Button>

      <Button href={content.secondaryButton.href} variant="outline">
        {content.secondaryButton.label}
      </Button>
    </div>

  </Container>
</section>

  );
}
