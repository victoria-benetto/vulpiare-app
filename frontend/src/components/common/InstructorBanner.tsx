import React from 'react';
import { Award } from 'lucide-react';
import { InstructorBannerProps } from '../../types/components';
import { INSTRUCTOR_NAME, INSTRUCTOR_TITLE } from '../../constants/config';

export const InstructorBanner: React.FC<InstructorBannerProps> = ({
  instructorName = INSTRUCTOR_NAME,
  title = INSTRUCTOR_TITLE,
  className = '',
}) => {
  return (
    <section className={`bg-vulpiare-dark py-4 shadow-inner ${className}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-6 text-center text-white">
        <Award className="h-5 w-5 text-vulpiare-medium shrink-0 animate-pulse" />
        <p className="font-serif text-base font-medium tracking-wide sm:text-lg">
          Dirigido por <span className="font-bold underline decoration-vulpiare-medium underline-offset-4">{instructorName}</span> — {title}
        </p>
      </div>
    </section>
  );
};
