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

  <div className="absolute inset-0 bg-gradient-to-tr from-violet-700/20 via-indigo-600/10 to-transparent blur-3xl" />

  <Container className="relative">

    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
      {content.titleLine1} <br />
      <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
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
