import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "DocuVault — Belgeleriniz Güvende, Saniyeler İçinde Bulun",
    template: "%s | DocuVault",
  },
  description:
    "Yerleşik belge tarayıcı, AI özetleme ve doğal dil arama ile tüm kritik belgelerinizi tek bir şifrelenmiş kasada toplayın. iOS için. Türkçe ve İngilizce.",
  applicationName: "DocuVault",
  keywords: [
    "belge kasası",
    "belge tarayıcı",
    "AI belge özetleme",
    "AI belge arama",
    "OCR uygulaması",
    "belge yönetimi",
    "fatura arşivi",
    "güvenli belge saklama",
    "şifreli bulut",
    "AES-256",
    "Face ID belge",
    "docuvault",
    "sesli arama",
    "yerleşik tarayıcı",
    "PDF tarayıcı",
    "iOS belge uygulaması",
  ],
  authors: [{ name: "DocuVault" }],
  creator: "DocuVault",
  publisher: "DocuVault",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "DocuVault",
    title: "DocuVault — Belgeleriniz Güvende, Saniyeler İçinde Bulun",
    description:
      "Yerleşik tarayıcı, AI özetleme ve doğal dil arama — tüm belgeleriniz tek bir şifreli kasada. iOS için.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DocuVault — Belgeleriniz Güvende",
    description:
      "Yerleşik tarayıcı, AI özet ve doğal dil arama. iOS için şifreli belge kasası.",
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F9F6F1" },
    { media: "(prefers-color-scheme: dark)", color: "#2E3D27" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "DocuVault",
  alternateName: "DocuVault — Belge Kasası",
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
    {
      "@type": "Offer",
      name: "Ücretsiz",
      price: "0",
      priceCurrency: "TRY",
    },
    {
      "@type": "Offer",
      name: "Gold Aylık",
      price: "999.99",
      priceCurrency: "TRY",
    },
    {
      "@type": "Offer",
      name: "Gold Yıllık",
      price: "10999",
      priceCurrency: "TRY",
    },
  ],
  featureList: [
    "Yerleşik belge tarayıcı (otomatik kenar algılama, çoklu sayfa PDF)",
    "AI Yönetici Özeti",
    "Doğal dil ile AI arama",
    "Sesli komutla arama",
    "AES-256 şifreleme",
    "Face ID / Touch ID koruması",
    "Şifreli bulut yedekleme",
    "Türkçe ve İngilizce arayüz",
  ],
  description:
    "Yerleşik belge tarayıcı, AI özetleme ve doğal dil arama ile tüm kritik belgelerinizi tek bir şifrelenmiş kasada toplayın.",
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
  email: "support@appdocuvault.com",
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@appdocuvault.com",
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
  publisher: {
    "@type": "Organization",
    name: "DocuVault",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-text-primary">
        {children}
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
