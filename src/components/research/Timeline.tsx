"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Star } from "lucide-react";

export default function Timeline({ isArabic }: { isArabic: boolean }) {
  const journey = [
    {
      year: "2022",
      icon: GraduationCap,
      title: isArabic ? "الماجستير" : "Master Thesis",
      desc: isArabic ? "الأسلوب الرمزي في القرآن الكريم" : "The Symbolic Method in the Holy Qur'an",
    },
    {
      year: "2025",
      icon: Award,
      title: isArabic ? "بحث حائز على جوائز" : "Award Winning Research",
      desc: isArabic ? "فاعلية استراتيجية الرموز والأيقونات" : "Effectiveness of Symbols and Icons Strategy",
    },
    {
      year: "2026",
      icon: BookOpen,
      title: isArabic ? "المنشور الحالي" : "Current Publication",
      desc: isArabic ? "أثر الرموز الدينية على التماسك الاجتماعي" : "Impact of Religious Symbols on Social Cohesion",
    },
    {
      year: isArabic ? "جاري" : "Current",
      icon: Star,
      title: isArabic ? "أبحاث الدكتوراه" : "PhD Research",
      desc: isArabic ? "القيم القيادية في القصص القرآني" : "Leadership Values in Qur'anic Stories",
      highlight: true
    }
  ];

  return (
    <section className="py-24 bg-marble relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
            {isArabic ? "رحلة البحث الأكاديمي" : "Academic Research Journey"}
          </h2>
          <p className="text-charcoal/70">
            {isArabic ? "التطور الفكري والبحثي عبر السنوات" : "Intellectual and research evolution over the years"}
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gold/20 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-4 gap-4">
            {journey.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative text-center flex flex-col items-center"
              >
                {/* Year top */}
                <div className={`text-xl font-bold mb-8 ${item.highlight ? 'text-gold-dark' : 'text-primary/40'}`}>
                  {item.year}
                </div>
                
                {/* Node */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center relative z-10 ${item.highlight ? 'bg-gold text-primary shadow-[0_0_20px_rgba(212,175,55,0.4)]' : 'bg-white border-4 border-soft text-primary'}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                
                {/* Content bottom */}
                <div className="mt-8 px-2">
                  <h3 className={`font-bold mb-2 ${item.highlight ? 'text-primary' : 'text-charcoal'}`}>{item.title}</h3>
                  <p className="text-sm text-charcoal/70 leading-snug">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative space-y-8">
          <div className={`absolute top-0 bottom-0 w-1 bg-gold/20 ${isArabic ? 'right-8' : 'left-8'}`}></div>
          
          {journey.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex items-center gap-6 ${isArabic ? 'pr-8' : 'pl-8'}`}
            >
              <div className={`absolute ${isArabic ? 'right-4 translate-x-1/2' : 'left-4 -translate-x-1/2'} w-10 h-10 rounded-full flex items-center justify-center z-10 ${item.highlight ? 'bg-gold text-primary shadow-[0_0_15px_rgba(212,175,55,0.4)]' : 'bg-white border-4 border-soft text-primary'}`}>
                <item.icon className="w-4 h-4" />
              </div>
              
              <div className={`bg-white p-6 rounded-2xl shadow-sm border ${item.highlight ? 'border-gold' : 'border-primary/10'} w-full`}>
                <span className={`text-sm font-bold block mb-1 ${item.highlight ? 'text-gold-dark' : 'text-primary/60'}`}>{item.year}</span>
                <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                <p className="text-sm text-charcoal/70">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
