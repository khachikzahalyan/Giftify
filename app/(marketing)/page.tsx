export default function HomePage() {
  return (
    <section className="relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-violet-700/20 via-indigo-600/10 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-40 text-center">

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          Complete Digital <br />
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Business Platform
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
          Ready-made Web, Admin and Mobile applications.
          Launch your product in days instead of months.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="/demo/web"
            className="bg-violet-600 hover:bg-violet-500 transition px-6 py-3 rounded-xl text-white font-medium"
          >
            Try Web Demo
          </a>

          <a
            href="/pricing"
            className="border border-white/20 hover:border-white/40 transition px-6 py-3 rounded-xl"
          >
            View Pricing
          </a>
        </div>

      </div>
    </section>
  );
}
