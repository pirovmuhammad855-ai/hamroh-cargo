"use client";

import { Copy, MapPin, QrCode } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getSiteContent } from "@/data/site";
import type { Locale } from "@/lib/navigation";

export function Warehouses({ locale }: { locale: Locale }) {
  const { warehouses } = getSiteContent(locale);
  return (
    <section className="py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow={warehouses.eyebrow}
          title={warehouses.title}
          text={warehouses.text}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {warehouses.items.map((warehouse) => (
            <article key={warehouse.city} className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
              <div className="h-36 bg-[linear-gradient(135deg,#EFF6FF,#FFFFFF_48%,#DBEAFE)] p-5">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-[8px] bg-white text-brand-600 shadow-sm"><MapPin size={20} /></span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-700">{warehouse.hours}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-ink">{warehouse.city}</h3>
              </div>
              <div className="p-6">
                <p className="text-sm leading-6 text-muted">{warehouse.address}</p>
                <p className="mt-3 text-sm font-semibold text-ink">{warehouse.manager}</p>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => navigator.clipboard?.writeText(warehouse.address)}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-600 px-4 py-3 text-sm font-bold text-white"
                  >
                    <Copy size={16} /> {warehouses.copy}
                  </button>
                  <button className="grid size-11 place-items-center rounded-full border border-slate-200 text-brand-600" aria-label="QR code">
                    <QrCode size={18} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
