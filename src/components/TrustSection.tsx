import { Shield, ChevronLeft, ChevronRight, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const insuranceCompanies = [
  {
    name: "La Estrella",
    description: "Compañía aseguradora especializada en seguros de vida y salud con amplia trayectoria en el mercado español.",
    active: false,
    image: "/lovable-uploads/41b90083-b5a3-4bba-a98f-ed0441e3ac8c.png"
  },
  {
    name: "Vitalicio (Grupo Generali)",
    description: "Líder europeo en seguros con presencia global, ofreciendo soluciones integrales de protección.",
    active: false,
    image: "/lovable-uploads/992ea5e4-d7af-45e9-9b56-1cb03cca9c21.png"
  },
  {
    name: "Zurich",
    description: "Grupo asegurador suizo con más de 150 años de experiencia en seguros comerciales y personales.",
    active: false,
    image: "/lovable-uploads/80a55735-bd96-4bf3-986d-6aa42e749f60.png"
  },
  {
    name: "Patria Hispana",
    description: "Aseguradora española con fuerte presencia en el mercado nacional y productos adaptados al cliente local.",
    active: true,
    image: "/lovable-uploads/9a5927c8-e166-4013-ba13-a17c6eccb72c.png"
  },
  {
    name: "Groupama",
    description: "Grupo mutualista francés líder en seguros de vida, hogar y automóvil con enfoque cooperativo.",
    active: false,
    image: "/lovable-uploads/70d260f8-b5f3-4797-9c26-5eafa82c43d1.png"
  },
  {
    name: "Fiact",
    description: "Compañía especializada en seguros de accidentes y responsabilidad civil profesional.",
    active: false,
    image: "/lovable-uploads/96be9222-80e9-4931-bcc9-5aea2923bb5d.png"
  },
  {
    name: "Santa Lucía",
    description: "Aseguradora española con tradición familiar, especializada en seguros de vida y ahorro.",
    active: false,
    image: "/lovable-uploads/dbcd483b-b15e-4688-98b6-07e00183b6e8.png"
  },
  {
    name: "Axa",
    description: "Grupo asegurador francés líder mundial en seguros y gestión de activos.",
    active: true,
    image: "/lovable-uploads/ae1ac13b-4680-48a3-b64b-fb0298751314.png"
  },
  {
    name: "Verti",
    description: "Aseguradora digital especializada en seguros de automóvil con tarifas competitivas.",
    active: false,
    image: "/lovable-uploads/d6f45add-9a37-488c-989a-f4490cc8e8c9.png"
  },
  {
    name: "Mutua Madrileña",
    description: "Mutua de seguros española líder en seguros de automóvil y servicios de asistencia.",
    active: true,
    image: "/lovable-uploads/f521fdfc-63cc-4d22-bbc2-a39ae0b6ed80.png"
  },
  {
    name: "Segurcaixa",
    description: "División aseguradora de CaixaBank, ofreciendo seguros de vida, hogar y automóvil.",
    active: true,
    image: "/lovable-uploads/6cd13d63-409a-44c8-a53b-be48138912b6.png"
  }
];

const TrustSection = () => {
  const { elementRef, isVisible, animationClasses } = useScrollReveal(0.1, false, 'slideRight');
  const [autoplayPlugin] = useState(() => 
    Autoplay({ 
      delay: 3500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: false
    })
  );

  useEffect(() => {
    // No se necesita lógica de audio aquí, se maneja en HeroSection
  }, [isVisible, elementRef]);

  return (
    <section 
      ref={elementRef}
      id="experiencia" 
      className={`py-16 bg-transparent relative overflow-hidden ${
        isVisible ? animationClasses.visible : animationClasses.hidden
      }`}
    >
      {/* Background elements with new palette colors and animations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-40 w-80 h-80 rounded-full opacity-20 blur-3xl animate-float" style={{backgroundColor: 'hsl(var(--palette-green) / 0.3)', animationDelay: '0s'}}></div>
        <div className="absolute top-32 right-10 w-60 h-60 rounded-full opacity-15 blur-2xl animate-pulse" style={{backgroundColor: 'hsl(var(--palette-cyan))', animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 -right-40 w-80 h-80 rounded-full opacity-20 blur-3xl animate-float" style={{backgroundColor: 'hsl(var(--palette-blue) / 0.4)', animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-10 w-40 h-40 rounded-full opacity-25 blur-xl animate-bounce" style={{backgroundColor: 'hsl(var(--palette-yellow) / 0.3)', animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-10 blur-2xl animate-pulse" style={{backgroundColor: 'hsl(var(--palette-red) / 0.2)', animationDelay: '3s'}}></div>
        <div className="absolute top-10 left-1/4 w-24 h-24 rounded-full opacity-15 blur-xl animate-float" style={{backgroundColor: 'hsl(var(--palette-green) / 0.2)', animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-10 right-1/4 w-36 h-36 rounded-full opacity-12 blur-2xl animate-bounce" style={{backgroundColor: 'hsl(var(--palette-yellow) / 0.2)', animationDelay: '4s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat" style={{color: 'hsl(var(--palette-blue))'}}>
              Nos Avalan las Mejores Aseguradoras
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{background: 'linear-gradient(90deg, hsl(var(--palette-green)), hsl(var(--palette-yellow)))'}}></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-montserrat leading-relaxed">
              A lo largo de nuestra trayectoria profesional, hemos colaborado con las principales compañías aseguradoras del mercado. 
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <Carousel
              plugins={[autoplayPlugin]}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {insuranceCompanies.map((company, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                      <CardContent className="p-0">
                        {/* Image */}
                        <div className={`relative h-48 overflow-hidden rounded-t-lg ${company.name === "Patria Hispana" ? "bg-white flex items-center justify-center" : ""}`}>
                          <img
                            src={company.image.startsWith('/') ? company.image : `https://images.unsplash.com/${company.image}?auto=format&fit=crop&w=400&h=200`}
                            alt={`${company.name} colaboración`}
                            className={`${company.name === "Patria Hispana" ? "max-h-32 w-auto object-contain" : "w-full h-full object-cover"} transition-transform duration-500 hover:scale-105`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          
                          {/* Status badge */}
                          <div className="absolute top-4 right-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              company.active 
                                ? 'text-white' 
                                : 'bg-gray-500 text-white'
                            }`} style={company.active ? {backgroundColor: 'hsl(var(--palette-green))'} : {}}>
                              {company.active ? 'Colaboración Activa' : 'Colaboración Pasada'}
                            </span>
                          </div>

                          {/* Company name overlay */}
                          <div className="absolute bottom-4 left-4">
                            <h3 className="text-white text-xl font-bold font-montserrat">
                              {company.name}
                            </h3>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <p className="text-gray-600 font-montserrat leading-relaxed text-sm">
                            {company.description}
                          </p>
                          
                          <div className="flex items-center mt-4 pt-4" style={{borderTop: '1px solid hsl(var(--palette-cyan))'}}>
                            <Building2 className="h-4 w-4 mr-2" style={{color: 'hsl(var(--palette-green))'}} />
                            <span className="text-xs font-medium" style={{color: 'hsl(var(--palette-blue))'}}>
                              Compañía Aseguradora
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-700" style={{borderColor: 'hsl(var(--palette-cyan))'}} />
              <CarouselNext className="hidden md:flex -right-12 bg-white/90 hover:bg-white text-gray-600 hover:text-gray-700" style={{borderColor: 'hsl(var(--palette-cyan))'}} />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;