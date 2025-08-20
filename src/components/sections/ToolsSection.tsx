
import React, { useState, useRef } from 'react';
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { OptimizedImage } from '@/components/OptimizedImage';

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

interface ToolsSectionProps {
  herramientas: CardData[];
}

const ToolCard = React.memo(({ 
  card, 
  isExpanded, 
  onClick,
  currentImageIndex,
  onNextImage,
  onPrevImage
}: {
  card: CardData;
  isExpanded: boolean;
  onClick: () => void;
  currentImageIndex: number;
  onNextImage: () => void;
  onPrevImage: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  if (!card) return null;
  
  const allImages = [card.image, ...card.additionalImages];
  const allDescriptions = card.id === 4 
    ? ["Endoscopio para introducción en tuberías de poco diámetro", "Videocámara de hasta 20 metros", "Videocámara de hasta 50 metros", "Cámara térmica para localizaciones de fuga"]
    : card.id === 2 
    ? ["Detector de fuga ultrasonido", "Detector de fuga gas traza"]
    : card.id === 5 
    ? ["Decapador para soldaduras especiales", "Electrosoldador"]
    : [card.description, ...card.imageDescriptions];

  return (
    <motion.div 
      layout 
      className={`relative bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
        isExpanded 
          ? "flex-grow min-w-[90vw] sm:min-w-[700px] h-[350px] sm:h-[450px] md:h-[600px]" 
          : "flex-shrink-0 w-[70vw] sm:w-80 h-64 sm:h-96"
      }`} 
      onClick={onClick}
      whileHover={{ scale: isExpanded ? 1 : 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="relative h-full w-full bg-white">
        <div className={`h-full flex p-3 sm:p-6 ${isExpanded && window.innerWidth < 640 ? "flex-col" : ""}`}>
          <div className={`flex flex-col justify-center text-black ${
            isExpanded ? "w-full sm:w-1/2 pr-0 sm:pr-6 mb-4 sm:mb-0" : "w-full"
          }`}>
            {isExpanded && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="flex gap-2 mb-4"
              >
                <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full font-medium">
                  {card.category}
                </span>
                <span className="px-3 py-1 bg-green-600 text-white text-xs rounded-full font-medium">
                  {card.status}
                </span>
              </motion.div>
            )}

            <motion.h3 
              layout 
              className={`font-bold mb-3 ${
                isExpanded ? "text-lg sm:text-xl" : "text-sm sm:text-base text-center"
              }`}
            >
              {card.name}
            </motion.h3>

            {isExpanded && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="mb-3 sm:mb-6 text-xs sm:text-sm leading-relaxed sm:leading-loose"
              >
                <h4 className="font-semibold text-sm sm:text-base mb-2">
                  {allDescriptions[currentImageIndex]}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {card.id === 1 
                    ? "Descubre las capacidades y experiencia de Reymasur 13 a través de nuestro video corporativo."
                    : card.imageDescriptions[currentImageIndex]
                  }
                </p>
              </motion.div>
            )}
          </div>

          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0, width: 0 }} 
              animate={{ opacity: 1, width: window.innerWidth < 640 ? "100%" : "50%" }} 
              className="flex items-center justify-center relative h-40 sm:h-full mt-2 sm:mt-0"
            >
              {card.id === 1 ? (
                <div className="rounded-xl overflow-hidden relative w-full h-full max-h-[160px] sm:max-h-[450px] shadow-lg">
                  <video 
                    ref={videoRef}
                    src="https://raw.githubusercontent.com/JavierGarciaCubiles/reymasurfin-42/main/video%20presentacion.mp4" 
                    className="w-full h-full object-cover rounded-xl"
                    controls
                    preload="metadata"
                    playsInline
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              ) : (
                <div className="rounded-xl overflow-hidden relative w-full h-full max-h-[160px] sm:max-h-[450px] shadow-lg">
                  <OptimizedImage 
                    src={allImages[currentImageIndex]} 
                    alt={card.name} 
                    className="w-full h-full object-cover transition-all duration-300 hover:scale-105 cursor-pointer rounded-xl" 
                    priority={isExpanded ? 'high' : 'normal'} 
                    lazy={!isExpanded} 
                  />
                </div>
              )}
              
              {allImages.length > 1 && card.id !== 1 && (
                <>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onPrevImage(); }} 
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-black rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center z-10 transition-all duration-300 shadow-md hover:shadow-xl font-bold text-sm sm:text-lg"
                  >
                    ‹
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); onNextImage(); }} 
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-black rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center z-10 transition-all duration-300 shadow-md hover:shadow-xl font-bold text-sm sm:text-lg"
                  >
                    ›
                  </button>
                </>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
});

ToolCard.displayName = 'ToolCard';

const ToolsSection = React.memo(({ herramientas }: ToolsSectionProps) => {
  const [expandedCard, setExpandedCard] = useState<number>(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCardClick = (cardId: number) => {
    setExpandedCard(cardId);
    setCurrentImageIndex(0);
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

  return (
    <div className="bg-gradient-to-br from-reymasur-blue-50 to-reymasur-green-50 rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-8 mb-8 md:mb-16 relative">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8 font-montserrat relative z-10">
        Tecnología y Herramientas Profesionales
      </h3>
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.div layout className="flex flex-col sm:flex-row gap-4 sm:gap-6 h-auto sm:h-[600px] justify-center items-stretch">
          <div className="flex flex-row sm:flex-col gap-2 sm:gap-4 flex-shrink-0 w-full sm:w-72 overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0">
            {herramientas.filter(card => card.id !== expandedCard).map(card => (
              <motion.div 
                key={card.id} 
                className="relative bg-white border-2 border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:border-blue-300 transition-all duration-300 p-3 sm:p-4 flex items-center justify-center h-32 sm:h-40 min-w-[140px] sm:min-w-0" 
                onClick={() => handleCardClick(card.id)} 
                whileHover={{ scale: 1.03 }} 
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-center">
                  <div className="mb-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
                      {card.status}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-base font-semibold text-black text-center mb-1">{card.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 text-center line-clamp-2 sm:line-clamp-3 hidden sm:block">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center flex-grow">
            <ToolCard 
              key={expandedCard} 
              card={herramientas.find(card => card.id === expandedCard)!} 
              isExpanded={true} 
              onClick={() => {}}
              currentImageIndex={currentImageIndex}
              onNextImage={handleNextImage}
              onPrevImage={handlePrevImage}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
});

ToolsSection.displayName = 'ToolsSection';

export default ToolsSection;
