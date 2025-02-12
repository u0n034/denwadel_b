import React from 'react';
import { FileText, MessageSquare, FileCheck } from 'lucide-react';

type TabType = 'document' | 'inquiry' | 'application';

interface ContactTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const ContactTabs: React.FC<ContactTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: 'document' as const,
      label: '資料請求',
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 'inquiry' as const,
      label: 'お問い合わせ',
      icon: <MessageSquare className="w-5 h-5" />
    },
    {
      id: 'application' as const,
      label: 'お申し込み',
      icon: <FileCheck className="w-5 h-5" />
    }
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-3 rounded-t-lg font-medium transition-colors ${
            activeTab === tab.id
              ? 'bg-white text-yellow-500 shadow-sm'
              : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};