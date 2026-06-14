"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
      className="fixed top-6 right-6 md:top-8 md:right-8 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-primary/20 shadow-lg hover:border-primary/50 transition-all group"
    >
      <Globe className="w-4 h-4 text-primary group-hover:rotate-180 transition-transform duration-700" />
      <span className="text-sm font-semibold text-charcoal">
        {language === "en" ? "عربي" : "EN"}
      </span>
    </button>
  );
}
