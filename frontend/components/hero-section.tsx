import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-10 md:px-10 md:py-24">
        <div className="flex flex-col items-start gap-6 text-center md:text-left md:items-start">
          <h1 className="text-balance font-serif text-4xl font-semibold leading-tight text-primary sm:text-5xl md:text-6xl">
            Desplegá tus alas.
          </h1>
          <p className="max-w-md text-pretty font-serif text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Descubrí tu fuerza, flexibilidad y gracia en Vulpiare. Clases de
            acrobacia en tela para todas las edades.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button
              render={<Link href="#inscripcion" />}
              nativeButton={false}
              size="lg"
              className="rounded-full px-7 text-base"
            >
              Quiero mi clase de prueba
            </Button>
            <Button
              render={<Link href="#horarios" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="rounded-full border-primary/30 px-7 text-base text-primary hover:bg-accent"
            >
              Ver Horarios
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center rounded-4xl bg-gradient-to-br from-accent via-secondary to-background p-6 md:p-10">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl">
            <Image
              src="/images/hero-acrobat.png"
              alt="Acróbata suspendida con gracia en telas aéreas de color púrpura"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 400px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
