"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-soft relative overflow-hidden" id="contact">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-1/3 h-1/3 bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 rtl:left-auto rtl:right-0 w-1/3 h-1/3 bg-primary/10 blur-[100px] pointer-events-none" />

      {/* Giant Luxury Watermark */}
      <div className="absolute bottom-0 right-10 rtl:right-auto rtl:left-10 text-[600px] text-primary/5 font-serif select-none pointer-events-none z-0 rotate-12">
        ✉
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-6"
          >
            {t("contact.title1")} <span className="text-secondary-teal">{t("contact.title2")}</span>
          </motion.h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto font-light">
            {t("contact.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass-card border border-primary/20 p-8 rounded-2xl">
              <h3 className="text-2xl font-serif text-charcoal mb-8">{t("contact.info")}</h3>
              
              <div className="space-y-6">
                <a href="mailto:fatimaalissawi1981f@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-soft border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-colors shadow-sm">
                    <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-charcoal/40 text-sm mb-1 uppercase tracking-widest font-semibold">{t("contact.email")}</p>
                    <p className="text-charcoal group-hover:text-primary transition-colors">fatimaalissawi1981f@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+971567199176" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-soft border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-colors shadow-sm">
                    <Phone className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-charcoal/40 text-sm mb-1 uppercase tracking-widest font-semibold">{t("contact.phone")}</p>
                    <p className="text-charcoal group-hover:text-primary transition-colors" dir="ltr">+971 56 719 9176</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-soft border border-primary/30 flex items-center justify-center shadow-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-charcoal/40 text-sm mb-1 uppercase tracking-widest font-semibold">{t("contact.location")}</p>
                    <p className="text-charcoal">{t("contact.country")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card border border-primary/20 p-8 rounded-2xl flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-2 px-6 py-3 border border-primary/30 rounded-full text-charcoal hover:bg-primary hover:text-white transition-all text-sm font-semibold hover:border-primary bg-white/50">
                ResearchGate <ExternalLink className="w-4 h-4 rtl:-scale-x-100" />
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 border border-primary/30 rounded-full text-charcoal hover:bg-primary hover:text-white transition-all text-sm font-semibold hover:border-primary bg-white/50">
                Google Scholar <ExternalLink className="w-4 h-4 rtl:-scale-x-100" />
              </a>
              <a href="#" className="flex items-center gap-2 px-6 py-3 border border-primary/30 rounded-full text-charcoal hover:bg-primary hover:text-white transition-all text-sm font-semibold hover:border-primary bg-white/50">
                ORCID <ExternalLink className="w-4 h-4 rtl:-scale-x-100" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="glass-card border border-primary/30 p-8 md:p-12 rounded-2xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-charcoal/60 text-sm tracking-widest uppercase font-semibold">{t("contact.firstName")}</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-primary/30 py-2 text-charcoal focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-charcoal/60 text-sm tracking-widest uppercase font-semibold">{t("contact.lastName")}</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-primary/30 py-2 text-charcoal focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-charcoal/60 text-sm tracking-widest uppercase font-semibold">{t("contact.emailAddress")}</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-primary/30 py-2 text-charcoal focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-charcoal/60 text-sm tracking-widest uppercase font-semibold">{t("contact.message")}</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-primary/30 py-2 text-charcoal focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button 
                type="button"
                className="w-full py-4 mt-8 bg-transparent border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 uppercase tracking-widest text-sm rounded-sm"
              >
                {t("contact.send")}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
