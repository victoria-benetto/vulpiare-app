import React, { useState, useEffect } from 'react';

// 2023 Photos
import m2023_1 from '../../assets/images/muestras/2023/muestra-2023-1.jpg';
import m2023_2 from '../../assets/images/muestras/2023/muestra-2023-2.jpg';
import m2023_3 from '../../assets/images/muestras/2023/muestra-2023-3.jpg';
import m2023_4 from '../../assets/images/muestras/2023/muestra-2023-4.jpg';
import m2023_5 from '../../assets/images/muestras/2023/muestra-2023-5.jpg';
import m2023_6 from '../../assets/images/muestras/2023/muestra-2023-6.jpg';
import m2023_7 from '../../assets/images/muestras/2023/muestra-2023-7.jpg';
import m2023_8 from '../../assets/images/muestras/2023/muestra-2023-8.jpg';
import m2023_9 from '../../assets/images/muestras/2023/muestra-2023-9.jpg';
import m2023_10 from '../../assets/images/muestras/2023/muestra-2023-10.jpg';

// 2024 Photos
import m2024_1 from '../../assets/images/muestras/2024/muestra-2024-1.jpg';
import m2024_2 from '../../assets/images/muestras/2024/muestra-2024-2.jpg';
import m2024_3 from '../../assets/images/muestras/2024/muestra-2024-3.jpg';
import m2024_4 from '../../assets/images/muestras/2024/muestra-2024-4.jpg';
import m2024_5 from '../../assets/images/muestras/2024/muestra-2024-5.jpg';
import m2024_6 from '../../assets/images/muestras/2024/muestra-2024-6.jpg';
import m2024_7 from '../../assets/images/muestras/2024/muestra-2024-7.jpg';
import m2024_8 from '../../assets/images/muestras/2024/muestra-2024-8.jpg';
import m2024_9 from '../../assets/images/muestras/2024/muestra-2024-9.jpg';
import m2024_10 from '../../assets/images/muestras/2024/muestra-2024-10.jpg';

// 2025 Photos
import m2025_1 from '../../assets/images/muestras/2025/muestra-2025-1.jpg';
import m2025_2 from '../../assets/images/muestras/2025/muestra-2025-2.jpg';
import m2025_3 from '../../assets/images/muestras/2025/muestra-2025-3.jpg';
import m2025_4 from '../../assets/images/muestras/2025/muestra-2025-4.jpg';
import m2025_5 from '../../assets/images/muestras/2025/muestra-2025-5.jpg';
import m2025_6 from '../../assets/images/muestras/2025/muestra-2025-6.jpg';
import m2025_7 from '../../assets/images/muestras/2025/muestra-2025-7.jpg';
import m2025_8 from '../../assets/images/muestras/2025/muestra-2025-8.jpg';
import m2025_9 from '../../assets/images/muestras/2025/muestra-2025-9.jpg';
import m2025_10 from '../../assets/images/muestras/2025/muestra-2025-10.jpg';

// Fallback image for upcoming 2026
import scheduleSilksImg from '../../assets/images/schedule-silks.png';
import heroAcrobatImg from '../../assets/images/hero-acrobat.png';

interface MuestraData {
  year: number;
  title: string;
  badgeOverlay: string;
  badgeType: string;
  editionBadge: string;
  description: string;
  coverImage: string;
  isUpcoming?: boolean;
  gallery: {
    src: string;
    caption: string;
  }[];
}

