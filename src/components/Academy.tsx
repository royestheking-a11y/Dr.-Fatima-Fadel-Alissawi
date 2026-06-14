"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Users, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Academy() {
  const { t } = useLanguage();

  const features = [
    {
      slug: "research-based-education",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      titleKey: "academy.features.1.title",
      descKey: "academy.features.1.desc"
    },
    {
      slug: "arabic-english-learning",
      icon: <Globe className="w-8 h-8 text-primary" />,
      titleKey: "academy.features.2.title",
      descKey: "academy.features.2.desc"
    },
    {
      slug: "expert-led-lectures",
      icon: <Users className="w-8 h-8 text-primary" />,
      titleKey: "academy.features.3.title",
      descKey: "academy.features.3.desc"
    },
    {
      slug: "neutral-academic-approach",
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      titleKey: "academy.features.4.title",
      descKey: "academy.features.4.desc"
    }
  ];

  return (
    <section className="py-24 bg-soft relative overflow-hidden" id="academy">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-1/2 h-full bg-linear-to-l rtl:bg-linear-to-r from-white/50 to-transparent pointer-events-none" />
      <div className="absolute -left-40 rtl:-left-auto rtl:-right-40 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary tracking-widest uppercase text-xs font-bold mb-2 block">
              {t("academy.badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              {t("academy.title1")} <span className="text-secondary-teal">{t("academy.title2")}</span>
            </h2>
            <p className="text-charcoal/70 text-lg max-w-2xl mx-auto font-light">
              {t("academy.desc")}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link href={`/academy/${feature.slug}`} className="block h-full">
                <div className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300 h-full border border-primary/10 hover:border-primary/30 shadow-sm hover:shadow-xl relative overflow-hidden">
                  <div className="w-16 h-16 rounded-full bg-soft border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(13,148,136,0.1)] relative z-10">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-charcoal mb-3 relative z-10">{t(feature.titleKey)}</h3>
                  <p className="text-charcoal/60 leading-relaxed mb-8 relative z-10">
                    {t(feature.descKey)}
                  </p>
                  
                  <div className="absolute bottom-8 right-8 rtl:right-auto rtl:left-8 text-primary opacity-0 -translate-x-4 rtl:translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
                    <ArrowRight className="w-6 h-6 rtl:-scale-x-100" />
                  </div>
                  
                  {/* Subtle highlight overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
