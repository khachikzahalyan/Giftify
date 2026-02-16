"use client";

import Reveal from "@/components/animations/Reveal";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export type PricingPlan = {
  id: string;
  name: string;
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
    <section className="py-32">
      <Container>

        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold">
              {content.title}
            </h2>
            {content.subtitle && (
              <p className="mt-6 text-slate-400 text-lg">
                {content.subtitle}
              </p>
            )}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 items-stretch">
          {content.plans.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.15}>
              <div
                className={`relative flex flex-col h-full rounded-2xl p-8 backdrop-blur transition duration-300
                ${
                  plan.popular
                    ? "border-2 border-violet-600 bg-slate-900/70"
                    : "border border-white/10 bg-slate-900/50 hover:border-violet-500/40"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 right-6 bg-violet-600 text-xs px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}

                <h3 className="text-xl font-semibold mb-4">
                  {plan.name}
                </h3>

                <p className="text-4xl font-bold mb-8">
                  {plan.price}
                </p>

                <ul className="space-y-3 text-slate-400 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✔ {feature}</li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button
                    href={plan.buttonLink}
                    variant={plan.variant ?? "primary"}
                    className="w-full"
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </Container>
    </section>
  );
}
