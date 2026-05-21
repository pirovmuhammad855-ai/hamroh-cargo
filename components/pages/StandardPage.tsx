import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { contacts, getSiteContent } from "@/data/site";
import type { Locale } from "@/lib/navigation";

export function StandardPage({
  eyebrow,
  title,
  text,
  items,
  locale
}: {
  eyebrow: string;
  title: string;
  text: string;
  items: string[];
  locale: Locale;
}) {
  const t = getSiteContent(locale);

  return (
    <section className="py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-6xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{text}</p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href={contacts.whatsapp}>{t.standardButtons.operator}</Button>
            <Button href={contacts.telegram} variant="secondary">{t.standardButtons.telegram}</Button>
          </div>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <GlassCard key={item}>
              <p className="text-lg font-bold text-ink">{item}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{t.standardCardText}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
