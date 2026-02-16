import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

export default function Features() {
  return (
    <section className="py-24 border-t border-white/10">
      <Container>

        <SectionTitle
          title="Everything You Need To Scale"
          subtitle="Build faster, attract more customers and stay in control."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <Card>
            <div className="text-violet-400 text-4xl mb-6">🌐</div>
            <h3 className="text-xl font-semibold mb-4">
              Modern Web Platform
            </h3>
            <p className="text-slate-400">
              Fast, responsive and conversion optimized.
            </p>
          </Card>

          <Card>
            <div className="text-indigo-400 text-4xl mb-6">📊</div>
            <h3 className="text-xl font-semibold mb-4">
              Full Business Control
            </h3>
            <p className="text-slate-400">
              Manage everything from one dashboard.
            </p>
          </Card>

          <Card>
            <div className="text-pink-400 text-4xl mb-6">📱</div>
            <h3 className="text-xl font-semibold mb-4">
              Mobile Applications
            </h3>
            <p className="text-slate-400">
              iOS & Android apps included.
            </p>
          </Card>

        </div>
      </Container>
    </section>
  );
}
