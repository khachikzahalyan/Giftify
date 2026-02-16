export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-slate-900/60 backdrop-blur border border-white/10 rounded-2xl p-8 hover:border-violet-500/40 transition ${className}`}
    >
      {children}
    </div>
  );
}
