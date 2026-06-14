"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

export default function ResearchNetwork() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const { t } = useLanguage();

  const networkData = [
    { id: "fatima", labelKey: "researchNetwork.nodes.center", type: "center", x: 50, y: 50 },
    { id: "islamic", labelKey: "researchNetwork.nodes.1", type: "node", x: 25, y: 20 },
    { id: "leadership", labelKey: "researchNetwork.nodes.2", type: "node", x: 75, y: 20 },
    { id: "sociology", labelKey: "researchNetwork.nodes.3", type: "node", x: 85, y: 50 },
    { id: "education", labelKey: "researchNetwork.nodes.4", type: "node", x: 75, y: 80 },
    { id: "semiotics", labelKey: "researchNetwork.nodes.5", type: "node", x: 25, y: 80 },
    { id: "arabic", labelKey: "researchNetwork.nodes.6", type: "node", x: 15, y: 50 },
  ];

  const centerNode = networkData.find(n => n.type === "center")!;
  const outerNodes = networkData.filter(n => n.type !== "center");

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-charcoal mb-6"
          >
            {t("researchNetwork.title1")} <span className="text-secondary-teal">{t("researchNetwork.title2")}</span>
          </motion.h2>
          <p className="text-charcoal/70 text-lg max-w-2xl mx-auto font-light mb-8">
            {t("researchNetwork.desc")}
          </p>
        </div>

        <div className="relative w-full h-[450px] sm:h-[600px] md:aspect-video md:h-auto max-w-5xl mx-auto border border-primary/10 rounded-3xl bg-soft/50 overflow-hidden shadow-inner">
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            {outerNodes.map((node) => {
              const isConnected = activeNode === node.id || activeNode === centerNode.id;
              
              return (
                <motion.line
                  key={`connection-${node.id}`}
                  x1={`${centerNode.x}%`}
                  y1={`${centerNode.y}%`}
                  x2={`${node.x}%`}
                  y2={`${node.y}%`}
                  stroke={isConnected ? "#0D9488" : "rgba(13, 148, 136, 0.15)"}
                  strokeWidth={isConnected ? 3 : 1}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              );
            })}
            {/* Outer connections between nodes to form a web */}
            {outerNodes.map((node, i) => {
              const nextNode = outerNodes[(i + 1) % outerNodes.length];
              const isConnected = activeNode === node.id || activeNode === nextNode.id;
              return (
                <motion.line
                  key={`web-${node.id}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${nextNode.x}%`}
                  y2={`${nextNode.y}%`}
                  stroke={isConnected ? "#0D9488" : "rgba(13, 148, 136, 0.05)"}
                  strokeWidth={isConnected ? 2 : 1}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  strokeDasharray={isConnected ? "0" : "5,5"}
                />
              );
            })}
          </svg>

          {/* Interactive Nodes */}
          {networkData.map((node) => (
            <motion.div
              key={node.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: node.type === "center" ? 0 : 0.3 + Math.random() * 0.5, type: "spring" }}
            >
              <button
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                className={cn(
                  "relative flex items-center justify-center rounded-full transition-all duration-300",
                  node.type === "center" 
                    ? "w-20 h-20 md:w-32 md:h-32 bg-linear-to-br from-primary to-secondary-teal shadow-[0_0_40px_rgba(13,148,136,0.4)] z-20 hover:scale-110" 
                    : "w-16 h-16 md:w-28 md:h-28 bg-white border border-primary/20 shadow-lg z-10 hover:border-primary hover:shadow-[0_0_20px_rgba(13,148,136,0.2)] hover:scale-110",
                  activeNode === node.id && node.type !== "center" && "border-primary bg-primary/5"
                )}
              >
                {node.type === "center" && (
                  <div className="absolute inset-0 border border-white/50 rounded-full animate-ping opacity-50" />
                )}
                <span className={cn(
                  "font-semibold text-center leading-tight px-1 md:px-2",
                  node.type === "center" ? "text-white text-xs md:text-lg font-serif" : "text-charcoal text-[10px] md:text-sm"
                )}>
                  {t(node.labelKey)}
                </span>
              </button>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
