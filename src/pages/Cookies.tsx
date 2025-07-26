import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Cookies = () => {
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
                  <h2 className="text-3xl font-bold mb-2 font-montserrat">POLÍTICA DE COOKIES</h2>
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
                  El acceso a este Sitio Web puede implicar la utilización de cookies. Las cookies son pequeñas cantidades de información que se almacenan en el navegador utilizado por cada Usuario —en los distintos dispositivos que pueda utilizar para navegar— para que el servidor recuerde cierta información que posteriormente y únicamente el servidor que la implementó leerá. Las cookies facilitan la navegación, la hacen más amigable, y no dañan el dispositivo de navegación.
                </p>

                <p className="mb-6 text-gray-700 leading-relaxed">
                  Las cookies son procedimientos automáticos de recogida de información relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden también, por ejemplo, ayudar a identificar y resolver errores.
                </p>

                <p className="mb-6 text-gray-700 leading-relaxed">
                  La información recabada a través de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las páginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y después del mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el número de teléfono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer información del disco duro del Usuario o robar información personal. La única manera de que la información privada del Usuario forme parte del archivo Cookie es que el usuario dé personalmente esa información al servidor.
                </p>

                <p className="mb-8 text-gray-700 leading-relaxed">
                  Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les será de aplicación la Política de Privacidad anteriormente descrita. En este sentido, para la utilización de las mismas será necesario el consentimiento del Usuario. Este consentimiento será comunicado, en base a una elección auténtica, ofrecido mediante una decisión afirmativa y positiva, antes del tratamiento inicial, removible y documentado.
                </p>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-palette-blue font-montserrat">Cookies de terceros</h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Son cookies utilizadas y gestionadas por entidades externas que proporcionan a <span className="font-semibold">Reymasur 13</span> servicios solicitados por este mismo para mejorar el Sitio Web y la experiencia del usuario al navegar en el Sitio Web. Los principales objetivos para los que se utilizan cookies de terceros son la obtención de estadísticas de accesos y analizar la información de la navegación, es decir, cómo interactúa el Usuario con el Sitio Web.
                  </p>

                  <p className="mb-4 text-gray-700 leading-relaxed">
                    La información que se obtiene se refiere, por ejemplo, al número de páginas visitadas, el idioma, el lugar a la que la dirección IP desde el que accede el Usuario, el número de Usuarios que acceden, la frecuencia y reincidencia de las visitas, el tiempo de visita, el navegador que usan, el operador o tipo de dispositivo desde el que se realiza la visita. Esta información se utiliza para mejorar el Sitio Web, y detectar nuevas necesidades para ofrecer a los Usuarios un Contenido y/o servicio de óptima calidad. En todo caso, la información se recopila de forma anónima y se elaboran informes de tendencias del Sitio Web sin identificar a usuarios individuales.
                  </p>

                  <p className="mb-4 text-gray-700 leading-relaxed">
                    Puede obtener más información sobre las cookies, la información sobre la privacidad, o consultar la descripción del tipo de cookies que se utiliza, sus principales características, periodo de expiración, etc. en el siguiente(s) enlace(s):
                  </p>

                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <p className="text-gray-800 font-mono">Google Maps: https://www.google.com/maps/</p>
                  </div>

                  <p className="mb-6 text-gray-700 leading-relaxed">
                    La(s) entidad(es) encargada(s) del suministro de cookies podrá(n) ceder esta información a terceros, siempre y cuando lo exija la ley o sea un tercero el que procese esta información para dichas entidades.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-palette-blue font-montserrat">Deshabilitar, rechazar y eliminar cookies</h3>
                  <p className="mb-4 text-gray-700 leading-relaxed">
                    El Usuario puede deshabilitar, rechazar y eliminar las cookies —total o parcialmente— instaladas en su dispositivo mediante la configuración de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que esté utilizando. En el supuesto de que rechace el uso de cookies —total o parcialmente— podrá seguir usando el Sitio Web, si bien podrá tener limitada la utilización de algunas de las prestaciones del mismo.
                  </p>

                  <p className="text-gray-600 text-sm">
                    Este documento de Política de Cookies ha sido creado mediante el generador de{" "}
                    <a 
                      href="https://textos-legales.edgartamarit.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-palette-blue hover:underline"
                    >
                      plantilla de política de cookies web gratis
                    </a>{" "}
                    online el día 25/07/2025.
                  </p>
                </div>
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

export default Cookies;
