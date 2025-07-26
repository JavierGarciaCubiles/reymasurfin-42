
import { ChevronDown } from "lucide-react";

const ScrollDownIndicator = () => {
  const scrollToNextSection = () => {
    const element = document.getElementById('nosotros');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={scrollToNextSection}
        className="group cursor-pointer focus:outline-none"
        aria-label="Desplazarse hacia abajo"
      >
        {/* Ratón animado */}
        <div className="relative">
          {/* Cuerpo del ratón */}
          <div className="w-6 h-10 border-2 border-palette-green rounded-full flex items-start justify-center pt-2 bg-white/80 backdrop-blur-sm group-hover:bg-palette-green/10 transition-all duration-300">
            {/* Ruedecita del ratón que se mueve */}
            <div className="w-1 h-2 bg-palette-green rounded-full" style={{
              animation: 'bounce 3s ease-in-out infinite'
            }}></div>
          </div>
          
          {/* Efecto de brillo sutil */}
          <div className="absolute inset-0 rounded-full bg-palette-green/20 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
        </div>
      </button>
    </div>
  );
};

export default ScrollDownIndicator;
