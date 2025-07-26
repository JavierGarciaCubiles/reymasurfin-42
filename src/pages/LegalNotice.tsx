import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const LegalNotice = () => {
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
                  <h2 className="text-3xl font-bold mb-2 font-montserrat">AVISO LEGAL</h2>
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
                <h3 className="text-2xl font-bold mb-4 text-palette-blue font-montserrat">I. INFORMACIÓN GENERAL</h3>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web:
                </p>

                <p className="mb-4 text-gray-700 leading-relaxed">
                  La titularidad de este sitio web, <span className="font-semibold">www.reymasur13.com</span>, (en adelante, Sitio Web) la ostenta: <span className="font-semibold">Francisco Camarena Jaramillo</span>, con NIF: <span className="font-semibold">28566571L</span>, y cuyos datos de contacto son:
                </p>

                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <p className="text-gray-800 mb-2"><strong>Dirección:</strong> Calle Via Nova, 1, 41016, Sevilla</p>
                  <p className="text-gray-800 mb-2"><strong>Teléfono:</strong> 954932515</p>
                  <p className="text-gray-800"><strong>Email:</strong> reymasur@reymasur13.com</p>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-palette-blue font-montserrat">II. TÉRMINOS Y CONDICIONES GENERALES DE USO</h3>
                
                <h4 className="text-xl font-semibold mb-3 text-palette-green font-montserrat">El objeto de las condiciones: El Sitio Web</h4>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es regular el acceso y la utilización del Sitio Web. A los efectos de las presentes Condiciones se entenderá como Sitio Web: la apariencia externa de los interfaces de pantalla, tanto de forma estática como de forma dinámica, es decir, el árbol de navegación; y todos los elementos integrados tanto en los interfaces de pantalla como en el árbol de navegación (en adelante, Contenidos) y todos aquellos servicios o recursos en línea que en su caso ofrezca a los Usuarios (en adelante, Servicios).
                </p>

                <p className="mb-4 text-gray-700 leading-relaxed">
                  <span className="font-semibold">Reymasur 13</span> se reserva la facultad de modificar, en cualquier momento, y sin aviso previo, la presentación y configuración del Sitio Web y de los Contenidos y Servicios que en él pudieran estar incorporados. El Usuario reconoce y acepta que en cualquier momento <span className="font-semibold">Reymasur 13</span> pueda interrumpir, desactivar y/o cancelar cualquiera de estos elementos que se integran en el Sitio Web o el acceso a los mismos.
                </p>

                <p className="mb-6 text-gray-700 leading-relaxed">
                  El acceso al Sitio Web por el Usuario tiene carácter libre y, por regla general, es gratuito sin que el Usuario tenga que proporcionar una contraprestación para poder disfrutar de ello, salvo en lo relativo al coste de conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso que hubiere contratado el Usuario.
                </p>

                <h4 className="text-xl font-semibold mb-3 text-palette-green font-montserrat">El Usuario</h4>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  El acceso, la navegación y uso del Sitio Web confiere la condición de Usuario, por lo que se aceptan, desde que se inicia la navegación por el Sitio Web, todas las Condiciones aquí establecidas, así como sus ulteriores modificaciones, sin perjuicio de la aplicación de la correspondiente normativa legal de obligado cumplimiento según el caso.
                </p>

                <p className="mb-4 text-gray-700 leading-relaxed">
                  El Sitio Web de <span className="font-semibold">Reymasur 13</span> proporciona gran diversidad de información, servicios y datos. El Usuario asume su responsabilidad para realizar un uso correcto del Sitio Web. Esta responsabilidad se extenderá a:
                </p>

                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li className="mb-2">Un uso de la información, Contenidos y/o Servicios y datos ofrecidos por Reymasur 13 sin que sea contrario a lo dispuesto por las presentes Condiciones, la Ley, la moral o el orden público.</li>
                  <li>La veracidad y licitud de las informaciones aportadas por el Usuario en los formularios extendidos por Reymasur 13 para el acceso a ciertos Contenidos o Servicios.</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4 text-palette-blue font-montserrat">III. ACCESO Y NAVEGACIÓN EN EL SITIO WEB</h3>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  <span className="font-semibold">Reymasur 13</span> no garantiza la continuidad, disponibilidad y utilidad del Sitio Web, ni de los Contenidos o Servicios. Reymasur 13 hará todo lo posible por el buen funcionamiento del Sitio Web, sin embargo, no se responsabiliza ni garantiza que el acceso a este Sitio Web no vaya a ser ininterrumpido o que esté libre de error.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-palette-blue font-montserrat">IV. POLÍTICA DE ENLACES</h3>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  El Usuario o tercero que realice un hipervínculo desde una página web de otro, distinto, sitio web al Sitio Web de <span className="font-semibold">Reymasur 13</span> deberá saber que no se permite la reproducción —total o parcialmente— de ninguno de los Contenidos y/o Servicios del Sitio Web sin autorización expresa.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-palette-blue font-montserrat">V. PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  <span className="font-semibold">Reymasur 13</span> por sí o como parte cesionaria, es titular de todos los derechos de propiedad intelectual e industrial del Sitio Web, así como de los elementos contenidos en el mismo.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-palette-blue font-montserrat">VI. ACCIONES LEGALES, LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h3>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  <span className="font-semibold">Reymasur 13</span> se reserva la facultad de presentar las acciones civiles o penales que considere necesarias por la utilización indebida del Sitio Web y Contenidos, o por el incumplimiento de las presentes Condiciones.
                </p>

                <p className="text-gray-600 text-sm">
                  Este documento de Aviso Legal y Condiciones Generales de uso del sitio web ha sido creado mediante el generador de{" "}
                  <a 
                    href="https://textos-legales.edgartamarit.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-palette-blue hover:underline"
                  >
                    plantilla de aviso legal y condiciones de uso
                  </a>{" "}
                  online el día 25/07/2025.
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

export default LegalNotice;
