import React from 'react';
import { GOOGLE_MAPS_LOCATION_URL, VULPIARE_PHONE } from '../../constants/config';
import victoriaStretchImg from '../../assets/images/victoria-stretch.jpg';

export const LocationSection: React.FC = () => {
  return (
    <section className="w-full py-10 sm:py-16 lg:py-space-3xl bg-surface scroll-mt-20" id="ubicacion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-margin">
        <div className="rounded-2xl sm:rounded-3xl bg-surface-container-low border border-surface-container-high p-4 sm:p-6 lg:p-space-2xl shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-space-xl items-center">
            {/* Columna Izquierda: Información de la Sede & WhatsApp */}
            <div className="lg:col-span-6 flex flex-col items-start gap-3 sm:gap-4 lg:gap-space-sm">
              <span className="font-label-xs text-[10px] sm:text-label-xs uppercase tracking-widest text-secondary font-bold">
                Vení a conocernos
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-headline-lg text-primary tracking-tight font-bold">
                Ubicación de Vulpiare
              </h2>
              <p className="font-body-md text-xs sm:text-body-md text-on-surface-variant leading-relaxed">
                Nuestro espacio está especialmente acondicionado para disciplinas aéreas en Mendoza: techos altos con anclajes estructurales seguros, ambiente climatizado, colchonetas de protección y una atmósfera inspiradora para entrenar en tela.
              </p>

              <div className="mt-1 sm:mt-space-xs space-y-3 w-full">
                <div className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-surface-container-lowest border border-surface-container">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-[20px] sm:text-[22px]">location_on</span>
                  </div>
                  <div>
                    <p className="font-title-md text-xs sm:text-title-md text-primary font-bold">Sede Oficial Vulpiare</p>
                    <p className="font-body-sm text-[11px] sm:text-body-sm text-on-surface-variant">Acceso cómodo, seguro y con estacionamiento cercano en Mendoza</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 sm:pt-space-sm flex flex-wrap items-center gap-space-sm w-full">
                <a
                  className="px-4 sm:px-5 py-3 rounded-full bg-surface-container text-primary font-label-md text-xs sm:text-label-md uppercase tracking-wider hover:bg-surface-container-high transition-all flex items-center justify-center gap-2 border border-outline-variant w-full sm:w-auto text-center font-bold"
                  href={`https://wa.me/${VULPIARE_PHONE}?text=Hola%20Victoria,%20quisiera%20consultar%20c%C3%B3mo%20llegar%20al%20estudio`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px] sm:text-[20px] text-secondary">chat</span>
                  <span>Pedir indicaciones a Victoria</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative mt-4 lg:mt-0 w-full">
              <div className="relative w-full min-h-[420px] sm:min-h-[440px] lg:min-h-0 lg:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-surface-container-high flex flex-col justify-between p-4 sm:p-6 lg:p-space-lg group">
                {/* Imagen de fondo */}
                <img
                  alt="Instalaciones Seguras Vulpiare"
                  className="absolute inset-0 w-full h-full object-cover object-[50%_75%] group-hover:scale-105 transition-transform duration-700"
                  src={victoriaStretchImg}
                />
                
                {/* Degradado oscuro para lectura del texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/45 pointer-events-none" />

                {/* Encabezado e Info */}
                <div className="relative z-10 space-y-1.5 sm:space-y-2">
                  <span className="px-3 py-0.5 sm:py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-xs text-[10px] sm:text-label-xs uppercase font-bold tracking-wider inline-block">
                    Estudio de Telas
                  </span>
                  <h3 className="text-lg sm:text-headline-sm font-bold text-on-primary">
                    Instalaciones Seguras
                  </h3>
                  <p className="text-[11px] sm:text-body-sm text-on-primary/90 leading-relaxed max-w-md">
                    Equipamiento técnico para alturas de entrenamiento certificadas, colchonetas de protección y ambiente higienizado.
                  </p>
                </div>

                {/* Única Opción de Ir al Mapa */}
                <div className="relative z-10 p-3 sm:p-space-md rounded-xl sm:rounded-2xl bg-surface-container-lowest/95 backdrop-blur-md border border-surface-container shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4">
                  <div>
                    <p className="font-title-md text-xs sm:text-title-md text-primary font-bold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[18px] sm:text-[20px]">map</span>
                      <span>Ubicación en Google Maps</span>
                    </p>
                    <p className="font-body-sm text-[11px] sm:text-body-sm text-on-surface-variant mt-0.5">
                      Visualizá el mapa interactivo y calculá tu ruta
                    </p>
                  </div>
                  <a
                    className="px-4 sm:px-space-xl py-2.5 sm:py-space-md rounded-full bg-primary text-on-primary font-label-md text-xs sm:text-label-md uppercase tracking-wider font-bold shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-2 w-full sm:w-auto shrink-0 text-center"
                    href={GOOGLE_MAPS_LOCATION_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[18px]">explore</span>
                    <span>Ir al Mapa</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
