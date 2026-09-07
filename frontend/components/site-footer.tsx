export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-center md:flex-row md:px-10 md:text-left">
        <span className="font-serif text-lg font-semibold text-primary">
          Vulpiare
        </span>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vulpiare. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
