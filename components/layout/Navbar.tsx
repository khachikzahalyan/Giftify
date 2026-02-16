import Link from "next/link";
import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur border-b border-white/10 bg-slate-950/70">
      <Container className="flex items-center justify-between h-16">

        <Link href="/" className="font-bold text-lg">
          Giftify Demo
        </Link>

        <nav className="flex items-center gap-6 text-sm text-slate-300">
          <Link href="/pricing" className="hover:text-white transition">
            Pricing
          </Link>
          <Link href="/demo/web" className="hover:text-white transition">
            Web Demo
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>

        </nav>

      </Container>
    </header>
  );
}
