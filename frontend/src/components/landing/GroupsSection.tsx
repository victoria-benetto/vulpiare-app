import React from 'react';
import { VULPIARE_PHONE } from '../../constants/config';

const NINAS_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuD7xI5l2Y6_PSl9123zkTzWMh7z7iVoN6u9ey0wfKrxX2SIUnhyAaaCGiPGjL30TGQiFJzN08uczC0y6X6iJdabLp4LgRUWVggHNtYQuOS9ivkmTJCzH4yn8X_nSDpq82qhoRM5bFJqLVc8d9uUq9qx_F8x1U4v77QNY6PtMh4G4XK7465vxtslrxBPXgQ2C264WstQODL4YmfTK4VyFCbgSJmO6iq-ulOvqulbt8YVyKw753Pd-3Cf";
const JOVENES_ADULTOS_IMAGE = "https://lh3.googleusercontent.com/aida/AEtjO1VJ9UBcZvHDr-l4ioIHnKbsvYj-aPh-FLudUB0uyjSmlOP6zbXdtNok6nQ0D4texJnT0L-9CNaF0V09I80fbnJVPm3B5SIBc-2TWQtLGuwoCLiQFpLlL3UvNMmJlX_pxQl5A4D3YQaTBo-zYWyFAooqFBTQo2IaO4uO0CZ6-pLg53J5T_-9p5ftcVmX-Gop7IFVmEH6r3zk_rbWPiesNTzdtaD1wjXi4liUfZnZvNWCp0F2LRMJkNvuSZc";
const ADOLES_ADULTOS_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuDFH3QA2k_ythGKjFrMQJzc3maTwuGKBdooRz1594ukt_BPcb5BDzAhP8CSJb5b7tNcF16vimJRgJGNp2XWgaLRv5ohPoThcAEv-1e-m9ic_f3Ns1c8o9tlLzIVe-7o5gg58XqT-JDk-PimJdg-MYOvgMux8c3PAAVIHi_o72XJ01ZEs6vNmfQt3cOOdJiH8CSyND_6bqSiD7z-NC6qCLD-7VBl6Ja9wfe_VsE2CZUJ6Pu_r3zXLJnk";

