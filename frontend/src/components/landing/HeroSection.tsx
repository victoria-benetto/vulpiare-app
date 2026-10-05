import React from 'react';
import victoriaPoseImg from '../../assets/images/victoria-pose.jpg';
import logoImg from '../../assets/images/logo.png';
import { VULPIARE_PHONE } from '../../constants/config';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full pt-space-xl pb-space-3xl overflow-hidden bg-gradient-to-b from-surface via-surface-container-low to-surface scroll-mt-20" id="inicio">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[820px] h-[520px] bg-secondary-container/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-primary-fixed/25 rounded-full blur-2xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Columna Texto Hero */}
          <div className="lg:col-span-6 flex flex-col items-start gap-space-md z-10">
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-highest text-primary shadow-sm border border-secondary/20">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-xs text-label-xs uppercase tracking-widest text-primary font-bold">
                Acrobacias Aéreas en Tela · Profesora Victoria
              </span>
            </div>

            <h1 className="font-display-hero text-display-hero text-primary tracking-tight leading-tight">
              El arte de volar, <span className="italic font-normal text-secondary">fuerza</span> y expresión en tela
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Academia de acrobacias aéreas en tela para todas las edades dirigida por Victoria. Descubrí el placer de estar en el aire, ganar fuerza, flexibilidad y confianza corporal en un espacio cálido y profesional.
            </p>

            {/* Pill de no se necesita experiencia */}
            <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-2xl bg-secondary-fixed/70 border border-secondary-fixed-dim text-on-secondary-fixed">
              <span className="material-symbols-outlined text-secondary text-[20px]">stars</span>
              <span className="font-title-md text-[14px] font-bold">¡No se necesita experiencia previa, es para todos los niveles!</span>
            </div>

            {/* Botones CTA Hero */}
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs w-full sm:w-auto">
              <a
                className="px-space-xl py-space-md rounded-full bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider shadow-lg hover:bg-primary-container hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-space-xs w-full sm:w-auto"
                href={`https://wa.me/${VULPIARE_PHONE}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Agendar clase con Victoria</span>
              </a>
              <a
                className="px-space-lg py-space-md rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg uppercase tracking-wider shadow-sm hover:bg-surface-container hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-space-xs border border-outline-variant w-full sm:w-auto"
                href="#horarios"
              >
                <span>Ver Grilla de Horarios</span>
                <span className="material-symbols-outlined text-[18px] text-secondary">arrow_downward</span>
              </a>
            </div>

            {/* Métricas y Badges de Seguridad / Cupos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-lg w-full max-w-2xl border-t border-surface-container-high">
              <div className="flex items-start gap-space-xs">
                <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">groups</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-title-md text-primary font-bold leading-tight">15 a 18</span>
                  <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">
                    Personas por clase · Grupos reducidos
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-space-xs">
                <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">fitness_center</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-title-md text-primary font-bold leading-tight">Todos los Niveles</span>
                  <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">
                    Desde cero hasta avanzados
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-space-xs">
                <div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-title-md text-primary font-bold leading-tight">Seguro Incluido</span>
                  <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">
                    Accidentes personales exclusivo acrobacias en tela
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Visual Hero Media */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full aspect-[4/5] max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl bg-surface-container border border-surface-container-highest">
              <img
                alt="Acróbata en tela aérea en Vulpiare realizando figura en apertura con telas violetas - María Victoria Benetto"
                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700 ease-out"
                src={victoriaPoseImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              
              {/* Floating Badge Top Right */}
              <div className="absolute top-6 right-6 px-space-md py-space-xs rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-lg flex items-center gap-space-xs border border-surface-container">
                <span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
                <span className="font-label-xs text-label-xs text-primary uppercase font-bold tracking-wider">
                  Ciclo Activo 2026
                </span>
              </div>

              {/* Floating Pill Bottom Left */}
              <div className="absolute bottom-6 left-6 right-6 p-space-md rounded-2xl bg-surface-container-lowest/95 backdrop-blur-md shadow-xl flex items-center justify-between border border-surface-container">
                <div className="flex items-center gap-space-sm">
                  <img
                    alt="Isotipo Vulpiare"
                    className="w-11 h-11 rounded-full object-contain border border-surface-container-highest"
                    src={logoImg}
                  />
                  <div>
                    <h4 className="font-title-md text-title-md text-primary leading-tight">Seguridad &amp; Técnica Aérea</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">Colchones de impacto y telas de alta resistencia</p>
                  </div>
                </div>
                <a
                  className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-primary hover:bg-secondary hover:text-on-secondary transition-colors"
                  href={`https://wa.me/${VULPIARE_PHONE}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Consultar a Victoria"
                >
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
