"use client";

import { motion } from "framer-motion";
import Hero3DBackground from "./Hero3DBackground";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  const { t, language } = useLanguage();
  
  return (
    <section className="relative h-dvh w-full flex items-center overflow-hidden bg-soft">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/heroimg.png"
          alt="Dr. Fatima Fadel Alissawi"
          fill
          priority
          className="object-cover object-center lg:object-right opacity-80"
        />
        {/* Soft luxury gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-soft via-soft/90 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-soft via-transparent to-transparent" />
      </div>

      {/* 3D Floating Elements Overlay */}
      <Hero3DBackground />

      {/* Massive Luxury Calligraphy Watermarks */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden mix-blend-multiply opacity-50 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute right-[-10%] top-[-20%] text-[800px] text-primary/10 font-serif leading-none select-none rtl:right-auto rtl:left-[-10%]"
        >
          ن
        </motion.div>
      </div>

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-10 flex justify-between px-6 lg:px-24">
        <div className="w-px h-full bg-linear-to-b from-transparent via-charcoal/5 to-transparent" />
        <div className="w-px h-full bg-linear-to-b from-transparent via-charcoal/5 to-transparent" />
        <div className="hidden lg:block w-px h-full bg-linear-to-b from-transparent via-charcoal/5 to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-24 flex flex-col justify-start md:justify-center h-full pt-[20vh] md:pt-0">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl relative"
        >
          {/* Subtle Accent above Title */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary tracking-[0.3em] uppercase text-xs font-semibold flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif text-charcoal mb-6 leading-[1.1] tracking-tight"
          >
            <span className="block text-charcoal/90">{t("hero.firstName")}</span>
            <span className="block mt-2 text-secondary-teal drop-shadow-[0_0_20px_rgba(13,148,136,0.2)]">
              {t("hero.lastName")}
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-2xl text-charcoal/70 font-light mb-12 max-w-2xl leading-relaxed border-l-2 rtl:border-l-0 rtl:border-r-2 border-primary/30 pl-6 rtl:pl-0 rtl:pr-6 ${language === "ar" ? "tracking-normal" : ""}`}
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <a href="#academy" className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-sm border border-primary/30 inline-block">
              <div className="absolute inset-0 bg-primary/5 transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 text-primary group-hover:text-white font-semibold tracking-widest uppercase text-sm transition-colors duration-500">
                {t("hero.button")}
              </span>
            </a>

            <div className="flex items-center gap-6 text-charcoal/50 text-sm tracking-widest uppercase font-medium">
              <a href="#symbols" className="hover:text-primary transition-colors block">{t("hero.tag1")}</a>
              <span className="w-1 h-1 rounded-full bg-primary/50 block" />
              <a href="#experience" className="hover:text-primary transition-colors block">{t("hero.tag2")}</a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Info Card */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="hidden lg:flex absolute right-12 bottom-32 rtl:right-auto rtl:left-12 glass-card p-6 rounded-xl border border-primary/20 z-30 flex-col gap-4 max-w-xs backdrop-blur-md bg-white/70"
      >
        <div className="flex items-center justify-between border-b border-charcoal/10 pb-4">
          <span className="text-xs uppercase tracking-widest text-charcoal/50">{t("hero.focus")}</span>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>
        <p className="text-charcoal/80 font-serif text-lg leading-snug">
          {t("hero.role")}
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-0 left-0 w-full z-20 flex justify-center pb-8"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-charcoal/30 text-[10px] uppercase tracking-[0.3em]">{t("hero.scroll")}</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-12 bg-linear-to-b from-primary to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
