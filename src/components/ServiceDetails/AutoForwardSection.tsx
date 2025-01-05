import React from 'react';

export const AutoForwardSection: React.FC = () => {
  return (
    <div className="bg-yellow-50 rounded-xl p-4 md:p-8 shadow-sm max-w-4xl mx-auto min-h-[360px] flex items-center">
      <div className="grid md:grid-cols-2 gap-8 items-center w-full">
        <div>
          <span className="text-sm font-medium text-yellow-500 mb-2 block">事前準備</span>
          <h3 className="text-xl font-bold mb-4 text-gray-900">
            専用番号へ自動転送するだけ
          </h3>
          <p className="text-gray-600">
            契約後に発行する専用番号まで、
            <br />
            自社の電話機から転送設定を行います。
          </p>
        </div>
        <div className="flex justify-center">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm w-full">
            <div className="flex items-center justify-between gap-2">
              {/* 転送元の電話 */}
              <div className="flex flex-col items-center">
                <img 
                  src="/images/phone-icon.png" 
                  alt="転送元の電話" 
                  className="w-10 h-10 md:w-14 md:h-14 object-contain"
                />
              </div>

              {/* 転送設定の矢印 */}
              <div className="flex-1 mx-1 md:mx-3">
                <div className="h-8 md:h-10 bg-yellow-100 rounded-lg flex items-center justify-center relative">
                  <span className="text-[10px] md:text-xs text-yellow-700 px-1">転送設定</span>
                  <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-0 h-0 
                    border-t-[6px] md:border-t-[8px] border-t-transparent 
                    border-l-[12px] md:border-l-[16px] border-l-yellow-100
                    border-b-[6px] md:border-b-[8px] border-b-transparent">
                  </div>
                </div>
              </div>

              {/* 転送先の電話 */}
              <div className="flex flex-col items-center">
                <img 
                  src="/images/phone-icon.png" 
                  alt="転送先の電話" 
                  className="w-10 h-10 md:w-14 md:h-14 object-contain mb-1 md:mb-2"
                />
                <div className="text-center">
                  <div className="text-[10px] md:text-xs font-bold mb-0.5">050-XXX-XXX</div>
                  <div className="text-[8px] md:text-[10px] text-gray-500 max-w-[80px] md:max-w-[100px]">
                    発行された番号に転送設定
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};