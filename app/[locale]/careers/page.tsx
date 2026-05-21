import { StandardPage } from "@/components/pages/StandardPage";
import { getSiteContent } from "@/data/site";
import { toLocale } from "@/lib/navigation";

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale = toLocale(locale);
  const page = getSiteContent(safeLocale).pages.careers;
  return <StandardPage locale={safeLocale} {...page} />;
}
