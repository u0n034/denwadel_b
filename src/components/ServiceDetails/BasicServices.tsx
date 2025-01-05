import React from 'react';
import { UserCheck, Clock, Phone, Bell, Calendar } from 'lucide-react';

export const BasicServices: React.FC = () => {
  const services = [
    {
      icon: UserCheck,
      title: '名乗りの設定',
      description: '企業様ごとの希望の名乗りをさせていただきます'
    },
    {
      icon: Clock,
      title: '転送時間の設定',
      description: '24時間お好きな時間に転送いただけます'
    },
    {
      icon: Phone,
      title: '音声録音',
      description: 'すべての通話内容を録音いたします'
    },
    {
      icon: Bell,
      title: '電話転送取次',
      description: 'お客様のお客様とご担当者様をお取次ぎいたします'
    },
    {
      icon: Calendar,
      title: '通知方法の設定',
      description: 'お好きな通知方法をお選びいただけます'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-xl font-bold mb-2">基本サービス</h3>
      <p className="text-gray-600 mb-8">
        あったらうれしい機能・サービスが満載の電話代行サービス
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.title} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <service.icon className="w-8 h-8 text-yellow-500 mb-4" />
            <h4 className="font-bold mb-2">{service.title}</h4>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};