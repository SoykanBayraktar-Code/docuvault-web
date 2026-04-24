"use client";

import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import AppStoreButtons from "./AppStoreButtons";

export default function FinalCTA() {
  return (
    <section id="download" className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-175 h-125 hero-blob pointer-events-none"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-surface ring-1 ring-border-warm shadow-warm-xl p-10 lg:p-16 overflow-hidden"
        >
          <div
            className="absolute inset-0 paper-grain opacity-60 pointer-events-none"
            aria-hidden
          />
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary">
                Belge kaosuna bugün son verin.
              </h2>
              <p className="mt-4 text-lg text-text-secondary max-w-xl leading-relaxed">
                DocuVault&rsquo;u ücretsiz indirin. Dakikalar içinde kasanızı
                kurun, belgelerinizi güvenle saklayın.
              </p>

              <div className="mt-8">
                <AppStoreButtons size="lg" />
              </div>
            </div>

            <div className="md:col-span-4 flex md:justify-end">
              <div className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-primary-muted ring-1 ring-primary/15">
                <div className="p-3 rounded-xl bg-white">
                  <QRCodeSVG
                    value="https://appdocuvault.com"
                    size={128}
                    bgColor="#FFFFFF"
                    fgColor="#2E3D27"
                    level="M"
                    marginSize={0}
                  />
                </div>
                <span className="text-xs text-primary-dark font-medium text-center">
                  Telefonunuzla tara
                  <br />
                  uygulamayı aç
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
