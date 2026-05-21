import { Package, Plane, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getSiteContent } from "@/data/site";
import type { Locale } from "@/lib/navigation";

export function ProcessTimeline({ locale }: { locale: Locale }) {
  const { process } = getSiteContent(locale);
  return (
    <section className="bg-white py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow={process.eyebrow}
          title={process.title}
          text={process.text}
        />
        <div className="relative grid gap-4 lg:grid-cols-7">
          {process.steps.map((step, index) => (
            <div key={step} className="group relative rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-100 hover:shadow-premium">
              <div className="mb-6 flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-[8px] bg-brand-50 text-brand-600">
                  {index < 2 ? <Package size={18} /> : index < 5 ? <Plane size={18} /> : <ShieldCheck size={18} />}
                </span>
                <span className="text-xs font-bold text-slate-300">0{index + 1}</span>
              </div>
              <p className="text-sm font-bold text-ink">{step}</p>
              <div className="mt-4 h-1 rounded-full bg-slate-100">
                <div className="h-1 rounded-full bg-brand-500 transition-all duration-500 group-hover:w-full" style={{ width: `${Math.max(18, (index + 1) * 13)}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
