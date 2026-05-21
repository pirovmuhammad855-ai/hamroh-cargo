import { StandardPage } from "@/components/pages/StandardPage";
import { getSiteContent } from "@/data/site";
import { toLocale } from "@/lib/navigation";

export default async function AiAssistantPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale = toLocale(locale);
  const page = getSiteContent(safeLocale).pages.assistant;
  return <StandardPage locale={safeLocale} {...page} />;
}
