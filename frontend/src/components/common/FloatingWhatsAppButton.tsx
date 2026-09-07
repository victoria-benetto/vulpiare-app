import React from 'react';
import { MessageCircle } from 'lucide-react';
import { FloatingWhatsAppButtonProps } from '../../types/components';
import { VULPIARE_PHONE, DEFAULT_WHATSAPP_MESSAGE } from '../../constants/config';

export const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  // =========================================================================
  // NOTA TECH LEAD / DESARROLLADOR:
  // Para cambiar el número de WhatsApp, podés editar la constante VULPIARE_PHONE 
  // en el archivo `src/constants/config.ts` o pasar la prop `phone`.
  // Formato: "5491123456789" (Código de país + área + número sin símbolos ni espacios)
  // =========================================================================
  phone = VULPIARE_PHONE,
  defaultMessage = DEFAULT_WHATSAPP_MESSAGE,
  ariaLabel = "Contactar a Victoria por WhatsApp",
}) => {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] active:scale-95 group"
    >
      <MessageCircle className="h-7 w-7 fill-white text-[#25D366] transition-transform group-hover:rotate-12" />
      <span className="hidden text-sm font-semibold sm:inline-block">
        ¡Hablá con Victoria!
      </span>
    </a>
  );
};
