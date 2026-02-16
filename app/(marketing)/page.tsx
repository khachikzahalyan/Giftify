import Hero from "@/components/marketing/Hero";
import Features from "@/components/marketing/Features";
import WhySection from "@/components/marketing/WhySection";

export default function HomePage() {
  const heroData = {
    titleLine1: "Complete Digital",
    titleHighlight: "Business Platform",
    description:
      "Ready-made Web, Admin and Mobile applications. Launch your product in days instead of months.",
    primaryButton: {
      label: "Try Web Demo",
      href: "/demo/web",
    },
    secondaryButton: {
      label: "View Pricing",
      href: "/pricing",
    },
  };

  const featuresData = {
    title: "Everything You Need To Scale",
    subtitle:
      "Build faster, attract more customers and stay in control.",
    items: [
      {
        id: "1",
        icon: "🌐",
        title: "Modern Web Platform",
        description: "Fast, responsive and conversion optimized.",
      },
      {
        id: "2",
        icon: "📊",
        title: "Full Business Control",
        description: "Manage everything from one dashboard.",
      },
      {
        id: "3",
        icon: "📱",
        title: "Mobile Applications",
        description: "iOS & Android apps included.",
      },
    ],
  };

  return (
    <>
      <Hero content={heroData} />

      <Features
        title={featuresData.title}
        subtitle={featuresData.subtitle}
        items={featuresData.items}
      />

      <WhySection />
    </>
  );
}
