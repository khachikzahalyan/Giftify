import Hero, { HeroContent } from "@/components/marketing/Hero";
import Features from "@/components/marketing/Features";
import WhySection from "@/components/marketing/WhySection";

const heroData: HeroContent = {
  titleLine1: "Complete Digital",
  titleHighlight: "Business Platform",
  description:
    "Ready-made Web, Admin and Mobile applications. Launch your product in days instead of months.",
  primaryButtonText: "Try Web Demo",
  primaryButtonLink: "/demo/web",
  secondaryButtonText: "View Pricing",
  secondaryButtonLink: "/pricing",
};

export default function HomePage() {
  return (
    <>
      <Hero content={heroData} />
      <Features />
      <WhySection />
    </>
  );
}
