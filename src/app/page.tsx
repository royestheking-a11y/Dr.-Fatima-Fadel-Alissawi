import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Academy from "@/components/Academy";
import ResearchLab from "@/components/ResearchLab";
import ResearchNetwork from "@/components/ResearchNetwork";
import Awards from "@/components/Awards";
import SymbolExplorer from "@/components/SymbolExplorer";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-soft text-charcoal overflow-x-hidden">
      <Hero />
      <About />
      <Expertise />
      <Academy />
      <ResearchLab />
      <ResearchNetwork />
      <Awards />
      <SymbolExplorer />
      <Certificates />
      <Experience />
      <Contact />
      
      <Footer />
    </main>
  );
}
