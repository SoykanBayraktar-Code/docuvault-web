"use client";

import { motion } from "framer-motion";
import {
  ScanLine,
  FileText,
  Sparkles,
  Mic,
  Wand2,
  FolderOpen,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
  badge?: string;
};

const FEATURES: Feature[] = [
  {
    icon: ScanLine,
    title: "Yerleşik Belge Tarayıcı",
    body: "Otomatik kenar algılama, çoklu sayfa PDF birleştirme ve hizalama düzeltmesi. Üçüncü taraf uygulamaya gerek yok.",
    badge: "V1.1",
  },
  {
    icon: FileText,
    title: "AI Yönetici Özeti",
    body: "Yüklediğiniz her belge için anlamlı özet, kritik noktalar ve öneriler. Sözleşmeyi okumaya saatler harcamadan, özünü 30 saniyede.",
    badge: "V1.1",
  },
  {
    icon: Sparkles,
    title: "Doğal Dil AI Arama",
    body: "\"Geçen ay elektrik faturam\" yazın — AI sorgunuzu yorumlar, içerik ve nitelik birlikte değerlendirilir.",
  },
  {
    icon: Mic,
    title: "Sesli Komut",
    body: "Türkçe ve İngilizce sesli arama. Elleriniz doluyken bile belgelerinize tek söylemle ulaşın.",
  },
  {
    icon: Wand2,
    title: "Akıllı Adlandırma",
    body: "AI içeriği okur; \"IMG_4519\" yerine \"Elektrik Faturası — Mart 2026\" gibi anlamlı bir isimle 8 yerleşik kategoriden doğru olanına atar.",
  },
  {
    icon: FolderOpen,
    title: "Özel Koleksiyonlar",
    body: "Ev, iş, sağlık — kendi ikon ve renginizle sınırsız koleksiyon. İlgili belgeleri tek bakışta bulun.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-secondary">
            Özellikler
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary">
            Modern belge yönetimi,{" "}
            <span className="text-primary">el yapımı gibi</span>.
          </h2>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            Güvenliği, hızı ve zekâyı tek bir uygulamada birleştiriyoruz. Her
            detay, bir arşivcinin titizliğiyle tasarlandı.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative p-6 lg:p-7 rounded-2xl bg-surface ring-1 ring-border-warm shadow-warm-sm hover:shadow-warm-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-muted text-primary ring-1 ring-primary/10">
                  <f.icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                {f.badge && (
                  <span className="px-2 py-0.5 rounded-full bg-secondary-muted text-secondary text-[10px] font-semibold tracking-wider uppercase ring-1 ring-secondary/20">
                    {f.badge}
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-text-primary">
                {f.title}
              </h3>
              <p className="mt-2 text-[15px] text-text-secondary leading-relaxed">
                {f.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
