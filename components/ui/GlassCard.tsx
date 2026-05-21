"use client";
import type { ReactNode } from "react";
import { clsx } from "clsx";
import { motion } from "framer-motion";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  glow?: boolean;
  animate?: boolean;
};

export function GlassCard({ children, className, dark = false, glow = false, animate = true }: GlassCardProps) {
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 32 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : false}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className={clsx(
        dark ? "dark-glass" : "glass",
        "rounded-card p-8 shadow-card transition-all duration-300",
        glow && "blue-glow",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
