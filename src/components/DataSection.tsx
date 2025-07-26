
import { Shield, Award, CheckCircle, Star, Building, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const insuranceCompanies = [
  "La Estrella", "Vitalicio (Grupo Generali)", "Zurich", "Patria Hispana", 
  "Groupama", "Fiact", "Santa Lucía", "Axa", "Verti", 
  "Mutua Madrileña", "Segurcaixa"
];

const DataSection = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-reymasur-green-50 via-white to-reymasur-green-100 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-reymasur-green-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-reymasur-green-300 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-reymasur-green-500 to-reymasur-green-600 rounded-full mb-6 shadow-lg">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-reymasur-green-800 mb-6 font-montserrat">
              Nos Avalan las Mejores Aseguradoras
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-reymasur-green-500 to-reymasur-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-montserrat leading-relaxed">
              Nuestra trayectoria está respaldada por las principales compañías aseguradoras del mercado, 
              garantizando la máxima confianza y profesionalidad en cada servicio.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-reymasur-green-500 to-reymasur-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-reymasur-green-800 mb-2 font-montserrat">12+</h3>
                <p className="text-gray-600 font-montserrat font-medium">Aseguradoras de Prestigio</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-reymasur-green-500 to-reymasur-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-reymasur-green-800 mb-2 font-montserrat">+20</h3>
                <p className="text-gray-600 font-montserrat font-medium">Años de Experiencia</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-reymasur-green-500 to-reymasur-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-reymasur-green-800 mb-2 font-montserrat">100%</h3>
                <p className="text-gray-600 font-montserrat font-medium">Confianza Garantizada</p>
              </CardContent>
            </Card>
          </div>

          {/* Insurance Companies Grid */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-reymasur-green-100">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-reymasur-green-800 mb-4 font-montserrat">
                Compañías que Confían en Nosotros
              </h3>
              <p className="text-gray-600 font-montserrat">
                Colaboramos activamente con las aseguradoras más reconocidas del sector
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {insuranceCompanies.map((company, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-reymasur-green-50 p-6 rounded-2xl border border-reymasur-green-200 hover:border-reymasur-green-400 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-reymasur-green-700 font-semibold font-montserrat text-sm leading-tight">
                      {company}
                    </span>
                    <CheckCircle className="h-5 w-5 text-reymasur-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-reymasur-green-600 to-reymasur-green-700 rounded-3xl p-12 shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <Award className="h-12 w-12 text-white mr-4" />
                <h3 className="text-4xl font-bold text-white font-montserrat">
                  Respaldo de Excelencia
                </h3>
              </div>
              <p className="text-xl text-reymasur-green-100 mb-8 font-montserrat max-w-3xl mx-auto leading-relaxed">
                El reconocimiento de las principales compañías aseguradoras avala nuestra trayectoria profesional. 
                Únete a quienes ya confían en nuestro servicio de calidad.
              </p>
              <Button 
                size="lg"
                className="bg-white text-reymasur-green-700 hover:bg-reymasur-green-50 font-bold px-12 py-4 text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-montserrat rounded-full"
                onClick={() => window.location.href = 'mailto:reymasur@reymasur13.com?subject=Solicitud de información'}
              >
                SOLICITAR INFORMACIÓN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSection;
