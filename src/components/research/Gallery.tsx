"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

export default function Gallery({ isArabic }: { isArabic: boolean }) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Using placeholder generic paths, assuming user will replace these or we can use colored blocks if missing
  const images = [
    { id: 1, src: "/images/conference-presentation.jpg", alt: "Conference Presentation", fallback: "bg-primary/20" },
    { id: 2, src: "/images/award-ceremony.jpg", alt: "Award Ceremony", fallback: "bg-gold/20" },
    { id: 3, src: "/images/certificate.jpg", alt: "Certificate of Recognition", fallback: "bg-primary/10" },
    { id: 4, src: "/images/publication-cover.jpg", alt: "Publication Cover", fallback: "bg-soft" },
  ];

  return (
    <section className="py-24 bg-marble">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary mb-4">
            {isArabic ? "معرض الصور" : "Research Gallery"}
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedImg(img.src)}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-md"
            >
              {/* Fallback colored background in case image doesn't exist yet */}
              <div className={`absolute inset-0 ${img.fallback} flex items-center justify-center`}>
                <span className="text-charcoal/30 text-sm font-medium">{img.alt}</span>
              </div>
              
              {/* In a real scenario, use next/image here. 
                  Since we don't have the files, we'll rely on the fallback for now, 
                  but set up the structure. */}
              {/* <Image src={img.src} alt={img.alt} fill className="object-cover" /> */}
              
              <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <ZoomIn className="w-10 h-10 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full aspect-video bg-charcoal rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Fallback display for lightbox */}
              <div className="absolute inset-0 flex items-center justify-center text-white/50 text-xl">
                {images.find(img => img.src === selectedImg)?.alt} Image Viewer
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
