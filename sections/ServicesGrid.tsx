import Image from "next/image";
import { ArrowRight, Plane, ShieldCheck, Store, Truck, Warehouse, Waypoints } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getSiteContent } from "@/data/site";
import type { Locale } from "@/lib/navigation";

const serviceIcons = [Plane, Truck, ShieldCheck, Store, Warehouse, Waypoints];

export function ServicesGrid({ locale }: { locale: Locale }) {
  const { services } = getSiteContent(locale);
  return (
    <section className="relative overflow-hidden bg-[#020617] py-20 text-white">
      <Image src="/media/brand/services-inspiration.png" alt="" fill sizes="100vw" className="object-cover opacity-28" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.94),rgba(5,16,35,0.82))]" />
      <div className="section-shell relative">
        <SectionHeader
          eyebrow={services.eyebrow}
          title={services.title}
          text={services.text}
          tone="dark"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, index) => {
            const Icon = serviceIcons[index] ?? Plane;
            return (
            <article key={service.title} className="group rounded-[8px] border border-sky-300/20 bg-white/[0.07] p-6 shadow-[0_24px_70px_rgba(2,6,23,0.32)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-sky-300/60 hover:shadow-[0_0_44px_rgba(56,189,248,0.22)]">
              <div className="mb-7 flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-[8px] border border-sky-300/20 bg-sky-400/10 text-sky-200">
                  <Icon size={22} />
                </span>
                <ArrowRight className="text-sky-200 opacity-60 transition group-hover:translate-x-1 group-hover:opacity-100" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
