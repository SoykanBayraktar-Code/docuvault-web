"use client";

import { motion } from "framer-motion";
import { Lock, ShieldCheck, Fingerprint, ExternalLink } from "lucide-react";

const PILLARS = [
  {
    icon: Lock,
    title: "Uçtan Uca Şifreli",
    body: "Belgeleriniz yüklenirken ve saklanırken endüstri standardı şifreleme ile korunur.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenli Altyapı",
    body: "Güvenli bulut altyapısında özel depolama. Verilerinize yalnızca siz erişebilirsiniz.",
  },
  {
    icon: Fingerprint,
    title: "Biyometrik Kilit",
    body: "Face ID ve Touch ID. Cihazınız kaybolsa bile kasanız kilitli kalır.",
  },
];

export default function Security() {
  return (
    <section className="relative py-24 lg:py-32 bg-primary-dark text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay paper-grain pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -top-40 right-0 w-150 h-150 rounded-full bg-secondary/20 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-secondary-light">
            Güvenlik & Gizlilik
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Gizliliğiniz bizim için kutsaldır.
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            Belgeleriniz hayatınızın en mahrem parçalarından biri. Biz de
            böyle davranıyoruz.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-7 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-secondary/20 text-secondary-light ring-1 ring-secondary/30">
                <p.icon className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-[15px] text-white/70 leading-relaxed">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="https://soykanbayraktar-code.github.io/docuvault-privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-secondary-light hover:text-white transition-colors"
          >
            Gizlilik Politikasını İncele
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
