import React from 'react';
import { SocialLinks } from './SocialLinks';

export const CompanyInfo = () => {
  return (
    <div className="lg:col-span-5">
      <div className="mb-6 text-center lg:text-left">
        <h1 className="text-2xl font-bold">デンワデル</h1>
        <p className="text-sm text-gray-300 mt-2">株式会社タレンシア</p>
      </div>
      
      <div className="space-y-6 text-center lg:text-left">
        <AddressBlock
          title="本社"
          address={[
            '〒926-0046',
            '石川県七尾市神明町1番地',
            'ミナ・クル1階'
          ]}
        />
        <AddressBlock
          title="東京オフィス"
          address={[
            '〒150-0002',
            '東京都渋谷区渋谷1-3-9',
            'ヒューリック渋谷一丁目ビル'
          ]}
        />
      </div>

      <SocialLinks />
    </div>
  );
};

interface AddressBlockProps {
  title: string;
  address: string[];
}

const AddressBlock: React.FC<AddressBlockProps> = ({ title, address }) => {
  return (
    <div>
      <p className="text-sm font-medium mb-1">{title}</p>
      <address className="text-sm text-gray-300 not-italic">
        {address.map((line, index) => (
          <React.Fragment key={index}>
            {line}<br />
          </React.Fragment>
        ))}
      </address>
    </div>
  );
};