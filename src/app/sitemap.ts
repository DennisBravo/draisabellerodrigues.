export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-19");
  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/politica-de-privacidade`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
