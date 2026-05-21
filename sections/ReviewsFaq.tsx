"use client";

import { ChevronDown, Star } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getSiteContent } from "@/data/site";
import type { Locale } from "@/lib/navigation";

export function ReviewsFaq({ locale }: { locale: Locale }) {
  const { reviewsFaq } = getSiteContent(locale);
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-slate-50 py-20">
      <div className="section-shell grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow={reviewsFaq.reviewsEyebrow} title={reviewsFaq.reviewsTitle} text={reviewsFaq.reviewsText} />
          <div className="grid gap-4">
            {reviewsFaq.reviews.map((review) => (
              <article key={review.name} className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
                <div className="mb-3 flex gap-1 text-amber-400">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}</div>
                <p className="text-sm leading-6 text-slate-600">“{review.text}”</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm font-bold text-ink">{review.name}, {review.city}</p>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">{review.channel}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div>
          <SectionHeader eyebrow={reviewsFaq.faqEyebrow} title={reviewsFaq.faqTitle} text={reviewsFaq.faqText} />
          <div className="grid gap-3">
            {reviewsFaq.faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-[8px] border border-slate-200 bg-white">
                <button onClick={() => setOpen(index)} className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-ink">
                  {faq.question}
                  <ChevronDown className={`shrink-0 transition ${open === index ? "rotate-180" : ""}`} size={18} />
                </button>
                {open === index ? <p className="border-t border-slate-100 p-5 pt-4 text-sm leading-6 text-muted">{faq.answer}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
