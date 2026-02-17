"use client";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Reveal from "../animations/Reveal";
import { ReactNode } from "react";

type Feature = {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
};

type FeaturesProps = {
  title: string;
  subtitle: string;
  items: Feature[];
};

export default function Features({
  title,
  subtitle,
  items,
}: FeaturesProps) {
  return (
    <section className="py-28 border-t border-white/10">
      <Container>

        {/* Title */}
        <Reveal>
          <SectionTitle title={title} subtitle={subtitle} />
        </Reveal>

        {/* Cards */}
<div className="grid gap-8 mt-16 
                sm:grid-cols-1 
                md:grid-cols-2 
                lg:grid-cols-3">

  {items.map((item, index) => (
    <Reveal key={item.id} delay={index * 0.1}>
      <Card
        className="h-full flex flex-col items-center text-center
                   p-8 min-h-[260px]
                   bg-slate-900/60 backdrop-blur
                   border border-white/10
                   transition-all duration-300
                   hover:border-violet-500/40
                   hover:bg-slate-900/70
                   hover:shadow-[0_0_40px_rgba(139,92,246,0.12)]
                   hover:-translate-y-1"
      >

        {/* ICON */}
        <div className="mb-6 w-14 h-14 flex items-center justify-center">
          {item.icon}
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-semibold mb-4">
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-slate-400 leading-relaxed max-w-xs">
          {item.description}
        </p>

      </Card>
    </Reveal>
  ))}

</div>
      </Container>
    </section>
  );
}
