import React from 'react';
import { FormField } from './FormField';
import { Download } from 'lucide-react';
import { useContactForm } from '../../hooks/useContactForm';

export const DocumentForm = () => {
  const {
    formData,
    setFormData,
    errors,
    isSubmitting,
    isPrivacyAccepted,
    setIsPrivacyAccepted,
    handleSubmit
  } = useContactForm('document');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
        <p className="text-sm text-gray-600">
          下記フォームに必要事項をご入力のうえ、送信してください。
        </p>
      </div>

      <FormField
        label="会社名"
        name="company"
        type="text"
        placeholder="株式会社○○○○○"
        value={formData.company}
        onChange={handleChange}
        disabled={isSubmitting}
        required
        error={errors.company}
      />

      <FormField
        label="お名前"
        name="name"
        type="name-split"
        required
        error={errors.nameSei || errors.nameMei}
        disabled={isSubmitting}
        nameSei={formData.nameSei}
        nameMei={formData.nameMei}
        onChange={handleChange}
      />

      <FormField
        label="電話番号"
        name="phone"
        type="tel"
        placeholder="000-0000-0000"
        required
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
        disabled={isSubmitting}
      />

      <FormField
        label="メールアドレス"
        name="email"
        type="email"
        placeholder="taro.yamada@example.com"
        required
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        disabled={isSubmitting}
      />

      <FormField
        label="ご連絡・ご質問等"
        name="message"
        type="textarea"
        placeholder="こちらにご記入ください"
        value={formData.message}
        onChange={handleChange}
        disabled={isSubmitting}
      />

      <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg">
        <input
          type="checkbox"
          id="privacy"
          checked={isPrivacyAccepted}
          onChange={(e) => setIsPrivacyAccepted(e.target.checked)}
          className="w-5 h-5 rounded border-gray-300 text-yellow-500 focus:ring-yellow-500"
          disabled={isSubmitting}
        />
        <label htmlFor="privacy" className="text-sm text-gray-600">
          <a href="#" className="text-yellow-500 hover:underline">プライバシー・ポリシー</a>
          に同意のうえ、送信してください。
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-yellow-500 text-white py-4 rounded-lg hover:bg-yellow-600 
          transition-colors font-bold flex items-center justify-center gap-2
          disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Download className="w-5 h-5" />
        {isSubmitting ? '送信中...' : '資料請求'}
      </button>
    </form>
  );
};