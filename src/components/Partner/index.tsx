import React from 'react';
import { Content } from './Content';

export const Partner: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden text-white min-h-[600px] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/business-handshake.jpg"
          alt="ビジネスハンドシェイク"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/75" />
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full" />
      
      <Content />
    </section>
  );
};