"use client";

import { useLanguage } from "@/context/LanguageContext";
import Hero from "@/components/research/Hero";
import AchievementBanner from "@/components/research/AchievementBanner";
import ResearchOverview from "@/components/research/ResearchOverview";
import Metrics from "@/components/research/Metrics";
import InteractiveMap from "@/components/research/InteractiveMap";
import Methodology from "@/components/research/Methodology";
import KeyFindings from "@/components/research/KeyFindings";
import Gallery from "@/components/research/Gallery";
import PublicationViewer from "@/components/research/PublicationViewer";
import RelatedResearch from "@/components/research/RelatedResearch";
import Timeline from "@/components/research/Timeline";
import ImpactMap from "@/components/research/ImpactMap";
import CallToAction from "@/components/research/CallToAction";

export default function ReligiousSymbolsSocialCohesion() {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <main className="min-h-screen bg-marble text-charcoal" dir={isArabic ? 'rtl' : 'ltr'}>
      <Hero isArabic={isArabic} />
      <AchievementBanner isArabic={isArabic} />
      <ResearchOverview isArabic={isArabic} />
      <Metrics isArabic={isArabic} />
      <InteractiveMap isArabic={isArabic} />
      <Methodology isArabic={isArabic} />
      <KeyFindings isArabic={isArabic} />
      <Gallery isArabic={isArabic} />
      <PublicationViewer isArabic={isArabic} />
      <RelatedResearch isArabic={isArabic} />
      <Timeline isArabic={isArabic} />
      <ImpactMap isArabic={isArabic} />
      <CallToAction isArabic={isArabic} />
    </main>
  );
}
