"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yText = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const { t, language } = useLanguage();

  const timelineData = [
    { key: "1", span: "md:col-span-2" },
    { key: "2", span: "md:col-span-1" },
    { key: "3", span: "md:col-span-1" },
    { key: "4", span: "md:col-span-1" },
    { key: "5", span: "md:col-span-1" },
    { key: "6", span: "md:col-span-2" },
  ];

  return (
    <section id="about" ref={containerRef} className="py-32 bg-soft relative overflow-hidden">
      {/* Giant Luxury Watermark */}
      <div className="absolute top-1/3 left-10 rtl:left-auto rtl:right-10 text-[800px] text-primary/5 font-serif select-none pointer-events-none z-0 rotate-12">
        ۩
      </div>

      <div className="max-w-360 mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left: Sticky Profile & Vision */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 relative">
            <motion.div style={{ y: yText }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-16 bg-primary" />
                <span className="text-primary tracking-[0.3em] uppercase text-xs font-semibold">{t("about.badge")}</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-serif text-charcoal mb-8 leading-[1.1]">
                {t("about.title1")} <span className="block mt-2 italic font-light">{t("about.title2")} <span className="text-secondary-teal">{t("about.title3")}</span></span>
              </h2>
              
              <p className={`text-charcoal/70 text-lg mb-12 font-light leading-relaxed max-w-md ${language === "ar" ? "tracking-normal" : ""}`}>
                {t("about.desc")}
              </p>

            </motion.div>
          </div>

          {/* Right: Asymmetrical Bento Grid Timeline */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 lg:pt-32">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
                  className={`relative p-8 bg-white border border-charcoal/5 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-primary/30 transition-all duration-500 group flex flex-col justify-between overflow-hidden ${item.span}`}
                >
                  {/* Subtle Hover Gradient */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-soft text-primary border border-primary/20 text-xs font-bold tracking-widest mb-6">
                      {t(`about.timeline.${item.key}.year`)}
                    </span>
                    <h3 className="text-2xl font-serif text-charcoal mb-4 group-hover:text-primary transition-colors duration-300">
                      {t(`about.timeline.${item.key}.title`)}
                    </h3>
                    <p className="text-charcoal/60 leading-relaxed font-light">
                      {t(`about.timeline.${item.key}.desc`)}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute -bottom-4 -right-4 rtl:-right-auto rtl:-left-4 text-8xl text-primary opacity-[0.02] font-serif group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none select-none">
                    {t(`about.timeline.${item.key}.year`).slice(-2)}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
