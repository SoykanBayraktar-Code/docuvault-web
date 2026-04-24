"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Clock } from "lucide-react";

const ITEMS = [
  {
    icon: MessageCircle,
    title: "Hızlı Yanıt",
    body: "Sorularınızı e-posta ile iletebilirsiniz. En kısa sürede size dönüş yapıyoruz.",
  },
  {
    icon: Clock,
    title: "Destek Saatleri",
    body: "Hafta içi 09:00 – 18:00 saatleri arasında aktif olarak destek veriyoruz.",
  },
  {
    icon: Mail,
    title: "E-posta Desteği",
    body: "Teknik sorunlar, hesap işlemleri veya geri bildirimleriniz için bize yazın.",
  },
];

export default function Support() {
  return (
    <section
      id="support"
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
            Destek
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary">
            Yardıma mı ihtiyacınız var?
          </h2>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            Sorularınız, geri bildirimleriniz veya teknik sorunlarınız için
            buradayız. Size yardımcı olmaktan memnuniyet duyarız.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-7 rounded-2xl bg-surface ring-1 ring-border-warm shadow-warm-sm"
            >
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-muted text-primary ring-1 ring-primary/10">
                <item.icon className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] text-text-secondary leading-relaxed">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-7 rounded-2xl bg-primary-muted ring-1 ring-primary/15"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-white shrink-0">
            <Mail className="w-5 h-5" strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-sm font-medium text-text-primary">
              Destek e-postamız
            </p>
            <a
              href="mailto:destek@appdocuvault.com"
              className="mt-1 text-lg font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              destek@appdocuvault.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
