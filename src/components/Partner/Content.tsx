import React from 'react';
import { CTAButtons } from './CTAButtons';

export const Content: React.FC = () => {
  return (
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">
          あなたのビジネスを支える
          <br />
          最適なパートナー
        </h2>
        <p className="text-gray-200 mb-12 leading-relaxed">
          私たちの電話代行サービスは、
          <br className="hidden sm:block" />
          ビジネスの成長をサポートするとともに、
          <br className="hidden sm:block" />
          効率的な電話管理を実現します。
          <br className="hidden sm:block" />
          信頼できるパートナーとして、ぜひご利用ください。
        </p>
        <CTAButtons />
      </div>
    </div>
  );
};