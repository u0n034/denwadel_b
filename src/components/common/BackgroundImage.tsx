import React from 'react';

interface BackgroundImageProps {
  src: string;
  alt: string;
  overlay?: React.ReactNode;
  className?: string;
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  alt,
  overlay,
  className = ''
}) => {
  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
      {overlay}
    </div>
  );
};