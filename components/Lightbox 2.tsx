"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

export type LightboxImage = {
  src: string;
  alt: string;
};

type Props = {
  images: LightboxImage[];
  openIndex: number | null;
  onClose: () => void;
  onNavigate: (idx: number) => void;
};

export default function Lightbox({
  images,
  openIndex,
  onClose,
  onNavigate,
}: Props) {
  const t = useTranslations("common");
  const isOpen = openIndex !== null;

  const goPrev = useCallback(() => {
    if (openIndex === null) return;
    onNavigate((openIndex - 1 + images.length) % images.length);
  }, [openIndex, images.length, onNavigate]);

  const goNext = useCallback(() => {
    if (openIndex === null) return;
    onNavigate((openIndex + 1) % images.length);
  }, [openIndex, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [isOpen, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {isOpen && openIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label={images[openIndex].alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-text-primary/85 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label={t("closeDialog")}
            className="absolute top-4 right-4 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="w-5 h-5" />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <motion.div
            key={openIndex}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[420px] h-[80vh]"
          >
            <Image
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              fill
              sizes="(min-width: 768px) 420px, 90vw"
              className="object-contain"
              priority
            />
          </motion.div>

          {images.length > 1 && (
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/70 font-mono tracking-wide"
              onClick={(e) => e.stopPropagation()}
            >
              {openIndex + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
