"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function Expertise() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const { t } = useLanguage();

  const nodes = [
    { id: "center", labelKey: "expertise.nodes.center", x: 50, y: 50, main: true },
    { id: "1", labelKey: "expertise.nodes.1", x: 15, y: 35 },
    { id: "2", labelKey: "expertise.nodes.2", x: 85, y: 35 },
    { id: "3", labelKey: "expertise.nodes.3", x: 15, y: 70 },
    { id: "4", labelKey: "expertise.nodes.4", x: 85, y: 75 },
    { id: "5", labelKey: "expertise.nodes.5", x: 35, y: 12 },
    { id: "6", labelKey: "expertise.nodes.6", x: 65, y: 85 },
    { id: "7", labelKey: "expertise.nodes.7", x: 30, y: 85 },
    { id: "8", labelKey: "expertise.nodes.8", x: 65, y: 12 },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="expertise">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-4"
          >
            {t("expertise.title1")} <span className="text-secondary-teal">{t("expertise.title2")}</span>
          </motion.h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto">
            {t("expertise.desc")}
          </p>
        </div>

        <div className="relative w-full h-[450px] sm:h-[600px] md:aspect-video md:h-auto max-w-4xl mx-auto mt-10">
          {/* SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            {nodes.filter(n => !n.main).map((node) => {
              const center = nodes.find(n => n.main)!;
              const isHighlighted = hoveredNode === node.id || hoveredNode === center.id;
              
              return (
                <motion.line
                  key={`line-${node.id}`}
                  x1={`${center.x}%`}
                  y1={`${center.y}%`}
                  x2={`${node.x}%`}
                  y2={`${node.y}%`}
                  stroke={isHighlighted ? "#0D9488" : "rgba(13, 148, 136, 0.2)"}
                  strokeWidth={isHighlighted ? 2 : 1}
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: node.main ? 0 : 0.5 + Math.random() * 0.5, type: "spring" }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div 
                className={cn(
                  "relative group cursor-pointer flex items-center justify-center transition-all duration-300",
                  node.main ? "w-24 h-24 md:w-40 md:h-40" : "w-auto h-auto px-2 py-1 md:px-4 md:py-2"
                )}
              >
                {node.main ? (
                  <>
                    <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-50" />
                    <div className="absolute inset-2 bg-linear-to-br from-primary to-secondary-teal rounded-full shadow-[0_0_30px_rgba(13,148,136,0.4)] flex items-center justify-center">
                      <span className="text-white font-serif text-sm md:text-xl font-bold">{t(node.labelKey)}</span>
                    </div>
                  </>
                ) : (
                  <div className={cn(
                    "glass-card rounded-full px-3 py-1 md:px-6 md:py-3 whitespace-nowrap transition-all duration-300 transform group-hover:scale-110",
                    hoveredNode === node.id || hoveredNode === "center" ? "border-primary bg-primary/5 shadow-[0_0_15px_rgba(13,148,136,0.2)]" : "border-primary/20"
                  )}>
                    <span className="text-charcoal font-medium text-[10px] md:text-base">{t(node.labelKey)}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
