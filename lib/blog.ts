import { allPosts, allAuthors, type Post, type Author } from "content-collections";

export type { Post, Author };

export function getPostsByLocale(locale: string): Post[] {
  return allPosts
    .filter((p) => p.locale === locale)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPost(locale: string, slug: string): Post | undefined {
  return allPosts.find((p) => p.locale === locale && p.slug === slug);
}

export function getAuthor(id: string): Author | undefined {
  return allAuthors.find((a) => a.id === id);
}

export function getRelatedPosts(post: Post, limit = 3): Post[] {
  const tagOverlap = (a: Post, b: Post) =>
    a.tags.filter((t) => b.tags.includes(t)).length;

  return allPosts
    .filter((p) => p.locale === post.locale && p.slug !== post.slug)
    .map((p) => ({ post: p, score: tagOverlap(post, p) + (p.pillar === post.pillar ? 2 : 0) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.post);
}

export function formatDate(date: string, locale: string): string {
  return new Intl.DateTimeFormat(locale === "tr" ? "tr-TR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
