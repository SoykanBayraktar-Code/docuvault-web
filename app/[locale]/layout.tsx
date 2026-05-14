import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { routing, type Locale } from "@/i18n/routing";

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
    },
    twitter: {
      card: "summary_large_image",
      title: t("twTitle"),
      description: t("twDescription"),
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

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "DocuVault",
    alternateName:
      locale === "tr" ? "DocuVault — Belge Kasası" : "DocuVault — Document Vault",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Productivity",
    operatingSystem: "iOS 15.1+",
    url: SITE_URL,
    downloadUrl:
      "https://apps.apple.com/tr/app/docuvault-belge-kasasi/id6762083376",
    installUrl:
      "https://apps.apple.com/tr/app/docuvault-belge-kasasi/id6762083376",
    inLanguage: ["tr-TR", "en-US"],
    offers: [
      { "@type": "Offer", name: "Free", price: "0", priceCurrency: locale === "en" ? "USD" : "TRY" },
      {
        "@type": "Offer",
        name: locale === "en" ? "Gold Monthly" : "Gold Aylık",
        price: locale === "en" ? "21.99" : "999.99",
        priceCurrency: locale === "en" ? "USD" : "TRY",
      },
      {
        "@type": "Offer",
        name: locale === "en" ? "Gold Yearly" : "Gold Yıllık",
        price: locale === "en" ? "241.99" : "10999",
        priceCurrency: locale === "en" ? "USD" : "TRY",
      },
    ],
    featureList:
      locale === "tr"
        ? [
            "Yerleşik belge tarayıcı",
            "AI Yönetici Özeti",
            "Doğal dil ile AI arama",
            "Sesli komutla arama",
            "AES-256 şifreleme",
            "Face ID / Touch ID koruması",
            "Şifreli bulut yedekleme",
            "Türkçe ve İngilizce arayüz",
          ]
        : [
            "Built-in document scanner",
            "AI Executive Summary",
            "Natural-language AI search",
            "Voice command search",
            "AES-256 encryption",
            "Face ID / Touch ID protection",
            "Encrypted cloud backup",
            "Turkish and English UI",
          ],
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
