import React from 'react';

export const BackgroundDecoration = () => {
  return (
    <div className="absolute inset-0 opacity-40">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-200 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-yellow-100 rounded-full blur-3xl" />
    </div>
  );
};