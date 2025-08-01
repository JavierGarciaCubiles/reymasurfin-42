import React, { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Wrench, Hammer, Paintbrush, Zap, Drill, Shield, Camera, Settings, Phone, Mail, ChevronDown, Droplets, Cog, DoorOpen, TreePine, Monitor, ShieldCheck, Sparkles, SunSnow, Radio, Type, Brush, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useImagePreloader } from "@/hooks/useImagePreloader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { OptimizedImage } from './OptimizedImage';
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
  const guildsData: GuildCard[] = [{
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
  }];
  const allImageUrls = useMemo(() => {
    const urls: string[] = [];
    guildsData.forEach(guild => {
      if (guild.iconSrc) urls.push(guild.iconSrc);
      guild.services.forEach(service => {
        if (service.src) urls.push(service.src);
      });
    });
    return urls;
  }, []);
  const {
    imagesLoaded,
    loadedImages,
    loadingProgress
  } = useImagePreloader(allImageUrls, {
    priority: 'high'
  });
  const herramientas: CardData[] = [{
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
    imageDescriptions: ["Detector de fuga ultrasonido con tecnología avanzada para localización precisa de filtraciones mediante ondas ultrasónicas, permitiendo identificar fugas inaudibles al oído humano con máxima precisión y eficiencia.", "Detector de fuga gas traza con sistema de análisis molecular que utiliza gases trazadores para identificar las fugas más pequeñas en sistemas presurizados, garantizando una detección absoluta incluso en condiciones complejas."],
    category: "Tecnología",
    status: "Disponible"
  }, {
    id: 3,
    name: "Inspección con Drones",
    description: "Tecnología de drones para inspecciones detalladas y seguras de tejados, fachadas y estructuras de difícil acceso.",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&h=300",
    additionalImages: ["https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=300&h=300", "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=300&h=300"],
    imageDescriptions: ["Inspección aérea de tejados con drones equipados con cámaras de alta definición.", "Análisis de fachadas en alta resolución para detectar daños o imperfecciones."],
    category: "Tecnología",
    status: "Popular"
  }, {
    id: 4,
    name: "Sistemas de Cámaras",
    description: "Videocámaras profesionales para inspección y diagnóstico de canalizaciones, adaptadas a distintos alcances.",
    icon: Camera,
    image: "/lovable-uploads/582702c9-4a42-4bb3-ac8c-821e9891c81c.png",
    additionalImages: ["/lovable-uploads/b86dde82-0f68-449e-a3e3-10b6114c2aa8.png", "/lovable-uploads/729dd8e4-c3ba-4ba7-8022-88368e03a331.png", "/lovable-uploads/bc208725-0d92-419a-9880-f78c81b5d38e.png"],
    imageDescriptions: ["Endoscopio compacto y flexible diseñado específicamente para la introducción en tuberías de poco diámetro, permitiendo inspecciones precisas en espacios reducidos y conduits estrechos con máxima maniobrabilidad y claridad visual.", "Videocámara profesional de hasta 20 metros con pantalla integrada y sistema de iluminación LED, ideal para inspecciones detalladas de tuberías y canalizaciones de mediano alcance.", "Videocámara avanzada WÖHLER de hasta 50 metros con tecnología de grabación digital y pantalla táctil de alta resolución, perfecta para inspecciones de largo alcance en sistemas complejos de canalización.", "Cámara térmica especializada para localización precisa de fugas con tecnología infrarroja avanzada, permitiendo detectar variaciones de temperatura invisibles al ojo humano para identificar filtraciones ocultas en paredes, techos y estructuras."],
    category: "Tecnología",
    status: "Nuevo"
  }, {
    id: 5,
    name: "Herramientas Especializadas",
    description: "Equipos y maquinaria avanzados para trabajos especializados, asegurando resultados de alta calidad.",
    icon: Wrench,
    image: "/lovable-uploads/bbc620b2-7414-4555-a0b6-e51150a32c8e.png",
    additionalImages: ["/lovable-uploads/678df23f-6550-4aef-af5e-c268f708877b.png"],
    imageDescriptions: ["Decapador profesional de alta potencia para soldaduras especiales, equipado con múltiples boquillas intercambiables y control de temperatura preciso, ideal para trabajos de soldadura de tuberías de diferentes materiales y diámetros.", "Electrosoldador automático con sistema de control digital y múltiples accesorios, diseñado para soldaduras de tuberías de polietileno con máxima precisión y garantía de estanqueidad en instalaciones críticas."],
    category: "Tecnología",
    status: "Premium"
  }];
  const [expandedCard, setExpandedCard] = useState<number>(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleCardClick = (cardId: number) => {
    setExpandedCard(cardId);
  };
  const handleNextImage = () => {
    const currentCard = herramientas.find(card => card.id === expandedCard);
    if (currentCard) {
      const allImages = [currentCard.image, ...currentCard.additionalImages];
      setCurrentImageIndex(prev => (prev + 1) % allImages.length);
    }
  };
  const handlePrevImage = () => {
    const currentCard = herramientas.find(card => card.id === expandedCard);
    if (currentCard) {
      const allImages = [currentCard.image, ...currentCard.additionalImages];
      setCurrentImageIndex(prev => (prev - 1 + allImages.length) % allImages.length);
    }
  };
  const ToolCard = ({
    card,
    isExpanded,
    onClick
  }: {
    card: CardData;
    isExpanded: boolean;
    onClick: () => void;
  }) => {
    if (!card) return null;
    const allImages = [card.image, ...card.additionalImages];
    const allDescriptions = card.id === 4 ? ["Endoscopio para introducción en tuberías de poco diámetro", "Videocámara de hasta 20 metros", "Videocámara de hasta 50 metros", "Cámara térmica para localizaciones de fuga"] : card.id === 2 ? ["Detector de fuga ultrasonido", "Detector de fuga gas traza"] : card.id === 5 ? ["Decapador para soldaduras especiales", "Electrosoldador"] : [card.description, ...card.imageDescriptions];
    return <motion.div layout className={cn("relative bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer", isExpanded ? "flex-grow min-w-[90vw] sm:min-w-[700px] h-[350px] sm:h-[450px] md:h-[600px]" : "flex-shrink-0 w-[70vw] sm:w-80 h-64 sm:h-96")} onClick={onClick} whileHover={{
      scale: isExpanded ? 1 : 1.02
    }} transition={{
      type: "spring",
      stiffness: 300,
      damping: 30
    }}>
        <div className="relative h-full w-full bg-white">
          <div className={cn("h-full flex p-3 sm:p-6", isExpanded && window.innerWidth < 640 ? "flex-col" : "")}>
            <div className={cn("flex flex-col justify-center text-black", isExpanded ? "w-full sm:w-1/2 pr-0 sm:pr-6 mb-4 sm:mb-0" : "w-full")}>
              <AnimatePresence>
                {isExpanded && <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: 20
              }} className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">
                      {card.category}
                    </span>
                    <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full font-medium">
                      {card.status}
                    </span>
                  </motion.div>}
              </AnimatePresence>

              <motion.h3 layout className={cn("font-bold mb-3", isExpanded ? "text-lg sm:text-xl" : "text-sm sm:text-base text-center")}>
                {card.name}
              </motion.h3>

              <AnimatePresence>
                {isExpanded && <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: 20
              }} className="mb-3 sm:mb-6 text-xs sm:text-sm leading-relaxed sm:leading-loose">
                    {card.id === 1 ? <>
                        <h4 className="font-semibold text-sm sm:text-base mb-2">
                          {currentImageIndex === 0 ? "Video Presentación Corporativa" : ""}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {card.imageDescriptions[currentImageIndex]}
                        </p>
                      </> : card.id === 2 ? <>
                        <h4 className="font-semibold text-sm sm:text-base mb-2">
                          {allDescriptions[currentImageIndex]}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {currentImageIndex === 0 ? "Equipado con tecnología de vanguardia para localización de fugas mediante ondas ultrasónicas. Este detector profesional permite identificar filtraciones inaudibles al oído humano, ofreciendo una precisión excepcional en el diagnóstico de sistemas de tuberías y estructuras." : "Tecnología de análisis molecular avanzada que utiliza gases trazadores para la detección de fugas microscópicas. Ideal para sistemas presurizados donde se requiere una detección absoluta, garantizando la identificación de las fugas más pequeñas incluso en condiciones complejas."}
                        </p>
                      </> : card.id === 4 ? <>
                        <h4 className="font-semibold text-sm sm:text-base mb-2">
                          {allDescriptions[currentImageIndex]}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {currentImageIndex === 0 ? "Herramienta de inspección ultracompacta con cable flexible de alta resistencia, específicamente diseñada para el acceso y exploración de tuberías de diámetro reducido. Su tamaño compacto y maniobrabilidad excepcional lo convierten en la solución ideal para diagnósticos precisos en espacios muy limitados." : currentImageIndex === 1 ? "Equipada con tecnología de vanguardia para inspecciones detalladas, esta videocámara ofrece una visión clara y precisa en entornos de hasta 20 metros. Perfecta para diagnósticos de tuberías residenciales y comerciales con sistema de iluminación LED integrado." : currentImageIndex === 2 ? "Experimenta la máxima eficiencia en tus proyectos con esta videocámara de largo alcance, diseñada para cubrir distancias de hasta 50 metros con una calidad de imagen excepcional. Ideal para sistemas industriales complejos con grabación digital y análisis avanzado." : "Tecnología infrarroja de última generación que permite detectar variaciones de temperatura invisibles al ojo humano. Perfecta para localizar fugas ocultas en paredes, techos y estructuras sin necesidad de demoliciones, ahorrando tiempo y costos en reparaciones."}
                        </p>
                      </> : card.id === 5 ? <>
                        <h4 className="font-semibold text-sm sm:text-base mb-2">
                          {allDescriptions[currentImageIndex]}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {currentImageIndex === 0 ? "Equipo térmico profesional de alta potencia con control preciso de temperatura y múltiples accesorios especializados. Diseñado específicamente para trabajos de soldadura en tuberías y materiales termoplásticos, garantizando uniones perfectas y duraderas en instalaciones críticas." : "Sistema de soldadura por electrofusión con tecnología digital avanzada y control automático de parámetros. Incluye múltiples accesorios y adaptadores para diferentes diámetros de tubería, asegurando soldaduras de máxima calidad y estanqueidad absoluta en redes de distribución."}
                        </p>
                      </> : <p className="text-gray-600 text-xs sm:text-sm">
                        {card.imageDescriptions[currentImageIndex]}
                      </p>}
                  </motion.div>}
              </AnimatePresence>
            </div>

            <AnimatePresence>
              {isExpanded && <motion.div initial={{
              opacity: 0,
              width: 0
            }} animate={{
              opacity: 1,
              width: window.innerWidth < 640 ? "100%" : "50%"
            }} exit={{
              opacity: 0,
              width: 0
            }} className="flex items-center justify-center relative h-40 sm:h-full mt-2 sm:mt-0">
                  {card.id === 1 ? <video src="https://raw.githubusercontent.com/JavierGarciaCubiles/reymasurfin-42/main/video%20presentacion.mp4" controls autoPlay loop className="w-full h-full rounded-xl object-cover" preload="metadata">
                      Tu navegador no soporta el elemento de video.
                    </video> : <div className="rounded-xl overflow-hidden relative w-full h-full max-h-[160px] sm:max-h-[450px] shadow-lg">
                      <OptimizedImage src={allImages[currentImageIndex]} alt={card.name} className="w-full h-full object-cover transition-all duration-300 hover:scale-105 cursor-pointer rounded-xl" priority={isExpanded ? 'high' : 'normal'} lazy={!isExpanded} />
                    </div>}
                  
                  {allImages.length > 1 && card.id !== 1 && <>
                      <button onClick={e => {
                  e.stopPropagation();
                  handlePrevImage();
                }} className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-black rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center z-10 transition-all duration-300 shadow-md hover:shadow-xl font-bold text-sm sm:text-lg">
                        ‹
                      </button>
                      <button onClick={e => {
                  e.stopPropagation();
                  handleNextImage();
                }} className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-black rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center z-10 transition-all duration-300 shadow-md hover:shadow-xl font-bold text-sm sm:text-lg">
                        ›
                      </button>
                    </>}
                </motion.div>}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>;
  };
  return <section ref={elementRef} id="gremios" className={`py-8 md:py-16 bg-transparent relative overflow-hidden ${isVisible ? animationClasses.visible : animationClasses.hidden}`}>
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-16 left-8 w-24 h-24 rounded-full animate-pulse" style={{
        backgroundColor: 'hsl(var(--reymasur-green-500) / 0.2)',
        animationDelay: '0s'
      }}></div>
        <div className="absolute bottom-16 right-8 w-20 h-20 rounded-full animate-bounce" style={{
        backgroundColor: 'hsl(var(--reymasur-blue-500) / 0.3)',
        animationDelay: '0.3s'
      }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full animate-pulse" style={{
        backgroundColor: 'hsl(var(--reymasur-accent-500) / 0.2)',
        animationDelay: '0.1s'
      }}></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full animate-float" style={{
        backgroundColor: 'hsl(var(--reymasur-green-300) / 0.3)',
        animationDelay: '0.5s'
      }}></div>
        <div className="absolute top-2/3 left-1/2 w-28 h-28 rounded-full animate-pulse" style={{
        backgroundColor: 'hsl(var(--reymasur-blue-300) / 0.15)',
        animationDelay: '0.7s'
      }}></div>
        <div className="absolute bottom-1/3 left-16 w-20 h-20 rounded-full animate-bounce" style={{
        backgroundColor: 'hsl(var(--reymasur-green-400) / 0.25)',
        animationDelay: '0.4s'
      }}></div>
        <div className="absolute top-1/4 right-16 w-14 h-14 rounded-full animate-float" style={{
        backgroundColor: 'hsl(var(--reymasur-accent-400) / 0.3)',
        animationDelay: '0.2s'
      }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full animate-pulse" style={{
        backgroundColor: 'hsl(var(--reymasur-blue-400) / 0.2)',
        animationDelay: '0.6s'
      }}></div>
        <div className="absolute top-3/4 left-1/3 w-10 h-10 rounded-full animate-bounce" style={{
        backgroundColor: 'hsl(var(--reymasur-green-600) / 0.4)',
        animationDelay: '0.1s'
      }}></div>
      </div>
      
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

        {/* Indicador de progreso de carga */}
        {!imagesLoaded && loadingProgress > 0 && <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
            <div className="h-full bg-gradient-to-r from-reymasur-green-500 to-reymasur-green-700 transition-all duration-300" style={{
          width: `${loadingProgress}%`
        }} />
          </div>}

        <div className="bg-gradient-to-br from-reymasur-green-50 to-reymasur-blue-50 rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-8 mb-8 md:mb-16">
          <div className="flex flex-col sm:flex-row lg:flex-row gap-2 lg:gap-1 h-auto sm:h-[200px] lg:h-[300px]">
            {guildsData.map((guild, index) => <Card key={guild.id} className={`
                  relative overflow-hidden cursor-pointer transition-all duration-500 ease-out
                  ${hoveredCard === guild.id ? 'lg:flex-[4] lg:scale-100' : 'lg:flex-[1]'}
                  ${hoveredCard && hoveredCard !== guild.id ? 'lg:flex-[0.5] lg:opacity-60' : ''}
                  hover:shadow-xl group h-full
                  ${guild.bgGradient} ${guild.borderColor} border-2
                `} onMouseEnter={() => setHoveredCard(guild.id)} onMouseLeave={() => setHoveredCard(null)}>
                <CardContent className="p-3 sm:p-4 lg:p-6 h-full flex flex-col">
                  <div className="flex-1 flex flex-col justify-center items-center text-center transition-all duration-500 ease-out">
                    <div className={`
                      inline-flex items-center justify-center rounded-full 
                      bg-gradient-to-r ${guild.color} text-white mb-2
                      transform transition-all duration-300 group-hover:scale-110
                      ${hoveredCard === guild.id ? 'w-10 h-10 lg:w-12 lg:h-12' : 'w-14 h-14 lg:w-16 lg:h-16'}
                    `}>
                      {loadedImages.has(guild.iconSrc) ? <OptimizedImage src={guild.iconSrc} alt={guild.title} className="h-6 w-6 lg:h-8 lg:w-8 object-contain" priority="high" lazy={false} /> : <Skeleton className="h-6 w-6 lg:h-8 lg:w-8 rounded" />}
                    </div>
                    <h2 className={`
                      font-bold text-gray-800 leading-tight mb-1 md:mb-2 transition-all duration-300 text-center
                      ${hoveredCard === guild.id ? 'text-xs md:text-sm lg:text-base' : 'text-sm md:text-base lg:text-lg'}
                      ${hoveredCard && hoveredCard !== guild.id ? 'lg:text-sm' : ''}
                    `}>
                      {guild.title}
                    </h2>
                  </div>

                  <div className={`
                    flex-1 transition-all duration-500 ease-out
                    ${hoveredCard === guild.id ? 'lg:opacity-100 lg:scale-100 lg:translate-y-0' : 'lg:opacity-0 lg:scale-95 lg:translate-y-2 lg:pointer-events-none'}
                  `}>
                    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-2 lg:gap-3 h-full place-items-center place-content-center">
                      {guild.services.map((service, serviceIndex) => <div key={serviceIndex} className="flex flex-col items-center justify-center p-1 md:p-2 bg-white/70 backdrop-blur-sm rounded-lg hover:bg-white transition-all duration-300 group-hover:scale-105 w-full h-full min-h-[40px] md:min-h-[60px]">
                          {service.type === "image" && service.src ? loadedImages.has(service.src) ? <OptimizedImage src={service.src} alt={service.name} className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 object-contain mb-1" priority="normal" lazy={true} /> : <Skeleton className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 rounded mb-1" /> : <Wrench className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600 mb-1" />}
                          <span className="text-xs md:text-xs lg:text-[10px] font-medium text-gray-700 leading-none text-center">
                            {service.name}
                          </span>
                        </div>)}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-8">
            <p className="text-reymasur-green-600 text-sm font-medium">
              Pasa el cursor sobre las tarjetas para ver los servicios disponibles
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-reymasur-blue-50 to-reymasur-green-50 rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-8 mb-8 md:mb-16 relative">
          <motion.div className="absolute inset-0 bg-gradient-to-br from-reymasur-blue-50 to-reymasur-green-50 rounded-3xl z-0" animate={{
          scale: 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut"
          }
        }} />
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8 font-montserrat relative z-10">
            Tecnología y Herramientas Profesionales
          </h3>
          <div className="w-full max-w-7xl mx-auto relative z-10">
            <motion.div layout className="flex flex-col sm:flex-row gap-4 sm:gap-6 h-auto sm:h-[600px] justify-center items-stretch">
              <div className="flex flex-row sm:flex-col gap-2 sm:gap-4 flex-shrink-0 w-full sm:w-72 overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0">
                {herramientas.filter(card => card.id !== expandedCard).map(card => <motion.div key={card.id} className="relative bg-white border-2 border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:border-blue-300 transition-all duration-300 p-3 sm:p-4 flex items-center justify-center h-32 sm:h-40 min-w-[140px] sm:min-w-0" onClick={() => handleCardClick(card.id)} whileHover={{
                scale: 1.03
              }} whileTap={{
                scale: 0.98
              }}>
                      <div className="text-center">
                        <div className="mb-2">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
                            {card.status}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-base font-semibold text-black text-center mb-1">{card.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-600 text-center line-clamp-2 sm:line-clamp-3 hidden sm:block">{card.description}</p>
                      </div>
                    </motion.div>)}
              </div>

              <div className="flex justify-center flex-grow">
                <ToolCard key={expandedCard} card={herramientas.find(card => card.id === expandedCard)!} isExpanded={true} onClick={() => {}} />
              </div>
            </motion.div>
          </div>
        </div>

        
      </div>
    </section>;
};
export default GremiosSection;