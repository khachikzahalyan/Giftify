export default function PricingPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <h2 className="text-4xl font-bold text-center mb-16">
        Pricing Plans
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {/* PLAN 1 */}
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-4">Web + Admin</h3>
          <p className="text-4xl font-bold mb-6">$100</p>

          <ul className="space-y-3 text-slate-400 mb-8">
            <li>✔ Full Web App</li>
            <li>✔ Admin Dashboard</li>
          </ul>

          <button className="w-full bg-violet-600 py-3 rounded-xl">
            Get Started
          </button>
        </div>

        {/* PLAN 2 (Highlighted) */}
        <div className="relative bg-slate-900 border-2 border-violet-600 rounded-2xl p-8">
          <span className="absolute -top-3 right-6 bg-violet-600 text-xs px-3 py-1 rounded-full">
            Popular
          </span>

          <h3 className="text-xl font-semibold mb-4">Full Package</h3>
          <p className="text-4xl font-bold mb-6">$200</p>

          <ul className="space-y-3 text-slate-400 mb-8">
            <li>✔ Web App</li>
            <li>✔ Admin</li>
            <li>✔ iOS</li>
            <li>✔ Android</li>
          </ul>

          <button className="w-full bg-violet-600 py-3 rounded-xl">
            Get Started
          </button>
        </div>

        {/* PLAN 3 */}
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
          <p className="text-4xl font-bold mb-6">Custom</p>

          <ul className="space-y-3 text-slate-400 mb-8">
            <li>✔ Custom Features</li>
            <li>✔ Dedicated Support</li>
          </ul>

          <button className="w-full border border-white/20 py-3 rounded-xl">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}
