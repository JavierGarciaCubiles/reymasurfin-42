import { useState } from "react";
import { MapPin, Navigation, Phone, Mail, Clock } from "lucide-react";
const GoogleMap = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Coordenadas correctas para Calle Via Nova, 1, 41016 Sevilla
  const defaultLat = 37.3753;
  const defaultLng = -5.9267;
  const companyName = "Reymasur 13";
  const companyAddress = "Calle Via Nova, 1, 41016 Sevilla";

  // URL del mapa sin API key - usando Google Maps público
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.8!2d-5.9267!3d37.3753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c4a7b7e7e37%3A0x4a4a4a4a4a4a4a4a!2sCalle%20Via%20Nova%2C%201%2C%2041016%20Sevilla%2C%20Spain!5e0!3m2!1sen!2ses!4v1640000000000!5m2!1sen!2ses`;
  const handleMapLoad = () => {
    setIsLoaded(true);
  };
  const openInGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(companyAddress)}`;
    window.open(googleMapsUrl, '_blank');
  };
  return <div className="w-full h-full bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
      <div className="relative h-full flex flex-col">
        {!isLoaded && <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-reymasur-green-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm text-gray-600 font-medium">Cargando mapa...</p>
            </div>
          </div>}
        
        {/* Mapa - 50% de altura */}
        <div className="h-[50%] w-full">
          <iframe src={mapUrl} width="100%" height="100%" style={{
          border: 0
        }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" onLoad={handleMapLoad} className="w-full h-full" title={`Ubicación de ${companyName}`} />
        </div>
        
        {/* Información de contacto - 50% de altura */}
        <div className="h-[50%] p-4 bg-gradient-to-br from-white to-gray-50 border-t border-gray-100">
          <div className="h-full flex flex-col">
            {/* Header con logo y título */}
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <img src="/lovable-uploads/06b3c052-d01c-46a5-b500-482a66170d91.png" alt="Reymasur 13 Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-base text-reymasur-corporate-800 font-montserrat">
                  Reymasur 13
                </h3>
                <p className="text-xs text-reymasur-green-600 font-medium font-montserrat">
                  Información de Contacto
                </p>
              </div>
            </div>
            
            <div className="flex-1">
              {/* Información de contacto en 2 columnas */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-4">
                {/* Columna 1 */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-5 h-5 bg-reymasur-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="h-2.5 w-2.5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 font-montserrat text-xs mb-1">Dirección</p>
                      <span className="text-xs text-gray-600 font-montserrat leading-tight">{companyAddress}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-5 h-5 bg-reymasur-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="h-2.5 w-2.5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 font-montserrat text-xs mb-1">Teléfono</p>
                      <span className="text-xs text-gray-600 font-montserrat">+34 954 932 515</span>
                    </div>
                  </div>
                </div>
                
                {/* Columna 2 */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-5 h-5 bg-reymasur-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="h-2.5 w-2.5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 font-montserrat text-xs mb-1">Email</p>
                      <span className="text-xs text-gray-600 font-montserrat">reymasur@reymasur13.com</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-5 h-5 bg-reymasur-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="h-2.5 w-2.5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 font-montserrat text-xs mb-1">Horario</p>
                      <div className="text-xs text-gray-600 font-montserrat space-y-0.5">
                        <p className="font-medium">Lun-Vie: 8:30-19:00</p>
                        <p className="font-medium">Sáb-Dom: Cerrado</p>
                        <p className="text-xs text-gray-500 font-medium">
                          Verano: Lun-Vie 9:00-14:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button onClick={openInGoogleMaps} className="w-full flex items-center justify-center space-x-2 p-2.5 bg-gradient-to-r from-reymasur-green-600 to-reymasur-green-700 text-white rounded-lg hover:from-reymasur-green-700 hover:to-reymasur-green-800 transition-all duration-300 font-medium font-montserrat shadow-lg hover:shadow-xl transform hover:scale-105" title="Abrir en Google Maps">
              <Navigation className="h-4 w-4" />
              <span className="text-sm">Ver en Google Maps</span>
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default GoogleMap;