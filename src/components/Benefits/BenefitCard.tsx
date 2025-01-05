import React from 'react';

interface BenefitCardProps {
  title: string;
  description: string;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};