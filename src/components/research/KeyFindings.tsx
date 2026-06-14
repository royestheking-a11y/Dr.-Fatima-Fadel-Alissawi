"use client";

import { motion } from "framer-motion";

export default function KeyFindings({ isArabic }: { isArabic: boolean }) {
  const findings = [
    {
      id: "01",
      title: isArabic ? "هوية مشتركة" : "Shared Identity",
      desc: isArabic 
        ? "تعمل الرموز الدينية كمحفزات قوية لإنشاء هوية جماعية مشتركة بين الأفراد ذوي الخلفيات المتنوعة."
        : "Religious symbols act as powerful catalysts for creating a shared collective identity among individuals with diverse backgrounds.",
    },
    {
      id: "02",
      title: isArabic ? "الانتماء المجتمعي" : "Community Belonging",
      desc: isArabic
        ? "تعزز هذه الرموز الشعور بالانتماء، مما يقلل من العزلة الاجتماعية ويزيد من المشاركة المدنية النشطة."
        : "These symbols strengthen the sense of belonging, reducing social isolation and increasing active civic participation.",
    },
    {
      id: "03",
      title: isArabic ? "التواصل الرمزي" : "Symbolic Communication",
      desc: isArabic
        ? "يؤثر التواصل الرمزي غير اللفظي بشكل إيجابي على الانسجام الاجتماعي من خلال نقل قيم التسامح والسلام."
        : "Non-verbal symbolic communication positively affects social harmony by conveying values of tolerance and peace.",
    }
  ];

  return (
    <section className="py-24 bg-soft/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
            {isArabic ? "النتائج الرئيسية" : "Key Findings"}
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            {isArabic 
              ? "أبرز الاكتشافات التي توصلت إليها الدراسة حول دور الرموز في بناء المجتمعات."
              : "The most prominent discoveries reached by the study regarding the role of symbols in building communities."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {findings.map((finding, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="glass-card p-8 rounded-3xl border-t-4 border-t-gold hover:-translate-y-2 transition-transform duration-300 shadow-lg"
            >
              <div className="text-5xl font-serif font-bold text-gold/20 mb-6">
                {finding.id}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{finding.title}</h3>
              <p className="text-charcoal/80 leading-relaxed">
                {finding.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
