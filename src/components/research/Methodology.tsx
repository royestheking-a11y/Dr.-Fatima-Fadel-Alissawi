"use client";

import { motion } from "framer-motion";
import { Book, Eye, Users, Scale, CheckCircle } from "lucide-react";

export default function Methodology({ isArabic }: { isArabic: boolean }) {
  const steps = [
    {
      id: 1,
      icon: Book,
      title: isArabic ? "مراجعة الأدبيات" : "Literature Review",
      desc: isArabic ? "تحليل شامل للدراسات السابقة حول الرمزية والمجتمع." : "Comprehensive analysis of previous studies on symbolism and society.",
    },
    {
      id: 2,
      icon: Eye,
      title: isArabic ? "تحليل الرموز" : "Symbol Analysis",
      desc: isArabic ? "فحص الدلالات العميقة للرموز الدينية المختارة." : "Examining the deep semantics of selected religious symbols.",
    },
    {
      id: 3,
      icon: Users,
      title: isArabic ? "دراسة اجتماعية" : "Social Study",
      desc: isArabic ? "مراقبة تأثير الرموز على تفاعلات المجتمع." : "Observing the impact of symbols on community interactions.",
    },
    {
      id: 4,
      icon: Scale,
      title: isArabic ? "إطار مقارن" : "Comparative Framework",
      desc: isArabic ? "مقارنة التأثيرات عبر سياقات ثقافية مختلفة." : "Comparing effects across different cultural contexts.",
    },
    {
      id: 5,
      icon: CheckCircle,
      title: isArabic ? "النتائج والاستنتاجات" : "Findings & Conclusions",
      desc: isArabic ? "صياغة المخرجات النهائية حول التماسك الاجتماعي." : "Formulating final outputs on social cohesion.",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
            {isArabic ? "منهجية البحث" : "Research Methodology"}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className={`absolute top-0 bottom-0 w-0.5 bg-gold/30 ${isArabic ? 'right-8 md:right-1/2' : 'left-8 md:left-1/2'}`}></div>

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute ${isArabic ? 'right-8 translate-x-1/2 md:right-1/2 md:translate-x-1/2' : 'left-8 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2'} w-4 h-4 rounded-full bg-gold shadow-[0_0_0_4px_rgba(212,175,55,0.2)] z-10`}></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 flex ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} ${isArabic ? 'pr-20 md:pr-0' : 'pl-20 md:pl-0'}`}>
                  <div className={`glass-card p-6 rounded-2xl border border-primary/10 w-full md:w-5/6 relative overflow-hidden group hover:border-gold transition-colors ${idx % 2 === 0 ? (isArabic ? 'md:mr-8' : 'md:ml-8') : (isArabic ? 'md:ml-8' : 'md:mr-8')}`}>
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <step.icon className="w-24 h-24 text-primary" />
                    </div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:text-gold group-hover:bg-gold/10 transition-colors">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">{step.title}</h3>
                      <p className="text-charcoal/70">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
