"use client";

import { ArrowRight, MessageCircle, Send } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { contacts, getSiteContent } from "@/data/site";
import type { Locale } from "@/lib/navigation";

export function Hero({ locale }: { locale: Locale }) {
  const t = getSiteContent(locale);

  return (
    <section className="relative overflow-hidden bg-[#020617] text-white">
      <Image src="/media/brand/warehouse-cinematic.png" alt="" fill priority sizes="100vw" className="object-cover opacity-55" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.96)_0%,rgba(2,6,23,0.76)_43%,rgba(2,6,23,0.26)_100%)]" />
      <div className="absolute inset-0 soft-grid opacity-20" />
      <div className="absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.28),transparent_34%)]" />
      <div className="section-shell relative grid min-h-[calc(100vh-64px)] items-center gap-12 py-14 lg:grid-cols-[1.06fr_0.94fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-5 inline-flex rounded-full border border-sky-300/25 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-100 shadow-[0_0_28px_rgba(56,189,248,0.18)] backdrop-blur-xl">
            {t.hero.eyebrow}
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            {t.hero.title}
            <span className="block bg-gradient-to-r from-sky-200 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              {t.hero.alt}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">{t.hero.text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={contacts.whatsapp} className="gap-2">
              {t.hero.whatsapp} <MessageCircle size={17} />
            </Button>
            <Button href="/tj/tracking" variant="secondary" className="gap-2 border-sky-300/20 bg-white/10 text-white backdrop-blur-xl hover:bg-white/15">
              {t.hero.calculate} <ArrowRight size={17} />
            </Button>
            <Button href={contacts.telegram} variant="secondary" className="gap-2 border-sky-300/20 bg-white/10 text-white backdrop-blur-xl hover:bg-white/15">
              <Send size={17} /> {t.hero.operator}
            </Button>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {t.hero.chips.map((item) => (
              <div key={item} className="rounded-[8px] border border-sky-300/15 bg-white/5 p-3 text-xs font-semibold text-sky-100 backdrop-blur-xl">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.1 }} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-slate-950 blue-glow">
            <Image src="/media/brand/hero-logo-glass.png" alt="Hamroh Cargo logistics brand" fill priority sizes="(min-width: 1024px) 42vw, 90vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-sky-950/20" />
            <div className="absolute -right-16 top-12 h-40 w-40 rounded-full bg-sky-400/25 blur-3xl" />
            <GlassCard className="dark-glass absolute left-5 right-5 top-5 p-4">
              <p className="text-xs font-semibold uppercase text-sky-200">{t.hero.route}</p>
              <div className="mt-3 flex items-center justify-between text-sm font-bold text-white">
                <span>Guangzhou</span>
                <span className="mx-3 h-px flex-1 bg-sky-300/30" />
                <span>Dushanbe</span>
              </div>
            </GlassCard>
            <GlassCard className="dark-glass absolute bottom-5 left-5 right-5">
              <p className="text-sm font-bold text-white">{t.hero.trust}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{t.hero.workflow}</p>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
