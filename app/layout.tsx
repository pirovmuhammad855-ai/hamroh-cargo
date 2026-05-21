import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { LoadingScreen } from "@/components/site/LoadingScreen";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://hamrohcargo.tj"),
  title: {
    default: "Hamroh Cargo | Premium China to Tajikistan Logistics",
    template: "%s | Hamroh Cargo"
  },
  description: "Professional cargo delivery from China to Tajikistan, marketplace assistance, warehouses, tracking, and Hamroh Assistant support.",
  keywords: ["cargo Tajikistan", "доставка из Китая", "China cargo", "Hamroh Cargo", "cargo Душанбе"],
  openGraph: {
    title: "Hamroh Cargo",
    description: "Trusted China logistics partner for Tajikistan.",
    url: "https://hamrohcargo.tj",
    siteName: "Hamroh Cargo",
    locale: "tg_TJ",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tj" className={inter.variable}>
      <body className="font-sans antialiased">
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
