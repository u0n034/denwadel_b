import React from 'react';
import { useScrollTo } from '../../hooks/useScrollTo';

export const PricingCard = () => {
  const { handleClick } = useScrollTo();

  const plans = [
    {
      name: 'スタンダード',
      price: '2,980',
      description: '月額 / 税抜',
      features: [
        '平日9:00-19:00対応',
        '専用電話番号の発行',
        '各種ツールへの通知連携',
        '15件までの電話対応',
        '一次受付対応',
      ],
      showBasePrice: true,
    },
    {
      name: 'PLUS',
      price: '要見積もり',
      description: 'カスタマイズ可能',
      features: [
        'スタンダードプランの全機能',
        '一次受付を超えた案件の相談対応',
        'オペレーター教育の充実',
        '優先対応',
        '月次レポート提供',
      ],
      showBasePrice: false,
    }
  ];

  const handleButtonClick = (planName: string) => {
    // お問い合わせフォームまでスクロール
    handleClick('#contact');
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="bg-yellow-500 text-white p-8 text-center rounded-t-lg min-h-[240px] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">{plan.name}プラン</h3>
                <p className="text-sm opacity-90">{plan.description}</p>
              </div>
              <div>
                <div className="mb-4">
                  {plan.showBasePrice ? (
                    <>
                      <span className="text-6xl font-bold text-white">{plan.price}</span>
                      <span className="text-2xl">円</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                  )}
                </div>
                {plan.showBasePrice && (
                  <p className="text-sm bg-white/10 inline-block px-4 py-2 rounded-full">
                    ～15件までは基本料金に含まれます
                  </p>
                )}
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-yellow-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => handleButtonClick(plan.name)}
                className="w-full mt-8 bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors font-bold"
              >
                {plan.showBasePrice ? 'お申し込み' : 'お見積もり'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};