"use client";

import { motion } from "framer-motion";
import { Briefcase, Building } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      titleKey: "experience.1.role",
      companyKey: "experience.1.location",
      periodKey: "experience.1.period",
      descKey: "experience.1.desc"
    },
    {
      titleKey: "experience.2.role",
      companyKey: "experience.2.location",
      periodKey: "experience.2.period",
      descKey: "experience.2.desc"
    },
    {
      titleKey: "experience.3.role",
      companyKey: "experience.3.location",
      periodKey: "experience.3.period",
      descKey: "experience.3.desc"
    }
  ];

  return (
    <section className="py-24 bg-soft relative overflow-hidden" id="experience">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary tracking-widest uppercase text-xs font-bold mb-2 block">
              {t("experience.badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              {t("experience.title1")} <span className="text-secondary-teal">{t("experience.title2")}</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-4 rtl:left-auto rtl:right-4 md:left-1/2 md:rtl:left-auto md:rtl:right-1/2 top-0 bottom-0 w-px bg-primary/20 md:-translate-x-1/2 md:rtl:translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row justify-between items-center w-full ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 rtl:left-auto rtl:right-4 md:left-1/2 md:rtl:left-auto md:rtl:right-1/2 top-8 md:top-1/2 w-4 h-4 rounded-full bg-soft border-2 border-primary transform translate-x-[-7px] rtl:translate-x-[7px] -translate-y-1/2 md:-translate-x-1/2 md:rtl:translate-x-1/2 z-10 shadow-[0_0_10px_rgba(13,148,136,0.5)]" />

                {/* Content Card */}
                <div className="w-full md:w-5/12 pl-12 rtl:pl-0 rtl:pr-12 md:pl-0 md:rtl:pr-0">
                  <div className="glass-card p-8 rounded-2xl border border-charcoal/5 hover:border-primary/30 transition-all duration-300 relative group overflow-hidden hover:shadow-xl hover:shadow-primary/5">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 bg-white/50 text-primary border border-primary/10 text-xs font-bold tracking-widest rounded-md mb-4">
                        {t(exp.periodKey)}
                      </span>
                      
                      <h3 className="text-2xl font-serif text-charcoal mb-2">{t(exp.titleKey)}</h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-charcoal/60 text-sm font-medium mb-4">
                        <span className="flex items-center gap-1.5">
                          <Building className="w-4 h-4 text-primary/70" />
                          {t(exp.companyKey)}
                        </span>
                      </div>
                      
                      <p className="text-charcoal/60 leading-relaxed font-light text-sm">
                        {t(exp.descKey)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Empty Side for alignment */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
