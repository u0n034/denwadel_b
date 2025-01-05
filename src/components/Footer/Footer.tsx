import React from 'react';

export const Footer = () => {
  const footerLinks = {
    company: ["会社概要", "お問い合わせ", "採用情報"],
    service: ["サービス一覧", "料金プラン", "導入事例"],
    support: ["ヘルプセンター", "よくある質問", "お問い合わせ"],
    legal: ["プライバシーポリシー", "利用規約", "特定商取引法"]
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 Air-Call24. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};