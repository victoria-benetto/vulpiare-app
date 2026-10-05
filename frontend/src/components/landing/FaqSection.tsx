import React, { useState } from 'react';

interface FaqItem {
  id: number;
  question: string;
  answer: React.ReactNode;
}

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs: FaqItem[] = [
    {
      id: 1,
      question: '¿Necesito tener experiencia previa o fuerza para empezar?',
      answer: (
        <p>
          <strong>¡Para nada!</strong> Las clases están diseñadas para todos los niveles, empezando desde cero. No necesitás poder hacer dominadas ni tener elasticidad extraordinaria de antemano. La fuerza de agarre, flexibilidad y resistencia se van construyendo clase a clase a tu propio ritmo con ejercicios guiados y progresiones seguras.
        </p>
      ),
    },
    {
      id: 2,
      question: '¿Cómo es la modalidad de cupos y seguridad?',
      answer: (
        <p>
          Trabajamos rigurosamente con <strong>grupos reducidos de entre 15 y 18 personas</strong> por clase para garantizar supervisión docente personalizada. Además, cada alumna/o cuenta con <strong>Seguro de Accidentes Personales específico para la práctica de acrobacias aéreas</strong>, sumado a colchones reglamentarios de alta densidad y anclajes estructurales certificados.
        </p>
      ),
    },
    {
      id: 3,
      question: '¿Qué ropa o equipamiento debo llevar para la primera clase?',
      answer: (
        <p>
          Recomendamos <strong>ropa cómoda y ajustada al cuerpo</strong>: calzas largas (para evitar el roce de la tela en las piernas y corvas) y remera o top que no se suba al invertirse. Se entrena descalza o con medias antideslizantes. Por seguridad y cuidado de las telas, <strong>no uses joyas, anillos, aros colgantes ni prendas con cierres metálicos</strong>.
        </p>
      ),
    },
    {
      id: 4,
      question: '¿A partir de qué edad pueden empezar en el grupo de Niñas?',
      answer: (
        <p>
          Las infancias pueden comenzar <strong>a partir de los 6 años en adelante</strong>. Adaptamos la enseñanza con dinámicas lúdicas, desarrollo motor y trepadas a baja altura con acompañamiento físico permanente de Victoria.
        </p>
      ),
    },
    {
      id: 5,
      question: '¿Cómo reservo mi clase de prueba con Victoria?',
      answer: (
        <p>
          Es muy simple: escribile directo por WhatsApp a Victoria indicando el grupo de tu interés. Te confirmará la disponibilidad de cupo en el turno elegido y te agendará para vivir tu primera experiencia en el aire.
        </p>
      ),
    },
  ];

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-space-3xl bg-surface-container-low scroll-mt-20" id="faq">
      <div className="max-w-4xl mx-auto px-margin">
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="font-label-xs text-label-xs uppercase tracking-widest text-secondary font-bold">
            Respuestas Claras
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-space-xs">
            Preguntas Frecuentes
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
            Todo lo que necesitás saber antes de tu primera clase en Vulpiare.
          </p>
        </div>

        {/* Acordeón FAQ */}
        <div className="space-y-space-sm">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-3xl bg-surface-container-lowest border border-surface-container-high p-space-md transition-all duration-300 shadow-sm"
              >
                <button
                  className="w-full flex items-center justify-between text-left cursor-pointer font-title-lg text-title-lg text-primary font-bold gap-3"
                  onClick={() => toggleFaq(faq.id)}
                  type="button"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-secondary-fixed text-primary flex items-center justify-center text-sm font-bold shrink-0">
                      {faq.id}
                    </span>
                    <span className="text-base sm:text-title-lg">{faq.question}</span>
                  </span>
                  <span
                    className={`material-symbols-outlined text-secondary transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-space-md pl-0 sm:pl-11 pr-2 sm:pr-4 font-body-md text-body-md text-on-surface-variant leading-relaxed border-t border-surface-container pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
