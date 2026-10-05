import React from 'react';

const MUESTRA_2023_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuA8xcH3G_ua_4pgMqacHafTgJkAcRkRzs2HRHUbDe8eXC0EZgGLP3GgoFcQXDIlu5ncif1USJTZNyv98igScTQ_bS1sT54TY9dPswsqIezXLssK-CeEtHctY8TD7IZTCD7PxcdH0nSItNxIMrOIFo1k2mVOnRfB9el_XiPAySyDqv4sIcCq_yzKm7LBp8ufvwhaXsobwoq-6QJbk7dyNo06C3xlFSLCg4gMCw9Ei0McvODBd1xM4BFH";
const MUESTRA_2024_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuDG4JP-0hyjlXzFmq7KsSk6vmaIr0Mub8ewjyqZcdZYTlqXinOZvpiP_XfE4l1JNYv1MOaD1_crgLz_DITcwajve7U8r_HxWAT-GwvB_1uHm99jaTBBWPsqO2b6ka4AL12O7ePD9kGEwhP37khjP1u485Dbj5jf3t0Y-idAM3iJDT38jMO7nuHP2LMw31R94qdvza-JseZ4xvNPaUz1B55gbjJ3stUufejA-6QoigrkW-OgVpb8ZVpk";
const MUESTRA_2025_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAgjhJpqRfuBmAOOP_9jCwoB3EBryWrlYBo449uNxC39Kko4S7a4U0MvuViUyEu7x3rQVEPpdMLoG3BBcZ6Ne6ZwpLrc5DDdYHnjlSwTSFhj6fYA5v3QrNhsGuqT1N5LfmqUZc_bYiS91G0Dv0dKeh3oixTnMvqqv-mG_w04EjBTpwLBAEcp3DLWBQL2JdLT0c1mEN_8QWzg3S9VQqG2UBXkS1RJTB324N3rwqo0LRR0nQ65yEIMiNG";

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Card 1: 2023 */}
          <div className="flex flex-col rounded-3xl overflow-hidden bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 border border-surface-container-high group">
            <div className="relative aspect-[4/3] overflow-hidden bg-primary-container/20">
              <img
                alt="Muestra Anual 2023 · Teatro & Luces"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={MUESTRA_2023_IMAGE}
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
                  <h3 className="font-headline-sm text-headline-sm text-primary">Muestra Anual 2023 · Teatro &amp; Luces</h3>
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

          {/* Card 2: 2024 */}
          <div className="flex flex-col rounded-3xl overflow-hidden bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 border border-surface-container-high group">
            <div className="relative aspect-[4/3] overflow-hidden bg-primary-container/20">
              <img
                alt="Muestra 2024 · Encuentro en Sala"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={MUESTRA_2024_IMAGE}
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
                  <h3 className="font-headline-sm text-headline-sm text-primary">Muestra 2024 · Encuentro en Sala</h3>
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

          {/* Card 3: 2025 */}
          <div className="flex flex-col rounded-3xl overflow-hidden bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 border-2 border-secondary/40 group">
            <div className="relative aspect-[4/3] overflow-hidden bg-primary-container/20">
              <img
                alt="Gala 2025 · Próxima Edición"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={MUESTRA_2025_IMAGE}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-space-sm py-space-xs rounded-full bg-primary text-on-primary font-label-xs text-label-xs uppercase font-bold tracking-wider">
                  Edición 2025
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-on-primary">
                <span className="font-title-md text-title-md font-bold">Próxima Edición</span>
                <span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-[11px] font-bold uppercase">
                  En Preparación
                </span>
              </div>
            </div>
            <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Gala 2025 · Próxima Edición</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold">2025</span>
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
        </div>
      </div>
    </section>
  );
};
