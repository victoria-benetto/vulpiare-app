import React from 'react';
import victoriaStretchImg from '../../assets/images/victoria-stretch.jpg';
import logoImg from '../../assets/images/logo.png';

export const SecuritySection: React.FC = () => {
  return (
    <section className="w-full py-space-3xl bg-surface-container-low overflow-hidden scroll-mt-20" id="seguridad">
      <div id="estudio" className="scroll-mt-20" />
      <div className="max-w-7xl mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          {/* Columna Izquierda: Imagen y Quote */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-surface-container border border-surface-container">
              <img
                alt="Profesora Victoria guiando una postura segura en telas aéreas"
                className="w-full h-full object-cover"
                src={victoriaStretchImg}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent" />
              <div className="absolute bottom-8 left-6 right-6 p-space-lg rounded-2xl bg-surface-container-lowest/90 backdrop-blur-md shadow-xl text-center border border-surface-container">
                <img
                  alt="Logo Vulpiare"
                  className="w-12 h-12 rounded-full mx-auto mb-2 object-contain shadow-sm"
                  src={logoImg}
                />
                <p className="font-headline-sm text-headline-sm text-primary italic leading-snug">
                  “Estar en el aire transforma tu cuerpo: ganás fuerza real, flexibilidad y la libertad de volar con seguridad.”
                </p>
                <span className="inline-block mt-space-sm font-label-xs text-label-xs uppercase tracking-widest text-secondary font-bold">
                  Victoria · Dirección Pedagógica Vulpiare
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Enfoque Exclusivo en Telas */}
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            <div>
              <span className="font-label-xs text-label-xs uppercase tracking-widest text-secondary font-bold">
                Seguridad y Pedagogía Aérea
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-space-xs">
                Una academia concebida para la acrobacia aérea en tela
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-md leading-relaxed">
                En Vulpiare nos especializamos de manera exclusiva en acrobacias aéreas en tela bajo la dirección de Victoria. Diseñamos un método pedagógico claro, amable y progresivo donde cada persona evoluciona a su tiempo, fortaleciendo brazos, core y piernas mientras incorpora figuras aéreas, llaves, nudos y caídas controladas.
              </p>
            </div>

            {/* 4 Pilares Fundamentales de Seguridad */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex items-start gap-space-sm border border-surface-container">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">groups</span>
                </div>
                <div>
                  <h4 className="font-title-md text-title-md text-primary font-bold">15 a 18 Alumnas por Clase</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Cupos rigurosamente limitados para que Victoria y el equipo docente supervisen cada subida y cada armado.
                  </p>
                </div>
              </div>

              <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex items-start gap-space-sm border border-surface-container">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">verified_user</span>
                </div>
                <div>
                  <h4 className="font-title-md text-title-md text-primary font-bold">Seguro de Accidentes Personales</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Cobertura médica y farmacéutica específica para acrobacias aéreas en cada clase, junto a colchonetas de alta densidad y anclajes certificados.
                  </p>
                </div>
              </div>

              <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex items-start gap-space-sm border border-surface-container">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">fitness_center</span>
                </div>
                <div>
                  <h4 className="font-title-md text-title-md text-primary font-bold">Fuerza &amp; Flexibilidad Consciente</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Entrenamiento complementario de agarre, abdomen, hombros y elongación para prevenir lesiones.
                  </p>
                </div>
              </div>

              <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex items-start gap-space-sm border border-surface-container">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]">psychology</span>
                </div>
                <div>
                  <h4 className="font-title-md text-title-md text-primary font-bold">Confianza en el Aire</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    Superamos miedos y vértigos con progresiones cerca del suelo antes de ganar altura.
                  </p>
                </div>
              </div>
            </div>

            {/* Misión y Visión */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
              <div className="p-space-lg rounded-3xl bg-surface shadow-sm flex flex-col justify-between border border-surface-container">
                <div>
                  <div className="flex items-center gap-space-xs text-primary mb-space-xs">
                    <span className="material-symbols-outlined text-[20px] text-secondary">flight_takeoff</span>
                    <span className="font-label-md text-label-md uppercase tracking-wider font-bold">Nuestra Misión</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Desmitificar que las telas aéreas son sólo para personas con experiencia previa. Acercar la acrobacia aérea a infancias, jóvenes y adultas en un entorno de respeto, afecto y rigor técnico.
                  </p>
                </div>
              </div>

              <div className="p-space-lg rounded-3xl bg-surface shadow-sm flex flex-col justify-between border border-surface-container">
                <div>
                  <div className="flex items-center gap-space-xs text-primary mb-space-xs">
                    <span className="material-symbols-outlined text-[20px] text-secondary">visibility</span>
                    <span className="font-label-md text-label-md uppercase tracking-wider font-bold">Nuestra Visión</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Consolidar en Mendoza un refugio de investigación corporal y expresión artística, donde el entrenamiento físico de alta precisión conviva en perfecta armonía con el disfrute y la comunidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
