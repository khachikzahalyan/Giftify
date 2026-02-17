"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../ui/Container";
import { IconBrand } from "@/components/icons/IconBrand";
import { motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/pricing", label: "Pricing" },
    { href: "/demo/web", label: "Web Demo" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur border-b border-white/10 bg-slate-950/70">
      <Container className="flex items-center justify-between h-16">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 font-semibold text-lg">
          <IconBrand className="w-8 h-8" />
          <span className="tracking-tight">
            Giftify Demo
          </span>
        </Link>

        {/* NAV */}
        <nav className="flex items-center gap-3 text-sm relative">

          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 rounded-lg transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute inset-0 rounded-lg bg-violet-600/20 border border-violet-500/30 backdrop-blur"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                <span
                  className={`relative z-10 transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}

        </nav>

      </Container>
    </header>
  );
}
