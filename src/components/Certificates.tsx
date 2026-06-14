"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FileBadge, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { t, language } = useLanguage();

  const categories = [
    { id: "all", labelKey: "certificates.cat.all" },
    { id: "academic", labelKey: "certificates.cat.academic" },
    { id: "leadership", labelKey: "certificates.cat.leadership" },
    { id: "diplomacy", labelKey: "certificates.cat.diplomacy" },
    { id: "human", labelKey: "certificates.cat.human" },
    { id: "education", labelKey: "certificates.cat.education" }
  ];

  const certificates = [
    { titleKey: "certificates.1.title", issuerKey: "certificates.1.issuer", category: "leadership", catKey: "certificates.1.cat" },
    { titleKey: "certificates.2.title", issuerKey: "certificates.2.issuer", category: "diplomacy", catKey: "certificates.2.cat" },
    { titleKey: "certificates.3.title", issuerKey: "certificates.3.issuer", category: "human", catKey: "certificates.3.cat" },
    { titleKey: "certificates.4.title", issuerKey: "certificates.4.issuer", category: "diplomacy", catKey: "certificates.4.cat" },
    { titleKey: "certificates.5.title", issuerKey: "certificates.5.issuer", category: "human", catKey: "certificates.5.cat" },
    { titleKey: "certificates.6.title", issuerKey: "certificates.6.issuer", category: "leadership", catKey: "certificates.6.cat" },
    { titleKey: "certificates.7.title", issuerKey: "certificates.7.issuer", category: "education", catKey: "certificates.7.cat" },
    { titleKey: "certificates.8.title", issuerKey: "certificates.8.issuer", category: "academic", catKey: "certificates.8.cat" },
    { titleKey: "certificates.9.title", issuerKey: "certificates.9.issuer", category: "academic", catKey: "certificates.9.cat" },
    { titleKey: "certificates.10.title", issuerKey: "certificates.10.issuer", category: "academic", catKey: "certificates.10.cat" }
  ];

  const filteredCerts = activeCategory === "all" 
    ? certificates 
    : certificates.filter(c => c.category === activeCategory);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="certificates">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              {t("certificates.title1")} <span className="text-secondary-teal">{t("certificates.title2")}</span>
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                activeCategory === cat.id 
                  ? "bg-primary text-white shadow-lg" 
                  : "bg-white text-charcoal/60 hover:bg-primary/10 border border-primary/20"
              )}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map((cert, i) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={`${cert.titleKey}-${i}`}
              className="perspective-1000 group cursor-pointer h-64"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                
                {/* Front of Card */}
                <div className="absolute w-full h-full backface-hidden bg-white border border-primary/20 p-8 flex flex-col justify-between shadow-sm rounded-2xl">
                  <div className="flex justify-between items-start mb-4">
                    <FileBadge className="w-8 h-8 text-primary/40" />
                    <span className="text-xs font-bold tracking-widest text-charcoal/40 uppercase">{t(cert.catKey)}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-charcoal mb-2 line-clamp-2">{t(cert.titleKey)}</h3>
                    <p className="text-primary text-sm font-medium">{t(cert.issuerKey)}</p>
                  </div>
                  <div className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-widest text-charcoal/50 group-hover:text-primary transition-colors">
                    {language === 'ar' ? 'اقلب للتفاصيل' : 'Flip for details'} <ChevronRight className="w-4 h-4 rtl:rotate-180 ml-1 rtl:ml-0 rtl:mr-1" />
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-charcoal text-white p-8 flex flex-col justify-center items-center text-center shadow-2xl border border-primary/30 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <FileBadge className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-primary text-xs uppercase tracking-widest mb-3">{t(cert.catKey)}</span>
                  <h3 className="text-lg font-serif mb-4 leading-snug text-white">{t(cert.titleKey)}</h3>
                  <p className="text-white/60 text-sm">{t(cert.issuerKey)}</p>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
