import React from 'react';
import { GOOGLE_MAPS_LOCATION_URL, VULPIARE_PHONE } from '../../constants/config';
import victoriaStretchImg from '../../assets/images/victoria-stretch.jpg';

export const LocationSection: React.FC = () => {
  return (
    <section className="w-full py-space-3xl bg-surface scroll-mt-20" id="ubicacion">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="rounded-3xl bg-surface-container-low border border-surface-container-high p-space-xl lg:p-space-2xl shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
            {/* Columna Izquierda: Información de la Sede & WhatsApp */}
            <div className="lg:col-span-6 flex flex-col items-start gap-space-sm">
              <span className="font-label-xs text-label-xs uppercase tracking-widest text-secondary font-bold">
                Vení a conocernos
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Ubicación de Vulpiare
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Nuestro espacio está especialmente acondicionado para disciplinas aéreas en Mendoza: techos altos con anclajes estructurales seguros, ambiente climatizado, colchonetas de protección y una atmósfera inspiradora para entrenar en tela.
              </p>

              <div className="mt-space-xs space-y-3 w-full">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface-container-lowest border border-surface-container">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-[22px]">location_on</span>
                  </div>
                  <div>
                    <p className="font-title-md text-title-md text-primary font-bold">Sede Oficial Vulpiare</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Acceso cómodo, seguro y con estacionamiento cercano en Mendoza</p>
                  </div>
                </div>
              </div>

              <div className="pt-space-sm flex flex-wrap items-center gap-space-sm w-full">
                <a
                  className="px-space-lg py-space-md rounded-full bg-surface-container text-primary font-label-lg text-label-lg uppercase tracking-wider hover:bg-surface-container-high transition-all flex items-center justify-center gap-space-xs border border-outline-variant w-full sm:w-auto text-center"
                  href={`https://wa.me/${VULPIARE_PHONE}?text=Hola%20Victoria,%20quisiera%20consultar%20c%C3%B3mo%20llegar%20al%20estudio`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px] text-secondary">chat</span>
                  <span>Pedir indicaciones a Victoria</span>
                </a>
              </div>
            </div>

            {/* Columna Derecha: Tarjeta Instalaciones Seguras con Imagen de Fondo y opción única de Mapa */}
            <div className="lg:col-span-6 relative mt-6 lg:mt-0">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-surface-container-high flex flex-col justify-between p-space-lg group">
                {/* Imagen de fondo */}
                <img
                  alt="Instalaciones Seguras Vulpiare"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  src={victoriaStretchImg}
                />
                
                {/* Degradado oscuro para lectura del texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/45" />

                {/* Encabezado e Info */}
                <div className="relative z-10 space-y-2">
                  <span className="px-space-sm py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-xs text-label-xs uppercase font-bold tracking-wider inline-block">
                    Estudio de Telas
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-primary font-bold">
                    Instalaciones Seguras
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-primary/90 leading-relaxed max-w-md">
                    Equipamiento técnico para alturas de entrenamiento certificadas, colchonetas de protección y ambiente higienizado.
                  </p>
                </div>

                {/* Única Opción de Ir al Mapa */}
                <div className="relative z-10 p-space-md rounded-2xl bg-surface-container-lowest/95 backdrop-blur-md border border-surface-container shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <p className="font-title-md text-title-md text-primary font-bold flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-secondary text-[20px]">map</span>
                      <span>Ubicación en Google Maps</span>
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Visualizá el mapa interactivo y calculá tu ruta
                    </p>
                  </div>
                  <a
                    className="px-space-xl py-space-md rounded-full bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider font-bold shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-2 w-full sm:w-auto flex-shrink-0"
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
