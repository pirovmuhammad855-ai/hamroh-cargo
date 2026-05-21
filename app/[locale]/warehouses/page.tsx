import { Warehouses } from "@/sections/Warehouses";
import { toLocale } from "@/lib/navigation";

export default async function WarehousesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <Warehouses locale={toLocale(locale)} />;
}
