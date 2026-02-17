"use client";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  features: string[];
  buttonText: string;
  buttonLink: string;
  variant?: "primary" | "outline";
};

type PricingContent = {
  title: string;
  subtitle?: string;
  plans: PricingPlan[];
};

export default function PricingSection({
  content,
}: {
  content: PricingContent;
}) {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* AI background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/20 blur-[160px]" />
      </div>

      <Container className="relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-28">
            <h2 className="text-5xl font-bold tracking-tight">
              {content.title}
            </h2>

            {content.subtitle && (
              <p className="mt-6 text-slate-400 text-lg">
                {content.subtitle}
              </p>
            )}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-14">

          {content.plans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.12}>
              <div
                className={`
                  relative group flex flex-col h-full rounded-3xl p-10
                  border border-white/10
                  bg-slate-900/70 backdrop-blur-2xl
                  transform-gpu will-change-transform
                  transition-all duration-500 ease-out
                  hover:-translate-y-3
                `}
              >

                {/* futuristic glow border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl border border-violet-500/50" />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600/20 via-transparent to-indigo-600/20 blur-xl" />
                </div>

                {/* popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-xs px-4 py-1.5 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-semibold mb-3">
                  {plan.name}
                </h3>

                <p className="text-slate-400 mb-10">
                  {plan.description}
                </p>

                <div className="mb-12">
                  <span className="text-5xl font-bold bg-gradient-to-r from-violet-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                    {plan.price}
                  </span>

                  {plan.price !== "Custom" && (
                    <span className="text-slate-400 ml-2">/month</span>
                  )}
                </div>

                <ul className="space-y-4 text-slate-300 mb-14 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-violet-400">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={plan.buttonLink}
                  variant={
                    plan.variant ??
                    (plan.popular ? "primary" : "outline")
                  }
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </div>
            </Reveal>
          ))}

        </div>
      </Container>
    </section>
  );
}
