import Container from "../ui/Container";

export type FooterContent = {
  copyrightText: string;
};

export default function Footer({
  content,
}: {
  content: FooterContent;
}) {
  return (
    <footer className="border-t border-white/10 py-10 mt-20">
      <Container className="text-center text-slate-400 text-sm">
        {content.copyrightText}
      </Container>
    </footer>
  );
}
