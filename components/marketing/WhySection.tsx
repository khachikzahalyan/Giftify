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
      "Built with modern scalable architecture, the platform grows with your business without constant redevelopment.",
    more:
      "Scale confidently with enterprise-ready infrastructure designed for performance, security and long-term expansion.",
  },
];

export default function WhySection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-32">
      <Container>
        <Reveal>
          <SectionTitle
            title="Why This Platform Matters"
            subtitle="A complete digital ecosystem designed for long-term business success."
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {whyData.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <Reveal key={item.id} delay={index * 0.1}>
                <div className="relative h-[380px] rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur overflow-hidden">

                  {/* NORMAL CONTENT */}
                  <motion.div
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 p-8 flex flex-col"
                  >
                    <div className="mb-6 text-violet-400">
                      {item.icon}
                    </div>

                    <h4 className="text-lg font-semibold mb-4">
                      {item.title}
                    </h4>

                    <p className="text-slate-400 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex-grow" />

                    <button
                      onClick={() => setOpenId(item.id)}
                      className="mt-8 text-sm font-medium text-violet-400 hover:text-violet-300 transition"
                    >
                      More
                    </button>
                  </motion.div>

                  {/* EXPANDED OVERLAY */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0 p-8 flex flex-col bg-slate-950/95"
                      >
                        <div className="mb-6 text-violet-400">
                          {item.icon}
                        </div>

                        <h4 className="text-lg font-semibold mb-4">
                          {item.title}
                        </h4>

                        <p className="text-slate-400 leading-relaxed">
                          {item.more}
                        </p>

                        <div className="flex-grow" />

                        <button
                          onClick={() => setOpenId(null)}
                          className="mt-8 text-sm font-medium text-violet-400 hover:text-violet-300 transition"
                        >
                          Less
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </Reveal>
            );
          })}

        </div>
      </Container>
    </section>
  );
}
