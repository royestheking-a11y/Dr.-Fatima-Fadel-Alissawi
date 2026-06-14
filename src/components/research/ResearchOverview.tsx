"use client";

import { motion } from "framer-motion";
import { Clock, Download, Share2, Quote } from "lucide-react";

export default function ResearchOverview({ isArabic }: { isArabic: boolean }) {
  return (
    <section className="py-20 bg-soft/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-10 md:p-14 border border-gold/20 shadow-xl"
        >
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Abstract */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold font-serif text-primary mb-6">
                {isArabic ? "ملخص البحث" : "Research Abstract"}
              </h2>
              <div className="prose prose-lg text-charcoal/80 space-y-6">
                <p className="leading-relaxed">
                  {isArabic 
                    ? "يتناول هذا البحث التأثير العميق للرموز الدينية على تشكيل الهوية الاجتماعية وتعزيز التماسك المجتمعي. من خلال تحليل دور الرموز في التواصل والتكامل الثقافي، توضح الدراسة كيف تتجاوز هذه الرموز دلالاتها الروحية لتلعب دوراً حاسماً في تحقيق الانسجام الاجتماعي."
                    : "This research examines the profound impact of religious symbols on shaping social identity and enhancing community cohesion. By analyzing the role of symbols in communication and cultural integration, the study demonstrates how these symbols transcend their spiritual meanings to play a critical role in achieving social harmony."}
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {["Religious symbols", "Social identity", "Community cohesion", "Cultural integration", "Symbolic communication"].map((tag, idx) => {
                    const arTag = ["الرموز الدينية", "الهوية الاجتماعية", "التماسك المجتمعي", "التكامل الثقافي", "التواصل الرمزي"][idx];
                    return (
                      <span key={idx} className="bg-gold/10 text-gold-dark px-3 py-1.5 rounded-full text-sm font-medium">
                        #{isArabic ? arTag : tag}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar Actions */}
            <div className="lg:w-1/3 flex flex-col gap-6">
              <div className="bg-white/60 rounded-2xl p-6 border border-gold/10">
                <div className="flex items-center gap-3 text-primary mb-4 font-semibold">
                  <Clock className="w-5 h-5 text-gold" />
                  <span>{isArabic ? "وقت القراءة: ١٠ دقائق" : "Reading time: 10 mins"}</span>
                </div>
                
                <a 
                  href="https://www.rimakjournal.com/the-impact-of-religious-symbols-on-social-cohesion_1467" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-xl transition-all shadow-md mb-3"
                >
                  <Download className="w-5 h-5" />
                  {isArabic ? "تحميل البحث (PDF)" : "Download PDF"}
                </a>
                
                <button className="w-full flex items-center justify-center gap-2 bg-white hover:bg-soft text-primary py-3 px-6 rounded-xl transition-all border border-primary/20 shadow-sm mb-3">
                  <Quote className="w-5 h-5" />
                  {isArabic ? "نسخ الاستشهاد" : "Citation Export"}
                </button>

                <button className="w-full flex items-center justify-center gap-2 bg-white hover:bg-soft text-primary py-3 px-6 rounded-xl transition-all border border-primary/20 shadow-sm">
                  <Share2 className="w-5 h-5" />
                  {isArabic ? "مشاركة البحث" : "Share Research"}
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
