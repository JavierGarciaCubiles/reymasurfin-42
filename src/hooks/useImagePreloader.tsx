
import { useState, useEffect } from 'react';

interface ImagePreloaderResult {
  imagesLoaded: boolean;
  loadedImages: Set<string>;
  loadingProgress: number;
}

interface PreloadOptions {
  priority?: 'high' | 'normal' | 'low';
  lazy?: boolean;
  enableWebP?: boolean;
}

export const useImagePreloader = (
  imageUrls: string[], 
  options: PreloadOptions = {}
): ImagePreloaderResult => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Función para detectar soporte WebP
  const supportsWebP = (): Promise<boolean> => {
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        resolve(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  };

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

    // Función optimizada de precarga con cache y WebP
    const preloadImage = async (url: string, priority: string = 'normal'): Promise<string> => {
      // Verificar cache del navegador primero
      const cacheKey = `img_${url}`;
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        setLoadedImages(prev => new Set([...prev, url]));
        return Promise.resolve(url);
      }

      return new Promise(async (resolve) => {
        const img = new Image();
        
        // Optimizar formato si es posible
        let finalUrl = url;
        if (options.enableWebP && await supportsWebP() && !url.includes('.gif')) {
          // Intentar versión WebP si está disponible
          const webpUrl = url.replace(/\.(jpg|jpeg|png)$/i, '.webp');
          if (webpUrl !== url) {
            const testImg = new Image();
            testImg.onload = () => finalUrl = webpUrl;
            testImg.src = webpUrl;
          }
        }
        
        // Configurar atributos de optimización
        if (priority === 'high') {
          img.decoding = 'sync';
          img.fetchPriority = 'high';
          // Preload críticas usando link preload
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = finalUrl;
          document.head.appendChild(link);
        } else if (priority === 'low') {
          img.decoding = 'async';
          img.fetchPriority = 'low';
          img.loading = 'lazy';
        } else {
          img.decoding = 'async';
          img.fetchPriority = 'auto';
        }

        img.onload = () => {
          // Guardar en cache de sesión
          sessionStorage.setItem(cacheKey, 'loaded');
          setLoadedImages(prev => new Set([...prev, finalUrl]));
          resolve(finalUrl);
        };
        
        img.onerror = () => {
          console.warn(`Failed to load image: ${finalUrl}`);
          resolve(finalUrl); // Continuar aunque falle
        };
        
        img.src = finalUrl;
      });
    };

    // Estrategia de carga por lotes más agresiva
    const loadImages = async () => {
      try {
        // Críticas: primeras 2 imágenes de forma inmediata
        const criticalImages = imageUrls.slice(0, 2);
        const criticalPromises = criticalImages.map(async (url) => {
          await preloadImage(url, 'high');
          updateProgress();
        });
        
        // Importantes: siguientes 4 imágenes con menor delay
        const importantImages = imageUrls.slice(2, 6);
        const importantPromises = importantImages.map(async (url, index) => {
          await new Promise(resolve => setTimeout(resolve, index * 20));
          await preloadImage(url, 'normal');
          updateProgress();
        });

        // Resto: carga lazy con más delay
        const remainingImages = imageUrls.slice(6);
        const remainingPromises = remainingImages.map(async (url, index) => {
          await new Promise(resolve => setTimeout(resolve, 100 + (index * 50)));
          await preloadImage(url, 'low');
          updateProgress();
        });

        // Ejecutar críticas primero, luego el resto en paralelo
        await Promise.all(criticalPromises);
        await Promise.all([...importantPromises, ...remainingPromises]);
        
      } catch (error) {
        console.warn('Some images failed to load:', error);
        setImagesLoaded(true);
      }
    };

    loadImages();
  }, [imageUrls, options.enableWebP]);

  return { imagesLoaded, loadedImages, loadingProgress };
};
