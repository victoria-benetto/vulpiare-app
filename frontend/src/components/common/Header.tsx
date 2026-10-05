import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/images/logo.png';
import { VULPIARE_PHONE, INSTAGRAM_URL, TIKTOK_URL, GOOGLE_MAPS_LOCATION_URL } from '../../constants/config';

interface HeaderProps {
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection = 'inicio' }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isDrawerOpen]);

  const navLinks = [
    { id: 'inicio', label: 'Inicio', href: '#inicio', icon: 'roofing' },
    { id: 'grupos', label: 'Grupos y Clases', href: '#grupos', icon: 'sports_gymnastics' },
    { id: 'horarios', label: 'Horarios', href: '#horarios', icon: 'calendar_today' },
    { id: 'seguridad', label: 'Seguridad', href: '#seguridad', icon: 'shield' },
    { id: 'muestras', label: 'Muestras', href: '#muestras', icon: 'theater_comedy' },
    { id: 'competencias', label: 'Competencias', href: '#competencias', icon: 'emoji_events' },
    { id: 'ubicacion', label: 'Ubicación', href: '#ubicacion', icon: 'location_on' },
    { id: 'faq', label: 'Preguntas Frecuentes', href: '#faq', icon: 'quiz' },
    { id: 'contacto', label: 'Contacto', href: '#contacto', icon: 'person' },
  ];

  return (
    <>
      {/* HEADER / NAVBAR DESKTOP */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(74,40,109,0.06)] border-b border-surface-container hidden xl:block">
        <div className="h-20 w-full px-6 xl:px-10 flex items-center justify-between gap-4">
          {/* Brand Logo (Far Left, shrink-0 to prevent compression) */}
          <a className="flex items-center gap-3 shrink-0 group mr-2" href="#inicio">
            <img
              alt="Vulpiare - Academia de Acrobacias en Tela"
              className="h-12 w-12 rounded-full object-contain shadow-sm group-hover:scale-105 transition-transform shrink-0"
              src={logoImg}
            />
            <div className="flex flex-col whitespace-nowrap">
              <span className="font-headline-sm text-headline-sm text-primary tracking-wide leading-tight">Vulpiare</span>
              <span className="font-label-xs text-[10px] uppercase tracking-widest text-secondary font-bold">
                Acrobacias Aéreas en Tela
              </span>
            </div>
          </a>

          {/* Navegación Principal */}
          <nav className="flex items-center gap-1 xl:gap-1.5 overflow-x-auto no-scrollbar py-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id || activeSection === link.href.substring(1);
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-secondary-fixed text-on-secondary-fixed font-bold shadow-sm'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Botones de Acción y Redes Navbar */}
          <div className="flex items-center gap-2 shrink-0 ml-2">
            <a
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-surface-container hover:bg-secondary-fixed text-primary flex items-center justify-center transition-colors shrink-0"
              href={INSTAGRAM_URL}
              rel="noopener noreferrer"
              target="_blank"
              title="@vulpiare.acrotela"
            >
              <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            </a>
            <a
              aria-label="TikTok"
              className="w-9 h-9 rounded-full bg-surface-container hover:bg-secondary-fixed text-primary flex items-center justify-center transition-colors shrink-0"
              href={TIKTOK_URL}
              rel="noopener noreferrer"
              target="_blank"
              title="@vulpiare.acrotela"
            >
              <span className="material-symbols-outlined text-[18px]">play_circle</span>
            </a>
            <a
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-container transition-all text-xs uppercase tracking-wide font-semibold whitespace-nowrap shrink-0"
              href={`https://wa.me/${VULPIARE_PHONE}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[16px]">chat_bubble</span>
              <span>WhatsApp Victoria</span>
            </a>
            <a
              className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-on-primary hover:bg-primary-container transition-all text-xs uppercase tracking-wider shadow-[0_8px_24px_-4px_rgba(74,40,109,0.15)] font-semibold whitespace-nowrap shrink-0"
              href="#horarios"
            >
              Ver Horarios
            </a>
          </div>
        </div>
      </header>

      {/* MOBILE TOP BAR */}
      <header className="fixed top-0 w-full z-40 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(74,40,109,0.04)] xl:hidden">
        <div className="h-16 px-gutter-mobile flex items-center justify-between">
          <a className="flex items-center gap-space-sm nav-link shrink-0" href="#inicio">
            <img
              alt="Vulpiare Logo"
              className="w-8 h-8 rounded-full object-cover shadow-[0_2px_6px_rgba(74,40,109,0.12)] shrink-0"
              src={logoImg}
            />
            <div className="flex flex-col whitespace-nowrap">
              <span className="font-headline-sm text-headline-sm tracking-wider uppercase text-primary leading-none">
                VULPIARE
              </span>
              <span className="font-label-xs text-label-xs tracking-widest text-on-surface-variant uppercase mt-0.5">
                Acrobacias Aéreas · Mendoza
              </span>
            </div>
          </a>
          <div className="flex items-center gap-1 shrink-0">
            <button
              aria-label="Abrir Menú"
              className="w-11 h-11 flex items-center justify-center rounded-full text-primary hover:bg-surface-container-low transition-colors"
              onClick={toggleDrawer}
              type="button"
            >
              <span className="material-symbols-outlined text-[24px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* DRAWER / SLIDE-OVER SIDEBAR */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 xl:hidden ${
          isDrawerOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-[#23162c]/50 backdrop-blur-sm transition-opacity duration-300 ${
            isDrawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeDrawer}
        />

        {/* Drawer Panel */}
        <aside
          className={`absolute top-0 right-0 w-[84%] max-w-[340px] h-full bg-surface-container-lowest shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out pt-safe pb-safe z-10 ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header of Drawer */}
          <div className="p-5 border-b border-outline-variant/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img alt="Vulpiare" className="w-8 h-8 rounded-full object-cover shadow-sm" src={logoImg} />
              <div>
                <span className="font-headline-sm text-headline-sm text-primary block leading-none">VULPIARE</span>
                <span className="font-label-xs text-label-xs text-secondary font-semibold uppercase tracking-wider">
                  Mendoza, Arg
                </span>
              </div>
            </div>
            <button
              aria-label="Cerrar Menú"
              className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors"
              onClick={closeDrawer}
              type="button"
            >
              <span className="material-symbols-outlined text-[22px]">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
            <p className="px-3 text-[11px] font-bold uppercase tracking-widest text-outline mb-2">Navegación</p>
            {navLinks.map((link) => (
              <a
                key={link.id}
                className="drawer-nav-item flex items-center gap-3 px-3.5 py-3 rounded-2xl text-on-surface hover:bg-surface-container font-label-md transition-colors"
                href={link.href}
                onClick={closeDrawer}
              >
                <span className="material-symbols-outlined text-secondary text-[22px]">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}

            {/* Quick Location Badge */}
            <div className="mt-4 p-3 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">pin_drop</span>
                <span className="font-label-xs text-on-surface">Mendoza, Argentina</span>
              </div>
              <a
                className="text-secondary font-label-xs font-bold underline flex items-center"
                href={GOOGLE_MAPS_LOCATION_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                Maps
              </a>
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="p-4 border-t border-outline-variant/30 bg-surface-container-low/40 space-y-3">
            <a
              className="w-full py-3 px-4 rounded-full bg-[#1EBE5D] text-white font-label-md text-label-md font-semibold text-center flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
              href={`https://wa.me/${VULPIARE_PHONE}?text=Hola%20Victoria,%20quisiera%20consultar%20por%20las%20clases%20de%20acrobacias%20a%C3%A9reas%20en%20tela%20en%20Vulpiare`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Escribir a Victoria</span>
            </a>
            <div className="text-center font-label-xs text-outline">Contacto directo por WhatsApp</div>
            <div className="flex items-center justify-center gap-3 pt-1">
              <a
                className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-secondary hover:text-primary shadow-sm"
                href={INSTAGRAM_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              </a>
              <a
                className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-secondary hover:text-primary shadow-sm"
                href={TIKTOK_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">play_circle</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};
