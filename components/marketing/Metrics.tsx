"use client";

import { useEffect, useRef, useState } from "react";
import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

type Metric = {
  id: string;
  value: number;
  suffix?: string;
  label: string;
};

type MetricsProps = {
  items: Metric[];
};

function CountUp({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [started, value]);

  return <div ref={ref}>{count}</div>;
}

export default function Metrics({ items }: MetricsProps) {
  return (
    <section className="relative py-24 border-t border-white/10 overflow-hidden">

      {/* Animated subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl animate-float-slow -top-40 -left-40" />
        <div className="absolute w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl animate-float-slower bottom-[-200px] right-[-150px]" />
      </div>

      <Container className="relative">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">

          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.15}>
              <div className="relative flex flex-col items-center justify-center p-10 rounded-2xl bg-slate-900/60 backdrop-blur border border-white/10 hover:border-violet-500/40 transition duration-300 min-h-[180px]">

                <div className="text-4xl md:text-5xl font-bold text-violet-400 mb-4 flex items-center">
                  <CountUp value={item.value} />
                  {item.suffix}
                </div>

                <div className="text-slate-400 text-sm md:text-base">
                  {item.label}
                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </Container>
    </section>
  );
}
