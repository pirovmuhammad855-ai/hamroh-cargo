import { getSiteContent } from "@/data/site";
import { toLocale } from "@/lib/navigation";

export default async function AdminPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { admin } = getSiteContent(toLocale(locale));

  return (
    <section className="bg-slate-50 py-8">
      <div className="section-shell">
        <div className="mb-8 rounded-[8px] bg-ink p-8 text-white shadow-premium">
          <p className="text-sm font-semibold text-blue-200">{admin.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">{admin.title}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">{admin.text}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {admin.modules.map((module) => {
            const Icon = module.icon;
            return (
              <div key={module.title} className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
                <Icon className="text-brand-600" size={22} />
                <h2 className="mt-4 text-base font-bold text-ink">{module.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{module.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
