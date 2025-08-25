
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
  const [isAudioReady, setIsAudioReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    audio.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3";
    audio.preload = "metadata";
    audio.loop = true;
    
    const handleCanPlayThrough = () => {
      setIsAudioReady(true);
      console.log("Audio listo para reproducir");
    };
    
    const handleLoadedData = () => {
      console.log("Audio cargado correctamente");
    };
    
    const handleError = (e: any) => {
      console.log("Error cargando audio:", e);
    };

    audio.addEventListener('canplaythrough', handleCanPlayThrough);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('error', handleError);
    
    audio.load();

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlayThrough);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  const toggleAudio = async () => {
    if (!audioRef.current || !isAudioReady) {
      console.log("Audio no está listo aún");
      return;
    }

    const audio = audioRef.current;
    
    try {
      if (!isAudioEnabled) {
        console.log("Intentando reproducir audio...");
        
        // Configuración inicial para iOS
        audio.currentTime = 0;
        audio.volume = 0.7; // Volumen directo para iOS
        
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          console.log("Audio iniciado exitosamente");
          setIsAudioEnabled(true);
        }
      } else {
        console.log("Deteniendo audio...");
        
        // Detener audio inmediatamente para iOS
        audio.pause();
        audio.currentTime = 0;
        setIsAudioEnabled(false);
        console.log("Audio detenido");
      }
    } catch (error) {
      console.log("Error al manejar audio:", error);
      
      // Fallback para iOS - intento directo
      if (!isAudioEnabled) {
        try {
          audio.volume = 0.5;
          await audio.play();
          setIsAudioEnabled(true);
          console.log("Audio iniciado en segundo intento");
        } catch (secondError) {
          console.log("Error en segundo intento:", secondError);
          alert("No se puede reproducir audio en este navegador.");
        }
      } else {
        // Forzar parada en caso de error
        audio.pause();
        audio.currentTime = 0;
        setIsAudioEnabled(false);
      }
    }
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
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

        {/* Credit text */}
        <div className="flex justify-center mb-4">
          <p className="text-sm text-gray-700 font-montserrat opacity-60">
            Website creado por Javier García Cubiles
          </p>
        </div>

        {/* Botón de audio optimizado para iOS */}
        <div className="flex justify-center mb-8 space-x-4">
          <Button
            onClick={toggleAudio}
            disabled={!isAudioReady}
            className={`px-6 py-3 rounded-lg transition-all duration-300 font-montserrat text-sm ${
              !isAudioReady 
                ? "bg-gray-400 text-gray-200 cursor-not-allowed" 
                : isAudioEnabled
                ? "bg-red-500 hover:bg-red-600 text-white shadow-lg transform active:scale-95"
                : "bg-reymasur-corporate-500 text-white hover:bg-reymasur-corporate-600 shadow-lg transform active:scale-95"
            }`}
          >
            {!isAudioReady 
              ? "Cargando Audio..." 
              : isAudioEnabled 
              ? "🔊 Parar Sonido" 
              : "🔇 Activar Sonido"
            }
          </Button>
        </div>

        {/* Indicador de scroll hacia abajo */}
        <div className="flex justify-center mb-6">
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
      <audio 
        ref={audioRef} 
        loop 
        style={{ display: "none" }}
        playsInline
        webkit-playsinline="true"
      />
    </section>
  );
};

export default HeroSection;
