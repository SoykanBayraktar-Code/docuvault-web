"use client";

import { motion } from "framer-motion";
import {
  Lock,
  Sparkles,
  Mic,
  ScanLine,
  Wand2,
  FolderOpen,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    icon: Lock,
    title: "Güvenli Kasa",
    body: "Face ID ve Touch ID biyometrik erişim. Şifrelenmiş bulut yedekleme ile belgeleriniz hep güvende.",
  },
  {
    icon: Sparkles,
    title: "AI Destekli Arama",
    body: "Gelişmiş yapay zeka ile doğal dilde arama. \"Geçen ay ki elektrik faturam\" yazın, saniyede bulsun.",
  },
  {
    icon: Mic,
    title: "Sesli Komut",
    body: "Türkçe sesli arama. Elleriniz doluyken bile belgelerinize sesli komutla ulaşın.",
  },
  {
    icon: ScanLine,
    title: "Otomatik OCR",
    body: "Fotoğraf çekin, metni çıkartın. Taranmış belgeler aranabilir metne dönüşür.",
  },
  {
    icon: Wand2,
    title: "Akıllı İsimlendirme",
    body: "AI içeriği okur, belgenizi kategorisine göre otomatik adlandırır: Fatura, Kimlik, Reçete…",
  },
  {
    icon: FolderOpen,
    title: "Koleksiyonlar",
    body: "İlgili belgeleri renk ve ikonla gruplayın. Ev, iş, sağlık — her şey yerli yerinde.",
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
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-muted text-primary ring-1 ring-primary/10">
                <f.icon className="w-5 h-5" strokeWidth={1.75} />
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
