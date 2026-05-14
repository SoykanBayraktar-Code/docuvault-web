"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Cloud, Fingerprint } from "lucide-react";
import AppStoreButtons from "./AppStoreButtons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 lg:pt-16 pb-20 lg:pb-28">
      <div
        className="absolute inset-0 paper-grain opacity-60 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -top-24 -left-24 w-140 h-140 hero-blob pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-24 -right-32 w-130 h-130 hero-blob pointer-events-none opacity-80"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-6 text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-muted text-primary-dark text-xs font-medium tracking-wide uppercase ring-1 ring-primary/15">
            <ShieldCheck className="w-3.5 h-3.5" />
            Güvenli Belge Kasası
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[64px] lg:leading-[1.05] font-semibold tracking-tight text-text-primary">
            Belgeleriniz güvende.
            <br />
            <span className="text-primary">Saniyeler içinde</span> bulun.
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0">
            Faturalar, kimlikler, sözleşmeler — tüm kritik belgelerinizi tek
            bir şifrelenmiş kasada saklayın. Gelişmiş AI ile içerik arayın,
            sesli komutla bulun.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <AppStoreButtons size="lg" />
          </div>

          <ul className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-3 text-sm text-text-secondary">
            <li className="flex items-center gap-2">
              <Fingerprint className="w-4 h-4 text-primary" />
              Face ID / Touch ID
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Uçtan uca şifreli
            </li>
            <li className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-primary" />
              Bulut yedekli
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: -1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-6 relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-md lg:max-w-lg aspect-3/4">
            <div
              className="absolute inset-8 rounded-[48px] bg-primary/10 blur-2xl"
              aria-hidden
            />
            <Image
              src="/hero.webp"
              alt="DocuVault mobil uygulama arayüzü"
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-contain drop-shadow-[0_30px_60px_rgba(74,92,63,0.25)] rounded-[40px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
