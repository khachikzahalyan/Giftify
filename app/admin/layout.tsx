import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-950">

      <aside className="w-64 border-r border-white/10 p-6">
        <h2 className="text-lg font-semibold mb-10">
          Admin Panel
        </h2>

        <nav className="flex flex-col gap-4 text-slate-400">
          <Link href="/admin/dashboard" className="hover:text-white">
            Dashboard
          </Link>
          <Link href="/admin/pricing" className="hover:text-white">
            Pricing
          </Link>
          <Link href="/admin/content" className="hover:text-white">
            Content
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
