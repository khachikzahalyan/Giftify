"use client";

import { useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../animations/Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { IconRocket, IconAnalytics, IconBolt } from "../icons/FeatureIcons";

type WhyItem = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  more: string;
};

const whyData: WhyItem[] = [
  {
    id: "1",
    icon: <IconRocket />,
    title: "More Customers",
    description:
      "Multi-platform presence increases visibility and conversion rates.",
    more:
      "Expand your reach across web and mobile. Capture new audiences, increase trust and build long-term customer loyalty with a unified digital presence.",
  },
  {
    id: "2",
    icon: <IconAnalytics />,
    title: "Better Control",
    description:
      "Real-time analytics and management tools help you make smarter decisions.",
    more:
      "Track sales, monitor performance, manage products and optimize operations from a centralized dashboard built for clarity and transparency.",
  },
  {
    id: "3",
    icon: <IconBolt />,
    title: "Faster Growth",
    description:
      "Launch quickly and scale without technical complexity.",
    more:
      "Built with modern scalable architecture, the platform grows with your business without requiring constant redevelopment or restructuring.",
  },
];

export default function WhySection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="relative py-32">
      <Container>

        <Reveal>
          <SectionTitle
            title="Why This Platform Matters"
            subtitle="A complete digital ecosystem designed for long-term business success."
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 mt-20 items-stretch">

          {whyData.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <Reveal key={item.id} delay={index * 0.1}>
                <motion.div
                  layout
                  transition={{ duration: 0.4 }}
                  className="relative flex flex-col h-full p-8 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur hover:border-violet-500/40 hover:bg-slate-900/60 transition duration-300"
                >
                  {/* ICON */}
                  <div className="mb-6 text-violet-400">
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h4 className="text-lg font-semibold mb-4">
                    {item.title}
                  </h4>

                  {/* DESCRIPTION */}
                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* EXPANDABLE TEXT */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-6 text-slate-400 leading-relaxed">
                          {item.more}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* SPACER */}
                  <div className="flex-grow" />

                  {/* BUTTON */}
                  <button
                    onClick={() =>
                      setOpenId(isOpen ? null : item.id)
                    }
                    className="mt-8 text-sm font-medium text-violet-400 hover:text-violet-300 transition"
                  >
                    {isOpen ? "Less" : "More"}
                  </button>

                </motion.div>
              </Reveal>
            );
          })}

        </div>
      </Container>
    </section>
  );
}
