import React from 'react';
import logoImg from '../../assets/images/logo.png';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface py-space-xl border-t border-surface-container pb-24 xl:pb-space-xl">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-surface-variant font-body-sm text-body-sm text-center sm:text-left">
          <div className="flex items-center gap-3">
            <img
              alt="Logo Vulpiare"
              className="w-8 h-8 rounded-full object-contain"
              src={logoImg}
            />
            <p>© 2026 Vulpiare. Academia de Acrobacias Aéreas en Tela · Dirección: Victoria. Todos los derechos reservados.</p>
          </div>
          <p className="text-outline">Grupos reducidos de 15 a 18 personas · Seguro de accidentes personales para telas aéreas incluido.</p>
        </div>
      </div>
    </footer>
  );
};
