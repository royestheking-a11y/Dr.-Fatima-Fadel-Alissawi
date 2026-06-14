"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { translations, TranslationKey } from "@/i18n/translations";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Apply dir/lang to the HTML element synchronously (before paint)
function applyLanguageToDOM(lang: Language) {
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with "ar" so server and initial client render match exactly
  const [language, setLanguage] = useState<Language>("ar");
  const [mounted, setMounted] = useState(false);

  // After hydration: read saved preference and apply — runs only on client
  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language | null;
    const resolved: Language =
      savedLang === "en" || savedLang === "ar"
        ? savedLang
        : navigator.language.startsWith("en")
        ? "en"
        : "ar";

    // Batch: update state + DOM in the same tick so there's one re-render
    setLanguage(resolved);
    applyLanguageToDOM(resolved);
    setMounted(true);
  }, []);

  // When language changes AFTER mount, sync DOM + localStorage instantly
  useLayoutEffect(() => {
    if (!mounted) return;
    applyLanguageToDOM(language);
    localStorage.setItem("language", language);
  }, [language, mounted]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      const keys = key.split(".");
      let value: any = translations[language];

      for (const k of keys) {
        if (value == null || value[k] === undefined) {
          return key;
        }
        value = value[k];
      }

      return typeof value === "string" ? value : key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

