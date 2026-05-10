"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/**
 * Subtle fade-up reveal saat element masuk viewport.
 * Otomatis dinonaktifkan kalau user mengaktifkan prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, y = 24, className }: Props) {
  const reduced = useReducedMotion();
  const shouldAnimate = !reduced;

  return (
    <motion.div
      initial={shouldAnimate ? { opacity: 0, y } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
