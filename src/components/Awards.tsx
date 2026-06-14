"use client";

import { motion } from "framer-motion";
import { Award, Star, Medal } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Awards() {
  const { t } = useLanguage();

  const awards = [
    {
      titleKey: "awards.1.title",
      issuerKey: "awards.1.issuer",
      eventKey: "awards.1.event",
      year: "2025",
      icon: <Star className="w-12 h-12 text-primary" />,
      descKey: "awards.1.desc"
    },
    {
      titleKey: "awards.2.title",
      issuerKey: "awards.2.issuer",
      year: "2024",
      icon: <Award className="w-12 h-12 text-primary" />,
      descKey: "awards.2.desc"
    },
    {
      titleKey: "awards.3.title",
      issuerKey: "awards.3.issuer",
      year: "2026",
      icon: <Medal className="w-12 h-12 text-primary" />,
      descKey: "awards.3.desc"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="awards">
      {/* Subtle museum lighting effect for light theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-6"
          >
            {t("awards.title1")} <span className="text-secondary-teal">{t("awards.title2")}</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative group cursor-pointer"
            >
              {/* Spotlight base */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-primary/20 rounded-[100%] blur-xl group-hover:bg-primary/40 group-hover:w-full transition-all duration-500 pointer-events-none" />
              
              <div className="bg-soft border border-primary/10 hover:border-primary/30 rounded-xl p-8 h-full flex flex-col items-center text-center transition-all duration-500 relative z-10 shadow-sm hover:shadow-xl">
                <div className="mb-8 relative">
                  <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full scale-150 group-hover:scale-110 transition-transform duration-500" />
                  <div className="relative z-10 p-4 bg-white border border-primary/20 rounded-full shadow-[0_0_15px_rgba(13,148,136,0.1)] group-hover:shadow-[0_0_25px_rgba(13,148,136,0.3)] transition-shadow duration-500">
                    {award.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-serif text-charcoal mb-4 line-clamp-3">{t(award.titleKey)}</h3>
                <p className="text-primary text-sm font-semibold mb-2">{t(award.issuerKey)}</p>
                {award.eventKey && <p className="text-charcoal/60 text-xs mb-4">{t(award.eventKey)}</p>}
                
                <p className="text-charcoal/70 text-sm font-light mt-auto pt-6 border-t border-primary/20">
                  {t(award.descKey)}
                </p>
                
                <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4 text-primary/10 font-bold text-4xl group-hover:text-primary/20 transition-colors pointer-events-none">
                  {award.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
