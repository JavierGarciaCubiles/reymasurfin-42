import { Button } from "@/components/ui/button";
import { Building2, Home, Hammer } from "lucide-react";
import ScrollDownIndicator from "./ScrollDownIndicator";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { useState, useEffect, useRef } from "react";

interface HeroSectionProps {
  onOpenAssistant: () => void;
}

const HeroSection = ({ onOpenAssistant }: HeroSectionProps) => {
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    const handleScroll = () => {
      if (isAudioEnabled && !audioRef.current.paused) {
        audioRef.current.volume = 1; // Mantiene el volumen mientras está habilitado
      }
    };

    if (isAudioEnabled) {
      audioRef.current.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3";
      audioRef.current.loop = true;
      let volume = audioRef.current.volume;
      if (volume === 0) {
        audioRef.current.play().catch(error => console.log("Error al reproducir:", error));
        const fadeIn = setInterval(() => {
          if (volume < 1) {
            volume += 0.2;
            audioRef.current.volume = Math.min(volume, 1);
          } else {
            clearInterval(fadeIn);
          }
        }, 50);
      }
    } else {
      let volume = audioRef.current.volume;
      if (volume > 0) {
        const fadeOut = setInterval(() => {
          if (volume > 0) {
            volume -= 0.2;
            audioRef.current.volume = Math.max(volume, 0);
          } else {
            clearInterval(fadeOut);
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }
        }, 50);
        if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAudioEnabled]);

  const toggleAudio = () => {
    setIsAudioEnabled(!isAudioEnabled);
  };

  return (
    <section id="hero" className="relative">
      <HeroGeometric
        badge="Reymasur 13"
        title1="Bienvenidos a Reymasur 13:"
        title2="Líderes en Servicios Integrales por Tres Décadas"
        subtitle={
          <>
            Reymasur 13, nace en 2013 y opera desde 2014 tras integrar RDA Reyma'CJ S.L.,
            <span className="font-semibold text-palette-blue"> sumando más de 33 años de experiencia en el sector.</span>
            {" "}Estamos especializados en la gestión de siniestros para compañías aseguradoras y en reformas integrales. Ofreciendo un servicio continuo, disponible las{" "}
            <span className="font-semibold text-palette-green">24 horas del día, los 365 días del año.</span>
          </>
        }
      >
        {/* Slogan destacado */}
        <div className="mb-4 flex justify-center">
          <h3 className="text-xl md:text-2xl font-semibold text-center font-montserrat bg-gradient-to-r from-[#0a4a62] to-[#0a4a62]/80 bg-clip-text text-transparent relative overflow-hidden animate-shine">
            "33 años edificando confianza"
          </h3>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-palette-blue to-palette-green text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-montserrat"
            onClick={onOpenAssistant}
          >
            SOLICITAR AYUDA
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-palette-green text-palette-green hover:bg-palette-green hover:text-white font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 font-montserrat"
            onClick={() => window.location.href = 'tel:954932515'}
          >
            LLAMAR AHORA
          </Button>
        </div>

        {/* Botones para activar/desactivar audio */}
        <div className="flex justify-center mb-8 space-x-4">
          <Button
            onClick={toggleAudio}
            className="bg-reymasur-corporate-500 text-white hover:bg-reymasur-corporate-600 px-6 py-3 rounded-lg transition-colors duration-300 font-montserrat"
          >
            {isAudioEnabled ? "Desactivar Sonido" : "Activar Sonido"}
          </Button>
        </div>

        {/* Indicador de scroll hacia abajo */}
        <div className="flex justify-center mb-12">
          <div className="text-white/60">
            <ScrollDownIndicator />
          </div>
        </div>
        
        {/* Visual Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-l-4 border-palette-blue">
            <Building2 className="h-12 w-12 text-palette-blue mx-auto mb-4" />
            <h3 className="font-semibold text-palette-blue mb-2 font-montserrat">Gestión de Siniestros</h3>
            <p className="text-sm text-gray-600 font-montserrat">Expertos en atención a Compañías de Seguros.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-l-4 border-palette-green">
            <Home className="h-12 w-12 text-palette-green mx-auto mb-4" />
            <h3 className="font-semibold text-palette-green mb-2 font-montserrat">Reformas Integrales</h3>
            <p className="text-sm text-gray-600 font-montserrat">Soluciones a medida para hogares y negocios.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border-l-4 border-palette-yellow">
            <Hammer className="h-12 w-12 text-palette-yellow mx-auto mb-4" />
            <h3 className="font-semibold text-palette-yellow mb-2 font-montserrat">Profesionales Verificados</h3>
            <p className="text-sm text-gray-600 font-montserrat">Solo trabajamos con expertos</p>
          </div>
        </div>
      </HeroGeometric>
      <audio ref={audioRef} loop style={{ display: "none" }} />
    </section>
  );
};

export default HeroSection;