import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { ChevronLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getPostsByLocale } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostCard from "@/components/blog/PostCard";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: {
      canonical: locale === "tr" ? "/blog" : "/en/blog",
      languages: { tr: "/blog", en: "/en/blog", "x-default": "/blog" },
    },
    openGraph: {
      title: t("title"),
      description: t("subtitle"),
    },
  };
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const t = await getTranslations("blog");
  const posts = getPostsByLocale(locale);
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <>
      <Navbar />
      <main id="content" className="min-h-screen bg-background">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 py-16 lg:py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            {t("back")}
          </Link>

          <div className="mt-8 max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-secondary">
              {t("eyebrow")}
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              {t("subtitle")}
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="mt-16 text-center text-text-tertiary">{t("noPosts")}</p>
          ) : (
            <div className="mt-12 space-y-6">
              {featured && <PostCard post={featured} locale={locale} featured />}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {rest.map((post) => (
                  <PostCard key={post.slug} post={post} locale={locale} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
