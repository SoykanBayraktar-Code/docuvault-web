import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

function calcReadingTime(text: string) {
  // ~200 words per minute, locale-agnostic
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

const posts = defineCollection({
  name: "posts",
  directory: "content/blog",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    updated: z.string().optional(),
    author: z.string(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().default("rehber"),
    featured: z.boolean().default(false),
    pillar: z.string().optional(),
    pillarOf: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
  transform: async (doc, context) => {
    const body = await compileMDX(context, doc);

    const parts = doc._meta.path.split("/");
    const locale = parts[0] === "en" ? "en" : "tr";
    const slug =
      parts.slice(1).join("/").replace(/\.mdx$/, "") ||
      parts[0].replace(/\.mdx$/, "");

    const readingTime = calcReadingTime(doc.content);
    const url = locale === "tr" ? `/blog/${slug}` : `/${locale}/blog/${slug}`;

    return {
      ...doc,
      body,
      locale,
      slug,
      url,
      readingTime,
    };
  },
});

const authors = defineCollection({
  name: "authors",
  directory: "content/authors",
  include: "**/*.json",
  parser: "json",
  schema: z.object({
    id: z.string(),
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    avatar: z.string().optional(),
    social: z
      .object({
        github: z.string().optional(),
        twitter: z.string().optional(),
        linkedin: z.string().optional(),
      })
      .optional(),
    expertise: z.array(z.string()).default([]),
  }),
});

export default defineConfig({
  collections: [posts, authors],
});
