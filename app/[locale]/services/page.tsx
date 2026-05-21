import { ServicesGrid } from "@/sections/ServicesGrid";
import { toLocale } from "@/lib/navigation";

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ServicesGrid locale={toLocale(locale)} />;
}
