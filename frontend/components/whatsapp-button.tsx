import { MessageCircle } from 'lucide-react'

interface WhatsAppButtonProps {
  phone: string
  message?: string
  className?: string
  label?: string
}

export function WhatsAppButton({
  phone,
  message,
  className,
  label = 'Escribinos por WhatsApp',
}: WhatsAppButtonProps) {
  const query = message ? `?text=${encodeURIComponent(message)}` : ''

  return (
    <a
      href={`https://wa.me/${phone}${query}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className}
    >
      <MessageCircle
        className="size-5 text-[oklch(0.6_0.16_150)] transition-transform group-hover:scale-110"
        aria-hidden="true"
      />
    </a>
  )
}

export function WhatsAppFloatingButton({ phone }: { phone: string }) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[oklch(0.6_0.16_150)] shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="size-7 text-white" aria-hidden="true" />
      <span className="sr-only">Chatear por WhatsApp</span>
    </a>
  )
}
