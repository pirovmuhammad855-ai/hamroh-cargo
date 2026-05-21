import { ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getSiteContent } from "@/data/site";
import type { Locale } from "@/lib/navigation";

export function AdminPreview({ locale }: { locale: Locale }) {
  const { admin } = getSiteContent(locale);
  return (
    <section className="bg-white py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow={admin.eyebrow}
          title={admin.title}
          text={admin.text}
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {admin.modules.map((module) => {
            const Icon = module.icon;
            return (
              <div key={module.title} className="rounded-[8px] border border-slate-200 bg-slate-50 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-[8px] bg-white text-brand-600 shadow-sm"><Icon size={19} /></span>
                  <ShieldCheck className="text-emerald-500" size={17} />
                </div>
                <h3 className="font-bold text-ink">{module.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{module.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
