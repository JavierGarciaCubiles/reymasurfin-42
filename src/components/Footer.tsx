
import { Linkedin, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative py-16 text-white overflow-hidden" id="contacto" style={{
      background: "linear-gradient(135deg, hsl(var(--palette-blue) / 0.95) 0%, hsl(var(--palette-blue) / 0.9) 100%)"
    }}>
      {/* Elementos decorativos en el footer */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl animate-pulse" style={{
          backgroundColor: "hsl(var(--palette-green) / 0.3)",
          animationDelay: "0s"
        }}></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-2xl animate-float" style={{
          backgroundColor: "hsl(var(--palette-yellow) / 0.2)",
          animationDelay: "1s"
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Company Info - Izquierda */}
          <div className="md:col-span-6">
            <Link to="/" className="text-3xl font-bold mb-4 font-montserrat block hover:text-palette-yellow transition-colors">
              Reymasur 13
            </Link>
            <p className="text-gray-200 mb-6 leading-relaxed font-montserrat text-lg">Especialistas en siniestros y reformas integrales. Reformando el presente con calidad y confianza.</p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-palette-yellow" />
                <span className="text-gray-200 font-montserrat">
                  +34 954 932 515
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-palette-yellow" />
                <span className="text-gray-200 font-montserrat">
                  reymasur@reymasur13.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-palette-yellow" />
                <span className="text-gray-200 font-montserrat">
                  Calle Via Nova, 1, Sevilla
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-palette-yellow" />
                <span className="text-gray-200 font-montserrat">
                  Lun-Vie: 8:30-19:00 | Sáb-Dom: Cerrado
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5"></div>
                <span className="text-gray-300 font-montserrat text-sm">
                  Verano: Lun-Vie 9:00-14:00
                </span>
              </div>
            </div>
          </div>

          {/* Espacio en el medio */}
          <div className="md:col-span-2"></div>

          {/* Legal Links - Derecha */}
          <div className="md:col-span-4">
            <h4 className="text-xl font-bold mb-6 font-montserrat">Legal</h4>
            <ul className="space-y-3 mb-6">
              <li>
                <Link to="/legal" className="text-gray-200 hover:text-white transition-colors duration-200 font-montserrat hover:underline">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-200 hover:text-white transition-colors duration-200 font-montserrat hover:underline">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-200 hover:text-white transition-colors duration-200 font-montserrat hover:underline">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-200 hover:text-white transition-colors duration-200 font-montserrat hover:underline">
                  Cookies
                </Link>
              </li>
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="text-lg font-semibold mb-4 font-montserrat">
                Síguenos
              </h5>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/reymasur-13-slu" target="_blank" rel="noopener noreferrer" className="bg-palette-green p-3 rounded-full hover:bg-palette-yellow transition-colors duration-200 transform hover:scale-110" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-300 mt-2 font-montserrat">
          "33 años edificando confianza"
        </p>
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-200 font-montserrat text-lg">
            © {new Date().getFullYear()} Reymasur 13 - Siniestros y Reformas Integrales. Todos los derechos reservados.
          </p>
          <p className="text-gray-300 mt-2 font-montserrat text-sm">
            Website made by Javier Garcia Cubiles
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
