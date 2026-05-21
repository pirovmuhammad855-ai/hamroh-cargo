import type { MetadataRoute } from "next";
import { locales, routes } from "@/lib/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `https://hamrohcargo.tj/${locale}${route.href}`,
      lastModified: new Date(),
      changeFrequency: route.href === "" ? "weekly" : "monthly",
      priority: route.href === "" ? 1 : 0.75
    }))
  );
}
