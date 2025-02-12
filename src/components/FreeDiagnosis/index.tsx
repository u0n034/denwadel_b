import React from 'react';
import { useScrollTo } from '../../hooks/useScrollTo';

export const FreeDiagnosis: React.FC = () => {
  const { handleClick } = useScrollTo();

  const handleDiagnosisClick = () => {
    // お問い合わせフォームまでスクロール
    handleClick('#contact');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* ヘッダー部分 */}
          <div className="text-center mb-12">
            <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              期間限定キャンペーン
            </span>
            <h2 className="text-3xl font-bold mb-4">
              2週間無料診断
            </h2>
            <p className="text-gray-600">
              お客様のビジネスに最適な電話代行プランを無料で診断いたします
            </p>
          </div>

          {/* レポート内容 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">無料診断レポートの内容</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">1</span>
                  <span>電話代行をすべきか</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">2</span>
                  <span>1か月の想定利用料金</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">3</span>
                  <span>電話種別内訳（商談電話〇％、営業電話〇％など）</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">4</span>
                  <span>電話代行導入時のコストメリット</span>
                </li>
              </ul>
            </div>

            {/* CTA部分 */}
            <div className="bg-yellow-50 rounded-xl p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-4 text-center">
                まずは無料診断を受けてみませんか？
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                詳細なレポートを作成し、<br />
                お客様のビジネスに最適なプランをご提案いたします
              </p>
              <button 
                onClick={handleDiagnosisClick}
                className="bg-yellow-500 text-white px-8 py-4 rounded-lg hover:bg-yellow-600 transition-colors font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              >
                無料診断を申し込む
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 