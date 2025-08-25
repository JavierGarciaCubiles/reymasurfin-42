
import React, { useState, useMemo } from "react";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Play, Shield, Camera, Wrench } from "lucide-react";
import GuildCard from "./sections/GuildCard";
import ToolsSection from "./sections/ToolsSection";

interface ServiceItem {
  name: string;
  type: string;
  src?: string;
}

interface GuildCard {
  id: string;
  title: string;
  iconSrc: string;
  color: string;
  bgGradient: string;
  borderColor: string;
  services: ServiceItem[];
}

interface CardData {
  id: number;
  name: string;
  description: string;
  icon: any;
  image: string;
  additionalImages: string[];
  imageDescriptions: string[];
  category: string;
  status: string;
}

const GremiosSection = () => {
  const {
    elementRef,
    isVisible,
    animationClasses
  } = useScrollReveal(0.1, false, 'scale');
  
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const guildsData: GuildCard[] = useMemo(() => [{
    id: 'construction',
    title: 'Construcción y Obra',
    iconSrc: "/lovable-uploads/208c548d-9101-4d8a-970d-05ee891648b7.png",
    color: 'from-reymasur-green-500 to-reymasur-green-600',
    bgGradient: 'bg-white',
    borderColor: 'border-reymasur-green-300 hover:border-reymasur-green-400',
    services: [{
      name: "Fontanería",
      type: "image",
      src: "/lovable-uploads/852b8c2b-a1b8-4eb6-a8d2-61c2beb1e6a0.png"
    }, {
      name: "Albañilería",
      type: "image",
      src: "/lovable-uploads/1977f991-fa3b-4906-9651-960f4ef6a2b1.png"
    }, {
      name: "Pintura",
      type: "image",
      src: "/lovable-uploads/8b767372-f843-4041-91af-564922a0dc55.png"
    }, {
      name: "Parquet",
      type: "image",
      src: "/lovable-uploads/c850e569-a003-46aa-84c1-34adb6cdef72.png"
    }, {
      name: "Carpintería de madera",
      type: "image",
      src: "/lovable-uploads/516691bf-fb9a-4295-9313-ae03f56b1b01.png"
    }, {
      name: "Reformas integrales",
      type: "image",
      src: "/lovable-uploads/b3d33b0a-a5cd-40f5-96ee-ecfb095b0749.png"
    }]
  }, {
    id: 'technical',
    title: 'Instalaciones Técnicas',
    iconSrc: "/lovable-uploads/8ae91435-345d-42d9-a6cd-fe7ce957b4ec.png",
    color: 'from-reymasur-blue-500 to-reymasur-blue-600',
    bgGradient: 'bg-white',
    borderColor: 'border-reymasur-blue-300 hover:border-reymasur-blue-400',
    services: [{
      name: "Electricidad",
      type: "image",
      src: "/lovable-uploads/3ed76a15-a295-47b4-8a08-28941f8dcfe0.png"
    }, {
      name: "Carpintería metálica",
      type: "image",
      src: "/lovable-uploads/e773bbe2-dc7f-4e69-ae36-9e004d7680ea.png"
    }, {
      name: "Cerrajería",
      type: "image",
      src: "/lovable-uploads/db97f19a-5fc6-4c41-9689-cce3024df255.png"
    }, {
      name: "Videoporteros",
      type: "image",
      src: "/lovable-uploads/31b8611a-9349-4119-86ff-4a037e71f66c.png"
    }, {
      name: "Persianas",
      type: "image",
      src: "/lovable-uploads/1b390573-bbba-468d-ac7f-83e5935a1102.png"
    }, {
      name: "Instalaciones eléctricas industriales",
      type: "image",
      src: "/lovable-uploads/5f7df607-cc32-4aeb-aa01-9d77a431cdc7.png"
    }]
  }, {
    id: 'maintenance',
    title: 'Mantenimiento Especializado',
    iconSrc: "/lovable-uploads/dddd5499-632c-435e-b32d-4eddc8b0f7f7.png",
    color: 'from-reymasur-accent-500 to-reymasur-accent-600',
    bgGradient: 'bg-white',
    borderColor: 'border-reymasur-accent-300 hover:border-reymasur-accent-400',
    services: [{
      name: "Limpieza profesional",
      type: "image",
      src: "/lovable-uploads/3f526694-a4a5-47ae-900d-400734fa277b.png"
    }, {
      name: "Trabajos en altura",
      type: "image",
      src: "/lovable-uploads/3a4d55b5-4e74-431e-b05e-f431d9985106.png"
    }, {
      name: "Impermeabilización",
      type: "image",
      src: "/lovable-uploads/45645f2a-0e99-4be8-ac39-1efeac66a726.png"
    }, {
      name: "Instalación toldos",
      type: "image",
      src: "/lovable-uploads/8fc39640-a1bb-4b8e-9b2d-a8d64e9c0f5c.png"
    }, {
      name: "Sistemas antena",
      type: "image",
      src: "/lovable-uploads/0e67cc71-d96c-4c0d-b7d8-a53ed54b2978.png"
    }, {
      name: "Rotulación",
      type: "image",
      src: "/lovable-uploads/dad44b29-2b2f-4aec-891b-2cd643fff102.png"
    }, {
      name: "Pocería y saneamiento",
      type: "image",
      src: "/lovable-uploads/4bdf0e30-0cf4-4589-a8c2-26db4e210bc6.png"
    }, {
      name: "Rehabilitación fachadas",
      type: "image",
      src: "/lovable-uploads/83d351f7-8a06-4084-883d-f784b917168d.png"
    }]
  }], []);

  const allImageUrls = useMemo(() => {
    const urls: string[] = [];
    guildsData.forEach(guild => {
      if (guild.iconSrc) urls.push(guild.iconSrc);
      guild.services.forEach(service => {
        if (service.src) urls.push(service.src);
      });
    });
    return urls;
  }, [guildsData]);

  const {
    imagesLoaded,
    loadedImages,
    loadingProgress
  } = useImagePreloader(allImageUrls, {
    priority: 'high'
  });

  const herramientas: CardData[] = useMemo(() => [{
    id: 1,
    name: "Video Presentación Corporativa",
    description: "Vídeo de presentación de nuestras herramientas especializadas.",
    icon: Play,
    image: "https://raw.githubusercontent.com/JavierGarciaCubiles/reymasurfin-42/main/video%20presentacion.mp4",
    additionalImages: ["https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=300&h=300", "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=300&h=300"],
    imageDescriptions: ["Video presentación de Reymasur 13 mostrando nuestras capacidades y experiencia."],
    category: "Presentación",
    status: "Destacado"
  }, {
    id: 2,
    name: "Detectores Profesionales",
    description: "Equipos avanzados y precisos diseñados para la localización de fugas, gas y humedad.",
    icon: Shield,
    image: "/lovable-uploads/91cf0d54-a182-406b-9adb-a65818e4e7e7.png",
    additionalImages: ["/lovable-uploads/f7b58761-2d25-421a-a8c3-b632847cb778.png"],
    imageDescriptions: ["Detector de fuga ultrasonido con tecnología avanzada", "Detector de fuga gas traza con sistema de análisis molecular"],
    category: "Tecnología",
    status: "Disponible"
  }, {
    id: 3,
    name: "Inspección con Drones",
    description: "Tecnología de drones para inspecciones detalladas y seguras de tejados, fachadas y estructuras de difícil acceso.",
    icon: Camera,
    image: "/lovable-uploads/26ca3cf2-f333-47b2-96e2-818bdfbc43b4.png",
    additionalImages: [],
    imageDescriptions: [],
    category: "Tecnología",
    status: "Popular"
  }, {
    id: 4,
    name: "Sistemas de Cámaras",
    description: "Videocámaras profesionales para inspección y diagnóstico de canalizaciones, adaptadas a distintos alcances.",
    icon: Camera,
    image: "/lovable-uploads/582702c9-4a42-4bb3-ac8c-821e9891c81c.png",
    additionalImages: ["/lovable-uploads/b86dde82-0f68-449e-a3e3-10b6114c2aa8.png", "/lovable-uploads/729dd8e4-c3ba-4ba7-8022-88368e03a331.png", "/lovable-uploads/bc208725-0d92-419a-9880-f78c81b5d38e.png"],
    imageDescriptions: ["Endoscopio compacto y flexible diseñado específicamente para la introducción en tuberías", "Videocámara profesional de hasta 20 metros", "Videocámara avanzada WÖHLER de hasta 50 metros", "Cámara térmica especializada para localización precisa de fugas"],
    category: "Tecnología",
    status: "Nuevo"
  }, {
    id: 5,
    name: "Herramientas Especializadas",
    description: "Equipos y maquinaria avanzados para trabajos especializados, asegurando resultados de alta calidad.",
    icon: Wrench,
    image: "/lovable-uploads/bbc620b2-7414-4555-a0b6-e51150a32c8e.png",
    additionalImages: ["/lovable-uploads/678df23f-6550-4aef-af5e-c268f708877b.png"],
    imageDescriptions: ["Decapador profesional de alta potencia para soldaduras especiales", "Electrosoldador automático con sistema de control digital"],
    category: "Tecnología",
    status: "Premium"
  }], []);

  return (
    <section 
      ref={elementRef} 
      id="gremios" 
      className={`py-8 md:py-16 pb-2 md:pb-4 bg-transparent relative overflow-hidden ${
        isVisible ? animationClasses.visible : animationClasses.hidden
      }`}
    >
      <div className="container mx-auto px-2 md:px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4 font-montserrat animate-fade-in">
              Nuestros Gremios y Especialidades
            </h2>
            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-reymasur-green-500 to-reymasur-green-700 mx-auto rounded-full mb-3 md:mb-4"></div>
          </div>
          <p className="text-sm md:text-base text-gray-700 max-w-xl mx-auto leading-relaxed px-4 md:px-0">
            Ofrecemos un amplio rango de gremios especializados con herramientas avanzadas para garantizar la máxima calidad en cada proyecto.
          </p>
        </div>

        {/* Indicador de progreso de carga optimizado */}
        {!imagesLoaded && loadingProgress > 0 && (
          <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
            <div 
              className="h-full bg-gradient-to-r from-reymasur-green-500 to-reymasur-green-700 transition-all duration-300" 
              style={{ width: `${loadingProgress}%` }} 
            />
          </div>
        )}

        <div className="bg-gradient-to-br from-reymasur-green-50 to-reymasur-blue-50 rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-8 mb-8 md:mb-16">
          <div className="flex flex-col sm:flex-row lg:flex-row gap-2 lg:gap-1 h-auto sm:h-[200px] lg:h-[300px]">
            {guildsData.map((guild) => (
              <GuildCard
                key={guild.id}
                guild={guild}
                isHovered={hoveredCard === guild.id}
                onHover={() => setHoveredCard(guild.id)}
                onLeave={() => setHoveredCard(null)}
                loadedImages={loadedImages}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-reymasur-green-600 text-sm font-medium">
              Pasa el cursor sobre las tarjetas para ver los servicios disponibles
            </p>
          </div>
        </div>

        <ToolsSection herramientas={herramientas} />
      </div>
    </section>
  );
};

export default GremiosSection;
