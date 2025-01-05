import React, { useState } from 'react';
import { ContactTabs } from './ContactTabs';
import { DocumentForm } from './DocumentForm';
import { InquiryForm } from './InquiryForm';
import { ApplicationForm } from './ApplicationForm';
import { SectionHeader } from '../common/SectionHeader';

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
        </div>
      </div>
    </section>
  );
};