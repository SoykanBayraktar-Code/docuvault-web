import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { routing, type Locale } from "@/i18n/routing";
import { getAppStoreRating } from "@/lib/app-store";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.appdocuvault.com";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const localeAlt = locale === "tr" ? "en" : "tr";
  const localePath = locale === "tr" ? "" : `/${locale}`;
  const altPath = localeAlt === "tr" ? "" : `/${localeAlt}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    applicationName: "DocuVault",
    authors: [{ name: "DocuVault" }],
    creator: "DocuVault",
    publisher: "DocuVault",
    alternates: {
      canonical: localePath || "/",
      languages: {
        tr: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "en_US",
      alternateLocale: localeAlt === "tr" ? "tr_TR" : "en_US",
      url: `${SITE_URL}${localePath}`,
      siteName: "DocuVault",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt:
            locale === "tr"
              ? "DocuVault — Belgeleriniz güvende, saniyeler içinde bulun."
              : "DocuVault — Your documents, safe. Found in seconds.",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twTitle"),
      description: t("twDescription"),
      images: [`${SITE_URL}/twitter-image`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "productivity",
    verification: {
      google:
        process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
        "HA3B0W2w_4sF2eNtDzeKTQA20StS4xYvCTmsQXK2LL4",
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F9F6F1" },
    { media: "(prefers-color-scheme: dark)", color: "#2E3D27" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale as Locale);
  const messages = await getMessages();
  const rating = await getAppStoreRating();

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "DocuVault",
    alternateName:
      locale === "tr" ? "DocuVault — Belge Kasası" : "DocuVault — Document Vault",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Productivity",
    operatingSystem: "iOS 26+",
    softwareVersion: "2.0",
    url: SITE_URL,
    downloadUrl:
      "https://apps.apple.com/tr/app/docuvault-belge-kasasi/id6762083376",
    installUrl:
      "https://apps.apple.com/tr/app/docuvault-belge-kasasi/id6762083376",
    inLanguage: ["tr-TR", "en-US"],
    offers: [
      { "@type": "Offer", name: locale === "en" ? "Free" : "Ücretsiz", price: "0", priceCurrency: locale === "en" ? "USD" : "TRY" },
      {
        "@type": "Offer",
        name: locale === "en" ? "DocuVault Plus Monthly" : "DocuVault Plus Aylık",
        price: locale === "en" ? "6.99" : "349.99",
        priceCurrency: locale === "en" ? "USD" : "TRY",
      },
      {
        "@type": "Offer",
        name: locale === "en" ? "DocuVault Plus Yearly" : "DocuVault Plus Yıllık",
        price: locale === "en" ? "69.99" : "3499.99",
        priceCurrency: locale === "en" ? "USD" : "TRY",
      },
    ],
    featureList:
      locale === "tr"
        ? [
            "Hesap yok, sunucu yok; belgeler yalnızca kullanıcının iCloud'unda",
            "Otomatik kenar algılayan çok sayfalı belge tarayıcı",
            "Cihazda yazı tanıma ve otomatik doldurma",
            "Apple Intelligence ile özet, öne çıkanlar ve Belgeye Sor",
            "Son tarih hatırlatmaları ve takvime ekleme",
            "Aylık harcama özeti",
            "İmzala, otomatik karartma ve sayfa düzenleme",
            "Belge Setleri (vize, kira, işe giriş için hazır listeler)",
            "Acil Durum Kartı (kilit ekranı widget'ı, Siri, Apple Watch)",
            "Aile Kasası",
            "Uçtan uca şifreli paylaşım linkleri",
            "Parolayla şifrelenmiş yedek",
            "Face ID / Touch ID kilidi",
            "Türkçe ve İngilizce arayüz",
          ]
        : [
            "No account, no servers; documents stored only in the user's iCloud",
            "Multi-page document scanner with automatic edge detection",
            "On-device text recognition and auto-fill",
            "Summaries, highlights and Ask Document with Apple Intelligence",
            "Due date reminders and Add to Calendar",
            "Monthly spending summary",
            "Sign, automatic redaction and page editing",
            "Document Sets (ready-made lists for visas, renting and new jobs)",
            "Emergency Card (Lock Screen widget, Siri, Apple Watch)",
            "Family Vault",
            "End-to-end encrypted share links",
            "Password-encrypted backups",
            "Face ID / Touch ID lock",
            "English and Turkish UI",
          ],
    ...(rating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: rating.average,
            ratingCount: rating.count,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
    publisher: {
      "@type": "Organization",
      name: "DocuVault",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DocuVault",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    email: "destek@appdocuvault.com",
    sameAs: [
      "https://apps.apple.com/tr/app/docuvault-belge-kasasi/id6762083376",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "destek@appdocuvault.com",
      contactType: "customer support",
      availableLanguage: ["Turkish", "English"],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DocuVault",
    url: SITE_URL,
    inLanguage: ["tr-TR", "en-US"],
    publisher: { "@type": "Organization", name: "DocuVault" },
  };

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-text-primary">
        <GoogleAnalytics />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
