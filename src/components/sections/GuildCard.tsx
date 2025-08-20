
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { OptimizedImage } from '@/components/OptimizedImage';

interface ServiceItem {
  name: string;
  type: string;
  src?: string;
}

interface GuildCardProps {
  guild: {
    id: string;
    title: string;
    iconSrc: string;
    color: string;
    bgGradient: string;
    borderColor: string;
    services: ServiceItem[];
  };
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  loadedImages: Set<string>;
}

const GuildCard = React.memo(({ guild, isHovered, onHover, onLeave, loadedImages }: GuildCardProps) => {
  return (
    <Card 
      className={`
        relative overflow-hidden cursor-pointer transition-all duration-500 ease-out
        ${isHovered ? 'lg:flex-[4] lg:scale-100' : 'lg:flex-[1]'}
        hover:shadow-xl group h-full
        ${guild.bgGradient} ${guild.borderColor} border-2
      `} 
      onMouseEnter={onHover} 
      onMouseLeave={onLeave}
    >
      <CardContent className="p-3 sm:p-4 lg:p-6 h-full flex flex-col">
        <div className="flex-1 flex flex-col justify-center items-center text-center transition-all duration-500 ease-out">
          <div className={`
            inline-flex items-center justify-center rounded-full 
            bg-gradient-to-r ${guild.color} text-white mb-2
            transform transition-all duration-300 group-hover:scale-110
            ${isHovered ? 'w-10 h-10 lg:w-12 lg:h-12' : 'w-14 h-14 lg:w-16 lg:h-16'}
          `}>
            {loadedImages.has(guild.iconSrc) ? (
              <OptimizedImage 
                src={guild.iconSrc} 
                alt={guild.title} 
                className="h-6 w-6 lg:h-8 lg:w-8 object-contain" 
                priority="high" 
                lazy={false} 
              />
            ) : (
              <Skeleton className="h-6 w-6 lg:h-8 lg:w-8 rounded" />
            )}
          </div>
          <h2 className={`
            font-bold text-gray-800 leading-tight mb-1 md:mb-2 transition-all duration-300 text-center
            ${isHovered ? 'text-xs md:text-sm lg:text-base' : 'text-sm md:text-base lg:text-lg'}
          `}>
            {guild.title}
          </h2>
        </div>

        <div className={`
          flex-1 transition-all duration-500 ease-out
          ${isHovered ? 'lg:opacity-100 lg:scale-100 lg:translate-y-0' : 'lg:opacity-0 lg:scale-95 lg:translate-y-2 lg:pointer-events-none'}
        `}>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-2 lg:gap-3 h-full place-items-center place-content-center">
            {guild.services.map((service, serviceIndex) => (
              <div 
                key={serviceIndex} 
                className="flex flex-col items-center justify-center p-1 md:p-2 bg-white/70 backdrop-blur-sm rounded-lg hover:bg-white transition-all duration-300 group-hover:scale-105 w-full h-full min-h-[40px] md:min-h-[60px]"
              >
                {service.type === "image" && service.src ? (
                  loadedImages.has(service.src) ? (
                    <OptimizedImage 
                      src={service.src} 
                      alt={service.name} 
                      className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 object-contain mb-1" 
                      priority="normal" 
                      lazy={true} 
                    />
                  ) : (
                    <Skeleton className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 rounded mb-1" />
                  )
                ) : (
                  <div className="h-4 w-4 lg:h-5 lg:w-5 text-gray-600 mb-1" />
                )}
                <span className="text-xs md:text-xs lg:text-[10px] font-medium text-gray-700 leading-none text-center">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
});

GuildCard.displayName = 'GuildCard';

export default GuildCard;
