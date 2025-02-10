import React, { useState, useEffect } from 'react';
import { X, MessageSquare, ChevronUp } from 'lucide-react';
import { ContactForm } from './index';

export const FloatingContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* 固定エリア */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-yellow-50 z-30 transition-transform duration-500 border-t-4 border-yellow-500 ${
          isAnimating ? 'translate-y-full animate-slideUp' : ''
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-[800px] mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    お気軽にお問い合わせください
                  </h3>
                  <p className="text-gray-600 text-lg">
                    資料請求・お見積り・ご相談など、お待ちしております
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-yellow-500 text-white px-8 py-4 rounded-lg shadow-md
                    flex items-center gap-3 justify-center text-lg
                    animate-pulse-slow whitespace-nowrap"
                >
                  <MessageSquare className="w-6 h-6" />
                  <span className="font-bold">お問い合わせ</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* モーダル */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto relative animate-slideDown">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
}; 