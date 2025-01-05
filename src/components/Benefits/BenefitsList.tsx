import React from 'react';
import { BenefitCard } from './BenefitCard';

const benefits = [
  {
    title: "効率的な電話対応",
    description: "経験豊富なスタッフが迅速かつ丁寧に対応し、顧客満足度を向上させます。"
  },
  {
    title: "時間とコストの削減",
    description: "月額 2800 円というリーズナブルな価格で、専任スタッフを雇用するコストを大幅に削減できます。"
  },
  {
    title: "柔軟な対応時間",
    description: "月額プランには 15 コールが含まれ、超過分も平日 9 時から 19 時に対応可能です。"
  },
  {
    title: "業務効率の向上",
    description: "基準な折り返し電話も確実に対応し、ビジネスチャンスを逃しません。"
  },
  {
    title: "安心のセキュリティ",
    description: "通話履歴を常時電話を自動的にブロックし、安心して業務に集中できます。"
  }
];

export const BenefitsList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {benefits.map((benefit, index) => (
        <BenefitCard key={index} {...benefit} />
      ))}
    </div>
  );
};