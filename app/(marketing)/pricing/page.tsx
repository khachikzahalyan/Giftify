import PricingPage, {
  PricingPlan,
} from "@/components/marketing/PricingSection";

const pricingData = {
  title: "Pricing Plans",
  subtitle: "Simple and transparent pricing for your business.",
  plans: [
    {
      id: "1",
      name: "Web + Admin",
      price: "$100",
      features: ["Full Web App", "Admin Dashboard"],
      buttonText: "Get Started",
      buttonLink: "/contact",
      variant: "primary",
    },
    {
      id: "2",
      name: "Full Package",
      price: "$200",
      popular: true,
      features: ["Web App", "Admin", "iOS", "Android"],
      buttonText: "Get Started",
      buttonLink: "/contact",
      variant: "primary",
    },
    {
      id: "3",
      name: "Enterprise",
      price: "Custom",
      features: ["Custom Features", "Dedicated Support"],
      buttonText: "Contact Us",
      buttonLink: "/contact",
      variant: "outline",
    },
  ] as PricingPlan[],
};

export default function Page() {
  return <PricingPage content={pricingData} />;
}
