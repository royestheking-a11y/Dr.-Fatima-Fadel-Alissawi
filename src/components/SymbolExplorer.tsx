"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function SymbolExplorer() {
  const [activeSymbol, setActiveSymbol] = useState(0);
  const { t } = useLanguage();

  const symbols = [
    {
      symbol: "ن",
      nameKey: "symbolExplorer.symbols.1.name",
      originKey: "symbolExplorer.symbols.1.cat",
      meaningKey: "symbolExplorer.symbols.1.meaning",
      researchKey: "symbolExplorer.analysis"
    },
    {
      symbol: "الله",
      nameKey: "symbolExplorer.symbols.2.name",
      originKey: "symbolExplorer.symbols.2.cat",
      meaningKey: "symbolExplorer.symbols.2.meaning",
      researchKey: "symbolExplorer.analysis"
    },
    {
      symbol: "۩",
      nameKey: "symbolExplorer.symbols.3.name",
      originKey: "symbolExplorer.symbols.3.cat",
      meaningKey: "symbolExplorer.symbols.3.meaning",
      researchKey: "symbolExplorer.analysis"
    },
    {
      symbol: "۝",
      nameKey: "symbolExplorer.symbols.4.name",
      originKey: "symbolExplorer.symbols.4.cat",
      meaningKey: "symbolExplorer.symbols.4.meaning",
      researchKey: "symbolExplorer.analysis"
    },
    {
      symbol: "ق",
      nameKey: "symbolExplorer.symbols.5.name",
      originKey: "symbolExplorer.symbols.5.cat",
      meaningKey: "symbolExplorer.symbols.5.meaning",
      researchKey: "symbolExplorer.analysis"
    },
    {
      symbol: "م",
      nameKey: "symbolExplorer.symbols.6.name",
      originKey: "symbolExplorer.symbols.6.cat",
      meaningKey: "symbolExplorer.symbols.6.meaning",
      researchKey: "symbolExplorer.analysis"
    }
  ];

  return (
    <section className="py-32 bg-soft relative overflow-hidden" id="symbols">
      {/* Decorative Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-white/50 backdrop-blur-sm mb-6">
              <Search className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold tracking-widest uppercase text-charcoal/70">{t("symbolExplorer.symbol")}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              {t("symbolExplorer.title1")} <span className="text-secondary-teal">{t("symbolExplorer.title2")}</span>
            </h2>
            <p className="text-charcoal/60 text-lg max-w-2xl mx-auto font-light">
              {t("symbolExplorer.desc")}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Gallery Grid */}
          <div className="col-span-1 lg:col-span-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {symbols.map((symbol, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSymbol(i)}
                  className={cn(
                    "aspect-square rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center p-4 group",
                    activeSymbol === i
                      ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(13,148,136,0.2)]"
                      : "border-charcoal/10 bg-charcoal/5 hover:border-primary/50 hover:bg-charcoal/10"
                  )}
                >
                  <span className={cn(
                    "text-6xl md:text-7xl font-serif mb-4 transition-colors",
                    activeSymbol === i ? "text-primary" : "text-charcoal group-hover:text-primary/70"
                  )}>
                    {symbol.symbol}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-charcoal/50">{t(symbol.nameKey)}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Details Panel */}
          <motion.div
            key={activeSymbol}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card bg-charcoal/5 border border-primary/30 p-8 rounded-2xl flex flex-col"
          >
            <div className="flex items-center gap-3 text-primary mb-6">
              <Search className="w-5 h-5" />
              <span className="text-sm uppercase tracking-widest font-semibold text-charcoal/60">{t("symbolExplorer.analysis")}</span>
            </div>

            <div className="text-8xl font-serif text-primary text-center mb-8 drop-shadow-[0_0_15px_rgba(13,148,136,0.4)]">
              {symbols[activeSymbol].symbol}
            </div>

            <div className="mb-4">
              <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-widest rounded-full">
                {t(symbols[activeSymbol].originKey)}
              </span>
            </div>

            <h3 className="text-3xl font-serif text-charcoal mb-4">{t(symbols[activeSymbol].nameKey)}</h3>

            <p className="text-charcoal/70 font-light leading-relaxed flex-1">
              {t(symbols[activeSymbol].meaningKey)}
            </p>

            <div className="mt-8 pt-6 border-t border-charcoal/10">
              <button className="w-full py-3 bg-primary/10 border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors">
                {t("symbolExplorer.viewRefs")}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
