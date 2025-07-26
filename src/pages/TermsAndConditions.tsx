import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToContact = () => {
    navigate("/#contacto");
    setTimeout(() => {
      const element = document.getElementById('contacto');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header con botones de navegación */}
            <div className="bg-gradient-to-r from-palette-blue to-palette-green text-white p-6">
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <h2 className="text-3xl font-bold mb-2 font-montserrat">TÉRMINOS Y CONDICIONES</h2>
                  <h4 className="text-xl font-montserrat">www.reymasur13.com</h4>
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={handleBackToContact}
                    variant="outline" 
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Volver
                  </Button>
                  <Link to="/">
                    <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                      <Home className="h-4 w-4 mr-2" />
                      Inicio
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Los presentes términos y condiciones regulan el uso de los servicios de <span className="font-semibold">Reymasur 13</span>, empresa especializada en siniestros y reformas integrales.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-palette-blue font-montserrat">1. Servicios Ofrecidos</h3>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Reymasur 13 ofrece servicios especializados en:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li>Gestión integral de siniestros</li>
                  <li>Reformas integrales de viviendas y locales</li>
                  <li>Servicios de construcción y rehabilitación</li>
                  <li>Asesoramiento técnico especializado</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4 text-palette-blue font-montserrat">2. Condiciones de Contratación</h3>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  La contratación de nuestros servicios se realizará mediante presupuesto previo, donde se especificarán todos los detalles del trabajo a realizar, plazos de ejecución y condiciones económicas.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-palette-blue font-montserrat">3. Garantías</h3>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Todos nuestros trabajos están respaldados por garantías según la normativa vigente y las condiciones específicas de cada proyecto.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-palette-blue font-montserrat">4. Responsabilidades</h3>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Reymasur 13 se compromete a ejecutar todos los trabajos con la máxima profesionalidad y calidad, cumpliendo con todas las normativas técnicas y de seguridad aplicables.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-palette-blue font-montserrat">5. Protección de Datos</h3>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  El tratamiento de los datos personales se realizará conforme a nuestra Política de Privacidad y en cumplimiento de la normativa vigente de protección de datos.
                </p>

                <p className="text-gray-600 text-sm">
                  Estos términos y condiciones están sujetos a la legislación española y cualquier controversia será resuelta por los tribunales competentes.
                </p>
              </div>

              {/* Botones de navegación al final */}
              <div className="text-center pt-6 border-t border-gray-200 mt-8">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleBackToContact}
                    className="bg-gradient-to-r from-palette-blue to-palette-green hover:from-palette-blue/90 hover:to-palette-green/90 text-white"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Volver al Contacto
                  </Button>
                  <Link to="/">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Home className="h-4 w-4" />
                      Página Principal
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
