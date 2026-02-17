"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";
import { IconWeb } from "@/components/icons/IconWeb";

type WebDemoContent = {
  title: string;
  description: string;
  demoUrl: string;
};

export default function WebDemoPage() {
  const content: WebDemoContent = {
    title: "Explore Web Platform Demo",
    description:
      "Experience the live version of the web application. Browse products, test flows and see how customers interact with your business.",
    demoUrl: "https://www.giftify.am/",
  };

  return (
    <section className="py-28 border-t border-white/10">
      <Container>

        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold">
              {content.title}
            </h1>

            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              {content.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 max-w-3xl mx-auto">

            <div className="relative bg-slate-900/60 backdrop-blur border border-white/10 rounded-2xl p-10 flex flex-col min-h-[320px] transition hover:border-violet-500/40">

              {/* ICON */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-violet-600/10 border border-violet-500/20 text-violet-400">
                <IconWeb className="w-7 h-7" />
              </div>
            </div>

              {/* CONTENT */}
              <div className="flex-grow text-center">
                <h3 className="text-xl font-semibold mb-4">
                  Live Web Application
                </h3>

                <p className="text-slate-400">
                  Fully responsive customer-facing platform with
                  optimized UX, fast performance and modern design.
                </p>
              </div>

              {/* BUTTON */}
              <div className="mt-10 text-center">
                <Button href={content.demoUrl}>
                  Open Web Demo
                </Button>
              </div>

            </div>

          </div>
        </Reveal>

      </Container>
    </section>
  );
}