export const MuestrasSection: React.FC = () => {
  const [selectedMuestra, setSelectedMuestra] = useState<MuestraData | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const muestrasData: MuestraData[] = [
    {
      year: 2023,
      title: 'Muestra 2023',
      badgeOverlay: 'Teatro & Luces',
      badgeType: 'Teatro',
      editionBadge: 'Edición 2023',
      description: 'Puesta en escena en sala teatral con iluminación artística, solos y dúos coreográficos en telas aéreas.',
      coverImage: m2023_1,
      gallery: [
        { src: m2023_1, caption: 'Muestra 2023 · Solo en Telas Aéreas' },
        { src: m2023_2, caption: 'Muestra 2023 · Figura en Suspensión' },
        { src: m2023_3, caption: 'Muestra 2023 · Duos & Cuadros Colectivos' },
        { src: m2023_4, caption: 'Muestra 2023 · Coreografía en Altura' },
        { src: m2023_5, caption: 'Muestra 2023 · Apertura Teatral' },
        { src: m2023_6, caption: 'Muestra 2023 · Figura en Nudo Escénico' },
        { src: m2023_7, caption: 'Muestra 2023 · Expresión Corporal en Tela' },
        { src: m2023_8, caption: 'Muestra 2023 · Secuencia Aérea' },
        { src: m2023_9, caption: 'Muestra 2023 · Iluminación & Puesta en Escena' },
        { src: m2023_10, caption: 'Muestra 2023 · Cierre de Gala Anual' },
      ],
    },
    {
      year: 2024,
      title: 'Muestra 2024',
      badgeOverlay: 'Gala Anual',
      badgeType: 'Teatro',
      editionBadge: 'Edición 2024',
      description: 'Presentación abierta para familias y comunidad en sala teatral con iluminación artística y figuras sincronizadas.',
      coverImage: m2024_1,
      gallery: [
        { src: m2024_1, caption: 'Muestra 2024 · Presentación Escénica en Tela' },
        { src: m2024_2, caption: 'Muestra 2024 · Figura de Apertura y Vuelo' },
        { src: m2024_3, caption: 'Muestra 2024 · Dúo Aéreo en Suspensión' },
        { src: m2024_4, caption: 'Muestra 2024 · Flexibilidad y Fuerza' },
        { src: m2024_5, caption: 'Muestra 2024 · Cuadro Coreográfico Sincronizado' },
        { src: m2024_6, caption: 'Muestra 2024 · Técnica Aérea en Altura' },
        { src: m2024_7, caption: 'Muestra 2024 · Solo en Telas Violetas' },
        { src: m2024_8, caption: 'Muestra 2024 · Figura Invertida' },
        { src: m2024_9, caption: 'Muestra 2024 · Puesta de Luces Teatral' },
        { src: m2024_10, caption: 'Muestra 2024 · Despliegue Escénico Gala Anual' },
      ],
    },
    {
      year: 2025,
      title: 'Muestra 2025',
      badgeOverlay: 'Gala Anual',
      badgeType: 'Teatro',
      editionBadge: 'Edición 2025',
      description: 'Gala anual de cierre en sala teatral con solos, dúos y cuadros grupales en telas aéreas.',
      coverImage: m2025_1,
      gallery: [
        { src: m2025_1, caption: 'Muestra 2025 · Gala Anual de Cierre' },
        { src: m2025_2, caption: 'Muestra 2025 · Pose Aérea en Altura' },
        { src: m2025_3, caption: 'Muestra 2025 · Figura de Flexibilidad' },
        { src: m2025_4, caption: 'Muestra 2025 · Cuadro Grupal en Escenario' },
        { src: m2025_5, caption: 'Muestra 2025 · Solo Coreográfico' },
        { src: m2025_6, caption: 'Muestra 2025 · Secuencia de Telas Aéreas' },
        { src: m2025_7, caption: 'Muestra 2025 · Dúo Escénico Sincronizado' },
        { src: m2025_8, caption: 'Muestra 2025 · Figura de Impacto y Vuelo' },
        { src: m2025_9, caption: 'Muestra 2025 · Registro Fotográfico Teatral' },
        { src: m2025_10, caption: 'Muestra 2025 · Cierre Escénico Vulpiare' },
      ],
    },
    {
      year: 2026,
      title: 'Muestra 2026',
      badgeOverlay: 'Próximamente',
      badgeType: 'Próximamente',
      editionBadge: 'Edición 2026',
      description: 'Próximamente más información.',
      coverImage: scheduleSilksImg,
      isUpcoming: true,
      gallery: [
        { src: scheduleSilksImg, caption: 'Avance de Ensayos & Preparativos 2026' },
        { src: heroAcrobatImg, caption: 'Diseño Escénico Ciclo Lectivo 2026' },
      ],
    },
  ];

  const handleOpenGallery = (muestra: MuestraData) => {
    setSelectedMuestra(muestra);
    setActivePhotoIndex(0);
  };

  const handleCloseGallery = () => {
    setSelectedMuestra(null);
    setActivePhotoIndex(0);
  };

  const handleNextPhoto = () => {
    if (!selectedMuestra) return;
    setActivePhotoIndex((prev) => (prev + 1) % selectedMuestra.gallery.length);
  };

  const handlePrevPhoto = () => {
    if (!selectedMuestra) return;
    setActivePhotoIndex((prev) => (prev - 1 + selectedMuestra.gallery.length) % selectedMuestra.gallery.length);
  };

  // Keyboard navigation for gallery modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMuestra) return;
      if (e.key === 'Escape') handleCloseGallery();
      if (e.key === 'ArrowRight') handleNextPhoto();
      if (e.key === 'ArrowLeft') handlePrevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedMuestra]);

  return (
    <section className="w-full py-space-3xl bg-surface scroll-mt-20" id="muestras">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-2xl">
          <span className="font-label-xs text-label-xs uppercase tracking-widest text-secondary font-bold mb-space-xs">
            Presentaciones y Muestras Anuales
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Muestras Artísticas Vulpiare
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
            El escenario donde celebramos el avance, la expresión corporal y el vuelo de cada alumna. Haz clic en el nombre de cualquier muestra para ver la galería fotográfica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {muestrasData.map((muestra) => (
            <div
              key={muestra.year}
              className={`flex flex-col rounded-3xl overflow-hidden bg-surface-container-lowest shadow-md hover:shadow-xl transition-all duration-300 border group ${
                muestra.isUpcoming ? 'border-2 border-secondary/40' : 'border-surface-container-high'
              }`}
            >
              {/* Image Banner */}
              <div
                className="relative aspect-[4/3] overflow-hidden bg-primary-container/20 cursor-pointer"
                onClick={() => handleOpenGallery(muestra)}
                title={`Ver galería de fotos de ${muestra.title}`}
              >
                <img
                  alt={`${muestra.title} · ${muestra.badgeOverlay}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={muestra.coverImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/10 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-space-sm py-space-xs rounded-full font-label-xs text-label-xs uppercase font-bold tracking-wider ${
                      muestra.isUpcoming
                        ? 'bg-primary text-on-primary'
                        : 'bg-surface-container-lowest/90 backdrop-blur-sm text-primary'
                    }`}
                  >
                    {muestra.editionBadge}
                  </span>
                </div>

                {/* Floating Overlay Bottom Info */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-on-primary">
                  <span className="font-title-md text-title-md font-bold flex items-center gap-1.5">
                    {muestra.badgeOverlay}
                  </span>
                  <span className="px-space-xs py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-[11px] font-bold uppercase">
                    {muestra.badgeType}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                <div className="space-y-space-sm">
                  <div className="flex items-center justify-between">
                    <button
                      className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors text-left flex items-center gap-2 hover:underline focus:outline-none"
                      onClick={() => handleOpenGallery(muestra)}
                      title={`Ver galería fotográfica de ${muestra.title}`}
                    >
                      <span>{muestra.title}</span>
                      <span className="material-symbols-outlined text-[20px] text-secondary opacity-80 group-hover:scale-110 transition-transform">
                        photo_camera
                      </span>
                    </button>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                        muestra.isUpcoming
                          ? 'bg-secondary-fixed text-on-secondary-fixed'
                          : 'bg-surface-container text-secondary'
                      }`}
                    >
                      {muestra.year}
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {muestra.description}
                  </p>
                </div>

                {/* Footer Tags */}
                <div className="pt-space-xs border-t border-surface-container flex items-center justify-between text-secondary font-label-md text-label-md">
                  <span className="flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[18px]">theater_comedy</span> Gala Anual
                  </span>
                  <button
                    className="text-xs text-on-surface-variant hover:text-primary font-medium flex items-center gap-1 transition-colors"
                    onClick={() => handleOpenGallery(muestra)}
                  >
                    <span>Registro Fotográfico ({muestra.gallery.length})</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      {selectedMuestra && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
          onClick={handleCloseGallery}
        >
          <div
            className="relative max-w-4xl w-full bg-surface rounded-3xl overflow-hidden shadow-2xl border border-surface-container-high flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-surface-container flex items-center justify-between bg-surface-container-lowest">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary text-[26px]">photo_library</span>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
                    <span>{selectedMuestra.title}</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-bold uppercase tracking-wider">
                      {selectedMuestra.editionBadge}
                    </span>
                  </h3>
                  <p className="text-xs text-on-surface-variant">
                    {selectedMuestra.isUpcoming
                      ? 'Registro Fotográfico Próximamente · Muestras Vulpiare'
                      : 'Registro Fotográfico · Gala Anual Vulpiare'}
                  </p>
                </div>
              </div>
              <button
                aria-label="Cerrar Galería"
                className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors"
                onClick={handleCloseGallery}
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Modal Main Viewfinder */}
            <div className="relative flex-1 bg-black/90 flex items-center justify-center min-h-[320px] sm:min-h-[420px] overflow-hidden group/viewer">
              <img
                alt={selectedMuestra.gallery[activePhotoIndex].caption}
                className="max-h-[60vh] max-w-full object-contain select-none transition-all duration-300"
                src={selectedMuestra.gallery[activePhotoIndex].src}
              />

              {/* Prev/Next Buttons */}
              {selectedMuestra.gallery.length > 1 && (
                <>
                  <button
                    aria-label="Foto Anterior"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface-container-lowest/80 hover:bg-surface-container-lowest text-primary shadow-lg flex items-center justify-center transition-all focus:outline-none"
                    onClick={handlePrevPhoto}
                  >
                    <span className="material-symbols-outlined text-[24px]">chevron_left</span>
                  </button>
                  <button
                    aria-label="Foto Siguiente"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-surface-container-lowest/80 hover:bg-surface-container-lowest text-primary shadow-lg flex items-center justify-center transition-all focus:outline-none"
                    onClick={handleNextPhoto}
                  >
                    <span className="material-symbols-outlined text-[24px]">chevron_right</span>
                  </button>
                </>
              )}

              {/* Counter Badge */}
              <div className="absolute bottom-3 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-label-xs text-xs">
                Foto {activePhotoIndex + 1} de {selectedMuestra.gallery.length}
              </div>
            </div>

            {/* Modal Footer & Thumbnails */}
            <div className="p-4 sm:p-5 bg-surface-container-lowest border-t border-surface-container flex flex-col gap-3">
              <p className="font-body-md text-body-md text-primary text-center sm:text-left font-medium">
                {selectedMuestra.gallery[activePhotoIndex].caption}
              </p>

              {/* Thumbnails Row */}
              <div className="flex items-center gap-3 overflow-x-auto pb-1 pt-1 scrollbar-none">
                {selectedMuestra.gallery.map((photo, idx) => (
                  <button
                    key={idx}
                    className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      idx === activePhotoIndex
                        ? 'border-secondary ring-2 ring-secondary/30 scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    onClick={() => setActivePhotoIndex(idx)}
                  >
                    <img alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover" src={photo.src} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
