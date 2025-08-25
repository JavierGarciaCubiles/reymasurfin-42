
import { MapPin, Users, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import GoogleMap from "./GoogleMap";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const teamMembers = [
  {
    name: "Carlos Rodríguez",
    position: "Director Técnico", 
    experience: "15 años de experiencia",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Antonio Martín",
    position: "Jefe de Obra",
    experience: "18 años de experiencia",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Isabel Jiménez",
    position: "Coordinadora",
    experience: "8 años de experiencia",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
  }
];

const officeImages = [
  {
    title: "Edificio Omega - Vista Principal",
    description: "Nuestras modernas instalaciones corporativas en el Edificio Omega",
    imageUrl: "/lovable-uploads/78f0c724-5561-4f2d-95e7-e2d989ddd82e.png"
  },
  {
    title: "Edificio Omega - Vista Lateral",
    description: "Arquitectura moderna que refleja nuestra innovación y profesionalismo",
    imageUrl: "/lovable-uploads/e964e4c5-792b-4a55-8910-ef0232c6adf0.png"
  },
  {
    title: "Área de Diseño",
    description: "Espacio equipado con tecnología de última generación",
    imageUrl: "/lovable-uploads/80a55735-bd96-4bf3-986d-6aa42e749f60.png"
  },
  {
    title: "Sala de Reuniones",
    description: "Donde planificamos y coordinamos cada proyecto",
    imageUrl: "/lovable-uploads/9a5927c8-e166-4013-ba13-a17c6eccb72c.png"
  }
];

const TeamSection = () => {
  const { elementRef, isVisible, animationClasses } = useScrollReveal(0.1, false, 'slideDown');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % officeImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + officeImages.length) % officeImages.length);
  };

  return (
    <section 
      ref={elementRef}
      className={`bg-transparent py-16 relative overflow-hidden ${
        isVisible ? animationClasses.visible : animationClasses.hidden
      }`} 
      id="equipo"
    >
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat"
              style={{ color: 'hsl(var(--palette-green))' }}>
            Nuestro Equipo
          </h2>
          <p className="text-xl max-w-4xl mx-auto font-montserrat"
             style={{ color: 'hsl(var(--foreground) / 0.8)' }}>
            Conoce a los profesionales que hacen posible cada proyecto. 
            <strong> Experiencia, dedicación y pasión</strong> en cada trabajo que realizamos.
          </p>
        </div>

        {/* Team Members */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="p-3 rounded-full"
                 style={{ backgroundColor: 'hsl(var(--palette-green) / 0.1)' }}>
              <Users className="w-8 h-8" style={{ color: 'hsl(var(--palette-green))' }} />
            </div>
            <h3 className="text-3xl font-bold font-montserrat"
                style={{ color: 'hsl(var(--palette-green))' }}>
              Nuestros Profesionales
            </h3>
          </div>
          
          <AnimatedTestimonials 
            testimonials={teamMembers.map(member => ({
              quote: member.experience,
              name: member.name,
              designation: member.position,
              src: member.imageUrl
            }))}
            autoplay={true}
            className="py-0"
          />
        </div>

        {/* Office Images and Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Office Images Carousel */}
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-full"
                   style={{ backgroundColor: 'hsl(var(--palette-blue) / 0.1)' }}>
                <Building2 className="w-8 h-8" style={{ color: 'hsl(var(--palette-blue))' }} />
              </div>
              <h3 className="text-2xl font-bold font-montserrat"
                  style={{ color: 'hsl(var(--palette-blue))' }}>
                Nuestras Instalaciones
              </h3>
            </div>
            
            <div className="flex-1 rounded-2xl overflow-hidden shadow-xl h-96"
                 style={{ 
                   background: 'linear-gradient(145deg, hsl(var(--background)) 0%, hsl(var(--palette-blue) / 0.05) 100%)',
                   border: '1px solid hsl(var(--palette-blue) / 0.1)'
                 }}>
              <div className="relative h-full">
                <div className="relative h-80 overflow-hidden">
                  {officeImages.map((image, index) => (
                    <img 
                      key={image.imageUrl}
                      src={image.imageUrl} 
                      alt={image.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                        index === currentImageIndex 
                          ? 'opacity-100 transform scale-100' 
                          : 'opacity-0 transform scale-105'
                      }`}
                    />
                  ))}
                  
                  {/* Navigation buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
                    style={{ backgroundColor: 'hsl(var(--palette-blue))' }}
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10"
                    style={{ backgroundColor: 'hsl(var(--palette-blue))' }}
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                  
                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {officeImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'w-6' : 'w-2'
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
                
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-3 h-28">
                  <h4 className="text-lg font-bold mb-1 font-montserrat transition-all duration-300"
                      style={{ color: 'hsl(var(--palette-blue))' }}>
                    {officeImages[currentImageIndex].title}
                  </h4>
                  <p className="text-sm transition-all duration-300" style={{ color: 'hsl(var(--foreground) / 0.8)' }}>
                    {officeImages[currentImageIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 rounded-full"
                   style={{ backgroundColor: 'hsl(var(--palette-green) / 0.1)' }}>
                <MapPin className="w-8 h-8" style={{ color: 'hsl(var(--palette-green))' }} />
              </div>
              <h3 className="text-2xl font-bold font-montserrat"
                  style={{ color: 'hsl(var(--palette-green))' }}>
                Nuestra Ubicación
              </h3>
            </div>
            
            <div className="flex-1 rounded-2xl overflow-hidden shadow-xl h-96"
                 style={{ 
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
    </section>
  );
};

export default TeamSection;
