"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Step = {
  num: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "Tarayın veya Yükleyin",
    body: "Yerleşik tarayıcıyı açın, çerçeveye alın — otomatik kenar algılama, çoklu sayfa PDF ve hizalama düzeltmesi arka planda halleder. Galeri, kamera ve dosya yükleme de açık.",
    image: "/screenshots-v1.1/tr/02-scanner.webp",
    alt: "Belge tarama ve yükleme ekranı",
  },
  {
    num: "02",
    title: "AI Düzenler",
    body: "Yapay zeka içeriği okur, belgeyi anlamlı bir isimle (örn. \"Elektrik Faturası — Mart 2026\") kaydeder ve 8 yerleşik kategoriden doğru olanına atar.",
    image: "/screenshots-v1.1/tr/03-collections.webp",
    alt: "Koleksiyonlar ve kategoriler ekranı",
  },
  {
    num: "03",
    title: "Yönetici Özetini Görün",
    body: "Belge detayında AI özeti, kritik noktalar ve öneriler birkaç saniyede gözünüzün önünde. Saatlerce tarama yerine, 30 saniyede özü.",
    image: "/screenshots-v1.1/tr/04-ai-summary.webp",
    alt: "AI Yönetici Özeti ekranı",
  },
  {
    num: "04",
    title: "Doğal Dilde Bulun",
    body: "Yazın veya söyleyin — \"geçen ay ki elektrik faturam\" gibi doğal sorgular için AI içerik ve niteliği birlikte değerlendirir.",
    image: "/screenshots-v1.1/tr/05-ai-search.webp",
    alt: "Doğal dil AI arama ekranı",
  },
  {
    num: "05",
    title: "Güvenle Saklayın",
    body: "AES-256 yerel şifreleme, TLS 1.2+ aktarım, Face ID/Touch ID kilidi ve şifreli bulut yedek. Yalnızca siz erişebilirsiniz.",
    image: "/screenshots-v1.1/tr/06-security.webp",
    alt: "Güvenlik ve kilit ekranı",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative py-24 lg:py-32 bg-surface-elevated border-y border-border-warm"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-secondary">
            Nasıl Çalışır
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary">
            Beş adımda belge kaosunun sonu.
          </h2>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            Tarayın, düzenleyin, özetleyin, bulun ve güvenle saklayın. Gerisini
            DocuVault halleder.
          </p>
        </motion.div>

        <div className="mt-16 space-y-20 lg:space-y-28">
          {STEPS.map((s, i) => {
            const flipped = i % 2 === 1;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                  flipped ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary text-white font-mono text-lg font-semibold tracking-tight shadow-warm-md">
                    {s.num}
                  </div>
                  <h3 className="mt-5 text-2xl lg:text-3xl font-semibold tracking-tight text-text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-lg">
                    {s.body}
                  </p>
                </div>

                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full max-w-sm aspect-9/16">
                    <div
                      className="absolute inset-4 rounded-[40px] bg-primary/10 blur-2xl"
                      aria-hidden
                    />
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 1024px) 360px, 80vw"
                      className="object-contain drop-shadow-[0_20px_40px_rgba(74,92,63,0.2)]"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
