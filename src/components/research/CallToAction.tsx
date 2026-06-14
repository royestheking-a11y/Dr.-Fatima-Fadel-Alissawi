"use client";

import { motion } from "framer-motion";
import { Mail, GraduationCap, Users, Mic } from "lucide-react";
import Link from "next/link";

export default function CallToAction({ isArabic }: { isArabic: boolean }) {
  const options = [
    {
      icon: GraduationCap,
      title: isArabic ? "استشارة أكاديمية" : "Academic Consultation",
      desc: isArabic ? "إرشاد في المواضيع البحثية ومنهجيات تحليل الرموز." : "Guidance on research topics and symbol analysis methodologies."
    },
    {
      icon: Users,
      title: isArabic ? "شراكات بحثية" : "Research Partnerships",
      desc: isArabic ? "التعاون في مشاريع بحثية قادمة وأوراق عمل مشتركة." : "Collaborating on upcoming research projects and joint papers."
    },
    {
      icon: Mic,
      title: isArabic ? "محاضرات ومؤتمرات" : "Lectures & Conferences",
      desc: isArabic ? "دعوات للمتحدثين والندوات الأكاديمية وورش العمل." : "Speaker invitations, academic symposiums, and workshops."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl overflow-hidden relative shadow-2xl"
        >
          <div className="absolute inset-0 bg-gold-pattern opacity-10 mix-blend-overlay"></div>
          
          <div className="relative z-10 p-12 text-center text-white border-b border-white/10">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
              {isArabic ? "مهتم بالتعاون البحثي؟" : "Interested in Research Collaboration?"}
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto text-lg">
              {isArabic 
                ? "دعونا نستكشف معاً آفاقاً جديدة في فهم الرموز وأثرها في بناء مجتمعات مترابطة وواعية."
                : "Let's explore together new horizons in understanding symbols and their impact on building interconnected and conscious societies."}
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {options.map((option, idx) => (
              <div key={idx} className={`p-8 hover:bg-white/5 transition-colors text-center flex flex-col items-center ${isArabic && idx > 0 ? 'md:border-r border-white/10 md:border-l-0' : ''}`}>
                <option.icon className="w-10 h-10 text-gold mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 grow">{option.desc}</p>
              </div>
            ))}
          </div>

          <div className="relative z-10 bg-black/20 p-8 text-center flex flex-col sm:flex-row items-center justify-center gap-6">
            <span className="text-white/90 text-lg font-medium">
              {isArabic ? "تواصل مع د. فاطمة" : "Contact Dr. Fatima"}
            </span>
            <Link 
              href="/#contact" 
              className="bg-gold hover:bg-gold-light text-primary px-8 py-4 rounded-xl font-bold transition-colors flex items-center gap-3 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              {isArabic ? "إرسال رسالة" : "Send a Message"}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
