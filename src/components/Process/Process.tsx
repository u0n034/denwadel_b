import React from 'react';
import { ProcessStep } from './ProcessStep';

export const Process = () => {
  const steps = [
    { title: "お問い合わせ", description: "フォームまたはお電話でご連絡ください" },
    { title: "ヒアリング", description: "ご要望をお伺いします" },
    { title: "ご提案", description: "最適なプランをご提案いたします" },
    { title: "契約", description: "サービス内容の確認と契約" },
    { title: "サービス開始", description: "すぐにご利用いただけます" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">ご利用の流れ</h2>
        <div className="space-y-8">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index}
              step={index + 1}
              {...step}
            />
          ))}
        </div>
      </div>
    </section>
  );
};