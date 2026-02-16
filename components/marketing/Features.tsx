"use client";

import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Reveal from "../animations/Reveal";

type Feature = {
  id: string;
  icon: string;
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
              <Card className="h-full flex flex-col justify-between
                               bg-slate-900/60 backdrop-blur
                               border border-white/10
                               hover:border-violet-500/40
                               transition-all duration-300
                               hover:-translate-y-1">

                <div>
                  <div className="text-4xl mb-6">{item.icon}</div>

                  <h3 className="text-xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </Card>
            </Reveal>
          ))}

        </div>
      </Container>
    </section>
  );
}
