"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FileText, Download, Link as LinkIcon, BookOpen, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function ResearchLab() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });



  const { t } = useLanguage();

  const papers = [
    {
      titleKey: "researchLab.papers.1.title",
      journalKey: "researchLab.papers.1.journal",
      volumeKey: "researchLab.papers.1.volume",
      dateKey: "researchLab.papers.1.date",
      link: "https://www.rimakjournal.com/the-impact-of-religious-symbols-on-socialcohesion_1467",
      abstractKey: "researchLab.papers.1.abstract"
    },
    {
      titleKey: "researchLab.papers.2.title",
      journalKey: "researchLab.papers.2.journal",
      dateKey: "researchLab.papers.2.date",
      link: "#",
      abstractKey: "researchLab.papers.2.abstract"
    }
  ];

  return (
    <motion.section 
      ref={containerRef}
      className="py-32 relative overflow-hidden bg-soft"
    >
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              {t("researchLab.title1")} <span className="text-secondary-teal">{t("researchLab.title2")}</span>
            </h2>
            <p className="text-charcoal/70 text-lg max-w-2xl mx-auto font-light">
              {t("researchLab.desc")}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {papers.map((paper, i) => (
            <PaperCard key={i} paper={paper} index={i} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/research" className="inline-flex items-center gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-bold transition-all text-lg shadow-sm hover:shadow-md">
            {t("researchLab.viewAll") || "View Full Research Archive"}
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

function PaperCard({ paper, index }: { paper: any, index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative h-[400px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-700 ease-out"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front of Card */}
        <div className="absolute inset-0 backface-hidden bg-white border border-primary/20 rounded-2xl p-8 flex flex-col justify-between overflow-hidden group shadow-xl">
          <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 p-4 opacity-10 transform translate-x-1/4 rtl:-translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
            <BookOpen className="w-48 h-48 text-primary" />
          </div>
          
          <div className="relative z-10">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
              {t("researchLab.card.badge")}
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-charcoal leading-snug mb-4">
              {t(paper.titleKey)}
            </h3>
            <p className="text-charcoal/60 text-sm font-light">
              {t(paper.journalKey)}
            </p>
            {paper.volumeKey && (
              <p className="text-charcoal/50 text-xs mt-1">{t(paper.volumeKey)}</p>
            )}
          </div>
          
          <div className="relative z-10 flex items-center justify-between border-t border-primary/20 pt-4 mt-6">
            <span className="text-primary font-semibold text-sm">{t(paper.dateKey)}</span>
            <span className="text-charcoal/50 text-xs uppercase tracking-widest flex items-center gap-2">
              {t("researchLab.card.hover")} <FileText className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Back of Card */}
        <div className="absolute inset-0 backface-hidden bg-white border border-primary/20 rounded-2xl p-8 flex flex-col rotate-y-180 shadow-xl">
          <div className="flex-1">
            <h4 className="text-primary font-serif text-xl mb-4 flex items-center gap-2">
              <Quote className="w-5 h-5 rtl:-scale-x-100" /> {t("researchLab.card.abstract")}
            </h4>
            <p className="text-charcoal/80 leading-relaxed font-light text-sm md:text-base">
              {t(paper.abstractKey)}
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-6 pt-4 border-t border-primary/20">
            <a 
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-primary text-white text-center py-2 rounded font-semibold text-sm hover:bg-secondary-teal hover:text-white transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <LinkIcon className="w-4 h-4" /> {t("researchLab.card.read")}
            </a>
            <button className="flex-1 border border-primary text-primary text-center py-2 rounded font-semibold text-sm hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
              <Download className="w-4 h-4" /> {t("researchLab.card.download")}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
