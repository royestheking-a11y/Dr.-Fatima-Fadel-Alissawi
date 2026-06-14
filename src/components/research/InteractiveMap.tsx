"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function InteractiveMap({ isArabic }: { isArabic: boolean }) {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const nodes = [
    { id: 1, label: isArabic ? "المجتمع" : "Society", desc: isArabic ? "كيف تنظم الرموز الهياكل الاجتماعية." : "How symbols organize social structures.", angle: 0 },
    { id: 2, label: isArabic ? "الهوية" : "Identity", desc: isArabic ? "الرموز كمؤشرات للانتماء المشترك." : "Symbols as markers of shared belonging.", angle: 60 },
    { id: 3, label: isArabic ? "الثقافة" : "Culture", desc: isArabic ? "الحفاظ على التراث من خلال الأيقونات." : "Preservation of heritage through icons.", angle: 120 },
    { id: 4, label: isArabic ? "التواصل" : "Communication", desc: isArabic ? "الرموز كلغة غير لفظية عالمية." : "Symbols as universal non-verbal language.", angle: 180 },
    { id: 5, label: isArabic ? "التماسك الاجتماعي" : "Social Cohesion", desc: isArabic ? "توحيد المجموعات المتنوعة للانسجام." : "Unifying diverse groups for harmony.", angle: 240 },
    { id: 6, label: isArabic ? "الدين" : "Religion", desc: isArabic ? "الأنظمة العقائدية التي تشكل السلوك." : "Belief systems shaping behavior.", angle: 300 },
  ];

  return (
    <section className="py-24 bg-marble relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
            {isArabic ? "خريطة البحث التفاعلية" : "Interactive Research Map"}
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            {isArabic 
              ? "استكشف الترابط بين المواضيع الرئيسية التي تمت مناقشتها في البحث. مرر فوق العقد لمعرفة المزيد."
              : "Explore the interconnectedness of key topics discussed in the research. Hover over nodes to learn more."}
          </p>
        </div>

        <div className="relative w-full max-w-3xl mx-auto h-[500px] flex items-center justify-center">
          
          {/* Center Node */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="absolute z-20 w-40 h-40 bg-linear-to-br from-gold-dark to-gold-light rounded-full flex items-center justify-center text-center shadow-2xl p-4 border-4 border-white cursor-pointer"
            onHoverStart={() => setHoveredNode(0)}
            onHoverEnd={() => setHoveredNode(null)}
          >
            <span className="font-bold text-white text-lg drop-shadow-md">
              {isArabic ? "الرموز الدينية" : "Religious Symbols"}
            </span>
          </motion.div>

          {/* Surrounding Nodes */}
          {nodes.map((node, i) => {
            const radius = 180; // Distance from center
            const radian = (node.angle * Math.PI) / 180;
            const x = Math.cos(radian) * radius;
            const y = Math.sin(radian) * radius;

            return (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, x: 0, y: 0 }}
                whileInView={{ opacity: 1, x, y }}
                transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                className="absolute z-10 flex flex-col items-center"
                style={{ originX: 0.5, originY: 0.5 }}
              >
                {/* Connecting Line (simplified SVG line behind) */}
                <svg className="absolute w-[400px] h-[400px] -z-10 pointer-events-none" style={{ top: -200, left: -200 }}>
                  <line 
                    x1="200" y1="200" 
                    x2={200 - x} y2={200 - y} 
                    stroke="rgba(212, 175, 55, 0.3)" 
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>

                <div 
                  className={`w-28 h-28 rounded-full flex items-center justify-center text-center p-3 cursor-pointer transition-all duration-300 ${hoveredNode === node.id ? 'bg-primary text-white shadow-xl scale-110' : 'bg-white text-primary border border-gold/40 hover:border-gold shadow-md'}`}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <span className="font-semibold text-sm">{node.label}</span>
                </div>
                
                {/* Tooltip */}
                <div className={`absolute top-full mt-4 w-48 bg-white p-3 rounded-lg shadow-lg border border-gold/20 text-sm text-center transition-opacity duration-300 pointer-events-none z-30 ${hoveredNode === node.id ? 'opacity-100' : 'opacity-0'}`}>
                  {node.desc}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
