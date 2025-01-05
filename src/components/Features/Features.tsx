import React from 'react';
import { Phone, Clock, Users } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export const Features = () => {
  const features = [
    {
      icon: Phone,
      title: "電話対応でこんなお困りありませんか？",
      description: "24時間対応が必要"
    },
    {
      icon: Clock,
      title: "人手不足で電話に出られない",
      description: "急な欠勤で対応できない"
    },
    {
      icon: Users,
      title: "コスト削減したい",
      description: "業務効率を上げたい"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">こんな特徴があります！</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};