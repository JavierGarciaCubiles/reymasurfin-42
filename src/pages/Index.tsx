
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
      {/* Fondo global animado conectado - Optimizado para móvil */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 rounded-full opacity-10 sm:opacity-15 blur-2xl sm:blur-3xl animate-float" style={{backgroundColor: 'hsl(var(--palette-green) / 0.2)'}}></div>
        <div className="absolute top-1/4 right-0 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 rounded-full opacity-8 sm:opacity-10 blur-xl sm:blur-2xl animate-pulse" style={{backgroundColor: 'hsl(var(--palette-blue) / 0.3)'}}></div>
        <div className="absolute top-1/2 left-1/4 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 rounded-full opacity-8 sm:opacity-12 blur-lg sm:blur-xl" style={{backgroundColor: 'hsl(var(--palette-yellow) / 0.2)'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-36 sm:w-54 md:w-72 h-36 sm:h-54 md:h-72 rounded-full opacity-6 sm:opacity-8 blur-xl sm:blur-2xl animate-float" style={{backgroundColor: 'hsl(var(--palette-cyan) / 0.3)'}}></div>
        <div className="absolute bottom-0 left-0 w-44 sm:w-66 md:w-88 h-44 sm:h-66 md:h-88 rounded-full opacity-8 sm:opacity-10 blur-2xl sm:blur-3xl animate-pulse" style={{backgroundColor: 'hsl(var(--palette-red) / 0.15)'}}></div>
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
