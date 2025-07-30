
import { useState, useEffect } from 'react';

interface ImagePreloaderResult {
  imagesLoaded: boolean;
  loadedImages: Set<string>;
  loadingProgress: number;
}

interface PreloadOptions {
  priority?: 'high' | 'normal' | 'low';
  lazy?: boolean;
}

export const useImagePreloader = (
  imageUrls: string[], 
  options: PreloadOptions = {}
): ImagePreloaderResult => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setImagesLoaded(true);
      setLoadingProgress(100);
      return;
    }

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    const updateProgress = () => {
      loadedCount++;
      const progress = (loadedCount / totalImages) * 100;
      setLoadingProgress(progress);
      
      if (loadedCount === totalImages) {
        setImagesLoaded(true);
      }
    };

    // Función optimizada de precarga con diferentes estrategias
    const preloadImage = (url: string, priority: string = 'normal'): Promise<string> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        // Configurar atributos de optimización
        if (priority === 'high') {
          img.decoding = 'sync';
          img.fetchPriority = 'high';
        } else if (priority === 'low') {
          img.decoding = 'async';
          img.fetchPriority = 'low';
          img.loading = 'lazy';
        } else {
          img.decoding = 'async';
        }

        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, url]));
          resolve(url);
        };
        
        img.onerror = () => {
          console.warn(`Failed to load image: ${url}`);
          resolve(url); // Resolvemos aunque falle para no bloquear el progreso
        };
        
        img.src = url;
      });
    };

    // Separar imágenes por prioridad
    const criticalImages = imageUrls.slice(0, 3); // Primeras 3 imágenes como críticas
    const normalImages = imageUrls.slice(3, 8); // Siguientes 5 como normales
    const lazyImages = imageUrls.slice(8); // Resto como lazy

    const loadImages = async () => {
      try {
        // Cargar imágenes críticas primero
        const criticalPromises = criticalImages.map(url => 
          preloadImage(url, 'high').then(() => updateProgress())
        );
        
        // Cargar imágenes normales en paralelo (pero con límite)
        const normalPromises = normalImages.map((url, index) => 
          new Promise(resolve => {
            setTimeout(() => {
              preloadImage(url, 'normal').then(() => {
                updateProgress();
                resolve(url);
              });
            }, index * 50); // Escalonar ligeramente para evitar sobrecarga
          })
        );

        // Cargar imágenes lazy con más delay
        const lazyPromises = lazyImages.map((url, index) => 
          new Promise(resolve => {
            setTimeout(() => {
              preloadImage(url, 'low').then(() => {
                updateProgress();
                resolve(url);
              });
            }, 200 + (index * 100)); // Mayor delay para imágenes lazy
          })
        );

        // Ejecutar todas las promesas
        await Promise.all([...criticalPromises, ...normalPromises, ...lazyPromises]);
        
      } catch (error) {
        console.warn('Some images failed to load:', error);
        setImagesLoaded(true);
      }
    };

    loadImages();
  }, [imageUrls]);

  return { imagesLoaded, loadedImages, loadingProgress };
};
