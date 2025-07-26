import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = <T extends HTMLElement = HTMLDivElement>(threshold = 0.1, triggerOnce = false, animationType = 'slideUp', delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '-50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, triggerOnce]);

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-1000 ${delay > 0 ? `delay-${delay}` : ''}`;
    
    switch (animationType) {
      case 'slideLeft':
        return {
          visible: `${baseClasses} opacity-100 translate-x-0`,
          hidden: `${baseClasses} opacity-0 -translate-x-10`
        };
      case 'slideRight':
        return {
          visible: `${baseClasses} opacity-100 translate-x-0`,
          hidden: `${baseClasses} opacity-0 translate-x-10`
        };
      case 'slideUp':
        return {
          visible: `${baseClasses} opacity-100 translate-y-0`,
          hidden: `${baseClasses} opacity-0 translate-y-10`
        };
      case 'scale':
        return {
          visible: `${baseClasses} opacity-100 scale-100`,
          hidden: `${baseClasses} opacity-0 scale-95`
        };
      case 'fadeScale':
        return {
          visible: `${baseClasses} opacity-100 scale-100`,
          hidden: `${baseClasses} opacity-0 scale-90`
        };
      case 'slideDown':
        return {
          visible: `${baseClasses} opacity-100 translate-y-0`,
          hidden: `${baseClasses} opacity-0 -translate-y-10`
        };
      default:
        return {
          visible: `${baseClasses} opacity-100 translate-y-0`,
          hidden: `${baseClasses} opacity-0 translate-y-10`
        };
    }
  };

  return { elementRef, isVisible, animationClasses: getAnimationClasses() };
};