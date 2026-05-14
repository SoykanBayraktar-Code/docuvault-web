import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE = "https://www.appdocuvault.com";

function loc(locale: string, path: string) {
  if (locale === routing.defaultLocale) {
    return `${SITE}${path}`;
  }
  return `${SITE}/${locale}${path}`;
}

function alternatesFor(path: string) {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = loc(l, path);
  }
  languages["x-default"] = loc(routing.defaultLocale, path);
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/terms", changeFrequency: "monthly" as const, priority: 0.5 },
    { path: "/privacy", changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  const entries: MetadataRoute.Sitemap = [];
  for (const { path, changeFrequency, priority } of paths) {
    for (const locale of routing.locales) {
      entries.push({
        url: loc(locale, path),
        lastModified: now,
        changeFrequency,
        priority,
        alternates: { languages: alternatesFor(path) },
      });
    }
  }
  return entries;
}
