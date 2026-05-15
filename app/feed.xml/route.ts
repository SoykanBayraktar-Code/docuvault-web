import { allPosts } from "content-collections";

const SITE = "https://www.appdocuvault.com";

function escapeXml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  // Default RSS = TR (primary locale)
  const posts = allPosts
    .filter((p) => p.locale === "tr")
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, 20);

  const items = posts
    .map((post) => {
      const url = `${SITE}${post.url}`;
      const pubDate = new Date(post.date).toUTCString();
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${pubDate}</pubDate>
      <author>destek@appdocuvault.com (DocuVault)</author>
      ${post.tags.map((t) => `<category>${escapeXml(t)}</category>`).join("")}
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DocuVault Blog</title>
    <link>${SITE}/blog</link>
    <description>Belge yönetimi, AI özetleme ve KVKK uyumu üzerine uzman rehberler.</description>
    <language>tr-TR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
