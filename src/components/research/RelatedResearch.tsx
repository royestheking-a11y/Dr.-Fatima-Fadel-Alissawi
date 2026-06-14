"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function RelatedResearch({ isArabic }: { isArabic: boolean }) {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gold-pattern opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <BookOpen className="w-8 h-8 text-gold" />
          <h2 className="text-3xl font-bold font-serif">
            {isArabic ? "أبحاث ذات صلة" : "Related Research"}
          </h2>
        </div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-gold/50 transition-all group"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <span className="text-gold text-sm font-semibold tracking-wider uppercase mb-2 block">
                {isArabic ? "بحث حائز على جوائز" : "Award-Winning Research"}
              </span>
              <h3 className="text-2xl font-bold mb-3 font-serif">
                {isArabic 
                  ? "فاعلية استراتيجية الرموز والأيقونات المعتمدة على السلم الموسيقي في تدريس اللغة العربية" 
                  : "Effectiveness of Symbols and Icons Strategy Based on Musical Scale in Teaching Arabic"}
              </h3>
              <p className="text-white/70 max-w-2xl">
                {isArabic 
                  ? "دراسة مبتكرة تربط بين الرمزية اللغوية والأنماط الموسيقية لتعزيز الفهم والاحتفاظ بالمعلومات."
                  : "An innovative study linking linguistic symbolism with musical patterns to enhance understanding and retention."}
              </p>
            </div>

            <Link href="/research/effectiveness-of-symbols-icons-strategy" className="shrink-0">
              <div className="w-14 h-14 rounded-full border-2 border-gold flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-primary transition-colors">
                <ArrowRight className={`w-6 h-6 ${isArabic ? 'rotate-180' : ''}`} />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
