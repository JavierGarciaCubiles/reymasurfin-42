
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
  enableWebP = true
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority === 'high');
  const [optimizedSrc, setOptimizedSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement>(null);

  // Optimizar URL de imagen
  useEffect(() => {
    const optimizeImageUrl = async () => {
      let finalSrc = src;
      
      // Intentar WebP si está habilitado
      if (enableWebP && !src.includes('.gif')) {
        const supportsWebP = await new Promise<boolean>((resolve) => {
          const webP = new Image();
          webP.onload = webP.onerror = () => resolve(webP.height === 2);
          webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        });

        if (supportsWebP) {
          const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
          if (webpSrc !== src) {
            // Verificar si existe la versión WebP
            try {
              const response = await fetch(webpSrc, { method: 'HEAD' });
              if (response.ok) {
                finalSrc = webpSrc;
              }
            } catch {
              // Usar original si WebP no está disponible
            }
          }
        }
      }
      
      setOptimizedSrc(finalSrc);
    };

    optimizeImageUrl();
  }, [src, enableWebP]);

  // Intersection Observer más agresivo para imágenes críticas
  useEffect(() => {
    if (!lazy || priority === 'high') return;

    const margin = priority === 'normal' ? '100px' : '200px';
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: margin,
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const getFetchPriority = (): "high" | "low" | "auto" => {
    switch (priority) {
      case 'high':
        return 'high';
      case 'low':
        return 'low';
      case 'normal':
      default:
        return 'auto';
    }
  };

  if (hasError) {
    return (
      <div className={`${className} bg-gray-100 flex items-center justify-center`}>
        <span className="text-gray-400 text-sm">Error al cargar imagen</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} ref={imgRef}>
      {!isLoaded && (
        <Skeleton className="absolute inset-0 w-full h-full" />
      )}
      
      {isInView && (
        <img
          src={optimizedSrc}
          alt={alt}
          className={`${className} transition-opacity duration-200 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading={lazy && priority !== 'high' ? 'lazy' : 'eager'}
          decoding={priority === 'high' ? 'sync' : 'async'}
          fetchPriority={getFetchPriority()}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};
