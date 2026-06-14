"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Hero({ isArabic }: { isArabic: boolean }) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-20 pb-12 overflow-hidden bg-white/50">
      {/* Background Textures */}
      <div className="absolute inset-0 bg-marble opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-gold-pattern opacity-10 z-0"></div>
      
      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-white/20 via-white/40 to-soft/80 z-0"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
        {/* Back Button */}
        <div className="flex justify-start mb-8 text-left" dir={isArabic ? 'rtl' : 'ltr'}>
          <Link 
            href="/#researchLab" 
            className="inline-flex items-center gap-2 text-charcoal/50 hover:text-primary transition-colors font-semibold tracking-widest uppercase text-xs"
          >
            {isArabic ? (
              <>العودة إلى الأبحاث <ArrowLeft className="w-4 h-4 rotate-180" /></>
            ) : (
              <><ArrowLeft className="w-4 h-4" /> Back to Research</>
            )}
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-10 md:p-16 border border-gold/30 shadow-2xl shadow-gold/5"
        >
          <div className="mb-6 flex justify-center">
            <span className="px-4 py-1.5 rounded-full border border-gold text-gold-dark text-sm font-semibold tracking-wider uppercase">
              {isArabic ? "دراسة بحثية" : "Research Publication"}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-8 font-serif">
            {isArabic 
              ? "أثر الرموز الدينية على التماسك الاجتماعي" 
              : "The Impact of Religious Symbols on Social Cohesion"}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12 pt-12 border-t border-gold/20">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-primary/60 mb-2 font-bold">
                {isArabic ? "المؤلف" : "Author"}
              </h3>
              <p className="text-xl font-medium text-charcoal">
                {isArabic ? "د. فاطمة فاضل العيساوي" : "Dr. Fatima Fadel Alissawi"}
              </p>
            </div>
            
            <div>
              <h3 className="text-sm uppercase tracking-wider text-primary/60 mb-2 font-bold">
                {isArabic ? "نشر في" : "Published In"}
              </h3>
              <p className="text-lg text-charcoal">
                {isArabic ? "مجلة رماك (RIMAK Journal)" : "RIMAK Journal"}
              </p>
              <p className="text-sm text-primary/70 mt-1">
                {isArabic ? "المجلد 8 • الإصدار 3 • 2026" : "Volume 8 • Issue 3 • 2026"}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-sm uppercase tracking-wider text-primary/60 mb-3 font-bold text-left">
              {isArabic ? "فئة البحث" : "Research Category"}
            </h3>
            <div className="flex flex-wrap gap-3">
              {["Symbolism", "Sociology", "Religious Studies"].map((cat, idx) => {
                const arCat = idx === 0 ? "الرمزية" : idx === 1 ? "علم الاجتماع" : "الدراسات الدينية";
                return (
                  <span key={idx} className="bg-primary/5 text-primary px-4 py-2 rounded-lg text-sm font-medium border border-primary/10">
                    {isArabic ? arCat : cat}
                  </span>
                )
              })}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
