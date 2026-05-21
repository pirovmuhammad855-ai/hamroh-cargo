export function SectionHeader({
  eyebrow,
  title,
  text,
  tone = "light"
}: {
  eyebrow: string;
  title: string;
  text: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className={`mb-3 text-sm font-semibold uppercase tracking-[0.18em] ${tone === "dark" ? "text-sky-200" : "text-brand-600"}`}>{eyebrow}</p>
      <h2 className={`text-3xl font-semibold tracking-tight md:text-5xl ${tone === "dark" ? "text-white" : "text-ink"}`}>{title}</h2>
      <p className={`mt-4 text-base leading-7 md:text-lg ${tone === "dark" ? "text-slate-300" : "text-muted"}`}>{text}</p>
    </div>
  );
}
