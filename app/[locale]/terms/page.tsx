import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { ChevronLeft, Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { getTerms } from "@/content/legal";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getTerms(locale);
  return {
    title: copy.pageTitle,
    description: copy.pageDescription,
    alternates: {
      canonical: locale === "tr" ? "/terms" : "/en/terms",
      languages: { tr: "/terms", en: "/en/terms", "x-default": "/terms" },
    },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);
  const copy = getTerms(locale);
  const HeaderIcon = copy.headerIcon;
  const supportEmail = "destek@appdocuvault.com";

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border-warm">
        <div className="mx-auto max-w-3xl px-5 py-4 flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            {copy.backLabel}
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-3xl px-5 py-12 pb-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-muted mb-5">
            <HeaderIcon className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
            {copy.pageTitle}
          </h1>
          <p className="mt-2 text-sm text-text-tertiary">{copy.lastUpdated}</p>
          <p className="mt-4 text-base text-text-secondary leading-relaxed max-w-xl mx-auto">
            {copy.intro}
          </p>
        </div>

        <div className="space-y-4">
          {copy.sections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className="bg-surface rounded-2xl p-6 ring-1 ring-border-warm shadow-warm-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-primary-muted flex items-center justify-center">
                    <Icon className="w-4.5 h-4.5 text-primary" strokeWidth={1.75} />
                  </div>
                  <h2 className="text-base font-semibold text-text-primary">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-2.5">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-[15px] text-text-secondary leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary-light shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-text-secondary">{copy.questionsLabel}</p>
          <a
            href={`mailto:${supportEmail}`}
            className="mt-1 inline-flex items-center gap-2 text-base font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            <Mail className="w-4 h-4" />
            {supportEmail}
          </a>
        </div>
      </main>
    </div>
  );
}
