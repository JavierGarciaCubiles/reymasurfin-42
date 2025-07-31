
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Briefcase, MapPin, ExternalLink, Linkedin } from "lucide-react";

interface JobOffer {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
}

const LinkedInJobsWidget = () => {
  const [jobs] = useState<JobOffer[]>([
    {
      id: "1",
      title: "Técnico en Reformas Integrales",
      location: "Sevilla, España",
      type: "Tiempo completo",
      description: "Buscamos técnico especializado en reformas integrales con experiencia en siniestros y seguros."
    },
    {
      id: "2", 
      title: "Especialista en Siniestros",
      location: "Sevilla, España",
      type: "Tiempo completo",
      description: "Profesional con experiencia en tramitación de siniestros y relación con aseguradoras."
    },
    {
      id: "3",
      title: "Arquitecto Técnico",
      location: "Sevilla, España",
      type: "Tiempo parcial",
      description: "Arquitecto técnico para supervisión de obras y peritaciones técnicas."
    }
  ]);

  const handleApplyClick = (jobTitle: string) => {
    const subject = `Interés en la posición: ${jobTitle}`;
    const body = `Estimado equipo de REYMASUR 13,

Me dirijo a ustedes para expresar mi interés en la posición de "${jobTitle}" que he visto publicada.

Me gustaría obtener más información sobre esta oportunidad laboral y el proceso de selección.

Quedo a la espera de su respuesta.

Atentamente,`;

    const mailtoUrl = `mailto:reymasur@reymasur13.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_self');
  };

  return (
    <Card className="h-full shadow-lg border-0 border-l-4 border-blue-500 bg-white">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
        <CardTitle className="flex items-center gap-3 text-xl text-blue-800">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <Linkedin className="h-5 w-5 text-white" />
          </div>
          Ofertas de Empleo
        </CardTitle>
        <p className="text-sm text-blue-600 font-medium">
          Únete al equipo de REYMASUR 13
        </p>
      </CardHeader>
      
      <CardContent className="p-0 max-h-96 overflow-y-auto">
        <div className="space-y-0">
          {jobs.map((job, index) => (
            <div 
              key={job.id} 
              className={`p-4 hover:bg-gray-50 transition-colors ${
                index !== jobs.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                    {job.title}
                  </h4>
                  <p className="text-blue-600 font-medium text-sm">REYMASUR 13 S.L.U.</p>
                </div>
                
                <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="h-3 w-3" />
                    <span>{job.type}</span>
                  </div>
                </div>
                
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                  {job.description}
                </p>
                
                <div className="flex items-center justify-end">
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 h-7"
                    onClick={() => handleApplyClick(job.title)}
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Aplicar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t bg-gray-50">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full text-blue-600 border-blue-200 hover:bg-blue-50 text-xs"
            onClick={() => window.open('https://www.linkedin.com/company/reymasur-13-slu/', '_blank')}
          >
            <Linkedin className="h-3 w-3 mr-2" />
            Ver más en LinkedIn
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LinkedInJobsWidget;
