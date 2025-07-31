
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

  useEffect(() => {
    if (imageUrls.length === 0) {
      setImagesLoaded(true);
      setLoadingProgress(100);
      return;
    }

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    const updateProgress = (url: string) => {
      loadedCount++;
      const progress = (loadedCount / totalImages) * 100;
      setLoadingProgress(progress);
      setLoadedImages(prev => new Set([...prev, url]));
      
      if (loadedCount === totalImages) {
        setImagesLoaded(true);
      }
      
      console.log(`Imagen precargada: ${url} (${loadedCount}/${totalImages})`);
    };

    // Función simplificada de precarga
    const preloadImage = (url: string): Promise<string> => {
      return new Promise((resolve) => {
        const img = new Image();
        
        img.onload = () => {
          updateProgress(url);
          resolve(url);
        };
        
        img.onerror = () => {
          console.warn(`Falló la precarga de imagen: ${url}`);
          updateProgress(url); // Continuar aunque falle
          resolve(url);
        };
        
        img.src = url;
      });
    };

    // Cargar imágenes en lotes pequeños para evitar sobrecarga
    const loadInBatches = async () => {
      const batchSize = 3;
      const batches = [];
      
      for (let i = 0; i < imageUrls.length; i += batchSize) {
        batches.push(imageUrls.slice(i, i + batchSize));
      }

      try {
        for (const batch of batches) {
          await Promise.all(batch.map(preloadImage));
          // Pequeña pausa entre lotes
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      } catch (error) {
        console.warn('Error en la precarga de imágenes:', error);
        setImagesLoaded(true);
      }
    };

    loadInBatches();
  }, [imageUrls]);

  return { imagesLoaded, loadedImages, loadingProgress };
};
