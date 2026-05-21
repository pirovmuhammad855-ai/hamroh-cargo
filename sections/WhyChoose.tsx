import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { getSiteContent, iconMap } from "@/data/site";
import type { Locale } from "@/lib/navigation";

export function WhyChoose({ locale }: { locale: Locale }) {
  const { why } = getSiteContent(locale);
  return (
    <section className="py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow={why.eyebrow}
          title={why.title}
          text={why.text}
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {why.items.map((item, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <Reveal key={item.title} delay={index * 0.03}>
                <GlassCard className="h-full transition duration-300 hover:-translate-y-1 hover:shadow-glass">
                  <div className="mb-5 grid size-11 place-items-center rounded-[8px] bg-brand-50 text-brand-600">
                    <Icon size={21} />
                  </div>
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
