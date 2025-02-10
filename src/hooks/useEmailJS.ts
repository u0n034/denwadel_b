import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

interface EmailJSParams {
  type: string;
  company?: string;
  name: string;
  phone: string;
  email: string;
  message?: string;
}

const getTypeInJapanese = (type: string): string => {
  switch (type) {
    case 'document':
      return '資料請求';
    case 'inquiry':
      return 'お問い合わせ';
    case 'application':
      return 'お申し込み';
    default:
      return type;
  }
};

export const useEmailJS = () => {
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (params: EmailJSParams) => {
    setIsSending(true);
    try {
      const { type, ...restParams } = params;
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          ...restParams,
          type: getTypeInJapanese(type)
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      return result;
    } catch (error) {
      throw error;
    } finally {
      setIsSending(false);
    }
  };

  return { sendEmail, isSending };
};