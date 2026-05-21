import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MessageCircle, Send } from "lucide-react";
import { contacts, getSiteContent } from "@/data/site";
import { footerRoutes, navLabels, routes, type Locale } from "@/lib/navigation";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getSiteContent(locale);
  const labels = navLabels[locale];

  return (
    <footer className="relative overflow-hidden border-t border-sky-300/15 bg-[#020617] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(37,99,235,0.24),transparent_34%)]" />
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="relative">
          <div className="mb-4 flex items-center gap-3">
            <span className="relative grid size-12 place-items-center overflow-hidden rounded-[8px] border border-sky-300/20 bg-slate-900">
              <Image src="/media/brand/logo-mono.png" alt="" fill sizes="48px" className="object-cover" />
            </span>
            <div>
              <p className="font-bold text-white">Hamroh Cargo</p>
              <p className="text-sm text-sky-200/70">{t.hero.trust}</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">
            {t.footerDescription}
          </p>
        </div>
        <div className="relative">
          <p className="mb-4 text-sm font-bold text-white">{t.platform}</p>
          <div className="grid gap-2">
            {[...routes.slice(1), ...footerRoutes.slice(0, 2)].map((route) => (
              <Link key={route.href} href={`/${locale}${route.href}`} className="text-sm text-slate-400 hover:text-sky-200">
                {labels[route.key]}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative">
          <p className="mb-4 text-sm font-bold text-white">{t.contact}</p>
          <div className="grid gap-3 text-sm text-slate-400">
            <a className="flex items-center gap-2 hover:text-sky-200" href={contacts.telegram}><Send size={16} /> @Hamrohassistant</a>
            <a className="flex items-center gap-2 hover:text-sky-200" href={contacts.whatsapp}><MessageCircle size={16} /> +992501222235</a>
            <a className="flex items-center gap-2 hover:text-sky-200" href={contacts.instagram}><Instagram size={16} /> @hamroh.cargo</a>
            <a className="flex items-center gap-2 hover:text-sky-200" href={`mailto:${contacts.email}`}><Mail size={16} /> {contacts.email}</a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-sky-300/15 py-5 text-center text-xs text-slate-500">
        © 2026 Hamroh Cargo. Built for trust, speed, and scalable logistics.
      </div>
    </footer>
  );
}
