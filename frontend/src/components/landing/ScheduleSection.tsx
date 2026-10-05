import React, { useState } from 'react';
import { VULPIARE_PHONE } from '../../constants/config';

export const ScheduleSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'manana' | 'tarde'>('all');

  const scheduleData = [
    {
      id: 'ja-manana',
      turno: 'manana',
      grupo: 'Jóvenes / Adultos (J/A)',
      subtitulo: 'Opción Matutina',
      dias: 'Lunes y Miércoles',
      horario: '08:00 a 10:00 hs',
      turnoEtiqueta: 'Turno Mañana',
      nivel: 'Todos los niveles',
      cupo: 'Reducido: 15 a 18 pers.',
      consultarText: 'J/A Mañana',
    },
    {
      id: 'n-tarde',
      turno: 'tarde',
      grupo: 'Niñas (N)',
      subtitulo: 'Infancias (desde 6 años)',
      dias: 'Lunes, Miércoles y Viernes',
      horario: '16:45 a 18:00 hs',
      turnoEtiqueta: 'Turno Tarde',
      nivel: 'Sin experiencia previa',
      cupo: 'Reducido: 15 a 18 pers.',
      consultarText: 'Grupo Niñas',
    },
    {
      id: 'ja-tarde',
      turno: 'tarde',
      grupo: 'Jóvenes / Adultos (J/A)',
      subtitulo: 'Opción Vespertina',
      dias: 'Martes y Jueves',
      horario: '16:00 a 18:00 hs',
      turnoEtiqueta: 'Turno Tarde',
      nivel: 'Todos los niveles',
      cupo: 'Reducido: 15 a 18 pers.',
      consultarText: 'J/A Tarde',
    },
    {
      id: 'aa-tarde',
      turno: 'tarde',
      grupo: 'Adolescentes / Adultos (A/A)',
      subtitulo: 'Fuerza, Figuras y Secuencias',
      dias: 'Lunes, Miércoles y Viernes',
      horario: '17:30 a 19:00 hs',
      turnoEtiqueta: 'Turno Tarde',
      nivel: 'Todos los niveles',
      cupo: 'Reducido: 15 a 18 pers.',
      consultarText: 'A/A Tarde',
    },
  ];

  const filteredSchedule = activeFilter === 'all'
    ? scheduleData
    : scheduleData.filter((item) => item.turno === activeFilter);

  return (
    <section className="w-full py-space-3xl bg-surface scroll-mt-20" id="horarios">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <span className="font-label-xs text-label-xs uppercase tracking-widest text-secondary font-bold">
              Cronograma Oficial 2025
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-space-xs">
              Grilla de Horarios de Acrobacias en Tela
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              Elegí tu turno. Grupos reducidos de 15 a 18 personas para acompañamiento continuo guiado por Victoria.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-space-xs p-1 rounded-full bg-surface-container-high self-start md:self-auto">
            <button
              className={`px-space-md py-space-xs rounded-full font-label-md text-label-md uppercase tracking-wider transition-all font-bold ${
                activeFilter === 'all'
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-transparent text-on-surface-variant hover:text-primary'
              }`}
              onClick={() => setActiveFilter('all')}
              type="button"
            >
              Todos
            </button>
            <button
              className={`px-space-md py-space-xs rounded-full font-label-md text-label-md uppercase tracking-wider transition-all font-bold ${
                activeFilter === 'manana'
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-transparent text-on-surface-variant hover:text-primary'
              }`}
              onClick={() => setActiveFilter('manana')}
              type="button"
            >
              Mañana
            </button>
            <button
              className={`px-space-md py-space-xs rounded-full font-label-md text-label-md uppercase tracking-wider transition-all font-bold ${
                activeFilter === 'tarde'
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-transparent text-on-surface-variant hover:text-primary'
              }`}
              onClick={() => setActiveFilter('tarde')}
              type="button"
            >
              Tarde
            </button>
          </div>
        </div>

        {/* Tabla Elegante Responsiva para Desktop */}
        <div className="hidden md:block w-full overflow-hidden rounded-3xl bg-surface-container-lowest shadow-md border border-surface-container">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high text-primary font-label-md text-label-md uppercase tracking-wider">
                  <th className="py-space-md px-space-lg">Grupo / Edad</th>
                  <th className="py-space-md px-space-md">Días</th>
                  <th className="py-space-md px-space-md">Horario</th>
                  <th className="py-space-md px-space-md">Turno</th>
                  <th className="py-space-md px-space-md">Nivel &amp; Cupo</th>
                  <th className="py-space-md px-space-lg text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container text-on-surface font-body-sm text-body-sm">
                {filteredSchedule.map((item) => (
                  <tr key={item.id} className="hover:bg-surface-container-low transition-colors">
                    <td className="py-space-md px-space-lg">
                      <div className="flex items-center gap-space-xs">
                        <span className={`w-2.5 h-2.5 rounded-full ${item.turno === 'manana' ? 'bg-secondary' : 'bg-primary'}`} />
                        <span className="font-title-md text-title-md text-primary font-bold">{item.grupo}</span>
                      </div>
                      <span className="text-xs text-on-surface-variant block mt-0.5">{item.subtitulo}</span>
                    </td>
                    <td className="py-space-md px-space-md font-semibold text-on-surface">{item.dias}</td>
                    <td className="py-space-md px-space-md font-bold text-primary text-base">{item.horario}</td>
                    <td className="py-space-md px-space-md">
                      <span className="px-space-sm py-1 rounded-full bg-surface-container-high text-primary font-bold text-xs">
                        {item.turnoEtiqueta}
                      </span>
                    </td>
                    <td className="py-space-md px-space-md">
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-[#2e7d32]">{item.nivel}</span>
                        <span className="text-[11px] text-on-surface-variant">{item.cupo}</span>
                      </div>
                    </td>
                    <td className="py-space-md px-space-lg text-right">
                      <div className="flex items-center justify-end gap-2">
                        <a
                          className="px-space-md py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs uppercase tracking-wider font-bold hover:bg-secondary-container transition-all"
                          href={`https://wa.me/${VULPIARE_PHONE}?text=Hola%20Victoria,%20consulto%20cupo%20para%20${encodeURIComponent(item.consultarText)}`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Consultar Cupo
                        </a>
                        <a
                          className="px-space-md py-space-xs rounded-full bg-primary text-on-primary font-label-xs text-label-xs uppercase tracking-wider font-bold hover:bg-primary-container transition-all"
                          href={`https://wa.me/${VULPIARE_PHONE}?text=Hola%20Victoria,%20quiero%20agendar%20prueba%20para%20${encodeURIComponent(item.consultarText)}`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Agendar Prueba
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tarjetas Móviles para Pantallas Pequeñas */}
        <div className="md:hidden flex flex-col gap-3">
          {filteredSchedule.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-surface-container-lowest shadow-[0_4px_16px_-2px_rgba(74,40,109,0.05)] flex flex-col gap-2 border border-surface-container"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs font-bold uppercase tracking-wider">
                  {item.turnoEtiqueta}
                </span>
                <span className="font-label-xs text-label-xs text-outline">{item.cupo}</span>
              </div>
              <div className="flex justify-between items-baseline">
                <h4 className="font-title-md text-title-md text-primary font-bold">{item.grupo}</h4>
                <span className="font-title-md text-title-md text-secondary font-semibold">{item.horario}</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="font-body-sm text-body-sm text-on-surface-variant">{item.dias}</span>
                <a
                  className="px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-label-xs text-label-xs font-semibold hover:bg-primary-container transition-colors"
                  href={`https://wa.me/${VULPIARE_PHONE}?text=Hola%20Victoria,%20quiero%20agendar%20prueba%20para%20${encodeURIComponent(item.consultarText)}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Agendar con Victoria
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Callout debajo de horarios */}
        <div className="mt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md p-space-md rounded-2xl bg-surface-container border border-secondary/15">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary text-[26px]">chat</span>
            <span className="font-body-md text-body-md text-on-surface">
              ¿Tenés dudas sobre cuál turno es mejor para tu rutina? Hablá directo con Victoria.
            </span>
          </div>
          <a
            className="px-space-lg py-space-xs rounded-full bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-all flex items-center gap-1 font-semibold whitespace-nowrap"
            href={`https://wa.me/${VULPIARE_PHONE}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>Consultar a Victoria (+54 9 261 668-8994)</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};
