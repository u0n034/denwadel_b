import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <button
        className="w-full px-6 py-4 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-yellow-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-yellow-500 flex-shrink-0" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4">
          <div className="pt-2 text-gray-600 border-t border-gray-100">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};