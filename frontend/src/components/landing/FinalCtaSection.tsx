import React from 'react';
import { VULPIARE_PHONE, GOOGLE_MAPS_LOCATION_URL } from '../../constants/config';

const FINAL_CTA_LOGO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCnm_vCLTWGNuXLPZ238cxjkTPABL9sYo3MphQP2IUx-Ly0oI83z9gA7MKyeTfBZXgGOxA9udVZaPfVE2gNBfvY9WsFvyHs3Vjtx26NXK6_xbf4pU_23CNn37YJkGO5PIHlmltd6-qLn8S-iJLJP2ofeVRUNPojuXFd8rh2hFDR1pFJRt-lEGNBO_5bw6xLx0vp_SwgjnapSpOGQypot2vYB9Z3yGXAk0ZP6Zo2oY8NzMa8NoTqaaX5-CjgRcnVatrRGQ";

export const FinalCtaSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${VULPIARE_PHONE}?text=Hola%20Victoria,%20quisiera%20coordinar%20mi%20clase%20de%20prueba%20en%20Vulpiare`;

  return (
    <section className="w-full py-space-2xl bg-gradient-to-r from-primary via-primary-container to-primary text-on-primary relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-margin text-center flex flex-col items-center gap-space-md relative z-10">
        <img
          alt="Isotipo Vulpiare"
          className="w-16 h-16 rounded-full object-contain bg-surface-container-lowest/10 p-1 backdrop-blur-sm border border-secondary-fixed/40"
          src={FINAL_CTA_LOGO_IMAGE}
        />
        <span className="font-label-xs text-label-xs uppercase tracking-widest text-secondary-fixed-dim font-bold">
          Comenzá hoy en telas aéreas con Victoria
        </span>
        <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-[56px] text-on-primary leading-tight">
          ¿Lista para comenzar a volar?
        </h2>
        <p className="font-body-lg text-body-lg text-primary-fixed max-w-2xl leading-relaxed">
          Escribile por WhatsApp a Victoria (+54 9 261 668-8994) y reservá tu clase de prueba en Vulpiare. Recordá que los cupos son estrictamente de 15 a 18 personas por grupo para garantizar tu seguridad y progreso.
        </p>
        <div className="pt-space-sm flex flex-wrap items-center justify-center gap-space-sm w-full sm:w-auto">
          <a
            className="px-space-xl py-space-md rounded-full bg-surface-container-lowest text-primary font-label-lg text-label-lg uppercase tracking-wider hover:bg-surface-container shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-space-xs font-bold w-full sm:w-auto"
            href={whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[22px] text-secondary">chat</span>
            <span>Coordinar clase de prueba</span>
          </a>
          <a
            className="px-space-xl py-space-md rounded-full bg-primary-fixed/20 text-on-primary font-label-lg text-label-lg uppercase tracking-wider hover:bg-primary-fixed/30 transition-all font-semibold w-full sm:w-auto"
            href="#horarios"
          >
            Revisar grilla de horarios
          </a>
          <a
            className="px-space-lg py-space-md rounded-full bg-primary-fixed/20 text-on-primary font-label-lg text-label-lg uppercase tracking-wider hover:bg-primary-fixed/30 transition-all font-semibold flex items-center justify-center gap-1 w-full sm:w-auto"
            href={GOOGLE_MAPS_LOCATION_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">location_on</span>
            <span>Ver Ubicación</span>
          </a>
        </div>
      </div>
    </section>
  );
};
