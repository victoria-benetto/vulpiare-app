import React, { useState, useEffect } from 'react';
import { Header } from '../components/common/Header';
import { MobileBottomBar } from '../components/common/MobileBottomBar';
import { Footer } from '../components/common/Footer';
import { FloatingWhatsAppButton } from '../components/common/FloatingWhatsAppButton';
import { HeroSection } from '../components/landing/HeroSection';
import { GroupsSection } from '../components/landing/GroupsSection';
import { ScheduleSection } from '../components/landing/ScheduleSection';
import { SecuritySection } from '../components/landing/SecuritySection';
import { MuestrasSection } from '../components/landing/MuestrasSection';
import { CompetenciasSection } from '../components/landing/CompetenciasSection';
import { LocationSection } from '../components/landing/LocationSection';
import { FaqSection } from '../components/landing/FaqSection';
import { SocialSection } from '../components/landing/SocialSection';
import { ContactFormSection } from '../components/landing/ContactFormSection';
import { FinalCtaSection } from '../components/landing/FinalCtaSection';

export const LandingPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'grupos', 'horarios', 'seguridad', 'muestras', 'competencias', 'ubicacion', 'faq', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface antialiased selection:bg-secondary-container selection:text-primary flex flex-col">
      {/* Header con navegación desktop y móvil */}
      <Header activeSection={activeSection} />

      <main className="w-full pt-16 xl:pt-20 flex-grow bg-surface">
        {/* SECCIÓN 1: HERO */}
        <HeroSection />

        {/* SECCIÓN 2: NUESTROS 3 GRUPOS EXCLUSIVOS DE ACROBACIAS */}
        <GroupsSection />

        {/* SECCIÓN 3: MATRIZ DE HORARIOS Y CLASES */}
        <ScheduleSection />

        {/* SECCIÓN 4: SOBRE VULPIARE / PILARES TÉCNICOS Y SEGURIDAD */}
        <SecuritySection />

        {/* SECCIÓN 5: MUESTRAS ARTÍSTICAS ANUALES */}
        <MuestrasSection />

        {/* SECCIÓN 6: COMPETENCIAS FLAVIO MENDOZA */}
        <CompetenciasSection />

        {/* SECCIÓN 7: UBICACIÓN DE VULPIARE */}
        <LocationSection />

        {/* SECCIÓN 7: PREGUNTAS FRECUENTES (FAQ) */}
        <FaqSection />

        {/* SECCIÓN 8: REDES SOCIALES Y COMUNIDAD */}
        <SocialSection />

        {/* SECCIÓN 9: CONTACTO DIRECTO & FORMULARIO WHATSAPP */}
        <ContactFormSection />

        {/* SECCIÓN 10: CTA GLOBAL FINAL */}
        <FinalCtaSection />
      </main>

      {/* Pie de Página */}
      <Footer />

      {/* Botón Flotante de WhatsApp */}
      <FloatingWhatsAppButton />

      {/* Barra de Navegación Inferior para Dispositivos Móviles */}
      <MobileBottomBar activeSection={activeSection} />
    </div>
  );
};

export default LandingPage;
