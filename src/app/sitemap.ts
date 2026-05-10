import type { MetadataRoute } from "next";
import { services } from "@/data/services";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://wirakaryasinergi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/tentang", "/layanan", "/portofolio", "/sertifikasi", "/faq", "/kontak"];
  const base = routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${SITE_URL}/layanan/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...base, ...serviceRoutes];
}
