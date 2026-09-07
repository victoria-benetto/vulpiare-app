/**
 * Interfaces de TypeScript para las props de los componentes UI.
 */

export interface ClassCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  whatsappMessage?: string;
  whatsappPhone?: string;
  mapsUrl?: string;
  className?: string;
}

export interface FloatingWhatsAppButtonProps {
  /**
   * Número de teléfono en formato internacional sin símbolos (ej. "5491123456789")
   */
  phone?: string;
  /**
   * Mensaje predefinido para iniciar el chat de WhatsApp
   */
  defaultMessage?: string;
  ariaLabel?: string;
}

export interface InstructorBannerProps {
  instructorName?: string;
  title?: string;
  className?: string;
}

export interface HeaderProps {
  academyName?: string;
  onInscribeClick?: () => void;
}

export interface FooterProps {
  academyName?: string;
}
