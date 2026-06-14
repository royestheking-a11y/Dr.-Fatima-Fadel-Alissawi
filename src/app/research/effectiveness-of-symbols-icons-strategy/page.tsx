"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function EffectivenessStrategyPage() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <main className="min-h-screen bg-marble text-charcoal py-32" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        {/* Back Button */}
        <div className="flex justify-start mb-16">
          <Link 
            href="/research" 
            className="inline-flex items-center gap-2 text-charcoal/50 hover:text-primary transition-colors font-semibold tracking-widest uppercase text-xs"
          >
            {isArabic ? (
              <>العودة إلى الأرشيف <ArrowLeft className="w-4 h-4 rotate-180" /></>
            ) : (
              <><ArrowLeft className="w-4 h-4" /> Back to Archive</>
            )}
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-12 shadow-xl border border-primary/10"
        >
          <BookOpen className="w-16 h-16 text-gold mx-auto mb-6" />
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-primary mb-6 leading-tight">
            {isArabic 
              ? "فاعلية استراتيجية الرموز والأيقونات المعتمدة على السلم الموسيقي في تدريس اللغة العربية" 
              : "Effectiveness of Symbols and Icons Strategy Based on Musical Scale in Teaching Arabic"}
          </h1>
          
          <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
          
          <p className="text-xl text-charcoal/70 mb-12">
            {isArabic
              ? "تفاصيل هذه الدراسة الأكاديمية قيد الإعداد وسيتم نشرها قريباً."
              : "The details of this academic study are currently being prepared and will be published soon."}
          </p>
          
          <Link href="/research">
            <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
              {isArabic ? "تصفح أبحاث أخرى" : "Browse Other Research"}
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
