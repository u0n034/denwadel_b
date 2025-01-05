import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <a href="/" className={`flex items-center gap-2 ${className}`}>
      <span className="text-2xl font-bold">
        デンワデル
      </span>
    </a>
  );
};