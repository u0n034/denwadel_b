import { useState, FormEvent } from 'react';
import { useEmailJS } from './useEmailJS';
import { useNavigate } from 'react-router-dom';

interface FormData {
  company?: string;
  nameSei: string;
  nameMei: string;
  phone: string;
  email: string;
  message?: string;
}

interface FormErrors {
  nameSei?: string;
  nameMei?: string;
  phone?: string;
  email?: string;
}

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export const useContactForm = (type: 'document' | 'inquiry' | 'application') => {
  const navigate = useNavigate();
  const { sendEmail, isSending } = useEmailJS();
  const [formData, setFormData] = useState<FormData>({
    company: '',
    nameSei: '',
    nameMei: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nameSei) newErrors.nameSei = '姓を入力してください';
    if (!formData.nameMei) newErrors.nameMei = '名を入力してください';
    if (!formData.phone) {
      newErrors.phone = '電話番号を入力してください';
    } else if (!/^[0-9-]{10,}$/.test(formData.phone)) {
      newErrors.phone = '正しい電話番号を入力してください';
    }
    if (!formData.email) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!isPrivacyAccepted) {
      alert('プライバシーポリシーに同意してください');
      return;
    }

    if (!validateForm()) return;

    try {
      await sendEmail({
        type,
        company: formData.company,
        name: `${formData.nameSei} ${formData.nameMei}`,
        phone: formData.phone,
        email: formData.email,
        message: formData.message
      });
      
      // Redirect to thanks page
      navigate(`/thanks?type=${type}`);
      
      setFormData({
        company: '',
        nameSei: '',
        nameMei: '',
        phone: '',
        email: '',
        message: ''
      });
      setIsPrivacyAccepted(false);
    } catch (error) {
      alert('送信に失敗しました。時間をおいて再度お試しください。');
    }
  };

  return {
    formData,
    setFormData,
    errors,
    isSubmitting: isSending,
    isPrivacyAccepted,
    setIsPrivacyAccepted,
    handleSubmit
  };
};