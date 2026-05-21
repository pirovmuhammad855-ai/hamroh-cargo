import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://hamrohcargo.tj/sitemap.xml",
    host: "https://hamrohcargo.tj"
  };
}
