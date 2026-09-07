import React from 'react';
import kidsSilksImg from '../../assets/images/kids-silks.png';
import victoriaSplitImg from '../../assets/images/victoria-split.jpg';
import victoriaStretchImg from '../../assets/images/victoria-stretch.jpg';
import { ClassCard } from '../common/ClassCard';
import { ClassCardProps } from '../../types/components';
import { GOOGLE_MAPS_LOCATION_URL } from '../../constants/config';

export const ClassesSection: React.FC = () => {
  const classesData: ClassCardProps[] = [
    {
      title: 'Grupo Infantil (6 a 12 años)',
      description:
        'Un espacio lúdico y seguro donde los más chicos desarrollan coordinación, confianza y disfrutan de la magia de volar entre telas de colores.',
      image: kidsSilksImg,
      imageAlt: 'Dos niños posando alegremente envueltos en telas aéreas rosa y amarilla',
      badge: 'Infantil',
      whatsappMessage: 'Hola Victoria! Quiero más información sobre el grupo infantil de Vulpiare.',
    },
    {
      title: 'Jóvenes / Adultos (+15 años)',
      description:
        'Descubrí tu fuerza, flexibilidad y gracia en Vulpiare. Clases de acrobacia en tela adaptadas a todos los niveles, dirigidas por María Victoria Benetto.',
      image: victoriaSplitImg,
      imageAlt: 'María Victoria Benetto realizando una apertura de piernas acrobática en telas rojas',
      badge: 'Adultos / Nivel Avanzado',
      whatsappMessage: 'Hola Victoria! Quiero más información sobre las clases para jóvenes y adultos.',
    },
    {
      title: 'Horarios y Ubicación',
      description:
        'Clases de prueba y horarios regulares de lunes a sábado, de 9:00 am a 9:30 pm. Coordiná tu clase según tu disponibilidad.',
      image: victoriaStretchImg,
      imageAlt: 'María Victoria Benetto ejecutando una figura aérea de flexibilidad en telas rojas',
      badge: 'Horarios',
      whatsappMessage: 'Hola Victoria! Quiero consultar los horarios disponibles en Vulpiare.',
      mapsUrl: GOOGLE_MAPS_LOCATION_URL,
    },
  ];

  return (
    <section id="horarios" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-12 text-center">
        <h2 className="font-serif text-3xl font-bold text-vulpiare-dark sm:text-4xl">
          Nuestras Clases y Propuestas
        </h2>
        <p className="mt-3 text-base text-gray-600">
          Elegí la modalidad que mejor se adapte a tus metas y sumate a nuestra comunidad.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {classesData.map((classItem, idx) => (
          <ClassCard key={idx} {...classItem} />
        ))}
      </div>
    </section>
  );
};
