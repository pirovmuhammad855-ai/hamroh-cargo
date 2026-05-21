"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { contacts, getSiteContent } from "@/data/site";
import { navLabels, routes, type Locale } from "@/lib/navigation";

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const t = getSiteContent(locale);
  const labels = navLabels[locale];

  return (
    <header className="sticky top-0 z-50 border-b border-sky-400/15 bg-slate-950/72 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <Link href={`/${locale}`} className="flex items-center gap-3" aria-label="Hamroh Cargo home">
          <span className="relative grid size-11 place-items-center overflow-hidden rounded-[8px] border border-sky-300/30 bg-slate-900 shadow-[0_0_28px_rgba(37,99,235,0.42)]">
            <Image src="/media/brand/round-emblem.png" alt="" fill sizes="44px" className="object-cover" />
          </span>
          <span>
            <span className="block text-sm font-bold leading-4 text-white">Hamroh Cargo</span>
            <span className="block text-xs text-sky-200/70">{t.hero.trust}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {[
            { href: "", key: "home" },
            { href: "/services", key: "services" },
            { href: "/tracking", key: "pricing" },
            { href: "/faq", key: "faq" },
            { href: "/reviews", key: "reviews" },
            { href: "/contact", key: "contacts" }
          ].map((route) => (
            <Link
              key={route.href}
              href={`/${locale}${route.href}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-sky-400/10 hover:text-sky-100 hover:shadow-[0_0_22px_rgba(56,189,248,0.18)]"
            >
              {labels[route.key]}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          {(["tj", "ru", "en", "zh"] as const).map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className={`rounded-full px-3 py-2 text-xs font-semibold uppercase ${item === locale ? "bg-sky-400/15 text-sky-100" : "text-slate-400 hover:bg-sky-400/10"}`}
            >
              {item}
            </Link>
          ))}
          <Button href={contacts.whatsapp}>{t.hero.navCta}</Button>
        </div>
        <button
          className="grid size-10 place-items-center rounded-full border border-sky-300/20 bg-slate-900 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Open menu"
        >
          <Menu size={19} />
        </button>
      </div>
      {open ? (
        <div className="border-t border-sky-400/15 bg-slate-950 p-4 lg:hidden">
          <div className="grid gap-2">
            {routes.map((route) => (
              <Link key={route.href} href={`/${locale}${route.href}`} className="rounded-[8px] px-4 py-3 text-sm font-semibold text-slate-100">
                {labels[route.key]}
              </Link>
            ))}
            <Button href={contacts.whatsapp} className="mt-2">
              {t.hero.navCta}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
