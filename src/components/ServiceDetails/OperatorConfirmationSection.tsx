import React from 'react';

export const OperatorConfirmationSection: React.FC = () => {
  return (
    <div className="bg-yellow-50 rounded-xl p-4 md:p-8 shadow-sm max-w-4xl mx-auto min-h-[360px] flex items-center">
      <div className="grid md:grid-cols-2 gap-8 items-center w-full">
        <div>
          <span className="text-sm font-medium text-yellow-500 mb-2 block">STEP 1</span>
          <h3 className="text-xl font-bold mb-4 text-gray-900">
            オペレーターがご用件を伺います
          </h3>
          <p className="text-gray-600">
            貴社のご希望の名乗りをさせていただきます。
            <br />
            お電話相手の会社名・お名前・ご用件・お電話番号を確認。
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-sm w-full">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              {/* 取引先 */}
              <div className="w-full md:w-2/5">
                <div className="flex flex-col items-center">
                  <img 
                    src="/images/client-icon.png" 
                    alt="取引先" 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain mb-2"
                  />
                  <span className="text-sm text-gray-600 mb-4">取引先</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-gray-100 rounded-lg p-2 text-xs md:text-sm">△△社</div>
                  <div className="bg-gray-100 rounded-lg p-2 text-xs md:text-sm">○○○</div>
                  <div className="bg-gray-100 rounded-lg p-2 text-xs md:text-sm">■■■■</div>
                  <div className="bg-gray-100 rounded-lg p-2 text-xs md:text-sm">090-xxxx-xxxx</div>
                </div>
              </div>

              {/* オペレーター */}
              <div className="w-full md:w-3/5">
                <div className="flex flex-col items-center">
                  <img 
                    src="/images/operator-icon.png" 
                    alt="オペレーター" 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain mb-2"
                  />
                  <span className="text-sm text-gray-600 mb-4">オペレーター</span>
                </div>
                <div className="bg-yellow-50 p-3 md:p-4 rounded-lg text-xs md:text-sm space-y-2">
                  <div>入電時間: 2025-03-xx xx:xx</div>
                  <div>お名前：△△社 ○○○ 様</div>
                  <div>電話番号：090-xxxx-xxxx</div>
                  <div>ご用件：■■■■の件</div>
                  <div>折返し：必要</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};