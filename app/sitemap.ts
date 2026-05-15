import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { allPosts } from "content-collections";

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
  const staticPaths = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/blog", changeFrequency: "daily" as const, priority: 0.8 },
    { path: "/terms", changeFrequency: "monthly" as const, priority: 0.5 },
    { path: "/privacy", changeFrequency: "monthly" as const, priority: 0.5 },
    {
      path: "/aydinlatma-metni",
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
  ];

  const entries: MetadataRoute.Sitemap = [];

  // Static pages
  for (const { path, changeFrequency, priority } of staticPaths) {
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

  // Blog posts (per-post per-locale)
  for (const post of allPosts) {
    const postPath = `/blog/${post.slug}`;
    entries.push({
      url: loc(post.locale, postPath),
      lastModified: new Date(post.updated || post.date),
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: { languages: alternatesFor(postPath) },
    });
  }

  return entries;
}
