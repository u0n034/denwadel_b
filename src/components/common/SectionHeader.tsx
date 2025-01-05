import React from 'react';

interface SectionHeaderProps {
  englishTitle: string;
  japaneseTitle: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  englishTitle,
  japaneseTitle,
}) => {
  return (
    <div className="text-center mb-16">
      <span className="text-sm text-yellow-500 font-medium">{englishTitle}</span>
      <h2 className="text-2xl font-bold mt-2">{japaneseTitle}</h2>
    </div>
  );
};