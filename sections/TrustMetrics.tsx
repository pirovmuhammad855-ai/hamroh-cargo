"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { getSiteContent } from "@/data/site";
import type { Locale } from "@/lib/navigation";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });
  const rounded = useTransform(spring, (latest) => Math.round(latest).toLocaleString("en-US"));

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function TrustMetrics({ locale }: { locale: Locale }) {
  const { metrics } = getSiteContent(locale);
  return (
    <section className="bg-slate-50 py-16">
      <div className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {metrics.map((metric) => (
          <GlassCard key={metric.label} className="p-5 text-center">
            <p className="text-3xl font-semibold text-ink">
              <Counter value={metric.value} suffix={metric.suffix} />
            </p>
            <p className="mt-2 text-sm font-medium text-muted">{metric.label}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
