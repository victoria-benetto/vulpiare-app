import React from 'react';
import { HeaderProps } from '../../types/components';
import { ACADEMY_NAME } from '../../constants/config';

export const Header: React.FC<HeaderProps> = ({
  academyName = ACADEMY_NAME,
}) => {
  return (
    <header className="sticky top-0 z-40 border-b border-vulpiare-light/60 bg-white/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#"
          className="font-serif text-2xl font-bold tracking-wider text-vulpiare-dark transition-colors hover:text-vulpiare-dark/80"
        >
          {academyName}
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
