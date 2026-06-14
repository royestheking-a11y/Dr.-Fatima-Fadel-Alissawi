"use client";

import { FileText, Download, Printer, Quote, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function PublicationViewer({ isArabic }: { isArabic: boolean }) {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
            {isArabic ? "النص الكامل للبحث" : "Full Publication"}
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-soft/30 rounded-2xl border border-primary/20 overflow-hidden shadow-xl"
        >
          {/* Toolbar */}
          <div className="bg-primary text-white p-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-gold" />
              <span className="font-medium">
                {isArabic ? "أثر الرموز الدينية على التماسك الاجتماعي.pdf" : "The_Impact_of_Religious_Symbols_on_Social_Cohesion.pdf"}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-2 text-sm">
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">{isArabic ? "طباعة" : "Print"}</span>
              </button>
              <button className="p-2 hover:bg-white/20 rounded-lg transition-colors flex items-center gap-2 text-sm">
                <Quote className="w-4 h-4" />
                <span className="hidden sm:inline">{isArabic ? "استشهاد" : "Cite"}</span>
              </button>
              <div className="w-px h-6 bg-white/30 mx-2"></div>
              <a 
                href="https://www.rimakjournal.com/the-impact-of-religious-symbols-on-social-cohesion_1467" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold hover:bg-gold-light text-primary px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm"
              >
                <Download className="w-4 h-4" />
                {isArabic ? "تحميل" : "Download"}
              </a>
            </div>
          </div>

          {/* Viewer Area (Mockup for now, could be an actual iframe if PDF link is direct) */}
          <div className="bg-white p-8 md:p-12 min-h-[600px] flex flex-col items-center justify-center text-center relative">
            <div className="absolute inset-0 bg-marble opacity-20 pointer-events-none"></div>
            <FileText className="w-20 h-20 text-primary/20 mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4 font-serif max-w-xl">
              {isArabic 
                ? "أثر الرموز الدينية على التماسك الاجتماعي" 
                : "The Impact of Religious Symbols on Social Cohesion"}
            </h3>
            <p className="text-charcoal/60 mb-8 max-w-md">
              {isArabic
                ? "النسخة الكاملة من البحث متاحة للقراءة والتحميل عبر مجلة رماك الدولية."
                : "The full version of the research is available for reading and download via RIMAK International Journal."}
            </p>
            <a 
              href="https://www.rimakjournal.com/the-impact-of-religious-symbols-on-social-cohesion_1467" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-gold transition-colors font-medium border-b-2 border-transparent hover:border-gold pb-1"
            >
              <span>{isArabic ? "اقرأ على موقع المجلة" : "Read on Journal Website"}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Footer of Viewer */}
          <div className="bg-soft p-4 border-t border-primary/10 flex justify-between text-sm text-primary/60">
            <span>{isArabic ? "مجلة رماك الدولية" : "RIMAK International Journal"}</span>
            <span>{isArabic ? "رقم التصنيف العلمي: 1467" : "DOI / Ref: 1467"}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
