
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TrustSection from "@/components/TrustSection";
import GremiosSection from "@/components/GremiosSection";
import TeamSection from "@/components/TeamSection";
import WorkWithUsSection from "@/components/WorkWithUsSection";
import Footer from "@/components/Footer";
import FloatingAssistantButton from "@/components/FloatingAssistantButton";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const openAssistant = () => setIsAssistantOpen(true);
  const closeAssistant = () => setIsAssistantOpen(false);

  return (
    <div className="min-h-screen font-montserrat relative overflow-x-hidden" style={{
      background: 'linear-gradient(145deg, hsl(var(--palette-cyan) / 0.1) 0%, hsl(var(--background)) 25%, hsl(var(--palette-green) / 0.05) 50%, hsl(var(--background)) 75%, hsl(var(--palette-blue) / 0.08) 100%)'
    }}>
      {/* Fondo global animado - Optimizado para móvil */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Elementos de fondo optimizados para móvil */}
        <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full opacity-8 sm:opacity-10 md:opacity-15 blur-xl sm:blur-2xl md:blur-3xl animate-float" style={{backgroundColor: 'hsl(var(--palette-green) / 0.2)'}}></div>
        <div className="absolute top-1/4 right-0 w-28 h-28 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full opacity-6 sm:opacity-8 md:opacity-10 blur-lg sm:blur-xl md:blur-2xl animate-pulse" style={{backgroundColor: 'hsl(var(--palette-blue) / 0.3)'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full opacity-6 sm:opacity-8 md:opacity-12 blur-md sm:blur-lg md:blur-xl" style={{backgroundColor: 'hsl(var(--palette-yellow) / 0.2)'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-26 h-26 sm:w-36 sm:h-36 md:w-54 md:h-54 lg:w-72 lg:h-72 rounded-full opacity-5 sm:opacity-6 md:opacity-8 blur-lg sm:blur-xl md:blur-2xl animate-float" style={{backgroundColor: 'hsl(var(--palette-cyan) / 0.3)'}}></div>
        <div className="absolute bottom-0 left-0 w-30 h-30 sm:w-44 sm:h-44 md:w-66 md:h-66 lg:w-88 lg:h-88 rounded-full opacity-6 sm:opacity-8 md:opacity-10 blur-xl sm:blur-2xl md:blur-3xl animate-pulse" style={{backgroundColor: 'hsl(var(--palette-red) / 0.15)'}}></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10">
        <Header onOpenAssistant={openAssistant} />
        <HeroSection onOpenAssistant={openAssistant} />
        <BenefitsSection />
        <TrustSection />
        <GremiosSection />
        <TeamSection />
        <WorkWithUsSection />
        <Footer />
      </div>
      
      <FloatingAssistantButton 
        isOpen={isAssistantOpen}
        onOpen={openAssistant}
        onClose={closeAssistant}
      />
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
