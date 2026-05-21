import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contacts, getSiteContent } from "@/data/site";
import type { Locale } from "@/lib/navigation";

export function BlogCta({ locale }: { locale: Locale }) {
  const { blog } = getSiteContent(locale);
  return (
    <section id="start" className="py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[8px] bg-ink p-8 text-white shadow-premium">
          <p className="text-sm font-semibold text-blue-200">Hamroh Assistant</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">{blog.ctaTitle}</h2>
          <p className="mt-5 text-base leading-7 text-slate-300">{blog.ctaText}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href={contacts.telegram} className="bg-white text-ink hover:bg-blue-50">{blog.telegram}</Button>
            <Button href={contacts.whatsapp} variant="secondary">{blog.whatsapp}</Button>
          </div>
        </div>
        <div className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-700">{blog.eyebrow}</p>
              <h3 className="text-2xl font-bold text-ink">{blog.title}</h3>
            </div>
            <Button href={`/${locale}/blog`} variant="ghost" className="gap-2">{blog.viewAll} <ArrowRight size={16} /></Button>
          </div>
          <div className="grid gap-3">
            {blog.posts.map((post) => (
              <article key={post.title} className="rounded-[8px] border border-slate-100 bg-slate-50 p-5">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-700">
                  <span>{post.category}</span>
                  <span className="text-slate-300">/</span>
                  <span>{post.date}</span>
                </div>
                <p className="mt-3 text-lg font-bold text-ink">{post.title}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
