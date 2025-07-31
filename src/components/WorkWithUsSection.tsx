import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, MessageSquare } from "lucide-react";
import LinkedInJobsWidget from "./LinkedInJobsWidget";

const WorkWithUsSection = () => {
  const {
    elementRef: titleRef,
    isVisible: titleVisible,
    animationClasses: titleClasses
  } = useScrollReveal(0.1, false, 'fadeScale');
  const {
    elementRef: nameRef,
    isVisible: nameVisible,
    animationClasses: nameClasses
  } = useScrollReveal(0.1, false, 'slideLeft');
  const {
    elementRef: emailRef,
    isVisible: emailVisible,
    animationClasses: emailClasses
  } = useScrollReveal(0.1, false, 'slideRight');
  const {
    elementRef: phoneRef,
    isVisible: phoneVisible,
    animationClasses: phoneClasses
  } = useScrollReveal(0.1, false, 'slideLeft');
  const {
    elementRef: messageRef,
    isVisible: messageVisible,
    animationClasses: messageClasses
  } = useScrollReveal(0.1, false, 'slideUp');
  const {
    elementRef: buttonRef,
    isVisible: buttonVisible,
    animationClasses: buttonClasses
  } = useScrollReveal(0.1, false, 'scale');
  const {
    elementRef: benefitsRef,
    isVisible: benefitsVisible,
    animationClasses: benefitsClasses
  } = useScrollReveal(0.1, false, 'slideUp');
  const {
    elementRef: widgetRef,
    isVisible: widgetVisible,
    animationClasses: widgetClasses
  } = useScrollReveal(0.1, false, 'slideRight');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateEmailBody = (data: typeof formData) => {
    return `
Estimado equipo de REYMASUR 13, S.L.U.,

Se ha recibido una nueva solicitud de trabajo a través de la página web. A continuación, se detallan los datos del solicitante:

Datos del Solicitante:
• Nombre: ${data.name}
• Teléfono: ${data.phone}
• Correo Electrónico: ${data.email}

Mensaje:
${data.message}

Por favor, procedan con la gestión de esta solicitud de empleo.

Atentamente,
Formulario de contacto de REYMASUR 13, S.L.U.
    `;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const emailBody = generateEmailBody(formData);
      const subject = `Solicitud de Trabajo - ${formData.name}`;
      const mailtoUrl = `mailto:reymasur@reymasur13.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      
      console.log('Email generado:', emailBody);
      console.log('Abriendo cliente de correo...');
      
      window.open(mailtoUrl, '_self');

      toast({
        title: "Cliente de correo abierto",
        description: "Revisa tu cliente de correo y haz clic en enviar para completar la solicitud."
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al abrir el cliente de correo. Inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-transparent relative" id="trabajo">
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full blur-2xl animate-float" style={{
        backgroundColor: 'hsl(var(--palette-cyan) / 0.2)'
      }}></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 rounded-full blur-xl animate-pulse" style={{
        backgroundColor: 'hsl(var(--palette-green) / 0.15)'
      }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`max-w-6xl mx-auto text-center mb-12 ${titleVisible ? titleClasses.visible : titleClasses.hidden}`}>
          <h2 className="text-4xl font-bold text-reymasur-corporate-800 mb-4">
            ¿Quieres trabajar con nosotros?
          </h2>
          <p className="text-xl text-reymasur-corporate-600">
            Únete a nuestro equipo y forma parte de la transformación de la empresa.
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card className="shadow-lg border-0 border-t-4 border-reymasur-corporate-500">
                <CardHeader className="text-center bg-gradient-to-r from-reymasur-corporate-50 to-reymasur-green-50">
                  <CardTitle className="text-2xl text-reymasur-corporate-800">
                    Envíanos tu información
                  </CardTitle>
                  <CardDescription className="text-reymasur-corporate-600">
                    Completa el formulario y nos pondremos en contacto contigo
                  </CardDescription>
                  
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-center">
                      <div className="text-blue-700 text-sm font-medium mb-1">
                        ¿Te interesa alguna oferta específica?
                      </div>
                      <p className="text-blue-600 text-xs">
                        Puedes aplicar directamente desde el widget de LinkedIn o usar este formulario mencionando la posición que te interesa
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div ref={nameRef} className={`space-y-2 ${nameVisible ? nameClasses.visible : nameClasses.hidden}`}>
                        <Label htmlFor="name" className="text-sm font-medium text-reymasur-corporate-700">
                          Nombre completo *
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-reymasur-corporate-400" />
                          <Input id="name" name="name" type="text" placeholder="Tu nombre completo" value={formData.name} onChange={handleInputChange} className="pl-10 border-reymasur-corporate-200 focus:border-reymasur-corporate-500" required />
                        </div>
                      </div>

                      <div ref={emailRef} className={`space-y-2 ${emailVisible ? emailClasses.visible : emailClasses.hidden}`}>
                        <Label htmlFor="email" className="text-sm font-medium text-reymasur-corporate-700">
                          Correo electrónico *
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-reymasur-corporate-400" />
                          <Input id="email" name="email" type="email" placeholder="tu@email.com" value={formData.email} onChange={handleInputChange} className="pl-10 border-reymasur-corporate-200 focus:border-reymasur-corporate-500" required />
                        </div>
                      </div>
                    </div>

                    <div ref={phoneRef} className={`space-y-2 ${phoneVisible ? phoneClasses.visible : phoneClasses.hidden}`}>
                      <Label htmlFor="phone" className="text-sm font-medium text-reymasur-green-700">
                        Teléfono
                      </Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-reymasur-green-400" />
                        <Input id="phone" name="phone" type="tel" placeholder="+34 123 456 789" value={formData.phone} onChange={handleInputChange} className="pl-10 border-reymasur-green-200 focus:border-reymasur-green-500" />
                      </div>
                    </div>

                    <div ref={messageRef} className={`space-y-2 ${messageVisible ? messageClasses.visible : messageClasses.hidden}`}>
                      <Label htmlFor="message" className="text-sm font-medium text-reymasur-accent-700">
                        Mensaje *
                      </Label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-reymasur-accent-400" />
                        <Textarea id="message" name="message" placeholder="Cuéntanos sobre tu experiencia, tus intereses o cualquier pregunta que tengas..." value={formData.message} onChange={handleInputChange} className="pl-10 min-h-[120px] border-reymasur-accent-200 focus:border-reymasur-accent-500" required />
                      </div>
                    </div>

                    <div ref={buttonRef} className={`${buttonVisible ? buttonClasses.visible : buttonClasses.hidden}`}>
                      <Button type="submit" className="w-full bg-gradient-to-r from-reymasur-corporate-600 to-reymasur-corporate-700 hover:from-reymasur-corporate-700 hover:to-reymasur-corporate-800 text-white py-3 text-lg font-medium transition-colors" disabled={isSubmitting}>
                        {isSubmitting ? "Abriendo cliente de correo..." : "Enviar mensaje"}
                      </Button>

                      <p className="text-sm text-gray-500 text-center mt-4">
                        * Campos obligatorios
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div ref={widgetRef} className={`${widgetVisible ? widgetClasses.visible : widgetClasses.hidden}`}>
              <LinkedInJobsWidget />
            </div>
          </div>
        </div>

        <div ref={benefitsRef} className={`max-w-4xl mx-auto text-center ${benefitsVisible ? benefitsClasses.visible : benefitsClasses.hidden}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2 p-6 bg-white rounded-xl border-l-4 border-reymasur-corporate-500 hover:shadow-lg transition-all duration-300">
              <h3 className="font-semibold text-reymasur-corporate-800">Oportunidades</h3>
              <p className="text-gray-600 text-sm">Únete a proyectos innovadores en el sector </p>
            </div>
            <div className="space-y-2 p-6 bg-white rounded-xl border-l-4 border-reymasur-green-500 hover:shadow-lg transition-all duration-300">
              <h3 className="font-semibold text-reymasur-green-800">Crecimiento</h3>
              <p className="text-gray-600 text-sm">
                Desarrolla tu carrera en un entorno dinámico y colaborativo
              </p>
            </div>
            <div className="space-y-2 p-6 bg-white rounded-xl border-l-4 border-reymasur-accent-500 hover:shadow-lg transition-all duration-300">
              <h3 className="font-semibold text-reymasur-accent-800">Impacto</h3>
              <p className="text-gray-600 text-sm">Contribuye a la transformación de la empresa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
