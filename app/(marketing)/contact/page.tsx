
import Container from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";

type ContactContent = {
  title: string;
  description: string;
  email: string;
};

export default function ContactPage() {
  const content: ContactContent = {
    title: "Get In Touch",
    description:
      "Have questions about the platform or need a custom solution? Contact us and we'll help you launch your digital business.",
    email: "info@giftify.am",
  };

  return (
    <section className="py-28 border-t border-white/10">
      <Container>

        {/* HEADER */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold">
              {content.title}
            </h1>

            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              {content.description}
            </p>
          </div>
        </Reveal>

        {/* CONTACT CARD */}
        <Reveal delay={0.2}>
          <div className="mt-16 max-w-3xl mx-auto">

            <div className="bg-slate-900/60 backdrop-blur border border-white/10 rounded-2xl p-10 flex flex-col min-h-[300px] transition hover:border-violet-500/40">

              <div className="text-5xl text-center text-indigo-400 mb-6">
                ✉️
              </div>

              <div className="flex-grow text-center">
                <h3 className="text-xl font-semibold mb-4">
                  Email Us
                </h3>

                <p className="text-slate-400">
                  {content.email}
                </p>
              </div>

              <div className="mt-10 text-center">
                <Button href={`mailto:${content.email}`}>
                  Send Email
                </Button>
              </div>

            </div>

          </div>
        </Reveal>

      </Container>
    </section>
  );
}
