import React from 'react';
import { GOOGLE_MAPS_LOCATION_URL, VULPIARE_PHONE } from '../../constants/config';

export const LocationSection: React.FC = () => {
  return (
    <section className="w-full py-space-3xl bg-surface scroll-mt-20" id="ubicacion">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="rounded-3xl bg-surface-container-low border border-surface-container-high p-space-xl lg:p-space-2xl shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
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

              <div className="mt-space-sm space-y-3 w-full">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-surface-container-lowest border border-surface-container">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-[22px]">location_on</span>
                  </div>
                  <div>
                    <p className="font-title-md text-title-md text-primary font-bold">Sede Oficial Vulpiare</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Acceso cómodo, seguro y con estacionamiento cercano en Mendoza</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-surface-container-lowest border border-surface-container">
                  <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-[22px]">map</span>
                  </div>
                  <div>
                    <p className="font-title-md text-title-md text-primary font-bold">Cómo llegar con Google Maps</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Visualizá el mapa interactivo y calculá tu ruta en vivo</p>
                  </div>
                </div>
              </div>

              <div className="pt-space-sm flex flex-wrap items-center gap-space-sm w-full sm:w-auto">
                <a
                  className="px-space-xl py-space-md rounded-full bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider shadow-md hover:bg-primary-container transition-all flex items-center justify-center gap-space-xs font-semibold w-full sm:w-auto text-center"
                  href={GOOGLE_MAPS_LOCATION_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px]">explore</span>
                  <span>Abrir en Google Maps</span>
                </a>
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

            <div className="lg:col-span-6 relative mt-6 lg:mt-0">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-surface-container bg-surface-container-high flex flex-col justify-between p-space-lg">
                <div className="relative z-10">
                  <span className="px-space-sm py-1 rounded-full bg-primary text-on-primary font-label-xs text-label-xs uppercase font-bold tracking-wider">
                    Estudio de Telas
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mt-2">Instalaciones Seguras</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Equipamiento técnico para alturas de entrenamiento certificadas y ambiente higienizado.
                  </p>
                </div>
                <div className="p-space-md rounded-2xl bg-surface-container-lowest/95 backdrop-blur-sm border border-surface-container z-10 flex items-center justify-between">
                  <div>
                    <p className="font-title-md text-title-md text-primary font-bold">Ver punto en mapa</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Clic para iniciar navegación en Google Maps</p>
                  </div>
                  <a
                    className="px-space-md py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md uppercase font-bold hover:bg-secondary-container transition-all flex items-center gap-1"
                    href={GOOGLE_MAPS_LOCATION_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>Ir al Mapa</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                </div>
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#4a286d_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
