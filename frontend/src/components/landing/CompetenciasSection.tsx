import React from 'react';
import competenciaImg from '../../assets/images/competencia-profe-vicky.jpg';
import { VULPIARE_PHONE } from '../../constants/config';

export const CompetenciasSection: React.FC = () => {
  return (
    <section
      className="w-full py-10 sm:py-16 lg:py-space-3xl bg-surface-container-low overflow-hidden scroll-mt-20 border-t border-surface-container/60"
      id="competencias"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-margin">
        {/* Encabezado Principal */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-secondary-fixed/60 border border-secondary-fixed text-primary text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-3 sm:mb-4 shadow-xs max-w-full overflow-hidden">
            <span className="material-symbols-outlined text-[15px] sm:text-[16px] text-primary shrink-0">emoji_events</span>
            <span className="truncate">Certamen Flavio Mendoza · Trayectoria Deportiva &amp; Artística</span>
          </div>

          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-headline-lg text-primary tracking-tight font-bold leading-tight">
            Competencias Flavio Mendoza
          </h2>

          <p className="font-headline-sm text-xs sm:text-sm md:text-base text-primary italic font-medium mt-3 sm:mt-4 leading-relaxed px-1 sm:px-0">
            “En Vulpiare creemos que cada competencia es mucho más que un resultado: es una oportunidad para crecer, superarnos y llevar todo nuestro trabajo, pasión y dedicación a la pista.”
          </p>

          <p className="font-body-md text-[11px] sm:text-xs md:text-sm text-on-surface-variant mt-2.5 sm:mt-3 leading-relaxed px-1 sm:px-0">
            Durante 2025 y 2026, formamos parte de las competencias de Flavio Mendoza, participando en las Selectivas de Mendoza y en las Finales Nacionales de Buenos Aires, representando a nuestra academia en distintas categorías y niveles.
          </p>
        </div>

        {/* Grid de Contenido Principal (Columna foto izquierda, Columna resultados derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-start mt-8 sm:mt-10 lg:mt-12">
          
          {/* Columna Izquierda: Foto Destacada y Tarjeta de Representación */}
          <div className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-5">
            {/* Tarjeta con Foto */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-surface-container bg-surface-container aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] max-h-[500px] sm:max-h-none w-full">
              <img
                alt="Profe Vicky en competencia de telas aéreas Flavio Mendoza con trofeo de Campeona"
                className="w-full h-full object-cover object-center"
                src={competenciaImg}
              />

              {/* Badge superior sobre foto */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-surface-container-lowest/95 backdrop-blur-md shadow-md text-primary text-[10px] sm:text-xs font-bold tracking-wide uppercase border border-surface-container z-10">
                <span className="material-symbols-outlined text-[14px] sm:text-[15px] text-secondary">emoji_events</span>
                <span>Certamen Flavio Mendoza</span>
              </div>

              {/* Gradient overlay inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent pointer-events-none" />

              {/* Card flotante inferior sobre la foto */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-surface-container-lowest/95 backdrop-blur-md shadow-lg border border-surface-container flex items-center justify-between gap-2 sm:gap-3 z-10">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary-fixed/80 text-primary flex items-center justify-center font-bold shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-[18px] sm:text-[22px]">military_tech</span>
                  </div>
                  <div>
                    <h4 className="font-title-md text-[11px] sm:text-xs md:text-sm text-primary font-bold leading-tight">
                      Profe Vicky · Campeona Nacional
                    </h4>
                    <p className="font-body-sm text-[10px] sm:text-[11px] md:text-xs text-on-surface-variant mt-0.5">
                      1.º Puesto Premium &amp; Mejor Coach
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-secondary-fixed text-primary font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-xs shrink-0">
                  ORO
                </span>
              </div>
            </div>

            {/* Tarjeta Inferior de Representación */}
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-surface-container-lowest shadow-sm border border-surface-container flex items-center gap-3 sm:gap-3.5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary-fixed/70 text-primary flex items-center justify-center shrink-0 shadow-xs">
                <span className="material-symbols-outlined text-[18px] sm:text-[20px]">verified</span>
              </div>
              <div>
                <h4 className="font-title-md text-xs sm:text-sm text-primary font-bold">
                  Representación Provincial y Federal
                </h4>
                <p className="font-body-sm text-[10px] sm:text-[11px] md:text-xs text-on-surface-variant mt-0.5">
                  Mendoza y Buenos Aires en categorías Elite y Premium
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjetas de Resultados 2025 y 2026 */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-5">
            
            {/* CARD 1: 2025 · Selectiva Mendoza */}
            <div className="p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-surface-container-lowest shadow-sm border border-surface-container flex flex-col gap-2.5 sm:gap-3 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-bold text-[11px] sm:text-xs">
                  2025
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-secondary uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[13px] sm:text-[14px]">star</span>
                  <span>Selectiva Mendoza</span>
                </span>
              </div>

              <div>
                <h3 className="font-headline-sm text-sm sm:text-base md:text-lg text-primary font-bold">
                  2025 · Selectiva Mendoza
                </h3>
                <p className="font-body-sm text-[11px] sm:text-xs md:text-sm text-on-surface-variant mt-0.5">
                  Grandes desempeños que abrieron el pase al certamen federal:
                </p>
              </div>

              <ul className="space-y-1.5 sm:space-y-2 mt-1 text-xs sm:text-sm text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="text-sm sm:text-base">🥇</span>
                  <span><strong className="font-bold text-primary">1.º puesto</strong> en Elite Juvenil B</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sm sm:text-base">🥉</span>
                  <span><strong className="font-bold text-primary">3.º puesto</strong> en Elite Juvenil A</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sm sm:text-base">🥉</span>
                  <span><strong className="font-bold text-primary">3.º puesto</strong> en Premium Profesora</span>
                </li>
              </ul>
            </div>

            {/* CARD 2: 2025 · Finales Nacionales en Buenos Aires */}
            <div className="p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-surface-container-lowest shadow-sm border border-surface-container flex flex-col gap-2.5 sm:gap-3 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-bold text-[11px] sm:text-xs">
                  2025
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-secondary uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[14px] sm:text-[15px]">emoji_events</span>
                  <span>Finales Nacionales</span>
                </span>
              </div>

              <div>
                <h3 className="font-headline-sm text-sm sm:text-base md:text-lg text-primary font-bold">
                  2025 · Finales Nacionales en Buenos Aires
                </h3>
                <p className="font-body-sm text-[11px] sm:text-xs md:text-sm text-on-surface-variant mt-0.5">
                  Consagración en el mayor escenario competitivo de la disciplina:
                </p>
              </div>

              <ul className="space-y-1.5 sm:space-y-2 mt-1 text-xs sm:text-sm text-on-surface">
                <li className="flex items-start gap-2">
                  <span className="text-sm sm:text-base leading-none">🏆</span>
                  <span>
                    <strong className="font-bold text-primary">1.º puesto en Premium Profesora</strong> — ¡Consagrando a nuestra Profe Vicky como Campeona! 🥇🏅
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sm sm:text-base">⭐</span>
                  <span><strong className="font-bold text-primary">4.º puesto</strong> en Elite Juvenil A</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sm sm:text-base">⭐</span>
                  <span><strong className="font-bold text-primary">5.º puesto</strong> en Elite Juvenil B</span>
                </li>
                <li className="flex items-start gap-2 pt-2 border-t border-surface-container/60">
                  <span className="text-sm sm:text-base leading-none">✨</span>
                  <span className="text-[11px] sm:text-xs md:text-sm text-on-surface-variant leading-relaxed">
                    <strong className="font-bold text-primary">Menciones especiales</strong> por composición, creatividad, coreografía e interpretación de las presentaciones, destacando no solo el resultado deportivo, sino la calidad artística de cada propuesta. ✨📣
                  </span>
                </li>
              </ul>
            </div>

            {/* CARD 3: 2026 · Selectiva Mendoza */}
            <div className="p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-surface-container-lowest shadow-sm border border-surface-container flex flex-col gap-2.5 sm:gap-3 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-bold text-[11px] sm:text-xs">
                  2026
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-secondary uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[13px] sm:text-[14px]">star</span>
                  <span>Selectiva Mendoza</span>
                </span>
              </div>

              <div>
                <h3 className="font-headline-sm text-sm sm:text-base md:text-lg text-primary font-bold">
                  2026 · Selectiva Mendoza
                </h3>
                <p className="font-body-sm text-[11px] sm:text-xs md:text-sm text-on-surface-variant mt-0.5">
                  Consolidación técnica, podios y máximos reconocimientos:
                </p>
              </div>

              <ul className="space-y-1.5 sm:space-y-2 mt-1 text-xs sm:text-sm text-on-surface">
                <li className="flex items-center gap-2">
                  <span className="text-sm sm:text-base">🥇</span>
                  <span><strong className="font-bold text-primary">1.º puesto</strong> en Elite Adulto 🏅</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sm sm:text-base">🌟</span>
                  <span><strong className="font-bold text-primary">Reconocimiento al Mejor Puntaje</strong> de toda la Selectiva ☀️</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sm sm:text-base">🥈</span>
                  <span><strong className="font-bold text-primary">2.º puesto</strong> en Premium Juvenil B 🥈</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sm sm:text-base">🥈</span>
                  <span><strong className="font-bold text-primary">2.º puesto</strong> en Dúo Adulto Premium 🥈</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sm sm:text-base">👑</span>
                  <span><strong className="font-bold text-primary">Reconocimiento a Profe Vicky</strong> como Mejor Coach 🥇👑</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Tarjeta Inferior Ancha de Cierre y Consulta por WhatsApp */}
        <div className="mt-8 sm:mt-10 lg:mt-12 p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-secondary-fixed/20 border border-secondary-fixed/50 shadow-sm flex flex-col gap-4 sm:gap-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-xl sm:rounded-2xl bg-secondary-fixed text-primary flex items-center justify-center shrink-0 shadow-xs mt-0.5">
              <span className="material-symbols-outlined text-[20px] sm:text-[24px]">favorite</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-base sm:text-lg lg:text-xl text-primary font-bold">
                La pasión detrás de cada podio
              </h3>
              <p className="font-body-md text-xs sm:text-sm text-primary/90 italic leading-relaxed mt-1.5 sm:mt-2">
                “Cada uno de estos logros es el resultado de horas de entrenamiento, dedicación, creatividad, compañerismo y muchísimo amor por la acrobacia aérea. Para nosotras, competir significa mucho más que subir al podio: significa animarnos a crear, expresarnos, superarnos y llevar a escena todo lo que construimos juntas durante el año. 💜🌿”
              </p>
            </div>
          </div>

          <div className="border-t border-secondary-fixed/40 pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4">
            <p className="text-[11px] sm:text-xs md:text-sm text-on-surface-variant text-center sm:text-left font-medium max-w-2xl">
              Tanto para el camino recreativo como para proyección escénica o competitiva, entrená con Victoria en grupos de 15 a 18 personas.
            </p>
            <a
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-primary text-on-primary font-bold text-[11px] sm:text-xs tracking-wider uppercase shadow-md hover:bg-primary/95 active:scale-98 transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0 text-center"
              href={`https://wa.me/${VULPIARE_PHONE}?text=Hola%20Victoria,%20quisiera%20consultar%20sobre%20las%20clases%20y%20el%20equipo%20de%20acrobacias%20a%C3%A9reas.`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">chat</span>
              <span>CONSULTAR A VICTORIA POR WHATSAPP</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompetenciasSection;
