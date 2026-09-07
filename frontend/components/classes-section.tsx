import { ClassCard, type ClassCardData } from '@/components/class-card'

const classes: ClassCardData[] = [
  {
    title: 'Grupo Infantil (6 a 12 años)',
    description:
      'Un espacio lúdico y seguro donde los más chicos desarrollan coordinación, confianza y disfrutan de la magia de volar entre telas de colores.',
    image: '/images/kids-silks.png',
    imageAlt: 'Dos niños posando alegremente envueltos en telas aéreas rosa y amarilla',
    whatsappPhone: '5491100000000',
    whatsappMessage: 'Hola! Quiero más información sobre el grupo infantil de Vulpiare.',
  },
  {
    title: 'Jóvenes/Adultos (+15 años)',
    description:
      'Descubrí tu fuerza, flexibilidad y gracia en Vulpiare. Clases de acrobacia en tela para todas las edades.',
    image: '/images/adult-silks.png',
    imageAlt: 'Mujer adulta realizando una figura de acrobacia en tela púrpura',
    whatsappPhone: '5491100000000',
    whatsappMessage: 'Hola! Quiero más información sobre las clases para jóvenes y adultos.',
  },
  {
    title: 'Horarios',
    description:
      'Clases de prueba y de horarios regulares de lunes a sábado, de 9:00 am a 9:30 pm. Coordiná tu clase según tu disponibilidad.',
    image: '/images/schedule-silks.png',
    imageAlt: 'Figura en telas aéreas púrpuras en un estudio de danza sereno',
    whatsappPhone: '5491100000000',
    whatsappMessage: 'Hola! Quiero consultar los horarios disponibles en Vulpiare.',
    mapsUrl: 'https://maps.google.com',
  },
]

export function ClassesSection() {
  return (
    <section id="horarios" className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <div className="grid gap-8 md:grid-cols-3">
        {classes.map((classData) => (
          <ClassCard key={classData.title} data={classData} />
        ))}
      </div>
    </section>
  )
}
