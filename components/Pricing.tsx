"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";

const FREE_FEATURES = [
  "50 MB depolama",
  "3 belge/ay OCR",
  "Temel arama",
  "AI isimlendirme",
  "Koleksiyonlar",
];

const GOLD_COMPARISONS = [
  { label: "Depolama", from: "50 MB", to: "2 GB (40×)" },
  { label: "OCR / ay", from: "3 belge", to: "Sınırsız" },
  { label: "AI Akıllı Arama", from: "Yok", to: "Aktif" },
  { label: "Destek", from: "Standart", to: "Öncelikli" },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0 }}
            className="relative flex flex-col p-7 rounded-2xl bg-surface ring-2 ring-primary shadow-warm-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-text-primary">
                  Ücretsiz
                </h3>
                <p className="mt-1 text-2xl font-semibold text-text-primary">
                  ₺0
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary-muted text-primary-dark text-[11px] font-semibold tracking-wider uppercase">
                Mevcut Plan
              </span>
            </div>

            <ul className="mt-6 space-y-3 flex-1">
              {FREE_FEATURES.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-[15px] text-text-secondary"
                >
                  <Check
                    className="w-4 h-4 mt-0.5 shrink-0 text-primary"
                    strokeWidth={2.5}
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="mt-7 inline-flex items-center justify-center h-11 rounded-full text-sm font-medium bg-primary-muted text-primary-dark hover:bg-primary hover:text-white transition-colors"
            >
              Uygulamayı İndir
            </a>
          </motion.div>

          {/* Gold Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative flex flex-col p-7 rounded-2xl ring-2 ring-secondary shadow-warm-lg"
            style={{ background: "#fffbf3" }}
          >
            {/* En Popüler badge */}
            <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-secondary text-white text-[11px] font-semibold tracking-wider uppercase shadow-warm-sm">
              En Popüler
            </span>

            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-secondary fill-secondary" />
              <h3 className="text-xl font-semibold tracking-tight text-secondary">
                Gold
              </h3>
            </div>

            {/* Monthly / Yearly Toggle */}
            <div className="mt-4 flex items-center gap-1 p-1 rounded-full bg-white ring-1 ring-border-warm self-start">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  !isYearly
                    ? "bg-secondary text-white shadow-warm-sm"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                Aylık
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isYearly
                    ? "bg-secondary text-white shadow-warm-sm"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                Yıllık
                <span
                  className={`text-[11px] font-semibold ${
                    isYearly ? "text-white/80" : "text-secondary"
                  }`}
                >
                  %8,3 indirim
                </span>
              </button>
            </div>

            {/* Price */}
            <div className="mt-5">
              {isYearly ? (
                <>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight text-secondary">
                      ₺10.999
                    </span>
                    <span className="text-text-tertiary text-sm">/yıl</span>
                  </div>
                  <p className="mt-1 text-sm text-text-secondary">
                    ₺916,58/ay · %8,3 indirim
                  </p>
                </>
              ) : (
                <>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight text-secondary">
                      ₺999,99
                    </span>
                    <span className="text-text-tertiary text-sm">/ay</span>
                  </div>
                  <p className="mt-1 text-sm text-text-secondary">
                    Aylık fatura
                  </p>
                </>
              )}
            </div>

            {/* Feature comparisons */}
            <ul className="mt-6 space-y-3 flex-1">
              {GOLD_COMPARISONS.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between text-[14px]"
                >
                  <span className="text-text-secondary font-medium">
                    {item.label}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-text-tertiary line-through">
                      {item.from}
                    </span>
                    <ArrowRight className="w-3 h-3 text-text-tertiary shrink-0" />
                    <span className="font-semibold text-secondary">
                      {item.to}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="mt-7 inline-flex items-center justify-center h-11 rounded-full text-sm font-semibold bg-secondary hover:bg-secondary-light text-white transition-colors shadow-warm-md"
            >
              Gold&apos;a Yükselt
            </a>
          </motion.div>
        </div>

        <p className="mt-8 text-center text-xs text-text-tertiary">
          Aboneliğiniz, satın alma onayında Apple ID hesabınızdan ücretlendirilir.
          Abonelikler App Store üzerinden yönetilir.
        </p>
      </div>
    </section>
  );
}
