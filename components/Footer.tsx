import Image from "next/image";
import { Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Footer() {
  const t = await getTranslations("footer");
  const tn = await getTranslations("nav");
  const tc = await getTranslations("common");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-warm bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden ring-1 ring-border-warm bg-surface">
                <Image
                  src="/logo.webp"
                  alt="DocuVault logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="font-semibold tracking-tight text-lg text-text-primary">
                DocuVault
              </span>
            </Link>
            <p className="mt-4 text-sm text-text-secondary leading-relaxed max-w-sm">
              {t("tagline")}
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.14em] uppercase text-text-tertiary">
              {t("productHeading")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#features" className="text-text-secondary hover:text-primary transition-colors">
                  {tn("features")}
                </a>
              </li>
              <li>
                <a href="#how" className="text-text-secondary hover:text-primary transition-colors">
                  {tn("howItWorks")}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-text-secondary hover:text-primary transition-colors">
                  {tn("pricing")}
                </a>
              </li>
              <li>
                <Link href="/blog" className="text-text-secondary hover:text-primary transition-colors">
                  {tn("blog")}
                </Link>
              </li>
              <li>
                <a href="#faq" className="text-text-secondary hover:text-primary transition-colors">
                  {tn("faq")}
                </a>
              </li>
              <li>
                <a href="#support" className="text-text-secondary hover:text-primary transition-colors">
                  {tn("support")}
                </a>
              </li>
              <li>
                <a href="#download" className="text-text-secondary hover:text-primary transition-colors">
                  {tc("downloadCta")}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold tracking-[0.14em] uppercase text-text-tertiary">
              {t("legalHeading")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/privacy" className="text-text-secondary hover:text-primary transition-colors">
                  {t("linkPrivacy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/aydinlatma-metni"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {t("linkKvkk")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-text-secondary hover:text-primary transition-colors">
                  {t("linkTerms")}
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${tc("supportEmail")}`}
                  className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {tc("supportEmail")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border-warm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-tertiary">
            {t("rights", { year })}
          </p>
          <p className="text-xs text-text-tertiary font-mono">
            appdocuvault.com
          </p>
        </div>
      </div>
    </footer>
  );
}
