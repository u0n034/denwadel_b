import React, { ReactNode } from 'react';
import { FileText, MessageSquare, FileCheck } from 'lucide-react';

export type FormType = 'document' | 'inquiry' | 'application';

interface MessageConfig {
  icon: JSX.Element;
  title: string;
  description: string;
  eventName: string;
}

const createIcon = (Icon: typeof FileText | typeof MessageSquare | typeof FileCheck) => (
  React.createElement(Icon, { className: "w-12 h-12 text-yellow-500" })
);

export const messageConfigs: Record<FormType, MessageConfig> = {
  document: {
    icon: createIcon(FileText),
    title: '資料請求ありがとうございます',
    description: '資料は担当者より3営業日以内にメールにてお送りいたします。\n\nご要望に応じて、オンラインでの打ち合わせも承っております。',
    eventName: 'document_request'
  },
  inquiry: {
    icon: createIcon(MessageSquare),
    title: 'お問い合わせありがとうございます',
    description: '担当者より3営業日以内にご連絡させていただきます。\n\nご要望に応じて、オンラインでの打ち合わせも承っております。',
    eventName: 'inquiry_submit'
  },
  application: {
    icon: createIcon(FileCheck),
    title: 'お申し込みありがとうございます',
    description: '担当者より1営業日以内にご連絡させていただきます。\n\nサービス開始に向けた詳細な打ち合わせをさせていただきます。',
    eventName: 'application_submit'
  }
}; 