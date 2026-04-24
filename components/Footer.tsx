import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-warm bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden ring-1 ring-border-warm bg-surface">
                <Image
                  src="/logo.png"
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
              Belgeleriniz güvende, saniyeler içinde bulunur. Türkiye&rsquo;de
              tasarlandı, dünyada kullanılıyor.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.14em] uppercase text-text-tertiary">
              Ürün
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="#features"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Özellikler
                </a>
              </li>
              <li>
                <a
                  href="#how"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Nasıl Çalışır
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Fiyatlandırma
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Destek
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  İndir
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold tracking-[0.14em] uppercase text-text-tertiary">
              Yasal & Destek
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="https://soykanbayraktar-code.github.io/docuvault-privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a
                  href="https://soykanbayraktar-code.github.io/docuvault-privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Kullanım Koşulları
                </a>
              </li>
              <li>
                <a
                  href="mailto:destek@appdocuvault.com"
                  className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  destek@appdocuvault.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border-warm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-tertiary">
            © {year} DocuVault. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-text-tertiary font-mono">
            appdocuvault.com
          </p>
        </div>
      </div>
    </footer>
  );
}
