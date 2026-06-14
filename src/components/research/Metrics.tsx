"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function Counter({ from, to, duration, isArabic }: { from: number, to: number, duration: number, isArabic: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  // Use Arabic numerals if needed, but standard numbers are often used globally in academia. 
  // We'll stick to standard digits to prevent hydration mismatch, but could localize.
  return <span ref={ref}>{count}</span>;
}

export default function Metrics({ isArabic }: { isArabic: boolean }) {
  const metrics = [
    { id: 1, value: 8, label: isArabic ? "أبحاث منشورة" : "Published Research" },
    { id: 2, value: 5, label: isArabic ? "شهادات مؤتمرات" : "Conference Recognition" },
    { id: 3, value: 12, label: isArabic ? "استشهادات دولية" : "International Citations" },
    { id: 4, value: 100, suffix: "%", label: isArabic ? "تأثير أكاديمي" : "Academic Impact" },
  ];

  return (
    <section className="py-20 relative bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-gold to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border border-gold/30 flex items-center justify-center mb-4 before:absolute before:inset-2 before:rounded-full before:border before:border-dashed before:border-gold/50 after:absolute after:inset-0 after:rounded-full after:bg-gold/5">
                <h3 className="text-4xl md:text-5xl font-bold text-primary font-serif z-10">
                  <Counter from={0} to={metric.value} duration={2000} isArabic={isArabic} />
                  {metric.suffix && <span className="text-3xl">{metric.suffix}</span>}
                  {metric.value > 10 && !metric.suffix && <span className="text-gold">+</span>}
                </h3>
              </div>
              <p className="text-charcoal/80 font-medium text-center uppercase tracking-wider text-sm max-w-[120px]">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
