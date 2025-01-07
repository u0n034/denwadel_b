import React, { useState } from 'react';
import { ContactTabs } from './ContactTabs';
import { DocumentForm } from './DocumentForm';
import { InquiryForm } from './InquiryForm';
import { ApplicationForm } from './ApplicationForm';
import { SectionHeader } from '../common/SectionHeader';
import { Phone } from 'lucide-react';

export const ContactForm = () => {
  const [activeTab, setActiveTab] = useState<'document' | 'inquiry' | 'application'>('document');

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader 
          englishTitle="CONTACT"
          japaneseTitle="お問い合わせ"
        />
        
        <div className="max-w-2xl mx-auto">
          <ContactTabs 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
          />
          
          <div className="bg-white p-8 rounded-b-lg shadow-sm">
            {activeTab === 'document' && <DocumentForm />}
            {activeTab === 'inquiry' && <InquiryForm />}
            {activeTab === 'application' && <ApplicationForm />}
          </div>

          <div className="mt-8 bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-center mb-4">お電話でお問い合わせ</h3>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-2xl font-bold text-yellow-500 mb-2">
                <Phone className="w-6 h-6" />
                <a href="tel:0767-58-5858" className="hover:underline">0767-58-5858</a>
              </div>
              <p className="text-gray-600">受付時間：平日 9:00〜19:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};