
import React from 'react';
import { Button } from '@/components/ui/button';
import VirtualAssistant from './VirtualAssistant';

interface FloatingAssistantButtonProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const FloatingAssistantButton = ({ isOpen, onOpen, onClose }: FloatingAssistantButtonProps) => {
  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        {/* Bocadillo de diálogo con fondo blanco */}
        <div className="absolute -top-20 -left-16 bg-white text-gray-800 px-4 py-3 rounded-xl text-sm font-medium shadow-lg border border-gray-200 leading-tight">
          <div>👋 ¡Hola! Soy Raquel</div>
          <div>Tu asistente virtual</div>
          <div className="absolute bottom-[-6px] right-10 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-white"></div>
          <div className="absolute bottom-[-7px] right-10 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-200"></div>
        </div>

        <Button
          onClick={onOpen}
          className="relative h-20 w-20 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group p-0 border-4 border-gray-200 hover:scale-105"
          size="icon"
        >
          {/* Chica pixelada con color original */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/lovable-uploads/931981e9-39d3-4d84-a11f-095250ec098b.png" 
              alt="Raquel - Asistente Virtual" 
              className="w-16 h-16 object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Partículas flotantes más lentas */}
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-palette-green rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-palette-cyan rounded-full animate-bounce opacity-40" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        </Button>
      </div>

      <VirtualAssistant 
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default FloatingAssistantButton;
