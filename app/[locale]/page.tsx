import { setRequestLocale, getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Screenshots from "@/components/Screenshots";
import Pricing from "@/components/Pricing";
import Security from "@/components/Security";
import FAQ from "@/components/FAQ";
import Support from "@/components/Support";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CookieBanner from "@/components/CookieBanner";
import type { Locale } from "@/i18n/routing";

type FaqItem = { q: string; a: string };

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  const t = await getTranslations({ locale, namespace: "faq" });
  const items = t.raw("items") as FaqItem[];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <>
      <Navbar />
      <main id="content">
        <Hero />
        <Features />
        <HowItWorks />
        <Screenshots />
        <Pricing />
        <Security />
        <FAQ />
        <Support />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
      <CookieBanner />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
