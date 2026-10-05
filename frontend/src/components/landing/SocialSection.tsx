import React from 'react';
import { INSTAGRAM_URL, TIKTOK_URL } from '../../constants/config';

const SOCIAL_LOGO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuAv6fBwLhQGMoY37mg7MqH2ffGF_lYvXjOUhww1ywhWiXeQzOJU3jgwlBPTgsR2XVY-7IcQJigM229f9BFobLAKZ5RPBRJIhdC-CcZ5-nIY2uXYozXUuKuNp4XYsGSnO0iaXRtKpDktRAeaHU11-2yKUlFK6QOgjjk8QhzrrasFwMwswnMcWjSe7Y6qNUz63QrL4voDQ4Ou7-tWn-wL4rNunmS-T-JmboUStlO6X7zsmbPcDz19N0k99IzcxGw1MsPoiw";

export const SocialSection: React.FC = () => {
  return (
    <section className="w-full py-space-2xl bg-surface">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="p-space-xl rounded-[2.5rem] bg-surface-container-lowest shadow-md border border-surface-container flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <div className="flex items-center gap-space-md text-center md:text-left flex-col md:flex-row">
            <img
              alt="Vulpiare Acrotela"
              className="w-16 h-16 rounded-full object-contain border border-surface-container-highest shadow-sm flex-shrink-0"
              src={SOCIAL_LOGO_IMAGE}
            />
            <div>
              <span className="font-label-xs text-label-xs uppercase tracking-widest text-secondary font-bold">
                Comunidad Aérea
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary mt-0.5">
                Seguinos en redes y mirá nuestras figuras
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Videos de clases, figuras paso a paso, ensayos y la energía de cada entrenamiento en telas.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-space-sm w-full md:w-auto">
            <a
              className="px-space-lg py-space-sm rounded-full bg-surface-container hover:bg-secondary-fixed text-primary font-label-md text-label-md uppercase tracking-wider font-bold transition-all flex items-center gap-2 border border-outline-variant"
              href={INSTAGRAM_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              <span>@vulpiare.acrotela en Instagram</span>
            </a>
            <a
              className="px-space-lg py-space-sm rounded-full bg-surface-container hover:bg-secondary-fixed text-primary font-label-md text-label-md uppercase tracking-wider font-bold transition-all flex items-center gap-2 border border-outline-variant"
              href={TIKTOK_URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px]">play_circle</span>
              <span>@vulpiare.acrotela en TikTok</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
