import React from 'react';

export const EfficiencySection: React.FC = () => {
  const priorityList = [
    { company: 'D社', subject: '折り返し不要ー新サービスのご案内', time: '1時間前' },
    { company: 'C社', subject: '折り返し不要ーメールの件について', time: '1時間前' },
    { company: 'B社', subject: '折り返し不要ー製品のご紹介', time: '2時間前' },
    { company: 'A社', subject: '要折り返しーお打ち合わせの日程調整', time: '3時間前' }
  ];

  return (
    <div className="bg-yellow-50 rounded-xl p-8 shadow-sm max-w-4xl mx-auto min-h-[280px] flex items-center">
      <div className="grid md:grid-cols-2 gap-8 items-center w-full">
        <div>
          <span className="text-sm font-medium text-yellow-500 mb-2 block">STEP 3</span>
          <h3 className="text-xl font-bold mb-4 text-gray-900">
            優先順位をつけて効率的な対応を実現
          </h3>
          <p className="text-gray-600">
            電話が鳴らなくなることで本来の業務に集中できます。
            <br />
            営業電話に悩まされることなく、必要な相手に適切な時間を使うことが可能です。
          </p>
        </div>
        <div className="flex justify-center">
          <div className="bg-white p-6 rounded-lg shadow-sm w-full max-w-sm">
            <div className="space-y-3">
              {priorityList.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-lg p-3 text-sm"
                >
                  <div className="flex justify-between items-start text-gray-400 text-xs mb-1">
                    <span>{item.company}</span>
                    <span>{item.time}</span>
                  </div>
                  <p className="text-gray-700">{item.subject}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}