import React from 'react';

interface TestimonialCardProps {
  company: string;
  image: string;
  title: string;
  description: string;
  industry: string;
  employees: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  company,
  image,
  title,
  description,
  industry,
  employees
}) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={image}
          alt={`${company}のオフィス`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-sm font-bold text-gray-900 mb-2">{company}</h3>
        <p className="text-lg font-bold mb-4 line-clamp-2">{title}</p>
        <p className="text-sm text-gray-600 mb-4 whitespace-pre-line leading-relaxed line-clamp-6">{description}</p>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span>{industry}</span>
          <span className="w-px h-4 bg-gray-300" aria-hidden="true"></span>
          <span>{employees}</span>
        </div>
      </div>
    </article>
  );
};