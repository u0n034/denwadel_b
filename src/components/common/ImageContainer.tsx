import React from 'react';

interface ImageContainerProps {
  src: string;
  alt: string;
  height?: string;
  overlay?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

export const ImageContainer: React.FC<ImageContainerProps> = ({
  src,
  alt,
  height = 'h-[400px]',
  overlay,
  children,
  className = ''
}) => {
  return (
    <div className={`relative max-w-4xl mx-auto ${height}`}>
      <div className={`w-full h-full rounded-xl overflow-hidden shadow-lg relative ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
        {overlay}
        {children}
      </div>
    </div>
  );
};