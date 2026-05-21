import Image from "next/image";
import { Bell, MessageCircle, PackageCheck, ScanLine, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contacts, getSiteContent } from "@/data/site";
import type { Locale } from "@/lib/navigation";

export function MobileAppShowcase({ locale }: { locale: Locale }) {
  const { mobile } = getSiteContent(locale);
  const mobileFeatures: Array<[string, LucideIcon]> = mobile.features.map((feature, index) => [
    feature,
    [ScanLine, PackageCheck, Bell, MessageCircle][index] ?? ScanLine
  ]);

  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_35%,rgba(56,189,248,0.18),transparent_42%)]" />
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">{mobile.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-6xl">{mobile.title}</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
            {mobile.text}
          </p>
          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
            {mobileFeatures.map(([label, Icon]) => (
              <div key={label} className="rounded-[8px] border border-slate-200 bg-slate-50 p-4">
                <Icon className="text-brand-600" size={20} />
                <p className="mt-3 text-sm font-bold text-ink">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href={contacts.telegram}>{mobile.cta}</Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -left-6 top-10 size-28 rounded-[8px] bg-white p-3 shadow-premium">
            <Image src="/media/brand/app-icon.png" alt="Hamroh app icon" width={144} height={144} className="size-full rounded-[8px] object-cover" />
          </div>
          <div className="relative ml-auto aspect-[9/16] w-[min(340px,76vw)] overflow-hidden rounded-[36px] border-[10px] border-slate-950 bg-slate-950 shadow-[0_34px_100px_rgba(15,23,42,0.28)]">
            <Image src="/media/brand/mobile-road.png" alt="Hamroh Cargo mobile app visual" fill sizes="340px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-slate-950/20" />
            <div className="absolute bottom-5 left-5 right-5 rounded-[8px] border border-sky-300/20 bg-slate-950/70 p-4 text-white backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase text-sky-200">{mobile.status}</p>
              <p className="mt-2 text-sm font-bold">{mobile.route}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
