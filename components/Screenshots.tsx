"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SHOTS = [
  {
    src: "/screenshots-v1.1/tr/01-vault.webp",
    label: "Tek Kasa",
    alt: "Belgeleriniz tek yerde — ana kasa ekranı",
  },
  {
    src: "/screenshots-v1.1/tr/02-scanner.webp",
    label: "Yerleşik Tarayıcı",
    alt: "Tek tuşla belge ekleme ve yerleşik tarayıcı",
  },
  {
    src: "/screenshots-v1.1/tr/03-collections.webp",
    label: "Koleksiyonlar",
    alt: "Kendi koleksiyonlarınız — özel ikon ve renk",
  },
  {
    src: "/screenshots-v1.1/tr/04-ai-summary.webp",
    label: "AI Özet",
    alt: "AI Yönetici Özeti — kritik noktalar ve öneriler",
  },
  {
    src: "/screenshots-v1.1/tr/05-ai-search.webp",
    label: "Doğal Dil Arama",
    alt: "Doğal dilde AI arama",
  },
  {
    src: "/screenshots-v1.1/tr/06-security.webp",
    label: "Güvenlik",
    alt: "Face ID ile güvende — AES-256 ve biyometrik",
  },
];

export default function Screenshots() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-secondary">
            Uygulamadan Kareler
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary">
            Her ekran, bir arşivin huzuru.
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none"
          aria-hidden
        />

        <div className="overflow-x-auto scrollbar-none snap-x snap-mandatory">
          <ul className="flex items-stretch gap-6 lg:gap-8 px-5 lg:px-8 pb-6 min-w-max">
            {SHOTS.map((s, i) => (
              <motion.li
                key={s.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="snap-center shrink-0"
              >
                <figure className="flex flex-col items-center">
                  <div className="relative w-60 sm:w-70 lg:w-80 aspect-9/16">
                    <div
                      className="absolute inset-3 rounded-[40px] bg-primary/12 blur-xl"
                      aria-hidden
                    />
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 1024px) 320px, 280px"
                      className="object-contain drop-shadow-[0_18px_36px_rgba(74,92,63,0.22)]"
                    />
                  </div>
                  <figcaption className="mt-4 text-sm font-medium text-text-secondary tracking-wide">
                    {s.label}
                  </figcaption>
                </figure>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
