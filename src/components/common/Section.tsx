import React from 'react';
import { Container } from './Container';
import { SectionHeader } from './SectionHeader';

interface SectionProps {
  id: string;
  englishTitle: string;
  japaneseTitle: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  englishTitle,
  japaneseTitle,
  className = '',
  children
}) => {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <Container>
        <SectionHeader 
          englishTitle={englishTitle}
          japaneseTitle={japaneseTitle}
        />
        {children}
      </Container>
    </section>
  );
};