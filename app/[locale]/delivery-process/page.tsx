import { ProcessTimeline } from "@/sections/ProcessTimeline";
import { toLocale } from "@/lib/navigation";

export default async function DeliveryProcessPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ProcessTimeline locale={toLocale(locale)} />;
}
