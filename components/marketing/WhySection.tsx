import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../animations/Reveal";

type WhyItem = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

const whyData: WhyItem[] = [
  {
    id: "1",
    icon: "🚀",
    title: "More Customers",
    description:
      "Multi-platform presence increases visibility, engagement and conversion rates.",
  },
  {
    id: "2",
    icon: "📊",
    title: "Better Control",
    description:
      "Real-time analytics and management tools help you make smarter decisions.",
  },
  {
    id: "3",
    icon: "⚡",
    title: "Faster Growth",
    description:
      "Launch quickly and scale without technical complexity.",
  },
];

export default function WhySection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent blur-3xl pointer-events-none" />

      <Container className="relative">

        <Reveal>
          <SectionTitle
            title="Why This Platform Matters"
            subtitle="A complete digital ecosystem that grows with your business."
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12 mt-20 items-stretch">

          {whyData.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.15}>
              <div className="group relative flex flex-col h-full p-8 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur transition duration-300 hover:border-violet-500/40 hover:bg-slate-900/60">

                <div className="text-3xl mb-6">{item.icon}</div>

                <h4 className="text-lg font-semibold mb-4">
                  {item.title}
                </h4>

                <p className="text-slate-400 leading-relaxed flex-grow">
                  {item.description}
                </p>

                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-violet-600/10 to-indigo-600/10 pointer-events-none" />
              </div>
            </Reveal>
          ))}

        </div>

      </Container>
    </section>
  );
}
