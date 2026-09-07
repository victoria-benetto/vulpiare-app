import React from 'react';
import logoImg from '../../assets/images/logo.png';
import { FooterProps } from '../../types/components';
import { ACADEMY_NAME } from '../../constants/config';

export const Footer: React.FC<FooterProps> = ({
  academyName = ACADEMY_NAME,
}) => {
  return (
    <footer className="border-t border-vulpiare-light/60 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-center md:flex-row md:px-10 md:text-left">
        <div className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Logo Vulpiare Academia"
            className="h-9 w-9 rounded-full object-cover shadow-sm"
          />
          <span className="font-serif text-xl font-bold text-vulpiare-dark">
            {academyName}
          </span>
        </div>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} {academyName} Academia de Acrobacias en Tela. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
