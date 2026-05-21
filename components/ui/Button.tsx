import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { clsx } from "clsx";

type ButtonProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <Link
      className={clsx(
        "inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition duration-300 focus:outline-none focus:ring-4 focus:ring-brand-100",
        variant === "primary" && "bg-brand-600 text-white shadow-lg shadow-blue-500/25 hover:bg-brand-700",
        variant === "secondary" && "border border-slate-200 bg-white text-ink shadow-sm hover:border-brand-200 hover:text-brand-700",
        variant === "ghost" && "text-slate-600 hover:bg-slate-100 hover:text-ink",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
