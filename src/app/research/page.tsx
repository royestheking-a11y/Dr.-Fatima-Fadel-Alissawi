"use client";

import { motion } from "framer-motion";
import { BookOpen, Award, FileText, Bookmark, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ResearchArchive() {
  const { language } = useLanguage();

  const isArabic = language === 'ar';

  const categories = [
    {
      id: "award-winning",
      title: isArabic ? "أبحاث حائزة على جوائز" : "Award Winning Research",
      icon: Award,
      items: [
        {
          title: isArabic ? "أثر الرموز الدينية على التماسك الاجتماعي" : "The Impact of Religious Symbols on Social Cohesion",
          date: "2026",
          link: "/research/religious-symbols-social-cohesion",
          isFeatured: true
        },
        {
          title: isArabic ? "فاعلية استراتيجية الرموز والأيقونات" : "Effectiveness of Symbols and Icons Strategy",
          date: "2025",
          link: "#",
          isFeatured: true
        }
      ]
    },
    {
      id: "published",
      title: isArabic ? "الأبحاث المنشورة" : "Published Papers",
      icon: BookOpen,
      items: [
        {
          title: isArabic ? "أثر الرموز الدينية على التماسك الاجتماعي" : "The Impact of Religious Symbols on Social Cohesion",
          date: "2026",
          link: "/research/religious-symbols-social-cohesion",
        }
      ]
    },
    {
      id: "conferences",
      title: isArabic ? "أوراق المؤتمرات" : "Conference Papers",
      icon: FileText,
      items: [
        {
          title: isArabic ? "المؤتمر الدولي الحادي عشر للغة العربية" : "11th International Arabic Language Conference",
          date: "2026",
          link: "#",
        }
      ]
    },
    {
      id: "thesis",
      title: isArabic ? "الرسائل الجامعية" : "Thesis & Dissertation",
      icon: GraduationCap,
      items: [
        {
          title: isArabic ? "الأسلوب الرمزي في القرآن الكريم (الماجستير)" : "The Symbolic Method in the Holy Qur'an (Master Thesis)",
          date: "2022",
          link: "#",
        },
        {
          title: isArabic ? "القيم القيادية في القصص القرآني (الدكتوراه)" : "Leadership Values in Qur'anic Stories (PhD Research)",
          date: isArabic ? "جاري" : "Ongoing",
          link: "#",
        }
      ]
    },
    {
      id: "manuscripts",
      title: isArabic ? "دراسات المخطوطات" : "Manuscript Studies",
      icon: Bookmark,
      items: []
    }
  ];

  return (
    <main className="min-h-screen bg-marble text-charcoal py-24 relative overflow-hidden" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gold-pattern opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary"
          >
            {isArabic ? "أرشيف الأبحاث" : "Research Archive"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-primary/80 max-w-3xl mx-auto"
          >
            {isArabic 
              ? "استكشاف أعمق للرموز، المعاني، والتفسير الاجتماعي من خلال البحث الأكاديمي."
              : "A deeper exploration of symbols, meanings, and social interpretation through academic research."}
          </motion.p>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="glass-card rounded-2xl p-8 border border-gold/20 hover:border-gold/50 transition-colors duration-300 relative group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/50 rounded-xl text-primary shadow-sm group-hover:text-gold transition-colors">
                  <category.icon className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-primary">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.items.length > 0 ? (
                  category.items.map((item, itemIdx) => (
                    <Link href={item.link} key={itemIdx} className="block group/item">
                      <div className="p-4 rounded-xl bg-white/40 hover:bg-white/70 transition-all border border-transparent hover:border-gold/30 flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-charcoal group-hover/item:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <span className="text-sm text-primary/60 mt-2 block">{item.date}</span>
                        </div>
                        {item.link !== "#" && (
                          <div className="mt-1 shrink-0 text-gold/50 group-hover/item:text-gold transition-colors">
                            <ArrowRight className={`w-5 h-5 ${isArabic ? 'rotate-180' : ''}`} />
                          </div>
                        )}
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className="p-4 text-center text-primary/40 italic">
                    {isArabic ? "سيتم إضافة أبحاث قريباً" : "Research coming soon"}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
