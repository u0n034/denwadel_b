import React from 'react';

interface PainPointCardProps {
  text: string;
  solution: string;
}

export const PainPointCard: React.FC<PainPointCardProps> = ({ text, solution }) => {
  return (
    <div className="relative">
      {/* Yellow header */}
      <div className="bg-yellow-500 text-white p-4 rounded-t-lg">
        <p className="text-sm leading-relaxed whitespace-pre-line">{text}</p>
      </div>
      
      {/* White content area with checkmark */}
      <div className="bg-white p-6 rounded-b-lg shadow-md">
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full border-2 border-yellow-500 flex items-center justify-center mr-3">
            <svg 
              className="w-4 h-4 text-yellow-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          <p className="text-yellow-500 font-medium">{solution}</p>
        </div>
      </div>
      
      {/* Speech bubble pointer */}
      <div 
        className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0"
        style={{
          borderLeft: '12px solid transparent',
          borderRight: '12px solid transparent',
          borderTop: '16px solid white'
        }}
      />
    </div>
  );
};