import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import { ClassCardProps } from '../../types/components';
import { VULPIARE_PHONE, DEFAULT_WHATSAPP_MESSAGE } from '../../constants/config';

export const ClassCard: React.FC<ClassCardProps> = ({
  title,
  description,
  image,
  imageAlt,
  badge,
  whatsappMessage = DEFAULT_WHATSAPP_MESSAGE,
  whatsappPhone = VULPIARE_PHONE,
  mapsUrl,
  className = '',
}) => {
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className={`group flex flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-vulpiare-light ${className}`}>
      {/* Contenedor de la Imagen */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-vulpiare-light/30">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {badge && (
          <span className="absolute top-3 left-3 rounded-full bg-vulpiare-dark px-3.5 py-1 text-xs font-bold text-white shadow-md">
            {badge}
          </span>
        )}
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="font-serif text-xl font-bold text-vulpiare-dark">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {description}
          </p>
        </div>

        {/* Acciones (Google Maps + WhatsApp) */}
        <div className="mt-6 flex items-center justify-between gap-3 border-t border-vulpiare-light/50 pt-4">
          {mapsUrl ? (
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-vulpiare-light px-3.5 py-1.5 text-xs font-semibold text-vulpiare-dark transition-colors hover:bg-vulpiare-medium/50"
            >
              <MapPin className="h-4 w-4" />
              <span>Ver Ubicación</span>
            </a>
          ) : (
            <span className="text-xs font-medium text-gray-400">
              Consultar disponibilidad
            </span>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Consultar sobre ${title} por WhatsApp`}
            className="inline-flex items-center gap-2 rounded-full bg-vulpiare-dark px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all hover:bg-vulpiare-dark/90 hover:shadow-md active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Consultar</span>
          </a>
        </div>
      </div>
    </div>
  );
};
