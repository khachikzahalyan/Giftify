import Container from "../ui/Container";

type HeroContent = {
  titleLine1: string;
  titleHighlight: string;
  description: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
};

type Props = {
  content: HeroContent;
};

export default function Hero({ content }: Props) {
  return (
    <section className="relative overflow-hidden pt-32 pb-40 text-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-700/20 via-indigo-600/10 to-transparent blur-3xl" />

      <Container className="relative">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          {content.titleLine1} <br />
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            {content.titleHighlight}
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
          {content.description}
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href={content.primaryButton.href}
            className="bg-violet-600 hover:bg-violet-500 transition px-6 py-3 rounded-xl text-white font-medium"
          >
            {content.primaryButton.label}
          </a>

          <a
            href={content.secondaryButton.href}
            className="border border-white/20 hover:border-white/40 transition px-6 py-3 rounded-xl"
          >
            {content.secondaryButton.label}
          </a>
        </div>
      </Container>
    </section>
  );
}
