"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
    <motion.div className="min-h-screen" key={pathname}>

        {children}
      </motion.div>
    </AnimatePresence>
  );
}
