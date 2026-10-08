import React from 'react';
import victoriaPoseImg from '../../assets/images/victoria-pose.jpg';
import logoImg from '../../assets/images/logo.png';
import { VULPIARE_PHONE } from '../../constants/config';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full pt-6 sm:pt-12 lg:pt-space-xl pb-10 sm:pb-16 lg:pb-space-3xl overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface scroll-mt-20" id="inicio">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] lg:w-[820px] h-[340px] sm:h-[450px] lg:h-[520px] bg-secondary-container/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-24 w-60 sm:w-80 lg:w-96 h-60 sm:h-80 lg:h-96 bg-primary-fixed/25 rounded-full blur-2xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-space-xl items-center">
          {/* Encabezado y Texto Hero (Móvil #1, Desktop Arriba-Izquierda) */}
          <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1 flex flex-col items-start gap-3 sm:gap-4 lg:gap-space-md z-10">
            <div className="inline-flex items-center gap-1.5 sm:gap-space-xs px-3 sm:px-space-md py-1 sm:py-space-xs rounded-full bg-surface-container-highest text-primary shadow-sm border border-secondary/20 max-w-full overflow-hidden">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shrink-0" />
              <span className="font-label-xs text-[10px] sm:text-label-xs uppercase tracking-widest text-primary font-bold truncate">
                Acrobacias Aéreas en Tela · Profesora Victoria
              </span>
            </div>

            <h1 className="font-display-hero text-2xl sm:text-4xl lg:text-[50px] xl:text-[56px] text-primary tracking-tight leading-tight font-bold">
              El arte de volar, <span className="italic font-normal text-secondary">fuerza</span> y expresión en tela
            </h1>

            <p className="font-body-lg text-xs sm:text-body-md lg:text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Academia de acrobacias aéreas en tela para todas las edades dirigida por Victoria. Descubrí el placer de estar en el aire, ganar fuerza, flexibilidad y confianza corporal en un espacio cálido y profesional.
            </p>

            {/* Pill de no se necesita experiencia */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-space-md py-2 sm:py-space-xs rounded-2xl bg-secondary-fixed/70 border border-secondary-fixed-dim text-on-secondary-fixed max-w-full">
              <span className="material-symbols-outlined text-secondary text-[16px] sm:text-[20px] shrink-0">stars</span>
              <span className="font-title-md text-[11px] sm:text-xs md:text-[14px] font-bold leading-snug">¡No se necesita experiencia previa, es para todos los niveles!</span>
            </div>
          </div>

          {/* Columna Visual Hero Media (Móvil #2 - entre texto y botones, Desktop Derecha) */}
          <div className="lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 relative flex justify-center items-center my-1 sm:my-3 lg:my-0 w-full">
            <div className="relative w-full min-h-[380px] sm:min-h-[440px] lg:min-h-0 aspect-[3/4] sm:aspect-[4/5] max-w-lg rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl bg-surface-container border border-surface-container-highest">
              <img
                alt="Acróbata en tela aérea en Vulpiare realizando figura en apertura con telas violetas - María Victoria Benetto"
                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700 ease-out"
                src={victoriaPoseImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent pointer-events-none" />
              
              {/* Floating Badge Top Right */}
              <div className="absolute top-3 sm:top-6 right-3 sm:right-6 px-2.5 sm:px-space-md py-1 sm:py-space-xs rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-lg flex items-center gap-1.5 border border-surface-container z-10">
                <span className="material-symbols-outlined text-secondary text-[14px] sm:text-[16px]">verified</span>
                <span className="font-label-xs text-[10px] sm:text-label-xs text-primary uppercase font-bold tracking-wider">
                  Ciclo Activo 2026
                </span>
              </div>

              {/* Floating Pill Bottom Left */}
              <div className="absolute bottom-2.5 sm:bottom-6 left-2.5 sm:left-6 right-2.5 sm:right-6 p-2.5 sm:p-space-md rounded-xl sm:rounded-2xl bg-surface-container-lowest/95 backdrop-blur-md shadow-xl flex items-center justify-between gap-2 border border-surface-container z-10">
                <div className="flex items-center gap-2 sm:gap-space-sm min-w-0">
                  <img
                    alt="Isotipo Vulpiare"
                    className="w-8 h-8 sm:w-11 sm:h-11 rounded-full object-contain border border-surface-container-highest shrink-0"
                    src={logoImg}
                  />
                  <div className="min-w-0">
                    <h4 className="font-title-md text-[11px] sm:text-title-md text-primary leading-tight font-bold truncate">Seguridad &amp; Técnica Aérea</h4>
                    <p className="font-body-sm text-[10px] sm:text-body-sm text-on-surface-variant truncate">Colchones de impacto y telas de alta resistencia</p>
                  </div>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[16px] sm:text-[18px]">verified_user</span>
                </div>
              </div>
            </div>
          </div>

          {/* Botones CTA y Métricas (Móvil #3, Desktop Abajo-Izquierda) */}
          <div className="lg:col-span-6 lg:col-start-1 lg:row-start-2 flex flex-col items-start gap-4 sm:gap-space-md z-10 w-full">
            {/* Botones CTA Hero */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-2.5 sm:gap-space-sm pt-1 sm:pt-space-xs w-full sm:w-auto">
              <a
                className="px-5 sm:px-space-xl py-3 sm:py-space-md rounded-full bg-primary text-on-primary font-label-md sm:font-label-lg text-xs sm:text-label-lg uppercase tracking-wider shadow-lg hover:bg-primary-container hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-center font-bold"
                href={`https://wa.me/${VULPIARE_PHONE}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Agendar clase con Victoria</span>
              </a>
              <a
                className="px-4 sm:px-space-lg py-3 sm:py-space-md rounded-full bg-surface-container-lowest text-primary font-label-md sm:font-label-lg text-xs sm:text-label-lg uppercase tracking-wider shadow-sm hover:bg-surface-container hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 border border-outline-variant w-full sm:w-auto text-center font-bold"
                href="#horarios"
              >
                <span>Ver Grilla de Horarios</span>
                <span className="material-symbols-outlined text-[18px] text-secondary">arrow_downward</span>
              </a>
            </div>

            {/* Métricas y Badges de Seguridad / Cupos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-space-md pt-4 sm:pt-space-lg w-full max-w-2xl border-t border-surface-container-high">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">groups</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-title-md text-xs sm:text-sm text-primary font-bold leading-tight">15 a 18</span>
                  <span className="font-label-xs text-[10px] sm:text-label-xs text-on-surface-variant uppercase tracking-wider">
                    Personas por clase · Grupos reducidos
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">fitness_center</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-title-md text-xs sm:text-sm text-primary font-bold leading-tight">Todos los Niveles</span>
                  <span className="font-label-xs text-[10px] sm:text-label-xs text-on-surface-variant uppercase tracking-wider">
                    Desde cero hasta avanzados
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-title-md text-xs sm:text-sm text-primary font-bold leading-tight">Seguro Incluido</span>
                  <span className="font-label-xs text-[10px] sm:text-label-xs text-on-surface-variant uppercase tracking-wider">
                    Accidentes personales exclusivo acrobacias en tela
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
