
import { useState, useEffect } from 'react';

interface ImagePreloaderResult {
  imagesLoaded: boolean;
  loadedImages: Set<string>;
}

export const useImagePreloader = (imageUrls: string[]): ImagePreloaderResult => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (imageUrls.length === 0) {
      setImagesLoaded(true);
      return;
    }

    const preloadPromises = imageUrls.map((url) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(url);
        img.onerror = () => reject(url);
        img.src = url;
      });
    });

    Promise.allSettled(preloadPromises).then((results) => {
      const successfulUrls = new Set<string>();
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          successfulUrls.add(imageUrls[index]);
        }
      });
      
      setLoadedImages(successfulUrls);
      setImagesLoaded(true);
    });
  }, [imageUrls]);

  return { imagesLoaded, loadedImages };
};
