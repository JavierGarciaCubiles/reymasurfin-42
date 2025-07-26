import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { X, MessageCircle, Send, RotateCcw } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface UserData {
  solicitudTipo: 'siniestro' | 'reforma' | 'presupuesto' | '';
  nombre: string;
  telefono: string;
  email: string;
  direccion: string;
  descripcion: string;
  areaTecnica: string;
  urgencia: 'alto' | 'medio' | 'bajo' | '';
  preferenciaContacto: 'telefono' | 'email' | '';
}

interface VirtualAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const VirtualAssistant = ({ isOpen, onClose }: VirtualAssistantProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [messages, setMessages] = useState([
    {
      type: 'assistant',
      text: '¡Hola! Soy Raquel, el asistente virtual de REYMASUR 13, S.L.U. (Multiservicios). Estoy aquí para ayudarte con tu solicitud.'
    },
    {
      type: 'assistant',
      text: '¿Se trata de un siniestro, una reforma general o una solicitud de presupuesto para servicios específicos?'
    }
  ]);

  const [userData, setUserData] = useState<UserData>({
    solicitudTipo: '',
    nombre: '',
    telefono: '',
    email: '',
    direccion: '',
    descripcion: '',
    areaTecnica: '',
    urgencia: '',
    preferenciaContacto: ''
  });

  const [currentInput, setCurrentInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle click outside to close modal
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const resetChat = () => {
    setCurrentStep(0);
    setMessages([
      {
        type: 'assistant',
        text: '¡Hola! Soy Raquel, el asistente virtual de REYMASUR 13, S.L.U. (Multiservicios). Estoy aquí para ayudarte con tu solicitud.'
      },
      {
        type: 'assistant',
        text: '¿Se trata de un siniestro, una reforma general o una solicitud de presupuesto para servicios específicos?'
      }
    ]);
    setUserData({
      solicitudTipo: '',
      nombre: '',
      telefono: '',
      email: '',
      direccion: '',
      descripcion: '',
      areaTecnica: '',
      urgencia: '',
      preferenciaContacto: ''
    });
    setCurrentInput('');
    toast({ title: "Chat reiniciado", description: "La conversación ha comenzado de nuevo" });
  };

  const steps = [
    'solicitudTipo',
    'datosContacto',
    'ubicacion',
    'descripcion',
    'areaTecnica',
    'urgencia',
    'preferenciaContacto',
    'confirmacion'
  ];

  const handleSolicitudTipo = (tipo: 'siniestro' | 'reforma' | 'presupuesto') => {
    setUserData(prev => ({ ...prev, solicitudTipo: tipo }));
    setMessages(prev => [
      ...prev,
      { type: 'user', text: tipo === 'siniestro' ? 'Siniestro' : tipo === 'reforma' ? 'Reforma general' : 'Solicitud de presupuesto' },
      { type: 'assistant', text: 'Para poder gestionar tu solicitud, ¿podrías indicarme tu nombre completo, tu número de teléfono y tu dirección de correo electrónico?' }
    ]);
    setCurrentStep(1);
  };

  const handleDatosContacto = () => {
    if (!userData.nombre || !userData.telefono || !userData.email) {
      toast({ title: "Error", description: "Por favor completa todos los campos de contacto" });
      return;
    }
    
    setMessages(prev => [
      ...prev,
      { type: 'user', text: `Nombre: ${userData.nombre}, Teléfono: ${userData.telefono}, Email: ${userData.email}` },
      { type: 'assistant', text: '¿Cuál es la dirección completa donde se requiere el servicio (Calle, número, piso, código postal y provincia)?' }
    ]);
    setCurrentStep(2);
  };

  const handleUbicacion = () => {
    if (!userData.direccion) {
      toast({ title: "Error", description: "Por favor proporciona la dirección completa" });
      return;
    }

    setMessages(prev => [
      ...prev,
      { type: 'user', text: userData.direccion },
      { type: 'assistant', text: 'Por favor, describe la naturaleza de la incidencia o el tipo de reforma/servicio que necesitas. (Ej: Fuga de agua, instalación eléctrica, reforma de cocina, etc.)' }
    ]);
    setCurrentStep(3);
  };

  const handleDescripcion = () => {
    if (!userData.descripcion) {
      toast({ title: "Error", description: "Por favor describe el servicio requerido" });
      return;
    }

    setMessages(prev => [
      ...prev,
      { type: 'user', text: userData.descripcion },
      { type: 'assistant', text: '¿Puedes especificar el área técnica? (Ej: Fontanería, Electricidad, Albañilería, Pintura, Cerrajería, Carpintería, Limpieza, etc.)' }
    ]);
    setCurrentStep(4);
  };

  const handleAreaTecnica = () => {
    if (!userData.areaTecnica) {
      toast({ title: "Error", description: "Por favor especifica el área técnica" });
      return;
    }

    setMessages(prev => [
      ...prev,
      { type: 'user', text: userData.areaTecnica },
      { type: 'assistant', text: '¿Cuál es el nivel de urgencia?' }
    ]);
    setCurrentStep(5);
  };

  const handleUrgencia = (urgencia: 'alto' | 'medio' | 'bajo') => {
    setUserData(prev => ({ ...prev, urgencia }));
    const urgenciaText = urgencia === 'alto' ? 'Alta prioridad' : 
                        urgencia === 'medio' ? 'Prioridad media' : 
                        'Prioridad baja';
    
    setMessages(prev => [
      ...prev,
      { type: 'user', text: urgenciaText },
      { type: 'assistant', text: '¿Prefieres que nos pongamos en contacto contigo por teléfono o por correo electrónico?' }
    ]);
    setCurrentStep(6);
  };

  const handlePreferenciaContacto = (preferencia: 'telefono' | 'email') => {
    setUserData(prev => ({ ...prev, preferenciaContacto: preferencia }));
    
    const resumen = `
Tipo de solicitud: ${userData.solicitudTipo}
Nombre: ${userData.nombre}
Teléfono: ${userData.telefono}
Email: ${userData.email}
Dirección: ${userData.direccion}
Descripción: ${userData.descripcion}
Área técnica: ${userData.areaTecnica}
Urgencia: ${userData.urgencia}
Preferencia de contacto: ${preferencia}
    `;

    setMessages(prev => [
      ...prev,
      { type: 'user', text: preferencia === 'telefono' ? 'Por teléfono' : 'Por correo electrónico' },
      { type: 'assistant', text: `Gracias. He recopilado la siguiente información: ${resumen}¿Es correcta?` }
    ]);
    setCurrentStep(7);
  };

  const handleConfirmacion = (confirmado: boolean) => {
    if (confirmado) {
      // Generar el correo electrónico y enviarlo usando mailto
      const emailBody = generateEmailBody(userData);
      const subject = `Solicitud de Servicio - ${userData.nombre} - ${userData.areaTecnica}`;
      const mailtoUrl = `mailto:reymasur@reymasur13.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
      
      console.log('Email generado:', emailBody);
      console.log('Abriendo cliente de correo...');
      
      // Abrir el cliente de correo del usuario
      window.open(mailtoUrl, '_self');
      
      setMessages(prev => [
        ...prev,
        { type: 'user', text: 'Sí, es correcta' },
        { type: 'assistant', text: 'Perfecto. He abierto tu cliente de correo con toda la información preparada para enviar a REYMASUR 13, S.L.U. Solo tienes que hacer clic en "Enviar". ¡Gracias por confiar en nosotros!' }
      ]);

      toast({ 
        title: "Cliente de correo abierto", 
        description: "Revisa tu cliente de correo y haz clic en enviar para completar la solicitud." 
      });

      setTimeout(() => {
        onClose();
      }, 3000);
    } else {
      setMessages(prev => [
        ...prev,
        { type: 'user', text: 'No, hay información incorrecta' },
        { type: 'assistant', text: 'No hay problema. Empecemos de nuevo para corregir la información.' }
      ]);
      // Reiniciar el proceso
      setCurrentStep(0);
      setUserData({
        solicitudTipo: '',
        nombre: '',
        telefono: '',
        email: '',
        direccion: '',
        descripcion: '',
        areaTecnica: '',
        urgencia: '',
        preferenciaContacto: ''
      });
    }
  };

  const generateEmailBody = (data: UserData) => {
    return `
Estimado equipo de REYMASUR 13, S.L.U.,

Se ha recibido una nueva solicitud a través del asistente de la página web. A continuación, se detallan los datos del solicitante y la descripción del servicio requerido:

Datos del Solicitante:
• Nombre: ${data.nombre}
• Teléfono: ${data.telefono}
• Correo Electrónico: ${data.email}
• Preferencia de Contacto: ${data.preferenciaContacto === 'telefono' ? 'Teléfono' : 'Correo Electrónico'}

Detalles de la Solicitud:
• Tipo de Solicitud: ${data.solicitudTipo}
• Nivel de Urgencia: ${data.urgencia}
• Área Técnica: ${data.areaTecnica}

Ubicación del Servicio:
• Dirección: ${data.direccion}

Descripción del Problema/Proyecto:
${data.descripcion}

Por favor, procedan con la gestión de esta solicitud según el tipo de servicio y el nivel de urgencia indicado.

Atentamente,
Asistente Virtual de REYMASUR 13, S.L.U.
    `;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-end p-4 z-50">
      <div ref={modalRef} className="bg-white rounded-lg shadow-xl w-full max-w-md h-[600px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-reymasur-green-600 to-reymasur-green-700 text-white rounded-t-lg">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <h3 className="font-semibold">Raquel - Asistente Virtual</h3>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={resetChat} 
              className="text-white hover:bg-white/20"
              title="Limpiar chat y empezar de nuevo"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-reymasur-green-600 text-white ml-4'
                    : 'bg-gray-100 text-gray-800 mr-4'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t bg-gray-50">
          {currentStep === 0 && (
            <div className="space-y-2">
              <Button 
                onClick={() => handleSolicitudTipo('siniestro')}
                className="w-full justify-start bg-white hover:bg-gray-50 text-gray-800 border border-gray-300"
                variant="outline"
              >
                Siniestro
              </Button>
              <Button 
                onClick={() => handleSolicitudTipo('reforma')}
                className="w-full justify-start bg-white hover:bg-gray-50 text-gray-800 border border-gray-300"
                variant="outline"
              >
                Reforma general
              </Button>
              <Button 
                onClick={() => handleSolicitudTipo('presupuesto')}
                className="w-full justify-start bg-white hover:bg-gray-50 text-gray-800 border border-gray-300"
                variant="outline"
              >
                Solicitud de presupuesto
              </Button>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-3">
              <Input
                placeholder="Nombre completo"
                value={userData.nombre}
                onChange={(e) => setUserData(prev => ({ ...prev, nombre: e.target.value }))}
              />
              <Input
                placeholder="Número de teléfono"
                value={userData.telefono}
                onChange={(e) => setUserData(prev => ({ ...prev, telefono: e.target.value }))}
              />
              <Input
                placeholder="Correo electrónico"
                type="email"
                value={userData.email}
                onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
              />
              <Button onClick={handleDatosContacto} className="w-full bg-reymasur-green-600 hover:bg-reymasur-green-700">
                <Send className="h-4 w-4 mr-2" />
                Continuar
              </Button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-3">
              <Textarea
                placeholder="Dirección completa (Calle, número, piso, código postal y provincia)"
                value={userData.direccion}
                onChange={(e) => setUserData(prev => ({ ...prev, direccion: e.target.value }))}
              />
              <Button onClick={handleUbicacion} className="w-full bg-reymasur-green-600 hover:bg-reymasur-green-700">
                <Send className="h-4 w-4 mr-2" />
                Continuar
              </Button>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-3">
              <Textarea
                placeholder="Describe la naturaleza de la incidencia o servicio..."
                value={userData.descripcion}
                onChange={(e) => setUserData(prev => ({ ...prev, descripcion: e.target.value }))}
              />
              <Button onClick={handleDescripcion} className="w-full bg-reymasur-green-600 hover:bg-reymasur-green-700">
                <Send className="h-4 w-4 mr-2" />
                Continuar
              </Button>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-3">
              <Input
                placeholder="Área técnica (Fontanería, Electricidad, etc.)"
                value={userData.areaTecnica}
                onChange={(e) => setUserData(prev => ({ ...prev, areaTecnica: e.target.value }))}
              />
              <Button onClick={handleAreaTecnica} className="w-full bg-reymasur-green-600 hover:bg-reymasur-green-700">
                <Send className="h-4 w-4 mr-2" />
                Continuar
              </Button>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-2">
              <Button 
                onClick={() => handleUrgencia('alto')}
                className="w-full justify-start bg-white hover:bg-gray-50 text-red-600 border border-red-300"
                variant="outline"
              >
                A) Alta prioridad
              </Button>
              <Button 
                onClick={() => handleUrgencia('medio')}
                className="w-full justify-start bg-white hover:bg-gray-50 text-yellow-600 border border-yellow-300"
                variant="outline"
              >
                B) Prioridad media
              </Button>
              <Button 
                onClick={() => handleUrgencia('bajo')}
                className="w-full justify-start bg-white hover:bg-gray-50 text-gray-600 border border-gray-300"
                variant="outline"
              >
                C) Prioridad baja
              </Button>
            </div>
          )}

          {currentStep === 6 && (
            <div className="space-y-2">
              <Button 
                onClick={() => handlePreferenciaContacto('telefono')}
                className="w-full justify-start bg-white hover:bg-gray-50 text-gray-800 border border-gray-300"
                variant="outline"
              >
                Por teléfono
              </Button>
              <Button 
                onClick={() => handlePreferenciaContacto('email')}
                className="w-full justify-start bg-white hover:bg-gray-50 text-gray-800 border border-gray-300"
                variant="outline"
              >
                Por correo electrónico
              </Button>
            </div>
          )}

          {currentStep === 7 && (
            <div className="space-y-2">
              <Button 
                onClick={() => handleConfirmacion(true)}
                className="w-full justify-start bg-reymasur-green-600 hover:bg-reymasur-green-700"
                variant="default"
              >
                Sí, es correcta
              </Button>
              <Button 
                onClick={() => handleConfirmacion(false)}
                className="w-full justify-start bg-white hover:bg-gray-50 text-gray-800 border border-gray-300"
                variant="outline"
              >
                No, hay información incorrecta
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VirtualAssistant;
