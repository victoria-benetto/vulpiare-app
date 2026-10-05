import React, { useState } from 'react';
import { VULPIARE_PHONE, INSTAGRAM_URL, GOOGLE_MAPS_LOCATION_URL } from '../../constants/config';

const CONTACT_LOGO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuADq4PSe1-QymNDYqlTdq8IMylALWLLAOMLor4A-4-XwZOwRaUX_u9I7cy8a5eY1LB8RubusBOD2ZFuGrdd9pQn7kDFYsr1odkcVvLpsu8RrOunu6K5ZyQId9by_rZqyz4TXfEHS2lRVyh8FvqNqAg9F_lzDEIXML-B4cipqiStOT1Tp8YnCqxDILno_lRygnu6pumUZflphGQp4BZ2VHrsFuHu6yyjw4UIGXO_KeSJuixSPUvJqQ527IBBmYPMxsFFbQ";

export const ContactFormSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [group, setGroup] = useState('Jóvenes/Adultos (J/A) - Mañana (08:00 a 10:00)');
  const [experience, setExperience] = useState('Empiezo desde cero');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const fullText =
      `Hola Victoria! Mi nombre es ${name.trim()}. Me interesa consultar por el grupo "${group}".\n` +
      `Mi teléfono: ${phone.trim()}\n` +
      `Experiencia: ${experience}\n` +
      (message.trim() ? `Consulta adicional: ${message.trim()}` : '');

    const encodedUrl = `https://wa.me/${VULPIARE_PHONE}?text=${encodeURIComponent(fullText)}`;
    window.open(encodedUrl, '_blank');
  };

  return (
    <section className="w-full py-space-3xl bg-surface scroll-mt-20" id="contacto">
      <div className="max-w-7xl mx-auto px-margin">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-surface-container via-surface-container-low to-surface-container-high p-space-xl lg:p-space-2xl shadow-xl border border-secondary/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl">
            {/* Columna Información de Contacto */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-xs mb-space-xs">
                  <img
                    alt="Logo"
                    className="w-8 h-8 rounded-full object-contain"
                    src={CONTACT_LOGO_IMAGE}
                  />
                  <span className="font-label-xs text-label-xs uppercase tracking-widest text-secondary font-bold">
                    Inscripciones y Cupos
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-space-xs">
                  ¿Lista para subirte a la tela?
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
                  Escribile directamente a <strong>Victoria</strong> para confirmar lugar en tu grupo preferido (reducido a 15-18 personas) y coordinar tu clase de prueba.
                </p>

                <div className="space-y-space-sm mt-space-lg">
                  {/* WhatsApp Victoria */}
                  <div className="p-space-md rounded-2xl bg-surface-container-lowest/90 backdrop-blur-sm flex items-center justify-between border border-surface-container">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[22px]">chat</span>
                      </div>
                      <div>
                        <span className="font-label-xs text-label-xs uppercase text-outline">WhatsApp Oficial · Victoria</span>
                        <p className="font-title-md text-title-md text-primary font-bold">+54 9 261 668-8994</p>
                      </div>
                    </div>
                    <a
                      className="px-space-md py-space-xs rounded-full bg-primary text-on-primary font-label-xs text-label-xs uppercase tracking-wider font-bold hover:bg-primary-container transition-all"
                      href={`https://wa.me/${VULPIARE_PHONE}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Chatear
                    </a>
                  </div>

                  {/* Ubicación Google Maps */}
                  <div className="p-space-md rounded-2xl bg-surface-container-lowest/90 backdrop-blur-sm flex items-center justify-between border border-surface-container">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[22px]">location_on</span>
                      </div>
                      <div>
                        <span className="font-label-xs text-label-xs uppercase text-outline">Ubicación</span>
                        <p className="font-title-md text-title-md text-primary font-bold">Vulpiare en Google Maps</p>
                      </div>
                    </div>
                    <a
                      className="px-space-md py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs uppercase tracking-wider font-bold hover:bg-secondary-container transition-all"
                      href={GOOGLE_MAPS_LOCATION_URL}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Ver Mapa
                    </a>
                  </div>

                  {/* Redes Sociales */}
                  <div className="p-space-md rounded-2xl bg-surface-container-lowest/90 backdrop-blur-sm flex items-center justify-between border border-surface-container">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[22px]">alternate_email</span>
                      </div>
                      <div>
                        <span className="font-label-xs text-label-xs uppercase text-outline">Instagram &amp; TikTok</span>
                        <p className="font-title-md text-title-md text-primary font-bold">@vulpiare.acrotela</p>
                      </div>
                    </div>
                    <a
                      className="px-space-md py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-label-xs uppercase tracking-wider font-bold hover:bg-secondary-container transition-all"
                      href={INSTAGRAM_URL}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Seguir
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna Formulario */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-space-xl rounded-3xl shadow-sm border border-surface-container">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs">Envianos tu consulta de cupo</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
                Completá tus datos para contactar a Victoria directamente por WhatsApp con tu mensaje listo.
              </p>
              
              <form className="space-y-space-md" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-label-md text-label-md uppercase text-on-surface-variant mb-1" htmlFor="name">
                    Nombre y Apellido
                  </label>
                  <input
                    className="w-full px-space-md py-space-sm rounded-xl bg-surface text-on-surface placeholder:text-outline font-body-md text-body-md outline-none border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/40 transition-all"
                    id="name"
                    placeholder="Tu nombre completo"
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div>
                    <label className="block font-label-md text-label-md uppercase text-on-surface-variant mb-1" htmlFor="phone">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      className="w-full px-space-md py-space-sm rounded-xl bg-surface text-on-surface placeholder:text-outline font-body-md text-body-md outline-none border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/40 transition-all"
                      id="phone"
                      placeholder="Ej: +54 9 261 ..."
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block font-label-md text-label-md uppercase text-on-surface-variant mb-1" htmlFor="group">
                      Grupo de Interés
                    </label>
                    <select
                      className="w-full px-space-md py-space-sm rounded-xl bg-surface text-on-surface font-body-md text-body-md outline-none border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/40 transition-all"
                      id="group"
                      value={group}
                      onChange={(e) => setGroup(e.target.value)}
                    >
                      <option value="Jóvenes/Adultos (J/A) - Mañana (08:00 a 10:00)">
                        Jóvenes/Adultos (J/A) - Mañana (08:00 a 10:00)
                      </option>
                      <option value="Jóvenes/Adultos (J/A) - Tarde (16:00 a 18:00)">
                        Jóvenes/Adultos (J/A) - Tarde (16:00 a 18:00)
                      </option>
                      <option value="Niñas (N) - 16:45 a 18:00 hs">
                        Niñas (N) - 16:45 a 18:00 hs (desde 6 años)
                      </option>
                      <option value="Adolescentes/Adultos (A/A) - 17:30 a 19:00 hs">
                        Adolescentes/Adultos (A/A) - 17:30 a 19:00 hs
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-label-md text-label-md uppercase text-on-surface-variant mb-1" htmlFor="experience">
                    ¿Tenés experiencia previa en telas u otra disciplina?
                  </label>
                  <select
                    className="w-full px-space-md py-space-sm rounded-xl bg-surface text-on-surface font-body-md text-body-md outline-none border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/40 transition-all"
                    id="experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  >
                    <option value="Empiezo desde cero">Ninguna, empiezo desde cero (¡bienvenida!)</option>
                    <option value="Experiencia básica previa">Hice alguna vez hace tiempo</option>
                    <option value="Nivel intermedio / avanzado">Tengo nivel intermedio / realizo otras acrobacias</option>
                  </select>
                </div>

                <div>
                  <label className="block font-label-md text-label-md uppercase text-on-surface-variant mb-1" htmlFor="message">
                    Mensaje o consulta adicional
                  </label>
                  <textarea
                    className="w-full px-space-md py-space-sm rounded-xl bg-surface text-on-surface placeholder:text-outline font-body-md text-body-md outline-none border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/40 transition-all resize-none"
                    id="message"
                    placeholder="Contanos tus dudas, días preferidos o preguntas sobre la clase..."
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="pt-space-xs">
                  <button
                    className="w-full py-space-md px-space-xl rounded-full bg-primary text-on-primary font-label-lg text-label-lg uppercase tracking-wider hover:bg-primary-container shadow-lg transition-all flex items-center justify-center gap-space-xs font-bold"
                    type="submit"
                  >
                    <span>Enviar consulta a Victoria por WhatsApp</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
