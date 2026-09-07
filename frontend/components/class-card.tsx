import { MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { WhatsAppButton } from '@/components/whatsapp-button'

export interface ClassCardData {
  title: string
  description: string
  image: string
  imageAlt: string
  whatsappPhone: string
  whatsappMessage: string
  mapsUrl?: string
}

export function ClassCard({ data }: { data: ClassCardData }) {
  const { title, description, image, imageAlt, whatsappPhone, whatsappMessage, mapsUrl } = data

  return (
    <Card className="group overflow-hidden ring-border/60 transition-shadow hover:shadow-lg hover:shadow-primary/5">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 90vw, 360px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-serif text-xl font-semibold text-primary">
          {title}
        </CardTitle>
        <CardDescription className="text-pretty leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto" />
      <CardFooter className="flex items-center justify-between gap-3 border-t-0 bg-transparent px-6 pb-6">
        {mapsUrl ? (
          <Link
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <MapPin className="size-4" aria-hidden="true" />
            Abrir Google Maps
          </Link>
        ) : (
          <span className="text-sm font-medium text-muted-foreground">
            Consultá disponibilidad
          </span>
        )}
        <WhatsAppButton
          phone={whatsappPhone}
          message={whatsappMessage}
          label={`Consultar sobre ${title} por WhatsApp`}
          className="group flex size-10 shrink-0 items-center justify-center rounded-full bg-muted transition-colors hover:bg-accent"
        />
      </CardFooter>
    </Card>
  )
}
