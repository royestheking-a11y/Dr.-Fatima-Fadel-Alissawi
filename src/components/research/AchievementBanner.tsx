"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export default function AchievementBanner({ isArabic }: { isArabic: boolean }) {
  return (
    <section className="py-8 bg-linear-to-r from-gold-dark via-gold to-gold-light relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 text-white text-center md:text-left"
          dir={isArabic ? 'rtl' : 'ltr'}
        >
          <div className="bg-white/20 p-4 rounded-full backdrop-blur-md">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
              <span>{isArabic ? "بحث حائز على جوائز" : "Award-Winning Research"}</span>
            </h2>
            <p className="text-white/90 max-w-2xl text-lg">
              {isArabic 
                ? "تم التكريم في المؤتمر الدولي الحادي عشر للغة العربية برعاية مؤسسة محمد بن راشد آل مكتوم للمعرفة."
                : "Recognized at the 11th International Arabic Language Conference under the patronage of Mohammed Bin Rashid Al Maktoum Foundation."}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
