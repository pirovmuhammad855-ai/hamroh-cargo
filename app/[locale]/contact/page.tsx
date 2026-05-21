import { Phone, Mail, MessageCircle, Send, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { contacts, getSiteContent } from "@/data/site";
import { toLocale } from "@/lib/navigation";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale = toLocale(locale);
  const t = getSiteContent(safeLocale).contactPage;
  const contactCards: Array<[string, string, LucideIcon]> = [
    [t.whatsapp, "+992501222235", MessageCircle],
    [t.telegram, "@Hamrohassistant", Send],
    [t.phone, contacts.phones.join(" / "), Phone],
    [t.email, contacts.email, Mail]
  ];

  return (
    <section className="relative overflow-hidden bg-[#020617] py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.32),transparent_34%)]" />
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">{t.eyebrow}</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white">{t.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">{t.text}</p>
          <div className="mt-8 flex gap-3">
            <Button href={contacts.whatsapp}>{t.whatsapp}</Button>
            <Button href={contacts.telegram} variant="secondary" className="border-sky-300/20 bg-white/10 text-white hover:bg-white/15">{t.telegram}</Button>
          </div>
          <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-[8px] border border-sky-300/20 shadow-[0_0_60px_rgba(37,99,235,0.24)]">
            <Image src="/media/brand/business-card.png" alt="Hamroh Cargo business card branding" fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent" />
          </div>
        </div>
        <div className="relative grid gap-4">
          {contactCards.map(([label, value, Icon]) => (
            <div key={label} className="rounded-[8px] border border-sky-300/20 bg-white/[0.07] p-6 shadow-sm backdrop-blur-xl">
              <Icon className="text-sky-200" size={22} />
              <p className="mt-4 text-sm font-semibold text-slate-400">{label}</p>
              <p className="mt-1 text-xl font-bold text-white">{value}</p>
            </div>
          ))}
          <div className="rounded-[8px] border border-sky-300/20 bg-slate-900/70 p-6 backdrop-blur-xl">
            <p className="text-sm font-semibold text-sky-200">{t.map}</p>
            <div className="mt-4 h-40 rounded-[8px] bg-[linear-gradient(135deg,rgba(14,165,233,0.28),rgba(15,23,42,0.88)),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:auto,28px_28px,28px_28px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
