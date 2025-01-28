import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, MessageSquare, UserPlus } from 'lucide-react';

type FormType = 'document' | 'inquiry' | 'application';

interface MessageConfig {
  title: string;
  description: string;
  icon: React.ReactNode;
  eventName: string;
}

const messageConfigs: Record<FormType, MessageConfig> = {
  document: {
    title: '資料請求ありがとうございます',
    description: '担当者より資料をお送りさせていただきます。\n通常3営業日以内にご登録いただいたメールアドレスへ資料をお送りいたします。',
    icon: <FileText className="w-12 h-12 text-yellow-500" />,
    eventName: 'DocumentRequest'
  },
  inquiry: {
    title: 'お問い合わせありがとうございます',
    description: '担当者より順次ご連絡させていただきます。\n通常3営業日以内にご登録いただいた連絡先へご連絡いたします。',
    icon: <MessageSquare className="w-12 h-12 text-yellow-500" />,
    eventName: 'Contact'
  },
  application: {
    title: 'お申し込みありがとうございます',
    description: '担当者よりサービスの詳細についてご連絡させていただきます。\n通常3営業日以内にご登録いただいた連絡先へご連絡いたします。',
    icon: <UserPlus className="w-12 h-12 text-yellow-500" />,
    eventName: 'Subscribe'
  }
};

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export const Thanks = () => {
  const [searchParams] = useSearchParams();
  const type = (searchParams.get('type') || 'inquiry') as FormType;
  const config = messageConfigs[type];

  useEffect(() => {
    // GTM経由でのイベント発火
    window.dataLayer?.push({
      event: 'conversion',
      conversionType: type,
      eventName: config.eventName
    });
  }, [type, config.eventName]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            {config.icon}
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {config.title}
          </h1>
          
          <p className="text-gray-600 whitespace-pre-line mb-8">
            {config.description}
          </p>

          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 text-yellow-500 hover:text-yellow-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              トップページに戻る
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            ご不明な点がございましたら、
            <a href="tel:0767-58-5858" className="text-yellow-500 hover:text-yellow-600">
              0767-58-5858
            </a>
            までお問い合わせください。
          </p>
        </div>
      </div>
    </div>
  );
}; 