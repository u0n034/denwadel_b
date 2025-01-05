import React from 'react';

export const FAQ = () => {
  const faqs = [
    {
      question: "追加コールの料金体系は？",
      answer: "追加コールは超過分に応じてリーズナブルな料金で提供します。詳しくはプランをご確認ください。"
    },
    {
      question: "対応可能な時間帯は？",
      answer: "平日9:00〜19:00です。"
    },
    {
      question: "契約期間の縛りはありますか？",
      answer: "いつでもキャンセル可能です。契約期間の縛りはありません。"
    }
    {
      question: "サービスのカスタマイズは可能ですか？",
      answer: "お客様のニーズに合わせて、柔軟にカスタマイズが可能です。お気軽にお問い合わせください。"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">よくある質問</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                {faq.question}
              </summary>
              <p className="mt-4 text-gray-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};