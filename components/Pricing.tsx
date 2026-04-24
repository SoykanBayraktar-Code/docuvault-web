"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  suffix?: string;
  blurb: string;
  features: string[];
  popular?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Ücretsiz",
    price: "$0",
    blurb: "Denemek için ideal.",
    features: [
      "50 MB depolama",
      "Aylık 5 OCR belgesi",
      "Temel kasa & biyometrik kilit",
      "Kategori organizasyonu",
    ],
  },
  {
    name: "Starter",
    price: "$0.99",
    suffix: "/ay",
    blurb: "Kişisel kullanım için.",
    features: [
      "5 GB depolama",
      "Aylık 50 OCR belgesi",
      "AI destekli arama",
      "Sesli komut",
    ],
  },
  {
    name: "Agent",
    price: "$2.99",
    suffix: "/ay",
    blurb: "Küçük ekipler ve profesyoneller için.",
    features: [
      "25 GB depolama",
      "Aylık 100 OCR belgesi",
      "Akıllı isimlendirme",
      "Koleksiyonlar & paylaşım",
    ],
    popular: true,
  },
  {
    name: "Pro",
    price: "$4.99",
    suffix: "/ay",
    blurb: "Sınırsız arşiv için.",
    features: [
      "100 GB depolama",
      "Sınırsız OCR",
      "Öncelikli destek",
      "Tüm gelişmiş özellikler",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-secondary">
            Fiyatlandırma
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary">
            Size uyan bir plan var.
          </h2>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            Ücretsiz başlayın, ihtiyacınız büyüdükçe yükseltin. İstediğiniz
            zaman iptal edin.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`relative flex flex-col p-7 rounded-2xl bg-surface transition-all duration-300 ${
                p.popular
                  ? "ring-2 ring-secondary shadow-warm-lg scale-[1.02]"
                  : "ring-1 ring-border-warm shadow-warm-sm hover:shadow-warm-md"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-secondary text-white text-[11px] font-semibold tracking-wider uppercase shadow-warm-sm">
                  En Popüler
                </span>
              )}

              <h3 className="text-lg font-semibold tracking-tight text-text-primary">
                {p.name}
              </h3>
              <p className="mt-1 text-sm text-text-secondary">{p.blurb}</p>

              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-text-primary">
                  {p.price}
                </span>
                {p.suffix && (
                  <span className="text-text-tertiary text-sm">{p.suffix}</span>
                )}
              </div>

              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[15px] text-text-secondary"
                  >
                    <Check
                      className={`w-4 h-4 mt-1 shrink-0 ${
                        p.popular ? "text-secondary" : "text-primary"
                      }`}
                      strokeWidth={2.5}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#download"
                className={`mt-7 inline-flex items-center justify-center h-11 rounded-full text-sm font-medium transition-colors ${
                  p.popular
                    ? "bg-secondary hover:bg-secondary-light text-white"
                    : "bg-primary-muted text-primary-dark hover:bg-primary hover:text-white"
                }`}
              >
                Uygulamayı İndir
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-text-tertiary">
          Fiyatlara KDV dahil değildir. Abonelikler App Store üzerinden yönetilir.
        </p>
      </div>
    </section>
  );
}
