import React from 'react';

interface MobileBottomBarProps {
  activeSection: string;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ activeSection }) => {
  const tabs = [
    { id: 'inicio', label: 'Inicio', href: '#inicio', icon: 'roofing' },
    { id: 'clases', label: 'Clases', href: '#clases', icon: 'sports_gymnastics' },
    { id: 'horarios', label: 'Horarios', href: '#horarios', icon: 'calendar_today' },
    { id: 'estudio', label: 'Estudio', href: '#estudio', icon: 'shield' },
    { id: 'contacto', label: 'Contacto', href: '#contacto', icon: 'location_on' },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-40 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(74,40,109,0.06)] xl:hidden">
      <div className="flex justify-around items-center h-16 px-1">
        {tabs.map((tab) => {
          const isActive =
            activeSection === tab.id ||
            (tab.id === 'clases' && activeSection === 'grupos') ||
            (tab.id === 'estudio' && activeSection === 'seguridad');

          return (
            <a
              key={tab.id}
              href={tab.href}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-[58px] h-12 rounded-xl transition-all ${
                isActive
                  ? 'text-primary font-bold bg-surface-container-high/60'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-[22px]">{tab.icon}</span>
              <span className="font-label-xs text-[11px] leading-tight">{tab.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
