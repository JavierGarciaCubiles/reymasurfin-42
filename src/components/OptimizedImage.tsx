
import React, { useState, useRef, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: 'high' | 'normal' | 'low';
  lazy?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
  enableWebP?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  priority = 'normal',
  lazy = true,
  placeholder,
  onLoad,
  onError,
  enableWebP = false // Deshabilitado por defecto para evitar problemas
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority === 'high');
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer simplificado
  useEffect(() => {
    if (!lazy || priority === 'high') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();
    console.log('Imagen cargada correctamente:', src);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
    onError?.();
    console.error('Error al cargar imagen:', src);
  };

  if (hasError) {
    return (
      <div className={`${className} bg-gray-100 flex items-center justify-center min-h-[200px]`}>
        <span className="text-gray-400 text-sm">Error al cargar imagen</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} ref={imgRef}>
      {!isLoaded && isInView && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={lazy && priority !== 'high' ? 'lazy' : 'eager'}
          onLoad={handleLoad}
          onError={handleError}
          style={{ display: isLoaded ? 'block' : 'block' }}
        />
      )}
    </div>
  );
};
