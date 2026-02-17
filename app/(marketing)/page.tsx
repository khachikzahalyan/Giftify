import Hero from "@/components/marketing/Hero";
import Features from "@/components/marketing/Features";
import WhySection from "@/components/marketing/WhySection";
import Metrics from "@/components/marketing/Metrics";

import { IconWeb } from "@/components/icons/IconWeb";
import { IconAnalytics } from "@/components/icons/IconAnalytics";
import { IconMobile } from "@/components/icons/IconMobile";

export default function HomePage() {
  /* =========================
     HERO CONTENT (Editable)
  ========================== */
  const heroData = {
    titleLine1: "Complete Digital",
    titleHighlight: "Business Platform",
    description:
      "Ready-made Web, Admin and Mobile applications powered by the latest industry-leading technologies and built with enterprise-grade security standards.",
    primaryButton: {
      label: "Try Web Demo",
      href: "/demo/web",
    },
    secondaryButton: {
      label: "View Pricing",
      href: "/pricing",
    },
  };

  /* =========================
     FEATURES SECTION
  ========================== */
  const featuresData = {
    title: "Engineered For Modern Businesses",
    subtitle:
      "Attract more customers, streamline operations and maintain full visibility across your entire digital ecosystem.",
    items: [
      {
        id: "1",
        icon: <IconWeb />,
        title: "Modern Web Platform",
        description:
          "High-performance, SEO-optimized web experience designed for speed, scalability and conversion.",
      },
      {
        id: "2",
        icon: <IconAnalytics />,
        title: "Full Business Control",
        description:
          "Centralized admin dashboard with analytics, user management and operational control in real time.",
      },
      {
        id: "3",
        icon: <IconMobile />,
        title: "Mobile Applications",
        description:
          "Native-ready mobile apps that increase engagement, retention and long-term customer loyalty.",
      },
    ],
  };

  /* =========================
     METRICS SECTION
  ========================== */
  const metricsData = [
    {
      id: "1",
      value: 120,
      suffix: "+",
      label: "Active Businesses",
    },
    {
      id: "2",
      value: 30,
      suffix: " Days",
      label: "Average Launch Time",
    },
    {
      id: "3",
      value: 2,
      suffix: "x",
      label: "Revenue Growth",
    },
  ];

  return (
    <>
      <Hero content={heroData} />

      <Features
        title={featuresData.title}
        subtitle={featuresData.subtitle}
        items={featuresData.items}
      />

      <Metrics items={metricsData} />

      <WhySection />
    </>
  );
}
