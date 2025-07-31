
import { useEffect } from 'react';

interface CriticalImageOptions {
  urls: string[];
  priority?: 'high' | 'normal';
}

export const useCriticalImagePreload = ({ urls, priority = 'high' }: CriticalImageOptions) => {
  useEffect(() => {
    // Preload inmediato de imágenes críticas
    urls.forEach((url, index) => {
      // Usar requestIdleCallback para no bloquear el render inicial
      const preloadImage = () => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = url;
        
        if (priority === 'high') {
          link.setAttribute('fetchpriority', 'high');
        }
        
        document.head.appendChild(link);

        // También precargar la imagen en memoria
        const img = new Image();
        img.decoding = priority === 'high' ? 'sync' : 'async';
        img.src = url;
      };

      if (index < 3) {
        // Primeras 3 imágenes de forma inmediata
        preloadImage();
      } else {
        // Resto con un pequeño delay para no saturar
        setTimeout(preloadImage, index * 50);
      }
    });
  }, [urls, priority]);
};
