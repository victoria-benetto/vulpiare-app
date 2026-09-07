import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-wide text-primary transition-colors hover:text-primary/80"
        >
          Vulpiare
        </Link>
        <Button
          render={<Link href="#inscripcion" />}
          nativeButton={false}
          size="lg"
          className="rounded-full px-6"
        >
          Inscribirme
        </Button>
      </div>
    </header>
  )
}
