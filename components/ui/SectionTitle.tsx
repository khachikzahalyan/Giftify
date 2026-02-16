export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold">{title}</h2>
      {subtitle && (
        <p className="mt-6 text-slate-400 text-lg">{subtitle}</p>
      )}
    </div>
  );
}
