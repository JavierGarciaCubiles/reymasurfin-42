
import { MapPin, Users, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useMemo } from "react";
import GoogleMap from "./GoogleMap";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { OptimizedImage } from "./OptimizedImage";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { Skeleton } from "@/components/ui/skeleton";

const teamMembers = [{
  name: "Carlos Rodríguez",
  position: "Director Técnico",
  experience: "15 años de experiencia",
  imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
}, {
  name: "Antonio Martín",
  position: "Jefe de Obra",
  experience: "18 años de experiencia",
  imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
}, {
  name: "Isabel Jiménez",
  position: "Coordinadora",
  experience: "8 años de experiencia",
  imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
}];

const officeImages = [{
  title: "Edificio Omega - Vista Principal",
  description: "Nuestras modernas instalaciones corporativas en el Edificio Omega",
  imageUrl: "/lovable-uploads/78f0c724-5561-4f2d-95e7-e2d989ddd82e.png"
}, {
  title: "Placa Corporativa",
  description: "Identificación oficial de Reymasur 13 en nuestras oficinas",
  imageUrl: "/lovable-uploads/42a58fbb-0e02-4f60-a536-3c2b22cc4df0.png"
}, {
  title: "Área de Trabajo",
  description: "Espacios modernos y funcionales para nuestro equipo",
  imageUrl: "/lovable-uploads/380769e7-0782-49fc-8444-1a1f9a823b75.png"
}, {
  title: "Área de Archivo y Documentación",
  description: "Organización y gestión profesional de proyectos",
  imageUrl: "/lovable-uploads/14de5dce-3575-40b2-b2be-f4f0dbe22804.png"
}, {
  title: "Oficina Principal",
  description: "Espacio de trabajo con tecnología moderna y diseño funcional",
  imageUrl: "/lovable-uploads/54c407a2-aa42-4397-aaf8-1cc1a270ee6a.png"
}, {
  title: "Área de Desarrollo",
  description: "Zona de trabajo colaborativo con equipos especializados",
  imageUrl: "/lovable-uploads/42741c7e-c311-4531-a087-0f9f4c96cdf0.png"
}, {
  title: "Centro de Impresión y Documentación",
  description: "Área equipada para gestión documental y proyectos técnicos",
  imageUrl: "/lovable-uploads/6a659218-43f6-4445-8129-ec6b3651a980.png"
}, {
  title: "Área de Descanso y Comida",
  description: "Espacio acogedor para el descanso del equipo con vistas panorámicas",
  imageUrl: "/lovable-uploads/c28e2849-f149-4b7b-a343-eddbc9beffb7.png"
}, {
  title: "Área Central de Oficinas",
  description: "Zona central con acceso a todas las áreas de trabajo",
  imageUrl: "/lovable-uploads/09b78f64-07b2-4f32-a42d-13a5620c42dc.png"
}, {
  title: "Puertas de Acceso",
  description: "Entrada y salida principal de nuestras oficinas",
  imageUrl: "/lovable-uploads/ade2002b-9983-4f12-b080-87afb0884c94.png"
}];

const TeamSection = () => {
  const {
    elementRef,
    isVisible,
    animationClasses
  } = useScrollReveal(0.1, false, 'slideDown');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Precargar imágenes de manera inteligente
  const allImageUrls = useMemo(() => {
    return officeImages.map(img => img.imageUrl);
  }, []);

  const { imagesLoaded, loadedImages, loadingProgress } = useImagePreloader(allImageUrls, {
    priority: 'high',
    lazy: false
  });

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % officeImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + officeImages.length) % officeImages.length);
  };

  const currentImage = officeImages[currentImageIndex];

  return <section ref={elementRef} className={`bg-transparent py-16 relative overflow-hidden ${isVisible ? animationClasses.visible : animationClasses.hidden}`} id="equipo">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat" style={{
            color: 'hsl(var(--palette-blue))'
          }}>
            Nuestras Instalaciones y Ubicación
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-montserrat">
            Visítanos en el <strong>Edificio Omega</strong> en Málaga. Descubre nuestras oficinas modernas 
            y cómo llegar fácilmente a nuestras instalaciones.
          </p>
        </div>

        {/* Indicador de carga optimizado */}
        {!imagesLoaded && (
          <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
            <div 
              className="h-full bg-gradient-to-r transition-all duration-300" 
              style={{ 
                width: `${loadingProgress}%`,
                background: 'linear-gradient(90deg, hsl(var(--palette-blue)), hsl(var(--palette-green)))'
              }} 
            />
          </div>
        )}

        {/* Office Images and Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Office Images Carousel */}
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-full" style={{
              backgroundColor: 'hsl(var(--palette-blue) / 0.1)'
            }}>
                <Building2 className="w-8 h-8" style={{
                color: 'hsl(var(--palette-blue))'
              }} />
              </div>
              <h3 className="text-2xl font-bold font-montserrat" style={{
              color: 'hsl(var(--palette-blue))'
            }}>
                Nuestras Instalaciones
              </h3>
            </div>
            
            <div className="flex-1 rounded-2xl overflow-hidden shadow-xl h-96" style={{
            background: 'linear-gradient(145deg, hsl(var(--background)) 0%, hsl(var(--palette-blue) / 0.05) 100%)',
            border: '1px solid hsl(var(--palette-blue) / 0.1)'
          }}>
              <div className="relative h-full">
                <div className="relative h-80">
                  {loadedImages.has(currentImage.imageUrl) ? (
                    <OptimizedImage
                      src={currentImage.imageUrl}
                      alt={currentImage.title}
                      className="w-full h-full object-cover"
                      priority="high"
                      lazy={false}
                    />
                  ) : (
                    <Skeleton className="w-full h-full" />
                  )}
                  
                  {/* Navigation buttons */}
                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110" style={{
                  backgroundColor: 'hsl(var(--palette-blue))'
                }}>
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  
                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110" style={{
                  backgroundColor: 'hsl(var(--palette-blue))'
                }}>
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                  
                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {officeImages.map((_, index) => (
                      <button 
                        key={index} 
                        onClick={() => setCurrentImageIndex(index)} 
                        className={`rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'w-6 h-2' : 'w-2 h-2'
                        }`} 
                        style={{
                          backgroundColor: index === currentImageIndex 
                            ? 'hsl(var(--palette-blue))' 
                            : 'hsl(var(--palette-blue) / 0.3)'
                        }} 
                      />
                    ))}
                  </div>
                </div>
                
                <div className="p-3 h-12">
                  <h4 className="text-lg font-bold mb-1 font-montserrat truncate" style={{
                  color: 'hsl(var(--palette-blue))'
                }}>
                    {currentImage.title}
                  </h4>
                  <p className="text-xs truncate" style={{
                  color: 'hsl(var(--foreground) / 0.8)'
                }}>
                    {currentImage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-full" style={{
              backgroundColor: 'hsl(var(--palette-green) / 0.1)'
            }}>
                <MapPin className="w-8 h-8" style={{
                color: 'hsl(var(--palette-green))'
              }} />
              </div>
              <h3 className="text-2xl font-bold font-montserrat" style={{
              color: 'hsl(var(--palette-green))'
            }}>
                Nuestra Ubicación
              </h3>
            </div>
            
            <div className="flex-1 rounded-2xl overflow-hidden shadow-xl h-96" style={{
            background: 'linear-gradient(145deg, hsl(var(--background)) 0%, hsl(var(--palette-green) / 0.05) 100%)',
            border: '1px solid hsl(var(--palette-green) / 0.1)'
          }}>
              <div className="h-full w-full">
                <GoogleMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default TeamSection;
