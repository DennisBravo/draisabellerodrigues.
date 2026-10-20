import type { Metadata, Viewport } from "next";
import "@fontsource-variable/rubik";
import "./globals.css";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seo.title,
    template: `%s | ${site.professional.name}`,
  },
  description: site.seo.description,
  applicationName: site.professional.name,
  authors: [{ name: site.professional.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.professional.name,
    title: site.seo.title,
    description: site.seo.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.professional.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
