
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NavBar } from "@/components/ui/tubelight-navbar";

interface HeaderProps {
  onOpenAssistant: () => void;
}

const Header = ({ onOpenAssistant }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const scrollToWorkWithUs = () => {
    const element = document.getElementById('trabajo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTeam = () => {
    const element = document.getElementById('equipo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToServices = () => {
    const element = document.getElementById('gremios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/96 backdrop-blur-md border-b border-reymasur-corporate-200/50 sticky top-0 z-50 shadow-lg shadow-reymasur-corporate-900/5">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3 sm:py-5">
          {/* Logo mejorado - Ahora clickeable */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
              <img 
                src="/lovable-uploads/06b3c052-d01c-46a5-b500-482a66170d91.png" 
                alt="Reymasur 13 Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-reymasur-corporate-800 group-hover:text-reymasur-corporate-600 transition-colors duration-300">
              Reymasur 13
            </span>
          </Link>

          {/* Desktop Navigation mejorada con TubeLight */}
          <NavBar 
            className="hidden lg:flex"
            items={[
              {
                name: "Inicio",
                onClick: () => window.location.href = "/",
                isActive: isActive('/')
              },
              {
                name: "Servicios",
                onClick: scrollToServices
              },
              {
                name: "Conócenos", 
                onClick: scrollToTeam
              },
              {
                name: "Contacto",
                onClick: scrollToContact
              }
            ]}
          />

          {/* Desktop CTA mejorado */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              onClick={onOpenAssistant}
              variant="outline"
              className="border-reymasur-corporate-300 text-reymasur-corporate-600 hover:bg-reymasur-corporate-50 hover:border-reymasur-corporate-400 hover:shadow-md transition-all duration-300"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Asistente
            </Button>
            <Button 
              onClick={scrollToWorkWithUs}
              className="bg-gradient-to-r from-reymasur-corporate-600 to-reymasur-green-600 hover:from-reymasur-corporate-700 hover:to-reymasur-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Trabajar con nosotros
            </Button>
          </div>

          {/* Mobile menu button mejorado */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-reymasur-corporate-600 hover:text-reymasur-corporate-800 hover:bg-reymasur-corporate-50 rounded-lg transition-all duration-300"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation mejorada */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-reymasur-corporate-100/70">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`py-2.5 px-3 rounded-lg font-medium transition-all duration-300 text-sm ${
                  isActive('/') 
                    ? 'text-reymasur-corporate-600 bg-reymasur-corporate-50' 
                    : 'text-reymasur-corporate-700 hover:text-reymasur-corporate-600 hover:bg-reymasur-corporate-50/50'
                }`}
              >
                Inicio
              </Link>
              <button
                onClick={scrollToServices}
                className="text-left py-2.5 px-3 rounded-lg text-reymasur-corporate-700 hover:text-reymasur-corporate-600 hover:bg-reymasur-corporate-50/50 font-medium transition-all duration-300 text-sm"
              >
                Servicios
              </button>
              <button
                onClick={scrollToTeam}
                className="text-left py-2.5 px-3 rounded-lg text-reymasur-corporate-700 hover:text-reymasur-corporate-600 hover:bg-reymasur-corporate-50/50 font-medium transition-all duration-300 text-sm"
              >
                Conócenos
              </button>
              <button
                onClick={scrollToContact}
                className="text-left py-2.5 px-3 rounded-lg text-reymasur-corporate-700 hover:text-reymasur-corporate-600 hover:bg-reymasur-corporate-50/50 font-medium transition-all duration-300 text-sm"
              >
                Contacto
              </button>
              <div className="flex flex-col space-y-2 pt-3 border-t border-reymasur-corporate-100/50">
                <Button
                  onClick={() => {
                    onOpenAssistant();
                    setIsMenuOpen(false);
                  }}
                  variant="outline"
                  size="sm"
                  className="border-reymasur-corporate-300 text-reymasur-corporate-600 hover:bg-reymasur-corporate-50 justify-start"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Asistente
                </Button>
                <Button 
                  onClick={scrollToWorkWithUs}
                  size="sm"
                  className="bg-gradient-to-r from-reymasur-corporate-600 to-reymasur-green-600 hover:from-reymasur-corporate-700 hover:to-reymasur-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 justify-start"
                >
                  Trabajar con nosotros
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
