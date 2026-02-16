import Link from "next/link";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition duration-300";

  const styles = {
    primary:
      "bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/20",
    outline:
      "border border-white/20 hover:border-white/40 text-white bg-transparent",
  };

  if (href) {
    return (
      <Link href={href} className={clsx(base, styles[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={clsx(base, styles[variant], className)}>
      {children}
    </button>
  );
}
