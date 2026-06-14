"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 bg-white border-t border-primary/10 text-center text-charcoal/50 text-sm">
      <p>&copy; {new Date().getFullYear()} {t("footer.text")}</p>
    </footer>
  );
}
