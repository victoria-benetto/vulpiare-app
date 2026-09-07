import React from 'react';
import victoriaPoseImg from '../../assets/images/victoria-pose.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-10 md:px-10">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="mb-3 rounded-full bg-vulpiare-light px-4 py-1 text-xs font-bold uppercase tracking-wider text-vulpiare-dark">
            Academia de Acrobacias Aéreas
          </span>
          <h1 className="font-serif text-4xl font-extrabold leading-tight text-vulpiare-dark sm:text-5xl md:text-6xl">
            <span className="text-vulpiare-dark/90 underline decoration-vulpiare-medium decoration-wavy decoration-2">
              Desplegá tus alas.
            </span>
          </h1>
          <p className="mt-6 max-w-md font-serif text-lg leading-relaxed text-gray-600 sm:text-xl">
            Descubrí tu fuerza, flexibilidad y gracia en Vulpiare. Clases de acrobacia en tela para todas las edades y niveles.
          </p>
          <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              href="#horarios"
              className="inline-flex items-center justify-center rounded-full bg-vulpiare-dark px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-vulpiare-dark/90 hover:shadow-xl active:scale-95"
            >
              Quiero mi clase de prueba
            </a>
            <a
              href="#horarios"
              className="inline-flex items-center justify-center rounded-full border-2 border-vulpiare-dark/30 bg-transparent px-8 py-3.5 text-base font-semibold text-vulpiare-dark transition-all hover:border-vulpiare-dark hover:bg-vulpiare-light/40"
            >
              Ver Horarios
            </a>
          </div>
        </div>

        {/* Imagen Principal Hero (Foto Oficial de María Victoria Benetto) */}
        <div className="relative flex items-center justify-center rounded-3xl bg-gradient-to-br from-vulpiare-light via-vulpiare-medium/40 to-transparent p-6 md:p-8 shadow-xl">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl shadow-md border-2 border-white">
            <img
              src={victoriaPoseImg}
              alt="María Victoria Benetto ejecutando una pose acrobática sobre telas rojas"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
