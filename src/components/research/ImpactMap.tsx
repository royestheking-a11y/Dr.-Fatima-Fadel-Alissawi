"use client";

import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";

export default function ImpactMap({ isArabic }: { isArabic: boolean }) {
  const regions = [
    { name: isArabic ? "سوريا" : "Syria", type: "Origin & Focus", x: "55%", y: "45%" },
    { name: isArabic ? "الإمارات" : "UAE", type: "Conferences & Awards", x: "62%", y: "52%" },
    { name: isArabic ? "لبنان" : "Lebanon", type: "Academic Network", x: "53%", y: "46%" },
    { name: isArabic ? "السعودية" : "Saudi Arabia", type: "Collaborations", x: "58%", y: "50%" },
    { name: isArabic ? "المؤتمرات الدولية" : "International Conferences", type: "Global Reach", x: "40%", y: "35%" },
  ];

  return (
    <section className="py-24 bg-soft relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <Globe className="w-12 h-12 text-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
            {isArabic ? "التأثير الأكاديمي العالمي" : "Global Academic Impact"}
          </h2>
          <p className="text-charcoal/70 max-w-2xl mx-auto">
            {isArabic 
              ? "وصول البحث وتأثيره عبر مناطق ومؤسسات أكاديمية مختلفة."
              : "The reach and influence of the research across different regions and academic institutions."}
          </p>
        </div>

        <div className="relative w-full min-h-[300px] aspect-square md:aspect-2/1 max-h-[600px] bg-primary/5 rounded-3xl overflow-hidden border border-primary/10 flex items-center justify-center">
          
          {/* Abstract World Map SVG */}
          <svg className="absolute inset-0 w-full h-full text-primary/10" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice">
            <path fill="currentColor" d="M150,150 Q200,100 250,150 T350,150 T450,200 T550,150 T650,250 T750,200 T850,300 L850,500 L150,500 Z" opacity="0.5" />
            <path fill="currentColor" d="M100,200 Q200,300 300,200 T500,250 T700,150 T900,350 L900,500 L100,500 Z" opacity="0.3" />
            <path fill="currentColor" d="M500,100 Q550,50 600,100 T700,150 T800,100 T950,200 L950,500 L500,500 Z" opacity="0.2" />
          </svg>

          {/* Region Pins */}
          {regions.map((region, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, type: "spring", stiffness: 200 }}
              className="absolute group z-10"
              style={{ left: region.x, top: region.y }}
            >
              <div className="relative -left-1/2 -top-1/2 flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gold text-primary group-hover:scale-110 transition-transform cursor-pointer relative z-10">
                  <MapPin className="w-6 h-6" />
                </div>
                
                {/* Ping effect */}
                <div className="absolute inset-0 bg-gold rounded-full animate-ping opacity-20 pointer-events-none"></div>
                
                {/* Tooltip */}
                <div className="absolute top-full mt-3 bg-charcoal text-white px-2 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-xl">
                  <div className="font-bold text-gold">{region.name}</div>
                  <div className="text-white/70 text-xs mt-1">{region.type}</div>
                  {/* Triangle pointer */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-solid border-b-charcoal border-b-4 border-x-transparent border-x-4 border-t-0"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
