import React from 'react';
import { FileText, MessageSquare, UserPlus } from 'lucide-react';

interface ContactTabsProps {
  activeTab: 'document' | 'inquiry' | 'application';
  onTabChange: (tab: 'document' | 'inquiry' | 'application') => void;
}

export const ContactTabs: React.FC<ContactTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="grid grid-cols-3 gap-1">
      <button
        className={`py-4 text-center rounded-t-lg transition-colors flex items-center justify-center gap-2 ${
          activeTab === 'document'
            ? 'bg-white text-yellow-500 font-bold shadow-sm'
            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
        }`}
        onClick={() => onTabChange('document')}
      >
        <FileText className="w-5 h-5" />
        資料請求
      </button>
      <button
        className={`py-4 text-center rounded-t-lg transition-colors flex items-center justify-center gap-2 ${
          activeTab === 'inquiry'
            ? 'bg-white text-yellow-500 font-bold shadow-sm'
            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
        }`}
        onClick={() => onTabChange('inquiry')}
      >
        <MessageSquare className="w-5 h-5" />
        お問い合わせ
      </button>
      <button
        className={`py-4 text-center rounded-t-lg transition-colors flex items-center justify-center gap-2 ${
          activeTab === 'application'
            ? 'bg-white text-yellow-500 font-bold shadow-sm'
            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
        }`}
        onClick={() => onTabChange('application')}
      >
        <UserPlus className="w-5 h-5" />
        お申し込み
      </button>
    </div>
  );
};