import { AdminPreview } from "@/sections/AdminPreview";
import { BlogCta } from "@/sections/BlogCta";
import { Hero } from "@/sections/Hero";
import { MobileAppShowcase } from "@/sections/MobileAppShowcase";
import { ProcessTimeline } from "@/sections/ProcessTimeline";
import { ReviewsFaq } from "@/sections/ReviewsFaq";
import { ServicesGrid } from "@/sections/ServicesGrid";
import { TrustMetrics } from "@/sections/TrustMetrics";
import { Warehouses } from "@/sections/Warehouses";
import { WhyChoose } from "@/sections/WhyChoose";
import { toLocale } from "@/lib/navigation";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const safeLocale = toLocale(locale);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hamroh Cargo",
    url: "https://hamrohcargo.tj",
    email: "hamrohcargo@gmail.com",
    telephone: "+992501222235",
    areaServed: ["Tajikistan", "China"],
    sameAs: ["https://instagram.com/hamroh.cargo", "https://t.me/Hamrohassistant"]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Hero locale={safeLocale} />
      <TrustMetrics locale={safeLocale} />
      <WhyChoose locale={safeLocale} />
      <ProcessTimeline locale={safeLocale} />
      <ServicesGrid locale={safeLocale} />
      <MobileAppShowcase locale={safeLocale} />
      <Warehouses locale={safeLocale} />
      <ReviewsFaq locale={safeLocale} />
      <AdminPreview locale={safeLocale} />
      <BlogCta locale={safeLocale} />
    </>
  );
}
