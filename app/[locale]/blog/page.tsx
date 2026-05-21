import { BlogCta } from "@/sections/BlogCta";
import { toLocale } from "@/lib/navigation";

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale = toLocale(locale);
  return <BlogCta locale={safeLocale} />;
}
