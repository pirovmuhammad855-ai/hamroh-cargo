import { ReviewsFaq } from "@/sections/ReviewsFaq";
import { toLocale } from "@/lib/navigation";

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ReviewsFaq locale={toLocale(locale)} />;
}
