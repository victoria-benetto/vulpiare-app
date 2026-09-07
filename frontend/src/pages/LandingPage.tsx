import React from 'react';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { InstructorBanner } from '../components/common/InstructorBanner';
import { FloatingWhatsAppButton } from '../components/common/FloatingWhatsAppButton';
import { HeroSection } from '../components/landing/HeroSection';
import { ClassesSection } from '../components/landing/ClassesSection';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-vulpiare-light/20 text-gray-800 flex flex-col font-sans selection:bg-vulpiare-medium selection:text-vulpiare-dark">
      {/* Encabezado con logo y CTA de inscripción */}
      <Header />

      <main className="flex-grow">
        {/* Sección Hero Principal */}
        <HeroSection />

        {/* Banner destacado: María Victoria Benetto — Campeona Sudamericana Nivel Premium */}
        <InstructorBanner />

        {/* Sección de Tarjetas de Clases y Horarios */}
        <ClassesSection />
      </main>

      {/* Pie de Página */}
      <Footer />

      {/* Botón Flotante de WhatsApp para conversión directa */}
      <FloatingWhatsAppButton />
    </div>
  );
};

export default LandingPage;
