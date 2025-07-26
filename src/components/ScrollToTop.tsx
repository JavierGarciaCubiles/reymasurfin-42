
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <Button
        onClick={scrollToTop}
        size="sm"
        className="bg-reymasur-corporate-600 hover:bg-reymasur-corporate-700 text-white shadow-lg border border-white/20 transition-all duration-300 hover:scale-105"
      >
        <ChevronUp className="h-4 w-4 mr-1" />
        <span className="hidden sm:inline">Subir</span>
      </Button>
    </div>
  );
};

export default ScrollToTop;
