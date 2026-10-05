import React from 'react';
import logoImg from '../../assets/images/logo.png';
import { VULPIARE_PHONE, INSTAGRAM_URL, TIKTOK_URL, GOOGLE_MAPS_LOCATION_URL } from '../../constants/config';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-space-3xl pb-space-xl border-t border-surface-container pb-24 xl:pb-space-xl">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-2xl">
          {/* Columna 1: Logo & Info */}
          <div>
            <div className="flex items-center gap-space-sm mb-space-md">
              <img
                alt="Logo Vulpiare"
                className="w-12 h-12 rounded-full object-contain"
                src={logoImg}
              />
              <div>
                <span className="font-headline-md text-headline-md text-primary leading-tight block">Vulpiare</span>
                <span className="text-xs uppercase tracking-widest text-secondary font-bold">
                  Acrobacias Aéreas en Tela
                </span>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
              Academia especializada exclusivamente en acrobacias aéreas en tela dirigida por Victoria. Fuerza, flexibilidad y figuras en altura con metodología cuidada para todas las edades.
            </p>
            <div className="flex items-center gap-space-sm">
              <a
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors"
                href={INSTAGRAM_URL}
                rel="noopener noreferrer"
                target="_blank"
                title="@vulpiare.acrotela"
              >
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </a>
              <a
                aria-label="TikTok"
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors"
                href={TIKTOK_URL}
                rel="noopener noreferrer"
                target="_blank"
                title="@vulpiare.acrotela"
              >
                <span className="material-symbols-outlined text-[20px]">play_circle</span>
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="font-title-md text-title-md text-primary mb-space-md uppercase tracking-wide">Navegación</h4>
            <ul className="space-y-space-xs font-body-md text-body-md text-on-surface-variant">
              <li><a className="hover:text-primary transition-colors" href="#inicio">Inicio</a></li>
              <li><a className="hover:text-primary transition-colors" href="#grupos">Grupos y Clases</a></li>
              <li><a className="hover:text-primary transition-colors" href="#horarios">Grilla de Horarios</a></li>
              <li><a className="hover:text-primary transition-colors" href="#seguridad">Seguridad &amp; Pedagogía</a></li>
              <li><a className="hover:text-primary transition-colors" href="#muestras">Muestras Anuales</a></li>
              <li><a className="hover:text-primary transition-colors" href="#ubicacion">Ubicación y Google Maps</a></li>
              <li><a className="hover:text-primary transition-colors" href="#faq">Preguntas Frecuentes</a></li>
              <li><a className="hover:text-primary transition-colors" href="#contacto">Contacto &amp; WhatsApp Victoria</a></li>
            </ul>
          </div>

          {/* Columna 3: Horarios de Clases */}
          <div>
            <h4 className="font-title-md text-title-md text-primary mb-space-md uppercase tracking-wide">Grupos &amp; Horarios</h4>
            <div className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex flex-col border-b border-surface-container pb-1">
                <span className="font-title-md text-title-md text-primary">J/A (Mañana)</span>
                <span>Lunes y Miércoles · 08:00 a 10:00 hs</span>
              </div>
              <div className="flex flex-col border-b border-surface-container pb-1">
                <span className="font-title-md text-title-md text-primary">Niñas (N)</span>
                <span>Lun, Mié y Vie · 16:45 a 18:00 hs</span>
              </div>
              <div className="flex flex-col border-b border-surface-container pb-1">
                <span className="font-title-md text-title-md text-primary">J/A (Tarde)</span>
                <span>Martes y Jueves · 16:00 a 18:00 hs</span>
              </div>
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-primary">A/A (Tarde)</span>
                <span>Lun, Mié y Vie · 17:30 a 19:00 hs</span>
              </div>
            </div>
          </div>

          {/* Columna 4: Canales Oficiales */}
          <div>
            <h4 className="font-title-md text-title-md text-primary mb-space-md uppercase tracking-wide">Contacto Directo</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              Comunicate directamente con Victoria para consultar cupos y detalles de inscripción.
            </p>
            <div className="flex flex-col gap-space-xs text-on-surface-variant text-body-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-primary">Victoria (WA):</span>
                <a
                  className="text-secondary hover:underline font-bold"
                  href={`https://wa.me/${VULPIARE_PHONE}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  +54 9 261 668-8994
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-primary">Instagram:</span>
                <span>@vulpiare.acrotela</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-primary">Ubicación:</span>
                <a
                  className="text-secondary hover:underline"
                  href={GOOGLE_MAPS_LOCATION_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Abrir Google Maps
                </a>
              </div>
              <div className="mt-2">
                <a
                  className="inline-block py-2 px-4 rounded-xl bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider text-center transition-all hover:bg-primary-container"
                  href={`https://wa.me/${VULPIARE_PHONE}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WhatsApp Victoria
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-space-xl flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-surface-variant font-body-sm text-body-sm border-t border-surface-container text-center sm:text-left">
          <p>© 2025 Vulpiare. Academia de Acrobacias Aéreas en Tela · Dirección: Victoria. Todos los derechos reservados.</p>
          <p className="text-outline">Grupos reducidos de 15 a 18 personas · Seguro de accidentes personales para telas aéreas incluido.</p>
        </div>
      </div>
    </footer>
  );
};
