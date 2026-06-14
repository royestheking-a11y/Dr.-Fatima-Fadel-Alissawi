"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen, GraduationCap, Users, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const iconMap = {
  "research-based-education": BookOpen,
  "arabic-english-learning": Globe,
  "expert-led-lectures": Users,
  "neutral-academic-approach": GraduationCap
};

export default function AcademyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { t, language } = useLanguage();
  
  if (!iconMap[slug as keyof typeof iconMap]) {
    return notFound();
  }

  const Icon = iconMap[slug as keyof typeof iconMap];

  return (
    <main className="min-h-screen bg-soft pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          href="/#academy" 
          className="inline-flex items-center gap-2 text-charcoal/50 hover:text-primary transition-colors font-semibold tracking-widest uppercase text-xs mb-12"
        >
          {language === "ar" ? (
            <>العودة إلى الأكاديمية <ArrowLeft className="w-4 h-4 rotate-180" /></>
          ) : (
            <><ArrowLeft className="w-4 h-4" /> Back to Academy</>
          )}
        </Link>

        {/* Header */}
        <div className="mb-16">
          <div className="w-20 h-20 rounded-full bg-white border border-primary/20 flex items-center justify-center mb-8 shadow-sm">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-charcoal mb-6 leading-tight">
            {t(`academyDetails.${slug}.title`)}
          </h1>
          <p className="text-xl text-charcoal/60 font-light border-l-2 rtl:border-l-0 rtl:border-r-2 border-primary/30 pl-6 rtl:pl-0 rtl:pr-6 max-w-2xl">
            {t(`academyDetails.${slug}.subtitle`)}
          </p>
        </div>

        {/* Content */}
        <div className="glass-card bg-white/50 border border-primary/10 rounded-3xl p-8 md:p-16 space-y-8 shadow-sm">
          {Array.from({ length: 3 }).map((_, i) => (
            <p key={i} className="text-lg text-charcoal/80 leading-relaxed font-light">
              {t(`academyDetails.${slug}.content.${i}`)}
            </p>
          ))}
        </div>

      </div>
    </main>
  );
}
