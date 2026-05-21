"use client";
import Link from "next/link";
import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { clsx } from "clsx";
import { motion } from "framer-motion";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "glass" | "glow";
  icon?: ReactNode;
  loading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
} & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
);

export function Button({
  children,
  className,
  variant = "primary",
  icon,
  loading = false,
  href,
  ...props
}: ButtonBaseProps) {
  const sharedProps = {
    className: clsx(
      "inline-flex min-h-11 items-center justify-center rounded-button px-6 text-base font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-electric-400 gap-2 select-none",
      variant === "primary" &&
        "bg-brand-600 text-white shadow-glow hover:bg-brand-700 hover:shadow-blue-500/40",
      variant === "secondary" &&
        "border border-slate-200 bg-white text-ink shadow-card hover:border-brand-200 hover:text-brand-700",
      variant === "ghost" &&
        "text-slate-300 hover:bg-slate-800/60 hover:text-white",
      variant === "glass" &&
        "glass text-white hover:blue-glow",
      variant === "glow" &&
        "bg-gradient-to-r from-electric-400 to-brand-600 text-white shadow-glow glow-hover",
      loading && "opacity-60 pointer-events-none",
      className
    ),
    "aria-busy": loading,
    "aria-disabled": loading,
    tabIndex: 0,
    whileTap: { scale: 0.97 },
    whileHover: {
      filter: variant === "glow" ? "brightness(1.12) saturate(1.2)" : undefined,
      boxShadow:
        variant === "glow"
          ? "0 0 0 2px #38bdf8, 0 0 32px 8px #2563eb44"
          : undefined,
    },
  };

  if (href) {
    // External or internal link
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} {...sharedProps}>
          {icon && <span className="mr-2 flex items-center">{icon}</span>}
          <span className="relative z-10">{children}</span>
          {loading && (
            <span className="ml-2 animate-spin rounded-full border-2 border-t-transparent border-white w-4 h-4" />
          )}
        </motion.a>
      </Link>
    );
  }
  // Button
  return (
    <motion.button type="button" disabled={loading} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} {...sharedProps}>
      {icon && <span className="mr-2 flex items-center">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {loading && (
        <span className="ml-2 animate-spin rounded-full border-2 border-t-transparent border-white w-4 h-4" />
      )}
    </motion.button>
  );
}
