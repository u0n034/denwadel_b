import React from 'react';

const companyInfo = [
  { label: '会社名', value: '株式会社タレンシア' },
  { label: '代表者', value: '代表取締役 瀬口 庄一朗' },
  { label: '資本金', value: '500万円' },
  { 
    label: '本社', 
    value: [
      '〒926-0046',
      '石川県七尾市神明町1番地',
      'ミナ・クル1階'
    ],
    image: '/images/nanao-office.jpg'
  },
  { 
    label: '東京オフィス', 
    value: [
      '〒150-0002',
      '東京都渋谷区渋谷1-3-9',
      'ヒューリック渋谷一丁目ビル'
    ],
    image: '/images/tokyo-office.jpg'
  }
];

export const CompanyDetails = () => {
  return (
    <div className="p-4 md:p-8">
      <dl className="space-y-8">
        {companyInfo.map(({ label, value, image }) => (
          <div key={label} className="border-b border-gray-100 pb-8">
            <dt className="text-sm text-gray-500 mb-2">{label}</dt>
            <dd className="text-gray-900">
              {Array.isArray(value) ? (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    {value.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                  {image && (
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={image} 
                        alt={`${label}の外観`} 
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  )}
                </div>
              ) : (
                value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};