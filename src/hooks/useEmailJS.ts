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

export const useEmailJS = () => {
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (params: EmailJSParams) => {
    setIsSending(true);
    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        params,
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