import React from 'react';
import logoImg from '../../assets/images/logo.png';
import { HeaderProps } from '../../types/components';
import { ACADEMY_NAME } from '../../constants/config';

export const Header: React.FC<HeaderProps> = ({
  academyName = ACADEMY_NAME,
}) => {
  return (
    <header className="sticky top-0 z-40 border-b border-vulpiare-light/60 bg-white/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-10">
        <a
          href="#"
          className="flex items-center gap-3 font-serif text-2xl font-bold tracking-wider text-vulpiare-dark transition-colors hover:opacity-90 group"
        >
          <img
            src={logoImg}
            alt="Logo Oficial Vulpiare Academia de Acrobacias"
            className="h-11 w-11 rounded-full object-cover shadow-sm transition-transform group-hover:scale-105"
          />
          <span>{academyName}</span>
        </a>
        <a
          href="#horarios"
          className="inline-flex items-center justify-center rounded-full bg-vulpiare-dark px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-vulpiare-dark/90 active:scale-95"
        >
          Inscribirme
        </a>
      </div>
    </header>
  );
};
