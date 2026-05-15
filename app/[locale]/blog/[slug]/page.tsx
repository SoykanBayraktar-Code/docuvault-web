import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { ChevronLeft, Clock } from "lucide-react";
import { MDXContent } from "@content-collections/mdx/react";
import { Link } from "@/i18n/navigation";
import {
  getPost,
  getPostsByLocale,
  getRelatedPosts,
  getAuthor,
  formatDate,
} from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthorBio from "@/components/blog/AuthorBio";
import SocialShare from "@/components/blog/SocialShare";
import PostCard from "@/components/blog/PostCard";
import AppStoreButtons from "@/components/AppStoreButtons";
import type { Locale } from "@/i18n/routing";

const SITE_URL = "https://www.appdocuvault.com";

export function generateStaticParams() {
  return getPostsByLocale("tr").map((p) => ({ locale: "tr", slug: p.slug }))
    .concat(getPostsByLocale("en").map((p) => ({ locale: "en", slug: p.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(locale, slug);
  if (!post) return {};

  const canonical = locale === "tr" ? `/blog/${slug}` : `/${locale}/blog/${slug}`;
  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.description,
    alternates: {
      canonical,
      languages: {
        tr: `/blog/${slug}`,
        en: `/en/blog/${slug}`,
        "x-default": `/blog/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPost(locale, slug);
  if (!post) notFound();

  setRequestLocale(locale as Locale);
  const t = await getTranslations("blog");
  const author = getAuthor(post.author);
  const related = getRelatedPosts(post);
  const pageUrl = `${SITE_URL}${post.url}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.cover ? `${SITE_URL}${post.cover}` : `${SITE_URL}/opengraph-image`,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: author
      ? {
          "@type": "Person",
          name: author.name,
          url: author.social?.github || SITE_URL,
        }
      : { "@type": "Organization", name: "DocuVault" },
    publisher: {
      "@type": "Organization",
      name: "DocuVault",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    inLanguage: locale === "tr" ? "tr-TR" : "en-US",
    keywords: post.tags.join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "tr" ? "Ana Sayfa" : "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: locale === "tr" ? `${SITE_URL}/blog` : `${SITE_URL}/en/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main id="content" className="min-h-screen bg-background">
        <article className="mx-auto max-w-3xl px-5 lg:px-8 py-12 lg:py-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            {t("back")}
          </Link>

          <header className="mt-8">
            <div className="flex items-center gap-3 text-xs">
              <span className="px-2.5 py-0.5 rounded-full bg-secondary-muted text-secondary font-semibold tracking-wider uppercase">
                {post.category}
              </span>
              <span className="text-text-tertiary inline-flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                {t("readingTime", { minutes: post.readingTime })}
              </span>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-[1.1]">
              {post.title}
            </h1>
            <p className="mt-5 text-lg lg:text-xl text-text-secondary leading-relaxed">
              {post.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-tertiary">
              {author && (
                <span>
                  <span className="font-medium text-text-secondary">{author.name}</span>
                </span>
              )}
              <span className="text-text-tertiary">·</span>
              <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
              {post.updated && post.updated !== post.date && (
                <>
                  <span className="text-text-tertiary">·</span>
                  <span className="italic">
                    {t("updatedOn")} {formatDate(post.updated, locale)}
                  </span>
                </>
              )}
            </div>
          </header>

          <div className="mt-8 prose prose-neutral lg:prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-text-primary prose-h2:text-2xl lg:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-text-primary prose-strong:font-semibold prose-ul:my-4 prose-li:my-1 prose-code:text-primary prose-code:bg-primary-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-blockquote:border-l-secondary prose-blockquote:bg-surface prose-blockquote:not-italic">
            <MDXContent code={post.body} />
          </div>

          <div className="mt-12 pt-8 border-t border-border-warm">
            <SocialShare url={pageUrl} title={post.title} />
          </div>

          <div className="mt-12 rounded-2xl bg-primary-dark text-white p-8 lg:p-10">
            <h3 className="text-2xl font-semibold tracking-tight">{t("ctaTitle")}</h3>
            <p className="mt-2 text-white/80">{t("ctaSubtitle")}</p>
            <div className="mt-6">
              <AppStoreButtons size="lg" location="other" />
            </div>
          </div>

          <AuthorBio authorId={post.author} label={t("by")} />

          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-semibold tracking-tight text-text-primary">
                {t("relatedPosts")}
              </h2>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                {related.map((p) => (
                  <PostCard key={p.slug} post={p} locale={locale} />
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}
