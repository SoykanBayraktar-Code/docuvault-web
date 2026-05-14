"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useTranslations } from "next-intl";

export default function BackToTop() {
  const t = useTranslations("common");
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 12 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: reduceMotion ? "auto" : "smooth",
            });
          }}
          aria-label={t("backToTop")}
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-warm-lg ring-1 ring-primary-dark/20 hover:bg-primary-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowUp className="w-5 h-5" strokeWidth={2.25} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
