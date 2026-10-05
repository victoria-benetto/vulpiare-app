import React from 'react';
import victoriaSplitImg from '../../assets/images/victoria-split.jpg';
import adultSilksImg from '../../assets/images/adult-silks.png';
import victoriaPoseImg from '../../assets/images/victoria-pose.jpg';
import scheduleSilksImg from '../../assets/images/schedule-silks.png';

export const MuestrasSection: React.FC = () => {
  return (
    <section className="w-full py-space-3xl bg-surface scroll-mt-20" id="muestras">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-2xl">
          <span className="font-label-xs text-label-xs uppercase tracking-widest text-secondary font-bold mb-space-xs">
            Presentaciones y Muestras Anuales
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Muestras Artísticas Vulpiare
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
            El escenario donde celebramos el avance, la expresión corporal y el vuelo de cada alumna. Cada año compartimos una experiencia escénica cuidada y emocionante en salas teatrales y de entrenamiento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {/* Card 1: Muestra 2023 */}
          <div className="flex flex-col rounded-3xl overflow-hidden bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 border border-surface-container-high group">
            <div className="relative aspect-[4/3] overflow-hidden bg-primary-container/20">
              <img
                alt="Muestra 2023 · Teatro & Luces"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={victoriaSplitImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-space-sm py-space-xs rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-xs text-label-xs uppercase font-bold tracking-wider">
                  Edición 2023
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-on-primary">
                <span className="font-title-md text-title-md font-bold">Teatro &amp; Luces</span>
                <span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-[11px] font-bold uppercase">
                  Teatro
                </span>
              </div>
            </div>
            <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Muestra 2023</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-surface-container text-secondary font-bold">2023</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Puesta en escena en sala teatral con iluminación artística, solos y dúos coreográficos en telas aéreas.
                </p>
              </div>
              <div className="pt-space-xs border-t border-surface-container flex items-center justify-between text-secondary font-label-md text-label-md">
                <span className="flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[18px]">theater_comedy</span> Gala Anual
                </span>
                <span className="text-xs text-on-surface-variant">Registro Fotográfico</span>
              </div>
            </div>
          </div>

          {/* Card 2: Muestra 2024 */}
          <div className="flex flex-col rounded-3xl overflow-hidden bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 border border-surface-container-high group">
            <div className="relative aspect-[4/3] overflow-hidden bg-primary-container/20">
              <img
                alt="Muestra 2024 · Encuentro en Sala"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={adultSilksImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-space-sm py-space-xs rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-xs text-label-xs uppercase font-bold tracking-wider">
                  Edición 2024
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-on-primary">
                <span className="font-title-md text-title-md font-bold">Encuentro en Sala</span>
                <span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-[11px] font-bold uppercase">
                  Comunidad
                </span>
              </div>
            </div>
            <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Muestra 2024</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-surface-container text-secondary font-bold">2024</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Presentación abierta para familias y comunidad, figuras sincronizadas y técnica aérea consciente.
                </p>
              </div>
              <div className="pt-space-xs border-t border-surface-container flex items-center justify-between text-secondary font-label-md text-label-md">
                <span className="flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[18px]">diversity_3</span> Dúos &amp; Ensambles
                </span>
                <span className="text-xs text-on-surface-variant">Estudio Abierto</span>
              </div>
            </div>
          </div>

          {/* Card 3: Muestra 2025 */}
          <div className="flex flex-col rounded-3xl overflow-hidden bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 border border-surface-container-high group">
            <div className="relative aspect-[4/3] overflow-hidden bg-primary-container/20">
              <img
                alt="Muestra 2025 · Gala Anual"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={victoriaPoseImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-space-sm py-space-xs rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-xs text-label-xs uppercase font-bold tracking-wider">
                  Edición 2025
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-on-primary">
                <span className="font-title-md text-title-md font-bold">Gala Anual</span>
                <span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-[11px] font-bold uppercase">
                  En Preparación
                </span>
              </div>
            </div>
            <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Muestra 2025</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-surface-container text-secondary font-bold">2025</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Preparación de nuevas secuencias y coreografías aéreas para el cierre del ciclo lectivo 2025.
                </p>
              </div>
              <div className="pt-space-xs border-t border-surface-container flex items-center justify-between text-secondary font-label-md text-label-md">
                <span className="flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[18px]">hotel_class</span> Ciclo Lectivo 2025
                </span>
                <span className="text-xs text-on-surface-variant">Diciembre 2025</span>
              </div>
            </div>
          </div>

          {/* Card 4: Muestra 2026 */}
          <div className="flex flex-col rounded-3xl overflow-hidden bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 border-2 border-secondary/40 group">
            <div className="relative aspect-[4/3] overflow-hidden bg-primary-container/20">
              <img
                alt="Muestra 2026 · Próximamente más información"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={scheduleSilksImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-space-sm py-space-xs rounded-full bg-primary text-on-primary font-label-xs text-label-xs uppercase font-bold tracking-wider">
                  Edición 2026
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-on-primary">
                <span className="font-title-md text-title-md font-bold">Próximamente</span>
                <span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-[11px] font-bold uppercase">
                  Próximamente
                </span>
              </div>
            </div>
            <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Muestra 2026</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold">2026</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Próximamente más información.
                </p>
              </div>
              <div className="pt-space-xs border-t border-surface-container flex items-center justify-between text-secondary font-label-md text-label-md">
                <span className="flex items-center gap-1 font-semibold">
                  <span className="material-symbols-outlined text-[18px]">auto_awesome</span> Próximo Ciclo
                </span>
                <span className="text-xs text-on-surface-variant">Próximamente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
