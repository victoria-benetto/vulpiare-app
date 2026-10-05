import React, { useState } from 'react';
import logoImg from '../../assets/images/logo.png';
import { VULPIARE_PHONE, INSTAGRAM_URL, GOOGLE_MAPS_LOCATION_URL } from '../../constants/config';

export const ContactFormSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [group, setGroup] = useState('Jóvenes / Adultos - Mañana (08:00 a 10:00)');
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
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-surface-container via-surface-container-low to-surface-container-high p-4 sm:p-space-xl lg:p-space-2xl shadow-xl border border-secondary/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-space-2xl">
            {/* Columna Información de Contacto */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-space-xs mb-space-xs">
                  <img
                    alt="Logo"
                    className="w-8 h-8 rounded-full object-contain"
                    src={logoImg}
                  />
                  <span className="font-label-xs text-label-xs uppercase tracking-widest text-secondary font-bold">
                    Inscripciones y Cupos
                  </span>
                </div>
                <h2 className="text-2xl sm:text-headline-lg font-headline-lg text-primary tracking-tight mt-space-xs">
                  ¿Lista para subirte a la tela?
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
                  Escribile directamente a <strong>Victoria</strong> para confirmar lugar en tu grupo preferido (reducido a 15-18 personas) y coordinar tu clase de prueba.
                </p>

                <div className="space-y-space-sm mt-space-lg">
                  {/* WhatsApp Victoria */}
                  <div className="p-3 sm:p-space-md rounded-2xl bg-surface-container-lowest/90 backdrop-blur-sm flex items-center justify-between gap-2 border border-surface-container">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined text-[20px] sm:text-[22px]">chat</span>
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] sm:text-label-xs uppercase text-outline leading-tight block">WhatsApp Oficial</span>
                        <p className="text-xs sm:text-title-md text-primary font-bold">Mensaje Directo</p>
                      </div>
                    </div>
                    <a
                      className="px-3 sm:px-space-md py-1.5 sm:py-space-xs rounded-full bg-primary text-on-primary font-label-xs text-[10px] sm:text-label-xs uppercase tracking-wider font-bold hover:bg-primary-container transition-all shrink-0"
                      href={`https://wa.me/${VULPIARE_PHONE}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Chatear
                    </a>
                  </div>

                  {/* Ubicación Google Maps */}
                  <div className="p-3 sm:p-space-md rounded-2xl bg-surface-container-lowest/90 backdrop-blur-sm flex items-center justify-between gap-2 border border-surface-container">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined text-[20px] sm:text-[22px]">location_on</span>
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] sm:text-label-xs uppercase text-outline leading-tight block">Ubicación Sede</span>
                        <p className="text-xs sm:text-title-md text-primary font-bold">Google Maps</p>
                      </div>
                    </div>
                    <a
                      className="px-3 sm:px-space-md py-1.5 sm:py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-[10px] sm:text-label-xs uppercase tracking-wider font-bold hover:bg-secondary-container transition-all shrink-0"
                      href={GOOGLE_MAPS_LOCATION_URL}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Ver Mapa
                    </a>
                  </div>

                  {/* Redes Sociales */}
                  <div className="p-3 sm:p-space-md rounded-2xl bg-surface-container-lowest/90 backdrop-blur-sm flex items-center justify-between gap-2 border border-surface-container">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined text-[20px] sm:text-[22px]">alternate_email</span>
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] sm:text-label-xs uppercase text-outline leading-tight block">Redes Sociales</span>
                        <p className="text-xs sm:text-title-md text-primary font-bold">@vulpiare.acrotela</p>
                      </div>
                    </div>
                    <a
                      className="px-3 sm:px-space-md py-1.5 sm:py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-xs text-[10px] sm:text-label-xs uppercase tracking-wider font-bold hover:bg-secondary-container transition-all shrink-0"
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
            <div className="lg:col-span-7 bg-surface-container-lowest p-4 sm:p-space-xl rounded-2xl sm:rounded-3xl shadow-sm border border-surface-container">
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
                    className="w-full px-3 py-2.5 sm:px-space-md sm:py-space-sm rounded-xl bg-surface text-on-surface placeholder:text-outline text-xs sm:text-body-md outline-none border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/40 transition-all"
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
                      className="w-full px-3 py-2.5 sm:px-space-md sm:py-space-sm rounded-xl bg-surface text-on-surface placeholder:text-outline text-xs sm:text-body-md outline-none border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/40 transition-all"
                      id="phone"
                      placeholder="Ej: 261 1234567"
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
                      className="w-full px-2.5 py-2.5 sm:px-space-md sm:py-space-sm rounded-xl bg-surface text-on-surface text-xs sm:text-body-md outline-none border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/40 transition-all"
                      id="group"
                      value={group}
                      onChange={(e) => setGroup(e.target.value)}
                    >
                      <option value="Jóvenes/Adultos - Mañana (08:00 a 10:00)">
                        Jóvenes / Adultos - Mañana (08:00 a 10:00)
                      </option>
                      <option value="Jóvenes/Adultos - Tarde (16:00 a 18:00)">
                        Jóvenes / Adultos - Tarde (16:00 a 18:00)
                      </option>
                      <option value="Niñas - 16:45 a 18:00 hs">
                        Niñas - 16:45 a 18:00 hs (desde 6 años)
                      </option>
                      <option value="Adolescentes/Adultos - 17:30 a 19:00 hs">
                        Adolescentes / Adultos - 17:30 a 19:00 hs
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-label-md text-label-md uppercase text-on-surface-variant mb-1" htmlFor="experience">
                    ¿Tenés experiencia previa en telas u otra disciplina?
                  </label>
                  <select
                    className="w-full px-2.5 py-2.5 sm:px-space-md sm:py-space-sm rounded-xl bg-surface text-on-surface text-xs sm:text-body-md outline-none border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/40 transition-all"
                    id="experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  >
                    <option value="Empiezo desde cero">Ninguna, empiezo desde cero</option>
                    <option value="Experiencia básica previa">Experiencia básica previa</option>
                    <option value="Nivel intermedio / avanzado">Nivel intermedio / avanzado</option>
                  </select>
                </div>

                <div>
                  <label className="block font-label-md text-label-md uppercase text-on-surface-variant mb-1" htmlFor="message">
                    Mensaje o consulta adicional
                  </label>
                  <textarea
                    className="w-full px-3 py-2.5 sm:px-space-md sm:py-space-sm rounded-xl bg-surface text-on-surface placeholder:text-outline text-xs sm:text-body-md outline-none border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/40 transition-all resize-none"
                    id="message"
                    placeholder="Contanos tus dudas, días preferidos o preguntas sobre la clase..."
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="pt-space-xs">
                  <button
                    className="w-full py-3 sm:py-space-md px-4 sm:px-space-xl rounded-full bg-primary text-on-primary font-label-lg text-xs sm:text-label-lg uppercase tracking-wider hover:bg-primary-container shadow-lg transition-all flex items-center justify-center gap-2 font-bold"
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