export const GroupsSection: React.FC = () => {
  return (
    <section className="w-full py-space-3xl bg-surface-container-low scroll-mt-20" id="grupos">
      <div id="clases" className="scroll-mt-20" />
      <div className="max-w-7xl mx-auto px-margin">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-2xl">
          <span className="font-label-xs text-label-xs uppercase tracking-widest text-secondary font-bold mb-space-xs">
            Nuestra Propuesta Exclusiva
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Clases de Acrobacias Aéreas en Tela
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
            Dedicación 100% a la disciplina aérea. Diseñamos 3 grupos según etapa e intereses, con atención personalizada y metodología progresiva desde la primera clase.
          </p>
        </div>

        {/* Grid de 3 Tarjetas de Grupos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* GRUPO 1: NIÑAS (N) */}
          <div className="flex flex-col rounded-3xl overflow-hidden bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 border border-surface-container-high group">
            <div className="relative h-60 overflow-hidden bg-primary-container/20">
              <img
                alt="Niñas en clase de telas aéreas jugando y realizando trepadas seguras"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={NINAS_IMAGE}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-space-sm py-space-xs rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-xs text-label-xs uppercase font-bold tracking-wider">
                  Grupo Niñas (N)
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-on-primary">
                <span className="font-title-md text-title-md font-bold">Desde los 6 años</span>
                <span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-[11px] font-bold uppercase">
                  Sin experiencia previa
                </span>
              </div>
            </div>
            <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Niñas (N)</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-surface-container text-secondary font-bold">
                    15 - 18 alumnas
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Enfoque lúdico y formativo. Aprenden trepadas, figuras básicas de piso y altura, desarrollo de fuerza postural, flexibilidad, coordinación motriz y el disfrute del juego en las telas.
                </p>
                <div className="p-space-sm rounded-2xl bg-surface-container-low border border-surface-container flex flex-col gap-1">
                  <div className="flex items-center gap-space-xs text-primary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-secondary text-[18px]">calendar_today</span>
                    <span>Lunes, Miércoles y Viernes</span>
                  </div>
                  <div className="flex items-center gap-space-xs text-secondary font-title-md text-title-md font-bold">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                    <span>16:45 a 18:00 hs</span>
                  </div>
                </div>
              </div>
              <a
                className="w-full py-space-sm px-space-md rounded-full bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md uppercase tracking-wider text-center transition-all font-semibold flex items-center justify-center gap-1"
                href={`https://wa.me/${VULPIARE_PHONE}?text=Hola%20Victoria,%20quisiera%20consultar%20por%20el%20Grupo%20Ni%C3%B1as`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Consultar a Victoria</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* GRUPO 2: JÓVENES / ADULTOS (J/A) */}
          <div className="flex flex-col rounded-3xl overflow-hidden bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 border-2 border-secondary/40 group relative">
            <div className="absolute -top-1 right-6 z-20">
              <span className="px-space-md py-0.5 rounded-b-xl bg-primary text-on-primary font-label-xs text-label-xs uppercase font-bold tracking-widest shadow-md">
                Doble Turno
              </span>
            </div>
            <div className="relative h-60 overflow-hidden bg-primary-container/20">
              <img
                alt="Adultos y jóvenes entrenando fuerza en telas aéreas e inversiones"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={JOVENES_ADULTOS_IMAGE}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-space-sm py-space-xs rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-xs text-label-xs uppercase font-bold tracking-wider">
                  Grupo Jóvenes / Adultos (J/A)
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-on-primary">
                <span className="font-title-md text-title-md font-bold">Iniciación &amp; Técnica</span>
                <span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-[11px] font-bold uppercase">
                  Todos los niveles
                </span>
              </div>
            </div>
            <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Jóvenes / Adultos (J/A)</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-surface-container text-secondary font-bold">
                    15 - 18 cupos
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Acondicionamiento físico específico para la tela, inversiones controladas, armado de nudos, figuras en altura y secuencias coreográficas fluidas. Ganás tono muscular y confianza paso a paso.
                </p>
                <div className="p-space-sm rounded-2xl bg-surface-container-low border border-surface-container flex flex-col gap-2">
                  <div>
                    <span className="font-label-xs text-[11px] text-secondary font-bold uppercase">Opción Mañana:</span>
                    <p className="font-title-md text-title-md text-primary font-bold">Lunes y Miércoles · 08:00 a 10:00 hs</p>
                  </div>
                  <div className="border-t border-surface-container pt-1">
                    <span className="font-label-xs text-[11px] text-secondary font-bold uppercase">Opción Tarde:</span>
                    <p className="font-title-md text-title-md text-primary font-bold">Martes y Jueves · 16:00 a 18:00 hs</p>
                  </div>
                </div>
              </div>
              <a
                className="w-full py-space-sm px-space-md rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider text-center transition-all font-semibold flex items-center justify-center gap-1 shadow-md"
                href={`https://wa.me/${VULPIARE_PHONE}?text=Hola%20Victoria,%20quisiera%20consultar%20por%20el%20Grupo%20J%C3%B3venes%20/%20Adultos`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Consultar a Victoria</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* GRUPO 3: ADOLESCENTES / ADULTOS (A/A) */}
          <div className="flex flex-col rounded-3xl overflow-hidden bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 border border-surface-container-high group">
            <div className="relative h-60 overflow-hidden bg-primary-container/20">
              <img
                alt="Acróbata realizando figura de suspensión en tela aérea con postura elegante"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={ADOLES_ADULTOS_IMAGE}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-space-sm py-space-xs rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-primary font-label-xs text-label-xs uppercase font-bold tracking-wider">
                  Grupo A/A
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-on-primary">
                <span className="font-title-md text-title-md font-bold">Fuerza &amp; Expresión</span>
                <span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-[11px] font-bold uppercase">
                  Todos los niveles
                </span>
              </div>
            </div>
            <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
              <div className="space-y-space-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-primary">Adolescentes / Adultos (A/A)</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-surface-container text-secondary font-bold">
                    15 - 18 alumnas
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Fuerza de agarre, flexibilidad aplicada, figuras combinadas, confianza en la altura, caídas controladas y secuencias fluidas que unen potencia física y arte en suspensión.
                </p>
                <div className="p-space-sm rounded-2xl bg-surface-container-low border border-surface-container flex flex-col gap-1">
                  <div className="flex items-center gap-space-xs text-primary font-label-md text-label-md">
                    <span className="material-symbols-outlined text-secondary text-[18px]">calendar_today</span>
                    <span>Lunes, Miércoles y Viernes</span>
                  </div>
                  <div className="flex items-center gap-space-xs text-secondary font-title-md text-title-md font-bold">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                    <span>17:30 a 19:00 hs</span>
                  </div>
                </div>
              </div>
              <a
                className="w-full py-space-sm px-space-md rounded-full bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-md text-label-md uppercase tracking-wider text-center transition-all font-semibold flex items-center justify-center gap-1"
                href={`https://wa.me/${VULPIARE_PHONE}?text=Hola%20Victoria,%20quisiera%20consultar%20por%20el%20Grupo%20Adolescentes%20/%20Adultos`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Consultar a Victoria</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        {/* Banner Informativo */}
        <div className="mt-space-xl p-space-lg rounded-3xl bg-surface-container-high shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md border border-secondary/20">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-[24px]">verified</span>
            </div>
            <div>
              <h4 className="font-title-lg text-title-lg text-primary">¿Nunca hiciste telas aéreas?</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                No necesitás haber entrenado antes ni tener fuerza previa: aprendés desde cero con Victoria con progresión cuidada y colchones de seguridad.
              </p>
            </div>
          </div>
          <a
            className="px-space-lg py-space-sm rounded-full bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider whitespace-nowrap shadow-md hover:bg-primary-container transition-all flex items-center gap-2"
            href={`https://wa.me/${VULPIARE_PHONE}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Escribirle a Victoria por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
