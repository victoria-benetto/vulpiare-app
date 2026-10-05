import React from 'react';
import { VULPIARE_PHONE } from '../../constants/config';

export const FloatingWhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${VULPIARE_PHONE}?text=Hola%20Victoria,%20quisiera%20consultar%20por%20las%20clases%20de%20acrobacias%20a%C3%A9reas%20en%20tela%20en%20Vulpiare`;

  return (
    <aside className="fixed bottom-24 right-5 xl:bottom-space-lg xl:right-space-lg z-40 flex items-center group">
      <div className="mr-space-sm hidden sm:flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-lowest text-on-surface shadow-[0_8px_24px_-4px_rgba(74,40,109,0.18)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-surface-container">
        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
        <span className="font-label-md text-label-md text-on-surface-variant">
          Chateá con Victoria (+54 9 261 668-8994)
        </span>
      </div>
      <a
        aria-label="WhatsApp Victoria Vulpiare"
        className="w-14 h-14 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-[0_12px_28px_-4px_rgba(74,40,109,0.30)] hover:scale-105 active:scale-95 transition-transform relative"
        href={whatsappUrl}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="material-symbols-outlined text-[28px]">chat</span>
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-[#1EBE5D] ring-2 ring-surface" />
      </a>
    </aside>
  );
};
