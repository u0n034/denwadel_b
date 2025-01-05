import React from 'react';
import { notificationTools } from './data';

export const NotificationSection: React.FC = () => {
  return (
    <div className="bg-yellow-50 rounded-xl p-4 md:p-8 shadow-sm max-w-4xl mx-auto min-h-[360px] flex items-center">
      <div className="grid md:grid-cols-2 gap-8 items-center w-full">
        <div>
          <span className="text-sm font-medium text-yellow-500 mb-2 block">STEP 2</span>
          <h3 className="text-xl font-bold mb-4 text-gray-900">
            貴社指定のツールで受電を確認
          </h3>
          <p className="text-gray-600">
            普段お使いのチャットツールなど、
            <br className="hidden md:block" />
            お好きな通知方法をお選びいただけます。
          </p>
        </div>
        <div className="flex justify-center">
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-sm w-full">
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              {notificationTools.map((tool) => (
                <div key={tool.name} className="flex flex-col items-center gap-2">
                  <img 
                    src={tool.icon} 
                    alt={`${tool.name}のアイコン`} 
                    className="w-8 md:w-10 h-8 md:h-10 object-contain"
                  />
                  <span className="text-xs text-gray-600 text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};