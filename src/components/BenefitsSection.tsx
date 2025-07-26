import { CheckCircle, Users, Award, Clock, Shield, Zap, Droplets, HardHat } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";
const benefits = [{
  iconImage: "/lovable-uploads/20f070b2-160e-4ec2-a517-ff74b9de5171.png",
  title: "Calidad Garantizada",
  description: "Utilizamos solo materiales de primera calidad y ofrecemos acabados impecables. Tu inversión está protegida con nuestra garantía total."
}, {
  iconImage: "/lovable-uploads/86b58732-767c-43ea-80f7-573a34407909.png",
  title: "Cumplimiento Puntual",
  description: "Entregamos todos los proyectos en tiempo y forma. Nuestros cronogramas son realistas y nos comprometemos a cumplirlos al 100%."
}, {
  iconImage: "/lovable-uploads/20b5734d-611d-4f6a-81b2-4de0782324a5.png",
  title: "Equipo Profesional",
  description: "Albañiles y constructores certificados con más de 10 años de experiencia. Formación continua y técnicas de vanguardia."
}, {
  iconImage: "/lovable-uploads/26857888-d20a-4fb4-85b1-31dc17cf7ea8.png",
  title: "Seguros y Garantías",
  description: "Cobertura completa con seguros de responsabilidad civil. Garantía extendida en todos nuestros trabajos y materiales utilizados."
}];
const BenefitsSection = () => {
  const {
    elementRef,
    isVisible,
    animationClasses
  } = useScrollReveal(0.1, false, 'slideLeft');
  useEffect(() => {
    // No se necesita lógica de audio aquí, se maneja en HeroSection
  }, [isVisible, elementRef]);
  return <section ref={elementRef} className={`bg-transparent py-16 relative overflow-hidden ${isVisible ? animationClasses.visible : animationClasses.hidden}`} id="nosotros">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-reymasur-green-800 mb-6 font-montserrat">
            ¿Por Qué Elegir Reymasur 13?
          </h2>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto font-montserrat">
            <strong>La filosofía de nuestra empresa </strong> se basa en conocer las necesidades del cliente con objeto de alcanzar su máxima satisfacción y siempre con los <strong> mejores precios </strong> del mercado.
          </p>
        </div>
        
        {/* Certificación oficial destacada */}
        <div className="bg-gradient-to-r from-reymasur-corporate-500 to-reymasur-corporate-600 rounded-2xl p-6 mb-12 text-white shadow-xl max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Contenido de certificación - izquierda */}
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Empresa Autorizada Oficial en:</h3>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <Droplets className="w-8 h-8 text-reymasur-green-200" />
                    <div>
                      <h4 className="text-base font-bold mb-1">Sistemas de Agua</h4>
                      <p className="text-white/80 text-xs">Certificados por Industria en instalaciones y reparaciones de sistemas hídricos</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <Zap className="w-8 h-8 text-reymasur-accent-200" />
                    <div>
                      <h4 className="text-base font-bold mb-1">Instalaciones Eléctricas</h4>
                      <p className="text-white/80 text-xs">Trabajos eléctricos con certificación oficial</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <HardHat className="w-8 h-8 text-orange-200" />
                    <div>
                      <h4 className="text-base font-bold mb-1">Amianto y Uralita</h4>
                      <p className="text-white/80 text-xs">Certificados por Industria en manipulación en techos y bajantes de uralita</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-lg text-white/95">
                  <span className="font-bold bg-white/20 px-2 py-1 rounded-full">Líderes en el sector</span> con certificaciones profesionales y experiencia comprobada
                </p>
              </div>
            </div>
            
            {/* Imagen del edificio - derecha */}
            <div className="flex justify-center lg:justify-end">
              <img src="/lovable-uploads/f3a9202d-7bf5-4e04-87d9-3da95bbccdf0.png" alt="Edificio Omega - Sede de Reymasur 13" className="w-full max-w-md h-auto rounded-2xl shadow-2xl border-4 border-white/20 animate-float" style={{
              animationDuration: '4s',
              animationTimingFunction: 'ease-in-out'
            }} />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => <div key={index} className="group text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-b from-white to-reymasur-green-50/30 border border-reymasur-green-100 hover:border-reymasur-green-300 transform hover:scale-105 hover:-translate-y-2">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <img src={benefit.iconImage} alt={benefit.title} className="h-16 w-16" />
              </div>
              <h3 className="text-xl font-bold text-reymasur-green-800 mb-4 font-montserrat">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-montserrat">
                {benefit.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default BenefitsSection;