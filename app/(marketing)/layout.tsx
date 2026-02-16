import Link from "next/link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Giftify <span className="text-violet-400">Demo</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <Link href="/pricing" className="hover:text-white transition">
              Pricing
            </Link>
            <Link href="/demo/web" className="hover:text-white transition">
              Web Demo
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
            <Link
              href="/admin/login"
              className="bg-violet-600 hover:bg-violet-500 transition px-4 py-2 rounded-xl text-white"
            >
              Admin
            </Link>
          </nav>

        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 mt-24">
        <div className="max-w-7xl mx-auto px-6 text-sm text-slate-400">
          © {new Date().getFullYear()} Giftify Platform
        </div>
      </footer>
    </div>
  );
}
