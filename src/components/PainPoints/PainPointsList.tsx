import React from 'react';
import { PainPointCard } from './PainPointCard';

const painPoints = [
  {
    header: "・外出時に電話応対ができない\n・人手不足で誰も電話を取れない",
    solution: "機会損失"
  },
  {
    header: "・営業電話や迷惑電話が多い\n・コア業務に集中できない",
    solution: "生産性低下"
  },
  {
    header: "・人件費のコストが合わない\n・マネジメントコストがかかる",
    solution: "コスト"
  }
];

export const PainPointsList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {painPoints.map((point, index) => (
        <PainPointCard 
          key={index} 
          text={point.header}
          solution={point.solution}
        />
      ))}
    </div>
  );
};