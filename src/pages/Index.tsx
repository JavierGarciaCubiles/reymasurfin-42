
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
      background: 'linear-gradient(145deg, hsl(var(--palette-cyan) / 0.08) 0%, hsl(var(--background)) 30%, hsl(var(--palette-green) / 0.04) 60%, hsl(var(--background)) 85%, hsl(var(--palette-blue) / 0.06) 100%)'
    }}>
      {/* Fondo optimizado para mejor rendimiento */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Solo elementos esenciales de fondo, optimizados para móvil */}
        <div className="absolute top-0 left-0 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full opacity-6 sm:opacity-8 lg:opacity-12 blur-2xl lg:blur-3xl" style={{backgroundColor: 'hsl(var(--palette-green) / 0.15)'}}></div>
        <div className="absolute bottom-0 right-0 w-36 h-36 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full opacity-5 sm:opacity-7 lg:opacity-10 blur-2xl lg:blur-3xl" style={{backgroundColor: 'hsl(var(--palette-blue) / 0.2)'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full opacity-4 sm:opacity-6 lg:opacity-8 blur-xl lg:blur-2xl" style={{backgroundColor: 'hsl(var(--palette-yellow) / 0.1)'}}></div>
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
