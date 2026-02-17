import PricingSection, {
  PricingPlan,
} from "@/components/marketing/PricingSection";

const pricingData = {
  title: "Simple Pricing",
  subtitle:
    "Choose the plan that fits your growth stage. Upgrade anytime as your business scales.",
  plans: [
    {
      id: "1",
      name: "Starter",
      price: "$99",
      description: "Perfect for small teams launching fast.",
      features: [
        "Full Web Application",
        "Admin Dashboard",
        "Basic Analytics",
        "Email Support",
      ],
      buttonText: "Get Started",
      buttonLink: "/contact",
      variant: "outline",
    },
    {
      id: "2",
      name: "Growth",
      price: "$199",
      popular: true,
      description: "Best for scaling businesses.",
      features: [
        "Web + Admin",
        "iOS Application",
        "Android Application",
        "Advanced Analytics",
        "Priority Support",
      ],
      buttonText: "Start Growing",
      buttonLink: "/contact",
      variant: "primary",
    },
    {
      id: "3",
      name: "Enterprise",
      price: "Custom",
      description: "Built for high-scale operations.",
      features: [
        "Custom Integrations",
        "Dedicated Infrastructure",
        "Advanced Security",
        "Personal Account Manager",
      ],
      buttonText: "Contact Sales",
      buttonLink: "/contact",
      variant: "outline",
    },
  ] as PricingPlan[],
};

export default function Page() {
  return <PricingSection content={pricingData} />;
}
