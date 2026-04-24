import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://appdocuvault.com"),
  title: {
    default: "DocuVault — Belgeleriniz Güvende, Saniyeler İçinde Bulun",
    template: "%s | DocuVault",
  },
  description:
    "Faturalar, kimlikler, sözleşmeler — tüm kritik belgelerinizi tek bir şifrelenmiş kasada saklayın. Gelişmiş AI ile içerik arayın, sesli komutla bulun. iOS ve Android için.",
  keywords: [
    "belge kasası",
    "AI belge arama",
    "OCR uygulaması",
    "belge yönetimi",
    "fatura arşivi",
    "güvenli belge saklama",
    "docuvault",
    "sesli arama",
    "belge tarama",
  ],
  authors: [{ name: "DocuVault" }],
  creator: "DocuVault",
  publisher: "DocuVault",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://appdocuvault.com",
    siteName: "DocuVault",
    title: "DocuVault — Belgeleriniz Güvende, Saniyeler İçinde Bulun",
    description:
      "Tüm belgelerinizi tek bir şifreli kasada saklayın. AI destekli arama, sesli komut, otomatik OCR.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "DocuVault — Güvenli Belge Kasası",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DocuVault — Belgeleriniz Güvende",
    description:
      "Tüm belgelerinizi tek bir şifreli kasada saklayın. AI destekli arama, sesli komut.",
    images: ["/hero.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F9F6F1",
  width: "device-width",
  initialScale: 1,
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
      </body>
    </html>
  );
}
