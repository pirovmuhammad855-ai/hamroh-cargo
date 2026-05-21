"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { getSiteContent } from "@/data/site";
import { toLocale } from "@/lib/navigation";
import { useParams } from "next/navigation";

export default function TrackingPage() {
  const params = useParams<{ locale: string }>();
  const t = getSiteContent(toLocale(params.locale)).tracking;
  const [code, setCode] = useState("");

  return (
    <section className="py-20">
      <div className="section-shell max-w-4xl">
        <div className="rounded-[8px] border border-slate-200 bg-white p-8 shadow-premium">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">{t.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-6xl">{t.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{t.text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input value={code} onChange={(event) => setCode(event.target.value)} placeholder={t.placeholder} className="min-h-12 flex-1 rounded-full border border-slate-200 px-5 text-sm outline-none focus:border-brand-500" />
            <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-600 px-6 text-sm font-bold text-white">
              <Search size={17} /> {t.search}
            </button>
          </div>
          <div className="mt-8 rounded-[8px] bg-slate-50 p-5 text-sm leading-6 text-muted">
            {code ? t.result : t.empty}
          </div>
        </div>
      </div>
    </section>
  );
}
