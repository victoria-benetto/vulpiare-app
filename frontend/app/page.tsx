import { ClassesSection } from '@/components/classes-section'
import { HeroSection } from '@/components/hero-section'
import { InstructorBanner } from '@/components/instructor-banner'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { WhatsAppFloatingButton } from '@/components/whatsapp-button'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <SiteHeader />
      <HeroSection />
      <InstructorBanner />
      <ClassesSection />
      <SiteFooter />
      <WhatsAppFloatingButton phone="5491100000000" />
    </main>
  )
}
